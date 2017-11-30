<template>
    <div>
        <template v-for="item in dtree">
            {{item.title}}
            <div>
                <Input v-model="value" placeholder="请输入..." style="width: 300px"></Input>
                {{value}}
            </div>
            <template v-if="item.list">
                {{item.list}}
                <Test1 :dtree="item.list"></Test1>
            </template>
        </template>
    </div>
</template>

<script>
import Test from './TreeNode' 
    export default {
        components:{Test},
        name:'Test1',
        props:['dtree'],
        data:function () {
            return {
                value:''
            }
        }
    }
</script>

<style scoped>

</style>