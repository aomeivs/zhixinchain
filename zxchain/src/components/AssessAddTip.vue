<template>
    <div>
        <div class="component-assess-add-tip" v-if="data.show">
            <poptip width="200" placement="top">
                <i-button type="text" size="small">查看</i-button>
                <div class="api" slot="content">
                    {{data.date}}
                </div>
            </poptip>
            <poptip width="200" placement="top" v-model="visible">
                <i-button type="text" size="small">添加</i-button>
                <div class="api" slot="content">
                    <div>
                        <i-input placeholder="添加"></i-input>
                    </div>
                    <div style="padding:10px 0 ;">
                        <i-button type="text" size="small" @click="close">取消</i-button>
                        <i-button type="primary" size="small">保存</i-button>
                    </div>
                </div>
            </poptip>
        </div>
        <div class="component-assess-add-tip" v-else>
            <poptip width="200" placement="top" v-model="visible">
                <i-button type="text" size="small">添加</i-button>
                <div class="api" slot="content">
                    <div>
                        <i-input placeholder="添加"></i-input>
                    </div>
                    <div style="padding:10px 0 ;">
                        <i-button type="text" size="small" @click="close">取消</i-button>
                        <i-button type="primary" size="small">保存</i-button>
                    </div>
                </div>
            </poptip>
        </div>
    </div>
</template>

<script>
    export default {
        name:'assess-add-tip',
        props:['data'],
        data:function () {
            return {
                visible: false
            }
        },
        methods:{
            close () {
                this.visible = false;
            }
        }
    }
</script>

<style scoped>

</style>