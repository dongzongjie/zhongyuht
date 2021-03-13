<template>
  <div class="app-container">
    <el-card class="box-card">
      <el-row :gutter="15">
        <el-form
          ref="elForm"
          :model="formData"
          size="medium"
          label-width="100px"
        >
          <el-col :span="6">
            <el-form-item label="合作状态">
              <el-select
                v-model="formData.state"
                placeholder="请选择合作状态"
                clearable
                :style="{ width: '100%' }"
              >
                <el-option label="未合作" value="0"></el-option>
                <el-option label="已合作" value="1"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="所属省">
              <el-input
                v-model="formData.area"
                placeholder="请输入所属省"
                :style="{ width: '100%' }"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="所属城市">
              <el-input
                v-model="formData.city"
                placeholder="请输入所属城市"
                :style="{ width: '100%' }"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="所属市场">
              <el-input
                v-model="formData.bazaar"
                placeholder="请输入所属市场"
                :style="{ width: '100%' }"
              >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="门店名称">
              <el-input
                v-model="formData.dealerName"
                placeholder="请输入门店名称"
                :style="{ width: '100%' }"
              >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="门店类型">
              <el-select
                v-model="formData.shopType"
                placeholder="请选择门店类型"
                clearable
                :style="{ width: '100%' }"
              >
                <el-option label="固定" value="0"></el-option>
                <el-option label="流动" value="1"></el-option>
                <el-option label="竟对/黄牛" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- <el-col :span="6">
          <el-form-item label="业务类型">
            <el-select
              v-model="formData.businessType"
              placeholder="请选择业务类型"
              clearable
              :style="{ width: '100%' }"
            >
              <el-option label="有" value="0"></el-option>
              <el-option label="无" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col> -->
          <el-col :span="6">
            <el-form-item label="业务类型">
              <el-select
                v-model="formData.businessType"
                placeholder="请选择业务类型"
                clearable
                :style="{ width: '100%' }"
              >
                <el-option label="轻卡" value="0"></el-option>
                <el-option label="半挂" value="1"></el-option>
                <el-option label="自卸" value="2"></el-option>
                <el-option label="渣土" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="经营性质">
              <el-select
                v-model="formData.businessNature"
                placeholder="请选择经营性质"
                clearable
                :style="{ width: '100%' }"
              >
                <el-option label="一个老板独立经营" value="0"></el-option>
                <el-option label="多个老板合伙经营" value="1"></el-option>
                <el-option label="多个老板各自经营" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="车位数（台）">
              <el-input
                v-model="formData.stall"
                placeholder="请输入车位数"
                :style="{ width: '100%' }"
              >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="月交易辆(台)">
              <el-input
                v-model="formData.monthDeal"
                placeholder="请输入月交易辆月交易辆(台)"
                :style="{ width: '100%' }"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="月分期辆(台)">
              <el-input
                v-model="formData.monthInstallment"
                placeholder="请输入月分期辆月分期辆(台)"
                :style="{ width: '100%' }"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="竞对单量(台)">
              <el-input
                v-model="formData.matchAmount"
                placeholder="请输入竞对单量竞对单量(台)"
                :style="{ width: '100%' }"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="产品竞争对象">
              <el-input
                v-model="formData.opponent"
                placeholder="竞争对手名称以及政策"
                :style="{ width: '100%' }"
              >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="车商详细地址">
              <el-input
                v-model="formData.detailAddress"
                placeholder="请输入车商详细地址"
                :style="{ width: '100%' }"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24" style="margin-bottom: 20px">
            <span style="font-size: 14px">门店照片：</span>
            <el-upload
              ref="store"
              :limit="9"
              accept=".jpg, .png"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :action="upload.url"
              :headers="upload.headers"
              :file-list="upload.storeList"
              :on-progress="handleFileUploadProgress"
              :on-success="handleFileSuccess"
              :before-remove="beforeRemove"
              :on-remove="handleRemove"
              :auto-upload="false"
              :data="upload.storeData"
            >
              <i slot="default" class="el-icon-plus"></i>
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文件，最多上传9张
              </div>
            </el-upload>
          </el-col>
          <el-col :span="24" style="margin-bottom: 20px">
            <span style="font-size: 14px">车位照片：</span>
            <el-upload
              ref="stall"
              :limit="9"
              accept=".jpg, .png"
              list-type="picture-card"
              :action="upload.url"
              :on-preview="handlePictureCardPreview"
              :headers="upload.headers"
              :file-list="upload.stallList"
              :on-progress="handleFileUploadProgress"
              :on-success="handleFileSuccess"
              :before-remove="beforeRemove"
              :on-remove="handleRemove"
              :auto-upload="false"
              :data="upload.stallData"
            >
              <i slot="default" class="el-icon-plus"></i>
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文件，最多上传9张
              </div>
            </el-upload>
          </el-col>
          <el-col :span="6">
            <el-form-item label="联系人姓名">
              <el-input
                v-model="formData.userName"
                placeholder="请输入联系人姓名"
                :style="{ width: '100%' }"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="联系人电话">
              <el-input
                v-model="formData.phoneNumber"
                placeholder="请输入联系人电话"
                :style="{ width: '100%' }"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="联系人性别">
              <el-select
                v-model="formData.gender"
                placeholder="请选择联系人性别"
                clearable
                :style="{ width: '100%' }"
              >
                <el-option label="女" value="0"></el-option>
                <el-option label="男" value="1"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="是否KP">
              <el-select
                v-model="formData.isLinkman"
                placeholder="是否为重要联系人"
                clearable
                :style="{ width: '100%' }"
              >
                <el-option label="是" value="0"></el-option>
                <el-option label="否" value="1"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="身份">
              <el-select
                v-model="formData.identity"
                placeholder="请选择身份"
                clearable
                :style="{ width: '100%' }"
              >
                <el-option label="未知" value="0"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24" style="margin-bottom: 20px">
            <el-table
              :data="formData.zyjrCarAccount"
              border
              style="width: 100%"
            >
              <el-table-column label="账户用途" width="180">
                <template slot-scope="scope">
                  <el-input
                    v-model="scope.row.accountUse"
                    :style="{ width: '100%', height: '100%' }"
                  ></el-input>
                </template>
              </el-table-column>
              <el-table-column label="账户类型" width="180">
                <template slot-scope="scope">
                  <el-input
                    v-model="scope.row.accountType"
                    :style="{ width: '100%', height: '100%' }"
                  ></el-input>
                </template>
              </el-table-column>
              <el-table-column label="收款账户姓名">
                <template slot-scope="scope">
                  <el-input
                    v-model="scope.row.accountName"
                    :style="{ width: '100%', height: '100%' }"
                  ></el-input>
                </template>
              </el-table-column>
              <el-table-column label="收款账户证件号码">
                <template slot-scope="scope">
                  <el-input
                    v-model="scope.row.accountNumber"
                    :style="{ width: '100%', height: '100%' }"
                  ></el-input>
                </template>
              </el-table-column>
              <!-- <el-table-column label="放款账户">
              <template slot-scope="scope">
                <el-input
                  v-model="scope.row.loanAccount"
                  :style="{ width: '100%', height: '100%' }"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column label="收款借记卡卡号">
              <template slot-scope="scope">
                <el-input
                  v-model="scope.row.payeeAccount"
                  :style="{ width: '100%', height: '100%' }"
                ></el-input>
              </template>
            </el-table-column> -->
              <el-table-column label="开户银行">
                <template slot-scope="scope">
                  <el-input
                    v-model="scope.row.accountLicence"
                    :style="{ width: '100%', height: '100%' }"
                  ></el-input>
                </template>
              </el-table-column>
              <el-table-column label="支行">
                <template slot-scope="scope">
                  <el-input
                    v-model="scope.row.accountSubBranch"
                    :style="{ width: '100%', height: '100%' }"
                  ></el-input>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    round
                    type="primary"
                    @click="deleteAccount(scope.$index)"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <div class="addTr" @click="formData.zyjrCarAccount.push({})">
              +添加收款账户
            </div>
          </el-col>
          <el-col :span="24" style="margin-bottom: 20px">
            <span style="font-size: 14px">收款人身份证+银行卡：</span>
            <el-upload
              ref="card"
              :limit="9"
              accept=".jpg, .png"
              list-type="picture-card"
              :action="upload.url"
              :on-preview="handlePictureCardPreview"
              :headers="upload.headers"
              :file-list="upload.cardList"
              :on-progress="handleFileUploadProgress"
              :on-success="handleFileSuccess"
              :before-remove="beforeRemove"
              :on-remove="handleRemove"
              :auto-upload="false"
              :data="upload.cardData"
            >
              <i slot="default" class="el-icon-plus"></i>
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文件，最多上传9张
              </div>
            </el-upload>
          </el-col>
          <el-col :span="24" style="margin-bottom: 20px">
            <span style="font-size: 14px">营业执照+身份证（如有）：</span>
            <el-upload
              ref="license"
              :limit="9"
              accept=".jpg, .png"
              list-type="picture-card"
              :action="upload.url"
              :on-preview="handlePictureCardPreview"
              :headers="upload.headers"
              :file-list="upload.licenseList"
              :on-progress="handleFileUploadProgress"
              :on-success="handleFileSuccess"
              :before-remove="beforeRemove"
              :on-remove="handleRemove"
              :auto-upload="false"
              :data="upload.licenseData"
            >
              <i slot="default" class="el-icon-plus"></i>
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文，最多上传9张
              </div>
            </el-upload>
          </el-col>
          <el-col :span="24" style="margin-bottom: 20px">
            <el-form-item label="备注">
              <el-input type="textarea" v-model="formData.remark"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item size="large">
              <el-button type="primary" @click="submitUpload">提交</el-button>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
    </el-card>
    <!-- <div class="module">
      <div class="module-top">
        <i class="el-icon-document"></i>
        <span>合作方案</span>
        <el-button
          type="primary"
          round
          size="mini"
          style="float: right; margin-top: 12px"
          @click="openDialog({ scheme: [{}] }, 'add')"
          >添加合作方案</el-button
        >
      </div>
      <div class="module-box">
        <div
          class="product-box"
          v-for="(item, index) in form.product"
          :key="index"
        >
          <div class="product-box-top">
            产品：{{ item.productName }} / {{ item.productCode }}
            <el-button
              type="primary"
              round
              size="mini"
              style="float: right; margin: 7px 10px 0"
              @click="openDialog(item, 'edit', index)"
              >编辑</el-button
            >
            <el-button
              type="primary"
              round
              size="mini"
              style="float: right; margin-top: 7px"
              @click="deleteProduct(index)"
              >删除</el-button
            >
          </div>
          <div class="product-box-body">
            <el-row>
              <el-col :span="8">汽车品牌：{{ item.productBrand }}</el-col>
              <el-col :span="8"
                >车辆类型：<span v-if="item.carType === '0'">新车</span
                ><span v-if="item.carType === '1'">二手车</span
                ><span v-if="item.carType === '2'">商用车</span></el-col
              >
              <el-col :span="8">业务区域：{{ item.businessArea }}</el-col>
              <el-col :span="24"
                >费用方案：
                <el-table :data="item.scheme" border style="width: 100%">
                  <el-table-column
                    prop="stageNum"
                    label="分期期数"
                    align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="baseRate"
                    label="银行基准利率"
                    align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="shouldRate"
                    label="应付费率"
                    align="center"
                  >
                  </el-table-column>
                </el-table>
              </el-col>
              <el-col :span="24">备注：{{ item.productRemark }}</el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div> -->
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
    <!-- <el-dialog title="合作方案" :visible.sync="dialogFormVisible" center>
      <el-form :model="dialogData">
        <h4>基本信息</h4>
        <el-row>
          <el-col :span="12">
            <el-form-item label="方案名称">
              <el-input
                v-model="dialogData.productName"
                placeholder="请输入方案名称"
                :style="{ width: '80%' }"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="产品代码">
              <el-input
                v-model="dialogData.productCode"
                placeholder="请输入产品代码"
                :style="{ width: '80%' }"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="所属银行">
              <el-select
                v-model="dialogData.belongBank"
                :style="{ width: '40%', height: '100%' }"
                placeholder="请选择所属银行"
              >
                <el-option
                  v-for="(item, index) in bankData"
                  :key="index"
                  :label="item.bankName"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="车辆品牌">
              <el-radio-group v-model="dialogData.productBrand">
                <el-radio label="不限"></el-radio>
                <el-radio label="指定品牌"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col
            :span="8"
            style="margin-bottom: 20px"
            v-if="dialogData.productBrand === '指定品牌'"
          >
            <el-input
              v-model="dialogData.brandInput"
              placeholder="请输入品牌"
              :style="{ width: '100%' }"
            ></el-input>
          </el-col>
          <el-col :span="20">
            <el-form-item label="备注">
              <el-input
                v-model="dialogData.productRemark"
                type="textarea"
                placeholder="请输入备注"
                :style="{ width: '90%' }"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <h4>费用方案</h4>
        <el-row>
          <el-col :span="12">
            <el-form-item label="车辆类型">
              <el-select
                v-model="dialogData.carType"
                :style="{ width: '70%', height: '100%' }"
                placeholder="请选择车辆类型"
              >
                <el-option label="新车" value="0"></el-option>
                <el-option label="二手车" value="1"></el-option>
                <el-option label="商用车" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="业务区域">
              <el-radio-group v-model="dialogData.businessArea">
                <el-radio label="不限"></el-radio>
                <el-radio label="省内"></el-radio>
                <el-radio label="省外"></el-radio>
                <el-radio label="指定区域"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col
            :span="24"
            style="margin-bottom: 20px"
            v-if="dialogData.businessArea === '指定区域'"
          >
            <el-input
              v-model="dialogData.areaInput"
              placeholder="请输入区域"
              :style="{ width: '100%' }"
            ></el-input>
          </el-col>
          <el-col
            :span="18"
            v-for="(item, index) in dialogData.scheme"
            :key="index"
            style="
              border: 1px solid #ccc;
              padding: 20px 10px;
              border-radius: 5px;
            "
          >
            <el-col :span="12">
              <el-form-item label="分期期数">
                <el-select
                  v-model="item.stageNum"
                  :style="{ width: '70%', height: '100%' }"
                  placeholder="请选择分期期数"
                >
                  <el-option label="12" value="12"></el-option>
                  <el-option label="18" value="18"></el-option>
                  <el-option label="24" value="24"></el-option>
                  <el-option label="30" value="30"></el-option>
                  <el-option label="36" value="36"></el-option>
                  <el-option label="48" value="48"></el-option>
                  <el-option label="60" value="60"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="银行基准利率">
                <el-input
                  v-model="item.baseRate"
                  suffix-icon="el-icon-zyrz-baifenhao"
                  placeholder="请输入银行基准利率"
                  :style="{ width: '70%' }"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="应付费率">
                <el-input
                  v-model="item.shouldRate"
                  suffix-icon="el-icon-zyrz-baifenhao"
                  placeholder="请输入应付费率"
                  :style="{ width: '70%' }"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="应收费率">
                <el-input
                  v-model="item.shouldPut"
                  suffix-icon="el-icon-zyrz-baifenhao"
                  placeholder="请输入应付费率"
                  :style="{ width: '70%' }"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6" style="float: right">
              <el-button
                type="primary"
                round
                size="mini"
                @click="dialogData.scheme.splice(index, 1)"
                >删除</el-button
              >
            </el-col>
          </el-col>
          <el-col :span="6" class="addProduct">
            <div @click="dialogData.scheme.push({})">添加费用方案</div>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogConfirm">确 定</el-button>
      </div>
    </el-dialog> -->
  </div>
</template>
<script>
import { getToken } from '@/utils/auth'
import { getCar, updateCar, deleteImg } from '@/api/organization/car'

export default {
  name: 'CarDetails',
  components: {},
  props: [],
  data() {
    return {
      dialogImageUrl: '', // 弹框大图片url
      dialogVisible: false, // 大图弹框
      formData: {
        state: '', // 状态
        city: '', // 城市
        area: '', // 省
        bazaar: '', // 市场
        shopType: '', // 门店类型
        businessType: '', // 业务类型
        stall: '', // 车位数
        dealerName: '', // 门店名称
        businessNature: '', // 经营性质
        // typeThree: '', // 业务类型
        opponent: '', // 对手
        monthDeal: '', // 月交易辆
        monthInstallment: '', // 月分期辆
        matchAmount: '', // 竟对单量
        detailAddress: '', // 详细地址
        gender: '', // 联系人性别
        userName: '', // 联系人名
        phoneNumber: '', // 联系人电话
        isLinkman: '', // 是否KP
        identity: '', // 身份
        remark: '', // 备注
        zyjrCarAccount: [], // 银行账户信息
      },
      disabled: false,
      // 上传参数
      upload: {
        // 是否禁用上传
        isUploading: false,
        // 设置上传的请求头部
        headers: { Authorization: 'Bearer ' + getToken() },
        // 上传的地址
        url: 'http://114.215.186.186:8080/system/test/ceshi2',
        // 上传的文件列表
        storeList: [], // 门店
        stallList: [], // 车位
        cardList: [], // 收款人身份证+银行卡
        licenseList: [], // 营业执照+法人+开户许可证
        // 门店
        storeData: {
          name: 'store',
          id: this.$route.query.id,
        },
        // 车位
        stallData: {
          name: 'stall',
          id: this.$route.query.id,
        },
        // 收款人身份证+银行卡
        cardData: {
          name: 'card',
          id: this.$route.query.id,
        },
        // 营业执照+法人+开户许可证
        licenseData: {
          name: 'license',
          id: this.$route.query.id,
        },
      },
      dialogFormVisible: false, // 弹框
      dialogData: {}, // 弹框数据
      dialogStatus: '', // 弹框状态（是修改还是新增）
      dialogIndex: null, // 弹框数据index
      form: {
        flow: [],
        returns: [],
        product: [],
      },
      bankData: [], //银行信息
    }
  },
  computed: {},
  watch: {
    $route(to, from) {
      //监听路由是否变化
      if (to.path == '/organization/carDetails') {
        this.getCars()
        this.upload.storeData.id = this.upload.stallData.id = this.upload.cardData.id = this.upload.licenseData.id = this.$route.query.id
      }
    },
  },
  created() {
    this.getCars()
  },
  mounted() {},
  methods: {
    // 获取车商详细信息
    async getCars() {
      try {
        const { data } = await getCar(this.$route.query.id)
        this.formData = data
        this.upload.storeList = []
        this.upload.stallList = []
        this.upload.cardList = []
        this.upload.licenseList = []
        data.sysFileInfo.forEach((item) => {
          if (item.fileName === 'store') {
            this.upload.storeList.push({
              url: item.filePath,
            })
          } else if (item.fileName === 'stall') {
            this.upload.stallList.push({
              url: item.filePath,
            })
          } else if (item.fileName === 'card') {
            this.upload.cardList.push({
              url: item.filePath,
            })
          } else if (item.fileName === 'license') {
            this.upload.licenseList.push({
              url: item.filePath,
            })
          }
        })
      } catch (error) {}
    },
    // 文件提交处理
    submitUpload() {
      const that = this
      this.$confirm('确认修改？', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(function () {
          return that.updateCars()
        })
        .then(() => {
          that.msgSuccess('修改成功')
        })
        .catch(function () {})
    },
    // 车商信息修改
    async updateCars() {
      try {
        await updateCar(this.formData)
        this.$refs.store.submit()
        this.$refs.stall.submit()
        this.$refs.card.submit()
        this.$refs.license.submit()
      } catch (error) {}
    },
    // 文件上传中处理
    handleFileUploadProgress(event, file, fileList) {
      this.upload.isUploading = true
    },
    // 文件上传成功处理
    handleFileSuccess(response, file, fileList) {
      this.upload.isUploading = false
      this.msgSuccess(response.msg)
    },
    // 删除处理
    async handleRemove(file, fileList) {
      if (file.status === 'success') {
        try {
          await deleteImg(file.url)
          this.msgSuccess('删除成功')
        } catch (error) {
          console.log(error)
        }
      }
    },
    beforeRemove(file, fileList) {
      if (file.status === 'success') {
        return this.$confirm('确认删除？删除后无法恢复', '警告', {
          type: 'warning',
        })
      }
    },
    // 放大图片
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    // 删除账户信息
    deleteAccount(index) {
      this.formData.zyjrCarAccount.splice(index, 1)
    },
    // 打开dialog
    openDialog(data, status, index) {
      this.dialogData = JSON.parse(JSON.stringify(data)) // 利用json转换实现深拷贝
      this.dialogIndex = index
      this.dialogStatus = status
      this.dialogFormVisible = true
    },
    // 删除合作产品
    deleteProduct(index) {
      const that = this
      this.$confirm('确认删除？保存后生效！', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(function () {
          return that.form.product.splice(index, 1)
        })
        .then(() => {})
        .catch(function () {})
    },
    // dialog确认按钮
    dialogConfirm() {
      if (this.dialogStatus === 'add') {
        this.form.product.push(this.dialogData)
      } else if (this.dialogStatus === 'edit') {
        this.form.product[this.dialogIndex] = this.dialogData
      }
      this.dialogFormVisible = false
    },
  },
}
</script>
<style  lang='scss' scoped>
.el-rate {
  display: inline-block;
  vertical-align: text-top;
}
.addTr {
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  font-size: 16px;
  text-align: center;
  color: #5bbbfc;
  cursor: pointer;
}
.module {
  background-color: #fff;
  margin-top: 20px;
  .module-top {
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    color: rgb(24, 144, 255);
    padding: 0 20px;
    border-left: 1px solid rgb(214, 219, 223);
    border-right: 1px solid rgb(214, 219, 223);
    i {
      font-size: 18px;
    }
    span {
      margin-left: 7px;
    }
  }
  .module-box {
    padding: 20px;
    border: 1px solid rgb(214, 219, 223);
    overflow: hidden;
    .product-box-top {
      height: 40px;
      line-height: 40px;
      color: #fff;
      background-color: rgb(113, 126, 161);
      padding: 0 25px;
      font-size: 13px;
    }
    .product-box-body {
      color: #999;
      background-color: #f8f9fa;
      padding: 20px;
      font-size: 13px;
      margin-bottom: 20px;
      .el-col {
        margin: 5px 0;
      }
    }
  }
}
.el-dialog {
  h4 {
    height: 42px;
    line-height: 42px;
    padding: 0 50px;
    background-color: rgb(243, 244, 249);
  }
  .addProduct {
    line-height: 136px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
