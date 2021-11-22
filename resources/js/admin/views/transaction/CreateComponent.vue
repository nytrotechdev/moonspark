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
            <router-link :to="{ name: 'transactions' }"
              >All Transaction</router-link
            >
          </li>
          <li class="breadcrumb-item active">
            <a href="javascript:void(0)">Transction Create</a>
          </li>
        </ol>
      </div>
    </div>
    <!-- row -->

    <div class="row">
      <div class="col-xl-12">
        <div class="card task-card">
          <div class="card-body">
            <div class="row row-sm mg-b-10 first-parent" >
                <div class="form-group col-12">
                    <h4 for="">Project</h4>
                    <select class="form-control" v-model="transaction.project_id">
                        <option value="">Select Project</option>
                        <option v-for="(project, pid) in projects" :key="pid" :value="project.id">
                            {{ project.project_name }}
                        </option>
                    </select>
                </div>
                <div class="form-group col-12">
                    <h4 for="">Client</h4>
                    <select class="form-control" v-model="transaction.client_id">
                        <option value="">Select User</option>
                        <option v-for="(user, pid) in users" :key="pid" :value="user.id">
                            {{ user.name }}
                        </option>
                    </select>
                </div>
                <div class="form-group col-12">
                    <h4 for="">From Account</h4>
                    <input type="text" v-model="transaction.from_address"  class="form-control">
                </div>
                <div class="form-group col-12">
                    <h4 for="">To Account</h4>
                    <input type="text" v-model="transaction.to_address" class="form-control">
                </div>
                <div class="form-group col-12">
                    <h4 for="">Token</h4>
                    <input placeholder="E.g CLA" type="text" v-model="transaction.token" class="form-control">
                </div>
                <div class="form-group col-12">
                    <h4 for="">Amount</h4>
                    <input placeholder="E.g 10000" type="text" v-model="transaction.amount" class="form-control">
                </div>
                <div class="form-group col-12">
                    <h4 for="">Transaction Hash</h4>
                    <input placeholder="E.g 0x000000" type="text" v-model="transaction.transaction_hash" class="form-control">
                    <p>{{ transaction.transaction_hash }}</p>
                </div>
                <div class="form-group col-12">
                    <h4 for="">Transaction Screenshot</h4>
                    <input type="file" @change="(e) => transaction.ss = e.target.files[0]" 
                        class="form-control">
                </div>
                <div class="form-group col-12">
                    <h4 for="">Change Status</h4>
                    <select v-model="transaction.status">
                        <option :value="0">Pending</option>
                        <option :value="1">Success</option>
                        <option :value="2">Failed</option>
                    </select>
                </div>
                <div class="form-group col-12">
                        <button type="button" class="btn btn-primary"
                            @click="store">Save</button>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
export default {
  data() {
    return {
      transaction: {
          project_id: "",
          client_id: "",
          from_address: window.user.wallet_address,
          status: 0,
      },
      projects: [],
      users: [],
      status: "",
      baseUrl: window.axios.defaults.baseURL,
    };
  },
  components: {
    editor: Editor,
  },
  mounted() {
    this.getProjects();
    this.getClients();
  },
  methods: {
    getProjects(){
        axios.get(`/project?status=1`)
            .then(({data}) => {
                this.projects = data;
            });

    },
    getClients(){
        axios.get(`/user?status=1`)
            .then(({data}) => {
                this.users = data;
            });
    },    
    store() {
      var form_data = new FormData();

      for ( var key in this.transaction ) {
          form_data.append(key, this.transaction[key]);
      }        
      axios
        .post(`/transactions`, form_data)
        .then(({ data }) => {
          this.$toastr.success(data.message, "Success");
          this.$router.push({ name: 'transactions' });
        })
        .catch((e) => {
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
