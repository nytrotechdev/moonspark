<template>
    <div>
    <section class="banner"></section>
    <section class="project_summary">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <h2 class="heading text-center mt-5 mb-5">
                    Project Summary
                </h2>
            </div>
            <div class="card-wrapper">
                <div class="form">
                    <form id="form1">
                        <div class="row row-sm mg-b-10 first-parent">
                            <div class="form-group col-md-12">
                            <label>Project Name:</label>
                            <input
                                type="text"
                                name="Project-name"
                                :disabled="true" v-model="project.project_name"
                                class="form-control"
                                aria-required="true"
                                aria-invalid="false"
                            />
                            </div>
                            <div class="form-group col-md-12">
                            <label>Project Ticker:</label>
                            <input
                                type="text"
                                name="Project-ticker"
                                :disabled="true" v-model="project.project_ticker"
                                class="form-control"
                                aria-required="true"
                                aria-invalid="false"
                            />
                            </div>

                            <div class="form-group col-md-12">
                                <label>Project Logo:</label>
                                <img class="d-block" style="width: 80px" :src="project.logo">
                            </div>

                            <div class="form-group col-md-12">
                            <label> Project Summary:</label>
                            <textarea
                                name="your-message"
                                cols="20"
                                rows="5"
                                :disabled="true" v-model="project.project_detail"
                                class="form-control"
                            />
                            </div>
                            <div class="form-group col-md-12">
                            <label>Funds raised to date</label>
                            <input
                                type="text"
                                :disabled="true" v-model="project.fund_raised_todate"
                                value=""
                                class="form-control"
                                aria-invalid="false"
                            />
                            </div>
                            <div class="form-group col-md-12">
                            <label>Total raised to date:</label>
                            <input
                                type="text"
                                :disabled="true" v-model="project.total_raised_todate"
                                value=""
                                class="form-control"
                                aria-invalid="false"
                            />
                            </div>
                            <div class="form-group col-md-12">
                            <label>Platform:</label>
                            <select :disabled="true" v-model="project.project_type" class="form-control">
                                <option v-for="(platform, pid) in supported_platform" :value="platform" :key="pid">{{ platform }}</option>
                            </select>
                            </div>
                            <div class="form-group col-md-12">
                            <label> Token use case: </label>
                            <textarea
                                name="token-use-case"
                                rows="4"
                                :disabled="true" v-model="project.token_usecase"
                                class="form-control"
                            />
                            </div>
                            <div class="form-group col-md-12">
                            <label>Website URL</label>
                            <input
                                type="text"
                                name="Website-URL"
                                :disabled="true" v-model="project.website"
                                class="form-control"
                                aria-required="true"
                                aria-invalid="false"
                            />
                            </div>
                            <div class="form-group col-md-12">
                            <label>Medium link:</label>
                            <input
                                type="text"
                                name="Medium-link"
                                :disabled="true" v-model="project.medium"
                                class="form-control"
                                aria-required="true"
                                aria-invalid="false"
                            />
                            </div>
                            <div class="form-group col-md-12">
                            <label>Twitter link:</label>
                            <input
                                type="text"
                                name="Twitter-link"
                                :disabled="true" v-model="project.twitter"
                                class="form-control"
                                aria-required="true"
                                aria-invalid="false"
                            />
                            </div>
                            <div class="form-group col-md-12">
                            <label>Telegram group:</label>
                            <input
                                type="text"
                                name="Telegram-group"
                                :disabled="true" v-model="project.telegram"
                                class="form-control"
                                aria-required="true"
                                aria-invalid="false"
                            />
                            </div>
                            <div class="form-group col-md-12">
                            <label>Your TG Handle:</label>
                            <input
                                type="text"
                                name="Your-TG-Handle"
                                :disabled="true" v-model="project.tg_handle"
                                class="form-control"
                                aria-required="true"
                                aria-invalid="false"
                            />
                            </div>
                            <div class="form-group col-md-12">
                            <label>Your email address:</label>
                            <input
                                type="email"
                                name="your-email"
                                :disabled="true" v-model="project.email"
                                class="form-control"
                                aria-required="true"
                                aria-invalid="false"
                            />
                            </div>
                            <div class="form-group col-md-12">
                            <label>Name of CEO:</label>
                            <input
                                type="text"
                                name="Name-CEO"
                                :disabled="true" v-model="project.name_of_ceo"
                                class="form-control"
                                aria-required="true"
                                aria-invalid="false"
                            />
                            </div>
                            <div class="form-group col-md-12">
                            <label>Name of CTO:</label>
                            <input
                                type="text"
                                name="Name-CTO"
                                :disabled="true" v-model="project.name_of_cto"
                                class="form-control"
                                aria-required="true"
                                aria-invalid="false"
                            />
                            </div>
                            <div class="form-group col-md-12">
                            <label> Short Bio of CEO:</label>
                            <textarea
                                :disabled="true" v-model="project.bio_of_ceo"
                                name="Short-CEO"
                                rows="4"
                                class="form-control"
                            ></textarea>
                            </div>
                            <div class="form-group col-md-12">
                            <label>Short Bio of CTO</label>
                            <textarea
                                name="Short-CTO"
                                rows="4"
                                :disabled="true" v-model="project.bio_of_cto"
                                class="form-control"
                            ></textarea>
                            </div>
                            <div class="form-group col-md-12">
                            <label>Short Video Presentatio</label>
                            <a :href="project.short_video" target="_blank">View</a>
                            </div>
                            <div class="form-group col-md-12">
                            <label> Is business Incorporation ?</label>
                            <br/>
                            <label>
                                <input type="radio"
                                    :disabled="true" v-model="project.project_business_incorporated"
                                    value="yes"
                                    name="Incorporation-details"
                                >&nbsp;Yes
                            </label>
                            <label class="ml-2">
                                <input type="radio"
                                    :disabled="true" v-model="project.project_business_incorporated"
                                    value="no"
                                    name="Incorporation-details"
                                >&nbsp;No
                            </label>
                            </div>
                            <div class="form-group col-md-12">
                            <label>If Incorporation ! Where ?:</label>
                            <textarea
                                :disabled="true" v-model="project.project_business_incorporated_where"
                                rows="4"
                                name="Incorporation-details"
                                class="form-control"
                            ></textarea>
                            </div>
                            <div class="form-group col-md-12">
                            <label> Is business licensed ?</label>
                            <br/>
                            <label>
                                <input type="radio"
                                    :disabled="true" v-model="project.project_business_lic"
                                    value="yes"
                                    name="Business-licensed"
                                >&nbsp;Yes
                            </label>
                            <label class="ml-2">
                                <input type="radio"
                                    :disabled="true" v-model="project.project_business_lic"
                                    value="no"
                                    name="Business-licensed"
                                >&nbsp;No
                            </label>
                            </div>
                            <div class="form-group col-md-12">
                            <label>If Business licensed ! Details ?</label
                            ><textarea
                                :disabled="true" v-model="project.project_business_lic_list"
                                rows="4"
                                name="Business-details"
                                class="form-control"
                            ></textarea>
                            </div>
                            <div class="form-group col-md-12">
                            <label>License Plans</label
                            ><textarea
                                :disabled="true" v-model="project.project_business_lic_plan"
                                rows="4"
                                name="Plans-details"
                                class="form-control"></textarea
                            >
                            </div>
                            <div class="form-group col-md-12">
                            <label>Tokenomics details</label
                            ><textarea
                                name="Tokenomics-details"
                                rows="4"
                                :disabled="true" v-model="project.tokenomics_detail"
                                class="form-control"
                            ></textarea
                            >
                            </div>
                            <div class="form-group col-md-12">
                            <label>Project business model</label
                            ><textarea
                                name="business-model"
                                rows="4"
                                :disabled="true" v-model="project.project_business_model"
                                class="form-control"
                            ></textarea>
                            </div>
                            <div class="form-group col-md-12">
                            <label
                                >Legal Opinion letter on utility vs. security token</label
                            >
                            <input
                                type="text"
                                :disabled="true" v-model="project.legal_opinion"
                                name="Legal-Opinion-letter"
                                class="form-control"
                                aria-required="true"
                                aria-invalid="false"
                            />
                            </div>
                            <div class="form-group col-md-12">
                            <label>
                                Names and titles of core team members and LinkedIn Bios</label>
                            <textarea
                                name="Bios"
                                rows="4"
                                :disabled="true" v-model="project.core_team"
                                class="form-control"
                            ></textarea>
                            </div>
                            <div class="form-group col-md-12">
                            <label>Short summary of the teams experience</label
                            ><textarea
                                name="teams"
                                rows="4"
                                :disabled="true" v-model="project.summary"
                                class="form-control"></textarea>
                            </div>
                            <div class="form-group col-md-12">
                            <label>Has the smart contract been audited?</label>
                            <br/>
                            <label>
                                <input type="radio"
                                    :disabled="true" v-model="project.smart_contract_audited"
                                    value="yes"
                                    name="smart_contract_audited"
                                >&nbsp;Yes
                            </label>
                            <label class="ml-2">
                                <input type="radio"
                                    :disabled="true" v-model="project.smart_contract_audited"
                                    value="no"
                                    name="smart_contract_audited"
                                >&nbsp;No
                            </label>
                            </div>                
                            <div class="form-group col-md-12">
                            <label> Smart contract audit information:</label>
                            <textarea
                                name="smart-contract"
                                rows="4"
                                :disabled="true" v-model="project.smart_contract_audited_text"
                                class="form-control"
                            ></textarea>
                            </div>
                            <div class="form-group col-md-12">
                            <label>Is there a MVP</label>
                            <br/>
                            <label>
                                <input type="radio"
                                    :disabled="true" v-model="project.mvp"
                                    value="yes"
                                    name="mvp"
                                >&nbsp;Yes
                            </label>
                            <label class="ml-2">
                                <input type="radio"
                                    :disabled="true" v-model="project.mvp"
                                    value="no"
                                    name="mvp"
                                >&nbsp;No
                            </label>
                            </div>                
                            <div class="form-group col-md-12">
                            <label>Whitepaper</label>
                            <input
                                type="text"
                                name="Whitepaper"
                                :disabled="true" v-model="project.whitepaper_link"
                                class="form-control"
                                aria-required="true"
                                aria-invalid="false"
                            />
                            </div>
                            <div class="form-group col-md-12">
                            <label>Total followers across all social channels:</label>
                            <input
                                type="text"
                                name="social-channels"
                                :disabled="true" v-model="project.total_follower"
                                class="form-control"
                                aria-required="true"
                                aria-invalid="false"
                            />
                            </div>
                            <div class="form-group col-md-12">
                            <label>Partnerships in place:</label>
                            <input
                                type="text"
                                name="Partnerships"
                                :disabled="true" v-model="project.partnership"
                                class="form-control"
                                aria-required="true"
                                aria-invalid="false"
                            />
                            </div>
                            <div class="form-group col-md-12">
                            <label>
                                Key components of project roadmap over the next 90 days:</label
                            >
                            <textarea
                                :disabled="true" v-model="project.relevant_info"
                                name="roadmap"
                                rows="4"
                                class="form-control"
                            ></textarea>
                            </div>
                            <div class="form-group col-md-12">
                                <br/>
                                <h6>Questions about the Development Team:</h6>                    
                            </div>

                            <div class="form-group col-md-12">
                            <label>Names of Core Developers</label>
                            <input
                                type="text"
                                name="Core-Developers"
                                :disabled="true" v-model="project.core_developer"
                                class="form-control"
                                aria-required="true"
                                aria-invalid="false"
                            />
                            </div>
                            <div class="form-group col-md-12">
                            <label>Split between full-time and part-time:</label>
                            <input
                                type="text"
                                name="full-time-part"
                                :disabled="true" v-model="project.split"
                                class="form-control"
                                aria-required="true"
                                aria-invalid="false"
                            />
                            </div>
                            <div class="form-group col-md-12">
                            <label>Security concerns:</label>
                            <input
                                type="text"
                                name="concerns"
                                :disabled="true" v-model="project.security_concerns"
                                class="form-control"
                                aria-required="true"
                                aria-invalid="false"
                            />
                            </div>
                            <div class="form-group col-md-12">
                                <br/>
                                <h6>Information on your cryptocurrency:</h6>
                            </div>
                            <div class="form-group col-md-12">
                            <label>Contract:</label>
                            <input
                                type="text"
                                name="Contract"
                                :disabled="true" v-model="project.contract"
                                class="form-control"
                                aria-required="true"
                                aria-invalid="false"
                            />
                            </div>
                            <div class="form-group col-md-12">
                            <label>Contract Scan Link:</label>
                            <input
                                type="text"
                                name="scan_linl"
                                :disabled="true" v-model="project.contract_link"
                                class="form-control"
                                aria-required="true"
                                aria-invalid="false"
                            />
                            </div>
                            <div class="form-group col-md-12">
                            <label>Decimals:</label>
                            <input
                                type="number"
                                name="Decimals"
                                :disabled="true" v-model="project.decimal"
                                class="form-control"
                                aria-invalid="false"
                            />
                            </div>
                            <div class="form-group col-md-12">
                            <label>Number of tokens in circulation:</label>
                            <input
                                type="number"
                                name="circulation"
                                :disabled="true" v-model="project.no_of_token"
                                class="form-control"
                                aria-invalid="false"
                            />
                            </div>
                            <div class="form-group col-md-12">
                            <label>Max number of tokens:</label>
                            <input
                                type="number"
                                name="Max-number-tokens"
                                :disabled="true" v-model="project.max_no_of_token"
                                class="form-control"
                                aria-invalid="false"
                            />
                            </div>
                            <div class="form-group col-md-12">
                            <label>Market cap:</label>
                            <input
                                type="text"
                                name="Market-cap"
                                :disabled="true" v-model="project.market_cape"
                                class="form-control"
                                aria-required="true"
                                aria-invalid="false"
                            />
                            </div>
                            <div class="form-group col-md-12">
                            <label>Fully diluted market cap:</label>
                            <input
                                type="text"
                                name="Fully-diluted-market-cap"
                                :disabled="true" v-model="project.diluted_market_cape"
                                class="form-control"
                                aria-required="true"
                                aria-invalid="false"
                            />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>
<style>
    h6{
        color: #fff;
        font-weight: bold;        
    }
</style>
<script>
    export default {
        data() {
            return {
                charge: 1,
                project: undefined,
                supported_platform: window.supported_platform,                
            }
        },
        components: {
        },
        mounted() {
            this.getProject();
        },
        methods: {
            getProject(){
                axios.get(`/projects/${this.$route.params.id}`)
                .then( ( {data} ) => {
                    this.project = data;
                }).catch(e => {
                    console.log(e);
                    let errors = e.response.data.errors;
                    Object.keys(errors).forEach(key => {
                        this.$toastr.error(errors[key], "Error!");
                    });
                });
            },
        },
        watch: {}
    }
</script>
