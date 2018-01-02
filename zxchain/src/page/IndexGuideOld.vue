<template>
<div class="wrap index-lt" id="app">
    <div class="index-lt-1">
        <div class="index-lt-1-1">
            <div class="floatLeft-99 index-lt-1-1-1">
                <router-link to="/"><img src="/static/public/images/login/logo.png"></router-link>
            </div>
            <div class="floatLeft-99 index-lt-1-1-2">
                <span style="color: #ff500a;">购买</span>
                <span>订单查询</span>
            </div>
            <div class="floatLeft-99 index-lt-1-1-3">
                <router-link to="login"><span class="span1">登录</span></router-link>
                <router-link to="SignUp"><span class="span2">注册</span></router-link>
            </div>
            <div style="clear: both">
            </div>
        </div>
    </div>
    <div  class="index-lt-2" >

    </div>
    <div class="index-lt-3">
        <div class="index-lt-3-1" id="">立即加入</div>
    </div>

    <div class="index-lt-4">
        <div class="index-lt-4-1">
            <img src="/static/public/images/index/title-l.png">
            <span class="">职信是什么</span>
            <img src="/static/public/images/index/title-r.png">
        </div>

        <div class="index-lt-4-2">
            <span>职信是一个人的职场行为客观记录仪，记录例如担任职位、劳动合同起止时间、薪水情况、每月考勤情况等</span>
        </div>

        <div class="index-lt-4-3">
            <p>对企业来说，<br>职信是奇效的<span class="bule-font">管人工具</span>和<span class="bule-font">阅人工具</span></p>
            <div class="index-lt-4-3-1">
                <img src="/static/public/images/index/part2-1.png" class="img-space">
                <span class="span-space">在职信链中，由企业方记录员工的职业履历信息，例如员工岗位信息、工作成绩、奖惩记录等等。员工在更换工作单位后，这些信息会跟随员工到下一家工作单位。由于区块链底层技术的性质，决定着这些信息永远不可篡改。</span>
                <div style="clear: both"></div>
            </div>
            <div class="index-lt-4-3-2">
                <img src="/static/public/images/index/part2-2.png" class="img-space">
                <span class="span-space">通过职信链，企业可全方位准确、真实地了解员工的工作经历等。</span>
                <div style="clear: both"></div>
            </div>

        </div>
        <div class="index-lt-4-4">
            <p>对员工来说，<br>职信是可信的个人数字资产</p>
            <div class="index-lt-4-4-1">
                <img src="/static/public/images/index/part2-3.png" class="img-space">
                <span class="span-space">职信链是功德本。员工努力工作就是积攒信用，为明天积累，为未来打好基础。职信就是自己未来价值最好的凭证。</span>
                <div style="clear: both"></div>
            </div>
        </div>
        <div style="clear: both"></div>

    </div>
</div>
</template>

<script>
export default {
  name: 'IndexGuide',
  data () {
    return {
      msg: ''
    }
  },
  mounted:function() {
      this.$route.matched.forEach(function(rec) {
          document.title=rec.meta.title;
    })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
