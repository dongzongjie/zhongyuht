<template>
  <div class="app-container">
    <!-- 搜索框 -->
    <el-form
      :model="queryParams"
      ref="queryForm"
      :inline="true"
      v-show="showSearch"
      label-width="68px"
    >
      <el-form-item label="销售团队" prop="team">
        <el-input
          v-model="queryParams.team"
          placeholder="请输入销售团队"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="车辆信息" prop="carInformation">
        <el-input
          v-model="queryParams.carInformation"
          placeholder="请输入车辆信息"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="意向价格" prop="intentionPrice">
        <el-input
          v-model="queryParams.intentionPrice"
          placeholder="请输入意向价格"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="意向贷款金额" prop="loanMoney">
        <el-input
          v-model="queryParams.loanMoney"
          placeholder="请输入意向贷款金额"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="意向贷款期限" prop="repayPeriod">
        <el-input
          v-model="queryParams.repayPeriod"
          placeholder="请输入意向贷款期限"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="业务品种" prop="carType">
        <el-select
          v-model="queryParams.carType"
          placeholder="请选择业务品种"
          clearable
          size="small"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="身份唯一识别码" prop="identityId">
        <el-input
          v-model="queryParams.identityId"
          placeholder="请输入身份唯一识别码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="订单状态" prop="orderState">
        <el-input
          v-model="queryParams.orderState"
          placeholder="请输入订单状态"
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
    <!-- 新增修改删除导出 -->
    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['process:business:add']"
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
          v-hasPermi="['process:business:edit']"
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
          v-hasPermi="['process:business:remove']"
          >删除</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['process:business:export']"
          >导出</el-button
        >
      </el-col>
      <right-toolbar
        :showSearch.sync="showSearch"
        @queryTable="getList"
      ></right-toolbar>
    </el-row>
    <!-- 表格 -->
    <el-table
      v-loading="loading"
      :data="businessList"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="编号" align="center" prop="id" />
      <el-table-column label="销售团队" align="center" prop="team" />
      <el-table-column label="车辆类型" align="center" prop="carInformation">
        <template slot-scope="scope">
          <span v-if="scope.row.carInformation === 0">乘用车</span>
          <span v-else-if="scope.row.carInformation === 1">商用车</span>
        </template>
      </el-table-column>
      <el-table-column label="意向价格" align="center" prop="intentionPrice" />
      <el-table-column label="意向贷款金额" align="center" prop="loanMoney" />
      <el-table-column label="意向贷款期限" align="center" prop="repayPeriod" />
      <el-table-column label="业务品种" align="center" prop="carType">
        <template slot-scope="scope">
          <span v-if="scope.row.carType === 0">新车</span>
          <span v-else-if="scope.row.carType === 1">二手车</span>
          <span v-else-if="scope.row.carType === 2">新能源</span>
        </template>
      </el-table-column>
      <el-table-column
        label="身份唯一识别码"
        align="center"
        prop="identityId"
      />
      <el-table-column
        label="操作"
        align="center"
        class-name="small-padding fixed-width"
      >
        <template>
          <el-button size="mini" type="text" icon="el-icon-edit" @click="handle"
            >立即处理</el-button
          >
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="unlock"
            >解锁</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />
    <!-- 添加或修改秒批对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="销售团队" prop="team">
          <el-input v-model="form.team" placeholder="请输入销售团队" />
        </el-form-item>
        <el-form-item label="车辆信息" prop="carInformation">
          <el-input
            v-model="form.carInformation"
            placeholder="请输入车辆信息"
          />
        </el-form-item>
        <el-form-item label="意向价格" prop="intentionPrice">
          <el-input
            v-model="form.intentionPrice"
            placeholder="请输入意向价格"
          />
        </el-form-item>
        <el-form-item label="意向贷款金额" prop="loanMoney">
          <el-input v-model="form.loanMoney" placeholder="请输入意向贷款金额" />
        </el-form-item>
        <el-form-item label="意向贷款期限" prop="repayPeriod">
          <el-input
            v-model="form.repayPeriod"
            placeholder="请输入意向贷款期限"
          />
        </el-form-item>
        <el-form-item label="业务品种" prop="carType">
          <el-select v-model="form.carType" placeholder="请选择业务品种">
            <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="身份唯一识别码" prop="identityId">
          <el-input
            v-model="form.identityId"
            placeholder="请输入身份唯一识别码"
          />
        </el-form-item>
        <el-form-item label="订单状态" prop="orderState">
          <el-input v-model="form.orderState" placeholder="请输入订单状态" />
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
  listBusiness,
  getBusiness,
  delBusiness,
  addBusiness,
  updateBusiness,
  exportBusiness,
} from '@/api/process/business'

export default {
  name: 'Business',
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
      // 秒批表格数据
      businessList: [],
      // 弹出层标题
      title: '',
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        team: null,
        carInformation: null,
        intentionPrice: null,
        loanMoney: null,
        repayPeriod: null,
        carType: null,
        identityId: null,
        orderState: null,
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
    /** 查询秒批列表 */
    getList() {
      this.loading = true
      listBusiness(this.queryParams).then((response) => {
        this.businessList = response.rows
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
        team: null,
        carInformation: null,
        intentionPrice: null,
        loanMoney: null,
        repayPeriod: null,
        carType: null,
        identityId: null,
        orderState: null,
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
      this.title = '添加秒批'
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset()
      const id = row.id || this.ids
      getBusiness(id).then((response) => {
        this.form = response.data
        this.open = true
        this.title = '修改秒批'
      })
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.form.id != null) {
            updateBusiness(this.form).then((response) => {
              if (response.code === 200) {
                this.msgSuccess('修改成功')
                this.open = false
                this.getList()
              }
            })
          } else {
            addBusiness(this.form).then((response) => {
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
      this.$confirm('是否确认删除秒批编号为"' + ids + '"的数据项?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(function () {
          return delBusiness(ids)
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
      this.$confirm('是否确认导出所有秒批数据项?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(function () {
          return exportBusiness(queryParams)
        })
        .then((response) => {
          this.download(response.msg)
        })
        .catch(function () {})
    },
    // 立即处理
    handle() {
      this.$router.push('/process/businessDetails')
    },
    // 解锁
    unlock() {
      console.log('解锁')
    },
  },
}
</script>
