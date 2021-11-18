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
                    <p><span>Available Tokens</span> <span>{{ project.available_balance }}</span></p>
                    <p><span>Price</span> <span>{{ project.token_price.amount }} {{ project.token_price.currency }} </span></p>
                    <!-- <p><span>token sales last 24 hrs</span> <span>$2,400</span></p>
                    <p><span>token sales to date</span> <span>$37,678</span></p> -->
                </div>
                <a href="javascript:;" 
                @click="rate = project.token_price"
                data-toggle="modal" data-target="#setRate" class="account-section-btn btn-success">Set Rate</a>
                <a href="javascript:;"  class="account-section-btn btn-danger">Deposit Coins</a>
                <a href="javascript:;"  class="account-section-btn btn-primary">History</a>

            </div>
          </div>
          
          <div class="row align-items-center justify-content-center p-4 m-4">
            <!-- <a href="" class="account-section-btn btn-success">transfer in</a>
            <a href="" class="account-section-btn btn-danger">transfer out</a>
            <a href="" class="account-section-btn btn-primary">history</a> -->
          </div>
        </div>
      </div>
    </section>

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


  </div>
</template>
<style>
.account_coin_details {
  margin-right: 15px;
}
</style>
<script>
import Datepicker from "vuejs-datepicker";
export default {
  data() {
    return {
      projects: [],
      rate: undefined,
      from: "",
      to: "",
      query: "",
      table: undefined,
      type_class: ["default", "success", "warning", "danger"],
    };
  },
  components: {
    Datepicker,
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      if (this.table !== undefined) this.table.destroy();
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
