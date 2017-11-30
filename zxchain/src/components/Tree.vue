<template>
  <div class="employ-group">
        <div v-if="!tree.root" class="box group-box member-box">
            <div class="box-icon" @click="click" openValue="openValue">
                <template v-if="openValue==='.'">
                    <img :src="tree.photo" width="28" alt="图标" style="cursor:pointer;" v-on:click="employByID">
                </template>
                <template v-else>
                    <img src="/static/public/images/tree-group.png" width="19" alt="图标">
                    <img class="arrow-rotate-none" :class="{'arrow-rotate':open}" src="/static/public/images/tree-arrow.png" style="margin-left: 4px;" width="7" alt="">
                </template>
            </div>
            <div v-if="!editStatus" @click="edit" class="box-content">

                <template v-if="openValue==='.'">
                    <span v-on:click="employByID" style="cursor:pointer;">{{tree.title}}</span>
                </template>
                <template v-else>
                    <span>{{tree.title}}</span>
                </template>   
                
            </div>
            <div v-else class="box-content">
                <i-input v-model="groupName" placeholder="请输入..." size="small" style="width: 100px;"></i-input>
                <span v-on:click.stop="save(tree.id)">
                    <Icon type="checkmark-round" style="margin-left: 8px;margin-top: -2px; color: #607D8B;cursor: pointer;"></Icon>
                </span>
                <span v-on:click.stop="save(tree.id)">
                    <Icon type="arrow-return-right" style="margin-left: 8px;margin-top: -2px; color: #607D8B;cursor: pointer;"></Icon>
                </span>
            </div>
            <div v-if="tree.dataList && !tree.root && !editStatus" class="box-control">
                <dropdown @on-click="dropDown2" placement="bottom-end">
                    <a href="javascript:void(0)">
                        <Icon type="gear-a" style="font-size: 16px;"></Icon>
                        <!--<icon type="arrow-down-b"></icon>-->
                    </a>
                    <dropdown-menu slot="list">
                        <dropdown-item name="E">添加员工</dropdown-item>
                        <dropdown-item name="G">添加部门</dropdown-item>
                        <dropdown-item name="DG">删除部门</dropdown-item>
                    </dropdown-menu>
                </dropdown>
            </div>
        </div>
        <TreeGroup v-if="open" :tree="tree" v-for="tree in tree.dataList" key="tree.id"></TreeGroup>
    </div>
</template>

<script>
import TreeGroup from '@/components/Tree'
export default {
    components: {TreeGroup},
    name: 'TreeGroup',
    props:['tree'],
    data:function(){
        return {
            // 展开当前树,节点类型
            open:false,
            // 添加/编辑，部门
            groupName:'',
            tempName:'',
            // 编辑状态
            editStatus:false,
        }
    },
    computed:{
        openValue:function(){
            return !this.open&&this.tree.dataList?'+':(this.tree.dataList?'-':'.')
        }
    },
    mounted:function(){
        if(this.tree.open){
            this.open=true
        }else{
            this.tree.root?this.open=true:this.open;
        }
    },
    methods: {
        employByID(dot){
            this.$router.push({path:'employ'})
        },
        click:function(){
            this.open=!this.open
        },
        add:function(type){
            if(this.tree.dataList){
                var isGroup= type=='G'?true:false;
                if(isGroup){
                    var _this = this;
                    this.$Modal.confirm({
                        render:function(h){
                            return h('Input',{
                                props:{
                                    placeholder:'请输入部门名称'
                                },
                                on:{
                                    'input':function(val){

                                        _this.groupName = val
                                    }
                                }
                            })
                        },
                        onOk:function(){
                            if(_this.groupName==''){
                                _this.$Message.info('添加失败，内容不能为空！')
                                return;
                            }
                            _this.tree.dataList.push({id:_.uniqueId('tree_'),title:_this.groupName,dataList:[]});
                        },
                        onCancel:function(){

                        }
                    });
                }else{
                    var dataLists = _.filter(this.tree.dataList,function(item){
                        if(item.dataList){
                            return true;
                        }
                    })
                    var listLength = dataLists.length;
                    var oListLength = this.tree.dataList.length;
                    this.tree.dataList.splice(oListLength-listLength,0,{id:_.uniqueId('tree_'),title:'员工'+_.uniqueId(),photo:'/static/public/images/tree-photo-default.png'})
                }
                // 添加部门或员工时打开菜单
                this.open=true;
            }
        },
        edit:function(){
            if(!this.tree.dataList||this.tree.root) return;
            this.groupName = this.tree.title;
            this.tempName = this.tree.title;
            this.editStatus=!this.editStatus;
        },
        remove:function(id){
            prune(treeData.dataList,id)
        },
        // save && delete
        save:function(id){
            if(this.groupName===''){
                var _this = this;
                this.$Modal.confirm({
                        title: '确认删除？',
                        content: '<p>确认删除后，部门下成员将一并删除！</p>',
                        onOk: () => {
                        this.$Message.info('删除成功');
                prune(treeData.dataList,id)
            },
                onCancel: () => {
                    _this.tree.title =_this.tempName;
                    this.$Message.info('取消操作');
                }
            });
            }
            this.tree.title = this.groupName;
            this.editStatus=false;
        },
        dropDown2:function (v) {
            this.add(v)
            console.log(this.$store.state.treeData)
        }
    }
}
</script>
<style scoped>

</style>