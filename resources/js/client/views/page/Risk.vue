<template>
  <div>
    <section class="banner">
      <h1 style="text-align: center" class="">{{ $route.meta.title }}</h1>
    </section>
    <div class="container-fluid pl-5 pr-5 mt-5 pb-5 mb-2">
      <div class="wrapper pl-4 pr-5 mt-5">
        <div class="wpb_wrapper">
          <p>
            <span style="font-weight: 400"
              >CryptoQuestion or MoonSpark does not take responsibility for the
              information displayed on our platform. This is the sole
              responsibility of the project owner. By accepting project
              submissions this does not constitute a recommendation to buy.
              Investors should always conduct their own independent&nbsp; due
              diligence and seek financial advice where
              appropriate.&nbsp;&nbsp;</span
            >
          </p>
          <p>
            <span style="font-weight: 400"
              >Investing in cryptocurrencies is high risk, you may lose 100% of
              your investment. Micro cap cryptocurrencies can have poor
              liquidity and it may be impossible to sell your tokens. Only
              invest what you can afford to lose.</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
h6 {
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
    };
  },
  components: {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>
