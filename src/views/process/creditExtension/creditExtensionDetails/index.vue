<template>
  <div class="app-container">
    <!-- 共同申请人信息 -->
    <!-- <el-card class="box-card" v-if="creditExtensionData.common">
      <div slot="header" ref="ref2">
        <span>共同申请人信息</span>
      </div>
      <el-row>
        <el-col :span="8"
          >与借款人关系：{{ creditExtensionData.common.peopleShip }}</el-col
        >
        <el-col :span="8"
          >姓名：{{ creditExtensionData.common.debtName }}</el-col
        >
        <el-col :span="8"
          >身份证号：{{ creditExtensionData.common.idCard }}</el-col
        >
        <el-col :span="8"
          >学历：{{ creditExtensionData.common.education }}</el-col
        >
        <el-col :span="8"
          >税后月收入：{{ creditExtensionData.common.monthlyIncome }}</el-col
        >
        <el-col :span="8"
          >现住地址：{{ creditExtensionData.common.nowPlace }}</el-col
        >
        <el-col :span="8"
          >手机号：{{ creditExtensionData.common.phoneNumber }}</el-col
        >
        <el-col :span="8"
          >现工作单位名称：{{ creditExtensionData.common.nowWork }}</el-col
        >
        <el-col :span="8"
          >工作单位地址：{{ creditExtensionData.common.workPlace }}</el-col
        >
        <el-col :span="8"
          >工作电话：{{ creditExtensionData.common.companyPhone }}</el-col
        >
        <el-col :span="8"
          >公司性质：{{ creditExtensionData.common.companyNature }}</el-col
        >
        <el-col :span="8"
          >婚姻状况：{{ creditExtensionData.common.marriage }}</el-col
        >
        <el-col :span="8" class="img">
          身份证正面
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.common.cardAddress"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="8" class="img">
          身份证反面
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.common.backAddress"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
      <span v-if="creditExtensionData.common.marriage === '已婚'"
        >配偶信息</span
      >
      <el-row v-if="creditExtensionData.common.marriage === '已婚'">
        <el-col :span="8"
          >姓名：{{ creditExtensionData.common.spouseName }}</el-col
        >
        <el-col :span="8"
          >身份证号：{{ creditExtensionData.common.idNumber }}</el-col
        >
        <el-col :span="8"
          >户籍地址：{{ creditExtensionData.common.permanentAddress }}</el-col
        >
        <el-col :span="8"
          >手机号：{{ creditExtensionData.common.phoneNo }}</el-col
        >
        <el-col :span="8"
          >税后月收入：{{
            creditExtensionData.common.spouseMonthlyIncome
          }}</el-col
        >
        <el-col :span="8"
          >单位名称：{{ creditExtensionData.common.spouseUnitName }}</el-col
        >
        <el-col :span="8"
          >单位地址：{{ creditExtensionData.common.spouseWorkPlace }}</el-col
        >
        <el-col :span="16"
          >单位电话：{{ creditExtensionData.common.spouseWorkPhone }}</el-col
        >
        <el-col :span="8" class="img">
          身份证正面
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.common.positiveAddress"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="8" class="img">
          身份证反面
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.common.versoAddress"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
    </el-card> -->
    <!-- 共同偿债人信息 -->
    <!-- <el-card class="box-card" v-if="creditExtensionData.debtService">
      <div slot="header" ref="ref2">
        <span>共同偿债人信息</span>
      </div>
      <el-row>
        <el-col :span="8"
          >与借款人关系：{{
            creditExtensionData.debtService.peopleShip
          }}</el-col
        >
        <el-col :span="8"
          >姓名：{{ creditExtensionData.debtService.debtName }}</el-col
        >
        <el-col :span="8"
          >身份证号：{{ creditExtensionData.debtService.idCard }}</el-col
        >
        <el-col :span="8"
          >学历：{{ creditExtensionData.debtService.education }}</el-col
        >
        <el-col :span="8"
          >税后月收入：{{
            creditExtensionData.debtService.monthlyIncome
          }}</el-col
        >
        <el-col :span="8"
          >现住地址：{{ creditExtensionData.debtService.nowPlace }}</el-col
        >
        <el-col :span="8"
          >手机号：{{ creditExtensionData.debtService.phoneNumber }}</el-col
        >
        <el-col :span="8"
          >现工作单位名称：{{ creditExtensionData.debtService.nowWork }}</el-col
        >
        <el-col :span="8"
          >工作单位地址：{{ creditExtensionData.debtService.workPlace }}</el-col
        >
        <el-col :span="8"
          >工作电话：{{ creditExtensionData.debtService.companyPhone }}</el-col
        >
        <el-col :span="16"
          >公司性质：{{ creditExtensionData.debtService.companyNature }}</el-col
        >
        <el-col :span="8" class="img">
          身份证正面
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.debtService.cardAddress"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="8" class="img">
          身份证反面
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.debtService.backAddress"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
    </el-card> -->
    <!-- 个人担保 -->
    <!-- <el-card class="box-card" v-if="creditExtensionData.peopleGuarantee">
      <div slot="header" ref="ref2">
        <span>个人担保</span>
      </div>
      <el-row>
        <el-col :span="8"
          >姓名：{{ creditExtensionData.peopleGuarantee.guaranteeName }}</el-col
        >
        <el-col :span="8"
          >身份证号：{{ creditExtensionData.peopleGuarantee.idNumber }}</el-col
        >
        <el-col :span="8"
          >申请人与担保人的关系：{{
            creditExtensionData.peopleGuarantee.peopleShip
          }}</el-col
        >
        <el-col :span="8"
          >学历：{{ creditExtensionData.peopleGuarantee.education }}</el-col
        >
        <el-col :span="8"
          >税后月收入：{{
            creditExtensionData.peopleGuarantee.monthlyIncome
          }}</el-col
        >
        <el-col :span="8"
          >现住地址：{{
            creditExtensionData.peopleGuarantee.detailPlace
          }}</el-col
        >
        <el-col :span="8"
          >手机号：{{ creditExtensionData.peopleGuarantee.phoneNumber }}</el-col
        >
        <el-col :span="8"
          >现工作单位名称：{{
            creditExtensionData.peopleGuarantee.workUnit
          }}</el-col
        >
        <el-col :span="8"
          >工作单位地址：{{
            creditExtensionData.peopleGuarantee.unitPlace
          }}</el-col
        >
        <el-col :span="24"
          >工作电话：{{ creditExtensionData.peopleGuarantee.workPhone }}</el-col
        >
        <el-col :span="8" class="img">
          身份证正面
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.peopleGuarantee.cardAddress"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="8" class="img">
          身份证反面
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.peopleGuarantee.backAddress"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
    </el-card> -->
    <!-- 公司担保 -->
    <!-- <el-card class="box-card" v-if="creditExtensionData.companyGuarantee">
      <div slot="header" ref="ref2">
        <span>公司担保</span>
      </div>
      <el-row>
        <el-col :span="8"
          >公司注册名称：{{
            creditExtensionData.companyGuarantee.companyName
          }}</el-col
        >
        <el-col :span="8"
          >企业类型：{{
            creditExtensionData.companyGuarantee.enterpriseType
          }}</el-col
        >
        <el-col :span="8"
          >注册资金(万元)：{{
            creditExtensionData.companyGuarantee.registerMoney
          }}</el-col
        >
        <el-col :span="8"
          >成立日期：{{
            creditExtensionData.companyGuarantee.establishTime
          }}</el-col
        >
        <el-col :span="8"
          >经营期限(年)：{{
            creditExtensionData.companyGuarantee.operationPeriod
          }}</el-col
        >
        <el-col :span="8"
          >公司地址：{{ creditExtensionData.companyGuarantee.companyCity
          }}{{ creditExtensionData.companyGuarantee.companyAddress }}</el-col
        >
        <el-col :span="8"
          >法人身份证号：{{
            creditExtensionData.companyGuarantee.corporateId
          }}</el-col
        >
        <el-col :span="8"
          >法人手机号：{{
            creditExtensionData.companyGuarantee.corporatePhone
          }}</el-col
        >
      </el-row>
    </el-card> -->
    <!-- <el-card class="box-card">
      <div slot="header" ref="ref10">
        <span>图片信息</span>
      </div>
      <span>车辆</span>
      <el-row>
        <el-col :span="4" class="img">
          左前45度
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData[283]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          右后45度
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData[290]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          里程表
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData[285]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          发动机舱左侧
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData[433]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          发动机舱右侧
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData[432]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          车辆铭牌
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData[286]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          VIN码
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData[287]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          前排座椅
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData[284]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          后排座椅
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData[288]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          备胎槽全景
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData[434]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          后备箱开启
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData[435]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          中控台
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData[289]"
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
            :src="creditExtensionData['登记证信息栏1-2页']"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          机动车登记证3-4
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData['登记证信息栏3-4页']"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col
          :span="4"
          class="img"
          v-if="creditExtensionData['登记证信息栏5-6页']"
        >
          机动车登记证5-6
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData['登记证信息栏5-6页']"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col
          :span="4"
          class="img"
          v-if="creditExtensionData['登记证信息栏7-8页']"
        >
          机动车登记证7-8
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData['登记证信息栏7-8页']"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col
          :span="4"
          class="img"
          v-if="creditExtensionData['登记证信息栏9-10页']"
        >
          机动车登记证9-10
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData['登记证信息栏9-10页']"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
      <span v-if="creditExtensionData.data.visit.photoFile[0]">家访照片</span>
      <el-row>
        <el-col
          :span="4"
          class="img"
          v-for="item in creditExtensionData.data.visit.photoFile"
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
      <span
        v-if="
          creditExtensionData.xshchy ||
          creditExtensionData.jszzy ||
          creditExtensionData.supply
        "
        >补充资料</span
      >
      <el-row>
        <el-col :span="4" class="img" v-if="creditExtensionData.xshchy">
          销售和车合影
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.xshchy"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.jszzy">
          其他资料
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.jszzy"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.supply">
          补充1
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.supply"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
      <span v-if="creditExtensionData.data.liushui.photoFile[0]">流水</span>
      <el-row>
        <el-col
          :span="4"
          class="img"
          v-for="(item, index) in liushuiPhoto"
          :key="index"
        >
          <el-image
            style="width: 100px; height: 100px"
            :src="item"
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
      <span v-if="creditExtensionData.data.house.photoFile[0]">房产</span>
      <el-row>
        <el-col
          :span="4"
          class="img"
          v-for="item in creditExtensionData.data.house.photoFile"
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
            :src="creditExtensionData.data.borrower[0]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          申请人身份证（国徽面）
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.data.borrower[1]"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          申请人驾驶证正/副页
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.lisense"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
      <span v-if="creditExtensionData.pozxsqs">配偶</span>
      <el-row>
        <el-col :span="4" class="img" v-if="creditExtensionData.pozxsqs">
          征信授权书
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.pozxsqs"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.poscsfzsqs">
          手持身份证+授权书
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.poscsfzsqs"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.posfzfy">
          身份证复印件
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.posfzfy"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.posfztxm">
          配偶身份证(头面像)
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.posfztxm"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.posfzgh">
          配偶身份证(国徽像)
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.posfzgh"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
      <span v-if="creditExtensionData.dbzxsqs">担保人</span>
      <el-row>
        <el-col :span="4" class="img" v-if="creditExtensionData.dbzxsqs">
          征信授权书
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.dbzxsqs"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.dbscsfzsqs">
          手持身份证+授权书
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.dbscsfzsqs"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.dbsfzfy">
          身份证复印件
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.dbsfzfy"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.dbrsfztxm">
          担保人身份证(头面像)
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.dbrsfztxm"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.dbrsfzgh">
          担保人身份证(国徽像)
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.dbrsfzgh"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
      <span v-if="creditExtensionData.glzxsqs">关联人</span>
      <el-row>
        <el-col :span="4" class="img" v-if="creditExtensionData.glzxsqs">
          征信授权书
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.glzxsqs"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.glscsfzsqs">
          手持身份证+授权书
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.glscsfzsqs"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.glsfzfy">
          身份证复印件
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.glsfzfy"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.glrsfztxm">
          关联人身份证(头面像)
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.glrsfztxm"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.glrsfzgh">
          关联人身份证(国徽像)
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.glrsfzgh"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
    </el-card> -->
    <!-- 精真估 -->
    <!-- <el-card class="box-card" v-if="creditExtensionData.companyGuarantee">
      <div slot="header" ref="ref2">
        <span>精真估</span>
      </div>
      <el-form :model="form" :rules="rules" ref="form" label-width="150px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="车辆所在省市" prop="city">
              <el-cascader :props="props" v-model="form.city"></el-cascader>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="下单人姓名" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="下单人电话" prop="phone">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
          </el-col>
          <el-button
            type="primary"
            round
            style="margin: 5px 10px 0 50px"
            @click="findJZG"
            >点击查询精真估</el-button
          >
          <el-button
            type="primary"
            round
            style="margin: 5px 10px 0 50px"
            @click="getJZGData"
            >查看精真估详情</el-button
          >
        </el-row>
      </el-form>
    </el-card> -->
    <!-- 意见 -->
    <!-- <el-card>
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
        <el-col :span="6">贷款费率：{{ creditExtensionData.left.dkfl }}</el-col>
        <el-col :span="6"
          >平台费率：{{ creditExtensionData.left.interestRate }}</el-col
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
    <el-card>
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
    <!-- 房产 -->
    <el-card class="box-card" v-if="house[0]">
      <div slot="header" ref="ref13">
        <span>房产</span>
      </div>
      <el-row>
        <el-col :span="4" class="img" v-for="item in house" :key="item.fileId">
          <el-image
            style="width: 100px; height: 100px"
            :src="item.filePath"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
    </el-card>
    <!-- 流水 -->
    <el-card class="box-card" v-if="liushui[0] || pdfList[0]">
      <div slot="header" ref="ref13">
        <span>流水</span>
      </div>
      <el-row>
        <el-col
          :span="4"
          class="img"
          v-for="item in liushui"
          :key="item.fileId"
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
    </el-card>
    <!-- 共同申请人信息 -->
    <el-card class="box-card" v-if="creditExtensionData.common.peopleShip">
      <div slot="header" ref="ref14">
        <span>共同申请人信息</span>
      </div>
      <el-row>
        <el-col :span="8"
          >与借款人关系：{{ creditExtensionData.common.peopleShip }}</el-col
        >
        <el-col :span="8"
          >姓名：{{ creditExtensionData.common.debtName }}</el-col
        >
        <el-col :span="8"
          >身份证号：{{ creditExtensionData.common.idCard }}</el-col
        >
        <el-col :span="8"
          >学历：{{ creditExtensionData.common.education }}</el-col
        >
        <el-col :span="8"
          >税后月收入：{{ creditExtensionData.common.monthlyIncome }}</el-col
        >
        <el-col :span="8"
          >现住地址：{{ creditExtensionData.common.nowPlace }}</el-col
        >
        <el-col :span="8"
          >手机号：{{ creditExtensionData.common.phoneNumber }}</el-col
        >
        <el-col :span="8"
          >现工作单位名称：{{ creditExtensionData.common.nowWork }}</el-col
        >
        <el-col :span="8"
          >工作单位地址：{{ creditExtensionData.common.workPlace }}</el-col
        >
        <el-col :span="8"
          >工作电话：{{ creditExtensionData.common.companyPhone }}</el-col
        >
        <el-col :span="8"
          >公司性质：{{ creditExtensionData.common.companyNature }}</el-col
        >
        <el-col :span="8"
          >婚姻状况：{{ creditExtensionData.common.marriage }}</el-col
        >
        <el-col :span="8" class="img">
          身份证正面
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.common.cardAddress"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="8" class="img">
          身份证反面
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.common.backAddress"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
      <span v-if="creditExtensionData.common.marriage === '已婚'"
        >配偶信息</span
      >
      <el-row v-if="creditExtensionData.common.marriage === '已婚'">
        <el-col :span="8"
          >姓名：{{ creditExtensionData.common.spouseName }}</el-col
        >
        <el-col :span="8"
          >身份证号：{{ creditExtensionData.common.idNumber }}</el-col
        >
        <el-col :span="8"
          >户籍地址：{{ creditExtensionData.common.permanentAddress }}</el-col
        >
        <el-col :span="8"
          >手机号：{{ creditExtensionData.common.phoneNo }}</el-col
        >
        <el-col :span="8"
          >税后月收入：{{
            creditExtensionData.common.spouseMonthlyIncome
          }}</el-col
        >
        <el-col :span="8"
          >单位名称：{{ creditExtensionData.common.spouseUnitName }}</el-col
        >
        <el-col :span="8"
          >单位地址：{{ creditExtensionData.common.spouseWorkPlace }}</el-col
        >
        <el-col :span="16"
          >单位电话：{{ creditExtensionData.common.spouseWorkPhone }}</el-col
        >
        <el-col :span="8" class="img">
          身份证正面
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.common.positiveAddress"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="8" class="img">
          身份证反面
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.common.versoAddress"
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
      <span v-if="sqrcar[0]">车辆</span>
      <el-row>
        <el-col
          :span="4"
          class="img"
          v-for="(item, index) in sqrcar"
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
      <span v-if="sqrother[0]">其他资产</span>
      <el-row>
        <el-col
          :span="4"
          class="img"
          v-for="(item, index) in sqrother"
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
          creditExtensionData.sqrzxsqs ||
          creditExtensionData.sqrscsfzsqs ||
          creditExtensionData.sqrsfzfy ||
          creditExtensionData.sqrposfztxm ||
          creditExtensionData.sqrposfzgh
        "
        >征信</span
      >
      <el-row>
        <el-col :span="4" class="img" v-if="creditExtensionData.sqrzxsqs">
          征信授权书
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.sqrzxsqs"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.sqrscsfzsqs">
          手持身份证+授权书
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.sqrscsfzsqs"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.sqrsfzfy">
          身份证复印件
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.sqrsfzfy"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.sqrposfztxm">
          配偶身份证(头面像)
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.sqrposfztxm"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.sqrposfzgh">
          配偶身份证(国徽像)
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.sqrposfzgh"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
    </el-card>
    <!-- 共同偿债人信息 -->
    <el-card class="box-card" v-if="creditExtensionData.debtService.peopleShip">
      <div slot="header" ref="ref15">
        <span>共同偿债人信息</span>
      </div>
      <el-row>
        <el-col :span="8"
          >与借款人关系：{{
            creditExtensionData.debtService.peopleShip
          }}</el-col
        >
        <el-col :span="8"
          >姓名：{{ creditExtensionData.debtService.debtName }}</el-col
        >
        <el-col :span="8"
          >身份证号：{{ creditExtensionData.debtService.idCard }}</el-col
        >
        <el-col :span="8"
          >学历：{{ creditExtensionData.debtService.education }}</el-col
        >
        <el-col :span="8"
          >税后月收入：{{
            creditExtensionData.debtService.monthlyIncome
          }}</el-col
        >
        <el-col :span="8"
          >现住地址：{{ creditExtensionData.debtService.nowPlace }}</el-col
        >
        <el-col :span="8"
          >手机号：{{ creditExtensionData.debtService.phoneNumber }}</el-col
        >
        <el-col :span="8"
          >现工作单位名称：{{ creditExtensionData.debtService.nowWork }}</el-col
        >
        <el-col :span="8"
          >工作单位地址：{{ creditExtensionData.debtService.workPlace }}</el-col
        >
        <el-col :span="8"
          >工作电话：{{ creditExtensionData.debtService.companyPhone }}</el-col
        >
        <el-col :span="16"
          >公司性质：{{ creditExtensionData.debtService.companyNature }}</el-col
        >
        <el-col :span="8" class="img">
          身份证正面
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.debtService.cardAddress"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="8" class="img">
          身份证反面
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.debtService.backAddress"
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
          creditExtensionData.czrzxsqs ||
          creditExtensionData.czrscsfzsqs ||
          creditExtensionData.czrsfzfy ||
          creditExtensionData.czrposfztxm ||
          creditExtensionData.czrposfzgh
        "
        >征信</span
      >
      <el-row>
        <el-col :span="4" class="img" v-if="creditExtensionData.czrzxsqs">
          征信授权书
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.czrzxsqs"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.czrscsfzsqs">
          手持身份证+授权书
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.czrscsfzsqs"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.czrsfzfy">
          身份证复印件
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.czrsfzfy"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.czrposfztxm">
          配偶身份证(头面像)
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.czrposfztxm"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.czrposfzgh">
          配偶身份证(国徽像)
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.czrposfzgh"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
    </el-card>
    <!-- 个人担保 -->
    <el-card class="box-card" v-if="creditExtensionData.peopleGuarantee[0]">
      <div slot="header" ref="ref16">
        <span>个人担保</span>
      </div>
      <el-row>
        <el-col :span="8"
          >姓名：{{
            creditExtensionData.peopleGuarantee[0].guaranteeName
          }}</el-col
        >
        <el-col :span="8"
          >身份证号：{{
            creditExtensionData.peopleGuarantee[0].idNumber
          }}</el-col
        >
        <el-col :span="8"
          >申请人与担保人的关系：{{
            creditExtensionData.peopleGuarantee[0].peopleShip
          }}</el-col
        >
        <el-col :span="8"
          >学历：{{ creditExtensionData.peopleGuarantee[0].education }}</el-col
        >
        <el-col :span="8"
          >税后月收入：{{
            creditExtensionData.peopleGuarantee[0].monthlyIncome
          }}</el-col
        >
        <el-col :span="8"
          >现住地址：{{
            creditExtensionData.peopleGuarantee[0].detailPlace
          }}</el-col
        >
        <el-col :span="8"
          >手机号：{{
            creditExtensionData.peopleGuarantee[0].phoneNumber
          }}</el-col
        >
        <el-col :span="8"
          >现工作单位名称：{{
            creditExtensionData.peopleGuarantee[0].workUnit
          }}</el-col
        >
        <el-col :span="8"
          >工作单位地址：{{
            creditExtensionData.peopleGuarantee[0].unitPlace
          }}</el-col
        >
        <el-col :span="24"
          >工作电话：{{
            creditExtensionData.peopleGuarantee[0].workPhone
          }}</el-col
        >
        <el-col :span="8" class="img">
          身份证正面
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.peopleGuarantee[0].cardAddress"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="8" class="img">
          身份证反面
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.peopleGuarantee[0].backAddress"
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
      <span v-if="dbrcar0[0]">车辆</span>
      <el-row>
        <el-col
          :span="4"
          class="img"
          v-for="(item, index) in dbrcar0"
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
      <span v-if="dbrother0[0]">其他资产</span>
      <el-row>
        <el-col
          :span="4"
          class="img"
          v-for="(item, index) in dbrother0"
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
          creditExtensionData.dbrzxsqs0 ||
          creditExtensionData.dbrscsfzsqs0 ||
          creditExtensionData.dbrsfzfy0 ||
          creditExtensionData.dbrposfztxm0 ||
          creditExtensionData.dbrposfzgh0
        "
        >征信</span
      >
      <el-row>
        <el-col :span="4" class="img" v-if="creditExtensionData.dbrzxsqs0">
          征信授权书
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.dbrzxsqs0"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.dbrscsfzsqs0">
          手持身份证+授权书
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.dbrscsfzsqs0"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.dbrsfzfy0">
          身份证复印件
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.dbrsfzfy0"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.dbrposfztxm0">
          配偶身份证(头面像)
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.dbrposfztxm0"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.dbrposfzgh0">
          配偶身份证(国徽像)
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.dbrposfzgh0"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
    </el-card>
    <!-- 个人担保 -->
    <el-card class="box-card" v-if="creditExtensionData.peopleGuarantee[1]">
      <div slot="header" ref="ref16">
        <span>个人担保2</span>
      </div>
      <el-row>
        <el-col :span="8"
          >姓名：{{
            creditExtensionData.peopleGuarantee[1].guaranteeName
          }}</el-col
        >
        <el-col :span="8"
          >身份证号：{{
            creditExtensionData.peopleGuarantee[1].idNumber
          }}</el-col
        >
        <el-col :span="8"
          >申请人与担保人的关系：{{
            creditExtensionData.peopleGuarantee[1].peopleShip
          }}</el-col
        >
        <el-col :span="8"
          >学历：{{ creditExtensionData.peopleGuarantee[1].education }}</el-col
        >
        <el-col :span="8"
          >税后月收入：{{
            creditExtensionData.peopleGuarantee[1].monthlyIncome
          }}</el-col
        >
        <el-col :span="8"
          >现住地址：{{
            creditExtensionData.peopleGuarantee[1].detailPlace
          }}</el-col
        >
        <el-col :span="8"
          >手机号：{{
            creditExtensionData.peopleGuarantee[1].phoneNumber
          }}</el-col
        >
        <el-col :span="8"
          >现工作单位名称：{{
            creditExtensionData.peopleGuarantee[1].workUnit
          }}</el-col
        >
        <el-col :span="8"
          >工作单位地址：{{
            creditExtensionData.peopleGuarantee[1].unitPlace
          }}</el-col
        >
        <el-col :span="24"
          >工作电话：{{
            creditExtensionData.peopleGuarantee[1].workPhone
          }}</el-col
        >
        <el-col :span="8" class="img">
          身份证正面
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.peopleGuarantee[1].cardAddress"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="8" class="img">
          身份证反面
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.peopleGuarantee[1].backAddress"
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
      <span v-if="dbrcar1[0]">车辆</span>
      <el-row>
        <el-col
          :span="4"
          class="img"
          v-for="(item, index) in dbrcar1"
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
      <span v-if="dbrother1[0]">其他资产</span>
      <el-row>
        <el-col
          :span="4"
          class="img"
          v-for="(item, index) in dbrother1"
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
          creditExtensionData.dbrzxsqs1 ||
          creditExtensionData.dbrscsfzsqs1 ||
          creditExtensionData.dbrsfzfy1 ||
          creditExtensionData.dbrposfztxm1 ||
          creditExtensionData.dbrposfzgh1
        "
        >征信</span
      >
      <el-row>
        <el-col :span="4" class="img" v-if="creditExtensionData.dbrzxsqs1">
          征信授权书
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.dbrzxsqs1"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.dbrscsfzsqs1">
          手持身份证+授权书
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.dbrscsfzsqs1"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.dbrsfzfy1">
          身份证复印件
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.dbrsfzfy1"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.dbrposfztxm1">
          配偶身份证(头面像)
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.dbrposfztxm1"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img" v-if="creditExtensionData.dbrposfzgh1">
          配偶身份证(国徽像)
          <el-image
            style="width: 100px; height: 100px"
            :src="creditExtensionData.dbrposfzgh1"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
    </el-card>
    <!-- 公司担保 -->
    <div ref="ref17" v-if="creditExtensionData.companyGuarantee[0]"></div>
    <el-card
      class="box-card"
      v-for="item in creditExtensionData.companyGuarantee"
      :key="item.id"
    >
      <div slot="header">
        <span>公司担保</span>
      </div>
      <el-row>
        <el-col :span="8">公司注册名称：{{ item.companyName }}</el-col>
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
    <!-- 家访照片 -->
    <el-card class="box-card" v-if="creditExtensionData.visit[0]">
      <div slot="header" ref="ref13">
        <span>家访照片</span>
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
      </el-row>
    </el-card>
    <el-card>
      <div slot="header">
        <span>意见</span>
      </div>
      <h5 style="font-size: 14px; margin: 10px 0" v-if="lastbeizhu">
        终审内部意见
      </h5>
      <p style="font-size: 14px; text-indent: 2em" v-if="lastbeizhu">
        {{ lastbeizhu }}
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
        <el-button type="primary" @click="creditExtensionHandle2"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog title="流水" :visible.sync="PDFdialogVisible" width="60%">
      <div v-for="(item, index) in pdfList" :key="index">
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
          :page="pageNum"
          :src="item"
          @progress="loadedRatio = $event"
          @num-pages="pageTotalNum = $event"
        ></pdf>
      </div>
    </el-dialog>
    <!-- <el-dialog title="精真估结果" :visible.sync="dialogVisible" width="70%">
      <iframe
        width="100%"
        height="800px"
        frameborder="0"
        :src="JZGData.AssessmentReportH5"
        id="JZGIframe"
      />
    </el-dialog>
    <el-dialog title="流水" :visible.sync="PDFdialogVisible" width="60%">
      <div v-for="(item, index) in pdfList" :key="index">
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
    </el-dialog> -->
  </div>
</template>

<script>
import pdf from 'vue-pdf'
import {
  creditHandle,
  getCreditHandle,
  creditExtensionDetails,
  creditAgainHandle,
  creditExtensionDetailsOld,
} from '@/api/process/creditExtension'
import {
  findJingZhenGu,
  getJingZhenGuData,
  getOrder,
} from '@/api/process/firstTrial'
import { getFinalTrialHandle } from '@/api/process/finalTrial'

export default {
  name: 'CreditExtensionDetails',
  components: {
    pdf,
  },
  data() {
    return {
      srcList: [],
      textarea: '',
      approvalType: '',
      approvalId: '',
      creditExtensionData: {
        common: {},
        companyGuarantee: {},
        // data: {
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
        visit: [],
        debtService: {},
        peopleGuarantee: {},
        // left: {},
        // right: {},
      },
      form: {},
      props: {
        lazy: true,
        lazyLoad(node, resolve) {
          setTimeout(() => {
            if (node.level == 0) {
              getOrder().then((response) => {
                const cities = response.data.map((value, i) => ({
                  value: value.value,
                  label: value.label,
                  leaf: node.level >= 1,
                }))
                resolve(cities)
              })
            }
            if (node.level == 1) {
              getOrder({ pid: node.value }).then((response) => {
                const cities = response.data.map((value, i) => ({
                  value: value.value,
                  label: value.label,
                  leaf: node.level >= 1,
                }))
                resolve(cities)
              })
            }
          }, 100)
        },
      },
      rules: {
        name: [
          { required: true, message: '请输入下单人姓名', trigger: 'blur' },
        ],
        phone: [
          { required: true, message: '请输入下单人电话', trigger: 'blur' },
        ],
        city: [
          { required: true, message: '请选择车辆所在省市', trigger: 'change' },
        ],
      },
      JZGData: '', // 精真估数据
      dialogVisible: false,
      liushuiPhoto: [],
      pdfList: [],
      PDFdialogVisible: false,
      pageNum: 1,
      pageTotalNum: 1, // 总页数
      loadedRatio: 0, // 当前页面的加载进度，范围是0-1 ，等于1的时候代表当前页已经完全加载完成了
      dialogRemark: false,
      beizhu: '',
      approvalType2: '',
      lastbeizhu: '',
      inputbeizhu: '',
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
      PDFdialogVisible: false,
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
        const { data } = await creditExtensionDetailsOld({
          transactionCode: this.$route.query.transactionCode,
          userId: this.$route.query.userId,
        })
        if (!data.common) {
          data.common = {}
        }
        if (!data.debtService) {
          data.debtService = {}
        }
        this.creditExtensionData = data
        this.findCreditHandle()
        this.findFinalHandle()
        // console.log(data)
        // if (data.data.qita.photoFile) {
        //   data.data.qita.photoFile.forEach((item) => {
        //     data[item.fileName] = item.filePath
        //     this.srcList.push(item.filePath)
        //   })
        // } else {
        //   data.data.qita.photoFile = []
        // }
        // if (data.data.car.photoFile) {
        //   data.data.car.photoFile.forEach((item) => {
        //     data[item.fileName] = item.filePath
        //     this.srcList.push(item.filePath)
        //   })
        // } else {
        //   data.data.car.photoFile = []
        // }
        // if (data.data.credit.photoFile) {
        //   data.data.credit.photoFile.forEach((item) => {
        //     data[item.fileName] = item.filePath
        //     this.srcList.push(item.filePath)
        //   })
        // } else {
        //   data.data.credit.photoFile = []
        // }
        // if (data.data.liushui.photoFile) {
        //   data.data.liushui.photoFile.forEach((item) => {
        //     if (item.fileName.indexOf('pdf') != -1) {
        //       this.pdfList.push(item.filePath)
        //       // this.getNumPages(item.filePath)
        //     } else {
        //       this.liushuiPhoto.push(item.filePath)
        //       this.srcList.push(item.filePath)
        //     }
        //   })
        // } else {
        //   data.data.liushui.photoFile = []
        // }
        // if (data.data.house.photoFile) {
        //   data.data.house.photoFile.forEach((item) => {
        //     this.srcList.push(item.filePath)
        //   })
        // } else {
        //   data.data.house.photoFile = []
        // }
        // if (data.data.visit.photoFile) {
        //   data.data.visit.photoFile.forEach((item) => {
        //     this.srcList.push(item.filePath)
        //   })
        // } else {
        //   data.data.visit.photoFile = []
        // }
        // if (data.data.borrower) {
        //   data.data.borrower.forEach((item) => {
        //     this.srcList.push(item.filePath)
        //   })
        // } else {
        //   data.data.borrower = []
        // }
        // if (data.common) {
        //   this.srcList.push(data.common.cardAddress, data.common.backAddress)
        //   if (data.common.marriage === '已婚') {
        //     this.srcList.push(
        //       data.common.positiveAddress,
        //       data.common.versoAddress
        //     )
        //   }
        // }
        // if (data.debtService) {
        //   this.srcList.push(
        //     data.debtService.cardAddress,
        //     data.debtService.backAddress
        //   )
        // }
        // if (data.peopleGuarantee) {
        //   this.srcList.push(
        //     data.peopleGuarantee.cardAddress,
        //     data.peopleGuarantee.backAddress
        //   )
        // }
        // if (!data.left) {
        //   data.left = {}
        // }
        // if (!data.right) {
        //   data.right = {}
        // }
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
        data.visit.forEach((item) => {
          this.srcList.push(item.filePath)
        })
        if (data.credit) {
          data.credit.forEach((item) => {
            this.srcList.push(item.filePath)
            this.creditExtensionData[item.fileName] = item.filePath
          })
        }
        data.peopleGuarantee.forEach((item) => {
          this.srcList.push(item.backAddress, item.cardAddress)
        })
      } catch (error) {
        console.log(error)
      }
    },
    // 处理结果
    creditExtensionHandle(approvalType) {
      if (this.textarea.trim()) {
        this.approvalType2 = approvalType
        this.dialogRemark = true
      } else {
        this.msgError('请输入意见')
      }
    },
    // 处理结果
    creditExtensionHandle2() {
      const that = this
      this.$confirm('确认操作?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          return creditHandle({
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
          // this.findCreditHandle()
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
            path: '/process/creditExtension',
            name: 'CreditExtension',
          })
        })
        .catch(function () {})
    },
    // 处理结果回显
    async findCreditHandle() {
      try {
        const { data } = await getCreditHandle(
          this.$route.query.transactionCode
        )
        // console.log(data)
        this.textarea = ''
        this.approvalType = null
        this.approvalId = null
        if (data) {
          if (data.advise) {
            this.textarea = data.advise
          }
          this.approvalType = data.approvalType
          this.approvalId = data.id
          this.inputbeizhu = data.beizhu
        }
      } catch (error) {
        // console.log(error)
      }
    },
    // 重新操作
    async againHandle() {
      try {
        await creditAgainHandle(this.approvalId)
        this.findCreditHandle()
      } catch (error) {}
    },
    // 查询精真估
    findJZG() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          findJingZhenGu({
            transactionCode: this.$route.query.transactionCode,
            provinceId: this.form.city[0],
            cityId: this.form.city[1],
            orderName: this.form.name,
            orderPhone: this.form.phone,
          })
            .then((response) => {
              // console.log(response)
              if (response.msg === '100') {
                this.msgSuccess('操作成功，请稍后再查看详情')
              } else {
                this.msgError(response.data)
              }
            })
            .catch((error) => {})
        } else {
          return false
        }
      })
    },
    // 查询精真估结果
    async getJZGData() {
      try {
        const { data } = await getJingZhenGuData(
          this.$route.query.transactionCode
        )
        this.dialogVisible = true
        // console.log(JSON.parse(data))
        this.JZGData = JSON.parse(data)
      } catch (error) {
        // console.log(error)
      }
    },
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
    // 终审结果回显
    async findFinalHandle() {
      try {
        const { data } = await getFinalTrialHandle(
          this.$route.query.transactionCode
        )
        if (data) {
          this.lastbeizhu = data.beizhu
        }
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
    this.getCreditExtensionData()
  },
  mounted() {
    /**
     * iframe-高自适应显示
     */
    // const JZGIframe = document.getElementById('JZGIframe')
    // const deviceHeight = document.querySelector('body').clientHeight
    // JZGIframe.style.height = Number(deviceHeight) - 230 + 'px' //数字是页面布局高度差
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
  font-size: 14px;
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
.el-card {
  margin: 10px 0;
}
</style>
