<template>
    <div id="app">
        <TestNode :dtree="list"></TestNode>
    </div>
</template>

<script>
import TestNode from '@/page/TreeNode' 
    export default {
        components:{TestNode},
        data:function(){
            return {
                list:[
                    {
                        title:'1',
                        list:[
                            {
                                title:'1-1',
                                list:[
                                    {
                                       title:'1-1-1', 
                                    }
                                ]
                                
                            }
                        ]
                    }
                ]
            }
        }  
    }
</script>

<style scoped>

</style>