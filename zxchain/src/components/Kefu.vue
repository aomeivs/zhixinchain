<template>
    <div class="kefu-lt">
        <div class="kefu-lt-1">
            <div class="kefu-lt-1-left" v-show="open">
                <div class="kefu-lt-1-left-1"><span>客服电话</span></div>
                <div class="kefu-lt-1-left-2">
                    <p>全国：400-6190828</p>
                    <p>总部：0532-80913319</p>
                    <p>北京：010-57493123</p>
                </div>
            </div>
            <div class="kefu-lt-1-right">
                <img src="/static/public/images/kefu.png" @click="click_kefu()">
                <br>
                <span>联系客服</span>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        data:function(){
            return {
                open:false
            }
        },
        methods: {
            click_kefu:function(){
                this.open=!this.open
            }
        }
    }
</script>

<style scoped>

</style>