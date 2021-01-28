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
      <el-form-item label="上牌进度" prop="carType">
        <el-select
          v-model="queryParams.carType"
          placeholder="请选择上牌进度"
          clearable
          size="small"
        >
          <el-option label="未办理" value="0" />
        </el-select>
      </el-form-item>
      <el-form-item label="经办银行" prop="carType">
        <el-select
          v-model="queryParams.carType"
          placeholder="请选择经办银行"
          clearable
          size="small"
        >
          <el-option
            label="中国工商银行股份有限公司 郑州花园路支行"
            value="0"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="" prop="userId">
        <el-input
          v-model="queryParams.name"
          placeholder="订单号/姓名/身份证/手机号/经办人"
          clearable
          size="small"
          style="width: 300px"
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
    <el-table v-loading="loading" :data="businessList">
      <el-table-column label="订单编号" align="center" prop="transactionCode" />
      <el-table-column label="借款人" align="center" prop="userName" />
      <el-table-column label="销售团队" align="center" prop="team" />
      <el-table-column label="经办银行" align="center" prop="fundSide" />
      <el-table-column label="业务品种" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.carType === 0">新车</span>
          <span v-else-if="scope.row.carType === 1">二手车</span>
          <span v-else-if="scope.row.carType === 2">新能源</span>
        </template>
      </el-table-column>
      <el-table-column label="提交状态" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.submitState === 1">已办理</span>
          <span v-else>未办理</span>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="handle(scope.row)"
            >立即处理</el-button
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
  </div>
</template>

<script>
import { checkRole } from '@/utils/permission'
import { upLicenseList } from '@/api/process/upLicenseAudit'

export default {
  name: 'UpLicenseAudit',
  data() {
    return {
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 上牌审核表格数据
      businessList: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        team: null,
        repayPeriod: null,
        carType: null,
        name: null,
      },
    }
  },
  created() {
    this.getList()
  },
  watch: {
    $route(to, from) {
      //监听路由是否变化
      if (to.path == '/process/upLicenseAudit') {
        this.getList()
      }
    },
  },
  methods: {
    checkRole,
    /** 查询上牌审核列表 */
    getList() {
      this.loading = true
      upLicenseList(this.queryParams).then((response) => {
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
        name: null,
      }
      this.handleQuery()
    },
    // 立即处理
    async handle(item) {
      try {
        this.$router.push({
          path: 'license/upLicenseAuditDetails',
          name: 'UpLicenseAuditDetails',
          query: {
            transactionCode: item.transactionCode,
          },
        })
      } catch (error) {}
    },
  },
}
</script>

<style lang="scss" scoped>
/deep/.el-form-item__label {
  width: 96px !important;
}
</style>
