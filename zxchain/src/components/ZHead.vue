<template>
    <div class="c-header">
        <div class="c-head-logo">
            <img src="/static/public/images/logo.png" width="334" alt="职信链LOGO">
        </div>
        <div class="c-head-menu">
            <ul class="head-menu-ul">
                <li>
                    <span>购买</span>
                </li>
                <li>
                    <span>职信在线搜索</span>
                    <!--<img src="/static/public/images/head-search.png" width="26" alt="职信链搜索按钮">-->
                </li>
                <li>
                    <div>
                        <!--badge count代表消息数 默认99封顶-->
                        <badge count="1">
                            <a href="#" class="head-message-badge"><img src="/static/public/images/head-mail.png" width="26" alt="消息(0)"></a>
                        </badge>
                    </div>
                </li>
                <li>
                    <div class="c-head-user">
                        <div class="user-photo">
                            <img src="/static/public/images/head-photo.png" width="39" alt="用户头像">
                            <span>{{this.user.mail}}</span>
                        </div>
                        <div>
                            <img src="/static/public/images/head-line.png" width="2" alt="">
                        </div>
                        <div class="user-logOut">
                            <img v-on:click="sigout" src="/static/public/images/head-exit.png" width="26" alt="退出">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'ZHead',
    methods:{
        sigout(){
            this.$store.dispatch('sigout')
            this.$router.push('/login')
        }
    },
    computed: {
        ...mapState([
        // 映射 this.user 为 store.state.user
        'user'
        ])
    }
}
</script>

<style scoped>

</style>