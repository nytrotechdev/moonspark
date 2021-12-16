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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moralis */ "./node_modules/moralis/index.js");
/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    // BarChart,
    Moralis: (moralis__WEBPACK_IMPORTED_MODULE_1___default())
  },
  data: function data() {
    return {
      data: undefined,
      baseUrl: window.base_url,
      projects: [],
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
      moralisUser: undefined
    };
  },
  mounted: function mounted() {
    this.checkWeb3();
    this.getData();
    this.getReceiverAddress(); // this.init();

    this.getExchangeRate();
  },
  methods: {
    checkWeb3: function checkWeb3() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var ethereum;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ethereum = window.ethereum;

                if (!ethereum || !ethereum.on) {
                  _this.metamaskuser = "";
                } else {
                  //displayMessage("00", "Metamask is Installed");
                  _this.setWeb3Environment();
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    updateCallBack: function updateCallBack(params) {
      console.log(params, "Update Callback");
    },
    setWeb3Environment: function setWeb3Environment() {
      var _this2 = this;

      web3 = new Web3(window.ethereum);
      web3.currentProvider.on('connect', this.updateCallBack);
      web3.currentProvider.on('close', this.updateCallBack);
      window.ethereum.on('accountsChanged', /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(accounts) {
          var user;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (accounts[0]) {
                    _context2.next = 4;
                    break;
                  }

                  _this2.metamaskuser = "";
                  _context2.next = 8;
                  break;

                case 4:
                  _context2.next = 6;
                  return moralis__WEBPACK_IMPORTED_MODULE_1___default().User.current();

                case 6:
                  user = _context2.sent;
                  _this2.metamaskuser = user.id;

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      this.getNetwork();
      this.monitorNetwork();
    },
    unsetUser: function unsetUser() {
      this.metamaskuser = "";
    },
    getNetwork: function getNetwork() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var chainID;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return web3.eth.net.getId();

              case 2:
                chainID = _context3.sent;
                _context3.next = 5;
                return web3.eth.getAccounts(function (err, accounts) {
                  if (err != null) _this3.unsetUser();else if (accounts.length == 0) _this3.unsetUser();else console.log("User is logged in to MetaMask");
                });

              case 5:
                if (!chainID) {
                  _this3.metamaskuser = "";
                }

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getNetworkName: function getNetworkName(chainID) {
      var networks = {
        1: "Ethereum Mainnet",
        3: "Ropsten Network",
        4: "Rinkeby Network",
        5: "Goerli Network",
        56: "Binance Smart Chain Mainnet",
        97: "Binance Smart Chain Testnet",
        80001: "Polygon Mumbai Testnet"
      };
      return networks[chainID];
    },
    monitorNetwork: function monitorNetwork() {
      moralis__WEBPACK_IMPORTED_MODULE_1___default().onChainChanged(function () {
        window.location.reload();
      });
    },
    buyToken: function buyToken(project) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var user;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return axios('profile');

              case 3:
                user = _context4.sent;
                _this4.currentProject = project;

                if (user.wallet_address) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt("return", _this4.$toastr.error("Your wallet address is not set, Please go to profile section to update your wallet address", "Error"));

              case 7:
                _this4.checkWeb3();

                $('#buyToken').modal('show');
                _context4.next = 15;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](0);
                //unathenticated
                console.log(_context4.t0.response.data); // window.location.href = "/register";

                window.location.href = "/register?refer=" + window.location.href + "?target=buy_crypto";

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 11]]);
      }))();
    },
    authenticateMoralis: function authenticateMoralis() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var user, currentAddress, metamaskuser;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!window.ethereum) {
                  _context5.next = 21;
                  break;
                }

                _this5.initMoralis();

                _context5.next = 4;
                return moralis__WEBPACK_IMPORTED_MODULE_1___default().User.current();

              case 4:
                user = _context5.sent;
                _context5.next = 7;
                return moralis__WEBPACK_IMPORTED_MODULE_1___default().Web3.enable();

              case 7:
                _context5.next = 9;
                return window.ethereum.send("eth_requestAccounts");

              case 9:
                currentAddress = _context5.sent;
                currentAddress = currentAddress.result[0];

                if (!(user && user.attributes.ethAddress == currentAddress)) {
                  _context5.next = 16;
                  break;
                }

                console.log(user);
                _this5.metamaskuser = user.id;
                _context5.next = 19;
                break;

              case 16:
                _context5.next = 18;
                return moralis__WEBPACK_IMPORTED_MODULE_1___default().authenticate({
                  signingMessage: "Log in using Moonspark.Finance"
                }).then(function (user) {
                  console.log("logged in user:", user);
                  localStorage.setItem('metamask_user', user.id);
                  _this5.metamaskuser = user.id;
                })["catch"](function (error) {
                  console(error);
                });

              case 18:
                metamaskuser = _context5.sent;

              case 19:
                _context5.next = 23;
                break;

              case 21:
                localStorage.removeItem('metamask_user');
                console.log("Non ethereum browser");

              case 23:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    init: function init() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        var lsmu, user, metamaskuser;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                lsmu = localStorage.getItem('metamask_user');
                _context7.next = 3;
                return web3.eth.getAccounts( /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(err, accounts) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            if (err != null || accounts.length == 0) {
                              _this6.unsetUser();

                              _this6.authenticateMoralis(); // this.initMoralis();
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

                            } else {
                              if (!_this6.metamaskuser) _this6.authenticateMoralis();
                              console.log("User is logged in to MetaMask");
                            }

                            ;

                          case 2:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, _callee6);
                  }));

                  return function (_x2, _x3) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 3:
                console.log('here');
                return _context7.abrupt("return");

              case 10:
                _this6.initMoralis();

                _context7.next = 13;
                return moralis__WEBPACK_IMPORTED_MODULE_1___default().User.currentAsync();

              case 13:
                user = _context7.sent;

                if (user) {
                  _context7.next = 21;
                  break;
                }

                console.log('i am here');
                _context7.next = 18;
                return moralis__WEBPACK_IMPORTED_MODULE_1___default().authenticate({
                  signingMessage: "Log in using Moonspark.Finance"
                }).then(function (user) {
                  console.log("logged in user:", user);
                  localStorage.setItem('metamask_user', user.id);
                  _this6.metamaskuser = user.id;
                })["catch"](function (error) {
                  console(error);
                });

              case 18:
                metamaskuser = _context7.sent;
                _context7.next = 24;
                break;

              case 21:
                console.log('but i am here too', user);
                localStorage.setItem('metamask_user', user.id);
                _this6.metamaskuser = user.id;

              case 24:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    changeProvider: function changeProvider() {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8() {
        var web3;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return moralis__WEBPACK_IMPORTED_MODULE_1___default().Web3.enable();

              case 2:
                web3 = _context8.sent;
                _context8.next = 5;
                return web3.currentProvider.request({
                  method: "wallet_switchEthereumChain",
                  params: [{
                    chainId: "0x89"
                  }]
                });

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    getReceiverAddress: function getReceiverAddress(project) {
      var _this7 = this;

      axios.get('get-receiver-address').then(function (_ref3) {
        var data = _ref3.data;
        _this7.receiver_address = data;
      })["catch"](function (e) {
        var errors = e.response.data.errors;
        Object.keys(errors).forEach(function (key) {
          _this7.$toastr.error(errors[key], "Error!");
        });
      });
    },
    initiateTransaction: function initiateTransaction(type) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9() {
        var amount, options, result, _amount, _options, _result;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                document.body.classList.add('loading-indicator_v1');

                if (!_this8.receiver_address) {
                  _this8.$toastr.error("You can not send asset at this moment, Contact Support", "Error!");
                }

                if (!(type == 1)) {
                  _context9.next = 20;
                  break;
                }

                amount = parseFloat(_this8.rates.eth) * (parseFloat(_this8.currentProject.token_price.amount) * _this8.token_qty);
                options = {
                  type: "native",
                  amount: moralis__WEBPACK_IMPORTED_MODULE_1___default().Units.ETH(amount),
                  receiver: _this8.receiver_address
                };
                _context9.prev = 5;
                _context9.next = 8;
                return moralis__WEBPACK_IMPORTED_MODULE_1___default().transfer(options);

              case 8:
                result = _context9.sent;

                _this8.saveTransaction(result);

                _context9.next = 18;
                break;

              case 12:
                _context9.prev = 12;
                _context9.t0 = _context9["catch"](5);
                console.log(_context9.t0);

                _this8.$toastr.error("The transaction can not be processed", "Error");

                document.body.classList.remove('loading-indicator_v1');
                return _context9.abrupt("return");

              case 18:
                _context9.next = 34;
                break;

              case 20:
                _amount = parseFloat(_this8.rates.bnb) * (parseFloat(_this8.currentProject.token_price.amount) * _this8.token_qty);
                _options = {
                  type: "erc20",
                  amount: moralis__WEBPACK_IMPORTED_MODULE_1___default().Units.Token(_amount, "18"),
                  receiver: _this8.receiver_address,
                  contractAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
                };
                _context9.prev = 22;
                _context9.next = 25;
                return moralis__WEBPACK_IMPORTED_MODULE_1___default().transfer(_options);

              case 25:
                _result = _context9.sent;

                _this8.saveTransaction(_result);

                _context9.next = 34;
                break;

              case 29:
                _context9.prev = 29;
                _context9.t1 = _context9["catch"](22);
                console.log(_context9.t1);

                _this8.$toastr.error("The transaction can not be processed", "Error");

                return _context9.abrupt("return");

              case 34:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[5, 12], [22, 29]]);
      }))();
    },
    saveTransaction: function saveTransaction(result) {
      var _this9 = this;

      var data = {
        payload: result,
        receiver_address: result.to_address,
        amount: result.value,
        transaction_hash: result.transaction_hash,
        sender: result.from_address
      };
      axios.post("transaction/" + this.currentProject.id + "/transfer", data).then(function (_ref4) {
        var data = _ref4.data;

        _this9.$toastr.success(data.message, "Success!");

        $('#buyToken').modal('hide');

        _this9.$router.push({
          name: 'transaction'
        });

        _this9.initTrans = false;
        document.body.classList.remove('loading-indicator_v1');
      })["catch"](function (e) {
        console.log(e);
        var errors = e.response.data.errors;
        Object.keys(errors).forEach(function (key) {
          _this9.$toastr.error(errors[key], "Error!");
        });
      });
    },
    getExchangeRate: function getExchangeRate() {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee10() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                axios.post('/exchange-rate').then(function (_ref5) {
                  var data = _ref5.data;
                  _this10.rates = data;
                });

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },
    getData: function getData() {
      var _this11 = this;

      axios.get("/get-latest-projects?limit=3").then(function (_ref6) {
        var data = _ref6.data;
        _this11.projects = data;
      });
    }
  },
  watch: {
    filter: function filter() {
      this.getData();
    },
    $route: function $route() {
      this.scrollMeTo();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.notice{\n    margin-bottom: 18px;\n    background: gold;\n    border-radius: 10px;\n    padding: 10px;\n}\n.btn-silver {\n    background: slategray;\n    border: 1px solid slategray !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _IndexComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/dashboard/IndexComponent.vue?vue&type=style&index=0&lang=css&");


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
    _c("section", { staticClass: "homebanner" }, [
      _c(
        "video",
        {
          attrs: { autoplay: "", loop: "", muted: "" },
          domProps: { muted: true },
        },
        [
          _c("source", {
            attrs: { src: "/assets/img/video2.mp4", type: "video/mp4" },
          }),
        ]
      ),
      _vm._v(" "),
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
                        _c("div", { staticClass: "row" }, [
                          _c("p", { staticClass: "col-6" }, [_vm._v("Price")]),
                          _vm._v(" "),
                          _c("p", {
                            staticClass: "col-6 text-right",
                            domProps: {
                              textContent: _vm._s(
                                project.token_price
                                  ? "$" + project.token_price.amount
                                  : "$1"
                              ),
                            },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("p", { staticClass: "col-6" }, [
                            _vm._v("Market Cap"),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "col-6 text-right" }, [
                            _vm._v(
                              "$" +
                                _vm._s(_vm.numberFormat(project.market_cape))
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("p", { staticClass: "col-6" }, [
                            _vm._v("Fully Diluted"),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "col-6 text-right" }, [
                            _vm._v(
                              "$" +
                                _vm._s(
                                  _vm.numberFormat(project.diluted_market_cape)
                                )
                            ),
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
                            on: {
                              click: function ($event) {
                                return _vm.buyToken(project)
                              },
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
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "buyToken",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "buyTokenTitle",
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
              !_vm.metamaskuser
                ? _c("div", { staticClass: "buyCoin" }, [
                    _c("form", [
                      _c("h3", [_vm._v("Proceed to Buy")]),
                      _vm._v(" "),
                      _vm._m(2),
                      _vm._v(" "),
                      _vm._m(3),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-button connect-metamask" },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "main-btn btn-gold",
                              attrs: { type: "button" },
                              on: { click: _vm.init },
                            },
                            [
                              _c("img", {
                                staticStyle: { width: "30px" },
                                attrs: {
                                  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/512px-MetaMask_Fox.svg.png",
                                },
                              }),
                              _vm._v(
                                "\n                            Connect MetaMask Wallet"
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]),
                  ])
                : _c("div", { staticClass: "buyCoin" }, [
                    _c("form", [
                      _c("h3", [_vm._v("Proceed to Buy")]),
                      _vm._v(" "),
                      _vm._m(4),
                      _vm._v(" "),
                      _vm._m(5),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Enter Number of Tokens")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.token_qty,
                              expression: "token_qty",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: { type: "number" },
                          domProps: { value: _vm.token_qty },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.token_qty = $event.target.value
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _vm.currentProject.token_price && _vm.rates
                        ? _c("div", { staticClass: "form-group" }, [
                            _vm._m(6),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass:
                                  "d-flex align-items-center justify-content-between",
                              },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass: "main-btn btn-silver",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function () {
                                        return _vm.initiateTransaction(1)
                                      },
                                    },
                                  },
                                  [
                                    _c("img", {
                                      staticStyle: { width: "20px" },
                                      attrs: { src: "/assets/img/eth.png" },
                                    }),
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(
                                          parseFloat(_vm.rates.eth) *
                                            (parseFloat(
                                              _vm.currentProject.token_price
                                                .amount
                                            ) *
                                              _vm.token_qty)
                                        ) +
                                        " ETH\n                                "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass:
                                  "d-flex align-items-center justify-content-between",
                              },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass: "main-btn btn-silver",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function () {
                                        return _vm.initiateTransaction(2)
                                      },
                                    },
                                  },
                                  [
                                    _c("img", {
                                      staticStyle: { width: "20px" },
                                      attrs: { src: "/assets/img/bnblogo.png" },
                                    }),
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          parseFloat(_vm.rates.bnb) *
                                            (parseFloat(
                                              _vm.currentProject.token_price
                                                .amount
                                            ) *
                                              _vm.token_qty)
                                        ) +
                                        " BNB                                    \n                                "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._m(7),
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
    return _c("div", { staticClass: "col-lg-6 col-md-7 col-sm-12" }, [
      _c("div", { staticClass: "banner-text" }, [
        _c("h1", [
          _vm._v("\n                Invest in "),
          _c("br"),
          _c("span", [_vm._v("Cryptocurrencies")]),
          _vm._v(" "),
          _c("br"),
          _vm._v("\n                of the Future\n                "),
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
    return _c("div", { staticClass: "notice" }, [
      _c("strong", [_vm._v("Note:")]),
      _vm._v(
        " Plese Connect Metamask Wallet to proceed\n                        "
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "notice" }, [
      _c("strong", [_vm._v("Note:")]),
      _vm._v(
        " Make Sure while sending Eth or BSC it is connected to appropriate \n                            Chain Network, "
      ),
      _c(
        "a",
        {
          staticStyle: { color: "black" },
          attrs: {
            href: "https://moonspark.finance/wallet-guide/",
            target: "_blank",
          },
        },
        [_vm._v("Refer, https://moonspark.finance/wallet-guide/ ")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "notice" }, [
      _c("strong", [_vm._v("Note:")]),
      _vm._v(
        " You can pay for token in Eth or BNB, Once the transaction is confirmed, \n                            The system will transfer the token to your wallet address\n                        "
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "notice" }, [
      _c("strong", [_vm._v("Note:")]),
      _vm._v(
        " Make Sure while sending Eth or BSC it is connected to appropriate \n                            Chain Network, "
      ),
      _c(
        "a",
        {
          staticStyle: { color: "black" },
          attrs: {
            href: "https://moonspark.finance/wallet-guide/",
            target: "_blank",
          },
        },
        [_vm._v("Refer, https://moonspark.finance/wallet-guide/ ")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "d-flex align-items-center justify-content-between" },
      [
        _c("span", [_vm._v("Tokens Fiat Price:")]),
        _vm._v(" "),
        _c("span", { staticClass: "tokens_to_be_transfered" }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-button" }, [
      _c(
        "button",
        {
          staticClass: "main-btn btn-transparent",
          attrs: { "data-dismiss": "modal" },
        },
        [_vm._v("cancel")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);