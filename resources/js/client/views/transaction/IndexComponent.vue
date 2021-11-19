<template>
  <div>
    <section class="banner"></section>
    <section class="project_summary">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <h2 class="heading text-center mt-5 mb-5">Transactions</h2>
        </div>
        <div class="card-wrapper">
          <div class="form col-12">
            <div class="table-responsive">
              <table
                id="transTable"
                class="table display"
              >
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Date</th>
                    <th>Project</th>
                    <th>Client</th>
                    <th>From Account</th>
                    <th>To Account</th>
                    <th>Type</th>
                    <th>Tokens</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(transaction, index) in data" :key="index">
                    <td>{{ transaction.id }}</td>
                    <td>{{ transaction.created_date }}</td>
                    <td>{{ transaction.project.project_name }}</td>
                    <td>{{ transaction.client.name }}</td>
                    <td>{{ transaction.trim_sender }}</td>
                    <td>{{ transaction.trim_reciever }}</td>
                    <td>
                        <span v-if="transaction.type == 0">Deposit</span>
                        <span v-if="transaction.type == 1">Buy</span>
                    </td>
                    <td>
                        <span v-text="transaction.token ? transaction.token : transaction.project.project_ticker"></span>
                    </td>
                    <td>{{ transaction.amount }}</td>
                    <td>
                        <label class="badge badge-warning" v-if="transaction.status == 0">Pending</label>
                        <label class="badge badge-success"  v-if="transaction.status == 1">Success</label>
                        <label class="badge badge-danger"  v-if="transaction.status == 2">Failed</label>

                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
    #transTable tr , #transTable td{
        background: transparent;
        color: #fff;    
    }

    .dataTables_filter label, .dataTables_length label, .dataTables_info, .dataTables_paginate a, .paginate_button{
        color: #fff !important;
    }

    .dataTables_filter input{
        background: transparent;
        color: #fff;
        border: 1px solid #ffffff6e !important;
    }
</style>
<script>
import Datepicker from "vuejs-datepicker";
export default {
  data() {
    return {
      data: [],
      from: "",
      to: "",
      table: undefined,
      type_class: ["default", "success", "warning", "danger"],
    };
  },
  components: { Datepicker },
  mounted() {
    this.getTransaction();
  },
  methods: {
    getTransaction() {
        axios.get('/transaction')
            .then(({data}) => {
                this.data = data;
                setTimeout(() => this.table = $('#transTable').DataTable(), 100);
            });
    },
  },
  watch: {
    $route: function () {
      this.getTransaction();
    },
  },
};
</script>

