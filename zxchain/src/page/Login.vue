<template>
<div>
    <div id='particles-js'></div>
    <div class="wrap login" id="app" >
        <div class="login-1">
            <router-link to="/"><img src="/static/public/images/login/logo.png"></router-link>
        </div>
        <div class="login-2">
            <span class="login-2-txtBigger">登录</span>
            <span>/Sign In</span>
        </div>
        <div class="login-3">
            <div class="login-3-1 bottomLine">
                <span class="span1" :class = "{active:showToggle}" id="company" v-on:click="toogleType('company')">企业</span>
                <span class="span2" :class = "{active:!showToggle}" id="person" v-on:click="toogleType('person')">个人</span>
            </div>
            <transition>
                <div v-if="showToggle" class="login-company">
                    <div class="login-3-2 bottomLine">
                        <tooltip :disabled="user.valid" placement="right" :always='true'>
                        <input placeholder="请输入邮箱" v-model="user.mail" id="login-company-input1" @blur="animateWidth('mail','blur')" @focus="animateWidth('mail','focus')" @keyup.enter="submit(showToggle)">
                        <div slot="content">
                        <p style="max-width: 100px; word-wrap: break-word; white-space: normal;">请输入邮箱</p>
                        </div>
                        </tooltip>
                    </div>
                    <div class="sce_line" id="login-company-sce_line-1" :class="{w0:!user.animate,w100:user.animate,'w100 valid':!user.valid}"></div>
                    <div class="login-3-2 bottomLine">
                        <tooltip :disabled="cpwd.valid" placement="right" :always='true'>
                        <input placeholder="请输入密码" v-model="cpwd.pwd" id="login-company-input2" type="password" @blur="animateWidth('c-pwd','blur')" @focus="animateWidth('c-pwd','focus')">
                        <div slot="content">
                        <p style="max-width: 100px; word-wrap: break-word; white-space: normal;">请输入密码</p>
                        </div>
                        </tooltip>
                    </div>
                    <div class="sce_line" id="login-company-sce_line-2" :class="{w0:!cpwd.animate,w100:cpwd.animate,'w100 valid':!cpwd.valid}"></div>
                </div>

                <div v-if="!showToggle" class="login-person">
                    <div class="login-3-2 bottomLine">
                        <input placeholder="请输入身份证号码" id="login-person-input1">
                    </div>
                    <div class="sce_line" id="login-person-sce_line1"></div>
                    <div class="login-3-2 bottomLine">
                        <input placeholder="请输入密码" id="login-person-input2" type="password">
                    </div>
                    <div class="sce_line" id="login-person-sce_line2"></div>
                </div>
            </transition>
            
        </div>
        <div class="login-4">
            <router-link to="signup"><span class="span1 login4-active" id="zhuce-now">立即注册</span></router-link>
            <router-link to="getpwd"><span class="span2" id="getBackMsg">找回密码</span></router-link>
        </div>
        <div class="login-5" v-on:click="submit(showToggle)">登录</div>
    </div>
</div>

</template>
<script>
import 'particles.js';
import { mapMutations,mapActions,mapState } from 'vuex'
export default{
    name: 'Login',
    data () {
        return {
            user:{
                mail:'',
                // 是否显示验证条,true 时 width:100%,false 时 width:0%,默认false
                animate:false,
                // 是否 disabled tooltip,默认true，为不显示。
                valid:true
            },
            cpwd:{
                pwd:'',
                animate:false,
                valid:true
            },
            showToggle:true
        }
    },
    methods: {
        // 切换企业和个人,name暂时无用
        toogleType(name){
            this.showToggle=!this.showToggle;
        },
        // 失去焦点和得到焦点的验证方法，name为要验证的字段名,type为blur或focus
        animateWidth(name,type){
            if(name=='mail'){
                if(this.user.mail!=''){
                    this.user.valid=true;
                }else{
                    this.user.valid=false
                }
                if(type=='blur'){
                    this.user.animate=false
                }else{
                    this.user.animate=true  
                }
            }
            if(name=='c-pwd'){
                if(this.cpwd.pwd!=''){
                    this.cpwd.valid=true;
                }else{
                    this.cpwd.valid=false
                }
                if(type=='blur'){
                    this.cpwd.animate=false
                }else{
                    this.cpwd.animate=true  
                }
            }
        },
        submit(type){
            if(type){
                this.animateWidth('mail')
                this.animateWidth('c-pwd')
                // 企业
                if(!this.user.mail){
                    this.user.valid = false;
                    this.$Message.info('用户名不能为空');
                    return ;
                }else{
                    this.user.valid=true;
                }
                if(JSON.parse(localStorage.getItem('user'))){
                    // if(JSON.parse(localStorage.getItem('user')).mail==='zhoulei'){
                    // this.login(localStorage.getItem('user'))
                    // this.$router.push({path:'/admin'})
                    // }
                }else{

                    this.login(JSON.stringify(this.user))

                    this.$router.push({path:'/admin/dashboard'})
                    this.$Message.info(this.$store.state.errorMessage);
                }
            }else{

            }
        },
        ...mapActions([
            'login', // 将 `this.login()` 映射为 `this.$store.dispatch('login')`
        ]),
        initParticlesJS () {
            particlesJS("particles-js", {
                "particles": {
                    "number": {
                        "value": 30,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#E9E9E9"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 12,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 50,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 300,
                        "color": "#DDDDDD",
                        "opacity": 0.4,
                        "width": 2
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": false,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 800,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 800,
                            "size": 80,
                            "duration": 2,
                            "opacity": 0.8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 400,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
        }
          },
    mounted(){
        this.$nextTick(() => {
            this.initParticlesJS()
        })
        if(JSON.parse(localStorage.getItem('user'))){
            if(JSON.parse(localStorage.getItem('user')).mail==='zhoulei'){
                this.$router.push({path:'/admin/dashboard'})
            }
        }else{
            this.$Message.info('请重新登录');
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login-company-sce_line-1.w0,#login-company-sce_line-2.w0{
    width: 0;
}
#login-company-sce_line-1.w100,#login-company-sce_line-2.w100{
    width: 100%;
}
#login-company-sce_line-1.w100.valid,#login-company-sce_line-2.w100.valid{
    width: 100%;
    background: red;
}
</style>