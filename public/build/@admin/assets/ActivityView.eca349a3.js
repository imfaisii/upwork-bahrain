import{O as d}from"./overlayscrollbars.8d928870.js";import{_ as m}from"./app.f6b791b5.js";import{f as s,A as t,F as a,C as c,v as n,i as p,e as o,D as l,N as _,O as u}from"./@vue.ca773235.js";import"./apexcharts.8dc8f2aa.js";import"./vue.9ea8e8a6.js";import"./vuex.497f08d2.js";import"./string-similarity.860833b6.js";import"./gsap.8449ad8c.js";import"./vue-router.63e2ccab.js";import"./vuex-persistedstate.fa252374.js";import"./izitoast.765d8918.js";import"./click-outside-vue3.6791b41e.js";import"./floating-vue.8db45bbf.js";import"./@floating-ui.9bdab495.js";import"./axios.ea6880df.js";import"./@vuepic.b319e7e5.js";import"./date-fns.5b6f9246.js";const v={data(){return{activity:null}},mounted(){d(document.querySelector(".activity .entries"),{scrollbars:{autoHide:"leave"},className:"os-theme-thin-light"})},created(){window.axios.post("/admin/activity").then(({data:e})=>{this.activity=e,this.$bus.$emit("loading:done")})}},h=e=>(_("data-v-e7970447"),e=e(),u(),e),y={class:"activity"},f={class:"animate"},g={class:"entries"},k=h(()=>t("div",{class:"h"},[t("div",null,"User"),t("div",null,"Message"),t("div",null,"Time")],-1)),w=["onClick"],N=["src"],S=["innerHTML"];function x(e,V,$,C,r,I){return o(),s("div",y,[t("div",f,[t("div",g,[r.activity?(o(),s(a,{key:0},[k,r.activity.length===0?(o(),s(a,{key:0},[c(" No data to show. ")],64)):n("",!0),(o(!0),s(a,null,p(r.activity,i=>(o(),s("div",{class:"entry",key:i,onClick:T=>e.$router.push("/admin/user/"+i.user._id)},[t("div",null,[t("img",{alt:"",src:i.user.avatar},null,8,N),c(" "+l(i.user.name),1)]),t("div",{innerHTML:i.html},null,8,S),t("div",null,l(i.time),1)],8,w))),128))],64)):n("",!0)])])])}const P=m(v,[["render",x],["__scopeId","data-v-e7970447"]]);export{P as default};
