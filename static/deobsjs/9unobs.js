(window.webpackJsonp = window.webpackJsonp || []).push([[9], {
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    493 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/tutorial_article_nav.ed30fbc1.svg";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    494 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/tutorial_article.3b964d66.svg";
    },
    /**
     * @param {Object} module
     * @param {?} dataAndEvents
     * @param {Object} point
     * @return {undefined}
     */
    495 : function(module, dataAndEvents, point) {
      /** @type {string} */
      module.exports = point.p + "static/media/tutorial_bubble.ce1c655f.png";
    },
    /**
     * @param {?} dataAndEvents
     * @param {?} r
     * @param {Object} $
     * @return {undefined}
     */
    515 : function(dataAndEvents, r, $) {
      /**
       * @return {?}
       */
      function filter() {
        var event = Object(options.a)(["\n  flex: 1;\n"]);
        return filter = function() {
          return event;
        }, event;
      }
      /**
       * @return {?}
       */
      function hasKey() {
        var result = Object(options.a)(["\n  position: absolute;\n  top: 300px;\n  right: -200px;\n"]);
        return hasKey = function() {
          return result;
        }, result;
      }
      /**
       * @return {?}
       */
      function reduce() {
        var rval = Object(options.a)(["\n  margin-top: 10px;\n"]);
        return reduce = function() {
          return rval;
        }, rval;
      }
      /**
       * @return {?}
       */
      function clone() {
        var res = Object(options.a)(["\n  width: 100%;\n  background: #ffffff;\n  box-shadow: 0 2px 4px 0 rgba(170, 170, 170, 0.33);\n"]);
        return clone = function() {
          return res;
        }, res;
      }
      /**
       * @return {?}
       */
      function each() {
        var obj = Object(options.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  background-color: #fdfdfd;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);
        return each = function() {
          return obj;
        }, obj;
      }
      $.r(r);
      $.d(r, "default", function() {
        return O;
      });
      var options = $(5);
      var object = $(15);
      var opts = $(16);
      var doc = $(18);
      var meta = $(17);
      var actual = $(19);
      var content = $(0);
      var target = $.n(content);
      var me = $(3);
      var where = $(105);
      var el = $.n(where);
      var O = function(deepDataAndEvents) {
        /**
         * @param {?} expr
         * @return {?}
         */
        function filter(expr) {
          var snapshot;
          return Object(object.a)(this, filter), (snapshot = Object(doc.a)(this, Object(meta.a)(filter).call(this, expr))).state = {
            isChatBubbleOpen : false
          }, setTimeout(function() {
            return snapshot.setState({
              isChatBubbleOpen : true
            });
          }, 1200), snapshot;
        }
        return Object(actual.a)(filter, deepDataAndEvents), Object(opts.a)(filter, [{
          key : "render",
          /**
           * @return {?}
           */
          value : function() {
            var pos = this.state.isChatBubbleOpen;
            return target.a.createElement(nodestring, null, target.a.createElement(tagToInsert, null, target.a.createElement("img", {
              src : $(493),
              alt : ""
            })), target.a.createElement("div", {
              style : {
                position : "relative"
              }
            }, target.a.createElement(fieldsString, {
              src : $(494)
            }), target.a.createElement(el.a, {
              in : pos
            }, target.a.createElement(nodeStr, {
              src : $(495)
            }))), target.a.createElement(parentTag, null));
          }
        }]), filter;
      }(content.Component);
      var nodestring = me.d.div(each());
      var tagToInsert = me.d.div(clone());
      var fieldsString = me.d.img(reduce());
      var nodeStr = me.d.img(hasKey());
      var parentTag = me.d.img(filter());
    }
  }]);
  