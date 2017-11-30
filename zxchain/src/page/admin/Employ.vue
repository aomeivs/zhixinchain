<template>
    <!--登录后的 员工 页面   组件部分  -->
    <div class="component-employ">
        <div class="employ-container">
            <!--编辑基础信息-->
            <div v-show="assessInfoBase6" class="edit-employ-base clearFix" style="overflow:hidden;">
                <Card style="width: 100%;">
                    <div class="clearFix">
                        <div class="left">
                            <div class="edit-info edit-2">
                                <div>
                                    <div>姓名</div>
                                    <div>
                                        <i-input class="form-el" placeholder="请输入" value="庞丁畅"></i-input>
                                    </div>
                                </div>
                                <div>
                                    <div>性别</div>
                                    <div>
                                        <i-select v-model="model1" class="form-el" placeholder="请选择">
                                            <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                                        </i-select>
                                    </div>
                                </div>
                            </div>
                            <div class="edit-info edit-3">
                                <div>
                                    <div>身份证号</div>
                                    <div>
                                        <i-input class="form-el" :disabled="true" placeholder="请输入" value="371327199001016415"></i-input>
                                    </div>
                                </div>
                                <div>
                                    <div>手机号</div>
                                    <div>
                                        <i-input class="form-el" placeholder="请输入" value="15805322430"></i-input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <label class="employ-base-photo" for="employ-base-photo">
                                <img src="/static/public/images/employ/employ-base-photo.png" width="166" height="166" alt="">
                                <div class="employ-base-photo-btn">
                                    更换头像
                                </div>
                            </label>
                            <input type="file" name="" style="display: none;" id="employ-base-photo">
                        </div>
                    </div>


                    <div class="edit-7">
                        <div>
                            <i-button type="ghost" class="edit-7-cancel" v-on:click="assessInfoShow('6')">取消</i-button>
                            <i-button type="primary" class="edit-7-ok">保存</i-button>
                        </div>
                    </div>

                </Card>
            </div>
            <!--基础信息-->
            <div v-show="!assessInfoBase6" class="employ-base clearFix">
                <div class="base-left left">
                    <div class="base-score">
                        <span class="score-1">职信总评分</span>
                        <span class="score-2">8.5</span>
                        <span class="score-3">分</span>
                    </div>
                    <div class="base-info">
                        <span class="base-name">
                            庞丁畅
                        </span>
                        <span class="base-sex">
                            性别：男
                        </span>
                        <span class="base-cardID">
                            身份证号：371327xxxxxxxx6415
                        </span>
                        <span class="base-phone">
                            手机号：158xxxx2430
                        </span>
                        <span class="base-edit">
                            <img v-on:click="assessInfoShow('6')" src="/static/public/images/employ/icon-employ-base-edit.png" width="38" alt="">
                        </span>
                    </div>
                </div>
                <div class="base-right right">
                    <span class="base-photo">
                        <img src="/static/public/images/employ/employ-base-photo.png" width="166" alt="">
                    </span>
                </div>
            </div>
            <div class="line"></div>


            <!--评价-->
            <div class="employ-assess">
                <div class="assess-operate clearFix overflow">
                    <!--选择所在单位，添加信息-->
                    <div class="operate-select left">
                        <dropdown placement="bottom-end" v-on:on-click="dropdown2">
                            <div class="select-text">
                                <span>就职于</span><span class="select-value">{{dropdown2_text}}</span><span>期间职信（目前在职）</span>
                                <icon type="arrow-down-b"></icon>
                            </div>
                            <dropdown-menu slot="list">
                                <dropdown-item name="职信链科技有限公司">职信链科技有限公司</dropdown-item>
                                <dropdown-item name="英网股份">英网股份</dropdown-item>
                            </dropdown-menu>
                        </dropdown>
                    </div>
                    <div v-show="!assessInfoBase5" class="operate-add right">
                        <i-button type="ghost" size="large" shape="circle" icon="plus" class="active" v-on:click="assessInfoShow('5')">添加年度总评</i-button>
                    </div>
                </div>

                <!--添加年度总评-->
                <div v-show="assessInfoBase5" class="add-assess-year clearFix overflow">
                    <Card style="width: 100%;">

                        <div class="edit-info edit-2">
                            <div>评价年份：</div>
                            <div>
                                <row class="form-el">
                                    <i-col span="12">
                                        <date-picker type="month" placement="bottom-end" placeholder="选择日期" style="width: 260px;font-size: 12px;"></date-picker>
                                    </i-col>
                                </row>
                            </div>
                        </div>
                        <div class="edit-info edit-3">
                            <div>评分情况：</div>
                            <div>
                                <i-select v-model="model1" class="form-el" placeholder="为员工年度总体表现评分">
                                    <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                                </i-select>
                                <div>

                                </div>
                            </div>
                        </div>

                        <div class="edit-info edit-6">
                            <div> 总评：</div>
                            <div>
                                <i-input type="textarea" :maxlength="500" :rows="10" style="width: 520px;" placeholder="请填写评语，500字以内"></i-input>
                            </div>
                        </div>

                        <div class="edit-7">
                            <div>
                                <i-button type="ghost" class="edit-7-cancel" v-on:click="assessInfoShow('5')">取消</i-button>
                                <i-button type="primary" class="edit-7-ok">保存</i-button>
                            </div>
                        </div>

                    </Card>
                </div>
                <!--展示年度总评-->
                <div v-show="!assessInfoBase5" class="assess-year clearFix overflow">
                    <div class="assess-year-container">
                        <div class="assess-box left">
                            <div class="box-head">
                                <div class="head-title">
                                    2016年度员工表现
                                </div>
                                <div class="head-timeLine">
                                    <img src="/static/public/images/icon-assess-year.png" width="10" alt="" height="10">
                                </div>
                            </div>
                            <div class="box-body">
                                <div class="body-1">
                                    <i-circle
                                            :size="160"
                                            :trail-width="4"
                                            :stroke-width="5"
                                            :percent="90"
                                            stroke-linecap="square"
                                            stroke-color="#43a3fb">
                                        <div class="circle-custom">
                                            <div class="custom-1"><span>9</span><span class="custom-1-2">分</span></div>
                                            <div class="custom-2 line"></div>
                                            <span class="custom-3">2016年度<br>员工表现</span>
                                        </div>
                                    </i-circle>
                                </div>
                                <div class="body-2">
                                    <div class="assess-title">2016年度总评</div>
                                    <div class="assess-desc">
                                        <div class="line"></div>
                                        <div>
                                            主导完成了小职了PC端、APP及微信微站共十几个版本的产品原型设计及需求文档撰写工作，输出质量及效率可以达到公司对产品经理岗位的要求。在产品思维、商业模式探索等方面取得了一些进步。
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="assess-box left">
                            <div class="box-head">
                                <div class="head-title">
                                    2015年度员工表现
                                </div>
                                <div class="head-timeLine">
                                    <img src="/static/public/images/icon-assess-year.png" width="10" alt="" height="10">
                                </div>
                            </div>
                            <div class="box-body">
                                <div class="body-1">
                                    <i-circle
                                            :size="160"
                                            :trail-width="4"
                                            :stroke-width="5"
                                            :percent="80"
                                            stroke-linecap="square"
                                            stroke-color="#43a3fb">
                                        <div class="circle-custom">
                                            <div class="custom-1"><span>8</span><span class="custom-1-2">分</span></div>
                                            <div class="custom-2 line"></div>
                                            <span class="custom-3">2015年度<br>员工表现</span>
                                        </div>
                                    </i-circle>
                                </div>
                                <div class="body-2">
                                    <div class="assess-title">2015年度总评</div>
                                    <div class="assess-desc">
                                        <div class="line"></div>
                                        <div>
                                            主导完成了小职了PC端、APP及微信微站共十几个版本的产品原型设计及需求文档撰写工作，输出质量及效率可以达到公司对产品经理岗位的要求。在产品思维、商业模式探索等方面取得了一些进步。
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="assess-info overflow">
                    <tabs v-model="name">
                        <tab-pane name="1" label="基本信息" icon="document-text">
                            <div v-show="name==1" class="component-assess-info-base" v-bind:class="{'tab-active':name==1}">
                                <div v-show="!assessInfoBase" class="assess-tab assess-info-base">
                                    <div class="employ-add">
                                        <i-button type="ghost" size="large" shape="circle" icon="plus" class="active" v-on:click="assessInfoShow(name)">添加基本信息</i-button>
                                    </div>
                                    <div class="employ-info">
                                        <div class="e-i-1">部门：</div>
                                        <div class="e-i-2">
                                            <ul>
                                                <div>
                                                    产品设计部
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="employ-info">
                                        <div class="e-i-1">职位：</div>
                                        <div class="e-i-2">
                                            <ul>
                                                <div>
                                                    产品经理
                                                </div>
                                                <li><Icon type="ios-timer-outline"></Icon>（ 历史职位：产品专员  2014.12.20 至 2015.12.19 ）</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="employ-info">
                                        <div class="e-i-1">薪资：</div>
                                        <div class="e-i-2">
                                            <ul>
                                                <div>
                                                    7000 元/月
                                                </div>
                                                <li><Icon type="ios-timer-outline"></Icon>（ 历史薪资：5000元/月  2014.12.20 至 2015.12.19 ）</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="employ-info">
                                        <div class="e-i-1">劳动合同：</div>
                                        <div class="e-i-2">
                                            <ul>
                                                <div>
                                                    2014.12.20 至 2019.12.19
                                                </div>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="employ-info">
                                        <div class="e-i-1" style="text-align: right;">劳动合同或其他法律纠纷：</div>
                                        <div class="e-i-2 pact">
                                            <ul>
                                                <li>
                                                    <div>
                                                        纠纷案件名称：泄露商业机密
                                                    </div>
                                                    <div>
                                                        审结时间：2016.11.30
                                                    </div>
                                                    <div>
                                                        审理结果：企业撤诉
                                                    </div>
                                                    <div>
                                                        <img src="/static/public/images/employ/ico-pact.png" width="100" height="100" alt="">
                                                    </div>
                                                </li>

                                                <li>
                                                    <div>
                                                        纠纷案件名称：泄露商业机密
                                                    </div>
                                                    <div>
                                                        审结时间：2016.11.30
                                                    </div>
                                                    <div>
                                                        审理结果：企业撤诉
                                                    </div>
                                                    <div>
                                                        <img src="/static/public/images/employ/ico-pact.png" width="100" height="100" alt="">
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div v-show="assessInfoBase" class="edit-assess-info-base">
                                    <Card style="width: 100%;">
                                        <div class="edit-1">
                                            <Icon type="android-alert" style="color:#ffbf00; font-size: 18px;margin-right: 8px;"></Icon>您只需填写员工变更的信息，未变更的不必填写。例如从总监晋升为总经理，您只需在下面的职位栏输入“总经理”，然后保存即可
                                        </div>
                                        <div class="edit-info edit-2">
                                            <div>职位：</div>
                                            <div>
                                                <i-input placeholder="请输入" class="form-el"></i-input>
                                            </div>
                                        </div>
                                        <div class="edit-info edit-3">
                                            <div>部门：</div>
                                            <div>
                                                <i-select v-model="model1" class="form-el">
                                                    <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                                                </i-select>
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="edit-info edit-4">
                                            <div>薪资：</div>
                                            <div>
                                                <div>
                                                    <i-input placeholder="请输入" class="form-el"></i-input>
                                                    <span>元/月</span>
                                                </div>
                                                <div style="margin-top: 15px;">
                                                    <i-switch size="large">
                                                        <span slot="open">显示</span>
                                                        <span slot="close">隐藏</span>
                                                    </i-switch>
                                                    该员工的职信被在线搜索查看时，薪资是否显示
                                                </div>
                                            </div>
                                        </div>
                                        <div class="edit-info edit-5">
                                            <div>新增劳动合同起止时间：</div>
                                            <div>
                                                <row class="form-el">
                                                    <i-col span="12">
                                                        <date-picker type="daterange" placement="top-end" placeholder="选择日期" style="width: 260px;font-size: 12px;"></date-picker>
                                                    </i-col>
                                                </row>
                                            </div>
                                        </div>
                                        <div class="edit-info edit-6">
                                            <div>合同期内离职时间：</div>
                                            <div>
                                                <row class="form-el">
                                                    <i-col span="12">
                                                        <date-picker type="date" placement="top-end" placeholder="选择日期" style="width: 260px;font-size: 12px;"></date-picker>
                                                    </i-col>
                                                </row>
                                                <div style="margin-top: 15px;">
                                                    （若未离职则无需填写）
                                                </div>
                                            </div>
                                        </div>
                                        <div class="edit-info">
                                            <div>劳动合同或其他法律纠纷：</div>
                                            <div>

                                                <div style="margin-top: 10px;">
                                                    <i-switch size="large" v-model="pactShow">
                                                        <span slot="open">有</span>
                                                        <span slot="close">无</span>
                                                    </i-switch>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="pact" v-show="pactShow"
                                            style="border: 1px solid #d9d9d9; margin-top: 20px;"
                                        >

                                            <div class="edit-info">
                                                <div>纠纷案件名称：</div>
                                                <div>
                                                    <i-input placeholder="请输入" class="form-el"></i-input>
                                                </div>
                                            </div>

                                            <div class="edit-info">
                                                <div>合同期内离职时间：</div>
                                                <div>
                                                    <row class="form-el">
                                                        <i-col span="12">
                                                            <date-picker type="date" placement="top-end" placeholder="选择日期" style="width: 260px;font-size: 12px;"></date-picker>
                                                        </i-col>
                                                    </row>
                                                </div>
                                            </div>
                                            <div class="edit-info">
                                                <div>审理结果：</div>
                                                <div>
                                                    <i-select v-model="model1" class="form-el">
                                                        <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                                                    </i-select>
                                                    <div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="edit-info">
                                                <div>上传附件：</div>
                                                <div>
                                                    <upload
                                                            style="width:200px; height: 200px;"
                                                            multiple
                                                            type="drag"
                                                            action="/">
                                                        <div style="padding: 20px 0">
                                                            <icon type="ios-cloud-upload" size="52" style="color: #3399ff"></icon>
                                                            <p>点击添加</p>
                                                        </div>
                                                    </upload>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="edit-7">
                                            <div>
                                                <i-button type="ghost" class="edit-7-cancel" v-on:click="assessInfoShow(name)">取消</i-button>
                                                <i-button type="primary" class="edit-7-ok">保存</i-button>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </tab-pane>
                        <tab-pane name="2" label="月度评价" icon="document-text">
                            <div v-show="name==2" class="component-assess-info-month" v-bind:class="{'tab-active':name==2}">
                                <div v-show="!assessInfoBase2" class="assess-tab assess-info-month">

                                    <div class="employ-add">
                                        <i-button type="ghost" size="large" shape="circle" icon="plus" class="active" v-on:click="assessInfoShow(name)">添加月度评价</i-button>
                                    </div>

                                    <div class="month-table-container">

                                        <div class="month-table-1">
                                            <div class="table-title">评分情况：</div>
                                            <i-table border :columns="columns1" :data="data1"></i-table>
                                        </div>

                                        <div class="month-table-2">
                                            <div class="table-title">业绩情况：</div>
                                            <i-table border :columns="columns2" :data="data2"></i-table>
                                        </div>

                                        <div class="month-table-3">
                                            <div class="table-title">考勤情况：</div>
                                            <i-table border :columns="columns3" :data="data3"></i-table>
                                        </div>

                                        <div class="month-table-4" row-class-name="table4_hide_head">
                                            <div class="table-title">奖惩情况：</div>
                                            <i-table border :columns="columns4" :data="data4"></i-table>
                                        </div>

                                        <div class="time-line">
                                            <div class="table-title">评语：</div>
                                            <timeline>
                                                <timeline-item>
                                                    <div class="time"><span class="icon-time-line-arrow"></span>业绩突出，再接再厉</div>
                                                </timeline-item>
                                                <timeline-item>
                                                    <div class="time"><span class="icon-time-line-arrow"></span>业绩突出，奖励1万元</div>
                                                </timeline-item>
                                                <timeline-item>
                                                    <div class="time"><span class="icon-time-line-arrow"></span>业绩突出，奖励1万元，业绩突出，奖励1万元,业绩突出，奖励1万元,业绩突出，奖励1万元业绩突出，奖励1万元业绩突出，奖励1万元业绩突出，奖励1万元业绩突出，奖励1万元，业绩突出，奖励1万元,业绩突出，奖励1万元,业绩突出</div>
                                                </timeline-item>
                                            </timeline>
                                        </div>

                                    </div>

                                </div>
                                <div v-show="assessInfoBase2" class="edit-assess-info-month">
                                    <Card style="width: 100%;">
                                        <div class="edit-1">
                                            <Icon type="android-alert" style="color:#ffbf00; font-size: 18px;margin-right: 8px;"></Icon>请尽量完善以下评价内容，最少填写一项
                                        </div>
                                        <div class="edit-info edit-2">
                                            <div>评价月份：</div>
                                            <div>
                                                <row class="form-el">
                                                    <i-col span="12">
                                                        <date-picker type="month" placement="bottom-end" placeholder="选择月" style="width: 260px;font-size: 12px;"></date-picker>
                                                    </i-col>
                                                </row>
                                            </div>
                                        </div>
                                        <div class="edit-info edit-3">
                                            <div>评分情况：</div>
                                            <div>
                                                <i-select v-model="model1" class="form-el" placeholder="请为员工本月综合表现评分">
                                                    <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                                                </i-select>
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="edit-info edit-4">
                                            <div>业绩情况：</div>
                                            <div>
                                                <div>
                                                    <i-select v-model="model1" class="form-el" placeholder="请选择排名">
                                                        <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                                                    </i-select>
                                                </div>
                                                <div style="margin-top: 15px;">
                                                    <i-input placeholder="业绩额（选填）" class="form-el"></i-input>
                                                    <i-select v-model="model1" class="form-el" placeholder="万元">
                                                        <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                                                    </i-select>
                                                </div>
                                                <div style="margin-top: 15px;">
                                                    <i-switch size="large">
                                                        <span slot="open">显示</span>
                                                        <span slot="close">隐藏</span>
                                                    </i-switch>
                                                    该名员工职信被在线搜索查看时，业绩额是否显示
                                                </div>
                                            </div>
                                        </div>
                                        <div class="edit-info edit-5">
                                            <div>考勤情况：</div>
                                            <div>
                                                <i-select v-model="model1" class="form-el" placeholder="请选择排名">
                                                    <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                                                </i-select>
                                            </div>
                                        </div>
                                        <div class="edit-info edit-6">
                                            <div>奖惩情况：</div>
                                            <div>
                                                <i-button v-show="!editPunish" class="form-el" type="ghost" icon="plus" @click="addPunish">添加奖惩记录</i-button>
                                                <div class="e-i-2 pact" style="margin-top: 10px;">
                                                        <ul v-show="!editPunish">
                                                            <li>
                                                                <div>
                                                                    <div class="text-left" style="font-size: 12px;">2017-10-10</div>
                                                                    奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细
                                                                </div>

                                                                <div>
                                                                    <div class="text-left" style="font-size: 12px;">2017-10-10</div>
                                                                    奖惩情况情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细
                                                                </div>
                                                            </li>
                                                        </ul>


                                                        <div v-if="editPunish">
                                                            <div>
                                                                <i-input type="textarea" :rows="10" style="width: 520px;" placeholder="奖惩情况，500字以内" :maxlength="500"></i-input>
                                                            </div>
                                                            <div style="margin-top:20px; text-align: center;">
                                                                <i-button type="text"   @click="addPunish"style="margin-right: 20px;">取消</i-button>
                                                                <i-button type="primary"  @click="addPunish">保存</i-button>
                                                            </div>
                                                            <hr style="margin-top: 20px;border: none; border-top: 1px solid #d9d9d9;">
                                                        </div>


                                                    </div>
                                            </div>
                                        </div>
                                        <div class="edit-info edit-6">
                                            <div>评语：</div>
                                            <div>
                                                <i-input type="textarea" :rows="10" style="width: 520px;" placeholder="请填写评语，500字以内" :maxlength="500"></i-input>
                                            </div>
                                        </div>

                                        <div class="edit-7">
                                            <div>
                                                <i-button type="ghost" class="edit-7-cancel" v-on:click="assessInfoShow(name)">取消</i-button>
                                                <i-button type="primary" class="edit-7-ok">保存</i-button>
                                            </div>
                                        </div>

                                    </Card>
                                </div>
                            </div>
                        </tab-pane>
                        <tab-pane name="3" label="季度评价" icon="document-text">
                            <div v-show="name==3" class="component-assess-info-q" v-bind:class="{'tab-active':name==3}">
                                <div v-show="!assessInfoBase2" class="assess-tab assess-info-month">

                                    <div class="employ-add">
                                        <i-button type="ghost" size="large" shape="circle" icon="plus" class="active" v-on:click="assessInfoShow(name)">添加月度评价</i-button>
                                    </div>

                                    <div class="month-table-container">

                                        <div class="month-table-1">
                                            <div class="table-title">评分情况：</div>
                                            <i-table border :columns="columns1" :data="data1"></i-table>
                                        </div>

                                        <div class="month-table-2">
                                            <div class="table-title">业绩情况：</div>
                                            <i-table border :columns="columns2" :data="data2"></i-table>
                                        </div>

                                        <div class="month-table-3">
                                            <div class="table-title">考勤情况：</div>
                                            <i-table border :columns="columns3" :data="data3"></i-table>
                                        </div>

                                        <div class="month-table-4" row-class-name="table4_hide_head">
                                            <div class="table-title">奖惩情况：</div>
                                            <i-table border :columns="columns4" :data="data4"></i-table>
                                        </div>

                                        <div class="time-line">
                                            <div class="table-title">评语：</div>
                                            <timeline>
                                                <timeline-item>
                                                    <div class="time"><span class="icon-time-line-arrow"></span>业绩突出，再接再厉</div>
                                                </timeline-item>
                                                <timeline-item>
                                                    <div class="time"><span class="icon-time-line-arrow"></span>业绩突出，奖励1万元</div>
                                                </timeline-item>
                                                <timeline-item>
                                                    <div class="time"><span class="icon-time-line-arrow"></span>业绩突出，奖励1万元，业绩突出，奖励1万元,业绩突出，奖励1万元,业绩突出，奖励1万元业绩突出，奖励1万元业绩突出，奖励1万元业绩突出，奖励1万元业绩突出，奖励1万元，业绩突出，奖励1万元,业绩突出，奖励1万元,业绩突出</div>
                                                </timeline-item>
                                            </timeline>
                                        </div>

                                    </div>

                                </div>
                                <div v-show="assessInfoBase2" class="edit-assess-info-month">
                                    <Card style="width: 100%;">
                                        <div class="edit-1">
                                            <Icon type="android-alert" style="color:#ffbf00; font-size: 18px;margin-right: 8px;"></Icon>请尽量完善以下评价内容，最少填写一项
                                        </div>
                                        <div class="edit-info edit-2">
                                            <div>评价月份：</div>
                                            <div>
                                                <row class="form-el">
                                                    <i-col span="12">
                                                        <date-picker type="month" placement="bottom-end" placeholder="选择月" style="width: 260px;font-size: 12px;"></date-picker>
                                                    </i-col>
                                                </row>
                                            </div>
                                        </div>
                                        <div class="edit-info edit-3">
                                            <div>评分情况：</div>
                                            <div>
                                                <i-select v-model="model1" class="form-el" placeholder="请为员工本月综合表现评分">
                                                    <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                                                </i-select>
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="edit-info edit-4">
                                            <div>业绩情况：</div>
                                            <div>
                                                <div>
                                                    <i-select v-model="model1" class="form-el" placeholder="请选择排名">
                                                        <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                                                    </i-select>
                                                </div>
                                                <div style="margin-top: 15px;">
                                                    <i-input placeholder="业绩额（选填）" class="form-el"></i-input>
                                                    <i-select v-model="model1" class="form-el" placeholder="万元">
                                                        <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                                                    </i-select>
                                                </div>
                                                <div style="margin-top: 15px;">
                                                    <i-switch size="large">
                                                        <span slot="open">显示</span>
                                                        <span slot="close">隐藏</span>
                                                    </i-switch>
                                                    该名员工职信被在线搜索查看时，业绩额是否显示
                                                </div>
                                            </div>
                                        </div>
                                        <div class="edit-info edit-5">
                                            <div>考勤情况：</div>
                                            <div>
                                                <i-select v-model="model1" class="form-el" placeholder="请选择排名">
                                                    <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                                                </i-select>
                                            </div>
                                        </div>
                                        <div class="edit-info edit-6">
                                            <div>奖惩情况：</div>
                                            <div>
                                                <i-button v-show="!editPunish" class="form-el" type="ghost" icon="plus" @click="addPunish">添加奖惩记录</i-button>
                                                <div class="e-i-2 pact" style="margin-top: 10px;">
                                                    <ul v-show="!editPunish">
                                                        <li>
                                                            <div>
                                                                <div class="text-left" style="font-size: 12px;">2017-10-10</div>
                                                                奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细
                                                            </div>

                                                            <div>
                                                                <div class="text-left" style="font-size: 12px;">2017-10-10</div>
                                                                奖惩情况情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细
                                                            </div>
                                                        </li>
                                                    </ul>


                                                    <div v-if="editPunish">
                                                        <div>
                                                            <i-input type="textarea" :rows="10" style="width: 520px;" placeholder="奖惩情况，500字以内" :maxlength="500"></i-input>
                                                        </div>
                                                        <div style="margin-top:20px; text-align: center;">
                                                            <i-button type="text"   @click="addPunish"style="margin-right: 20px;">取消</i-button>
                                                            <i-button type="primary"  @click="addPunish">保存</i-button>
                                                        </div>
                                                        <hr style="margin-top: 20px;border: none; border-top: 1px solid #d9d9d9;">
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                        <div class="edit-info edit-6">
                                            <div>评语：</div>
                                            <div>
                                                <i-input type="textarea" :rows="10" style="width: 520px;" placeholder="请填写评语，500字以内" :maxlength="500"></i-input>
                                            </div>
                                        </div>

                                        <div class="edit-7">
                                            <div>
                                                <i-button type="ghost" class="edit-7-cancel" v-on:click="assessInfoShow(name)">取消</i-button>
                                                <i-button type="primary" class="edit-7-ok">保存</i-button>
                                            </div>
                                        </div>

                                    </Card>
                                </div>
                            </div>
                        </tab-pane>
                        <tab-pane name="4" label="年度评价" icon="document-text">
                            <div v-show="name==4" class="component-assess-info-year" v-bind:class="{'tab-active':name==4}">
                                <div v-show="!assessInfoBase2" class="assess-tab assess-info-month">

                                    <div class="employ-add">
                                        <i-button type="ghost" size="large" shape="circle" icon="plus" class="active" v-on:click="assessInfoShow(name)">添加月度评价</i-button>
                                    </div>

                                    <div class="month-table-container">

                                        <div class="month-table-1">
                                            <div class="table-title">评分情况：</div>
                                            <i-table border :columns="columns1" :data="data1"></i-table>
                                        </div>

                                        <div class="month-table-2">
                                            <div class="table-title">业绩情况：</div>
                                            <i-table border :columns="columns2" :data="data2"></i-table>
                                        </div>

                                        <div class="month-table-3">
                                            <div class="table-title">考勤情况：</div>
                                            <i-table border :columns="columns3" :data="data3"></i-table>
                                        </div>

                                        <div class="month-table-4" row-class-name="table4_hide_head">
                                            <div class="table-title">奖惩情况：</div>
                                            <i-table border :columns="columns4" :data="data4"></i-table>
                                        </div>

                                        <div class="time-line">
                                            <div class="table-title">评语：</div>
                                            <timeline>
                                                <timeline-item>
                                                    <div class="time"><span class="icon-time-line-arrow"></span>业绩突出，再接再厉</div>
                                                </timeline-item>
                                                <timeline-item>
                                                    <div class="time"><span class="icon-time-line-arrow"></span>业绩突出，奖励1万元</div>
                                                </timeline-item>
                                                <timeline-item>
                                                    <div class="time"><span class="icon-time-line-arrow"></span>业绩突出，奖励1万元，业绩突出，奖励1万元,业绩突出，奖励1万元,业绩突出，奖励1万元业绩突出，奖励1万元业绩突出，奖励1万元业绩突出，奖励1万元业绩突出，奖励1万元，业绩突出，奖励1万元,业绩突出，奖励1万元,业绩突出</div>
                                                </timeline-item>
                                            </timeline>
                                        </div>

                                    </div>

                                </div>
                                <div v-show="assessInfoBase2" class="edit-assess-info-month">
                                    <Card style="width: 100%;">
                                        <div class="edit-1">
                                            <Icon type="android-alert" style="color:#ffbf00; font-size: 18px;margin-right: 8px;"></Icon>请尽量完善以下评价内容，最少填写一项
                                        </div>
                                        <div class="edit-info edit-2">
                                            <div>评价月份：</div>
                                            <div>
                                                <row class="form-el">
                                                    <i-col span="12">
                                                        <date-picker type="month" placement="bottom-end" placeholder="选择月" style="width: 260px;font-size: 12px;"></date-picker>
                                                    </i-col>
                                                </row>
                                            </div>
                                        </div>
                                        <div class="edit-info edit-3">
                                            <div>评分情况：</div>
                                            <div>
                                                <i-select v-model="model1" class="form-el" placeholder="请为员工本月综合表现评分">
                                                    <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                                                </i-select>
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="edit-info edit-4">
                                            <div>业绩情况：</div>
                                            <div>
                                                <div>
                                                    <i-select v-model="model1" class="form-el" placeholder="请选择排名">
                                                        <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                                                    </i-select>
                                                </div>
                                                <div style="margin-top: 15px;">
                                                    <i-input placeholder="业绩额（选填）" class="form-el"></i-input>
                                                    <i-select v-model="model1" class="form-el" placeholder="万元">
                                                        <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                                                    </i-select>
                                                </div>
                                                <div style="margin-top: 15px;">
                                                    <i-switch size="large">
                                                        <span slot="open">显示</span>
                                                        <span slot="close">隐藏</span>
                                                    </i-switch>
                                                    该名员工职信被在线搜索查看时，业绩额是否显示
                                                </div>
                                            </div>
                                        </div>
                                        <div class="edit-info edit-5">
                                            <div>考勤情况：</div>
                                            <div>
                                                <i-select v-model="model1" class="form-el" placeholder="请选择排名">
                                                    <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                                                </i-select>
                                            </div>
                                        </div>
                                        <div class="edit-info edit-6">
                                            <div>奖惩情况：</div>
                                            <div>
                                                <i-button v-show="!editPunish" class="form-el" type="ghost" icon="plus" @click="addPunish">添加奖惩记录</i-button>
                                                <div class="e-i-2 pact" style="margin-top: 10px;">
                                                    <ul v-show="!editPunish">
                                                        <li>
                                                            <div>
                                                                <div class="text-left" style="font-size: 12px;">2017-10-10</div>
                                                                奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细
                                                            </div>

                                                            <div>
                                                                <div class="text-left" style="font-size: 12px;">2017-10-10</div>
                                                                奖惩情况情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细奖惩情况详细
                                                            </div>
                                                        </li>
                                                    </ul>


                                                    <div v-if="editPunish">
                                                        <div>
                                                            <i-input type="textarea" :rows="10" style="width: 520px;" placeholder="奖惩情况，500字以内" :maxlength="500"></i-input>
                                                        </div>
                                                        <div style="margin-top:20px; text-align: center;">
                                                            <i-button type="text"   @click="addPunish"style="margin-right: 20px;">取消</i-button>
                                                            <i-button type="primary"  @click="addPunish">保存</i-button>
                                                        </div>
                                                        <hr style="margin-top: 20px;border: none; border-top: 1px solid #d9d9d9;">
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                        <div class="edit-info edit-6">
                                            <div>评语：</div>
                                            <div>
                                                <i-input type="textarea" :rows="10" style="width: 520px;" placeholder="请填写评语，500字以内" :maxlength="500"></i-input>
                                            </div>
                                        </div>

                                        <div class="edit-7">
                                            <div>
                                                <i-button type="ghost" class="edit-7-cancel" v-on:click="assessInfoShow(name)">取消</i-button>
                                                <i-button type="primary" class="edit-7-ok">保存</i-button>
                                            </div>
                                        </div>

                                    </Card>
                                </div>
                            </div>
                        </tab-pane>
                    </tabs>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import VueCropper from "vue-cropper"
export default {
    name: 'Employ',
    components:{VueCropper},
    data(){
        return {
            //不当在这里，属于年度总评组件内属性。
            pactShow:false,//合同纠纷问题
            name:"1",//被选中Tab
            assessInfoBase:true,//第一个tab开关状态
            assessInfoBase2:true,//第2个tab开关状态
            assessInfoBase3:false,//第3个tab开关状态
            assessInfoBase4:false,//第4个tab开关状态
            assessInfoBase5:false,//年度总评开关状态
            assessInfoBase6:true,//基础信息编辑开关状态

            percent: 0,
            dropdown2_text:'职信链科技有限公司',

            columns1: [
                {
                    title: '年份及月度',
                    key: 'title',
                    className:'t-columns1'
                },
                {
                    title: '月度评分',
                    key: 'score',
                    className:'t-columns2'
                }
            ],
            data1: [
                {
                    title: '2017.8',
                    score: 8
                },
                {
                    title: '2017.7',
                    score: 7
                },
                {
                    title: '2017.6',
                    score: 8
                },
            ],
            //table2
            columns2: [
                {
                    title: '年份及月度',
                    key: 'date',
                    className:'t-columns1'
                },
                {
                    title: '排名情况',
                    key: 'order',
                    className:'t-columns2'
                },
                {
                    title: '业绩额',
                    key: 'performance',
                    className:'t-columns3'
                },
                {
                    title: '员工意见',
                    key: 'recommend',
                    className:'t-columns4'
                },
                {
                    title: '企业备注',
                    key: 'remark',
                    // render: (h, params) => {
                    //     return h('div', [
                    //         h('component-assess-add-tip',{
                    //             props:{
                    //                 data:this.data2[params.index]
                    //             }
                    //         })
                    //     ]);
                    // }
                }
            ],
            data2: [
                {
                    date: '2017.8',
                    order: '靠前',
                    performance: '50万',
                    recommend: '认同'
                },
                {
                    date: '2017.7',
                    order: '靠前',
                    performance: '60万',
                    recommend: '认同',
                    show:true
                },
                {
                    date: '2017.6',
                    order: '靠前',
                    performance: '70万',
                    recommend: '认同'
                }

            ],
            //table3
            columns3: [
                {
                    title: '年份及月度',
                    key: 'date',
                    className:'t-columns1'
                },
                {
                    title: '考勤排名',
                    key: 'order',
                    className:'t-columns2'
                },
                {
                    title: '员工意见',
                    key: 'recommend',
                    className:'t-columns3'
                },
                {
                    title: '企业备注',
                    key: 'remark',
                    // render: (h, params) => {
                    //     return h('div', [
                    //         h('ComponentAssessAddTip',{
                    //             props:{
                    //                 data:this.data2[params.index]
                    //             }
                    //         })
                    //     ]);
                    // }
                }
            ],
            data3: [
                {
                    date: '2017.8',
                    order: '靠前',
                    recommend: '认同'
                },
                {
                    date: '2017.7',
                    order: '靠前',
                    recommend: '认同',
                    show:true
                },
                {
                    date: '2017.6',
                    order: '靠前',
                    recommend: '认同'
                }

            ],
            //                table4
            columns4: [
                {
                    title: '年份及月度',
                    key: 'title',
                    className:'t-columns1'
                },
                {
                    title: '月度评分',
                    key: 'score'
                }
            ],
            data4: [
                {
                    title: '2017.8',
                    score: '业绩突出，奖励1万元'
                },
                {
                    title: '2017.7',
                    score: '业绩突出，奖励1万元'
                },
                {
                    title: '2017.6',
                    score: '业绩突出，奖励1万元'
                },
            ],
            //                编辑数据
            cityList: [
                {
                    value: 'beijing',
                    label: '北京市'
                },
                {
                    value: 'shanghai',
                    label: '上海市'
                },
                {
                    value: 'shenzhen',
                    label: '深圳市'
                },
                {
                    value: 'hangzhou',
                    label: '杭州市'
                },
                {
                    value: 'nanjing',
                    label: '南京市'
                },
                {
                    value: 'chongqing',
                    label: '重庆市'
                }
            ],
            model1: '',
            editPunish:false,
            modal1:true,
            option:{
                img:'/static/public/images/dashboard/icon-companyLogo.png',
                size:1,
                outputType:'png'
            }
        }
    },
    methods:{
        dropdown2 (v) {
                this.dropdown2_text = v;
        },
        show (index) {
            this.$Modal.info({
                title: '用户信息',
                content: `${this.data2[index].date}`
            })
        },
        remove (index) {
            this.data2.splice(index, 1);
        },
        assessInfoShow(name){
            switch(name){
                case '1':
                    this.assessInfoBase=!this.assessInfoBase;
                    break;
                case '2':
                    this.assessInfoBase2=!this.assessInfoBase2;
                    break;
                case '3':
                    this.assessInfoBase3=!this.assessInfoBase3;
                    break;
                case '4':
                    this.assessInfoBase4=!this.assessInfoBase4;
                    break;
                case '5':
                    this.assessInfoBase5=!this.assessInfoBase5;
                    break;
                case '6':
                    this.assessInfoBase6=!this.assessInfoBase6;
                    break;
                default:
                    break;
            }

        },
        addPunish(){
            this.editPunish=!this.editPunish;
        }
    }
}
</script>

<style scoped>

</style>