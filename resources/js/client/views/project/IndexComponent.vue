<template>
  <div>
    <section class="account-container">
      <div class="container">
        <div class="wrapper">
          <h3>My Projects</h3>
          <div class="row">
            <div v-for="(project, pindex) in projects" :key="pindex" class="col-md-4 account_coin_details">
                <div class="coin_head">
                <figure class="coin_icon">
                    <img :src="project.logo" alt="" />
                </figure>
                <div class="coin_name">
                    <h6>{{ project.project_ticker }}</h6>
                    <div class="coin_dis">
                    <p>{{ project.project_name }}</p>
                    <!-- Project View -->
                    <router-link :to="{ name: 'project.show', params: { id: project.id } }" class="btn-gold">SEE MORE</router-link>
                    
                    </div>
                </div>
                </div>
                <div class="coin_details">
                    <p><span>Total Tokens</span> <span>{{ project.no_of_token }}</span></p>
                    <p><span>Available Tokens</span> <span>{{ project.available_balance }}</span></p>
                    <p><span>Price</span> <span>{{ project.token_price.amount }} {{ project.token_price.currency }} </span></p>
                    <!-- <p><span>token sales last 24 hrs</span> <span>$2,400</span></p>
                    <p><span>token sales to date</span> <span>$37,678</span></p> -->
                </div>
                <a href="javascript:;" 
                @click="rate = project.token_price"
                data-toggle="modal" data-target="#setRate" class="account-section-btn btn-success">Set Rate</a>

                <a href="javascript:;" 
                @click="getReceiverAddress(project)"
                class="account-section-btn btn-danger">Deposit Coins</a>

                <router-link :to="{ name: 'transaction', query: { project_id : project.id } }"  class="account-section-btn btn-primary">History</router-link>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Set Exchange Rate Modal Start -->
    <div class="modal fade" id="setRate" tabindex="-1" role="dialog" aria-labelledby="setRateTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="buyCoin">
              <form action="">
                  <h3>Set Exchange Rate</h3>
                  <div class="form-group">
                      <label>Currency:</label>
                      <input type="string" v-model="rate.currency" class="form-control">
                  </div>
                  <div class="form-group">
                      <label>Amount:</label>
                      <input type="number" v-model="rate.amount" class="form-control">
                  </div>
                  <div class="form-button">
                      <button class="main-btn btn-transparent" data-dismiss="modal">cancel</button>
                      <button @click="setRate" type="button" class="main-btn btn-gold">Update</button>
                  </div>
              </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Set Exchange Rate Modal End -->

    <!-- Set Deposit Modal Start -->
    <div class="modal fade" id="depositToken" tabindex="-1" role="dialog" aria-labelledby="depositTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="buyCoin">
              <form action="">
                  <h3>Deposit Token</h3>
                  <div class="form-button" v-if="!moralisUser" >
                        <button @click="authenticate()" type="button" class="main-btn btn-gold">
                            <img style="width:30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/512px-MetaMask_Fox.svg.png">
                            Connect MetaMask Wallet
                        </button>
                  </div>
                  <div v-else>
                    <div class="form-group">
                        <label>Recipient:</label>
                        <p style="color: #fff" v-text="deposit.receiver_address" class=""></p>
                    </div>
                    <div class="form-group">
                        <label>Sender: <small>(Change if You are sending from different Metamask Account)</small></label>
                        <input type="text" v-model="deposit.sender" class="form-control">
                    </div>

                    <div class="form-group">
                        <label>Amount:</label>
                        <input type="number" v-model="deposit.amount" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Upload Screenshot:</label>
                        <input accept="image/*" type="file" @change="(e) => deposit.ss = e.target.files[0]" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Enter Transaction ID (Hash):
                            <a target="_blank" href="/assets/img/helpdesk_1.png">View</a>
                        </label>
                        <input type="text" v-model="deposit.transaction_hash" class="form-control">
                    </div>

                    <div class="form-button">
                        <button type="button" class="main-btn btn-transparent" data-dismiss="modal">cancel</button>
                        <button @click="depositToken" type="button" class="main-btn btn-gold">Next</button>
                    </div>

                  </div>
              </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Set Deposit Modal End -->


  </div>
</template>
<style>
.account_coin_details {
  margin-right: 15px;
}
</style>
<script>
import Moralis from 'moralis';
export default {
  data() {
    return {
      projects: [],
      currentProject: undefined,
      rate: {},
      deposit: {
        sender: this.$user.wallet_address,
        receiver_address: '',
      },
      from: "",
      to: "",
      query: "",
      table: undefined,
      user: undefined,
      moralisUser: Moralis.User.current(),
      web3: undefined,
      type_class: ["default", "success", "warning", "danger"],
      moralis_creds: window.moralis,
    };
  },
  components: {
  },
  mounted() {
    this.getProjects();
    // this.getReceiverAddress();
    // this.getTokenBalances();
  },
  methods: {
    depositToken(){

      var form_data = new FormData();

      for ( var key in this.deposit ) {
          form_data.append(key, this.deposit[key]);
      }
      axios
        .post("transaction/"+this.currentProject.id+"/deposit", form_data)
        .then(({ data }) => {
            this.$toastr.success(data.message, "Success!");
            $('#depositToken').modal('hide');
            this.deposit = {
              sender: this.$user.wallet_address,
              receiver_address: '',
            };
            this.getProjects();
        })
        .catch((e) => {
          console.log(e);
          let errors = e.response.data.errors;
          Object.keys(errors).forEach((key) => {
            this.$toastr.error(errors[key], "Error!");
          });
        });      
    },
    getReceiverAddress(project){
      axios.get('get-receiver-address')
        .then(({data}) => {
            this.deposit.receiver_address = data;
            this.currentProject = project; 
            $('#depositToken').modal('show');
        }).catch( e => {
          let errors = e.response.data.errors;
          Object.keys(errors).forEach(key=>{
              this.$toastr.error(errors[key], "Error!");
          });
        });

    },
    getProjects() {
      let query = {
        status:
          typeof this.$route.query.status !== "undefined"
            ? this.$route.query.status
            : "",
        title: this.query,
      };
      axios
        .get(`/projects?${this.buildqueryparams(query)}`)
        .then(({ data }) => {
          this.projects = data;
          this.rate = this.projects
        });
    },
    setRate(){
      axios.post(`/projects/${this.rate.project_id}/set-rate`, this.rate)
        .then(({ data }) => {
            $('#setRate').modal('hide');
            this.getProjects();
        }).catch( e => {
          let errors = e.response.data.errors;
          Object.keys(errors).forEach(key=>{
              this.$toastr.error(errors[key], "Error!");
          });
        });

    }
  },
  watch: {
    $route: function () {
      this.getProjects();
    },
    // 'excess' : function() {
    //     this.getTask();
    // },
    // 'extensive' : function() {
    //     this.getTask();
    // },
    // 'recurring' : function() {
    //     this.getTask();
    // },
  },
};
</script>
