"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["admin-task-log"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/task/LogComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/task/LogComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      charge: 1,
      task: undefined,
      users: [],
      countries: window.info.countries,
      timezones: window.info.timezones,
      hours: _toConsumableArray(Array(24).keys()),
      minutes: _toConsumableArray(Array(60).keys()),
      clients: [],
      baseUrl: window.axios.defaults.baseURL
    };
  },
  components: {},
  mounted: function mounted() {
    this.getTask();
    this.getUser();
  },
  methods: {
    changeStatus: function changeStatus(id) {
      var _this = this;

      axios.post("/task/".concat(this.$route.params.id, "/update-status"), {
        status: this.task.status
      }).then(function (_ref) {
        var data = _ref.data;

        _this.getTask();
      });
    },
    getUser: function getUser() {
      var _this2 = this;

      axios.get("/user").then(function (_ref2) {
        var data = _ref2.data;
        _this2.users = data;
      });
    },
    getTask: function getTask() {
      var _this3 = this;

      axios.get("/task/".concat(this.$route.params.id)).then(function (_ref3) {
        var data = _ref3.data;
        _this3.task = data;
      });
    },
    store: function store() {
      var _this4 = this;

      if (this.$refs.myVueDropzone.getAcceptedFiles().length == 0) {
        this.$toastr.error("Please attach document to proceed", "Error!");
        return;
      }

      axios.post('task', this.task).then(function (_ref4) {
        var data = _ref4.data;
        _this4.$refs.myVueDropzone.dropzone.options.url = window.axios.defaults.baseURL + "task/".concat(data.data.id, "/files/upload");
        setTimeout(function () {
          _this4.$refs.myVueDropzone.processQueue();
        }, 500);
      })["catch"](function (e) {
        console.log(e);
        var errors = e.response.data.errors;
        Object.keys(errors).forEach(function (key) {
          _this4.$toastr.error(errors[key], "Error!");
        });
      });
    }
  },
  watch: {}
});

/***/ }),

/***/ "./resources/js/admin/views/task/LogComponent.vue":
/*!********************************************************!*\
  !*** ./resources/js/admin/views/task/LogComponent.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LogComponent_vue_vue_type_template_id_a203e858___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogComponent.vue?vue&type=template&id=a203e858& */ "./resources/js/admin/views/task/LogComponent.vue?vue&type=template&id=a203e858&");
/* harmony import */ var _LogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogComponent.vue?vue&type=script&lang=js& */ "./resources/js/admin/views/task/LogComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LogComponent_vue_vue_type_template_id_a203e858___WEBPACK_IMPORTED_MODULE_0__.render,
  _LogComponent_vue_vue_type_template_id_a203e858___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/task/LogComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/task/LogComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/admin/views/task/LogComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LogComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/task/LogComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/task/LogComponent.vue?vue&type=template&id=a203e858&":
/*!***************************************************************************************!*\
  !*** ./resources/js/admin/views/task/LogComponent.vue?vue&type=template&id=a203e858& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LogComponent_vue_vue_type_template_id_a203e858___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LogComponent_vue_vue_type_template_id_a203e858___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LogComponent_vue_vue_type_template_id_a203e858___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LogComponent.vue?vue&type=template&id=a203e858& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/task/LogComponent.vue?vue&type=template&id=a203e858&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/task/LogComponent.vue?vue&type=template&id=a203e858&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/task/LogComponent.vue?vue&type=template&id=a203e858& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
                _c("router-link", { attrs: { to: { name: "task" } } }, [
                  _vm._v("All Tasks"),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
          ]),
        ]
      ),
    ]),
    _vm._v(" "),
    _vm.task
      ? _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xl-12" }, [
            _c("div", { staticClass: "card task-card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "row align-items-center" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-6 text-md-left text-center" },
                    [
                      _c("h4", { staticClass: "client_name" }, [
                        _vm._v(_vm._s(_vm.task.client.name)),
                      ]),
                      _vm._v(" "),
                      _c("h6", { staticClass: "client_email" }, [
                        _vm._v(_vm._s(_vm.task.client.email)),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-md-6 text-md-right text-center mt-3 mt-md-0",
                    },
                    [
                      _c("p", { staticClass: "date-time-task" }, [
                        _c("b", [_vm._v("Task Created on")]),
                        _vm._v(
                          ": " +
                            _vm._s(_vm.task.created_date) +
                            "\n                            "
                        ),
                      ]),
                      _vm._v(" "),
                      _vm.task.type == 3
                        ? _c("p", { staticClass: "date-time-task" }, [
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.task.date) +
                                " | " +
                                _vm._s(_vm.task.time) +
                                "\n                            "
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.task.type == 0
                        ? _c("h5", { staticClass: "badge tx-5" }, [_vm._m(2)])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.task.type == 1
                        ? _c("h5", { staticClass: "badge tx-5" }, [_vm._m(3)])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.task.type == 2
                        ? _c("h5", { staticClass: "badge tx-5" }, [_vm._m(4)])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.task.type == 3
                        ? _c("h5", { staticClass: "badge tx-5" }, [_vm._m(5)])
                        : _vm._e(),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row mt-4" }, [
                  _c("div", { staticClass: "col-lg-12" }, [
                    _c("p", { staticClass: "task--description" }, [
                      _c("strong", [_vm._v("Subject:")]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(
                        "\n                                " +
                          _vm._s(_vm.task.title) +
                          "\n                            "
                      ),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row mt-4" }, [
                  _c("div", { staticClass: "col-lg-12" }, [
                    _c("h5", { staticClass: "tx-bold" }, [
                      _vm._v("Task Details"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { attrs: { id: "showmore-1", "data-showmore": "" } },
                      [
                        _c("div", { staticClass: "custom-css" }, [
                          _c("pre", [
                            _c("p", [_vm._v(_vm._s(_vm.task.description))]),
                          ]),
                        ]),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-12 mt-lg-0 mt-3" }, [
                    _c("h5", { staticClass: "tx-bold" }, [
                      _vm._v("Activity Logs"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "notes-wrap" },
                      _vm._l(_vm.task.logs, function (log, lindex) {
                        return _c(
                          "div",
                          { key: lindex, staticClass: "note row" },
                          [
                            _c(
                              "div",
                              { staticClass: "col-md-12 col-sm-11 col-xs-11" },
                              [
                                _c("p", { staticClass: "post-response" }, [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(log.description) +
                                      "\n                                        "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("small", { staticClass: "posted-by" }, [
                                  _vm._v(
                                    "\n                                            on " +
                                      _vm._s(
                                        _vm.dateFormatLaravel(log.created_at)
                                      ) +
                                      "\n                                        "
                                  ),
                                ]),
                              ]
                            ),
                          ]
                        )
                      }),
                      0
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-footer" }, [
                _c("div", { staticClass: "row my-2" }, [
                  _c(
                    "div",
                    { staticClass: "col-12 text-center" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-handy-task mr-md-2 mr-0",
                          attrs: {
                            to: {
                              name: "task.show",
                              params: { id: _vm.task.id },
                            },
                          },
                        },
                        [_vm._v("Go Back")]
                      ),
                    ],
                    1
                  ),
                ]),
              ]),
            ]),
          ]),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "breadcrumb-item" }, [
      _c("a", { attrs: { href: "javascript:void(0)" } }, [
        _vm._v("Task Detail"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "breadcrumb-item active" }, [
      _c("a", { attrs: { href: "javascript:void(0)" } }, [_vm._v("Task Log")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "badge light badge-default" }, [
      _vm._v("\n                                    Task Type: "),
      _c("b", [_vm._v("NONE")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "badge light badge-success" }, [
      _vm._v("\n                                    Task Type: "),
      _c("b", [_vm._v("CALLING")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "badge light badge-warning" }, [
      _vm._v("\n                                    Task Type: "),
      _c("b", [_vm._v("PRIORITY")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "badge light badge-danger" }, [
      _vm._v("\n                                    Task Type: "),
      _c("b", [_vm._v("SCHEDULE OR RECURRING")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);