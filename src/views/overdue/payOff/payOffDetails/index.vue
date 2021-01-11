<template>
  <div class="app-container">
    <!-- 电话催收人员名单 -->
    <el-card>
      <div slot="header">
        <span>电话催收人员名单</span>
      </div>
      <el-row>
        <h4
          style="
            margin: 0;
            padding: 10px;
            font-size: 16px;
            background-color: rgba(245, 244, 247);
          "
        >
          张三
          <span
            style="
              font-size: 14px;
              background-color: rgba(248, 192, 98);
              margin-left: 10px;
            "
            >主借款人</span
          >
        </h4>
      </el-row>
      <el-row style="padding: 0 20px">
        <el-col :span="12">联系电话：</el-col>
        <el-col :span="12">紧急联系人姓名：</el-col>
        <el-col :span="12">家庭住址：</el-col>
        <el-col :span="12">紧急联系人电话：</el-col>
        <el-col :span="12">单位名称：</el-col>
        <el-col :span="12">担保人姓名：</el-col>
        <el-col :span="12">单位地址：</el-col>
        <el-col :span="12">担保人电话：</el-col>
        <el-col :span="12">单位电话：</el-col>
      </el-row>
    </el-card>
    <!-- 贷后信息 -->
    <el-card>
      <div slot="header">
        <span>贷后信息</span>
      </div>
      <el-row>
        <el-col :span="3">姓名：</el-col>
        <el-col :span="5">身份证号：</el-col>
        <el-col :span="4">联系方式：</el-col>
      </el-row>
      <h4 style="font-size: 16px">贷款信息</h4>
      <el-row>
        <el-col :span="8">经办行：</el-col>
        <el-col :span="8">银行卡号：</el-col>
        <el-col :span="8">分期期数：</el-col>
        <el-col :span="8">分期金额：</el-col>
        <el-col :span="8">放款日期：</el-col>
        <el-col :span="8">月还款金额：</el-col>
        <el-col :span="8">卡余额：</el-col>
      </el-row>
      <h4 style="font-size: 16px">逾期信息</h4>
      <el-row>
        <el-col :span="8">逾期还款日期：</el-col>
        <el-col :span="8">昨日最优还款额：</el-col>
        <el-col :span="8">当前逾期金额：</el-col>
        <el-col :span="8">当前连续违约次数：(次)</el-col>
        <el-col :span="8">累计违约次数：(次)</el-col>
      </el-row>
    </el-card>
    <!-- 车辆信息 -->
    <el-card>
      <div slot="header">
        <span>车辆信息</span>
      </div>
      <el-row>
        <el-col :span="8" style="line-height: 36px">
          车辆型号
          <el-select v-model="form.businessType" placeholder="请选择">
          </el-select>
        </el-col>
        <el-col :span="8" style="line-height: 36px">
          车辆价格
          <el-input v-model="form.businessType" suffix-icon="el-icon-zyrz-yuan">
          </el-input>
        </el-col>
        <el-col :span="8" style="line-height: 36px">
          系统查询价
          <el-input v-model="form.businessType" suffix-icon="el-icon-zyrz-yuan">
          </el-input>
        </el-col>
        <el-col :span="8" style="line-height: 36px">
          是否加装GPS
          <el-select v-model="form.businessType" placeholder="请选择">
          </el-select>
        </el-col>
        <el-col :span="8" style="line-height: 36px">
          车架号
          <el-input v-model="form.businessType"> </el-input>
        </el-col>
        <el-col :span="8" style="line-height: 36px">
          发动机号
          <el-input v-model="form.businessType"> </el-input>
        </el-col>
        <el-col :span="8" style="line-height: 36px">
          意向价格
          <el-input v-model="form.businessType" suffix-icon="el-icon-zyrz-yuan">
          </el-input>
        </el-col>
      </el-row>
    </el-card>
    <!-- 还款信息记录 -->
    <el-card>
      <div slot="header">
        <span>还款信息记录</span>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="期数"> </el-table-column>
        <el-table-column prop="name" label="还款日期"> </el-table-column>
        <el-table-column prop="address" label="月还款额(元)"> </el-table-column>
        <el-table-column prop="address" label="滞纳金"> </el-table-column>
        <el-table-column prop="address" label="是否逾期"> </el-table-column>
        <el-table-column label="是否还款">
          <template>
            <el-button type="info" round size="mini">是</el-button>
            <el-button type="info" round size="mini">否</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 附加费用明细 -->
    <el-card>
      <div slot="header">
        <span>附加费用明细</span>
      </div>
      <el-table :data="subjoin" border style="width: 100%">
        <el-table-column label="金额（元）">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.money"
              :style="{ width: '100%', height: '100%' }"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column label="费用明细">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.detail"
              :style="{ width: '100%', height: '100%' }"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              round
              type="primary"
              @click="subjoin.splice(scope.$index, 1)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="addTr" @click="subjoin.push({})">+添加附加费用明细</div>
    </el-card>
    <!-- 订单日志 -->
    <el-card>
      <div slot="header">
        <span>订单日志</span>
      </div>
      <el-timeline>
        <el-timeline-item timestamp="2021/01/01" placement="top">
          <el-card>
            <h4>逾期记录派发</h4>
            <p>已将逾期人打死</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-card>
    <!-- 备注 -->
    <el-card>
      <div slot="header">
        <span>备注</span>
      </div>
      <el-input type="textarea" v-model="form.desc"></el-input>
      <el-row style="margin-top: 20px">
        <el-col :span="8" style="line-height: 36px">
          电话催收结果反馈：
          <el-select v-model="form.value" placeholder="请选择">
            <el-option label="1" value="1"> </el-option>
          </el-select>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <div style="overflow: hidden">
        <el-button
          type="primary"
          round
          style="float: right; margin-right: 100px"
          >返回</el-button
        >
        <el-button type="primary" round style="float: right; margin-right: 20px"
          >逾期还清</el-button
        >
        <el-button type="primary" round style="float: right; margin-right: 20px"
          >逾期记录派发</el-button
        >
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'PayOffDetails',
  components: {},
  data() {
    return {
      form: {},
      tableData: [],
    }
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
}
</script>

<style lang='scss' scoped>
.el-card {
  font-size: 14px;
}
.el-col {
  margin: 5px 0;
  padding-left: 50px;
}
.el-card {
  margin-bottom: 10px;
}
.el-input,
.el-select {
  width: 250px;
  float: right;
}
.addTr {
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  font-size: 16px;
  text-align: center;
  color: #5bbbfc;
  cursor: pointer;
}
</style>
