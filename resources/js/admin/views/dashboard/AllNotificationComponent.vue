<template>
      <section id="configuration" class="search view-cause all-notifications">
    <div class="container-fluid">
        <!-- Add Project -->
        <div class="row page-titles mx-0">
            <div class="col-sm-6 p-md-0">
                <div class="welcome-text">
                    <h4>Notifications</h4>
                </div>
            </div>
        </div>
        <div class="row">

            <div class="col-lg-12 col-xl-12 col-sm-12" v-if="notifications.length > 0">
                <div class="noti-inner-cards" :key="index" v-for="(noti, index) in notifications">
                    <div class="card mt-3 p-3">
                        <div class="notification-title">
                            <h5>{{ noti.data.subject}}</h5>
                            <h4 v-if="(noti.read_at !== null)">New</h4>
                        </div>
                        <div class="noti-content">
                            <div class="media align-items-center">
                                <!-- <i class="fa fa-envelope-o" aria-hidden="true"></i> -->
                                <div class="media-body">
                                    <p>{{noti.data.notification_text || noti.data.text}}</p>

                                </div>
                                <h5><timeago :datetime="noti.created_at"></timeago></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div  class="col-lg-12 col-xl-12 col-sm-12" v-else>
                <p>0 Notifications found</p>
            </div>
        </div>

    </div>
      </section>
</template>

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
