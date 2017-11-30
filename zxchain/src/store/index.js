import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var treeData =
{
    id:'0',
    title:'青岛英网资讯股份有限公司',
    root:true,
    dataList:[
        {
            id:'1',
            title:'总裁办',
            dataList:[
                {
                    id:'11',
                    title:'创始人-老总',
                    photo:'/static/public/images/tree-photo1.png'
                }
            ]
        },
        {
            id:'2',
            title:'技术中心',
            open:true,
            dataList:[
                {
                    id:'3',
                    title:'周蕾',
                    photo:'/static/public/images/tree-photo2.png'
                },
                {
                    id:'4',
                    title:'李文静',
                    photo:'/static/public/images/tree-photo3.png'
                },
                {
                    id:'5',
                    title:'PHP开发',
                    dataList:[
                        {
                            id:'6',
                            title:'王小笨',
                            photo:'/static/public/images/tree-photo1.png'
                        }
                    ]
                }
            ]
        },
        {
            id:'7',
            title:'产品部门',
            dataList:[
                {
                    id:'10',
                    title:'庞丁畅',
                    photo:'/static/public/images/tree-photo1.png'
                }
            ]
        },
        {
            id:'8',
            title:'行政部门',
            dataList:[
                {
                    id:'9',
                    title:'衣晶晶',
                    photo:'/static/public/images/tree-photo1.png'
                }
            ]
        }
    ]
}

const state = {
    spinShow:true,
    treeData:treeData,
    errorMessage:'',
    accordionOpen:true
}
state.user = JSON.parse(localStorage.getItem('user'))||{};

const mutations = {
    login:function(state,user){
        state.errorMessage='';
        if(JSON.parse(user)){
            if(JSON.parse(user).mail=='zhoulei'){
                state.errorMessage='登录成功'
                localStorage.setItem('user',user);
                Vue.set(state,'user',JSON.parse(user));
            }else{
                state.errorMessage='用户不存在'
            }
        }
    },
    sigout:function(state){
        localStorage.removeItem('user');
        delete state.user
    },
    accordionToggle(state){
        state.accordionOpen =! state.accordionOpen;
    },
    loading(state,status){
        state.spinShow=status;
    }
}

const actions = {
    login({commit},user){
        commit('login',user)
    },
    sigout({commit}){
        commit('sigout')
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})



