<template>
  <div class="app-container">
    <el-tabs tab-position="left" v-model="activeName">
      <el-tab-pane
        label="秒批录入信息表"
        style="padding: 0 50px 50px; font-size: 14px"
        name="first"
      >
        <!-- 基本信息 -->
        <el-card class="box-card">
          <div slot="header">
            <span>基本信息</span>
          </div>
          <el-row>
            <el-col :span="8">销售团队：{{ userDetails.business.team }}</el-col>
            <!-- <el-col :span="8">大区经理：</el-col> -->
            <el-col :span="8"
              >资金方：{{ userDetails.startPage.fundSide }}</el-col
            >
            <el-col :span="8"
              >区域：{{ userDetails.startPage.businessPlace }}</el-col
            >
            <!-- <el-col :span="8">门店：</el-col> -->
            <el-col :span="8" style="color: #999"
              >团队：{{ userDetails.team }}</el-col
            >
            <el-col :span="8" style="color: #999"
              >客户经理：{{ userDetails.jingliName }}</el-col
            >
            <el-col :span="8" style="color: #999"
              >客户经理手机号：{{ userDetails.jingliPhoneNo }}</el-col
            >
          </el-row>
        </el-card>
        <!-- 订单信息 -->
        <el-card class="box-card">
          <div slot="header">
            <span>订单信息</span>
          </div>
          <el-row>
            <el-col :span="8"
              >车辆类型：
              <span v-if="userDetails.business.carInformation == 0"
                >乘用车</span
              >
              <span v-else-if="userDetails.business.carInformation == 1"
                >商用车</span
              >
            </el-col>
            <el-col :span="16"
              >业务类型：
              <span v-if="userDetails.business.carType == 0">新车</span>
              <span v-else-if="userDetails.business.carType == 1">二手车</span>
              <span v-else-if="userDetails.business.carType == 2">新能源</span>
            </el-col>
            <el-col :span="8"
              >意向价格：{{ userDetails.business.intentionPrice }}</el-col
            >
            <el-col :span="8"
              >意向贷款金额：{{ userDetails.business.loanMoney }}</el-col
            >
            <el-col :span="8"
              >意向贷款期限：{{ userDetails.business.repayPeriod }}</el-col
            >
          </el-row>
        </el-card>
        <!-- 借款人信息 -->
        <el-card class="box-card">
          <div slot="header">
            <span>借款人信息</span>
          </div>
          <el-row>
            <el-col :span="8">姓名：{{ userDetails.borrower.userName }}</el-col>
            <el-col :span="8"
              >征信授权方式：
              <span v-if="userDetails.borrower.creditPower == 0">电子授权</span>
              <span v-if="userDetails.borrower.creditPower == 1">纸质授权</span>
            </el-col>
            <el-col :span="8"
              >身份证号：{{ userDetails.borrower.idCard }}</el-col
            >
            <el-col :span="8">性别：{{ borrowerSex }}</el-col>
            <el-col :span="8">民族：{{ userDetails.borrower.nation }}</el-col>
            <el-col :span="8">出生年月：{{ userDetails.borrower.date }}</el-col>
            <el-col :span="8"
              >银行卡号：{{ userDetails.borrower.bankCardNo }}</el-col
            >
            <el-col :span="8"
              >常用手机号：{{ userDetails.borrower.phoneNumber }}</el-col
            >
            <el-col :span="8"
              >家庭住址：{{ userDetails.borrower.familyAddress }}</el-col
            >
            <el-col :span="8"
              >签发机关：{{ userDetails.borrower.issueAuthority }}</el-col
            >
            <el-col :span="8"
              >有效起始日：{{ userDetails.borrower.startDate }}</el-col
            >
            <el-col :span="8"
              >有效截止日：{{ userDetails.borrower.endDate }}</el-col
            >
          </el-row>
          <el-row>
            <el-col :span="8" class="img">
              身份证正面
              <el-image
                style="width: 100px; height: 100px"
                :src="userDetails.borrower.obverseAddress"
                :preview-src-list="borrowerSrcList"
              >
              </el-image>
            </el-col>
            <el-col :span="8" class="img">
              身份证反面
              <el-image
                style="width: 100px; height: 100px"
                :src="userDetails.borrower.backAddress"
                :preview-src-list="borrowerSrcList"
              >
              </el-image>
            </el-col>
            <el-col
              :span="8"
              v-if="userDetails.borrower.creditPower == 1"
              class="img"
            >
              征信授权书
              <el-image
                style="width: 100px; height: 100px"
                :src="userDetails.borrower.powerAddress"
                :preview-src-list="borrowerSrcList"
              >
              </el-image>
            </el-col>
          </el-row>
        </el-card>
        <!-- 关联人信息 -->
        <el-card
          class="box-card"
          :key="'relation-' + index"
          v-for="(item, index) in userDetails.relation"
        >
          <div slot="header">
            <span>关联人信息{{ index + 1 }}</span>
          </div>
          <el-row>
            <el-col :span="8">姓名：{{ item.userName }}</el-col>
            <el-col :span="8"
              >征信授权方式：
              <span v-if="item.creditPower == 0">电子授权</span>
              <span v-if="item.creditPower == 1">纸质授权</span>
            </el-col>
            <el-col :span="8">与借款人关系：{{ item.peopleShip }}</el-col>
            <el-col :span="8">身份证号：{{ item.idCard }}</el-col>
            <el-col :span="8">银行卡号：{{ item.bankCardNo }}</el-col>
            <el-col :span="8">常用手机号：{{ item.phoneNumber }}</el-col>
            <el-col :span="8">家庭住址：{{ item.familyAddress }}</el-col>
            <el-col :span="8">签发机关：{{ item.issueAuthority }}</el-col>
            <el-col :span="8">有效起始日：{{ item.startDate }}</el-col>
            <el-col :span="8">有效截止日：{{ item.endDate }}</el-col>
            <el-col :span="8">单位名称：{{ item.company }}</el-col>
            <el-col :span="8">单位地址：{{ item.companyAddress }}</el-col>
            <el-col :span="8">个人年收入：{{ item.yearIncome }}</el-col>
            <el-col :span="16"
              >业务角色：
              <span v-if="item.businessRole == 0">共同申请人</span>
              <span v-else-if="item.businessRole == 1">共同偿还人</span>
              <span v-else-if="item.businessRole == 2">财产公有人</span>
              <span v-else-if="item.businessRole == 3">担保人关系</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" class="img">
              身份证正面
              <el-image
                style="width: 100px; height: 100px"
                :src="item.obverseAddress"
                :preview-src-list="relationSrcList"
              >
              </el-image>
            </el-col>
            <el-col :span="8" class="img">
              身份证反面
              <el-image
                style="width: 100px; height: 100px"
                :src="item.backAddress"
                :preview-src-list="relationSrcList"
              >
              </el-image>
            </el-col>
            <el-col :span="8" v-if="item.creditPower == 1" class="img">
              征信授权书
              <el-image
                style="width: 100px; height: 100px"
                :src="item.powerAddress"
                :preview-src-list="relationSrcList"
              >
              </el-image>
            </el-col>
          </el-row>
        </el-card>
        <!-- 担保人信息 -->
        <el-card
          class="box-card"
          :key="'guarantee-' + index"
          v-for="(item, index) in userDetails.guarantee"
        >
          <div slot="header">
            <span>担保人信息{{ index + 1 }}</span>
          </div>
          <el-row>
            <el-col :span="8">姓名：{{ item.userName }}</el-col>
            <el-col :span="8"
              >征信授权方式：
              <span v-if="item.creditPower == 0">电子授权</span>
              <span v-if="item.creditPower == 1">纸质授权</span>
            </el-col>
            <el-col :span="8">与借款人关系：{{ item.peopleShip }}</el-col>
            <el-col :span="8">身份证号：{{ item.idCard }}</el-col>
            <el-col :span="8">银行卡号：{{ item.bankCardNo }}</el-col>
            <el-col :span="8">常用手机号：{{ item.phoneNumber }}</el-col>
            <el-col :span="8">家庭住址：{{ item.familyAddress }}</el-col>
            <el-col :span="8">签发机关：{{ item.issueAuthority }}</el-col>
            <el-col :span="8">有效起始日：{{ item.startDate }}</el-col>
            <el-col :span="8">有效截止日：{{ item.endDate }}</el-col>
            <el-col :span="8">单位名称：{{ item.company }}</el-col>
            <el-col :span="8">单位地址：{{ item.companyAddress }}</el-col>
            <el-col :span="24">个人年收入：{{ item.yearIncome }}</el-col>
          </el-row>
          <el-row>
            <el-col :span="8" class="img">
              身份证正面
              <el-image
                style="width: 100px; height: 100px"
                :src="item.obverseAddress"
                :preview-src-list="guaranteeSrcList"
              >
              </el-image>
            </el-col>
            <el-col :span="8" class="img">
              身份证反面
              <el-image
                style="width: 100px; height: 100px"
                :src="item.backAddress"
                :preview-src-list="guaranteeSrcList"
              >
              </el-image>
            </el-col>
            <el-col :span="8" v-if="item.creditPower == 1" class="img">
              征信授权书
              <el-image
                style="width: 100px; height: 100px"
                :src="item.powerAddress"
                :preview-src-list="guaranteeSrcList"
              >
              </el-image>
            </el-col>
          </el-row>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="征信结果">
        <h4>申请人</h4>
        <el-row
          style="
            font-size: 14px;
            border-bottom: 1px dotted #ccc;
            border-top: 1px solid #ccc;
          "
        >
          <el-col :span="3">姓名：{{ userDetails.borrower.userName }}</el-col>
          <el-col :span="4">身份证号：{{ userDetails.borrower.idCard }}</el-col>
          <!-- <el-col :span="10">征信查询时间：2020-12-10 12:00</el-col> -->
          <el-col :span="5"></el-col>
          <el-col :span="2"
            ><el-button
              type="primary"
              round
              size="mini"
              @click="activeName = 'first'"
              >查看征信材料</el-button
            ></el-col
          >
        </el-row>
        <table style="font-size: 14px; color: #55657a">
          <tr style="display: block; margin: 20px">
            <td><span style="color: red">*</span>征信是否通过：</td>
            <td v-if="credit === 1">征信退回</td>
            <td v-else-if="credit === 2">分期退回</td>
            <td v-else-if="credit === 3">拒绝受理</td>
            <td v-else-if="credit === 4">授信通过</td>
            <td v-else-if="credit === 5">等待押品补录</td>
            <td v-else-if="credit === 6">分期材料补录</td>
            <td v-else-if="credit === 7">放款结果通知</td>
            <td v-else-if="credit === 9">取消订单</td>
            <td v-else-if="credit === 10">行方签署完合同通知</td>
            <td v-else-if="credit === 11">上送分期信息超期提醒</td>
            <td v-else-if="credit === 12">押品补录超期提醒</td>
            <td v-else-if="credit === 17">放款失败通知</td>
            <td v-else-if="credit === 19">客户合同签署完成通知</td>
            <td v-else-if="credit === 20">机构请款通知</td>
            <td v-else></td>
          </tr>
          <tr style="display: block; margin: 20px; text-indent: 2em">
            <td>征信字段：</td>
            <td>{{ credit || '获取失败' }}</td>
          </tr>
          <tr style="display: block; margin: 20px; text-indent: 2em">
            <td>备注信息：</td>
            <td></td>
          </tr>
        </table>
      </el-tab-pane>
      <el-tab-pane label="详版征信">
        <el-input
          type="textarea"
          :autosize="{ minRows: 3 }"
          placeholder="请输入内容"
          v-model="detailsCredit"
        />
        <!-- <p
          v-text="detailsCredit"
          v-if="isDisabled"
          style="font-size: 14px; color: #666"
        ></p> -->
        <h5 style="font-size: 14px; margin: 10px 0" v-if="inputbeizhu">
          内部意见
        </h5>
        <p style="font-size: 14px; text-indent: 2em" v-if="inputbeizhu">
          {{ inputbeizhu }}
        </p>
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
            @click="dilogClick(1)"
            >通过</el-button
          >
          <el-button
            type="danger"
            round
            style="margin: 20px 10px"
            @click="dilogClick(2)"
            >拒绝</el-button
          >
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      title="内部意见"
      :visible.sync="dialogRemark"
      width="30%"
      :before-close="handleClose"
    >
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内部意见"
        v-model="beizhu"
      >
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogRemark = false">取 消</el-button>
        <el-button type="primary" @click="addCreidClick">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  getBusiness,
  findDetailsCredit,
  addDetailsCredit,
  getSelectState,
  approve,
  findApprove,
} from '@/api/process/business'

export default {
  name: 'BusinessDetails',
  components: {},
  data() {
    return {
      activeName: 'first',
      credit: '', // 征信结果
      detailsCredit: '', // 详版征信
      isDisabled: false, // 禁用按钮
      // 用户详情
      userDetails: {
        business: {}, // 基本信息
        borrower: {}, // 借款人
        relation: {}, // 关联人
        guarantee: {}, // 担保人
        startPage: {},
      },
      borrowerSrcList: [], // 借款人查看大图数组
      relationSrcList: [], // 关联人查看大图数组
      guaranteeSrcList: [], // 担保人查看大图数组
      dialogRemark: false,
      beizhu: '',
      approvalType: '',
      inputbeizhu: '',
      approvalType2: '',
    }
  },
  computed: {
    borrowerSex: function () {
      let str = this.userDetails.borrower.idCard || ''
      let sexStr = str.charAt(str.length - 2) % 2
      if (sexStr === 0) {
        return '女'
      } else if (sexStr === 1) {
        return '男'
      } else {
        return '未知'
      }
    },
  },
  watch: {
    $route(to, from) {
      //监听路由是否变化
      if (to.path == '/process/businessDetails') {
        this.userDetails = {
          business: {}, // 基本信息
          borrower: {}, // 借款人
          relation: {}, // 关联人
          guarantee: {}, // 担保人
          startPage: {},
        }
        this.getBusinesss()
      }
    },
  },
  methods: {
    // 获取信息
    async getBusinesss() {
      try {
        const { data } = await getBusiness(this.$route.query.transactionCode)
        // console.log(data)
        // this.userDetails.business = data.zyjrBusiness
        // this.userDetails.borrower = data.zyjrBorrower
        // this.userDetails.relation = data.zyjrRelation
        // this.userDetails.guarantee = data.zyjrGuarantee
        this.userDetails = data
        if (data.borrower) {
          this.borrowerSrcList = []
          this.borrowerSrcList.push(
            data.borrower.obverseAddress,
            data.borrower.backAddress
          )
          if (data.borrower.powerAddress) {
            this.borrowerSrcList.push(data.borrower.powerAddress)
          }
        }
        if (data.relation) {
          this.relationSrcList = []
          this.relationSrcList.push(
            data.relation.obverseAddress,
            data.relation.backAddress
          )
          if (data.relation.powerAddress) {
            this.borrowerSrcList.push(data.relation.powerAddress)
          }
        }
        if (data.guarantee) {
          this.guaranteeSrcList = []
          this.guaranteeSrcList.push(
            data.guarantee.obverseAddress,
            data.guarantee.backAddress
          )
          if (data.guarantee.powerAddress) {
            this.borrowerSrcList.push(data.guarantee.powerAddress)
          }
        }
        this.credit = ''
        this.detailsCredit = ''
        this.getDetailsCredit()
        this.getApprove()
        this.findSelectState()
      } catch (error) {}
    },
    // 获取征信结果
    async findSelectState() {
      try {
        const { data } = await getSelectState(this.$route.query.transactionCode)
        this.credit = data
      } catch (error) {}
    },
    // 获取详版征信
    async getDetailsCredit() {
      try {
        const { data } = await findDetailsCredit(
          this.$route.query.transactionCode
        )
        if (data) {
          this.isDisabled = true
          this.detailsCredit = data.details
        } else {
          this.isDisabled = false
        }
      } catch (error) {}
    },
    // 确认按钮
    dilogClick(approvalType) {
      if (this.detailsCredit.trim()) {
        this.approvalType2 = approvalType
        this.dialogRemark = true
      } else {
        this.msgError('请填写详版征信')
      }
    },
    // 提交按钮
    addCreidClick() {
      this.$confirm('确认提交?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          return approve({
            transactionCode: this.$route.query.transactionCode,
            approvalType: this.approvalType2,
            beizhu: this.beizhu,
          })
        })
        .then(() => {
          this.addCreid()
        })
        .then(() => {
          this.dialogRemark = false
          this.beizhu = ''
          this.msgSuccess('操作成功')
          // this.getDetailsCredit()
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
            path: '/process/business',
            name: 'Business',
          })
        })
        .catch(function () {})
    },
    // 填写详版征信
    async addCreid() {
      try {
        await addDetailsCredit({
          transactionCode: this.$route.query.transactionCode,
          details: this.detailsCredit,
        })
      } catch (error) {}
    },
    // 处理结果回显
    async getApprove() {
      try {
        const { data } = await findApprove({
          transactionCode: this.$route.query.transactionCode,
        })
        this.approvalType = data.approvalType
        this.inputbeizhu = data.beizhu
      } catch (error) {}
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
    this.getBusinesss()
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
  .box-card {
    margin-bottom: 10px;
  }
}
/deep/.el-image-viewer__next,
/deep/.el-image-viewer__prev {
  display: none;
}
</style>
