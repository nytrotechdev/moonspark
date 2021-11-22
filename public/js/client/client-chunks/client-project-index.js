"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["client-project-index"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/IndexComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/IndexComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moralis */ "./node_modules/moralis/index.js");
/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      projects: [],
      currentProject: undefined,
      rate: {},
      deposit: {
        sender: this.$user.wallet_address,
        receiver_address: ''
      },
      from: "",
      to: "",
      query: "",
      table: undefined,
      user: undefined,
      moralisUser: moralis__WEBPACK_IMPORTED_MODULE_0___default().User.current(),
      web3: undefined,
      type_class: ["default", "success", "warning", "danger"],
      moralis_creds: window.moralis
    };
  },
  components: {},
  mounted: function mounted() {
    this.getProjects(); // this.getReceiverAddress();
    // this.getTokenBalances();
  },
  methods: {
    depositToken: function depositToken() {
      var _this = this;

      var form_data = new FormData();

      for (var key in this.deposit) {
        form_data.append(key, this.deposit[key]);
      }

      axios.post("transaction/" + this.currentProject.id + "/deposit", form_data).then(function (_ref) {
        var data = _ref.data;

        _this.$toastr.success(data.message, "Success!");

        $('#depositToken').modal('hide');
        _this.deposit = {
          sender: _this.$user.wallet_address,
          receiver_address: ''
        };

        _this.getProjects();
      })["catch"](function (e) {
        console.log(e);
        var errors = e.response.data.errors;
        Object.keys(errors).forEach(function (key) {
          _this.$toastr.error(errors[key], "Error!");
        });
      });
    },
    getReceiverAddress: function getReceiverAddress(project) {
      var _this2 = this;

      axios.get('get-receiver-address').then(function (_ref2) {
        var data = _ref2.data;
        _this2.deposit.receiver_address = data;
        _this2.currentProject = project;
        $('#depositToken').modal('show');
      })["catch"](function (e) {
        var errors = e.response.data.errors;
        Object.keys(errors).forEach(function (key) {
          _this2.$toastr.error(errors[key], "Error!");
        });
      });
    },
    getProjects: function getProjects() {
      var _this3 = this;

      var query = {
        status: typeof this.$route.query.status !== "undefined" ? this.$route.query.status : "",
        title: this.query
      };
      axios.get("/projects?".concat(this.buildqueryparams(query))).then(function (_ref3) {
        var data = _ref3.data;
        _this3.projects = data;
        _this3.rate = _this3.projects;
      });
    },
    setRate: function setRate() {
      var _this4 = this;

      axios.post("/projects/".concat(this.rate.project_id, "/set-rate"), this.rate).then(function (_ref4) {
        var data = _ref4.data;
        $('#setRate').modal('hide');

        _this4.getProjects();
      })["catch"](function (e) {
        var errors = e.response.data.errors;
        Object.keys(errors).forEach(function (key) {
          _this4.$toastr.error(errors[key], "Error!");
        });
      });
    }
  },
  watch: {
    $route: function $route() {
      this.getProjects();
    } // 'excess' : function() {
    //     this.getTask();
    // },
    // 'extensive' : function() {
    //     this.getTask();
    // },
    // 'recurring' : function() {
    //     this.getTask();
    // },

  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/IndexComponent.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/IndexComponent.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.account_coin_details {\n  margin-right: 15px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/IndexComponent.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/IndexComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/IndexComponent.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/client/views/project/IndexComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/client/views/project/IndexComponent.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexComponent_vue_vue_type_template_id_13130ad0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexComponent.vue?vue&type=template&id=13130ad0& */ "./resources/js/client/views/project/IndexComponent.vue?vue&type=template&id=13130ad0&");
/* harmony import */ var _IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/views/project/IndexComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _IndexComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/client/views/project/IndexComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexComponent_vue_vue_type_template_id_13130ad0___WEBPACK_IMPORTED_MODULE_0__.render,
  _IndexComponent_vue_vue_type_template_id_13130ad0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/views/project/IndexComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/client/views/project/IndexComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/client/views/project/IndexComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/IndexComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/views/project/IndexComponent.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/client/views/project/IndexComponent.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/IndexComponent.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/client/views/project/IndexComponent.vue?vue&type=template&id=13130ad0&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/client/views/project/IndexComponent.vue?vue&type=template&id=13130ad0& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_template_id_13130ad0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_template_id_13130ad0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_template_id_13130ad0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexComponent.vue?vue&type=template&id=13130ad0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/IndexComponent.vue?vue&type=template&id=13130ad0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/IndexComponent.vue?vue&type=template&id=13130ad0&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/IndexComponent.vue?vue&type=template&id=13130ad0& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("section", { staticClass: "account-container" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "wrapper" }, [
          _c("h3", [_vm._v("My Projects")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row" },
            _vm._l(_vm.projects, function (project, pindex) {
              return _c(
                "div",
                { key: pindex, staticClass: "col-md-4 account_coin_details" },
                [
                  _c("div", { staticClass: "coin_head" }, [
                    _c("figure", { staticClass: "coin_icon" }, [
                      _c("img", { attrs: { src: project.logo, alt: "" } }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "coin_name" }, [
                      _c("h6", [_vm._v(_vm._s(project.project_ticker))]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "coin_dis" },
                        [
                          _c("p", [_vm._v(_vm._s(project.project_name))]),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "btn-gold",
                              attrs: {
                                to: {
                                  name: "project.show",
                                  params: { id: project.id },
                                },
                              },
                            },
                            [_vm._v("SEE MORE")]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "coin_details" }, [
                    _c("p", [
                      _c("span", [_vm._v("Total Tokens")]),
                      _vm._v(" "),
                      _c("span", [_vm._v(_vm._s(project.no_of_token))]),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c("span", [_vm._v("Available Tokens")]),
                      _vm._v(" "),
                      _c("span", [_vm._v(_vm._s(project.available_balance))]),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c("span", [_vm._v("Price")]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          _vm._s(project.token_price.amount) +
                            " " +
                            _vm._s(project.token_price.currency) +
                            " "
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "account-section-btn btn-success",
                      attrs: {
                        href: "javascript:;",
                        "data-toggle": "modal",
                        "data-target": "#setRate",
                      },
                      on: {
                        click: function ($event) {
                          _vm.rate = project.token_price
                        },
                      },
                    },
                    [_vm._v("Set Rate")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "account-section-btn btn-danger",
                      attrs: { href: "javascript:;" },
                      on: {
                        click: function ($event) {
                          return _vm.getReceiverAddress(project)
                        },
                      },
                    },
                    [_vm._v("Deposit Coins")]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "account-section-btn btn-primary",
                      attrs: {
                        to: {
                          name: "transaction",
                          query: { project_id: project.id },
                        },
                      },
                    },
                    [_vm._v("History")]
                  ),
                ],
                1
              )
            }),
            0
          ),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "setRate",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "setRateTitle",
          "aria-hidden": "true",
        },
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered",
            attrs: { role: "document" },
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "buyCoin" }, [
                _c("form", { attrs: { action: "" } }, [
                  _c("h3", [_vm._v("Set Exchange Rate")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Currency:")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.rate.currency,
                          expression: "rate.currency",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "string" },
                      domProps: { value: _vm.rate.currency },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.rate, "currency", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Amount:")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.rate.amount,
                          expression: "rate.amount",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "number" },
                      domProps: { value: _vm.rate.amount },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.rate, "amount", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-button" }, [
                    _c(
                      "button",
                      {
                        staticClass: "main-btn btn-transparent",
                        attrs: { "data-dismiss": "modal" },
                      },
                      [_vm._v("cancel")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "main-btn btn-gold",
                        attrs: { type: "button" },
                        on: { click: _vm.setRate },
                      },
                      [_vm._v("Update")]
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "depositToken",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "depositTitle",
          "aria-hidden": "true",
        },
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered",
            attrs: { role: "document" },
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "buyCoin" }, [
                _c("form", { attrs: { action: "" } }, [
                  _c("h3", [_vm._v("Deposit Token")]),
                  _vm._v(" "),
                  !_vm.moralisUser
                    ? _c("div", { staticClass: "form-button" }, [
                        _c(
                          "button",
                          {
                            staticClass: "main-btn btn-gold",
                            attrs: { type: "button" },
                            on: {
                              click: function ($event) {
                                return _vm.authenticate()
                              },
                            },
                          },
                          [
                            _c("img", {
                              staticStyle: { width: "30px" },
                              attrs: {
                                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/512px-MetaMask_Fox.svg.png",
                              },
                            }),
                            _vm._v(
                              "\n                          Connect MetaMask Wallet\n                      "
                            ),
                          ]
                        ),
                      ])
                    : _c("div", [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Recipient:")]),
                          _vm._v(" "),
                          _c("p", {
                            staticStyle: { color: "#fff" },
                            domProps: {
                              textContent: _vm._s(_vm.deposit.receiver_address),
                            },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _vm._m(0),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.deposit.sender,
                                expression: "deposit.sender",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.deposit.sender },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.deposit,
                                  "sender",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Amount:")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.deposit.amount,
                                expression: "deposit.amount",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "number" },
                            domProps: { value: _vm.deposit.amount },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.deposit,
                                  "amount",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Upload Screenshot:")]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { accept: "image/*", type: "file" },
                            on: {
                              change: function (e) {
                                return (_vm.deposit.ss = e.target.files[0])
                              },
                            },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _vm._m(1),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.deposit.transaction_hash,
                                expression: "deposit.transaction_hash",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.deposit.transaction_hash },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.deposit,
                                  "transaction_hash",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-button" }, [
                          _c(
                            "button",
                            {
                              staticClass: "main-btn btn-transparent",
                              attrs: {
                                type: "button",
                                "data-dismiss": "modal",
                              },
                            },
                            [_vm._v("cancel")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "main-btn btn-gold",
                              attrs: { type: "button" },
                              on: { click: _vm.depositToken },
                            },
                            [_vm._v("Next")]
                          ),
                        ]),
                      ]),
                ]),
              ]),
            ]),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Sender: "),
      _c("small", [
        _vm._v("(Change if You are sending from different Metamask Account)"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Enter Transaction ID (Hash):\n                          "),
      _c(
        "a",
        { attrs: { target: "_blank", href: "/assets/img/helpdesk_1.png" } },
        [_vm._v("View")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);