<template>
  <div class="Ce">
    <el-upload
      ref="upload"
      :limit="1"
      accept="*"
      :action="upload.url"
      :headers="upload.headers"
      :file-list="upload.fileList"
      :on-progress="handleFileUploadProgress"
      :on-success="handleFileSuccess"
      :auto-upload="false"
      :data="uploadData"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button
        style="margin-left: 10px"
        size="small"
        type="success"
        :loading="upload.isUploading"
        @click="submitUpload"
        >上传到服务器</el-button
      >
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%">
      <pdf ref="pdf" v-for="i in numPages" :key="i" :src="url" :page="i"></pdf>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-image
      style="width: 100px; height: 100px"
      :src="ceshiList[242]"
      :preview-src-list="srcList"
    >
    </el-image>
    <button @click="dialogVisible = true">pdf在线查看</button>
    <button @click="ceshi1">获取百融token</button>
    <button @click="ceshi2">点击下载pdf</button>
    <button @click="ceshi3">测试3</button>
    <iframe
      src="http://192.168.31.86:8080/profile/2021/01/15/985a7660-0af1-4aac-801f-1bbd9bf90f66.docx"
      width="100%"
      height="100%"
      frameborder="1"
    >
    </iframe>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'querystring'
import pdf from 'vue-pdf'
import { getToken } from '@/utils/auth'
import { getByToken } from '@/api/process/firstTrial'
// import html2canvas from 'html2canvas'
// import JsPDF from 'jspdf'

export default {
  name: 'Ce',
  components: { pdf },
  data() {
    return {
      // 上传参数
      upload: {
        // 是否禁用上传
        isUploading: false,
        // 设置上传的请求头部
        // headers: { Authorization: 'Bearer ' + getToken() },
        // 上传的地址
        url: 'http://192.168.31.86:8080/system/test/ceshi2',
        // 上传的文件列表
        fileList: [],
      },
      uploadData: { name: 'ceshi2name', id: 250 },
      form: {},
      url:
        'http://192.168.31.86:8080/profile/2021/01/11/18ec8853-7584-45e0-ab25-0a8a1e6576f6.pdf',
      numPages: null, // pdf 总页数
      dialogVisible: false,
      ceshiList: {
        242: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      },
      srcList: [
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      ],
    }
  },
  computed: {},
  watch: {},
  methods: {
    handleAdd() {
      this.upload.fileList = []
    },

    handleUpdate(row) {
      this.upload.fileList = [
        { name: this.form.fileName, url: this.form.filePath },
      ]
    },
    // 文件提交处理
    submitUpload() {
      this.$refs.upload.submit()
    },
    // 文件上传中处理
    handleFileUploadProgress(event, file, fileList) {
      this.upload.isUploading = true
    },
    // 文件上传成功处理
    handleFileSuccess(response, file, fileList) {
      this.upload.isUploading = false
      this.form.filePath = response.url
      this.msgSuccess(response.msg)
      console.log(file)
    },
    getNumPages() {
      let loadingTask = pdf.createLoadingTask(this.url)
      loadingTask.promise
        .then((pdf) => {
          this.numPages = pdf.numPages
        })
        .catch((err) => {
          console.error('pdf 加载失败', err)
        })
    },
    async ceshi1() {
      try {
        const data = await getByToken()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
    ceshi2() {
      window.open(
        'https://imgv5.jingzhengu.com//group3/M02/D1/CF/wKgUkl_-q3yAPcM6AAcu5ZFs_oU944.pdf'
      )
    },
    // printOut(name) {
    //   let shareContent = document.querySelector('.Ce'), //需要截图的包裹的（原生的）DOM 对象
    //     width = shareContent.clientWidth, //获取dom 宽度
    //     height = shareContent.clientHeight, //获取dom 高度
    //     canvas = document.createElement('canvas'), //创建一个canvas节点
    //     scale = 2 //定义任意放大倍数 支持小数
    //   canvas.width = width * scale //定义canvas 宽度 * 缩放
    //   canvas.height = height * scale * scale //定义canvas高度 *缩放
    //   canvas.style.width = shareContent.clientWidth * scale + 'px'
    //   canvas.style.height = shareContent.clientHeight * scale + 'px'
    //   canvas.getContext('2d').scale(scale, scale) //获取context,设置scale
    //   let opts = {
    //     scale: scale, // 添加的scale 参数
    //     canvas: canvas, //自定义 canvas
    //     logging: false, //日志开关，便于查看html2canvas的内部执行流程
    //     width: width, //dom 原始宽度
    //     height: height,
    //     useCORS: true, // 【重要】开启跨域配置
    //   }

    //   html2canvas(shareContent, opts).then(() => {
    //     var contentWidth = canvas.width
    //     var contentHeight = canvas.height
    //     //一页pdf显示html页面生成的canvas高度;
    //     var pageHeight = (contentWidth / 592.28) * 841.89
    //     //未生成pdf的html页面高度
    //     var leftHeight = contentHeight
    //     //页面偏移
    //     var position = 0
    //     //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
    //     var imgWidth = 595.28
    //     var imgHeight = (592.28 / contentWidth) * contentHeight
    //     var pageData = canvas.toDataURL('image/jpeg', 1.0)
    //     var PDF = new JsPDF('', 'pt', 'a4')
    //     if (leftHeight < pageHeight) {
    //       PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
    //     } else {
    //       while (leftHeight > 0) {
    //         PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
    //         leftHeight -= pageHeight
    //         position -= 841.89
    //         if (leftHeight > 0) {
    //           PDF.addPage()
    //         }
    //       }
    //     }
    //     PDF.save(name + '.pdf') // 这里是导出的文件名
    //   })
    // },
    ceshi3() {
      window.open(
        'http://192.168.31.86:8080/profile/2021/01/15/985a7660-0af1-4aac-801f-1bbd9bf90f66.docx'
      )
    },
  },
  mounted() {
    this.getNumPages()
  },
  created() {},
}
</script>

<style lang='scss' scoped>
</style>
