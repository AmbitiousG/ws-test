webpackJsonp([8],[,,,,,,,function(t,e){t.exports=Vue},,,,,,,function(t,e,n){"use strict";function i(){s()}function a(){return localStorage.getItem(h)}function s(){localStorage.removeItem(h)}function o(t){localStorage.setItem(h,t)}function r(){var t=a();return!!t&&!u(t)}function c(t){var e=f()(t);if(!e.exp)return null;var n=new Date(0);return n.setUTCSeconds(e.exp),n}function u(t){return c(t)<new Date}function l(){var t=a(),e=null;try{var n=f()(t);e={username:n.username,id:n.id}}catch(t){}return e}e.d=i,e.a=a,e.e=o,e.c=r,e.b=l;var d=n(62),f=n.n(d),h="ID_TOKEN"},,,,,,,function(t,e){t.exports=Vuex},,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function i(t){n(116)}var a=n(117),s=n(118),o=n(0),r=i,c=o(a.a,s.a,r,null,null);e.a=c.exports},,,,,,,,,,,function(t,e,n){"use strict";var i=n(7),a=n.n(i),s=n(139),o=n.n(s),r=n(140),c=n(144);a.a.use(o.a),e.a=new o.a({mode:"history",routes:[{path:"/",name:"Hello",component:r.a},{path:"/profile",name:"Profile",component:c.a,children:[{path:"async",name:"AsyncTest",component:function(t){n.e(6).then(function(){var e=[n(189)];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/new",name:"AddItem",component:function(){return n.e(0).then(n.bind(null,190))}},{path:"/records",name:"Records",component:function(){return n.e(3).then(n.bind(null,191))}},{path:"/comingsoon",name:"ComingSoon",component:function(t){n.e(5).then(function(){var e=[n(192)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/login",name:"Login",component:function(t){n.e(2).then(function(){var e=[n(193)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/logout",name:"Logout",component:function(t){n.e(4).then(function(){var e=[n(194)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/register",name:"Register",component:function(t){n.e(1).then(function(){var e=[n(195)];t.apply(null,e)}.bind(this)).catch(n.oe)}}]})},function(t,e,n){"use strict";n.d(e,"d",function(){return i}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return o});var i="UPDATE_USER",a="UPDATE_CATEGORIES",s="UPDATE_RECORDS",o="CLEAR_DATA"},function(t,e,n){"use strict";function i(t){n(176)}var a=n(177),s=n(178),o=n(0),r=i,c=o(a.a,s.a,r,null,null);e.a=c.exports},function(t,e,n){"use strict";function i(t){n(80)}var a=n(81),s=n(82),o=n(0),r=i,c=o(a.a,s.a,r,null,null);e.a=c.exports},function(t,e,n){"use strict";function i(t){n(78)}var a=n(79),s=n(108),o=n(0),r=i,c=o(a.a,s.a,r,null,null);e.a=c.exports},function(t,e,n){"use strict";function i(t){n(113)}var a=n(114),s=n(115),o=n(0),r=i,c=o(a.a,s.a,r,null,null);e.a=c.exports},,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(14),a=n(7),s=n.n(a),o=n(65),r=n.n(o),c=n(21),u=n.n(c),l=n(66),d=n(50),f=n(156),h=n(162),v=n(163),p=n(165),m=n(166),_=n(172),w=n(180),g=n(185);n(186);s.a.use(r.a);var b=Object(i.a)();b&&(s.a.http.headers.common.Authorization="Bearer "+b),s.a.use(u.a),s.a.use(p.a),s.a.use(m.a),s.a.use(_.a),s.a.use(w.a),s.a.use(g.a),s.a.use(v.a),s.a.use(h.a),s.a.config.productionTip=!1,d.a.beforeEach(function(t,e,n){"/"===t.fullPath||"/login"===t.path||"/register"===t.path||Object(i.c)()?(f.a.commit("updateLoadingStatus",{isLoading:!0}),n()):n({path:"/login"})}),d.a.afterEach(function(t){f.a.commit("updateLoadingStatus",{isLoading:!1})}),window.vm=new s.a({el:"#app",router:d.a,store:f.a,template:"<App/>",components:{App:l.a}})},,,,function(t,e){t.exports=VueResource},function(t,e,n){"use strict";function i(t){n(67)}var a=n(69),s=n(138),o=n(0),r=i,c=o(a.a,s.a,r,null,null);e.a=c.exports},function(t,e){},,function(t,e,n){"use strict";var i=n(35),a=n.n(i),s=n(54),o=n(109),r=n(55),c=n(39),u=n(119),l=n(123),d=n(130),f=n(134),h=n(21);n.n(h);e.a={name:"app",components:{Cell:s.a,Drawer:o.a,Group:r.a,Loading:c.a,Tabbar:u.a,TabbarItem:l.a,ViewBox:d.a,XHeader:f.a},data:function(){return{drawerVisibility:!1}},computed:a()({},Object(h.mapState)({isLoading:function(t){return t.isLoading}}),Object(h.mapGetters)(["user"]),{showDrawerIcon:function(){return"/"===this.$route.path||"/component/drawer"===this.$route.path},leftOptions:function(){return{showBack:"/"!==this.$route.path}},rightOptions:function(){return{showMore:!0}},title:function(){return"标题"},direction:function(){return"forward"}}),mounted:function(){},methods:{hideDrawer:function(){this.drawerVisibility=!1},toggleDrawer:function(){this.drawerVisibility=!this.drawerVisibility},onClickMore:function(){},toggleView:function(t){"1"==t?this.$router.push({name:"Hello"}):"2"==t?this.$router.push({name:"AddItem"}):"3"==t?this.$router.push({name:"Records"}):this.$router.push({name:"ComingSoon"})}}}},,,,,,,,,function(t,e){},function(t,e,n){"use strict";var i=n(53),a=n(37),s=n(107);e.a={name:"cell",components:{InlineDesc:i.a},props:Object(s.a)(),beforeMount:function(){this.hasTitleSlot=!!this.$slots.title},computed:{valueClass:function(){return{"vux-cell-primary":"content"===this.primary||"left"===this.valueAlign,"vux-cell-align-left":"left"===this.valueAlign,"vux-cell-arrow-transition":!!this.arrowDirection,"vux-cell-arrow-up":"up"===this.arrowDirection,"vux-cell-arrow-down":"down"===this.arrowDirection}},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}}},methods:{getLabelStyles:function(){return{width:this.$parent.labelWidth||this.$parent.$parent.labelWidth,textAlign:this.$parent.labelAlign||this.$parent.$parent.labelAlign,marginRight:this.$parent.labelMarginRight||this.$parent.$parent.labelMarginRight}},onClick:function(){!this.disabled&&Object(a.a)(this.link,this.$router)}},data:function(){return{hasTitleSlot:!1}}}},function(t,e){},function(t,e,n){"use strict";e.a={name:"inline-desc"}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"vux-label-desc"},[t._t("default")],2)},a=[],s={render:i,staticRenderFns:a};e.a=s},,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weui-cell",class:{"vux-tap-active":t.isLink||!!t.link,"weui-cell_access":t.isLink||!!t.link,"vux-cell-no-border-intent":!t.borderIntent,"vux-cell-disabled":t.disabled},on:{click:t.onClick}},[n("div",{staticClass:"weui-cell__hd"},[t._t("icon")],2),t._v(" "),n("div",{staticClass:"vux-cell-bd",class:{"vux-cell-primary":"title"===t.primary&&"left"!==t.valueAlign}},[n("p",[t.title||t.hasTitleSlot?n("label",{staticClass:"vux-label",class:t.labelClass,style:t.getLabelStyles()},[t._t("title",[t._v(t._s(t.title))])],2):t._e(),t._v(" "),t._t("after-title")],2),t._v(" "),n("inline-desc",[t._t("inline-desc",[t._v(t._s(t.inlineDesc))])],2)],1),t._v(" "),n("div",{staticClass:"weui-cell__ft",class:t.valueClass},[t._t("value"),t._v(" "),t._t("default",[t._v(t._s(t.value))]),t._v(" "),t.isLoading?n("i",{staticClass:"weui-loading"}):t._e()],2),t._v(" "),t._t("child")],2)},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";function i(t){n(110)}var a=n(111),s=n(112),o=n(0),r=i,c=o(a.a,s.a,r,null,null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";e.a={name:"drawer",props:{show:{type:Boolean,default:!1},placement:{type:String,default:"left"},showMode:{type:String,default:"overlay"},drawerStyle:Object},data:function(){return{drawerWidth:0,translateX:0}},watch:{show:function(){this.show?this.$emit("on-show"):this.$emit("on-hide"),"overlay"!==this.showMode&&(this.show?this.translateX="left"===this.placement?this.drawerWidth:-this.drawerWidth:this.translateX=0)}},methods:{hideMask:function(){this.$emit("update:show",!1)}},mounted:function(){this.$nextTick(function(){this.drawerWidth=this.$refs.drawer.clientWidth})}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-drawer"},[n("div",{staticClass:"vux-drawer-body",style:{transform:"translate3d("+t.translateX+"px, 0, 0)"}},[t._t("default"),t._v(" "),n("div",{staticClass:"drawer-mask",class:t.show?"vux-drawer-active":"",on:{click:t.hideMask}})],2),t._v(" "),n("div",{ref:"drawer",staticClass:"vux-drawer-content",class:["left"!==t.placement?"drawer-right":"drawer-left",t.show?"vux-drawer-active":""],style:t.drawerStyle},[t._t("drawer")],2)])},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e){},function(t,e,n){"use strict";e.a={name:"group",props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:[String,Number]}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.title?n("div",{staticClass:"weui-cells__title",style:{color:t.titleColor},domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t._t("title"),t._v(" "),n("div",{staticClass:"weui-cells",class:{"vux-no-group-title":!t.title},style:{marginTop:"number"==typeof t.gutter?t.gutter+"px":t.gutter}},[t._t("after-title"),t._v(" "),t._t("default")],2)],2)},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e){},function(t,e,n){"use strict";e.a={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading"},[n("div",{staticClass:"weui-mask_transparent"}),t._v(" "),n("div",{staticClass:"weui-toast",style:{position:t.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),n("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2)])])])},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";function i(t){n(120)}var a=n(121),s=n(122),o=n(0),r=i,c=o(a.a,s.a,r,null,null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var i=n(38);e.a={name:"tabbar",mixins:[i.b],props:{iconClass:String}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"weui-tabbar"},[t._t("default")],2)},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";var i=n(124),a=n(129),s=n(0),o=s(i.a,a.a,null,null,null);e.a=o.exports},function(t,e,n){"use strict";var i=n(38),a=n(125);e.a={name:"tabbar-item",components:{Badge:a.a},beforeMount:function(){this.$slots.icon||(this.simple=!0),this.$slots["icon-active"]&&(this.hasActiveIcon=!0)},mixins:[i.a],props:{showDot:{type:Boolean,default:!1},badge:String,link:[String,Object],iconClass:String},computed:{isActive:function(){return this.$parent.index===this.currentIndex}},data:function(){return{simple:!1,hasActiveIcon:!1}}}},function(t,e,n){"use strict";function i(t){n(126)}var a=n(127),s=n(128),o=n(0),r=i,c=o(a.a,s.a,r,null,null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";e.a={name:"badge",props:{text:[String,Number]}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{class:["vux-badge",{"vux-badge-dot":void 0===t.text,"vux-badge-single":void 0!==t.text&&1===t.text.toString().length}],domProps:{textContent:t._s(t.text)}})},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"weui-tabbar__item",class:{"weui-bar__item_on":t.isActive,"vux-tabbar-simple":t.simple},attrs:{href:"javascript:;"},on:{click:function(e){t.onItemClick(!0)}}},[t.simple?t._e():n("div",{staticClass:"weui-tabbar__icon",class:[t.iconClass||t.$parent.iconClass,{"vux-reddot":t.showDot}]},[t.simple||t.hasActiveIcon&&t.isActive?t._e():t._t("icon"),t._v(" "),!t.simple&&t.hasActiveIcon&&t.isActive?t._t("icon-active"):t._e(),t._v(" "),t.badge?n("sup",[n("badge",{attrs:{text:t.badge}})],1):t._e()],2),t._v(" "),n("p",{staticClass:"weui-tabbar__label"},[t._t("label")],2)])},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";function i(t){n(131)}var a=n(132),s=n(133),o=n(0),r=i,c=o(a.a,s.a,r,null,null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";e.a={name:"view-box",props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(t){this.$refs.viewBoxBody.scrollTop=t},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weui-tab"},[t._t("header"),t._v(" "),n("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:t.bodyPaddingTop,paddingBottom:t.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[t._t("default")],2),t._v(" "),t._t("bottom")],2)},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";function i(t){n(135)}var a=n(136),s=n(137),o=n(0),r=i,c=o(a.a,s.a,r,null,null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var i=n(22),a=n.n(i);e.a={name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return a()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-header"},[n("div",{staticClass:"vux-header-left"},[t._t("overwrite-left",[n("transition",{attrs:{name:t.transition}},[n("a",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},t.onClickBack]}},[t._v(t._s(void 0===t._leftOptions.backText?"返回":t._leftOptions.backText))])]),t._v(" "),n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:t.onClickBack}})])]),t._v(" "),t._t("left")],2),t._v(" "),t.shouldOverWriteTitle?t._e():n("h1",{staticClass:"vux-header-title",on:{click:function(e){t.$emit("on-click-title")}}},[t._t("default",[n("transition",{attrs:{name:t.transition}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])])],2),t._v(" "),t.shouldOverWriteTitle?n("div",{staticClass:"vux-header-title-area"},[t._t("overwrite-title")],2):t._e(),t._v(" "),n("div",{staticClass:"vux-header-right"},[t.rightOptions.showMore?n("a",{staticClass:"vux-header-more",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},function(e){t.$emit("on-click-more")}]}}):t._e(),t._v(" "),t._t("right")],2)])},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%"}},[n("div",[n("loading",{model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}})],1),t._v(" "),n("drawer",{attrs:{show:t.drawerVisibility,width:"200px;","show-mode":"overlay",placement:"left","drawer-style":{"background-color":"#35495e",width:"200px"}},on:{"update:show":function(e){t.drawerVisibility=e}}},[n("div",{slot:"drawer"},[n("group",{staticStyle:{"margin-top":"20px"},attrs:{title:t.user.username||"未登陆！"}},[t.user.username?t._e():n("cell",{attrs:{title:"登录",link:"/login"},nativeOn:{click:function(e){t.hideDrawer(e)}}}),t._v(" "),t.user.username?t._e():n("cell",{attrs:{title:"注册",link:"/register"},nativeOn:{click:function(e){t.hideDrawer(e)}}}),t._v(" "),t.user.username?n("cell",{attrs:{title:"退出",link:"/logout"},nativeOn:{click:function(e){t.hideDrawer(e)}}}):t._e()],1)],1),t._v(" "),n("view-box",{ref:"viewBox",attrs:{"body-padding-top":"46px","body-padding-bottom":"52px"}},[n("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"100"},attrs:{"left-options":t.leftOptions,"right-options":t.rightOptions,title:t.title},on:{"on-click-more":t.onClickMore},slot:"header"},[t.showDrawerIcon?n("span",{on:{click:t.toggleDrawer},slot:"overwrite-left"},[n("svg",{staticClass:"vux-x-icon vux-x-icon-navicon",staticStyle:{fill:"#fff",position:"relative",top:"-8px",left:"-3px"},attrs:{type:"navicon",size:"35",xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M96 241h320v32H96zm0-96h320v32H96zm0 192h320v32H96z"}})])]):t._e()]),t._v(" "),n("transition",{attrs:{name:"vux-pop-"+("forward"===t.direction?"in":"out")},on:{"after-enter":function(e){t.$vux.bus&&t.$vux.bus.$emit("vux:after-view-enter")}}},[n("router-view",{staticClass:"router-view"})],1),t._v(" "),n("tabbar",{staticClass:"vux-demo-tabbar",attrs:{"icon-class":"vux-center"},slot:"bottom"},[n("tabbar-item",{attrs:{link:{path:"/"},selected:"/"===t.$route.path}},[n("span",{staticClass:"demo-icon-22 vux-demo-tabbar-icon-home",staticStyle:{position:"relative",top:"-2px"},slot:"icon"},[t._v("")]),t._v(" "),n("span",{slot:"label"},[t._v("主页")])]),t._v(" "),n("tabbar-item",{attrs:{link:{path:"/new"},selected:"/new"===t.$route.path}},[n("span",{staticClass:"demo-icon-22",slot:"icon"},[t._v("")]),t._v(" "),n("span",{slot:"label"},[t._v("新记录")])]),t._v(" "),n("tabbar-item",{attrs:{link:{path:"/records"},selected:"/records"===t.$route.path}},[n("span",{staticClass:"demo-icon-22",slot:"icon"},[t._v("")]),t._v(" "),n("span",{slot:"label"},[t._v("所有记录")])])],1)],1)],1)],1)},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e){t.exports=VueRouter},function(t,e,n){"use strict";function i(t){n(141)}var a=n(142),s=n(143),o=n(0),r=i,c=o(a.a,s.a,r,"data-v-da417f82",null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";e.a={name:"hello",data:function(){return{count:0}},methods:{increaseCount:function(){this.count++}}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h1",[t._v("欢迎记账！")])])}],s={render:i,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";function i(t){n(145)}var a=n(146),s=n(147),o=n(0),r=i,c=o(a.a,s.a,r,"data-v-40636754",null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";e.a={name:"profile",props:{user:{type:Object,default:function(){return{Name:"Alex",Gender:"Man",Age:24}}}},methods:{lazyLoadTest:function(){this.$router.push({name:"AsyncTest"})}},computed:{name:function(){return this.user.Name},gender:function(){return this.user.Gender},age:function(){return this.user.Age}}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("el-button",{on:{click:t.lazyLoadTest}},[t._v("Async Load")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"cell"},[t._v("Name:")]),t._v(" "),n("div",{staticClass:"cell"},[t._v(t._s(t.name))])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"cell"},[t._v("Gender")]),t._v(" "),n("div",{staticClass:"cell"},[t._v(t._s(t.gender))])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"cell"},[t._v("Age")]),t._v(" "),n("div",{staticClass:"cell"},[t._v(t._s(t.age))])]),t._v(" "),n("router-view")],1)},a=[],s={render:i,staticRenderFns:a};e.a=s},,,,,,,,,function(t,e,n){"use strict";var i=n(35),a=n.n(i),s=n(7),o=n.n(s),r=n(21),c=n.n(r),u=n(157),l=n(159),d=n(14);o.a.use(c.a);var f=Object(d.b)(),h={user:f||{},isLoading:!1,direction:"forward",records:[],categoryData:[]};e.a=new c.a.Store({state:h,getters:{categoryData:function(t){return t.categoryData},records:function(t){return t.records},user:function(t){return t.user}},mutations:a()({updateLoadingStatus:function(t,e){t.isLoading=e.isLoading},UPDATE_DIRECTION:function(t,e){t.direction=e}},u.a),actions:a()({updateRecords:function(t,e){(0,t.commit)("UPDATE_RECORDS",e)}},l.a)})},function(t,e,n){"use strict";var i,a=n(158),s=n.n(a),o=n(51);e.a=(i={},s()(i,o.b,function(t,e){t.categoryData=e}),s()(i,o.c,function(t,e){t.records=e}),s()(i,o.d,function(t,e){t.user=e}),s()(i,o.a,function(t,e){t.records=[],t.categoryData=[]}),i)},,function(t,e,n){"use strict";var i=n(160),a=n(161),s=n(51),o=n(7),r=n.n(o),c=n(50),u=n(14);e.a={login:function(t,e){var n=t.commit,i=e.data,o=e.cb;a.a.login(i,function(t){t.error||n(s.d,t),o&&o(t)},function(){})},register:function(t,e){var n=(t.commit,e.data),i=e.cb;a.a.register(n,function(t){i&&i(t)},function(){})},logout:function(t,e){var n=t.commit;Object(u.d)(),r.a.http.headers.common.Authorization="",n(s.d,{}),n(s.a),e&&e()},getCategories:function(t,e){var n=t.commit,a=e.alert,o=e.cb;i.a.getCategories(function(t){1==t.errorCode?a.show({title:"请重新登录！",onHide:function(){c.a.push({name:"Login"})}}):(n(s.b,t),o&&o())},function(){})},getAllRecords:function(t,e){var n=t.commit,a=e.data,o=e.alert;e.cb;i.a.getRecords(a,function(t){1==t.errorCode?o.show({title:"请重新登录！",onHide:function(){c.a.push({name:"Login"})}}):n(s.c,t)},function(){})},saveRecord:function(t,e){var n=(t.commit,e.data),a=e.alert,s=e.cb;i.a.saveRecord(n,function(t){1==t.errorCode?a.show({title:"请重新登录！",onHide:function(){c.a.push({name:"Login"})}}):s&&s(t)},function(){})},deleteRecord:function(t,e){var n=t.commit,a=t.state,o=e.data,r=e.alert,u=e.cb;i.a.deleteRecord(o,function(t){if(1==t.errorCode)r.show({title:"请重新登录！",onHide:function(){c.a.push({name:"Login"})}});else if(t.errorCode>0);else{var e=a.records.filter(function(t){return t.RecordID!=o.recordID});n(s.c,e),u&&u(t)}})}}},function(t,e,n){"use strict";var i=n(7),a=n.n(i);e.a={getCategories:function(t,e){a.a.http.post("api/getCategories").then(function(n){var i=n.body;i.errorCode?t&&t(i):i.Categories&&i.Categories.length>0?t(_.map(i.Categories,function(t){return{name:t.CategoryName,value:t.CategoryID.toString()}})):e&&e()},function(t){e&&e()})},getRecords:function(t,e,n){a.a.http.post("/api/getList").then(function(t){var n=t.body;n.errorCode?e&&e(n):e(n.Records)},function(t){n()})},saveRecord:function(t,e,n){a.a.http.post("/api/save",t).then(function(t){var n=t.body;e&&e(n)},function(t){n&&n()})},deleteRecord:function(t,e,n){a.a.http.post("/api/deleteRecord",t).then(function(t){var n=t.body;e&&e(n)},function(t){n&&n()})}}},function(t,e,n){"use strict";var i=n(7),a=n.n(i),s=n(14);e.a={login:function(t,e,n){a.a.http.post("/login/login",t).then(function(t){var n=t.body;n.error||(Object(s.e)(n.token),a.a.http.headers.common.Authorization="Bearer "+n.token),e(n)},function(t){n()})},register:function(t,e,n){a.a.http.post("/login/register",t).then(function(t){var n=t.body;e(n)},function(t){n()})}}},,,function(t,e){},,,function(t,e,n){"use strict";function i(t){n(168)}var a=n(169),s=n(171),o=n(0),r=i,c=o(a.a,s.a,r,null,null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var i=n(170);e.a={name:"toast",mixins:[i.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}},,function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content"},[t._t("default")],2)])])],1)},a=[],s={render:i,staticRenderFns:a};e.a=s},,function(t,e,n){"use strict";function i(t){n(174)}var a=n(175),s=n(179),o=n(0),r=i,c=o(a.a,s.a,r,null,null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var i=n(52);e.a={name:"alert",components:{XDialog:i.a},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"}},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}},function(t,e){},function(t,e,n){"use strict";e.a={name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0}},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide")}},methods:{onTouchMove:function(t){!this.scroll&&t.preventDefault()},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1))}}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-x-dialog",on:{touchmove:t.onTouchMove}},[n("transition",{attrs:{name:t.maskTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",on:{click:t.hide}})]),t._v(" "),n("transition",{attrs:{name:t.dialogTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},a=[],s={render:i,staticRenderFns:a};e.a=s},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-alert"},[n("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur},on:{"on-hide":function(e){t.$emit("on-hide")},"on-show":function(e){t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[n("div",{staticClass:"weui-dialog__hd"},[n("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"weui-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),n("div",{staticClass:"weui-dialog__ft"},[n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},a=[],s={render:i,staticRenderFns:a};e.a=s},,function(t,e,n){"use strict";function i(t){n(182)}var a=n(183),s=n(184),o=n(0),r=i,c=o(a.a,s.a,r,null,null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var i=n(52);e.a={name:"confirm",components:{XDialog:i.a},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0},inputAttrs:Object},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){var e=this;this.$emit("input",t),t&&(this.showInput&&(this.msg="",setTimeout(function(){e.$refs.input&&e.$refs.input.focus()},300)),this.$emit("on-show"))}},data:function(){return{msg:"",showValue:!1}},methods:{setInputValue:function(t){this.msg=t},_onConfirm:function(){this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg)},_onCancel:function(){this.showValue=!1,this.$emit("on-cancel")}}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("x-dialog",{attrs:{dialogClass:"android"===t.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":t.maskTransition,"dialog-transition":"android"===t.theme?"vux-fade":t.dialogTransition,"hide-on-blur":t.hideOnBlur},on:{"on-hide":function(e){t.$emit("on-hide")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[t.title?n("div",{staticClass:"weui-dialog__hd"},[n("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.showInput?n("div",{staticClass:"vux-prompt"},[n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}},"input",t.inputAttrs,!1))]):n("div",{staticClass:"weui-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),n("div",{staticClass:"weui-dialog__ft"},[n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]),t._v(" "),n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))])])])],1)},a=[],s={render:i,staticRenderFns:a};e.a=s},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){t.exports=_}],[61]);
//# sourceMappingURL=app.19f5056d5ca3dd48c7f4.js.map