import{_ as b,W as w}from"./app.f6b791b5.js";import{_ as p}from"./LoadingModal.a415cab1.js";import{_ as r}from"./CompilerModalOutput.6f9ec5f7.js";import{m as v}from"./vuex.497f08d2.js";import{f as _,A as e,x as l,g as h,C as c,D as f,I as g,a4 as N,v as W,e as u,N as y,O as D,Q as x}from"./@vue.ca773235.js";import"./vue.9ea8e8a6.js";import"./overlayscrollbars.8d928870.js";import"./apexcharts.8dc8f2aa.js";import"./string-similarity.860833b6.js";import"./gsap.8449ad8c.js";import"./vue-router.63e2ccab.js";import"./vuex-persistedstate.fa252374.js";import"./izitoast.765d8918.js";import"./click-outside-vue3.6791b41e.js";import"./floating-vue.8db45bbf.js";import"./@floating-ui.9bdab495.js";import"./axios.ea6880df.js";import"./@vuepic.b319e7e5.js";import"./date-fns.5b6f9246.js";import"./LoaderAnimation.f430cb8d.js";const k={data(){return{initialWebsiteName:null}},computed:{...v(["websiteName"])},watch:{websiteName(){this.initialWebsiteName===null&&this.websiteName!==null&&(this.initialWebsiteName=this.websiteName)}},mounted(){this.$bus.$emit("loading:done"),this.websiteName!==null&&(this.initialWebsiteName=this.websiteName)},methods:{changeWebName(o){window.axios.post("/admin/appearance/setWebsiteName",{name:o}).then(()=>this.$store.dispatch("updateData"))},createUploader(o){const t=document.createElement("input");t.type="file",t.onchange=()=>o(t.files[0]),t.click()},uploadLogo(){this.createUploader(o=>{const t=new FormData;t.append("file",o),p.methods.open().then(a=>{window.axios.post("/admin/appearance/uploadLogo",t).then(()=>{a(),setTimeout(()=>window.location.reload(),1e3)}).catch(()=>{window.$bus.$emit("modal:close"),r.methods.open("Check directory permissions.","Failed to upload logo")})})})},uploadFavicon(){this.createUploader(o=>{const t=new FormData;t.append("file",o),p.methods.open().then(a=>{window.axios.post("/admin/appearance/uploadFavicon",t).then(()=>{a(),setTimeout(()=>window.location.reload(),1e3)}).catch(()=>{window.$bus.$emit("modal:close"),r.methods.open("Check directory permissions.","Failed to upload logo")})})})}},components:{WebIcon:w}},n=o=>(y("data-v-1ba4ef23"),o=o(),D(),o),C={class:"appearance animate"},F={class:"type"},$=n(()=>e("div",{class:"title"},"Website logo",-1)),I={class:"row"},V={class:"column"},U={class:"column"},T=["src"],L={class:"type"},S=n(()=>e("div",{class:"title"},"Website favicon (16x16 px)",-1)),A={class:"row"},B={class:"column"},M={class:"column"},E={class:"browserTab"},z=n(()=>e("div",{class:"dots"},[e("div",{class:"dot"}),e("div",{class:"dot"}),e("div",{class:"dot"})],-1)),G={class:"tab"},O=["src"],Q={key:0,class:"type"},j=n(()=>e("div",{class:"title"},"Website name",-1));function q(o,t,a,H,d,i){const m=x("web-icon");return u(),_("div",C,[e("div",F,[$,e("div",I,[e("div",V,[e("button",{class:l(["btn btn-primary",o.$isDemo?"demoDisable":""]),onClick:t[0]||(t[0]=(...s)=>i.uploadLogo&&i.uploadLogo(...s))},[h(m,{icon:"fal fa-fw fa-upload"}),c(" Upload")],2)]),e("div",U,[e("img",{width:"55",src:"/img/misc/logo.png?"+Math.random(),alt:""},null,8,T)])])]),e("div",L,[S,e("div",A,[e("div",B,[e("button",{class:l(["btn btn-primary",o.$isDemo?"demoDisable":""]),onClick:t[1]||(t[1]=(...s)=>i.uploadFavicon&&i.uploadFavicon(...s))},[h(m,{icon:"fal fa-fw fa-upload"}),c(" Upload")],2)]),e("div",M,[e("div",E,[z,e("div",G,[e("img",{src:"/favicon.png?"+Math.random(),width:"16",height:"16",alt:""},null,8,O),c(" "+f(o.websiteName),1)])])])])]),d.initialWebsiteName!==null?(u(),_("div",Q,[j,g(e("input",{type:"text",placeholder:"Website name","onUpdate:modelValue":t[2]||(t[2]=s=>d.initialWebsiteName=s),onInput:t[3]||(t[3]=s=>i.changeWebName(s.target.value)),class:l(o.$isDemo?"demoDisable":"")},null,34),[[N,d.initialWebsiteName]])])):W("",!0)])}const _e=b(k,[["render",q],["__scopeId","data-v-1ba4ef23"]]);export{_e as default};
