<template>
  <div class="app-container">
    <el-tabs tab-position="left">
      <el-tab-pane label="开卡信息">
        <el-form ref="cardForm" :model="cardForm" :rules="cardRules">
          <!-- 基本资料 -->
          <el-card>
            <div slot="header">
              <span>车辆信息</span>
            </div>
            <el-row>
              <el-col :span="12">
                <el-form-item label="中文名" prop="chnsname">
                  <el-input v-model="cardForm.chnsname" maxlength="30" readonly>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="姓名拼音" prop="engname">
                  <el-input v-model="cardForm.engname" maxlength="50">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="性别">
                  <el-select
                    v-model="cardForm.sex"
                    placeholder="请选择"
                    disabled
                  >
                    <el-option label="男" :value="1"> </el-option>
                    <el-option label="女" :value="2"> </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="证件类型" prop="custsort">
                  <el-select v-model="cardForm.custsort" placeholder="请选择">
                    <el-option label="身份证" :value="0"> </el-option>
                    <el-option label="护照" :value="1"> </el-option>
                    <el-option label="军官证" :value="2"> </el-option>
                    <el-option label="士兵证" :value="3"> </el-option>
                    <el-option label="回乡证" :value="4"> </el-option>
                    <el-option label="临时身份证" :value="5"> </el-option>
                    <el-option label="户口本" :value="6"> </el-option>
                    <el-option label="其他" :value="7"> </el-option>
                    <el-option label="警官证" :value="9"> </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="证件号码" prop="custcode">
                  <el-input
                    v-model="cardForm.custcode"
                    maxlength="18"
                    show-word-limit
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="国籍" prop="primnat">
                  <el-select v-model="cardForm.primnat" placeholder="请选择">
                    <el-option label="中国" :value="156"> </el-option>
                    <el-option label="中国台湾" :value="158"> </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="证件有效截至日期" prop="statdate">
                  <el-date-picker
                    v-model="cardForm.statdate"
                    value-format="yyyy-MM-dd"
                    type="date"
                    placeholder="选择日期"
                    style="width: 80%"
                  >
                  </el-date-picker>
                  <el-checkbox
                    v-model="longDate"
                    style="
                      width: 20%;
                      border: 1px solid #dcdfe6;
                      padding: 0 1px;
                      height: 35px;
                      font-size: 12px;
                      color: #ccc;
                      border-radius: 3px;
                    "
                    >长期</el-checkbox
                  >
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="婚姻状况" prop="mrtlstat">
                  <el-select v-model="cardForm.mrtlstat" placeholder="请选择">
                    <el-option label="未婚(无配偶)" :value="1"> </el-option>
                    <el-option label="已婚(有配偶)" :value="2"> </el-option>
                    <el-option label="分局" :value="3"> </el-option>
                    <el-option label="离异" :value="4"> </el-option>
                    <el-option label="丧偶" :value="5"> </el-option>
                    <el-option label="其他" :value="6"> </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="受教育程度" prop="edulvl">
                  <el-select v-model="cardForm.edulvl" placeholder="请选择">
                    <el-option label="博士及以上" :value="1"> </el-option>
                    <el-option label="硕士研究生" :value="2"> </el-option>
                    <el-option label="大学本科" :value="3"> </el-option>
                    <el-option label="大学专科/电大" :value="4"> </el-option>
                    <el-option label="中专" :value="5"> </el-option>
                    <el-option label="技工学校" :value="6"> </el-option>
                    <el-option label="高中" :value="7"> </el-option>
                    <el-option label="初中" :value="8"> </el-option>
                    <el-option label="小学及以下" :value="9"> </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="手机" prop="mvblno">
                  <el-input
                    v-model="cardForm.mvblno"
                    maxlength="11"
                    show-word-limit
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="住宅(省)" prop="hprovince">
                  <el-input v-model="cardForm.hprovince" maxlength="10">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="住宅(市)" prop="hcity">
                  <el-input v-model="cardForm.hcity" maxlength="50"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="住宅(区/县)" prop="hcounty">
                  <el-input v-model="cardForm.hcounty" maxlength="50">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="住宅(详细地址)" prop="haddress">
                  <el-input v-model="cardForm.haddress" maxlength="150">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="住宅电话">
                  <el-input placeholder="悄悄滴" disabled style="width: 30%">
                  </el-input>
                  <el-input
                    placeholder="进村打枪滴不要"
                    disabled
                    style="width: 70%"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="邮政编码" prop="homezip">
                  <el-input
                    v-model="cardForm.homezip"
                    maxlength="6"
                    show-word-limit
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="住宅情况" prop="homestat">
                  <el-select v-model="cardForm.homestat" placeholder="请选择">
                    <el-option label="自有住房" :value="1"> </el-option>
                    <el-option label="分期付款购房" :value="2"> </el-option>
                    <el-option label="租房" :value="3"> </el-option>
                    <el-option label="其他" :value="4"> </el-option>
                    <el-option label="集体宿舍" :value="5"> </el-option>
                    <el-option label="单位分配" :value="6"> </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="入住日期" prop="indate">
                  <el-date-picker
                    v-model="cardForm.indate"
                    value-format="yyyy-MM-dd"
                    type="date"
                    placeholder="选择日期"
                  >
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="自购车情况" prop="carstat">
                  <el-select v-model="cardForm.carstat" placeholder="请选择">
                    <el-option label="有" :value="0"> </el-option>
                    <el-option label="无" :value="1"> </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="本人年收入(元)" prop="yearincome">
                  <el-input
                    v-model="cardForm.yearincome"
                    maxlength="17"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-card>
          <!-- 职业资料 -->
          <el-card>
            <div slot="header">
              <span>职业资料</span>
            </div>
            <el-row>
              <el-col :span="12">
                <el-form-item label="单位名称" prop="unitname">
                  <el-input maxlength="60" v-model="cardForm.unitname">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="单位地址(省)" prop="cprovince">
                  <el-input maxlength="5" v-model="cardForm.cprovince">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="单位地址(市)" prop="ccity">
                  <el-input maxlength="30" v-model="cardForm.ccity"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="单位地址(区/县)" prop="ccounty">
                  <el-input maxlength="30" v-model="cardForm.ccounty">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="单位地址(详细地址)" prop="caddress">
                  <el-input maxlength="120" v-model="cardForm.caddress">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" style="position: relative">
                <el-form-item label="单位电话" prop="cophozono">
                  <el-input
                    maxlength="5"
                    v-model="cardForm.cophozono"
                    style="width: 30%; z-index: 999"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item
                  label=""
                  prop="cophoneno"
                  style="position: absolute; top: 0"
                >
                  <el-input
                    maxlength="12"
                    show-word-limit
                    v-model="cardForm.cophoneno"
                    style="width: 67%; z-index: 999; float: right"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="邮政编码" prop="corpzip">
                  <el-input
                    maxlength="6"
                    show-word-limit
                    v-model="cardForm.corpzip"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="单位性质" prop="modelcode">
                  <el-select v-model="cardForm.modelcode" placeholder="请选择">
                    <el-option label="国有" :value="10"> </el-option>
                    <el-option label="集体" :value="20"> </el-option>
                    <el-option label="国有控股" :value="30"> </el-option>
                    <el-option label="集体控股" :value="40"> </el-option>
                    <el-option label="三资" :value="50"> </el-option>
                    <el-option label="私营" :value="60"> </el-option>
                    <el-option label="个体" :value="70"> </el-option>
                    <el-option label="外贸" :value="80"> </el-option>
                    <el-option label="股份合作" :value="90"> </el-option>
                    <el-option label="其他股份制" :value="100"> </el-option>
                    <el-option label="民营" :value="110"> </el-option>
                    <el-option label="联营" :value="120"> </el-option>
                    <el-option label="乡镇企业" :value="130"> </el-option>
                    <el-option label="其他" :value="190"> </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="职业" prop="occptn">
                  <el-select v-model="cardForm.occptn" placeholder="请选择">
                    <el-option label="公务员" :value="1"> </el-option>
                    <el-option label="事业单位员工" :value="2"> </el-option>
                    <el-option label="职员" :value="3"> </el-option>
                    <el-option label="军人" :value="4"> </el-option>
                    <el-option label="自由职业者" :value="5"> </el-option>
                    <el-option label="工人" :value="6"> </el-option>
                    <el-option label="农民" :value="7"> </el-option>
                    <el-option label="邮电通讯行业职员" :value="10">
                    </el-option>
                    <el-option label="房地产行业职员" :value="11"> </el-option>
                    <el-option label="交通运输行业职员" :value="12">
                    </el-option>
                    <el-option label="法律/司法行业职员" :value="13">
                    </el-option>
                    <el-option label="文化/娱乐/体育行业职员" :value="14">
                    </el-option>
                    <el-option label="媒介/广告行业职员" :value="15">
                    </el-option>
                    <el-option label="科研/教育行业职员" :value="16">
                    </el-option>
                    <el-option label="学生" :value="17"> </el-option>
                    <el-option label="计算机/网络行业职员" :value="18">
                    </el-option>
                    <el-option label="商业贸易行业职员" :value="19">
                    </el-option>
                    <el-option label="银行/金融/证券/投资行业职员" :value="20">
                    </el-option>
                    <el-option label="税务行业职员" :value="21"> </el-option>
                    <el-option label="咨询行业职员" :value="22"> </el-option>
                    <el-option label="社会服务行业职员" :value="23">
                    </el-option>
                    <el-option label="旅游/饭店行业职员" :value="24">
                    </el-option>
                    <el-option label="健康/医疗服务行业职员" :value="25">
                    </el-option>
                    <el-option label="管理人员" :value="26"> </el-option>
                    <el-option label="技术人员" :value="27"> </el-option>
                    <el-option label="文体明星" :value="28"> </el-option>
                    <el-option label="无职业" :value="29"> </el-option>
                    <el-option label="私人业主" :value="30"> </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="职务" prop="duty">
                  <el-select v-model="cardForm.duty" placeholder="请选择">
                    <el-option
                      label="国家主席、副主席、总理级副总理、国务委员级"
                      :value="1"
                    >
                    </el-option>
                    <el-option label="部、省级、副部、副省级" :value="2">
                    </el-option>
                    <el-option label="董事/司、局、地、厅级" :value="3">
                    </el-option>
                    <el-option label="总经理/县处级" :value="4"> </el-option>
                    <el-option label="科级/部门经理" :value="5"> </el-option>
                    <el-option label="职员/科员级" :value="6"> </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="何时进入现单位工作" prop="joindate">
                  <el-date-picker
                    v-model="cardForm.joindate"
                    value-format="yyyy-MM"
                    type="date"
                    placeholder="选择日期"
                  >
                  </el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
          </el-card>
          <!-- 紧急联系人资料 -->
          <el-card>
            <div slot="header">
              <span>紧急联系人资料</span>
            </div>
            <el-row>
              <el-col :span="12">
                <el-form-item label="联系人1姓名" prop="reltname1">
                  <el-input maxlength="30" v-model="cardForm.reltname1">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="与您的关系" prop="reltship1">
                  <el-select v-model="cardForm.reltship1" placeholder="请选择">
                    <el-option label="父子" :value="1"> </el-option>
                    <el-option label="母子" :value="2"> </el-option>
                    <el-option label="兄弟姐妹" :value="3"> </el-option>
                    <el-option label="亲属" :value="4"> </el-option>
                    <el-option label="夫妻" :value="5"> </el-option>
                    <el-option label="同学" :value="6"> </el-option>
                    <el-option label="同乡" :value="7"> </el-option>
                    <el-option label="朋友" :value="8"> </el-option>
                    <el-option label="同事" :value="9"> </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="联系人1手机" prop="reltmobll">
                  <el-input
                    maxlength="11"
                    show-word-limit
                    v-model="cardForm.reltmobl1"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" style="position: relative">
                <el-form-item label="联系人1固定电话" prop="reltphzon1">
                  <el-input
                    maxlength="5"
                    v-model="cardForm.reltphzon1"
                    style="width: 30%; z-index: 999"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item
                  label=""
                  prop="reltphone1"
                  style="position: absolute; top: 0"
                >
                  <el-input
                    maxlength="12"
                    show-word-limit
                    v-model="cardForm.relaphone1"
                    style="width: 67%; z-index: 999; float: right"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="联系人2姓名">
                  <el-input disabled> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="与您的关系">
                  <el-select v-model="no" placeholder="请选择" disabled>
                    <el-option label="父子" :value="1"> </el-option>
                    <el-option label="母子" :value="2"> </el-option>
                    <el-option label="兄弟姐妹" :value="3"> </el-option>
                    <el-option label="亲属" :value="4"> </el-option>
                    <el-option label="夫妻" :value="5"> </el-option>
                    <el-option label="同学" :value="6"> </el-option>
                    <el-option label="同乡" :value="7"> </el-option>
                    <el-option label="朋友" :value="8"> </el-option>
                    <el-option label="同事" :value="9"> </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="联系人2手机">
                  <el-input disabled> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="联系人2固定电话">
                  <el-input style="width: 30%" disabled> </el-input>
                  <el-input style="width: 70%" disabled> </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-card>
          <!-- 定制个性服务 -->
          <el-card>
            <div slot="header">
              <span>定制个性服务</span>
            </div>
            <el-row>
              <el-col :span="12">
                <el-form-item label="E-mail地址(对账服务)">
                  <el-input
                    maxlength="50"
                    show-word-limit
                    v-model="cardForm.email"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="卡片领取方式" prop="drawmode">
                  <el-select v-model="cardForm.drawmode" placeholder="请选择">
                    <el-option label="自取" :value="1"> </el-option>
                    <el-option label="寄送单位地址" :value="2"> </el-option>
                    <el-option label="寄送住宅地址" :value="3"> </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="自动还款转出卡号/账户">
                  <el-input
                    maxlength="32"
                    show-word-limit
                    v-model="cardForm.outcardnol"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="领卡地区号">
                  <el-input
                    maxlength="5"
                    show-word-limit
                    v-model="cardForm.drawzono"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="领卡网点号">
                  <el-input
                    maxlength="5"
                    show-word-limit
                    v-model="cardForm.drawbrno"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="亲见客户签名" prop="cstsign">
                  <el-select
                    maxlength="4"
                    show-word-limit
                    v-model="cardForm.cstsign"
                    placeholder="请选择"
                  >
                    <el-option label="是" :value="1"> </el-option>
                    <el-option label="否" :value="2"> </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="联名单位会员号">
                  <el-input
                    maxlength="20"
                    show-word-limit
                    v-model="cardForm.almebno"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-card>
          <!-- <el-card class="box-card">
            <div style="overflow: hidden">
              <el-button
                type="primary"
                round
                style="float: right; margin-right: 100px"
                @click="cardFormSubmit"
                >提交</el-button
              >
            </div>
          </el-card> -->
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="申报材料">
        <!-- 借款人材料 -->
        <el-card>
          <div slot="header">
            <span>借款人材料({{ loanForm.req.JKRCL.name }})</span>
          </div>
          <el-row>
            <el-col :span="6">
              <el-upload
                ref="upload1"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="20"
                :data="uploadData.uploadData1"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多20张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  婚姻状况声明
                </div>
              </el-upload>
            </el-col>
            <el-col :span="6">
              <el-upload
                ref="upload2"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="20"
                :data="uploadData.uploadData2"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多20张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  收入证明
                </div>
              </el-upload>
            </el-col>
            <el-col :span="6">
              <el-upload
                ref="upload3"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="100"
                :data="uploadData.uploadData3"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多100张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  银行卡流水
                </div>
              </el-upload>
            </el-col>
            <el-col :span="6">
              <el-upload
                ref="upload4"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="100"
                :data="uploadData.uploadData4"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多100张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  购房合同等其他资产证明
                </div>
              </el-upload>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-upload
                ref="upload5"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="20"
                :data="uploadData.uploadData5"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多20张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  签约照片
                </div>
              </el-upload>
            </el-col>
            <el-col :span="6">
              <el-upload
                ref="upload6"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="1"
                :data="uploadData.uploadData6"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多1张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  购车发票
                </div>
              </el-upload>
            </el-col>
            <el-col :span="6">
              <el-upload
                ref="upload7"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="10"
                :data="uploadData.uploadData7"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多10张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  合格证
                </div>
              </el-upload>
            </el-col>
            <el-col :span="6">
              <el-upload
                ref="upload8"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="20"
                :data="uploadData.uploadData8"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多20张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  车辆登记证书
                </div>
              </el-upload>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-upload
                ref="upload9"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="20"
                :data="uploadData.uploadData9"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多20张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  家访照片
                </div>
              </el-upload>
            </el-col>
            <el-col :span="6">
              <el-upload
                ref="upload10"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="20"
                :data="uploadData.uploadData10"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多20张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  购车合同证明
                </div>
              </el-upload>
            </el-col>
            <el-col :span="6">
              <el-upload
                ref="upload11"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="5"
                :data="uploadData.uploadData11"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多5张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  签约视频
                </div>
              </el-upload>
            </el-col>
            <el-col :span="6">
              <el-upload
                ref="upload12"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="20"
                :data="uploadData.uploadData12"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多20张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  车辆保险单
                </div>
              </el-upload>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-upload
                ref="upload13"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="50"
                :data="uploadData.uploadData13"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多50张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  补充说明材料
                </div>
              </el-upload>
            </el-col>
            <el-col :span="6">
              <el-upload
                ref="upload14"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="20"
                :data="uploadData.uploadData14"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多20张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  担保承诺函
                </div>
              </el-upload>
            </el-col>
            <el-col :span="6">
              <el-upload
                ref="upload15"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="20"
                :data="uploadData.uploadData15"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多20张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  二手车评估报告
                </div>
              </el-upload>
            </el-col>
            <el-col :span="6">
              <el-upload
                ref="upload16"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="20"
                :data="uploadData.uploadData16"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多20张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  工银信用卡申请表
                </div>
              </el-upload>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-upload
                ref="upload17"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="20"
                :data="uploadData.uploadData17"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多20张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  共同偿债人承诺书
                </div>
              </el-upload>
            </el-col>
            <el-col :span="6">
              <el-upload
                ref="upload18"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="20"
                :data="uploadData.uploadData18"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多20张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  购车分期付款代理协议
                </div>
              </el-upload>
            </el-col>
            <el-col :span="6">
              <el-upload
                ref="upload19"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="1"
                :data="uploadData.uploadData19"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多1张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  购房发票
                </div>
              </el-upload>
            </el-col>
            <el-col :span="6">
              <el-upload
                ref="upload20"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="20"
                :data="uploadData.uploadData20"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多20张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  汽车专项分期申请表(客户签字)
                </div>
              </el-upload>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-upload
                ref="upload21"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="20"
                :data="uploadData.uploadData21"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多20张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  汽车专项分期付款/担保合同
                </div>
              </el-upload>
            </el-col>
            <el-col :span="6">
              <el-upload
                ref="upload22"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="20"
                :data="uploadData.uploadData22"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多20张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  首付款收据及凭证
                </div>
              </el-upload>
            </el-col>
            <el-col :span="6">
              <el-upload
                ref="upload23"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="20"
                :data="uploadData.uploadData23"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多20张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  调查报告
                </div>
              </el-upload>
            </el-col>
            <el-col :span="6">
              <el-upload
                ref="upload24"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="20"
                :data="uploadData.uploadData24"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多20张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  保证书
                </div>
              </el-upload>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-upload
                ref="upload25"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="20"
                :data="uploadData.uploadData25"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多20张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  房产证
                </div>
              </el-upload>
            </el-col>
            <el-col :span="6">
              <el-upload
                ref="upload26"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="20"
                :data="uploadData.uploadData26"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多20张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  抵押权证
                </div>
              </el-upload>
            </el-col>
            <el-col :span="6">
              <el-upload
                ref="upload27"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="100"
                :data="uploadData.uploadData27"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多100张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  其他贷款材料
                </div>
              </el-upload>
            </el-col>
            <el-col :span="6">
              <el-upload
                ref="upload28"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="20"
                :data="uploadData.uploadData28"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多20张
                </div>
                <div
                  class="el-upload__text"
                  slot="tip"
                  style="text-align: center"
                >
                  居住/户籍证明
                </div>
              </el-upload>
            </el-col>
          </el-row>
        </el-card>
        <!-- 电子签约材料 -->
        <el-card>
          <div slot="header">
            <span>电子签约材料</span>
          </div>
          <el-row>
            <el-col :span="6">
              <el-upload
                ref="upload29"
                class="upload-demo"
                drag
                action="http://114.215.186.186:8080/system/cailiao/ceshi2"
                multiple
                show-file-list
                :limit="20"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>，至多20张
                </div>
                <!-- <div
                    class="el-upload__text"
                    slot="tip"
                    style="text-align: center"
                  >
                    电子签约材料
                  </div> -->
              </el-upload>
            </el-col>
          </el-row>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="贷款信息">
        <el-form ref="loanForm" :model="loanForm" :rules="loanRules">
          <!-- 订单信息 -->
          <el-card>
            <div slot="header">
              <span>订单信息</span>
            </div>
            <el-row>
              <el-col :span="12">
                <el-form-item label="业务类型">
                  <el-select
                    v-model="loanForm.pub.productType"
                    placeholder="请选择"
                  >
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="经办银行">
                  <el-select
                    v-model="loanForm.pub.bankCode"
                    placeholder="请选择"
                  >
                    <el-option
                      label="工商银行 襄阳胜利街支行"
                      value="0180400023"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="进件来源">
                  <el-select v-model="loanForm.a" placeholder="请选择">
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="签约方式">
                  <el-select
                    v-model="loanForm.req.signMode"
                    placeholder="请选择"
                  >
                    <el-option label="电子签约方式" :value="1"></el-option>
                    <el-option label="影像上传方式" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-card>
          <!-- 车辆信息 -->
          <el-card>
            <div slot="header">
              <span>车辆信息</span>
            </div>
            <el-row>
              <el-col :span="12">
                <el-form-item label="车辆品牌" prop="req.carInfo.carBrands">
                  <el-input v-model="loanForm.req.carInfo.carBrands">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="车系" prop="req.carInfo.carSeries">
                  <el-input v-model="loanForm.req.carInfo.carSeries">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="车型" prop="req.carInfo.carSpecs">
                  <el-input v-model="loanForm.req.carInfo.carSpecs"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="国产车还是进口车">
                  <el-select
                    v-model="loanForm.req.carInfo.carType"
                    placeholder="请选择"
                  >
                    <el-option label="国产车" :value="0"></el-option>
                    <el-option label="进口车" :value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="车辆价格" prop="req.carInfo.carPrice">
                  <el-input
                    v-model="loanForm.req.carInfo.carPrice"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="系统查询价">
                  <el-input
                    v-model="loanForm.req.carInfo.systemCarPrice"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="车架号">
                  <el-input v-model="loanForm.req.carInfo.frameNo"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="发动机号">
                  <el-input v-model="loanForm.req.carInfo.engineNo"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="意向价格">
                  <el-input v-model="dataMsg" suffix-icon="el-icon-zyrz-yuan">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-card>
          <!-- 分期信息 -->
          <el-card>
            <div slot="header">
              <span>分期信息</span>
            </div>
            <el-row>
              <el-col :span="12">
                <el-form-item label="首付金额" prop="req.stageInfo.sfMoney">
                  <el-input
                    v-model="loanForm.req.stageInfo.sfMoney"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="首付比例">
                  <el-input
                    v-model="loanForm.req.stageInfo.sfProportion"
                    suffix-icon="el-icon-zyrz-baifenhao"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="贷款金额" prop="req.stageInfo.loanMoney">
                  <el-input
                    v-model="loanForm.req.stageInfo.loanMoney"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="分期金额">
                  <el-input
                    v-model="loanForm.req.stageInfo.stageMoney"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="还款期限" prop="req.stageInfo.repayPeriod">
                  <el-select
                    v-model="loanForm.req.stageInfo.repayPeriod"
                    placeholder="请选择"
                  >
                    <el-option label="12" :value="12"></el-option>
                    <el-option label="24" :value="24"></el-option>
                    <el-option label="36" :value="36"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                  label="银行基准利率"
                  prop="req.stageInfo.annualInterestRate"
                >
                  <el-input
                    v-model="loanForm.req.stageInfo.annualInterestRate"
                    suffix-icon="el-icon-zyrz-baifenhao"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="首月还款金额">
                  <el-input
                    v-model="loanForm.req.stageInfo.firstMonthMoney"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="月还款金额">
                  <el-input
                    v-model="loanForm.req.stageInfo.monrepayamt"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                  label="营销档案编号"
                  prop="req.stageInfo.marketingArchivesNum"
                >
                  <el-input
                    v-model="loanForm.req.stageInfo.marketingArchivesNum"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="手续费总额">
                  <el-input
                    v-model="loanForm.req.stageInfo.poundageAmount"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="附加费">
                  <el-input
                    v-model="loanForm.req.financeChargeCardInfo.financeCharge"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="个人总资产" prop="req.stageInfo.property">
                  <el-input
                    v-model="loanForm.req.stageInfo.property"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="现住房面积" prop="req.stageInfo.houseArea">
                  <el-input
                    v-model="loanForm.req.stageInfo.houseArea"
                    suffix-icon="el-icon-zyrz-m"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                  label="其他负债余额"
                  prop="req.stageInfo.othdebtbal"
                >
                  <el-input
                    v-model="loanForm.req.stageInfo.othdebtbal"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="其他月还款额">
                  <el-input
                    v-model="loanForm.req.stageInfo.monrepayamt"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="营销代码" prop="req.stageInfo.dscode">
                  <el-input v-model="loanForm.req.stageInfo.dscode"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="收入还贷比">
                  <el-input
                    v-model="loanForm.req.stageInfo.contractSfRatio"
                    suffix-icon="el-icon-zyrz-baifenhao"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-card>
          <!-- 主借款人信息 -->
          <el-card>
            <div slot="header">
              <span>主借款人信息</span>
            </div>
            <el-row>
              <el-col :span="12">
                <el-form-item
                  label="税后月收入"
                  prop="req.stageInfo.monthincome"
                >
                  <el-input
                    v-model="loanForm.req.stageInfo.monthincome"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-card>
          <!-- 备注信息 -->
          <el-card>
            <div slot="header">
              <span>备注信息</span>
            </div>
          </el-card>
          <!-- 收款信息 -->
          <el-card>
            <div slot="header">
              <span>收款信息</span>
            </div>
            <el-row>
              <el-col :span="12">
                <el-form-item label="支付模式" prop="req.payMentInfo.payMode">
                  <el-select
                    v-model="loanForm.req.payMentInfo.payMode"
                    placeholder="请选择"
                  >
                    <el-option label="受托支付" :value="1"></el-option>
                    <el-option label="实体POS刷卡分期" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                  label="收款对象类型"
                  prop="req.payMentInfo.payeeType"
                >
                  <el-select
                    v-model="loanForm.req.payMentInfo.payeeType"
                    placeholder="请选择"
                  >
                    <el-option label="第三方机构" :value="1"></el-option>
                    <el-option label="合作单位" :value="2"></el-option>
                    <el-option
                      label="第三方机构+合作单位"
                      :value="3"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="融资担保机构编号">
                  <el-input> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="合作机构编号">
                  <el-input
                    v-model="loanForm.req.payMentInfo.cooperateAgencyCode"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="保险机构编号">
                  <el-input
                    v-model="loanForm.req.payMentInfo.insuranceAgencyCode"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row v-if="ishzdw">
              <el-col :span="12">
                <el-form-item label="合作单位名称1" prop="cocomId1">
                  <el-select v-model="loanForm.cocomId1" placeholder="请选择">
                    <el-option
                      label="中豫融资租赁有限公司"
                      :value="1"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="合作单位编号1">
                  <el-input
                    v-model="loanForm.req.payMentInfo.cocomNos[0].cocomId"
                    disabled
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="合作单位收款金额1">
                  <el-input
                    v-model="
                      loanForm.req.payMentInfo.cocomNos[0].cocomReceiveAmt
                    "
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                  label="单位收款金额1标志"
                  prop="req.payMentInfo.cocomNos[0].cocomReceiveType"
                >
                  <el-select
                    v-model="
                      loanForm.req.payMentInfo.cocomNos[0].cocomReceiveType
                    "
                    placeholder="请选择"
                  >
                    <el-option label="贷款金额" :value="1"></el-option>
                    <el-option label="附加费" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="是否贴息1">
                  <el-select
                    v-model="
                      loanForm.req.payMentInfo.cocomNos[0].cocomInterestFlag
                    "
                    placeholder="请选择"
                  >
                    <el-option label="是" :value="1"></el-option>
                    <el-option label="否" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row v-if="ishzdw">
              <el-col :span="12">
                <el-form-item label="合作单位名称2">
                  <el-select v-model="loanForm.cocomId2" placeholder="请选择">
                    <el-option
                      label="中豫融资租赁有限公司"
                      :value="1"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="合作单位编号2">
                  <el-input
                    v-model="loanForm.req.payMentInfo.cocomNos[1].cocomId"
                    disabled
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="合作单位收款金额2">
                  <el-input
                    v-model="
                      loanForm.req.payMentInfo.cocomNos[1].cocomReceiveAmt
                    "
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="单位收款金额2标志">
                  <el-select
                    v-model="
                      loanForm.req.payMentInfo.cocomNos[1].cocomReceiveType
                    "
                    placeholder="请选择"
                  >
                    <el-option label="贷款金额" :value="1"></el-option>
                    <el-option label="附加费" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="是否贴息2">
                  <el-select
                    v-model="
                      loanForm.req.payMentInfo.cocomNos[1].cocomInterestFlag
                    "
                    placeholder="请选择"
                  >
                    <el-option label="是" :value="1"></el-option>
                    <el-option label="否" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-card>
          <!-- 担保信息 -->
          <el-card>
            <div slot="header">
              <span>担保信息</span>
            </div>
            <el-row>
              <el-col :span="12">
                <el-form-item label="工行业务模式">
                  <el-select
                    v-model="loanForm.req.stageInfo.businessModel"
                    placeholder="请选择"
                  >
                    <el-option label="抵押" :value="1"></el-option>
                    <el-option label="质押" :value="2"></el-option>
                    <el-option label="保证" :value="3"></el-option>
                    <el-option label="组合及其他" :value="4"></el-option>
                    <el-option
                      label="抵押+第三方机构管理(先放款后抵押)"
                      :value="5"
                    ></el-option>
                    <el-option
                      label="抵押+第三方机构管理(先抵押后放款)"
                      :value="6"
                    ></el-option>
                    <el-option label="阶段性保证+抵押" :value="7"></el-option>
                    <el-option label="第三方机构管理" :value="8"></el-option>
                    <el-option label="信用类" :value="9"></el-option>
                    <el-option
                      label="信用类(ISPS产品化)"
                      :value="10"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="他顷权证号">
                  <el-input v-model="loanForm.req.guaranteeInfo.encbno">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                  label="抵押品名称"
                  prop="req.guaranteeInfo.mortname"
                >
                  <el-input v-model="loanForm.req.guaranteeInfo.mortname">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                  label="权属人姓名"
                  prop="req.guaranteeInfo.chnsname"
                >
                  <el-input v-model="loanForm.req.guaranteeInfo.chnsname">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="申请人与抵押物权属人关系">
                  <el-select
                    v-model="loanForm.req.guaranteeInfo.apprel"
                    placeholder="请选择"
                  >
                    <el-option label="本人" :value="1"></el-option>
                    <el-option label="父母" :value="2"></el-option>
                    <el-option label="父母" :value="3"></el-option>
                    <el-option label="子女" :value="4"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="车牌号">
                  <el-input v-model="loanForm.req.carInfo.licensePlateNo">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="抵押品类别" prop="mortTypeData">
                  <el-cascader
                    v-model="loanForm.mortTypeData"
                    :options="mortType"
                  ></el-cascader>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                  label="抵押品价值"
                  prop="req.guaranteeInfo.mortvalue"
                >
                  <el-input
                    v-model="loanForm.req.guaranteeInfo.mortvalue"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="抵押品地址">
                  <el-input v-model="loanForm.req.guaranteeInfo.mortaddr">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="他项权证登记日期">
                  <el-date-picker
                    v-model="loanForm.req.guaranteeInfo.encbregdate"
                    value-format="yyyy-MM-dd"
                    type="date"
                    placeholder="选择日期"
                  >
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="预计可办理他项权日期">
                  <el-date-picker
                    v-model="loanForm.req.guaranteeInfo.encbpreddate"
                    value-format="yyyy-MM-dd"
                    type="date"
                    placeholder="选择日期"
                  >
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                  label="最高抵押率"
                  prop="req.guaranteeInfo.maxmortrate"
                >
                  <el-input
                    v-model="loanForm.req.guaranteeInfo.maxmortrate"
                    suffix-icon="el-icon-zyrz-baifenhao"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="抵押起始日">
                  <el-date-picker
                    v-model="loanForm.req.guaranteeInfo.mortbegdate"
                    value-format="yyyy-MM-dd"
                    type="date"
                    placeholder="选择日期"
                  >
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="抵押到期日">
                  <el-date-picker
                    v-model="loanForm.req.guaranteeInfo.mortenddate"
                    value-format="yyyy-MM-dd"
                    type="date"
                    placeholder="选择日期"
                  >
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="抵押合同编号">
                  <el-input v-model="loanForm.req.guaranteeInfo.mortcontrno">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card">
            <div style="overflow: hidden">
              <el-button
                type="primary"
                round
                style="float: right; margin-right: 100px"
                @click="cardFormSubmit"
                >提交</el-button
              >
            </div>
          </el-card>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {
  getCardData,
  cardSubmit,
  getLoanData,
  loanSubmit,
} from '@/api/process/reportBank'

export default {
  name: 'ReportBankDetails',
  components: {},
  data() {
    return {
      longDate: false, // 身份证有效期是否长期
      no: null, // 垃圾数据不用管
      dataMsg: '',
      loanForm: {
        pub: {},
        req: {
          carInfo: {},
          contractInfo: {},
          stageInfo: {},
          guaranteeInfo: {},
          financeChargeCardInfo: {},
          payMentInfo: {
            cocomNos: [
              {
                cocomId: '',
                cocomReceiveAmt: '',
                cocomReceiveType: '',
                cocomInterestFlag: '',
              },
              {
                cocomId: '',
                cocomReceiveAmt: '',
                cocomReceiveType: '',
                cocomInterestFlag: '',
              },
            ],
          },
          JKRCL: {},
        },
      }, // 贷款信息表单
      materialForm: {}, // 申报材料表单
      cardForm: {}, // 开卡信息表单
      // 上传携带参数
      uploadData: {
        uploadData1: {
          code: 'hyzkzm',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData2: {
          code: 'srzm',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData3: {
          code: 'yhls',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData4: {
          code: 'gfhtdqtfczm',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData5: {
          code: 'qyzp',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData6: {
          code: 'gcfp',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData7: {
          code: 'hgz',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData8: {
          code: 'cldjzs',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData9: {
          code: 'jfzp',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData10: {
          code: 'gchtzm',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData11: {
          code: 'qysp',
          id: this.$route.query.transactionCode,
          type: '1',
        },
        uploadData12: {
          code: 'clbxd',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData13: {
          code: 'deykqksm',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData14: {
          code: 'dbcnh',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData15: {
          code: 'escpgbg',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData16: {
          code: 'gyxyksqb',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData17: {
          code: 'gtczrcns',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData18: {
          code: 'gcfqfkdlxy',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData19: {
          code: 'gffp',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData20: {
          code: 'mdcdydcscspb',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData21: {
          code: 'qczxfqfkdbht',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData22: {
          code: 'sfksjjpz',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData23: {
          code: 'dcbg',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData24: {
          code: 'bzs',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData25: {
          code: 'fcz',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData26: {
          code: 'dyqz',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData27: {
          code: 'WGDCL',
          id: this.$route.query.transactionCode,
          type: '0',
        },
        uploadData28: {
          code: 'jzhjzm',
          id: this.$route.query.transactionCode,
          type: '0',
        },
      },
      mortTypeData: null,
      // 抵押品分类
      mortType: [
        {
          value: '001',
          label: '房地产',
          children: [
            {
              value: '001001',
              label: '居住用房',
              children: [
                {
                  value: '001001001',
                  label: '保障房',
                },
                {
                  value: '001001002',
                  label: '普通用房',
                },
                {
                  value: '001001003',
                  label: '高档住房(含别墅)',
                },
                {
                  value: '001001004',
                  label: '其他居住用房',
                },
              ],
            },
            {
              value: '001002',
              label: '办公用房',
              children: [
                {
                  value: '001002001',
                  label: '办公楼(写字楼)',
                },
                {
                  value: '001002002',
                  label: '其他办公用房',
                },
              ],
            },
            {
              value: '001003',
              label: '商业用房',
              children: [
                {
                  value: '001003001',
                  label: '商铺',
                },
                {
                  value: '001003002',
                  label: '宾馆酒店',
                },
                {
                  value: '001003003',
                  label: '商场超市购物中心',
                },
                {
                  value: '001003004',
                  label: '其他商业用房',
                },
                {
                  value: '001003005',
                  label: '娱乐场所',
                },
                {
                  value: '001003006',
                  label: '商住两用房',
                },
              ],
            },
            {
              value: '001004',
              label: '工业用房',
              children: [
                {
                  value: '001004001',
                  label: '工业厂房',
                },
                {
                  value: '001004002',
                  label: '其他工业用房',
                },
              ],
            },
            {
              value: '001005',
              label: '房屋建筑物/地上附着物',
              children: [
                {
                  value: '001005001',
                  label: '其他不属于以上类型的房地产',
                },
              ],
            },
          ],
        },
        {
          value: '002',
          label: '交通运输设备',
          children: [
            {
              value: '002001',
              label: '车辆',
              children: [
                {
                  value: '002001001',
                  label: '家用轿车',
                },
              ],
            },
            {
              value: '002002',
              label: '船舶',
              children: [
                {
                  value: '002002001',
                  label: '游艇',
                },
              ],
            },
            {
              value: '002003',
              label: '其他运输设备',
              children: [
                {
                  value: '002003001',
                  label: '其他运输设备',
                },
              ],
            },
          ],
        },
      ],
      // 贷款表单验证
      loanRules: {
        'req.carInfo.carBrands': [
          { required: true, message: '请输入车辆品牌', trigger: 'blur' },
        ],
        'req.carInfo.carSeries': [
          { required: true, message: '请输入车系', trigger: 'blur' },
        ],
        'req.carInfo.carSpecs': [
          { required: true, message: '请输入车型', trigger: 'blur' },
        ],
        'req.carInfo.carPrice': [
          { required: true, message: '请输入车辆价格', trigger: 'blur' },
        ],
        'req.stageInfo.sfMoney': [
          { required: true, message: '请输入首付金额', trigger: 'blur' },
        ],
        'req.stageInfo.loanMoney': [
          { required: true, message: '请输入贷款金额', trigger: 'blur' },
        ],
        'req.stageInfo.repayPeriod': [
          { required: true, message: '请选择还款期限', trigger: 'change' },
        ],
        'req.stageInfo.annualInterestRate': [
          { required: true, message: '请输入银行基准利率', trigger: 'blur' },
        ],
        'req.stageInfo.marketingArchivesNum': [
          { required: true, message: '请输入营销档案编号', trigger: 'blur' },
        ],
        'req.stageInfo.property': [
          { required: true, message: '请输入个人总资产', trigger: 'blur' },
        ],
        'req.stageInfo.houseArea': [
          { required: true, message: '请输入现住房面积', trigger: 'blur' },
        ],
        'req.stageInfo.othdebtbal': [
          { required: true, message: '请输入其他负债余额', trigger: 'blur' },
        ],
        'req.stageInfo.dscode': [
          { required: true, message: '请输入营销代码', trigger: 'blur' },
        ],
        'req.stageInfo.monthincome': [
          { required: true, message: '请输入税后月收入', trigger: 'blur' },
        ],
        'req.payMentInfo.payMode': [
          { required: true, message: '请选择支付模式', trigger: 'change' },
        ],
        'req.payMentInfo.payeeType': [
          { required: true, message: '请选择收款对象类型', trigger: 'change' },
        ],
        cocomId1: [
          { required: true, message: '请选择合作单位名称1', trigger: 'change' },
        ],
        'req.payMentInfo.cocomNos[0].cocomReceiveType': [
          {
            required: true,
            message: '请选择单位收款金额1标志',
            trigger: 'change',
          },
        ],
        'req.guaranteeInfo.mortname': [
          { required: true, message: '请输入抵押品名称', trigger: 'blur' },
        ],
        'req.guaranteeInfo.chnsname': [
          { required: true, message: '请输入权属人姓名', trigger: 'blur' },
        ],
        mortTypeData: [
          { required: true, message: '请选择抵押品类别', trigger: 'change' },
        ],
        'req.guaranteeInfo.mortvalue': [
          { required: true, message: '请输入抵押品价值', trigger: 'blur' },
        ],
        'req.guaranteeInfo.maxmortrate': [
          { required: true, message: '请输入最高抵押率', trigger: 'blur' },
        ],
      },
      // 开卡表单验证
      cardRules: {
        chnsname: [
          { required: true, message: '请输入中文名', trigger: 'blur' },
        ],
        engname: [{ required: true, message: '请输入英文名', trigger: 'blur' }],
        custsort: [
          { required: true, message: '请选择证件类型', trigger: 'change' },
        ],
        custcode: [
          { required: true, message: '请输入证件号码', trigger: 'blur' },
        ],
        primnat: [{ required: true, message: '请选择国籍', trigger: 'change' }],
        statdate: [
          {
            required: true,
            message: '请选择证件有效截至日期',
            trigger: 'blur',
          },
        ],
        mrtlstat: [
          { required: true, message: '请选择婚姻状况', trigger: 'change' },
        ],
        edulvl: [
          { required: true, message: '请选择受教育程度', trigger: 'change' },
        ],
        mvblno: [
          { required: true, message: '请输入手机', trigger: 'blur' },
          { min: 11, message: '请输入正确的手机格式', trigger: 'blur' },
        ],
        hprovince: [
          { required: true, message: '请输入住宅(省)', trigger: 'blur' },
        ],
        hcity: [{ required: true, message: '请输入住宅(市)', trigger: 'blur' }],
        hcounty: [
          { required: true, message: '请输入住宅(区/县)', trigger: 'blur' },
        ],
        haddress: [
          { required: true, message: '请输入住宅(详细地址)', trigger: 'blur' },
        ],
        homezip: [
          { required: true, message: '请输入邮政编码', trigger: 'blur' },
          { min: 6, message: '请输入正确的邮政编码', trigger: 'blur' },
        ],
        homestat: [
          { required: true, message: '请选择住宅情况', trigger: 'change' },
        ],
        indate: [
          {
            required: true,
            message: '请选择入住日期',
            trigger: 'blur',
          },
        ],
        carstat: [
          { required: true, message: '请选择自购车情况', trigger: 'change' },
        ],
        yearincome: [
          { required: true, message: '请输入本人年收入', trigger: 'blur' },
        ],
        unitname: [
          { required: true, message: '请输入单位名称', trigger: 'blur' },
        ],
        cprovince: [
          { required: true, message: '请输入单位地址(省)', trigger: 'blur' },
        ],
        ccity: [
          { required: true, message: '请输入单位地址(市)', trigger: 'blur' },
        ],
        ccounty: [
          { required: true, message: '请输入单位地址(区/县)', trigger: 'blur' },
        ],
        caddress: [
          {
            required: true,
            message: '请输入单位地址(详细地址)',
            trigger: 'blur',
          },
        ],
        cophozono: [
          { required: true, message: '请输入单位电话区号', trigger: 'blur' },
        ],
        cophoneno: [
          { required: true, message: '请输入单位电话', trigger: 'blur' },
        ],
        corpzip: [
          { required: true, message: '请输入邮政编码', trigger: 'blur' },
          { min: 6, message: '请输入正确的邮政编码', trigger: 'blur' },
        ],
        modelcode: [
          { required: true, message: '请选择单位性质', trigger: 'change' },
        ],
        occptn: [{ required: true, message: '请选择职业', trigger: 'change' }],
        duty: [{ required: true, message: '请选择职务', trigger: 'change' }],
        joindate: [
          {
            required: true,
            message: '请选择何时进入现单位工作',
            trigger: 'blur',
          },
        ],
        reltname1: [
          { required: true, message: '请输入联系人1姓名', trigger: 'blur' },
        ],
        reltship1: [
          { required: true, message: '请选择与您的关系', trigger: 'change' },
        ],
        reltmobl1: [
          { required: true, message: '请输入联系人1手机', trigger: 'blur' },
          { min: 11, message: '请输入正确的手机格式', trigger: 'blur' },
        ],
        reltphzon1: [
          {
            required: true,
            message: '请输入联系人1固定电话区号',
            trigger: 'blur',
          },
        ],
        relaphone1: [
          { required: true, message: '请输入联系人1固定电话', trigger: 'blur' },
        ],
        drawmode: [
          { required: true, message: '请选择卡片领取方式', trigger: 'change' },
        ],
        cstsign: [
          { required: true, message: '请选择亲见客户签名', trigger: 'change' },
        ],
      },
      isCardSubmit: null, // 开卡信息是否提交
      ishzdw: false, // 选择合作单位
    }
  },
  computed: {},
  watch: {
    mortTypeData: function (newName) {
      this.loanForm.req.guaranteeInfo.mortltype = newName[0]
      this.loanForm.req.guaranteeInfo.mortmtype = newName[1]
      this.loanForm.req.guaranteeInfo.mortstype = newName[2]
    },
    longDate: function (newName) {
      if (newName) {
        this.cardForm.statdate = '9999-12-30'
      } else {
        this.cardForm.statdate = ''
      }
    },
    $route(to, from) {
      //监听路由是否变化
      if (to.path == '/process/reportBankDetails') {
        this.getReportBankData()
        this.ishzdw = false
      }
    },
    'loanForm.req.payMentInfo.payeeType': {
      handler(newName, oldName) {
        if (newName === 2) {
          this.loanForm.req.payMentInfo.cocomNos = [
            {
              cocomId: '',
              cocomReceiveAmt: '',
              cocomReceiveType: '',
              cocomInterestFlag: '',
            },
            {
              cocomId: '',
              cocomReceiveAmt: '',
              cocomReceiveType: '',
              cocomInterestFlag: '',
            },
          ]
          this.ishzdw = true
        }
      },
      immediate: true,
    },
    'loanForm.cocomId1': {
      handler(newName, oldName) {
        if (newName === 1) {
          this.loanForm.req.payMentInfo.cocomNos[0].cocomId = 'zyhzjg01'
        }
      },
      immediate: true,
    },
    'loanForm.cocomId2': {
      handler(newName, oldName) {
        if (newName === 1) {
          this.loanForm.req.payMentInfo.cocomNos[1].cocomId = 'zyhzjg01'
        }
      },
      immediate: true,
    },
  },
  methods: {
    // 开局加载信息
    async getReportBankData() {
      try {
        const data = await getCardData(this.$route.query.transactionCode)
        // console.log(JSON.parse(data.data))
        this.cardForm = JSON.parse(data.data)
        this.isCardSubmit = data.state
      } catch (error) {
        // console.log(error)
      }
      try {
        const data = await getLoanData(this.$route.query.transactionCode)
        // console.log(JSON.parse(data.data))
        this.loanForm = JSON.parse(data.data)
        this.dataMsg = data.msg
        this.loanForm.req.payMentInfo.cooperateAgencyCode = 'zyhzjg01'
        this.loanForm.req.payMentInfo.recommendAgencyCode = '46009102'
        this.loanForm.mortTypeData = []
        this.loanForm.mortTypeData.push(
          this.loanForm.req.guaranteeInfo.mortltype,
          this.loanForm.req.guaranteeInfo.mortmtype,
          this.loanForm.req.guaranteeInfo.mortstype
        )
      } catch (error) {
        // console.log(error)
      }
    },
    // 贷款信息提交
    // async loanFormSubmit() {
    //   this.$refs['loanForm'].validate((valid) => {
    //     if (valid) {
    //       delete this.loanForm.mortTypeData
    //       this.$confirm('请确认已提交申报材料?', '警告', {
    //         confirmButtonText: '确定',
    //         cancelButtonText: '取消',
    //         type: 'warning',
    //       })
    //         .then(() => {
    //           delete this.loanForm.cocomId1
    //           delete this.loanForm.cocomId2
    //           delete this.loanForm.mortTypeData
    //         })
    //         .then(() => {
    //           return loanSubmit(this.loanForm)
    //         })
    //         .then(() => {
    //           this.msgSuccess('提交成功')
    //         })
    //         .catch(function (error) {
    //           // console.log(error)
    //         })
    //     } else {
    //       return false
    //     }
    //   })
    // },
    // 开卡信息提交
    async cardFormSubmit() {
      this.$refs['cardForm'].validate((valid) => {
        if (valid) {
          this.$refs['loanForm'].validate((valid) => {
            if (valid) {
              this.cardForm.transactionCode = this.$route.query.transactionCode
              this.$confirm('确认提交?', '警告', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
              })
                .then(() => {
                  return cardSubmit(this.cardForm)
                })
                .then(() => {
                  delete this.loanForm.cocomId1
                  delete this.loanForm.cocomId2
                  delete this.loanForm.mortTypeData
                })
                .then(() => {
                  return loanSubmit(this.loanForm)
                })
                .then(() => {
                  this.msgSuccess('提交成功')
                  this.getReportBankData()
                })
                .catch(function () {})
            } else {
              return this.msgError('请填写完整信息')
            }
          })
        } else {
          return this.msgError('请填写完整信息')
        }
      })
    },
    // materialFormSubmit() {
    //   this.$confirm('确认提交?', '警告', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     type: 'warning',
    //   })
    //     .then(() => {
    //       for (let i = 1; i < 29; i++) {
    //         this.$refs['upload' + i].submit()
    //       }
    //     })
    //     .then(() => {
    //       this.msgSuccess('提交成功')
    //     })
    //     .catch(function (error) {
    //       // console.log(error)
    //     })
    // },
  },
  created() {
    this.getReportBankData()
  },
}
</script>

<style lang='scss' scoped>
.el-tabs {
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
}
.el-form {
  padding: 10px;
}
.el-col {
  display: flex;
  justify-content: center;
}
#pane-1 .el-col {
  margin: 20px 0;
}
.el-form-item {
  width: 500px;
  /deep/.el-form-item__content {
    float: right;
  }
}
.el-card {
  margin-bottom: 10px;
}
.el-input,
.el-select,
.el-cascader,
/deep/.el-form-item__content {
  width: 280px;
}
/deep/.upload-demo {
  width: 80%;
}
/deep/.el-upload {
  width: 100%;
}
/deep/.el-upload-dragger {
  width: 100%;
}
</style>
