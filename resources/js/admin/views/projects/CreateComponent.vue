<template>
  <div class="container-fluid">
    <!-- Add Project -->
    <div class="row page-titles mx-0">
      <div class="col-sm-6 p-md-0">
        <div class="welcome-text">
          <h4>{{ $route.meta.title }}</h4>
        </div>
      </div>
      <div class="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'index' }">Home</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'projects' }">All Project</router-link>
          </li>
          <li class="breadcrumb-item active">
            <a href="javascript:void(0)">Create Project</a>
          </li>
        </ol>
      </div>
    </div>
    <!-- row -->

    <div class="row">
      <div class="col-xl-12">
        <div class="card task-card">
          <div class="card-body">
            <form id="form1" enctype="multipart/form-data">
              <div class="row row-sm mg-b-10 first-parent">
                <div class="form-group col-md-4">
                  <label>Select User:</label>
                  <select v-model="project.user_id" class="form-control">
                      <option v-for="(client, cid) in clients" :value="client.id" :key="cid">{{ client.name }}</option>
                  </select>
                </div>
                <div class="form-group col-md-4">
                  <label>Project Name:</label>
                  <input
                    type="text"
                    name="Project-name"
                    v-model="project.project_name"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label>Project Ticker:</label>
                  <input
                    type="text"
                    name="Project-ticker"
                    v-model="project.project_ticker"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label>Project Logo:</label>
                  <input
                    type="file"
                    @change="(e) => project.logo = e.target.files[0]"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label> Project Summary:</label>
                  <textarea
                    name="your-message"
                    cols="20"
                    rows="4"
                    v-model="project.project_detail"
                    class="form-control"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label>Funds raised to date</label>
                  <input
                    type="text"
                    v-model="project.fund_raised_todate"
                    value=""
                    class="form-control"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label>Total raised to date:</label>
                  <input
                    type="text"
                    v-model="project.total_raised_todate"
                    value=""
                    class="form-control"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label>Platform:</label>
                  <select v-model="project.project_type" class="form-control">
                      <option v-for="(platform, pid) in supported_platform" :value="platform" :key="pid">{{ platform }}</option>
                  </select>
                </div>
                <div class="form-group col-md-12">
                  <label> Token use case: </label>
                  <textarea
                    name="token-use-case"
                    v-model="project.token_usecase"
                    class="form-control"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>Website URL</label>
                  <input
                    type="text"
                    name="Website-URL"
                    v-model="project.website"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>Medium link:</label>
                  <input
                    type="text"
                    name="Medium-link"
                    v-model="project.medium"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>Twitter link:</label>
                  <input
                    type="text"
                    name="Twitter-link"
                    v-model="project.twitter"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>Telegram group:</label>
                  <input
                    type="text"
                    name="Telegram-group"
                    v-model="project.telegram"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>Your TG Handle:</label>
                  <input
                    type="text"
                    name="Your-TG-Handle"
                    v-model="project.tg_handle"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>Your email address:</label>
                  <input
                    type="email"
                    name="your-email"
                    v-model="project.email"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>Name of CEO:</label>
                  <input
                    type="text"
                    name="Name-CEO"
                    v-model="project.name_of_ceo"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>Name of CTO:</label>
                  <input
                    type="text"
                    name="Name-CTO"
                    v-model="project.name_of_cto"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label> Short Bio of CEO:</label>
                  <textarea
                    v-model="project.bio_of_ceo"
                    name="Short-CEO"
                    rows="2"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group col-md-6">
                  <label>Short Bio of CTO</label>
                  <textarea
                    name="Short-CTO"
                    rows="2"
                    v-model="project.bio_of_cto"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group col-md-6">
                  <label>Short Video Presentatio</label>
                  <input
                    type="file"
                    @change="(e) => project.short_video = e.target.files[0]"
                    name="ShortVideoPresentation"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label> Is business Incorporation ?</label>
                  <br/>
                  <label>
                    <input type="radio"
                        v-model="project.project_business_incorporated"
                        value="yes"
                        name="Incorporation-details"
                    >&nbsp;Yes
                  </label>
                  <label class="ml-2">
                    <input type="radio"
                        v-model="project.project_business_incorporated"
                        value="no"
                        name="Incorporation-details"
                    >&nbsp;No
                  </label>
                </div>
                <div class="form-group col-md-6">
                  <label>If Incorporation ! Where ?:</label>
                  <textarea
                    v-model="project.project_business_incorporated_where"
                    name="Incorporation-details"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group col-md-6">
                  <label> Is business licensed ?</label>
                  <br/>
                  <label>
                    <input type="radio"
                        v-model="project.project_business_lic"
                        value="yes"
                        name="Business-licensed"
                    >&nbsp;Yes
                  </label>
                  <label class="ml-2">
                    <input type="radio"
                        v-model="project.project_business_lic"
                        value="no"
                        name="Business-licensed"
                    >&nbsp;No
                  </label>
                </div>
                <div class="form-group col-md-6">
                  <label>If Business licensed ! Details ?</label
                  ><textarea
                    v-model="project.project_business_lic_list"
                    name="Business-details"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group col-md-6">
                  <label>License Plans</label
                  ><textarea
                    v-model="project.project_business_lic_plan"
                    name="Plans-details"
                    class="form-control"></textarea
                  >
                </div>
                <div class="form-group col-md-6">
                  <label>Tokenomics details</label
                  ><textarea
                    name="Tokenomics-details"
                    v-model="project.tokenomics_detail"
                    class="form-control"
                  ></textarea
                  >
                </div>
                <div class="form-group col-md-6">
                  <label>Project business model</label
                  ><textarea
                    name="business-model"
                    v-model="project.project_business_model"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group col-md-6">
                  <label
                    >Legal Opinion letter on utility vs. security token</label
                  >
                  <input
                    type="text"
                    v-model="project.legal_opinion"
                    name="Legal-Opinion-letter"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>
                    Names and titles of core team members and LinkedIn Bios</label>
                  <textarea
                    name="Bios"
                    v-model="project.core_team"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group col-md-6">
                  <label>Short summary of the teams experience</label
                  ><textarea
                    name="teams"
                    v-model="project.summary"
                    class="form-control"></textarea>
                </div>
                <div class="form-group col-md-6">
                  <label>Has the smart contract been audited?</label>
                  <br/>
                  <label>
                    <input type="radio"
                        v-model="project.smart_contract_audited"
                        value="yes"
                        name="smart_contract_audited"
                    >&nbsp;Yes
                  </label>
                  <label class="ml-2">
                    <input type="radio"
                        v-model="project.smart_contract_audited"
                        value="no"
                        name="smart_contract_audited"
                    >&nbsp;No
                  </label>
                </div>                
                <div class="form-group col-md-6">
                  <label> Smart contract audit information:</label>
                  <textarea
                    name="smart-contract"
                    v-model="project.smart_contract_audited_text"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group col-md-6">
                  <label>Is there a MVP</label>
                  <br/>
                  <label>
                    <input type="radio"
                        v-model="project.mvp"
                        value="yes"
                        name="mvp"
                    >&nbsp;Yes
                  </label>
                  <label class="ml-2">
                    <input type="radio"
                        v-model="project.mvp"
                        value="no"
                        name="mvp"
                    >&nbsp;No
                  </label>
                </div>                
                <div class="form-group col-md-12">
                  <label>Whitepaper</label>
                  <input
                    type="text"
                    name="Whitepaper"
                    v-model="project.whitepaper_link"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>Total followers across all social channels:</label>
                  <input
                    type="text"
                    name="social-channels"
                    v-model="project.total_follower"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>Partnerships in place:</label>
                  <input
                    type="text"
                    name="Partnerships"
                    v-model="project.partnership"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label>
                    Key components of project roadmap over the next 90 days:</label
                  >
                  <textarea
                    v-model="project.relevant_info"
                    name="roadmap"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group col-md-12">
                    <br/>
                    <h6>Questions about the Development Team:</h6>                    
                </div>

                <div class="form-group col-md-6">
                  <label>Names of Core Developers</label>
                  <input
                    type="text"
                    name="Core-Developers"
                    v-model="project.core_developer"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>Split between full-time and part-time:</label>
                  <input
                    type="text"
                    name="full-time-part"
                    v-model="project.split"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>Security concerns:</label>
                  <input
                    type="text"
                    name="concerns"
                    v-model="project.security_concerns"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-12">
                    <br/>
                    <h6>Information on your cryptocurrency:</h6>
                </div>
                <div class="form-group col-md-6">
                  <label>Contract:</label>
                  <input
                    type="text"
                    name="Contract"
                    v-model="project.contract"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>Contract Scan Link:</label>
                  <input
                    type="text"
                    name="scan_linl"
                    v-model="project.contract_link"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>Decimals:</label>
                  <input
                    type="number"
                    name="Decimals"
                    v-model="project.decimal"
                    class="form-control"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>Number of tokens in circulation:</label>
                  <input
                    type="number"
                    name="circulation"
                    v-model="project.no_of_token"
                    class="form-control"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>Max number of tokens:</label>
                  <input
                    type="number"
                    name="Max-number-tokens"
                    v-model="project.max_no_of_token"
                    class="form-control"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>Market cap:</label>
                  <input
                    type="text"
                    name="Market-cap"
                    v-model="project.market_cape"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>Fully diluted market cap:</label>
                  <input
                    type="text"
                    name="Fully-diluted-market-cap"
                    v-model="project.diluted_market_cape"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 col-sm-12 mt-5 mg-t-10">
                  <button
                    type="button"
                    class="btn btn-primary float-right"
                    @click="store"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#dropzone {
  background: none;
  border: 2px dashed #01aeee;
  border-radius: 15px;
  padding: 15px;
  text-align: center;
  margin: 0 0 20px 0;
}
.vue-input-tag-wrapper .input-tag {
  list-style-type: none;
  display: inline-block;
  margin: 10px 5px 0 0;
  border-radius: 25px;
  border: 2px solid #cfd2e4;
  padding: 10px 15px;
  font-size: 13px;
  color: #7d8094;
  font-weight: 500;
  background: #cfd2e4;
}
</style>
<script>
export default {
  data() {
    return {
      project: {},
      clients: [],
      supported_platform: window.supported_platform,
      baseUrl: window.axios.defaults.baseURL,
    };
  },
  components: {},
  mounted() {
    this.getTaskPreData();
  },
  methods: {
    
    getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    },
    getTaskPreData() {
      axios.get("/user").then(({ data }) => {
        this.clients = data;
      });
    },
    submitFiles() {
      this.$refs.myVueDropzone.myVueDropzone();
    },
    store() {

      var form_data = new FormData();

      for ( var key in this.project ) {
          form_data.append(key, this.project[key]);
      }

      axios
        .post("project", form_data)
        .then(({ data }) => {
            this.$toastr.success("Project is created succesfully", "Success!");
            this.$router.push({ name: "projects" , query: { status: 1 } });
        })
        .catch((e) => {
          console.log(e);
          let errors = e.response.data.errors;
          Object.keys(errors).forEach((key) => {
            this.$toastr.error(errors[key], "Error!");
          });
        });
    },
  },
  watch: {},
};
</script>
