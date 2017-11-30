<template>
<div class="wrap" id="app">
    <ZHead></ZHead>
    <div class="c-body" v-bind:style="{'margin-left':marginLeft}">
        <ZLeft @msg="msgShow"></ZLeft>
        <div class="c-body-container clearFix">
            <!--登录后的仪表盘页面   组件部分  -->
            <router-view></router-view>
        </div>
    </div>
    <ZMask></ZMask>
</div>
</template>

<script>
import ZHead from '@/components/ZHead'
import ZLeft from '@/components/ZLeft'
import ZMask from '@/components/Mask'
export default {
    components: {ZHead,ZLeft,ZMask},
    name: 'Admin',
    data () {
        return{
            
        }
    },
    methods: {
        msgShow(){
            console.log('----------------------------msgSHOW---------------------------')
        }
    },
    computed: {
        marginLeft(){
            if(!this.$store.state.accordionOpen){
                return '-320px'
            }else{
                return '0'
            }
        }
    },
    mounted:function(){
        
    }   
}
    
</script>

<style scoped>

</style>