!function(){"use strict";var t={73453:function(t,n,e){Object.defineProperty(n,"__esModule",{value:!0}),n.backtrack=n.random=n.dummy=void 0;var r=e(79269),o=e(51760),u=e(57343),i=e(92408),c={Left:1,Right:2,Both:3};function s(t){for(var n=[],e=0,o=t;e<o.length;e++){var u=o[e],i=c[u[2]],s=new r.Paddler(u[0],Number(u[1]),i);n.push(s)}return n}function l(t){for(var n=[],e=0;e<(o=t.left.length,u=t.right.length,o<u?u:o);e++){var r=[a(t.left[e]),a(t.right[e])];n.push(r)}var o,u;return n}function a(t){var n=(0,o.unwrap)(t);return null==n?null:n.Name}n.dummy=function(t){for(var n=[["--left--","--right--"]],e=[],r=0,o=t;r<o.length;r++){var u=o[r][0];e.push(u),2==e.length&&(n.push(e),e=[])}return 1==e.length&&(e.push(null),n.push(e)),n},n.random=function(t){var n=s(t);return l((0,u.arrangeRandom)(20,n))},n.backtrack=function(t){var n=s(t);return l((0,i.searchBacktrack)(20,n))}},14183:function(t,n,e){var r=this&&this.__awaiter||function(t,n,e,r){return new(e||(e=Promise))((function(o,u){function i(t){try{s(r.next(t))}catch(t){u(t)}}function c(t){try{s(r.throw(t))}catch(t){u(t)}}function s(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(i,c)}s((r=r.apply(t,n||[])).next())}))},o=this&&this.__generator||function(t,n){var e,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(c){return function(s){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;u&&(u=0,c[0]&&(i=0)),i;)try{if(e=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=n.call(t,i)}catch(t){c=[6,t],r=0}finally{e=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}},u=this&&this.__spreadArray||function(t,n,e){if(e||2===arguments.length)for(var r,o=0,u=n.length;o<u;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return t.concat(r||Array.prototype.slice.call(n))};Object.defineProperty(n,"__esModule",{value:!0}),n.arrange=n.prepare=void 0;var i=e(73453),c="Input";function s(){return r(this,void 0,void 0,(function(){var t,n=this;return o(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,Excel.run((function(t){return r(n,void 0,void 0,(function(){var n,e,r,u,i;return o(this,(function(o){switch(o.label){case 0:return n=t.workbook.getSelectedRange(),(e=n.getAbsoluteResizedRange(1,3)).load("address"),[4,t.sync()];case 1:return o.sent(),r=n.worksheet,u=r.tables.getItemOrNullObject(c),[4,t.sync()];case 2:return o.sent(),u.isNullObject?((i=r.tables.add(e.address,!0)).name=c,i.getHeaderRowRange().values=[["Name","Weight","Side"]],i.rows.add(null,[["Raymark",65,"Left"],["Roly",63,"Both"],["Iya",54,"Right"],["John",67.6,"Both"],["Leo",59,"Both"],["Doc Pat",60,"Right"],["LGrace",63,"Left"],["Joshua",85,"Right"],["Yormi",66,"Left"],["Jesus",70,"Both"],["Shin",50,"Left"],["Nanz",91,"Right"],["Sergey",84.7,"Both"],["Brandon",89.1,"Right"],["Eugene",95,"Both"],["Prashant",64,"Right"],["Kalesh",70,"Right"],["Kristoffer",74,"Both"],["Jenna",60,"Right"],["Norelee",53,"Left"]]),Office.context.requirements.isSetSupported("ExcelApi","1.2")&&(r.getUsedRange().format.autofitColumns(),r.getUsedRange().format.autofitRows()),r.activate()):console.error("Table ".concat(c," already exists!.")),[2]}}))}))}))];case 1:return e.sent(),[3,3];case 2:return t=e.sent(),console.error(t),[3,3];case 3:return[2]}}))}))}function l(){return r(this,void 0,void 0,(function(){var t,n=this;return o(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,Excel.run((function(t){return r(n,void 0,void 0,(function(){var n,e,r,s,l,a,f,h,g;return o(this,(function(o){switch(o.label){case 0:return n=t.workbook.worksheets.getActiveWorksheet(),e=n.tables.getItemOrNullObject(c),[4,t.sync()];case 1:return o.sent(),e.isNullObject?(console.error("Input table not found."),[3,9]):[3,2];case 2:return r=e.getDataBodyRange().load("values,rowCount,columnCount"),[4,t.sync()];case 3:return o.sent(),s=(0,i.backtrack)(r.values),l=e.getHeaderRowRange().load("rowIndex,columnIndex,rowCount,columnCount"),[4,t.sync()];case 4:return o.sent(),a=n.getRangeByIndexes(l.rowIndex,l.columnIndex+l.columnCount+2,s.length+1,s[0].length).load("rowIndex,columnIndex,rowCount,columnCount"),[4,t.sync()];case 5:return o.sent(),a.getExtendedRange(Excel.KeyboardDirection.down).load("address").clear(),[4,t.sync()];case 6:return o.sent(),f=n.getRangeByIndexes(a.rowIndex+1,a.columnIndex,a.rowCount,1).load("address"),h=n.getRangeByIndexes(a.rowIndex+1,a.columnIndex+1,a.rowCount,1).load("address"),[4,t.sync()];case 7:return o.sent(),g=u([["=SUMPRODUCT(COUNTIF(".concat(f.address,",").concat(c,"[Name]),").concat(c,"[Weight]) / SUM(").concat(c,"[Weight])"),"=SUMPRODUCT(COUNTIF(".concat(h.address,",").concat(c,"[Name]),").concat(c,"[Weight]) / SUM(").concat(c,"[Weight])")]],s.slice(0),!0),a.values=g,a.getAbsoluteResizedRange(1,2).numberFormat=[["0.0%"]],[4,t.sync()];case 8:o.sent(),o.label=9;case 9:return[2]}}))}))}))];case 1:return e.sent(),[3,3];case 2:return t=e.sent(),console.error(t),[3,3];case 3:return[2]}}))}))}Office.onReady((function(t){t.host===Office.HostType.Excel&&(document.getElementById("sideload-msg").style.display="none",document.getElementById("app-body").style.display="flex",document.getElementById("startButton").onclick=s,document.getElementById("runButton").onclick=l)})),n.prepare=s,n.arrange=l},93823:function(t,n,e){var r=e(27091),o=e.n(r),u=new URL(e(60806),e.b),i=new URL(e(44944),e.b);o()(u),o()(i)},27091:function(t){t.exports=function(t,n){return n||(n={}),t?(t=String(t.__esModule?t.default:t),n.hash&&(t+=n.hash),n.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},79269:function(t,n,e){e.r(n),e.d(n,{Boat:function(){return N},Boat_$reflection:function(){return k},Boat_Make:function(){return O},Paddler:function(){return x},Paddler_$reflection:function(){return M},canBeLeft:function(){return E},canBeRight:function(){return I},cost:function(){return G}});var r=e(96669),o=e(52569);class u{constructor(t,n,e,r,o,u,i){this.fullname=t,this.generics=n,this.construct=e,this.parent=r,this.fields=o,this.cases=u,this.enumCases=i}toString(){return d(this)}GetHashCode(){return c(this)}Equals(t){return s(this,t)}}function i(t){return null!=t.generics?t.generics:[]}function c(t){const n=(0,o.Cv)(t.fullname),e=i(t).map(c);return(0,o.eA)([n,...e])}function s(t,n){return""===t.fullname?""===n.fullname&&(0,o.NU)(y(t),y(n),(([t,n],[e,r])=>t===e&&s(n,r))):t.fullname===n.fullname&&(0,o.NU)(i(t),i(n),s)}function l(t,n,e,r){return new u(t,n,e,void 0,r)}function a(t){return new u("Microsoft.FSharp.Core.FSharpOption`1",[t])}function f(t){return new u("[]",[t])}new u("System.Object"),new u("Microsoft.FSharp.Core.Unit"),new u("System.Char");const h=new u("System.String"),g=(new u("System.Boolean"),new u("System.SByte"),new u("System.Byte"),new u("System.Int16"),new u("System.UInt16"),new u("System.Int32")),m=(new u("System.UInt32"),new u("System.Int64"),new u("System.UInt64"),new u("System.Int128"),new u("System.UInt128"),new u("System.IntPtr"),new u("System.UIntPtr"),new u("System.Half"),new u("System.Single"),new u("System.Double"));function d(t){const n=function(t){return"[]"===t.fullname&&1===t.generics?.length?t.generics[0]:void 0}(t);return null!=n?d(n)+"[]":null==t.generics||0===t.generics.length?t.fullname:t.fullname+"["+t.generics.map((t=>d(t))).join(",")+"]"}function y(t){if(null!=t.fields)return t.fields();throw new Error(`${t.fullname} is not an F# record type`)}new u("System.Decimal"),new u("System.Numerics.BigInteger");var p=e(89029),w=e(79732),v=e(69189),b=e(51760),S=e(23056),C=e(612);function E(t){return 1===t||3===t}function I(t){return 2===t||3===t}class x extends r.WV{constructor(t,n,e){super(),this.Name=t,this.Weight=n,this.Side=0|e}}function M(){return l("arranger.Common.Paddler",[],x,(()=>{return[["Name",h],["Weight",m],["Side",("arranger.Common.SIDE",t=g,n=[["Left",1],["Right",2],["Both",3]],new u("arranger.Common.SIDE",[t],void 0,void 0,void 0,void 0,n))]];var t,n}))}class N extends r.WV{constructor(t,n,e){super(),this.size=0|t,this.left=n,this.right=e}toString(){const t=this,n=0|(0,p.VV)(46,(0,w.Fp)((0,w.UI)((t=>t.Name.length),(0,w.RN)((t=>t),(0,w.R3)(t.left,t.right))),{Compare:o._w})),e=t=>(null==t?"":t.Name).slice(void 0,n-1+1),r=(0,v.AS)(n,"═");return(0,v.v_)("\n",(0,w.gw)((()=>(0,w.R3)((0,w.ri)((0,v.lr)((0,v.zt)("╔%s╦%s╗"))(r)(r)),(0,w.gw)((()=>(0,w.R3)((0,w.KM)((t=>{let r,o;return(0,w.ri)((r=e(t[0]),o=e(t[1]),(0,v.lr)((0,v.zt)("║%*s║%-*s║"))(n)(r)(n)(o)))}),(0,w.$R)(t.left,t.right)),(0,w.gw)((()=>(0,w.ri)((0,v.lr)((0,v.zt)("╚%s╩%s╝"))(r)(r)))))))))))}}function k(){return l("arranger.Common.Boat",[],N,(()=>[["size",g],["left",f(a(M()))],["right",f(a(M()))]]))}function O(t,n,e){const r=n=>Array.from((0,w.qn)(t,(0,w.zo)([(0,w.UI)(b.some,(0,S.GY)(n)),(0,w.Li)((t=>{}))])));return new N(t,r(n),r(e))}function G(t){const n=t=>(0,C.Cn)((t=>null==t?0:t.Weight),t,{GetZero:()=>0,Add:(t,n)=>t+n}),e=n(t.left),r=n(t.right),o=(t,n)=>(0,w.kE)((0,w.hX)((t=>!n(t)),(0,w.UI)((t=>t.Side),(0,w.RN)((t=>t),t))));return Math.abs(e-r)/(e+r)+1*(o(t.left,E)+o(t.right,I))}},92408:function(t,n,e){e.r(n),e.d(n,{searchBacktrack:function(){return l}});var r=e(89029),o=e(23056),u=e(79732),i=e(52569);function c(t,n,e){return function(t,n,e,r,o){const c=function(t,n,e,r){const o=0|(0,i.qu)(t,e);if(0===o)throw new Error("The step of a range cannot be zero");const u=o>0;return e=>{const o=0|(0,i.qu)(e,n);return u&&o<=0||!u&&o>=0?[e,r(e,t)]:void 0}}(n,e,r,o);return(0,u.gw)((()=>(0,u.JJ)(c,t)))}(t,n,e,0,((t,n)=>t+n))}var s=e(79269);function l(t,n){const e=0|(0,r.VV)(t,n.length);let l=(0,o.GY)((0,u.zZ)(c(0,1,e-1))),a=(0,o.GY)((0,u.zZ)(c(e,1,e+(0,r.VV)(t,n.length-e)-1)));return(0,u.F)(s.cost,(0,u.gw)((()=>{let e=!0;return(0,u.zN)((()=>e),(0,u.gw)((()=>(0,u.R3)((0,o.kE)(l)===t&&(0,o.kE)(a)===t||n.length-(0,o.kE)(l)-(0,o.kE)(a)==0?(0,u.ri)((0,s.Boat_Make)(t,(0,u.zZ)((0,u.gw)((()=>(0,u.UI)((t=>n[t]),l)))),(0,u.zZ)((0,u.gw)((()=>(0,u.UI)((t=>n[t]),a)))))):(0,u.cS)(),(0,u.gw)((()=>{let n,r=(0,o.cS)();return(0,u.R3)((0,u.zN)((()=>e&&null==n),(0,u.gw)((()=>{const i=!(0,o.xb)(l)&&(!!(0,o.xb)(a)||(0,o.YM)(a)<(0,o.YM)(l));if(!(0,o.xb)(a)&&((0,o.xb)(l)||(0,o.YM)(l)<(0,o.YM)(a))){if((0,o.xb)(a))throw new Error("Match failure");{const t=(0,o.Gb)(a),n=0|(0,o.YM)(a);return a=t,r=(0,o.QI)(n,r),(0,u.cS)()}}if(i){if((0,o.xb)(l))throw new Error("Match failure");{const e=(0,o.Gb)(l),i=0|(0,o.YM)(l);return l=e,(0,o.kE)(a)<t?(n=i,(0,u.cS)()):(r=(0,o.QI)(i,r),(0,u.cS)())}}return e=!1,(0,u.cS)()}))),(0,u.gw)((()=>{const e=n;if(null==e)return(0,u.cS)();{const n=0|e;return a=(0,o.QI)(n,a),(0,u.R3)((0,u.zN)((()=>(0,o.kE)(l)<t&&!(0,o.xb)(r)),(0,u.gw)((()=>{if((0,o.xb)(r))throw new Error("Match failure");{const t=(0,o.Gb)(r),n=0|(0,o.YM)(r);return r=t,l=(0,o.QI)(n,l),(0,u.cS)()}}))),(0,u.gw)((()=>(0,u.R3)((0,u.zN)((()=>!(0,o.xb)(r)),(0,u.gw)((()=>{if((0,o.xb)(r))throw new Error("Match failure");{const t=(0,o.Gb)(r),n=0|(0,o.YM)(r);return r=t,a=(0,o.QI)(n,a),(0,u.cS)()}}))),(0,u.gw)((()=>(0,u.cS)()))))))}})))}))))))})),{Compare:i._w})}},57343:function(t,n,e){e.r(n),e.d(n,{arrangeRandom:function(){return f},searchRandom:function(){return h}});var r=e(79269),o=e(612),u=e(52569);function i(t,n){if(n<t)throw new Error("minValue must be less than maxValue");return Math.floor(Math.random()*(n-t))+t}class c{constructor(){}Next0(){return i(0,2147483647)}Next1(t){return i(0,t)}Next2(t,n){return i(t,n)}NextDouble(){return Math.random()}NextBytes(t){!function(t){if(null==t)throw new Error("Buffer cannot be null");for(let n=0;n<t.length;n+=6){let e=Math.floor(281474976710656*Math.random());const r=Math.floor(e/16777216);for(let o=0;o<6&&n+o<t.length;o++)3===o&&(e=r),t[n+o]=255&e,e>>>=8}}(t)}}var s=e(89029),l=e(23056),a=e(79732);function f(t,n){let e;if(t<=0)return new r.Boat(0,new Array(0),new Array(0));if(e=n,(0,o.e2)(u.fS,e,(0,u.FG)())||0!==e.length){const e=new c,u=(0,o.JG)(n),i=u;let a=i.length;for(;1<a;){const t=0|e.Next1(a);a=a-1|0;const n=i[a],r=i[t];i[a]=r,i[t]=n}const f=0|(0,s.VV)(t,~~((1+u.length)/2));return(0,r.Boat_Make)(t,(0,l.kM)(u.slice(void 0,f-1+1)),(0,l.kM)(u.slice(f,f+t-1+1)))}{const n=0|t;return new r.Boat(n,(0,o.hl)(new Array(n),0,n,void 0),(0,o.hl)(new Array(n),0,n,void 0))}}function h(t,n,e){return(0,a.F)(r.cost,(0,a.j2)(t,(t=>f(n,e))),{Compare:u._w})}},44944:function(t,n,e){t.exports=e.p+"assets/logo-filled.png"},60806:function(t,n,e){t.exports=e.p+"8d768f65702f2137206f.css"},612:function(t,n,e){function r(t,n,e,r){const o=0|n;return t.fill(r,o,o+e)}function o(t,n){const e=function(t,n){return"function"==typeof t?new t(1):new Array(1)}(n);return e[0]=t,e}function u(t){return t.slice()}function i(t,n,e){if(null==n)return null==e;if(null==e)return!1;{let r=0,o=!0;const u=0|n.length,i=0|e.length;if(u>i)return!1;if(u<i)return!1;for(;r<u&&o;)o=t(n[r],e[r]),r=r+1|0;return o}}function c(t,n,e){let r=e.GetZero();for(let o=0;o<=n.length-1;o++)r=e.Add(r,t(n[o]));return r}e.d(n,{JG:function(){return u},e2:function(){return i},hl:function(){return r},ri:function(){return o},Cn:function(){return c}})},89029:function(t,n,e){function r(t,n){return t<n?t:n}e.d(n,{VV:function(){return r}})},23056:function(t,n,e){e.d(n,{Ck:function(){return s},QI:function(){return d},cS:function(){return m},YM:function(){return w},xb:function(){return y},kE:function(){return p},kM:function(){return S},tY:function(){return C},GY:function(){return b},Gb:function(){return v}});var r=e(69189),o=e(51760),u=e(52569),i=e(96669);const c="Collection was empty.";class s extends i.WV{constructor(t,n){super(),this.head=t,this.tail=n}toString(){return"["+(0,r.v_)("; ",this)+"]"}Equals(t){return this===t||((t,n)=>{t:for(;;){const e=t,r=n,i=e.tail,c=r.tail;if(null!=i){if(null!=c){const s=(0,o.value)(i),l=(0,o.value)(c);if((0,u.fS)(e.head,r.head)){t=s,n=l;continue t}return!1}return!1}return null==c}})(this,t)}GetHashCode(){return 0|((t,n,e)=>{for(;;){const r=t,i=n,c=e,s=c.tail;if(null==s)return 0|i;{const l=(0,o.value)(s);if(r>18)return 0|i;t=r+1,n=(i<<1)+(0,u.A)(c.head)+631*r,e=l}}})(0,0,this)}toJSON(){return Array.from(this)}CompareTo(t){return 0|((t,n)=>{t:for(;;){const e=t,r=n,i=e.tail,c=r.tail;if(null!=i){if(null!=c){const s=(0,o.value)(i),l=(0,o.value)(c),a=0|(0,u.qu)(e.head,r.head);if(0===a){t=s,n=l;continue t}return 0|a}return 1}return null!=c?-1:0}})(this,t)}GetEnumerator(){return new l(this)}[Symbol.iterator](){return(0,u.Jw)((0,u.NK)(this))}"System.Collections.IEnumerable.GetEnumerator"(){return(0,u.NK)(this)}}class l{constructor(t){this.xs=t,this.it=this.xs,this.current=(0,u.FG)()}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const t=this,n=t.it.tail;if(null!=n){const e=(0,o.value)(n);return t.current=t.it.head,t.it=e,!0}return!1}"System.Collections.IEnumerator.Reset"(){const t=this;t.it=t.xs,t.current=(0,u.FG)()}Dispose(){}}function a(){return new s((0,u.FG)(),void 0)}function f(t,n){return new s(t,n)}function h(t){return null==t.tail}function g(t){const n=t.tail;if(null!=n)return(0,o.value)(n);throw new Error(c+"\\nParameter name: list")}function m(){return a()}function d(t,n){return f(t,n)}function y(t){return h(t)}function p(t){return function(t){return 0|((t,n)=>{for(;;){const e=t,r=n.tail;if(null==r)return 0|e;t=e+1,n=(0,o.value)(r)}})(0,t)}(t)}function w(t){return function(t){if(null!=t.tail)return t.head;throw new Error(c+"\\nParameter name: list")}(t)}function v(t){return g(t)}function b(t){return function(t,n,e){let r=n,o=e;for(;!h(o);)r=t(r,w(o)),o=g(o);return r}(((t,n)=>f(n,t)),a(),t)}function S(t){return function(t,n){let e=n;for(let n=t.length-1;n>=0;n--)e=f(t[n],e);return e}(t,a())}function C(t){let n,e;if((0,u.zG)(t))return S(t);if(t instanceof s)return t;{const r=a();let o=r;const i=(0,u.NK)(t);try{for(;i["System.Collections.IEnumerator.MoveNext"]();){const t=i["System.Collections.Generic.IEnumerator`1.get_Current"]();n=o,e=new s(t,void 0),n.tail=e,o=e}}finally{(0,u.iM)(i)}const c=o,l=a();return c.tail=l,g(r)}}},51760:function(t,n,e){e.r(n),e.d(n,{Some:function(){return o},bind:function(){return b},defaultArg:function(){return h},defaultArgWith:function(){return g},filter:function(){return y},flatten:function(){return a},map:function(){return p},map2:function(){return w},map3:function(){return v},ofNullable:function(){return s},orElse:function(){return m},orElseWith:function(){return d},some:function(){return c},toArray:function(){return f},toNullable:function(){return l},tryOp:function(){return S},unwrap:function(){return i},value:function(){return u}});var r=e(52569);class o{constructor(t){this.value=t}toJSON(){return this.value}toString(){return String(this.value)}GetHashCode(){return(0,r.A)(this.value)}Equals(t){return null!=t&&(0,r.fS)(this.value,t instanceof o?t.value:t)}CompareTo(t){return null==t?1:(0,r.qu)(this.value,t instanceof o?t.value:t)}}function u(t){if(null==t)throw new Error("Option has no value");return t instanceof o?t.value:t}function i(t){return t instanceof o?t.value:t}function c(t){return null==t||t instanceof o?new o(t):t}function s(t){return null==t?void 0:t}function l(t){return null==t?null:u(t)}function a(t){return null==t?void 0:u(t)}function f(t){return null==t?[]:[u(t)]}function h(t,n){return null!=t?u(t):n}function g(t,n){return null!=t?u(t):n()}function m(t,n){return null==t?n:t}function d(t,n){return null==t?n():t}function y(t,n){return null!=n?t(u(n))?n:void 0:n}function p(t,n){return null!=n?c(t(u(n))):void 0}function w(t,n,e){return null!=n&&null!=e?t(u(n),u(e)):void 0}function v(t,n,e,r){return null!=n&&null!=e&&null!=r?t(u(n),u(e),u(r)):void 0}function b(t,n){return null!=n?t(u(n)):void 0}function S(t,n){try{return c(t(n))}catch{return}}},79732:function(t,n,e){e.d(n,{R3:function(){return N},RN:function(){return k},KM:function(){return z},zo:function(){return S},gw:function(){return b},cS:function(){return E},zN:function(){return O},hX:function(){return G},j2:function(){return R},Li:function(){return _},kE:function(){return B},UI:function(){return j},Fp:function(){return P},F:function(){return F},ri:function(){return I},qn:function(){return A},zZ:function(){return x},JJ:function(){return C},$R:function(){return D}});var r=e(52569),o=e(96669),u=e(51760),i=e(612),c=e(23056);const s="Enumeration already finished.",l="Enumeration has not started. Call MoveNext.",a="The input sequence was empty.",f="The input sequence has an insufficient number of elements.";function h(){throw new Error(l)}function g(){throw new Error(s)}class m{constructor(t){this.f=t}toString(){let t=0,n="seq [";const e=(0,r.NK)(this);try{for(;t<4&&e["System.Collections.IEnumerator.MoveNext"]();)t>0&&(n+="; "),n+=(0,o.BB)(e["System.Collections.Generic.IEnumerator`1.get_Current"]()),t=t+1|0;return 4===t&&(n+="; ..."),n+"]"}finally{(0,r.iM)(e)}}GetEnumerator(){return this.f()}[Symbol.iterator](){return(0,r.Jw)((0,r.NK)(this))}"System.Collections.IEnumerable.GetEnumerator"(){return this.f()}}class d{constructor(t,n,e){this.current=t,this.next=n,this.dispose=e}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current()}"System.Collections.IEnumerator.get_Current"(){return this.current()}"System.Collections.IEnumerator.MoveNext"(){return this.next()}"System.Collections.IEnumerator.Reset"(){!function(){throw new Error("Reset is not supported on this enumerator.")}()}Dispose(){this.dispose()}}function y(t,n,e){return new d(t,n,e)}function p(t,n,e){let r,o=!1,i=(0,u.some)(t());const c=()=>{if(null!=i){const t=(0,u.value)(i);try{e(t)}finally{i=void 0}}},s=()=>{try{c()}finally{r=void 0}};return y((()=>(o||h(),null!=r?(0,u.value)(r):g())),(()=>{if(o||(o=!0),null!=i){const t=(0,u.value)(i);let e;try{e=n(t)}catch(t){throw s(),t}return null!=e?(r=e,!0):(s(),!1)}return!1}),c)}function w(t){return function(t){return new m(t)}(t)}function v(t){return n="source",null==t&&function(t){throw new Error(t)}(n),(0,r.NK)(t);var n}function b(t){return w((()=>(0,r.NK)(t())))}function S(t){return w((()=>function(t){let n,e,o,i=!1,c=!1;const s=()=>{if(c=!0,null!=e){const t=(0,u.value)(e);try{(0,r.iM)(t)}finally{e=void 0}}if(null!=n){const t=(0,u.value)(n);try{(0,r.iM)(t)}finally{n=void 0}}};return y((()=>(i?c&&g():h(),null!=o?(0,u.value)(o):g())),(()=>{let l;if(i||(i=!0),c)return!1;{let i;for(;null==i;){const c=n,a=e;if(null!=c)if(null!=a){const t=(0,u.value)(a);if(t["System.Collections.IEnumerator.MoveNext"]())o=(0,u.some)(t["System.Collections.Generic.IEnumerator`1.get_Current"]()),i=!0;else try{(0,r.iM)(t)}finally{e=void 0}}else{const t=(0,u.value)(c);t["System.Collections.IEnumerator.MoveNext"]()?(l=t["System.Collections.Generic.IEnumerator`1.get_Current"](),e=(0,r.NK)(l)):(s(),i=!1)}else n=(0,r.NK)(t)}return(0,u.value)(i)}}),(()=>{c||s()}))}(t)))}function C(t,n){return w((()=>function(t,n){let e,r=n;return y((()=>{if(null!=e){const t=(0,u.value)(e)[0];return(0,u.value)(e)[1],t}return h()}),(()=>{if(e=t(r),null!=e){(0,u.value)(e)[0];const t=(0,u.value)(e)[1];return r=t,!0}return!1}),(()=>{}))}(t,n)))}function E(){return b((()=>new Array(0)))}function I(t){return b((()=>(0,i.ri)(t)))}function x(t){return(0,r.zG)(t)?(0,c.kM)(t):t instanceof c.Ck?t:(0,c.tY)(t)}function M(t,n,e){return w((()=>p(t,n,e)))}function N(t,n){return S([t,n])}function k(t,n){return M((()=>v(n)),(n=>{let e;for(;null==e&&n["System.Collections.IEnumerator.MoveNext"]();)e=t(n["System.Collections.Generic.IEnumerator`1.get_Current"]());return e}),(t=>{(0,r.iM)(t)}))}function O(t,n){return S(C((e=>t()?[n,e+1]:void 0),0))}function G(t,n){return k((n=>t(n)?(0,u.some)(n):void 0),n)}function R(t,n){return C((e=>e<t?[n(e),e+1]:void 0),0)}function _(t){return R(2147483647,t)}function B(t){if((0,r.zG)(t))return 0|t.length;if(t instanceof c.Ck)return 0|(0,c.kE)(t);{const n=v(t);try{let t=0;for(;n["System.Collections.IEnumerator.MoveNext"]();)t=t+1|0;return 0|t}finally{(0,r.iM)(n)}}}function j(t,n){return M((()=>v(n)),(n=>n["System.Collections.IEnumerator.MoveNext"]()?(0,u.some)(t(n["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0),(t=>{(0,r.iM)(t)}))}class T{constructor(t,n){this.cleanup=t,this.res=n}Dispose(){this.cleanup()}GetEnumerator(){return getEnumerator(this.res)}[Symbol.iterator](){return toIterator(getEnumerator(this))}"System.Collections.IEnumerable.GetEnumerator"(){return getEnumerator(this.res)}}function U(t,n){const e=v(n);try{const n=n=>{for(;;){const r=n;if(!e["System.Collections.IEnumerator.MoveNext"]())return r;n=t(r,e["System.Collections.Generic.IEnumerator`1.get_Current"]())}};if(e["System.Collections.IEnumerator.MoveNext"]())return n(e["System.Collections.Generic.IEnumerator`1.get_Current"]());throw new Error(a)}finally{(0,r.iM)(e)}}function A(t,n){return e=()=>v(n),o=(n,e)=>{if(n<t){if(e["System.Collections.IEnumerator.MoveNext"]())return(0,u.some)(e["System.Collections.Generic.IEnumerator`1.get_Current"]());throw new Error(f+"\\nParameter name: source")}},i=t=>{(0,r.iM)(t)},w((()=>{let t=-1;return p(e,(n=>(t=t+1|0,o(t,n))),i)}));var e,o,i}function D(t,n){return function(t,n,e){return M((()=>[v(n),v(e)]),(t=>{const n=t[0],e=t[1];return n["System.Collections.IEnumerator.MoveNext"]()&&e["System.Collections.IEnumerator.MoveNext"]()?(0,u.some)((r=n["System.Collections.Generic.IEnumerator`1.get_Current"](),o=e["System.Collections.Generic.IEnumerator`1.get_Current"](),[r,o])):void 0;var r,o}),(t=>{try{(0,r.iM)(t[0])}finally{(0,r.iM)(t[1])}}))}(0,t,n)}function z(t,n){return b((()=>S(j(t,n))))}function P(t,n){return U(((t,e)=>n.Compare(e,t)>0?e:t),t)}function F(t,n,e){return U(((n,r)=>e.Compare(t(r),t(n))>0?n:r),n)}},69189:function(t,n,e){e.d(n,{v_:function(){return p},zt:function(){return g},AS:function(){return v},lr:function(){return m}});var r=e(52569);function o(t){const n=t<0,e=~~((t=Math.abs(t))/36e5),o=t%36e5/6e4;return(n?"-":"+")+(0,r.o1)(e,2)+":"+(0,r.o1)(o,2)}function u(t,n){const e=t.toISOString();return"first"===n?e.substring(0,e.indexOf("T")):e.substring(e.indexOf("T")+1,e.length-1)}function i(t,n,e){return n.replace(/(\w)\1*/g,(n=>{let o=Number.NaN;switch(n.substring(0,1)){case"y":const r=e?t.getUTCFullYear():t.getFullYear();o=n.length<4?r%100:r;break;case"M":o=(e?t.getUTCMonth():t.getMonth())+1;break;case"d":o=e?t.getUTCDate():t.getDate();break;case"H":o=e?t.getUTCHours():t.getHours();break;case"h":const u=e?t.getUTCHours():t.getHours();o=u>12?u%12:u;break;case"m":o=e?t.getUTCMinutes():t.getMinutes();break;case"s":o=e?t.getUTCSeconds():t.getSeconds();break;case"f":o=e?t.getUTCMilliseconds():t.getMilliseconds()}return Number.isNaN(o)?n:(0,r.o1)(o,n.length)}))}const c=Symbol("numeric");function s(t,n){return"number"==typeof t?t.toPrecision(n):"bigint"==typeof t?t:t[c]().toPrecision(n)}function l(t,n){return"number"==typeof t?t.toExponential(n):"bigint"==typeof t?t:t[c]().toExponential(n)}function a(t){return"number"==typeof t?(Number(t)>>>0).toString(16):"bigint"==typeof t?BigInt.asUintN(64,t).toString(16):t[c]().toHex()}var f=e(96669);const h=/(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g;function g(t){return{input:t,cont:(n=t,t=>{h.lastIndex=0;const e=[],r=[];let o=0,u=h.exec(n);for(;u;){const t=u.index+(u[1]||"").length;e.push(n.substring(o,t).replace(/%%/g,"%")),r.push(u),o=h.lastIndex,h.lastIndex-=1,u=h.exec(n)}return 0===e.length?t(n.replace(/%%/g,"%")):(e.push(n.substring(o).replace(/%%/g,"%")),y(t,e,r))})};var n}function m(t){return function(t,n){return"string"==typeof n?t(n):n.cont(t)}((t=>t),t)}function d(t,n,e,h,g){let m="";if(n=n||"",g=g||"","number"==typeof(d=t)||"bigint"==typeof d||d?.[c])switch("x"!==g.toLowerCase()&&(function(t,n){return function(t,n){return"number"==typeof t||"bigint"==typeof t?t<n?-1:t>n?1:0:t.CompareTo(n)}(t,n)<0}(t,0)?(t=function(t,n){return"number"==typeof t?-1*t:"bigint"==typeof t?t*BigInt(-1):t[c]().multiply(-1)}(t),m="-"):n.indexOf(" ")>=0?m=" ":n.indexOf("+")>=0&&(m="+")),h=null==h?null:parseInt(h,10),g){case"f":case"F":t=function(t,n){return"number"==typeof t?t.toFixed(n):"bigint"==typeof t?t:t[c]().toFixed(n)}(t,h=null!=h?h:6);break;case"g":case"G":t=null!=h?s(t,h):s(t);break;case"e":case"E":t=null!=h?l(t,h):l(t);break;case"x":t=a(t);break;case"X":t=a(t).toUpperCase();break;default:t=String(t)}else t=t instanceof Date?function(t,n,e){return null!=t.offset?function(t,n){const e=new Date(t.getTime()+(t.offset??0));if("string"!=typeof n)return e.toISOString().replace(/\.\d+/,"").replace(/[A-Z]|\.\d+/g," ")+o(t.offset??0);if(1!==n.length)return i(e,n,!0);switch(n){case"D":case"d":return u(e,"first");case"T":case"t":return u(e,"second");case"O":case"o":return function(t,n){const e=t.toISOString();return e.substring(0,e.length-1)+o(n)}(e,t.offset??0);default:throw new Error("Unrecognized Date print format")}}(t,n):function(t,n){const e=1===t.kind;if("string"!=typeof n)return e?t.toUTCString():t.toLocaleString();if(1!==n.length)return i(t,n,e);switch(n){case"D":case"d":return e?u(t,"first"):t.toLocaleDateString();case"T":case"t":return e?u(t,"second"):t.toLocaleTimeString();case"O":case"o":return function(t,n){if(n)return t.toISOString();{const n=null==t.kind||2===t.kind;return(0,r.o1)(t.getFullYear(),4)+"-"+(0,r.o1)(t.getMonth()+1,2)+"-"+(0,r.o1)(t.getDate(),2)+"T"+(0,r.o1)(t.getHours(),2)+":"+(0,r.o1)(t.getMinutes(),2)+":"+(0,r.o1)(t.getSeconds(),2)+"."+(0,r.o1)(t.getMilliseconds(),3)+(n?o(-6e4*t.getTimezoneOffset()):"")}}(t,e);default:throw new Error("Unrecognized Date print format")}}(t,n)}(t):(0,f.BB)(t);var d;if(e="number"==typeof e?e:parseInt(e,10),isNaN(e))t=m+t;else{const r=n.indexOf("0")>=0,o=n.indexOf("-")>=0,u=o||!r?" ":"0";t="0"===u?m+(t=w(t,e-m.length,u,o)):w(m+t,e,u,o)}return t}function y(t,n,e,r="",o=-1){return(...u)=>{let i=r;const c=n.slice(),s=e.slice();for(const t of u){const[,,n,e,r,u]=s[0];let l=e;if(o>=0)l=o,o=-1;else if("*"===l){if(t<0)throw new Error("Non-negative number required");o=t;continue}i+=c[0],i+=d(t,n,l,r,u),c.splice(0,1),s.splice(0,1)}return 0===s.length?(i+=c[0],t(i)):y(t,c,s,i,o)}}function p(t,n){return Array.isArray(n)?n.join(t):Array.from(n).join(t)}function w(t,n,e,r){e=e||" ",n-=t.length;for(let o=0;o<n;o++)t=r?t+e:e+t;return t}function v(t,n){return function(t,e){if(t<0)throw new Error("String length must be non-negative");const r=new Array(t);for(let e=0;e<t;e++)r[e]=n;return r.join("")}(t)}},96669:function(t,n,e){e.d(n,{BB:function(){return o},WV:function(){return u}});var r=e(52569);function o(t,n=0){if(null!=t&&"object"==typeof t){if("function"==typeof t.toString)return t.toString();if(Symbol.iterator in t)return function(t){let n=0,e="[";for(const r of t){if(0===n)e+=o(r);else{if(100===n){e+="; ...";break}e+="; "+o(r)}n++}return e+"]"}(t);{const e=Object.getPrototypeOf(t)?.constructor;return e===Object&&n<10?"{ "+Object.entries(t).map((([t,e])=>t+" = "+o(e,n+1))).join("\n  ")+" }":e?.name??""}}return String(t)}class u{toJSON(){return function(t){const n={},e=Object.keys(t);for(let r=0;r<e.length;r++)n[e[r]]=t[e[r]];return n}(this)}toString(){return function(t){return"{ "+Object.entries(t).map((([t,n])=>t+" = "+o(n))).join("\n  ")+" }"}(this)}GetHashCode(){return function(t){const n=Object.values(t).map((t=>(0,r.A)(t)));return(0,r.eA)(n)}(this)}Equals(t){return function(t,n){if(t===n)return!0;if((0,r.r_)(t,n)){const e=Object.keys(t);for(let o=0;o<e.length;o++)if(!(0,r.fS)(t[e[o]],n[e[o]]))return!1;return!0}return!1}(this,t)}CompareTo(t){return function(t,n){if(t===n)return 0;if((0,r.r_)(t,n)){const e=Object.keys(t);for(let o=0;o<e.length;o++){const u=(0,r.qu)(t[e[o]],n[e[o]]);if(0!==u)return u}return 0}return-1}(this,t)}}},52569:function(t,n,e){function r(t){return Array.isArray(t)||ArrayBuffer.isView(t)}function o(t){(function(t){return null!=t&&"function"==typeof t.Dispose})(t)&&t.Dispose()}function u(){return null}function i(t,n){return Object.getPrototypeOf(t)?.constructor===Object.getPrototypeOf(n)?.constructor}e.d(n,{A:function(){return p},Cv:function(){return m},FG:function(){return u},Jw:function(){return a},NK:function(){return l},NU:function(){return w},_w:function(){return S},eA:function(){return y},fS:function(){return v},iM:function(){return o},o1:function(){return f},qu:function(){return C},r_:function(){return i},zG:function(){return r}});class c{constructor(t){this.en=t}GetEnumerator(){return this.en}"System.Collections.IEnumerable.GetEnumerator"(){return this.en}[Symbol.iterator](){return this}next(){const t=this.en["System.Collections.IEnumerator.MoveNext"]();return{done:!t,value:t?this.en["System.Collections.Generic.IEnumerator`1.get_Current"]():void 0}}}class s{constructor(t){this.iter=t,this.current=null}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const t=this.iter.next();return this.current=t.value,!t.done}"System.Collections.IEnumerator.Reset"(){throw new Error("JS iterators cannot be reset")}Dispose(){}}function l(t){return null!=(n=t)&&"function"==typeof n.GetEnumerator?t.GetEnumerator():new s(t[Symbol.iterator]());var n}function a(t){return{next(){const n=t["System.Collections.IEnumerator.MoveNext"]();return{done:!n,value:n?t["System.Collections.Generic.IEnumerator`1.get_Current"]():void 0}}}}function f(t,n){let e=t.toString(10);for(;e.length<n;)e="0"+e;return e}function h(t){const n=t;return"number"==typeof n.offset?n.offset:1===t.kind?0:-6e4*t.getTimezoneOffset()}class g{static id(t){return g.idMap.has(t)||g.idMap.set(t,++g.count),g.idMap.get(t)}}function m(t){let n=0,e=5381;const r=t.length;for(;n<r;)e=33*e^t.charCodeAt(n++);return e}function d(t){return 2654435761*t|0}function y(t){let n=0;const e=t.length;for(let r=0;r<e;r++)n=(n<<5)+n^t[r];return n}function p(t){if(null==t)return 0;switch(typeof t){case"boolean":return t?1:0;case"number":return d(t);case"bigint":return function(t){return m(t.toString(32))}(t);case"string":return m(t);default:return function(t){return null!=t&&"function"==typeof t.GetHashCode}(t)?t.GetHashCode():r(t)?function(t){const n=t.length,e=new Array(n);for(let r=0;r<n;r++)e[r]=p(t[r]);return y(e)}(t):t instanceof Date?function(t){return t.getTime()}(t):Object.getPrototypeOf(t)?.constructor===Object?y(Object.values(t).map((t=>p(t)))):d(g.id(t))}}function w(t,n,e){if(null==t)return null==n;if(null==n)return!1;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(!e(t[r],n[r]))return!1;return!0}function v(t,n){return t===n||(null==t?null==n:null!=n&&(function(t){return null!=t&&"function"==typeof t.Equals}(t)?t.Equals(n):r(t)?r(n)&&function(t,n){return w(t,n,v)}(t,n):"object"==typeof t&&(t instanceof Date?n instanceof Date&&0===b(t,n):Object.getPrototypeOf(t)?.constructor===Object&&function(t,n){const e=Object.keys(t),r=Object.keys(n);if(e.length!==r.length)return!1;e.sort(),r.sort();for(let o=0;o<e.length;o++)if(e[o]!==r[o]||!v(t[e[o]],n[r[o]]))return!1;return!0}(t,n))))}function b(t,n){let e,r;return"offset"in t&&"offset"in n?(e=t.getTime(),r=n.getTime()):(e=t.getTime()+h(t),r=n.getTime()+h(n)),e===r?0:e<r?-1:1}function S(t,n){return t===n?0:t<n?-1:1}function C(t,n){return t===n?0:null==t?null==n?0:-1:null==n?1:function(t){return null!=t&&"function"==typeof t.CompareTo}(t)?t.CompareTo(n):r(t)?r(n)?function(t,n){return function(t,n,e){if(null==t)return null==n?0:1;if(null==n)return-1;if(t.length!==n.length)return t.length<n.length?-1:1;for(let r=0,o=0;r<t.length;r++)if(o=e(t[r],n[r]),0!==o)return o;return 0}(t,n,C)}(t,n):-1:"object"!=typeof t?t<n?-1:1:t instanceof Date?n instanceof Date?b(t,n):-1:Object.getPrototypeOf(t)?.constructor===Object?function(t,n){const e=Object.keys(t),r=Object.keys(n);if(e.length!==r.length)return e.length<r.length?-1:1;e.sort(),r.sort();for(let o=0,u=0;o<e.length;o++){const i=e[o];if(i!==r[o])return i<r[o]?-1:1;if(u=C(t[i],n[i]),0!==u)return u}return 0}(t,n):-1}g.idMap=new WeakMap,g.count=0,new WeakMap}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var u=n[r]={exports:{}};return t[r].call(u.exports,u,u.exports,e),u.exports}e.m=t,e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t}(),e.b=document.baseURI||self.location.href,e(14183),e(93823)}();
//# sourceMappingURL=taskpane.js.map