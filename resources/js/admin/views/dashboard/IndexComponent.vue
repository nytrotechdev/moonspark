<template>
        <div class="container-fluid">

        <div class="form-head mb-sm-5 mb-3 d-flex flex-wrap align-items-center">
            <h2 class="font-w600 mb-2 mr-auto ">Dashboard</h2>
            <router-link class="btn btn-primary" :to="{ name: 'projects.create'}" >Create Project</router-link>

        </div>
        <div class="row justify-content-center">
            <div class="col-xl-3 col-sm-6 m-t35">
                <div @click="$router.push({ name: 'projects', query: { status: 1 } })"  class="card card-coin">
                    <div class="card-body text-center">
                        <div class="icon-wrp">
                            <!-- <i class="fi-rr-interactive"></i> -->
                        </div>
                        <div class="flex-d-custom">
                            <h2 class="text-black mb-2 font-w600 custom-big-stat">Active Projects</h2>
                            <p class="mb-0 fs-14 custom-dash-text-stats">
                                {{ data.active_project }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 m-t35">
                <div @click="$router.push({ name: 'projects', query: { status: 0 } })" class="card card-coin">
                    <div class="card-body text-center">
                        <div class="icon-wrp">
                            <!-- <i class="fi-rr-hourglass-end"></i> -->
                        </div>
                        <div class="flex-d-custom">
                            <h2 class="text-black mb-2 font-w600 custom-big-stat">Pending Projects</h2>
                            <p class="mb-0 fs-14 custom-dash-text-stats">
                                {{ data.pending_project }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 m-t35">
                <div class="card card-coin">
                    <div class="card-body text-center">
                        <div class="icon-wrp">
                            <!-- <i class="fi-rr-settings"></i> -->
                        </div>
                        <div class="flex-d-custom">
                            <h2 class="text-black mb-2 font-w600 custom-big-stat">Confirmed Transaction</h2>
                            <p class="mb-0 fs-14 custom-dash-text-stats">
                                {{ data.active_tran }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 m-t35">
                <div class="card card-coin">
                    <div class="card-body text-center">
                        <div class="icon-wrp">
                            <!-- <i class="fi-rr-refresh"></i> -->
                        </div>
                        <div class="flex-d-custom">
                            <h2 class="text-black mb-2 font-w600 custom-big-stat">Unconfirmed Transaction</h2>
                            <p class="mb-0 fs-14 custom-dash-text-stats">
                                {{ data.pending_tran }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 m-t35">
                <div class="card card-coin">
                    <div class="card-body text-center">
                        <div class="icon-wrp">
                            <!-- <i class="fi-rr-refresh"></i> -->
                        </div>
                        <div class="flex-d-custom">
                            <h2 class="text-black mb-2 font-w600 custom-big-stat">Rejected Transaction</h2>
                            <p class="mb-0 fs-14 custom-dash-text-stats">
                                {{ data.rejected_tran }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 m-t35">
                <div class="card card-coin">
                    <div class="card-body text-center">
                        <div class="icon-wrp">
                            <!-- <i class="fi-rr-cross-circle"></i> -->
                        </div>
                        <div class="flex-d-custom">
                            <h2 class="text-black mb-2 font-w600 custom-big-stat">No of Projects</h2>
                            <p class="mb-0 fs-14 custom-dash-text-stats">
                                {{ data.projects }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-3 col-sm-6 m-t35">
                <div class="card card-coin">
                    <div class="card-body text-center">
                        <div class="icon-wrp">
                            <!-- <i class="fi-rr-cross-circle"></i> -->
                        </div>
                        <div class="flex-d-custom">
                            <h2 class="text-black mb-2 font-w600 custom-big-stat">No of Users</h2>
                            <p class="mb-0 fs-14 custom-dash-text-stats">
                                {{ data.users }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="row">
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-header border-0 flex-wrap pb-0">
                        <div class="mb-3">
                            <h4 class="fs-20 text-black">Today's Project ({{ data.latest_project.length }})</h4>
                        </div>
                    </div>
                    <div class="card-body pb-0">
                            <table id="referralTable" class="table display" style="min-width: 845px">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Ticker</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                    v-for="(pro, index) in data.latest_project" :key="index">
                                        <td>{{pro.id}}</td>
                                        <td>{{pro.project_name}}</td>
                                        <td>{{pro.project_ticker}}</td>
                                        <td>
                                            <label class="badge badge-warning" v-if="pro.status == 0">Pending</label>
                                            <label class="badge badge-success"  v-if="pro.status == 1">Success</label>
                                        </td>
                                    </tr>
                                    <tr v-if="!reminders.length">
                                        <td colspan="6">No Project added today </td>
                                    </tr>
                                </tbody>
                            </table>

                    </div>
                </div>
            </div>
        </div>


    </div>

</template>

<script>
    import BarChart from "./BarChart.vue";
    export default {
        components: {
            BarChart,
        },
        data() {
            return {
                data: {
                    latest_project: [],
                    latest_transaction: [],                    
                },
                baseUrl: window.base_url,
                years: Array.from({
                    length: 10
                }, (value, index) => new Date().getFullYear() - index),
                filter: new Date().getFullYear(),
                employees: 0,
                user: undefined,
                task: {},
                referrels: [],
                reminders: [],

            }
        },
        mounted() {
            this.getData();
        },
        methods: {
            getData() {
                axios.get(`/dashboard?year=${this.filter}`)
                    .then(({data}) => {
                        this.data = data;
                    });
            }
        },
        watch: {
            filter: function () {
                this.getData();
            }
        }
    }
</script>

<style>

</style>
