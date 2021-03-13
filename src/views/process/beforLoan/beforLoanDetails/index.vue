<template>
  <div class="app-container" style="font-size: 14px; padding: 20px">
    <el-card>
      <div slot="header">
        <span>还款卡</span>
      </div>
      <el-row>
        <el-col :span="8">银行卡号：{{ bank.cardNo }}</el-col>
        <el-col :span="8" class="img">
          <el-image
            style="width: 100px; height: 100px"
            :src="bank.pic"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <div slot="header">
        <span>车商信息</span>
      </div>
      <el-row>
        <el-col :span="8">市场：{{ bazaar }}</el-col>
        <el-col :span="8">门店：{{ carname }}</el-col>
        <!-- <el-col :span="8">审批类型：{{ Account.shenpitype }}</el-col>
        <el-col :span="8">产品类型：{{ Account.chanpintype }}</el-col>
        <el-col :span="8">贷款产品：{{ Account.daikuanchanpin }}</el-col> -->
      </el-row>
    </el-card>
    <el-card>
      <div slot="header">
        <span>车商收款账户设置</span>
      </div>
      <el-row>
        <el-col :span="8">收款人姓名：{{ fangkuan.accountName }}</el-col>
        <el-col :span="8">收款借记卡卡号：{{ fangkuan.accountNumber }}</el-col>
        <el-col :span="8">账户类型：{{ fangkuan.accountType }}</el-col>
        <el-col :span="8">收款开户银行：{{ fangkuan.accountLicence }}</el-col>
        <el-col :span="8">收款开户支行：{{ fangkuan.accountSubBranch }}</el-col>
        <el-col :span="8"
          >收款开户银行所在省市：{{ fangkuan.accountProvinc }}</el-col
        >
        <el-col :span="8"
          >收款开户银行所在区县：{{ fangkuan.accountCity }}</el-col
        >
      </el-row>
    </el-card>
    <el-card>
      <div slot="header">
        <span>返点方案</span>
      </div>
      <el-tabs>
        <el-tab-pane label="全额分配" v-if="type === '全额分配'">
          <el-row>
            <el-col :span="8">收款人姓名：{{ Account.accountName }}</el-col>
            <el-col :span="8"
              >收款借记卡卡号：{{ Account.accountNumber }}</el-col
            >
            <el-col :span="8">账户类型：{{ Account.accountType }}</el-col>
            <el-col :span="8"
              >收款开户银行：{{ Account.accountLicence }}</el-col
            >
            <el-col :span="8"
              >收款开户支行：{{ Account.accountSubBranch }}</el-col
            >
            <el-col :span="8"
              >收款开户银行所在省市：{{ Account.accountProvinc }}</el-col
            >
            <el-col :span="8"
              >收款开户银行所在区县：{{ Account.accountCity }}</el-col
            >
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="单账户全额" v-if="type === '单账户全额'">
          <el-row>
            <el-col :span="8">收款人姓名：{{ Account.accountName }}</el-col>
            <el-col :span="8"
              >收款借记卡卡号：{{ Account.accountNumber }}</el-col
            >
            <el-col :span="8">账户类型：{{ Account.accountType }}</el-col>
            <el-col :span="8"
              >收款开户银行：{{ Account.accountLicence }}</el-col
            >
            <el-col :span="8"
              >收款开户支行：{{ Account.accountSubBranch }}</el-col
            >
            <el-col :span="8"
              >收款开户银行所在省市：{{ Account.accountProvinc }}</el-col
            >
            <el-col :span="8"
              >收款开户银行所在区县：{{ Account.accountCity }}</el-col
            >
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="双账户定额" v-if="type === '双账户定额'">
          <el-row>
            <el-col :span="8">收款人姓名1：{{ Account.accountName }}</el-col>
            <el-col :span="8"
              >收款借记卡卡号：{{ Account.accountNumber }}</el-col
            >
            <el-col :span="8">账户类型：{{ Account.accountType }}</el-col>
            <el-col :span="8"
              >收款开户银行：{{ Account.accountLicence }}</el-col
            >
            <el-col :span="8"
              >收款开户支行：{{ Account.accountSubBranch }}</el-col
            >
            <el-col :span="8"
              >收款开户银行所在省市：{{ Account.accountProvinc }}</el-col
            >
            <el-col :span="8"
              >收款开户银行所在区县：{{ Account.accountCity }}</el-col
            >
          </el-row>
          <br />
          <el-row>
            <el-col :span="8">收款人姓名2：{{ Account2.accountName }}</el-col>
            <el-col :span="8"
              >收款借记卡卡号：{{ Account2.accountNumber }}</el-col
            >
            <el-col :span="8">账户类型：{{ Account2.accountType }}</el-col>
            <el-col :span="8"
              >收款开户银行：{{ Account2.accountLicence }}</el-col
            >
            <el-col :span="8"
              >收款开户支行：{{ Account2.accountSubBranch }}</el-col
            >
            <el-col :span="8"
              >收款开户银行所在省市：{{ Account.accountProvinc }}</el-col
            >
            <el-col :span="8"
              >收款开户银行所在区县：{{ Account.accountCity }}</el-col
            >
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <!-- <el-card>
      <div slot="header">
        <span>保险信息</span>
      </div>
      <el-row>
        <el-col :span="24"
          >保险公司：{{ insuranceData.insuranceCompany }}</el-col
        >
        <el-col :span="24">保险金额：{{ insuranceData.money }}</el-col>
      </el-row>
    </el-card> -->
    <el-card>
      <div slot="header">
        <span>GPS</span>
      </div>
      <el-row>
        <el-col :span="8">GPS厂商：卓硕</el-col>
        <el-col :span="8">GPS类型：{{ GPSdata.linkman }}</el-col>
        <el-col :span="8">GPS编号：{{ GPSdata.bianhao }}</el-col>
        <!-- <el-col :span="8">选择联系人/经销商：{{ GPSdata.linkman }}</el-col> -->
        <el-col :span="8">安装位置：{{ GPSdata.location }}</el-col>
        <el-col :span="8">安装地址：{{ GPSdata.address }}</el-col>
        <el-col :span="8">安装人员：{{ GPSdata.personnel }}</el-col>
        <!-- <el-col :span="8">备注留言：{{ GPSdata.remark }}</el-col> -->
      </el-row>
      <el-row>
        <!-- <el-col :span="8" class="img">
          身份证正面+VIN码
          <el-image
            style="width: 100px; height: 100px"
            :src="GPSdata.zmvin"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="8" class="img">
          身份证正面+VIN码
          <el-image
            style="width: 100px; height: 100px"
            :src="GPSdata.fmvin"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col> -->
        <el-col :span="8" class="img">
          车辆铭牌+GPS编号
          <el-image
            style="width: 100px; height: 100px"
            :src="GPSdata.clmp"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="8" class="img">
          安装人员手持身份证与车合影
          <el-image
            style="width: 100px; height: 100px"
            :src="GPSdata.azryychy"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="8" class="img">
          GPS安装位置
          <el-image
            style="width: 100px; height: 100px"
            :src="GPSdata.gpswz"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <!-- <el-col :span="8" class="img">
          细节安装照
          <el-image
            style="width: 100px; height: 100px"
            :src="GPSdata.xjazz"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col> -->
        <!-- <el-col :span="8" class="img">
          安装人员与车合影
          <el-image
            style="width: 100px; height: 100px"
            :src="GPSdata.xsychy"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col> -->
        <el-col :span="8" class="img" v-if="GPSdata.supplyFile">
          补充资料
          <el-image
            style="width: 100px; height: 100px"
            :src="GPSdata.supplyFile"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
      <!-- <h4>补充资料</h4>
      <el-row>
        <el-col :span="8" class="img">
          GPS安装单
          <el-image
            style="width: 100px; height: 100px"
            :src="GPSdata.supplyFile"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="8" class="img">
          车辆铭牌
          <el-image
            style="width: 100px; height: 100px"
            :src="GPSdata.clmp"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="8" class="img">
          整车照片
          <el-image
            style="width: 100px; height: 100px"
            :src="GPSdata.zczp"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row> -->
    </el-card>
    <!-- 影像资料 -->
    <el-card style="margin-bottom: 10px">
      <div slot="header">
        <span>影像资料</span>
      </div>
      <el-row>
        <el-col
          :span="4"
          class="img"
          v-for="item in photo.photoFile"
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
          v-for="item in photo2.photoFile"
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
    <!-- <el-card>
      <div slot="header">
        <span>电子合同</span>
      </div>
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
    </el-card> -->
    <el-card>
      <div slot="header">
        <span>意见</span>
      </div>
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
    </el-card>
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
      srcList1: [], // 图片数组
      fangkuan: {}, // 账户数据
      Account: {}, // 账户数据
      Account2: {}, // 账户数据
      GPSdata: {}, // GPS数据
      insuranceData: {}, // 保险数据
      state: '', // 贷前处理结果
      type: '', // 返点类型
      photo: {},
      photo2: {},
      bazaar: '',
      carname: '',
      bank: {},
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
        const { data } = await getBeforLoanDetails(
          this.$route.query.transactionCode
        )
        console.log(data)
        this.fangkuan = data.fangkuan
        this.Account = data.Account
        this.Account2 = data.Account2
        this.GPSdata = data.Gps
        this.insuranceData = data.Insurance
        this.photo = data.photo
        this.photo2 = data.photo2
        this.type = data.type
        this.bazaar = data.bazaar
        this.carname = data.carname
        this.bank = data.bank
        this.srcList.push(data.bank.pic)
        data.pic.forEach((item) => {
          this.GPSdata[item.fileName] = item.filePath
          this.srcList.push(item.filePath)
        })
        data.photo.photoFile.forEach((item) => {
          this.srcList1.push(item.filePath)
        })
        data.photo2.photoFile.forEach((item) => {
          this.srcList1.push(item.filePath)
        })
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
          if (data.opinion) {
            this.textarea = data.opinion
          }
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
.el-card {
  margin-bottom: 10px;
}
/deep/.el-image-viewer__next,
/deep/.el-image-viewer__prev {
  display: none;
}
</style>
