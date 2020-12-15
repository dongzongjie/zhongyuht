<template>
  <div class="app-container">
    <el-tabs v-model="activeName" :tab-position="tabPosition">
      <el-tab-pane
        label="秒批录入信息表"
        name="first"
        style="padding: 0 50px 50px; font-size: 14px"
      >
        <h4>基本信息</h4>
        <el-row>
          <el-col :span="8">销售团队：{{ userDetails.business.team }}</el-col>
          <el-col :span="8">大区经理：</el-col>
          <el-col :span="8">团队经理：</el-col>
          <el-col :span="8">区域：</el-col>
          <el-col :span="8">门店：</el-col>
        </el-row>
        <h4>订单信息</h4>
        <el-row>
          <el-col :span="8"
            >车辆类型：
            <span v-if="userDetails.business.carInformation == 0">乘用车</span>
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
        <h4>借款人信息</h4>
        <el-row>
          <el-col :span="8">姓名：{{ userDetails.borrower.userName }}</el-col>
          <el-col :span="8"
            >征信授权方式：
            <span v-if="userDetails.borrower.creditPower == 0">电子授权</span>
            <span v-if="userDetails.borrower.creditPower == 1">纸质授权</span>
          </el-col>
          <el-col :span="8">身份证号：{{ userDetails.borrower.idCard }}</el-col>
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
          <el-col :span="8">
            身份证正面
            <el-image
              style="width: 100px; height: 100px"
              :src="userDetails.borrower.obverseAddress"
              :preview-src-list="borrowerSrcList"
            >
            </el-image>
          </el-col>
          <el-col :span="8">
            身份证反面
            <el-image
              style="width: 100px; height: 100px"
              :src="userDetails.borrower.backAddress"
              :preview-src-list="borrowerSrcList"
            >
            </el-image>
          </el-col>
          <el-col :span="8" v-if="userDetails.borrower.creditPower == 1">
            征信授权书
            <el-image
              style="width: 100px; height: 100px"
              :src="userDetails.borrower.powerAddress"
              :preview-src-list="borrowerSrcList"
            >
            </el-image>
          </el-col>
        </el-row>
        <h4 v-if="userDetails.relation.useName">关联人信息</h4>
        <el-row v-if="userDetails.relation.useName">
          <el-col :span="8">姓名：{{ userDetails.relation.userName }}</el-col>
          <el-col :span="8"
            >征信授权方式：
            <span v-if="userDetails.relation.creditPower == 0">电子授权</span>
            <span v-if="userDetails.relation.creditPower == 1">纸质授权</span>
          </el-col>
          <el-col :span="8"
            >与借款人关系：{{ userDetails.relation.peopleShip }}</el-col
          >
          <el-col :span="8">身份证号：{{ userDetails.relation.idCard }}</el-col>
          <el-col :span="8"
            >银行卡号：{{ userDetails.relation.bankCardNo }}</el-col
          >
          <el-col :span="8"
            >常用手机号：{{ userDetails.relation.phoneNumber }}</el-col
          >
          <el-col :span="8"
            >家庭住址：{{ userDetails.relation.familyAddress }}</el-col
          >
          <el-col :span="8"
            >签发机关：{{ userDetails.relation.issueAuthority }}</el-col
          >
          <el-col :span="8"
            >有效起始日：{{ userDetails.relation.startDate }}</el-col
          >
          <el-col :span="8"
            >有效截止日：{{ userDetails.relation.endDate }}</el-col
          >
          <el-col :span="8"
            >单位名称：{{ userDetails.relation.company }}</el-col
          >
          <el-col :span="8"
            >单位地址：{{ userDetails.relation.companyAddress }}</el-col
          >
          <el-col :span="8"
            >个人年收入：{{ userDetails.relation.yearIncome }}</el-col
          >
          <el-col :span="16"
            >业务角色：
            <span v-if="userDetails.relation.businessRole == 0"
              >共同申请人</span
            >
            <span v-if="userDetails.relation.businessRole == 1"
              >共同偿还人</span
            >
            <span v-if="userDetails.relation.businessRole == 2"
              >财产公有人</span
            >
            <span v-if="userDetails.relation.businessRole == 3"
              >担保人关系</span
            >
          </el-col>
          <el-col :span="8">
            身份证正面
            <el-image
              style="width: 100px; height: 100px"
              :src="userDetails.relation.obverseAddress"
              :preview-src-list="relationSrcList"
            >
            </el-image>
          </el-col>
          <el-col :span="8">
            身份证反面
            <el-image
              style="width: 100px; height: 100px"
              :src="userDetails.relation.backAddress"
              :preview-src-list="relationSrcList"
            >
            </el-image>
          </el-col>
          <el-col :span="8" v-if="userDetails.relation.creditPower == 1">
            征信授权书
            <el-image
              style="width: 100px; height: 100px"
              :src="userDetails.relation.powerAddress"
              :preview-src-list="relationSrcList"
            >
            </el-image>
          </el-col>
        </el-row>
        <h4 v-if="userDetails.guarantee.userName">担保人信息</h4>
        <el-row v-if="userDetails.guarantee.userName">
          <el-col :span="8">姓名：{{ userDetails.guarantee.userName }}</el-col>
          <el-col :span="8"
            >征信授权方式：
            <span v-if="userDetails.guarantee.creditPower == 0">电子授权</span>
            <span v-if="userDetails.guarantee.creditPower == 1">纸质授权</span>
          </el-col>
          <el-col :span="8"
            >与借款人关系：{{ userDetails.guarantee.peopleShip }}</el-col
          >
          <el-col :span="8"
            >身份证号：{{ userDetails.guarantee.idCard }}</el-col
          >
          <el-col :span="8"
            >银行卡号：{{ userDetails.guarantee.bankCardNo }}</el-col
          >
          <el-col :span="8"
            >常用手机号：{{ userDetails.guarantee.phoneNumber }}</el-col
          >
          <el-col :span="8"
            >家庭住址：{{ userDetails.guarantee.familyAddress }}</el-col
          >
          <el-col :span="8"
            >签发机关：{{ userDetails.guarantee.issueAuthority }}</el-col
          >
          <el-col :span="8"
            >有效起始日：{{ userDetails.guarantee.startDate }}</el-col
          >
          <el-col :span="8"
            >有效截止日：{{ userDetails.guarantee.endDate }}</el-col
          >
          <el-col :span="8"
            >单位名称：{{ userDetails.guarantee.company }}</el-col
          >
          <el-col :span="8"
            >单位地址：{{ userDetails.guarantee.companyAddress }}</el-col
          >
          <el-col :span="24"
            >个人年收入：{{ userDetails.guarantee.yearIncome }}</el-col
          >
          <el-col :span="8">
            身份证正面
            <el-image
              style="width: 100px; height: 100px"
              :src="userDetails.guarantee.obverseAddress"
              :preview-src-list="guaranteeSrcList"
            >
            </el-image>
          </el-col>
          <el-col :span="8">
            身份证反面
            <el-image
              style="width: 100px; height: 100px"
              :src="userDetails.guarantee.backAddress"
              :preview-src-list="guaranteeSrcList"
            >
            </el-image>
          </el-col>
          <el-col :span="8" v-if="userDetails.guarantee.creditPower == 1">
            征信授权书
            <el-image
              style="width: 100px; height: 100px"
              :src="userDetails.guarantee.powerAddress"
              :preview-src-list="guaranteeSrcList"
            >
            </el-image>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="征信结果" name="second">
        <h4>申请人</h4>
        <el-row
          style="
            font-size: 14px;
            border-bottom: 1px dotted #ccc;
            border-top: 1px solid #ccc;
          "
        >
          <el-col :span="3">姓名：张三</el-col>
          <el-col :span="4">身份证号：410725199911112222</el-col>
          <el-col :span="5">征信查询时间：2020-12-10 12:00</el-col>
          <el-col :span="10"></el-col>
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
            <td>通过</td>
          </tr>
          <tr style="display: block; margin: 20px; text-indent: 2em">
            <td>征信字段：</td>
            <td></td>
          </tr>
          <tr style="display: block; margin: 20px; text-indent: 2em">
            <td>备注信息：</td>
            <td></td>
          </tr>
        </table>
      </el-tab-pane>
      <el-tab-pane label="数据辅正" name="third">待开发</el-tab-pane>
      <el-tab-pane label="详版征信" name="fourth">
        <el-input
          type="textarea"
          :autosize="{ minRows: 3 }"
          placeholder="请输入内容"
          v-model="textarea"
        />
        <el-button type="primary" round style="margin: 20px 10px"
          >确认</el-button
        >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'BusinessDetails',
  components: {},
  data() {
    return {
      tabPosition: 'left', // tab 位置
      activeName: 'first', // Tabs
      textarea: '', // 初审意见
      // 用户详情
      userDetails: {
        business: {}, // 基本信息
        borrower: {}, // 借款人
        relation: {}, // 关联人
        guarantee: {}, // 担保人
      },
      borrowerSrcList: [], // 借款人查看大图数组
      relationSrcList: [], // 关联人查看大图数组
      guaranteeSrcList: [], // 担保人查看大图数组
    }
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    console.log(this.$route)
    console.log(this.$route.query.userId)
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
    display: flex;
    flex-direction: column-reverse;
    margin: 5px 0;
  }
  h4 {
    margin: 5px;
    font-size: 18px;
  }
}
</style>
