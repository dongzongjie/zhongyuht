<template>
  <div class="app-container">
    <!-- 分期信息 -->
    <el-card style="margin-bottom: 10px; font-size: 14px">
      <div slot="header">
        <span>分期信息</span>
      </div>
      <el-row>
        <el-col :span="4"
          >姓名：{{ creditExtensionData.basic.userName }}</el-col
        >
        <el-col :span="4"
          >身份证号：{{ creditExtensionData.basic.idCard }}</el-col
        >
        <el-col :span="4"
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
        <el-col :span="4"
          >经办行：{{ creditExtensionData.basic.fundSide }}</el-col
        >
        <el-col :span="4"
          >银行卡号：{{ creditExtensionData.basic.bankCardNo }}</el-col
        >
        <el-col :span="4"
          >实际销售价：{{ creditExtensionData.basic.actualPrice }}</el-col
        >
        <el-col :span="4"
          >车辆贷款金额：{{ creditExtensionData.basic.loanAmount }}</el-col
        >
        <el-col :span="4"
          >还款期限：{{ creditExtensionData.basic.repaymentTerm }}</el-col
        >
        <el-col :span="4"
          >利率换挡：{{ creditExtensionData.basic.interestRate }}</el-col
        >
        <el-col :span="4"
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
            :preview-src-list="srcList1"
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
            :preview-src-list="srcList1"
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
            :preview-src-list="srcList1"
          >
          </el-image>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card">
      <div slot="header" ref="ref10">
        <span>图片信息</span>
      </div>
      <span>车辆</span>
      <el-row>
        <el-col :span="4" class="img">
          左前45度
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails[283]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          右后45度
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails[290]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          里程表
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails[285]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          发动机舱左侧
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails[433]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          发动机舱右侧
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails[432]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          车辆铭牌
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails[286]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          VIN码
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails[287]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          前排座椅
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails[284]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          后排座椅
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails[288]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          备胎槽全景
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails[434]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          后备箱开启
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails[435]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          中控台
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails[289]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
      <span>登记证</span>
      <el-row>
        <el-col :span="4" class="img">
          机动车登记证1-2
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails[282]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          机动车登记证3-4
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails[241]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
      <span>补充资料</span>
      <el-row>
        <el-col :span="4" class="img">
          流水
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails.detail"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          房产
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails.house"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          销售和车合影
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails.xshchy"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          补充1
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails.supply"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
      <span>主贷人</span>
      <el-row>
        <el-col :span="4" class="img">
          主贷人身份证（头像面）
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails.borrower.obverseAddress"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          主贷人身份证（国徽面）
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails.borrower.backAddress"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          主贷人驾驶证复联
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails.jszzy"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="firstDetails.borrower.powerAddress">
          征信授权书
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails.borrower.powerAddress"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
      <span>配偶</span>
      <el-row>
        <el-col :span="4" class="img">
          配偶身份证
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails.posfz"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          征信授权书
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails.pozxsqs"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          手持身份证+授权书
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails.poscsfzsqs"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
      <span>担保人</span>
      <el-row>
        <el-col :span="4" class="img">
          担保人身份证
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails.dbrsfz"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          征信授权书
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails.dbrzxsqs"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          手持身份证+授权书
          <el-image
            style="width: 100px; height: 100px"
            :src="firstDetails.dbrscsfzsqs"
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
      <div v-else-if="approvalType === 2">
        <el-button type="warning" round style="margin: 20px 10px" disabled
          >已退回</el-button
        >
        <el-button
          type="primary"
          round
          style="margin: 20px 10px"
          @click="againHandle"
          >重新审批</el-button
        >
      </div>
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
  creditAgainHandle,
} from '@/api/process/creditExtension'
import { getFirstDetails } from '@/api/process/firstTrial'

export default {
  name: 'CreditExtensionDetails',
  components: {},
  data() {
    return {
      srcList: [],
      srcList1: [],
      textarea: '',
      approvalType: '',
      approvalId: '',
      creditExtensionData: {
        basic: {},
        visit: {},
        instalments: {},
        image: {},
      },
      firstDetails: {
        borrower: {},
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
          this.srcList1.push(item.filePath)
        })
        data.instalments.forEach((item) => {
          this.srcList1.push(item.filePath)
        })
        data.image.forEach((item) => {
          this.srcList1.push(item.filePath)
        })
        this.findCreditHandle()
        this.getFirstData()
      } catch (error) {
        console.log(error)
      }
    },
    // 获取图片
    async getFirstData() {
      try {
        const { data } = await getFirstDetails(
          this.$route.query.userId,
          this.$route.query.transactionCode
        )
        for (const key in data) {
          if (!data[key]) {
            data[key] = {}
          }
        }
        this.firstDetails = data
        this.srcList = data.pic
        this.srcList.push(
          data.borrower.obverseAddress,
          data.borrower.backAddress,
          data.borrower.powerAddress,
          data.applicant.cardAddress,
          data.applicant.backAddress
        )
        if (data.peopleGuarantee) {
          this.srcList.push(
            data.peopleGuarantee.cardAddress,
            data.peopleGuarantee.backAddress
          )
        }
      } catch (error) {}
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
        this.textarea = null
        this.approvalType = null
        this.approvalId = null
        if (data) {
          this.textarea = data.advise
          this.approvalType = data.approvalType
          this.approvalId = data.id
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 重新操作
    async againHandle() {
      try {
        await creditAgainHandle(this.approvalId)
        this.findCreditHandle()
      } catch (error) {}
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
/deep/.el-image-viewer__next,
/deep/.el-image-viewer__prev {
  display: none;
}
h4 {
  margin: 5px;
  font-size: 18px;
}
.el-row {
  padding: 0 30px;
}
</style>
