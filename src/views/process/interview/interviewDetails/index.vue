<template>
  <div class="app-container">
    <el-card>
      <span>面签信息</span>
      <div style="float: right; color: #999; margin-right: 20px">
        报告生成时间：{{ createDate }}
      </div>
    </el-card>
    <el-card>
      <div slot="header">
        <span>客户信息</span>
      </div>
      <el-row>
        <el-col :span="8">客户姓名：{{ interviewData.clientName }}</el-col>
        <el-col :span="8">身份证号：{{ interviewData.clientIdCard }}</el-col>
        <el-col :span="8">面签经理：{{ interviewData.operatorName }}</el-col>
        <el-col :span="8">签约时间：{{ startDate }}</el-col>
        <el-col :span="8">签约地址：{{ interviewData.site }}</el-col>
        <el-col :span="8">人像识别：{{ interviewData.faceSimilarity }}%</el-col>
        <el-col :span="8">意向车型：{{ interviewData.carType }}</el-col>
        <el-col :span="8">意向金额：{{ interviewData.loanAmount }}</el-col>
      </el-row>
    </el-card>
    <el-card>
      <el-row>
        <el-col :span="6" class="img">
          身份证正面
          <el-image
            style="width: 250px; height: 160px"
            :src="interviewData.idCardFront"
            :preview-src-list="srcList"
            fit="cover"
          >
          </el-image>
        </el-col>
        <el-col :span="6" class="img">
          身份证反面
          <el-image
            style="width: 250px; height: 160px"
            :src="interviewData.idCardVerso"
            :preview-src-list="srcList"
            fit="cover"
          >
          </el-image>
        </el-col>
        <el-col :span="6" class="img">
          人像照片
          <el-image
            style="width: 250px; height: 160px"
            :src="interviewData.facePic"
            :preview-src-list="srcList"
            fit="cover"
          >
          </el-image>
        </el-col>
        <el-col :span="6" class="img">
          面签视频
          <video
            :src="interviewData.jointVideo"
            controls="controls"
            muted
            preload
            style="width: 250px; height: 160px"
          ></video>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <div slot="header">
        <span>面签问题</span>
      </div>
      <div
        style="margin: 20px 0"
        v-for="(item, index) in questionList"
        :key="index"
      >
        <span style="font-size: 14px">{{ item.questionText }}</span>
        <div style="float: right; margin-right: 20px">
          <el-button type="info" size="mini" v-if="item.result === 1"
            >通过</el-button
          >
          <el-button size="mini" v-else>不通过</el-button>
        </div>
      </div>
    </el-card>
    <el-card>
      <div slot="header">
        <span>面签结果</span>
      </div>
      <span style="font-size: 14px">面签意见</span>
      <el-input
        type="textarea"
        :rows="3"
        placeholder="请输入内容"
        v-model="interviewData.postil"
        style="margin: 10px 0"
      >
      </el-input>
      <span style="font-size: 14px; margin-right: 20px">面签结果</span>
      <el-button type="info" size="mini" v-if="interviewData.status === 2"
        >通过</el-button
      >
      <el-button size="mini" v-else-if="interviewData.status === 3"
        >不通过</el-button
      >
    </el-card>
  </div>
</template>

<script>
import { findInterviewData } from '@/api/process/interview'
import { parseTime } from '@/utils/jeethink'

export default {
  name: 'InterviewDetails',
  components: {},
  data() {
    return {
      interviewData: {},
      srcList: [],
      createDate: '',
      startDate: '',
      questionList: [],
    }
  },
  computed: {},
  watch: {
    $route(to, from) {
      //监听路由是否变化
      if (to.path == '/process/interviewDetails') {
        this.interviewData = {}
        this.srcList = []
        this.createDate = ''
        this.startDate = ''
        this.questionList = []
        this.getInterviewData()
      }
    },
  },
  methods: {
    async getInterviewData() {
      try {
        const { data } = await findInterviewData(
          this.$route.query.transactionCode
        )
        // console.log(JSON.parse(data).data)
        if (JSON.parse(data).code != 0)
          return this.msgError(JSON.parse(data).msg)
        this.interviewData = JSON.parse(data).data
        this.createDate = parseTime(JSON.parse(data).data.createDate)
        this.startDate = parseTime(JSON.parse(data).data.startDate)
        this.srcList.push(
          JSON.parse(data).data.idCardFront,
          JSON.parse(data).data.idCardVerso,
          JSON.parse(data).data.facePic
        )
        this.questionList = JSON.parse(JSON.parse(data).data.questionList)
      } catch (error) {
        // console.log(error)
      }
    },
  },
  created() {
    this.getInterviewData()
  },
}
</script>

<style lang='scss' scoped>
.el-card {
  margin: 10px 0;
  .el-col {
    font-size: 14px;
    margin: 5px 0;
  }
}
.img {
  display: flex;
  flex-direction: column-reverse;
  font-size: 14px;
  margin: 5px 0;
  text-align: center;
  .el-image,
  video {
    margin: 0 auto;
  }
}
</style>
