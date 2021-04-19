<template>
  <div class="app-container">
    <el-row style="background-color: #fff">
      <el-col :span="16" style="padding-left: 50px; line-height: 50px"
        >本月统计</el-col
      >
      <el-col :span="8" style="line-height: 50px"
        >日期选择
        <el-date-picker
          v-model="date"
          type="month"
          value-format="yyyy-MM"
          placeholder="选择日期"
        >
        </el-date-picker>
        <el-button
          type="primary"
          size="mini"
          style="margin-left: 15px"
          round
          @click="getPerformance"
          >查询</el-button
        >
      </el-col>
    </el-row>
    <el-row :gutter="40" class="panel-group">
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-people">
            <svg-icon icon-class="build" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">目标贷款额(万)</div>
            <count-to
              :start-val="0"
              :end-val="performanceData.mubiao"
              :duration="2600"
              class="card-panel-num"
              :decimals="2"
            />
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-message">
            <svg-icon icon-class="radio" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">KPI完成度(%)</div>
            <count-to
              :start-val="0"
              :end-val="performanceData.wanchenglv * 100"
              :duration="3000"
              class="card-panel-num"
              :decimals="2"
            />
            %
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-money">
            <svg-icon icon-class="money" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">放款总金额(万)</div>
            <count-to
              :start-val="0"
              :end-val="performanceData.fangkuan"
              :duration="3200"
              class="card-panel-num"
              :decimals="2"
            />
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-shopping">
            <svg-icon icon-class="chart" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">均件(万)</div>
            <count-to
              :start-val="0"
              :end-val="performanceData.junjian"
              :duration="3600"
              class="card-panel-num"
              :decimals="2"
            />
          </div>
        </div>
      </el-col>
    </el-row>
    <div id="echarts" :style="{ height: '500px' }"></div>
    <el-row>
      <el-col :style="24" style="line-height: 50px; padding-left: 50px"
        >团队统计</el-col
      >
    </el-row>
    <el-table
      :data="performanceData.list"
      style="width: 100%; margin-bottom: 100px"
    >
      <el-table-column prop="team" align="center" label="团队" />
      <el-table-column prop="area" align="center" label="地区" />
      <el-table-column prop="mubiao" align="center" label="目标贷款额(万)" />
      <el-table-column prop="wanchenglv" align="center" label="KPI完成度(%)" />
      <el-table-column prop="fangkuan" align="center" label="放款总金额(万)" />
      <el-table-column prop="number" align="center" label="进件单数(件)" />
      <el-table-column prop="junjia" align="center" label="均件(万)" />
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            @click=";(dialogVisible = true), (assessId = scope.row.id)"
            >考核</el-button
          >
          <el-button type="text">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="考核业绩" :visible.sync="dialogVisible" width="30%">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="目标业绩" label-width="100px">
          <el-date-picker
            v-model="date"
            type="month"
            value-format="yyyy-MM"
            placeholder="选择日期"
            disabled
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="目标业绩" label-width="100px" prop="performance">
          <el-input
            v-model="form.performance"
            style="width: 220px"
            suffix-icon="el-icon-zyrz-wan"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="assessClick">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
import echarts from 'echarts'
import {
  findPerformance,
  performanceAssess,
} from '@/api/performance/performance'

export default {
  name: 'Performance',
  components: {
    CountTo,
  },
  data() {
    return {
      ce1: [
        2.0,
        4.9,
        7.0,
        23.2,
        25.6,
        76.7,
        135.6,
        162.2,
        32.6,
        20.0,
        6.4,
        3.3,
      ],
      ce2: [
        2.6,
        5.9,
        9.0,
        26.4,
        28.7,
        70.7,
        175.6,
        182.2,
        48.7,
        18.8,
        6.0,
        2.3,
      ],
      date: this.getDate(),
      performanceData: {
        fangkuan: 0,
        junjian: 0,
        mubiao: 0,
        wanchenglv: 0,
        list: [],
        yearfang: [],
        yearmu: [],
      },
      dialogVisible: false,
      form: {
        performance: '',
      },
      rules: {
        performance: [
          { required: true, message: '请输入目标业绩', trigger: 'blur' },
        ],
      },
      assessId: null,
    }
  },
  computed: {},
  watch: {},
  methods: {
    // 统计图
    drawLine() {
      let dom = document.getElementById('echarts')
      let myChart = echarts.init(dom)
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['目标额', '完成额'],
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月',
            ],
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value} 万',
            },
          },
        ],
        series: [
          {
            name: '目标额',
            type: 'bar',
            data: this.performanceData.yearmu,
            color: 'rgb(145,204,117)',
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' },
              ],
            },
            markLine: {
              data: [{ type: 'average', name: '平均值' }],
            },
          },
          {
            name: '完成额',
            type: 'bar',
            data: this.performanceData.yearfang,
            color: 'rgb(89, 119, 211)',
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' },
              ],
            },
            markLine: {
              data: [{ type: 'average', name: '平均值' }],
            },
          },
        ],
      })
    },
    // 获取详情
    async getPerformance() {
      try {
        const { data } = await findPerformance({ date: this.date })
        // console.log(data)
        this.performanceData = data
        this.drawLine()
      } catch (error) {
        // console.log(error)
      }
    },
    //转换时间方法
    getDate() {
      //date是传过来的时间戳，注意需为13位，10位需*1000
      //也可以不传,获取的就是当前时间
      var time = new Date()
      var year = time.getFullYear() //年
      var month = ('0' + (time.getMonth() + 1)).slice(-2) //月
      var mydate = year + '-' + month
      return mydate
    },
    // 考核
    async assessClick() {
      this.$confirm('确认操作?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          return performanceAssess({
            id: this.assessId,
            mubiao: this.form.performance,
          })
        })
        .then(() => {
          this.msgSuccess('操作成功')
          this.getPerformance()
          this.dialogVisible = false
          this.assessId = null
          this.form.performance = null
        })
        .catch(function () {})
    },
  },
  watch: {
    $route(to, from) {
      //监听路由是否变化
      if (to.path == '/performance') {
        this.getPerformance()
      }
    },
  },
  created() {
    this.getPerformance()
  },
  mounted() {},
}
</script>

<style lang='scss' scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3;
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3;
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width: 550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
