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
      <!-- <el-form-item label="销售团队" prop="team">
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
          <el-option label="新车" value="0" />
          <el-option label="二手车" value="1" />
          <el-option label="新能源" value="2" />
        </el-select>
      </el-form-item> -->
      <el-form-item label="状态" prop="approvalType">
        <el-select
          v-model="queryParams.approvalType"
          placeholder="请选择状态"
          clearable
          size="small"
        >
          <el-option label="已通过" value="1" />
          <el-option label="已退回" value="2" />
          <el-option label="已拒绝" value="3" />
        </el-select>
      </el-form-item>
      <el-form-item label="客户名称" prop="name">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入客户名称"
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
    <el-table v-loading="loading" :data="finalTailsList">
      <el-table-column
        label="订单创建时间"
        align="center"
        prop="createTime"
        sortable
      />
      <el-table-column label="订单编号" align="center" prop="transactionCode" />
      <el-table-column label="客户名称" align="center" prop="name" />
      <el-table-column label="销售团队" align="center" prop="team" />
      <el-table-column label="车辆类型" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.carInformation === 0">乘用车</span>
          <span v-else-if="scope.row.carInformation === 1">商用车</span>
        </template>
      </el-table-column>
      <el-table-column label="价格" align="center" prop="actualPrice" />
      <el-table-column label="贷款金额" align="center" prop="loanAmount" />
      <el-table-column label="贷款期限" align="center" prop="repaymentTerm" />
      <el-table-column label="业务品种" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.carType === 0">新车</span>
          <span v-else-if="scope.row.carType === 1">二手车</span>
          <span v-else-if="scope.row.carType === 2">新能源</span>
        </template>
      </el-table-column>
      <el-table-column label="审批状态" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.approvalType === 1">通过</span>
          <span v-else-if="scope.row.approvalType === 2">退回至初审</span>
          <span v-else-if="scope.row.approvalType === 3">拒绝</span>
          <span v-else>未审核</span>
        </template>
      </el-table-column>
      <el-table-column label="历史审批意见" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            @click="historyOpinion(scope.row.transactionCode)"
            >查看</el-button
          >
        </template>
      </el-table-column>
      <el-table-column label="当前操作人" align="center" prop="repeatBy" />
      <el-table-column
        label="操作"
        align="center"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="scope">
          <span v-if="!scope.row.submitState">待APP端上传数据</span>
          <div v-if="scope.row.submitState">
            <div v-if="!scope.row.repeatId">
              <el-button size="mini" type="text" @click="handle(scope.row)"
                >立即处理</el-button
              >
            </div>
            <div v-else-if="scope.row.repeatId == $store.state.user.userId">
              <el-button size="mini" type="text" @click="handle(scope.row)"
                >立即处理</el-button
              >
              <el-button size="mini" type="text" @click="unlock(scope.row)"
                >解锁</el-button
              >
            </div>
            <div v-else></div>
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
    <!-- 历史审批意见 -->
    <el-dialog
      title="历史审批意见"
      :visible.sync="historyOpinionDialogVisible"
      width="50%"
      center
    >
      <el-card
        style="margin-bottom: 20px"
        v-if="historyOpinionData.allowOpinion"
      >
        <div slot="header">
          <span style="font-size: 16px; color: rgb(70, 166, 255)">初审</span>
          <div style="float: right; margin: 0 20px">
            审核人：{{ historyOpinionData.chushen }}
          </div>
        </div>
        <div style="margin: 10px">
          {{ historyOpinionData.allowOpinion }}
        </div>
      </el-card>
      <el-card
        style="margin-bottom: 20px"
        v-if="historyOpinionData.repeatOpinion"
      >
        <div slot="header">
          <span style="font-size: 16px; color: rgb(70, 166, 255)">终审</span>
          <div style="float: right; margin: 0 20px">
            审核人：{{ historyOpinionData.zhongshen }}
          </div>
        </div>
        <div style="margin: 10px">
          {{ historyOpinionData.repeatOpinion }}
        </div>
      </el-card>
      <el-card
        style="margin-bottom: 20px"
        v-if="historyOpinionData.grantOpinion"
      >
        <div slot="header">
          <span style="font-size: 16px; color: rgb(70, 166, 255)">授信</span>
          <div style="float: right; margin: 0 20px">
            审核人：{{ historyOpinionData.shouxin }}
          </div>
        </div>
        <div style="margin: 10px">
          {{ historyOpinionData.grantOpinion }}
        </div>
      </el-card>
      <el-card
        style="margin-bottom: 20px"
        v-if="historyOpinionData.daiqianOpinion"
      >
        <div slot="header">
          <span style="font-size: 16px; color: rgb(70, 166, 255)">贷前</span>
          <div style="float: right; margin: 0 20px">
            审核人：{{ historyOpinionData.daiqian }}
          </div>
        </div>
        <div style="margin: 10px">
          {{ historyOpinionData.daiqianOpinion }}
        </div>
      </el-card>
      <el-card
        style="margin-bottom: 20px"
        v-if="historyOpinionData.daihouOpinion"
      >
        <div slot="header">
          <span style="font-size: 16px; color: rgb(70, 166, 255)">贷后</span>
          <div style="float: right; margin: 0 20px">
            审核人：{{ historyOpinionData.daihou }}
          </div>
        </div>
        <div style="margin: 10px">
          {{ historyOpinionData.daihouOpinion }}
        </div>
      </el-card>
    </el-dialog>
  </div>
</template>

<script>
import { checkRole } from '@/utils/permission'
import { getFinalTrialList, finalTrialHandle } from '@/api/process/finalTrial'
import { getHistoryOpinion } from '@/api/process/firstTrial'

export default {
  name: 'FinalTrial',
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
      // 终审表格数据
      finalTailsList: [],
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
        name: null,
        approvalType: null,
      },
      // 表单校验
      rules: {},
      // 弹出框
      dialogVisible: false,
      // 文本域
      textarea: '',
      historyOpinionDialogVisible: false, // 历史审批意见dialog
      historyOpinionData: {}, // 历史审批意见数据
    }
  },
  created() {
    this.getList()
  },
  watch: {
    $route(to, from) {
      //监听路由是否变化
      if (to.path == '/process/finalTrial') {
        this.getList()
      }
    },
  },
  methods: {
    checkRole,
    /** 查询终审列表 */
    getList() {
      this.loading = true
      getFinalTrialList(this.queryParams).then((response) => {
        this.finalTailsList = response.rows
        this.total = response.total
        this.loading = false
        // console.log(response)
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
        approvalType: null,
      }
      this.handleQuery()
    },
    // 查看历史审批意见
    async historyOpinion(transactionCode) {
      this.historyOpinionData = {}
      try {
        const { data } = await getHistoryOpinion(transactionCode)
        // console.log(data)
        if (data) {
          this.historyOpinionData = data
          if (data.allowOpinion) {
            this.historyOpinionDialogVisible = true
          } else {
            this.msgSuccess('暂无审批意见！')
          }
        } else {
          this.msgSuccess('暂无审批意见！')
        }
      } catch (error) {
        // console.log(error)
      }
    },
    // 立即处理
    async handle(item) {
      try {
        await finalTrialHandle({
          handleName: this.$store.state.user.name,
          userId: this.$store.state.user.userId,
          transactionCode: item.transactionCode,
        })
        this.getList()
        this.$router.push({
          path: '/process/finalTrialDetails',
          name: 'FinalTrialDetails',
          query: {
            transactionCode: item.transactionCode,
            userId: item.userId,
          },
        })
      } catch (error) {
        this.getList()
      }
    },
    // 解锁
    async unlock(item) {
      this.$confirm('确认解锁?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(
          finalTrialHandle({
            userId: this.$store.state.user.userId,
            transactionCode: item.transactionCode,
          })
        )
        .then(() => {
          this.msgSuccess('解锁成功')
          this.getList()
        })
        .catch(function () {
          this.getList()
        })
    },
    // 我的客户
    myCustomer() {
      this.$router.push({
        path: '/process/myCustomer',
        name: 'MyCustomer',
        query: {
          flow: 'finalTrial',
          flowName: 'FinalTrial',
        },
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
