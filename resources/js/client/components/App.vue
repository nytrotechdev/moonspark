<template>
    <div id="wrapper">
        <div class="container">
            <top-header></top-header>
        </div>        
        <router-view></router-view>
        <footer class="footer">
            <div class="container">
                <h2 class="heading">quick links</h2>
                <div class="footer_inner">
                    <div class="row align-items-center justify-content-lg-around flex-lg-row flex-sm-column">
                        <router-link :to="{ name: 'about'}" class="quick_links">about</router-link>
                        <router-link :to="{ name: 'announcement'}" class="quick_links">announcements</router-link>
                        <router-link :to="{ name: 'risk'}" class="quick_links">risks</router-link>
                        <router-link :to="{ name: 'term'}" class="quick_links">Terms & privacy policy</router-link>
                        <router-link :to="{ name: 'restriction'}" class="quick_links">restrictions</router-link>
                        <router-link :to="{ name: 'contact'}" class="quick_links">contact</router-link>
                    </div>
                </div>
                <div class="row justify-content-center align-items-center">
                    <div class="social_icons">
                        <div class="twitter" data-toggle="tooltip" data-placement="top" title="Twitter">
                            <i class="fab fa-twitter"></i>
                        </div>
                        <div class="telegram" data-toggle="tooltip" data-placement="top" title="Telegram">
                            <i class="fab fa-telegram"></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>        
    </div>

</template>
<script>
    export default {
        data(){
            return {
                show: false,
            }
        },
        mounted() {}
    }
</script>
