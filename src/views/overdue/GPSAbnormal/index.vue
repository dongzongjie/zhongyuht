<template>
  <div class="app-container">
    <el-form
      :model="queryParams"
      ref="queryForm"
      :inline="true"
      v-show="showSearch"
      label-width="68px"
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
          @click="handleAdd"
          >新增</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          >修改</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          >删除</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          >导出</el-button
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
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="录入时间" align="center" />
      <el-table-column label="姓名" align="center" prop="userName" />
      <el-table-column label="身份证号" align="center" prop="identityCard" />
      <el-table-column label="经办银行" align="center" prop="identityCard" />
      <el-table-column label="安装地址" align="center" />
      <el-table-column label="安装位置" align="center" />
      <el-table-column label="安装人员" align="center" />
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
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="姓名" prop="userName">
          <el-input v-model="form.userName" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="身份证号" prop="identityCard">
          <el-input v-model="form.identityCard" placeholder="请输入身份证号" />
        </el-form-item>
        <el-form-item label="经办银行" prop="">
          <el-input v-model="form.ce" placeholder="请输入经办银行" />
        </el-form-item>
        <el-form-item label="安装地址" prop="">
          <el-input v-model="form.ce" placeholder="请输入安装地址" />
        </el-form-item>
        <el-form-item label="安装位置" prop="">
          <el-input v-model="form.ce" placeholder="请输入安装位置" />
        </el-form-item>
        <el-form-item label="安装人员" prop="">
          <el-input v-model="form.ce" placeholder="请输入安装人员" />
        </el-form-item>
        <el-form-item label="处理人员" prop="processingStaff">
          <el-input
            v-model="form.processingStaff"
            placeholder="请输入处理人员"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  listOverdue,
  getOverdue,
  delOverdue,
  addOverdue,
  updateOverdue,
  exportOverdue,
} from '@/api/overdue/information'

export default {
  name: 'GPSAbnormal',
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
      rules: {},
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
    /** 新增按钮操作 */
    handleAdd() {
      this.reset()
      this.open = true
      this.title = '添加overdue'
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset()
      const id = row.id || this.ids
      getOverdue(id).then((response) => {
        this.form = response.data
        this.open = true
        this.title = '修改overdue'
      })
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.form.id != null) {
            updateOverdue(this.form).then((response) => {
              if (response.code === 200) {
                this.msgSuccess('修改成功')
                this.open = false
                this.getList()
              }
            })
          } else {
            addOverdue(this.form).then((response) => {
              if (response.code === 200) {
                this.msgSuccess('新增成功')
                this.open = false
                this.getList()
              }
            })
          }
        }
      })
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || this.ids
      this.$confirm('是否确认删除overdue编号为"' + ids + '"的数据项?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(function () {
          return delOverdue(ids)
        })
        .then(() => {
          this.getList()
          this.msgSuccess('删除成功')
        })
        .catch(function () {})
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams
      this.$confirm('是否确认导出所有overdue数据项?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(function () {
          return exportOverdue(queryParams)
        })
        .then((response) => {
          this.download(response.msg)
        })
        .catch(function () {})
    },
    // 详情按钮
    handle(item) {
      this.$router.push({
        path: '/overdue/GPSAbnormalDetails',
        name: 'GPSAbnormalDetails',
        query: {
          id: item.id,
        },
      })
    },
  },
}
</script>
