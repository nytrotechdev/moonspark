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
            <a href="javascript:void(0)">Transction Detail</a>
          </li>
        </ol>
      </div>
    </div>
    <!-- row -->

    <div class="row">
      <div class="col-xl-12">
        <div class="card task-card">
          <div class="card-body">
            <div class="row row-sm mg-b-10 first-parent" v-if="transaction">
                <div class="form-group col-12">
                    <h4 for="">Project Title</h4>
                    <p>{{ transaction.project.project_name }}</p>
                </div>
                <div class="form-group col-12">
                    <h4 for="">Client</h4>
                    <p>{{ transaction.client.name }}</p>
                </div>
                <div class="form-group col-12">
                    <h4 for="">From Account</h4>
                    <p>{{ transaction.from_address }}</p>
                </div>
                <div class="form-group col-12">
                    <h4 for="">To Account</h4>
                    <p>{{ transaction.to_address }}</p>
                </div>
                <div class="form-group col-12">
                    <h4 for="">Type</h4>
                    <p v-if="transaction.type == 0">Recieve</p>
                    <p v-if="transaction.type == 1">Sent</p>
                </div>
                <div class="form-group col-12">
                    <h4 for="">Token</h4>
                    <p v-text="transaction.token ? transaction.token : transaction.project.project_ticker"></p>
                </div>
                <div class="form-group col-12">
                    <h4 for="">Amount</h4>
                    <p>{{ transaction.amount }}</p>
                </div>
                <div class="form-group col-12">
                    <h4 for="">Transaction Hash</h4>
                    <p>{{ transaction.transaction_hash }}</p>
                </div>
                <div class="form-group col-12">
                    <h4 for="">Transaction Screenshot</h4>
                    <p v-if="!transaction.screenshot">N/A</p>
                    <p><a :href="transaction.screenshot" target="_blank">View</a></p>
                </div>
                <div class="form-group col-12">
                    <h4 for="">Status</h4>
                    <p><label class="badge badge-warning" v-if="transaction.status == 0">Pending</label></p>
                    <p><label class="badge badge-success"  v-if="transaction.status == 1">Success</label></p>
                    <p><label class="badge badge-danger"  v-if="transaction.status == 2">Failed</label></p>
                </div>
                <div v-if="transaction.status == 0" class="form-group col-12">
                    <h4 for="">Change Status</h4>
                    <select v-model="status">
                        <option :value="0">Pending</option>
                        <option :value="1">Success</option>
                        <option :value="2">Failed</option>
                    </select>
                </div>
                <div class="form-group col-12" v-if="status == 2">
                    <h4 for="">Rejection Reason</h4>
                    <textarea v-model="reason" class="form-control"  
                        placeholder="Enter Rejection Reason"></textarea>
                </div>

                <div v-if="transaction.status == 0" class="form-group col-12">
                        <button type="button" class="btn btn-primary"
                            @click="update">Save</button>
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
      transaction: undefined,
      status: "",
      baseUrl: window.axios.defaults.baseURL,
    };
  },
  components: {
    editor: Editor,
  },
  mounted() {
    this.getTransaction();
  },
  methods: {
    getTransaction() {
        axios.get('/transactions/'+this.$route.params.id)
            .then(({data}) => {
                this.transaction = data;
                this.status = data.status;
            });
    },
    update() {
      axios
        .post(`/transactions/${this.$route.params.id}`, {
            reason: this.reason,
            status: this.status,
        })
        .then(({ data }) => {
          this.$toastr.success(data.message, "Success");
          this.getTransaction();
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
