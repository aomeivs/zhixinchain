<template>
    <div class="wrap" id="app">
        <div class="component-index">
            <!--头部-->
            <div class="head_fixed"  id="nav-container">
                <div id="header">
                    <a href="Homepage.html">
                        <img src="/static/public/images/index/logo.png" alt=""  class="logo" style="border: 0px;"/>
                    </a>
                    <ul id="menu" class="menu zi18">

                        <li data-menuanchor="index" class="cur select" id="home1">首页</li>

                        <li data-menuanchor="about" id="home2" class="select">关于职信链</li>

                        <li data-menuanchor="technical" id="home3" class="select">技术架构</li>

                        <li data-menuanchor="team" id="home4" class="select">团队优势</li>

                        <li data-menuanchor="buy" id="home5"><span class="buy">购买</span></li>

                        <li  style="display: block; width: 120px;">
                                                    <!--企业-->
                        <dropdown trigger="custom" :visible="visible" style="margin-left: 20px ;">
                            <a href="javascript:void(0)" @click.stop="handleOpen()">
                                控制台
                                <icon type="arrow-down-b"></icon>
                            </a>
                            <dropdown-menu slot="list">
                                <div class="head-menu-userInfo">
                                    <div class="clearFix head-menu-company-diy">
                                        <span>青岛网络科技特别开心有限公司</span>
                                    </div>
                                    <div class="line head-menu-uline"></div>
                                    <div class="clearFix head-menu-u1">
                                        <span class="left h-m-u-1">支持员工数量</span>
                                        <span class="right">40</span>
                                    </div>
                                    <div class="clearFix head-menu-u2">
                                        <span class="left h-m-u-1">有效期至</span>
                                        <span class="right">2018.11.19</span>
                                    </div>
                                    <div class="line head-menu-uline"></div>
                                    <div class="clearFix head-menu-u3">
                                    <span class="left">
                                        <badge dot>
                                            <a href="#" class="head-message-badge">我的优惠券</a>
                                        </badge>
                                    </span>
                                        <span class="right">
                                        <a href="#" class="head-message-badge">
                                            <Icon type="android-exit"></Icon>
                                            <span>退出</span>
                                        </a>
                                    </span>
                                    </div>
                                </div>
                            </dropdown-menu>
                        </dropdown>
                        <!--个人-->
                        <dropdown trigger="custom" :visible="visible" style="margin-left: 20px ;display: none">
                            <a href="javascript:void(0)" @click.stop="handleOpen()">
                                控制台
                                <icon type="arrow-down-b"></icon>
                            </a>
                            <dropdown-menu slot="list">
                                <div class="head-menu-userInfo" style="width: 110px;">
                                    <div class="clearFix head-menu-person-diy">
                                        <span>周累了</span>
                                    </div>
                                    <div class="line head-menu-uline"></div>
                                    <div class="clearFix head-menu-person-diy span-hand">
                                        <span >退出</span>
                                    </div>
                                </div>
                            </dropdown-menu>
                        </dropdown>
                            
                            
                            </li>

                        <li class="loginAndSignIn" style="width: 205px; display: none;">
                            <span class="span1">登录</span>
                            <span class="span2">注册</span>
                        </li>

                    </ul>
                    <div  style="clear: both"></div>
                </div>
            </div>
            <!--首页介绍内容-->
            <div id="text_lt">

                <div id="content1">
                    <!--index 结束 头部 大banner-->
                    <div class="section" id="index" >


                        <!--banner开始-->
                        <div style="background: url(/static/public/images/index/s1.png) center no-repeat; min-width: 1200px;margin: 0 auto;height: 759px;">

                        </div>
                        <div class="content1-2">
                            <div class="buyNow" id="showBuyContent2">立即加入</div>
                        </div>
                        <!--banner结束-->
                        <!-- 添加区块数据统计部分-->
                        <div class="qk_jiedianNum">
                            <div class="qk_jiedianNum_1">
                                <img src="/static/public/images/index/jiedian_1.png">
                                <div class="qk_jiedianNum_1_1">
                                    <p class="p1" id="jk_heightNum">5,825,386</p>
                                    <p class="p2">区块高度</p>
                                </div>
                            </div>
                            <div class="qk_jiedianNum_1">
                                <img src="/static/public/images/index/jiedian_2.png">
                                <div class="qk_jiedianNum_1_1">
                                    <p class="p1"id="jk_nodeNum">5,825,386</p>
                                    <p class="p2">节点数</p>
                                </div>
                            </div>
                            <div class="qk_jiedianNum_1">
                                <img src="/static/public/images/index/jiedian_3.png">
                                <div class="qk_jiedianNum_1_1">
                                    <p class="p1" id="jk_userNum">5,825,386</p>
                                    <p class="p2" >用户量</p>
                                </div>
                            </div>
                            <div class="qk_jiedianNum_1 qk_jiedianNum_2">
                                <img src="/static/public/images/index/jiedian_4.png">
                                <div class="qk_jiedianNum_1_1">
                                    <p class="p1" id="jk_dealNum">5,825,386</p>
                                    <p class="p2" >24小时交易笔数</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div id="content2">
                    <!--about 开始-->
                    <div class="section" id="about">
                        <!--标题-->
                        <div class="title" >
                            <img src="/static/public/images/index/title_l.png" />
                            <p class="zi48">职信是什么</p>
                            <img src="/static/public/images/index/title_r.png" />
                        </div>
                        <!--小标题-->
                        <div class="title2 zi18" >
                            <p>
                                职信是一个人的职场行为客观记录仪，记录例如担任职位、劳动合同起止时间、薪水情况、每月考勤情况等
                            </p>
                        </div>
                        <!--内容-->
                        <div class="part-2">
                            <div class="part-2-1" style="margin-right: 40px;">
                                <p class="zi24">
                                    对企业来说，<br />职信是奇效的<span>管人工具</span>和<span>阅人工具</span>
                                </p>
                                <div class="part-2-2">
                                    <img src="/static/public/images/index/part2-1.png"/>
                                    <p class="zi14">
                                        在职信链中，由企业方记录员工的职业履历信息，例如员工岗位信息、工作成绩、奖惩记录等等。员工在更换工作单位后，这些信息会跟随员工到下一家工作单位。由于区块链底层技术的性质，决定着这些信息永远不可篡改。
                                    </p>
                                </div>
                                <div class="part-2-2">
                                    <img src="/static/public/images/index/part2-2.png" style="margin-top:-10px;">
                                    <p class="zi14">
                                        通过职信链，企业可全方位准确、真实地了解员工的工作经历等。
                                    </p>
                                </div>
                            </div>

                            <div class="part-2-1" style="margin-left: 40px;">
                                <p class="zi24">
                                    对员工来说，<br />职信是可信的个人数字资产
                                </p>
                                <div class="part-2-2" style="margin-top:80px;">
                                    <img src="/static/public/images/index/part2-3.png" style="margin-top:-10px;">
                                    <p class="zi14">
                                        职信链是功德本。员工努力工作就是积攒信用，为明天积累，为未来打好基础。职信就是自己未来价值最好的凭证。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="white-space">
                        </div>
                    </div>
                    <!--about 结束-->

                    <!--technical 开始-->
                    <div class="section" id="technical">
                        <!--标题-->
                        <div class="title">
                            <img src="/static/public/images/index/title_l.png" />
                            <p class="zi48">职信业务介绍</p>
                            <img src="/static/public/images/index/title_r.png" />
                        </div>
                        <!--小标题-->
                        <div class="title3 zi18">
                            <p>
                                职业信用是指受信人从事某一职业或担任某一职位时，所表现出来的关于职业技能、 职业道德和各方面素质的综合记录和评估，简单的说职业信用就是指职业人在诚信度、 合规度、 履约度方面的信誉和能力。 在企业中，员工普遍自我驱动力弱，企业需要花成本做管理，效果却往往不尽如人意。职信链可以能增强员工的自我驱动力，极大节省了企业的培训成本和管理成本，使工作效率大大提高。
                            </p>
                        </div>
                        <!--内容-->
                        <div class="part3">
                            <img src="/static/public/images/index/mode1.png"/>
                        </div>

                    </div>
                    <!--technical 结束-->
                </div>
                <div id="content3">
                    <!--page4 开始-->
                    <div class="section" id="page4">
                        <!--标题-->
                        <div class="title">
                            <img src="/static/public/images/index/title_l.png" />
                            <p class="zi48">技术介绍</p>
                            <img src="/static/public/images/index/title_r.png" />
                        </div>
                        <!--小标题-->
                        <div class="title2 zi18">
                            <p>
                                底层技术框架：Hyperledger   Fabric   公有链
                            </p>
                        </div>
                        <!--内容-->
                        <div class="title4 zi18">
                            <p>
                                职信链是一套自主迭代研发的独立区块链，实现了去中心化数据数据管理的底层<br />
                                原始代码fork了Hyperledger fabric，在此基础上结合自身承载应用的特性和未来生态建设的考量，进行了大量的开发和扩展形成了职信系统专属的区块链。
                            </p>
                        </div>
                        <div class="part3">
                            <img src="/static/public/images/index/mode2.png"/>
                        </div>
                    </div>
                    <!--page4 结束-->

                    <!-- 数据动态部分-->
                    <div class="title">
                        <img src="/static/public/images/index/title_l.png" />
                        <p class="zi48">数据动态</p>
                        <img src="/static/public/images/index/title_r.png" />
                    </div>
                    <div class="qk_numShow">
                        <table cellpadding="0" cellspacing="0" class="qk_numShow_table" id="table_jknum">
                            <tr class="qk_numShow_title_tr">
                                <th class="qk_numShow_title_th" width="150">区块高度</th>
                                <th width="150">交易数</th>
                                <th>区块哈希</th>
                                <th width="123">时间</th>
                            </tr>
                            <tr class="qk_numShow_tr">
                                <td class="color_blue">8088518</td>
                                <td>3</td>
                                <td>A6281C33EEA8F69F15AA18F7D8CDFA36C43765B02B1CE0B06D00134F8A18596D</td>
                                <td>564042950</td>
                            </tr>
                            <tr class="qk_numShow_tr">
                                <td class="color_blue">8088518</td>
                                <td>3</td>
                                <td>A6281C33EEA8F69F15AA18F7D8CDFA36C43765B02B1CE0B06D00134F8A18596D</td>
                                <td>564042950</td>
                            </tr>
                            <tr class="qk_numShow_tr">
                                <td class="color_blue">8088518</td>
                                <td>3</td>
                                <td>A6281C33EEA8F69F15AA18F7D8CDFA36C43765B02B1CE0B06D00134F8A18596D</td>
                                <td>564042950</td>
                            </tr>
                            <tr class="qk_numShow_tr">
                                <td class="color_blue">8088518</td>
                                <td>3</td>
                                <td>A6281C33EEA8F69F15AA18F7D8CDFA36C43765B02B1CE0B06D00134F8A18596D</td>
                                <td>564042950</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div id="content4" >

                    <!--team 开始-->
                    <div class="section" id="team">
                        <!--标题-->
                        <div class="title">
                            <img src="/static/public/images/index/title_l.png" />
                            <p class="zi48">为什么是我们？</p>
                            <img src="/static/public/images/index/title_r.png" />
                        </div>

                        <!--内容-->
                        <div class="part3">
                            <img src="/static/public/images/index/mode3.png" style="display: block;margin: 0 auto"/>
                        </div>
                    </div>
                    <!--team 结束-->

                    <!--page6 开始-->
                    <div class="section" id="page6">
                        <!--标题-->
                        <div class="title">
                            <img src="/static/public/images/index/title_l.png" />
                            <p class="zi48">团队核心成员</p>
                            <img src="/static/public/images/index/title_r.png" />
                        </div>
                        <!--小标题-->
                        <div class="title3 zi18">
                            <p>
                                团队中技术开发人员占60%以上，团队内有专业的区块链架构和开发专家，从底层区块链技术到业务系统再到面向用户的前端表达，团队内人才类型丰富且都具有丰富的开发实践经验。
                            </p>
                        </div>
                        <!--内容-->
                        <div class="part3" style="position: relative;">
                            <div class="part-6">
                                <img src="/static/public/images/index/team/img01.png"/>
                                <img src="/static/public/images/index/team/img02.png" style="margin-left: 80px;margin-right: 80px;"/>
                                <img src="/static/public/images/index/team/img03.png"/>
                            </div>
                            <div class="part-6">
                                <img src="/static/public/images/index/team/img04.png"/>
                                <img src="/static/public/images/index/team/img05.png" style="margin-left: 80px;margin-right: 80px;"/>
                                <img src="/static/public/images/index/team/img06.png"/>
                            </div>
                            <div class="part-6">
                                <img src="/static/public/images/index/team/img07.png"/>
                                <img src="/static/public/images/index/team/img08.png" style="margin-left: 80px;margin-right: 80px;"/>
                                <img src="/static/public/images/index/team/img09.png"/>
                            </div>
                            <div class="part-6">
                                <img src="/static/public/images/index/team/img10.png" style="margin-right: 40px;"/>
                                <img src="/static/public/images/index/team/img11.png" style="margin-left: 40px;"/>
                            </div>

                        </div>


                    </div>
                    <!--page6 结束-->
                </div>
                <div id="content5">

                    <!--buy 开始-->
                    <div class="section" id="buy">
                        <!--标题-->
                        <div class="title">
                            <img src="/static/public/images/index/title_l.png" />
                            <p class="zi48">入驻平台资费</p>
                            <img src="/static/public/images/index/title_r.png" />
                        </div>

                        <!--内容-->
                        <div class="part3 part-7">
                            <img src="/static/public/images/index/mode4.png"/>
                        </div>
                    </div>
                    <!--buy 结束-->
                    <!--page8 购买 开始-->
                    <div class="section" id="page8">
                        <div id="goumai">

                        </div>
                        <p class="zi24 part-8">现在只需首付30%，即可享受预售折扣活动</p>

                        <div class="part-8-1" >
                            <img src="/static/public/images/index/zk/zk4.png"/>
                            <img src="/static/public/images/index/zk/zk5-d.png"/>
                            <img src="/static/public/images/index/zk/zk6-d.png"/>

                        </div>
                        <div class="part-8-2" >
                            <img src="/static/public/images/index/zk/zk7-d.png"/>
                            <img src="/static/public/images/index/zk/zk8-d.png"/>
                        </div>
                        <div id="showBuyContent" class="part-8-3 zi24">
                            立即抢购
                        </div>

                    </div>
                    <!--page8结束-->

                    <!--page9 常见问题 开始-->
                    <div class="section" id="page9">
                        <!--标题-->
                        <div class="title">
                            <img src="/static/public/images/index/title_l.png" />
                            <p class="zi48">常见问题</p>
                            <img src="/static/public/images/index/title_r.png" />
                        </div>

                        <!--内容-->
                        <!--问题回答-->
                        <div class=" part-9">
                            <img src="/static/public/images/index/ques-1.png"/>
                            <img src="/static/public/images/index/ques-2.png"/>
                            <img src="/static/public/images/index/ques-3.png"/>
                            <img src="/static/public/images/index/ques-4.png"/>
                        </div>

                        <!--底部-->
                        <div class="backBase">
                            <div class="tabAll">
                                <div class="tabOne" style="float:left; width:432px;    height: 100%; ">
                                    <div class="imgSpace" style="padding-top: 40px;">
                                        <img class="img" src="/static/public/images/index/footer/tel.png" >
                                        <span>全国客服电话</span>
                                    </div>
                                    <div class="textSpace">
                                        <p>400-6190828</p>
                                        <p>0532-80913319（总部）</p>
                                        <p>010-56136755（北京）</p>
                                    </div>

                                    <div class="imgSpace">
                                        <img src="/static/public/images/index/footer/time.png"  class="img">
                                        <span>服务时间</span>
                                    </div>
                                    <div class="textSpace">
                                        <span>周一至周日 09:00-18:00</span>
                                    </div>
                                    <div class="imgSpace">
                                        <img src="/static/public/images/index/footer/qq.png" class="img">
                                        <span>QQ客服</span>
                                    </div>
                                    <div class="textSpace">
                                        <span><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=1458203114&amp;site=qq&amp;menu=yes">客服1</a></span>
                                        <span><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=1561658221&amp;site=qq&amp;menu=yes">客服2</a></span>
                                    </div>
                                </div>

                                <div class="tabTwo" style="float:left; width:414px;     margin-top: 22px;">

                                    <div class="imgSpace">
                                        <img src="/static/public/images/index/footer/add.png" class="img">
                                        <span>总部服务中心</span>
                                    </div>
                                    <div  class="textSpace">
                                        <p>青岛市新疆路8号中联自由港湾A座4楼中英金融科技孵化器英网股份</p>
                                    </div>
                                    <div class="imgSpace" style="margin-top: 30px;">
                                        <img src="/static/public/images/index/footer/add.png" class="img">
                                        <span>北京分公司</span>
                                    </div>
                                    <div  class="textSpace">
                                        <p>北京市朝阳区光华路9号世贸天阶南区A座5楼国际大学创新联盟一带一路合作中心英网股份</p>
                                    </div>
                                </div>
                                <div class="tabThree" style="float:left; width:430px;     height: 100%; ">
                                    <div class="imgSpace">
                                        <img src="/static/public/images/index/footer/logo2.png">
                                    </div>
                                    <div class="imgFloat">
                                        <img src="/static/public/images/index/footer/weixin.jpg" style="width: 80px;">
                                        <span>微信公众号</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <!--底部结束-->

                    </div>
                    <!--page8结束-->
                </div>
                <div id="content6"></div>


            </div>

        </div>
    </div>
</template>

<script>
export default {
  name: 'IndexGuide',
    data :function() {
        return {
            visible: false
        }
    },
    methods: {
        handleOpen :function() {
            this.visible = !this.visible;
        },
        closeModal:function(){
            this.visible = false;
        },
        downloadImageAll(){
            var imgs = document.querySelectorAll('.vouchers-3-1-1');
            for(imgData in imgs){
                html2canvas(imgs[imgData],
                    {
                        onrendered: function (canvas) {
                            var a = document.createElement('a');
                            // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
                            a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
                            a.download = 'somefilename-'+Date.now()+'.jpg';
                            a.onclick=function click(){}
                            a.click();
                        }
                    }
                );
            }
        }
    },
    mounted:function() {


// documtnt.title动态实现，这个不用拷贝。
        this.$route.matched.forEach(function(rec) {
            document.title=rec.meta.title;
        })



// 在vue中使用jQuery.把这里的jQuery => $
        var $aside = jQuery("#header>ul>.select");
        var $section_pos  =jQuery("#content1,#content2,#content3,#content4");
        $aside.each(function(index) {
            jQuery(this).on("click",function(){
                var pox = jQuery($section_pos[index]);
                jQuery('html,body').stop().animate({scrollTop: pox.position().top}, 200);
            })
        });

        /**scroll even**/

        var p1 = jQuery("#content1");
        var p2 = jQuery("#content2");
        var p3 = jQuery("#content3");
        var p4 = jQuery("#content4");
        var p5 = jQuery("#content6");

        jQuery(window).scroll(function(){

            if(jQuery(window).scrollTop()>=p1.position().top&&jQuery(window).scrollTop()<p2.position().top){
                jQuery($aside[0]).siblings().removeClass("cur");
                jQuery($aside[0]).addClass("cur");
            }
            if(jQuery(window).scrollTop()>=p2.position().top&&jQuery(window).scrollTop()<p3.position().top){
                jQuery($aside[1]).siblings().stop().removeClass("cur");
                jQuery($aside[1]).addClass("cur");
            }
            if(jQuery(window).scrollTop()>=p3.position().top&&jQuery(window).scrollTop()<p4.position().top){
                jQuery($aside[2]).siblings().removeClass("cur");
                jQuery($aside[2]).addClass("cur");
            }
            if(jQuery(window).scrollTop()>=p4.position().top&&jQuery(window).scrollTop()<p5.position().top){
                jQuery($aside[3]).siblings().removeClass("cur");
                jQuery($aside[3]).addClass("cur");
            }

        });

        //动态添加头部区块统计数据
        var arr_countNum={jk_heightNum:'122',jk_nodeNum:'3,13,333',jk_userNum:'6,666,666',jk_dealNum:'8,888'};
        function change_jkNum(arr_countNum){
            jQuery('#jk_heightNum').text(arr_countNum.jk_heightNum);
            jQuery('#jk_nodeNum').text(arr_countNum.jk_nodeNum);
            jQuery('#jk_userNum').text(arr_countNum.jk_userNum);
            jQuery('#jk_dealNum').text(arr_countNum.jk_dealNum);
        }
        // 动态添加table
        var arr_table = [{jukuai_height:'8088518',deal_num:'5',code:'A6281C33EEA8F69F15AA18F7D8CDFA36C43765B02B1CE0B06D00134F8A18596D',date:'564042950'},
            {jukuai_height:'81518',deal_num:'5',code:'A6281C33EEA8F69F15AA18F7D8CDFA36C43765B02B1CE0B06D00134F8A18596D',date:'564042950'},
            {jukuai_height:'8088518',deal_num:'5',code:'A6281C33EEA8F69F15AA18F7D8CDFA36C43765B02B1CE0B06D00134F8A18596D',date:'564042950'},
            {jukuai_height:'8088518',deal_num:'5',code:'A6281C33EEA8F69F15AA18F7D8CDFA36C43765B02B1CE0B06D00134F8A18596D',date:'564042950'}];
        var tableHtmlHead=' <tr class="qk_numShow_title_tr">'+
            '<th class="qk_numShow_title_th" width="150">区块高度</th>'+
            '<th width="150">交易数</th>'+
            '<th>区块哈希</th>'+
            '<th width="123">时间</th>'+
            '</tr>';
        function tableInit(arr_table) {
            var tableHtmlContent = '';
            for(item in arr_table){
                tableHtmlContent+='<tr class="qk_numShow_tr">'+'<td class="color_blue">'+arr_table[item].jukuai_height+'</td>'
                    +'<td>'+arr_table[item].deal_num+'</td>'
                    +'<td>'+arr_table[item].code+'</td>'
                    +'<td>'+arr_table[item].date+'</td>';
            }
            jQuery('#table_jknum').html(tableHtmlHead+tableHtmlContent)
        }

        // 初始化
        jQuery(document).ready(function() {
            change_jkNum(arr_countNum);
            tableInit(arr_table);
        });

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
