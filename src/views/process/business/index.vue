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
      <el-form-item label="userId" prop="userId">
        <el-input
          v-model="queryParams.userId"
          placeholder="请输入userId"
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
    <!-- 我的客户 -->
    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          icon="el-icon-user-solid"
          size="mini"
          @click="myCustomer"
          >我的客户</el-button
        >
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table v-loading="loading" :data="businessList">
      <el-table-column label="编号" align="center" prop="id" />
      <el-table-column label="客户名称" align="center" prop="name" />
      <el-table-column label="销售团队" align="center" prop="team" />
      <el-table-column label="车辆类型" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.carInformation === 0">乘用车</span>
          <span v-else-if="scope.row.carInformation === 1">商用车</span>
        </template>
      </el-table-column>
      <el-table-column label="意向价格" align="center" prop="intentionPrice" />
      <el-table-column label="意向贷款金额" align="center" prop="loanMoney" />
      <el-table-column label="意向贷款期限" align="center" prop="repayPeriod" />
      <el-table-column label="业务品种" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.carType === 0">新车</span>
          <span v-else-if="scope.row.carType === 1">二手车</span>
          <span v-else-if="scope.row.carType === 2">新能源</span>
        </template>
      </el-table-column>
      <el-table-column label="当前操作人" align="center" />
      <el-table-column
        label="操作"
        align="center"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            @click="handle(scope.row.transactionCode)"
            >立即处理</el-button
          >
          <el-button size="mini" type="text" @click="unlock">解锁</el-button>
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
  </div>
</template>

<script>
import { checkRole } from '@/utils/permission'
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
        repayPeriod: null,
        carType: null,
        userId: null,
      },
      // 表单校验
      rules: {},
      // 弹出框
      dialogVisible: false,
      // 文本域
      textarea: '',
    }
  },
  created() {
    this.getList()
    console.log(this.$store.state.user)
  },
  methods: {
    checkRole,
    /** 查询秒批列表 */
    getList() {
      this.loading = true
      listBusiness(this.queryParams).then((response) => {
        this.businessList = response.rows
        this.total = response.total
        this.loading = false
      })
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1
      this.getList()
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.queryParams = {
        pageNum: 1,
        pageSize: 10,
        team: null,
        repayPeriod: null,
        carType: null,
        userId: null,
      }
      this.handleQuery()
    },
    // 立即处理
    handle(transactionCode) {
      this.$router.push({
        path: '/process/businessDetails',
        name: 'BusinessDetails',
        query: {
          transactionCode,
        },
      })
    },
    // 解锁
    unlock() {
      console.log('解锁')
    },
    // 我的客户
    myCustomer() {
      this.$router.push({
        path: '/process/myCustomer',
        name: 'MyCustomer',
        // query: {
        //   userId,
        // },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
/deep/.el-form-item__label {
  width: 96px !important;
}
</style>
