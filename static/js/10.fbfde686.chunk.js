(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{370:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(383),o=n.n(c),l=n(97);t.a=Object(l.withStyles)(function(e){return{root:{fontSize:"2rem",lineHeight:"initial"}}})(function(e){var t=e.component||o.a;return r.a.createElement(t,Object.assign({},e,{value:e.options.findIndex(function(t){return t.value===e.value}),onChange:function(t){var n=parseInt(t.target.value),a=e.options[n];e.onChange(a.value)}}),e.options.map(function(e,t){return r.a.createElement("option",{key:e.value,value:t},e.label)}))})},386:function(e,t,n){"use strict";n.d(t,"d",function(){return j}),n.d(t,"e",function(){return O}),n.d(t,"b",function(){return w}),n.d(t,"c",function(){return x}),n.d(t,"a",function(){return M});var a=n(5),r=n(393),c=n(0),o=n.n(c),l=n(3),u=n(10),i=n.n(u),d=n(387),s=n.n(d),f=n(370),m=n(9);function v(){var e=Object(a.a)(["\n  font-size: 20px;\n"]);return v=function(){return e},e}function h(){var e=Object(a.a)(["\n  text-align: center;\n"]);return h=function(){return e},e}function p(){var e=Object(a.a)(["\n  display: flex;\n"]);return p=function(){return e},e}var y=[{value:"daily",label:"Daily"},{value:"weekly",label:"Weekly"},{value:"monthly",label:"Monthly"},{value:"yearly",label:"Yearly"}],b=I(i.a.weekdays()),E=I(i.a.monthsShort()),g=I(function(e){for(var t=[],n=1;n<=e;n++)t.push(Object(m.q)(n));return t}(31)),k=I(function(){for(var e=[],t=0;t<24;t++){var n=t>=12?"pm":"am",a=t%12;0===a&&(a=12),e.push("".concat(a,":00 ").concat(n)),e.push("".concat(a,":30 ").concat(n))}return e}(),.5),j=function(e){return o.a.createElement(f.a,Object.assign({options:y,autoFocus:!0},e))},O=function(e){var t=e.value,n=e.onChange;return o.a.createElement(S,null,b.map(function(e,a){return o.a.createElement(C,{key:a},o.a.createElement(z,null,e.label[0]),o.a.createElement(s.a,{checked:t[a],onChange:function(){var e=Object(r.a)(t);e[a]=!t[a],n(e)},color:"primary",style:{padding:10}}))}))},w=function(e){return o.a.createElement(f.a,Object.assign({options:g},e))},x=function(e){return o.a.createElement(f.a,Object.assign({options:k},e))},M=function(e){var t=e.value,n=t.day,a=t.month,r=e.onChange;return o.a.createElement(S,null,o.a.createElement(f.a,{options:E,value:a,onChange:function(e){return r({day:n,month:e})},style:{marginRight:16}}),o.a.createElement(f.a,{options:g,value:n,onChange:function(e){return r({day:e,month:a})}}))},S=l.d.div(p()),C=l.d.div(h()),z=l.d.div(v());function I(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],a=0;a<e.length;a++)n.push({value:a*t,label:e[a]});return n}},387:function(e,t,n){"use strict";var a=n(7);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(388))},388:function(e,t,n){"use strict";var a=n(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(12)),c=a(n(29)),o=a(n(14)),l=a(n(0)),u=(a(n(2)),a(n(37))),i=a(n(385)),d=a(n(389)),s=a(n(390)),f=a(n(391)),m=n(95),v=a(n(38)),h=function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main},"&$disabled":{color:e.palette.action.disabled}}}};function p(e){var t=e.checkedIcon,n=e.classes,a=e.className,d=e.color,s=e.icon,f=e.indeterminate,v=e.indeterminateIcon,h=e.inputProps,p=(0,o.default)(e,["checkedIcon","classes","className","color","icon","indeterminate","indeterminateIcon","inputProps"]);return l.default.createElement(i.default,(0,r.default)({type:"checkbox",checkedIcon:f?v:t,className:(0,u.default)((0,c.default)({},n.indeterminate,f),a),classes:{root:(0,u.default)(n.root,n["color".concat((0,m.capitalize)(d))]),checked:n.checked,disabled:n.disabled},inputProps:(0,r.default)({"data-indeterminate":f},h),icon:f?v:s},p))}t.styles=h,p.defaultProps={checkedIcon:l.default.createElement(s.default,null),color:"secondary",icon:l.default.createElement(d.default,null),indeterminate:!1,indeterminateIcon:l.default.createElement(f.default,null)};var y=(0,v.default)(h,{name:"MuiCheckbox"})(p);t.default=y},389:function(e,t,n){"use strict";var a=n(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),c=a(n(366)),o=a(n(158)),l=r.default.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),u=function(e){return r.default.createElement(o.default,e,l)};(u=(0,c.default)(u)).muiName="SvgIcon";var i=u;t.default=i},390:function(e,t,n){"use strict";var a=n(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),c=a(n(366)),o=a(n(158)),l=r.default.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),u=function(e){return r.default.createElement(o.default,e,l)};(u=(0,c.default)(u)).muiName="SvgIcon";var i=u;t.default=i},391:function(e,t,n){"use strict";var a=n(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),c=a(n(366)),o=a(n(158)),l=r.default.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),u=function(e){return r.default.createElement(o.default,e,l)};(u=(0,c.default)(u)).muiName="SvgIcon";var i=u;t.default=i},393:function(e,t,n){"use strict";function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return a})},516:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return w});var a=n(5),r=n(22),c=n(15),o=n(16),l=n(18),u=n(17),i=n(19),d=n(0),s=n.n(d),f=n(3),m=n(10),v=n.n(m),h=n(104),p=n(121),y=n.n(p),b=n(386),E=n(96);function g(){var e=Object(a.a)(["\n  width: 100%;\n  margin-top: 10px;\n"]);return g=function(){return e},e}function k(){var e=Object(a.a)(["\n  flex: 1;\n"]);return k=function(){return e},e}function j(){var e=Object(a.a)(["\n  font-size: 20px;\n  margin-top: 24px;\n  margin-bottom: 6px;\n  text-align: center;\n  /* color: #999; */\n  color: ",";\n"]);return j=function(){return e},e}function O(){var e=Object(a.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* justify-content: center; */\n  padding-top: 14px;\n"]);return O=function(){return e},e}var w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={periodType:"weekly",selectedHour:9,selectedMonth:v()().month(),selectedDay:v()().date()-1,selectedWeekdays:[!1,!1,!1,!1,!1,!1,!1]},n.state.selectedWeekdays[v()().weekday()]=!0,n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"onSnoozeClicked",value:function(){var e,t=this.state,n=t.periodType,a=t.selectedHour,r=t.selectedDay,c=t.selectedMonth,o=t.selectedWeekdays;if("daily"===n&&(e={type:"daily",hour:a}),"weekly"===n){var l=function(e){return e.map(function(e,t){return e?t:-1}).filter(function(e){return e>=0})}(o);if(0===l.length)return;e={type:"weekly",hour:a,days:l}}if("monthly"===n&&(e={type:"monthly",hour:a,day:r}),"yearly"===n&&(e={type:"yearly",hour:a,date:[c,r]}),!e)throw new Error("unrecognized periodType");this.props.onPeriodSelected(e)}},{key:"render",value:function(){var e=this,t=this.props.visible,n=this.state.periodType,a=function(t){return{value:e.state[t],onChange:function(n){return e.setState(Object(r.a)({},t,n.target?n.target.value:n))}}};return s.a.createElement(h.a,{visible:t},s.a.createElement(x,null,s.a.createElement(M,null,"Wake up this tab"),s.a.createElement(b.d,a("periodType")),s.a.createElement(y.a,{in:"weekly"===n},s.a.createElement(d.Fragment,null,s.a.createElement(M,null,"on these days"),s.a.createElement(b.e,a("selectedWeekdays")))),s.a.createElement(y.a,{in:"monthly"===n},s.a.createElement(d.Fragment,null,s.a.createElement(M,null,"on this day"),s.a.createElement(b.b,a("selectedDay")))),s.a.createElement(y.a,{in:"yearly"===n},s.a.createElement(d.Fragment,null,s.a.createElement(M,null,"on this date"),s.a.createElement(b.a,{value:{day:this.state.selectedDay,month:this.state.selectedMonth},onChange:function(t){var n=t.day,a=t.month;return e.setState({selectedDay:n,selectedMonth:a})}}))),s.a.createElement(M,null,"at this hour"),s.a.createElement(b.c,a("selectedHour")),s.a.createElement(S,null),s.a.createElement(C,{onMouseDown:this.onSnoozeClicked.bind(this)},"SNOOZE")))}}]),t}(d.Component);var x=f.d.div(O()),M=f.d.div(j(),function(e){return e.theme.snoozePanel.footerTextColor}),S=f.d.div(k()),C=Object(f.d)(E.a)(g())}}]);
//# sourceMappingURL=10.fbfde686.chunk.js.map