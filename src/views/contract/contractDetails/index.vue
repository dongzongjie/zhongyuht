<template>
  <div class="app-container">
    <div class="btn-box box1">
      <button @click="goAssignBlock('iframe1', 100)">分期购车垫款委托书</button>
      <button @click="goAssignBlock('iframe2', 100)">咨询服务管理协议</button>
      <!-- <button @click="goAssignBlock('iframe3', 100)">
        授 权 处 置 车 辆 承 诺 函
      </button>
      <button @click="goAssignBlock('iframe4', 100)">
        授 权 扣 留 车 辆 承 诺 函
      </button> -->
      <button @click="goAssignBlock('iframe5', 100)">授权委托书</button>
      <!-- <button @click="goAssignBlock('iframe6', 100)">授权委托书(2)</button> -->
      <!-- <button @click="goAssignBlock('iframe7', 100)">申 请 书</button> -->
      <button @click="goAssignBlock('iframe8', 100)">费用确认函</button>
      <!-- <button @click="goAssignBlock('iframe9', 100)">还款信息确认函</button> -->
    </div>
    <!-- <div class="btn-box box2">
      <button @click="goAssignBlock('iframe10', 100)">
        分期购车垫款委托书
      </button>
      <button @click="goAssignBlock('iframe11', 100)">咨询服务管理协议</button>
      <button @click="goAssignBlock('iframe12', 100)">授权委托书</button>
      <button @click="goAssignBlock('iframe13', 100)">授权委托书(2)</button>
      <button @click="goAssignBlock('iframe14', 100)">收款收据</button>
      <button @click="goAssignBlock('iframe15', 100)">购车协议</button>
      <button @click="goAssignBlock('iframe16', 100)">费用确认函</button>
      <button @click="goAssignBlock('iframe17', 100)">车辆交接确认书</button>
    </div>
    <div class="btn-box box3">
      <button @click="goAssignBlock('iframe18', 100)">抵押担保函</button>
      <button @click="goAssignBlock('iframe19', 100)">
        银行-共同偿债人承诺书(共借签
      </button>
      <button @click="goAssignBlock('iframe20', 100)">银行-婚姻状况声明</button>
      <button @click="goAssignBlock('iframe21', 100)">
        银行-客 户 告 知 书（1）
      </button>
      <button @click="goAssignBlock('iframe22', 100)">
        银行-汽车代理购销合同
      </button>
      <button @click="goAssignBlock('iframe23', 100)">
        银行-空白个人信息查询和使用授权书
      </button>
      <button @click="goAssignBlock('iframe24', 100)">
        银行-空白收入声明（贷款15万以下）
      </button>
      <button @click="goAssignBlock('iframe25', 100)">
        银行-空白收入证明（贷款15万以上）
      </button>
      <button @click="goAssignBlock('iframe26', 100)">
        银行-调查报告（内勤填写）
      </button>
      <button @click="goAssignBlock('iframe27', 100)">
        银行-购车分期付款代理协议
      </button>
      <button @click="goAssignBlock('iframe28', 100)">零售合作协议</button>
    </div> -->
    <el-button type="primary" round class="assignment" @click="getContractDate"
      >自动填写有问题请点击这里</el-button
    >
    <el-button type="primary" round class="download" @click="downloadClick"
      >一键下载PDF</el-button
    >
    <h4>分期购车垫款委托书</h4>
    <iframe
      ref="iframe1"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/公司-新车咨询管理服务协议（2）/分期购车垫款委托书.html"
      style="margin-left: 20%"
    />
    <h4>咨询服务管理协议</h4>
    <iframe
      ref="iframe2"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/公司-新车咨询管理服务协议（2）/咨询服务管理协议.html"
      style="margin-left: 20%"
    />
    <!-- <h4>授 权 处 置 车 辆 承 诺 函</h4>
    <iframe
      ref="iframe3"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/公司-新车咨询管理服务协议（2）/授 权 处 置 车 辆 承 诺 函.html"
      style="margin-left: 20%"
    />
    <h4>授 权 扣 留 车 辆 承 诺 函</h4>
    <iframe
      ref="iframe4"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/公司-新车咨询管理服务协议（2）/授 权 扣 留 车 辆 承 诺 函.html"
      style="margin-left: 20%"
    /> -->
    <h4>授权委托书</h4>
    <iframe
      ref="iframe5"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/公司-新车咨询管理服务协议（2）/授权委托书.html"
      style="margin-left: 20%"
    />
    <!-- <h4>授权委托书(2)</h4>
    <iframe
      ref="iframe6"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/公司-新车咨询管理服务协议（2）/授权委托书(2).html"
      style="margin-left: 20%"
    />
    <h4>申 请 书</h4>
    <iframe
      ref="iframe7"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/公司-新车咨询管理服务协议（2）/申 请 书.html"
      style="margin-left: 20%"
    /> -->
    <h4>费用确认函</h4>
    <iframe
      ref="iframe8"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/公司-新车咨询管理服务协议（2）/费用确认函.html"
      style="margin-left: 20%"
    />
    <!-- <h4>还款信息确认函</h4>
    <iframe
      ref="iframe9"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/公司-新车咨询管理服务协议（2）/还款信息确认函.html"
      style="margin-left: 20%"
    />
    <h4>分期购车垫款委托书</h4>
    <iframe
      ref="iframe10"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/咨询服务管理协议/分期购车垫款委托书.html"
      style="margin-left: 20%"
    />
    <h4>咨询服务管理协议</h4>
    <iframe
      ref="iframe11"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/咨询服务管理协议/咨询服务管理协议.html"
      style="margin-left: 20%"
    />
    <h4>授权委托书</h4>
    <iframe
      ref="iframe12"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/咨询服务管理协议/授权委托书.html"
      style="margin-left: 20%"
    />
    <h4>授权委托书(2)</h4>
    <iframe
      ref="iframe13"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/咨询服务管理协议/授权委托书(2).html"
      style="margin-left: 20%"
    />
    <h4>收款收据</h4>
    <iframe
      ref="iframe14"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/咨询服务管理协议/收款收据.html"
      style="margin-left: 20%"
    />
    <h4>购车协议</h4>
    <iframe
      ref="iframe15"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/咨询服务管理协议/购车协议.html"
      style="margin-left: 20%"
    />
    <h4>费用确认函</h4>
    <iframe
      ref="iframe16"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/咨询服务管理协议/费用确认函.html"
      style="margin-left: 20%"
    />
    <h4>车辆交接确认书</h4>
    <iframe
      ref="iframe17"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/咨询服务管理协议/车辆交接确认书.html"
      style="margin-left: 20%"
    />
    <h4>抵押担保函</h4>
    <iframe
      ref="iframe18"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/抵押担保函.html"
      style="margin-left: 20%"
    />
    <h4>银行-共同偿债人承诺书(共借签</h4>
    <iframe
      ref="iframe19"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/银行-共同偿债人承诺书(共借签.html"
      style="margin-left: 20%"
    />
    <h4>银行-婚姻状况声明</h4>
    <iframe
      ref="iframe20"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/银行-婚姻状况声明.html"
      style="margin-left: 20%"
    />
    <h4>银行-客 户 告 知 书（1）</h4>
    <iframe
      ref="iframe21"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/银行-客 户 告 知 书（1）.html"
      style="margin-left: 20%"
    />
    <h4>银行-汽车代理购销合同</h4>
    <iframe
      ref="iframe22"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/银行-汽车代理购销合同.html"
      style="margin-left: 20%"
    />
    <h4>银行-空白个人信息查询和使用授权书</h4>
    <iframe
      ref="iframe23"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/银行-空白个人信息查询和使用授权书.html"
      style="margin-left: 20%"
    />
    <h4>银行-空白收入声明（贷款15万以下）</h4>
    <iframe
      ref="iframe24"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/银行-空白收入声明（贷款15万以下）.html"
      style="margin-left: 20%"
    />
    <h4>银行-空白收入证明（贷款15万以上）</h4>
    <iframe
      ref="iframe25"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/银行-空白收入证明（贷款15万以上）.html"
      style="margin-left: 20%"
    />
    <h4>银行-调查报告（内勤填写）</h4>
    <iframe
      ref="iframe26"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/银行-调查报告（内勤填写）.html"
      style="margin-left: 20%"
    />
    <h4>银行-购车分期付款代理协议</h4>
    <iframe
      ref="iframe27"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/银行-购车分期付款代理协议.html"
      style="margin-left: 20%"
    />
    <h4>零售合作协议</h4>
    <iframe
      ref="iframe28"
      width="50%"
      height="1000px"
      frameborder="0"
      src="./contract/零售合作协议.html"
      style="margin-left: 20%"
    /> -->
  </div>
</template>

<script>
import { getContract } from '@/api/contract/contract'

export default {
  name: 'ContractDetails',
  components: {},
  data() {
    return {
      transferData: {},
    }
  },
  computed: {},
  watch: {
    $route(to, from) {
      //监听路由是否变化
      if (to.path == '/contractDetails') {
        this.transferData = {}
        this.getContractDate()
      }
    },
  },
  methods: {
    // 页面滚动
    goAssignBlock(el, speed) {
      let _this = this
      let windowH = window.innerHeight //浏览器窗口高度
      let h = this.$refs[el].offsetHeight //模块内容高度
      let t = this.$refs[el].offsetTop //模块相对于内容顶部的距离
      let top = t - (windowH - h) / 2 //需要滚动到的位置，若改为 t 则滚动到模块顶部位置，此处是滚动到模块相对于窗口垂直居中的位置
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop //滚动条距离顶部高度
      let currentTop = scrollTop //默认滚动位置为当前滚动条位置，若改为0，则每次都会从顶部滚动到指定位置
      let requestId
      //采用requestAnimationFrame，平滑动画
      function step() {
        //判断让滚动条向上滚还是向下滚
        if (scrollTop < top) {
          if (currentTop <= top) {
            //   window.scrollTo(x,y) y为上下滚动位置
            window.scrollTo(0, currentTop)
            requestId = window.requestAnimationFrame(step)
          } else {
            window.cancelAnimationFrame(requestId)
          }
          //向下滚动
          currentTop += speed
        } else {
          if (top <= currentTop) {
            //注：此处 - speed 是解决居中时存在的问题，可自行设置或去掉
            window.scrollTo(0, currentTop - speed)
            requestId = window.requestAnimationFrame(step)
          } else {
            window.cancelAnimationFrame(requestId)
          }
          //向上滚动
          currentTop -= speed
        }
      }
      window.requestAnimationFrame(step)
    },
    // 获取数据
    async getContractDate() {
      try {
        const { data } = await getContract(this.$route.query.transactionCode)
        this.transferData = data
        console.log(data)
        this.assignment()
      } catch (error) {
        console.log(error)
      }
    },
    // 向html传值
    assignment() {
      this.iframeWin1.postMessage(this.transferData)
      this.iframeWin2.postMessage(this.transferData)
      // this.iframeWin3.postMessage(this.transferData)
      // this.iframeWin4.postMessage(this.transferData)
      this.iframeWin5.postMessage(this.transferData)
      // this.iframeWin6.postMessage(this.transferData)
      // this.iframeWin7.postMessage(this.transferData)
      this.iframeWin8.postMessage(this.transferData)
      // this.iframeWin9.postMessage(this.transferData)
      // this.iframeWin10.postMessage(this.transferData)
      // this.iframeWin11.postMessage(this.transferData)
      // this.iframeWin12.postMessage(this.transferData)
      // this.iframeWin13.postMessage(this.transferData)
      // this.iframeWin14.postMessage(this.transferData)
      // this.iframeWin15.postMessage(this.transferData)
      // this.iframeWin16.postMessage(this.transferData)
      // this.iframeWin17.postMessage(this.transferData)
      // this.iframeWin18.postMessage(this.transferData)
      // this.iframeWin19.postMessage(this.transferData)
      // this.iframeWin20.postMessage(this.transferData)
      // this.iframeWin21.postMessage(this.transferData)
      // this.iframeWin22.postMessage(this.transferData)
      // this.iframeWin23.postMessage(this.transferData)
      // this.iframeWin24.postMessage(this.transferData)
      // this.iframeWin25.postMessage(this.transferData)
      // this.iframeWin26.postMessage(this.transferData)
      // this.iframeWin27.postMessage(this.transferData)
      // this.iframeWin28.postMessage(this.transferData)
    },
    // 下载
    downloadClick() {
      this.$confirm('确认下载全部合同?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.transferData.isDownload = true
        })
        .then(() => {
          return this.assignment()
        })
        .then(() => {
          delete this.transferData.isDownload
        })
        .catch(function () {})
    },
  },
  mounted() {
    this.iframeWin1 = this.$refs.iframe1.contentWindow
    this.iframeWin2 = this.$refs.iframe2.contentWindow
    // this.iframeWin3 = this.$refs.iframe3.contentWindow
    // this.iframeWin4 = this.$refs.iframe4.contentWindow
    this.iframeWin5 = this.$refs.iframe5.contentWindow
    // this.iframeWin6 = this.$refs.iframe6.contentWindow
    // this.iframeWin7 = this.$refs.iframe7.contentWindow
    this.iframeWin8 = this.$refs.iframe8.contentWindow
    // this.iframeWin9 = this.$refs.iframe9.contentWindow
    // this.iframeWin10 = this.$refs.iframe10.contentWindow
    // this.iframeWin11 = this.$refs.iframe11.contentWindow
    // this.iframeWin12 = this.$refs.iframe12.contentWindow
    // this.iframeWin13 = this.$refs.iframe13.contentWindow
    // this.iframeWin14 = this.$refs.iframe14.contentWindow
    // this.iframeWin15 = this.$refs.iframe15.contentWindow
    // this.iframeWin16 = this.$refs.iframe16.contentWindow
    // this.iframeWin17 = this.$refs.iframe17.contentWindow
    // this.iframeWin18 = this.$refs.iframe18.contentWindow
    // this.iframeWin19 = this.$refs.iframe19.contentWindow
    // this.iframeWin20 = this.$refs.iframe20.contentWindow
    // this.iframeWin21 = this.$refs.iframe21.contentWindow
    // this.iframeWin22 = this.$refs.iframe22.contentWindow
    // this.iframeWin23 = this.$refs.iframe23.contentWindow
    // this.iframeWin24 = this.$refs.iframe24.contentWindow
    // this.iframeWin25 = this.$refs.iframe25.contentWindow
    // this.iframeWin26 = this.$refs.iframe26.contentWindow
    // this.iframeWin27 = this.$refs.iframe27.contentWindow
    // this.iframeWin28 = this.$refs.iframe28.contentWindow
  },
  created() {
    this.getContractDate()
  },
}
</script>

<style lang='scss' scoped>
h4 {
  padding-left: 39%;
  font-size: 24px;
}
.btn-box {
  background: #ccc;
  position: fixed;
  z-index: 2;
}
.btn-box button {
  display: block;
  width: 100px;
  height: 50px;
  background: #ccc;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 14px;
  margin: 5px 0;
  cursor: pointer;
  border: none;
}
.btn-box button:hover {
  background-color: rgb(48, 65, 86);
}
.box1 {
  right: 250px;
}
.box2 {
  right: 125px;
}
.box3 {
  right: 0px;
}
.download {
  position: fixed;
  top: 100px;
  left: 220px;
}
.assignment {
  position: fixed;
  top: 150px;
  left: 220px;
}
</style>
