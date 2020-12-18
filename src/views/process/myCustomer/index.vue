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
    <!-- 表格 -->
    <el-table
      v-loading="loading"
      :data="MyCustomerList"
      style="border-radius: 10px"
    >
      <el-table-column label="创建时间" prop="date" sortable>
        <template slot-scope="scope">
          <div
            style="cursor: pointer; font-size: 13px"
            @click="handle(scope.row.id)"
          >
            <el-row style="background-color: #f3f4f9">
              <el-col :span="4">订单生成时间：{{ scope.row.date }}</el-col>
              <el-col :span="4">订单号：</el-col>
            </el-row>
            <el-row>
              <el-col :span="8">借款人：</el-col>
              <el-col :span="8">身份证：</el-col>
              <el-col :span="8">手机号：</el-col>
            </el-row>
            <el-row>
              <el-col :span="8">经办银行：</el-col>
              <el-col :span="8">经办人：</el-col>
              <el-col :span="8">分公司：</el-col>
            </el-row>
            <el-row>
              <el-col :span="8">贷款金额：</el-col>
              <el-col :span="8">车辆类型：</el-col>
              <el-col :span="8">业务品种：</el-col>
            </el-row>
            <el-row>
              <el-col :span="8">银行审批状态：</el-col>
              <el-col :span="8">行内订单号：</el-col>
              <el-col :span="8">当前进度：</el-col>
            </el-row>
          </div>
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
export default {
  name: 'MyCustomer',
  data() {
    return {
      // 遮罩层
      loading: false,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 2,
      // 秒批表格数据
      MyCustomerList: [
        { id: 1, date: 11 },
        { id: 2, date: 22 },
      ],
      // 弹出层标题
      title: '',
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        team: null,
        // carInformation: null,
        // intentionPrice: null,
        // loanMoney: null,
        repayPeriod: null,
        carType: null,
        userId: null,
        // orderState: null,
      },
    }
  },
  created() {},
  methods: {
    getList() {
      console.log(1)
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
        userId: null,
        orderState: null,
      }
      this.resetForm('form')
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm('queryForm')
    },
    // 立即处理
    handle(id) {
      this.$router.push({
        path: '/process/businessDetails',
        name: 'BusinessDetails',
        query: {
          id,
        },
      })
    },
  },
}
</script>
