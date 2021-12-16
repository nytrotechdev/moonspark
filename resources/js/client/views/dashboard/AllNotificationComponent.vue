<template>
    <div>
        <section class="banner"></section>
        <section class="project_summary">
        <div class="container">
            <div class="row align-items-center justify-content-center">
            <h2 class="heading text-center mt-5 mb-5">Notification</h2>
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
                        <th>Notification</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr :key="index"  v-for="(noti, index) in notifications">
                        <td>{{ ++index }}</td>
                        <td>{{ noti.data.notification_text || noti.data.text }}</td>
                        <td><timeago :datetime="noti.created_at"></timeago></td>
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
    export  default {
        components: {
        },
        data(){
            return {
                notifications: []
            }
        },
        mounted() {
            this.loadNotifications();
        },
        methods: {
            loadNotifications(){
                axios.get(`get-notifications?type=all`)
                    .then(({data}) => {
                        this.notifications = data;
                    }).catch( e => console.log(e))
            },
        },
        watch: {

        }
    }
</script>

<style>

</style>
