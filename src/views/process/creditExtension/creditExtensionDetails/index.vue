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
    </el-card>
    <el-card>
      <div slot="header">
        <span>意见</span>
      </div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 3 }"
        placeholder="请输入意见"
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
} from '@/api/process/creditExtension'
import {
  findJingZhenGu,
  getJingZhenGuData,
  getOrder,
} from '@/api/process/firstTrial'

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
        // common: {},
        // companyGuarantee: {},
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
        // debtService: {},
        // peopleGuarantee: {},
        left: {},
        right: {},
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
        if (!data.left) {
          data.left = {}
        }
        if (!data.right) {
          data.right = {}
        }
        this.creditExtensionData = data
        this.findCreditHandle()
      } catch (error) {
        console.log(error)
      }
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
        this.textarea = ''
        this.approvalType = null
        this.approvalId = null
        if (data) {
          if (data.advise) {
            this.textarea = data.advise
          }
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
              console.log(response)
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
        console.log(JSON.parse(data))
        this.JZGData = JSON.parse(data)
      } catch (error) {
        console.log(error)
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
