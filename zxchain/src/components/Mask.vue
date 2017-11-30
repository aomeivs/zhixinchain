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
                            <input type="number" @change="addNumFun()" ref="input1"  placeholder="请输入大于或者等于5的整数"  id="addNum_input" style="border-style: hidden;height: 26px;width: 177px;outline: none;">
                        </div>
                    </div>
                    <div class="clearFloat"></div>
                </div>

                <div class="zhegaiContent-buyChoice-2">
                    <img src="public/images/index/tishi.png">
                    <span>如果该版本支持的最高员工数不能满足需求，您可以额外增加支持员工数。5人起增加，每增加一人，服务费用增加<span id="prePrice">{{prePrice}}</span>元</span>
                </div>
                <div class="zhegaiContent-buyChoice-total">
                    <span>您当前已选择</span>
                    <span class="zhegaiContent-buyChoice-fontYellow"><span id="fuwu_name">{{msg}}</span>服务</span>，额外增加员工
                    <span class="zhegaiContent-buyChoice-fontYellow" id="add_num">{{add_num}}</span>人，共支持员工数
                    <span class="zhegaiContent-buyChoice-fontYellow" id="total_num">{{parseInt(num)+parseInt(add_num)}}</span>
                </div>
                <div class="zhegaiContent-buyChoice-3">
                    <div class="zhegaiContent-buyChoice-1" style=" padding-top: 2px;">
                        <div class="zhegaiContent-buyChoice-1-1">
                            <span>服务年费：</span>
                        </div>
                        <div class="zhegaiContent-buyChoice-bnt" style="margin-left: 20px">
                            <span class="" style="color: black;" id="total_yearPrice">{{price_now}}元/年</span>
                            <span class="font-gary-samall">（</span>
                            <span  class="font-gary-samall" style="text-decoration: line-through" ><span id="price_before">{{price}}</span>元/年</span>
                            <span class="font-gary-samall">）</span>
                        </div>
                        <div class="clearFloat"></div>
                    </div>

                    <div class="zhegaiContent-buyChoice-1" style=" padding-top: 0px;">
                        <div class="zhegaiContent-buyChoice-1-1" style=" height: 26px;line-height: 26px;"><span>代金劵：</span></div>
                        <div class="zhegaiContent-buyChoice-bnt" style="margin-left: 20px ;line-height: 26px;">
                            <div class="zhegaiContent-buyChoice-bnt-1" style="line-height: 26px;border-color: #c2c3c4;">
                                <input type="text" placeholder="请输入代金券码" ref="input2" @change="checkDJQ()" id="daijin_input" style="border-style: hidden;height: 26px;width: 177px;outline: none;">
                            </div>
                        </div>
                        <div class="zhegaiContent-buyChoice-3-2">
                            <span>- </span><span id="daijin_sum">{{djq_price}}</span><span>元</span>
                        </div>
                        <div class="clearFloat"></div>
                    </div>
                    <div class="zhegaiContent-buyChoice-1" style=" padding-top: 0px;">
                        <div class="zhegaiContent-buyChoice-1-1">
                            <span>应付总额：</span>
                        </div>
                        <div class="zhegaiContent-buyChoice-bnt" style="margin-left: 20px">
                            <span class="" style="color: #e81212;font-size: 21px;"><span id="endpPay">{{endpay}}</span>元</span>
                        </div>
                        <div class="clearFloat"></div>
                    </div>
                    <div class="clearFloat"></div>
                </div>


                <div class="zhegaiContent-buyChoice-6">
                    <div class="zhegaiContent-buyChoice-6-1" style="margin-bottom:20px; height: 21px;"></div>
                    <div class="zhegaiContent-buyChoice-6-2">立即支付</div>
                    <span>全国客服电话：400-6190828</span>
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
                selected:'',  //被选中的版本id
                msg:'',      //被选中的版本名称
                num:0,       //版本支持的员工数量
                price:0,     //原始价格
                price_now:0,  //现在的价格（打折后）
                price_now_2:0, //用于额外增加员工数量的计算
                zk:0.3,     //折扣率
                endpay:0,   //最终支付金额
                djq_price:0, //代金券金额
                add_num:0,   //增加员工人数
                prePrice:300,//每增加一个员工所花费的金额
                SelectA:{
                    name:'A版',
                    num:10,
                    price_old:1490,
                    zk_date:0.4,

                },
                SelectB:{
                    name:'B版',
                    num:20,
                    price_old:2990,
                    zk_date:0.4,

                }
                ,
                SelectC:{
                    name:'C版',
                    num:40,
                    price_old:5990,
                    zk_date:0.4,
                }
                ,
                SelectD:{
                    name:'D版',
                    num:60,
                    price_old:9990,
                    zk_date:0.4,
                }
                ,
                SelectE:{
                    name:'E版',
                    num:100,
                    price_old:19990,
                    zk_date:0.4,
                }
                ,
                SelectF:{
                    name:'F版',
                    num:100,
                    price_old:20000,
                    zk_date:0.4,
                }
            }
        },
        methods:{
            bnt(name){
                this.selected=name;
                switch(name){
                    case 'editionSelectedA':
                        this.$refs.input1.value='';
                    this.msg=this.SelectA.name
                    this.num=this.SelectA.num;
                    this.price=this.SelectA.price_old;
                    this.price_now=this.SelectA.price_old*this.SelectA.zk_date;
                    this.price_now_2=this.price_now;
                    this.endpay=(this.price_now*this.zk-this.djq_price).toFixed(0);
                    break;
                    case 'editionSelectedB':
                        this.$refs.input1.value='';
                    this.msg=this.SelectB.name
                    this.num=this.SelectB.num;
                    this.price=this.SelectB.price_old;
                    this.price_now=this.SelectB.price_old*this.SelectB.zk_date;
                    this.price_now_2=this.price_now;
                    this.endpay=(this.price_now*this.zk-this.djq_price).toFixed(0);
                    break;
                    case 'editionSelectedC':
                        this.$refs.input1.value='';
                        this.msg=this.SelectC.name
                        this.num=this.SelectC.num;
                        this.price=this.SelectC.price_old;
                        this.price_now=this.SelectC.price_old*this.SelectC.zk_date;
                        this.price_now_2=this.price_now;
                        this.endpay=(this.price_now*this.zk-this.djq_price).toFixed(0);
                    break;
                    case 'editionSelectedD':
                        this.$refs.input1.value='';
                        this.msg=this.SelectD.name
                        this.num=this.SelectD.num;
                        this.price=this.SelectD.price_old;
                        this.price_now=this.SelectD.price_old*this.SelectD.zk_date;
                        this.price_now_2=this.price_now;
                        this.endpay=(this.price_now*this.zk-this.djq_price).toFixed(0);

                    break;
                    case 'editionSelectedE':
                        this.$refs.input1.value='';
                        this.msg=this.SelectE.name
                        this.num=this.SelectE.num;
                        this.price=this.SelectE.price_old;
                        this.price_now=this.SelectE.price_old*this.SelectE.zk_date;
                        this.price_now_2=this.price_now;
                        this.endpay=(this.price_now*this.zk-this.djq_price).toFixed(0);

                    break;
                    case 'editionSelectedF':
                        this.$refs.input1.value='';
                        this.msg=this.SelectF.name
                        this.num=this.SelectF.num;
                        this.price=this.SelectF.price_old;
                        this.price_now=this.SelectF.price_old*this.SelectF.zk_date;
                        this.price_now_2=this.price_now;
                        this.endpay=(this.price_now*this.zk-this.djq_price).toFixed(0);
                        this.prePrice=200;
                    break;
                    default:
                    break;
                }
            },
            addNumFun(){
                //验证输入数字是否大于5
                var  addNum=this.$refs.input1.value;
                if(addNum>=5){
                    this.add_num=addNum;
                    this.price_now=this.price_now_2+(this.add_num*this.prePrice)
                    this.endpay=(this.price_now*this.zk-this.djq_price).toFixed(0);
                }else{
                    this.add_num=0;
                    this.price_now=this.price_now_2+(this.add_num*this.prePrice)
                    this.endpay=(this.price_now*this.zk-this.djq_price).toFixed(0);
                    alert("请输入大于5 的整数")
                    this.$refs.input1.value='';

                }
            },
            checkDJQ(){
                //待金劵验证
                var djqCode=this.$refs.input2.value;
                if (djqCode=='abc'){
                    this.djq_price=100;
                    this.endpay=(this.price_now*this.zk-this.djq_price).toFixed(0);
                }else {
                    this.djq_price=0;
                    this.endpay=(this.price_now*this.zk-this.djq_price).toFixed(0);
                    alert("请输入正确的代金券码~~")
                    this.$refs.input2.value='';
                }
            }
        }
    }
</script>

<style scoped>
.component-modal-mask.mask-buy .textHidden_lt{
    display: block;
}
.component-modal-mask.mask-buy .zhegaiContent {
    height: 650px;
    margin-top: 100px;
}
</style>