<template>
  <div class="app-container">
    <el-row :gutter="15">
      <el-form ref="elForm" :model="formData" size="medium" label-width="100px">
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
          <el-form-item label="所属城市">
            <el-input
              v-model="formData.city"
              placeholder="请输入所属城市"
              :style="{ width: '100%' }"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="所属区域">
            <el-input
              v-model="formData.area"
              placeholder="请输入所属区域"
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
              v-model="formData.storeName"
              placeholder="请输入门店名称"
              :style="{ width: '100%' }"
            >
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="门店类型">
            <el-select
              v-model="formData.typeOne"
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
        <el-col :span="6">
          <el-form-item label="有无门头">
            <el-select
              v-model="formData.typeToo"
              placeholder="请选择有无门头"
              clearable
              :style="{ width: '100%' }"
            >
              <el-option label="有" value="0"></el-option>
              <el-option label="无" value="1"></el-option>
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
          <el-form-item label="业务类型">
            <el-select
              v-model="formData.typeThree"
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
          <el-form-item label="产品竞争对象">
            <el-input
              v-model="formData.opponent"
              placeholder="竞争对手名称以及政策"
              :style="{ width: '100%' }"
            >
            </el-input>
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
            ref="upload"
            :limit="9"
            accept=".jpg, .png"
            list-type="picture-card"
            :action="upload.url"
            :headers="upload.headers"
            :file-list="upload.fileList"
            :on-progress="handleFileUploadProgress"
            :on-success="handleFileSuccess"
            :auto-upload="false"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleDownload(file)"
                >
                  <i class="el-icon-download"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb,最多上传9张
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </el-col>
        <el-col :span="24" style="margin-bottom: 20px">
          <span style="font-size: 14px">车位照片：</span>
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
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column label="账户用途" width="180">
              <template slot-scope="scope">
                <el-input
                  v-model="scope.row.date"
                  :style="{ width: '100%', height: '100%' }"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column label="账户类型" width="180">
              <template slot-scope="scope">
                <el-input
                  v-model="scope.row.name"
                  :style="{ width: '100%', height: '100%' }"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column label="收款账户姓名">
              <template slot-scope="scope">
                <el-input
                  v-model="scope.row.address"
                  :style="{ width: '100%', height: '100%' }"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column label="收款账户证件号码">
              <template slot-scope="scope">
                <el-input
                  v-model="scope.row.address"
                  :style="{ width: '100%', height: '100%' }"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column label="放款账户">
              <template slot-scope="scope">
                <el-input
                  v-model="scope.row.address"
                  :style="{ width: '100%', height: '100%' }"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column label="收款借记卡卡号">
              <template slot-scope="scope">
                <el-input
                  v-model="scope.row.address"
                  :style="{ width: '100%', height: '100%' }"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column label="开户银行">
              <template slot-scope="scope">
                <el-input
                  v-model="scope.row.address"
                  :style="{ width: '100%', height: '100%' }"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column label="支行">
              <template slot-scope="scope">
                <el-input
                  v-model="scope.row.address"
                  :style="{ width: '100%', height: '100%' }"
                ></el-input>
              </template>
            </el-table-column>
          </el-table>
          <div class="addTr" @click="tableData.push({})">+添加收款账户</div>
        </el-col>
        <el-col :span="24">
          <el-form-item size="large">
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>
<script>
import { getToken } from '@/utils/auth'

export default {
  name: 'CarDetails',
  components: {},
  props: [],
  data() {
    return {
      formData: {
        state: '', // 状态
        city: '', // 城市
        area: '', // 区域
        bazaar: '', // 市场
        typeOne: '', // 门店类型
        typeToo: '', // 有无门头
        stall: '', // 车位数
        storeName: '', // 门店名称
        businessNature: '', // 经营性质
        typeThree: '', // 业务类型
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
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      // 上传参数
      upload: {
        // 是否禁用上传
        isUploading: false,
        // 设置上传的请求头部
        headers: { Authorization: 'Bearer ' + getToken() },
        // 上传的地址
        url: 'http://192.168.31.82:8080/common/upload/common/upload',
        // 上传的文件列表
        fileList: [],
      },
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs['elForm'].validate((valid) => {
        if (!valid) return
        // TODO 提交表单
      })
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
    },
    // 文件提交处理
    submitUpload() {
      this.$refs.upload.submit()
    },
    // 文件上传中处理
    handleFileUploadProgress(event, file, fileList) {
      this.upload.isUploading = true
    },
    // 文件上传成功处理
    handleFileSuccess(response, file, fileList) {
      this.upload.isUploading = false
      this.form.filePath = response.url
      this.msgSuccess(response.msg)
    },
    // 删除图片
    handleRemove(file) {
      // this.upload.fileList.remove = [{ name: file.name, url: file.url }]
    },
    // 放大图片
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload(file) {
      console.log(file)
    },
  },
}
</script>
<style>
.el-rate {
  display: inline-block;
  vertical-align: text-top;
}
.addTr {
  height: 30px;
  line-height: 30px;
  background-color: #fff;
  font-size: 16px;
  text-align: center;
  color: #5bbbfc;
  cursor: pointer;
}
</style>
