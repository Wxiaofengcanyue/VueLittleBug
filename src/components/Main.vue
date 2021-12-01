<template>
  <div>
    <h1> 你好 ，  这是主页 ,先将就着看一下吧 </h1>

    <el-form>
      <el-form-item>
        <el-button size="medium"
                   type="primary"
                   @click="returnLogin()"> 返回登录页 </el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  name: "Main",
  methods: {
    returnLogin() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
