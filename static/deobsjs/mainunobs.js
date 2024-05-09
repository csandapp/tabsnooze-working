(window.webpackJsonp = window.webpackJsonp || []).push([[3], {
    /**
     * @param {?} dataAndEvents
     * @param {?} i
     * @param {Object} $
     * @return {undefined}
     */
    104 : function(dataAndEvents, i, $) {
      /**
       * @return {?}
       */
      function reduce() {
        var rval = Object(options.a)(["\n  background-color: ", ";\n  border-radius: 5px;\n  padding: 10px;\n  /* margin: 10px; */\n  height: 100%;\n\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.28);\n"]);
        return reduce = function() {
          return rval;
        }, rval;
      }
      /**
       * @return {?}
       */
      function filter() {
        var event = Object(options.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: ", ";\n  background-color: rgba(0, 0, 0, 0.2);\n\n  padding: 10px;\n  transition: opacity 300ms;\n  opacity: ", ";\n"]);
        return filter = function() {
          return event;
        }, event;
      }
      $.d(i, "a", function() {
        return g;
      });
      var options = $(5);
      var object = $(15);
      var opts = $(16);
      var doc = $(18);
      var meta = $(17);
      var actual = $(19);
      var content = $(0);
      var target = $.n(content);
      var that = $(3);
      var where = $(105);
      var el = $.n(where);
      var g = function(deepDataAndEvents) {
        /**
         * @return {?}
         */
        function bound() {
          return Object(object.a)(this, bound), Object(doc.a)(this, Object(meta.a)(bound).apply(this, arguments));
        }
        return Object(actual.a)(bound, deepDataAndEvents), Object(opts.a)(bound, [{
          key : "render",
          /**
           * @return {?}
           */
          value : function() {
            var self = this.props;
            var visible = self.visible;
            var len = self.noAnimation;
            var children = self.children;
            return target.a.createElement(fieldsString, {
              active : visible
            }, target.a.createElement(el.a, {
              in : visible,
              timeout : {
                enter : len ? 0 : 300,
                exit : 300
              },
              direction : "up",
              mountOnEnter : true
            }, target.a.createElement(tagToInsert, {
              visible : visible
            }, children)));
          }
        }]), bound;
      }(content.Component);
      var fieldsString = that.d.div(filter(), function(s) {
        return s.active ? "auto" : "none";
      }, function(tab) {
        return tab.active ? 1 : 0;
      });
      var tagToInsert = that.d.div(reduce(), function(theme) {
        return theme.theme.snoozePanel.bgColor;
      });
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} i
     * @param {Object} $
     * @return {undefined}
     */
    106 : function(dataAndEvents, i, $) {
      /**
       * @return {?}
       */
      function hasKey() {
        var result = Object(object.a)(["\n  display: flex;\n\n  position: fixed;\n  bottom: 20px;\n  left: 20px;\n"]);
        return hasKey = function() {
          return result;
        }, result;
      }
      /**
       * @return {?}
       */
      function reduce() {
        var rval = Object(object.a)(["\n      :after {\n        color: rgba(255, 255, 255, 0.3);\n        content: 'Type a todo...';\n      }\n    "]);
        return reduce = function() {
          return rval;
        }, rval;
      }
      /**
       * @return {?}
       */
      function filter() {
        var event = Object(object.a)(["\n  cursor: text;\n  color: white;\n  max-width: 85%;\n  min-width: 50%;\n\n  font-size: 9vmin;\n  line-height: 12.2vmin;\n  font-weight: 200;\n\n  outline: none;\n  border-radius: 10px;\n  padding: 20px;\n  transition: background-color 0.2s;\n\n  ::selection {\n    background: rgba(0, 0, 0, 0.2);\n  }\n\n  :hover {\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n  :focus {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n\n  ", "\n"]);
        return filter = function() {
          return event;
        }, event;
      }
      /**
       * @return {?}
       */
      function each() {
        var obj = Object(object.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n\n  transition: all 1s !important;\n\n  background-color: ", ";\n"]);
        return each = function() {
          return obj;
        }, obj;
      }
      $.d(i, "b", function() {
        return R;
      });
      $.d(i, "a", function() {
        return resultItems;
      });
      var object = $(5);
      var doc = $(35);
      var meta = $(15);
      var actual = $(16);
      var $window = $(18);
      var p2 = $(17);
      var target = $(19);
      var elem = $(0);
      var opts = $.n(elem);
      var options = $(3);
      var tag = $(154);
      var elements = $.n(tag);
      var shadow = $(36);
      var color = $.n(shadow);
      var a = $(8);
      var content = $(98);
      var c = $.n(content);
      var parent = $(145);
      var child = $.n(parent);
      var gradient = $(99);
      var props = $.n(gradient);
      var obj = $(23);
      var tpl = $(146);
      var node = $.n(tpl);
      var self = $(144);
      var that = $.n(self);
      var el = $(71);
      var update = $(155);
      var throttledUpdate = $.n(update);
      var R = function(deepDataAndEvents) {
        /**
         * @param {?} expr
         * @return {?}
         */
        function filter(expr) {
          var test;
          return Object(meta.a)(this, filter), (test = Object($window.a)(this, Object(p2.a)(filter).call(this, expr))).todoTextRef = opts.a.createRef(), test.arrowRef = opts.a.createRef(), test.bodyRef = opts.a.createRef(), test.snoozeBtnEl = null, test.state = Object(doc.a)({}, test.getTextAndColorFromUrl(), {
            snoozePanelOpen : false
          }), test;
        }
        return Object(target.a)(filter, deepDataAndEvents), Object(actual.a)(filter, [{
          key : "componentDidMount",
          /**
           * @return {undefined}
           */
          value : function() {
            if (!this.state.text) {
              this.todoTextRef.current.focus();
              Object(obj.c)(obj.a.NEW_TODO);
            }
          }
        }, {
          key : "updateAddressBar",
          /**
           * @param {string} part
           * @param {string} c
           * @return {undefined}
           */
          value : function(part, c) {
            part = part.replace(/ /g, "_");
            this.props.history.replace({
              pathname : a.q,
              search : "?" + color.a.stringify({
                color : c,
                text : part
              })
            });
          }
        }, {
          key : "getTextAndColorFromUrl",
          /**
           * @return {?}
           */
          value : function() {
            var nDigit;
            var u = this.props.location;
            var node = color.a.parse(u.search, {
              ignoreQueryPrefix : true
            });
            var text = node.text;
            var cDigit = node.color;
            return cDigit ? nDigit = parseInt(cDigit) : (nDigit = Math.floor(Math.random() * resultItems.length), this.updateAddressBar(text || "", nDigit)), text || (text = ""), {
              text : text = text.replace(/_/g, " "),
              colorIndex : nDigit
            };
          }
        }, {
          key : "changeColor",
          /**
           * @return {undefined}
           */
          value : function() {
            var state = this.state;
            var l = state.text;
            var current = state.colorIndex;
            this.setTextAndColor(l, (current + 1) % resultItems.length);
          }
        }, {
          key : "toggleSnoozePanel",
          /**
           * @param {Event} event
           * @return {undefined}
           */
          value : function(event) {
            this.snoozeBtnEl = event.currentTarget;
            this.setState({
              snoozePanelOpen : !this.state.snoozePanelOpen
            });
          }
        }, {
          key : "setTextAndColor",
          /**
           * @param {string} part
           * @param {number} factor
           * @return {undefined}
           */
          value : function(part, factor) {
            var self = this;
            part = throttledUpdate()(part, {
              allowedTags : []
            });
            this.setState({
              text : part,
              colorIndex : factor
            });
            if (this.updateUrlTimer) {
              clearTimeout(this.updateUrlTimer);
            }
            /** @type {number} */
            this.updateUrlTimer = setTimeout(function() {
              /** @type {null} */
              self.updateUrlTimer = null;
              self.updateAddressBar(part, factor);
            }, 700);
          }
        }, {
          key : "onKeyDown",
          /**
           * @param {Object} event
           * @return {undefined}
           */
          value : function(event) {
            /** @type {boolean} */
            var t = 27 === event.keyCode;
            /** @type {boolean} */
            var n = 9 === event.keyCode;
            /** @type {boolean} */
            var r = 13 === event.keyCode;
            if (n) {
              event.preventDefault();
              this.changeColor();
            }
            var input = this.todoTextRef.current;
            /** @type {boolean} */
            var isInput = document.activeElement === input;
            if (r) {
              if (isInput) {
                if (!event.ctrlKey) {
                  if (!event.altKey) {
                    if (!event.metaKey) {
                      event.preventDefault();
                      input.blur();
                    }
                  }
                }
              } else {
                event.preventDefault();
                input.focus();
                document.execCommand("selectAll", false, null);
              }
            }
            if (t) {
              if (isInput) {
                input.blur();
              }
            }
          }
        }, {
          key : "onPageClick",
          /**
           * @param {Event} self
           * @return {undefined}
           */
          value : function(self) {
            if (!(self.target !== this.bodyRef.current && self.target !== this.todoTextRef.current)) {
              this.setState({
                snoozePanelOpen : false
              });
            }
          }
        }, {
          key : "renderDocumentHead",
          /**
           * @param {string} fmt
           * @param {?} newValue
           * @return {undefined}
           */
          value : function(fmt, newValue) {
            document.title = fmt.replace(/&nbsp;/g, " ") || "New Todo";
            /** @type {(HTMLElement|null)} */
            var console = document.getElementById("faviconEl");
            if (console) {
              console.setAttribute("href", newValue);
            }
          }
        }, {
          key : "render",
          /**
           * @return {?}
           */
          value : function() {
            var assert = this;
            var options = this.state;
            var title = options.text;
            var i = options.colorIndex;
            var open = options.snoozePanelOpen;
            var result = resultItems[i];
            var hex = result.hex;
            var hz = result.favicon;
            return this.renderDocumentHead(title, hz), opts.a.createElement(elem.Fragment, null, opts.a.createElement(c.a, {
              in : true,
              timeout : 1E3
            }, opts.a.createElement(tagToInsert, {
              color : hex,
              onKeyDown : this.onKeyDown.bind(this),
              onClick : this.onPageClick.bind(this),
              ref : this.bodyRef
            }, opts.a.createElement(fieldsString, {
              innerRef : this.todoTextRef,
              dir : "auto",
              html : title,
              /**
               * @param {Event} evt
               * @return {?}
               */
              onChange : function(evt) {
                return assert.setTextAndColor(evt.target.value, i);
              },
              isplaceholder : "" === title ? "true" : "false"
            }), opts.a.createElement(nodeStr, null, opts.a.createElement(init, {
              icon : $(338),
              onClick : this.changeColor.bind(this)
            }), opts.a.createElement(init, {
              icon : $(339),
              onClick : this.toggleSnoozePanel.bind(this)
            }), opts.a.createElement(that.a, {
              id : open ? "simple-popper" : null,
              open : open,
              placement : "top-start",
              anchorEl : this.snoozeBtnEl,
              transition : true
            }, function(element) {
              var map = element.TransitionProps;
              return opts.a.createElement(child.a, Object.assign({}, map, {
                timeout : 250,
                style : {
                  transformOrigin : "0 100% 0"
                }
              }), opts.a.createElement(node.a, {
                style : {
                  borderRadius : 5,
                  overflow : "hidden"
                }
              }, opts.a.createElement(el.a, {
                hideFooter : true
              })));
            })))));
          }
        }]), filter;
      }(elem.Component);
      /**
       * @param {Object} options
       * @return {?}
       */
      var init = function(options) {
        return opts.a.createElement(props.a, {
          ref : options.forwardRef,
          onClick : options.onClick,
          style : {
            padding : 30,
            marginRight : 10
          }
        }, opts.a.createElement("img", {
          src : options.icon,
          alt : "_"
        }));
      };
      /** @type {Array} */
      var resultItems = [{
        favicon : $(361),
        hex : "#F2B32A"
      }, {
        favicon : $(362),
        hex : "#4688F1"
      }, {
        favicon : $(363),
        hex : "#1D9C5A"
      }, {
        favicon : $(364),
        hex : "#EB2249"
      }];
      var tagToInsert = options.d.div(each(), function(simple) {
        return simple.color;
      });
      var fieldsString = Object(options.d)(elements.a)(filter(), function(dataAndEvents) {
        return "true" === dataAndEvents.isplaceholder && Object(options.c)(reduce());
      });
      var nodeStr = options.d.div(hasKey());
    },
    /**
     * @param {?} dataAndEvents
     * @param {Node} fnc
     * @param {Object} $
     * @return {undefined}
     */
    124 : function(dataAndEvents, fnc, $) {
      /**
       * @return {?}
       */
      function filter() {
        var event = Object(options.a)(["\n  display: inline-block;\n  line-height: normal;\n  background-color: ", ";\n  padding: 3px 6px;\n  border-radius: 5px;\n  color: #fff;\n  font-weight: 700;\n  font-size: ", "px;\n  margin-left: 3px;\n"]);
        return filter = function() {
          return event;
        }, event;
      }
      var options = $(5);
      var content = $(0);
      var target = $.n(content);
      var d = $(3);
      var region = $(8);
      /**
       * @param {?} options
       * @return {?}
       */
      fnc.a = function(options) {
        var str = options.big;
        return target.a.createElement(tagToInsert, {
          big : str,
          href : Object(region.u)(),
          target : "_blank"
        }, "PRO");
      };
      var tagToInsert = d.d.a(filter(), function($scope) {
        return $scope.theme.primary;
      }, function(data) {
        return data.big ? 20 : 14;
      });
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} value
     * @param {Object} jQuery
     * @return {undefined}
     */
    13 : function(dataAndEvents, value, jQuery) {
      /**
       * @return {?}
       */
      function next() {
        return initialize.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function initialize() {
        return(initialize = Object(doc.a)(opts.a.mark(function initialize() {
          var result;
          var n;
          return opts.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return self.next = 2, chrome.storage.local.get(key); // pos.a.storage.local.get(key););
                case 2:
                  return result = self.sent, n = result.backups, self.next = 6, pos.a.storage.local.clear();
                case 6:
                  return self.next = 8, chromepos // pos.a.storage.sync.clear();
                case 8:
                  return self.next = 10, chrome.storage.local.set(Object(object.a)({}, key, n)); //pos.a.storage.local.set((Object(object.a)({}, key, n)));
                case 10:
                  console.log("Storage was reset");
                case 11:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, initialize, this);
        }))).apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function call() {
        return fn.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function fn() {
        return(fn = Object(doc.a)(opts.a.mark(function go() {
          var result;
          var n;
          return opts.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  // return self.next = 2, chrome.storage.local.get($1); // pos.a.storage.local.get($1););
                  return self.next = 2, chrome.storage.local.get(cacheKey);
                case 2:
                  return result = self.sent, n = result.snoozedTabs, self.abrupt("return", n || []);
                case 5:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, go, this);
        }))).apply(this, arguments);
      }
      /**
       * @param {?} opt_path
       * @return {?}
       */
      function set(opt_path) {
        return chrome.storage.local.set((Object(object.a)({}, cacheKey, opt_path))); // pos.a.storage.local.get((Object(object.a)({}, cacheKey, opt_path)));
      }
      var scripts = jQuery(1);
      var opts = jQuery.n(scripts);
      var object = jQuery(22);
      var doc = jQuery(4);
      var c = jQuery(6);
      var pos = jQuery.n(c);
      window.tabSnoozeDebug_printTabs = Object(doc.a)(opts.a.mark(function end() {
        var props;
        return opts.a.wrap(function(self) {
          for (;;) {
            switch(self.prev = self.next) {
              case 0:
                return self.next = 2, call();
              case 2:
                props = self.sent;
                console.log("## Snoozed Tabs ##");
                props.forEach(function(b, children) {
                  return console.log("".concat(children, ".\t").concat(b.title, "\n\t").concat((new Date(b.when)).toString()));
                });
              case 5:
              ;
              case "end":
                return self.stop();
            }
          }
        }, end, this);
      }));
      window.tabSnoozeDebug_createStorageBackup = function() {
        var matcherFunction = Object(doc.a)(opts.a.mark(function next(event) {
          var name;
          var r;
          var e;
          return opts.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return self.next = 2, chrome.storage.local.get(); // pos.a.storage.local.get();
                case 2:
                  return name = self.sent, self.next = 5, pos.a.storage.sync.get();
                case 5:
                  return r = self.sent, e = name[key] || {}, delete name[key], e[event] = {
                    local : name,
                    sync : r
                  }, self.next = 11, chrome.storage.local.set((Object(object.a)({}, key, e))); // //pos.a.storage.local.set((Object(object.a)({}, key, e)));
                case 11:
                  console.log('Backup complete to "'.concat(event, '"'));
                case 12:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, next, this);
        }));
        return function(dataAndEvents) {
          return matcherFunction.apply(this, arguments);
        };
      }();
      window.tabSnoozeDebug_restoreStorageBackup = function() {
        var matcherFunction = Object(doc.a)(opts.a.mark(function next(name) {
          var result;
          var n;
          var state;
          return opts.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return self.next = 2, next();
                case 2:
                  return self.next = 4, chrome.storage.local.get(key); // pos.a.storage.local.get(key);
                case 4:
                  if (result = self.sent, n = result.backups, state = n[name]) {
                    /** @type {number} */
                    self.next = 9;
                    break;
                  }
                  throw new Error("Couldnt find a backup with that name");;
                case 9:
                  return self.next = 11, chrome.storage.local.set((state.local)); //  //pos.a.storage.local.set((state.local));
                case 11:
                  return self.next = 13, pos.a.storage.sync.set(state.sync);
                case 13:
                  console.log('Backup "'.concat(name, '" restored'));
                case 14:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, next, this);
        }));
        return function(dataAndEvents) {
          return matcherFunction.apply(this, arguments);
        };
      }();
      /** @type {function (): ?} */
      window.tabSnoozeDebug_resetStorage = next;
      window.tabSnoozeDebug_deleteAllBackups = Object(doc.a)(opts.a.mark(function initialize() {
        return opts.a.wrap(function(current) {
          for (;;) {
            switch(current.prev = current.next) {
              case 0:
                return current.next = 2, pos.a.storage.local.remove(key);
              case 2:
                console.log("Backups deleted");
              case 3:
              ;
              case "end":
                return current.stop();
            }
          }
        }, initialize, this);
      }));
      window.tabSnoozeDebug_printStorage = Object(doc.a)(opts.a.mark(function initialize() {
        var e;
        var n;
        return opts.a.wrap(function(self) {
          for (;;) {
            switch(self.prev = self.next) {
              case 0:
                return self.next = 2, chrome.storage.local.get(); // pos.a.storage.local.get();
              case 2:
                return e = self.sent, self.next = 5, pos.a.storage.sync.get();
              case 5:
                n = self.sent;
                console.log("localStorage: ", e);
                console.log("syncStorage: ", n);
              case 8:
              ;
              case "end":
                return self.stop();
            }
          }
        }, initialize, this);
      }));
      jQuery.d(value, "a", function() {
        return key;
      });
      jQuery.d(value, "b", function() {
        return call;
      });
      jQuery.d(value, "c", function() {
        return set;
      });
      /** @type {string} */
      var cacheKey = "snoozedTabs";
      /** @type {string} */
      var key = "backups";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {?} factory
     * @return {undefined}
     */
    162 : function(module, dataAndEvents, factory) {
      module.exports = factory(365);
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} value
     * @param {Object} jQuery
     * @return {undefined}
     */
    20 : function(dataAndEvents, value, jQuery) {
      /**
       * @return {?}
       */
      function cb() {
        return initialize.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function initialize() {
        return(initialize = Object(doc.a)(opts.a.mark(function initialize() {
          var page;
          var options;
          return opts.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  // return self.next = 2, $.a.storage.local.get(name);
                  return self.next = 2, chrome.storage.local.get(name);
                case 2:
                  return page = self.sent, options = page.settings, self.abrupt("return", Object.assign({}, data, options));
                case 5:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, initialize, this);
        }))).apply(this, arguments);
      }
      /**
       * @param {?} event
       * @return {?}
       */
      function f2(event) {
        return fn.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function fn() {
        return(fn = Object(doc.a)(opts.a.mark(function end(options) {
          var params;
          return opts.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return self.next = 2, cb();
                case 2:
                  return params = self.sent, options = Object.assign(params, options), self.abrupt(
                    "return", 
                    chrome.storage.local.set(Object(object.a)({}, name, options)) // $.a.storage.local.set(Object(object.a)({}, name, options)
                  );
                case 5:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, end, this);
        }))).apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function write() {
        return(write = Object(doc.a)(opts.a.mark(function end() {
          return opts.a.wrap(function(current) {
            for (;;) {
              switch(current.prev = current.next) {
                case 0:
                  $.a.storage.local.remove(name);
                case 1:
                ;
                case "end":
                  return current.stop();
              }
            }
          }, end, this);
        }))).apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function f() {
        return(f = Object(doc.a)(opts.a.mark(function end() {
          var data;
          return opts.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return self.next = 2, cb();
                case 2:
                  data = self.sent;
                  console.table(data);
                case 4:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, end, this);
        }))).apply(this, arguments);
      }
      jQuery.d(value, "a", function() {
        return data;
      });
      jQuery.d(value, "b", function() {
        return cb;
      });
      jQuery.d(value, "c", function() {
        return f2;
      });
      var object = jQuery(22);
      var scripts = jQuery(1);
      var opts = jQuery.n(scripts);
      var doc = jQuery(4);
      var html = jQuery(6);
      var $ = jQuery.n(html);
      var foo = jQuery(53);
      var self = jQuery(9);
      /** @type {string} */
      var name = "settings";
      var data = {
        badge : foo.b,
        playSoundEffects : true,
        playNotificationSound : true,
        showNotifications : true,
        weekStartDay : 1,
        weekEndDay : 6,
        workdayStart : 8,
        workdayEnd : 19,
        laterTodayHoursDelta : 3,
        somedayMonthsDelta : 3,
        version : 3,
        totalSnoozeCount : 0,
        installDate : 0,
        weeklyUsage : {
          weekNumber : 0,
          usageCount : 0
        }
      };
      Object(self.k)([cb, f2, function() {
        return f.apply(this, arguments);
      }, function() {
        return write.apply(this, arguments);
      }]);
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} i
     * @param {Object} $
     * @return {undefined}
     */
    23 : function(dataAndEvents, i, $) {
      /**
       * @param {?} event
       * @return {?}
       */
      function f2(event) {
        return initialize.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function initialize() {
        return(initialize = Object(options.a)(w.a.mark(function initialize(config) {
          var is;
          var hostname;
          return w.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return self.next = 2, Object(p2.b)();
                case 2:
                  is = self.sent;
                  hostname = (new URL(config.url)).hostname;
                  slice(tempNode.TAB_SNOOZE, {
                    "Snooze Type" : config.type,
                    "Sleeping Tabs" : is.length,
                    "Snoozed Domain" : hostname
                  });
                  that.a.people.increment("tabs snoozed");
                  that.a.people.set({
                    "Sleeping Tabs" : is.length
                  });
                case 7:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, initialize, this);
        }))).apply(this, arguments);
      }
      /**
       * @param {string} path
       * @return {undefined}
       */
      function slice(path) {
        var r20 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        that.a.track(path, Object(opts.a)({
          "App Version" : object.a
        }, r20));
      }
      /**
       * @param {?} params
       * @return {?}
       */
      function get(params) {
        var tid = that.a.get_distinct_id();
        return "".concat(params, "?").concat(root.a.stringify({
          tid : tid
        }));
      }
      $.d(i, "a", function() {
        return tempNode;
      });
      $.d(i, "d", function() {
        return f2;
      });
      $.d(i, "c", function() {
        return slice;
      });
      $.d(i, "b", function() {
        return get;
      });
      var $window = $(1);
      var w = $.n($window);
      var opts = $(35);
      var options = $(4);
      var self = $(46);
      var that = $.n(self);
      var p2 = $(13);
      var object = $(9);
      var content = $(36);
      var root = $.n(content);
      var tempNode = {
        EXT_INSTALLED : "Extension Install",
        EXT_UPDATED : "Extension Update",
        EXT_UNINSTALLED : "Extension Uninstall",
        TAB_SNOOZE : "Tab Snooze",
        REPEAT_SNOOZE : "Repeat Snooze",
        NEW_TODO : "New Todo",
        SLEEPING_TABS_VIEW : "Sleeping Tabs View",
        SETTINGS_VIEW : "Settings View"
      };
      that.a.init("162cc55365e5f12b4d410daecbdc5c97");
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    243 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/coffee.027d6bb9.svg";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    244 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/coffee_white.bf3f6620.svg";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    245 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/moon.2b67588d.svg";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    246 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/moon_white.2596761f.svg";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    247 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/sun.d225a821.svg";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    248 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/sun_white.a90749eb.svg";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    249 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/soffa.357d8c57.svg";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    250 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/soffa_white.ca24f6d5.svg";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    251 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/breifcase.c0751b85.svg";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    252 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/breifcase_white.8763cfff.svg";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    253 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/mailbox.b4fdc390.svg";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    254 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/mailbox_white.164f0de6.svg";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    255 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/pine.b5e6560d.svg";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    256 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/pine_white.bd60eb21.svg";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    257 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/refresh.4c5f856e.svg";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    258 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/refresh_white.4afc215f.svg";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    259 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/calendar.5f7811e9.svg";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    260 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/calendar_white.b0bc5afa.svg";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    271 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/super_star.699dff2b.svg";
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    288 : function(dataAndEvents, deepDataAndEvents) {
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    318 : function(dataAndEvents, deepDataAndEvents) {
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    319 : function(dataAndEvents, deepDataAndEvents) {
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    320 : function(dataAndEvents, deepDataAndEvents) {
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    335 : function(dataAndEvents, deepDataAndEvents) {
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    338 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/change_color.9150acd3.svg";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    339 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/snooze.280e8302.svg";
    },
    /**
     * @param {?} dataAndEvents
     * @param {Node} cfg
     * @param {Object} $
     * @return {undefined}
     */
    34 : function(dataAndEvents, cfg, $) {
      $.d(cfg, "a", function() {
        return react;
      });
      var update = $(150);
      var throttledUpdate = $.n(update);
      var url = $(151);
      var obj = $.n(url);
      var content = $(0);
      var doc = $.n(content);
      var options = $(9);
      var self = throttledUpdate()({
        apiKey : "fbdf95c93498131a5747c1f568670372",
        autoCaptureSessions : false,
        appVersion : options.a,
        appType : "extension",
        notifyReleaseStages : ["production", "staging"],
        releaseStage : options.b ? "staging" : "production",
        /**
         * @param {Error} e
         * @return {undefined}
         */
        beforeSend : function(e) {
          e.stacktrace.forEach(function(err) {
            return err.file = err.file.replace(/chrome-extension:/g, "chromeextension:");
          });
        }
      });
      /** @type {string} */
      self.context = Object(options.o)() ? "extension/background" : "extension/foreground";
      self.use(obj.a, doc.a);
      var react = self.getPlugin("react");
      cfg.b = self;
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    361 : function(module, dataAndEvents) {
      /** @type {string} */
      module.exports = "data:image/png;base64,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";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    362 : function(module, dataAndEvents) {
      /** @type {string} */
      module.exports = "data:image/png;base64,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";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    363 : function(module, dataAndEvents) {
      /** @type {string} */
      module.exports = "data:image/png;base64,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";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    364 : function(module, dataAndEvents) {
      /** @type {string} */
      module.exports = "data:image/png;base64,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";
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} r
     * @param {Object} $
     * @return {undefined}
     */
    365 : function(dataAndEvents, r, $) {
      /**
       * @return {?}
       */
      function filter() {
        var event = Object(doc.a)(["\n\n  @font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url('fonts/Roboto-Regular.ttf') format('ttf');\n  }\n\n  @font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 500;\n    src: url('fonts/Roboto-Medium.ttf') format('ttf');\n  }\n\n  @font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 700;\n    src: url('fonts/Roboto-Bold.ttf') format('ttf');\n  }\n\n  a {\n    cursor: pointer;\n    text-decoration: none;\n    color: currentColor;\n  }\n\n  button {\n    padding: 0;\n    background-color: #fff;\n  }\n\n  *::selection {\n    background: ", 
        ";\n    color: #fff;\n  }\n\n  *:focus {\n    outline: none;\n  }\n\n  html {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n\n    /* remove mobile tap highlight */\n    -webkit-tap-highlight-color: transparent; \n\n    font-size: 62.5%;\n  }\n\n  body {\n    font: 400 1.6rem/1.3 ", ";\n    color: ", ";\n    background-color: #fff;\n  }\n"]);
        return filter = function() {
          return event;
        }, event;
      }
      /**
       * @return {?}
       */
      function initialize() {
        return(initialize = Object($window.a)(d.a.mark(function initialize() {
          return d.a.wrap(function(current) {
            for (;;) {
              switch(current.prev = current.next) {
                case 0:
                  return console.log("Migrating settings..."), current.next = 3, call();
                case 3:
                  return console.log("Migrating tabs from sync storage to local..."), current.next = 6, next();
                case 6:
                  return console.log("Migrating old tabs objects to new ones..."), current.next = 9, callback();
                case 9:
                ;
                case "end":
                  return current.stop();
              }
            }
          }, initialize, this);
        }))).apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function call() {
        return write.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function write() {
        return(write = Object($window.a)(d.a.mark(function end() {
          var attrs;
          var add;
          var remove;
          return d.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return self.next = 2, chrome.storage.local.get([key, parent]); // proxy.a.storage.local.get([key, parent]);
                case 2:
                  if (attrs = self.sent, add = attrs.settings, remove = (remove = attrs.snoozeHistory) || [], void 0 !== (add = add || {}).newTodoSC) {
                    /** @type {number} */
                    self.next = 9;
                    break;
                  }
                  return self.abrupt("return");
                case 9:
                  return delete add.showBadge,
                    delete add.closeTabAfterSnooze,
                    delete add.mailMyselfAddress,
                    delete add.manyTabsThreshold, delete add.tabIdleTimeThreshold, delete add.newTodoSC, delete add.repeatLastSnoozeSC, delete add.showSnoozedTabsSC, delete add.snoozeCurrentTabSC, add.totalSnoozeCount = add.totalSnoozeCount || remove.length, self.next = 21, 
                    chrome.storage.local.remove(parent); // proxy.a.storage.local.remove(parent);
                case 21:
                  return self.next = 23, chrome.storage.local.set((Object(actual.a)({}, key, add))); //  //proxy.a.storage.local.set((Object(actual.a)({}, key, add)));
                case 23:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, end, this);
        }))).apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function next() {
        return fn.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function fn() {
        return(fn = Object($window.a)(d.a.mark(function initialize() {
          var result;
          var n;
          return d.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return self.next = 2, chrome.storage.local.get(cacheKey); // proxy.a.storage.local.get(cacheKey);
                case 2:
                  if (result = self.sent, null == (n = result.snoozedTabs)) {
                    /** @type {number} */
                    self.next = 6;
                    break;
                  }
                  return self.abrupt("return");
                case 6:
                  return self.next = 8, children(chrome.storage.sync); //children(proxy.a.storage.sync);
                case 8:
                  if (0 !== (n = self.sent).length) {
                    /** @type {number} */
                    self.next = 13;
                    break;
                  }
                  return self.next = 12, children(chrome.storage.local); // proxy.a.storage.local);
                case 12:
                  n = self.sent;
                case 13:
                  return self.next = 15, chrome.storage.local.set((Object(actual.a)({}, cacheKey, n))); //  //proxy.a.storage.local.set((Object(actual.a)({}, cacheKey, n)));
                case 15:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, initialize, this);
        }))).apply(this, arguments);
      }
      /**
       * @param {?} elem
       * @return {?}
       */
      function children(elem) {
        return f.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function f() {
        return(f = Object($window.a)(d.a.mark(function initialize($templateCache) {
          var obj;
          var args;
          var len2;
          var v;
          return d.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return self.next = 2, chrome.storage.local.get(); // $templateCache.get();
                case 2:
                  if (obj = self.sent, args = [], len2 = obj.tabsCount || 0) {
                    /** @type {number} */
                    v = 0;
                    for (;v < len2;v++) {
                      args.push(obj["tab" + v]);
                    }
                  }
                  return self.abrupt("return", args);
                case 7:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, initialize, this);
        }))).apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function callback() {
        return handler.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function handler() {
        return(handler = Object($window.a)(d.a.mark(function next() {
          var options;
          var _base;
          return d.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return self.next = 2, chrome.storage.local.get(cacheKey); // proxy.a.storage.local.get(cacheKey);
                case 2:
                  return options = self.sent, (_base = (_base = (_base = options.snoozedTabs) || []).filter(function($location) {
                    return null != $location.url;
                  })).forEach(function(data) {
                    init(data);
                    if (null != data.period) {
                      if (null != data.period.time) {
                        data.period.hour = data.period.time;
                        delete data.period.time;
                      }
                    }
                  }), self.next = 9, chrome.storage.local.set((Object(actual.a)({}, cacheKey, _base))); //  //proxy.a.storage.local.set((Object(actual.a)({}, cacheKey, _base)));
                case 9:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, next, this);
        }))).apply(this, arguments);
      }
      /**
       * @param {Object} request
       * @return {undefined}
       */
      function init(request) {
        var requestUrl = request.url;
        if (requestUrl.includes("/todo.html") && (requestUrl.includes("bg=") && requestUrl.includes("title="))) {
          var style = w.a.parse(requestUrl.substring(requestUrl.indexOf("?") + 1));
          var body = bid.runtime.getURL(args.a + args.q) + "?" + w.a.stringify({
            text : style.title,
            color : style.bg
          });
          request.url = body;
          request.favicon = e.a[parseInt(style.bg)].favicon;
        }
      }
      /**
       * @return {?}
       */
      function bound() {
        return create.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function create() {
        return(create = Object($window.a)(d.a.mark(function next() {
          var fn;
          var deps;
          var i;
          var property;
          return d.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return self.next = 2, chrome.storage.local.get(storageKey); // proxy.a.storage.local.get(storageKey);
                case 2:
                  fn = self.sent;
                  deps = null != (deps = fn.lastMigrationIndex) ? deps : -1;
                  console.log("Current migration status is: ".concat(deps));
                  i = deps + 1;
                case 7:
                  if (!(i < codeSegments.length)) {
                    /** @type {number} */
                    self.next = 24;
                    break;
                  }
                  return property = codeSegments[i], self.prev = 9, console.log("Performing migration ".concat(i)), self.next = 13, property();
                case 13:
                  return self.next = 15, chrome.storage.local.set((Object(actual.a)({}, storageKey, i))); //  //proxy.a.storage.local.set((Object(actual.a)({}, storageKey, i)));
                case 15:
                  /** @type {number} */
                  self.next = 21;
                  break;
                case 17:
                  throw self.prev = 17, self.t0 = self.catch(9), console.error("Failed to perform migration ".concat(i)), self.t0;;
                case 21:
                  i++;
                  /** @type {number} */
                  self.next = 7;
                  break;
                case 24:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, next, this, [[9, 17]]);
        }))).apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function cb() {
        return hasKey.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function hasKey() {
        return(hasKey = Object($window.a)(d.a.mark(function end() {
          return d.a.wrap(function(current) {
            for (;;) {
              switch(current.prev = current.next) {
                case 0:
                  return current.next = 2, bound();
                case 2:
                  return current.next = 4, Object(target.c)("1min");
                case 4:
                  return current.next = 6, Object(t.e)();
                case 6:
                ;
                case "end":
                  return current.stop();
              }
            }
          }, end, this);
        }))).apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function trigger() {
        return forProps.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function forProps() {
        return(forProps = Object($window.a)(d.a.mark(function start() {
          var last;
          return d.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return self.next = 2, chrome.notifications.create("", { // proxy.a.notifications.create("", {
                    type : "basic",
                    title : "Tab Snooze ".concat(options.a, " installed"),
                    message : "Click to open the changelog",
                    iconUrl : "/images/beta_extension_icon_128.png",
                    requireInteraction : true
                  });
                case 2:
                  last = self.sent;
                  chrome.notifications.onClicked.addListener(function() {
                    /**
                     * @param {?} min2
                     * @return {?}
                     */
                    function map(min2) {
                      return matcherFunction.apply(this, arguments);
                    }
                    var matcherFunction = Object($window.a)(d.a.mark(function end(index) {
                      return d.a.wrap(function(current) {
                        for (;;) {
                          switch(current.prev = current.next) {
                            case 0:
                              if (index === last) {
                                Object(options.i)(args.e);
                                chrome.notifications.clear(last);
                                chrome.notifications.onClicked.removeListener(map);
                              }
                            ;
                            case 1:
                            ;
                            case "end":
                              return current.stop();
                          }
                        }
                      }, end, this);
                    }));
                    return map;
                  }());
                case 4:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, start, this);
        }))).apply(this, arguments);
      }
      $.r(r);
      var elem = $(0);
      var opts = $.n(elem);
      var li = $(33);
      var row = $.n(li);
      var p2 = $(15);
      var x = $(16);
      var meta = $(18);
      var main = $(17);
      var source = $(19);
      var props = ($(167), $(54));
      var doc = $(5);
      var object = $(3);
      var tagToInsert = Object(object.b)(filter(), function($scope) {
        return $scope.theme.primary;
      }, function(c) {
        return c.theme.fontFamily;
      }, function(theme) {
        return theme.theme.black;
      });
      var foo = $(91);
      var child = $.n(foo);
      var el = $(519);
      var item = $(509);
      var self = $(71);
      var args = $(8);
      var update = $(69);
      var throttledUpdate = $.n(update);
      /**
       * @param {Function} failing_message
       * @return {?}
       */
      var report = function(failing_message) {
        return throttledUpdate()({
          /** @type {Function} */
          loader : failing_message,
          /**
           * @return {?}
           */
          loading : function() {
            return null;
          }
        });
      };
      var component = report(function() {
        return Promise.all([$.e(0), $.e(1), $.e(2), $.e(13), $.e(4)]).then($.bind(null, 518));
      });
      var eventsComponent = report(function() {
        return $.e(5).then($.bind(null, 511));
      });
      var mediaComponent = report(function() {
        return Promise.all([$.e(0), $.e(6)]).then($.bind(null, 512));
      });
      var signupComponent = report(function() {
        return Promise.all([$.e(0), $.e(7)]).then($.bind(null, 513));
      });
      var loginComponent = report(function() {
        return Promise.all([$.e(0), $.e(2), $.e(8)]).then($.bind(null, 514));
      });
      var o = report(function() {
        return $.e(9).then($.bind(null, 515));
      });
      /**
       * @return {?}
       */
      var createElement = function() {
        return opts.a.createElement(el.a, {
          hashType : "noslash"
        }, opts.a.createElement(elem.Fragment, null, opts.a.createElement(item.a, {
          path : args.l,
          component : self.a
        }), opts.a.createElement(item.a, {
          path : args.j,
          component : component
        }), opts.a.createElement(item.a, {
          path : args.q,
          component : eventsComponent
        }), opts.a.createElement(item.a, {
          path : args.h,
          component : mediaComponent
        }), opts.a.createElement(item.a, {
          path : args.m,
          component : signupComponent
        }), opts.a.createElement(item.a, {
          path : args.d,
          component : loginComponent
        }), opts.a.createElement(item.a, {
          path : args.s,
          component : o
        })));
      };
      var fieldsString = function(deepDataAndEvents) {
        /**
         * @return {?}
         */
        function bound() {
          return Object(p2.a)(this, bound), Object(meta.a)(this, Object(main.a)(bound).apply(this, arguments));
        }
        return Object(source.a)(bound, deepDataAndEvents), Object(x.a)(bound, [{
          key : "render",
          /**
           * @return {?}
           */
          value : function() {
            return opts.a.createElement(child.a, {
              theme : props.a
            }, opts.a.createElement(object.a, {
              theme : props.b
            }, opts.a.createElement(opts.a.Fragment, null, opts.a.createElement(tagToInsert, null), opts.a.createElement(createElement, null))));
          }
        }]), bound;
      }(elem.Component);
      var j = $(1);
      var d = $.n(j);
      var $window = $(4);
      var h = $(43);
      var target = $(44);
      /** @type {string} */
      var out = "repeat_last_snooze";
      /** @type {string} */
      var b = "new_todo_page";
      /** @type {string} */
      var bup = "open_snoozed_list";
      var options = $(9);
      var obj = $(23);
      var editor = $(6);
      var proxy = $.n(editor);
      var actual = $(22);
      var e = $(106);
      var width = $(36);
      var w = $.n(width);
      var bid = window.chrome;
      /** @type {string} */
      var key = "settings";
      /** @type {string} */
      var cacheKey = "snoozedTabs";
      /** @type {string} */
      var parent = "snoozeHistory";
      /** @type {Array} */
      var codeSegments = [function() {
        return initialize.apply(this, arguments);
      }];
      /** @type {string} */
      var storageKey = "lastMigrationIndex";
      /** @type {function (): ?} */
      window.tabSnoozeDebug_performMigrations = bound;
      var t = $(53);
      var num = $(20);
      var chrome = window.chrome;
      var input = $(34);
      if (Object(options.o)()) {
        chrome.runtime.onStartup.addListener(cb);
        Object(target.b)();
        Object(t.d)();
        chrome.runtime.onInstalled.addListener(function() {
          var matcherFunction = Object($window.a)(d.a.mark(function end(event) {
            var orig;
            return d.a.wrap(function(current) {
              for (;;) {
                switch(current.prev = current.next) {
                  case 0:
                    return orig = event.reason, event.previousVersion, current.next = 3, cb();
                  case 3:
                    if (chrome.runtime.setUninstallURL(Object(args.t)()), "install" !== orig) {
                      /** @type {number} */
                      current.next = 9;
                      break;
                    }
                    return Object(obj.c)(obj.a.EXT_INSTALLED), current.next = 8, Object(num.c)({
                      installDate : Date.now()
                    });
                  case 8:
                    Object(options.i)(args.s);
                  case 9:
                    if ("update" === orig) {
                      Object(obj.c)(obj.a.EXT_UPDATED);
                      if (options.b) {
                        trigger();
                      }
                    }
                  ;
                  case 10:
                  ;
                  case "end":
                    return current.stop();
                }
              }
            }, end, this);
          }));
          return function(dataAndEvents) {
            return matcherFunction.apply(this, arguments);
          };
        }());
        chrome.commands.onCommand.addListener(function(a) {
          if (a === b) {
            Object(options.i)(args.q);
          }
          if (a === out) {
            Object(h.a)();
          }
          if (a === bup) {
            Object(options.i)(args.o);
          }
        });
      } else {
        /** @type {(HTMLElement|null)} */
        var deep = document.getElementById("root");
        if (!deep) {
          throw new Error("React root element is missing");
        }
        row.a.render(opts.a.createElement(input.a, null, opts.a.createElement(fieldsString, null)), deep);
      }
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} i
     * @param {Object} self
     * @return {undefined}
     */
    39 : function(dataAndEvents, i, self) {
      /**
       * @return {?}
       */
      function view() {
        return write.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function write() {
        return(write = Object(object.a)(w.a.mark(function end() {
          return w.a.wrap(function(current) {
            for (;;) {
              switch(current.prev = current.next) {
                case 0:
                  return current.abrupt("return", true);
                case 1:
                ;
                case "end":
                  return current.stop();
              }
            }
          }, end, this);
        }))).apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function call() {
        return fn.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function fn() {
        return(fn = Object(object.a)(w.a.mark(function end() {
          return w.a.wrap(function(current) {
            for (;;) {
              switch(current.prev = current.next) {
                case 0:
                  return current.abrupt("return", false);
                case 1:
                ;
                case "end":
                  return current.stop();
              }
            }
          }, end, this);
        }))).apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function removex() {
        return f.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function f() {
        return(f = Object(object.a)(w.a.mark(function end() {
          var to;
          var data;
          var dataText;
          return w.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return self.next = 2, Object(options.b)();
                case 2:
                  return to = self.sent, data = to.weeklyUsage, dataText = data.usageCount, data.weekNumber !== cb()().week() && (dataText = 0), dataText++, self.abrupt("return", Object(options.c)({
                    weeklyUsage : {
                      weekNumber : cb()().week(),
                      usageCount : dataText
                    }
                  }));
                case 8:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, end, this);
        }))).apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function bound() {
        return handler.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function handler() {
        return(handler = Object(object.a)(w.a.mark(function end() {
          var result;
          var n;
          var id;
          return w.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return self.next = 2, Object(options.b)();
                case 2:
                  return result = self.sent, n = result.weeklyUsage, id = n.usageCount, self.next = 7, call();
                case 7:
                  if (self.sent) {
                    /** @type {number} */
                    self.next = 10;
                    break;
                  }
                  return self.abrupt("return", false);
                case 10:
                  return n.weekNumber !== cb()().week() && (id = 0), self.abrupt("return", id >= key);
                case 12:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, end, this);
        }))).apply(this, arguments);
      }
      self.d(i, "a", function() {
        return key;
      });
      self.d(i, "e", function() {
        return view;
      });
      self.d(i, "c", function() {
        return call;
      });
      self.d(i, "b", function() {
        return removex;
      });
      self.d(i, "d", function() {
        return bound;
      });
      var point = self(1);
      var w = self.n(point);
      var object = self(4);
      var options = self(20);
      var callback = self(10);
      var cb = self.n(callback);
      /** @type {number} */
      var key = 20;
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} i
     * @param {Object} $
     * @return {undefined}
     */
    43 : function(dataAndEvents, i, $) {
      /**
       * @param {?} res
       * @param {?} obj2
       * @return {?}
       */
      function cb(res, obj2) {
        return write.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function write() {
        return(write = Object(options.a)(opts.a.mark(function run(settings, options) {
          var date;
          var syntax;
          var types;
          var name;
          var propName;
          var expected;
          var item;
          var _ref5;
          var result;
          var n;
          return opts.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  if (date = options.wakeupTime, syntax = options.period, types = options.type, name = options.closeTab, propName = void 0 === name || name, syntax && (expected = Object(t.e)(syntax), date = expected.getTime()), date) {
                    /** @type {number} */
                    self.next = 4;
                    break;
                  }
                  throw new Error("No wakeup date and no period given");;
                case 4:
                  return console.log("Snoozing tab until " + (new Date(date)).toString()), item = {
                    url : settings.url,
                    title : settings.title,
                    favicon : settings.favIconUrl,
                    type : types,
                    sleepStart : Date.now(),
                    period : syntax,
                    when : date
                  }, self.next = 8, Object(target.b)();
                case 8:
                  return(_ref5 = self.sent).push(item), self.next = 12, Object(target.c)(_ref5);
                case 12:
                  return self.next = 14, Object(num.c)("auto");
                case 14:
                  return Object(object.d)(item), self.next = 17, Object(obj.b)();
                case 17:
                  return result = self.sent, n = result.totalSnoozeCount, n++, self.next = 22, Object(obj.c)({
                    totalSnoozeCount : n
                  });
                case 22:
                  return self.next = 24, Object(p2.b)();
                case 24:
                  if (1 === n) {
                    Object(t.h)(duration.h, 830, 485);
                  }
                  if (10 === n) {
                    Object(t.h)(duration.m, 500, 540);
                  }
                  if (propName) {
                    me.a.tabs.remove(settings.id);
                  }
                ;
                case 27:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, run, this);
        }))).apply(this, arguments);
      }
      /**
       * @param {?} var_args
       * @return {?}
       */
      function concat(var_args) {
        return fn.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function fn() {
        return(fn = Object(options.a)(opts.a.mark(function end(options) {
          var e;
          return opts.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return self.next = 2, Object(t.l)();
                case 2:
                  return e = self.sent, self.abrupt("return", cb(e, options));
                case 4:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, end, this);
        }))).apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function view() {
        return f.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function f() {
        return(f = Object(options.a)(opts.a.mark(function go() {
          var settings;
          var options;
          return opts.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return self.next = 2, Object(target.b)();
                case 2:
                  if (settings = self.sent, (options = Object(t.n)(settings)) && !(Date.now() - options.sleepStart > 6E5)) {
                    /** @type {number} */
                    self.next = 6;
                    break;
                  }
                  return self.abrupt("return");
                case 6:
                  return Object(object.c)(object.a.REPEAT_SNOOZE), self.abrupt("return", concat({
                    wakeupTime : options.period ? void 0 : options.when,
                    period : options.period,
                    type : options.type
                  }));
                case 8:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, go, this);
        }))).apply(this, arguments);
      }
      /**
       * @param {?} event
       * @return {?}
       */
      function f2(event) {
        return handler.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function handler() {
        return(handler = Object(options.a)(opts.a.mark(function next(token) {
          var expected;
          var _ref5;
          return opts.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  if (token.period) {
                    /** @type {number} */
                    self.next = 2;
                    break;
                  }
                  throw new Error("resnoozePeriodicTab received a tab without a period");;
                case 2:
                  return expected = Object(t.e)(token.period), console.log("Re-snoozing tab until " + expected.toString()), token.when = expected.getTime(), self.next = 7, Object(target.b)();
                case 7:
                  return(_ref5 = self.sent).push(token), self.next = 11, Object(target.c)(_ref5);
                case 11:
                  return self.next = 13, Object(num.c)("auto");
                case 13:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, next, this);
        }))).apply(this, arguments);
      }
      $.d(i, "c", function() {
        return concat;
      });
      $.d(i, "a", function() {
        return view;
      });
      $.d(i, "b", function() {
        return f2;
      });
      var li = $(1);
      var opts = $.n(li);
      var options = $(4);
      var target = $(13);
      var t = $(9);
      var object = $(23);
      var obj = $(20);
      var num = $(44);
      var username = $(6);
      var me = $.n(username);
      var duration = $(8);
      var p2 = $(39);
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} i
     * @param {Object} $
     * @return {undefined}
     */
    44 : function(dataAndEvents, i, $) {
      /**
       * @param {Array} defaults
       * @return {?}
       */
      function apply(defaults) {
        return write.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function write() {
        return(write = Object(opts.a)(w.a.mark(function end(tag) {
          var current;
          var removeNode;
          var r20;
          return w.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return self.next = 2, Object(target.b)();
                case 2:
                  return current = self.sent, removeNode = function(name) {
                    return null != tag.find(function(deepDataAndEvents) {
                      return Object(options.d)(deepDataAndEvents, name);
                    });
                  }, r20 = current.filter(function(iframe) {
                    return!removeNode(iframe);
                  }), self.next = 7, Object(target.c)(r20);
                case 7:
                  return self.next = 9, fn("auto");
                case 9:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, end, this);
        }))).apply(this, arguments);
      }
      /**
       * @param {?} result
       * @param {boolean} onComplete
       * @return {?}
       */
      function finish(result, onComplete) {
        return handler.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function handler() {
        return(handler = Object(opts.a)(w.a.mark(function handler(params, token) {
          var iterator;
          var callback2;
          var i;
          var t0;
          var tree;
          var elem;
          var ret;
          var length;
          return w.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return console.log("Waking up ".concat(params.length, " tabs")), self.next = 3, apply(params);
                case 3:
                  iterator = params.filter(function(_arg) {
                    return _arg.period;
                  });
                  /** @type {boolean} */
                  callback2 = true;
                  /** @type {boolean} */
                  i = false;
                  t0 = void 0;
                  /** @type {number} */
                  self.prev = 7;
                  tree = iterator[Symbol.iterator]();
                case 9:
                  if (callback2 = (elem = tree.next()).done) {
                    /** @type {number} */
                    self.next = 16;
                    break;
                  }
                  return ret = elem.value, self.next = 13, Object(p2.b)(ret);
                case 13:
                  /** @type {boolean} */
                  callback2 = true;
                  /** @type {number} */
                  self.next = 9;
                  break;
                case 16:
                  /** @type {number} */
                  self.next = 22;
                  break;
                case 18:
                  /** @type {number} */
                  self.prev = 18;
                  self.t0 = self.catch(7);
                  /** @type {boolean} */
                  i = true;
                  t0 = self.t0;
                case 22:
                  /** @type {number} */
                  self.prev = 22;
                  /** @type {number} */
                  self.prev = 23;
                  if (!callback2) {
                    if (!(null == tree.return)) {
                      tree.return();
                    }
                  }
                ;
                case 25:
                  if (self.prev = 25, !i) {
                    /** @type {number} */
                    self.next = 28;
                    break;
                  }
                  throw t0;;
                case 28:
                  return self.finish(25);
                case 29:
                  return self.finish(22);
                case 30:
                  return self.next = 32, fn("auto");
                case 32:
                  return self.next = 34, Object(options.j)(params, token);
                case 34:
                  return length = self.sent, self.abrupt("return", length);
                case 36:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, handler, this, [[7, 18, 22, 30], [23, , 25, 29]]);
        }))).apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function children() {
        return create.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function create() {
        return(create = Object(opts.a)(w.a.mark(function next() {
          var is;
          var arr;
          var v;
          var expectationResult;
          var l;
          return w.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return self.next = 2, Object(foo.b)();
                case 2:
                  return is = self.sent, self.next = 5, Object(target.b)();
                case 5:
                  if (arr = self.sent, !((v = new Date) <= max)) {
                    /** @type {number} */
                    self.next = 9;
                    break;
                  }
                  return self.abrupt("return");
                case 9:
                  if (-1 !== arr.findIndex(function(dataAndEvents) {
                    return!dataAndEvents;
                  }) && (that.b.notify(new Error("Found null in snoozedTabs"), {
                    metaData : {
                      storage : {
                        snoozedTabs : arr
                      }
                    }
                  }), arr = arr.filter(function(dataAndEvents) {
                    return dataAndEvents;
                  })), max = Object(options.c)(v, 1), !((expectationResult = arr.filter(function(b) {
                    return new Date(b.when) <= max;
                  })).length > 0)) {
                    /** @type {number} */
                    self.next = 18;
                    break;
                  }
                  return self.next = 15, finish(expectationResult, false);
                case 15:
                  l = self.sent;
                  if (is.showNotifications) {
                    Object(options.p)(expectationResult, l[0]);
                  }
                  if (is.playNotificationSound) {
                    Object(object.d)(object.a);
                  }
                ;
                case 18:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, next, this);
        }))).apply(this, arguments);
      }
      /**
       * @param {string} left
       * @return {?}
       */
      function fn(left) {
        return f.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function f() {
        return(f = Object(opts.a)(w.a.mark(function end(encoding) {
          var _args;
          var when;
          var args;
          return w.a.wrap(function(stream) {
            for (;;) {
              switch(stream.prev = stream.next) {
                case 0:
                  return stream.next = 2, update();
                case 2:
                  return stream.next = 4, Object(target.b)();
                case 4:
                  if (_args = stream.sent, when = 0, 0 !== _args.length) {
                    /** @type {number} */
                    stream.next = 8;
                    break;
                  }
                  return stream.abrupt("return");
                case 8:
                  if ("auto" === encoding) {
                    args = Object(options.m)(_args);
                    when = args.when;
                  } else {
                    /** @type {number} */
                    when = Date.now() + 6E4;
                  }
                  data.alarms.create(key, {
                    when : when
                  });
                case 10:
                ;
                case "end":
                  return stream.stop();
              }
            }
          }, end, this);
        }))).apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function update() {
        return chrome.alarms.clear(key); // q.a.alarms.clear(key);
      }
      /**
       * @return {undefined}
       */
      function initialize() {
        data.alarms.onAlarm.addListener(function() {
          var matcherFunction = Object(opts.a)(w.a.mark(function initialize(blue) {
            return w.a.wrap(function(current) {
              for (;;) {
                switch(current.prev = current.next) {
                  case 0:
                    if (blue.name !== key) {
                      /** @type {number} */
                      current.next = 6;
                      break;
                    }
                    return console.log("Alarm fired - waking up ready tabs"), current.next = 4, children();
                  case 4:
                    return current.next = 6, fn("auto");
                  case 6:
                  ;
                  case "end":
                    return current.stop();
                }
              }
            }, initialize, this);
          }));
          return function(dataAndEvents) {
            return matcherFunction.apply(this, arguments);
          };
        }());
        data.idle.onStateChanged.addListener(function(value) {
          if ("active" === value) {
            console.log("System active after idle time");
            fn("1min");
          } else {
            console.log("System idle - Turning off all alarms.");
            update();
          }
        });
      }
      $.d(i, "a", function() {
        return apply;
      });
      $.d(i, "d", function() {
        return finish;
      });
      $.d(i, "c", function() {
        return fn;
      });
      $.d(i, "b", function() {
        return initialize;
      });
      var $window = $(1);
      var w = $.n($window);
      var opts = $(4);
      var target = $(13);
      var elem = $(6);
      var q = $.n(elem);
      var options = $(9);
      var foo = $(20);
      var object = $(45);
      var p2 = $(43);
      var that = $(34);
      var data = window.chrome;
      /** @type {string} */
      var key = "WAKEUP_TABS_ALARM";
      /** @type {Date} */
      var max = new Date(0);
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} value
     * @param {Object} jQuery
     * @return {undefined}
     */
    45 : function(dataAndEvents, value, jQuery) {
      /**
       * @param {string} path
       * @return {?}
       */
      function init(path) {
        var el = new window.Audio;
        return el.src = path, el.preload = "auto", el.volume = 0.5, el;
      }
      /**
       * @param {string} el
       * @return {?}
       */
      function Main(el) {
        return animationSupport ? init(el) : new window.Audio;
      }
      /**
       * @param {string} element
       * @return {undefined}
       */
      function update(element) {
        if (animationSupport) {
          try {
            init(element).play();
          } catch (notice) {
            self.b.notify(notice);
          }
        }
      }
      jQuery.d(value, "b", function() {
        return a;
      });
      jQuery.d(value, "a", function() {
        return i;
      });
      jQuery.d(value, "c", function() {
        return Main;
      });
      jQuery.d(value, "d", function() {
        return update;
      });
      var foo = jQuery(20);
      var self = jQuery(34);
      /** @type {string} */
      var a = "sounds/snooze.m4a";
      /** @type {string} */
      var i = "sounds/wakeup_notification.mp3";
      /** @type {boolean} */
      var animationSupport = true;
      Object(foo.b)().then(function(dataAndEvents) {
        return animationSupport = dataAndEvents.playSoundEffects;
      });
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} i
     * @param {Object} self
     * @return {undefined}
     */
    53 : function(dataAndEvents, i, self) {
      /**
       * @return {undefined}
       */
      function save() {
        options.storage.onChanged.addListener(listener);
        options.idle.onStateChanged.addListener(listener);
      }
      /**
       * @return {?}
       */
      function listener() {
        return write.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function write() {
        return(write = Object(object.a)(w.a.mark(function end() {
          var set;
          var data;
          var length;
          var val;
          return w.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return self.next = 2, Object(updated_doc.b)();
                case 2:
                  return set = self.sent, self.next = 5, Object(exports.b)();
                case 5:
                  data = self.sent;
                  length = data.badge;
                  if (0 === (val = length === HIDDEN ? "" : length === undef ? set.filter(function($q) {
                    return throttledUpdate()($q.when) < throttledUpdate()().endOf("day");
                  }).length : set.length)) {
                    /** @type {string} */
                    val = "";
                  }
                  options.browserAction.setBadgeBackgroundColor({
                    color : $scope.b.primary
                  });
                  options.browserAction.setBadgeText({
                    text : "" + val
                  });
                case 11:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, end, this);
        }))).apply(this, arguments);
      }
      self.d(i, "b", function() {
        return HIDDEN;
      });
      self.d(i, "a", function() {
        return undef;
      });
      self.d(i, "c", function() {
        return total_snoozed;
      });
      self.d(i, "d", function() {
        return save;
      });
      self.d(i, "e", function() {
        return listener;
      });
      var point = self(1);
      var w = self.n(point);
      var object = self(4);
      var updated_doc = self(13);
      var $scope = self(54);
      var exports = self(20);
      var update = self(10);
      var throttledUpdate = self.n(update);
      var options = window.chrome;
      /** @type {string} */
      var HIDDEN = "hidden";
      /** @type {string} */
      var undef = "due_today";
      /** @type {string} */
      var total_snoozed = "total_snoozed";
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} value
     * @param {Object} jQuery
     * @return {undefined}
     */
    54 : function(dataAndEvents, value, jQuery) {
      jQuery.d(value, "b", function() {
        return defaults;
      });
      jQuery.d(value, "a", function() {
        return a;
      });
      var frame = jQuery(97);
      var defaults = {
        dark : false,
        primary : "#4DCAF2",
        black : "#4A4A4A",
        gray : "#7F7F7F",
        beta : "#FF5939",
        border : "#DADADA",
        lightBorder : "#ECECEC",
        fontFamily : '"Roboto", "Helvetica Neue", Arial, sans-serif',
        snoozePanel : {
          bgColor : "#fff",
          border : "#e5e9e9",
          hoverColor : "#f5f8f8",
          footerTextColor : "#888888",
          buttonTextColor : "#788284",
          countBadgeColor : "#929292",
          whiteIcons : false
        }
      };
      var a = Object(frame.createMuiTheme)({
        palette : {
          primary : {
            main : "#21c1f4"
          }
        },
        ripple : {
          color : "#fff"
        },
        typography : {
          useNextVariants : true,
          htmlFontSize : 10
        },
        overrides : {
          MuiToolbar : {
            root : {
              height : 68
            }
          },
          MuiButton : {
            root : {
              color : "white"
            }
          }
        }
      });
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} thisv
     * @param {Object} fn
     * @return {undefined}
     */
    71 : function(dataAndEvents, thisv, fn) {
      /**
       * @param {?} execResult
       * @return {?}
       */
      function parse(execResult) {
        var hour = execResult.workdayEnd;
        var startIndex = execResult.weekStartDay;
        var reversed = execResult.weekEndDay;
        var core_rnotwhite = execResult.workdayStart;
        var rest = execResult.laterTodayHoursDelta;
        var elems = execResult.somedayMonthsDelta;
        /** @type {boolean} */
        var hasLabel = clearStateChar()().hour() <= 3;
        /** @type {boolean} */
        var title = clearStateChar()().hour() >= hour || clearStateChar()().hour() < 3;
        /** @type {boolean} */
        var initial = clearStateChar()().day() === reversed || clearStateChar()().day() === (reversed + 1) % 7;
        /**
         * @param {string} e
         * @return {?}
         */
        var promote = function(e) {
          return e.minutes(0).seconds(0).millisecond(0);
        };
        /**
         * @param {Object} value
         * @return {?}
         */
        var $ = function(value) {
          return promote(value.hour(core_rnotwhite));
        };
        var end = clearStateChar()().add(rest, "hours");
        var $scope = promote(clearStateChar()().hour() >= hour ? clearStateChar()().add(1, "day").hour(hour) : clearStateChar()().hour(hour));
        var result = $(hasLabel ? clearStateChar()() : clearStateChar()().add(1, "days"));
        var subject = $(initial ? clearStateChar()().day(7 + reversed) : clearStateChar()().day(reversed));
        var m = $(clearStateChar()().day(startIndex + 7));
        var query = $(clearStateChar()().add(1, "months"));
        var date = $(clearStateChar()().add(elems, "months"));
        return[{
          id : "later",
          title : "Later Today",
          icon : fn(243),
          activeIcon : fn(244),
          tooltip : "".concat(end.calendar(), " (").concat(rest, " hours from now)"),
          when : end.toDate()
        }, {
          id : "evening",
          title : title ? "Tomorrow Eve" : "This Evening",
          icon : fn(245),
          activeIcon : fn(246),
          tooltip : $scope.calendar(),
          when : $scope.toDate()
        }, {
          id : "tomorrow",
          title : "Tomorrow",
          icon : fn(247),
          activeIcon : fn(248),
          tooltip : result.calendar(),
          when : result.toDate()
        }, {
          id : "weekend",
          title : initial ? "Next Weekend" : "This Weekend",
          icon : fn(249),
          activeIcon : fn(250),
          tooltip : subject.calendar(),
          when : subject.toDate()
        }, {
          id : "next_week",
          title : "Next Week",
          icon : fn(251),
          activeIcon : fn(252),
          tooltip : m.calendar(),
          when : m.toDate()
        }, {
          id : "in_a_month",
          title : "In a Month",
          icon : fn(253),
          activeIcon : fn(254),
          tooltip : query.format("LL"),
          when : query.toDate()
        }, {
          id : "someday",
          title : "Someday",
          icon : fn(255),
          activeIcon : fn(256),
          tooltip : "".concat(date.format("LL"), " (").concat(elems, " months from now)"),
          when : date.toDate()
        }, {
          id : pageId,
          title : "Repeatedly",
          icon : fn(257),
          activeIcon : fn(258),
          tooltip : "Open this tab on a periodic basis",
          isProFeature : true
        }, {
          id : Number,
          title : "Pick a Date",
          icon : fn(259),
          activeIcon : fn(260),
          tooltip : "Select a specific date & time"
        }];
      }
      /**
       * @return {?}
       */
      function wrap() {
        var e = Object(actual.a)(["\n  width: 90px;\n  transition: background-color 0.4s;\n  background: ", ";\n  position: absolute;\n  text-align: center;\n  line-height: 21px;\n  font-size: 16px;\n  font-weight: 700;\n  color: ", ";\n\n  top: 12px;\n  right: -22px;\n  left: auto;\n  transform: rotate(45deg);\n"]);
        return wrap = function() {
          return e;
        }, e;
      }
      /**
       * @return {?}
       */
      function reduce() {
        var rval = Object(actual.a)(["\n      color: #fff;\n      /* height: 0; */\n      /* overflow: hidden; */\n      /* margin: 0; */\n    "]);
        return reduce = function() {
          return rval;
        }, rval;
      }
      /**
       * @return {?}
       */
      function filter() {
        var event = Object(actual.a)(["\n  margin-top: 12px;\n  font-size: 15px;\n  color: ", ";\n  font-weight: 500;\n  transition: color ", "ms;\n  /* height: 16px; */\n\n  ", ";\n"]);
        return filter = function() {
          return event;
        }, event;
      }
      /**
       * @return {?}
       */
      function forEach() {
        var context = Object(actual.a)(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n"]);
        return forEach = function() {
          return context;
        }, context;
      }
      /**
       * @return {?}
       */
      function each() {
        var obj = Object(actual.a)(["\n  transition: all ", "ms;\n  opacity: ", ";\n"]);
        return each = function() {
          return obj;
        }, obj;
      }
      /**
       * @return {?}
       */
      function objectKeys() {
        var result = Object(actual.a)(["\n  position: relative;\n"]);
        return objectKeys = function() {
          return result;
        }, result;
      }
      /**
       * @return {?}
       */
      function bound() {
        var result = Object(actual.a)(["\n      /* To add transition, u need to transition the image too */\n      transition: background-color ", "ms;\n      background-color: ", " !important;\n      ", " {\n        transform: scale(1.3);\n      }\n    "]);
        return bound = function() {
          return result;
        }, result;
      }
      /**
       * @return {?}
       */
      function hasKey() {
        var result = Object(actual.a)(["\n      background-color: ", ";\n    "]);
        return hasKey = function() {
          return result;
        }, result;
      }
      /**
       * @return {?}
       */
      function isExtensible() {
        var returnValue = Object(actual.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n\n  border: none;\n  cursor: pointer;\n  outline: inherit;\n  background-color: ", ";\n\n  /* Hide ribbon edges */\n  overflow: hidden;\n\n  transition: background-color 0.1s;\n  :hover {\n    background-color: ", ";\n  }\n  ", "\n\n  ", ";\n"]);
        return isExtensible = function() {
          return returnValue;
        }, returnValue;
      }
      /**
       * @return {?}
       */
      function getTrigger() {
        var trigger = Object(actual.a)(["\n  display: grid;\n  grid-template-columns: 130px 130px 130px;\n  grid-template-rows: 130px 130px 130px;\n  justify-items: stretch;\n  align-items: stretch;\n  justify-content: stretch;\n  grid-gap: 1px;\n  background-color: ", ";\n"]);
        return getTrigger = function() {
          return trigger;
        }, trigger;
      }
      /**
       * @return {?}
       */
      function objectValues() {
        var vals = Object(actual.a)(["\n  background-color: rgba(0, 0, 0, 0.1);\n  animation: ", " ", "ms linear 1;\n"]);
        return objectValues = function() {
          return vals;
        }, vals;
      }
      /**
       * @return {?}
       */
      function sortedIndex() {
        var low = Object(actual.a)(["\n  from {\n    width: 100%;\n  }\n\n  to {\n    width: 0%;\n  }\n"]);
        return sortedIndex = function() {
          return low;
        }, low;
      }
      /**
       * @return {?}
       */
      function save() {
        var removed = Object(actual.a)(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n"]);
        return save = function() {
          return removed;
        }, removed;
      }
      /**
       * @return {?}
       */
      function forProps() {
        var result = Object(actual.a)(["\n  color: #333333;\n  position: relative;\n  overflow: hidden;\n"]);
        return forProps = function() {
          return result;
        }, result;
      }
      /**
       * @return {?}
       */
      function clone() {
        var res = Object(actual.a)(["\n  width: 100%;\n  margin-top: 10px;\n  text-align: center;\n"]);
        return clone = function() {
          return res;
        }, res;
      }
      /**
       * @return {?}
       */
      function keys() {
        var ret = Object(actual.a)(["\n  flex: 1;\n  margin-top: 15px;\n  font-size: 17px;\n  color: #7a7a7a;\n  text-align: center;\n  line-height: 24px;\n"]);
        return keys = function() {
          return ret;
        }, ret;
      }
      /**
       * @return {?}
       */
      function coerce() {
        var val = Object(actual.a)(["\n  margin-top: 20px;\n  font-weight: 500;\n  font-size: 26px;\n  color: #1f1f1f;\n  text-align: center;\n"]);
        return coerce = function() {
          return val;
        }, val;
      }
      /**
       * @return {?}
       */
      function Class() {
        var obj = Object(actual.a)([""]);
        return Class = function() {
          return obj;
        }, obj;
      }
      /**
       * @return {?}
       */
      function preload() {
        var deferred = Object(actual.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* justify-content: center; */\n  padding-top: 20px;\n"]);
        return preload = function() {
          return deferred;
        }, deferred;
      }
      /**
       * @return {?}
       */
      function extend() {
        var obj = Object(actual.a)(["\n  width: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n"]);
        return extend = function() {
          return obj;
        }, obj;
      }
      /**
       * @return {?}
       */
      function some() {
        var result = Object(actual.a)(["\n  background-color: ", ";\n  padding-right: 15px;\n  padding-left: 15px;\n"]);
        return some = function() {
          return result;
        }, result;
      }
      /**
       * @return {?}
       */
      function promote() {
        var t = Object(actual.a)(["\n  background-color: ", ";\n  padding: 8px 10px;\n  border-radius: 5px;\n  color: #fff;\n  /* color: ", "; */\n\n  font-weight: 700;\n  font-size: 16px;\n"]);
        return promote = function() {
          return t;
        }, t;
      }
      /**
       * @return {?}
       */
      function extract() {
        var comment = Object(actual.a)(["\n  padding: 0 14px;\n"]);
        return extract = function() {
          return comment;
        }, comment;
      }
      /**
       * @return {?}
       */
      function freeze() {
        var object = Object(actual.a)(["\n  display: flex;\n  align-items: center;\n  padding-left: 16px;\n\n  color: ", ";\n  /* color: #929292; */\n  font-weight: 500;\n  font-size: 17px;\n  flex: 1;\n"]);
        return freeze = function() {
          return object;
        }, object;
      }
      /**
       * @return {?}
       */
      function setter() {
        var returnVal = Object(actual.a)(["\n  background-color: ", ";\n  padding: 2px 8px;\n  border-radius: 5px;\n  color: ", ";\n  font-weight: 700;\n  font-size: 15px;\n  margin-right: 11px;\n"]);
        return setter = function() {
          return returnVal;
        }, returnVal;
      }
      /**
       * @return {?}
       */
      function reduceRight() {
        var result = Object(actual.a)(["\n  border: none;\n  cursor: pointer;\n  background-color: ", ";\n  background-position: center;\n  background-repeat: no-repeat;\n  display: flex;\n  align-items: center;\n\n  :hover {\n    background-color: ", ";\n  }\n  :active {\n    background-color: ", ";\n  }\n"]);
        return reduceRight = function() {
          return result;
        }, result;
      }
      /**
       * @return {?}
       */
      function forIn() {
        var result = Object(actual.a)(["\n  flex: 1;\n  display: flex;\n  align-items: stretch;\n"]);
        return forIn = function() {
          return result;
        }, result;
      }
      /**
       * @return {?}
       */
      function getter() {
        var val = Object(actual.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n\n  transition: opacity 0.5s;\n  opacity: ", ";\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background-color: ", ";\n  color: ", ";\n  /* font-weight: 500; */\n  font-size: 17px;\n"]);
        return getter = function() {
          return val;
        }, val;
      }
      /**
       * @return {?}
       */
      function flatten() {
        var result = Object(actual.a)(["\n  display: flex;\n  justify-content: strech;\n  align-items: stretch;\n\n  height: 56px;\n  border-top: 1px solid ", ";\n  position: relative;\n"]);
        return flatten = function() {
          return result;
        }, result;
      }
      /**
       * @return {?}
       */
      function buildNode() {
        var node = Object(actual.a)(["\n  position: relative;\n"]);
        return buildNode = function() {
          return node;
        }, node;
      }
      /**
       * @param {?} opt_attributes
       * @return {undefined}
       */
      function next(opt_attributes) {
        Object(r.c)(Object(html.a)({}, opt_attributes, {
          closeTab : false
        }));
        setTimeout(Object(test.a)(w.a.mark(function initialize() {
          var current;
          return w.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  if (!opt_attributes.closeTab) {
                    /** @type {number} */
                    self.next = 7;
                    break;
                  }
                  return self.next = 3, Object(exports.l)();
                case 3:
                  current = self.sent;
                  me.a.tabs.remove(current.id);
                  /** @type {number} */
                  self.next = 8;
                  break;
                case 7:
                  window.close();
                case 8:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, initialize, this);
        })), 1100);
        (function() {
          if (anim) {
            try {
              anim.play();
            } catch (e) {
              self.b.notify(new Error("Couldn't play sound"));
            }
          } else {
            self.b.notify(new Error("Snooze sound file not loaded"));
          }
        })();
      }
      /**
       * @return {?}
       */
      function write() {
        return(write = Object(test.a)(w.a.mark(function end() {
          var x;
          var key;
          var i;
          return w.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return self.next = 2, Object(callback.b)();
                case 2:
                  x = self.sent;
                  key = Object(exports.g)(x, valueIndex);
                  /** @type {number} */
                  i = key % codeSegments.length;
                  anim = Object(target.c)(codeSegments[i]);
                case 6:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, end, this);
        }))).apply(this, arguments);
      }
      var actual = fn(5);
      var point = fn(1);
      var w = fn.n(point);
      var test = fn(4);
      var input = fn(156);
      var value = fn(15);
      var opts = fn(16);
      var doc = fn(18);
      var db = fn(17);
      var p = fn(19);
      var html = fn(35);
      var scope = fn(0);
      var element = fn.n(scope);
      var options = fn(3);
      var self = fn(34);
      var bind = fn(10);
      var clearStateChar = fn.n(bind);
      /** @type {string} */
      var pageId = "periodically";
      /** @type {string} */
      var Number = "specific_date";
      /**
       * @param {string} scope
       * @return {?}
       */
      var create = function(scope) {
        return element.a.createElement(localName, {
          white : scope.white
        }, "PRO");
      };
      var localName = options.d.div(wrap(), function($scope) {
        return $scope.white ? "#fff" : $scope.theme.dark ? "#fff" : "#CCD0D0";
      }, function($scope) {
        return $scope.white ? $scope.theme.primary : $scope.theme.snoozePanel.bgColor;
      });
      var content = fn(121);
      var c = fn.n(content);
      var key = function(deepDataAndEvents) {
        /**
         * @return {?}
         */
        function bound() {
          return Object(value.a)(this, bound), Object(doc.a)(this, Object(db.a)(bound).apply(this, arguments));
        }
        return Object(p.a)(bound, deepDataAndEvents), Object(opts.a)(bound, [{
          key : "render",
          /**
           * @return {?}
           */
          value : function() {
            var self = this.props;
            var title = self.title;
            var icon = self.icon;
            var image = self.activeIcon;
            var state = self.focused;
            var value = self.pressed;
            var len = self.proBadge;
            var a = self.onClick;
            var cs = self.onMouseLeave;
            var currentTarget = self.onMouseEnter;
            var theme = self.theme;
            return element.a.createElement(sTag, {
              pressed : value,
              focused : state,
              onMouseDown : a,
              onMouseEnter : currentTarget,
              onMouseLeave : cs
            }, element.a.createElement(nodestring, null, element.a.createElement(tagToInsert, {
              src : image
            }), theme && (!theme.snoozePanel.whiteIcons && element.a.createElement(_tag, {
              src : icon,
              hide : value
            }))), element.a.createElement(c.a, {
              in : !value,
              timeout : 400
            }, element.a.createElement(customElement, {
              pressed : value
            }, title)), len && element.a.createElement(create, {
              white : value
            }));
          }
        }]), bound;
      }(scope.Component);
      var camelKey = Object(options.f)(key);
      var sTag = options.d.button(isExtensible(), function(theme) {
        return theme.theme.snoozePanel.bgColor;
      }, function(theme) {
        return theme.theme.snoozePanel.hoverColor;
      }, function(attrs) {
        return attrs.focused && Object(options.c)(hasKey(), function(theme) {
          return theme.theme.snoozePanel.hoverColor;
        });
      }, function(self) {
        return self.pressed && Object(options.c)(bound(), 400, self.theme.primary, tagToInsert);
      });
      var nodestring = options.d.div(objectKeys());
      var tagToInsert = options.d.img(each(), 400, function(poster) {
        return poster.hide ? 0 : 1;
      });
      var _tag = Object(options.d)(tagToInsert)(forEach());
      var customElement = options.d.div(filter(), function(theme) {
        return theme.theme.snoozePanel.buttonTextColor;
      }, 400, function(item) {
        return item.pressed && Object(options.c)(reduce());
      });
      var nodeName = function(deepDataAndEvents) {
        /**
         * @return {?}
         */
        function bound() {
          return Object(value.a)(this, bound), Object(doc.a)(this, Object(db.a)(bound).apply(this, arguments));
        }
        return Object(p.a)(bound, deepDataAndEvents), Object(opts.a)(bound, [{
          key : "render",
          /**
           * @return {?}
           */
          value : function() {
            var children = this.props.buttons;
            return element.a.createElement(nodeBody, null, children.map(function(opts) {
              return element.a.createElement(camelKey, Object.assign({
                key : opts.id
              }, opts));
            }));
          }
        }]), bound;
      }(scope.Component);
      var nodeBody = options.d.div(getTrigger(), function(theme) {
        return theme.theme.snoozePanel.border;
      });
      var r = fn(43);
      var child = fn(104);
      var datum = fn(96);
      var data = fn(8);
      var props = fn(124);
      var object = fn(39);
      /** @type {number} */
      var timeEx = 6E3;
      var typeName = function(deepDataAndEvents) {
        /**
         * @param {?} expr
         * @return {?}
         */
        function filter(expr) {
          var snapshot;
          return Object(value.a)(this, filter), (snapshot = Object(doc.a)(this, Object(db.a)(filter).call(this, expr))).state = {
            canContinue : false
          }, setTimeout(function() {
            snapshot.setState({
              canContinue : true
            });
          }, timeEx + 600), snapshot;
        }
        return Object(p.a)(filter, deepDataAndEvents), Object(opts.a)(filter, [{
          key : "render",
          /**
           * @return {?}
           */
          value : function() {
            var options = this.props;
            var v = options.visible;
            var click = options.onDismiss;
            var disabled = this.state.canContinue;
            return element.a.createElement(child.a, {
              visible : v
            }, element.a.createElement(hiliteTag, null, element.a.createElement(outerHTML, {
              src : fn(271)
            }), element.a.createElement(createElement, null, "Become a Tab Snooze ", element.a.createElement(props.a, {
              big : true
            }), " !"), element.a.createElement(tagname, null, "Help us support this extension development and enjoy unlimited tab snoozing!", element.a.createElement("br", null), element.a.createElement("br", null), "You have used your ", object.a, " free weekly snoozes."), element.a.createElement(fieldsString, {
              raised : true,
              as : "a",
              href : Object(data.u)(),
              target : "_blank"
            }, "Choose a Plan"), element.a.createElement(html_obj, {
              raised : true,
              onClick : click,
              disabled : !disabled
            }, "Let me use one more time for free", element.a.createElement(objStr, null, element.a.createElement(t, null)))));
          }
        }]), filter;
      }(scope.Component);
      var hiliteTag = options.d.div(preload());
      var outerHTML = options.d.img(Class());
      var createElement = options.d.div(coerce());
      var tagname = options.d.div(keys());
      var fieldsString = Object(options.d)(datum.a)(clone());
      var html_obj = Object(options.d)(fieldsString).attrs({
        color : "#E2E2E2"
      })(forProps());
      var objStr = options.d.div(save());
      var timeout = Object(options.e)(sortedIndex());
      var t = options.d.div(objectValues(), timeout, timeEx);
      var obj = fn(20);
      var elems = fn(127);
      var dom = fn.n(elems);
      var val = fn(152);
      var s = fn.n(val);
      var params = fn(272);
      var callback = fn(13);
      var exports = fn(9);
      var sourceText = function(deepDataAndEvents) {
        /**
         * @param {?} expr
         * @return {?}
         */
        function filter(expr) {
          var snapshot;
          return Object(value.a)(this, filter), (snapshot = Object(doc.a)(this, Object(db.a)(filter).call(this, expr))).state = {
            sleepingTabsCount : 0
          }, Object(callback.b)().then(function(newlines) {
            return snapshot.setState({
              sleepingTabsCount : newlines.length
            });
          }), snapshot;
        }
        return Object(p.a)(filter, deepDataAndEvents), Object(opts.a)(filter, [{
          key : "render",
          /**
           * @return {?}
           */
          value : function() {
            var that = this.props;
            var l = that.tooltip;
            var active = that.upgradeBadge;
            var a = that.betaBadge;
            var caseSensitive = this.state.sleepingTabsCount;
            return element.a.createElement(strScript, null, element.a.createElement(sLiner, null, element.a.createElement(dillinger, {
              as : params.a,
              to : data.o
            }, element.a.createElement(childNodeName, null, caseSensitive), "Sleeping Tabs"), !a && (active && element.a.createElement(x, {
              as : "a",
              href : Object(data.u)(),
              target : "_blank"
            }, element.a.createElement(nodeStr, null, "Upgrade"))), a && element.a.createElement(x, {
              /**
               * @return {undefined}
               */
              onClick : function() {
                Object(exports.i)(data.d);
              }
            }, element.a.createElement(TAG_SHY, null, "BETA")), element.a.createElement(parentTag, {
              as : params.a,
              to : data.q,
              target : "_blank"
            }, element.a.createElement(s.a, null)), element.a.createElement(parentTag, {
              as : params.a,
              to : data.n,
              target : "_blank"
            }, element.a.createElement(dom.a, null))), element.a.createElement(elemName, {
              visible : l.visible
            }, l.text));
          }
        }]), filter;
      }(scope.Component);
      var strScript = options.d.div(flatten(), function(theme) {
        return theme.theme.snoozePanel.border;
      });
      var elemName = options.d.div(getter(), function(v3) {
        return v3.visible ? 1 : 0;
      }, function(theme) {
        return theme.theme.snoozePanel.bgColor;
      }, function(theme) {
        return theme.theme.snoozePanel.footerTextColor;
      });
      var sLiner = options.d.div(forIn());
      var r20 = Object(options.d)(function(styles) {
        return element.a.createElement("button", styles);
      })(reduceRight(), function(theme) {
        return theme.theme.snoozePanel.bgColor;
      }, function(theme) {
        return theme.theme.snoozePanel.hoverColor;
      }, function($scope) {
        return $scope.theme.dark ? $scope.theme.black : "#d7e3e3";
      });
      var childNodeName = options.d.div(setter(), function(theme) {
        return theme.theme.snoozePanel.countBadgeColor;
      }, function(theme) {
        return theme.theme.snoozePanel.bgColor;
      });
      var dillinger = Object(options.d)(r20)(freeze(), function(theme) {
        return theme.theme.snoozePanel.footerTextColor;
      });
      var x = Object(options.d)(r20)(extract());
      var nodeStr = options.d.div(promote(), function($scope) {
        return $scope.theme.primary;
      }, function(theme) {
        return theme.theme.snoozePanel.bgColor;
      });
      var TAG_SHY = Object(options.d)(nodeStr)(some(), function(e) {
        return e.theme.beta;
      });
      var parentTag = Object(options.d)(r20)(extend(), function(theme) {
        return theme.theme.snoozePanel.countBadgeColor;
      });
      var target = fn(45);
      var update = fn(67);
      var throttledUpdate = fn.n(update);
      var arg = fn(69);
      var keyName = fn.n(arg);
      var item = fn(6);
      var me = fn.n(item);
      var anim;
      /**
       * @param {?} opt_attributes
       * @return {?}
       */
      var compileTpl = function(opt_attributes) {
        return keyName()(Object(html.a)({}, opt_attributes, {
          /**
           * @return {?}
           */
          loading : function() {
            return null;
          }
        }));
      };
      var elm = compileTpl({
        /**
         * @return {?}
         */
        loader : function() {
          return Promise.all([fn.e(1), fn.e(10)]).then(fn.bind(null, 516));
        }
      });
      var property = compileTpl({
        /**
         * @return {?}
         */
        loader : function() {
          return Promise.all([fn.e(1), fn.e(14), fn.e(11)]).then(fn.bind(null, 517));
        }
      });
      var fx = function(deepDataAndEvents) {
        /**
         * @param {?} domNode
         * @return {?}
         */
        function create(domNode) {
          var snapshot;
          return Object(value.a)(this, create), (snapshot = Object(doc.a)(this, Object(db.a)(create).call(this, domNode))).state = {
            selectedSnoozeOptionId : null,
            focusedButtonIndex : -1,
            snoozeOptions : parse(obj.a),
            isProUser : false,
            selectorDialogOpen : false,
            isOverFreePlanLimit : false
          }, Promise.all([Object(obj.b)(), Object(object.c)()]).then(function(checksums) {
            var hashtable = Object(input.a)(checksums, 2);
            var match = hashtable[0];
            var matches = hashtable[1];
            return snapshot.setState({
              snoozeOptions : parse(match),
              isProUser : !matches
            });
          }), setTimeout(function() {
            Object(object.d)().then(function(dataAndEvents) {
              return snapshot.setState({
                isOverFreePlanLimit : dataAndEvents
              });
            });
          }, 300), function() {
            write.apply(this, arguments);
          }(), snapshot;
        }
        return Object(p.a)(create, deepDataAndEvents), Object(opts.a)(create, [{
          key : "onKeyPress",
          /**
           * @param {?} event
           * @return {undefined}
           */
          value : function(event) {
            var state = this.state;
            var len = state.focusedButtonIndex;
            var list = state.snoozeOptions;
            var object = state.isOverFreePlanLimit;
            var idx = len;
            var b = throttledUpdate()(event);
            var cur = b && directions[b.toUpperCase()];
            /** @type {number} */
            var index = parseInt(b);
            if (!object) {
              if (null != cur) {
                this.onSnoozeButtonClicked(event, list[cur]);
                /** @type {number} */
                idx = -1;
              } else {
                if ("enter" === b) {
                  if (-1 === idx) {
                    /** @type {number} */
                    idx = 0;
                  }
                  var next = list[idx];
                  this.onSnoozeButtonClicked(event, next);
                  /** @type {number} */
                  idx = -1;
                } else {
                  if (Number.isInteger(index) && (1 <= index && index <= 9)) {
                    this.onSnoozeButtonClicked(event, list[index - 1]);
                    /** @type {number} */
                    idx = -1;
                  } else {
                    if (-1 === len) {
                      /** @type {number} */
                      idx = 0;
                    } else {
                      if ("left" === b && len % 3 !== 0) {
                        idx -= 1;
                      } else {
                        if ("right" === b && len % 3 !== 2) {
                          idx += 1;
                        } else {
                          if ("up" === b && len > 2) {
                            idx -= 3;
                          } else {
                            if ("down" === b && len < 6) {
                              idx += 3;
                            } else {
                              if ("tab" === b) {
                                /** @type {number} */
                                idx = (idx + 1) % list.length;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              this.setState({
                focusedButtonIndex : idx
              });
            }
          }
        }, {
          key : "onSnoozeButtonClicked",
          /**
           * @param {MouseEvent} event
           * @param {Object} doc
           * @return {undefined}
           */
          value : function(event, doc) {
            var point = this;
            var pos = this.state.selectedSnoozeOptionId;
            var white = this.props.preventTooltip;
            if (null == pos) {
              if (this.setState({
                selectedSnoozeOptionId : doc.id
              }), white(), null != doc.when) {
                var wakeupTime = doc.when.getTime();
                next({
                  type : doc.id,
                  wakeupTime : wakeupTime,
                  closeTab : !event.altKey
                });
              } else {
                setTimeout(function() {
                  return point.setState({
                    selectorDialogOpen : true
                  });
                }, 400);
              }
            }
          }
        }, {
          key : "onSnoozeSpecificDateSelected",
          /**
           * @param {Date} obj1
           * @return {undefined}
           */
          value : function(obj1) {
            next({
              type : this.state.selectedSnoozeOptionId || "",
              wakeupTime : obj1.getTime(),
              closeTab : true
            });
          }
        }, {
          key : "onSnoozePeriodSelected",
          /**
           * @param {Object} period
           * @return {undefined}
           */
          value : function(period) {
            var state = this.state;
            var type = state.selectedSnoozeOptionId;
            if (state.isProUser) {
              next({
                type : type || "",
                period : period,
                closeTab : true
              });
            } else {
              Object(exports.i)(Object(data.u)());
            }
          }
        }, {
          key : "getSnoozeButtons",
          /**
           * @param {Array} newValue
           * @return {?}
           */
          value : function(newValue) {
            var jQuery = this;
            var state = this.state;
            var id = state.selectedSnoozeOptionId;
            var object = state.isProUser;
            var node = state.focusedButtonIndex;
            var props = this.props;
            var intCss = props.onTooltipAreaMouseEnter;
            var length = props.onTooltipAreaMouseLeave;
            return newValue.map(function(elements, te) {
              return Object(html.a)({}, elements, {
                proBadge : !object && elements.isProFeature,
                focused : node === te,
                pressed : id === elements.id,
                /**
                 * @param {?} which
                 * @return {?}
                 */
                onClick : function(which) {
                  return jQuery.onSnoozeButtonClicked(which, elements);
                },
                /**
                 * @return {?}
                 */
                onMouseEnter : function() {
                  return intCss(elements.tooltip);
                },
                /**
                 * @return {?}
                 */
                onMouseLeave : function() {
                  return length();
                }
              });
            });
          }
        }, {
          key : "render",
          /**
           * @return {?}
           */
          value : function() {
            var point = this;
            var state = this.state;
            var object = state.selectedSnoozeOptionId;
            var html = state.snoozeOptions;
            var numPatterns = state.isProUser;
            var currentPage = state.selectorDialogOpen;
            var v = state.isOverFreePlanLimit;
            var props = this.props;
            var _value = props.tooltipText;
            var s = props.tooltipVisible;
            var i = props.hideFooter;
            if (!html) {
              return null;
            }
            var isFunction = this.getSnoozeButtons(html);
            return element.a.createElement(sSCRIPT, {
              onKeyDown : this.onKeyPress.bind(this),
              tabIndex : "0",
              /**
               * @param {Element} item
               * @return {undefined}
               */
              ref : function(item) {
                if (item) {
                  item.focus();
                }
              }
            }, element.a.createElement(nodeName, {
              buttons : isFunction
            }), element.a.createElement(sourceText, {
              tooltip : {
                visible : s || i,
                text : _value
              },
              upgradeBadge : !numPatterns,
              betaBadge : exports.b
            }), object === pageId && element.a.createElement(elm, {
              onPeriodSelected : this.onSnoozePeriodSelected.bind(this),
              visible : currentPage && object === pageId
            }), object === Number && element.a.createElement(property, {
              onDateSelected : this.onSnoozeSpecificDateSelected.bind(this),
              visible : currentPage && object === Number
            }), element.a.createElement(typeName, {
              /**
               * @return {?}
               */
              onDismiss : function() {
                return point.setState({
                  isOverFreePlanLimit : false
                });
              },
              visible : v
            }));
          }
        }]), create;
      }(scope.Component);
      var directions = {
        L : 0,
        E : 1,
        T : 2,
        W : 3,
        N : 4,
        I : 5,
        M : 5,
        S : 6,
        R : 7,
        P : 8,
        D : 8
      };
      /** @type {number} */
      var valueIndex = 2E4;
      /** @type {Array} */
      var codeSegments = [target.b];
      var type;
      var pt = (type = fx, function(deepDataAndEvents) {
        /**
         * @return {?}
         */
        function clone() {
          var destElements;
          var test;
          Object(value.a)(this, clone);
          /** @type {number} */
          var length = arguments.length;
          /** @type {Array} */
          var rv = new Array(length);
          /** @type {number} */
          var i = 0;
          for (;i < length;i++) {
            rv[i] = arguments[i];
          }
          return(test = Object(doc.a)(this, (destElements = Object(db.a)(clone)).call.apply(destElements, [this].concat(rv)))).tooltipShowTimeout = null, test.tooltipHideTimeout = null, test.state = {
            tooltipVisible : false,
            tooltipText : null
          }, test;
        }
        return Object(p.a)(clone, deepDataAndEvents), Object(opts.a)(clone, [{
          key : "onTooltipAreaMouseEnter",
          /**
           * @param {string} thisValue
           * @return {undefined}
           */
          value : function(thisValue) {
            var point = this;
            var pos = this.state.tooltipVisible;
            this.setState({
              tooltipText : thisValue
            });
            if (this.tooltipHideTimeout) {
              clearTimeout(this.tooltipHideTimeout);
            }
            if (!pos) {
              if (!this.tooltipShowTimeout) {
                /** @type {number} */
                this.tooltipShowTimeout = setTimeout(function() {
                  /** @type {null} */
                  point.tooltipShowTimeout = null;
                  point.setState({
                    tooltipVisible : true
                  });
                }, 600);
              }
            }
          }
        }, {
          key : "onTooltipAreaMouseLeave",
          /**
           * @return {undefined}
           */
          value : function() {
            var point = this;
            if (this.tooltipShowTimeout) {
              clearTimeout(this.tooltipShowTimeout);
              /** @type {null} */
              this.tooltipShowTimeout = null;
              this.setState({
                tooltipVisible : false
              });
            }
            /** @type {number} */
            this.tooltipHideTimeout = setTimeout(function() {
              point.setState({
                tooltipVisible : false
              });
            }, 100);
          }
        }, {
          key : "preventTooltip",
          /**
           * @return {undefined}
           */
          value : function() {
            if (this.tooltipShowTimeout) {
              clearTimeout(this.tooltipShowTimeout);
            }
          }
        }, {
          key : "render",
          /**
           * @return {?}
           */
          value : function() {
            var state = this.state;
            var object = state.tooltipText;
            var numPatterns = state.tooltipVisible;
            return element.a.createElement(type, Object.assign({
              tooltipVisible : numPatterns,
              tooltipText : object,
              preventTooltip : this.preventTooltip.bind(this),
              onTooltipAreaMouseEnter : this.onTooltipAreaMouseEnter.bind(this),
              onTooltipAreaMouseLeave : this.onTooltipAreaMouseLeave.bind(this)
            }, this.props));
          }
        }]), clone;
      }(scope.Component));
      var sSCRIPT = options.d.div(buildNode());
      fn.d(thisv, "a", function() {
        return pt;
      });
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} i
     * @param {Object} self
     * @return {undefined}
     */
    8 : function(dataAndEvents, i, self) {
      self.d(i, "a", function() {
        return o;
      });
      self.d(i, "l", function() {
        return content;
      });
      self.d(i, "j", function() {
        return _options;
      });
      self.d(i, "o", function() {
        return optionssleeping_tabs;
      });
      self.d(i, "n", function() {
        return optionssettings;
      });
      self.d(i, "q", function() {
        return len;
      });
      self.d(i, "h", function() {
        return first_snooze;
      });
      self.d(i, "m", function() {
        return rate_tab_snooze;
      });
      self.d(i, "d", function() {
        return beta;
      });
      self.d(i, "s", function() {
        return link;
      });
      self.d(i, "b", function() {
        return key;
      });
      self.d(i, "g", function() {
        return b;
      });
      self.d(i, "k", function() {
        return g;
      });
      self.d(i, "f", function() {
        return m;
      });
      self.d(i, "i", function() {
        return v;
      });
      self.d(i, "e", function() {
        return w;
      });
      self.d(i, "p", function() {
        return y;
      });
      self.d(i, "c", function() {
        return x;
      });
      self.d(i, "r", function() {
        return caseSensitive;
      });
      self.d(i, "t", function() {
        return objectValues;
      });
      self.d(i, "u", function() {
        return isExtensible;
      });
      var options = self(23);
      /** @type {string} */
      var o = "/index.html#";
      /** @type {string} */
      var content = "/popup";
      /** @type {string} */
      var _options = "/options";
      /** @type {string} */
      var optionssleeping_tabs = "/options/sleeping-tabs";
      /** @type {string} */
      var optionssettings = "/options/settings";
      /** @type {string} */
      var len = "/todo";
      /** @type {string} */
      var first_snooze = "/first-snooze";
      /** @type {string} */
      var rate_tab_snooze = "/rate-tab-snooze";
      /** @type {string} */
      var beta = "/beta";
      /** @type {string} */
      var link = "/tutorial";
      /** @type {string} */
      var key = "background";
      /** @type {string} */
      var b = "https://chrome.google.com/webstore/detail/tab-snooze/pdiebiamhaleloakpcgmpnenggpjbcbm/reviews";
      /** @type {string} */
      var g = "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=82HLJCDURLVME&currency_code=USD&source=url";
      /** @type {string} */
      var m = "chrome://extensions/shortcuts";
      /** @type {string} */
      var v = "https://m.me/tabsnooze";
      /** @type {string} */
      var w = "https://headwayapp.co/tab-snooze-changelog";
      /** @type {string} */
      var y = "https://tab-snooze.nolt.io/";
      /** @type {string} */
      var x = "https://medium.com/@eyalw/tab-snooze-beta-b033d1e3e021";
      /** @type {string} */
      var caseSensitive = "https://tabsnooze.com";
      /** @type {string} */
      var restoreScript = ("".concat(caseSensitive, "/serverConfig.json"), "".concat(caseSensitive, "/pro"));
      /** @type {string} */
      var r20 = "".concat(caseSensitive, "/uninstalled");
      /**
       * @return {?}
       */
      var objectValues = function() {
        return Object(options.b)(r20);
      };
      /**
       * @return {?}
       */
      var isExtensible = function() {
        return Object(options.b)(restoreScript);
      };
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} i
     * @param {Object} self
     * @return {undefined}
     */
    9 : function(dataAndEvents, i, self) {
      /**
       * @return {?}
       */
      function get() {
        return window.location.hash.substring(1) === o.b;
      }
      /**
       * @param {(Array|string)} models
       * @return {undefined}
       */
      function remove(models) {
        if (!Array.isArray(models)) {
          /** @type {Array} */
          models = [models];
        }
        models.forEach(function(c) {
          return window["tabSnoozeDebug_".concat(c.name)] = c;
        });
      }
      /**
       * @param {Array} paths
       * @param {string} color
       * @return {?}
       */
      function initialize(paths, color) {
        return Promise.all(paths.map(function(req) {
          return chrome.tabs.create({ // proxy.a.tabs.create({
            url : req.url,
            active : color
          });
        }));
      }
      /**
       * @param {?} vec0
       * @param {?} proxyObj
       * @param {?} models
       * @return {?}
       */
      function add(vec0, proxyObj, models) {
        return fn.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function fn() {
        return(fn = Object(options.a)(w.a.mark(function initialize(code, width, height) {
          var item;
          return w.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return self.next = 2, chrome.windows.create({ // proxy.a.windows.create({
                    type : "popup",
                    state : "normal",
                    url : o.a + code,
                    left : Math.round((window.screen.width - width) / 2),
                    top : Math.round((window.screen.height - height) / 3),
                    width : width,
                    height : height,
                    focused : true
                  });
                case 2:
                  item = self.sent;
                  chrome.windows.update(item.id, { // proxy.a.windows.update(item.id, {
                    focused : true
                  });
                case 4:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, initialize, this);
        }))).apply(this, arguments);
      }
      /**
       * @param {?} event
       * @return {?}
       */
      function f2(event) {
        return f.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function f() {
        return(f = Object(options.a)(w.a.mark(function initialize(url) {
          var tab;
          return w.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return url.startsWith("http") || (url = o.a + url), self.next = 3, chrome.tabs.create({ // proxy.a.tabs.create({
                    url : url,
                    active : true
                  });
                case 3:
                  tab = self.sent;
                  chrome.windows.update(tab.windowId, { // proxy.a.windows.update(tab.windowId, {
                    focused : true
                  });
                case 5:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, initialize, this);
        }))).apply(this, arguments);
      }
      /**
       * @param {?} lower
       * @param {?} num
       * @return {?}
       */
      function bound(lower, num) {
        return write.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function write() {
        return(write = Object(options.a)(w.a.mark(function end(results, chunk) {
          var output;
          var fmt;
          var restoreScript;
          var options;
          var last;
          return w.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  if (output = results.map(function(suite) {
                    return suite.title;
                  }).join("\n"), fmt = "Tab Snooze woke up " + (results.length > 1 ? "".concat(results.length, " tabs") : "a tab"), console.log(fmt), !(restoreScript = results[0].favicon)) {
                    /** @type {number} */
                    self.next = 13;
                    break;
                  }
                  return self.prev = 5, self.next = 8, call(restoreScript);
                case 8:
                  options = self.sent;
                  /** @type {number} */
                  self.next = 13;
                  break;
                case 11:
                  /** @type {number} */
                  self.prev = 11;
                  self.t0 = self.catch(5);
                case 13:
                  return options || (options = "images/extension_icon_128.png"), self.next = 16, chrome.notifications.create("", { // proxy.a.notifications.create("", {
                    type : "basic",
                    title : fmt,
                    message : output,
                    iconUrl : options
                  });
                case 16:
                  last = self.sent;
                  chrome.notifications.onClicked.addListener(function loop(index) {
                    if (index === last) {
                      chrome.tabs.update(chunk.id, { // proxy.a.tabs.update(chunk.id, {
                        active : true
                      });
                      chrome.windows.update(chunk.windowId, { // proxy.a.windows.update(chunk.windowId, {
                        focused : true
                      });
                      chrome.notifications.clear(last); // proxy.a.notifications.clear(last);
                      chrome.notifications.onClicked.removeListener(loop);
                    }
                  });
                case 18:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, end, this, [[5, 11]]);
        }))).apply(this, arguments);
      }
      /**
       * @param {Date} deepDataAndEvents
       * @param {number} dataAndEvents
       * @return {?}
       */
      function clone(deepDataAndEvents, dataAndEvents) {
        return new Date(deepDataAndEvents.getTime() + 6E4 * dataAndEvents);
      }
      /**
       * @return {?}
       */
      function view() {
        return handler.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function handler() {
        return(handler = Object(options.a)(w.a.mark(function initialize() {
          var name;
          return w.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return self.next = 2, chrome.tabs.query({ // proxy.a.tabs.query({
                    active : true,
                    currentWindow : true
                  });
                case 2:
                  return name = self.sent, self.abrupt("return", name[0]);
                case 4:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, initialize, this);
        }))).apply(this, arguments);
      }
      /**
       * @param {Object} lang
       * @return {?}
       */
      function parse(lang) {
        /** @type {Array} */
        var buffer = [];
        if ("daily" === lang.type) {
          /** @type {Array} */
          buffer = [main()(), main()().add(1, "day")];
        }
        if ("weekly" === lang.type) {
          /** @type {number} */
          var dest = 0;
          for (;dest < 2;dest++) {
            /** @type {boolean} */
            var callback2 = true;
            /** @type {boolean} */
            var o = false;
            var bulk = void 0;
            try {
              var _ref;
              var self = lang.days[Symbol.iterator]();
              for (;!(callback2 = (_ref = self.next()).done);callback2 = true) {
                var key = _ref.value;
                buffer.push(main()().add(dest, "week").day(key));
              }
            } catch (fn) {
              /** @type {boolean} */
              o = true;
              bulk = fn;
            } finally {
              try {
                if (!callback2) {
                  if (!(null == self.return)) {
                    self.return();
                  }
                }
              } finally {
                if (o) {
                  throw bulk;
                }
              }
            }
          }
        }
        if ("monthly" === lang.type) {
          var power = main()().date(lang.day + 1);
          /** @type {Array} */
          buffer = [power, main()(power).add(1, "month")];
        }
        if ("yearly" === lang.type) {
          var mom = main()().month(lang.date[0]).date(lang.date[1] + 1);
          /** @type {Array} */
          buffer = [mom, main()(mom).add(1, "year")];
        }
        var rreturn = main()().add(2, "minute");
        var startDate = (buffer = buffer.map(function(walkers) {
          return function(obj, a) {
            /** @type {number} */
            var b = Math.floor(a);
            /** @type {number} */
            var minutes = Math.floor(60 * (a - b));
            return obj.hours(b).minutes(minutes).seconds(0);
          }(walkers, lang.hour);
        })).find(function(ret) {
          return ret.isAfter(rreturn);
        });
        if (!startDate) {
          throw new Error("Can't find next future occurrence");
        }
        return startDate.toDate();
      }
      /**
       * @param {?} b
       * @return {?}
       */
      function nan(b) {
        return main.a.localeData().ordinal(b);
      }
      /**
       * @param {Array} tokens
       * @param {(number|string)} elements
       * @return {?}
       */
      function search(tokens, elements) {
        tokens.sort(function(b, a) {
          return a.sleepStart - b.sleepStart;
        });
        /** @type {number} */
        var i = 0;
        for (;i < tokens.length;i++) {
          if ((0 === i ? Date.now() : tokens[i - 1].sleepStart) - tokens[i].sleepStart > elements) {
            return i;
          }
        }
        return tokens.length;
      }
      /**
       * @param {Array} res
       * @return {?}
       */
      function onSuccess(res) {
        return res.sort(function(b, a) {
          return a.sleepStart - b.sleepStart;
        }), res[0];
      }
      /**
       * @param {Array} results
       * @return {?}
       */
      function unique(results) {
        return results.sort(function(b, a) {
          return b.when - a.when;
        }), results[0];
      }
      /**
       * @param {?} callback
       * @return {?}
       */
      function call(callback) {
        return create.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function create() {
        return(create = Object(options.a)(w.a.mark(function fetch(url) {
          var result;
          var startY;
          var type;
          var newY;
          return w.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  if (!url.startsWith("data:")) {
                    /** @type {number} */
                    self.next = 2;
                    break;
                  }
                  return self.abrupt("return", url);
                case 2:
                  return self.next = 4, fetch(url);
                case 4:
                  if ((result = self.sent).body) {
                    /** @type {number} */
                    self.next = 7;
                    break;
                  }
                  throw new Error("No body in response");;
                case 7:
                  return self.next = 9, result.body.getReader().read().then(function(elem) {
                    return btoa(String.fromCharCode.apply(null, elem.value));
                  });
                case 9:
                  if (startY = self.sent, type = result.headers.get("Content-Type")) {
                    /** @type {number} */
                    self.next = 13;
                    break;
                  }
                  throw new Error("Failed to get content type");;
                case 13:
                  return newY = "data:" + type + ";base64," + startY, self.abrupt("return", newY);
                case 15:
                ;
                case "end":
                  return self.stop();
              }
            }
          }, fetch, this);
        }))).apply(this, arguments);
      }
      self.d(i, "o", function() {
        return get;
      });
      self.d(i, "k", function() {
        return remove;
      });
      self.d(i, "j", function() {
        return initialize;
      });
      self.d(i, "h", function() {
        return add;
      });
      self.d(i, "i", function() {
        return f2;
      });
      self.d(i, "p", function() {
        return bound;
      });
      self.d(i, "c", function() {
        return clone;
      });
      self.d(i, "l", function() {
        return view;
      });
      self.d(i, "e", function() {
        return parse;
      });
      self.d(i, "f", function() {
        return selector_sortOrder;
      });
      self.d(i, "d", function() {
        return require;
      });
      self.d(i, "q", function() {
        return nan;
      });
      self.d(i, "g", function() {
        return search;
      });
      self.d(i, "n", function() {
        return onSuccess;
      });
      self.d(i, "m", function() {
        return unique;
      });
      self.d(i, "b", function() {
        return I;
      });
      self.d(i, "a", function() {
        return ver;
      });
      var point = self(1);
      var w = self.n(point);
      var options = self(4);
      var className = self(6);
      var proxy = self.n(className);
      var content = self(10);
      var main = self.n(content);
      var o = self(8);
      var chrome = (self(68), window.chrome);
      /**
       * @param {Object} a
       * @param {Object} b
       * @return {?}
       */
      var selector_sortOrder = function(a, b) {
        return a.when === b.when ? a.sleepStart - b.sleepStart : a.when - b.when;
      };
      /**
       * @param {Object} request
       * @param {Object} options
       * @return {?}
       */
      var require = function(request, options) {
        return request.url === options.url && request.when === options.when;
      };
      /** @type {boolean} */
      var I = "true" === Object({
        NODE_ENV : "production",
        PUBLIC_URL : "",
        REACT_APP_VERSION : "0.1.0",
        REACT_APP_MIXPANEL_TOKEN : "162cc55365e5f12b4d410daecbdc5c97",
        REACT_APP_BUGSNAG_API_KEY : "fbdf95c93498131a5747c1f568670372"
      }).REACT_APP_IS_BETA;
      var ver = chrome.runtime.getManifest().version;
    },
    /**
     * @param {?} dataAndEvents
     * @param {Node} fnc
     * @param {Object} $
     * @return {undefined}
     */
    96 : function(dataAndEvents, fnc, $) {
      /**
       * @return {?}
       */
      function hasKey() {
        var result = Object(opts.a)(["\n      background-image: url('", "');\n      background-position: 12px center;\n      background-repeat: no-repeat;\n      padding-left: 44px;\n    "]);
        return hasKey = function() {
          return result;
        }, result;
      }
      /**
       * @return {?}
       */
      function filter() {
        var event = Object(opts.a)(["\n      pointer-events: none;\n      opacity: 0.6;\n    "]);
        return filter = function() {
          return event;
        }, event;
      }
      /**
       * @return {?}
       */
      function reduce() {
        var rval = Object(opts.a)(["\n      box-shadow: 0 3px 0 0\n        ", ";\n    "]);
        return reduce = function() {
          return rval;
        }, rval;
      }
      /**
       * @return {?}
       */
      function each() {
        var obj = Object(opts.a)(["\n  display: inline-block;\n  border: none;\n  cursor: pointer;\n  outline: inherit;\n\n  background-color: ", ";\n  padding: 12px 14px;\n  border-radius: 5px;\n  color: #fff;\n  font-weight: 500;\n  font-size: 17px;\n\n  svg {\n    margin-right: 10px;\n    vertical-align: center;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  transition: all 0.12s;\n  :hover {\n    background-color: ", ";\n  }\n  :active {\n    transform: scale(0.95);\n    background-color: ", ";\n  }\n"]);
        return each = function() {
          return obj;
        }, obj;
      }
      var opts = $(5);
      var options = $(3);
      var active = $(72);
      var $filter = $.n(active);
      fnc.a = options.d.button.attrs(function($scope) {
        return{
          color : $scope.color || $scope.theme.primary
        };
      })(each(), function(simple) {
        return simple.color;
      }, function(point) {
        return point.raised && Object(options.c)(reduce(), function(ev) {
          return $filter()(ev.color).darken(0.3).hex();
        });
      }, function(cur) {
        return cur.disabled && Object(options.c)(filter());
      }, function(theObj) {
        return theObj.icon && Object(options.c)(hasKey(), theObj.icon);
      }, function(ev) {
        return $filter()(ev.color).darken(0.1).hex();
      }, function(ev) {
        return $filter()(ev.color).darken(0.3).hex();
      });
    }
  }, [[162, 15, 12]]]);
  