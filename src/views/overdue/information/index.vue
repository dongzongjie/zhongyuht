<template>
  <div class="app-container">
    <el-form
      :model="queryParams"
      ref="queryForm"
      :inline="true"
      v-show="showSearch"
      label-width="80px"
    >
      <el-form-item label="姓名" prop="userName">
        <el-input
          v-model="queryParams.userName"
          placeholder="请输入姓名"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="身份证号" prop="identityCard">
        <el-input
          v-model="queryParams.identityCard"
          placeholder="请输入身份证号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="分期期数" prop="installmentPeriod">
        <el-input
          v-model="queryParams.installmentPeriod"
          placeholder="请输入分期期数"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="分期金额" prop="instalmentAmount">
        <el-input
          v-model="queryParams.instalmentAmount"
          placeholder="请输入分期金额"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="月还款额" prop="monthlyPayment">
        <el-input
          v-model="queryParams.monthlyPayment"
          placeholder="请输入月还款额"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="还款日期" prop="repaymentDate">
        <el-date-picker
          clearable
          size="small"
          style="width: 200px"
          v-model="queryParams.repaymentDate"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择还款日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="应还期数" prop="shouldApplicable">
        <el-input
          v-model="queryParams.shouldApplicable"
          placeholder="请输入应还期数"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="处理状态" prop="state">
        <el-input
          v-model="queryParams.state"
          placeholder="请输入处理状态"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="处理人员" prop="processingStaff">
        <el-input
          v-model="queryParams.processingStaff"
          placeholder="请输入处理人员"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="cyan"
          icon="el-icon-search"
          size="mini"
          @click="handleQuery"
          >搜索</el-button
        >
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery"
          >重置</el-button
        >
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="mini"
          @click="open = true"
          >新增</el-button
        >
      </el-col>
      <right-toolbar
        :showSearch.sync="showSearch"
        @queryTable="getList"
      ></right-toolbar>
    </el-row>

    <el-table
      v-loading="loading"
      :data="overdueList"
      @selection-change="handleSelectionChange"
    >
      <!-- <el-table-column type="selection" width="55" align="center" /> -->
      <el-table-column label="录入时间" align="center" prop="createTime" />
      <el-table-column label="姓名" align="center" prop="userName" />
      <el-table-column label="身份证号" align="center" prop="identityCard" />
      <el-table-column label="经办银行" align="center" />
      <el-table-column
        label="分期期数"
        align="center"
        prop="installmentPeriod"
      />
      <el-table-column
        label="分期金额"
        align="center"
        prop="instalmentAmount"
      />
      <el-table-column label="月还款额" align="center" prop="monthlyPayment" />
      <el-table-column
        label="还款日期"
        align="center"
        prop="repaymentDate"
        width="180"
      >
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.repaymentDate, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="应还期数"
        align="center"
        prop="shouldApplicable"
      />
      <el-table-column label="处理状态" align="center" prop="state" />
      <el-table-column label="处理人员" align="center" prop="processingStaff" />
      <el-table-column
        label="操作"
        align="center"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="handle(scope.row)"
            >详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改overdue对话框 -->
    <el-dialog
      title="新建逾期信息"
      :visible.sync="open"
      width="80%"
      append-to-body
    >
      <el-form ref="form" :model="form" :rules="rules" label-width="150px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="订单编号" prop="transactionCode">
              <el-input
                v-model="form.transactionCode"
                placeholder="请输入订单编号"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="借款人姓名" prop="borrower">
              <el-input
                v-model="form.borrower"
                placeholder="请输入借款人姓名"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="身份证号" prop="idCard">
              <el-input v-model="form.idCard" placeholder="请输入身份证号" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="银行卡号" prop="bankCard">
              <el-input v-model="form.bankCard" placeholder="请输入银行卡号" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="应还期数" prop="shouldStages">
              <el-input
                v-model="form.shouldStages"
                placeholder="请输入应还期数"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="逾期还款日期" prop="repaymentDate">
              <el-date-picker
                clearable
                size="small"
                style="width: 200px"
                v-model="form.repaymentDate"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择还款日期"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="分期期数" prop="byStages">
              <el-input v-model="form.byStages" placeholder="请输入分期期数" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="车辆贷款金额" prop="loanAmount">
              <el-input
                v-model="form.loanAmount"
                placeholder="请输入车辆贷款金额"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="月还款金额" prop="repaymentAmount">
              <el-input
                v-model="form.repaymentAmount"
                placeholder="请输入月还款金额"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="滞纳金" prop="lateFee">
              <el-input v-model="form.lateFee" placeholder="请输入滞纳金" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="当前逾期金额" prop="overdueAmount">
              <el-input
                v-model="form.overdueAmount"
                placeholder="请输入当前逾期金额"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="累计违约次数" prop="cumulative">
              <el-input
                v-model="form.cumulative"
                placeholder="请输入累计违约次数"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="附加费" prop="surcharge">
              <el-input v-model="form.surcharge" placeholder="请输入附加费" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="连续违约次数" prop="continuity">
              <el-input
                v-model="form.continuity"
                placeholder="请输入连续违约次数"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listOverdue, addOverdueData } from '@/api/overdue/information'

export default {
  name: 'Information',
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // overdue表格数据
      overdueList: [],
      // 弹出层标题
      title: '',
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        userName: null,
        identityCard: null,
        installmentPeriod: null,
        instalmentAmount: null,
        monthlyPayment: null,
        repaymentDate: null,
        shouldApplicable: null,
        state: null,
        processingStaff: null,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        transactionCode: [
          { required: true, message: '请输入订单编号', trigger: 'blur' },
        ],
        borrower: [
          { required: true, message: '请输入借款人姓名', trigger: 'blur' },
        ],
        idCard: [
          { required: true, message: '请输入身份证号', trigger: 'blur' },
        ],
        bankCard: [
          { required: true, message: '请输入银行卡号', trigger: 'blur' },
        ],
        shouldStages: [
          { required: true, message: '请输入应还期数', trigger: 'blur' },
        ],
        repaymentAmount: [
          { required: true, message: '请输入月还款金额', trigger: 'blur' },
        ],
        lateFee: [{ required: true, message: '请输入滞纳金', trigger: 'blur' }],
        overdueAmount: [
          { required: true, message: '请输入当前逾期金额', trigger: 'blur' },
        ],
        surcharge: [
          { required: true, message: '请输入附加费', trigger: 'blur' },
        ],
      },
    }
  },
  created() {
    this.getList()
  },
  methods: {
    /** 查询overdue列表 */
    getList() {
      this.loading = true
      listOverdue(this.queryParams).then((response) => {
        this.overdueList = response.rows
        this.total = response.total
        this.loading = false
      })
    },
    // 取消按钮
    cancel() {
      this.open = false
      this.reset()
    },
    // 表单重置
    reset() {
      this.form = {
        id: null,
        userName: null,
        identityCard: null,
        installmentPeriod: null,
        instalmentAmount: null,
        monthlyPayment: null,
        repaymentDate: null,
        shouldApplicable: null,
        state: null,
        processingStaff: null,
        createBy: null,
        createTime: null,
        updateBy: null,
        updateTime: null,
      }
      this.resetForm('form')
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1
      this.getList()
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm('queryForm')
      this.handleQuery()
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map((item) => item.id)
      this.single = selection.length !== 1
      this.multiple = !selection.length
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.$confirm('确认添加', '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
          })
            .then(function () {
              return addOverdueData(this.form)
            })
            .then(() => {
              this.getList()
              this.msgSuccess('添加成功')
            })
            .catch(function () {})
        }
      })
    },
    // 详情按钮
    handle(item) {
      this.$router.push({
        path: '/overdue/informationDetails',
        name: 'InformationDetails',
        query: {
          transactionCode: item.transactionCode,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.el-form-item {
  /deep/.el-input__inner {
    width: 250px;
  }
}
</style>