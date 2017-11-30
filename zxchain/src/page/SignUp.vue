<template>
<div>
    <vue-particles
        style="width: 95%; height: 95%;"
        id="particles-js"
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    <div class="wrap login" id="app">
        <div class="login-1">
            <router-link to="/"><img src="/static/public/images/login/logo.png"></router-link>
        </div>
        <div class="login-2">
            <span class="login-2-txtBigger">注册</span>
            <span>/Sign Up</span>
        </div>
        <div class="login-3">
            <div class="login-3-1 signUp-1">
                <span>已有账号？</span>
                 <router-link to="login"><span class="login4-active">立即登录</span></router-link>
            </div>
            <div class="login-company">
                <div class="login-3-2 bottomLine">
                    <input placeholder="请输入邮箱" id="login-company-input1">
                </div>
                <div class="sce_line" id="login-company-sce_line-1"></div>
                <div class="login-3-2 bottomLine">
                    <input placeholder="请输入企业名称"  id="login-company-input2">
                </div>
                <div class="sce_line" id="login-company-sce_line-2"></div>

                <div class="login-3-2 bottomLine">
                    <input placeholder=" 请输入由字母和数字组成的6-16位密码"  id="login-company-input3" type="password">
                </div>
                <div class="sce_line" id="login-company-sce_line-3"></div>
            </div>
        </div>
        <div class="login-5" style="margin-top: 50px;">注册</div>
        <div class="signUp-2">
            <span> 恭喜您已注册成功，<span>3</span>秒后自动跳转登录</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>

</style>