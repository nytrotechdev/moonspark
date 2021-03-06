require('../bootstrap');

// window.Vue = require('vue');
import Vue from 'vue';
import VueRouter from "vue-router";
import VuejsDialog from 'vuejs-dialog';
import VueToastr2 from 'vue-toastr-2';
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import 'vue-toastr-2/dist/vue-toastr-2.min.css'
import App from './components/App'
import router from "./router";
import * as VeeValidate from 'vee-validate';
import VueTimeago from 'vue-timeago'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import Img from './components/Img.vue';
import { param } from 'jquery';
window.toastr = require('toastr');
import { Fragment } from 'vue-fragment'
import VueClipboard from 'vue-clipboard2'


import Moralis from 'moralis';
// import Moralis from 'moralis/dist/moralis.min.js';

Vue.use(VueRouter);
Vue.use(Fragment);
// Vue.use(Moralis);
Vue.use(VueToastr2);
Vue.use(VeeValidate);
Vue.use(VueTimeago, {
    name: 'Timeago', // Component name, `Timeago` by default
    locale: 'en', // Default locale
});
Vue.use(PerfectScrollbar)
Vue.component('Img', Img);
Vue.use(VuejsDialog, {
    html: true,
    loader: true,
    okText: 'Proceed',
    cancelText: 'Cancel',
    // animation: 'bounce'
});
VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)
// Vue.prototype.Moralis = Moralis;
Vue.prototype.$baseUrl = window.base_url;
Vue.prototype.$placeApiKey = "AIzaSyAHPUufTlBkF5NfBT3uhS9K4BbW2N-mkb4";
Vue.prototype.$user = window.user;
Vue.prototype.$m_user = ""


Vue.mixin({
    mounted() {
        // this.initMoralis();
        this.scrollMeTo();
    },    
    methods:{
        scrollMeTo() {
          var queryElement = this.$route.query.target;
          if(typeof queryElement !== 'undefined'){
            var element = document.getElementById(queryElement);
            var top = element.offsetTop;        
            window.scrollTo(0, top);
  
          }
        },
        initMoralis(){
            let serverUrl = window.moralis.serverUrl;
            let appId = window.moralis.appId;
            Moralis.start({ serverUrl, appId });
            Moralis.enableWeb3();
            Moralis.initPlugins();

            // if(!Moralis.User.current())
            //     this.authenticate();

            // console.log('here');
        },
        async authenticate() {
          const provider = 'metamask';
          try {
            this.$m_user = await Moralis.authenticate({ provider });            
            this.$m_web3 = await Moralis.enableWeb3({ provider });
            console.log(this.$m_user);
          } catch (error) {
            console.log('authenticate failed', error);
          }
          // this.renderApp();
        },
        async logout(){
          try {
            await this.Moralis.User.logOut();
          } catch (error) {
            console.log('logOut failed', error);
          }
          result = '';
          // this.renderApp();
        },        
        copyToClickBoard(content){
          navigator.clipboard.writeText(content)
              .then(() => {
                this.$toastr.success("Copied", "Success!");
          })
              .catch(err => {
              console.log('Something went wrong', err);
          })
       
        },              
        dateFormat(date){
            return (date) ? date.getFullYear() + '-' + ((date.getMonth() +1).toString().padStart(2, 0)) + '-' + (date.getDate().toString().padStart(2, 0)) : '';
        },
        UTCdateFormat(date){
            return (date) ? date.getFullYear() + '-' + ((date.getMonth() +1).toString().padStart(2, 0)) + '-' + (date.getUTCDate().toString().padStart(2, 0)) : '';
        },
        dateFormatLaravel(date){
            let split = date.split('T');
            let time = split[1].split('.')[0];
            let d = `${split[0]} ${time}`;
            return new Date(d).toLocaleString();
        },
        humanDate(epoch){
            var myDate = new Date(Number(epoch)*1000);
            return myDate.toGMTString()+" "+myDate.toLocaleString();
        },
        buildqueryparams(params){
            return (new URLSearchParams(params)).toString()
        },
        numberFormat(number, digit){
            return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: digit }).format(number)
        }
    }
});

Vue.component('top-header', require('./components/partials/HeaderComponent.vue').default);
Vue.component('side-navbar', require('./components/partials/SidebarComponent.vue').default);

// let prod_arr = ['userproduction', 'production', 'boproduction', 'empproduction'];
// let baseUrl;
// if(prod_arr.includes(process.env.NODE_ENV))
//     baseUrl = '/conekpro';
// else
//     baseUrl = '';

let baseUrl = '';
window.axios.defaults.baseURL =  baseUrl + '/api/';

Vue.prototype.$baseUrl = window.base_url;
Vue.prototype.$placeApiKey = "AIzaSyAHPUufTlBkF5NfBT3uhS9K4BbW2N-mkb4";
Vue.prototype.$user = window.user;

const app = new Vue({
    el: '#app',
    components: { App },
    router,
    // vuetify : new Vuetify()
});

