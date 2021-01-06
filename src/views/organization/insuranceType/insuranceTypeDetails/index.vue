<template>
  <div class="app-container">
    <el-form
      ref="form"
      :model="form"
      label-position="right"
      label-width="300px"
    >
      <div class="module">
        <div class="module-top">
          <i class="el-icon-document"></i>
          <span>保险资料</span>
        </div>
        <div class="module-box">
          <el-col :span="12">
            <el-form-item label="保险名称">
              <el-input
                v-model="form.name"
                placeholder="请输入银行名称"
                :style="{ width: '80%' }"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="机构所在地">
              <el-cascader v-model="form.area" :options="options"></el-cascader>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="详细地址">
              <el-input
                v-model="form.address"
                placeholder="请输入详细地址"
                :style="{ width: '50%' }"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系人员">
              <el-input
                v-model="form.linkman"
                placeholder="请输入联系人员"
                :style="{ width: '80%' }"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系电话">
              <el-input
                v-model="form.phoneNumber"
                placeholder="请输入联系电话"
                :style="{ width: '80%' }"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24" style="margin-left: 230px; margin-bottom: 20px">
            <span style="font-size: 14px">协议文件：</span>
            <el-upload
              ref="insuranceFile"
              :limit="9"
              accept=".jpg, .png, .pdf"
              list-type="picture-card"
              :action="upload.url"
              :on-preview="handlePictureCardPreview"
              :headers="upload.headers"
              :file-list="upload.uploadList"
              :on-progress="handleFileUploadProgress"
              :on-success="handleFileSuccess"
              :before-remove="beforeRemove"
              :on-remove="handleRemove"
              :auto-upload="false"
              :data="upload.uploadData"
            >
              <i slot="default" class="el-icon-plus"></i>
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文，最多上传9张
              </div>
            </el-upload>
          </el-col>
          <el-col :span="24">
            <el-form-item label="备注">
              <el-input
                v-model="form.remark"
                type="textarea"
                placeholder="请输入备注"
                :style="{ width: '90%' }"
              ></el-input>
            </el-form-item>
          </el-col>
        </div>
      </div>
      <div class="module">
        <div class="module-top">
          <i class="el-icon-document"></i>
          <span>进件流程（若不清楚，请联系惠瀜工作人员，以免影响业务进件)</span>
        </div>
        <div class="module-box">
          <el-table :data="form.flow" border style="width: 100%">
            <el-table-column label="流程名称">
              <template slot-scope="scope">
                <el-input
                  v-model="scope.row.flowName"
                  :style="{ width: '100%', height: '100%' }"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column label="流程编码">
              <template slot-scope="scope">
                <el-input
                  v-model="scope.row.flowCode"
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
                  @click="form.flow.splice(scope.$index, 1)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <div class="addTr" @click="form.flow.push({})">+添加进件流程</div>
        </div>
      </div>
      <div class="module">
        <div class="module-top">
          <i class="el-icon-document"></i>
          <span>回款账户</span>
        </div>
        <div class="module-box">
          <el-table :data="form.returns" border style="width: 100%">
            <el-table-column label="开户行">
              <template slot-scope="scope">
                <el-input
                  v-model="scope.row.bankDeposit"
                  :style="{ width: '100%', height: '100%' }"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column label="账号">
              <template slot-scope="scope">
                <el-input
                  v-model="scope.row.userNumber"
                  :style="{ width: '100%', height: '100%' }"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column label="户名">
              <template slot-scope="scope">
                <el-input
                  v-model="scope.row.householdName"
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
                  @click="form.returns.splice(scope.$index, 1)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <div class="addTr" @click="form.returns.push({})">+添加汇款账户</div>
        </div>
      </div>
      <div class="module">
        <div class="module-top">
          <i class="el-icon-document"></i>
          <span>合作产品</span>
          <el-button
            type="primary"
            round
            size="mini"
            style="float: right; margin-top: 12px"
            @click="openDialog({ scheme: [{}] }, 'add')"
            >添加合作产品</el-button
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
      </div>
      <div class="module">
        <div class="module-top">
          <i class="el-icon-document"></i>
          <span>权限设置</span>
        </div>
        <div class="module-box">
          <el-col :span="4">
            <el-form-item label="履约保险设置">
              <el-switch v-model="form.isInsurance"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="是否电子签约设置">
              <el-switch v-model="form.isSign"></el-switch>
            </el-form-item>
          </el-col>
        </div>
      </div>
    </el-form>
    <el-button
      type="primary"
      round
      style="float: right; margin: 20px 20px 200px"
      @click="handleInsuranceData"
      >保存</el-button
    >
    <el-dialog title="合作产品" :visible.sync="dialogFormVisible" center>
      <el-form :model="dialogData">
        <h4>基本信息</h4>
        <el-row>
          <el-col :span="12">
            <el-form-item label="产品名称">
              <el-input
                v-model="dialogData.productName"
                placeholder="请输入产品名称"
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
    </el-dialog>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
import options from '@/components/countryData/country-level2-data'
import {
  getInsuranceType,
  addInsuranceType,
  updateInsuranceType,
} from '@/api/organization/insuranceType'
import { deleteImg } from '@/api/organization/car'
import { listBank } from '@/api/organization/bank'

export default {
  name: 'InsuranceTypeDetails',
  components: {},
  data() {
    return {
      dialogImageUrl: '', // 弹框大图片url
      dialogVisible: false, // 大图弹框
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
      options: options, // 省市二级联动
      // 上传参数
      upload: {
        // 是否禁用上传
        isUploading: false,
        // 设置上传的请求头部
        // headers: { Authorization: 'Bearer ' + getToken() },
        // 上传的地址
        url: 'http://192.168.31.82:8080/system/insuranceType/ceshi2',
        // 上传的文件列表
        uploadList: [], // 门店
        // 门店
        uploadData: {
          name: 'insuranceFile',
          id: this.$route.query.id,
        },
      },
    }
  },
  computed: {},
  watch: {
    $route(to, from) {
      //监听路由是否变化
      if (to.path == '/organization/insuranceTypeDetails') {
        this.findInsuranceTypeDetails()
      }
    },
  },
  methods: {
    // 获取保险详细信息
    async findInsuranceTypeDetails() {
      if (this.$route.query.id) {
        try {
          const { data } = await getInsuranceType(this.$route.query.id)
          if (data.area) {
            data.area = data.area.split(',')
          }
          this.upload.uploadList = []
          data.sysFileInfo.forEach((item) => {
            this.upload.uploadList.push({ url: item.filePath })
          })
          this.form = data
        } catch (error) {
          console.log(error)
        }
      } else {
        this.form = {
          flow: [],
          returns: [],
          product: [],
        }
      }
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
    // 保存按钮修改信息
    handleInsuranceData() {
      let submitFormData = JSON.parse(JSON.stringify(this.form))
      if (submitFormData.area) {
        submitFormData.area = submitFormData.area.join(',')
      }
      if (this.$route.query.id) {
        this.$confirm('确认修改？', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(function () {
            return updateInsuranceType(submitFormData)
          })
          .then(() => {
            this.$refs.insuranceFile.submit()
            this.msgSuccess('修改成功')
          })
          .catch(function () {})
      } else {
        this.$confirm('确认保存？', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(function () {
            return addInsuranceType(submitFormData)
          })
          .then((res) => {
            this.upload.uploadData.id = res.data
            this.$refs.insuranceFile.submit()
            this.msgSuccess('保存成功')
          })
          .catch(function () {})
      }
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
    // 获取银行信息
    async getBankData() {
      try {
        const data = await listBank()
        this.bankData = data.rows
      } catch (error) {}
    },
  },
  created() {
    this.findInsuranceTypeDetails()
    this.getBankData()
  },
}
</script>

<style lang='scss' scoped>
.app-container {
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
  .addTr {
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    font-size: 16px;
    text-align: center;
    color: #5bbbfc;
    cursor: pointer;
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
}
</style>
