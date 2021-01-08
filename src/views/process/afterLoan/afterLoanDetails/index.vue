<template>
  <div class="app-container">
    <el-card style="margin-bottom: 10px">
      <div slot="header">
        <span>注册信息栏</span>
      </div>
      <el-row>
        <el-col :span="4" class="img">
          注册信息栏1
          <el-image
            style="width: 100px; height: 100px"
            src=""
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          注册信息栏2
          <el-image
            style="width: 100px; height: 100px"
            src=""
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-bottom: 10px">
      <div slot="header">
        <span>行驶证</span>
      </div>
      <el-row>
        <el-col :span="4" class="img">
          行驶证正页
          <el-image
            style="width: 100px; height: 100px"
            src=""
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          行驶证副页
          <el-image
            style="width: 100px; height: 100px"
            src=""
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-bottom: 10px">
      <div slot="header">
        <span>登记栏</span>
      </div>
      <el-row>
        <el-col :span="4" class="img">
          登记栏1
          <el-image
            style="width: 100px; height: 100px"
            src=""
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          登记栏2
          <el-image
            style="width: 100px; height: 100px"
            src=""
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          登记栏3
          <el-image
            style="width: 100px; height: 100px"
            src=""
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          登记栏4
          <el-image
            style="width: 100px; height: 100px"
            src=""
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          登记栏5
          <el-image
            style="width: 100px; height: 100px"
            src=""
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          登记栏6
          <el-image
            style="width: 100px; height: 100px"
            src=""
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-bottom: 10px">
      <div slot="header">
        <span>保险信息</span>
      </div>
      <el-row>
        <el-col :span="4" class="img">
          保险新单1
          <el-image
            style="width: 100px; height: 100px"
            src=""
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          保险新单2
          <el-image
            style="width: 100px; height: 100px"
            src=""
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          保险新单3
          <el-image
            style="width: 100px; height: 100px"
            src=""
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          补充
          <el-image
            style="width: 100px; height: 100px"
            src=""
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-bottom: 10px">
      <div slot="header">
        <span>其他资料</span>
      </div>
      <el-row>
        <el-col :span="4" class="img">
          购车发票
          <el-image
            style="width: 100px; height: 100px"
            src=""
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          车间合格证
          <el-image
            style="width: 100px; height: 100px"
            src=""
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          税票
          <el-image
            style="width: 100px; height: 100px"
            src=""
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          税本
          <el-image
            style="width: 100px; height: 100px"
            src=""
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          销售+主贷人+车合影
          <el-image
            style="width: 100px; height: 100px"
            src=""
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          身份证正面+VIN码
          <el-image
            style="width: 100px; height: 100px"
            src=""
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          身份证反面+VIN码
          <el-image
            style="width: 100px; height: 100px"
            src=""
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          其他补充
          <el-image
            style="width: 100px; height: 100px"
            src=""
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-bottom: 10px">
      <div slot="header">
        <span>提车补照</span>
      </div>
      <el-row>
        <el-col :span="4" class="img">
          提车照合影
          <el-image
            style="width: 100px; height: 100px"
            src=""
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          手持确认书与车合影
          <el-image
            style="width: 100px; height: 100px"
            src=""
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
        <el-col :span="4" class="img">
          车辆交接确认书
          <el-image
            style="width: 100px; height: 100px"
            src=""
            :preview-src-list="srcList"
          >
          </el-image>
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-bottom: 10px">
      <div slot="header">
        <span>绿本邮寄</span>
      </div>
      <el-row style="font-size: 14px">
        <el-col :span="8" style="margin: 5px 0">申请单号：</el-col>
        <el-col :span="8" style="margin: 5px 0">客户姓名：</el-col>
        <el-col :span="8" style="margin: 5px 0">快递公司：</el-col>
        <el-col :span="8" style="margin: 5px 0">快递单号：</el-col>
        <el-col :span="8" style="margin: 5px 0">附件类型：</el-col>
        <el-col :span="24" style="margin: 5px 0">备注：</el-col>
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
    </el-dialog>
  </div>
</template>

<script>
import { getAfterLoanDetails } from '@/api/process/afterLoan'

export default {
  name: 'AfterLoanDetails',
  components: {},
  data() {
    return {
      dialogVisible: false,
      numPages: null, // pdf 总页数
      srcList: [],
      pdfUrl: '',
    }
  },
  computed: {},
  watch: {},
  methods: {
    async findAfterLoanData() {
      try {
        const data = await getAfterLoanDetails(this.$route.query.id)
        console.log(data)
      } catch (error) {
        console.log(error)
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
</style>
