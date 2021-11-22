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
                    <li class="breadcrumb-item"><router-link :to="{name: 'index'}">Home</router-link></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">All Transaction</a></li>
                </ol>
            </div>
        </div>
        <!-- row -->


        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <router-link :to="{ name: 'transactions.create'}" class="mt-2"><h4 class="card-title">Create Transaction</h4></router-link>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="transTable" class="table display" style="min-width: 845px">
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
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(transaction, index) in data" :key="index">
                                        <td>{{ transaction.id }}</td>
                                        <td>{{ transaction.created_date }}</td>
                                        <td>{{ transaction.project.project_name }}</td>
                                        <td>{{ transaction.client.name }}</td>
                                        <td 
                                        @click="copyToClickBoard(transaction.from_address)"
                                        class="address_pointer" data-placement="top" data-toggle="tooltip" :title="transaction.from_address" >{{ transaction.trim_sender }}</td>
                                        <td 
                                        @click="copyToClickBoard(transaction.to_address)"
                                        class="address_pointer" data-placement="top" data-toggle="tooltip" :title="transaction.to_address" >{{ transaction.trim_reciever }}</td>
                                        <td>
                                            <span v-if="transaction.type == 0">Recieve</span>
                                            <span v-if="transaction.type == 1">Sent</span>
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
                                        <td>
                                            <div class="d-flex">
                                                <router-link :to="{ name: 'transactions.show', params: { id:  transaction.id } }" title="View Transaction"
                                                    class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-eye"></i></router-link>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    export default {
        data() {
            return {
                data: [],
                from:'',
                to:'',
                table: undefined,
                type_class: [
                    'default',
                    'success',
                    'warning',
                    'danger',
                ]
            }
        },
        components: { Datepicker },
        mounted() {
            this.getTransaction();
        },
        methods: {
            getTransaction() {
                axios.get('/transactions')
                    .then(({data}) => {
                        this.data = data;
                        setTimeout(() => {
                            this.table = $('#transTable').DataTable();
                            $('[data-toggle="tooltip"]').tooltip();

                        }, 100);
                    });
            },
        },
        watch: {
            $route: function () {
                this.getTransaction();
            },
        },
    }
</script>

