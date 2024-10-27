import{D as h}from"./DashboardSwitch.dc169bb3.js";import{_ as g,W as y}from"./app.f6b791b5.js";import{f as l,A as t,g as r,C as d,I as w,v as c,Q as p,e as _,N as b,O as f,a3 as I}from"./@vue.ca773235.js";import"./vue.9ea8e8a6.js";import"./vuex.497f08d2.js";import"./overlayscrollbars.8d928870.js";import"./apexcharts.8dc8f2aa.js";import"./string-similarity.860833b6.js";import"./gsap.8449ad8c.js";import"./vue-router.63e2ccab.js";import"./vuex-persistedstate.fa252374.js";import"./izitoast.765d8918.js";import"./click-outside-vue3.6791b41e.js";import"./floating-vue.8db45bbf.js";import"./@floating-ui.9bdab495.js";import"./axios.ea6880df.js";import"./@vuepic.b319e7e5.js";import"./date-fns.5b6f9246.js";const S={data(){return{data:null}},methods:{set(a,e){window.axios.post("/admin/slots/setValue",{key:a,value:e})}},created(){window.axios.post("/admin/slots/settings").then(({data:a})=>{this.data=a,this.$bus.$emit("loading:done")})},components:{WebIcon:y,DashboardSwitch:h}},i=a=>(b("data-v-154a91e4"),a=a(),f(),a),x={key:0,class:"slots animate"},k=i(()=>t("div",{class:"ogTitle"},"Slotegrator",-1)),C={class:"switch"},V={class:"type"},D=i(()=>t("div",{class:"smTitle"},"API key type",-1)),E=["selected"],N=["selected"],P={class:"editContent"},T=i(()=>t("div",{class:"smTitle"}," Credentials ",-1)),A={class:"edit"},M=["value"],B=["value"],K=["value"],L={key:0,class:"btn btn-primary fit",onclick:"window.open('/admin/slots/slotegratorValidate', '_blank')"};function R(a,e,U,W,s,n){const u=p("dashboard-switch"),m=p("web-icon"),v=I("tooltip");return s.data?(_(),l("div",x,[k,t("div",C,[r(u,{value:s.data.enabled==="true",onChange:o=>n.set("[Slotegrator] Enabled",o+"")},null,8,["value","onChange"]),d(" Enabled ")]),t("div",V,[D,t("select",{onChange:e[0]||(e[0]=o=>{n.set("[Slotegrator] Key Type",o.target.value),s.data.type=o.target.value})},[t("option",{value:"staging",selected:s.data.type==="staging"},"Staging",8,E),t("option",{value:"production",selected:s.data.type==="production"},"Production",8,N)],32),t("div",P,[T,t("div",A,[t("input",{type:"text",placeholder:"Merchant ID",value:s.data.id,onInput:e[1]||(e[1]=o=>n.set("[Slotegrator] Merchant ID",o.target.value))},null,40,M),t("input",{type:"text",placeholder:"Merchant Key",value:s.data.key,onInput:e[2]||(e[2]=o=>n.set("[Slotegrator] Merchant Key",o.target.value))},null,40,B),t("input",{type:"text",placeholder:"API URL",value:s.data.url,onInput:e[3]||(e[3]=o=>n.set("[Slotegrator] API URL",o.target.value))},null,40,K),s.data.type==="staging"?w((_(),l("button",L,[r(m,{icon:"fal fa-sync fa-fw"}),d(" Self-validate")])),[[v,"Play any slot game before clicking this button."]]):c("",!0)])])])])):c("",!0)}const nt=g(S,[["render",R],["__scopeId","data-v-154a91e4"]]);export{nt as default};
