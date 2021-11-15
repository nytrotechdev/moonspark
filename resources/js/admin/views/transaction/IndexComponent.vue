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
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="pageTable" class="table display" style="min-width: 845px">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Date</th>
                                        <th>Project</th>
                                        <th>Client</th>
                                        <th>From Account</th>
                                        <th>To Account</th>
                                        <th>Token</th>
                                        <th>Amount</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(page, index) in data" :key="index">
                                        <td>{{page.id}}</td>
                                        <td>{{page.created_date}}</td>
                                        <td>{{page.title}}</td>
                                        <td>{{page.mini_description}}</td>
                                        <td>{{page.author_name}}</td>
                                        <td>
                                            <div class="d-flex">
                                                <router-link :to="{ name: 'page.show', params: { id:  page.id } }" title="View BLog"
                                                    class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-eye"></i></router-link>
                                                <a href="javascript:;" @click.prevent="deletePage(page.id)" title="delete BLog" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
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

            },
            deletePage(id) {
                this.$dialog.confirm(`Are you sure you want to delete this page ? The Action is irreversible`).then(
                    dialog => {
                        axios.delete(`/blog/${id}`).then(d => {
                            this.getPages();
                            this.$toastr.success(d.data.message, 'Success', {});
                            dialog.close();
                        }).catch(d => {});
                    })
            }
        },
        watch: {
            '$route' : function() {
                this.getTransaction();
            },
        }
    }
</script>

