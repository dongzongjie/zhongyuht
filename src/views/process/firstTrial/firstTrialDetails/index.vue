<template>
  <div class="app-container">
    <div class="btn-box" v-if="activeName === 'first'">
      <button @click="goAssignBlock('ref0', 50)">基本信息</button>
      <button @click="goAssignBlock('ref1', 50)">订单信息</button>
      <button @click="goAssignBlock('ref2', 50)">借款人信息</button>
      <button @click="goAssignBlock('ref3', 50)">配偶信息</button>
      <button @click="goAssignBlock('ref4', 50)">关联人信息</button>
      <button @click="goAssignBlock('ref5', 50)">担保人信息</button>
      <button @click="goAssignBlock('ref6', 50)">经销商信息</button>
      <button @click="goAssignBlock('ref7', 50)">车辆信息</button>
      <button @click="goAssignBlock('ref8', 50)">贷款信息</button>
      <button @click="goAssignBlock('ref9', 50)">紧急联系人</button>
      <button @click="goAssignBlock('ref10', 50)">图片信息</button>
    </div>
    <el-tabs v-model="activeName" :tab-position="tabPosition">
      <el-tab-pane
        label="秒批录入信息表"
        name="first"
        style="padding: 0 50px 50px; font-size: 14px"
      >
        <div ref="ref0">
          <h4>基本信息</h4>
          <el-row>
            <el-col :span="8">销售团队：{{ userDetails.business.team }}</el-col>
            <el-col :span="8">大区经理：</el-col>
            <el-col :span="8">团队经理：</el-col>
          </el-row>
        </div>
        <div ref="ref1">
          <h4>订单信息</h4>
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
        </div>
        <div ref="ref2">
          <h4>借款人信息</h4>
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
            <el-col :span="8">住房所有权：</el-col>
            <el-col :span="8">从事行业：</el-col>
            <el-col :span="8">工作地址：</el-col>
            <el-col :span="8">工作单位性质：</el-col>
            <el-col :span="8">职位：</el-col>
            <el-col :span="8">现居住地址：</el-col>
            <el-col :span="8">工作单位规模：</el-col>
            <el-col :span="8">现居住时间/年：</el-col>
            <el-col :span="8">工作单位名称：</el-col>
            <el-col :span="8">现单位工作年限：</el-col>
            <el-col :span="8">税后收入：</el-col>
            <el-col :span="8">学历：</el-col>
            <el-col :span="8">婚姻状况：</el-col>
            <el-col :span="8">本人是否有驾驶证：</el-col>
            <el-col :span="8">驾驶员与主贷人关系：</el-col>
            <el-col :span="24">驾照类型：</el-col>
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
        </div>
        <div ref="ref3">
          <h4>配偶信息</h4>
          <el-row>
            <el-col :span="8">姓名：</el-col>
            <el-col :span="8">身份证号：</el-col>
            <el-col :span="8">户籍地址：</el-col>
            <el-col :span="8">手机号：</el-col>
          </el-row>
        </div>
        <div ref="ref4">
          <h4>关联人信息</h4>
          <el-row>
            <el-col :span="8">姓名：{{ userDetails.relation.userName }}</el-col>
            <el-col :span="8"
              >征信授权方式：
              <span v-if="userDetails.relation.creditPower == 0">电子授权</span>
              <span v-if="userDetails.relation.creditPower == 1">纸质授权</span>
            </el-col>
            <el-col :span="8"
              >与借款人关系：{{ userDetails.relation.peopleShip }}</el-col
            >
            <el-col :span="8"
              >身份证号：{{ userDetails.relation.idCard }}</el-col
            >
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
        </div>
        <div ref="ref5">
          <h4>担保人信息</h4>
          <el-row>
            <el-col :span="8"
              >姓名：{{ userDetails.guarantee.userName }}</el-col
            >
            <el-col :span="8"
              >征信授权方式：
              <span v-if="userDetails.guarantee.creditPower == 0"
                >电子授权</span
              >
              <span v-if="userDetails.guarantee.creditPower == 1"
                >纸质授权</span
              >
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
            <el-col :span="8">担保人户籍省/市：</el-col>
            <el-col :span="16">担保人现居住省/市：</el-col>
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
        </div>
        <div ref="ref6">
          <h4>经销商信息</h4>
          <el-row>
            <el-col :span="8">经销商门店：</el-col>
            <el-col :span="8">车牌类型：</el-col>
            <el-col :span="8">市场：</el-col>
            <el-col :span="8">门店：</el-col>
            <el-col :span="8">运营：</el-col>
          </el-row>
        </div>
        <div ref="ref7">
          <h4>车辆信息</h4>
          <el-row>
            <el-col :span="8">车辆：</el-col>
            <el-col :span="8">VIN码：</el-col>
            <el-col :span="8">品牌：</el-col>
            <el-col :span="8">车系：</el-col>
            <el-col :span="8">车款年限：</el-col>
            <el-col :span="8">排量/吨位：</el-col>
            <el-col :span="8">挡位：</el-col>
            <el-col :span="8">款式：</el-col>
            <el-col :span="8">发动机号：</el-col>
            <el-col :span="8">燃料类型：</el-col>
            <el-col :span="8">二手车公里数：</el-col>
            <el-col :span="8">首次登记日期：</el-col>
            <el-col :span="8">卖方姓名：</el-col>
            <el-col :span="8">卖方身份证号：</el-col>
            <el-col :span="8">卖方车牌号：</el-col>
          </el-row>
        </div>
        <div ref="ref8">
          <h4>贷款信息</h4>
          <el-row>
            <el-col :span="8">是否提供房产：</el-col>
            <el-col :span="8">实际销售价：</el-col>
            <el-col :span="8">车辆贷款金额：</el-col>
            <el-col :span="8">利率换挡：</el-col>
            <el-col :span="8">GPS挡位：</el-col>
            <el-col :span="8">续保押金：</el-col>
          </el-row>
        </div>
        <div ref="ref9">
          <h4>紧急联系人</h4>
          <el-row>
            <el-col :span="8">紧急联系人1姓名：</el-col>
            <el-col :span="8">紧急联系人1与主贷人关系：</el-col>
            <el-col :span="8">紧急联系人1手机号：</el-col>
            <el-col :span="8">紧急联系人2姓名：</el-col>
            <el-col :span="8">紧急联系人2与主贷人关系：</el-col>
            <el-col :span="8">紧急联系人2手机号：</el-col>
          </el-row>
        </div>
        <div ref="ref10">
          <h4>图片信息</h4>
          <h4 style="font-size: 16px">车辆</h4>
          <el-row>
            <el-col :span="6">
              前
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6">
              后
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6">
              左
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6">
              右
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6">
              发动机铭牌
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6">
              里程碑
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6">
              B柱铭牌
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6">
              备胎箱地板
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6">
              人车合照
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <h4 style="font-size: 16px">登记证</h4>
          <el-row>
            <el-col :span="6">
              机动车登记证1
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6">
              机动车登记证2
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6">
              机动车登记证3
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6">
              机动车登记证4
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6">
              机动车登记证5
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <h4 style="font-size: 16px">补充资料</h4>
          <el-row>
            <el-col :span="6">
              手持确认书与车合影
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6">
              车辆交接单
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6">
              流水
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6">
              房产
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <h4 style="font-size: 16px">主贷人</h4>
          <el-row>
            <el-col :span="6">
              主贷人身份证（头像面）
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6">
              主贷人身份证（国徽面）
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6">
              主贷人驾驶证复联
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6">
              征信授权书
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <h4 style="font-size: 16px">配偶</h4>
          <el-row>
            <el-col :span="6">
              配偶身份证（头像面）
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6">
              配偶身份证（国徽面）
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6">
              征信授权书
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <h4 style="font-size: 16px">担保人</h4>
          <el-row>
            <el-col :span="6">
              担保人身份证（头像面）
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6">
              担保人身份证（国徽面）
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6">
              征信授权书
              <el-image
                style="width: 100px; height: 100px"
                src=""
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
        </div>
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
        <h4>详版征信</h4>
      </el-tab-pane>
      <el-tab-pane label="数据辅正" name="third">待开发</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'FirstTrialDetails',
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
      srcList: [], // 图片数组
    }
  },
  computed: {},
  watch: {},
  methods: {
    // 页面滚动
    goAssignBlock(el, speed) {
      let _this = this
      let windowH = window.innerHeight //浏览器窗口高度
      let h = this.$refs[el].offsetHeight //模块内容高度
      let t = this.$refs[el].offsetTop //模块相对于内容顶部的距离
      let top = t - (windowH - h) / 2 //需要滚动到的位置，若改为 t 则滚动到模块顶部位置，此处是滚动到模块相对于窗口垂直居中的位置
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop //滚动条距离顶部高度
      let currentTop = scrollTop //默认滚动位置为当前滚动条位置，若改为0，则每次都会从顶部滚动到指定位置
      let requestId
      //采用requestAnimationFrame，平滑动画
      function step() {
        //判断让滚动条向上滚还是向下滚
        if (scrollTop < top) {
          if (currentTop <= top) {
            //   window.scrollTo(x,y) y为上下滚动位置
            window.scrollTo(0, currentTop)
            requestId = window.requestAnimationFrame(step)
          } else {
            window.cancelAnimationFrame(requestId)
          }
          //向下滚动
          currentTop += speed
        } else {
          if (top <= currentTop) {
            //注：此处 - speed 是解决居中时存在的问题，可自行设置或去掉
            window.scrollTo(0, currentTop - speed)
            requestId = window.requestAnimationFrame(step)
          } else {
            window.cancelAnimationFrame(requestId)
          }
          //向上滚动
          currentTop -= speed
        }
      }
      window.requestAnimationFrame(step)
    },
  },
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
.btn-box {
  background: #ccc;
  position: fixed;
  right: 20px;
  z-index: 2;
}
.btn-box button {
  display: block;
  width: 100px;
  height: 50px;
  background: #ccc;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  border: none;
}
.btn-box button:hover {
  background: rgb(48, 65, 86);
}
.btn-box button:focus {
  outline: 0;
}
</style>
