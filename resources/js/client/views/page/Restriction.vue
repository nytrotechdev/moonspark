<template>
  <div>
    <section class="banner">
      <h1 style="text-align: center" class="">{{ $route.meta.title }}</h1>
    </section>
    <div class="container-fluid pl-5 pr-5 mt-5 pb-5 mb-2">
      <div class="wrapper pl-4 pr-5 mt-5">
        <div class="wpb_wrapper">
          <p>
            <strong
              >Investors are restricted to investing up to $1,000 per day and up
              to $1,000 per transaction.</strong
            >
          </p>
          <p>
            MOONSPARK IS RESTRICTED TO, OR FOR THE ACCOUNT OR BENEFIT OF, A
            CITIZEN OR PERMANENT RESIDENT OF THE UNITED STATES, SINGAPORE OR THE
            PEOPLE’S REPUBLIC OF CHINA, OR ANY RESIDENT OF A COUNTRY IN WHICH
            AMERICAN EMBARGOES AND/OR SANCTIONS ARE IN EFFECT, WHETHER DOMICILED
            FOR TAX OR OTHERWISE, AND WHETHER RESIDENCE IS PRIMARY OR OTHERWISE.
            THIS INCLUDES NORTH KOREA, IRAN, SYRIA, SUDAN, AND CUBA. ANY
            INDIVIDUAL WHO MEETS THE ABOVE CRITERIA IS NOT ELIGIBLE TO TRADE ON
            THE MOONSPARK PLATFORM.
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
