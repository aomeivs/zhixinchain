// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview'
import VueParticles from 'vue-particles'
import _ from 'lodash'
import App from './App'
import router from './router'
import store from './store'

Vue.use(VueParticles)
Vue.use(iView)
Vue.config.productionTip = false
router.beforeEach(({meta,path},from,next)=>{
  // console.log(from)
  // window.vNew.$store.commit('loading',true)
  if(meta.auth===true){
    if(store.state.user && store.state.user.mail=='zhoulei'){
      document.title=meta.title;
      next()
    }else{
      router.push({path:'/login'})
    }
  }else{
    document.title=meta.title;
    next();
  }
  
})
// router.afterEach((to,from)=>{
  // window.vNew.$store.commit('loading',false)
// })
/* eslint-disable no-new */
var vNew = new Vue({
  el: '#app',
  router,
  store,
  render: (h) => {
    return h(App)
  }
})

window.vNew = vNew;
