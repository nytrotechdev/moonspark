<template>
    <div>
        <section class="banner">
            <h1 style="text-align: center;" class="">{{ $route.meta.title }}</h1>
        </section>
        <div class="container-fluid pl-5 pr-5 mt-5 pb-5 mb-2">
            <div class="wrapper pl-4 pr-5 mt-5">
                <h2 style="text-align: center;font-family:Lato;font-weight:700;font-style:normal" class="vc_custom_heading">COMING SOON!</h2>
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
