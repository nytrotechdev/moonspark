"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["client-project-show"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/ShowComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/ShowComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      moralisUser: undefined
    };
  },
  components: {
    Moralis: (moralis__WEBPACK_IMPORTED_MODULE_1___default())
  },
  mounted: function mounted() {
    this.getProject();
    this.checkWeb3();
    this.getReceiverAddress(); // this.init();

    this.getExchangeRate();
  },
  methods: {
    getProject: function getProject() {
      var _this = this;

      axios.get("/projects/".concat(this.$route.params.id)).then(function (_ref) {
        var data = _ref.data;
        _this.project = data;
        _this.currentProject = data;
      })["catch"](function (e) {
        console.log(e);
        var errors = e.response.data.errors;
        Object.keys(errors).forEach(function (key) {
          _this.$toastr.error(errors[key], "Error!");
        });
      });
    },
    checkWeb3: function checkWeb3() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var ethereum;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ethereum = window.ethereum;

                if (!ethereum || !ethereum.on) {
                  _this2.metamaskuser = "";
                } else {
                  //displayMessage("00", "Metamask is Installed");
                  _this2.setWeb3Environment();
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
      var _this3 = this;

      web3 = new Web3(window.ethereum);
      web3.currentProvider.on('connect', this.updateCallBack);
      web3.currentProvider.on('close', this.updateCallBack);
      window.ethereum.on('accountsChanged', /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(accounts) {
          var user;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (accounts[0]) {
                    _context2.next = 4;
                    break;
                  }

                  _this3.metamaskuser = "";
                  _context2.next = 8;
                  break;

                case 4:
                  _context2.next = 6;
                  return moralis__WEBPACK_IMPORTED_MODULE_1___default().User.current();

                case 6:
                  user = _context2.sent;
                  _this3.metamaskuser = user.id;

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
      this.getNetwork();
      this.monitorNetwork();
    },
    unsetUser: function unsetUser() {
      this.metamaskuser = "";
    },
    getNetwork: function getNetwork() {
      var _this4 = this;

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
                  if (err != null) _this4.unsetUser();else if (accounts.length == 0) _this4.unsetUser();else console.log("User is logged in to MetaMask");
                });

              case 5:
                if (!chainID) {
                  _this4.metamaskuser = "";
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
      var _this5 = this;

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
                _this5.currentProject = project;

                _this5.checkWeb3();

                if (user.wallet_address) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt("return", _this5.$toastr.error("Your wallet address is not set, Please go to profile section to update your wallet address", "Error"));

              case 8:
                $('#buyToken').modal('show');
                _context4.next = 15;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](0);
                //unathenticated
                console.log(_context4.t0.response.data);
                window.location.href = "/register?refer=" + window.location.href;

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 11]]);
      }))();
    },
    authenticateMoralis: function authenticateMoralis() {
      var _this6 = this;

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

                _this6.initMoralis();

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
                _this6.metamaskuser = user.id;
                _context5.next = 19;
                break;

              case 16:
                _context5.next = 18;
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
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        var lsmu;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                lsmu = localStorage.getItem('metamask_user');
                _context7.next = 3;
                return web3.eth.getAccounts( /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(err, accounts) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            if (err != null || accounts.length == 0) {
                              _this7.unsetUser();

                              _this7.authenticateMoralis();
                            } else {
                              if (!_this7.metamaskuser) _this7.authenticateMoralis();
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
                    return _ref3.apply(this, arguments);
                  };
                }());

              case 3:
                console.log('here');

              case 4:
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
      var _this8 = this;

      axios.get('get-receiver-address').then(function (_ref4) {
        var data = _ref4.data;
        _this8.receiver_address = data;
      })["catch"](function (e) {
        var errors = e.response.data.errors;
        Object.keys(errors).forEach(function (key) {
          _this8.$toastr.error(errors[key], "Error!");
        });
      });
    },
    initiateTransaction: function initiateTransaction(type) {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9() {
        var amount, options, result, _amount, _options, _result;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                document.body.classList.add('loading-indicator_v1');

                if (!_this9.receiver_address) {
                  _this9.$toastr.error("You can not send asset at this moment, Contact Support", "Error!");
                }

                if (!(type == 1)) {
                  _context9.next = 20;
                  break;
                }

                amount = parseFloat(_this9.rates.eth) * (parseFloat(_this9.currentProject.token_price.amount) * _this9.token_qty);
                options = {
                  type: "native",
                  amount: moralis__WEBPACK_IMPORTED_MODULE_1___default().Units.ETH(amount),
                  receiver: _this9.receiver_address
                };
                _context9.prev = 5;
                _context9.next = 8;
                return moralis__WEBPACK_IMPORTED_MODULE_1___default().transfer(options);

              case 8:
                result = _context9.sent;

                _this9.saveTransaction(result);

                _context9.next = 18;
                break;

              case 12:
                _context9.prev = 12;
                _context9.t0 = _context9["catch"](5);
                console.log(_context9.t0);

                _this9.$toastr.error("The transaction can not be processed", "Error");

                document.body.classList.remove('loading-indicator_v1');
                return _context9.abrupt("return");

              case 18:
                _context9.next = 34;
                break;

              case 20:
                _amount = parseFloat(_this9.rates.bnb) * (parseFloat(_this9.currentProject.token_price.amount) * _this9.token_qty);
                _options = {
                  type: "erc20",
                  amount: moralis__WEBPACK_IMPORTED_MODULE_1___default().Units.Token(_amount, "18"),
                  receiver: _this9.receiver_address,
                  contractAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
                };
                _context9.prev = 22;
                _context9.next = 25;
                return moralis__WEBPACK_IMPORTED_MODULE_1___default().transfer(_options);

              case 25:
                _result = _context9.sent;

                _this9.saveTransaction(_result);

                _context9.next = 34;
                break;

              case 29:
                _context9.prev = 29;
                _context9.t1 = _context9["catch"](22);
                console.log(_context9.t1);

                _this9.$toastr.error("The transaction can not be processed", "Error");

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
      var _this10 = this;

      var data = {
        payload: result,
        receiver_address: result.to_address,
        amount: result.value,
        transaction_hash: result.transaction_hash,
        sender: result.from_address
      };
      axios.post("transaction/" + this.currentProject.id + "/transfer", data).then(function (_ref5) {
        var data = _ref5.data;

        _this10.$toastr.success(data.message, "Success!");

        $('#buyToken').modal('hide');

        _this10.$router.push({
          name: 'transaction'
        });

        _this10.initTrans = false;
        document.body.classList.remove('loading-indicator_v1');
      })["catch"](function (e) {
        console.log(e);
        var errors = e.response.data.errors;
        Object.keys(errors).forEach(function (key) {
          _this10.$toastr.error(errors[key], "Error!");
        });
      });
    },
    getExchangeRate: function getExchangeRate() {
      var _this11 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee10() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                axios.post('/exchange-rate').then(function (_ref6) {
                  var data = _ref6.data;
                  _this11.rates = data;
                });

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    }
  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/ShowComponent.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/ShowComponent.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\nh6{\n    color: #fff;\n    font-weight: bold;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/ShowComponent.vue?vue&type=style&index=1&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/ShowComponent.vue?vue&type=style&index=1&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/ShowComponent.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/ShowComponent.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/ShowComponent.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/ShowComponent.vue?vue&type=style&index=1&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/ShowComponent.vue?vue&type=style&index=1&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowComponent.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/ShowComponent.vue?vue&type=style&index=1&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/client/views/project/ShowComponent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/client/views/project/ShowComponent.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShowComponent_vue_vue_type_template_id_5cd83d7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowComponent.vue?vue&type=template&id=5cd83d7a& */ "./resources/js/client/views/project/ShowComponent.vue?vue&type=template&id=5cd83d7a&");
/* harmony import */ var _ShowComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/views/project/ShowComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _ShowComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShowComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/client/views/project/ShowComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _ShowComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShowComponent.vue?vue&type=style&index=1&lang=css& */ "./resources/js/client/views/project/ShowComponent.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _ShowComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowComponent_vue_vue_type_template_id_5cd83d7a___WEBPACK_IMPORTED_MODULE_0__.render,
  _ShowComponent_vue_vue_type_template_id_5cd83d7a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/views/project/ShowComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/client/views/project/ShowComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/client/views/project/ShowComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/ShowComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/views/project/ShowComponent.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/client/views/project/ShowComponent.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/ShowComponent.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/client/views/project/ShowComponent.vue?vue&type=style&index=1&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/client/views/project/ShowComponent.vue?vue&type=style&index=1&lang=css& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowComponent.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/ShowComponent.vue?vue&type=style&index=1&lang=css&");


/***/ }),

/***/ "./resources/js/client/views/project/ShowComponent.vue?vue&type=template&id=5cd83d7a&":
/*!********************************************************************************************!*\
  !*** ./resources/js/client/views/project/ShowComponent.vue?vue&type=template&id=5cd83d7a& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_template_id_5cd83d7a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_template_id_5cd83d7a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_template_id_5cd83d7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowComponent.vue?vue&type=template&id=5cd83d7a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/ShowComponent.vue?vue&type=template&id=5cd83d7a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/ShowComponent.vue?vue&type=template&id=5cd83d7a&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/client/views/project/ShowComponent.vue?vue&type=template&id=5cd83d7a& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    _c("section", { staticClass: "banner" }),
    _vm._v(" "),
    _c("section", { staticClass: "project_summary" }, [
      _c("div", { staticClass: "container" }, [
        _vm._m(0),
        _vm._v(" "),
        _vm.project
          ? _c("div", { staticClass: "card-wrapper" }, [
              _c("div", { staticClass: "form" }, [
                _c("form", { attrs: { id: "form1" } }, [
                  _c(
                    "div",
                    { staticClass: "row row-sm mg-b-10 first-parent" },
                    [
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            disabled: true,
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            disabled: true,
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
                        _c("img", {
                          staticClass: "d-block",
                          staticStyle: { width: "80px" },
                          attrs: { src: _vm.project.logo },
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
                          attrs: {
                            name: "your-message",
                            cols: "20",
                            rows: "5",
                            disabled: true,
                          },
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            disabled: true,
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            disabled: true,
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            attrs: { disabled: true },
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
                          _vm._l(
                            _vm.supported_platform,
                            function (platform, pid) {
                              return _c(
                                "option",
                                { key: pid, domProps: { value: platform } },
                                [_vm._v(_vm._s(platform))]
                              )
                            }
                          ),
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
                          attrs: {
                            name: "token-use-case",
                            rows: "4",
                            disabled: true,
                          },
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            disabled: true,
                            "aria-required": "true",
                            "aria-invalid": "false",
                          },
                          domProps: { value: _vm.project.website },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.project,
                                "website",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            disabled: true,
                            "aria-required": "true",
                            "aria-invalid": "false",
                          },
                          domProps: { value: _vm.project.medium },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.project,
                                "medium",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            disabled: true,
                            "aria-required": "true",
                            "aria-invalid": "false",
                          },
                          domProps: { value: _vm.project.twitter },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.project,
                                "twitter",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            disabled: true,
                            "aria-required": "true",
                            "aria-invalid": "false",
                          },
                          domProps: { value: _vm.project.telegram },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.project,
                                "telegram",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            disabled: true,
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            disabled: true,
                            "aria-required": "true",
                            "aria-invalid": "false",
                          },
                          domProps: { value: _vm.project.email },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.project,
                                "email",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            disabled: true,
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            disabled: true,
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                          attrs: {
                            disabled: true,
                            name: "Short-CEO",
                            rows: "4",
                          },
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                          attrs: {
                            name: "Short-CTO",
                            rows: "4",
                            disabled: true,
                          },
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
                        _c("label", [_vm._v("Short Video Presentatio")]),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            attrs: {
                              href: _vm.project.short_video,
                              target: "_blank",
                            },
                          },
                          [_vm._v("View")]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                                value:
                                  _vm.project.project_business_incorporated,
                                expression:
                                  "project.project_business_incorporated",
                              },
                            ],
                            attrs: {
                              type: "radio",
                              disabled: true,
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
                          _vm._v(" Yes\n                        "),
                        ]),
                        _vm._v(" "),
                        _c("label", { staticClass: "ml-2" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value:
                                  _vm.project.project_business_incorporated,
                                expression:
                                  "project.project_business_incorporated",
                              },
                            ],
                            attrs: {
                              type: "radio",
                              disabled: true,
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
                          _vm._v(" No\n                        "),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                          attrs: {
                            disabled: true,
                            rows: "4",
                            name: "Incorporation-details",
                          },
                          domProps: {
                            value:
                              _vm.project.project_business_incorporated_where,
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                              disabled: true,
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
                          _vm._v(" Yes\n                        "),
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
                              disabled: true,
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
                          _vm._v(" No\n                        "),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-md-12" }, [
                        _c("label", [
                          _vm._v("If Business licensed ! Details ?"),
                        ]),
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
                          attrs: {
                            disabled: true,
                            rows: "4",
                            name: "Business-details",
                          },
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                          attrs: {
                            disabled: true,
                            rows: "4",
                            name: "Plans-details",
                          },
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                          attrs: {
                            name: "Tokenomics-details",
                            rows: "4",
                            disabled: true,
                          },
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                          attrs: {
                            name: "business-model",
                            rows: "4",
                            disabled: true,
                          },
                          domProps: {
                            value: _vm.project.project_business_model,
                          },
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            disabled: true,
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
                        _c("label", [
                          _vm._v(
                            "\n                            Names and titles of core team members and LinkedIn Bios"
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
                          attrs: { name: "Bios", rows: "4", disabled: true },
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                          attrs: { name: "teams", rows: "4", disabled: true },
                          domProps: { value: _vm.project.summary },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.project,
                                "summary",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                              disabled: true,
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
                          _vm._v(" Yes\n                        "),
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
                              disabled: true,
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
                          _vm._v(" No\n                        "),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-md-12" }, [
                        _c("label", [
                          _vm._v(" Smart contract audit information:"),
                        ]),
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
                          attrs: {
                            name: "smart-contract",
                            rows: "4",
                            disabled: true,
                          },
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            attrs: {
                              type: "radio",
                              disabled: true,
                              value: "yes",
                              name: "mvp",
                            },
                            domProps: {
                              checked: _vm._q(_vm.project.mvp, "yes"),
                            },
                            on: {
                              change: function ($event) {
                                return _vm.$set(_vm.project, "mvp", "yes")
                              },
                            },
                          }),
                          _vm._v(" Yes\n                        "),
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
                            attrs: {
                              type: "radio",
                              disabled: true,
                              value: "no",
                              name: "mvp",
                            },
                            domProps: {
                              checked: _vm._q(_vm.project.mvp, "no"),
                            },
                            on: {
                              change: function ($event) {
                                return _vm.$set(_vm.project, "mvp", "no")
                              },
                            },
                          }),
                          _vm._v(" No\n                        "),
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
                            disabled: true,
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            disabled: true,
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            disabled: true,
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
                            "\n                            Key components of project roadmap over the next 90 days:"
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
                          attrs: { disabled: true, name: "roadmap", rows: "4" },
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            disabled: true,
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            disabled: true,
                            "aria-required": "true",
                            "aria-invalid": "false",
                          },
                          domProps: { value: _vm.project.split },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.project,
                                "split",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            disabled: true,
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            disabled: true,
                            "aria-required": "true",
                            "aria-invalid": "false",
                          },
                          domProps: { value: _vm.project.contract },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.project,
                                "contract",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            disabled: true,
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            disabled: true,
                            "aria-invalid": "false",
                          },
                          domProps: { value: _vm.project.decimal },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.project,
                                "decimal",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-md-12" }, [
                        _c("label", [
                          _vm._v("Number of tokens in circulation:"),
                        ]),
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
                            disabled: true,
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            disabled: true,
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            disabled: true,
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
                      _c("div", { staticClass: "form-group col-md-12" }, [
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
                            disabled: true,
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
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-button col-md-12 text-right mt-2",
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "main-btn btn-gold px-5 py-3",
                              attrs: { type: "button" },
                              on: {
                                click: function ($event) {
                                  return _vm.buyToken(_vm.project)
                                },
                              },
                            },
                            [_vm._v("buy")]
                          ),
                        ]
                      ),
                    ]
                  ),
                ]),
              ]),
            ])
          : _vm._e(),
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
                      _vm._m(3),
                      _vm._v(" "),
                      _vm._m(4),
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
                      _vm._m(5),
                      _vm._v(" "),
                      _vm._m(6),
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
                            _vm._m(7),
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
                      _vm._m(8),
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
    return _c(
      "div",
      { staticClass: "row align-items-center justify-content-center" },
      [
        _c("h2", { staticClass: "heading text-center mt-5 mb-5" }, [
          _vm._v("\n                Project Summary\n            "),
        ]),
      ]
    )
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