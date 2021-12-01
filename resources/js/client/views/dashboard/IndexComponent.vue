<template>
    <div>
        <section class="banner">
            <video autoplay loop muted>
                <!-- <source src="/assets/img/video2.mp4" type="video/webm"> -->
                <source src="/assets/img/video2.mp4" type="video/mp4">
            </video>
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
                                            <p v-text="project.tokenPrice ? `${project.tokenPrice.amount} USD` : '1 USD'"></p>
                                            <p>{{ project.market_cape }}</p>
                                            <p>{{ project.diluted_market_cape }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card_foot">
                                    <router-link :to="{ name: 'project.show', params: { id: project.id } }">See More</router-link>
                                    <button class="card-btn" 
                                    @click="buyToken(project)" 
                                    >buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    <div class="modal fade" id="buyToken" tabindex="-1" role="dialog" aria-labelledby="buyTokenTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="buyCoin">
                    <form>
                        <h3>Proceed to Buy</h3>
                        <div class="notice">
                            <strong>Note:</strong> You can pay for token in Eth or BNB, Once the transaction is confirmed, 
                            The system will transfer the token to your wallet address
                        </div>
                        <div class="notice">
                            <strong>Note:</strong> Make Sure while sending Eth or BSC it is connected to appropriate 
                            Chain Network, <a 
                            style="color: black"
                            href="https://moonspark.finance/wallet-guide/" target="_blank">Refer, https://moonspark.finance/wallet-guide/ </a>
                        </div>
                        <div class="form-group">
                            <label>Enter Number of Tokens</label>
                            <input type="number" class="form-control" v-model="token_qty">
                        </div>
                        <div class="form-group" v-if="currentProject.token_price && rates">
                            <label class="d-flex align-items-center justify-content-between">
                                <span>Tokens Fiat Price:</span>
                                <span class="tokens_to_be_transfered"></span>
                            </label>
                            <label class="d-flex align-items-center justify-content-between">
                                <button @click="() => initiateTransaction(1)" class="main-btn btn-silver" type="button">
                                    <img style="width:20px" src="/assets/img/eth.png">
                                    {{ parseFloat(rates.eth) * (parseFloat(currentProject.token_price.amount) * token_qty) }} ETH
                                </button>
                            </label>
                            <label class="d-flex align-items-center justify-content-between">
                                <button @click="() => initiateTransaction(2)" class="main-btn btn-silver" type="button">
                                    <img style="width:20px" src="/assets/img/bnblogo.png"> {{ parseFloat(rates.bnb) * (parseFloat(currentProject.token_price.amount) * token_qty) }} BNB                                    
                                </button>
                            </label>

                        </div>
                        <div class="form-button">
                            <button class="main-btn btn-transparent" data-dismiss="modal">cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>    


    </div>
</template>
<style>
    .notice{
        margin-bottom: 18px;
        background: gold;
        border-radius: 10px;
        padding: 10px;        
    }

    .btn-silver {
        background: slategray;
        border: 1px solid slategray !important;
    }
</style>
<script>
import Moralis from 'moralis';
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
      token_qty: 1,
      receiver_address: "",
      currentProject: {
          tokenPrice: {}
      },
      ethNode: "https://speedy-nodes-nyc.moralis.io/a814e6dfe3c65bf59745d0a6/eth/mainnet",
      bscNode: "https://speedy-nodes-nyc.moralis.io/a814e6dfe3c65bf59745d0a6/bsc/mainnet",
      rates: undefined,
      initTrans: false,
    };
  },
  mounted() {
    this.getData();
    this.getReceiverAddress();
    this.init();
    this.getExchangeRate();
  },
  methods: {
    async init(){
        if(!Moralis.User.current()){
            // this.authenticate();
            // Moralis.initPlugins();
        }
    },
    async changeProvider(){
        const web3 = await Moralis.Web3.enable();
        await web3.currentProvider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x89" }]
        });        
    },
    getReceiverAddress(project){
      axios.get('get-receiver-address')
        .then(({data}) => {
            this.receiver_address = data;
        }).catch( e => {
          let errors = e.response.data.errors;
          Object.keys(errors).forEach(key=>{
              this.$toastr.error(errors[key], "Error!");
          });
        });

    },
    async initiateTransaction(type){
        document.body.classList.add('loading-indicator_v1');

        if(!this.receiver_address){
            this.$toastr.error("You can not send asset at this moment, Contact Support", "Error!");
        }   

        if(type == 1){
            let amount = parseFloat(this.rates.eth) * (parseFloat(this.currentProject.token_price.amount) * this.token_qty);
            const options = {type: "native", amount: Moralis.Units.ETH(amount),  receiver: this.receiver_address };
            let result;
            try {
                result = await Moralis.transfer(options);
                this.saveTransaction(result);
            }
            catch(e){
                console.log(e);
                this.$toastr.error("The transaction can not be processed", "Error");
                document.body.classList.remove('loading-indicator_v1');
                return;
            }
        }
        else{
            let amount = parseFloat(this.rates.bnb) * (parseFloat(this.currentProject.token_price.amount) * this.token_qty);
            const options = {type: "erc20", 
                 amount: Moralis.Units.Token(amount, "18"), 
                 receiver: this.receiver_address,
                 contractAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
            };
            let result;
            try {
                result = await Moralis.transfer(options);
                this.saveTransaction(result);
            }
            catch(e){
                console.log(e);
                this.$toastr.error("The transaction can not be processed", "Error");
                return;
            }
        }
    },
    saveTransaction(result){
        let data = {
            payload : result,
            receiver_address: result.to_address,
            amount: result.value,
            transaction_hash: result.transaction_hash,
            sender: result.from_address,            
        }
        axios   
            .post("transaction/"+this.currentProject.id+"/transfer", data)
            .then(({ data }) => {
                this.$toastr.success(data.message, "Success!");
                $('#buyToken').modal('hide');
                this.$router.push({ name: 'transaction'} );
                this.initTrans = false;
                document.body.classList.remove('loading-indicator_v1');
            })
            .catch((e) => {
            console.log(e);
            let errors = e.response.data.errors;
            Object.keys(errors).forEach((key) => {
                this.$toastr.error(errors[key], "Error!");
            });
        });      
    },    
    buyToken(project){
        this.currentProject = project;
        $('#buyToken').modal('show');
    },
    getData() {
      axios.get(`/get-latest-projects?limit=3`).then(({ data }) => {
        this.projects = data;
      });
    },
    async getExchangeRate() {
        axios.post('/exchange-rate')
            .then(({data}) => {
                this.rates = data;
            });

    }    
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
