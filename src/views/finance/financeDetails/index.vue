<template>
  <div class="app-container">
    <el-card>
      <div slot="header">
        <span>基本信息</span>
      </div>
      <el-row style="padding: 5px 0">
        <el-col :span="8">销售团队：{{ financeData.xiaoshoutuandui }}</el-col>
        <el-col :span="8">资金方：{{ financeData.data.fundSide }}</el-col>
        <el-col :span="8">区域：{{ financeData.quyu }}</el-col>
      </el-row>
    </el-card>
    <el-card>
      <div slot="header">
        <span>贷款信息</span>
      </div>
      <el-row style="padding: 5px 0">
        <el-col :span="8"
          >审批类型：<span v-if="financeData.shenpileixing === '0'"
            >先放后抵</span
          ><span v-else-if="financeData.shenpileixing === '1'"
            >先抵后放</span
          ></el-col
        >
        <el-col :span="8">产品类型：{{ financeData.data.productType }}</el-col>
        <el-col :span="8">贷款产品：{{ financeData.data.loanProduct }}</el-col>
        <el-col :span="8"
          >实际销售价：{{ financeData.data.actualPrice }}</el-col
        >
        <el-col :span="8">贷款金额：{{ financeData.data.loanAmount }}</el-col>
        <el-col :span="8"
          >还款期限：{{ financeData.data.repaymentTerm }}</el-col
        >
        <el-col :span="8">对客费率：{{ financeData.data.interestRate }}</el-col>
        <el-col :span="8">续保押金：{{ financeData.data.deposit }}</el-col>
        <el-col :span="8">附加费：{{ financeData.data.fuwufei }}</el-col>
      </el-row>
    </el-card>
    <el-card>
      <div slot="header">
        <span>车商账户</span>
      </div>
      <el-row
        style="padding: 5px 0"
        v-for="(item, index) in financeData.zhanghu"
        :key="item.id"
      >
        <el-col
          :span="24"
          style="font-size: 15px; margin: 10px 0; font-weight: 700"
          >车商账户{{ index + 1 }}</el-col
        >
        <el-col :span="8">收款单位：{{ financeData.shoukuandanwei }}</el-col>
        <el-col :span="8">收款开户行：{{ item.accountLicence }}</el-col>
        <el-col :span="8">账户用途：{{ item.accountUse }}</el-col>
        <el-col :span="8">账号类型：{{ item.accountType }}</el-col>
        <el-col :span="8">收款账户姓名：{{ item.accountName }}</el-col>
        <el-col :span="8">收款账户：{{ item.accountNumber }}</el-col>
        <el-col :span="8">开户支行：{{ item.accountSubBranch }}</el-col>
      </el-row>
    </el-card>
    <el-card>
      <div slot="header">
        <span>返点方案</span>
      </div>
      <el-row style="padding: 5px 0">
        <el-col :span="8">车辆类型：{{ financeData.cheliangleixing }}</el-col>
        <el-col :span="8">业务区域：{{ financeData.yewuquyu }}</el-col>
        <el-col :span="8">分期期数：{{ financeData.fenqiqishu }}</el-col>
        <el-col :span="8">分期手续费：</el-col>
        <el-col :span="8">应付费率：</el-col>
        <el-col :span="8">应收费率：</el-col>
      </el-row>
    </el-card>
    <el-card>
      <div slot="header">
        <span>财务垫款</span>
      </div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="垫资方式" prop="mode">
              <el-select v-model="ruleForm.mode" placeholder="请选择">
                <el-option label="自行垫资" :value="1"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12" style="position: relative">
            <el-form-item label="打款账户" prop="zhanghu">
              <el-select v-model="ruleForm.zhanghu" placeholder="请选择">
                <template v-for="item in accountData">
                  <el-option
                    :label="item.accountName"
                    :value="item.id"
                    :key="item.id"
                    v-if="item.del === '1'"
                  ></el-option>
                </template>
              </el-select>
            </el-form-item>
            <div class="add" @click="dialogVisible = true">添加</div>
          </el-col>
          <el-col :span="12">
            <el-form-item label="打款金额" prop="money">
              <el-input
                v-model="ruleForm.money"
                style="width: 200px"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="打款时间" prop="time">
              <el-date-picker
                v-model="ruleForm.time"
                type="datetime"
                placeholder="选择日期时间"
                value-format="yyyy-MM-dd HH:mm:ss"
                style="width: 200px"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="放款时间">
              <el-date-picker
                v-model="loanResultDate"
                type="datetime"
                placeholder="由银行返回"
                value-format="yyyy-MM-dd HH:mm:ss"
                style="width: 200px"
                disabled
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="备注">
              <el-input
                type="textarea"
                v-model="ruleForm.remark"
                rows="3"
                placeholder="请输入"
                maxlength="200"
                show-word-limit
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5"> </el-col>
          <el-col :span="11">
            <div>{{ accountMini.accountName }}</div>
            <div>{{ accountMini.bankName }}</div>
            <div>{{ accountMini.account }}</div>
            <div>{{ accountMini.zhanghuhuming }}</div>
          </el-col>
        </el-row>
        <div style="font-size: 14px; padding: 0 20px">打款凭证</div>
        <el-upload
          ref="upload"
          class="upload-demo"
          :limit="3"
          action="http://192.168.31.82:8080/system/caiwu/ceshi2"
          :file-list="fileList"
          :auto-upload="false"
          list-type="picture"
          :data="uploadData"
          :before-remove="beforeRemove"
          :on-remove="handleRemove"
        >
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
        <el-form-item style="padding: 20px 100px">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >保存</el-button
          >
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-dialog title="打款账户设置" :visible.sync="dialogVisible" width="85%">
      <el-row>
        <el-col :span="9" style="margin: 20px 55px">
          <el-card style="width: 500px">
            <div slot="header">
              <span style="font-size: 16px">账户</span>
            </div>
            <div style="margin: 5px">账户名称</div>
            <el-input
              v-model="accountFrom.accountName"
              placeholder="请输入内容"
              style="width: 350px; margin: 10px"
            ></el-input>
            <div style="margin: 5px">开户行名称</div>
            <el-input
              v-model="accountFrom.bankName"
              placeholder="请输入内容"
              style="width: 350px; margin: 10px"
            ></el-input>
            <div style="margin: 5px">开户账户</div>
            <el-input
              v-model="accountFrom.account"
              placeholder="请输入内容"
              style="width: 350px; margin: 10px"
            ></el-input>
            <div style="margin: 5px">账户户名</div>
            <el-input
              v-model="accountFrom.zhanghuhuming"
              placeholder="请输入内容"
              style="width: 350px; margin: 10px"
            ></el-input>
            <el-button
              type="primary"
              style="width: 340px; height: 40px; margin: 20px"
              @click="handleAccountData('add')"
              >添加账户</el-button
            >
          </el-card>
        </el-col>
        <el-col
          :span="9"
          style="margin: 20px 55px"
          v-for="(item, index) in accountData"
          :key="item.id"
        >
          <el-card style="width: 500px">
            <div slot="header">
              <span style="font-size: 16px">账户{{ index + 1 }}</span>
            </div>
            <div style="margin: 5px">账户名称</div>
            <el-input
              v-model="item.accountName"
              placeholder="请输入内容"
              style="width: 350px; margin: 10px"
            ></el-input>
            <div style="margin: 5px">开户行名称</div>
            <el-input
              v-model="item.bankName"
              placeholder="请输入内容"
              style="width: 350px; margin: 10px"
            ></el-input>
            <div style="margin: 5px">开户账户</div>
            <el-input
              v-model="item.account"
              placeholder="请输入内容"
              style="width: 350px; margin: 10px"
            ></el-input>
            <div style="margin: 5px">账户户名</div>
            <el-input
              v-model="item.zhanghuhuming"
              placeholder="请输入内容"
              style="width: 350px; margin: 10px"
            ></el-input>
            <el-button
              type="info"
              plain
              style="width: 150px; height: 40px; margin: 20px"
              @click="handleAccountData('edit', item.id, item.del)"
            >
              <span v-if="item.del === '1'">停用</span>
              <span v-else-if="item.del === '2'">启用</span>
            </el-button>
            <el-button
              type="info"
              plain
              style="width: 150px; height: 40px; margin: 20px"
              @click="handleAccountData('delete', item.id)"
              >删除</el-button
            >
          </el-card>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import {
  getFinance,
  postFinance,
  getAccount,
  addAccount,
  deleteAccount,
  editAccount,
  deletePic,
} from '@/api/finance/finance'
import { findRepayment } from '@/api/repayment/repayment'

export default {
  name: 'FinanceDetails',
  components: {},
  data() {
    return {
      // 财务垫款表单
      ruleForm: {
        mode: '',
        zhanghu: '',
        money: '',
        remark: '',
        time: '',
        transactionCode: this.$route.query.transactionCode,
      },
      // 表单验证
      rules: {
        money: [{ required: true, message: '请输入打款金额', trigger: 'blur' }],
        mode: [
          { required: true, message: '请选择垫资方式', trigger: 'change' },
        ],
        zhanghu: [
          { required: true, message: '请选择打款账户', trigger: 'change' },
        ],
        time: [
          {
            required: true,
            message: '请选择日期',
            trigger: 'change',
          },
        ],
      },
      fileList: [], // 图
      dialogVisible: false, // 弹框
      financeData: {
        data: {},
        zhanghu: [],
      }, // 财务垫款回显数据
      uploadData: {
        id: null,
        name: 'caiwuUpload',
      }, // 上传组件数据
      accountData: [], // 打款账户数据
      accountFrom: {
        accountName: '',
        bankName: '',
        account: '',
        zhanghuhuming: '',
      }, // 打款账户表单
      accountMini: {
        accountName: '',
        bankName: '',
        account: '',
        zhanghuhuming: '',
      }, // 打款账户显示
      loanResultDate: '',
    }
  },
  computed: {},
  watch: {
    $route(to, from) {
      //监听路由是否变化
      if (to.path == '/financeDetails') {
        this.ruleForm.transactionCode = this.$route.query.transactionCode
        this.getFinanceData()
      }
    },
    'ruleForm.zhanghu': {
      handler(newName, oldName) {
        if (newName) {
          this.accountData.forEach((item) => {
            if (newName === item.id) {
              this.accountMini = item
            }
          })
        } else {
          this.accountMini = {
            accountName: '',
            bankName: '',
            account: '',
            zhanghuhuming: '',
          }
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    // 获取详情
    async getFinanceData() {
      try {
        const { data } = await getFinance(this.$route.query.transactionCode)
        // console.log(data)
        this.financeData = data
        if (data.caiwu) {
          this.ruleForm = data.caiwu
        }
        if (data.pic) {
          data.pic.forEach((item) => {
            this.fileList.push({ url: item.filePath })
          })
        }
        this.findAccount()
        this.findRepaymentData()
      } catch (error) {
        // console.log(error)
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$confirm('确认保存?', '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
          })
            .then(async () => {
              const { data } = await postFinance(this.ruleForm)
              this.uploadData.id = data
            })
            .then(() => {
              this.$refs.upload.submit()
            })
            .then(() => {
              this.msgSuccess('操作成功')
              // 返回上级路由并关闭当前路由
              // this.$store.state.tagsView.visitedViews.splice(
              //   this.$store.state.tagsView.visitedViews.findIndex(
              //     (item) => item.path === this.$route.path
              //   ),
              //   1
              // )
              // this.$router.push(
              //   this.$store.state.tagsView.visitedViews[
              //     this.$store.state.tagsView.visitedViews.length - 1
              //   ].path
              // )
            })
            .catch(function () {})
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    // 获取打款账户
    async findAccount() {
      try {
        const data = await getAccount()
        this.accountData = data.rows
      } catch (error) {
        // console.log(error)
      }
    },
    // 操作打款账户
    handleAccountData(handle, id, del) {
      this.$confirm('确认操作?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          if (handle === 'add') {
            // 新增
            return addAccount(this.accountFrom)
          } else if (handle === 'edit' && del === '1') {
            // 停用
            return editAccount({ id, del: '2' })
          } else if (handle === 'edit' && del === '2') {
            // 启用
            return editAccount({ id, del: '1' })
          } else if (handle === 'delete') {
            // 删除
            return deleteAccount({ id })
          }
        })
        .then(() => {
          if (handle === 'add') {
            this.accountFrom = {
              accountName: '',
              bankName: '',
              account: '',
              zhanghuhuming: '',
            }
          }
          this.findAccount()
          this.msgSuccess('操作成功！')
        })
        .catch(function () {})
    },
    // 删除处理
    async handleRemove(file, fileList) {
      if (file.status === 'success') {
        try {
          await deletePic({ filePath: file.url })
          this.msgSuccess('删除成功')
        } catch (error) {
          // console.log(error)
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
    async findRepaymentData() {
      try {
        const data = await findRepayment(this.$route.query.transactionCode)
        // console.log(data)
        if (data.data.code != 0) {
          this.msgError(data.data.msg)
        } else if (data.data.data.loanResult[0]) {
          this.loanResultDate = data.data.data.loanResult[0].loanDate
        }
      } catch (error) {
        // console.log(error)
      }
    },
  },
  created() {
    this.getFinanceData()
  },
}
</script>

<style lang='scss' scoped>
.el-card {
  margin: 10px 0;
  .el-col {
    font-size: 14px;
    margin: 5px 0;
  }
}
.upload-demo {
  width: 300px;
  margin: 20px;
}
.add {
  position: absolute;
  top: 5px;
  left: 350px;
  width: 60px;
  height: 28px;
  line-height: 28px;
  color: #fff;
  background-color: rgb(24, 144, 255);
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
}
</style>
