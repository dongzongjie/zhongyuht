<template>
  <div class="app-container">
    <el-card>
      <div slot="header">
        <span>登记证材料</span>
      </div>
      <el-row>
        <el-col :span="6" class="img">
          注册登记证
          <el-image
            style="width: 100px; height: 100px"
            :src="data.registrationUrl"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="6" class="img">
          登记证右上角编号
          <el-image
            style="width: 100px; height: 100px"
            :src="data.registrationNumber"
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
          @click="auditClick(2)"
          >退回</el-button
        >
        <el-button
          type="primary"
          round
          style="float: right; margin-right: 50px"
          @click="auditClick(1)"
          >审核</el-button
        >
      </div>
    </el-card>
  </div>
</template>

<script>
import {
  findUpLicense,
  upLicenseAudit,
  findUpLicenseAudit,
} from '@/api/process/upLicenseAudit'

export default {
  name: 'UpLicenseAuditDetails',
  components: {},
  data() {
    return {
      data: {},
      srcList: [],
    }
  },
  computed: {},
  watch: {
    $route(to, from) {
      //监听路由是否变化
      if (to.path == '/process/upLicenseAuditDetails') {
        this.findUpLicenseData()
      }
    },
  },
  methods: {
    // 获取数据
    async findUpLicenseData() {
      try {
        const { data } = await findUpLicense(this.$route.query.transactionCode)
        this.data = data
        this.srcList.push(data.registrationUrl, data.registrationNumber)
        this.findLicenseAuditHandle()
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
          return upLicenseAudit({
            approvalType,
            transactionCode: this.$route.query.transactionCode,
          })
        })
        .then(() => {
          this.msgSuccess('操作成功')
          this.findLicenseAuditHandle()
        })
        .catch(function () {})
    },
    // 审核回显
    async findLicenseAuditHandle() {
      try {
        const { data } = await findUpLicenseAudit(
          this.$route.query.transactionCode
        )
        // console.log(data)
      } catch (error) {
        // console.log(error)
      }
    },
  },
  created() {
    this.findUpLicenseData()
  },
}
</script>

<style lang='scss' scoped>
.img {
  display: flex;
  flex-direction: column-reverse;
}
</style>
