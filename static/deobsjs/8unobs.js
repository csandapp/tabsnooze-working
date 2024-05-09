(window.webpackJsonp = window.webpackJsonp || []).push([[8], {
    /**
     * @param {?} dataAndEvents
     * @param {?} ctx
     * @param {?} require
     * @return {undefined}
     */
    369 : function(dataAndEvents, ctx, require) {
      /**
       * @param {?} e
       * @param {?} deepDataAndEvents
       * @return {?}
       */
      function getChildren(e, deepDataAndEvents) {
        return obj.default.cloneElement(e, {
          className : (0, flagMsg.default)(e.props.className, deepDataAndEvents)
        });
      }
      var flag = require(7);
      Object.defineProperty(ctx, "__esModule", {
        value : true
      });
      /** @type {function (?, ?): ?} */
      ctx.cloneElementWithClassName = getChildren;
      /**
       * @param {?} iterator
       * @param {?} deepDataAndEvents
       * @return {?}
       */
      ctx.cloneChildrenWithClassName = function(iterator, deepDataAndEvents) {
        return obj.default.Children.map(iterator, function(elem) {
          return obj.default.isValidElement(elem) && getChildren(elem, deepDataAndEvents);
        });
      };
      /**
       * @param {Event} startEvent
       * @param {string} whitespace
       * @return {?}
       */
      ctx.isMuiElement = function(startEvent, whitespace) {
        return obj.default.isValidElement(startEvent) && -1 !== whitespace.indexOf(startEvent.type.muiName);
      };
      /**
       * @param {Object} p
       * @param {Object} v
       * @return {undefined}
       */
      ctx.setRef = function(p, v) {
        if ("function" === typeof p) {
          p(v);
        } else {
          if (p) {
            /** @type {Object} */
            p.current = v;
          }
        }
      };
      var obj = flag(require(0));
      var flagMsg = flag(require(37));
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} i
     * @param {Object} $
     * @return {undefined}
     */
    371 : function(dataAndEvents, i, $) {
      /**
       * @return {?}
       */
      function hasKey() {
        var result = Object(options.a)(["\n  margin-top: 20px;\n  color: #999;\n  border-radius: 10px;\n  padding: 8px 12px;\n"]);
        return hasKey = function() {
          return result;
        }, result;
      }
      /**
       * @return {?}
       */
      function filter() {
        var event = Object(options.a)(["\n  font-weight: 400;\n  opacity: 0.7;\n  font-size: 22px;\n  color: #333333;\n  line-height: 33px;\n  margin-bottom: 38px;\n  text-align: center;\n  padding: 0 30px;\n"]);
        return filter = function() {
          return event;
        }, event;
      }
      /**
       * @return {?}
       */
      function clone() {
        var res = Object(options.a)(["\n  font-weight: 300;\n  font-size: 42px;\n  color: #1f1f1f;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  text-align: center;\n"]);
        return clone = function() {
          return res;
        }, res;
      }
      /**
       * @return {?}
       */
      function each() {
        var obj = Object(options.a)(["\n  position: absolute;\n  top: ", "px;\n  left: ", "px;\n"]);
        return each = function() {
          return obj;
        }, obj;
      }
      /**
       * @return {?}
       */
      function reduce() {
        var rval = Object(options.a)(["\n  padding: ", "px;\n  padding-top: 60px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);
        return reduce = function() {
          return rval;
        }, rval;
      }
      /**
       * @return {?}
       */
      function forProps() {
        var result = Object(options.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  height: 100%;\n\n  /* background: #fff url(", ")\n    no-repeat bottom right; */\n"]);
        return forProps = function() {
          return result;
        }, result;
      }
      $.d(i, "a", function() {
        return j;
      });
      var options = $(5);
      var object = $(15);
      var opts = $(16);
      var doc = $(18);
      var meta = $(17);
      var actual = $(19);
      var that = $(0);
      var target = $.n(that);
      var me = $(3);
      var opt = $(367);
      var where = $(98);
      var el = $.n(where);
      var $window = $(96);
      var j = function(deepDataAndEvents) {
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
            var result = this.props;
            var data = result.image;
            var text = result.title;
            var hz = result.headline;
            var members = result.subheader;
            var a = result.children;
            var msg = result.closeBtnText;
            var error = result.noPadding;
            return target.a.createElement(that.Fragment, null, target.a.createElement(opt.Helmet, null, target.a.createElement("title", null, text)), target.a.createElement(el.a, {
              in : true,
              timeout : 700
            }, target.a.createElement(tagToInsert, null, target.a.createElement(fieldsString, null), target.a.createElement(nodeStr, {
              noPadding : error
            }, target.a.createElement("picture", null, target.a.createElement("source", {
              srcSet : "".concat(data, " 2x")
            }), target.a.createElement("img", {
              src : data,
              alt : ""
            })), target.a.createElement(parentTag, null, hz), target.a.createElement(nodestring, null, members), a, null !== msg && target.a.createElement(customElement, null, msg || "No thanks")))));
          }
        }]), bound;
      }(that.Component);
      var tagToInsert = me.d.div(forProps(), $(372));
      var nodeStr = me.d.div(reduce(), function(dataAndEvents) {
        return dataAndEvents.noPadding ? 0 : 18;
      });
      var fieldsString = me.d.img.attrs({
        src : $(373)
      })(each(), 18, 18);
      var parentTag = me.d.div(clone());
      var nodestring = me.d.div(filter());
      var customElement = Object(me.d)($window.a).attrs(function(dataAndEvents) {
        return{
          color : "#fff",
          /**
           * @return {?}
           */
          onClick : function() {
            return window.close();
          }
        };
      })(hasKey());
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    372 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/bg_decoration.77b5866e.svg";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    373 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/logo.c04c672a.svg";
    },
    /**
     * @param {?} dataAndEvents
     * @param {Object} obj
     * @param {?} require
     * @return {undefined}
     */
    489 : function(dataAndEvents, obj, require) {
      var common = require(73);
      Object.defineProperty(obj, "__esModule", {
        value : true
      });
      obj.default = void 0;
      var opts = common(require(0));
      var value = (0, common(require(94)).default)(opts.default.createElement(opts.default.Fragment, null, opts.default.createElement("path", {
        fill : "none",
        d : "M0 0h24v24H0z"
      }), opts.default.createElement("path", {
        d : "M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"
      })), "School");
      obj.default = value;
    },
    /**
     * @param {?} dataAndEvents
     * @param {Object} obj
     * @param {?} require
     * @return {undefined}
     */
    490 : function(dataAndEvents, obj, require) {
      var common = require(73);
      Object.defineProperty(obj, "__esModule", {
        value : true
      });
      obj.default = void 0;
      var opts = common(require(0));
      var value = (0, common(require(94)).default)(opts.default.createElement(opts.default.Fragment, null, opts.default.createElement("path", {
        fill : "none",
        d : "M0 0h24v24H0z"
      }), opts.default.createElement("path", {
        d : "M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"
      })), "BugReport");
      obj.default = value;
    },
    /**
     * @param {?} dataAndEvents
     * @param {Object} obj
     * @param {?} require
     * @return {undefined}
     */
    491 : function(dataAndEvents, obj, require) {
      var common = require(73);
      Object.defineProperty(obj, "__esModule", {
        value : true
      });
      obj.default = void 0;
      var opts = common(require(0));
      var value = (0, common(require(94)).default)(opts.default.createElement(opts.default.Fragment, null, opts.default.createElement("defs", null, opts.default.createElement("path", {
        id : "a",
        d : "M0 0h24v24H0V0z"
      })), opts.default.createElement("path", {
        d : "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"
      })), "ImportContacts");
      obj.default = value;
    },
    /**
     * @param {?} dataAndEvents
     * @param {Object} obj
     * @param {?} require
     * @return {undefined}
     */
    492 : function(dataAndEvents, obj, require) {
      var common = require(73);
      Object.defineProperty(obj, "__esModule", {
        value : true
      });
      obj.default = void 0;
      var opts = common(require(0));
      var value = (0, common(require(94)).default)(opts.default.createElement(opts.default.Fragment, null, opts.default.createElement("path", {
        d : "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"
      }), opts.default.createElement("path", {
        fill : "none",
        d : "M0 0h24v24H0z"
      })), "Textsms");
      obj.default = value;
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} r
     * @param {Object} $
     * @return {undefined}
     */
    514 : function(dataAndEvents, r, $) {
      /**
       * @return {?}
       */
      function filter() {
        var event = Object(object.a)(["\n  margin-bottom: 100px;\n"]);
        return filter = function() {
          return event;
        }, event;
      }
      $.r(r);
      $.d(r, "default", function() {
        return B;
      });
      var object = $(5);
      var opts = $(15);
      var doc = $(16);
      var meta = $(18);
      var actual = $(17);
      var $window = $(19);
      var style = $(0);
      var target = $.n(style);
      var that = $(3);
      var a = $(8);
      var options = $(9);
      var obj = $(371);
      var where = $(490);
      var el = $.n(where);
      var gradient = $(489);
      var props = $.n(gradient);
      var content = $(404);
      var c = $.n(content);
      var module = $(492);
      var params = $.n(module);
      var tpl = $(491);
      var node = $.n(tpl);
      var li = $(382);
      var parent = $.n(li);
      var submit = $(379);
      var input = $.n(submit);
      var start = $(381);
      var s = $.n(start);
      var control = $(403);
      var item = $.n(control);
      var opt = $(367);
      var B = function(deepDataAndEvents) {
        /**
         * @return {?}
         */
        function bound() {
          return Object(opts.a)(this, bound), Object(meta.a)(this, Object(actual.a)(bound).apply(this, arguments));
        }
        return Object($window.a)(bound, deepDataAndEvents), Object(doc.a)(bound, [{
          key : "render",
          /**
           * @return {?}
           */
          value : function() {
            /** @type {Array} */
            var mod = [{
              primary : "Beta instructions & FAQ",
              secondary : "What you should know about Tab Snooze Beta",
              icon : target.a.createElement(props.a, null),
              href : a.c
            }, {
              primary : "Report a bug",
              secondary : "Something not working? not looking right? Please tell us!",
              icon : target.a.createElement(el.a, null),
              href : a.i
            }, {
              primary : "View Changelog",
              secondary : "See what we've been working on",
              icon : target.a.createElement(node.a, null),
              href : a.e
            }, {
              primary : "Suggest & vote on new features",
              secondary : "Tell us about your ideas for Tab Snooze",
              icon : target.a.createElement(c.a, null),
              href : a.p
            }, {
              primary : "Talk to us",
              secondary : "Message us on Facebook Messenger about anything",
              icon : target.a.createElement(params.a, null),
              href : a.i
            }];
            return target.a.createElement(obj.a, {
              title : "Tab Snooze Beta",
              image : "/images/beta_extension_icon_128.png",
              headline : "Tab Snooze Beta (v".concat(options.a, ")"),
              subheader : "Thank you for helping us test Tab Snooze, you're awesome!",
              closeBtnText : null
            }, target.a.createElement(tagToInsert, null, target.a.createElement(opt.Helmet, null, target.a.createElement("link", {
              rel : "icon",
              href : "/images/beta_extension_icon_128.png"
            })), target.a.createElement(parent.a, null, mod.map(function(options, subKey) {
              return target.a.createElement(input.a, {
                key : subKey,
                component : "a",
                button : true,
                href : options.href,
                target : "_blank"
              }, target.a.createElement(item.a, null, options.icon), target.a.createElement(s.a, {
                primary : options.primary,
                secondary : options.secondary
              }));
            }))));
          }
        }], [{
          key : "open",
          /**
           * @return {undefined}
           */
          value : function() {
            Object(options.i)(a.d);
          }
        }]), bound;
      }(style.Component);
      var tagToInsert = that.d.div(filter());
    }
  }]);
  