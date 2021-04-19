<template>
  <div class="app-container">
    <div class="btn-box" v-if="activeName === 'first'">
      <button @click="goAssignBlock('ref0', 50)">基本信息</button>
      <button @click="goAssignBlock('ref1', 50)">订单信息</button>
      <button @click="goAssignBlock('ref2', 50)">借款人信息</button>
      <button
        @click="goAssignBlock('ref3', 50)"
        v-if="firstDetails.applicant.marriage === '已婚'"
      >
        配偶信息
      </button>
      <!-- <button
        @click="goAssignBlock('ref4', 50)"
        v-if="firstDetails.debtService"
      >
        共偿人信息
      </button> -->
      <!-- <button
        @click="goAssignBlock('ref5', 50)"
        v-if="firstDetails.peopleGuarantee || firstDetails.companyGuarantee"
      >
        担保信息
      </button> -->
      <!-- <button @click="goAssignBlock('ref6', 50)">经销商信息</button> -->
      <button @click="goAssignBlock('ref7', 50)">车辆信息</button>
      <button @click="goAssignBlock('ref8', 50)">贷款信息</button>
      <button @click="goAssignBlock('ref9', 50)">紧急联系人</button>
      <button @click="goAssignBlock('ref10', 50)">图片信息</button>
      <!-- <button
        @click="goAssignBlock('ref11', 50)"
        v-if="firstDetails.relation[0]"
      >
        关联人信息
      </button>
      <button
        @click="goAssignBlock('ref12', 50)"
        v-if="firstDetails.guarantee[0]"
      >
        担保人信息
      </button> -->
      <button @click="goAssignBlock('ref13', 50)" v-if="firstDetails.visit[0]">
        家访照片
      </button>
      <button
        @click="goAssignBlock('ref14', 50)"
        v-if="firstDetails.common.peopleShip"
      >
        共同申请人
      </button>
      <button
        @click="goAssignBlock('ref15', 50)"
        v-if="firstDetails.debtService.peopleShip"
      >
        共同偿债人
      </button>
      <button
        @click="goAssignBlock('ref16', 50)"
        v-if="firstDetails.peopleGuarantee[0]"
      >
        个人担保
      </button>
      <button
        @click="goAssignBlock('ref17', 50)"
        v-if="firstDetails.companyGuarantee[0]"
      >
        公司担保
      </button>
    </div>
    <el-tabs v-model="activeName" tab-position="left" :before-leave="tabsLeave">
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
            <el-col :span="8"
              >销售团队：{{ firstDetails.business.team }}</el-col
            >
            <!-- <el-col :span="8">大区经理：</el-col> -->
            <el-col :span="8"
              >资金方：{{ firstDetails.startPage.fundSide }}</el-col
            >
            <el-col :span="8"
              >区域：{{ firstDetails.startPage.businessPlace }}</el-col
            >
            <el-col :span="8" style="color: #999"
              >团队：{{ firstDetails.team }}</el-col
            >
            <el-col :span="8" style="color: #999"
              >客户经理：{{ firstDetails.jingliName }}</el-col
            >
            <el-col :span="8" style="color: #999"
              >客户经理手机号：{{ firstDetails.jingliPhoneNo }}</el-col
            >
            <!-- <el-col :span="8">门店：</el-col> -->
            <!-- <el-col :span="8" style="color: #999"
              >真实业务发生地：{{ firstDetails.startPage.realAddress }}</el-col
            > -->
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
              <span v-if="firstDetails.business.carInformation == 0"
                >乘用车</span
              >
              <span v-else-if="firstDetails.business.carInformation == 1"
                >商用车</span
              >
            </el-col>
            <el-col :span="16"
              >业务类型：
              <span v-if="firstDetails.business.carType == 0">新车</span>
              <span v-else-if="firstDetails.business.carType == 1">二手车</span>
              <span v-else-if="firstDetails.business.carType == 2">新能源</span>
            </el-col>
            <el-col :span="8"
              >意向价格：{{ firstDetails.business.intentionPrice }}</el-col
            >
            <el-col :span="8"
              >意向贷款金额：{{ firstDetails.business.loanMoney }}</el-col
            >
            <el-col :span="8"
              >意向贷款期限：{{ firstDetails.business.repayPeriod }}</el-col
            >
          </el-row>
        </el-card>
        <!-- 借款人信息 -->
        <el-card class="box-card">
          <div slot="header" ref="ref2">
            <span>借款人信息</span>
          </div>
          <el-row>
            <el-col :span="8"
              >姓名：{{ firstDetails.borrower.userName }}
              <el-button
                type="primary"
                plain
                size="mini"
                @click="getBaiRongMelting('jiekuanren', 0)"
                >大数据</el-button
              ></el-col
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
              >有效起始日：{{ firstDetails.borrower.startDate }}</el-col
            >
            <el-col :span="8"
              >有效截止日：{{ firstDetails.borrower.endDate }}</el-col
            >
            <el-col :span="8"
              >签发机关：{{ firstDetails.borrower.issueAuthority }}</el-col
            >
            <el-col :span="8"
              >户口性质：{{ firstDetails.applicant.householdNature }}</el-col
            >
            <el-col :span="8"
              >现居住地址：{{ firstDetails.applicant.liveProvince
              }}{{ firstDetails.applicant.liveCity
              }}{{ firstDetails.applicant.liveArea
              }}{{ firstDetails.applicant.liveAddress }}</el-col
            >
            <el-col :span="8"
              >现居住时间/年：{{ firstDetails.applicant.liveTime }}</el-col
            >
            <el-col :span="8"
              >住宅状况：{{ firstDetails.applicant.housePower }}</el-col
            >
            <el-col :span="8"
              >家庭人数：{{ firstDetails.applicant.familiesNumber }}</el-col
            >
            <el-col :span="8"
              >受教育程度：{{ firstDetails.applicant.education }}</el-col
            >
            <el-col :span="8"
              >婚姻状况：{{ firstDetails.applicant.marriage }}</el-col
            >
            <el-col :span="8">
              本人是否有驾驶证：
              <span v-if="firstDetails.applicant.isLicense === 1">是</span>
              <span v-else>否</span>
            </el-col>
            <el-col :span="8">
              自购车状况：
              <span v-if="firstDetails.applicant.carstat === 0">有</span>
              <span v-else>无</span>
            </el-col>
            <el-col :span="8"
              >驾驶员与主贷人关系：{{
                firstDetails.applicant.driverShip
              }}</el-col
            >
            <el-col :span="8"
              >驾照类型：{{ firstDetails.applicant.licenseType }}</el-col
            >
            <el-col
              :span="24"
              style="font-size: 16px; margin: 10px 0 10px -20px"
              >单位信息</el-col
            >
            <el-col :span="8"
              >单位名称：{{ firstDetails.applicant.unitName }}
              <el-button
                type="primary"
                plain
                size="mini"
                @click="getCompanyClick(firstDetails.applicant.unitName)"
                >单位信息</el-button
              ></el-col
            >
            <el-col :span="8"
              >单位地址：{{ firstDetails.applicant.workAddress }}</el-col
            >
            <el-col :span="8"
              >单位电话：{{ firstDetails.applicant.unitPhone }}</el-col
            >
            <el-col :span="8"
              >单位性质：{{ firstDetails.applicant.unitNature }}</el-col
            >
            <!-- <el-col :span="8">工作单位规模：{{firstDetails.applicant.householdNature}}</el-col> -->

            <!-- <el-col :span="8">现单位工作年限：{{firstDetails.applicant.householdNature}}</el-col> -->
            <el-col :span="8"
              >职务：{{ firstDetails.applicant.position }}</el-col
            >
            <el-col :span="8"
              >职业：
              <span v-if="firstDetails.applicant.industry === '1'">公务员</span>
              <span v-else-if="firstDetails.applicant.industry === '2'"
                >事业单位员工</span
              >
              <span v-else-if="firstDetails.applicant.industry === '3'"
                >职员</span
              >
              <span v-else-if="firstDetails.applicant.industry === '4'"
                >军人</span
              >
              <span v-else-if="firstDetails.applicant.industry === '5'"
                >自由职业者</span
              >
              <span v-else-if="firstDetails.applicant.industry === '6'"
                >工人</span
              >
              <span v-else-if="firstDetails.applicant.industry === '7'"
                >农民</span
              >
              <span v-else-if="firstDetails.applicant.industry === '10'"
                >邮电通讯行业职员</span
              >
              <span v-else-if="firstDetails.applicant.industry === '11'"
                >房地产行业职员</span
              >
              <span v-else-if="firstDetails.applicant.industry === '12'"
                >交通运输行业职员</span
              >
              <span v-else-if="firstDetails.applicant.industry === '13'"
                >法律/司法行业职员</span
              >
              <span v-else-if="firstDetails.applicant.industry === '14'"
                >文化/娱乐/体育行业职员</span
              >
              <span v-else-if="firstDetails.applicant.industry === '15'"
                >媒介/广告行业职员</span
              >
              <span v-else-if="firstDetails.applicant.industry === '16'"
                >科研/教育行业职员</span
              >
              <span v-else-if="firstDetails.applicant.industry === '17'"
                >学生</span
              >
              <span v-else-if="firstDetails.applicant.industry === '18'"
                >计算机/网络行业职员</span
              >
              <span v-else-if="firstDetails.applicant.industry === '19'"
                >商业贸易行业职员</span
              >
              <span v-else-if="firstDetails.applicant.industry === '20'"
                >银行/金融/证券/投资行业职员</span
              >
              <span v-else-if="firstDetails.applicant.industry === '21'"
                >税务行业职员</span
              >
              <span v-else-if="firstDetails.applicant.industry === '22'"
                >咨询行业职员</span
              >
              <span v-else-if="firstDetails.applicant.industry === '23'"
                >社会服务行业职员</span
              >
              <span v-else-if="firstDetails.applicant.industry === '24'"
                >旅游/饭店行业职员</span
              >
              <span v-else-if="firstDetails.applicant.industry === '25'"
                >健康/医疗服务行业职员</span
              >
              <span v-else-if="firstDetails.applicant.industry === '26'"
                >管理人员</span
              >
              <span v-else-if="firstDetails.applicant.industry === '27'"
                >技术人员</span
              >
              <span v-else-if="firstDetails.applicant.industry === '28'"
                >文体明星</span
              >
              <span v-else-if="firstDetails.applicant.industry === '29'"
                >无职业</span
              >
              <span v-else-if="firstDetails.applicant.industry === '30'"
                >私人业主</span
              >
            </el-col>
            <el-col :span="8"
              >何时进入现单位工作：{{ firstDetails.applicant.joindate }}</el-col
            >
            <el-col :span="8"
              >税后月收入：{{ firstDetails.applicant.monthlyIncome }}</el-col
            >
            <!-- <el-col :span="8">邮政编码：</el-col> -->
          </el-row>
          <el-row>
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
        <el-card
          class="box-card"
          v-if="firstDetails.applicant.marriage === '已婚'"
        >
          <div slot="header" ref="ref3">
            <span>配偶信息</span>
          </div>
          <el-row>
            <el-col :span="8"
              >姓名：{{ firstDetails.applicant.spouseName }}
              <el-button
                type="primary"
                plain
                size="mini"
                @click="getBaiRongMelting('peiou', 0)"
                >大数据</el-button
              ></el-col
            >
            <el-col :span="8"
              >身份证号：{{ firstDetails.applicant.idNumber }}</el-col
            >
            <el-col :span="8"
              >手机号：{{ firstDetails.applicant.phoneNo }}</el-col
            >
            <el-col :span="8"
              >户籍地址：{{ firstDetails.applicant.permanentAddress }}</el-col
            >
            <el-col :span="8" v-if="firstDetails.applicant.spouseAddress"
              >现居住地址：{{ firstDetails.applicant.spouseProvince
              }}{{ firstDetails.applicant.spouseCity
              }}{{ firstDetails.applicant.spouseArea
              }}{{ firstDetails.applicant.spouseAddress }}</el-col
            >
            <el-col :span="8"
              >是否共同申请人：<span v-if="firstDetails.applicant.sfgtsqr == 0"
                >是</span
              ><span v-if="firstDetails.applicant.sfgtsqr == 1"
                >否</span
              ></el-col
            >
            <el-col :span="8"
              >单位名称：{{ firstDetails.applicant.spouseUnitName }}
              <el-button
                type="primary"
                plain
                size="mini"
                @click="getCompanyClick(firstDetails.applicant.spouseUnitName)"
                >单位信息</el-button
              ></el-col
            >
            <el-col :span="8" v-if="firstDetails.applicant.spouseWorkPlace"
              >单位地址：{{ firstDetails.applicant.spouseWorkPlace }}</el-col
            >
            <el-col :span="8" v-if="firstDetails.applicant.spouseWorkPhone"
              >单位电话：{{ firstDetails.applicant.spouseWorkPhone }}</el-col
            >
            <el-col
              :span="8"
              v-if="firstDetails.applicant.spouseUnitNature != '请选择'"
              >单位性质：{{ firstDetails.applicant.spouseUnitNature }}</el-col
            >
            <el-col
              :span="8"
              v-if="firstDetails.applicant.spouseSourceIncome != '请选择'"
              >主要收入来源：{{
                firstDetails.applicant.spouseSourceIncome
              }}</el-col
            >
            <el-col :span="8"
              >税后月收入：{{
                firstDetails.applicant.spouseMonthlyIncome
              }}</el-col
            >
          </el-row>
          <el-row>
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
        <!-- 关联人信息 -->
        <!-- <el-card class="box-card">
          <div slot="header" ref="ref4">
            <span>关联人信息</span>
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
        </el-card> -->
        <!-- 担保人信息 -->
        <!-- <el-card
          class="box-card"
          v-for="(item, index) in firstDetails.peopleGuarantee"
          :key="index"
        >
          <div slot="header" ref="ref5">
            <span>担保人信息+{{ index }}</span>
          </div>
          <el-row>
            <el-col :span="8"
              >姓名：{{ item.peopleGuarantee.guaranteeName }}</el-col
            >
            <el-col :span="8"
              >与借款人关系：{{ item.peopleGuarantee.peopleShip }}</el-col
            >
            <el-col :span="8"
              >身份证号：{{ item.peopleGuarantee.idNumber }}</el-col
            >
            <el-col :span="8"
              >常用手机号：{{ item.peopleGuarantee.phoneNumber }}</el-col
            >
            <el-col :span="8"
              >户籍省市：{{ item.peopleGuarantee.nativePlace }}</el-col
            >
            <el-col :span="8"
              >现居省市：{{ item.peopleGuarantee.currentPlace }}</el-col
            >
            <el-col :span="8"
              >现居地址：{{ item.peopleGuarantee.detailPlace }}</el-col
            >
            <el-col :span="8"
              >单位名称：{{ item.peopleGuarantee.workUnit }}</el-col
            >
            <el-col :span="8"
              >工作省市：{{ item.peopleGuarantee.workPlace }}</el-col
            >
            <el-col :span="24"
              >单位地址：{{ item.peopleGuarantee.unitPlace }}</el-col
            >
            <el-col :span="8" class="img">
              身份证正面
              <el-image
                style="width: 100px; height: 100px"
                :src="item.peopleGuarantee.cardAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="8" class="img">
              身份证反面
              <el-image
                style="width: 100px; height: 100px"
                :src="item.peopleGuarantee.backAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col
              :span="8"
              v-if="item.peopleGuarantee.creditPower == 1"
              class="img"
            >
              征信授权书
              <el-image
                style="width: 100px; height: 100px"
                :src="item.peopleGuarantee.powerAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
        </el-card> -->
        <!-- 担保公司信息 -->
        <!-- <el-card
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
        </el-card> -->
        <!-- 经销商信息 -->
        <!-- <el-card class="box-card">
          <div slot="header" ref="ref6">
            <span>经销商信息</span>
          </div>
          <el-row>
            <el-col :span="8"
              >经销商门店：{{ firstDetails.basics.dealerStores }}</el-col
            >
            <el-col :span="8"
              >公牌信息：<span v-if="firstDetails.basics.plateType === 0"
                >一般公牌</span
              ><span v-if="firstDetails.basics.plateType === 1"
                >非公牌</span
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
        </el-card> -->
        <!-- 车辆信息 -->
        <el-card class="box-card">
          <div slot="header" ref="ref7">
            <span>车辆信息</span>
          </div>
          <el-row>
            <el-col :span="8"
              >车辆类型：{{ firstDetails.carLoan.cheliangleixing }}</el-col
            >
            <el-col :span="8"
              >新旧：<span v-if="firstDetails.carLoan.carType === 0">新车</span
              ><span v-if="firstDetails.carLoan.carType === 1"
                >二手车</span
              ></el-col
            >
            <el-col :span="8"
              >车牌类型：{{ firstDetails.carLoan.chepaileixing }}</el-col
            >
            <el-col :span="8">用途：{{ firstDetails.carLoan.yongtu }}</el-col>
            <el-col :span="8">品牌：{{ firstDetails.carLoan.brand }}</el-col>
            <el-col :span="8"
              >车系：{{ firstDetails.carLoan.carSeries }}</el-col
            >
            <el-col :span="8">款式：{{ firstDetails.carLoan.style }}</el-col>
            <el-col :span="8"
              >车款年代：{{ firstDetails.carLoan.carYear }}</el-col
            >
            <el-col :span="8"
              >车辆颜色：{{ firstDetails.carLoan.cheliangyanse }}</el-col
            >
            <el-col :span="8"
              >排量：{{ firstDetails.carLoan.displacement }}</el-col
            >
            <el-col :span="8">挡位：{{ firstDetails.carLoan.gear }}</el-col>
            <!-- <el-col :span="8">款式：{{ firstDetails.carLoan.style }}</el-col> -->
            <!-- <el-col :span="8">发动机号：{{firstDetails.carLoan.}}</el-col> -->
            <el-col :span="8"
              >燃料类型：{{ firstDetails.carLoan.fuelType }}</el-col
            >
          </el-row>
          <el-row v-if="firstDetails.carLoan.carType === 1">
            <el-col :span="8">VIN码：{{ firstDetails.carLoan.vinCode }}</el-col>
            <el-col :span="8"
              >发动机号：{{ firstDetails.carLoan.engineCode }}</el-col
            >
            <el-col :span="8"
              >表显里程/公里：{{ firstDetails.carLoan.mileage }}</el-col
            >
            <el-col :span="8"
              >首次登记日期：{{ firstDetails.carLoan.startDate }}</el-col
            >
            <el-col :span="8"
              >卖方姓名：{{ firstDetails.carLoan.sellerName }}</el-col
            >
            <el-col :span="8"
              >卖方身份证号：{{ firstDetails.carLoan.sellerId }}</el-col
            >
            <el-col :span="8"
              >卖方车牌号：{{ firstDetails.carLoan.sellerCode }}</el-col
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
              >审批类型：<span v-if="firstDetails.carLoan.approvalType === '0'"
                >先放后抵</span
              ><span v-if="firstDetails.carLoan.approvalType === '1'"
                >先抵后放</span
              ></el-col
            >
            <el-col :span="8"
              >产品类型：{{ firstDetails.carLoan.productType }}</el-col
            >
            <el-col :span="8"
              >贷款产品：{{ firstDetails.carLoan.loanProduct }}</el-col
            >
            <el-col :span="8"
              >实际销售价(元)：{{ firstDetails.carLoan.actualPrice }}</el-col
            >
            <el-col :span="8"
              >贷款金额(元)：{{ firstDetails.carLoan.loanAmount }}</el-col
            >
            <el-col :span="8"
              >还款期限/月：{{ firstDetails.carLoan.repaymentTerm }}</el-col
            >
            <!-- <el-col :span="8"
              >是否提供房产：{{ firstDetails.carLoan.isHouseProperty }}</el-col
            >
            <el-col :span="8"
              >利率换挡：{{ firstDetails.carLoan.interestRate }}</el-col
            >
            <el-col :span="8"
              >GPS挡位：{{ firstDetails.carLoan.gpsGear }}</el-col
            > -->
            <el-col :span="8"
              >对客费率：{{ firstDetails.carLoan.interestRate }}%</el-col
            >
            <el-col :span="8"
              >续保押金：{{ firstDetails.carLoan.deposit }}</el-col
            >
            <el-col :span="8"
              >抵押渠道：{{ firstDetails.carLoan.mortgageChannel }}</el-col
            >
            <el-col :span="8"
              >抵押代办人：{{ firstDetails.carLoan.mortgagePeople }}</el-col
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
        <!-- 关联人信息 -->
        <el-card
          class="box-card"
          :key="'relation-' + index"
          v-for="(item, index) in firstDetails.relation"
        >
          <div slot="header" ref="ref11">
            <span>关联人信息{{ index + 1 }}</span>
          </div>
          <el-row>
            <el-col :span="8"
              >姓名：{{ item.userName }}
              <el-button
                type="primary"
                plain
                size="mini"
                @click="getBaiRongMelting('guanlianren', index)"
                >大数据</el-button
              ></el-col
            >
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
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="8" class="img">
              身份证反面
              <el-image
                style="width: 100px; height: 100px"
                :src="item.backAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="8" v-if="item.creditPower == 1" class="img">
              征信授权书
              <el-image
                style="width: 100px; height: 100px"
                :src="item.powerAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
        </el-card>
        <!-- 担保人信息 -->
        <el-card
          class="box-card"
          :key="'guarantee-' + index"
          v-for="(item, index) in firstDetails.guarantee"
        >
          <div slot="header" ref="ref12">
            <span>担保人信息{{ index + 1 }}</span>
          </div>
          <el-row>
            <el-col :span="8"
              >姓名：{{ item.userName }}
              <el-button
                type="primary"
                plain
                size="mini"
                @click="getBaiRongMelting('danbaoren', index)"
                >大数据</el-button
              ></el-col
            >
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
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="8" class="img">
              身份证反面
              <el-image
                style="width: 100px; height: 100px"
                :src="item.backAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="8" v-if="item.creditPower == 1" class="img">
              征信授权书
              <el-image
                style="width: 100px; height: 100px"
                :src="item.powerAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
        </el-card>
        <!-- 图片信息 -->
        <el-card class="box-card">
          <div slot="header" ref="ref10">
            <span>图片信息</span>
          </div>
          <span>二手车</span>
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
              登记证信息栏1-2
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails[282]"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img">
              登记证信息栏3-4
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails[241]"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col
              :span="4"
              class="img"
              v-if="firstDetails['登记证信息栏5-6页']"
            >
              登记证信息栏5-6
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails['登记证信息栏5-6页']"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col
              :span="4"
              class="img"
              v-if="firstDetails['登记证信息栏7-8页']"
            >
              登记证信息栏7-8
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails['登记证信息栏7-8页']"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col
              :span="4"
              class="img"
              v-if="firstDetails['登记证信息栏9-10页']"
            >
              登记证信息栏9-10
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails['登记证信息栏9-10页']"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <!-- <span
            v-if="
              firstDetails.xshchy ||
              firstDetails.jszzy ||
              firstDetails.supply
            "
            >补充资料</span
          >
          <el-row>
            <el-col :span="4" class="img" v-if="firstDetails.xshchy">
              销售和车合影
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.xshchy"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.jszzy">
              其他资料
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.jszzy"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.supply">
              补充1
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.supply"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row> -->
          <span v-if="liushui[0] || pdfList[0]">流水</span>
          <el-row>
            <el-col
              :span="4"
              class="img"
              v-for="(item, index) in liushui"
              :key="'ls-' + index"
            >
              <el-image
                style="width: 100px; height: 100px"
                :src="item.filePath"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" v-if="pdfList[0]"
              ><el-button
                type="primary"
                size="mini"
                @click="PDFdialogVisible = true"
                >查看流水</el-button
              ></el-col
            >
          </el-row>
          <span v-if="house[0]">房产</span>
          <el-row>
            <el-col
              :span="4"
              class="img"
              v-for="item in house"
              :key="item.fileId"
            >
              <el-image
                style="width: 100px; height: 100px"
                :src="item.filePath"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span v-if="carinfo[0]">车辆</span>
          <el-row>
            <el-col
              :span="4"
              class="img"
              v-for="item in carinfo"
              :key="item.fileId"
            >
              <el-image
                style="width: 100px; height: 100px"
                :src="item.filePath"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span v-if="poperty[0]">其他资产(证券、基金、存款等)</span>
          <el-row>
            <el-col
              :span="4"
              class="img"
              v-for="item in poperty"
              :key="item.fileId"
            >
              <el-image
                style="width: 100px; height: 100px"
                :src="item.filePath"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span>申请人</span>
          <el-row>
            <el-col :span="4" class="img">
              申请人身份证（头像面）
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.borrower.obverseAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img">
              申请人身份证（国徽面）
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.borrower.backAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img">
              申请人驾驶证正/副页
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.lisense"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span v-if="firstDetails.pozxsqs">配偶</span>
          <el-row>
            <el-col :span="4" class="img" v-if="firstDetails.pozxsqs">
              征信授权书
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.pozxsqs"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.poscsfzsqs">
              手持身份证+授权书
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.poscsfzsqs"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.posfzfy">
              身份证复印件
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.posfzfy"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.posfztxm">
              配偶身份证(头面像)
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.posfztxm"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.posfzgh">
              配偶身份证(国徽像)
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.posfzgh"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span v-if="firstDetails.dbzxsqs">担保人</span>
          <el-row>
            <el-col :span="4" class="img" v-if="firstDetails.dbzxsqs">
              征信授权书
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.dbzxsqs"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.dbscsfzsqs">
              手持身份证+授权书
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.dbscsfzsqs"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.dbsfzfy">
              身份证复印件
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.dbsfzfy"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.dbrsfztxm">
              担保人身份证(头面像)
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.dbrsfztxm"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.dbrsfzgh">
              担保人身份证(国徽像)
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.dbrsfzgh"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span v-if="firstDetails.glzxsqs">关联人</span>
          <el-row>
            <el-col :span="4" class="img" v-if="firstDetails.glzxsqs">
              征信授权书
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.glzxsqs"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.glscsfzsqs">
              手持身份证+授权书
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.glscsfzsqs"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.glsfzfy">
              身份证复印件
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.glsfzfy"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.glrsfztxm">
              关联人身份证(头面像)
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.glrsfztxm"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.glrsfzgh">
              关联人身份证(国徽像)
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.glrsfzgh"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
        </el-card>
        <el-card class="box-card" v-if="firstDetails.visit[0]">
          <div slot="header" ref="ref13">
            <span>家访照片</span>
          </div>
          <el-row>
            <el-col
              :span="4"
              class="img"
              v-for="item in firstDetails.visit"
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
        <!-- 共同申请人信息 -->
        <el-card class="box-card" v-if="firstDetails.common.peopleShip">
          <div slot="header" ref="ref14">
            <span>共同申请人信息</span>
          </div>
          <el-row>
            <el-col :span="8"
              >与借款人关系：{{ firstDetails.common.peopleShip }}</el-col
            >
            <el-col :span="8">姓名：{{ firstDetails.common.debtName }}</el-col>
            <el-col :span="8"
              >身份证号：{{ firstDetails.common.idCard }}</el-col
            >
            <el-col :span="8">学历：{{ firstDetails.common.education }}</el-col>
            <el-col :span="8"
              >税后月收入：{{ firstDetails.common.monthlyIncome }}</el-col
            >
            <el-col :span="8"
              >现住地址：{{ firstDetails.common.nowPlace }}</el-col
            >
            <el-col :span="8"
              >手机号：{{ firstDetails.common.phoneNumber }}</el-col
            >
            <el-col :span="8"
              >现工作单位名称：{{ firstDetails.common.nowWork }}
              <el-button
                type="primary"
                plain
                size="mini"
                @click="getCompanyClick(firstDetails.common.nowWork)"
                >单位信息</el-button
              ></el-col
            >
            <el-col :span="8"
              >工作单位地址：{{ firstDetails.common.workPlace }}</el-col
            >
            <el-col :span="8"
              >工作电话：{{ firstDetails.common.companyPhone }}</el-col
            >
            <el-col :span="8"
              >公司性质：{{ firstDetails.common.companyNature }}</el-col
            >
            <el-col :span="8"
              >婚姻状况：{{ firstDetails.common.marriage }}</el-col
            >
          </el-row>
          <el-row>
            <el-col :span="8" class="img">
              身份证正面
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.common.cardAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="8" class="img">
              身份证反面
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.common.backAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span v-if="firstDetails.common.marriage === '已婚'">配偶信息</span>
          <el-row v-if="firstDetails.common.marriage === '已婚'">
            <el-col :span="8"
              >姓名：{{ firstDetails.common.spouseName }}</el-col
            >
            <el-col :span="8"
              >身份证号：{{ firstDetails.common.idNumber }}</el-col
            >
            <el-col :span="8"
              >户籍地址：{{ firstDetails.common.permanentAddress }}</el-col
            >
            <el-col :span="8">手机号：{{ firstDetails.common.phoneNo }}</el-col>
            <el-col :span="8"
              >税后月收入：{{ firstDetails.common.spouseMonthlyIncome }}</el-col
            >
            <el-col :span="8"
              >单位名称：{{ firstDetails.common.spouseUnitName }}</el-col
            >
            <el-col :span="8"
              >单位地址：{{ firstDetails.common.spouseWorkPlace }}</el-col
            >
            <el-col :span="16"
              >单位电话：{{ firstDetails.common.spouseWorkPhone }}</el-col
            >
            <el-col :span="8" class="img">
              身份证正面
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.common.positiveAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" class="img">
              身份证反面
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.common.versoAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span v-if="sqrhouse[0]">房产</span>
          <el-row>
            <el-col
              :span="4"
              class="img"
              v-for="item in sqrhouse"
              :key="item.fileId"
            >
              <el-image
                style="width: 100px; height: 100px"
                :src="item.filePath"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span v-if="sqrls[0]">流水</span>
          <el-row>
            <el-col
              :span="4"
              class="img"
              v-for="(item, index) in sqrls"
              :key="'ls-' + index"
            >
              <el-image
                style="width: 100px; height: 100px"
                :src="item.filePath"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span v-if="sqrcar[0]">车辆</span>
          <el-row>
            <el-col
              :span="4"
              class="img"
              v-for="(item, index) in sqrcar"
              :key="'cl-' + index"
            >
              <el-image
                style="width: 100px; height: 100px"
                :src="item.filePath"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span v-if="sqrother[0]">其他资产</span>
          <el-row>
            <el-col
              :span="4"
              class="img"
              v-for="(item, index) in sqrother"
              :key="'qt-' + index"
            >
              <el-image
                style="width: 100px; height: 100px"
                :src="item.filePath"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span
            v-if="
              firstDetails.sqrzxsqs ||
              firstDetails.sqrscsfzsqs ||
              firstDetails.sqrsfzfy ||
              firstDetails.sqrposfztxm ||
              firstDetails.sqrposfzgh
            "
            >征信</span
          >
          <el-row>
            <el-col :span="4" class="img" v-if="firstDetails.sqrzxsqs">
              征信授权书
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.sqrzxsqs"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.sqrscsfzsqs">
              手持身份证+授权书
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.sqrscsfzsqs"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.sqrsfzfy">
              身份证复印件
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.sqrsfzfy"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.sqrposfztxm">
              配偶身份证(头面像)
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.sqrposfztxm"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.sqrposfzgh">
              配偶身份证(国徽像)
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.sqrposfzgh"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
        </el-card>
        <!-- 共同偿债人信息 -->
        <el-card class="box-card" v-if="firstDetails.debtService.peopleShip">
          <div slot="header" ref="ref15">
            <span>共同偿债人信息</span>
          </div>
          <el-row>
            <el-col :span="8"
              >与借款人关系：{{ firstDetails.debtService.peopleShip }}</el-col
            >
            <el-col :span="8"
              >姓名：{{ firstDetails.debtService.debtName }}</el-col
            >
            <el-col :span="8"
              >身份证号：{{ firstDetails.debtService.idCard }}</el-col
            >
            <el-col :span="8"
              >学历：{{ firstDetails.debtService.education }}</el-col
            >
            <el-col :span="8"
              >税后月收入：{{ firstDetails.debtService.monthlyIncome }}</el-col
            >
            <el-col :span="8"
              >现住地址：{{ firstDetails.debtService.nowPlace }}</el-col
            >
            <el-col :span="8"
              >手机号：{{ firstDetails.debtService.phoneNumber }}</el-col
            >
            <el-col :span="8"
              >现工作单位名称：{{ firstDetails.debtService.nowWork }}
              <el-button
                type="primary"
                plain
                size="mini"
                @click="getCompanyClick(firstDetails.debtService.nowWork)"
                >单位信息</el-button
              ></el-col
            >
            <el-col :span="8"
              >工作单位地址：{{ firstDetails.debtService.workPlace }}</el-col
            >
            <el-col :span="8"
              >工作电话：{{ firstDetails.debtService.companyPhone }}</el-col
            >
            <el-col :span="16"
              >公司性质：{{ firstDetails.debtService.companyNature }}</el-col
            >
          </el-row>
          <el-row>
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
          <span v-if="czrhouse[0]">房产</span>
          <el-row>
            <el-col
              :span="4"
              class="img"
              v-for="item in czrhouse"
              :key="item.fileId"
            >
              <el-image
                style="width: 100px; height: 100px"
                :src="item.filePath"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span v-if="czrls[0]">流水</span>
          <el-row>
            <el-col
              :span="4"
              class="img"
              v-for="(item, index) in czrls"
              :key="index"
            >
              <el-image
                style="width: 100px; height: 100px"
                :src="item.filePath"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span v-if="czrcar[0]">车辆</span>
          <el-row>
            <el-col
              :span="4"
              class="img"
              v-for="(item, index) in czrcar"
              :key="index"
            >
              <el-image
                style="width: 100px; height: 100px"
                :src="item.filePath"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span v-if="czrother[0]">其他资产</span>
          <el-row>
            <el-col
              :span="4"
              class="img"
              v-for="(item, index) in czrother"
              :key="index"
            >
              <el-image
                style="width: 100px; height: 100px"
                :src="item.filePath"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span
            v-if="
              firstDetails.czrzxsqs ||
              firstDetails.czrscsfzsqs ||
              firstDetails.czrsfzfy ||
              firstDetails.czrposfztxm ||
              firstDetails.czrposfzgh
            "
            >征信</span
          >
          <el-row>
            <el-col :span="4" class="img" v-if="firstDetails.czrzxsqs">
              征信授权书
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.czrzxsqs"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.czrscsfzsqs">
              手持身份证+授权书
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.czrscsfzsqs"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.czrsfzfy">
              身份证复印件
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.czrsfzfy"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.czrposfztxm">
              配偶身份证(头面像)
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.czrposfztxm"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.czrposfzgh">
              配偶身份证(国徽像)
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.czrposfzgh"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
        </el-card>
        <!-- 个人担保 -->
        <el-card class="box-card" v-if="firstDetails.peopleGuarantee[0]">
          <div slot="header" ref="ref16">
            <span>个人担保</span>
          </div>
          <el-row>
            <el-col :span="8"
              >姓名：{{ firstDetails.peopleGuarantee[0].guaranteeName }}</el-col
            >
            <el-col :span="8"
              >身份证号：{{ firstDetails.peopleGuarantee[0].idNumber }}</el-col
            >
            <el-col :span="8"
              >申请人与担保人的关系：{{
                firstDetails.peopleGuarantee[0].peopleShip
              }}</el-col
            >
            <el-col :span="8"
              >学历：{{ firstDetails.peopleGuarantee[0].education }}</el-col
            >
            <el-col :span="8"
              >税后月收入：{{
                firstDetails.peopleGuarantee[0].monthlyIncome
              }}</el-col
            >
            <el-col :span="8"
              >现住地址：{{
                firstDetails.peopleGuarantee[0].detailPlace
              }}</el-col
            >
            <el-col :span="8"
              >手机号：{{ firstDetails.peopleGuarantee[0].phoneNumber }}</el-col
            >
            <el-col :span="8"
              >现工作单位名称：{{ firstDetails.peopleGuarantee[0].workUnit }}
              <el-button
                type="primary"
                plain
                size="mini"
                @click="
                  getCompanyClick(firstDetails.peopleGuarantee[0].workUnit)
                "
                >单位信息</el-button
              ></el-col
            >
            <el-col :span="8"
              >工作单位地址：{{
                firstDetails.peopleGuarantee[0].unitPlace
              }}</el-col
            >
            <el-col :span="24"
              >工作电话：{{ firstDetails.peopleGuarantee[0].workPhone }}</el-col
            >
          </el-row>
          <el-row>
            <el-col :span="8" class="img">
              身份证正面
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.peopleGuarantee[0].cardAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="8" class="img">
              身份证反面
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.peopleGuarantee[0].backAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span v-if="dbrhouse0[0]">房产</span>
          <el-row>
            <el-col
              :span="4"
              class="img"
              v-for="item in dbrhouse0"
              :key="item.fileId"
            >
              <el-image
                style="width: 100px; height: 100px"
                :src="item.filePath"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span v-if="dbrls0[0]">流水</span>
          <el-row>
            <el-col
              :span="4"
              class="img"
              v-for="(item, index) in dbrls0"
              :key="'dbrls0=' + index"
            >
              <el-image
                style="width: 100px; height: 100px"
                :src="item.filePath"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span v-if="dbrcar0[0]">车辆</span>
          <el-row>
            <el-col
              :span="4"
              class="img"
              v-for="(item, index) in dbrcar0"
              :key="'dbrcl0=' + index"
            >
              <el-image
                style="width: 100px; height: 100px"
                :src="item.filePath"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span v-if="dbrother0[0]">其他资产</span>
          <el-row>
            <el-col
              :span="4"
              class="img"
              v-for="(item, index) in dbrother0"
              :key="'dbrqt0=' + index"
            >
              <el-image
                style="width: 100px; height: 100px"
                :src="item.filePath"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span
            v-if="
              firstDetails.dbrzxsqs0 ||
              firstDetails.dbrscsfzsqs0 ||
              firstDetails.dbrsfzfy0 ||
              firstDetails.dbrposfztxm0 ||
              firstDetails.dbrposfzgh0
            "
            >征信</span
          >
          <el-row>
            <el-col :span="4" class="img" v-if="firstDetails.dbrzxsqs0">
              征信授权书
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.dbrzxsqs0"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.dbrscsfzsqs0">
              手持身份证+授权书
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.dbrscsfzsqs0"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.dbrsfzfy0">
              身份证复印件
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.dbrsfzfy0"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.dbrposfztxm0">
              配偶身份证(头面像)
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.dbrposfztxm0"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.dbrposfzgh0">
              配偶身份证(国徽像)
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.dbrposfzgh0"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
        </el-card>
        <!-- 个人担保 -->
        <el-card class="box-card" v-if="firstDetails.peopleGuarantee[1]">
          <div slot="header" ref="ref16">
            <span>个人担保2</span>
          </div>
          <el-row>
            <el-col :span="8"
              >姓名：{{ firstDetails.peopleGuarantee[1].guaranteeName }}</el-col
            >
            <el-col :span="8"
              >身份证号：{{ firstDetails.peopleGuarantee[1].idNumber }}</el-col
            >
            <el-col :span="8"
              >申请人与担保人的关系：{{
                firstDetails.peopleGuarantee[1].peopleShip
              }}</el-col
            >
            <el-col :span="8"
              >学历：{{ firstDetails.peopleGuarantee[1].education }}</el-col
            >
            <el-col :span="8"
              >税后月收入：{{
                firstDetails.peopleGuarantee[1].monthlyIncome
              }}</el-col
            >
            <el-col :span="8"
              >现住地址：{{
                firstDetails.peopleGuarantee[1].detailPlace
              }}</el-col
            >
            <el-col :span="8"
              >手机号：{{ firstDetails.peopleGuarantee[1].phoneNumber }}</el-col
            >
            <el-col :span="8"
              >现工作单位名称：{{ firstDetails.peopleGuarantee[1].workUnit }}
              <el-button
                type="primary"
                plain
                size="mini"
                @click="
                  getCompanyClick(firstDetails.peopleGuarantee[1].workUnit)
                "
                >单位信息</el-button
              ></el-col
            >
            <el-col :span="8"
              >工作单位地址：{{
                firstDetails.peopleGuarantee[1].unitPlace
              }}</el-col
            >
            <el-col :span="24"
              >工作电话：{{ firstDetails.peopleGuarantee[1].workPhone }}</el-col
            >
          </el-row>
          <el-row>
            <el-col :span="8" class="img">
              身份证正面
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.peopleGuarantee[1].cardAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="8" class="img">
              身份证反面
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.peopleGuarantee[1].backAddress"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span v-if="dbrhouse1[0]">房产</span>
          <el-row>
            <el-col
              :span="4"
              class="img"
              v-for="item in dbrhouse1"
              :key="item.fileId"
            >
              <el-image
                style="width: 100px; height: 100px"
                :src="item.filePath"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span v-if="dbrls1[0]">流水</span>
          <el-row>
            <el-col
              :span="4"
              class="img"
              v-for="(item, index) in dbrls1"
              :key="'dbrls1=' + index"
            >
              <el-image
                style="width: 100px; height: 100px"
                :src="item.filePath"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span v-if="dbrcar1[0]">车辆</span>
          <el-row>
            <el-col
              :span="4"
              class="img"
              v-for="(item, index) in dbrcar1"
              :key="'dbrcl1=' + index"
            >
              <el-image
                style="width: 100px; height: 100px"
                :src="item.filePath"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span v-if="dbrother1[0]">其他资产</span>
          <el-row>
            <el-col
              :span="4"
              class="img"
              v-for="(item, index) in dbrother1"
              :key="'dbrqt1=' + index"
            >
              <el-image
                style="width: 100px; height: 100px"
                :src="item.filePath"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
          <span
            v-if="
              firstDetails.dbrzxsqs1 ||
              firstDetails.dbrscsfzsqs1 ||
              firstDetails.dbrsfzfy1 ||
              firstDetails.dbrposfztxm1 ||
              firstDetails.dbrposfzgh1
            "
            >征信</span
          >
          <el-row>
            <el-col :span="4" class="img" v-if="firstDetails.dbrzxsqs1">
              征信授权书
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.dbrzxsqs1"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.dbrscsfzsqs1">
              手持身份证+授权书
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.dbrscsfzsqs1"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.dbrsfzfy1">
              身份证复印件
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.dbrsfzfy1"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.dbrposfztxm1">
              配偶身份证(头面像)
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.dbrposfztxm1"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
            <el-col :span="4" class="img" v-if="firstDetails.dbrposfzgh1">
              配偶身份证(国徽像)
              <el-image
                style="width: 100px; height: 100px"
                :src="firstDetails.dbrposfzgh1"
                :preview-src-list="srcList"
              >
              </el-image>
            </el-col>
          </el-row>
        </el-card>
        <!-- 公司担保 -->
        <div ref="ref17" v-if="firstDetails.companyGuarantee[0]"></div>
        <el-card
          class="box-card"
          v-for="item in firstDetails.companyGuarantee"
          :key="item.id"
        >
          <div slot="header">
            <span>公司担保</span>
          </div>
          <el-row>
            <el-col :span="8"
              >公司注册名称：{{ item.companyName }}
              <el-button
                type="primary"
                plain
                size="mini"
                @click="getCompanyClick(item.companyName)"
                >单位信息</el-button
              ></el-col
            >
            <el-col :span="8">企业类型：{{ item.enterpriseType }}</el-col>
            <el-col :span="8">注册资金(万元)：{{ item.registerMoney }}</el-col>
            <el-col :span="8">成立日期：{{ item.establishTime }}</el-col>
            <el-col :span="8">经营期限(年)：{{ item.operationPeriod }}</el-col>
            <el-col :span="8"
              >公司地址：{{ item.companyCity }}{{ item.companyAddress }}</el-col
            >
            <el-col :span="8">法人身份证号：{{ item.corporateId }}</el-col>
            <el-col :span="8">法人手机号：{{ item.corporatePhone }}</el-col>
          </el-row>
        </el-card>
        <el-card>
          <div slot="header">
            <span style="color: red; font-size: 26px; float: left">*</span>
            <span style="margin-left: 5px">备注</span>
          </div>
          {{ firstDetails.carLoan.beizhu }}
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
          <el-col :span="3">姓名：{{ firstDetails.borrower.userName }}</el-col>
          <el-col :span="4"
            >身份证号：{{ firstDetails.borrower.idCard }}</el-col
          >
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
            <td>{{ credit }}</td>
          </tr>
          <tr style="display: block; margin: 20px; text-indent: 2em">
            <td>备注信息：</td>
            <td></td>
          </tr>
        </table>
        <h4>详版征信</h4>
        <p style="text-indent: 2em; font-size: 14px">{{ detailsCredit }}</p>
      </el-tab-pane>
      <el-tab-pane label="数据辅正" name="third" style="padding: 20px">
        <div class="thirdheader" v-if="fuzhengdata.creditScore">
          FICO评分查询
        </div>
        <el-card style="font-size: 14px" v-if="fuzhengdata.creditScore">
          <div slot="header">
            <span
              >查询时间：{{ fuzhengdata.creditScore[0].source.callTime }}</span
            >
          </div>
          <div
            style="
              height: 38px;
              padding: 0 20px;
              line-height: 38px;
              background-color: #fafbfd;
              margin-bottom: 40px;
            "
          >
            <span>查询条件</span>
            <span style="float: right; margin-right: 20px"
              >手机号：{{ fuzhengdata.creditScore[0].param.mobile }}</span
            >
            <span style="float: right; margin-right: 20px"
              >身份证号：{{ fuzhengdata.creditScore[0].param.idCard }}</span
            >
          </div>
          <div
            style="
              color: #7ed261;
              background-color: #f2faef;
              padding: 10px 20px;
            "
            v-if="fuzhengdata.creditScore[0].busiCode === '2515'"
          >
            {{ fuzhengdata.creditScore[0].busiMsg }}
          </div>
          <div
            style="
              color: rgb(234 27 9);
              background-color: rgb(224 129 129);
              padding: 10px 20px;
            "
            v-else
          >
            {{ fuzhengdata.creditScore[0].busiMsg }}
          </div>
          <div class="left">
            <span>{{ fuzhengdata.creditScore[0].detail.score }}分</span
            ><span style="font-size: 20px">FICO评分</span>
          </div>
          <div class="right">
            <div>原因</div>
            <ol>
              <li
                v-for="(item, index) in fuzhengdata.creditScore[0].detail
                  .reason"
                :key="index"
              >
                {{ item }}
              </li>
            </ol>
          </div>
        </el-card>
        <div class="thirdheader" v-if="fuzhengdata.personalCreditScore">
          中诚信评分
        </div>
        <el-card style="font-size: 14px" v-if="fuzhengdata.personalCreditScore">
          <div slot="header">
            <span
              >查询时间：{{
                fuzhengdata.personalCreditScore[0].source.callTime
              }}</span
            >
          </div>
          <div
            style="
              height: 38px;
              padding: 0 20px;
              line-height: 38px;
              background-color: #fafbfd;
              margin-bottom: 40px;
            "
          >
            <span>查询条件</span>
            <span style="float: right; margin-right: 20px"
              >手机号：{{
                fuzhengdata.personalCreditScore[0].param.mobile
              }}</span
            >
            <span style="float: right; margin-right: 20px"
              >身份证号：{{
                fuzhengdata.personalCreditScore[0].param.idCard
              }}</span
            >
            <span style="float: right; margin-right: 20px"
              >姓名：{{ fuzhengdata.personalCreditScore[0].param.name }}</span
            >
          </div>
          <div
            style="
              color: #7ed261;
              background-color: #f2faef;
              padding: 10px 20px;
            "
            v-if="fuzhengdata.personalCreditScore[0].busiCode === '9025'"
          >
            {{ fuzhengdata.personalCreditScore[0].busiMsg }}
          </div>
          <div
            style="
              color: rgb(234 27 9);
              background-color: rgb(224 129 129);
              padding: 10px 20px;
            "
            v-else
          >
            {{ fuzhengdata.personalCreditScore[0].busiMsg }}
          </div>
          <div class="left">
            <span>{{ fuzhengdata.personalCreditScore[0].detail.score }}分</span
            ><span style="font-size: 20px">综合信用评分</span>
          </div>
          <div class="right">
            <div>
              {{ fuzhengdata.personalCreditScore[0].detail.suggestion }}
            </div>
            <ul>
              <li>
                评分分数段：{{
                  fuzhengdata.personalCreditScore[0].detail.scoreRange
                }}
              </li>
              <li>
                身份属性评分：{{
                  fuzhengdata.personalCreditScore[0].detail.identityScore
                }}
              </li>
              <li>
                信用记录评分：{{
                  fuzhengdata.personalCreditScore[0].detail.creditScore
                }}
              </li>
              <li>
                社交影响评分：{{
                  fuzhengdata.personalCreditScore[0].detail.socialScore
                }}
              </li>
              <li>
                履约能力评分：{{
                  fuzhengdata.personalCreditScore[0].detail.performanceScore
                }}
              </li>
              <li>
                行为特质评分：{{
                  fuzhengdata.personalCreditScore[0].detail.behaviorScore
                }}
              </li>
            </ul>
          </div>
        </el-card>
        <div class="thirdheader" v-if="fuzhengdata.queryMobileOnlineTime">
          手机核查及状态时长
        </div>
        <el-card
          style="font-size: 14px"
          v-if="fuzhengdata.queryMobileOnlineTime"
        >
          <div slot="header">
            <span
              >查询时间：{{
                fuzhengdata.queryMobileOnlineTime[0].source.callTime
              }}</span
            >
          </div>
          <div
            style="
              height: 38px;
              padding: 0 20px;
              line-height: 38px;
              background-color: #fafbfd;
              margin-bottom: 40px;
            "
          >
            <span>查询条件</span>
            <span style="float: right; margin-right: 20px"
              >手机号：{{
                fuzhengdata.queryMobileOnlineTime[0].param.mobile
              }}</span
            >
            <span style="float: right; margin-right: 20px"
              >身份证号：{{
                fuzhengdata.queryMobileOnlineTime[0].param.idCard
              }}</span
            >
            <span style="float: right; margin-right: 20px"
              >姓名：{{ fuzhengdata.queryMobileOnlineTime[0].param.name }}</span
            >
          </div>
          <div
            style="
              color: #7ed261;
              background-color: #f2faef;
              padding: 10px 20px;
            "
            v-if="
              fuzhengdata.queryMobileOnlineTime[0].detail.checkJson.busiCode ===
              '9066'
            "
          >
            一致
          </div>
          <div
            style="
              color: rgb(234 27 9);
              background-color: rgb(224 129 129);
              padding: 10px 20px;
            "
            v-else
          >
            不一致
          </div>
          <el-row style="padding: 20px">
            <el-col :span="8"
              >手机号状态：
              <span
                v-if="
                  fuzhengdata.queryMobileOnlineTime[0].detail.statusJson
                    .PHONE_STATUS === 1
                "
                >正常在用</span
              >
              <span
                v-else-if="
                  fuzhengdata.queryMobileOnlineTime[0].detail.statusJson
                    .PHONE_STATUS === 2
                "
                >停机</span
              >
              <span
                v-else-if="
                  fuzhengdata.queryMobileOnlineTime[0].detail.statusJson
                    .PHONE_STATUS === 3
                "
                >未启用</span
              >
              <span
                v-else-if="
                  fuzhengdata.queryMobileOnlineTime[0].detail.statusJson
                    .PHONE_STATUS === 4
                "
                >已销号</span
              >
              <span
                v-else-if="
                  fuzhengdata.queryMobileOnlineTime[0].detail.statusJson
                    .PHONE_STATUS === 5
                "
                >其他</span
              >
              <span
                v-else-if="
                  fuzhengdata.queryMobileOnlineTime[0].detail.statusJson
                    .PHONE_STATUS === 6
                "
                >预销号</span
              >
            </el-col>
            <el-col :span="8">最近一次销号时间：</el-col>
            <el-col :span="8">归属地：</el-col>
            <el-col :span="8"
              >在网时长：{{
                fuzhengdata.queryMobileOnlineTime[0].detail.statusJson
                  .TIME_LENGTH
              }}</el-col
            >
            <el-col :span="8"
              >运营商：
              <span
                v-if="
                  fuzhengdata.queryMobileOnlineTime[0].detail.statusJson
                    .OPERATOR === 1
                "
                >中国电信</span
              >
              <span
                v-else-if="
                  fuzhengdata.queryMobileOnlineTime[0].detail.statusJson
                    .OPERATOR === 2
                "
                >中国移动</span
              >
              <span
                v-else-if="
                  fuzhengdata.queryMobileOnlineTime[0].detail.statusJson
                    .OPERATOR === 3
                "
                >中国联通</span
              >
            </el-col>
          </el-row>
        </el-card>
        <div class="thirdheader" v-if="fuzhengdata.realNameAuth">实名认证</div>
        <el-card style="font-size: 14px" v-if="fuzhengdata.realNameAuth">
          <div slot="header">
            <span
              >查询时间：{{ fuzhengdata.realNameAuth[0].source.callTime }}</span
            >
          </div>
          <div
            style="
              height: 38px;
              padding: 0 20px;
              line-height: 38px;
              background-color: #fafbfd;
              margin-bottom: 40px;
            "
          >
            <span>查询条件</span>
            <span style="float: right; margin-right: 20px"
              >身份证号：{{ fuzhengdata.realNameAuth[0].param.idCard }}</span
            >
            <span style="float: right; margin-right: 20px"
              >姓名：{{ fuzhengdata.realNameAuth[0].param.name }}</span
            >
          </div>
          <div
            style="
              color: #7ed261;
              background-color: #f2faef;
              padding: 10px 20px;
            "
            v-if="fuzhengdata.realNameAuth[0].busiCode === '2241'"
          >
            {{ fuzhengdata.realNameAuth[0].busiMsg }}
          </div>
          <div
            style="
              color: rgb(234 27 9);
              background-color: rgb(224 129 129);
              padding: 10px 20px;
            "
            v-else
          >
            {{ fuzhengdata.realNameAuth[0].busiMsg }}
          </div>
        </el-card>
        <div class="thirdheader" v-if="fuzhengdata.cardCreditScore">
          百融评分
        </div>
        <el-card style="font-size: 14px" v-if="fuzhengdata.cardCreditScore">
          <div slot="header">
            <span
              >查询时间：{{
                fuzhengdata.cardCreditScore[0].source.callTime
              }}</span
            >
          </div>
          <div
            style="
              height: 38px;
              padding: 0 20px;
              line-height: 38px;
              background-color: #fafbfd;
              margin-bottom: 40px;
            "
          >
            <span>查询条件</span>
            <span style="float: right; margin-right: 20px"
              >手机号：{{ fuzhengdata.cardCreditScore[0].param.mobile }}</span
            >
            <span style="float: right; margin-right: 20px"
              >身份证号：{{ fuzhengdata.cardCreditScore[0].param.idCard }}</span
            >
            <span style="float: right; margin-right: 20px"
              >姓名：{{ fuzhengdata.cardCreditScore[0].param.name }}</span
            >
          </div>
          <div
            style="
              color: #7ed261;
              background-color: #f2faef;
              padding: 10px 20px;
            "
            v-if="fuzhengdata.cardCreditScore[0].busiCode === '9055'"
          >
            {{ fuzhengdata.cardCreditScore[0].busiMsg }}
          </div>
          <div
            style="
              color: rgb(234 27 9);
              background-color: rgb(224 129 129);
              padding: 10px 20px;
            "
            v-else
          >
            {{ fuzhengdata.cardCreditScore[0].busiMsg }}
          </div>
          <div class="left">
            <span>{{ fuzhengdata.cardCreditScore[0].detail.score }}分</span
            ><span style="font-size: 20px">信用卡信用评分</span>
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="精真估" name="fourth">
        <el-button
          v-if="!JZGData.AssessmentReportPDF"
          type="primary"
          round
          style="margin: 20px 10px"
          @click="getJZGData"
          >点击查询精真估</el-button
        >
        <iframe
          v-if="JZGData.AssessmentReportPDF"
          width="100%"
          height="800px"
          frameborder="0"
          :src="JZGData.AssessmentReportPDF"
          id="JZGIframe"
        />
      </el-tab-pane>
      <el-tab-pane label="意见" name="fifth">
        <h5 style="font-size: 14px; margin: 10px 0">初审意见</h5>
        <p style="font-size: 14px; text-indent: 2em">{{ firstTextarea }}</p>
        <h5 style="font-size: 14px; margin: 10px 0" v-if="lastbeizhu">
          初审内部意见
        </h5>
        <p style="font-size: 14px; text-indent: 2em" v-if="lastbeizhu">
          {{ lastbeizhu }}
        </p>
        <h5 style="font-size: 14px; margin: 10px 0">终审意见</h5>
        <el-input
          type="textarea"
          :autosize="{ minRows: 3 }"
          placeholder="请输入终审意见"
          v-model="textarea"
        />
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
    <el-dialog
      title="数据辅证"
      :visible.sync="dialogVisible"
      width="90%"
      center
    >
      <el-tabs v-model="activeName1" tab-position="left">
        <el-tab-pane label="贷前策略" name="first">
          <iframe
            width="100%"
            height="700px"
            frameborder="0"
            :src="iframeSrc"
            id="bdIframe"
          />
        </el-tab-pane>
        <el-tab-pane label="验证流程" name="second">
          <iframe
            width="100%"
            height="700px"
            frameborder="0"
            :src="iframeSrc1"
            id="bdIframe1"
          />
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
    <el-dialog title="流水" :visible.sync="PDFdialogVisible" width="60%">
      <div v-for="(item, index) in pdfList" :key="'liushui-'+index">
        <el-button-group>
          <el-button
            type="primary"
            icon="el-icon-arrow-left"
            size="mini"
            @click="prePage"
            >上一页</el-button
          >
          <el-button type="primary" size="mini" @click="nextPage"
            >下一页<i class="el-icon-arrow-right el-icon--right"></i
          ></el-button>
        </el-button-group>
        <div style="margintop: 10px; color: #409eff">
          {{ pageNum }} / {{ pageTotalNum }}
        </div>
        <pdf
          ref="pdf"
          :page="pageNum"
          :src="item"
          @progress="loadedRatio = $event"
          @num-pages="pageTotalNum = $event"
        ></pdf>
      </div>
    </el-dialog>
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
        <el-button type="primary" @click="finalTrialHandle2">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="单位信息"
      :visible.sync="dialogCompany"
      width="70%"
      center
      style="padding: 20px 0"
    >
      <table border="1" cellspacing="0" style="margin: 0 auto 70px">
        <tbody class="company">
          <!-- 第1行 -->
          <tr>
            <td>统一社会信用代码</td>
            <td>{{ companyData.creditCode }}</td>
            <td>企业名称</td>
            <td colspan="3">{{ companyData.name }}</td>
          </tr>
          <!-- 第2行 -->
          <tr>
            <td>法定代表人</td>
            <td>{{ companyData.operName }}</td>
            <td>企业状态</td>
            <td>{{ companyData.status }}</td>
            <td>成立日期</td>
            <td>{{ companyData.startDate }}</td>
          </tr>
          <!-- 第3行 -->
          <tr>
            <td>注册资本</td>
            <td>{{ companyData.registCapi }}</td>
            <td>实缴资本</td>
            <td>{{ companyData.recCap }}</td>
            <td>组织机构代码</td>
            <td>{{ companyData.orgNo }}</td>
          </tr>
          <!-- 第4行 -->
          <tr>
            <td>企业类型</td>
            <td>{{ companyData.econKind }}</td>
            <td>登记机关</td>
            <td>{{ companyData.belongOrg }}</td>
            <td>曾用名</td>
            <td>{{ companyData.originalName }}</td>
          </tr>
          <!-- 第5行 -->
          <tr>
            <td>经营范围</td>
            <td colspan="5">{{ companyData.scope }}</td>
          </tr>
          <!-- 第6行 -->
          <tr>
            <td>注册地址</td>
            <td colspan="5">{{ companyData.address }}</td>
          </tr>
        </tbody>
      </table>
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
  findPhoto,
  getCompany,
} from '@/api/process/firstTrial'
import { getSelectState, findDetailsCredit } from '@/api/process/business'
import {
  finalHandle,
  getFinalTrialHandle,
  addSupplement,
} from '@/api/process/finalTrial'
import axios from 'axios'

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
      // url:
      //   'http://192.168.31.86:8080/profile/2021/01/11/18ec8853-7584-45e0-ab25-0a8a1e6576f6.pdf',
      numPages: null, // pdf 总页数
      activeName: 'first', // Tabs
      activeName1: 'first', // Tabs1
      textarea: '', // 终审意见
      approvalType: null, // 终审结果
      firstTextarea: '',
      firstDetails: {
        applicant: {},
        business: {},
        borrower: {},
        peopleGuarantee: [{}, {}],
        companyGuarantee: [],
        debtService: {},
        basics: {},
        carLoan: {},
        contacts: {},
        startPage: {},
        relation: [],
        guarantee: [],
        liushui: [],
        house: [],
        common: {},
        visit: [],
      }, // 终审详情
      borrowerSrcList: [], // 借款人查看大图数组
      relationSrcList: [], // 关联人查看大图数组
      guaranteeSrcList: [], // 担保人查看大图数组
      srcList: [], // 图片数组
      JZGData: {}, // 精真估数据
      // creditExtensionData: {
      //   borrower: [],
      //   car: {},
      //   credit: {},
      //   house: {
      //     photoFile: [],
      //   },
      //   liushui: {
      //     photoFile: [],
      //   },
      //   qita: {},
      //   visit: {
      //     photoFile: [],
      //   },
      // },
      pdfList: [],
      PDFdialogVisible: false,
      liushuiPhoto: [],
      pageNum: 1,
      pageTotalNum: 1, // 总页数
      loadedRatio: 0, // 当前页面的加载进度，范围是0-1 ，等于1的时候代表当前页已经完全加载完成了
      house: [],
      sqrhouse: [],
      czrhouse: [],
      dbrhouse0: [],
      dbrhouse1: [],
      poperty: [],
      carinfo: [],
      liushui: [],
      sqrls: [],
      czrls: [],
      dbrls0: [],
      dbrls1: [],
      sqrcar: [],
      czrcar: [],
      dbrcar0: [],
      dbrcar1: [],
      sqrother: [],
      czrother: [],
      dbrother0: [],
      dbrother1: [],
      dialogRemark: false,
      lastbeizhu: '',
      beizhu: '',
      approvalType2: '',
      inputbeizhu: '',
      ischaxun: false,
      fuzhengdata: {
        cardCreditScore: [
          {
            source: {},
            param: {},
            detail: {},
          },
        ],
        creditScore: [
          {
            source: {},
            param: {},
            detail: {
              reason: [],
            },
          },
        ],
        mobileRealNameCheck: [
          {
            source: {},
            param: {},
            detail: {},
          },
        ],
        personalCreditScore: [
          {
            source: {},
            param: {},
            detail: {},
          },
        ],
        queryMobileOnlineTime: [
          {
            source: {},
            param: {},
            detail: {
              checkJson: {},
              statusJson: {},
            },
          },
        ],
        realNameAuth: [
          {
            source: {},
            param: {},
            detail: {},
          },
        ],
      },
      dialogCompany: false, //企查查弹框
      companyData: {}, // 企查查数据
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
      if (to.path == '/process/finalTrialDetails') {
        this.JZGData = {}
        this.watchNum = 0
        this.activeName = 'first'
        this.activeName1 = 'first'
        this.textarea = ''
        this.approvalType = ''
        this.ischaxun = false
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
        // console.log(data)
        this.firstDetails = data
        this.srcList = data.pic
        this.getBaiRongToken()
        this.getDetailsCredit()
        this.findSelectState()
        this.findFirstHandle()
        this.findFinalHandle()
        // this.getCreditExtensionData()
        this.srcList.push(
          data.borrower.obverseAddress,
          data.borrower.backAddress,
          data.applicant.cardAddress,
          data.applicant.backAddress
        )
        if (data.relation) {
          data.relation.forEach((item) => {
            this.srcList.push(item.obverseAddress, item.backAddress)
            if (item.creditPower == 1) {
              this.srcList.push(item.powerAddress)
            }
          })
        }
        if (data.guarantee) {
          data.guarantee.forEach((item) => {
            this.srcList.push(item.obverseAddress, item.backAddress)
            if (item.creditPower == 1) {
              this.srcList.push(item.powerAddress)
            }
          })
        }
        if (data.common) {
          this.srcList.push(
            data.common.cardAddress,
            data.common.backAddress,
            data.common.positiveAddress,
            data.common.versoAddress
          )
        }
        if (data.debtService) {
          this.srcList.push(
            data.debtService.cardAddress,
            data.debtService.backAddress
          )
        }
        data.visit.forEach((item) => {
          this.srcList.push(item.filePath)
        })
        data.liushui.forEach((item) => {
          if (item.fileName.indexOf('pdf') != -1) {
            this.pdfList.push(item.filePath)
          } else {
            this.srcList.push(item.filePath)
            if (item.fileName === 'picture') {
              this.liushui.push(item)
            } else if (item.fileName === 'sqrls') {
              this.sqrls.push(item)
            } else if (item.fileName === 'czrls') {
              this.czrls.push(item)
            } else if (item.fileName === 'dbrls0') {
              this.dbrls0.push(item)
            } else if (item.fileName === 'dbrls1') {
              this.dbrls1.push(item)
            }
          }
        })
        data.house.forEach((item) => {
          this.srcList.push(item.filePath)
          if (item.fileName === 'house') {
            this.house.push(item)
          } else if (item.fileName === 'sqrhouse') {
            this.sqrhouse.push(item)
          } else if (item.fileName === 'czrhouse') {
            this.czrhouse.push(item)
          } else if (item.fileName === 'dbrhouse0') {
            this.dbrhouse0.push(item)
          } else if (item.fileName === 'dbrhouse1') {
            this.dbrhouse1.push(item)
          } else if (item.fileName === 'poperty') {
            this.poperty.push(item)
          } else if (item.fileName === 'carinfo') {
            this.carinfo.push(item)
          }
        })
        data.car.forEach((item) => {
          this.srcList.push(item.filePath)
          if (item.fileName === 'sqrcar') {
            this.sqrcar.push(item)
          } else if (item.fileName === 'czrcar') {
            this.czrcar.push(item)
          } else if (item.fileName === 'dbrcar0') {
            this.dbrcar0.push(item)
          } else if (item.fileName === 'dbrcar1') {
            this.dbrcar1.push(item)
          }
        })
        data.qita.forEach((item) => {
          this.srcList.push(item.filePath)
          if (item.fileName === 'sqrother') {
            this.sqrother.push(item)
          } else if (item.fileName === 'czrother') {
            this.czrother.push(item)
          } else if (item.fileName === 'dbrother0') {
            this.dbrother0.push(item)
          } else if (item.fileName === 'dbrother1') {
            this.dbrother1.push(item)
          }
        })
        data.peopleGuarantee.forEach((item) => {
          this.srcList.push(item.backAddress, item.cardAddress)
        })
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
    // // pdf文件
    // getNumPages(url) {
    //   let loadingTask = pdf.createLoadingTask(url)
    //   loadingTask.promise
    //     .then((pdf) => {
    //       this.numPages = pdf.numPages
    //     })
    //     .catch((err) => {
    //       console.error('pdf 加载失败', err)
    //     })
    // },
    // 上一页
    prePage() {
      let page = this.pageNum
      page = page > 1 ? page - 1 : this.pageTotalNum
      this.pageNum = page
    },

    // 下一页
    nextPage() {
      let page = this.pageNum
      page = page < this.pageTotalNum ? page + 1 : 1
      this.pageNum = page
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
    async getBaiRongMelting(who, index) {
      let userName
      let phoneNumber
      let idCard
      this.watchNum = 1
      if (who === 'jiekuanren') {
        userName = this.firstDetails.borrower.userName
        phoneNumber = this.firstDetails.borrower.phoneNumber
        idCard = this.firstDetails.borrower.idCard
      } else if (who === 'peiou') {
        userName = this.firstDetails.applicant.spouseName
        phoneNumber = this.firstDetails.applicant.phoneNo
        idCard = this.firstDetails.applicant.idNumber
      } else if (who === 'guanlianren') {
        userName = this.firstDetails.relation[index].spouseName
        phoneNumber = this.firstDetails.relation[index].phoneNo
        idCard = this.firstDetails.relation[index].idNumber
      } else if (who === 'danbaoren') {
        userName = this.firstDetails.guarantee[index].spouseName
        phoneNumber = this.firstDetails.guarantee[index].phoneNo
        idCard = this.firstDetails.guarantee[index].idNumber
      }
      try {
        const data = await getByMelting({
          userName,
          phoneNumber,
          idCard,
        })
        this.baiRongMeltingData = JSON.parse(data.data)
        this.baiRongMeltingMsg = JSON.parse(data.msg)
        this.watchNum++
        this.dialogVisible = true
      } catch (error) {
        // console.log(error)
      }
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
    finalTrialHandle(approvalType) {
      if (this.textarea.trim()) {
        this.approvalType2 = approvalType
        this.dialogRemark = true
      } else {
        this.msgError('请输入意见')
      }
    },
    // 终审处理
    async finalTrialHandle2() {
      const that = this
      this.$confirm('确认操作?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          return finalHandle({
            advise: that.textarea,
            approvalType: that.approvalType2,
            transactionCode: that.$route.query.transactionCode,
            userId: Number(that.$route.query.userId),
            beizhu: that.beizhu,
          })
        })
        .then(() => {
          this.dialogRemark = false
          this.beizhu = ''
          this.msgSuccess('操作成功')
          // this.findFinalHandle()
          if (this.gongchangren || this.danbaoren || this.gtsqr) {
          }
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
            path: '/process/finalTrial',
            name: 'FinalTrial',
          })
        })
        .catch(function () {})
    },
    // 终审结果回显
    async findFinalHandle() {
      try {
        const { data } = await getFinalTrialHandle(
          this.$route.query.transactionCode
        )
        if (data.advise) {
          this.textarea = data.advise
        }
        this.approvalType = data.approvalType
        this.inputbeizhu = data.beizhu
      } catch (error) {}
    },
    // 初审结果回显
    async findFirstHandle() {
      try {
        const { data } = await getFirstHandle(this.$route.query.transactionCode)
        this.firstTextarea = data.advise
        this.lastbeizhu = data.beizhu
      } catch (error) {}
    },
    // 查询精真估结果
    async getJZGData() {
      try {
        const { data } = await getJingZhenGuData(
          this.$route.query.transactionCode
        ) // ZYJR202012251419140003
        // console.log(JSON.parse(data))
        this.JZGData = JSON.parse(data).Data
      } catch (error) {
        // console.log(error)
      }
    },
    // 获取授信详情
    async getCreditExtensionData() {
      try {
        const { data } = await findPhoto(
          this.$route.query.transactionCode,
          this.$route.query.userId
        )
        // console.log(data)
        if (data.qita.photoFile) {
          data.qita.photoFile.forEach((item) => {
            data[item.fileName] = item.filePath
            this.srcList.push(item.filePath)
          })
        } else {
          data.qita.photoFile = []
        }
        // data.car.photoFile.forEach((item) => {
        //   data[item.fileName] = item.filePath
        //   this.srcList.push(item.filePath)
        // })
        if (data.credit.photoFile) {
          data.credit.photoFile.forEach((item) => {
            data[item.fileName] = item.filePath
            this.srcList.push(item.filePath)
          })
        } else {
          data.credit.photoFile = []
        }
        if (data.liushui.photoFile) {
          data.liushui.photoFile.forEach((item) => {
            if (item.fileName.indexOf('pdf') != -1) {
              this.pdfList.push(item.filePath)
              // this.getNumPages(item.filePath)
            } else {
              this.liushuiPhoto.push(item.filePath)
              this.srcList.push(item.filePath)
            }
          })
        } else {
          data.liushui.photoFile = []
        }
        if (data.house.photoFile) {
          data.house.photoFile.forEach((item) => {
            this.srcList.push(item.filePath)
          })
        } else {
          data.house.photoFile = []
        }
        if (data.visit.photoFile) {
          data.visit.photoFile.forEach((item) => {
            this.srcList.push(item.filePath)
          })
        } else {
          data.visit.photoFile = []
        }
        if (data.borrower) {
          data.borrower.forEach((item) => {
            this.srcList.push(item.filePath)
          })
        } else {
          data.borrower = []
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
    // 导航栏
    tabsLeave(activeName, oldActiveName) {
      if (activeName === 'third' && !this.ischaxun) {
        axios
          .post(
            `http://api.hrfax.cn/valueAddedQuery/eInstalmentQueryValueList.html?orderReportId=${this.firstDetails.borrower.privateCode}&idCard=${this.firstDetails.borrower.idCard}&checkType=2`
          )
          .then((res) => {
            this.fuzhengdata = res.data.data
            if (this.fuzhengdata.creditScore) {
              this.fuzhengdata.creditScore[0].detail.reason = this.fuzhengdata.creditScore[0].detail.reason.split(
                '|'
              )
            }
          })
          .catch((res) => {
            this.msgError(res)
          })
        this.ischaxun = true
      }
    },
    // 企查查
    async getCompanyClick(name) {
      try {
        const { data } = await getCompany({
          name,
          transactionCode: this.$route.query.transactionCode,
        })
        this.companyData = JSON.parse(data)
        this.dialogCompany = true
        console.log(JSON.parse(data))
      } catch (error) {}
    },
  },
  created() {
    this.getFinalData()
  },
  mounted() {
    // this.getNumPages()
    /**
     * iframe-高自适应显示
     */
    // const oIframe = document.getElementById('bdIframe')
    // const oIframe1 = document.getElementById('bdIframe1')
    // const deviceHeight = document.querySelector('body').clientHeight
    // oIframe.style.height = Number(deviceHeight) - 170 + 'px' //数字是页面布局高度差
    // oIframe1.style.height = Number(deviceHeight) - 170 + 'px' //数字是页面布局高度差
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
.thirdheader {
  height: 38px;
  border-radius: 5px;
  background-color: rgb(24, 144, 255);
  margin: 20px 0px;
  padding-left: 50px;
  color: #fff;
  line-height: 38px;
}
.left {
  display: flex;
  float: left;
  flex-direction: column;
  width: 200px;
  height: 200px;
  padding-top: 60px;
  font-size: 30px;
  color: rgb(24, 144, 255);
  text-align: center;
  align-items: center;
}
.right {
  height: 200px;
  padding-left: 200px;
  div {
    height: 38px;
    line-height: 38px;
    color: #ccc;
  }
  li {
    margin: 5px 0;
  }
}
</style>
