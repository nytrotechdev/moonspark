"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["admin-projects-create"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/projects/CreateComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/projects/CreateComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
      project: {},
      clients: [],
      supported_platform: window.supported_platform,
      baseUrl: window.axios.defaults.baseURL
    };
  },
  components: {},
  mounted: function mounted() {
    this.getTaskPreData();
  },
  methods: {
    getCookie: function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");

      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == " ") {
          c = c.substring(1, c.length);
        }

        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }

      return null;
    },
    getTaskPreData: function getTaskPreData() {
      var _this = this;

      axios.get("/user").then(function (_ref) {
        var data = _ref.data;
        _this.clients = data;
      });
    },
    submitFiles: function submitFiles() {
      this.$refs.myVueDropzone.myVueDropzone();
    },
    store: function store() {
      var _this2 = this;

      var form_data = new FormData();

      for (var key in this.project) {
        form_data.append(key, this.project[key]);
      }

      axios.post("project", form_data).then(function (_ref2) {
        var data = _ref2.data;

        _this2.$toastr.success("Project is created succesfully", "Success!");

        _this2.$router.push({
          name: "projects",
          query: {
            status: 1
          }
        });
      })["catch"](function (e) {
        console.log(e);
        var errors = e.response.data.errors;
        Object.keys(errors).forEach(function (key) {
          _this2.$toastr.error(errors[key], "Error!");
        });
      });
    }
  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/projects/CreateComponent.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/projects/CreateComponent.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#dropzone {\n  background: none;\n  border: 2px dashed #01aeee;\n  border-radius: 15px;\n  padding: 15px;\n  text-align: center;\n  margin: 0 0 20px 0;\n}\n.vue-input-tag-wrapper .input-tag {\n  list-style-type: none;\n  display: inline-block;\n  margin: 10px 5px 0 0;\n  border-radius: 25px;\n  border: 2px solid #cfd2e4;\n  padding: 10px 15px;\n  font-size: 13px;\n  color: #7d8094;\n  font-weight: 500;\n  background: #cfd2e4;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/projects/CreateComponent.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/projects/CreateComponent.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/projects/CreateComponent.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/admin/views/projects/CreateComponent.vue":
/*!***************************************************************!*\
  !*** ./resources/js/admin/views/projects/CreateComponent.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateComponent_vue_vue_type_template_id_ec16a42a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateComponent.vue?vue&type=template&id=ec16a42a& */ "./resources/js/admin/views/projects/CreateComponent.vue?vue&type=template&id=ec16a42a&");
/* harmony import */ var _CreateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateComponent.vue?vue&type=script&lang=js& */ "./resources/js/admin/views/projects/CreateComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _CreateComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/admin/views/projects/CreateComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CreateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateComponent_vue_vue_type_template_id_ec16a42a___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateComponent_vue_vue_type_template_id_ec16a42a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/projects/CreateComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/projects/CreateComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/admin/views/projects/CreateComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/projects/CreateComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/projects/CreateComponent.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/admin/views/projects/CreateComponent.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/projects/CreateComponent.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/admin/views/projects/CreateComponent.vue?vue&type=template&id=ec16a42a&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/admin/views/projects/CreateComponent.vue?vue&type=template&id=ec16a42a& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateComponent_vue_vue_type_template_id_ec16a42a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateComponent_vue_vue_type_template_id_ec16a42a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateComponent_vue_vue_type_template_id_ec16a42a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateComponent.vue?vue&type=template&id=ec16a42a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/projects/CreateComponent.vue?vue&type=template&id=ec16a42a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/projects/CreateComponent.vue?vue&type=template&id=ec16a42a&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/projects/CreateComponent.vue?vue&type=template&id=ec16a42a& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        {
          staticClass:
            "col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex",
        },
        [
          _c("ol", { staticClass: "breadcrumb" }, [
            _c(
              "li",
              { staticClass: "breadcrumb-item" },
              [
                _c("router-link", { attrs: { to: { name: "index" } } }, [
                  _vm._v("Home"),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "breadcrumb-item" },
              [
                _c("router-link", { attrs: { to: { name: "projects" } } }, [
                  _vm._v("All Project"),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(0),
          ]),
        ]
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xl-12" }, [
        _c("div", { staticClass: "card task-card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              { attrs: { id: "form1", enctype: "multipart/form-data" } },
              [
                _c("div", { staticClass: "row row-sm mg-b-10 first-parent" }, [
                  _c("div", { staticClass: "form-group col-md-4" }, [
                    _c("label", [_vm._v("Select User:")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.project.user_id,
                            expression: "project.user_id",
                          },
                        ],
                        staticClass: "form-control",
                        on: {
                          change: function ($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function (o) {
                                return o.selected
                              })
                              .map(function (o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.project,
                              "user_id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          },
                        },
                      },
                      _vm._l(_vm.clients, function (client, cid) {
                        return _c(
                          "option",
                          { key: cid, domProps: { value: client.id } },
                          [_vm._v(_vm._s(client.name))]
                        )
                      }),
                      0
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-4" }, [
                    _c("label", [_vm._v("Project Name:")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.project_name,
                          expression: "project.project_name",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "Project-name",
                        "aria-required": "true",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.project_name },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "project_name",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-4" }, [
                    _c("label", [_vm._v("Project Ticker:")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.project_ticker,
                          expression: "project.project_ticker",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "Project-ticker",
                        "aria-required": "true",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.project_ticker },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "project_ticker",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-12" }, [
                    _c("label", [_vm._v("Project Logo:")]),
                    _vm._v(" "),
                    _c("input", {
                      attrs: {
                        type: "file",
                        "aria-required": "true",
                        "aria-invalid": "false",
                      },
                      on: {
                        change: function (e) {
                          return (_vm.project.logo = e.target.files[0])
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-12" }, [
                    _c("label", [_vm._v(" Project Summary:")]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.project_detail,
                          expression: "project.project_detail",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "your-message", cols: "20", rows: "4" },
                      domProps: { value: _vm.project.project_detail },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "project_detail",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-4" }, [
                    _c("label", [_vm._v("Funds raised to date")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.fund_raised_todate,
                          expression: "project.fund_raised_todate",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        value: "",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.fund_raised_todate },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "fund_raised_todate",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-4" }, [
                    _c("label", [_vm._v("Total raised to date:")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.total_raised_todate,
                          expression: "project.total_raised_todate",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        value: "",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.total_raised_todate },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "total_raised_todate",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-4" }, [
                    _c("label", [_vm._v("Platform:")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.project.project_type,
                            expression: "project.project_type",
                          },
                        ],
                        staticClass: "form-control",
                        on: {
                          change: function ($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function (o) {
                                return o.selected
                              })
                              .map(function (o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.project,
                              "project_type",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          },
                        },
                      },
                      _vm._l(_vm.supported_platform, function (platform, pid) {
                        return _c(
                          "option",
                          { key: pid, domProps: { value: platform } },
                          [_vm._v(_vm._s(platform))]
                        )
                      }),
                      0
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-12" }, [
                    _c("label", [_vm._v(" Token use case: ")]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.token_usecase,
                          expression: "project.token_usecase",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "token-use-case" },
                      domProps: { value: _vm.project.token_usecase },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "token_usecase",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Website URL")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.website,
                          expression: "project.website",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "Website-URL",
                        "aria-required": "true",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.website },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.project, "website", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Medium link:")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.medium,
                          expression: "project.medium",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "Medium-link",
                        "aria-required": "true",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.medium },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.project, "medium", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Twitter link:")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.twitter,
                          expression: "project.twitter",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "Twitter-link",
                        "aria-required": "true",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.twitter },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.project, "twitter", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Telegram group:")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.telegram,
                          expression: "project.telegram",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "Telegram-group",
                        "aria-required": "true",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.telegram },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.project, "telegram", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Your TG Handle:")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.tg_handle,
                          expression: "project.tg_handle",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "Your-TG-Handle",
                        "aria-required": "true",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.tg_handle },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "tg_handle",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Your email address:")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.email,
                          expression: "project.email",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "email",
                        name: "your-email",
                        "aria-required": "true",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.email },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.project, "email", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Name of CEO:")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.name_of_ceo,
                          expression: "project.name_of_ceo",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "Name-CEO",
                        "aria-required": "true",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.name_of_ceo },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "name_of_ceo",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Name of CTO:")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.name_of_cto,
                          expression: "project.name_of_cto",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "Name-CTO",
                        "aria-required": "true",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.name_of_cto },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "name_of_cto",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v(" Short Bio of CEO:")]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.bio_of_ceo,
                          expression: "project.bio_of_ceo",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "Short-CEO", rows: "2" },
                      domProps: { value: _vm.project.bio_of_ceo },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "bio_of_ceo",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Short Bio of CTO")]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.bio_of_cto,
                          expression: "project.bio_of_cto",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "Short-CTO", rows: "2" },
                      domProps: { value: _vm.project.bio_of_cto },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "bio_of_cto",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Short Video Presentatio")]),
                    _vm._v(" "),
                    _c("input", {
                      attrs: {
                        type: "file",
                        name: "ShortVideoPresentation",
                        "aria-invalid": "false",
                      },
                      on: {
                        change: function (e) {
                          return (_vm.project.short_video = e.target.files[0])
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v(" Is business Incorporation ?")]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("label", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.project.project_business_incorporated,
                            expression: "project.project_business_incorporated",
                          },
                        ],
                        attrs: {
                          type: "radio",
                          value: "yes",
                          name: "Incorporation-details",
                        },
                        domProps: {
                          checked: _vm._q(
                            _vm.project.project_business_incorporated,
                            "yes"
                          ),
                        },
                        on: {
                          change: function ($event) {
                            return _vm.$set(
                              _vm.project,
                              "project_business_incorporated",
                              "yes"
                            )
                          },
                        },
                      }),
                      _vm._v(" Yes\n                "),
                    ]),
                    _vm._v(" "),
                    _c("label", { staticClass: "ml-2" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.project.project_business_incorporated,
                            expression: "project.project_business_incorporated",
                          },
                        ],
                        attrs: {
                          type: "radio",
                          value: "no",
                          name: "Incorporation-details",
                        },
                        domProps: {
                          checked: _vm._q(
                            _vm.project.project_business_incorporated,
                            "no"
                          ),
                        },
                        on: {
                          change: function ($event) {
                            return _vm.$set(
                              _vm.project,
                              "project_business_incorporated",
                              "no"
                            )
                          },
                        },
                      }),
                      _vm._v(" No\n                "),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("If Incorporation ! Where ?:")]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value:
                            _vm.project.project_business_incorporated_where,
                          expression:
                            "project.project_business_incorporated_where",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "Incorporation-details" },
                      domProps: {
                        value: _vm.project.project_business_incorporated_where,
                      },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "project_business_incorporated_where",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v(" Is business licensed ?")]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("label", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.project.project_business_lic,
                            expression: "project.project_business_lic",
                          },
                        ],
                        attrs: {
                          type: "radio",
                          value: "yes",
                          name: "Business-licensed",
                        },
                        domProps: {
                          checked: _vm._q(
                            _vm.project.project_business_lic,
                            "yes"
                          ),
                        },
                        on: {
                          change: function ($event) {
                            return _vm.$set(
                              _vm.project,
                              "project_business_lic",
                              "yes"
                            )
                          },
                        },
                      }),
                      _vm._v(" Yes\n                "),
                    ]),
                    _vm._v(" "),
                    _c("label", { staticClass: "ml-2" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.project.project_business_lic,
                            expression: "project.project_business_lic",
                          },
                        ],
                        attrs: {
                          type: "radio",
                          value: "no",
                          name: "Business-licensed",
                        },
                        domProps: {
                          checked: _vm._q(
                            _vm.project.project_business_lic,
                            "no"
                          ),
                        },
                        on: {
                          change: function ($event) {
                            return _vm.$set(
                              _vm.project,
                              "project_business_lic",
                              "no"
                            )
                          },
                        },
                      }),
                      _vm._v(" No\n                "),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("If Business licensed ! Details ?")]),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.project_business_lic_list,
                          expression: "project.project_business_lic_list",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "Business-details" },
                      domProps: {
                        value: _vm.project.project_business_lic_list,
                      },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "project_business_lic_list",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("License Plans")]),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.project_business_lic_plan,
                          expression: "project.project_business_lic_plan",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "Plans-details" },
                      domProps: {
                        value: _vm.project.project_business_lic_plan,
                      },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "project_business_lic_plan",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Tokenomics details")]),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.tokenomics_detail,
                          expression: "project.tokenomics_detail",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "Tokenomics-details" },
                      domProps: { value: _vm.project.tokenomics_detail },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "tokenomics_detail",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Project business model")]),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.project_business_model,
                          expression: "project.project_business_model",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "business-model" },
                      domProps: { value: _vm.project.project_business_model },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "project_business_model",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [
                      _vm._v(
                        "Legal Opinion letter on utility vs. security token"
                      ),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.legal_opinion,
                          expression: "project.legal_opinion",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "Legal-Opinion-letter",
                        "aria-required": "true",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.legal_opinion },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "legal_opinion",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [
                      _vm._v(
                        "\n                  Names and titles of core team members and LinkedIn Bios"
                      ),
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.core_team,
                          expression: "project.core_team",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "Bios" },
                      domProps: { value: _vm.project.core_team },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "core_team",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [
                      _vm._v("Short summary of the teams experience"),
                    ]),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.summary,
                          expression: "project.summary",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "teams" },
                      domProps: { value: _vm.project.summary },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.project, "summary", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [
                      _vm._v("Has the smart contract been audited?"),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("label", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.project.smart_contract_audited,
                            expression: "project.smart_contract_audited",
                          },
                        ],
                        attrs: {
                          type: "radio",
                          value: "yes",
                          name: "smart_contract_audited",
                        },
                        domProps: {
                          checked: _vm._q(
                            _vm.project.smart_contract_audited,
                            "yes"
                          ),
                        },
                        on: {
                          change: function ($event) {
                            return _vm.$set(
                              _vm.project,
                              "smart_contract_audited",
                              "yes"
                            )
                          },
                        },
                      }),
                      _vm._v(" Yes\n                "),
                    ]),
                    _vm._v(" "),
                    _c("label", { staticClass: "ml-2" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.project.smart_contract_audited,
                            expression: "project.smart_contract_audited",
                          },
                        ],
                        attrs: {
                          type: "radio",
                          value: "no",
                          name: "smart_contract_audited",
                        },
                        domProps: {
                          checked: _vm._q(
                            _vm.project.smart_contract_audited,
                            "no"
                          ),
                        },
                        on: {
                          change: function ($event) {
                            return _vm.$set(
                              _vm.project,
                              "smart_contract_audited",
                              "no"
                            )
                          },
                        },
                      }),
                      _vm._v(" No\n                "),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v(" Smart contract audit information:")]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.smart_contract_audited_text,
                          expression: "project.smart_contract_audited_text",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "smart-contract" },
                      domProps: {
                        value: _vm.project.smart_contract_audited_text,
                      },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "smart_contract_audited_text",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Is there a MVP")]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("label", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.project.mvp,
                            expression: "project.mvp",
                          },
                        ],
                        attrs: { type: "radio", value: "yes", name: "mvp" },
                        domProps: { checked: _vm._q(_vm.project.mvp, "yes") },
                        on: {
                          change: function ($event) {
                            return _vm.$set(_vm.project, "mvp", "yes")
                          },
                        },
                      }),
                      _vm._v(" Yes\n                "),
                    ]),
                    _vm._v(" "),
                    _c("label", { staticClass: "ml-2" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.project.mvp,
                            expression: "project.mvp",
                          },
                        ],
                        attrs: { type: "radio", value: "no", name: "mvp" },
                        domProps: { checked: _vm._q(_vm.project.mvp, "no") },
                        on: {
                          change: function ($event) {
                            return _vm.$set(_vm.project, "mvp", "no")
                          },
                        },
                      }),
                      _vm._v(" No\n                "),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-12" }, [
                    _c("label", [_vm._v("Whitepaper")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.whitepaper_link,
                          expression: "project.whitepaper_link",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "Whitepaper",
                        "aria-required": "true",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.whitepaper_link },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "whitepaper_link",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [
                      _vm._v("Total followers across all social channels:"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.total_follower,
                          expression: "project.total_follower",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "social-channels",
                        "aria-required": "true",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.total_follower },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "total_follower",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Partnerships in place:")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.partnership,
                          expression: "project.partnership",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "Partnerships",
                        "aria-required": "true",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.partnership },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "partnership",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-12" }, [
                    _c("label", [
                      _vm._v(
                        "\n                  Key components of project roadmap over the next 90 days:"
                      ),
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.relevant_info,
                          expression: "project.relevant_info",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "roadmap" },
                      domProps: { value: _vm.project.relevant_info },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "relevant_info",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Names of Core Developers")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.core_developer,
                          expression: "project.core_developer",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "Core-Developers",
                        "aria-required": "true",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.core_developer },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "core_developer",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [
                      _vm._v("Split between full-time and part-time:"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.split,
                          expression: "project.split",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "full-time-part",
                        "aria-required": "true",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.split },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.project, "split", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Security concerns:")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.security_concerns,
                          expression: "project.security_concerns",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "concerns",
                        "aria-required": "true",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.security_concerns },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "security_concerns",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Contract:")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.contract,
                          expression: "project.contract",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "Contract",
                        "aria-required": "true",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.contract },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.project, "contract", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Contract Scan Link:")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.contract_link,
                          expression: "project.contract_link",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "scan_linl",
                        "aria-required": "true",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.contract_link },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "contract_link",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Decimals:")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.decimal,
                          expression: "project.decimal",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "Decimals",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.decimal },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.project, "decimal", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Number of tokens in circulation:")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.no_of_token,
                          expression: "project.no_of_token",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "circulation",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.no_of_token },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "no_of_token",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Max number of tokens:")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.max_no_of_token,
                          expression: "project.max_no_of_token",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "Max-number-tokens",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.max_no_of_token },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "max_no_of_token",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Market cap:")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.market_cape,
                          expression: "project.market_cape",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "Market-cap",
                        "aria-required": "true",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.market_cape },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "market_cape",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", [_vm._v("Fully diluted market cap:")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.diluted_market_cape,
                          expression: "project.diluted_market_cape",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "Fully-diluted-market-cap",
                        "aria-required": "true",
                        "aria-invalid": "false",
                      },
                      domProps: { value: _vm.project.diluted_market_cape },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "diluted_market_cape",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-12 col-sm-12 mt-5 mg-t-10" },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary float-right",
                          attrs: { type: "button" },
                          on: { click: _vm.store },
                        },
                        [_vm._v("\n                  Save\n                ")]
                      ),
                    ]
                  ),
                ]),
              ]
            ),
          ]),
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
    return _c("li", { staticClass: "breadcrumb-item active" }, [
      _c("a", { attrs: { href: "javascript:void(0)" } }, [
        _vm._v("Create Project"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group col-md-12" }, [
      _c("br"),
      _vm._v(" "),
      _c("h6", [_vm._v("Questions about the Development Team:")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group col-md-12" }, [
      _c("br"),
      _vm._v(" "),
      _c("h6", [_vm._v("Information on your cryptocurrency:")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);