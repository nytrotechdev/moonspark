<template>


</template>

<style>
    .ps {
        height: 350px;
    }

</style>
<script>
    import MetisMenu from 'metismenujs';
    export default {
        components: {
            MetisMenu,
        },
        data() {
            return {
                shouldShow: true,
                baseUrl: window.base_url,
                user: window.user,
                currentNav: '/dashboard',
                items: [{
                        name: 'Dashboard',
                        icon: 'flaticon-144-layout',
                        path: '/dashboard',
                        image: false,
                        subItems: []
                    },
                    {
                        name: 'Dashboard',
                        icon: 'flaticon-144-layout',
                        path: '/dashboard',
                        image: false,
                        subItems: []
                    },

                    // { name: 'User Managment', icon: 'fa-users', path: '/user-management', image: false, subItems: [] },
                    // { name: 'Job Managment', icon: 'fa fa-briefcase', path: '/job-management', image: false, subItems: [] },
                    // { name: 'Project Management', icon: 'fa-project-diagram', path: '#', image: false, subItems: [] },
                    // { name: 'Package Managment', icon: 'fa-archive', path: '/package-managment', image: false, subItems: [] },
                    // { name: 'Commision Module', icon: 'fa-money-bill-alt', path: '/commision-module', image: false, subItems: [] },
                    // { name: 'Report Log', icon: 'fa-file-alt', path: '/report-log', image: false, subItems: [] },
                    // { name: 'Payment Log', icon: 'fa-money-bill-alt', path: '/payment-logs', image: false, subItems: [] },
                    // { name: 'Subscription Log', icon: 'fa-calendar-check', path: '/subscription-logs', image: false, subItems: [] },
                    // { name: 'Rate & Reviews', icon: 'fa-star', path: '/rate-and-reviews', image: false, subItems: [] },
                    // // { name: 'feedback', icon: 'fa-inbox', path: '/feedback', image: false, subItems: [] }
                ]
            }
        },

        mounted() {
            this.currentNav = this.$route.path;

            this.items.forEach(i => {
                if (this.currentNav.indexOf(i.path) >= 0 && i.subItems.length)
                    i.isOpen = true;
            });

            MetisMenu.attach('#menu');

            // this.shouldShow = this.$route.name !== 'notfound';
        },
        methods: {
            isActive(menu) {
                if (this.currentNav !== '/' + menu.path) {
                    console.log(!!menu.subItems.map(sm => sm.parent === menu.path).length);
                    return !!menu.subItems.map(sm => sm.parent === menu.path).length;
                }
                return this.currentNav === '/' + menu.path;
            },
            getClasses(menu, parent = true) {
                let c = {
                    'has-sub': menu.subItems.length > 0,
                    'open': menu.isOpen
                };

                if (!parent) {
                    c['open'] = false;
                    return c;
                }

                menu.isOpen = true;
                return c;
            },
            open(menu) {
                this.items.forEach(m => m.isOpen = false);
                menu.isOpen = true;
            }
        },
        watch: {
            '$route.path'() {
                this.currentNav = this.$route.path;
                // this.shouldShow = this.$route.name !== 'notfound';
            }
        }
    }

</script>
