<template>
  <div class="app-container">
    <el-card class="box-card">
      <el-form :model="form" label-width="150px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="抵押权人">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="身份证号码">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="身份证证明">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="登记机关">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="机动车登记编号">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="抵押登记日期">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="解除抵押日期">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card>
      <div slot="header">
        <span>登记证材料</span>
      </div>
      <el-row>
        <el-col :span="6" class="img">
          注册登记证
          <el-image
            style="width: 100px; height: 100px"
            :src="form.registrationUrl"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="6" class="img">
          登记证右上角编号
          <el-image
            style="width: 100px; height: 100px"
            :src="form.registrationNumber"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card" style="margin-top: 10px">
      <div style="overflow: hidden">
        <el-button
          type="warning"
          round
          style="float: right; margin-right: 100px"
          >退回</el-button
        >
        <el-button type="primary" round style="float: right; margin-right: 50px"
          >提交</el-button
        >
      </div>
    </el-card>
  </div>
</template>

<script>
import {
  findMortgage,
  mortgageAudit,
  findMortgageAudit,
} from '@/api/process/mortgageAudit'

export default {
  name: 'MortgageAuditDetails',
  components: {},
  data() {
    return {
      form: {},
      srcList: [],
    }
  },
  computed: {},
  watch: {
    $route(to, from) {
      //监听路由是否变化
      if (to.path == '/mortgage/mortgageAuditDetails') {
      }
    },
  },
  methods: {
    // 获取数据
    async findMortgageData() {
      try {
        const { data } = await findMortgage(this.$route.query.transactionCode)
        this.data = data
        this.srcList.push(data.registrationUrl, data.registrationNumber)
        this.findMortgageHandle()
      } catch (error) {}
    },
    // 审核
    async auditClick(approvalType) {
      this.$confirm('确认操作?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          return mortgageAudit({
            approvalType,
            transactionCode: this.$route.query.transactionCode,
          })
        })
        .then(() => {
          this.msgSuccess('操作成功')
          this.findMortgageHandle()
        })
        .catch(function () {})
    },
    // 审核回显
    async findMortgageHandle() {
      try {
        const { data } = await findMortgageAudit(
          this.$route.query.transactionCode
        )
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
  },
  created() {},
}
</script>

<style lang='scss' scoped>
.img {
  display: flex;
  flex-direction: column-reverse;
}
</style>
