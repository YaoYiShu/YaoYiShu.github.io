(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66c09c4e"],{"13d6":function(t,s,n){"use strict";var a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"influence-content"},[t.ufansLists.length>0?n("ul",{staticClass:"rank"},[t.ufansLists.length>3?[n("li",{staticClass:"rank-2st"},[n("van-image",{attrs:{src:"https://image.zymkcdn.com/file/head/"+t.ufansLists[1].formatUid+".jpg",round:"",fit:"cover"}}),n("p",{staticClass:"uname"},[t._v(t._s(t.ufansLists[1].uname))]),n("p",{staticClass:"i-count"},[t._v(" 影响力"),n("span",{staticClass:"amount"},[t._v(t._s(t.ufansLists[1].amount))])])],1),n("li",{staticClass:"rank-1st"},[n("van-image",{attrs:{src:"https://image.zymkcdn.com/file/head/"+t.ufansLists[0].formatUid+".jpg",round:"",fit:"cover"}}),n("p",{staticClass:"uname"},[t._v(t._s(t.ufansLists[0].uname))]),n("p",{staticClass:"i-count"},[t._v(" 影响力"),n("span",{staticClass:"amount"},[t._v(t._s(t.ufansLists[0].amount))])])],1),n("li",{staticClass:"rank-3st"},[n("van-image",{attrs:{src:"https://image.zymkcdn.com/file/head/"+t.ufansLists[2].formatUid+".jpg",round:"",fit:"cover"}}),n("p",{staticClass:"uname"},[t._v(t._s(t.ufansLists[2].uname))]),n("p",{staticClass:"i-count"},[t._v(" 影响力"),n("span",{staticClass:"amount"},[t._v(t._s(t.ufansLists[2].amount))])])],1)]:t._e(),t.ufansLists.length<=2?[n("li",{staticClass:"rank-1st"},[n("van-image",{attrs:{src:"https://image.zymkcdn.com/file/head/"+t.ufansLists[0].formatUid+".jpg",round:"",fit:"cover"}}),n("p",{staticClass:"uname"},[t._v(t._s(t.ufansLists[0].uname))]),n("p",{staticClass:"i-count"},[t._v(" 影响力"),n("span",{staticClass:"amount"},[t._v(t._s(t.ufansLists[0].amount))])])],1),n("li",{staticClass:"rank-2st"},[n("van-image",{attrs:{src:"https://image.zymkcdn.com/file/head/"+t.ufansLists[1].formatUid+".jpg",round:"",fit:"cover"}}),n("p",{staticClass:"uname"},[t._v(t._s(t.ufansLists[1].uname))]),n("p",{staticClass:"i-count"},[t._v(" 影响力"),n("span",{staticClass:"amount"},[t._v(t._s(t.ufansLists[1].amount))])])],1)]:t._e()],2):t._e(),n("FansFluenceItem")],1)},e=[],i=(n("d81d"),n("d3b7"),n("25f0"),function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[t.ufansLists.length?n("ul",{staticClass:"list"},t._l(t.filterFansLists,(function(s,a){return n("li",{key:a,staticClass:"item"},[n("span",{staticClass:"index"},[t._v(t._s(a+4))]),n("van-image",{attrs:{round:"",src:"https://image.zymkcdn.com/file/head/"+s.formatUid+".jpg"},scopedSlots:t._u([{key:"loading",fn:function(){return[n("div",{staticClass:"loading"})]},proxy:!0}],null,!0)}),n("span",{staticClass:"uname"},[t._v(t._s(s.uname))]),n("div",{staticClass:"tiny"},[n("span",{staticClass:"num"},[t._v(t._s(s.amount))]),n("span",{staticClass:"text"},[t._v("影响力")])])],1)})),0):t._e()])}),r=[],u=(n("4de4"),{data:function(){return{loading:!1,currentIndex:2}},computed:{filterFansLists:function(){return this.ufansLists.filter((function(t,s){return s>2}))},ufansLists:{get:function(){var t=this;return this.$store.state.fansLists.map((function(s){return{formatUid:t.formatUid(s.uid),uname:s.uname,amount:s.amount}}))},set:function(t){this.$store.state.fansLists=t}}},methods:{formatUid:function(t){if(t){if(t=t.toString(),8===t.length)return"0"+t.substr(0,2)+"/"+t.substr(2,3)+"/"+t.substr(5);if(7===t.length)return"00"+ +t.substr(0,1)+"/"+t.substr(1,3)+"/"+t.substr(4);if(6===t.length)return"000/"+t.substr(0,3)+"/"+t.substr(3);if(5===t.length)return"000/0"+t.substr(0,2)+"/"+t.substr(2);if(4===t.length)return"000/00"+t.substr(0,1)+"/"+t.substr(1);if(3===t.length)return"000/000/"+t.substr(0);if(2===t.length)return"000/000/0"+t.substr(0);if(1===t.length)return"000/000/00"+t.substr(0)}}}}),c=u,o=(n("42b6"),n("2877")),l=Object(o["a"])(c,i,r,!1,null,"e4edd910",null),f=l.exports,m={components:{FansFluenceItem:f},data:function(){return{currentIndex:1}},mounted:function(){this.$store.dispatch("getFansList",{id:this.$route.query.id,num:10,currentIndex:this.currentIndex})},computed:{ufansLists:function(){var t=this;return this.$store.state.fansLists.map((function(s){return{formatUid:t.formatUid(s.uid),uname:s.uname,amount:s.amount}}))}},methods:{formatUid:function(t){if(t){if(t=t.toString(),8===t.length)return"0"+t.substr(0,2)+"/"+t.substr(2,3)+"/"+t.substr(5);if(7===t.length)return"00"+ +t.substr(0,1)+"/"+t.substr(1,3)+"/"+t.substr(4);if(6===t.length)return"000/"+t.substr(0,3)+"/"+t.substr(3);if(5===t.length)return"000/0"+t.substr(0,2)+"/"+t.substr(2);if(4===t.length)return"000/00"+t.substr(0,1)+"/"+t.substr(1);if(3===t.length)return"000/000/"+t.substr(0);if(2===t.length)return"000/000/0"+t.substr(0);if(1===t.length)return"000/000/00"+t.substr(0)}}}},d=m,h=(n("3aab"),Object(o["a"])(d,a,e,!1,null,"5de0cb02",null));s["a"]=h.exports},"23e0":function(t,s,n){},"29df":function(t,s,n){"use strict";n("23e0")},"3aab":function(t,s,n){"use strict";n("9b03")},"42b6":function(t,s,n){"use strict";n("9874")},"4de4":function(t,s,n){"use strict";var a=n("23e7"),e=n("b727").filter,i=n("1dde"),r=n("ae40"),u=i("filter"),c=r("filter");a({target:"Array",proto:!0,forced:!u||!c},{filter:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}})},5302:function(t,s,n){"use strict";n.r(s);var a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"influence",on:{scroll:t.scrollEvent}},[n("h1",[t._v("粉丝影响力")]),n("Nav",{attrs:{path:-1}},[n("h1",{attrs:{slot:"center"},slot:"center"},[t._v("粉丝影响力")]),n("span",{staticClass:"right",attrs:{slot:"right"},slot:"right"})]),n("span",{staticClass:"line"}),n("FansInfluence")],1)},e=[],i=n("13d6"),r=n("216c"),u={components:{Nav:r["a"],FansInfluence:i["a"]},data:function(){return{currentIndex:1}},mounted:function(){this.$store.dispatch("getFansList",{id:this.$route.query.id,num:40,currentIndex:this.currentIndex})},methods:{scrollEvent:function(t){console.log(t,111)}}},c=u,o=(n("29df"),n("2877")),l=Object(o["a"])(c,a,e,!1,null,"ad753fec",null);s["default"]=l.exports},9874:function(t,s,n){},"9b03":function(t,s,n){}}]);
//# sourceMappingURL=chunk-66c09c4e.7f55840b.js.map