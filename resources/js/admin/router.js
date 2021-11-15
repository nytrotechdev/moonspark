import VueRouter from "vue-router";
import NotFound from "./components/NotFound";

// Dashboard
const DashboardComponent        = () => import(/* webpackChunkName: "admin-dashboard" */ './views/dashboard/IndexComponent');
const AllNotificationComponent  = () => import(/* webpackChunkName: "admin-dashboard" */ './views/dashboard/AllNotificationComponent');

// Profile
const ProfileComponent          = () => import(/* webpackChunkName:  "admin-profile-view" */ './views/dashboard/ProfileComponent');
const EditProfileComponent      = () => import(/* webpackChunkName:  "admin-profile-edit" */ './views/dashboard/EditProfileComponent');

// Project
const ProjectComponent             = () => import(/* webpackChunkName: "admin-projects-index" */ './views/projects/IndexComponent');
const ProjectCreateComponent       = () => import(/* webpackChunkName: "admin-projects-create" */ './views/projects/CreateComponent');
const ProjectEditComponent         = () => import(/* webpackChunkName: "admin-projects-edit" */ './views/projects/EditComponent');

// user
const UserComponent           = () => import(/* webpackChunkName: "admin-user-index" */ './views/user/IndexComponent');
const UserCreateComponent     = () => import(/* webpackChunkName: "admin-user-create" */ './views/user/CreateComponent');
const UserShowComponent       = () => import(/* webpackChunkName: "admin-user-show" */ './views/user/ShowComponent');
const UserEditComponent       = () => import(/* webpackChunkName:  "admin-user-edit" */ './views/user/EditComponent');

// Pages
const PageComponent             = () => import(/* webpackChunkName: "admin-page-index" */ './views/page/IndexComponent');
const PageCreateComponent       = () => import(/* webpackChunkName: "admin-page-create" */ './views/page/CreateComponent');
const PageShowComponent         = () => import(/* webpackChunkName: "admin-page-show" */ './views/page/ShowComponent');

//transactions
const TransactionComponent      = () => import(/* webpackChunkName: "admin-transaction-index" */ './views/transaction/IndexComponent');



const router = new VueRouter({
    mode: 'history',
    base: `${process.env.NODE_ENV === 'production' ? process.env.MIX_PRODUCTION_BASE : process.env.MIX_BASE_URL}/admin/`,
    routes: [
        {
            path: '/',
            name: 'index',
            component: DashboardComponent,
            meta: {
                title: "Dashboard",
                description: ""
            }
        },
        {
            path: '/dashboard',
            name: 'home',
            component: DashboardComponent,
            meta: {
                title: "Dashboard",
                description: ""
            }
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectComponent,
            meta: {
                title: "All projects",
                description: ""
            }
        },
        {
            path: '/projects/create',
            name: 'projects.create',
            component: ProjectCreateComponent,
            meta: {
                title: "Projects - Create",
                description: ""
            }
        },
        {
            path: '/projects/:id',
            name: 'projects.edit',
            component: ProjectEditComponent,
            meta: {
                title: "Projects - Edit",
                description: ""
            }
        },
        {
            path: '/users',
            name: 'user',
            component: UserComponent,
            meta: {
                title: "All Client",
                description: ""
            }
        },
        {
            path: '/users/create',
            name: 'user.create',
            component: UserCreateComponent,
            meta: {
                title: "Create Client",
                description: ""
            }
        },
        {
            path: '/users/:id',
            name: 'user.show',
            component: UserShowComponent,
            meta: {
                title: "View Client",
                description: ""
            }
        },
        {
            path: '/users/:id/edit',
            name: 'user.edit',
            component: UserEditComponent,
            meta: {
                title: "Edit Client",
                description: ""
            }
        },        
        {
            path: '/page',
            name: 'page',
            component: PageComponent,
            meta: {
                title: "All page",
                description: ""
            }
        },
        {
            path: '/transactions',
            name: 'transactions',
            component: TransactionComponent,
            meta: {
                title: "Transaction",
                description: ""
            }
        },
        {
            path: '/page/create',
            name: 'page.create',
            component: PageCreateComponent,
            meta: {
                title: "page Create",
                description: ""
            }
        },
        {
            path: '/page/:id',
            name: 'page.show',
            component: PageShowComponent,
            meta: {
                title: "Manage page",
                description: ""
            }
        },

        {
            path: '*',
            name: 'notfound',
            component: NotFound,
            meta: {
                title: "Not found",
                description: ""
            }
        },

    ],
});

router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if(nearestWithTitle) document.title = window.appname+" - " + nearestWithTitle.meta.title;

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

    // Skip rendering meta tags if there are none.
    if(!nearestWithMeta) return next();

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
        const tag = document.createElement('meta');

        Object.keys(tagDef).forEach(key => {
            tag.setAttribute(key, tagDef[key]);
        });

        // We use this to track which meta tags we create, so we don't interfere with other ones.
        tag.setAttribute('data-vue-router-controlled', '');

        return tag;
    })
        // Add the meta tags to the document head.
        .forEach(tag => document.head.appendChild(tag));

    next();
});

export default router;
