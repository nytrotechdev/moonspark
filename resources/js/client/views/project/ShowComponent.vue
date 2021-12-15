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
            <div class="card-wrapper" v-if="project">
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
                            <div class="form-button col-md-12 text-right mt-2">
                                <button type="button" class="main-btn btn-gold px-5 py-3" 
                                    @click="buyToken(project)" 
                                >buy</button>

                            </div>



                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
        <div class="modal fade" id="buyToken" tabindex="-1" role="dialog" aria-labelledby="buyTokenTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="buyCoin" v-if="!metamaskuser">
                        <form>
                            <h3>Proceed to Buy</h3>
                            <div class="notice">
                                <strong>Note:</strong> Plese Connect Metamask Wallet to proceed
                            </div>
                            <div class="notice">
                                <strong>Note:</strong> Make Sure while sending Eth or BSC it is connected to appropriate 
                                Chain Network, <a 
                                style="color: black"
                                href="https://moonspark.finance/wallet-guide/" target="_blank">Refer, https://moonspark.finance/wallet-guide/ </a>
                            </div>
                            <div class="form-button connect-metamask">
                                <button @click="init" type="button" class="main-btn btn-gold">
                                    <img style="width:30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/512px-MetaMask_Fox.svg.png">
                                Connect MetaMask Wallet</button>
                            </div>
                        </form>
                    </div>
                    <div class="buyCoin" v-else>
                        <form>
                            <h3>Proceed to Buy</h3>
                            <div class="notice">
                                <strong>Note:</strong> You can pay for token in Eth or BNB, Once the transaction is confirmed, 
                                The system will transfer the token to your wallet address
                            </div>
                            <div class="notice">
                                <strong>Note:</strong> Make Sure while sending Eth or BSC it is connected to appropriate 
                                Chain Network, <a 
                                style="color: black"
                                href="https://moonspark.finance/wallet-guide/" target="_blank">Refer, https://moonspark.finance/wallet-guide/ </a>
                            </div>
                            <div class="form-group">
                                <label>Enter Number of Tokens</label>
                                <input type="number" class="form-control" v-model="token_qty">
                            </div>
                            <div class="form-group" v-if="currentProject.token_price && rates">
                                <label class="d-flex align-items-center justify-content-between">
                                    <span>Tokens Fiat Price:</span>
                                    <span class="tokens_to_be_transfered"></span>
                                </label>
                                <label class="d-flex align-items-center justify-content-between">
                                    <button @click="() => initiateTransaction(1)" class="main-btn btn-silver" type="button">
                                        <img style="width:20px" src="/assets/img/eth.png">
                                        {{ parseFloat(rates.eth) * (parseFloat(currentProject.token_price.amount) * token_qty) }} ETH
                                    </button>
                                </label>
                                <label class="d-flex align-items-center justify-content-between">
                                    <button @click="() => initiateTransaction(2)" class="main-btn btn-silver" type="button">
                                        <img style="width:20px" src="/assets/img/bnblogo.png"> {{ parseFloat(rates.bnb) * (parseFloat(currentProject.token_price.amount) * token_qty) }} BNB                                    
                                    </button>
                                </label>

                            </div>
                            <div class="form-button">
                                <button class="main-btn btn-transparent" data-dismiss="modal">cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>    


    </div>
</template>
<style>
    h6{
        color: #fff;
        font-weight: bold;        
    }
</style>
<style>
    .notice{
        margin-bottom: 18px;
        background: gold;
        border-radius: 10px;
        padding: 10px;        
    }

    .btn-silver {
        background: slategray;
        border: 1px solid slategray !important;
    }
</style>
<script>
    import Moralis from 'moralis';
    export default {
        data() {
            return {
                charge: 1,
                project: undefined,
                supported_platform: window.supported_platform,      
                baseUrl: window.base_url,
                token_qty: 1,
                receiver_address: "",
                currentProject: {
                    tokenPrice: {}
                },
                ethNode: "https://speedy-nodes-nyc.moralis.io/a814e6dfe3c65bf59745d0a6/eth/mainnet",
                bscNode: "https://speedy-nodes-nyc.moralis.io/a814e6dfe3c65bf59745d0a6/bsc/mainnet",
                rates: undefined,
                initTrans: false,
                metamaskuser: localStorage.getItem('metamask_user'),
                moralisUser: undefined,

            }
        },
        components: {
            Moralis
        },
        mounted() {
            this.getProject();
            this.checkWeb3();
            this.getReceiverAddress();
            // this.init();
            this.getExchangeRate();

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
            async checkWeb3(){
                const ethereum = window.ethereum;
                if(!ethereum || !ethereum.on) {
                    this.metamaskuser = "";
                }
                else{
                    //displayMessage("00", "Metamask is Installed");
                    this.setWeb3Environment()
                }
            },
            updateCallBack(params){
                console.log(params, "Update Callback");
            },
            setWeb3Environment(){
                web3 = new Web3(window.ethereum);

                web3.currentProvider.on('connect', this.updateCallBack);
                web3.currentProvider.on('close', this.updateCallBack);

                window.ethereum.on('accountsChanged', async (accounts) => {
                    if(!accounts[0]){
                        this.metamaskuser = "";                
                    }
                    else{
                        let user = await Moralis.User.current();
                        this.metamaskuser = user.id;
                    }
                });
                this.getNetwork();
                this.monitorNetwork();
            },
            unsetUser(){
                this.metamaskuser = "";
            },
            async getNetwork(){
                let chainID = await web3.eth.net.getId();

                await web3.eth.getAccounts((err, accounts) => {
                    if (err != null) this.unsetUser();
                    else if (accounts.length == 0) this.unsetUser();
                    else console.log("User is logged in to MetaMask");
                });

                if(!chainID) {
                    this.metamaskuser = "";            
                }
            },
            getNetworkName(chainID){
                let networks = {
                    1:"Ethereum Mainnet",
                    3:"Ropsten Network",
                    4:"Rinkeby Network",
                    5:"Goerli Network",
                    56:"Binance Smart Chain Mainnet",
                    97:"Binance Smart Chain Testnet",
                    80001:"Polygon Mumbai Testnet"
                }
                return networks[chainID];
            },
            monitorNetwork(){
                Moralis.onChainChanged(function(){
                    window.location.reload()
                })
            },   
            async buyToken(project){
                try{
                    let user = await axios('profile');
                    this.currentProject = project;
                    this.checkWeb3();
                    $('#buyToken').modal('show');

                }catch(e){
                    //unathenticated
                    console.log(e.response.data);
                    window.location.href = "/register?refer="+window.location.href;
                }
            },
            async authenticateMoralis() {
                if (window.ethereum) {
                    this.initMoralis();
                    let user = await Moralis.User.current();
                    await Moralis.Web3.enable();
                    let currentAddress = await window.ethereum.send("eth_requestAccounts");
                    currentAddress = currentAddress.result[0];
                    if (user && user.attributes.ethAddress == currentAddress) {
                        console.log(user);
                        this.metamaskuser = user.id;

                    } else {
                        let metamaskuser = await Moralis.authenticate({ signingMessage: "Log in using Moonspark.Finance" })
                        .then( (user) => {
                            console.log("logged in user:", user);
                            localStorage.setItem('metamask_user', user.id);
                            this.metamaskuser = user.id
                        })
                        .catch( (error) => {
                            console(error);
                        });                
                        // return await Moralis.authenticate({ signingMessage: "Log in using Moonspark.Finance" })
                        // return await authenticate(provider);
                    }
                } else {
                    localStorage.removeItem('metamask_user');
                    console.log("Non ethereum browser")
                }
            },
            async init(){
                let lsmu = localStorage.getItem('metamask_user');
            
                await web3.eth.getAccounts( async(err, accounts) => {
                    if (err != null || accounts.length == 0) {
                        this.unsetUser();
                        this.authenticateMoralis();
                        // this.initMoralis();
                        // let user = await Moralis.User.currentAsync();
                        // if (!user) {
                        //     console.log('i am here');
                        //     let metamaskuser = await Moralis.authenticate({ signingMessage: "Log in using Moonspark.Finance" })
                        //     .then( (user) => {
                        //         console.log("logged in user:", user);
                        //         localStorage.setItem('metamask_user', user.id);
                        //         this.metamaskuser = user.id
                        //     })
                        //     .catch( (error) => {
                        //         console(error);
                        //     });
                        // }
                        // else{
                        //     console.log('but i am here too', user);
                        //     localStorage.setItem('metamask_user', user.id);
                        //     this.metamaskuser = user.id;
                        // }                 
                    }
                    else{
                        if(!this.metamaskuser) this.authenticateMoralis();
                        console.log("User is logged in to MetaMask");
                    };
                });

                console.log('here');

                return;

                if(typeof lsmu == 'undefined' && typeof lsmu !== "object" && lsmu !== ""){
                    alert('sdsv')
                    this.metamaskuser = localStorage.getItem('metamask_user');
                }
                else{
                    this.initMoralis();
                    let user = await Moralis.User.currentAsync();
                    if (!user) {
                        console.log('i am here');
                        let metamaskuser = await Moralis.authenticate({ signingMessage: "Log in using Moonspark.Finance" })
                        .then( (user) => {
                            console.log("logged in user:", user);
                            localStorage.setItem('metamask_user', user.id);
                            this.metamaskuser = user.id
                        })
                        .catch( (error) => {
                            console(error);
                        });
                    }
                    else{
                        console.log('but i am here too', user);
                        localStorage.setItem('metamask_user', user.id);
                        this.metamaskuser = user.id;
                    }        
                }
            },
            async changeProvider(){
                const web3 = await Moralis.Web3.enable();
                await web3.currentProvider.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0x89" }]
                });        
            },
            getReceiverAddress(project){
            axios.get('get-receiver-address')
                .then(({data}) => {
                    this.receiver_address = data;
                }).catch( e => {
                let errors = e.response.data.errors;
                Object.keys(errors).forEach(key=>{
                    this.$toastr.error(errors[key], "Error!");
                });
                });

            },
            async initiateTransaction(type){
                document.body.classList.add('loading-indicator_v1');

                if(!this.receiver_address){
                    this.$toastr.error("You can not send asset at this moment, Contact Support", "Error!");
                }   

                if(type == 1){
                    let amount = parseFloat(this.rates.eth) * (parseFloat(this.currentProject.token_price.amount) * this.token_qty);
                    const options = {type: "native", amount: Moralis.Units.ETH(amount),  receiver: this.receiver_address };
                    let result;
                    try {
                        result = await Moralis.transfer(options);
                        this.saveTransaction(result);
                    }
                    catch(e){
                        console.log(e);
                        this.$toastr.error("The transaction can not be processed", "Error");
                        document.body.classList.remove('loading-indicator_v1');
                        return;
                    }
                }
                else{
                    let amount = parseFloat(this.rates.bnb) * (parseFloat(this.currentProject.token_price.amount) * this.token_qty);
                    const options = {type: "erc20", 
                        amount: Moralis.Units.Token(amount, "18"), 
                        receiver: this.receiver_address,
                        contractAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
                    };
                    let result;
                    try {
                        result = await Moralis.transfer(options);
                        this.saveTransaction(result);
                    }
                    catch(e){
                        console.log(e);
                        this.$toastr.error("The transaction can not be processed", "Error");
                        return;
                    }
                }
            },
            saveTransaction(result){
                let data = {
                    payload : result,
                    receiver_address: result.to_address,
                    amount: result.value,
                    transaction_hash: result.transaction_hash,
                    sender: result.from_address,            
                }
                axios   
                    .post("transaction/"+this.currentProject.id+"/transfer", data)
                    .then(({ data }) => {
                        this.$toastr.success(data.message, "Success!");
                        $('#buyToken').modal('hide');
                        this.$router.push({ name: 'transaction'} );
                        this.initTrans = false;
                        document.body.classList.remove('loading-indicator_v1');
                    })
                    .catch((e) => {
                    console.log(e);
                    let errors = e.response.data.errors;
                    Object.keys(errors).forEach((key) => {
                        this.$toastr.error(errors[key], "Error!");
                    });
                });      
            },    
            async getExchangeRate() {
                axios.post('/exchange-rate')
                    .then(({data}) => {
                        this.rates = data;
                    });

            },

        },
        watch: {}
    }
</script>
