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
        <el-col :span="12">紧急联系人1姓名：</el-col>
        <el-col :span="12">家庭住址：</el-col>
        <el-col :span="12">紧急联系人1电话：</el-col>
        <el-col :span="12">单位名称：</el-col>
        <el-col :span="12">紧急联系人2姓名：</el-col>
        <el-col :span="12">单位地址：</el-col>
        <el-col :span="12">紧急联系人2电话：</el-col>
        <el-col :span="12">单位电话：</el-col>
      </el-row>
    </el-card>
    <!-- 贷款信息 -->
    <el-card>
      <div slot="header">
        <span>贷款信息</span>
      </div>
      <el-row>
        <el-col :span="8">经办行：</el-col>
        <el-col :span="8">银行卡号：</el-col>
        <el-col :span="8">实际销售价(元)：</el-col>
        <el-col :span="8">车辆贷款金额(元)：</el-col>
        <el-col :span="8">利率换档：</el-col>
        <el-col :span="8">月还款金额：(元)</el-col>
        <el-col :span="8">还款期限(月)：</el-col>
        <el-col :span="8">附加费用(元)：</el-col>
        <el-col :span="8">续保押金(元)：</el-col>
      </el-row>
    </el-card>
    <!-- 贷款信息 -->
    <el-card>
      <div slot="header">
        <span>逾期信息</span>
      </div>
      <el-row>
        <el-col :span="8">逾期还款日期：</el-col>
        <el-col :span="8">滞纳金(元)：</el-col>
        <el-col :span="8">当前逾期金额：(元)</el-col>
        <el-col :span="8">当前连续违约次数：(次)</el-col>
        <el-col :span="8">累计违约次数：(次)</el-col>
        <el-col :span="8">应还期数</el-col>
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
          车辆类型
          <el-input v-model="form.businessType"> </el-input>
        </el-col>
        <el-col :span="8" style="line-height: 36px">
          精真估估价
          <el-input v-model="form.businessType" suffix-icon="el-icon-zyrz-yuan">
          </el-input>
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
    <!-- <el-card>
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
    </el-card> -->
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
        <el-button
          type="primary"
          round
          style="float: right; margin-right: 20px"
          @click="dialogVisible = true"
          >逾期记录派发</el-button
        >
      </div>
    </el-card>
    <!-- dialog -->
    <el-dialog
      title="逾期记录派发"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <el-form :model="form" label-width="150px">
        <el-form-item label="逾期信息派发">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="对内派发处理" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="逾期处理方式">
          <el-checkbox v-model="form.dhcs">电话催收</el-checkbox>
          <el-checkbox v-model="form.xxcs">线下催收</el-checkbox>
          <el-checkbox v-model="form.fwcs">法务催收</el-checkbox>
          <el-checkbox v-model="form.tc">拖车</el-checkbox>
          <el-checkbox v-model="form.dc">代偿</el-checkbox>
          <el-checkbox v-model="form.slxxxf">失联信息修复</el-checkbox>
        </el-form-item>
        <el-form-item label="电话催收人员" v-if="form.dhcs">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="1" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="线下催收人员" v-if="form.xxcs">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="1" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="法务催收人员" v-if="form.fwcs">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="1" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="拖车人员" v-if="form.tc">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="1" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="代偿人员" v-if="form.dc">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="1" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="代偿金额" v-if="form.dc">
          <el-input
            v-model="form.name"
            suffix-icon="el-icon-zyrz-yuan"
          ></el-input>
        </el-form-item>
        <el-form-item label="失联信息修复人员" v-if="form.slxxxf">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="1" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="修复内容" v-if="form.slxxxf">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="修复主借款人全部信息" value="1"></el-option>
            <el-option label="修复主借款人联系电话" value="2"></el-option>
            <el-option label="修复主借款人家庭住址" value="3"></el-option>
            <el-option label="修复主借款人单位信息" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="添加处理意见">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { findOverdueData } from '@/api/overdue/information'

export default {
  name: 'InformationDetails',
  components: {},
  data() {
    return {
      form: {
        type: [],
      },
      tableData: [],
      subjoin: [],
      dialogVisible: false,
    }
  },
  computed: {},
  watch: {},
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(() => {
          done()
        })
        .catch(() => {})
    },
    // 获取信息
    async getOverdueData() {
      try {
        const { data } = await findOverdueData(
          this.$route.query.transactionCode
        )
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
  },
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
.el-dialog {
  .el-input,
  .el-select {
    width: 250px;
    float: none;
  }
}
</style>
