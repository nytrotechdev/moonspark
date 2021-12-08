<template>
  <div>
    <section class="banner">
      <h1 style="text-align: center" class="">{{ $route.meta.title }}</h1>
    </section>
    <section class="submitYourProject">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <h2 class="heading text-center">submit your project</h2>
        </div>
        <div class="card-wrapper">
          <div class="form">
            <form id="form1" enctype="multipart/form-data">
              <h5>Why use our platform?</h5>
              <p>
                MoonSpark is focused on providing investors with access to
                exciting emerging projects. Our platform's main objective is to
                make investing in small or micro cap crypto projects more
                accessible to investors. The biggest gripe we hear among
                investors interested in the micro cap space is the difficulty of
                buying into projects. Many investors don't feel comfortable
                buying through decentralized exchanges (DEXs) and many others
                have had bad experiences dealing with exchanges operating in the
                small cap arena. We plan to change all that.
              </p>
              <p>
                As a project founder one of your main objectives is to gain
                widespread adoption of your protocol. That means expanding your
                investor base among as many token holders as possible. With a
                small cap project that often proves challenging.
              </p>
              <p>
                Whilst DEXs are valuable to the crypto ecosystem and will
                continue to grow in importance they are not the best solution
                for small cryptocurrencies. Every dollar of your native
                cryptocurrency has to be supported with a dollar in another
                currency such as ETH, BNB, TUSD etc. When someone sells your
                liquidity needs to be replenished. Most small projects have
                limited liquid resources and therefore that restricts them from
                marketing their project to a wider audience.
              </p>
              <p>
                Central exchanges on paper overcome this need for liquidity
                however it is very difficult for a micro project to obtain a
                listing on a small exchange, there is an upfront cost and the
                reputation of most small exchanges are appalling deterring many
                investors from participating.
              </p>
              <p>Our platform provides the project founder with options.</p>
              <ul>
                <li>
                  It will help raise money for projects looking for development
                  capital
                </li>
                <li>
                  It allows a project to expand their token holder base with few
                  restrictions apart from the supply of tokens.
                </li>
                <li>
                  It provides a solution for founders who simply want to sell a
                  few tokens.
                </li>
              </ul>
              <h5>Marketing</h5>
              <p>
                The project owner is able to market and drive investors to our
                platform in order to buy their token. In addition to a project's
                own marketing initiatives, we will also promote both the
                platform in general and the projects hosted to our own audience.
                This is not something smaller exchanges or platforms such as
                DxSale do, your currency ends up as a pebble in the ocean!
              </p>
              <h5>The project has control</h5>
              <p>
                The project sets the price at which the token is sold on the
                platform and has control over the token supply, adding and
                removing at their discretion. This means that projects can
                generate regular cash flow from the sale of tokens for various
                reasons from funding their project to increasing the token
                holder base. The difference is, unlike with a DEX or central
                exchange you have control over the token supply and the price it
                is sold at.
              </p>
              <h5>How it works</h5>
              <p>
                We have made the process as simple as possible. As a project
                owner you must submit certain information in order to provide a
                clear and not misleading picture of your project to investors.
                This includes information about the project, tokenomics and a
                short video. You specify the price you want to sell your tokens
                at, transfer the tokens that you wish to start selling and then
                press submit.
              </p>
              <p>
                Once submitted the project will be made available for investors
                to purchase through our platform. Our focus is on simplicity
                making small projects accessible to all investors.
              </p>
              <h5>Crucial partnerships</h5>
              <p>
                We are developing the platform in conjunction with
                CryptoQuestion. CryptoQuestion has established a solid
                reputation in the micro cap crypto market with its weekly Micro
                Cap Watch List, Monthly Moonshot Portfolio and its various
                podcasts. They have also built a large base of subscribers to
                its publications who have an interest in small and micro cap
                cryptos. MoonSpark intends to utilise these resources as part of
                its own marketing efforts.
              </p>
              <h5>Information on your submission</h5>
              <p>
                This form is for project owners to submit information on their
                project in order for their project’s cryptocurrency to be listed
                on our platform. Please ensure all necessary fields are
                completed and that your responses and their quality are of a
                high standard. We will not alter your project or vet it in any
                way. By submitting your project you are agreeing for your
                project to be featured on our platform. We do have the right of
                veto to remove inappropriate projects or ones we consider to be
                fraudulent. Project owners are responsible for their own
                statements and should carefully review these to ensure that
                statements are accurate and not misleading. By including your
                project we are not warranting its accuracy in any way.
              </p>
              <h5>Your Cryptocurrency</h5>
              <p>
                You are able to add liquidity to the MoonSpark wallet and remove
                it at any time. You are also able to set the price at which you
                wish to sell your cryptocurrency at. We would recommend pricing
                your cryptocurrency at a premium to the market price because of
                the convenience, lack of liquidity limitations and low cost
                nature of this platform. You agree to review the price regularly
                so it reflects market and project conditions.
              </p>
              <h5>Fees</h5>
              <p>
                No commission or fees will be charged to buyers of your
                currency. There will be a commission of 10% charged and deducted
                from each transaction.
              </p>
              <h3>Submit Project</h3>
              <p>
                <strong>Instructions on completing this form:</strong><br />
                Investors will make decisions based on the information you
                provide so it is important that your answers are fair and not
                misleading. You take responsibility for the information
                contained in this form. All given fields are mandatory.
              </p>
              <div class="row row-sm mg-b-10 first-parent">
                <div class="form-group col-md-12">
                  <label>Project Name:</label>
                  <input
                    type="text"
                    name="Project-name"
                    v-model="project.project_name"
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
                    v-model="project.project_ticker"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label>Project Logo:</label>
                  <input
                    type="file"
                    @change="(e) => (project.logo = e.target.files[0])"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label> Project Summary:</label>
                  <textarea
                    name="your-message"
                    cols="20"
                    rows="4"
                    v-model="project.project_detail"
                    class="form-control"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label>Funds raised to date</label>
                  <input
                    type="text"
                    v-model="project.fund_raised_todate"
                    value=""
                    class="form-control"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label>Total raised to date:</label>
                  <input
                    type="text"
                    v-model="project.total_raised_todate"
                    value=""
                    class="form-control"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label>Platform:</label>
                  <select v-model="project.project_type" class="form-control">
                    <option
                      v-for="(platform, pid) in supported_platform"
                      :value="platform"
                      :key="pid"
                    >
                      {{ platform }}
                    </option>
                  </select>
                </div>
                <div class="form-group col-md-12">
                  <label> Token use case: </label>
                  <textarea
                    name="token-use-case"
                    v-model="project.token_usecase"
                    class="form-control"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label>Website URL</label>
                  <input
                    type="text"
                    name="Website-URL"
                    v-model="project.website"
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
                    v-model="project.medium"
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
                    v-model="project.twitter"
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
                    v-model="project.telegram"
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
                    v-model="project.tg_handle"
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
                    v-model="project.email"
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
                    v-model="project.name_of_ceo"
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
                    v-model="project.name_of_cto"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label> Short Bio of CEO:</label>
                  <textarea
                    v-model="project.bio_of_ceo"
                    name="Short-CEO"
                    rows="2"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group col-md-12">
                  <label>Short Bio of CTO</label>
                  <textarea
                    name="Short-CTO"
                    rows="2"
                    v-model="project.bio_of_cto"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group col-md-12">
                  <label>Short Video Presentatio</label>
                  <input
                    type="file"
                    @change="(e) => (project.short_video = e.target.files[0])"
                    name="ShortVideoPresentation"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label> Is business Incorporation ?</label>
                  <br />
                  <label>
                    <input
                      type="radio"
                      v-model="project.project_business_incorporated"
                      value="yes"
                      name="Incorporation-details"
                    />&nbsp;Yes
                  </label>
                  <label class="ml-2">
                    <input
                      type="radio"
                      v-model="project.project_business_incorporated"
                      value="no"
                      name="Incorporation-details"
                    />&nbsp;No
                  </label>
                </div>
                <div class="form-group col-md-12">
                  <label>If Incorporation ! Where ?:</label>
                  <textarea
                    v-model="project.project_business_incorporated_where"
                    name="Incorporation-details"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group col-md-12">
                  <label> Is business licensed ?</label>
                  <br />
                  <label>
                    <input
                      type="radio"
                      v-model="project.project_business_lic"
                      value="yes"
                      name="Business-licensed"
                    />&nbsp;Yes
                  </label>
                  <label class="ml-2">
                    <input
                      type="radio"
                      v-model="project.project_business_lic"
                      value="no"
                      name="Business-licensed"
                    />&nbsp;No
                  </label>
                </div>
                <div class="form-group col-md-12">
                  <label>If Business licensed ! Details ?</label
                  ><textarea
                    v-model="project.project_business_lic_list"
                    name="Business-details"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group col-md-12">
                  <label>License Plans</label
                  ><textarea
                    v-model="project.project_business_lic_plan"
                    name="Plans-details"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group col-md-12">
                  <label>Tokenomics details</label
                  ><textarea
                    name="Tokenomics-details"
                    v-model="project.tokenomics_detail"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group col-md-12">
                  <label>Project business model</label
                  ><textarea
                    name="business-model"
                    v-model="project.project_business_model"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group col-md-12">
                  <label
                    >Legal Opinion letter on utility vs. security token</label
                  >
                  <input
                    type="text"
                    v-model="project.legal_opinion"
                    name="Legal-Opinion-letter"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label>
                    Names and titles of core team members and LinkedIn
                    Bios</label
                  >
                  <textarea
                    name="Bios"
                    v-model="project.core_team"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group col-md-12">
                  <label>Short summary of the teams experience</label
                  ><textarea
                    name="teams"
                    v-model="project.summary"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group col-md-12">
                  <label>Has the smart contract been audited?</label>
                  <br />
                  <label>
                    <input
                      type="radio"
                      v-model="project.smart_contract_audited"
                      value="yes"
                      name="smart_contract_audited"
                    />&nbsp;Yes
                  </label>
                  <label class="ml-2">
                    <input
                      type="radio"
                      v-model="project.smart_contract_audited"
                      value="no"
                      name="smart_contract_audited"
                    />&nbsp;No
                  </label>
                </div>
                <div class="form-group col-md-12">
                  <label> Smart contract audit information:</label>
                  <textarea
                    name="smart-contract"
                    v-model="project.smart_contract_audited_text"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group col-md-12">
                  <label>Is there a MVP</label>
                  <br />
                  <label>
                    <input
                      type="radio"
                      v-model="project.mvp"
                      value="yes"
                      name="mvp"
                    />&nbsp;Yes
                  </label>
                  <label class="ml-2">
                    <input
                      type="radio"
                      v-model="project.mvp"
                      value="no"
                      name="mvp"
                    />&nbsp;No
                  </label>
                </div>
                <div class="form-group col-md-12">
                  <label>Whitepaper</label>
                  <input
                    type="text"
                    name="Whitepaper"
                    v-model="project.whitepaper_link"
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
                    v-model="project.total_follower"
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
                    v-model="project.partnership"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label>
                    Key components of project roadmap over the next 90
                    days:</label
                  >
                  <textarea
                    v-model="project.relevant_info"
                    name="roadmap"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group col-md-12">
                  <br />
                  <h6>Questions about the Development Team:</h6>
                </div>

                <div class="form-group col-md-12">
                  <label>Names of Core Developers</label>
                  <input
                    type="text"
                    name="Core-Developers"
                    v-model="project.core_developer"
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
                    v-model="project.split"
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
                    v-model="project.security_concerns"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-12">
                  <br />
                  <h6>Information on your cryptocurrency:</h6>
                </div>
                <div class="form-group col-md-12">
                  <label>Contract:</label>
                  <input
                    type="text"
                    name="Contract"
                    v-model="project.contract"
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
                    v-model="project.contract_link"
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
                    v-model="project.decimal"
                    class="form-control"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label>Number of tokens in circulation:</label>
                  <input
                    type="number"
                    name="circulation"
                    v-model="project.no_of_token"
                    class="form-control"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label>Max number of tokens:</label>
                  <input
                    type="number"
                    name="Max-number-tokens"
                    v-model="project.max_no_of_token"
                    class="form-control"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label>Market cap:</label>
                  <input
                    type="text"
                    name="Market-cap"
                    v-model="project.market_cape"
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
                    v-model="project.diluted_market_cape"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
              </div>
              <div class="form_button mt-2 text-right">
                <button
                  type="button"
                  @click="store"
                  class="main-btn btn-gold px-5 py-3"
                  id=""
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- Success Modal -->
    <div
      class="modal fade"
      id="successModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="successModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="body">
            <form action="">
              <div class="iconholder">
                <img src="/success-icon.png" />
              </div>
              <div class="form-group">
                <h1>Success !</h1>
                <p>
                  Your project has been submitted successfully and is under
                  review by Admin !<br />
                  Once it is approved, you will be able to deposit token and set
                  Exchange Rate for this project & Investor will be able to buy
                  it
                </p>
              </div>
              <div class="form-button">
                <button @click="redirectTo" class="main-btn btn-gold">
                  Ok
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Login Modal -->
    <div
      class="modal fade"
      id="loginModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="successModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content signup-form-container">
          <form method="POST" action="/login">
            <h3>Login</h3>
            <div class="form-group">
              <label for="email" class="col-form-label text-md-right"
                >E-Mail Address</label
              >
              <input
                id="email"
                type="email"
                class="form-control"
                name="email"
                v-model="login.email"
                required=""
                autocomplete="email"
                autofocus=""
              />
            </div>

            <div class="form-group">
              <label for="password" class="form-label text-md-right"
                >Password</label
              >

              <input
                id="password"
                type="password"
                class="form-control"
                v-model="login.password"
                required=""
                autocomplete="current-password"
              />
            </div>

            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="remember"
                  id="remember"
                />

                <label class="form-check-label" for="remember">
                  Remember Me
                </label>
              </div>
            </div>

            <div class="form-group row mb-0">
              <button type="button" @click="postLogin" class="main-btn btn-gold">Login</button>

              <a 
                @click="() => hideModal('#loginModal')"
                data-toggle="modal" data-target="#registerModal"
                class="btn btn-link" href="javascript:;">
                Dont Have an Account ? Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Register Modal -->
    <div
      class="modal fade"
      id="registerModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="successModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content signup-form-container modal-lg">
          <form method="POST" action="http://localhost:8000/register">
            <h3>Register</h3>

            <div class="row">
              <div class="col-6 form-group">
                <label for="name" class="col-form-label text-md-right"
                  >First Name</label
                >
                <div class="">
                  <input
                    id="name"
                    type="text"
                    class="form-control"
                    name="first_name"
                    v-model="signup.first_name"
                    required=""
                    autocomplete="name"
                    autofocus=""
                  />
                </div>
              </div>
              <div class="col-6 form-group">
                <label for="name" class="col-form-label text-md-right"
                  >Last Name</label
                >
                <div class="">
                  <input
                    id="name"
                    type="text"
                    class="form-control"
                    name="last_name"
                    v-model="signup.last_name"
                    required=""
                    autocomplete="name"
                    autofocus=""
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="email" class="col-form-label text-md-right"
                >E-Mail Address</label
              >

              <div class="">
                <input
                  id="email"
                  type="email"
                  class="form-control"
                  name="email"
                  v-model="signup.email"
                  required=""
                  autocomplete="email"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="email" class="col-form-label text-md-right"
                >Countries</label
              >

              <div class="">
                <select class="form-control" name="country">
                    <option value="">Select Country</option>
                    <option v-for="(country, cid) in countries" :value="country.code" :key="cid">{{ country.name }}</option>                            
                </select>
              </div>
            </div>            

            <div class="row ">
              <div class="col-6 form-group">
                <label for="password" class="col-form-label text-md-right"
                  >Password</label
                >

                <div class="">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    v-model="signup.password"
                    required=""
                    autocomplete="new-password"
                  />
                </div>
              </div>

              <div class="col-6 form-group">
                <label for="password-confirm" class="col-form-label text-md-right"
                  >Confirm Password</label
                >

                <div class="">
                  <input
                    id="password-confirm"
                    type="password"
                    class="form-control"
                    name="password_confirmation"
                    v-model="signup.password_confirmation"
                    required=""
                    autocomplete="new-password"
                  />
                </div>
              </div>
            </div>

            <div class="form-group mb-0">
              <div class="mt-4">
                <button type="button" @click="postRegister" class="main-btn btn-gold">
                  Register
                </button>
                <a 
                    @click="() => hideModal('#registerModal')"
                    data-toggle="modal" data-target="#loginModal"
                    class="btn btn-link" href="javascript:;">
                    already Have an Account ? Login Up
                </a>

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
h6 {
  color: #fff;
  font-weight: bold;
}
#loginModal .body,
#successModal .body {
  background: var(--gray);
  padding: 10px;
  border-radius: 25px;
  width: 450px;
}
#loginModal .iconholder,
#successModal .iconholder {
  justify-content: center;
  display: flex;
}
#loginModal .iconholder img,
#successModal .iconholder img {
  width: 100px;
}
#loginModal .body h1,
#successModal .body h1 {
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-top: 10px;
}
#loginModal .body p,
#successModal .body p {
  color: #fff;
  text-align: center;
  margin-top: 10px;
  padding: 10px;
}
#loginModal .body .form-button,
#successModal .body .form-button {
  text-align: center;
  justify-content: center;
}
#loginModal .body .form-button button,
#loginModal .body .form-button a,
#successModal .body .form-button button {
  width: 50%;
  padding: 10px;
}
</style>

<script>
export default {
  data() {
    return {
      project: JSON.parse(localStorage.getItem('createProject')) || {},
      supported_platform: window.supported_platform,
      base_url: window.base_url,
      countries: window.countries,
      user: window.user,
      login: {},
      signup: {},
    };
  },
  components: {},
  created() {},
  mounted() {
    // this.checkIfLoggedIn();
  },
  methods: {
    hideModal(elem){
        $(elem).modal('hide');
    },
    postLogin(){
        axios.post(`${base_url}/login`, {
            email: this.login.email,
            password: this.login.password
        })
        .then(({ data }) => {
            this.$toastr.success("You are logged in successfully", "Success!");
            localStorage.setItem('createProject', JSON.stringify(this.project));
            window.location.reload();
        })
        .catch((e) => {
          console.log(e);
          let errors = e.response.data.errors;
          Object.keys(errors).forEach((key) => {
            this.$toastr.error(errors[key], "Error!");
          });
        });        
    },
    postRegister(){
        axios.post(`${base_url}/register`, {
            email: this.signup.email,
            password: this.signup.password,
            password_confirmation: this.signup.password_confirmation,
            last_name: this.signup.last_name,
            first_name: this.signup.first_name,
            country: this.signup.country,

        })
        .then(({ data }) => {
            this.$toastr.success("You have sign up to our platform successfully", "Success!");
            localStorage.setItem('createProject', JSON.stringify(this.project));
            window.location.reload();
        })
        .catch((e) => {
          console.log(e);
          let errors = e.response.data.errors;
          Object.keys(errors).forEach((key) => {
            this.$toastr.error(errors[key], "Error!");
          });
        });     
    },
    checkIfLoggedIn() {
      if (window.user) return;

      $("#loginModal").modal("show");

      return;
      //   window.location.href = this.base_url + "/login";
    },
    store() {
      this.checkIfLoggedIn();

      if (!window.user) return;

      var form_data = new FormData();

      for (var key in this.project) {
        form_data.append(key, this.project[key]);
      }

      axios
        .post("projects", form_data)
        .then(({ data }) => {
          localStorage.getItem('createProject');
          $("#successModal").modal("show");
        })
        .catch((e) => {
          console.log(e);
          let errors = e.response.data.errors;
          Object.keys(errors).forEach((key) => {
            this.$toastr.error(errors[key], "Error!");
          });
        });
    },
    redirectTo() {
      $("#successModal").modal("hide");
      this.$router.push({ name: "projects", query: { status: 1 } });
    },
  },
  watch: {},
};
</script>
