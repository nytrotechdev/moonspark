<template>
    <div>
        <section class="banner">
        <div class="container-fluid">
            <div class="banner-body">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6 col-md-7 col-sm-12">
                <div class="banner-text">
                    <h1>
                    Invest in <br /><span>cryptocurrencies</span> <br />
                    of the future
                    </h1>
                    <p>
                    Invest in up and coming cryptocurrencies commission, spread
                    and gas free. We have made the process as easy as possible.
                    All you need is a wallet to get started and if you don’t have
                    one read the guide above for instructions on how to download
                    and set one up. MoonSpark is without doubt the safest and
                    easiest platform to buy your favorite small or micro cap
                    cryptocurrency.
                    </p>
                </div>
                </div>
                <div class="col-lg-6 col-md-5 col-sm-12">
                <div class="banner-img">
                    <img :src="`${baseUrl}/assets/img/side-logo.png`" alt="" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

        <section class="buyCrypto" id="buy_crypto">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <h2 class="heading text-center mb-5">
                        Buy Crypto
                    </h2>
                </div>
                <div class="row mt-5">
                    <div v-for="(project, pindex) in projects" :key="pindex" class="col-lg-4 col-md-6 col-sm-12">
                        <div class="card-wrapper">
                            <div class="crypto_card">
                                <div class="card_head">
                                    <span>{{ project.project_ticker }}</span>
                                    <h5>{{ project.project_name }}</h5>
                                    <figure>
                                        <img :src="project.logo" alt="">
                                    </figure>
                                </div>
                                <div class="card_body">
                                    <div class="dis">
                                        <p>
                                            {{ project.project_detail}}
                                        </p>
                                    </div>
                                    <div class="coin_details">
                                        <div class="row flex-column">
                                            <p>price</p>
                                            <p>market cap</p>
                                            <p>fully diluted</p>
                                        </div>
                                        <div class="row flex-column">
                                            <p>0.0</p>
                                            <p>{{ project.market_cape }}</p>
                                            <p>{{ project.diluted_market_cape }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card_foot">
                                    <router-link :to="{ name: 'project.show', params: { id: project.id } }">See More</router-link>
                                    <button class="card-btn" data-toggle="modal" data-target="#exampleModalCenter">buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
// import BarChart from "./BarChart.vue";
export default {
  components: {
    // BarChart,
  },
  data() {
    return {
      data: undefined,
      baseUrl: window.base_url,
      projects: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get(`/get-latest-projects?limit=3`).then(({ data }) => {
        this.projects = data;
      });
    },
  },
  watch: {
    filter: function () {
      this.getData();
    },
  },
};
</script>

<style>
</style>
