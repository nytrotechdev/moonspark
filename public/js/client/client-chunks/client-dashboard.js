"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["client-dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
// import BarChart from "./BarChart.vue";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {// BarChart,
  },
  data: function data() {
    return {
      data: undefined,
      baseUrl: window.base_url,
      projects: []
    };
  },
  mounted: function mounted() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get("/get-latest-projects?limit=3").then(function (_ref) {
        var data = _ref.data;
        _this.projects = data;
      });
    }
  },
  watch: {
    filter: function filter() {
      this.getData();
    }
  }
});

/***/ }),

/***/ "./resources/js/client/views/dashboard/IndexComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/client/views/dashboard/IndexComponent.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexComponent_vue_vue_type_template_id_5fef4106___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexComponent.vue?vue&type=template&id=5fef4106& */ "./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=template&id=5fef4106&");
/* harmony import */ var _IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexComponent_vue_vue_type_template_id_5fef4106___WEBPACK_IMPORTED_MODULE_0__.render,
  _IndexComponent_vue_vue_type_template_id_5fef4106___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/views/dashboard/IndexComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=template&id=5fef4106&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=template&id=5fef4106& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_template_id_5fef4106___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_template_id_5fef4106___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_template_id_5fef4106___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexComponent.vue?vue&type=template&id=5fef4106& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=template&id=5fef4106&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=template&id=5fef4106&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=template&id=5fef4106& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    _c("section", { staticClass: "banner" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "banner-body" }, [
          _c(
            "div",
            { staticClass: "row align-items-center justify-content-center" },
            [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6 col-md-5 col-sm-12" }, [
                _c("div", { staticClass: "banner-img" }, [
                  _c("img", {
                    attrs: {
                      src: _vm.baseUrl + "/assets/img/side-logo.png",
                      alt: "",
                    },
                  }),
                ]),
              ]),
            ]
          ),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "buyCrypto", attrs: { id: "buy_crypto" } }, [
      _c("div", { staticClass: "container" }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row mt-5" },
          _vm._l(_vm.projects, function (project, pindex) {
            return _c(
              "div",
              { key: pindex, staticClass: "col-lg-4 col-md-6 col-sm-12" },
              [
                _c("div", { staticClass: "card-wrapper" }, [
                  _c("div", { staticClass: "crypto_card" }, [
                    _c("div", { staticClass: "card_head" }, [
                      _c("span", [_vm._v(_vm._s(project.project_ticker))]),
                      _vm._v(" "),
                      _c("h5", [_vm._v(_vm._s(project.project_name))]),
                      _vm._v(" "),
                      _c("figure", [
                        _c("img", { attrs: { src: project.logo, alt: "" } }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card_body" }, [
                      _c("div", { staticClass: "dis" }, [
                        _c("p", [
                          _vm._v(
                            "\n                                        " +
                              _vm._s(project.project_detail) +
                              "\n                                    "
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "coin_details" }, [
                        _vm._m(2, true),
                        _vm._v(" "),
                        _c("div", { staticClass: "row flex-column" }, [
                          _c("p", [_vm._v("0.0")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(project.market_cape))]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(project.diluted_market_cape)),
                          ]),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "card_foot" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "project.show",
                                params: { id: project.id },
                              },
                            },
                          },
                          [_vm._v("See More")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "card-btn",
                            attrs: {
                              "data-toggle": "modal",
                              "data-target": "#exampleModalCenter",
                            },
                          },
                          [_vm._v("buy")]
                        ),
                      ],
                      1
                    ),
                  ]),
                ]),
              ]
            )
          }),
          0
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-6 col-md-7 col-sm-12" }, [
      _c("div", { staticClass: "banner-text" }, [
        _c("h1", [
          _vm._v("\n                Invest in "),
          _c("br"),
          _c("span", [_vm._v("cryptocurrencies")]),
          _vm._v(" "),
          _c("br"),
          _vm._v("\n                of the future\n                "),
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n                Invest in up and coming cryptocurrencies commission, spread\n                and gas free. We have made the process as easy as possible.\n                All you need is a wallet to get started and if you don’t have\n                one read the guide above for instructions on how to download\n                and set one up. MoonSpark is without doubt the safest and\n                easiest platform to buy your favorite small or micro cap\n                cryptocurrency.\n                "
          ),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "row align-items-center justify-content-center" },
      [
        _c("h2", { staticClass: "heading text-center mb-5" }, [
          _vm._v("\n                    Buy Crypto\n                "),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row flex-column" }, [
      _c("p", [_vm._v("price")]),
      _vm._v(" "),
      _c("p", [_vm._v("market cap")]),
      _vm._v(" "),
      _c("p", [_vm._v("fully diluted")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);