<template>
  <div class="app-container">
    <el-tabs tab-position="left" style="font-size: 14px">
      <el-tab-pane label="车商收款" style="padding: 0 50px 50px">
        <h4>车商收款账户设置</h4>
        <el-row>
          <el-col :span="8">车商收款账户：</el-col>
          <el-col :span="8">收款人姓名：</el-col>
          <el-col :span="8">收款账户证件号码：</el-col>
          <el-col :span="8">收款借记卡卡号：</el-col>
          <el-col :span="8">账户类型：</el-col>
          <el-col :span="8">首款开户银行：</el-col>
          <el-col :span="8">收款开户支行：</el-col>
        </el-row>
        <h4>返点方案</h4>
        <el-tabs>
          <el-tab-pane label="全额分配">
            <el-row>
              <el-col :span="8">选择放款账户：</el-col>
              <el-col :span="8">收款人姓名：</el-col>
              <el-col :span="8">收款账户证件号码：</el-col>
              <el-col :span="8">收款借记卡卡号：</el-col>
              <el-col :span="8">账户类型：</el-col>
              <el-col :span="8">首款开户银行：</el-col>
              <el-col :span="8">收款开户支行：</el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="单账户分配">
            <el-row>
              <el-col :span="8">选择放款账户：</el-col>
              <el-col :span="8">收款人姓名：</el-col>
              <el-col :span="8">收款账户证件号码：</el-col>
              <el-col :span="8">收款借记卡卡号：</el-col>
              <el-col :span="8">账户类型：</el-col>
              <el-col :span="8">首款开户银行：</el-col>
              <el-col :span="8">收款开户支行：</el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="双账户定额">
            <el-row>
              <el-col :span="8">选择放款账户一：</el-col>
              <el-col :span="8">收款人姓名：</el-col>
              <el-col :span="8">收款账户证件号码：</el-col>
              <el-col :span="8">收款借记卡卡号：</el-col>
              <el-col :span="8">账户类型：</el-col>
              <el-col :span="8">首款开户银行：</el-col>
              <el-col :span="8">收款开户支行：</el-col>
            </el-row>
            <br />
            <el-row>
              <el-col :span="8">选择放款账户二：</el-col>
              <el-col :span="8">收款人姓名：</el-col>
              <el-col :span="8">收款账户证件号码：</el-col>
              <el-col :span="8">收款借记卡卡号：</el-col>
              <el-col :span="8">账户类型：</el-col>
              <el-col :span="8">首款开户银行：</el-col>
              <el-col :span="8">收款开户支行：</el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="保险信息">
        <el-row>
          <el-col :span="24"
            >保险公司：{{ insuranceData.insuranceCompany }}</el-col
          >
          <el-col :span="24">保单金额：{{ insuranceData.money }}</el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="GPS">
        <el-row>
          <el-col :span="8"
            >GPS安装选择：<span v-if="GPSdata.industryWired === '1'"
              >工商中元华兴有线</span
            ><span v-else-if="GPSdata.industryWireless === '1'"
              >工商中元华兴无线</span
            ><span v-else-if="GPSdata.zhengzhouWired === '1'"
              >郑州银行卫正元有线</span
            ><span v-else-if="GPSdata.zhengzhouWireless === '1'"
              >郑州银行卫正元无线</span
            ></el-col
          >
          <el-col :span="8">选择联系人/经销商：{{ GPSdata.linkman }}</el-col>
          <el-col :span="8">安装位置：{{ GPSdata.location }}</el-col>
          <el-col :span="8">安装地址：{{ GPSdata.address }}</el-col>
          <el-col :span="8">安装人员：{{ GPSdata.personnel }}</el-col>
          <el-col :span="8">备注留言：{{ GPSdata.remark }}</el-col>
        </el-row>
        <el-row>
          <el-col :span="8" class="img">
            GPS编号
            <el-image
              style="width: 100px; height: 100px"
              src=""
              :preview-src-list="srcList"
            >
            </el-image>
          </el-col>
          <el-col :span="8" class="img">
            安装远景
            <el-image
              style="width: 100px; height: 100px"
              src=""
              :preview-src-list="srcList"
            >
            </el-image>
          </el-col>
          <el-col :span="8" class="img">
            安装近景
            <el-image
              style="width: 100px; height: 100px"
              src=""
              :preview-src-list="srcList"
            >
            </el-image>
          </el-col>
        </el-row>
        <h4>补充资料</h4>
        <el-row>
          <el-col :span="8" class="img">
            根据数据进行for循环
            <el-image
              style="width: 100px; height: 100px"
              src=""
              :preview-src-list="srcList"
            >
            </el-image>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="电子合同">
        <el-row>
          <el-col :span="8" class="img">
            根据数据进行for循环
            <el-image
              style="width: 100px; height: 100px"
              src=""
              :preview-src-list="srcList"
            >
            </el-image>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="意见">
        <el-input
          type="textarea"
          :autosize="{ minRows: 3 }"
          placeholder="请输入初审意见"
          v-model="textarea"
        />
        <el-button
          v-if="state === '1'"
          type="primary"
          round
          style="margin: 20px 10px"
          disabled
          >已通过</el-button
        >
        <el-button
          v-else-if="state === '2'"
          type="warning"
          round
          style="margin: 20px 10px"
          disabled
          >已退回</el-button
        >
        <el-button
          v-else-if="state === '3'"
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
            @click="beforLoanHandlePost('1')"
            >通过</el-button
          >
          <el-button
            type="warning"
            round
            style="margin: 20px 10px"
            @click="beforLoanHandlePost('2')"
            >退回</el-button
          >
          <el-button
            type="danger"
            round
            style="margin: 20px 10px"
            @click="beforLoanHandlePost('3')"
            >拒绝</el-button
          >
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {
  getBeforLoanDetails,
  beforLoanHandle,
  findBeforLoanHandle,
} from '@/api/process/beforLoan'

export default {
  name: 'BeforLoanDetails',
  components: {},
  data() {
    return {
      textarea: '', // 意见
      srcList: [], // 图片数组
      Account: [], // 账户数据
      GPSdata: {}, // GPS数据
      insuranceData: {}, // 保险数据
      state: '', // 贷前处理结果
    }
  },
  computed: {},
  watch: {
    $route(to, from) {
      //监听路由是否变化
      if (to.path == '/process/firstTrialDetails') {
        this.getBeforLoanData()
      }
    },
  },
  methods: {
    // 获取贷前详情
    async getBeforLoanData() {
      try {
        const { data } = await getBeforLoanDetails(this.$route.query.id)
        console.log(data)
        this.Account = data.Account
        this.GPSdata = data.Gps
        this.insuranceData = data.Insurance
        this.getBeforLoanHandle()
      } catch (error) {}
    },
    // 贷前处理结果
    async beforLoanHandlePost(state) {
      if (this.textarea.trim()) {
        const that = this
        this.$confirm('确认操作?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            return beforLoanHandle({
              state: state,
              opinion: that.textarea,
              transactionCode: that.$route.query.transactionCode,
            })
          })
          .then(() => {
            this.msgSuccess('操作成功')
            this.getBeforLoanHandle()
          })
          .catch(function () {})
      } else {
        this.msgError('请输入意见')
      }
    },
    // 贷前结果回显
    async getBeforLoanHandle() {
      try {
        const { data } = await findBeforLoanHandle(
          this.$route.query.transactionCode
        )
        if (data) {
          this.state = data.state
          this.textarea = data.opinion
        }
      } catch (error) {}
    },
  },
  created() {
    this.getBeforLoanData()
  },
}
</script>

<style lang='scss' scoped>
.app-container {
  padding: 20px;
}
.el-tabs {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  .el-row {
    padding: 0 30px;
  }
  .el-col {
    margin: 5px 0;
  }
  .img {
    display: flex;
    flex-direction: column-reverse;
  }
  h4 {
    margin: 5px;
    font-size: 18px;
  }
}
</style>
