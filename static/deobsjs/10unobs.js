(window.webpackJsonp = window.webpackJsonp || []).push([[10], {
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
           * @param {?} opt_attributes
           * @return {undefined}
           */
          onChange : function(opt_attributes) {
            /** @type {number} */
            var id = parseInt(opt_attributes.target.value);
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
     * @param {?} dataAndEvents
     * @param {?} i
     * @param {Object} $
     * @return {undefined}
     */
    386 : function(dataAndEvents, i, $) {
      /**
       * @return {?}
       */
      function filter() {
        var event = Object(options.a)(["\n  font-size: 20px;\n"]);
        return filter = function() {
          return event;
        }, event;
      }
      /**
       * @return {?}
       */
      function hasKey() {
        var result = Object(options.a)(["\n  text-align: center;\n"]);
        return hasKey = function() {
          return result;
        }, result;
      }
      /**
       * @return {?}
       */
      function reduce() {
        var rval = Object(options.a)(["\n  display: flex;\n"]);
        return reduce = function() {
          return rval;
        }, rval;
      }
      /**
       * @param {Array} codeSegments
       * @return {?}
       */
      function require(codeSegments) {
        var REPORT_ITEMSIZE = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        /** @type {Array} */
        var ret = [];
        /** @type {number} */
        var i = 0;
        for (;i < codeSegments.length;i++) {
          ret.push({
            value : i * REPORT_ITEMSIZE,
            label : codeSegments[i]
          });
        }
        return ret;
      }
      $.d(i, "d", function() {
        return update;
      });
      $.d(i, "e", function() {
        return create;
      });
      $.d(i, "b", function() {
        return initialize;
      });
      $.d(i, "c", function() {
        return _data;
      });
      $.d(i, "a", function() {
        return parse;
      });
      var options = $(5);
      var object = $(393);
      var style = $(0);
      var target = $.n(style);
      var that = $(3);
      var li = $(10);
      var opts = $.n(li);
      var content = $(387);
      var obj = $.n(content);
      var el = $(370);
      var e = $(9);
      /** @type {Array} */
      var parameters = [{
        value : "daily",
        label : "Daily"
      }, {
        value : "weekly",
        label : "Weekly"
      }, {
        value : "monthly",
        label : "Monthly"
      }, {
        value : "yearly",
        label : "Yearly"
      }];
      var mod = require(opts.a.weekdays());
      var actions = require(opts.a.monthsShort());
      var Block = require(function(opt_attributes) {
        /** @type {Array} */
        var rulesets = [];
        /** @type {number} */
        var paths = 1;
        for (;paths <= opt_attributes;paths++) {
          rulesets.push(Object(e.q)(paths));
        }
        return rulesets;
      }(31));
      var nodes = require(function() {
        /** @type {Array} */
        var rulesets = [];
        /** @type {number} */
        var hour = 0;
        for (;hour < 24;hour++) {
          /** @type {string} */
          var paths = hour >= 12 ? "pm" : "am";
          /** @type {number} */
          var caseSensitive = hour % 12;
          if (0 === caseSensitive) {
            /** @type {number} */
            caseSensitive = 12;
          }
          rulesets.push("".concat(caseSensitive, ":00 ").concat(paths));
          rulesets.push("".concat(caseSensitive, ":30 ").concat(paths));
        }
        return rulesets;
      }(), 0.5);
      /**
       * @param {?} map
       * @return {?}
       */
      var update = function(map) {
        return target.a.createElement(el.a, Object.assign({
          options : parameters,
          autoFocus : true
        }, map));
      };
      /**
       * @param {Object} options
       * @return {?}
       */
      var create = function(options) {
        var old = options.value;
        var userOnChange = options.onChange;
        return target.a.createElement(fieldsString, null, mod.map(function(tweak, name) {
          return target.a.createElement(nodeStr, {
            key : name
          }, target.a.createElement(tagToInsert, null, tweak.label[0]), target.a.createElement(obj.a, {
            checked : old[name],
            /**
             * @return {undefined}
             */
            onChange : function() {
              var attributes = Object(object.a)(old);
              /** @type {boolean} */
              attributes[name] = !old[name];
              userOnChange(attributes);
            },
            color : "primary",
            style : {
              padding : 10
            }
          }));
        }));
      };
      /**
       * @param {?} map
       * @return {?}
       */
      var initialize = function(map) {
        return target.a.createElement(el.a, Object.assign({
          options : Block
        }, map));
      };
      /**
       * @param {?} data
       * @return {?}
       */
      var _data = function(data) {
        return target.a.createElement(el.a, Object.assign({
          options : nodes
        }, data));
      };
      /**
       * @param {Object} options
       * @return {?}
       */
      var parse = function(options) {
        var h = options.value;
        var day = h.day;
        var month = h.month;
        var userOnChange = options.onChange;
        return target.a.createElement(fieldsString, null, target.a.createElement(el.a, {
          options : actions,
          value : month,
          /**
           * @param {string} opt_attributes
           * @return {?}
           */
          onChange : function(opt_attributes) {
            return userOnChange({
              day : day,
              month : opt_attributes
            });
          },
          style : {
            marginRight : 16
          }
        }), target.a.createElement(el.a, {
          options : Block,
          value : day,
          /**
           * @param {string} opt_attributes
           * @return {?}
           */
          onChange : function(opt_attributes) {
            return userOnChange({
              day : opt_attributes,
              month : month
            });
          }
        }));
      };
      var fieldsString = that.d.div(reduce());
      var nodeStr = that.d.div(hasKey());
      var tagToInsert = that.d.div(filter());
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} ctx
     * @param {?} require
     * @return {undefined}
     */
    387 : function(dataAndEvents, ctx, require) {
      var flag = require(7);
      Object.defineProperty(ctx, "__esModule", {
        value : true
      });
      Object.defineProperty(ctx, "default", {
        enumerable : true,
        /**
         * @return {?}
         */
        get : function() {
          return obj.default;
        }
      });
      var obj = flag(require(388));
    },
    /**
     * @param {?} dataAndEvents
     * @param {Object} object
     * @param {?} require
     * @return {undefined}
     */
    388 : function(dataAndEvents, object, require) {
      /**
       * @param {Object} node
       * @return {?}
       */
      function create(node) {
        var pn = node.checkedIcon;
        var item = node.classes;
        var className = node.className;
        var value = node.color;
        var icon = node.icon;
        var copies = node.indeterminate;
        var len = node.indeterminateIcon;
        var sib = node.inputProps;
        var nodeValue = (0, desc.default)(node, ["checkedIcon", "classes", "className", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps"]);
        return opts.default.createElement(obj.default, (0, track.default)({
          type : "checkbox",
          checkedIcon : copies ? len : pn,
          className : (0, option.default)((0, def.default)({}, item.indeterminate, copies), className),
          classes : {
            root : (0, option.default)(item.root, item["color".concat((0, util.capitalize)(value))]),
            checked : item.checked,
            disabled : item.disabled
          },
          inputProps : (0, track.default)({
            "data-indeterminate" : copies
          }, sib),
          icon : copies ? len : icon
        }, nodeValue));
      }
      var $ = require(7);
      Object.defineProperty(object, "__esModule", {
        value : true
      });
      object.default = object.styles = void 0;
      var track = $(require(12));
      var def = $(require(29));
      var desc = $(require(14));
      var opts = $(require(0));
      var option = ($(require(2)), $(require(37)));
      var obj = $(require(385));
      var opt = $(require(389));
      var item = $(require(390));
      var self = $(require(391));
      var util = require(95);
      var property = $(require(38));
      /**
       * @param {Object} data
       * @return {?}
       */
      var callback = function(data) {
        return{
          root : {
            color : data.palette.text.secondary
          },
          checked : {},
          disabled : {},
          indeterminate : {},
          colorPrimary : {
            "&$checked" : {
              color : data.palette.primary.main
            },
            "&$disabled" : {
              color : data.palette.action.disabled
            }
          },
          colorSecondary : {
            "&$checked" : {
              color : data.palette.secondary.main
            },
            "&$disabled" : {
              color : data.palette.action.disabled
            }
          }
        };
      };
      /** @type {function (Object): ?} */
      object.styles = callback;
      create.defaultProps = {
        checkedIcon : opts.default.createElement(item.default, null),
        color : "secondary",
        icon : opts.default.createElement(opt.default, null),
        indeterminate : false,
        indeterminateIcon : opts.default.createElement(self.default, null)
      };
      var prototype = (0, property.default)(callback, {
        name : "MuiCheckbox"
      })(create);
      object.default = prototype;
    },
    /**
     * @param {?} dataAndEvents
     * @param {Object} object
     * @param {?} $sanitize
     * @return {undefined}
     */
    389 : function(dataAndEvents, object, $sanitize) {
      var getOptions = $sanitize(7);
      Object.defineProperty(object, "__esModule", {
        value : true
      });
      object.default = void 0;
      var opts = getOptions($sanitize(0));
      var opt = getOptions($sanitize(366));
      var obj = getOptions($sanitize(158));
      var resolved = opts.default.createElement("path", {
        d : "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
      });
      /**
       * @param {?} styles
       * @return {?}
       */
      var fromIndex = function(styles) {
        return opts.default.createElement(obj.default, styles, resolved);
      };
      /** @type {string} */
      (fromIndex = (0, opt.default)(fromIndex)).muiName = "SvgIcon";
      var i = fromIndex;
      object.default = i;
    },
    /**
     * @param {?} dataAndEvents
     * @param {Object} object
     * @param {?} $sanitize
     * @return {undefined}
     */
    390 : function(dataAndEvents, object, $sanitize) {
      var getOptions = $sanitize(7);
      Object.defineProperty(object, "__esModule", {
        value : true
      });
      object.default = void 0;
      var opts = getOptions($sanitize(0));
      var opt = getOptions($sanitize(366));
      var obj = getOptions($sanitize(158));
      var resolved = opts.default.createElement("path", {
        d : "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
      });
      /**
       * @param {?} styles
       * @return {?}
       */
      var fromIndex = function(styles) {
        return opts.default.createElement(obj.default, styles, resolved);
      };
      /** @type {string} */
      (fromIndex = (0, opt.default)(fromIndex)).muiName = "SvgIcon";
      var i = fromIndex;
      object.default = i;
    },
    /**
     * @param {?} dataAndEvents
     * @param {Object} object
     * @param {?} $sanitize
     * @return {undefined}
     */
    391 : function(dataAndEvents, object, $sanitize) {
      var getOptions = $sanitize(7);
      Object.defineProperty(object, "__esModule", {
        value : true
      });
      object.default = void 0;
      var opts = getOptions($sanitize(0));
      var opt = getOptions($sanitize(366));
      var obj = getOptions($sanitize(158));
      var resolved = opts.default.createElement("path", {
        d : "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
      });
      /**
       * @param {?} styles
       * @return {?}
       */
      var fromIndex = function(styles) {
        return opts.default.createElement(obj.default, styles, resolved);
      };
      /** @type {string} */
      (fromIndex = (0, opt.default)(fromIndex)).muiName = "SvgIcon";
      var i = fromIndex;
      object.default = i;
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} opt_this
     * @param {Object} f
     * @return {undefined}
     */
    393 : function(dataAndEvents, opt_this, f) {
      /**
       * @param {?} selector
       * @return {?}
       */
      function init(selector) {
        return function(s) {
          if (Array.isArray(s)) {
            /** @type {number} */
            var k = 0;
            /** @type {Array} */
            var d = new Array(s.length);
            for (;k < s.length;k++) {
              d[k] = s[k];
            }
            return d;
          }
        }(selector) || (function(array) {
          if (Symbol.iterator in Object(array) || "[object Arguments]" === Object.prototype.toString.call(array)) {
            return Array.from(array);
          }
        }(selector) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        }());
      }
      f.d(opt_this, "a", function() {
        return init;
      });
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} r
     * @param {Object} $
     * @return {undefined}
     */
    516 : function(dataAndEvents, r, $) {
      /**
       * @return {?}
       */
      function filter() {
        var event = Object(object.a)(["\n  width: 100%;\n  margin-top: 10px;\n"]);
        return filter = function() {
          return event;
        }, event;
      }
      /**
       * @return {?}
       */
      function hasKey() {
        var result = Object(object.a)(["\n  flex: 1;\n"]);
        return hasKey = function() {
          return result;
        }, result;
      }
      /**
       * @return {?}
       */
      function each() {
        var obj = Object(object.a)(["\n  font-size: 20px;\n  margin-top: 24px;\n  margin-bottom: 6px;\n  text-align: center;\n  /* color: #999; */\n  color: ", ";\n"]);
        return each = function() {
          return obj;
        }, obj;
      }
      /**
       * @return {?}
       */
      function reduce() {
        var rval = Object(object.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* justify-content: center; */\n  padding-top: 14px;\n"]);
        return reduce = function() {
          return rval;
        }, rval;
      }
      $.r(r);
      $.d(r, "default", function() {
        return w;
      });
      var object = $(5);
      var opts = $(22);
      var doc = $(15);
      var meta = $(16);
      var actual = $(18);
      var $window = $(17);
      var p2 = $(19);
      var that = $(0);
      var target = $.n(that);
      var options = $(3);
      var update = $(10);
      var throttledUpdate = $.n(update);
      var obj = $(104);
      var parent = $(121);
      var child = $.n(parent);
      var c = $(386);
      var row = $(96);
      var w = function(deepDataAndEvents) {
        /**
         * @param {?} expr
         * @return {?}
         */
        function filter(expr) {
          var state;
          return Object(doc.a)(this, filter), (state = Object(actual.a)(this, Object($window.a)(filter).call(this, expr))).state = {
            periodType : "weekly",
            selectedHour : 9,
            selectedMonth : throttledUpdate()().month(),
            selectedDay : throttledUpdate()().date() - 1,
            selectedWeekdays : [false, false, false, false, false, false, false]
          }, state.state.selectedWeekdays[throttledUpdate()().weekday()] = true, state;
        }
        return Object(p2.a)(filter, deepDataAndEvents), Object(meta.a)(filter, [{
          key : "onSnoozeClicked",
          /**
           * @return {undefined}
           */
          value : function() {
            var query;
            var inst = this.state;
            var result = inst.periodType;
            var hour = inst.selectedHour;
            var date = inst.selectedDay;
            var origMonth = inst.selectedMonth;
            var camelKey = inst.selectedWeekdays;
            if ("daily" === result && (query = {
              type : "daily",
              hour : hour
            }), "weekly" === result) {
              var days = function(key) {
                return key.map(function(optional, match) {
                  return optional ? match : -1;
                }).filter(function(dataAndEvents) {
                  return dataAndEvents >= 0;
                });
              }(camelKey);
              if (0 === days.length) {
                return;
              }
              query = {
                type : "weekly",
                hour : hour,
                days : days
              };
            }
            if ("monthly" === result && (query = {
              type : "monthly",
              hour : hour,
              day : date
            }), "yearly" === result && (query = {
              type : "yearly",
              hour : hour,
              date : [origMonth, date]
            }), !query) {
              throw new Error("unrecognized periodType");
            }
            this.props.onPeriodSelected(query);
          }
        }, {
          key : "render",
          /**
           * @return {?}
           */
          value : function() {
            var self = this;
            var visible = this.props.visible;
            var pos = this.state.periodType;
            /**
             * @param {string} name
             * @return {?}
             */
            var getSyncData = function(name) {
              return{
                value : self.state[name],
                /**
                 * @param {string} value
                 * @return {?}
                 */
                onChange : function(value) {
                  return self.setState(Object(opts.a)({}, name, value.target ? value.target.value : value));
                }
              };
            };
            return target.a.createElement(obj.a, {
              visible : visible
            }, target.a.createElement(fieldsString, null, target.a.createElement(tagToInsert, null, "Wake up this tab"), target.a.createElement(c.d, getSyncData("periodType")), target.a.createElement(child.a, {
              in : "weekly" === pos
            }, target.a.createElement(that.Fragment, null, target.a.createElement(tagToInsert, null, "on these days"), target.a.createElement(c.e, getSyncData("selectedWeekdays")))), target.a.createElement(child.a, {
              in : "monthly" === pos
            }, target.a.createElement(that.Fragment, null, target.a.createElement(tagToInsert, null, "on this day"), target.a.createElement(c.b, getSyncData("selectedDay")))), target.a.createElement(child.a, {
              in : "yearly" === pos
            }, target.a.createElement(that.Fragment, null, target.a.createElement(tagToInsert, null, "on this date"), target.a.createElement(c.a, {
              value : {
                day : this.state.selectedDay,
                month : this.state.selectedMonth
              },
              /**
               * @param {?} options
               * @return {?}
               */
              onChange : function(options) {
                var day = options.day;
                var month = options.month;
                return self.setState({
                  selectedDay : day,
                  selectedMonth : month
                });
              }
            }))), target.a.createElement(tagToInsert, null, "at this hour"), target.a.createElement(c.c, getSyncData("selectedHour")), target.a.createElement(nodeStr, null), target.a.createElement(parentTag, {
              onMouseDown : this.onSnoozeClicked.bind(this)
            }, "SNOOZE")));
          }
        }]), filter;
      }(that.Component);
      var fieldsString = options.d.div(reduce());
      var tagToInsert = options.d.div(each(), function(theme) {
        return theme.theme.snoozePanel.footerTextColor;
      });
      var nodeStr = options.d.div(hasKey());
      var parentTag = Object(options.d)(row.a)(filter());
    }
  }]);
  