import{m as o}from"./vuex.db5583be.js";import{O as p}from"./overlayscrollbars.16146508.js";import{B as c,n}from"./app.84788141.js";import{g as m}from"./country-list.a70acff9.js";import"./after.f5f6eafa.js";import"./vue-recaptcha.ac7b26c4.js";import"./vue.2fdc5d8e.js";import"./@glidejs.c34926ed.js";import"./qrcode.124b3fa5.js";import"./encode-utf8.c8acd0c0.js";import"./dijkstrajs.f17cb91e.js";import"./gsap.10236bb8.js";import"./bitcoin-units.c392cbba.js";import"./big.js.5a739493.js";import"./jquery.a5d8725e.js";import"./lodash.a4543754.js";import"./axios.372962c2.js";import"./laravel-echo.1870cf92.js";import"./socket.io-client.4c8cf9d1.js";import"./parseuri.1963fa84.js";import"./socket.io-parser.6220f9fe.js";import"./component-emitter.72d4fec7.js";import"./isarray.396bc49a.js";import"./engine.io-client.915a8ff3.js";import"./has-cors.150b278c.js";import"./engine.io-parser.2ae49814.js";import"./has-binary2.8a78c161.js";import"./arraybuffer.slice.9c094f68.js";import"./base64-arraybuffer.8e0339d2.js";import"./blob.387277be.js";import"./parseqs.ede9f166.js";import"./component-inherit.7edfe7ae.js";import"./yeast.d32d0463.js";import"./indexof.a4b72e6b.js";import"./to-array.b41ea466.js";import"./component-bind.d6d60fa3.js";import"./backo2.46430cfe.js";import"./vue-router.21875538.js";import"./vue-i18n.85d99549.js";import"./vuex-persistedstate.4cde3667.js";import"./vue-izitoast.758affc3.js";import"./vue-feather.e39d5e52.js";import"./feather-icons.5fdfdf40.js";import"./v-mask.d150318c.js";import"./v-click-outside.91688d80.js";import"./vue-infinite-scroll.16ae2245.js";import"./@chenfengyuan.9943b948.js";import"./v-tooltip.0d9af9d3.js";import"./@babel.aa9208ce.js";import"./popper.js.d3cea3a7.js";import"./vue-resize.e71c9b02.js";import"./vue-context.518fc610.js";import"./vue-clickaway.dacb5831.js";import"./vue-content-placeholders.fb834830.js";import"./overlayscrollbars-vue.6a31e3e1.js";import"./country-flag-emoji-polyfill.38b8e49f.js";import"./is-emoji-supported.c13a6994.js";import"./apexcharts.1d8667f6.js";import"./howler.7d01981f.js";const u={props:["game"],data(){return{category:null,suitableMarket:null,suitableRunner:null}},computed:{...o(["sportGames","phoenixShowUnavailableRunners"])},watch:{sportGames(){this.findCategory()},game(){this.findSuitableMarket()},phoenixShowUnavailableRunners(){this.findSuitableMarket()}},methods:{toggleWidget(i){c.$emit("sportMovableWidget:toggle",i)},findCategory(){this.sportGames&&(this.category=this.sportGames.filter(i=>i.id===this.game.category.id)[0])},findSuitableMarket(){let i=null,t=null;for(let e=0;e<this.game.markets.length;e++){const s=this.game.markets[e];if(s.open&&s.runners.length>0&&(s.isAvailable||this.phoenixShowUnavailableRunners)){let a=!1;if(s.runners.forEach(r=>{(r.supported.status||this.phoenixShowUnavailableRunners)&&(t=r,a=!0)}),a){i=s;break}}}return i&&(this.suitableMarket=i,this.suitableRunner=t),i}},mounted(){this.findSuitableMarket(),this.findCategory()}};var d=function(){var t=this,e=t._self._c;return t.category?e("div",{staticClass:"sportGame"},[e("router-link",{staticClass:"info",attrs:{tag:"div",to:"/"+t.sportLink+"/game/"+t.category.id+"/"+t.game.id}},[e("div",{staticClass:"header"},[t.game.live?e("div",{staticClass:"liveIcon"}):t._e(),e("web-icon",{attrs:{icon:t.category.icon}}),t._v(" "+t._s(t.game.name)+" ")],1),e("div",{staticClass:"stage",on:{click:function(s){s.stopPropagation()}}},[e("web-icon",{attrs:{icon:"stats"}}),e("span",{staticClass:"export",on:{click:function(s){return t.toggleWidget(t.game)}}},[e("web-icon",{attrs:{icon:"export"}})],1),t._v(" "+t._s(t.game.liveStatus.stage)+" | "+t._s(t.game.liveStatus.score)+" ")],1),e("div",{staticClass:"date"},[e("web-icon",{attrs:{icon:"time"}}),t._v(" "+t._s(new Date(t.game.liveStatus.createdAt).toLocaleString())+" ")],1),e("div",{staticClass:"competitors"},[e("div",{staticClass:"competitor"},[t._v(t._s(t.game.competitors[0].name))]),e("div",{staticClass:"competitor"},[t._v(t._s(t.game.competitors[1].name))])])]),t.suitableMarket?e("div",{staticClass:"markets"},[e("div",{staticClass:"title"},[t._v(" "+t._s(t.$t(t.suitableRunner.translation.market.key))+" ")]),e("div",{staticClass:"runners"},[t._l(t.suitableMarket.runners.slice(0,3),function(s){return e("bet-slip-button",{key:s.name,class:["market "+(t.suitableMarket.open&&t.game.open&&s.open?"":"disabled"),s.supported.status?"":"unavailable"],attrs:{category:t.category.id,market:t.suitableMarket,runner:s,game:t.game}},[e("div",{staticClass:"runner"},[e("div",{staticClass:"name"},[t._v(" "+t._s(s.open&&t.game.open&&t.suitableMarket.open?t.$t(s.translation.runner.key):"--")+" ")]),e("div",{staticClass:"price"},[t._v(t._s(s.open&&t.game.open&&t.suitableMarket.open?s.price:"--"))])])])}),t.game.totalOddsMT>0?e("div",{staticClass:"moreOdds"},[t._v("+"+t._s(t.game.totalOddsMT))]):t._e()],2)]):t._e()],1):t._e()},h=[],v=n(u,d,h,!1,null,null,null,null);const g=v.exports,f=(i,t)=>{let e=l();e[i]={key:i,time:+new Date,data:t},localStorage.setItem("sportCache",JSON.stringify(e))},_=i=>{const t=l()[i];return t&&+new Date-t.time>1e3*60*5?null:t?t.data:null};function l(){var i;return JSON.parse((i=localStorage.getItem("sportCache"))!=null?i:"{}")}const C={data(){return{active:null,line:null,updateInterval:null,loadingLine:!1,expandedLeagues:[],toggledLeaguesAtLeastOnce:[],showPage:!0,page:1}},watch:{sportFilter(){this.loadingLine=!1,this.line=null,this.reInit()},sportType(){this.reInit()},active(){this.page=1,this.line=_(this.active.id),clearInterval(this.updateInterval),this.updateInterval=setInterval(()=>this.load(),1500),this.load()},sportGames(){this.showPage=!1,this.active==null&&this.setCategory(),this.$nextTick(()=>{this.showPage=!0,this.$nextTick(this.initScrollbars)})}},mounted(){this.sportGames!=null&&this.setCategory(),this.$nextTick(this.initScrollbars)},beforeDestroy(){clearInterval(this.updateInterval)},methods:{getFlagEmoji(i){i==="Turkiye"&&(i="Turkey"),i==="England"&&(i="United Kingdom"),i==="Russia"&&(i="Russian Federation");const t=m(i);if(t==null)return null;const e=t.toUpperCase().split("").map(s=>127397+s.charCodeAt());return String.fromCodePoint(...e)},reInit(){this.page=1,this.showPage=!1,this.setCategory(),this.$nextTick(()=>{this.showPage=!0,this.$nextTick(this.initScrollbars)})},initScrollbars(){p(document.querySelector(".categories"),{scrollbars:{autoHide:"leave"},className:"os-theme-thin-light"})},expand(i,t){this.sportFilter==="upcoming"?this.isExpanded(i,t)?this.expandedLeagues=this.expandedLeagues.filter(e=>e!==i):this.expandedLeagues.push(i):this.isExpanded(i,t)?this.expandedLeagues.push(i):this.expandedLeagues=this.expandedLeagues.filter(e=>e!==i),this.toggledLeaguesAtLeastOnce.push(i)},c(i){return this.sportGames.filter(t=>t.id===this.line.games.filter(e=>e.league.name===i)[0].category)[0]},isExpanded(i,t){return(this.isLeagueView||this.sportFilter==="live")&&(!this.expandedLeagues.includes(i)||!this.toggledLeaguesAtLeastOnce.includes(i)&&this.sportFilter==="upcoming"&&t===0)},filter(i){return i.filter(t=>this.sportFilter==="live"?t.live:!0).sort((t,e)=>t.liveStatus.createdAt-e.liveStatus.createdAt).sort((t,e)=>t.live&&!e.live?1:-1)},setCategory(){const i=this.sportGames.filter(e=>e.sportType===this.sportType&&e[this.sportFilter==="live"?"liveCount":"totalCount"]>0)[0],t=()=>this.active=i||this.sportGames[0];if(this.$route.params.id)try{const e=this.sportGames.filter(s=>s.id===this.$route.params.id&&s[this.sportFilter==="live"?"liveCount":"totalCount"]>0)[0];e?this.active=e:t()}catch{t()}else t()},load(){if(!this.active||this.loadingLine)return;const i=this.active.id;this.loadingLine=!0,axios.post("/api/sport/live",{type:this.active.id,isLive:this.sportFilter==="live"}).then(({data:t})=>{this.loadingLine=!1,this.active.id===i&&(this.line=t,f(this.active.id,t))}).catch(()=>{this.loadingLine=!1})}},components:{SportGame:g},computed:{...o(["sportGames","sportFilter"]),isLeagueView(){return this.$route.params.league},leagues(){let i=this.filter(this.line.games).map(t=>t.league.name);return this.isLeagueView&&(i=i.filter(t=>t===this.$route.params.league)),Array.from(new Set(i))}}};var k=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:()=>t.page++,expression:"() => page++"}],staticClass:"container sportIndex"},[t.sportGames&&t.showPage?[t.active?[e("div",{staticClass:"categoriesContainer"},[e("div",{staticClass:"categories"},t._l(t.sportGames.filter(s=>s.sportType===t.sportType),function(s){return s[t.sportFilter==="live"?"liveCount":"totalCount"]>0?e("div",{key:s.id,staticClass:"category",class:s.id===t.active.id?"active":"",on:{click:function(a){return t.$router.push("/"+t.sportLink+"/category/"+s.id)}}},[e("div",{staticClass:"icon"},[e("web-icon",{attrs:{icon:s.icon}})],1),e("div",{staticClass:"name"},[e("div",[t._v(t._s(s.name))]),t.sportFilter==="live"?e("div",{staticClass:"liveCount"},[t._v(t._s(s.liveCount))]):t._e()])]):t._e()}),0)]),e("div",{staticClass:"line"},[t.line?[t.line.games.length===0?e("div",{staticClass:"emptyCategory"},[e("web-icon",{attrs:{icon:"time"}}),t._v(" "+t._s(t.$t("sport.emptyCategoryTitle"))+" ")],1):t._e(),t.isLeagueView?e("button",{staticClass:"btn btn-primary goBack",on:{click:function(s){return t.$router.push("/"+t.sportLink+"/category/"+t.active.id)}}},[e("web-icon",{attrs:{icon:"fal fa-chevron-left"}}),t._v(" Back ")],1):t._e(),t._l(t.leagues.slice(0,3*this.page),function(s,a){return e("div",{key:s,staticClass:"league"},[e("div",{staticClass:"leagueHeader",class:t.isExpanded(s,a)?"active":"",on:{click:function(r){t.sportFilter==="live"||t.isLeagueView?t.expand(s,a):t.$router.push("/"+t.sportLink+"/league/"+t.active.id+"/"+s)}}},[t.c(s)?e("web-icon",{attrs:{icon:t.c(s).icon}}):t._e(),t._v(" "+t._s((t.c(s)?t.c(s).id+" - ":t.getFlagEmoji(s.split(" - ")[0])?t.getFlagEmoji(s.split(" - ")[0])+"\u2003":"")+s)+" "),e("i",{staticClass:"toggleChevron",class:t.isExpanded(s,a)?"fal fa-chevron-down":"fal fa-chevron-left"})],1),t.isExpanded(s,a)?e("div",{staticClass:"leagueGames"},t._l(t.filter(t.line.games.filter(r=>r.league.name===s)),function(r){return e("sport-game",{key:r.id,attrs:{game:r}})}),1):t._e()])})]:e("loader")],2)]:e("loader")]:e("loader")],2)},b=[],x=n(C,k,b,!1,null,null,null,null);const Ft=x.exports;export{Ft as default};