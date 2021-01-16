<template>
  <div class="app-container">
    <!-- 分期信息 -->
    <el-card style="margin-bottom: 10px; font-size: 14px">
      <div slot="header">
        <span>分期信息</span>
      </div>
      <el-row>
        <el-col :span="6"
          >姓名：{{ creditExtensionData.basic.userName }}</el-col
        >
        <el-col :span="6"
          >身份证号：{{ creditExtensionData.basic.idCard }}</el-col
        >
        <el-col :span="6"
          >联系方式：{{ creditExtensionData.basic.phoneNumber }}</el-col
        >
      </el-row>
    </el-card>
    <!-- 贷款信息 -->
    <el-card style="margin-bottom: 10px; font-size: 14px">
      <div slot="header">
        <span>贷款信息</span>
      </div>
      <el-row>
        <el-col :span="6"
          >经办行：{{ creditExtensionData.basic.fundSide }}</el-col
        >
        <el-col :span="6"
          >银行卡号：{{ creditExtensionData.basic.bankCardNo }}</el-col
        >
        <el-col :span="6"
          >实际销售价：{{ creditExtensionData.basic.actualPrice }}</el-col
        >
        <el-col :span="6"
          >车辆贷款金额：{{ creditExtensionData.basic.loanAmount }}</el-col
        >
        <el-col :span="6"
          >还款期限：{{ creditExtensionData.basic.repaymentTerm }}</el-col
        >
        <el-col :span="6"
          >利率换挡：{{ creditExtensionData.basic.interestRate }}</el-col
        >
        <el-col :span="6"
          >续保押金：{{ creditExtensionData.basic.deposit }}</el-col
        >
      </el-row>
    </el-card>
    <!-- 图片信息 -->
    <el-card style="margin-bottom: 10px">
      <div slot="header">
        <span>图片信息</span>
      </div>
      <el-row>
        <el-col
          :span="4"
          class="img"
          v-for="item in creditExtensionData.visit"
          :key="item.fileId"
        >
          {{ item.fileName }}
          <el-image
            style="width: 100px; height: 100px"
            :src="item.filePath"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col
          :span="4"
          class="img"
          v-for="item in creditExtensionData.instalments"
          :key="item.fileId"
        >
          {{ item.fileName }}
          <el-image
            style="width: 100px; height: 100px"
            :src="item.filePath"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col
          :span="4"
          class="img"
          v-for="item in creditExtensionData.image"
          :key="item.fileId"
        >
          {{ item.fileName }}
          <el-image
            style="width: 100px; height: 100px"
            :src="item.filePath"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
    </el-card>
    <!-- 意见 -->
    <el-card>
      <div slot="header">
        <span>意见</span>
      </div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 3 }"
        placeholder="请输入终审意见"
        v-model="textarea"
      />
      <el-button
        v-if="approvalType === 1"
        type="primary"
        round
        style="margin: 20px 10px"
        disabled
        >已通过</el-button
      >
      <el-button
        v-else-if="approvalType === 2"
        type="warning"
        round
        style="margin: 20px 10px"
        disabled
        >已退回</el-button
      >
      <el-button
        v-else-if="approvalType === 3"
        type="danger"
        round
        style="margin: 20px 10px"
        disabled
        >已拒绝</el-button
      >
      <div v-else>
        <el-button
          type="primary"
          round
          style="margin: 20px 10px"
          @click="creditExtensionHandle(1)"
          >通过</el-button
        >
        <el-button
          type="warning"
          round
          style="margin: 20px 10px"
          @click="creditExtensionHandle(2)"
          >退回</el-button
        >
        <el-button
          type="danger"
          round
          style="margin: 20px 10px"
          @click="creditExtensionHandle(3)"
          >拒绝</el-button
        >
      </div>
    </el-card>
  </div>
</template>

<script>
import {
  creditHandle,
  getCreditHandle,
  creditExtensionDetails,
} from '@/api/process/creditExtension'

export default {
  name: 'CreditExtensionDetails',
  components: {},
  data() {
    return {
      srcList: [],
      textarea: '',
      approvalType: '',
      creditExtensionData: {
        basic: {},
        visit: {},
        instalments: {},
        image: {},
      },
    }
  },
  computed: {},
  watch: {
    $route(to, from) {
      //监听路由是否变化
      if (to.path == '/process/creditExtensionDetails') {
        this.getCreditExtensionData()
      }
    },
  },
  methods: {
    // 获取授信详情
    async getCreditExtensionData() {
      try {
        const { data } = await creditExtensionDetails(
          this.$route.query.transactionCode
        )
        console.log(data)
        this.creditExtensionData = data
        data.visit.forEach((item) => {
          this.srcList.push(item.filePath)
        })
        data.instalments.forEach((item) => {
          this.srcList.push(item.filePath)
        })
        data.image.forEach((item) => {
          this.srcList.push(item.filePath)
        })
        this.findCreditHandle()
      } catch (error) {
        console.log(error)
      }
    },
    // 处理结果
    creditExtensionHandle(approvalType) {
      if (this.textarea.trim()) {
        const that = this
        this.$confirm('确认操作?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            return creditHandle({
              advise: that.textarea,
              approvalType,
              transactionCode: that.$route.query.transactionCode,
              userId: Number(that.$route.query.userId),
            })
          })
          .then(() => {
            this.msgSuccess('操作成功')
            this.findCreditHandle()
          })
          .catch(function () {})
      } else {
        this.msgError('请输入意见')
      }
    },
    // 处理结果回显
    async findCreditHandle() {
      try {
        const { data } = await getCreditHandle(
          this.$route.query.transactionCode
        )
        console.log(data)
        this.textarea = data.advise
        this.approvalType = data.approvalType
      } catch (error) {
        console.log(error)
      }
    },
  },
  created() {
    this.getCreditExtensionData()
  },
}
</script>

<style lang='scss' scoped>
.img {
  display: flex;
  flex-direction: column-reverse;
  font-size: 14px;
  margin: 5px 0;
}
.el-col {
  margin: 5px 0;
}
</style>
