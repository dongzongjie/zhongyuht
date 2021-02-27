<template>
  <div class="app-container">
    <!-- 注册信息栏 -->
    <!-- <el-card style="margin-bottom: 10px">
      <div slot="header">
        <span>注册信息栏</span>
      </div>
      <el-row>
        <el-col :span="4" class="img">
          注册信息栏1
          <el-image
            style="width: 100px; height: 100px"
            :src="afterData['注册信息栏第一页']"
            :preview-src-list="afterData.zhengshu"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          注册信息栏2
          <el-image
            style="width: 100px; height: 100px"
            :src="afterData['注册信息栏第二页']"
            :preview-src-list="afterData.zhengshu"
          >
          </el-image>
        </el-col>
      </el-row>
    </el-card> -->
    <!-- 行驶证 -->
    <!-- <el-card style="margin-bottom: 10px">
      <div slot="header">
        <span>行驶证</span>
      </div>
      <el-row>
        <el-col :span="4" class="img">
          行驶证正页
          <el-image
            style="width: 100px; height: 100px"
            :src="afterData['行驶证正页']"
            :preview-src-list="afterData.qita"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          行驶证副页
          <el-image
            style="width: 100px; height: 100px"
            :src="afterData['行驶证副页']"
            :preview-src-list="afterData.qita"
          >
          </el-image>
        </el-col>
      </el-row>
    </el-card> -->
    <!-- 登记栏 -->
    <el-card style="margin-bottom: 10px">
      <div slot="header">
        <span>登记栏</span>
      </div>
      <el-row>
        <el-col :span="4" class="img">
          登记证信息栏1-2
          <el-image
            style="width: 100px; height: 100px"
            :src="afterData.dj12"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          登记证信息栏3-4
          <el-image
            style="width: 100px; height: 100px"
            :src="afterData.dj34"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          登记证信息栏5-6
          <el-image
            style="width: 100px; height: 100px"
            :src="afterData.dj56"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          登记证信息栏7-8
          <el-image
            style="width: 100px; height: 100px"
            :src="afterData.dj78"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          登记证信息栏9-10
          <el-image
            style="width: 100px; height: 100px"
            :src="afterData.dj910"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <!-- <el-col :span="4" class="img">
          登记栏6
          <el-image
            style="width: 100px; height: 100px"
            :src="afterData['登记栏第6页']"
            :preview-src-list="afterData.zhengshu"
          >
          </el-image>
        </el-col> -->
      </el-row>
    </el-card>
    <!-- 保险信息 -->
    <el-card style="margin-bottom: 10px">
      <div slot="header">
        <span>保险信息</span>
      </div>
      <el-row>
        <el-col :span="4" class="img">
          新保险单
          <el-image
            style="width: 100px; height: 100px"
            :src="afterData.xbd"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          原保险单
          <el-image
            style="width: 100px; height: 100px"
            :src="afterData.ybd"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          特别约定
          <el-image
            style="width: 100px; height: 100px"
            :src="afterData.tbyd"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
    </el-card>
    <!-- 其他资料 -->
    <!-- <el-card style="margin-bottom: 10px">
      <div slot="header">
        <span>其他资料</span>
      </div>
      <el-row>
        <el-col :span="4" class="img">
          购车发票
          <el-image
            style="width: 100px; height: 100px"
            :src="afterData['购车发票']"
            :preview-src-list="afterData.qita"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          车检合格证
          <el-image
            style="width: 100px; height: 100px"
            :src="afterData['车检合格证']"
            :preview-src-list="afterData.qita"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          税票
          <el-image
            style="width: 100px; height: 100px"
            :src="afterData['税票']"
            :preview-src-list="afterData.qita"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          税本
          <el-image
            style="width: 100px; height: 100px"
            :src="afterData['税本']"
            :preview-src-list="afterData.qita"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          销售+主贷人+车合影
          <el-image
            style="width: 100px; height: 100px"
            :src="afterData['销售+主贷人+车合影']"
            :preview-src-list="afterData.qita"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          身份证正面+VIN码
          <el-image
            style="width: 100px; height: 100px"
            :src="afterData['身份证正面+VIN码']"
            :preview-src-list="afterData.qita"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          身份证反面+VIN码
          <el-image
            style="width: 100px; height: 100px"
            :src="afterData['身份证反面+VIN码']"
            :preview-src-list="afterData.qita"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          其他补充
          <el-image
            style="width: 100px; height: 100px"
            :src="afterData['其他补充资料']"
            :preview-src-list="afterData.qita"
          >
          </el-image>
        </el-col>
      </el-row>
    </el-card> -->
    <!-- 提车补照 -->
    <!-- <el-card style="margin-bottom: 10px">
      <div slot="header">
        <span>提车补照</span>
      </div>
      <el-row>
        <el-col :span="4" class="img">
          提车照及确认书
          <el-image
            style="width: 100px; height: 100px"
            :src="afterData['提车照及确认书']"
            :preview-src-list="afterData.tiche"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          手持确认书与车合影
          <el-image
            style="width: 100px; height: 100px"
            :src="afterData['手持确认书与车合影']"
            :preview-src-list="afterData.tiche"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          车辆交接确认书
          <el-image
            style="width: 100px; height: 100px"
            :src="afterData['车辆交接确认书']"
            :preview-src-list="afterData.tiche"
          >
          </el-image>
        </el-col>
      </el-row>
    </el-card> -->
    <!-- 绿本邮寄 -->
    <!-- <el-card style="margin-bottom: 10px">
      <div slot="header">
        <span>绿本邮寄</span>
      </div>
      <el-row style="font-size: 14px">
        <el-col :span="8" style="margin: 5px 0"
          >申请单号：{{ afterData.lvben.shenqingdanhao }}</el-col
        >
        <el-col :span="8" style="margin: 5px 0"
          >客户姓名：{{ afterData.lvben.name }}</el-col
        >
        <el-col :span="8" style="margin: 5px 0"
          >快递公司：{{ afterData.lvben.gongsi }}</el-col
        >
        <el-col :span="8" style="margin: 5px 0"
          >快递单号：{{ afterData.lvben.kuaididanhao }}</el-col
        >
        <el-col :span="8" style="margin: 5px 0"
          >附件类型：{{ afterData.lvben.type }}</el-col
        >
        <el-col :span="8" style="margin: 5px 0"
          >材料内容：{{ afterData.lvben.count }}</el-col
        >
        <el-col :span="4" class="img">
          车辆交接确认书
          <el-image
            style="width: 100px; height: 100px"
            :src="afterData.lvben.fujian"
            :preview-src-list="afterData.tiche"
          >
          </el-image>
        </el-col>
        <el-button
          v-if="pdfUrl"
          type="primary"
          round
          size="mini"
          @click="dialogVisible = true"
          >查看附件</el-button
        >
      </el-row>
    </el-card>
    <el-dialog :visible.sync="dialogVisible" width="50%">
      <pdf
        ref="pdf"
        v-for="i in numPages"
        :key="i"
        :src="pdfUrl"
        :page="i"
      ></pdf>
    </el-dialog> -->
    <!-- 意见 -->
    <el-card>
      <div slot="header">
        <span>意见</span>
      </div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 3 }"
        placeholder="请输入终审意见"
        v-model="textarea"
      />
      <el-button
        v-if="afterData.shenpi.state === '1'"
        type="primary"
        round
        style="margin: 20px 10px"
        disabled
        >已通过</el-button
      >
      <div v-else>
        <el-button
          type="primary"
          round
          style="margin: 20px 10px"
          @click="creditExtensionHandle(1)"
          >通过</el-button
        >
        <el-button
          type="warning"
          round
          style="margin: 20px 10px"
          @click="creditExtensionHandle(2)"
          >退回</el-button
        >
      </div>
    </el-card>
  </div>
</template>

<script>
import { getAfterLoanDetails, afterLoanHandle } from '@/api/process/afterLoan'

export default {
  name: 'AfterLoanDetails',
  components: {},
  data() {
    return {
      dialogVisible: false,
      numPages: null, // pdf 总页数
      pdfUrl: '',
      textarea: '',
      approvalType: '',
      afterData: { shenpi: {}, lvben: {} },
      srcList: [],
    }
  },
  computed: {},
  watch: {
    $route(to, from) {
      //监听路由是否变化
      if (to.path == '/process/afterTrialDetails') {
        this.findAfterLoanData()
      }
    },
  },
  methods: {
    // 获取贷后详情信息
    async findAfterLoanData() {
      try {
        const { data } = await getAfterLoanDetails(this.$route.query.id)
        this.afterData = data
        // this.afterData.tiche.push(data.lvben.fujian)
        this.textarea = data.shenpi.opinion
        data.forEach((item) => {
          this.srcList.push(item)
        })
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
    // 贷后
    async creditExtensionHandle(state) {
      if (this.textarea.trim()) {
        const that = this
        this.$confirm('确认操作?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            return afterLoanHandle({
              state: state,
              opinion: that.textarea,
              transactionCode: that.$route.query.transactionCode,
            })
          })
          .then(() => {
            this.msgSuccess('操作成功')
            this.findAfterLoanData()
          })
          .catch(function () {})
      } else {
        this.msgError('请输入意见')
      }
    },
  },
  created() {
    this.findAfterLoanData()
  },
}
</script>

<style lang='scss' scoped>
.img {
  display: flex;
  flex-direction: column-reverse;
  font-size: 14px;
  margin: 5px 0;
}
/deep/.el-image-viewer__next,
/deep/.el-image-viewer__prev {
  display: none;
}
</style>
