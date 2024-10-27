import{_ as I,W}from"./app.f6b791b5.js";import{D as N}from"./DashboardSpinner.225c547d.js";import{f as n,A as t,F as m,C as u,D as c,x as f,g as w,z as C,s as D,v as r,i as y,e as o,B as b,N as A,O as P,Q as x}from"./@vue.ca773235.js";import"./vue.9ea8e8a6.js";import"./vuex.497f08d2.js";import"./overlayscrollbars.8d928870.js";import"./apexcharts.8dc8f2aa.js";import"./string-similarity.860833b6.js";import"./gsap.8449ad8c.js";import"./vue-router.63e2ccab.js";import"./vuex-persistedstate.fa252374.js";import"./izitoast.765d8918.js";import"./click-outside-vue3.6791b41e.js";import"./floating-vue.8db45bbf.js";import"./@floating-ui.9bdab495.js";import"./axios.ea6880df.js";import"./@vuepic.b319e7e5.js";import"./date-fns.5b6f9246.js";const F=(s,i)=>s*i;const B={data(){return{types:{local:{name:"Local",badge:"#2b892e"},native:{name:"Self-hosted node",badge:"#d73737"},commerce:{name:"Coinbase Commerce",badge:"#0775c3"},tron:{name:"Tron",badge:"#d73737"},infura:{name:"Infura",badge:"#d73737"}},nodes:null,totalUsdBalance:0,license:null,isHttps:!0,commerceSettings:null,expandCommerceSettings:!1}},watch:{nodes(){this.totalUsdBalance=0,this.nodes.forEach(s=>{s.wallet&&s.wallet.balance!==-1&&(this.totalUsdBalance+=F(s.wallet.balance,s.price))})}},methods:{setCCApiKey(s){window.axios.post("/admin/nodes/commerce/setApiKey",{key:s})},load(s=null){window.axios.post("/admin/license/info").then(({data:i})=>this.license=i),window.axios.post("/admin/nodes/commerce/settings").then(({data:i})=>this.commerceSettings=i),window.axios.post("/admin/nodes/list").then(({data:i})=>{this.nodes=this.resort(i),this.$bus.$emit("progress:done"),s&&s()})},changeParameter(s,i,d){window.axios.post("/admin/currencyOption",{currency:s,option:i,value:d}),this.nodes.filter(p=>p.id===s)[0].settings.filter(p=>p.id===i)[0].value=d},setupNode(s){window.axios.post("/admin/wallet/setup",{id:s}).then(()=>{this.load(()=>{this.nodes.filter(i=>i.id===s)[0].settings.filter(i=>i.id==="transfer_address")[0].value==="1"&&this.$toast.error("Failed to create wallet address. Make sure that node is running.")})})},toggle(s){s.disabled=!0,window.axios.post("/admin/toggleCurrency",{walletId:s.id,type:s.enabled?"disabled":"enabled"}).then(()=>{s.disabled=!1,this.load()})},resort(s){return s.sort((i,d)=>i.enabled===d.enabled?0:i.enabled?-1:1)},send(s){const i=prompt(`Enter destination ${s.shortName} address: `);if(!!i)if(s.id.startsWith("native_eth")){if(!confirm(`You are going to send all ${s.shortName} deposits to ${i}.
Are you sure?`))return;window.axios.post("/admin/ethereumNativeSendDeposits",{node:s.id,toAddr:i}).then(()=>this.$toast.success("Success")).catch(()=>this.$toast.error("Failed to send"))}else{let d=prompt("Enter amount:");if(!d||isNaN(parseFloat(d))){if(!d)return;alert("Invalid amount (not a number).");return}if(d=parseFloat(d),!confirm(`You are going to send ${d.toFixed(s.zeros)} to ${i} (${s.shortName}).
Are you sure?`))return;window.axios.post("/admin/wallet/transfer",{currency:s.id,amount:d,address:i}).then(()=>this.$toast.success("Success")).catch(()=>this.$toast.error("Error"))}}},created(){this.load(()=>this.$bus.$emit("loading:done")),this.isHttps=window.location.protocol==="https:"},components:{DashboardSpinner:N,WebIcon:W}},h=s=>(A("data-v-d87e6759"),s=s(),P(),s),T={class:"wallet"},U={class:"pageTitle"},$={key:0,class:"animate"},z={key:0,class:"guide"},E=h(()=>t("div",{class:"title"},[t("div",{class:"type"},"Configuration"),u(" Coinbase Commerce ")],-1)),L={class:"info"},O=h(()=>t("div",{class:"key"},[t("div",null,"Coinbase Commerce API key"),t("div",{class:"description"},[u(" Register "),t("b",null,"self-managed"),u(" account on "),t("a",{href:"https://commerce.coinbase.com/signup",target:"_blank"},"Coinbase Commerce"),u(". "),t("br"),u(" Generate your API key on "),t("a",{href:"https://beta.commerce.coinbase.com/settings/security",target:"_blank"},"this page"),u(". ")])],-1)),V={class:"value"},Y=["value"],H={class:"info"},K={class:"key"},R=h(()=>t("div",null,"Webhook",-1)),M={key:0,class:"description"},j=h(()=>t("a",{href:"https://beta.commerce.coinbase.com/settings/notifications",target:"_blank"},"this page",-1)),G=h(()=>t("br",null,null,-1)),Q=h(()=>t("b",null,"https://Cryptomania.gg/api/commerce/callback",-1)),q={key:0,class:"atLeastOne"},J=h(()=>t("div",{style:{height:"25px"}},null,-1)),X=["onClick"],Z={class:"title"},ee={key:0,class:"type"},te={key:0,class:"balance"},se={key:0,class:"info"},ie=h(()=>t("div",{class:"key"},"Wallet",-1)),oe={class:"value"},ae=h(()=>t("div",null,"Click this button to create wallet address.",-1)),ne={key:0,class:"attention"},le=["onClick","disabled"],re=["onclick"],ce=["onClick"],de={class:"info"},he=h(()=>t("div",{class:"key"},"ID",-1)),ue={class:"value"},me={class:"info"},_e=h(()=>t("div",{class:"key"},"Wallet ID",-1)),pe={class:"value"},ve={key:1,class:"info"},ye=h(()=>t("div",{class:"key"},"USD Price",-1)),be={class:"value"},ke={key:2,class:"info"},ge=h(()=>t("div",{class:"key"},"Chains",-1)),fe={class:"value"},we={class:"key"},Ce={class:"description"},xe={class:"value"},Se=["readonly","value","onChange"],Ie=["onClick"],We=["onClick","disabled"],Ne={key:6,class:"atLeastOne"},De={key:7,class:"atLeastOne"},Ae={key:0,class:"separator"};function Pe(s,i,d,p,l,_){const k=x("web-icon"),S=x("dashboard-spinner");return o(),n("div",T,[t("div",U,[l.nodes?(o(),n(m,{key:1},[u("$"+c(l.totalUsdBalance.toFixed(2))+" ",1),t("i",{class:"far fa-fw fa-sync-alt",onClick:i[0]||(i[0]=e=>_.load())})],64)):(o(),n(m,{key:0},[u("Wallet")],64))]),l.nodes?(o(),n("div",$,[l.nodes.filter(e=>e.enabled&&e.id.startsWith("commerce_")).length>0?(o(),n("div",z,[t("div",{class:"block",onClick:i[3]||(i[3]=e=>l.expandCommerceSettings=!l.expandCommerceSettings)},[t("div",{class:f(["header",l.expandCommerceSettings?"active":""])},[w(k,{icon:"cog"}),E],2),l.expandCommerceSettings?(o(),n("div",{key:0,class:"content",onClick:i[2]||(i[2]=C(()=>{},["stop"]))},[t("div",L,[O,t("div",V,[l.commerceSettings?(o(),n("input",{key:0,type:"text",placeholder:"API key",value:l.commerceSettings.commerceApiKey,onInput:i[1]||(i[1]=e=>_.setCCApiKey(e.target.value))},null,40,Y)):(o(),D(S,{key:1}))])]),t("div",H,[t("div",K,[R,(o(),n("div",M,[u(" Create webhook on "),j,u(" with URL: "),G,Q]))])]),l.isHttps?r("",!0):(o(),n("div",q," Your server must be configured to use HTTPS. "))])):r("",!0)]),J])):r("",!0),(o(!0),n(m,null,y(l.nodes,(e,g)=>(o(),n(m,{key:e.id},[t("div",{class:"block",onClick:a=>e.expand=!e.expand},[t("div",{class:f(["header",e.expand?"active":""])},[w(k,{style:b({color:e.style}),icon:e.icon},null,8,["style","icon"]),t("div",Z,[e.isToken?(o(),n("div",ee,"Token")):(o(),n("div",{key:1,class:"type",style:b({background:l.types[e.id.split("_")[0]].badge})},c(l.types[e.id.split("_")[0]].name),5)),u(" "+c(e.shortName),1)]),e.wallet&&e.type==="coin"&&e.wallet.balance!==-1?(o(),n("div",te,c(e.wallet.balance.toFixed(e.zeros)),1)):r("",!0)],2),e.expand?(o(),n("div",{key:0,class:"content",onClick:i[4]||(i[4]=C(()=>{},["stop"]))},[e.wallet?(o(),n(m,{key:0},[e.wallet.address&&(e.id.startsWith("native_")||e.id.startsWith("tron_"))&&!e.id.startsWith("native_eth")?(o(),n("div",se,[ie,t("div",oe,[e.wallet.address==="1"?(o(),n(m,{key:0},[s.$permission.checkPermission("*")?(o(),n(m,{key:0},[ae,e.settings.filter(a=>a.id==="rpc")[0]&&e.settings.filter(a=>a.id==="rpc")[0].value==="1"?(o(),n("div",ne," Configure RPC url! ")):r("",!0),t("div",null,[t("button",{class:"btn btn-primary",onClick:a=>_.setupNode(e.id),disabled:s.$isDemo||e.settings.filter(a=>a.id==="rpc")[0]&&e.settings.filter(a=>a.id==="rpc")[0].value==="1"},"Create",8,le)])],64)):(o(),n(m,{key:1},[u(" Contact your system administrator to create wallet address for this currency. ")],64))],64)):(o(),n(m,{key:1},[t("div",{class:"address",style:b({userSelect:e.wallet.url?"":"all"}),onclick:e.wallet.url?`window.open('${e.wallet.url.replace("%s",e.wallet.address)}', '_blank')`:""},c(e.wallet.address),13,re),t("div",{class:"balance",onClick:a=>_.send(e)},c(e.wallet.balance.toFixed(e.zeros))+" "+c(e.shortName),9,ce)],64))])])):r("",!0)],64)):r("",!0),t("div",de,[he,t("div",ue,c(e.id),1)]),t("div",me,[_e,t("div",pe,c(e.walletId),1)]),e.price?(o(),n("div",ve,[ye,t("div",be,"$"+c(e.price),1)])):r("",!0),e.chains.length>0?(o(),n("div",ke,[ge,t("div",fe,c(e.chains.map(a=>a.name).join(", ")),1)])):r("",!0),s.$permission.checkPermission("wallet","edit")?(o(!0),n(m,{key:3},y(e.settings,a=>(o(),n("div",{class:"info",key:a.name},[t("div",we,[t("div",null,c(a.name),1),t("div",Ce,[(o(!0),n(m,null,y(a.description.split(`
`),v=>(o(),n("div",{key:v},c(v),1))),128))])]),t("div",xe,[t("input",{readonly:a.readOnly,type:"text",value:a.value,onChange:v=>_.changeParameter(e.id,a.id,v.target.value)},null,40,Se)])]))),128)):r("",!0),(e.id.startsWith("tron_")||e.id.startsWith("native_"))&&e.wallet?(o(),n("button",{key:4,class:"btn btn-secondary",onClick:a=>_.send(e)},"Send",8,Ie)):r("",!0),s.$permission.checkPermission("wallet","edit")?(o(),n("button",{key:5,class:"btn btn-primary",onClick:a=>_.toggle(e),disabled:s.$isDemo||e.disabled||l.nodes.filter(a=>a.enabled).length<=1&&e.enabled||l.nodes.filter(a=>a.enabled&&a.walletId===e.walletId&&a.id!==e.id).length>0&&!e.enabled},c(e.enabled?"Disable":"Enable"),9,We)):r("",!0),l.nodes.filter(a=>a.enabled).length<=1&&e.enabled?(o(),n("div",Ne," You can't disable this currency now. Website should have at least 1 enabled currency. ")):r("",!0),l.nodes.filter(a=>a.enabled&&a.walletId===e.walletId&&a.id!==e.id).length>0&&!e.enabled?(o(),n("div",De," You can only use one type at once. Disable another type of "+c(e.name)+" before enabling this. ",1)):r("",!0)])):r("",!0)],8,X),e.enabled&&l.nodes[g+1]&&!l.nodes[g+1].enabled?(o(),n("div",Ae)):r("",!0)],64))),128))])):r("",!0)])}const qe=I(B,[["render",Pe],["__scopeId","data-v-d87e6759"]]);export{qe as default};
