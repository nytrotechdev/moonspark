"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["client.reminder"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/faq/IndexComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/faq/IndexComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      data: []
    };
  },
  components: {},
  mounted: function mounted() {
    this.fetchFaq();
  },
  methods: {
    fetchFaq: function fetchFaq() {
      var _this = this;

      axios.get('faqs').then(function (_ref) {
        var data = _ref.data;
        return _this.data = data;
      });
    }
  },
  watch: {}
});

/***/ }),

/***/ "./resources/js/client/views/faq/IndexComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/client/views/faq/IndexComponent.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexComponent_vue_vue_type_template_id_8774820a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexComponent.vue?vue&type=template&id=8774820a& */ "./resources/js/client/views/faq/IndexComponent.vue?vue&type=template&id=8774820a&");
/* harmony import */ var _IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/views/faq/IndexComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexComponent_vue_vue_type_template_id_8774820a___WEBPACK_IMPORTED_MODULE_0__.render,
  _IndexComponent_vue_vue_type_template_id_8774820a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/views/faq/IndexComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/client/views/faq/IndexComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/client/views/faq/IndexComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/faq/IndexComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/views/faq/IndexComponent.vue?vue&type=template&id=8774820a&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/client/views/faq/IndexComponent.vue?vue&type=template&id=8774820a& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_template_id_8774820a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_template_id_8774820a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_template_id_8774820a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexComponent.vue?vue&type=template&id=8774820a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/faq/IndexComponent.vue?vue&type=template&id=8774820a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/faq/IndexComponent.vue?vue&type=template&id=8774820a&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/faq/IndexComponent.vue?vue&type=template&id=8774820a& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row page-titles mx-0" }, [
      _c("div", { staticClass: "col-sm-6 p-md-0" }, [
        _c("div", { staticClass: "welcome-text" }, [
          _c("h4", [_vm._v(_vm._s(_vm.$route.meta.title))]),
        ]),
      ]),
      _vm._v(" "),
      _vm._m(0),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12 card rounded pad-20" }, [
        _c("div", { staticClass: "card-content collapse show" }, [
          _c(
            "div",
            { staticClass: "card-body table-responsive card-dashboard" },
            [
              _c(
                "div",
                { staticClass: "panel-group", attrs: { id: "accordion" } },
                _vm._l(_vm.data, function (faq, index) {
                  return _c(
                    "div",
                    { key: index },
                    [
                      _c("div", { staticClass: "faqHeader" }, [
                        _c("h2", [_vm._v(_vm._s(index))]),
                      ]),
                      _vm._v(" "),
                      _vm._l(faq, function (rec, qindex) {
                        return _c(
                          "div",
                          { key: qindex, staticClass: "panel panel-default" },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "panel-heading bg-primary p-2 mb-2",
                              },
                              [
                                _c("h4", { staticClass: "panel-title " }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "text-white accordion-toggle collapsed",
                                      attrs: {
                                        "data-toggle": "collapse",
                                        "data-parent": "#accordion",
                                        href: "#collapse" + rec.id,
                                        "aria-expanded": "false",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(rec.question) +
                                          "\n                                        "
                                      ),
                                    ]
                                  ),
                                ]),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "mb-3 panel-collapse collapse",
                                class: qindex == 0 ? "show" : "",
                                attrs: {
                                  id: "collapse" + rec.id,
                                  "aria-expanded": "false",
                                },
                              },
                              [
                                _c("div", { staticClass: "panel-body" }, [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(rec.answer) +
                                      "\n                                    "
                                  ),
                                ]),
                              ]
                            ),
                          ]
                        )
                      }),
                    ],
                    2
                  )
                }),
                0
              ),
            ]
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex",
      },
      [
        _c("ol", { staticClass: "breadcrumb" }, [
          _c("li", { staticClass: "breadcrumb-item" }, [
            _c("a", { attrs: { href: "javascript:void(0)" } }, [
              _vm._v("Home"),
            ]),
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "breadcrumb-item active" }, [
            _c("a", { attrs: { href: "javascript:void(0)" } }, [
              _vm._v("FAQs"),
            ]),
          ]),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);