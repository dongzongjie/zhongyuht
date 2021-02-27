<template>
  <div class="app-container">
    <el-form ref="form" :model="form" :rules="rules" label-width="100px">
      <el-form-item label="版本号：" prop="code">
        <el-input v-model="form.code" placeholder="请输入整数"></el-input>
      </el-form-item>
      <el-form-item label="版本名：" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="更新内容：" prop="content">
        <el-input type="textarea" v-model="form.content"></el-input>
      </el-form-item>
      <el-upload
        class="upload-demo"
        ref="upload"
        drag
        accept=".apk"
        action="http://114.215.186.186:8080/system/test/zhengshi"
        :on-success="handleSuccess"
        :on-error="handleError"
        :auto-upload="false"
        :data="form"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          只能上传.apk文件，将文件拖到此处，或<em>点击上传</em>
        </div>
      </el-upload>
      <el-button style="margin-top: 20px" type="primary" @click="onSubmit"
        >上传</el-button
      >
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'UploadAPK',
  components: {},
  data() {
    return {
      form: {},
      rules: {
        code: [{ required: true, message: '请输入版本号', trigger: 'blur' }],
        name: [{ required: true, message: '请输入版本名', trigger: 'blur' }],
        content: [
          { required: true, message: '请输入更新内容', trigger: 'blur' },
        ],
      },
    }
  },
  computed: {},
  watch: {},
  methods: {
    onSubmit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.$refs.upload.submit()
        }
      })
    },
    handleSuccess(response, file, fileList) {
      this.msgSuccess(response.msg)
    },
    handleError(err, file, fileList) {
      this.msgError(err.msg)
    },
  },
  created() {},
}
</script>

<style lang='scss' scoped>
.el-form {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  .el-form-item {
    width: 50%;
    margin: 20px auto;
  }
  /deep/.upload-demo {
    width: 20%;
    margin: 0 auto;
  }
  /deep/.el-upload {
    width: 100%;
  }
  /deep/.el-upload-dragger {
    width: 100%;
  }
}
</style>
