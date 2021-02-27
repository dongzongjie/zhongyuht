<template>
  <div class="app-container">
    <el-card
      style="padding: 10px; font-size: 14px; margin-bottom: 25px"
      shadow="hover"
    >
      <el-row>
        <el-col :span="8">创建时间：{{ repaymentData.date }}</el-col>
        <el-col :span="8">订单号：{{ transactionCode }}}</el-col>
        <el-col :span="8">姓名：{{ repaymentData.username }}</el-col>
        <el-col :span="8" style="margin: 20px 0"
          >银行卡号：{{ repaymentData.bankcode }}</el-col
        >
        <el-col :span="8" style="margin: 20px 0"
          >贷款金额：{{ repaymentData.daikuanjine }}</el-col
        >
        <el-col :span="8" style="margin: 20px 0"
          >手续费总额：{{
            repaymentData.data.data.loanResult[0].loanInfo[0].feeamt
          }}</el-col
        >
        <el-col :span="8">附加费：</el-col>
        <el-col :span="8"
          >本金首付：{{
            repaymentData.data.data.loanResult[0].loanInfo[0].firstamt
          }}</el-col
        >
        <el-col :span="8"
          >首期手续费：{{
            repaymentData.data.data.loanResult[0].loanInfo[0].firstpfee
          }}</el-col
        >
      </el-row>
    </el-card>
    <el-table
      :data="repaymentData.data.data.loanResult[0].loanInfo"
      style="width: 100%"
    >
      <el-table-column prop="loanAmount" label="放款金额" align="center" />
      <el-table-column prop="loanAccount" label="放款账户" align="center" />
      <el-table-column label="金额标志" align="center">
        <template slot-scope="scope">
          <span v-if="scope.loanFlag === 1">贷款金额（车贷）</span>
          <span v-if="scope.loanFlag === 2">附加费</span>
        </template>
      </el-table-column>
      <el-table-column prop="trxspot" label="交易场所" align="center" />
      <el-table-column prop="firstamt" label="本金首付" align="center" />
      <el-table-column prop="eachamt" label="本金每期" align="center" />
      <el-table-column prop="feeamt" label="手续费总额" align="center" />
      <el-table-column prop="eachpfee" label="每期手续费" align="center" />
      <el-table-column prop="firstpfee" label="首期手续费" align="center" />
      <el-table-column prop="eachdate" label="每期扣款日" align="center" />
      <el-table-column prop="nextdate" label="下次扣款日期" align="center" />
      <el-table-column prop="workdate" label="申请日期" align="center" />
      <el-table-column prop="realPayMoney" label="入账金额" align="center" />
    </el-table>
  </div>
</template>

<script>
import { findRepayment } from '@/api/repayment/repayment'

export default {
  name: 'RepaymentDetails',
  components: {},
  data() {
    return {
      repaymentData: {
        data: {
          data: {
            loanResult: [{ loanInfo: [] }],
          },
        },
      },
      transactionCode: this.$route.query.transactionCode,
    }
  },
  computed: {},
  watch: {},
  methods: {
    async findRepaymentData() {
      try {
        const data = await findRepayment(this.$route.query.transactionCode)
        console.log(data)
        if (data.data.code != 0) {
          this.msgError(data.data.msg)
        } else {
          this.repaymentData = data
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
  created() {
    this.findRepaymentData()
  },
}
</script>

<style lang='scss' scoped>
</style>
