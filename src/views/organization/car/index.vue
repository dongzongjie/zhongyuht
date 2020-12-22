<template>
  <div class="app-container">
    <el-form
      :model="queryParams"
      ref="queryForm"
      :inline="true"
      v-show="showSearch"
      label-width="68px"
    >
      <el-form-item label="车商名称" prop="dealerName">
        <el-input
          v-model="queryParams.dealerName"
          placeholder="请输入车商名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="所属城市" prop="city">
        <el-input
          v-model="queryParams.city"
          placeholder="请输入所属城市"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="所属区域" prop="area">
        <el-input
          v-model="queryParams.area"
          placeholder="请输入所属区域"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="所属市场" prop="bazaar">
        <el-input
          v-model="queryParams.bazaar"
          placeholder="请输入所属市场"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="状态" prop="state">
        <el-select
          v-model="queryParams.state"
          placeholder="请选择状态"
          clearable
          size="small"
        >
          <el-option label="未合作" value="0" />
          <el-option label="已合作" value="1" />
        </el-select>
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
          v-hasPermi="['organization:car:add']"
          >新增</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['organization:car:remove']"
          >删除</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['organization:car:export']"
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
      :data="carList"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="id" align="center" prop="id" />
      <el-table-column label="车商名称" align="center" prop="dealerName" />
      <el-table-column label="所属区域" align="center">
        <template slot-scope="scope">
          {{ scope.row.city }} / {{ scope.row.area }} / {{ scope.row.bazaar }}
        </template>
      </el-table-column>
      <el-table-column label="状态" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.state === '0'">未合作</span>
          <span v-if="scope.row.state === '1'">已合作</span>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="details(scope.row.id)"
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

    <!-- 添加或修改车商信息对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="车商名称" prop="dealerName">
          <el-input v-model="form.dealerName" placeholder="请输入车商名称" />
        </el-form-item>
        <el-form-item label="所属城市" prop="city">
          <el-input v-model="form.city" placeholder="请输入所属城市" />
        </el-form-item>
        <el-form-item label="所属区域" prop="area">
          <el-input v-model="form.area" placeholder="请输入所属区域" />
        </el-form-item>
        <el-form-item label="所属市场" prop="bazaar">
          <el-input v-model="form.bazaar" placeholder="请输入所属市场" />
        </el-form-item>
        <el-form-item label="门店类型" prop="typeOne">
          <el-input v-model="form.typeOne" placeholder="请输入门店类型" />
        </el-form-item>
        <el-form-item label="有无门头" prop="typeToo">
          <el-select v-model="form.typeToo" placeholder="请选择有无门头">
            <el-option label="有" value="0" />
            <el-option label="无" value="1" />
          </el-select>
        </el-form-item>
        <el-form-item label="车位数" prop="stall">
          <el-input v-model="form.stall" placeholder="请输入车位数" />
        </el-form-item>
        <el-form-item label="经营性质" prop="businessNature">
          <el-input
            v-model="form.businessNature"
            placeholder="请输入经营性质"
          />
        </el-form-item>
        <el-form-item label="乘用车" prop="passengerCar">
          <el-input v-model="form.passengerCar" placeholder="请输入乘用车" />
        </el-form-item>
        <el-form-item label="业务类型" prop="typeThree">
          <el-select v-model="form.typeThree" placeholder="请选择业务类型">
            <el-option label="未知" value="0" />
          </el-select>
        </el-form-item>
        <el-form-item label="月交易量" prop="monthDeal">
          <el-input v-model="form.monthDeal" placeholder="请输入月交易量" />
        </el-form-item>
        <el-form-item label="月分期量" prop="monthInstallment">
          <el-input
            v-model="form.monthInstallment"
            placeholder="请输入月分期量"
          />
        </el-form-item>
        <el-form-item label="竟对单量" prop="matchAmount">
          <el-input v-model="form.matchAmount" placeholder="请输入竟对单量" />
        </el-form-item>
        <el-form-item label="详细地址" prop="detailAddress">
          <el-input v-model="form.detailAddress" placeholder="请输入详细地址" />
        </el-form-item>
        <el-form-item label="状态" prop="state">
          <el-select v-model="form.state" placeholder="请选择状态">
            <el-option label="未合作" value="0" />
            <el-option label="已合作" value="1" />
          </el-select>
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
  listCar,
  getCar,
  delCar,
  addCar,
  updateCar,
  exportCar,
} from '@/api/organization/car'

export default {
  name: 'Car',
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
      // 车商信息表格数据
      carList: [],
      // 弹出层标题
      title: '',
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        dealerName: null,
        area: null,
        city: null,
        bazaar: null,
        state: null,
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
    /** 查询车商信息列表 */
    getList() {
      this.loading = true
      listCar(this.queryParams).then((response) => {
        this.carList = response.rows
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
        dealerName: null,
        userName: null,
        gender: null,
        phoneNumber: null,
        isLinkman: null,
        identity: null,
        remark: null,
        area: null,
        city: null,
        bazaar: null,
        typeOne: null,
        typeToo: null,
        stall: null,
        businessNature: null,
        passengerCar: null,
        typeThree: null,
        monthDeal: null,
        monthInstallment: null,
        matchAmount: null,
        detailAddress: null,
        pic: null,
        createBy: null,
        createTime: null,
        updateBy: null,
        updateTime: null,
        id: null,
        state: null,
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
      this.title = '添加车商信息'
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset()
      const id = row.id || this.ids
      getCar(id).then((response) => {
        this.form = response.data
        this.open = true
        this.title = '修改车商信息'
      })
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.form.id != null) {
            updateCar(this.form).then((response) => {
              if (response.code === 200) {
                this.msgSuccess('修改成功')
                this.open = false
                this.getList()
              }
            })
          } else {
            addCar(this.form).then((response) => {
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
      this.$confirm(
        '是否确认删除车商信息编号为"' + ids + '"的数据项?',
        '警告',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }
      )
        .then(function () {
          return delCar(ids)
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
      this.$confirm('是否确认导出所有车商信息数据项?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(function () {
          return exportCar(queryParams)
        })
        .then((response) => {
          this.download(response.msg)
        })
        .catch(function () {})
    },
    // 详情按钮
    details(id) {
      this.$router.push({
        path: '/organization/carDetails',
        name: 'CarDetails',
        query: {
          id,
        },
      })
    },
  },
}
</script>
