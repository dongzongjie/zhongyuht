<template>
  <div class="app-container">
    <el-tabs tab-position="left">
      <el-tab-pane label="贷款信息">
        <el-form ref="loanForm" :model="loanForm">
          <!-- 订单信息 -->
          <el-card>
            <div slot="header">
              <span>订单信息</span>
            </div>
            <el-row>
              <el-col :span="12">
                <el-form-item label="业务类型">
                  <el-select
                    v-model="loanForm.businessType"
                    placeholder="请选择"
                  >
                    <el-option label="测" value="ce"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="经办银行">
                  <el-select
                    v-model="loanForm.businessType"
                    placeholder="请选择"
                  >
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="进件来源">
                  <el-select
                    v-model="loanForm.businessType"
                    placeholder="请选择"
                  >
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="签约方式">
                  <el-select
                    v-model="loanForm.businessType"
                    placeholder="请选择"
                  >
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
                <el-form-item label="车辆型号">
                  <el-select
                    v-model="loanForm.businessType"
                    placeholder="请选择"
                  >
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="车辆价格">
                  <el-input
                    v-model="loanForm.businessType"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="系统查询价">
                  <el-input
                    v-model="loanForm.businessType"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="车架号">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="发动机号">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="意向价格">
                  <el-input
                    v-model="loanForm.businessType"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
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
                <el-form-item label="首付金额">
                  <el-input
                    v-model="loanForm.businessType"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="首付比例">
                  <el-input
                    v-model="loanForm.businessType"
                    suffix-icon="el-icon-zyrz-baifenhao"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="贷款金额">
                  <el-input
                    v-model="loanForm.businessType"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="分期金额">
                  <el-input
                    v-model="loanForm.businessType"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="还款期限">
                  <el-select
                    v-model="loanForm.businessType"
                    placeholder="请选择"
                  >
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="银行基准利率">
                  <el-input
                    v-model="loanForm.businessType"
                    suffix-icon="el-icon-zyrz-baifenhao"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="首月还款金额">
                  <el-input
                    v-model="loanForm.businessType"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="月还款金额">
                  <el-input
                    v-model="loanForm.businessType"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="营销档案编号">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="手续费总额">
                  <el-input
                    v-model="loanForm.businessType"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="附加费">
                  <el-input
                    v-model="loanForm.businessType"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="个人总资产">
                  <el-input
                    v-model="loanForm.businessType"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="现住房面积">
                  <el-input
                    v-model="loanForm.businessType"
                    suffix-icon="el-icon-zyrz-m"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="其他负债余额">
                  <el-input
                    v-model="loanForm.businessType"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="其他月还款额">
                  <el-input
                    v-model="loanForm.businessType"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="营销代码">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="收入还贷比">
                  <el-input
                    v-model="loanForm.businessType"
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
                <el-form-item label="税后月收入">
                  <el-input
                    v-model="loanForm.businessType"
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
                <el-form-item label="支付模式">
                  <el-select
                    v-model="loanForm.businessType"
                    placeholder="请选择"
                  >
                    <el-option label="测" value="ce"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="收款对象类型">
                  <el-select
                    v-model="loanForm.businessType"
                    placeholder="请选择"
                  >
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="融资担保机构编号">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="合作机构编号">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="保险机构编号">
                  <el-input v-model="loanForm.businessType"> </el-input>
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
                    v-model="loanForm.businessType"
                    placeholder="请选择"
                  >
                    <el-option label="测" value="ce"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="他顷权证号">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="抵押品名称">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="权属人姓名">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="申请人与抵押物权属人关系">
                  <el-select
                    v-model="loanForm.businessType"
                    placeholder="请选择"
                  >
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="车牌号">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="抵押品类别">
                  <el-select
                    v-model="loanForm.businessType"
                    placeholder="请选择"
                  >
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="抵押品价值">
                  <el-input
                    v-model="loanForm.businessType"
                    suffix-icon="el-icon-zyrz-yuan"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="抵押品地址">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="他项权证登记日期">
                  <el-date-picker
                    v-model="loanForm.date"
                    type="date"
                    placeholder="选择日期"
                  >
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="预计可办理他项权日期">
                  <el-date-picker
                    v-model="loanForm.date"
                    type="date"
                    placeholder="选择日期"
                  >
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="最高抵押率">
                  <el-input
                    v-model="loanForm.businessType"
                    suffix-icon="el-icon-zyrz-baifenhao"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="抵押起始日">
                  <el-date-picker
                    v-model="loanForm.date"
                    type="date"
                    placeholder="选择日期"
                  >
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="抵押到期日">
                  <el-date-picker
                    v-model="loanForm.date"
                    type="date"
                    placeholder="选择日期"
                  >
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="抵押合同编号">
                  <el-input v-model="loanForm.businessType"> </el-input>
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
                >提交</el-button
              >
            </div>
          </el-card>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="申报材料">
        <el-form ref="materialForm" :model="materialForm">
          <!-- 借款人材料 -->
          <el-card>
            <div slot="header">
              <span>借款人材料({{}})</span>
            </div>
            <el-row>
              <el-col :span="6">
                <el-upload
                  ref="upload1"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="20"
                  :data="uploadData"
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
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="20"
                  :data="uploadData"
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
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="100"
                  :data="uploadData"
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
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="100"
                  :data="uploadData"
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
                  ref="upload1"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="20"
                  :data="uploadData"
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
                  ref="upload2"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="1"
                  :data="uploadData"
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
                  ref="upload3"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="10"
                  :data="uploadData"
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
                  ref="upload4"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="20"
                  :data="uploadData"
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
                  ref="upload1"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="20"
                  :data="uploadData"
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
                  ref="upload2"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="20"
                  :data="uploadData"
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
                  ref="upload3"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="5"
                  :data="uploadData"
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
                  ref="upload4"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="20"
                  :data="uploadData"
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
                  ref="upload1"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="50"
                  :data="uploadData"
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
                  ref="upload2"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="20"
                  :data="uploadData"
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
                  ref="upload3"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="20"
                  :data="uploadData"
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
                  ref="upload4"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="20"
                  :data="uploadData"
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
                  ref="upload1"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="20"
                  :data="uploadData"
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
                  ref="upload2"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="20"
                  :data="uploadData"
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
                  ref="upload3"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="1"
                  :data="uploadData"
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
                  ref="upload4"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="20"
                  :data="uploadData"
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
                  ref="upload1"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="20"
                  :data="uploadData"
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
                  ref="upload2"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="20"
                  :data="uploadData"
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
                  ref="upload3"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="20"
                  :data="uploadData"
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
                  ref="upload4"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="20"
                  :data="uploadData"
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
                  ref="upload1"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="20"
                  :data="uploadData"
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
                  ref="upload2"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="20"
                  :data="uploadData"
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
                  ref="upload3"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="100"
                  :data="uploadData"
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
                  ref="upload4"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="20"
                  :data="uploadData"
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
                  ref="upload1"
                  class="upload-demo"
                  drag
                  action="http://192.168.31.86:8080/system/test/ceshi2"
                  multiple
                  :auto-upload="false"
                  show-file-list
                  :limit="20"
                  :data="uploadData"
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
          <el-card class="box-card">
            <div style="overflow: hidden">
              <el-button
                type="primary"
                round
                style="float: right; margin-right: 100px"
                >提交</el-button
              >
            </div>
          </el-card>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="开卡信息">
        <el-form ref="cardForm" :model="cardForm">
          <!-- 基本资料 -->
          <el-card>
            <div slot="header">
              <span>车辆信息</span>
            </div>
            <el-row>
              <el-col :span="12">
                <el-form-item label="中文名">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="姓名拼音">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="性别">
                  <el-select
                    v-model="loanForm.businessType"
                    placeholder="请选择"
                  >
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="证件类型">
                  <el-select
                    v-model="loanForm.businessType"
                    placeholder="请选择"
                  >
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="证件号码">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="国籍">
                  <el-select
                    v-model="loanForm.businessType"
                    placeholder="请选择"
                  >
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="证件有效截至日期">
                  <el-date-picker
                    v-model="loanForm.date"
                    type="date"
                    placeholder="选择日期"
                    style="width: 80%"
                  >
                  </el-date-picker>
                  <el-checkbox
                    v-model="loanForm.checked"
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
                <el-form-item label="婚姻状况">
                  <el-select
                    v-model="loanForm.businessType"
                    placeholder="请选择"
                  >
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="受教育程度">
                  <el-select
                    v-model="loanForm.businessType"
                    placeholder="请选择"
                  >
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="手机">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="住宅(省)">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="住宅(市)">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="住宅(区/县)">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="住宅(详细地址)">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="住宅电话">
                  <el-input v-model="loanForm.businessType" style="width: 30%">
                  </el-input>
                  <el-input v-model="loanForm.businessType" style="width: 70%">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="邮政编码">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="住宅情况">
                  <el-select
                    v-model="loanForm.businessType"
                    placeholder="请选择"
                  >
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="入住日期">
                  <el-date-picker
                    v-model="loanForm.date"
                    type="date"
                    placeholder="选择日期"
                  >
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="自购车情况">
                  <el-select
                    v-model="loanForm.businessType"
                    placeholder="请选择"
                  >
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="本人年收入(年)">
                  <el-input v-model="loanForm.businessType"> </el-input>
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
                <el-form-item label="单位名称">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="单位地址(省)">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="单位地址(市)">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="单位地址(区/县)">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="单位地址(详细地址)">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="单位电话">
                  <el-input v-model="loanForm.businessType" style="width: 30%">
                  </el-input>
                  <el-input v-model="loanForm.businessType" style="width: 70%">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="邮政编码">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="单位性质">
                  <el-select
                    v-model="loanForm.businessType"
                    placeholder="请选择"
                  >
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="职业">
                  <el-select
                    v-model="loanForm.businessType"
                    placeholder="请选择"
                  >
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="职务">
                  <el-select
                    v-model="loanForm.businessType"
                    placeholder="请选择"
                  >
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="何时进入现单位工作">
                  <el-date-picker
                    v-model="loanForm.date"
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
              <span>职业资料</span>
            </div>
            <el-row>
              <el-col :span="12">
                <el-form-item label="联系人1姓名">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="与您的关系">
                  <el-select
                    v-model="loanForm.businessType"
                    placeholder="请选择"
                  >
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="联系人1手机">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="联系人1固定电话">
                  <el-input v-model="loanForm.businessType" style="width: 30%">
                  </el-input>
                  <el-input v-model="loanForm.businessType" style="width: 70%">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="联系人2姓名">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="与您的关系">
                  <el-select
                    v-model="loanForm.businessType"
                    placeholder="请选择"
                  >
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="联系人2手机">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="联系人2固定电话">
                  <el-input v-model="loanForm.businessType" style="width: 30%">
                  </el-input>
                  <el-input v-model="loanForm.businessType" style="width: 70%">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-card>
          <!-- 定制个性服务 -->
          <el-card>
            <div slot="header">
              <span>职业资料</span>
            </div>
            <el-row>
              <el-col :span="12">
                <el-form-item label="E-mail地址(对账服务)">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="卡片领取方式">
                  <el-select
                    v-model="loanForm.businessType"
                    placeholder="请选择"
                  >
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="自动还款转出卡号/账户">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="领卡地区号">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="领卡网点号">
                  <el-input v-model="loanForm.businessType"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="亲见客户签名">
                  <el-select
                    v-model="loanForm.businessType"
                    placeholder="请选择"
                  >
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="联名单位会员号">
                  <el-input v-model="loanForm.businessType"> </el-input>
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
export default {
  name: 'ReportBankDetails',
  components: {},
  data() {
    return {
      loanForm: {},
      materialForm: {},
      cardForm: {},
      uploadData: {
        name: 'ceshiupload',
        id: 123,
      },
    }
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
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
