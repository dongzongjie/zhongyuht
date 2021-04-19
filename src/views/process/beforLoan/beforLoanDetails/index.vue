<template>
  <div class="app-container" style="font-size: 14px; padding: 20px">
    <el-card>
      <div slot="header">
        <span>贷款信息</span>
      </div>
      <el-row>
        <el-col :span="6"
          >总贷款额(元)：{{ creditExtensionData.left.zdke }}</el-col
        >
        <el-col :span="6"
          >申请月供(元)：{{ creditExtensionData.left.sqyg }}</el-col
        >
        <el-col :span="6"
          >申请首付(元)：{{ creditExtensionData.left.sqsf }}</el-col
        >
        <el-col :span="6"
          >车辆售价/元：{{ creditExtensionData.left.actualPrice }}</el-col
        >
        <el-col :span="6"
          >车贷金额：{{ creditExtensionData.left.loanAmount }}</el-col
        >
        <el-col :span="6"
          >还款期限/月：{{ creditExtensionData.left.repaymentTerm }}</el-col
        >
        <el-col :span="6"
          >资金方：{{ creditExtensionData.left.fundSide }}</el-col
        >
        <el-col :span="6"
          >产品类型：{{ creditExtensionData.left.productType }}</el-col
        >
        <el-col :span="6"
          >贷款产品：{{ creditExtensionData.left.loanProduct }}</el-col
        >
        <el-col :span="6"
          >贷款费率：{{ creditExtensionData.left.dkfl }}%</el-col
        >
        <el-col :span="6"
          >平台费率：{{ creditExtensionData.left.interestRate }}%</el-col
        >
        <el-col :span="6"
          >GPS费用：{{ creditExtensionData.left.gpsCost }}</el-col
        >
        <el-col :span="6"
          >续保押金(元)：{{ creditExtensionData.left.deposit }}</el-col
        >
        <el-col :span="6"
          >服务费(元)：{{ creditExtensionData.left.fuwufei }}</el-col
        >
      </el-row>
    </el-card>
    <el-card>
      <div slot="header">
        <span>保险信息</span>
      </div>
      <el-row>
        <el-col :span="6"
          >保单类型：{{ creditExtensionData.right.policyType }}</el-col
        >
        <el-col :span="6"
          >保险公司：{{ creditExtensionData.right.insuranceCompany }}</el-col
        >
        <el-col :span="6"
          >保险金额(元)：{{ creditExtensionData.right.insuranceAmount }}</el-col
        >
        <el-col :span="6"
          >保单号：{{ creditExtensionData.right.policyCode }}</el-col
        >
      </el-row>
    </el-card>
    <!-- <el-card>
      <div slot="header">
        <span>抵押信息</span>
      </div>
      <el-row>
        <el-col :span="6"
          >抵押省/市：{{ creditExtensionData.right.mortgageCity }}</el-col
        >
        <el-col :span="6"
          >抵押渠道：{{ creditExtensionData.right.mortgageChannel }}</el-col
        >
      </el-row>
    </el-card> -->
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
      </el-row>
      <div style="margin: 10px 0; font-size: 16px" v-if="photo.icbc">
        工商银行补充资料
      </div>
      <el-row>
        <el-col
          :span="4"
          class="img"
          v-for="item in photo.icbc"
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
      <div style="margin: 10px 0; font-size: 16px">先放后抵补充资料</div>
      <el-row>
        <el-col :span="4" class="img">
          过户凭证
          <el-image
            style="width: 100px; height: 100px"
            :src="photo.ghpz"
            :preview-src-list="srcList1"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          行驶证
          <el-image
            style="width: 100px; height: 100px"
            :src="photo.xsz"
            :preview-src-list="srcList1"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          新保险单
          <el-image
            style="width: 100px; height: 100px"
            :src="photo.xbxd"
            :preview-src-list="srcList1"
          >
          </el-image>
        </el-col>
      </el-row>
      <div style="margin: 10px 0; font-size: 16px" v-if="photo.dj12">
        车辆登记证(过户后)
      </div>
      <el-row>
        <el-col :span="4" class="img" v-if="photo.dj12">
          登记证信息栏1-2
          <el-image
            style="width: 100px; height: 100px"
            :src="photo.dj12"
            :preview-src-list="srcList1"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="photo.dj34">
          登记证信息栏3-4
          <el-image
            style="width: 100px; height: 100px"
            :src="photo.dj34"
            :preview-src-list="srcList1"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="photo.dj56">
          登记证信息栏5-6
          <el-image
            style="width: 100px; height: 100px"
            :src="photo.dj56"
            :preview-src-list="srcList1"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="photo.dj78">
          登记证信息栏7-8
          <el-image
            style="width: 100px; height: 100px"
            :src="photo.dj78"
            :preview-src-list="srcList1"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="photo.dj910">
          登记证信息栏9-10
          <el-image
            style="width: 100px; height: 100px"
            :src="photo.dj910"
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
      <h5 style="font-size: 14px; margin: 10px 0" v-if="zhongshenbeizhu">
        终审内部意见
      </h5>
      <p style="font-size: 14px; text-indent: 2em" v-if="zhongshenbeizhu">
        {{ zhongshenbeizhu }}
      </p>
      <h5 style="font-size: 14px; margin: 10px 0" v-if="shouxinbeizhu">
        授信内部意见
      </h5>
      <p style="font-size: 14px; text-indent: 2em" v-if="shouxinbeizhu">
        {{ shouxinbeizhu }}
      </p>
      <el-input
        type="textarea"
        :autosize="{ minRows: 3 }"
        placeholder="请输入意见"
        v-model="textarea"
      />
      <h5 style="font-size: 14px; margin: 10px 0" v-if="inputbeizhu">
        内部意见
      </h5>
      <p style="font-size: 14px; text-indent: 2em" v-if="inputbeizhu">
        {{ inputbeizhu }}
      </p>
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
    <el-dialog
      title="内部详情"
      :visible.sync="dialogRemark"
      width="30%"
      :before-close="handleClose"
    >
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内部详情"
        v-model="beizhu"
      >
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogRemark = false">取 消</el-button>
        <el-button type="primary" @click="beforLoanHandlePost2"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  getBeforLoanDetails,
  beforLoanHandle,
  findBeforLoanHandle,
} from '@/api/process/beforLoan'
import { getFinalTrialHandle } from '@/api/process/finalTrial'
import {
  getCreditHandle,
  creditExtensionDetails,
} from '@/api/process/creditExtension'

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
      photo: {
        carpic: [],
        icbc: [],
        photoFile: [],
      },
      photo2: {},
      bazaar: '',
      carname: '',
      bank: {},
      dialogRemark: false,
      beizhu: '',
      approvalType2: '',
      zhongshenbeizhu: '',
      shouxinbeizhu: '',
      inputbeizhu: '',
      creditExtensionData: {
        left: {},
        right: {},
      },
    }
  },
  computed: {},
  watch: {
    $route(to, from) {
      //监听路由是否变化
      if (to.path == '/process/beforLoanDetails') {
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
        // console.log(data)
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
        if (data.pic) {
          data.pic.forEach((item) => {
            this.GPSdata[item.fileName] = item.filePath
            this.srcList.push(item.filePath)
          })
        }
        if (data.photo.photoFile) {
          data.photo.photoFile.forEach((item) => {
            this.srcList1.push(item.filePath)
          })
        }
        if (data.photo.icbc) {
          data.photo.icbc.forEach((item) => {
            this.srcList1.push(item.filePath)
          })
        }
        if (data.photo.carpic) {
          data.photo.carpic.forEach((item) => {
            this.srcList1.push(item.filePath)
            data.photo[item.fileName] = item.filePath
          })
        }
        if (data.photo2.photoFile) {
          data.photo2.photoFile.forEach((item) => {
            this.srcList1.push(item.filePath)
          })
        }
        this.getCreditExtensionData()
        this.getBeforLoanHandle()
        this.findFinalHandle()
        this.findCreditHandle()
      } catch (error) {}
    },
    // 贷前处理结果
    async beforLoanHandlePost(state) {
      if (this.textarea.trim()) {
        this.state = state
        this.dialogRemark = true
      } else {
        this.msgError('请输入意见')
      }
    },
    // 贷前处理结果
    async beforLoanHandlePost2() {
      const that = this
      this.$confirm('确认操作?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          return beforLoanHandle({
            state: that.state,
            opinion: that.textarea,
            transactionCode: that.$route.query.transactionCode,
            beizhu: that.beizhu,
          })
        })
        .then(() => {
          this.dialogRemark = false
          this.beizhu = ''
          this.msgSuccess('操作成功')
          // this.getBeforLoanHandle()
          // 返回上级路由并关闭当前路由
          this.$store.state.tagsView.visitedViews.splice(
            this.$store.state.tagsView.visitedViews.findIndex(
              (item) => item.path === this.$route.path
            ),
            1
          )
          // this.$router.push(
          //   this.$store.state.tagsView.visitedViews[
          //     this.$store.state.tagsView.visitedViews.length - 1
          //   ].path
          // )
          this.$router.push({
            path: '/process/beforLoan',
            name: 'BeforLoan',
          })
        })
        .catch(function () {})
    },
    // 贷前结果回显
    async getBeforLoanHandle() {
      try {
        const { data } = await findBeforLoanHandle(
          this.$route.query.transactionCode
        )
        if (data) {
          this.state = data.state
          this.inputbeizhu = data.beizhu
          if (data.opinion) {
            this.textarea = data.opinion
          }
        }
      } catch (error) {}
    },
    // 终审结果回显
    async findFinalHandle() {
      try {
        const { data } = await getFinalTrialHandle(
          this.$route.query.transactionCode
        )
        if (data) {
          this.zhongshenbeizhu = data.beizhu
        }
      } catch (error) {}
    },
    // 授信处理结果回显
    async findCreditHandle() {
      try {
        const { data } = await getCreditHandle(
          this.$route.query.transactionCode
        )
        // console.log(data)
        if (data) {
          this.shouxinzhu = data.beizhu
        }
      } catch (error) {
        // console.log(error)
      }
    },
    // 获取授信详情
    async getCreditExtensionData() {
      try {
        const { data } = await creditExtensionDetails(
          this.$route.query.transactionCode
        )
        if (!data.left) {
          data.left = {}
        }
        if (!data.right) {
          data.right = {}
        }
        this.creditExtensionData = data
      } catch (error) {
        // console.log(error)
      }
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done()
        })
        .catch((_) => {})
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
