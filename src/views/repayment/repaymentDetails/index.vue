<template>
  <div class="app-container">
    <el-card
      style="padding: 10px; font-size: 14px; margin-bottom: 25px"
      shadow="hover"
    >
      <el-row>
        <el-col :span="8">创建时间：</el-col>
        <el-col :span="8">订单号：</el-col>
        <el-col :span="8">姓名：</el-col>
        <el-col :span="8" style="margin: 20px 0">银行卡号：</el-col>
        <el-col :span="8" style="margin: 20px 0">贷款金额：</el-col>
        <el-col :span="8" style="margin: 20px 0">手续费总额：</el-col>
        <el-col :span="8">附加费：</el-col>
        <el-col :span="8">本金首付：</el-col>
        <el-col :span="8">首期手续费：</el-col>
      </el-row>
    </el-card>
    <el-table :data="loanResult" style="width: 100%">
      <el-table-column prop="date" label="期数" align="center" />
      <el-table-column prop="name" label="本金每期" align="center" />
      <el-table-column prop="address" label="每期手续费" align="center" />
      <el-table-column prop="address" label="每期附加费" align="center" />
      <el-table-column prop="address" label="总应还金额" align="center" />
      <el-table-column prop="address" label="每期扣款日" align="center" />
      <el-table-column prop="address" label="下次扣款日" align="center" />
      <el-table-column prop="address" label="入账金额" align="center" />
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
      loanResult: [],
    }
  },
  computed: {},
  watch: {},
  methods: {
    async findRepaymentData() {
      try {
        const { data } = await findRepayment(this.$route.query.transactionCode)
        console.log(data)
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
