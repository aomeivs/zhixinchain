<template>
    <div class="component-dashboard">
                <div class="dashboard-container">
                    <img src="/static/public/images/dashboard/icon-companyLogo.png" width="247" height="72" alt="">
                    <div class="company-title">青岛职信链科技有限公司</div>
                    <div class="line"></div>
                    <div class="company-subTitle">
                        在职员工上限数：20
                    </div>

                    <div class="employ-info">
                        <div class="dashboard-box">
                            <div class="employ-on">
                                <img src="/static/public/images/dashboard/icon-dashboardEmploy-on.png" width="78" alt="">
                            </div>
                            <div class="employ-count">
                                16人
                            </div>
                            <div class="employ-count-desc">
                                目前在职员工
                            </div>
                        </div>

                        <div class="dashboard-box">
                            <div class="employ-on">
                                <img src="/static/public/images/dashboard/icon-dashboardEmploy-off.png" width="79" alt="">
                            </div>
                            <div class="employ-count">
                                1人
                            </div>
                            <div class="employ-count-desc">
                                已离职员工
                            </div>
                        </div>
                    </div>
                </div>
                <Kefu></Kefu>
            </div>
</template>

<script>
    import Kefu from '@/components/Kefu'
    export default {
        name: 'Dashboard',
        components: {Kefu},
        methods:{
            
        }
    }
</script>

<style scoped>

</style>