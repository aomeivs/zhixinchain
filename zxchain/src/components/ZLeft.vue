<template>
    <div class="c-body-left left">
        <div v-if="isShowAccordion" class="c-accordion" v-on:click="accordionToggle">
            <Icon type="arrow-left-b" class="icon-c-accordion" v-bind:class="{active:!accordionOpen}"></Icon>
        </div>
        <div class="body-left-search">
            <auto-complete
                    v-model="value"
                    icon="ios-search"
                    :data="data"
                    placeholder="搜索员工"
                    @on-search="handleSearch"
                    style="width:290px">
            </auto-complete>
        </div>
        <div class="body-left-CName">
            <router-link to="dashboard" style="color:white;">职信链科技有限公司</router-link>
        </div>
        <div class="left-body-container">
            <!--在职员工-->
            <div class="tree-employ employ-on">
                <div class="employ-on-block">
                    <img class="employ-icon" src="/static/public/images/tree-employ.png" width="23" alt="在职员工">
                    <span class="employ-title">
                    在职员工
                </span>
                    <span class="employ-count">
                    (3)
                </span>
                </div>
            </div>

            <!--组件-树-->
            <div class="component-tree">
                <TreeGroup :tree='treeData'></TreeGroup>
            </div>

            <!--添加部门-->
            <div class="tree-addGroup">
                <icon type="plus-round"></icon><span>添加部门</span>
            </div>

            <!--系统设置-->
            <div class="tree-setting">
                <icon type="gear-a"></icon><span>系统设置</span>
            </div>

            <!--离职员工-->
            <div class="tree-employ employ-off">
                <div class="employ-on-block">
                    <img class="employ-icon" src="/static/public/images/tree-employ-off.png" width="23" height="23" alt="离职员工">
                    <span class="employ-title">
                    已离职员工
                </span>
                    <span class="employ-count">
                    (1)
                </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TreeGroup from '@/components/Tree';
import {mapMutations} from 'vuex'
export default {
    components: {TreeGroup},
    name: 'ZLeft',
    data () {
        return {
            value:'',
            data:[],
            isShowAccordion:false
        }
    },
    computed:{
       treeData:function(){
           return this.$store.state.treeData;
       },
       accordionOpen(){
           return this.$store.state.accordionOpen;
       } 
    },
    methods: {
        handleSearch : function(value) {
            this.data = !value ? [] : [
                value,
                value + value,
                value + value + value
            ];
        },
        ...mapMutations([
            'accordionToggle'
        ])
        
    },
    mounted:function(){
        this.$emit('msg');
        if(window.innerWidth<1600){
                this.isShowAccordion=true
            }
        window.onresize=function(){
            if(window.innerWidth<1600){
                this.isShowAccordion=true
            }else{
                this.isShowAccordion=false 
            }
        }.bind(this)
        
    }
}

// 树删除节点
function prune(array, id) {
    for (var i = 0; i < array.length; ++i) {
        var obj = array[i];
        if (obj.id === id) {
            array.splice(i, 1);
            return true;
        }
        if (obj.dataList) {
            if (prune(obj.dataList, id)) {
                if (obj.dataList.length === 0) {
                    // delete obj.dataList;
                    // array.splice(i, 1);
                }
                return true;
            }
        }
    }
}
</script>

<style scoped>

</style>