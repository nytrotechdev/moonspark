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
                        <a href="#" class="quick_links">about</a>
                        <a href="#" class="quick_links">announcements</a>
                        <a href="#" class="quick_links">risks</a>
                        <a href="#" class="quick_links">Terms & privacy policy</a>
                        <a href="#" class="quick_links">restrictions</a>
                        <a href="#" class="quick_links">contact</a>
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
