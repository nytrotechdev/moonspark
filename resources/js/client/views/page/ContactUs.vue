<template>
    <div>
        <section class="banner">
            <h1 style="text-align: center;" class="">{{ $route.meta.title }}</h1>
        </section>
        <div class="container-fluid pl-5 pr-5 mt-5 pb-5 mb-2">
            <div class="wrapper pl-4 pr-5 mt-5">
                <div class="wpb_wrapper">
                    <p style="text-align: center;"><strong>For all inquiries please contact us
                        <a href="http://chat@cryptoquestion.tech">here</a></strong></p>
                    <p style="text-align: center;"><strong>Thank you for your interest in MoonSpark!
                    </strong></p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    h6{
        color: #fff;
        font-weight: bold;        
    }
</style>
<script>
    export default {
        data() {
            return {
                charge: 1,
                project: undefined,
                supported_platform: window.supported_platform,                
            }
        },
        components: {
        },
        mounted() {
        },
        methods: {

        },
        watch: {}
    }
</script>
