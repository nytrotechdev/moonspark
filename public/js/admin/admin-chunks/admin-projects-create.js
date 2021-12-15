"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[203],{8879:(e,t,o)=>{o.d(t,{Z:()=>s});var a=o(3645),r=o.n(a)()((function(e){return e[1]}));r.push([e.id,"#dropzone{background:none;border:2px dashed #01aeee;border-radius:15px;margin:0 0 20px;padding:15px;text-align:center}.vue-input-tag-wrapper .input-tag{background:#cfd2e4;border:2px solid #cfd2e4;border-radius:25px;color:#7d8094;display:inline-block;font-size:13px;font-weight:500;list-style-type:none;margin:10px 5px 0 0;padding:10px 15px}",""]);const s=r},4181:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l});var a=o(5108);const r={data:function(){return{project:{},clients:[],supported_platform:window.supported_platform,baseUrl:window.axios.defaults.baseURL}},components:{},mounted:function(){this.getTaskPreData()},methods:{getCookie:function(e){for(var t=e+"=",o=document.cookie.split(";"),a=0;a<o.length;a++){for(var r=o[a];" "==r.charAt(0);)r=r.substring(1,r.length);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return null},getTaskPreData:function(){var e=this;axios.get("/user").then((function(t){var o=t.data;e.clients=o}))},submitFiles:function(){this.$refs.myVueDropzone.myVueDropzone()},store:function(){var e=this,t=new FormData;for(var o in this.project)t.append(o,this.project[o]);axios.post("project",t).then((function(t){t.data;e.$toastr.success("Project is created succesfully","Success!"),e.$router.push({name:"project",query:{status:1}})})).catch((function(t){a.log(t);var o=t.response.data.errors;Object.keys(o).forEach((function(t){e.$toastr.error(o[t],"Error!")}))}))}},watch:{}};var s=o(3379),i=o.n(s),n=o(8879),c={insert:"head",singleton:!1};i()(n.Z,c);n.Z.locals;const l=(0,o(1900).Z)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row page-titles mx-0"},[o("div",{staticClass:"col-sm-6 p-md-0"},[o("div",{staticClass:"welcome-text"},[o("h4",[e._v(e._s(e.$route.meta.title))])])]),e._v(" "),o("div",{staticClass:"col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex"},[o("ol",{staticClass:"breadcrumb"},[o("li",{staticClass:"breadcrumb-item"},[o("router-link",{attrs:{to:{name:"index"}}},[e._v("Home")])],1),e._v(" "),o("li",{staticClass:"breadcrumb-item"},[o("router-link",{attrs:{to:{name:"projects"}}},[e._v("All Project")])],1),e._v(" "),e._m(0)])])]),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12"},[o("div",{staticClass:"card task-card"},[o("div",{staticClass:"card-body"},[o("form",{attrs:{id:"form1",enctype:"multipart/form-data"}},[o("div",{staticClass:"row row-sm mg-b-10 first-parent"},[o("div",{staticClass:"form-group col-md-4"},[o("label",[e._v("Select User:")]),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.project.user_id,expression:"project.user_id"}],staticClass:"form-control",on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.project,"user_id",t.target.multiple?o:o[0])}}},e._l(e.clients,(function(t,a){return o("option",{key:a,domProps:{value:t.id}},[e._v(e._s(t.name))])})),0)]),e._v(" "),o("div",{staticClass:"form-group col-md-4"},[o("label",[e._v("Project Name:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.project_name,expression:"project.project_name"}],staticClass:"form-control",attrs:{type:"text",name:"Project-name","aria-required":"true","aria-invalid":"false"},domProps:{value:e.project.project_name},on:{input:function(t){t.target.composing||e.$set(e.project,"project_name",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-4"},[o("label",[e._v("Project Ticker:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.project_ticker,expression:"project.project_ticker"}],staticClass:"form-control",attrs:{type:"text",name:"Project-ticker","aria-required":"true","aria-invalid":"false"},domProps:{value:e.project.project_ticker},on:{input:function(t){t.target.composing||e.$set(e.project,"project_ticker",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-12"},[o("label",[e._v("Project Logo:")]),e._v(" "),o("input",{attrs:{type:"file","aria-required":"true","aria-invalid":"false"},on:{change:function(t){return e.project.logo=t.target.files[0]}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-12"},[o("label",[e._v(" Project Summary:")]),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.project.project_detail,expression:"project.project_detail"}],staticClass:"form-control",attrs:{name:"your-message",cols:"20",rows:"4"},domProps:{value:e.project.project_detail},on:{input:function(t){t.target.composing||e.$set(e.project,"project_detail",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-4"},[o("label",[e._v("Funds raised to date")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.fund_raised_todate,expression:"project.fund_raised_todate"}],staticClass:"form-control",attrs:{type:"text",value:"","aria-invalid":"false"},domProps:{value:e.project.fund_raised_todate},on:{input:function(t){t.target.composing||e.$set(e.project,"fund_raised_todate",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-4"},[o("label",[e._v("Total raised to date:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.total_raised_todate,expression:"project.total_raised_todate"}],staticClass:"form-control",attrs:{type:"text",value:"","aria-invalid":"false"},domProps:{value:e.project.total_raised_todate},on:{input:function(t){t.target.composing||e.$set(e.project,"total_raised_todate",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-4"},[o("label",[e._v("Platform:")]),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.project.project_type,expression:"project.project_type"}],staticClass:"form-control",on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.project,"project_type",t.target.multiple?o:o[0])}}},e._l(e.supported_platform,(function(t,a){return o("option",{key:a,domProps:{value:t}},[e._v(e._s(t))])})),0)]),e._v(" "),o("div",{staticClass:"form-group col-md-12"},[o("label",[e._v(" Token use case: ")]),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.project.token_usecase,expression:"project.token_usecase"}],staticClass:"form-control",attrs:{name:"token-use-case"},domProps:{value:e.project.token_usecase},on:{input:function(t){t.target.composing||e.$set(e.project,"token_usecase",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Website URL")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.website,expression:"project.website"}],staticClass:"form-control",attrs:{type:"text",name:"Website-URL","aria-required":"true","aria-invalid":"false"},domProps:{value:e.project.website},on:{input:function(t){t.target.composing||e.$set(e.project,"website",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Medium link:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.medium,expression:"project.medium"}],staticClass:"form-control",attrs:{type:"text",name:"Medium-link","aria-required":"true","aria-invalid":"false"},domProps:{value:e.project.medium},on:{input:function(t){t.target.composing||e.$set(e.project,"medium",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Twitter link:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.twitter,expression:"project.twitter"}],staticClass:"form-control",attrs:{type:"text",name:"Twitter-link","aria-required":"true","aria-invalid":"false"},domProps:{value:e.project.twitter},on:{input:function(t){t.target.composing||e.$set(e.project,"twitter",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Telegram group:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.telegram,expression:"project.telegram"}],staticClass:"form-control",attrs:{type:"text",name:"Telegram-group","aria-required":"true","aria-invalid":"false"},domProps:{value:e.project.telegram},on:{input:function(t){t.target.composing||e.$set(e.project,"telegram",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Your TG Handle:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.tg_handle,expression:"project.tg_handle"}],staticClass:"form-control",attrs:{type:"text",name:"Your-TG-Handle","aria-required":"true","aria-invalid":"false"},domProps:{value:e.project.tg_handle},on:{input:function(t){t.target.composing||e.$set(e.project,"tg_handle",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Your email address:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.email,expression:"project.email"}],staticClass:"form-control",attrs:{type:"email",name:"your-email","aria-required":"true","aria-invalid":"false"},domProps:{value:e.project.email},on:{input:function(t){t.target.composing||e.$set(e.project,"email",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Name of CEO:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.name_of_ceo,expression:"project.name_of_ceo"}],staticClass:"form-control",attrs:{type:"text",name:"Name-CEO","aria-required":"true","aria-invalid":"false"},domProps:{value:e.project.name_of_ceo},on:{input:function(t){t.target.composing||e.$set(e.project,"name_of_ceo",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Name of CTO:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.name_of_cto,expression:"project.name_of_cto"}],staticClass:"form-control",attrs:{type:"text",name:"Name-CTO","aria-required":"true","aria-invalid":"false"},domProps:{value:e.project.name_of_cto},on:{input:function(t){t.target.composing||e.$set(e.project,"name_of_cto",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v(" Short Bio of CEO:")]),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.project.bio_of_ceo,expression:"project.bio_of_ceo"}],staticClass:"form-control",attrs:{name:"Short-CEO",rows:"2"},domProps:{value:e.project.bio_of_ceo},on:{input:function(t){t.target.composing||e.$set(e.project,"bio_of_ceo",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Short Bio of CTO")]),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.project.bio_of_cto,expression:"project.bio_of_cto"}],staticClass:"form-control",attrs:{name:"Short-CTO",rows:"2"},domProps:{value:e.project.bio_of_cto},on:{input:function(t){t.target.composing||e.$set(e.project,"bio_of_cto",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Short Video Presentatio")]),e._v(" "),o("input",{attrs:{type:"file",name:"ShortVideoPresentation","aria-invalid":"false"},on:{change:function(t){return e.project.short_video=t.target.files[0]}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v(" Is business Incorporation ?")]),e._v(" "),o("br"),e._v(" "),o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.project_business_incorporated,expression:"project.project_business_incorporated"}],attrs:{type:"radio",value:"yes",name:"Incorporation-details"},domProps:{checked:e._q(e.project.project_business_incorporated,"yes")},on:{change:function(t){return e.$set(e.project,"project_business_incorporated","yes")}}}),e._v(" Yes\n                ")]),e._v(" "),o("label",{staticClass:"ml-2"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.project_business_incorporated,expression:"project.project_business_incorporated"}],attrs:{type:"radio",value:"no",name:"Incorporation-details"},domProps:{checked:e._q(e.project.project_business_incorporated,"no")},on:{change:function(t){return e.$set(e.project,"project_business_incorporated","no")}}}),e._v(" No\n                ")])]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("If Incorporation ! Where ?:")]),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.project.project_business_incorporated_where,expression:"project.project_business_incorporated_where"}],staticClass:"form-control",attrs:{name:"Incorporation-details"},domProps:{value:e.project.project_business_incorporated_where},on:{input:function(t){t.target.composing||e.$set(e.project,"project_business_incorporated_where",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v(" Is business licensed ?")]),e._v(" "),o("br"),e._v(" "),o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.project_business_lic,expression:"project.project_business_lic"}],attrs:{type:"radio",value:"yes",name:"Business-licensed"},domProps:{checked:e._q(e.project.project_business_lic,"yes")},on:{change:function(t){return e.$set(e.project,"project_business_lic","yes")}}}),e._v(" Yes\n                ")]),e._v(" "),o("label",{staticClass:"ml-2"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.project_business_lic,expression:"project.project_business_lic"}],attrs:{type:"radio",value:"no",name:"Business-licensed"},domProps:{checked:e._q(e.project.project_business_lic,"no")},on:{change:function(t){return e.$set(e.project,"project_business_lic","no")}}}),e._v(" No\n                ")])]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("If Business licensed ! Details ?")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.project.project_business_lic_list,expression:"project.project_business_lic_list"}],staticClass:"form-control",attrs:{name:"Business-details"},domProps:{value:e.project.project_business_lic_list},on:{input:function(t){t.target.composing||e.$set(e.project,"project_business_lic_list",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("License Plans")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.project.project_business_lic_plan,expression:"project.project_business_lic_plan"}],staticClass:"form-control",attrs:{name:"Plans-details"},domProps:{value:e.project.project_business_lic_plan},on:{input:function(t){t.target.composing||e.$set(e.project,"project_business_lic_plan",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Tokenomics details")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.project.tokenomics_detail,expression:"project.tokenomics_detail"}],staticClass:"form-control",attrs:{name:"Tokenomics-details"},domProps:{value:e.project.tokenomics_detail},on:{input:function(t){t.target.composing||e.$set(e.project,"tokenomics_detail",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Project business model")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.project.project_business_model,expression:"project.project_business_model"}],staticClass:"form-control",attrs:{name:"business-model"},domProps:{value:e.project.project_business_model},on:{input:function(t){t.target.composing||e.$set(e.project,"project_business_model",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Legal Opinion letter on utility vs. security token")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.legal_opinion,expression:"project.legal_opinion"}],staticClass:"form-control",attrs:{type:"text",name:"Legal-Opinion-letter","aria-required":"true","aria-invalid":"false"},domProps:{value:e.project.legal_opinion},on:{input:function(t){t.target.composing||e.$set(e.project,"legal_opinion",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("\n                  Names and titles of core team members and LinkedIn Bios")]),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.project.core_team,expression:"project.core_team"}],staticClass:"form-control",attrs:{name:"Bios"},domProps:{value:e.project.core_team},on:{input:function(t){t.target.composing||e.$set(e.project,"core_team",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Short summary of the teams experience")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.project.summary,expression:"project.summary"}],staticClass:"form-control",attrs:{name:"teams"},domProps:{value:e.project.summary},on:{input:function(t){t.target.composing||e.$set(e.project,"summary",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Has the smart contract been audited?")]),e._v(" "),o("br"),e._v(" "),o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.smart_contract_audited,expression:"project.smart_contract_audited"}],attrs:{type:"radio",value:"yes",name:"smart_contract_audited"},domProps:{checked:e._q(e.project.smart_contract_audited,"yes")},on:{change:function(t){return e.$set(e.project,"smart_contract_audited","yes")}}}),e._v(" Yes\n                ")]),e._v(" "),o("label",{staticClass:"ml-2"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.smart_contract_audited,expression:"project.smart_contract_audited"}],attrs:{type:"radio",value:"no",name:"smart_contract_audited"},domProps:{checked:e._q(e.project.smart_contract_audited,"no")},on:{change:function(t){return e.$set(e.project,"smart_contract_audited","no")}}}),e._v(" No\n                ")])]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v(" Smart contract audit information:")]),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.project.smart_contract_audited_text,expression:"project.smart_contract_audited_text"}],staticClass:"form-control",attrs:{name:"smart-contract"},domProps:{value:e.project.smart_contract_audited_text},on:{input:function(t){t.target.composing||e.$set(e.project,"smart_contract_audited_text",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Is there a MVP")]),e._v(" "),o("br"),e._v(" "),o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.mvp,expression:"project.mvp"}],attrs:{type:"radio",value:"yes",name:"mvp"},domProps:{checked:e._q(e.project.mvp,"yes")},on:{change:function(t){return e.$set(e.project,"mvp","yes")}}}),e._v(" Yes\n                ")]),e._v(" "),o("label",{staticClass:"ml-2"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.mvp,expression:"project.mvp"}],attrs:{type:"radio",value:"no",name:"mvp"},domProps:{checked:e._q(e.project.mvp,"no")},on:{change:function(t){return e.$set(e.project,"mvp","no")}}}),e._v(" No\n                ")])]),e._v(" "),o("div",{staticClass:"form-group col-md-12"},[o("label",[e._v("Whitepaper")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.whitepaper_link,expression:"project.whitepaper_link"}],staticClass:"form-control",attrs:{type:"text",name:"Whitepaper","aria-required":"true","aria-invalid":"false"},domProps:{value:e.project.whitepaper_link},on:{input:function(t){t.target.composing||e.$set(e.project,"whitepaper_link",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Total followers across all social channels:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.total_follower,expression:"project.total_follower"}],staticClass:"form-control",attrs:{type:"text",name:"social-channels","aria-required":"true","aria-invalid":"false"},domProps:{value:e.project.total_follower},on:{input:function(t){t.target.composing||e.$set(e.project,"total_follower",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Partnerships in place:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.partnership,expression:"project.partnership"}],staticClass:"form-control",attrs:{type:"text",name:"Partnerships","aria-required":"true","aria-invalid":"false"},domProps:{value:e.project.partnership},on:{input:function(t){t.target.composing||e.$set(e.project,"partnership",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-12"},[o("label",[e._v("\n                  Key components of project roadmap over the next 90 days:")]),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.project.relevant_info,expression:"project.relevant_info"}],staticClass:"form-control",attrs:{name:"roadmap"},domProps:{value:e.project.relevant_info},on:{input:function(t){t.target.composing||e.$set(e.project,"relevant_info",t.target.value)}}})]),e._v(" "),e._m(1),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Names of Core Developers")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.core_developer,expression:"project.core_developer"}],staticClass:"form-control",attrs:{type:"text",name:"Core-Developers","aria-required":"true","aria-invalid":"false"},domProps:{value:e.project.core_developer},on:{input:function(t){t.target.composing||e.$set(e.project,"core_developer",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Split between full-time and part-time:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.split,expression:"project.split"}],staticClass:"form-control",attrs:{type:"text",name:"full-time-part","aria-required":"true","aria-invalid":"false"},domProps:{value:e.project.split},on:{input:function(t){t.target.composing||e.$set(e.project,"split",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Security concerns:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.security_concerns,expression:"project.security_concerns"}],staticClass:"form-control",attrs:{type:"text",name:"concerns","aria-required":"true","aria-invalid":"false"},domProps:{value:e.project.security_concerns},on:{input:function(t){t.target.composing||e.$set(e.project,"security_concerns",t.target.value)}}})]),e._v(" "),e._m(2),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Contract:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.contract,expression:"project.contract"}],staticClass:"form-control",attrs:{type:"text",name:"Contract","aria-required":"true","aria-invalid":"false"},domProps:{value:e.project.contract},on:{input:function(t){t.target.composing||e.$set(e.project,"contract",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Contract Scan Link:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.contract_link,expression:"project.contract_link"}],staticClass:"form-control",attrs:{type:"text",name:"scan_linl","aria-required":"true","aria-invalid":"false"},domProps:{value:e.project.contract_link},on:{input:function(t){t.target.composing||e.$set(e.project,"contract_link",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Decimals:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.decimal,expression:"project.decimal"}],staticClass:"form-control",attrs:{type:"number",name:"Decimals","aria-invalid":"false"},domProps:{value:e.project.decimal},on:{input:function(t){t.target.composing||e.$set(e.project,"decimal",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Number of tokens in circulation:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.no_of_token,expression:"project.no_of_token"}],staticClass:"form-control",attrs:{type:"number",name:"circulation","aria-invalid":"false"},domProps:{value:e.project.no_of_token},on:{input:function(t){t.target.composing||e.$set(e.project,"no_of_token",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Max number of tokens:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.max_no_of_token,expression:"project.max_no_of_token"}],staticClass:"form-control",attrs:{type:"number",name:"Max-number-tokens","aria-invalid":"false"},domProps:{value:e.project.max_no_of_token},on:{input:function(t){t.target.composing||e.$set(e.project,"max_no_of_token",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Market cap:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.market_cape,expression:"project.market_cape"}],staticClass:"form-control",attrs:{type:"text",name:"Market-cap","aria-required":"true","aria-invalid":"false"},domProps:{value:e.project.market_cape},on:{input:function(t){t.target.composing||e.$set(e.project,"market_cape",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Fully diluted market cap:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.project.diluted_market_cape,expression:"project.diluted_market_cape"}],staticClass:"form-control",attrs:{type:"text",name:"Fully-diluted-market-cap","aria-required":"true","aria-invalid":"false"},domProps:{value:e.project.diluted_market_cape},on:{input:function(t){t.target.composing||e.$set(e.project,"diluted_market_cape",t.target.value)}}})])]),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12 col-sm-12 mt-5 mg-t-10"},[o("button",{staticClass:"btn btn-primary float-right",attrs:{type:"button"},on:{click:e.store}},[e._v("\n                  Save\n                ")])])])])])])])])])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",{staticClass:"breadcrumb-item active"},[o("a",{attrs:{href:"javascript:void(0)"}},[e._v("Create Project")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"form-group col-md-12"},[o("br"),e._v(" "),o("h6",[e._v("Questions about the Development Team:")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"form-group col-md-12"},[o("br"),e._v(" "),o("h6",[e._v("Information on your cryptocurrency:")])])}],!1,null,null,null).exports}}]);