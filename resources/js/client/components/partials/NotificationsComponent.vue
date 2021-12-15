<template>
    <li class="nav-item dropdown notification_dropdown">
        <a class="ai-icon" href="javascript:;" data-toggle="dropdown">
            <i class="fa fa-bell"></i>
            <span v-if="notifications && notifications.length>0" 
                    class="badge light text-white bg-primary rounded-circle">{{ notifications.length }}</span>
        </a>
        <div class="dropdown-menu dropdown-menu-right">
            <div id="dlab_W_Notification1" class="widget-media dz-scroll p-3 height380 ps">
                <ul class="timeline">
                    <li style="list-style:none" v-bind:key="index" v-if="notifications && notifications.length>0" 
                            class="scrollable-container media-list ps-container ps-theme-dark ps-active-y"
                        v-for="(notification, index) in notifications" :key="notification.id">
                        <a @click.prevent="redirectTo(index)" href="javascript:void(0)">
                            <div class="timeline-panel">
                                <div class="media-body">
                                    <h6 class="media-heading">{{ notification.data.subject }}</h6>
                                    <small>
                                        <timeago class="media-meta text-muted" :datetime="notification.created_at"></timeago>
                                    </small>
                                </div>
                            </div>
                        </a>
                    </li>
                    
                    <li style="list-style:none" class="">
                        <router-link class="dropdown-item text-muted text-center" :to="{ name: 'notifications'}">
                            View all notifications
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </li>
</template>
<style>
    .dropdown-notification > ul.dropdown-menu.dropdown-menu-media.dropdown-menu-right.show {
        max-height: 400px;
        overflow: scroll;
    }

    li.dropdown.dropdown-notification.nav-item a span {
        background: #482051;
        width: 20px;
    }
    .ps {
        overflow: auto !important;
    }    
</style>
<script>

    export default {
        data(){
            return {
                notifications: undefined,
                interval: undefined,
                baseUrl: window.base_url,
            };
        },
        mounted() {
            this.loadNotifications();
            // this.interval = setInterval(this.loadNotifications, 5000);
        },
        // beforeDestroy() { clearInterval(this.interval); },
        methods:{
            loadNotifications(){
                axios.get(`get-notifications?take=5`)
                    .then(({data}) => {
                        this.notifications = data;
                    }).catch( e => clearInterval(this.interval))
            },

            redirectTo(index){
                // axios.put(`notifications/${this.notifications[index].id}`)
                // .then(({message}) => {
                //     this.$router.push(this.notifications[index].data.link);
                //     this.notifications.splice(index, 1);
                // })
            },
            markAllRead(){
                // axios.put(`notifications`)
                //     .then(({message}) => {
                // })
            }
        }
    }
</script>
