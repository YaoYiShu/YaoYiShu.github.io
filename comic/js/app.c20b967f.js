(function(t){function e(e){for(var o,i,r=e[0],c=e[1],u=e[2],l=0,f=[];l<r.length;l++)i=r[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,i=1;i<n.length;i++){var r=n[i];0!==a[r]&&(o=!1)}o&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},a={app:0},s=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"cbef6f2a","chunk-06f71b40":"b7ab780b","chunk-11efa38e":"585c9a29","chunk-38dbd8b8":"b1b089c8","chunk-3953bcd6":"23288c43","chunk-66c09c4e":"7f55840b","chunk-756bc29b":"ac5c1279","chunk-d6d344fa":"24fafe31","chunk-de3e8aa8":"27474497","chunk-efe8f8c0":"eb6e245b"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1,"chunk-06f71b40":1,"chunk-11efa38e":1,"chunk-38dbd8b8":1,"chunk-3953bcd6":1,"chunk-66c09c4e":1,"chunk-756bc29b":1,"chunk-d6d344fa":1,"chunk-de3e8aa8":1,"chunk-efe8f8c0":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"875b32f0","chunk-06f71b40":"4c016ee6","chunk-11efa38e":"1a3f1e79","chunk-38dbd8b8":"e67e839e","chunk-3953bcd6":"e18b7330","chunk-66c09c4e":"2df8e47e","chunk-756bc29b":"30b590d6","chunk-d6d344fa":"99d9b41e","chunk-de3e8aa8":"3090095e","chunk-efe8f8c0":"4dde1fe5"}[t]+".css",a=c.p+o,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var u=s[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return e()}var f=document.getElementsByTagName("style");for(r=0;r<f.length;r++){u=f[r],l=u.getAttribute("data-href");if(l===o||l===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var o=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete i[t],p.parentNode.removeChild(p),n(s)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){i[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var s=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=r(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",f.name="ChunkLoadError",f.type=o,f.request=i,n[1](f)}a[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0000":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"van-img-box",staticStyle:{"border-radius":"5px"},on:{click:function(e){!t.isComicDetails&&t.$router.push({path:"/comicDetails",query:{id:t.item.comic_id}})}}},[n("van-image",{class:{more:t.ismore},attrs:{src:"https://image.zymkcdn.com/file/cover/000/00"+t.formatId(t.item.comic_id)+".jpg-300x400"},scopedSlots:t._u([{key:"loading",fn:function(){return[n("div",{staticClass:"loading"})]},proxy:!0}])},[t.score||"0"==t.score?n("span",{staticClass:"icon-xing"},[t._v(t._s(t._f("pingfen")(t.score)))]):t._e(),t.book?n("span",{staticClass:"icon-xing"},[t._v(t._s(t._f("pingfen")(t.book.comic_info[t.index].pingfen)))]):t._e(),!t.ismore&&t.item.last_chapter?n("span",{staticClass:"chapter"},[t._v(t._s(t.item.last_comic_chapter_name||t.item.last_chapter.name))]):t._e()])],1)},i=[],a=(n("d3b7"),n("25f0"),{props:["item","book","index","ismore","score","isComicDetails","isDetails"],filters:{pingfen:function(t){return t=parseInt(t).toString(),1===t.length?"0."+t:2===t.length?t.substr(0,1)+"."+t.substr(1):3===t.length?t.substr(0):void 0}},methods:{formatId:function(t){if(t){if("string"!=typeof t&&(t=t.toString()),4==t.length)return t.substr(0,1)+"/"+t.substr(1,t.length);if(1==t.length)return"0/00"+t;if(3==t.length)return"0/"+t;if(2==t.length)return"0/0"+t}}},watch:{$route:function(){this.$router.go(0)}}}),s=a,r=(n("a1ea"),n("2877")),c=Object(r["a"])(s,o,i,!1,null,"274a1db0",null);e["a"]=c.exports},"0c55":function(t,e,n){},"0f51":function(t,e,n){},"0fc8":function(t,e,n){"use strict";n("9712")},"19d3":function(t,e,n){},"216c":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav"},[t._t("left",[n("van-button",{attrs:{square:"",color:"#fc6454"},on:{click:function(e){return e.stopPropagation(),t.toWhere(t.path)}}},[n("span",{staticClass:"iconfont icon-xiangzuofanhui"})])]),t._t("center"),t._t("right",[n("van-button",{attrs:{square:"",color:"#fc6454",to:"/search"},on:{click:function(e){return t.handle()}}},[n("span",{staticClass:"iconfont icon-sousuo"})])])],2)},i=[],a=n("d399"),s={props:["path"],methods:{toWhere:function(t){"/"==t&&(this.$root.active=0,this.$router.go(0)),"/update"==t&&(this.$root.active=2,this.$router.go("/update")),"-1"==t&&this.$router.go(-1)},handle:function(){"/search"==this.$route.path&&Object(a["a"])({message:"大人，请输入漫画名或 漫画家 ~。~",position:"top"})}}},r=s,c=(n("c4da"),n("2877")),u=Object(c["a"])(r,o,i,!1,null,null,null);e["a"]=u.exports},"2c27":function(t,e,n){"use strict";n("19d3")},4087:function(t,e,n){},4093:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.toggle?n("van-tabbar",{model:{value:t.$root.active,callback:function(e){t.$set(t.$root,"active",e)},expression:"$root.active"}},[n("van-tabbar-item",{attrs:{icon:"home-o"},on:{click:function(e){e.stopPropagation(),t.handle(t.path),t.$root.isHome=!0,t.$root.active=0}}},[t._v("首页")]),n("van-tabbar-item",{attrs:{icon:"search"},on:{click:function(e){e.stopPropagation(),t.$root.isUpdate=!1,t.$root.isHome=!1,t.$root.isAbout=!1,t.$root.active=1}}},[t._v("分类")]),n("van-tabbar-item",{attrs:{icon:"friends-o"},on:{click:function(e){e.stopPropagation(),t.$router.push("/update"),t.$root.isUpdate=!0,t.$root.active=2}}},[t._v("更新")]),n("van-tabbar-item",{attrs:{icon:"setting-o"},on:{click:function(e){e.stopPropagation(),t.$router.push("/about"),t.$root.isAbout=!0}}},[t._v("我的")])],1):t._e()},i=[],a={props:["toggle","path"],methods:{handle:function(t){"home"==t&&this.$router.go(0),"update"==t&&this.$router.push("/"),"about"==t&&this.$router.push("/")}}},s=a,r=n("2877"),c=Object(r["a"])(s,o,i,!1,null,null,null);e["a"]=c.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=(n("d3b7"),n("bc3a")),a=n.n(i),s={},r=a.a.create(s);r.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),r.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=r,window.axios=r,Object.defineProperties(t.prototype,{axios:{get:function(){return r}},$axios:{get:function(){return r}}})},o["a"].use(Plugin);Plugin;var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],l={watch:{$route:function(t){"/update"==t.path&&(this.$root.active=2,this.$root.isUpdate||(this.$root.active=1)),"/"==t.path&&(this.$root.active=0,this.$root.isHome||(this.$root.active=1)),"/about"==t.path&&(this.$root.active=3)}}},f=l,p=(n("7c55"),n("2877")),d=Object(p["a"])(f,c,u,!1,null,null,null),h=d.exports,m=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.$root.isHome?n("div",{staticClass:"home"},[[n("header",[n("router-link",{staticClass:"search",attrs:{to:"/search"}},[n("span",{staticClass:"iconfont icon-sousuo"})]),t.slideListID?n("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"#fc6454"}},t._l(t.slideList,(function(e,o){return n("van-swipe-item",{key:o,style:"background-image:url(https://image.zymkcdn.com/file/news/000/004/"+t.slideListID[o]+".jpg)",on:{click:function(n){!t.isComicDetails&&t.$router.push({path:"/comicDetails",query:{id:e.comic_id}})}}},[n("div",{staticClass:"title"},[t._v(t._s(e.slide_desc))])])})),1):t._e()],1),n("section",[n("ComicList",{attrs:{isHome:!0}})],1)]],2):t._e(),n("transition",{attrs:{name:"cutsom-classes-transition","enter-active-class":"animate__animated animate__fadeInRight","leave-active-class":"animate__animated animate__fadeOutRight"}},[t.$root.isHome?t._e():n("section",[n("Type")],1)]),n("transition",{attrs:{name:"van-slide-up"}},[n("FooterBar",{attrs:{toggle:t.toggle,path:"home"}})],1)],1)},g=[],v=(n("d81d"),n("25f0"),n("4093")),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comic-list"},t._l(t.books,(function(e,o){return n("ListItem",{key:o,attrs:{book:e,index:o,isHome:t.isHome}})})),1)},k=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-item"},[n("div",{staticClass:"hd"},[n("div",{staticClass:"main"},[n("i",{staticClass:"icon",class:"icon-"+(t.index<6?t.index+1:t.index%6)}),n("h2",[t._v(" "+t._s(t._f("formatBookTitle")(t.book.title))+" ")]),n("van-button",{attrs:{icon:"plus",size:"mini",round:""},on:{click:function(e){return t.toMore(t.book)}}},[t._v("更多")])],1)]),n("van-swipe",{staticClass:"my-swipe reset-swipe",attrs:{width:115,loop:!1,"show-indicators":!1}},t._l(t.book.comic_info,(function(e,o){return n("van-swipe-item",{key:o},[n("van-grid",{attrs:{gutter:10}},[n("VanImage",{attrs:{item:e,book:t.book,index:o}}),n("p",{staticClass:"comic_name"},[t._v(" "+t._s(t.book.comic_info[o].comic_name)+" ")]),n("p",{staticClass:"content"},[t._v(t._s(t.book.comic_info[o].content))])],1)],1)})),1)],1)},$=[],w=n("0000"),C={components:{VanImage:w["a"]},props:["book","index"],data:function(){return{comic_info:[],index_title:1}},filters:{formatBookTitle:function(t){return t?(t=t.toString(),"「"!=t.substr(0,1)&&"【"!=t.substr(0,1)?"【"+t+"】":t):""}},created:function(){this.comic_info=this.book.comic_info},methods:{handle:function(){return this.index_title=this.index_title+1,this.index_title},toMore:function(t){this.$router.push({path:"/more"}),this.$store.commit("toMovePage",t)}}},x=C,L=(n("bf7e"),Object(p["a"])(x,y,$,!1,null,"4b499f38",null)),S=L.exports,O={components:{ListItem:S},props:["isHome"],mounted:function(){this.$store.dispatch("slideListAsync")},computed:{books:function(){return localStorage.books?JSON.parse(localStorage.books):this.$store.state.books}}},j=O,T=Object(p["a"])(j,_,k,!1,null,null,null),P=T.exports,E=n("74e0"),I={name:"Home",components:{ComicList:P,Type:E["default"],FooterBar:v["a"]},data:function(){return{toggle:!0,isHome:!0,isComicDetails:!1}},created:function(){this.$store.dispatch("slideListAsync"),window.addEventListener("scroll",this.handleScroll,!0)},computed:{slideListID:function(){return localStorage.slideList?JSON.parse(localStorage.slideList).map((function(t){return t.id.toString().substr(1)})):this.$store.state.slideList.map((function(t){return t.id.toString().substr(1)}))},slideList:function(){return localStorage.slideList?JSON.parse(localStorage.slideList):this.$store.state.slideList}},methods:{handleScroll:function(){this.scrollTop=window.scrollY||window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;var t=this.scrollTop-this.i;this.i=this.scrollTop,t<0?this.toggle=!0:t>0&&(this.toggle=!1)}}},D=I,H=(n("ef59"),Object(p["a"])(D,b,g,!1,null,"4988dd75",null)),A=H.exports;o["a"].use(m["a"]);var N=m["a"].prototype.push;m["a"].prototype.push=function(t){return N.call(this,t).catch((function(t){return t}))};var M=[{path:"/",name:"Home",component:A},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))},children:[{path:"modify",name:"Modify",component:function(){return n.e("about").then(n.bind(null,"a886"))}},{path:"pay",name:"Pay",component:function(){return n.e("chunk-d6d344fa").then(n.bind(null,"0b97"))}}]},{path:"/search",name:"Search",component:function(){return n.e("chunk-756bc29b").then(n.bind(null,"2d3b"))}},{path:"/comicDetails",name:"ComicDetails",component:function(){return n.e("chunk-11efa38e").then(n.bind(null,"c04f"))}},{path:"/more",name:"More",component:function(){return n.e("chunk-38dbd8b8").then(n.bind(null,"c446"))}},{path:"/influence",name:"InFluence",component:function(){return n.e("chunk-66c09c4e").then(n.bind(null,"5302"))}},{path:"/read",name:"Read",component:function(){return n.e("chunk-efe8f8c0").then(n.bind(null,"c844"))}},{path:"/sort",name:"Sort",component:function(){return n.e("chunk-de3e8aa8").then(n.bind(null,"3a5e"))}},{path:"/type",name:"Type",component:function(){return Promise.resolve().then(n.bind(null,"74e0"))}},{path:"/update",name:"Update",component:function(){return n.e("chunk-06f71b40").then(n.bind(null,"2e8c"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-3953bcd6").then(n.bind(null,"a55b"))}}],z=new m["a"]({routes:M}),B=z,U=n("2f62");o["a"].use(U["a"]);var q=new U["a"].Store({state:{slideList:[],books:[],book:[],fansLists:[],currentIndex:1,chapter:[]},mutations:{getSlideList:function(t,e){t.slideList=e,localStorage.slideList=JSON.stringify(t.slideList)},getBooks:function(t,e){t.books=e},toMovePage:function(t,e){t.book=e,localStorage.book=JSON.stringify(t.book)},getfansLists:function(t,e){e.length&&(e.map((function(t){return{formatUid:t.id,uname:t.uname,amount:t.amount}})),t.fansLists=e)},getChapter:function(t,e){t.chapter=e}},actions:{slideListAsync:function(t){a.a.get("https://api.kele8.cn/agent/http://47.96.158.147/json/suggest/comic_json_v8_68_1").then((function(e){var n=e.data.data.slide_list,o=e.data.data.book;t.commit("getSlideList",n),t.commit("getBooks",o)})).catch((function(t){return t}))},getFansList:function(t,e){a.a.get("https://api.zymk.cn/app_api/v5/gift_effectslist/?comic_id="+e.id+"&rows="+e.num+"&page="+e.currentIndex).then((function(e){t.commit("getfansLists",e.data.data)}))},getChapter_addr:function(t,e){a.a.get("https://getcomicinfo-globalapi.zymk.cn/app_api/v5/getcomicinfo/?comic_id="+e).then((function(e){t.commit("getChapter",e.data.data.chapter_list)}))}}}),J=n("b970"),F=(n("157a"),n("499a"),n("4087"),n("be35"),n("d399")),R=n("343b"),V=n("dc02");o["a"].use(J["a"],F["a"]),o["a"].use(V["a"]),o["a"].use(R["a"],{lazyComponent:!0}),o["a"].config.productionTip=!1,new o["a"]({router:B,store:q,render:function(t){return t(h)},data:function(){return{active:0,isHome:!0,isUpdate:!0,isAbout:!0}}}).$mount("#app")},"74e0":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"type"},[n("Nav",{attrs:{path:t.$route.path}},[n("van-tabs",{ref:"tabs",attrs:{slot:"center",type:"card",color:"#fc6454"},on:{click:t.onClick},slot:"center"},t._l(t.title,(function(t,e){return n("van-tab",{key:e,attrs:{title:t}})})),1)],1),t.comic_type.length>0?n("section",[n("van-swipe",{ref:"swipe",staticClass:"my-swipe",attrs:{"indicator-color":"white",loop:!1},on:{change:t.onChange}},[n("van-swipe-item",[n("div",{ref:"theme"},[n("TypeListItem",{attrs:{lists:t.comic_type[0].data}})],1)]),n("van-swipe-item",[n("div",{ref:"proress"},[n("TypeListItem",{ref:"item",attrs:{lists:t.comic_type[1].data}})],1)]),n("van-swipe-item",[n("div",{ref:"audiences"},[n("TypeListItem",{attrs:{lists:t.comic_type[2].data}})],1)]),n("van-swipe-item",[n("div",{ref:"media"},[n("TypeListItem",{attrs:{lists:t.comic_type[3].data}})],1)])],1)],1):t._e()],1)},i=[],a=n("216c"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"type-list-item"},t._l(t.lists,(function(e,o){return n("a",{key:o,on:{click:function(n){return t.$router.push({path:"/sort",query:{id:e.id,name:e.name}})}}},[n("van-image",{attrs:{src:"https://image.zymkcdn.com/file/sort/000/000/"+t.formatUrl(e.id)+".png"},scopedSlots:t._u([{key:"loading",fn:function(){return[n("div",{staticClass:"loading"})]},proxy:!0}],null,!0)}),n("span",[t._v("- "+t._s(e.name)+" -")])],1)})),0)},r=[],c=(n("d3b7"),n("25f0"),{props:["lists"],methods:{formatUrl:function(t){return t=t.toString(),1==t.length?"00"+t:2==t.length?"0"+t:3==t.length?t:void 0}},data:function(){return{loading:["http://localhost:8080/loading.png"]}}}),u=c,l=(n("0fc8"),n("2877")),f=Object(l["a"])(u,s,r,!1,null,"cf3ea7e6",null),p=f.exports,d={components:{Nav:a["a"],TypeListItem:p},data:function(){return{title:["题材","进度","受众","媒体"],comic_type:[]}},created:function(){this.getType()},methods:{getType:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0});var e=this;this.axios.get("https://api.kele8.cn/agent/https://main-globalapi.zymk.cn/app_api/v5/getconfig/?client-channel=store_360&loglevel=3&client-type=android&client-version=5.4.9").then((function(n){t.comic_type=n.data.data.comic_type,e.$toast.clear()}))},onClick:function(t){this.$refs.swipe.swipeTo(t)},onChange:function(t){this.$refs.tabs.scrollTo(t),0==t&&(this.$refs.theme.style.position="relative",this.$refs.proress.style.position="absolute",this.$refs.audiences.style.position="absolute",this.$refs.media.style.position="absolute"),1==t&&(this.$refs.theme.style.position="absolute",this.$refs.proress.style.position="relative",this.$refs.proress.style.height="100vh",this.$refs.audiences.style.position="absolute",this.$refs.media.style.position="absolute")}}},h=d,m=(n("2c27"),Object(l["a"])(h,o,i,!1,null,"5c8ae9de",null));e["default"]=m.exports},"7a93":function(t,e,n){},"7c55":function(t,e,n){"use strict";n("7a93")},8440:function(t,e,n){},9712:function(t,e,n){},a1ea:function(t,e,n){"use strict";n("8440")},a230:function(t,e,n){},be35:function(t,e,n){},bf7e:function(t,e,n){"use strict";n("0c55")},c4da:function(t,e,n){"use strict";n("0f51")},ef59:function(t,e,n){"use strict";n("a230")}});
//# sourceMappingURL=app.c20b967f.js.map