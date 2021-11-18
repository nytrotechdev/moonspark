import VueRouter from "vue-router";
import NotFound from "./components/NotFound";

// Dashboard
const DashboardComponent             = () => import(/* webpackChunkName: "client-dashboard" */ './views/dashboard/IndexComponent');

// Profile
const ProfileComponent          = () => import(/* webpackChunkName:  "client-profile-view" */ './views/profile/ProfileComponent');
const ContactComponent          = () => import(/* webpackChunkName:  "client-profile-contact" */ './views/profile/ContactComponent');

// Task
const ProjectComponent          = () => import(/* webpackChunkName: "client-project-index" */ './views/project/IndexComponent');
const ProjectCreateComponent    = () => import(/* webpackChunkName: "client-project-create" */ './views/project/CreateComponent');
const ProjectShowComponent      = () => import(/* webpackChunkName: "client-project-show" */ './views/project/ShowComponent');
const ProjectEditComponent      = () => import(/* webpackChunkName: "client-project-edit" */ './views/project/EditComponent');

// Blogs
const BlogComponent             = () => import(/* webpackChunkName: "client-page-index" */ './views/page/IndexComponent');

//faqs
const FaqComponent              = () => import(/* webpackChunkName: "client.reminder" */ './views/faq/IndexComponent');

const router = new VueRouter({
    mode: 'history',
    base: `${process.env.NODE_ENV === 'production' ? process.env.MIX_PRODUCTION_BASE : process.env.MIX_BASE_URL}/`,
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
            path: '/profile',
            name: 'profile',
            component: ProfileComponent,
            meta: {
                title: "Profile",
                description: ""
            }
        },
        {
            path: '/project',
            name: 'project',
            component: ProjectComponent,
            meta: {
                title: "All Project",
                description: ""
            }
        },
        {
            path: '/project/create',
            name: 'project.create',
            component: ProjectCreateComponent,
            meta: {
                title: "Project - Create",
                description: ""
            }
        },
        {
            path: '/project/:id',
            name: 'project.show',
            component: ProjectShowComponent,
            meta: {
                title: "Project - Detail",
                description: ""
            }
        },
        {
            path: '/project/:id/edit',
            name: 'project.edit',
            component: ProjectEditComponent,
            meta: {
                title: "Project - Edit",
                description: ""
            }
        },
        {
            path: '/faq',
            name: 'faqs',
            component: FaqComponent,
            meta: {
                title: "FAQs",
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
