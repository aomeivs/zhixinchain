<template>
<div class="component-modal-mask mask-buy">
    <div class="upZheGai" style="display: block">
        <div class="zhegaiContent" >
            <div class="zhegaiContent-close" style="position: relative">
                <img src="public/images/index/Combined.png" id="closeBuyContent" style="position: absolute; right: 19px; top: 19px; cursor: pointer;">
            </div>
            <div class="zhegaiContent-title">
                <p>购买</p>
            </div>
            <div class="zhegaiContent-buyChoice" id="zhegaiContent-buyChoice">
                <div class="zhegaiContent-buyChoice-1 one">
                    <div class="zhegaiContent-buyChoice-1-1"><span>规格选择：</span></div>
                    <div class="zhegaiContent-buyChoice-bnt" style="margin-left: 20px" @click="bnt('editionSelectedA')">
                        <div class="zhegaiContent-buyChoice-bnt-1" v-bind:class="{'buyChoice-bnt-action':selected=='editionSelectedA'}" id="editionSelectedA" data-edit-num="10" data-edit-price="1490">A版</div>
                        <span v-show="selected=='editionSelectedA'" class="zhegaiContent-buyChoice-bnt-2" id="isShowTextA">支持员工数<span id="edition_A">10</span>人以下</span>
                    </div>
                    <div class="zhegaiContent-buyChoice-bnt" @click="bnt('editionSelectedB')">
                        <div class="zhegaiContent-buyChoice-bnt-1" v-bind:class="{'buyChoice-bnt-action':selected=='editionSelectedB'}"  id="editionSelectedB" data-edit-num="20" data-edit-price="2990">B版</div>
                        <span v-show="selected=='editionSelectedB'" class="zhegaiContent-buyChoice-bnt-2 textHidden_lt" id="isShowTextB">支持员工数<span class="num" id="edition_B" >20</span>人以下</span>
                    </div>
                    <div class="zhegaiContent-buyChoice-bnt" @click="bnt('editionSelectedC')">
                        <div class="zhegaiContent-buyChoice-bnt-1" v-bind:class="{'buyChoice-bnt-action':selected=='editionSelectedC'}" id="editionSelectedC" data-edit-num="40" data-edit-price="5990">C版</div>
                        <span v-show="selected=='editionSelectedC'" class="zhegaiContent-buyChoice-bnt-2 textHidden_lt" id="isShowTextC">支持员工数<span id="edition_C">40</span>人以下</span>
                    </div>
                    <div class="clearFloat"></div>
                </div>


                <div class="zhegaiContent-buyChoice-1">
                    <div class="zhegaiContent-buyChoice-1-1"><span></span></div>
                    <div class="zhegaiContent-buyChoice-bnt" @click="bnt('editionSelectedD')" style="margin-left: 20px">
                        <div class="zhegaiContent-buyChoice-bnt-1" v-bind:class="{'buyChoice-bnt-action':selected=='editionSelectedD'}" id="editionSelectedD" data-edit-num="60" data-edit-price="9990">D版</div>
                        <span v-show="selected=='editionSelectedD'" class="zhegaiContent-buyChoice-bnt-2 textHidden_lt" id="isShowTextD">支持员工数<span id="edition_D">60</span>人以下</span>
                    </div>
                    <div class="zhegaiContent-buyChoice-bnt" @click="bnt('editionSelectedE')">
                        <div class="zhegaiContent-buyChoice-bnt-1" v-bind:class="{'buyChoice-bnt-action':selected=='editionSelectedE'}" id="editionSelectedE" data-edit-num="100" data-edit-price="19990">E版</div>
                        <span v-show="selected=='editionSelectedE'" class="zhegaiContent-buyChoice-bnt-2 textHidden_lt" id="isShowTextE">支持员工数<span id="edition_E">100</span>人以下</span>
                    </div>

                    <div class="zhegaiContent-buyChoice-bnt" @click="bnt('editionSelectedF')">
                        <div class="zhegaiContent-buyChoice-bnt-1" v-bind:class="{'buyChoice-bnt-action':selected=='editionSelectedF'}" id="editionSelectedF" data-edit-num="100" data-edit-price="20000">F版</div>
                        <span v-show="selected=='editionSelectedF'" class="zhegaiContent-buyChoice-bnt-2 textHidden_lt" id="isShowTextF">支持员工数<span id="edition_F">100</span>人以上</span>
                    </div>
                    <div class="clearFloat"></div>
                </div>


                <div class="zhegaiContent-buyChoice-1">
                    <div class="zhegaiContent-buyChoice-1-1" style="line-height: 26px"><span>额外员工数量：</span></div>
                    <div class="zhegaiContent-buyChoice-bnt" style="margin-left: 20px">
                        <div class="zhegaiContent-buyChoice-bnt-1">
                            <input type="number" placeholder="请输入大于或者等于5的整数"  id="addNum_input" style="border-style: hidden;height: 26px;width: 177px;outline: none;">
                        </div>
                    </div>
                    <div class="clearFloat"></div>
                </div>

                <div class="zhegaiContent-buyChoice-2">
                    <img src="public/images/index/tishi.png">
                    <span>如果该版本支持的最高员工数不能满足需求，您可以额外增加支持员工数。5人起增加，每增加一人，服务费用增加<span id="prePrice">300</span>元</span>
                </div>
                <div class="zhegaiContent-buyChoice-total">
                    <span>您当前已选择</span>
                    <span class="zhegaiContent-buyChoice-fontYellow"><span id="fuwu_name">{{msg}}</span>服务</span>，额外增加员工
                    <span class="zhegaiContent-buyChoice-fontYellow" id="add_num">0</span>人，共支持员工数
                    <span class="zhegaiContent-buyChoice-fontYellow" id="total_num">{{num}}</span>
                </div>
                <div class="zhegaiContent-buyChoice-3">
                    <div class="zhegaiContent-buyChoice-1" style=" padding-top: 2px;">
                        <div class="zhegaiContent-buyChoice-1-1">
                            <span>服务年费：</span>
                        </div>
                        <div class="zhegaiContent-buyChoice-bnt" style="margin-left: 20px">
                            <span class="" style="color: black;" id="total_yearPrice">{{price*zk}}元/年</span>
                            <span class="font-gary-samall">（</span>
                            <span  class="font-gary-samall" style="text-decoration: line-through" ><span id="price_before">{{price}}</span>元/年</span>
                            <span class="font-gary-samall">）</span>
                        </div>
                        <div class="clearFloat"></div>
                    </div>

                    <div class="zhegaiContent-buyChoice-1" style=" padding-top: 0px; padding-bottom: 2px;">
                        <div class="zhegaiContent-buyChoice-1-1">
                            <span>预付款：</span>
                        </div>
                        <div class="zhegaiContent-buyChoice-bnt" style="margin-left: 20px">
                            <span class="" style="color: #fb9e06;" id="payment_year">{{price*zk*zk}}元</span>
                            <span class="zhegaiContent-buyChoice-fontblue" style="font-size: 13px">（您需预支付总价的30%，剩下的70%于2017年12月25日产品上线后支付）</span>
                        </div>
                        <div class="clearFloat"></div>
                    </div>
                    <div class="zhegaiContent-buyChoice-1" style=" padding-top: 0px;">
                        <div class="zhegaiContent-buyChoice-1-1" style=" height: 26px;line-height: 26px;"><span>代金劵：</span></div>
                        <div class="zhegaiContent-buyChoice-bnt" style="margin-left: 20px ;line-height: 26px;">
                            <div class="zhegaiContent-buyChoice-bnt-1" style="line-height: 26px;border-color: #c2c3c4;">
                                <input type="text" placeholder="请输入代金券码"  id="daijin_input" style="border-style: hidden;height: 26px;width: 177px;outline: none;">
                            </div>
                        </div>
                        <div class="zhegaiContent-buyChoice-3-2">
                            <span>- </span><span id="daijin_sum">0</span><span>元</span>
                        </div>
                        <div class="clearFloat"></div>
                    </div>
                    <div class="zhegaiContent-buyChoice-1" style=" padding-top: 0px;">
                        <div class="zhegaiContent-buyChoice-1-1">
                            <span>应付总额：</span>
                        </div>
                        <div class="zhegaiContent-buyChoice-bnt" style="margin-left: 20px">
                            <span class="" style="color: #e81212;font-size: 21px;"><span id="endpPay">596</span>元</span>
                        </div>
                        <div class="clearFloat"></div>
                    </div>
                    <div class="clearFloat"></div>
                </div>

                <div class="zhegaiContent-buyChoice-4">
                    <div><img src="public/images/index/xinxi.png"></div>
                </div>

                <div class="zhegaiContent-buyChoice-5">
                    <div class="zhegaiContent-buyChoice-5-1">
                        <div class="zhegaiContent-buyChoice-1-1"><span>联系人：</span></div>
                        <div class="zhegaiContent-buyChoice-bnt" style="margin-left: 20px">
                            <div class="zhegaiContent-buyChoice-bnt-1">
                                <input type="text" placeholder="姓名" style="border-style: hidden;height: 32px;width: 236px;outline: none;">
                            </div>
                        </div>

                        <div class="zhegaiContent-buyChoice-1-1"><span>手机号：</span></div>
                        <div class="zhegaiContent-buyChoice-bnt" style="margin-left: 20px">
                            <div class="zhegaiContent-buyChoice-bnt-1">
                                <input type="text" placeholder="手机号" id="phoneNum" style="border-style: hidden;height: 32px;width: 236px;outline: none;">
                            </div>
                        </div>
                        <div class="clearFloat"></div>
                    </div>

                    <div class="zhegaiContent-buyChoice-5-1">
                        <div class="zhegaiContent-buyChoice-1-1"><span>企业名称：</span></div>
                        <div class="zhegaiContent-buyChoice-bnt" style="margin-left: 20px">
                            <div class="zhegaiContent-buyChoice-bnt-1">
                                <input type="text" placeholder="企业名称" style="border-style: hidden;height: 32px;width: 236px;outline: none;">
                            </div>
                        </div>
                        <div class="clearFloat"></div>
                    </div>

                </div>


                <div class="zhegaiContent-buyChoice-6">
                    <div class="zhegaiContent-buyChoice-6-1" style=" height: 21px;"></div>
                    <div class="zhegaiContent-buyChoice-6-2">立即支付</div>
                    <span>全国客服电话：400-6190828</span>
                </div>

            </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
    export default {
        data(){
            return {
                selected:'',
                msg:'',
                num:0,
                price:0,
                zk:0.3,
                SelectA:{
                    name:'A版',
                    num:10,
                    price:1490
                },
                SelectB:{
                    name:'B版',
                    num:20,
                    price:3000
                }
            }
        },
        methods:{
            bnt(name){
                this.selected=name;
                switch(name){
                    case 'editionSelectedA':
                    this.msg=this.SelectA.name
                    this.num=this.SelectA.num;
                    this.price=this.SelectA.price

                    break;
                    case 'editionSelectedB':
                    this.msg=this.SelectB.name
                    this.num=this.SelectB.num;
                    this.price=this.SelectB.price
                    break;
                    case 'editionSelectedC':

                    break;
                    case 'editionSelectedD':

                    break;
                    case 'editionSelectedE':

                    break;
                    case 'editionSelectedF':

                    break;
                    
                    default:
                    break;
                }
            }
        }
    }
</script>

<style scoped>
.component-modal-mask.mask-buy .textHidden_lt{
    display: block;
}
</style>