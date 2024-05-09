(window.webpackJsonp = window.webpackJsonp || []).push([[4], {
    /**
     * @param {?} dataAndEvents
     * @param {Node} fnc
     * @param {Object} $
     * @return {undefined}
     */
    370 : function(dataAndEvents, fnc, $) {
      var style = $(0);
      var target = $.n(style);
      var content = $(383);
      var view = $.n(content);
      var frame = $(97);
      fnc.a = Object(frame.withStyles)(function(dataAndEvents) {
        return{
          root : {
            fontSize : "2rem",
            lineHeight : "initial"
          }
        };
      })(function(config) {
        var tagToInsert = config.component || view.a;
        return target.a.createElement(tagToInsert, Object.assign({}, config, {
          value : config.options.findIndex(function(x) {
            return x.value === config.value;
          }),
          /**
           * @param {Event} evt
           * @return {undefined}
           */
          onChange : function(evt) {
            /** @type {number} */
            var id = parseInt(evt.target.value);
            var d = config.options[id];
            config.onChange(d.value);
          }
        }), config.options.map(function(node, x) {
          return target.a.createElement("option", {
            key : node.value,
            value : x
          }, node.label);
        }));
      });
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    478 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/navbar_logo.d40b66c3.svg";
    },
    /**
     * @param {?} dataAndEvents
     * @param {Object} eventName
     * @param {Object} $
     * @return {undefined}
     */
    518 : function(dataAndEvents, eventName, $) {
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
        return(write = Object(p2.a)(w.a.mark(function end() {
          var node;
          return w.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return self.next = 2, Object(target.b)();
                case 2:
                  return node = self.sent, self.abrupt("return", [{
                    title : "Today",
                    maxDate : opts()().endOf("day"),
                    dateFormat : "h:mm A"
                  }, {
                    title : "Tomorrow",
                    maxDate : opts()().add(1, "d").endOf("day")
                  }, {
                    title : "Later This Week",
                    maxDate : opts()().day(node.weekEndDay).startOf("day")
                  }, {
                    title : "This Weekend",
                    maxDate : cb(node.weekStartDay).startOf("day")
                  }, {
                    title : "Next Week",
                    maxDate : opts()().add(1, "week").endOf("week"),
                    dateFormat : "dddd [at] h:mm A"
                  }, {
                    title : "In Two Weeks",
                    maxDate : opts()().add(2, "weeks").endOf("week"),
                    dateFormat : "LL [at] h:mm A"
                  }, {
                    title : "In Three Weeks",
                    maxDate : opts()().add(3, "weeks").endOf("week"),
                    dateFormat : "LL [at] h:mm A"
                  }, {
                    title : "In One Month",
                    maxDate : opts()().add(6, "weeks").endOf("week"),
                    dateFormat : "LL [at] h:mm A"
                  }, {
                    title : "In Two Months",
                    maxDate : opts()().add(10, "weeks").endOf("week"),
                    dateFormat : "LL [at] h:mm A"
                  }, {
                    title : "In Three Months",
                    maxDate : opts()().add(14, "weeks").endOf("week"),
                    dateFormat : "LL [at] h:mm A"
                  }, {
                    title : "In The Future",
                    maxDate : opts()(9999999999999),
                    dateFormat : "LL"
                  }]);
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
       * @param {number} i
       * @return {?}
       */
      function cb(i) {
        var c = opts()().day(i);
        return opts()().isBefore(c) ? c : opts()().day(7 + i);
      }
      /**
       * @param {?} callback
       * @return {?}
       */
      function ajax(callback) {
        return fn.apply(this, arguments);
      }
      /**
       * @return {?}
       */
      function fn() {
        return(fn = Object(p2.a)(w.a.mark(function end(encoding) {
          var dirs;
          var props;
          var out;
          return w.a.wrap(function(self) {
            for (;;) {
              switch(self.prev = self.next) {
                case 0:
                  return self.next = 2, Object(foo.b)();
                case 2:
                  return dirs = self.sent, self.next = 5, call();
                case 5:
                  return props = self.sent, out = [], props.forEach(function(s) {
                    /** @type {Array} */
                    var t = [];
                    /** @type {number} */
                    var i = 0;
                    for (;i < dirs.length;i++) {
                      var dir = dirs[i];
                      if (opts()(dir.when).isBefore(s.maxDate)) {
                        if (!(dir.period && encoding)) {
                          t.push(dir);
                        }
                        dirs.splice(dirs.indexOf(dir), 1);
                        i -= 1;
                      }
                    }
                    if (t.length) {
                      t.sort(e.f);
                      var copies = {
                        timeRange : s,
                        tabs : t
                      };
                      out.push(copies);
                    }
                  }), self.abrupt("return", out);
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
       * @param {Object} _
       * @param {Object} data
       * @return {?}
       */
      function format(_, data) {
        var buf = function(left, d) {
          var o = opts()(d.when);
          var a = left.dateFormat;
          if (a) {
            return o.format(a);
          }
          return o.calendar();
        }(_, data);
        return data.period ? element.a.createElement(template.Fragment, null, element.a.createElement(props.a, {
          style : {
            marginRight : 4
          }
        }), "".concat(function(config) {
          if (!config.period) {
            throw new Error("formatWakeupPeriod was called with a non-periodic tab");
          }
          var d = config.period;
          var n = opts()(config.when).format("h:mm a");
          if ("daily" === d.type) {
            return "Every day at " + n;
          }
          if ("weekly" === d.type) {
            var buf = opts.a.weekdaysShort();
            var r = d.days.map(function(off) {
              return buf[off];
            }).join(", ");
            return "Every " + r + " at " + n;
          }
          if ("monthly" === d.type) {
            return "Every month on the " + Object(e.q)(d.day + 1);
          }
          if ("yearly" === d.type) {
            return "Every year on " + opts.a.monthsShort()[d.date[0]] + " " + Object(e.q)(d.date[1] + 1) + " at " + n;
          }
          throw new Error("formatWakeupPeriod did not recognize a period type");
        }(data), " (Next: ").concat(buf, ")")) : buf;
      }
      /**
       * @return {?}
       */
      function reduce() {
        var rval = Object(actual.a)(["\n  width: 32px;\n  height: 32px;\n  min-width: 32px;\n  align-self: flex-start;\n  margin-top: 8px;\n  border-radius: 3px;\n"]);
        return reduce = function() {
          return rval;
        }, rval;
      }
      /**
       * @return {?}
       */
      function forProps() {
        var result = Object(actual.a)(["\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 130px;\n\n  span {\n    font-size: 20px;\n    color: #bbb;\n  }\n  svg {\n    color: #e6e6e6;\n    width: 140px;\n    height: 140px;\n  }\n"]);
        return forProps = function() {
          return result;
        }, result;
      }
      /**
       * @return {?}
       */
      function filter() {
        var event = Object(actual.a)(["\n  padding-bottom: 50px;\n"]);
        return filter = function() {
          return event;
        }, event;
      }
      /**
       * @return {?}
       */
      function reduceRight() {
        var result = Object(actual.a)(["\n  :after {\n    content: '+';\n  }\n  display: inline-block;\n  margin: 0 4px;\n"]);
        return reduceRight = function() {
          return result;
        }, result;
      }
      /**
       * @return {?}
       */
      function each() {
        var obj = Object(actual.a)(["\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  color: #333;\n  padding: 4px 10px;\n"]);
        return each = function() {
          return obj;
        }, obj;
      }
      /**
       * @return {?}
       */
      function forIn() {
        var result = Object(actual.a)(["\n  display: flex;\n  align-items: center;\n  color: #999;\n\n  background-color: #f1f3f4;\n  border: none;\n  border-radius: 4px;\n  padding: 6px;\n  margin-right: 12px;\n"]);
        return forIn = function() {
          return result;
        }, result;
      }
      /**
       * @return {?}
       */
      function objectValues() {
        var vals = Object(actual.a)(["\n  background-color: #f1f3f4;\n  border: none;\n  border-radius: 4px;\n  color: #333;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  outline: none;\n  padding-left: 5px;\n  width: ", "px;\n  height: 40px;\n  margin-right: 12px;\n  :hover {\n    background-color: #e7e7e7;\n  }\n  :active {\n    background-color: #d0d0d0;\n  }\n"]);
        return objectValues = function() {
          return vals;
        }, vals;
      }
      /**
       * @return {?}
       */
      function promote() {
        var t = Object(actual.a)(["\n      pointer-events: none;\n      opacity: 0.5;\n      user-select: none;\n    "]);
        return promote = function() {
          return t;
        }, t;
      }
      /**
       * @return {?}
       */
      function isExtensible() {
        var returnValue = Object(actual.a)(["\n  ", "\n"]);
        return isExtensible = function() {
          return returnValue;
        }, returnValue;
      }
      /**
       * @return {?}
       */
      function forEach() {
        var context = Object(actual.a)(["\n  padding: 8px 18px;\n  color: #555;\n  margin-right: 13px;\n"]);
        return forEach = function() {
          return context;
        }, context;
      }
      /**
       * @return {?}
       */
      function objectKeys() {
        var result = Object(actual.a)(["\n  /* display: flex; */\n  /* align-items: center; */\n  margin-top: 10px;\n"]);
        return objectKeys = function() {
          return result;
        }, result;
      }
      /**
       * @return {?}
       */
      function runInContext() {
        var Benchmark = Object(actual.a)([""]);
        return runInContext = function() {
          return Benchmark;
        }, Benchmark;
      }
      /**
       * @return {?}
       */
      function next() {
        var rv = Object(actual.a)(["\n      background-color: #0000001f !important;\n    "]);
        return next = function() {
          return rv;
        }, rv;
      }
      /**
       * @return {?}
       */
      function bound() {
        var result = Object(actual.a)(["\n  margin-left: 10px !important;\n\n  &.linkIsActive {\n    background-color: #0000001f !important;\n  }\n  ", "\n"]);
        return bound = function() {
          return result;
        }, result;
      }
      /**
       * @return {?}
       */
      function hasKey() {
        var result = Object(actual.a)(["\n  /* min-width: 600px; */\n  min-height: 500px;\n\n  /* For wide screen */\n  width: 600px;\n"]);
        return hasKey = function() {
          return result;
        }, result;
      }
      /**
       * @return {?}
       */
      function getter() {
        var val = Object(actual.a)(["\n  flex: 1;\n"]);
        return getter = function() {
          return val;
        }, val;
      }
      /**
       * @return {?}
       */
      function Class() {
        var obj = Object(actual.a)(["\n  height: 34px;\n  margin-right: 14px;\n"]);
        return Class = function() {
          return obj;
        }, obj;
      }
      /**
       * @return {?}
       */
      function clone() {
        var res = Object(actual.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);
        return clone = function() {
          return res;
        }, res;
      }
      $.r(eventName);
      var actual = $(5);
      var main = $(22);
      var template = $(0);
      var element = $.n(template);
      var frame = $(97);
      var where = $(474);
      var el = $.n(where);
      var li = $(484);
      var row = $.n(li);
      var content = $(99);
      var params = $.n(content);
      var me = $(3);
      var dir = $(476);
      var parent = $.n(dir);
      var submit = $(127);
      var input = $.n(submit);
      var start = $(483);
      var s = $.n(start);
      var items = $(374);
      var cfg = $.n(items);
      var $window = $(1);
      var w = $.n($window);
      var p2 = $(4);
      var source = $(15);
      var meta = $(16);
      var l = $(18);
      var line = $(17);
      var emptyJ = $(19);
      var $spy = $(101);
      var opt = $(367);
      var from = $(44);
      var foo = $(13);
      var $el = $(10);
      var opts = $.n($el);
      var target = $(20);
      var e = $(9);
      var gradient = $(414);
      var props = $.n(gradient);
      var comments = $(382);
      var c = $.n(comments);
      var $this = $(379);
      var o = $.n($this);
      var side = $(381);
      var that = $.n(side);
      var i = $(395);
      var child = $.n(i);
      var control = $(397);
      var item = $.n(control);
      var j = $(105);
      var d = $.n(j);
      var def = $(424);
      var errors = $.n(def);
      var update = $(426);
      var throttledUpdate = $.n(update);
      var shadow = $(422);
      var color = $.n(shadow);
      var self = $(272);
      var options = $(8);
      var obj = $(23);
      var data = window.chrome;
      /**
       * @param {Object} options
       * @return {?}
       */
      var initialize = function(options) {
        return{
          list : {
            marginBottom : 2 * options.spacing.unit
          },
          subHeader : {
            backgroundColor : options.palette.background.paper,
            paddingLeft : 3 * options.spacing.unit
          },
          listItemRoot : {
            paddingLeft : 3 * options.spacing.unit
          },
          listItemContainer : {
            "&:hover $deleteBtn" : {
              opacity : 1
            }
          },
          deleteBtn : {
            transition : "opacity 0.2s",
            opacity : 0,
            marginRight : 2 * options.spacing.unit
          },
          fabButton : {
            zIndex : 100,
            position : "fixed",
            bottom : 3 * options.spacing.unit,
            right : 3 * options.spacing.unit
          }
        };
      };
      var componentDef = function(deepDataAndEvents) {
        /**
         * @param {?} cfg
         * @return {?}
         */
        function initialize(cfg) {
          var _this;
          return Object(source.a)(this, initialize), (_this = Object(l.a)(this, Object(line.a)(initialize).call(this, cfg))).state = {
            visibleTabGroups : null,
            hidePeriodic : false
          }, _this.storageListener = _this.refreshSnoozedTabs.bind(Object($spy.a)(Object($spy.a)(_this))), _this.refreshSnoozedTabs(), data.storage.onChanged.addListener(_this.storageListener), _this;
        }
        return Object(emptyJ.a)(initialize, deepDataAndEvents), Object(meta.a)(initialize, [{
          key : "componentDidMount",
          /**
           * @return {undefined}
           */
          value : function() {
            Object(obj.c)(obj.a.SLEEPING_TABS_VIEW);
          }
        }, {
          key : "componentWillUnmount",
          /**
           * @return {undefined}
           */
          value : function() {
            data.storage.onChanged.removeListener(this.storageListener);
          }
        }, {
          key : "refreshSnoozedTabs",
          value : function() {
            var matcherFunction = Object(p2.a)(w.a.mark(function initialize() {
              var restoreScript;
              var is;
              return w.a.wrap(function(self) {
                for (;;) {
                  switch(self.prev = self.next) {
                    case 0:
                      return restoreScript = this.state.hidePeriodic, self.next = 3, ajax(restoreScript);
                    case 3:
                      is = self.sent;
                      this.setState({
                        visibleTabGroups : is
                      });
                    case 5:
                    ;
                    case "end":
                      return self.stop();
                  }
                }
              }, initialize, this);
            }));
            return function() {
              return matcherFunction.apply(this, arguments);
            };
          }()
        }, {
          key : "deleteTab",
          /**
           * @param {Object} event
           * @param {?} evt
           * @return {undefined}
           */
          value : function(event, evt) {
            evt.stopPropagation();
            setTimeout(function() {
              return Object(from.a)([event]);
            }, 150);
          }
        }, {
          key : "wakeupTab",
          /**
           * @param {Object} handler
           * @param {Object} event
           * @return {undefined}
           */
          value : function(handler, event) {
            /** @type {boolean} */
            var r20 = !(2 === event.which || (4 === event.button || event.metaKey));
            setTimeout(function() {
              return Object(from.d)([handler], r20);
            }, 300);
          }
        }, {
          key : "renderTabGroup",
          /**
           * @param {Object} view
           * @param {Object} event
           * @return {?}
           */
          value : function(view, event) {
            var self = this;
            var args = this.props.classes;
            return element.a.createElement(template.Fragment, {
              key : event
            }, element.a.createElement(child.a, {
              disableSticky : true,
              className : args.subHeader
            }, view.timeRange.title), view.tabs.map(function(tab, subKey) {
              return element.a.createElement(o.a, {
                key : subKey,
                button : true,
                classes : {
                  root : args.listItemRoot,
                  container : args.listItemContainer
                },
                /**
                 * @param {?} funcToCall
                 * @return {undefined}
                 */
                onClick : function(funcToCall) {
                  self.wakeupTab(tab, funcToCall);
                }
              }, element.a.createElement(parentTag, {
                src : tab.favicon,
                alt : ""
              }), element.a.createElement(that.a, {
                primary : tab.title,
                secondary : format(view.timeRange, tab),
                primaryTypographyProps : {
                  style : {
                    lineHeight : 1.5,
                    marginBottom : 3
                  }
                }
              }), element.a.createElement(item.a, {
                className : args.deleteBtn
              }, element.a.createElement(params.a, {
                /**
                 * @param {?} funcToCall
                 * @return {?}
                 */
                onClick : function(funcToCall) {
                  return self.deleteTab(tab, funcToCall);
                },
                "aria-label" : "Delete"
              }, element.a.createElement(color.a, null))));
            }));
          }
        }, {
          key : "render",
          /**
           * @return {?}
           */
          value : function() {
            var paths = this.state.visibleTabGroups;
            var option = this.props.classes;
            return paths ? element.a.createElement(nodestring, null, element.a.createElement(opt.Helmet, null, element.a.createElement("title", null, "Sleeping Tabs - Tab Snooze")), paths.length > 0 ? element.a.createElement(c.a, {
              className : option.list
            }, paths.map(this.renderTabGroup.bind(this))) : element.a.createElement(createElement, null), element.a.createElement(customElement, null)) : null;
          }
        }]), initialize;
      }(template.Component);
      var customElement = Object(frame.withStyles)(initialize)(function(el) {
        var c = el.classes;
        return element.a.createElement(d.a, {
          in : true,
          style : {
            transitionDelay : "500ms"
          }
        }, element.a.createElement(errors.a, {
          component : self.a,
          to : options.q,
          target : "_blank",
          color : "secondary",
          "aria-label" : "Add",
          className : c.fabButton
        }, element.a.createElement(throttledUpdate.a, null)));
      });
      /**
       * @return {?}
       */
      var createElement = function() {
        return element.a.createElement(typeName, null, element.a.createElement(cfg.a, null), element.a.createElement("span", null, "No tabs are sleeping"));
      };
      var nodestring = me.d.div(filter());
      var typeName = me.d.div(forProps());
      var parentTag = me.d.img(reduce());
      var component = Object(frame.withStyles)(initialize)(componentDef);
      var doc = $(35);
      var parentNode = $(457);
      var root = $.n(parentNode);
      var map = $(463);
      var values = $.n(map);
      var on = $(466);
      var m = $.n(on);
      var checked = $(465);
      var squares = $.n(checked);
      var div = $(468);
      var all = $.n(div);
      var stack = $(469);
      var bot = $.n(stack);
      var tag = $(470);
      var elements = $.n(tag);
      var inner = $(471);
      var pos = $.n(inner);
      var fragment = $(404);
      var args = $.n(fragment);
      var cell = $(472);
      var parsed = $.n(cell);
      var tasks = $(473);
      var keys = $.n(tasks);
      var pre = $(464);
      var out = $.n(pre);
      var fld = $(456);
      var val = $.n(fld);
      var option = $(459);
      var value = $.n(option);
      var n = $(460);
      var h = $.n(n);
      var img = $(461);
      var cur = $.n(img);
      var $t = $(462);
      var b = $.n($t);
      var env = $(467);
      var v = $.n(env);
      var duration = $(458);
      var t = $.n(duration);
      var elem = $(403);
      var q = $.n(elem);
      var stylesheets = $(454);
      var found = $.n(stylesheets);
      var x = $(370);
      var tpl = $(6);
      var node = $.n(tpl);
      var a = $(96);
      /**
       * @param {?} options
       * @return {?}
       */
      var create = function(options) {
        return element.a.createElement(sTag, {
          onClick : options.onClick
        }, options.combo ? function(query) {
          /** @type {string} */
          var end = query.includes("+") ? "+" : "";
          return query.split(end);
        }(options.combo).map(function($rootScope, i) {
          return element.a.createElement(template.Fragment, {
            key : $rootScope
          }, i > 0 ? element.a.createElement(clonedNode, null) : "", element.a.createElement(nodeName, null, $rootScope));
        }) : "Not Defined");
      };
      var sTag = Object(me.d)(a.a).attrs({
        color : "#F1F3F4"
      })(forIn());
      var nodeName = me.d.div(each());
      var clonedNode = me.d.div(reduceRight());
      var object = $(53);
      var templateNode = $(124);
      var handler = $(39);
      var cacheKey = function(deepDataAndEvents) {
        /**
         * @param {?} reporter
         * @return {?}
         */
        function init(reporter) {
          var stops;
          return Object(source.a)(this, init), (stops = Object(l.a)(this, Object(line.a)(init).call(this, reporter))).state = {}, stops.loadSettings(), window.onfocus = stops.loadSettings.bind(Object($spy.a)(Object($spy.a)(stops))), stops;
        }
        return Object(emptyJ.a)(init, deepDataAndEvents), Object(meta.a)(init, [{
          key : "componentDidMount",
          /**
           * @return {undefined}
           */
          value : function() {
            Object(obj.c)(obj.a.SETTINGS_VIEW);
          }
        }, {
          key : "componentWillUnmount",
          /**
           * @return {undefined}
           */
          value : function() {
            window.onfocus = void 0;
          }
        }, {
          key : "loadSettings",
          value : function() {
            var matcherFunction = Object(p2.a)(w.a.mark(function end() {
              var settings;
              var is;
              var l;
              return w.a.wrap(function(self) {
                for (;;) {
                  switch(self.prev = self.next) {
                    case 0:
                      return self.next = 2, Object(target.b)();
                    case 2:
                      return settings = self.sent, self.next = 5, node.a.commands.getAll();
                    case 5:
                      return is = self.sent, self.next = 8, Object(handler.e)();
                    case 8:
                      l = self.sent;
                      this.setState({
                        settings : settings,
                        commands : is,
                        isPro : l
                      });
                    case 10:
                    ;
                    case "end":
                      return self.stop();
                  }
                }
              }, end, this);
            }));
            return function() {
              return matcherFunction.apply(this, arguments);
            };
          }()
        }, {
          key : "bindSettings",
          /**
           * @param {Object} name
           * @return {?}
           */
          value : function(name) {
            var r20;
            var that = this;
            var prop = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "value";
            var testSource = this.state.settings;
            var ref = testSource[name];
            if (void 0 === ref) {
              throw new Error("Tried to read a unknown settings key '".concat(name, "'"));
            }
            return r20 = {}, Object(main.a)(r20, prop, ref), Object(main.a)(r20, "onChange", function(el) {
              var kh_SettingsHelper = Object(doc.a)({}, testSource, Object(main.a)({}, name, el.target ? el.target[prop] : el));
              Object(target.c)(kh_SettingsHelper);
              that.setState({
                settings : kh_SettingsHelper
              });
            }), r20;
          }
        }, {
          key : "renderGeneralSetting",
          /**
           * @param {Object} params
           * @return {?}
           */
          value : function(params) {
            return element.a.createElement(o.a, {
              key : params.key,
              button : null != params.href,
              component : params.href && "a",
              href : params.href,
              target : params.href && "_blank"
            }, params.icon && element.a.createElement(q.a, null, params.icon), element.a.createElement(that.a, {
              primary : params.title,
              secondary : params.description,
              inset : void 0 === params.icon
            }), element.a.createElement(item.a, null, element.a.createElement(localName, {
              locked : params.locked
            }, params.component)));
          }
        }, {
          key : "renderCheckboxSetting",
          /**
           * @param {Object} event
           * @return {?}
           */
          value : function(event) {
            return this.renderGeneralSetting(Object(doc.a)({}, event, {
              component : element.a.createElement(found.a, this.bindSettings(event.stateKey, "checked"))
            }));
          }
        }, {
          key : "renderDropdownSetting",
          /**
           * @param {Array} handler
           * @return {?}
           */
          value : function(handler) {
            return this.renderGeneralSetting(Object(doc.a)({}, handler, {
              component : element.a.createElement(fieldsString, Object.assign({
                options : handler.options
              }, this.bindSettings(handler.stateKey)))
            }));
          }
        }, {
          key : "renderShortcutSetting",
          /**
           * @param {Object} data
           * @return {?}
           */
          value : function(data) {
            return this.renderGeneralSetting(Object(doc.a)({}, data, {
              key : data.key,
              component : element.a.createElement(create, {
                combo : data.shortcut,
                /**
                 * @return {?}
                 */
                onClick : function() {
                  return node.a.tabs.create({
                    url : options.f
                  });
                }
              })
            }));
          }
        }, {
          key : "renderButtonSetting",
          /**
           * @param {Object} event
           * @return {?}
           */
          value : function(event) {
            return this.renderGeneralSetting(Object(doc.a)({}, event, {
              component : element.a.createElement("div", null)
            }));
          }
        }, {
          key : "render",
          /**
           * @return {?}
           */
          value : function() {
            var items = this;
            var obj = this.state;
            var terse = obj.settings;
            var deps = obj.commands;
            var cls = obj.isPro;
            var option = this.props.classes;
            if (!terse) {
              return null;
            }
            var parameters = opts.a.weekdays().map(function(lab, x) {
              return{
                label : lab,
                value : x
              };
            });
            return element.a.createElement(sLiner, null, element.a.createElement(opt.Helmet, null, element.a.createElement("title", null, "Settings - Tab Snooze")), element.a.createElement(c.a, {
              className : option.list
            }, !cls && element.a.createElement(template.Fragment, null, element.a.createElement(tagToInsert, null, "Cloud Sync"), element.a.createElement(o.a, null, element.a.createElement(q.a, null, element.a.createElement(val.a, null)), element.a.createElement(that.a, {
              primary : element.a.createElement(template.Fragment, null, "Tabs Sync & Backup ", element.a.createElement(templateNode.a, null)),
              secondary : "Disabled"
            }), element.a.createElement(item.a, null, element.a.createElement(hiliteTag, {
              as : "a",
              href : Object(options.u)(),
              target : "_blank"
            }, "Signup / Login")))), element.a.createElement(tagToInsert, null, "General"), this.renderCheckboxSetting({
              icon : element.a.createElement(root.a, null),
              title : "Sound effects",
              description : "Play sounds with app interactions",
              stateKey : "playSoundEffects"
            }), this.renderCheckboxSetting({
              icon : element.a.createElement(root.a, null),
              title : "Wake up sound",
              description : "Play a sound when tabs wake up",
              stateKey : "playNotificationSound"
            }), this.renderCheckboxSetting({
              icon : element.a.createElement(t.a, null),
              title : "Wake up notification",
              description : "Show a desktop notification (top-right corner) when tabs wake up",
              stateKey : "showNotifications"
            }), this.renderDropdownSetting({
              icon : element.a.createElement(value.a, null),
              title : "Toolbar badge",
              description : "Display a tab count on the toolbar moon icon",
              stateKey : "badge",
              options : [{
                label : "Hidden",
                value : object.b
              }, {
                label : "Tabs due today",
                value : object.a
              }, {
                label : "Total sleeping tabs",
                value : object.c
              }]
            }), !cls && this.renderDropdownSetting({
              icon : element.a.createElement(h.a, null),
              title : element.a.createElement(template.Fragment, null, "Smart wakeup ", element.a.createElement(templateNode.a, null)),
              description : "Ask before waking up too many tabs",
              stateKey : "badge",
              locked : !cls,
              options : [4, 5, 6, 7].map(function(x) {
                return{
                  label : "Disabled",
                  value : x
                };
              })
            }), !cls && this.renderGeneralSetting({
              icon : element.a.createElement(cur.a, null),
              title : element.a.createElement(template.Fragment, null, "Dark Mode ", element.a.createElement(templateNode.a, null)),
              locked : !cls,
              description : "Switch on the elegant Tab Snooze dark theme",
              component : element.a.createElement(found.a, {
                checked : false
              })
            }), element.a.createElement(tagToInsert, null, "Preset Snooze Options"), !cls && this.renderGeneralSetting({
              icon : element.a.createElement(b.a, null),
              title : element.a.createElement(template.Fragment, null, "Location Snooze ", element.a.createElement(templateNode.a, null)),
              locked : !cls,
              description : "Snooze tabs to open when you get on your Home/Work device",
              component : element.a.createElement(found.a, {
                checked : false
              })
            }), this.renderDropdownSetting({
              icon : element.a.createElement(values.a, null),
              title : "Tomorrow starts at",
              stateKey : "workdayStart",
              options : [6, 7, 8, 9, 10, 11].map(function(props) {
                return{
                  label : "".concat(props, ":00 AM"),
                  value : props
                };
              })
            }), this.renderDropdownSetting({
              icon : element.a.createElement(out.a, null),
              title : "Evening starts at",
              stateKey : "workdayEnd",
              options : [15, 16, 17, 18, 19, 20, 21, 22].map(function(x) {
                return{
                  label : "".concat(x - 12, ":00 PM"),
                  value : x
                };
              })
            }), this.renderDropdownSetting({
              icon : element.a.createElement(squares.a, null),
              title : "Week starts on",
              stateKey : "weekStartDay",
              options : parameters
            }), this.renderDropdownSetting({
              icon : element.a.createElement(m.a, null),
              title : "Weekend starts on",
              stateKey : "weekEndDay",
              options : parameters
            }), this.renderDropdownSetting({
              icon : element.a.createElement(v.a, null),
              title : "Later Today is",
              stateKey : "laterTodayHoursDelta",
              options : [1, 2, 3, 4, 5].map(function(props) {
                return{
                  label : "in ".concat(props, " hours"),
                  value : props
                };
              })
            }), this.renderDropdownSetting({
              icon : element.a.createElement(all.a, null),
              title : "Someday is",
              stateKey : "somedayMonthsDelta",
              options : [1, 2, 3, 4, 5].map(function(props) {
                return{
                  label : "in ".concat(props, " months"),
                  value : props
                };
              })
            }), !cls && element.a.createElement(template.Fragment, null, element.a.createElement(tagToInsert, null, "Custom Snooze Options ", element.a.createElement(templateNode.a, null)), ["Hours", "Days", "Weeks"].map(function(lab, last) {
              return items.renderGeneralSetting({
                key : String(last),
                icon : element.a.createElement(bot.a, null),
                title : "Custom Snooze Option ".concat(last + 1),
                stateKey : "somedayMonthsDelta",
                locked : true,
                component : element.a.createElement(template.Fragment, null, element.a.createElement("span", {
                  style : {
                    marginRight : 10
                  }
                }, "in"), element.a.createElement(fieldsString, {
                  small : "true",
                  options : [{
                    value : 2,
                    label : "2"
                  }]
                }), element.a.createElement(fieldsString, {
                  small : "true",
                  options : [{
                    value : "days",
                    label : lab
                  }]
                }))
              });
            })), element.a.createElement(tagToInsert, null, "Keyboard Shortcuts ", !cls && element.a.createElement(templateNode.a, null)), deps.map(function(item, idx) {
              return items.renderShortcutSetting({
                key : "" + idx,
                icon : element.a.createElement(elements.a, null),
                title : item.description || "Snooze active tab",
                shortcut : cls ? item.shortcut : "",
                locked : !cls
              });
            }), element.a.createElement(outerHTML, null), element.a.createElement(tagToInsert, null, "Miscellaneous"), this.renderButtonSetting({
              icon : element.a.createElement(args.a, null),
              title : "Loving Tab Snooze?",
              description : "Rate Tab Snooze the Chrome Web Store!",
              href : options.g
            }), this.renderButtonSetting({
              icon : element.a.createElement(pos.a, null),
              title : "Donate to support this free tool",
              description : "Support Tab Snooze single developer",
              href : options.k
            }), this.renderButtonSetting({
              icon : element.a.createElement(parsed.a, null),
              title : "Suggest & vote on new features",
              description : "Tell us about your ideas for Tab Snooze",
              href : options.p
            }), this.renderButtonSetting({
              icon : element.a.createElement(keys.a, null),
              title : "Support",
              description : "Contact us for help, questions, or any feature requests",
              href : "mailto:tabsnoozeapp@gmail.com"
            })));
          }
        }]), init;
      }(template.Component);
      /**
       * @return {?}
       */
      var outerHTML = function() {
        return element.a.createElement(o.a, null, element.a.createElement(that.a, {
          secondary : "Additionally, you can use Arrow keys, Numpad, and Capital letters (L-Later Today, etc.) in the Snooze Popup"
        }));
      };
      var sLiner = me.d.div(runInContext());
      var tagToInsert = Object(me.d)(child.a).attrs({
        disableSticky : true
      })(objectKeys());
      var hiliteTag = Object(me.d)(a.a).attrs({
        color : "#eee"
      })(forEach());
      var localName = me.d.div(isExtensible(), function(data) {
        return data.locked && Object(me.c)(promote());
      });
      var fieldsString = Object(me.d)(x.a).attrs({
        component : "select"
      })(objectValues(), function(model) {
        return model.small ? 94 : 200;
      });
      var cached = Object(frame.withStyles)(function(opts) {
        return{
          list : {
            marginBottom : 2 * opts.spacing.unit
          }
        };
      })(cacheKey);
      var aura = $(510);
      var cNode = $(509);
      var active = $(479);
      var record = $.n(active);
      var Zt = Object(frame.withStyles)(function(body) {
        return{
          navIcon : {
            marginRight : 10
          },
          openInTabBtn : Object(main.a)({
            color : "#fff",
            display : "none",
            marginRight : -10
          }, body.breakpoints.down(650), {
            display : "block"
          })
        };
      })(function(widget) {
        var c = widget.classes;
        var node = widget.location;
        return element.a.createElement(template.Fragment, null, element.a.createElement(el.a, {
          position : "fixed"
        }, element.a.createElement(parent.a, null, element.a.createElement("a", {
          href : options.r,
          target : "_blank",
          rel : "noopener noreferrer"
        }, element.a.createElement(tn, {
          src : $(478)
        })), element.a.createElement(nodeStr, {
          component : aura.a,
          to : options.o
        }, element.a.createElement(cfg.a, {
          className : c.navIcon
        }), " Sleeping Tabs"), element.a.createElement(nodeStr, {
          component : aura.a,
          to : options.n
        }, element.a.createElement(input.a, {
          className : c.navIcon
        }), " Settings"), element.a.createElement(tagname, null), element.a.createElement(record.a, {
          title : "Open in a tab"
        }, element.a.createElement(params.a, {
          component : aura.a,
          to : node.pathname,
          target : "_blank",
          className : c.openInTabBtn
        }, element.a.createElement(s.a, null))))), element.a.createElement(html_obj, null, element.a.createElement(parent.a, {
          style : {
            opacity : 0
          }
        }), element.a.createElement(objStr, null, element.a.createElement(cNode.a, {
          path : options.o,
          component : component
        }), element.a.createElement(cNode.a, {
          path : options.n,
          component : cached
        }))));
      });
      var html_obj = me.d.div(clone());
      var tn = me.d.img(Class());
      var tagname = me.d.div(getter());
      var objStr = me.d.div(hasKey());
      var nodeStr = Object(me.d)(row.a).attrs({
        activeClassName : "linkIsActive",
        replace : true
      })(bound(), function(tab) {
        return tab.active && Object(me.c)(next());
      });
      $.d(eventName, "default", function() {
        return Zt;
      });
    }
  }]);
  