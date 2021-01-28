<template>
  <div class="app-container">
    <div class="btn-box" v-if="activeName === 'first'">
      <button @click="goAssignBlock('ref0', 50)">基本信息</button>
      <button @click="goAssignBlock('ref1', 50)">订单信息</button>
      <button @click="goAssignBlock('ref2', 50)">借款人信息</button>
      <button @click="goAssignBlock('ref3', 50)">配偶信息</button>
      <button
        @click="goAssignBlock('ref4', 50)"
        v-if="firstDetails.debtService"
      >
        共偿人信息
      </button>
      <button
        @click="goAssignBlock('ref5', 50)"
        v-if="firstDetails.peopleGuarantee || firstDetails.companyGuarantee"
      >
        担保信息
      </button>
      <button @click="goAssignBlock('ref6', 50)">经销商信息</button>
      <button @click="goAssignBlock('ref7', 50)">车辆信息</button>
      <button @click="goAssignBlock('ref8', 50)">贷款信息</button>
      <button @click="goAssignBlock('ref9', 50)">紧急联系人</button>
      <button @click="goAssignBlock('ref10', 50)">图片信息</button>
    </div>
    <el-tabs v-model="activeName" tab-position="left">
      <el-tab-pane
        label="信息详情"
        name="first"
        style="padding: 0 50px 50px; font-size: 14px"
      >
        <!-- 基本信息 -->
        <el-card class="box-card">
          <div slot="header" ref="ref0">
            <span>基本信息</span>
          </div>
          <el-row>
            <el-col :span="8">销售团队：{{ userDetails.business.team }}</el-col>
            <el-col :span="8">大区经理：</el-col>
            <el-col :span="8">团队经理：</el-col>
            <el-col :span="8">区域：</el-col>
            <el-col :span="8">门店：</el-col>
            <el-col :span="8" style="color: #999"
              >真实业务发生地：{{ userDetails.business.realAddress }}</el-col
            >
          </el-row>
        </el-card>
        <!-- 订单信息 -->
        <el-card class="box-card">
          <div slot="header" ref="ref1">
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
          </el-row>
        </el-card>
        <!-- 借款人信息 -->
        <el-card class="box-card">
          <div slot="header" ref="ref2">
            <span>借款人信息</span>
          </div>
          <el-row>
            <el-col :span="8"
              >姓名：{{ firstDetails.borrower.userName }}</el-col
            >
            <el-col :span="8"
              >征信授权方式：
              <span v-if="firstDetails.borrower.creditPower == 0"
                >电子授权</span
              >
              <span v-if="firstDetails.borrower.creditPower == 1"
                >纸质授权</span
              >
            </el-col>
            <el-col :span="8"
              >身份证号：{{ firstDetails.borrower.idCard }}</el-col
            >
            <el-col :span="8"
              >银行卡号：{{ firstDetails.borrower.bankCardNo }}</el-col
            >
            <el-col :span="8"
              >联系电话：{{ firstDetails.borrower.phoneNumber }}</el-col
            >
            <el-col :span="8"
              >家庭住址：{{ firstDetails.borrower.familyAddress }}</el-col
            >
            <el-col :span="8"
              >签发机关：{{ firstDetails.borrower.issueAuthority }}</el-col
            >
            <el-col :span="8"
              >有效起始日：{{ firstDetails.borrower.startDate }}</el-col
            >
            <el-col :span="8"
              >有效截止日：{{ firstDetails.borrower.endDate }}</el-col
            >
            <el-col :span="8"
              >从事行业：{{ firstDetails.applicant.industry }}</el-col
            >
            <el-col :span="8"
              >工作地址：{{ firstDetails.applicant.workAddress }}</el-col
            >
            <el-col :span="8"
              >公司电话：{{ firstDetails.applicant.unitPhone }}</el-col
            >
            <el-col :span="8"
              >工作单位性质：{{ firstDetails.applicant.unitNature }}</el-col
            >
            <!-- <el-col :span="8">工作单位规模：{{firstDetails.applicant.householdNature}}</el-col> -->
            <el-col :span="8"
              >工作单位名称：{{ firstDetails.applicant.unitName }}</el-col
            >
            <!-- <el-col :span="8">现单位工作年限：{{firstDetails.applicant.householdNature}}</el-col> -->
            <el-col :span="8"
              >职位：{{ firstDetails.applicant.position }}</el-col
            >
            <el-col :span="8"
              >户口性质：{{ firstDetails.applicant.householdNature }}</el-col
            >
            <el-col :span="8"
              >现居住地址：{{ firstDetails.applicant.liveAddress }}</el-col
            >
            <el-col :span="8"
              >现居住时间/年：{{ firstDetails.applicant.liveTime }}</el-col
            >
            <el-col :span="8"
              >住房所有权：{{ firstDetails.applicant.housePower }}</el-col
            >
            <el-col :span="8"
              >税后月收入：{{ firstDetails.applicant.monthlyIncome }}</el-col
            >
            <el-col :span="8"
              >学历：{{ firstDetails.applicant.education }}</el-col
            >
            <el-col :span="8"
              >婚姻状况：{{ firstDetails.applicant.marriage }}</el-col
            >
            <el-col :span="8"
              >本人是否有驾驶证：
              <span v-if="firstDetails.applicant.isLicense === 1">是</span>
              <span v-else>否</span></el-col
            >
            <el-col :span="8"
              >驾驶员与主贷人关系：{{
                firstDetails.applicant.driverShip
              }}</el-col
            >
            <el-col :span="24"
              >驾照类型：{{ firstDetails.applicant.licenseType }}</el-col
            >
            <el-col :span="8" class="img">
              身份证正面
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.borrower.obverseAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="8" class="img">
              身份证反面
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.borrower.backAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
        </el-card>
        <!-- 配偶信息 -->
        <el-card class="box-card">
          <div slot="header" ref="ref3">
            <span>配偶信息</span>
          </div>
          <el-row>
            <el-col :span="8"
              >姓名：{{ firstDetails.applicant.spouseName }}</el-col
            >
            <el-col :span="8"
              >身份证号：{{ firstDetails.applicant.idNumber }}</el-col
            >
            <el-col :span="8"
              >户籍地址：{{ firstDetails.applicant.permanentAddress }}</el-col
            >
            <el-col :span="8"
              >手机号：{{ firstDetails.applicant.phoneNo }}</el-col
            >
            <el-col :span="8"
              >学历：{{ firstDetails.applicant.spouseEducation }}</el-col
            >
            <el-col :span="8"
              >工作单位名称：{{ firstDetails.applicant.spouseUnitName }}</el-col
            >
            <el-col :span="8"
              >工作地址：{{ firstDetails.applicant.spouseWorkPlace }}</el-col
            >
            <el-col :span="8"
              >工作电话：{{ firstDetails.applicant.spouseWorkPhone }}</el-col
            >
            <el-col :span="8"
              >税后月收入：{{
                firstDetails.applicant.spouseMonthlyIncome
              }}</el-col
            >
            <el-col :span="8" class="img">
              身份证正面
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.applicant.cardAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="8" class="img">
              身份证反面
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.applicant.backAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
        </el-card>
        <!-- 共偿人信息 -->
        <el-card class="box-card" v-if="firstDetails.debtService.debtName">
          <div slot="header" ref="ref4">
            <span>共偿人信息</span>
          </div>
          <el-row>
            <el-col :span="8"
              >姓名：{{ firstDetails.debtService.debtName }}</el-col
            >
            <el-col :span="8"
              >与借款人关系：{{ firstDetails.debtService.peopleShip }}</el-col
            >
            <el-col :span="8"
              >身份证号：{{ firstDetails.debtService.idCard }}</el-col
            >
            <el-col :span="8"
              >手机号：{{ firstDetails.debtService.phoneNumber }}</el-col
            >
            <el-col :span="8"
              >教育程度：{{ firstDetails.debtService.education }}</el-col
            >
            <el-col :span="8"
              >现居地址：{{ firstDetails.debtService.nowPlace }}</el-col
            >
            <el-col :span="8"
              >单位名称：{{ firstDetails.debtService.nowWork }}</el-col
            >
            <el-col :span="8"
              >单位地址：{{ firstDetails.debtService.workPlace }}</el-col
            >
            <el-col :span="8"
              >公司电话：{{ firstDetails.debtService.companyPhone }}</el-col
            >
            <el-col :span="8"
              >公司性质：{{ firstDetails.debtService.companyNature }}</el-col
            >
            <el-col :span="16"
              >税后月收入：{{ firstDetails.debtService.monthlyIncome }}</el-col
            >
            <el-col :span="8" class="img">
              身份证正面
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.debtService.cardAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="8" class="img">
              身份证反面
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.debtService.backAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
        </el-card>
        <!-- 担保人信息 -->
        <el-card
          class="box-card"
          v-if="firstDetails.peopleGuarantee.guaranteeName"
        >
          <div slot="header" ref="ref5">
            <span>担保人信息</span>
          </div>
          <el-row>
            <el-col :span="8"
              >姓名：{{ firstDetails.peopleGuarantee.guaranteeName }}</el-col
            >
            <el-col :span="8"
              >与借款人关系：{{
                firstDetails.peopleGuarantee.peopleShip
              }}</el-col
            >
            <el-col :span="8"
              >身份证号：{{ firstDetails.peopleGuarantee.idNumber }}</el-col
            >
            <el-col :span="8"
              >常用手机号：{{
                firstDetails.peopleGuarantee.phoneNumber
              }}</el-col
            >
            <el-col :span="8"
              >户籍省市：{{ firstDetails.peopleGuarantee.nativePlace }}</el-col
            >
            <el-col :span="8"
              >现居省市：{{ firstDetails.peopleGuarantee.currentPlace }}</el-col
            >
            <el-col :span="8"
              >现居地址：{{ firstDetails.peopleGuarantee.detailPlace }}</el-col
            >
            <el-col :span="8"
              >单位名称：{{ firstDetails.peopleGuarantee.workUnit }}</el-col
            >
            <el-col :span="8"
              >工作省市：{{ firstDetails.peopleGuarantee.workPlace }}</el-col
            >
            <el-col :span="24"
              >单位地址：{{ firstDetails.peopleGuarantee.unitPlace }}</el-col
            >
            <el-col :span="8" class="img">
              身份证正面
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.peopleGuarantee.cardAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="8" class="img">
              身份证反面
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.peopleGuarantee.backAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col
              :span="8"
              v-if="firstDetails.peopleGuarantee.creditPower == 1"
              class="img"
            >
              征信授权书
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.peopleGuarantee.powerAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
        </el-card>
        <!-- 担保公司信息 -->
        <el-card
          class="box-card"
          v-if="firstDetails.companyGuarantee.companyName"
        >
          <div slot="header" ref="ref5">
            <span>担保公司信息</span>
          </div>
          <el-row>
            <el-col :span="8"
              >公司注册名称：{{
                firstDetails.companyGuarantee.companyName
              }}</el-col
            >
            <el-col :span="8"
              >企业类型：{{
                firstDetails.companyGuarantee.enterpriseType
              }}</el-col
            >
            <el-col :span="8"
              >注册资金（万元）：{{
                firstDetails.companyGuarantee.registerMoney
              }}</el-col
            >
            <el-col :span="8"
              >成立日期：{{
                firstDetails.companyGuarantee.establishTime
              }}</el-col
            >
            <el-col :span="8"
              >经营年限：{{
                firstDetails.companyGuarantee.operationPeriod
              }}</el-col
            >
            <el-col :span="8"
              >公司所属城市：{{
                firstDetails.companyGuarantee.companyCity
              }}</el-col
            >
            <el-col :span="8"
              >公司地址：{{
                firstDetails.companyGuarantee.companyAddress
              }}</el-col
            >
            <el-col :span="8"
              >法人身份证号：{{
                firstDetails.companyGuarantee.corporateId
              }}</el-col
            >
            <el-col :span="8"
              >法人手机号：{{
                firstDetails.companyGuarantee.corporatePhone
              }}</el-col
            >
          </el-row>
        </el-card>
        <!-- 经销商信息 -->
        <el-card class="box-card">
          <div slot="header" ref="ref6">
            <span>经销商信息</span>
          </div>
          <el-row>
            <el-col :span="8"
              >经销商门店：{{ firstDetails.basics.dealerStores }}</el-col
            >
            <el-col :span="8"
              >车牌类型：<span v-if="firstDetails.basics.plateType === 0"
                >公牌</span
              ><span v-if="firstDetails.basics.plateType === 1"
                >私牌</span
              ></el-col
            >
            <el-col :span="8"
              >审批类型：{{ firstDetails.basics.approvalType }}</el-col
            >
            <el-col :span="8">市场：{{ firstDetails.basics.market }}</el-col>
            <el-col :span="8">门店：{{ firstDetails.basics.store }}</el-col>
            <el-col :span="8">运营：{{ firstDetails.basics.operate }}</el-col>
            <el-col :span="8"
              >补充说明：{{ firstDetails.basics.moreInfo }}</el-col
            >
          </el-row>
        </el-card>
        <!-- 车辆信息 -->
        <el-card class="box-card">
          <div slot="header" ref="ref7">
            <span>车辆信息</span>
          </div>
          <el-row>
            <el-col :span="8">车类：{{ firstDetails.carLoan.carType }}</el-col>
            <el-col :span="8">VIN码：{{ firstDetails.carLoan.vinCode }}</el-col>
            <el-col :span="8">品牌：{{ firstDetails.carLoan.brand }}</el-col>
            <el-col :span="8"
              >车系：{{ firstDetails.carLoan.carSeries }}</el-col
            >
            <el-col :span="8"
              >车款年代：{{ firstDetails.carLoan.carYear }}</el-col
            >
            <!-- <el-col :span="8">排量/吨位：{{firstDetails.carLoan.}}</el-col>
            <el-col :span="8">挡位：{{firstDetails.carLoan.}}</el-col> -->
            <el-col :span="8">款式：{{ firstDetails.carLoan.style }}</el-col>
            <!-- <el-col :span="8">发动机号：{{firstDetails.carLoan.}}</el-col>
            <el-col :span="8">燃料类型：{{firstDetails.carLoan.}}</el-col> -->
            <el-col :span="8"
              >二手车公里数：{{ firstDetails.carLoan.mileage }}</el-col
            >
            <!-- <el-col :span="8">首次登记日期：{{firstDetails.carLoan.}}</el-col> -->
            <el-col :span="8"
              >卖方姓名：{{ firstDetails.carLoan.sellerName }}</el-col
            >
            <el-col :span="8"
              >卖方身份证号：{{ firstDetails.carLoan.sellerId }}</el-col
            >
            <el-col :span="8"
              >卖方车牌号：{{ firstDetails.carLoan.sellerCarNo }}</el-col
            >
          </el-row>
        </el-card>
        <!-- 贷款信息 -->
        <el-card class="box-card">
          <div slot="header" ref="ref8">
            <span>贷款信息</span>
          </div>
          <el-row>
            <el-col :span="8"
              >实际销售价：{{ firstDetails.carLoan.actualPrice }}</el-col
            >
            <el-col :span="8"
              >车辆贷款金额：{{ firstDetails.carLoan.loanAmount }}</el-col
            >
            <el-col :span="8"
              >贷款期限：{{ firstDetails.carLoan.repaymentTerm }}</el-col
            >
            <el-col :span="8"
              >是否提供房产：{{ firstDetails.carLoan.isHouseProperty }}</el-col
            >
            <el-col :span="8"
              >利率换挡：{{ firstDetails.carLoan.interestRate }}</el-col
            >
            <el-col :span="8"
              >GPS挡位：{{ firstDetails.carLoan.gpsGear }}</el-col
            >
            <el-col :span="8"
              >续保押金：{{ firstDetails.carLoan.deposit }}</el-col
            >
          </el-row>
        </el-card>
        <!-- 紧急联系人 -->
        <el-card class="box-card">
          <div slot="header" ref="ref9">
            <span>紧急联系人</span>
          </div>
          <el-row>
            <el-col :span="8"
              >紧急联系人1姓名：{{ firstDetails.contacts.nameOne }}</el-col
            >
            <el-col :span="8"
              >紧急联系人1与主贷人关系：{{
                firstDetails.contacts.shipOne
              }}</el-col
            >
            <el-col :span="8"
              >紧急联系人1手机号：{{ firstDetails.contacts.phoneOne }}</el-col
            >
            <el-col :span="8"
              >紧急联系人2姓名：{{ firstDetails.contacts.nameTwo }}</el-col
            >
            <el-col :span="8"
              >紧急联系人2与主贷人关系：{{
                firstDetails.contacts.shipTwo
              }}</el-col
            >
            <el-col :span="8"
              >紧急联系人2手机号：{{ firstDetails.contacts.phoneTwo }}</el-col
            >
          </el-row>
        </el-card>
        <!-- 图片信息 -->
        <el-card class="box-card">
          <div slot="header" ref="ref10">
            <span>图片信息</span>
          </div>
          <span>车辆</span>
          <el-row>
            <el-col :span="6" class="img">
              左前45度
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails[242]"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6" class="img">
              右前45度
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails[253]"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6" class="img">
              里程表
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails[244]"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6" class="img">
              发动机舱左侧
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails[246]"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6" class="img">
              发动机舱右侧
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails[245]"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6" class="img">
              车辆铭牌
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails[247]"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6" class="img">
              VIN码
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails[248]"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6" class="img">
              左后车门螺丝
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails[257]"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6" class="img">
              前排座椅
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails[243]"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6" class="img">
              后排座椅
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails[251]"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6" class="img">
              左后流水槽
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails[255]"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6" class="img">
              右后流水槽
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails[254]"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6" class="img">
              备胎槽全景
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails[256]"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6" class="img">
              右后车门螺丝
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails[250]"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6" class="img">
              后备箱底部
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails[279]"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6" class="img">
              中控台
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails[252]"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span>登记证</span>
          <el-row>
            <el-col :span="6" class="img">
              机动车登记证1-2
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails[240]"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6" class="img">
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
            <el-col :span="6" class="img">
              流水
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.detail"
                :preview-src-list="srcList"
              >
              </el-image>
              <el-button
                type="primary"
                round
                size="mini"
                style="width: 100px"
                @click="dialogVisible = true"
                >查看文件</el-button
              >
            </el-col>
            <el-col :span="6" class="img">
              房产
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.house"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6" class="img">
              销售和车合影
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.xshchy"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6" class="img">
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
            <el-col :span="6" class="img">
              主贷人身份证（头像面）
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.borrower.obverseAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6" class="img">
              主贷人身份证（国徽面）
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.borrower.backAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6" class="img">
              主贷人驾驶证复联
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.jszzy"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6" class="img">
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
            <el-col :span="6" class="img">
              配偶身份证
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.posfz"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6" class="img">
              征信授权书
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.pozxsqs"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6" class="img">
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
            <el-col :span="6" class="img">
              担保人身份证
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.dbrsfz"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6" class="img">
              征信授权书
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.dbrzxsqs"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="6" class="img">
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
            <td v-if="credit.msg">{{ credit.msg }}</td>
            <td v-else>{{ credit }}</td>
          </tr>
          <tr style="display: block; margin: 20px; text-indent: 2em">
            <td>备注信息：</td>
            <td></td>
          </tr>
        </table>
        <h4>详版征信</h4>
        <p style="text-indent: 2em; font-size: 14px">{{ detailsCredit }}</p>
      </el-tab-pane>
      <el-tab-pane label="数据辅正" name="third" style="height: 100%">
        <el-tabs v-model="activeName1" tab-position="right">
          <el-tab-pane label="贷前策略" name="first">
            <iframe
              width="100%"
              height="100%"
              frameborder="0"
              :src="iframeSrc"
              id="bdIframe"
            />
          </el-tab-pane>
          <el-tab-pane label="验证流程" name="second">
            <iframe
              width="100%"
              height="100%"
              frameborder="0"
              :src="iframeSrc1"
              id="bdIframe1"
            />
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="精真估" name="fourth">
        <!-- <el-button
          type="primary"
          round
          style="margin: 20px 10px"
          @click="findJZG"
          >点击查询精真估</el-button
        > -->
        <p>{{ JZGRes }}</p>
      </el-tab-pane>
      <el-tab-pane label="意见" name="fifth">
        <h5 style="font-size: 14px; margin: 10px 0">初审意见</h5>
        <p style="font-size: 14px; text-indent: 2em">{{ firstTextarea }}</p>
        <h5 style="font-size: 14px; margin: 10px 0">终审意见</h5>
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
            @click="finalTrialHandle(1)"
            >通过</el-button
          >
          <el-button
            type="warning"
            round
            style="margin: 20px 10px"
            @click="finalTrialHandle(2)"
            >退回</el-button
          >
          <el-button
            type="danger"
            round
            style="margin: 20px 10px"
            @click="finalTrialHandle(3)"
            >拒绝</el-button
          >
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog :visible.sync="dialogVisible" width="50%">
      <pdf ref="pdf" v-for="i in numPages" :key="i" :src="url" :page="i"></pdf>
    </el-dialog>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
import {
  getByToken,
  getByMelting,
  getFirstDetails,
  findJingZhenGu,
  getJingZhenGuData,
  getFirstHandle,
} from '@/api/process/firstTrial'
import { getSelectState, findDetailsCredit } from '@/api/process/business'
import { finalHandle, getFinalTrialHandle } from '@/api/process/finalTrial'

export default {
  name: 'FinalTrialDetails',
  components: {
    pdf,
  },
  data() {
    return {
      iframeSrc: '',
      iframeSrc1: '',
      baiRongToken: '', // 百融token
      baiRongMeltingData: '', // 百融详情
      baiRongMeltingMsg: '', // 百融详情
      watchNum: 0,
      credit: '', // 征信结果
      detailsCredit: '', // 详版征信
      dialogVisible: false, // 弹框
      url:
        'http://192.168.31.86:8080/profile/2021/01/11/18ec8853-7584-45e0-ab25-0a8a1e6576f6.pdf',
      numPages: null, // pdf 总页数
      activeName: 'first', // Tabs
      activeName1: 'first', // Tabs1
      textarea: '', // 终审意见
      approvalType: null, // 终审结果
      firstTextarea: '',
      firstDetails: {
        applicant: {},
        borrower: {},
        peopleGuarantee: {},
        companyGuarantee: {},
        debtService: {},
        basics: {},
        carLoan: {},
        contacts: {},
      }, // 终审详情
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
      JZGRes: '', // 精真估返回结果
      JZGData: '', // 精真估数据
    }
  },
  computed: {},
  watch: {
    watchNum(newName) {
      if (newName === 2) {
        this.iframeSrc =
          'https://loanexamine.100credit.com/#/userReport/' +
          this.baiRongMeltingMsg.swift_number +
          '/' +
          this.baiRongToken
        this.iframeSrc1 =
          'https://loanexamine.100credit.com/#/userReport/' +
          this.baiRongMeltingData.swift_number +
          '/' +
          this.baiRongToken
      }
    },
    $route(to, from) {
      //监听路由是否变化
      if (to.path == '/process/firstTrialDetails') {
        this.getFinalData()
      }
    },
  },
  methods: {
    // 获取终审详情
    async getFinalData() {
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
        console.log(data)
        this.firstDetails = data
        this.srcList = data.pic
        this.getBaiRongToken()
        this.getBaiRongMelting()
        this.getDetailsCredit()
        this.findSelectState()
        this.findFirstHandle()
        this.findFinalHandle()
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
    // pdf文件
    getNumPages() {
      let loadingTask = pdf.createLoadingTask(this.url)
      loadingTask.promise
        .then((pdf) => {
          this.numPages = pdf.numPages
        })
        .catch((err) => {
          console.error('pdf 加载失败', err)
        })
    },
    // 获取百融token
    async getBaiRongToken() {
      try {
        const data = await getByToken()
        this.baiRongToken = data.msg
        this.watchNum++
      } catch (error) {}
    },
    // 获取百融详细信息
    async getBaiRongMelting() {
      try {
        const data = await getByMelting(this.$route.query.transactionCode)
        this.baiRongMeltingData = JSON.parse(data.data)
        this.baiRongMeltingMsg = JSON.parse(data.msg)
        this.watchNum++
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
        // this.detailsCredit = null
        // if (data) {
        //   this.isDisabled = true
        this.detailsCredit = data.details
        // } else {
        //   this.isDisabled = false
        // }
      } catch (error) {}
    },
    // 终审处理
    async finalTrialHandle(approvalType) {
      if (this.textarea.trim()) {
        const that = this
        this.$confirm('确认操作?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            return finalHandle({
              advise: that.textarea,
              approvalType,
              transactionCode: that.$route.query.transactionCode,
              userId: Number(that.$route.query.userId),
            })
          })
          .then(() => {
            this.msgSuccess('操作成功')
            this.findFinalHandle()
          })
          .catch(function () {})
      } else {
        this.msgError('请输入意见')
      }
    },
    // 终审结果回显
    async findFinalHandle() {
      try {
        const { data } = await getFinalTrialHandle(
          this.$route.query.transactionCode
        )
        this.textarea = data.advise
        this.approvalType = data.approvalType
      } catch (error) {}
    },
    // 初审结果回显
    async findFirstHandle() {
      try {
        const { data } = await getFirstHandle(this.$route.query.transactionCode)
        this.firstTextarea = data.advise
      } catch (error) {}
    },
    // 查询精真估
    async findJZG() {
      try {
        const data = await findJingZhenGu(this.$route.query.transactionCode)
        this.JZGRes = JSON.parse(data.msg).Msg
        this.getJZGData()
      } catch (error) {}
    },
    // 查询精真估结果
    async getJZGData() {
      try {
        const { data } = await getJingZhenGuData('ZYJR202012251419140003') // this.$route.query.transactionCode
        console.log(JSON.parse(data))
      } catch (error) {
        console.log(error)
      }
    },
  },
  created() {
    this.getFinalData()
  },
  mounted() {
    this.getNumPages()
    /**
     * iframe-高自适应显示
     */
    const oIframe = document.getElementById('bdIframe')
    const oIframe1 = document.getElementById('bdIframe1')
    const deviceHeight = document.querySelector('body').clientHeight
    oIframe.style.height = Number(deviceHeight) - 170 + 'px' //数字是页面布局高度差
    oIframe1.style.height = Number(deviceHeight) - 170 + 'px' //数字是页面布局高度差
  },
}
</script>

<style lang='scss' scoped>
.app-container {
  padding: 20px;
}
.el-tabs {
  background-color: #fff;
  padding: 10px;
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
.box-card {
  margin-bottom: 10px;
}
/deep/.el-image-viewer__next,
/deep/.el-image-viewer__prev {
  display: none;
}
</style>
