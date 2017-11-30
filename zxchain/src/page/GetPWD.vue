<template>
<div class="wrap login" id="app">
    <div class="login-1">
        <router-link to="/"><img src="/static/public/images/login/logo.png"></router-link>
    </div>
    <div class="login-2">
        <span class="login-2-txtBigger">找回密码</span>
        <span>/Forget Password</span>
    </div>
    <div class="login-3">
        <div class="login-company getBackPwd">
            <div class="login-3-2 bottomLine">
                <input placeholder="请输入注册账号时使用的邮箱或手机号" id="login-company-input1">
            </div>
            <div class="sce_line" id="login-company-sce_line-1"></div>
        </div>
    </div>
    <div class="login-5" style="margin-top: 50px;" id="getBackPwd">找回密码</div>
</div>
</template>

<script>
export default {
  name: 'GetPWD'
}
</script>

<style scoped>

</style>