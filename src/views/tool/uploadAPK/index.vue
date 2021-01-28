<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="版本号：">
        <el-input v-model="form.num"></el-input>
      </el-form-item>
      <el-form-item label="版本名：">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="更新内容：">
        <el-input type="textarea" v-model="form.content"></el-input>
      </el-form-item>
      <el-upload
        class="upload-demo"
        ref="upload"
        drag
        action="http://"
        multiple
        :auto-upload="false"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
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
    }
  },
  computed: {},
  watch: {},
  methods: {
    onSubmit() {
      console.log(this.form)
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
