<template>
    <div class="login">

        <el-form class="login-form" :model="loginForm">
            <h1>LittleBug服务平台</h1>
            <el-form-item prop="username">
                <el-input type="text" placeholder="账号" v-model="loginForm.username" suffix-icon="el-icon-user-solid">
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" placeholder="密码" v-model="loginForm.password" suffix-icon="el-icon-s-goods">
                </el-input>
            </el-form-item>

            <el-form-item>

                <el-button
                  :loading="loading"
                  size="medium"
                  type="primary"
                  @click.native.prevent="handleLogin">
                    <span v-if="!loading">登录</span>
                    <span v-else>登陆中...</span>
                </el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            },
            loading: false
        }
    },
    methods: {
        handleLogin() {
            console.log("login");
            //this.loading = !this.loading;
          this.$router.push('/main')
        }
    }
}
</script>

<style scoped>
.login {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/images/your-name.jpeg");
    background-size: cover;
    height: 100%;
    width: 100%;
}
.login-form {
    background-color: rgba(75, 81, 95, 0.3);
    box-shadow: 7px 7px 17px rgba(52, 56, 66, 0.5);
    border-radius: 5px;
    padding: 60px;
    margin: 20px;
}
h1 {
    color: azure;
}
</style>
