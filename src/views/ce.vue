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
    <button @click="dialogVisible = true">pdf</button>
    <button @click="ceshi1">点击</button>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'querystring'
import pdf from 'vue-pdf'
import { getToken } from '@/utils/auth'
import { getByToken } from '@/api/process/firstTrial'

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
        url: 'http://192.168.31.82:8080/system/test/ceshi2',
        // 上传的文件列表
        fileList: [],
      },
      form: {},
      url:
        'http://192.168.31.82/dev-api/profile/2020/12/18/4944fa69-82f2-4eae-b1b8-b25be2303827.pdf',
      numPages: null, // pdf 总页数
      dialogVisible: false,
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
  },
  mounted() {
    this.getNumPages()
  },
  created() {},
}
</script>

<style lang='scss' scoped>
</style>
