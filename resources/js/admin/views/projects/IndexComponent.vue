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
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">All Projects</a></li>
                </ol>
            </div>
        </div>
        <!-- row -->


        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <router-link class="mt-2" :to="{ name: 'projects.create'}"><h4 class="card-title">Create Project</h4></router-link>
                    </div>

                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="projectTable" class="table display" style="min-width: 845px">
                                <thead>
                                    <tr>
                                        <th>Project ID</th>
                                        <th>Created At</th>
                                        <th>Client Name</th>
                                        <th>Project Name</th>
                                        <th>Project Type</th>
                                        <th>No of Token</th>
                                        <th>Max no of Token</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody v-if="data.length">
                                    <tr v-for="(project, index) in data" :key="index">
                                        <td>{{project.id}}</td>
                                        <td>{{project.created_date}}</td>
                                        <td>{{project.client.name}}</td>
                                        <td>{{project.project_name}} - {{ project.project_ticker }}</td>
                                        <td>{{project.project_type}}</td>
                                        <td>{{project.no_of_token}}</td>
                                        <td>{{project.max_no_of_token}}</td>
                                        <td>
                                            <div class="d-flex">
                                                <router-link :to="{ name: 'projects.edit', params: { id:  project.id } }" title="View Task"
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
            this.getProject();
        },
        methods: {
            getProject() {
                if (this.table !== undefined)
                    this.table.destroy();
                let query = {
                    status: typeof this.$route.query.status !== 'undefined' ? this.$route.query.status : '',
                }
                axios.get(`/project?${this.buildqueryparams(query)}`)
                    .then(({data}) => {
                        this.data = data;
                        setTimeout(() => this.table = $('#projectTable').DataTable(), 100);
                    });
            },
        },
        watch: {
            '$route' : function() {
                this.getProject();
            },
        }
    }
</script>

