(window.webpackJsonp = window.webpackJsonp || []).push([[6], {
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
      function forEach() {
        var context = Object(options.a)(["\n  font-weight: 300;\n  font-size: 42px;\n  color: #1f1f1f;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  text-align: center;\n"]);
        return forEach = function() {
          return context;
        }, context;
      }
      /**
       * @return {?}
       */
      function clone() {
        var res = Object(options.a)(["\n  position: absolute;\n  top: ", "px;\n  left: ", "px;\n"]);
        return clone = function() {
          return res;
        }, res;
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
      function each() {
        var obj = Object(options.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  height: 100%;\n\n  /* background: #fff url(", ")\n    no-repeat bottom right; */\n"]);
        return each = function() {
          return obj;
        }, obj;
      }
      $.d(i, "a", function() {
        return O;
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
      var O = function(deepDataAndEvents) {
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
      var tagToInsert = me.d.div(each(), $(372));
      var nodeStr = me.d.div(reduce(), function(dataAndEvents) {
        return dataAndEvents.noPadding ? 0 : 18;
      });
      var fieldsString = me.d.img.attrs({
        src : $(373)
      })(clone(), 18, 18);
      var parentTag = me.d.div(forEach());
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
    374 : function(dataAndEvents, obj, require) {
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
        d : "M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"
      })), "Hotel");
      obj.default = value;
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    486 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/congrats.78110b92.png";
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} r
     * @param {Object} $
     * @return {undefined}
     */
    512 : function(dataAndEvents, r, $) {
      /**
       * @return {?}
       */
      function filter() {
        var event = Object(doc.a)([""]);
        return filter = function() {
          return event;
        }, event;
      }
      $.r(r);
      $.d(r, "default", function() {
        return x;
      });
      var doc = $(5);
      var actual = $(15);
      var options = $(16);
      var meta = $(18);
      var object = $(17);
      var opts = $(19);
      var template = $(0);
      var element = $.n(template);
      var that = $(3);
      var pos = $(8);
      var obj = $(371);
      var el = $(96);
      var content = $(374);
      var c = $.n(content);
      var $window = $(272);
      var x = function(deepDataAndEvents) {
        /**
         * @return {?}
         */
        function bound() {
          return Object(actual.a)(this, bound), Object(meta.a)(this, Object(object.a)(bound).apply(this, arguments));
        }
        return Object(opts.a)(bound, deepDataAndEvents), Object(options.a)(bound, [{
          key : "render",
          /**
           * @return {?}
           */
          value : function() {
            return element.a.createElement(obj.a, {
              image : $(486),
              headline : "Awesome! You snoozed your first Tab!",
              subheader : element.a.createElement(template.Fragment, null, "Your tab will sleep and magically reopen when you asked for it.", element.a.createElement("br", null), "You can always wake it up earlier if you need to from the Sleeping Tabs list."),
              closeBtnText : "Got it, thanks!"
            }, element.a.createElement(tagToInsert, null, element.a.createElement(el.a, {
              raised : "true",
              as : $window.a,
              color : "#4A90E2",
              to : pos.o,
              target : "_blank",
              /**
               * @return {?}
               */
              onClick : function() {
                return window.close();
              }
            }, element.a.createElement(c.a, null), " Sleeping Tabs")));
          }
        }]), bound;
      }(template.Component);
      var tagToInsert = that.d.div(filter());
    }
  }]);
  