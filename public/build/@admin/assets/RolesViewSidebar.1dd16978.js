import{D as m}from"./DashboardPageSidebar.7576c6ca.js";import{_ as d}from"./app.f6b791b5.js";import{s as c,j as p,Q as _,e as o,A as b,x as i,f as n,i as u,D as h,F as f,v as $}from"./@vue.ca773235.js";import"./overlayscrollbars.8d928870.js";import"./apexcharts.8dc8f2aa.js";import"./vue.9ea8e8a6.js";import"./vuex.497f08d2.js";import"./string-similarity.860833b6.js";import"./gsap.8449ad8c.js";import"./vue-router.63e2ccab.js";import"./vuex-persistedstate.fa252374.js";import"./izitoast.765d8918.js";import"./click-outside-vue3.6791b41e.js";import"./floating-vue.8db45bbf.js";import"./@floating-ui.9bdab495.js";import"./axios.ea6880df.js";import"./@vuepic.b319e7e5.js";import"./date-fns.5b6f9246.js";const C={data(){return{roles:null,selected:null}},created(){this.$bus.$on("rolesSidebar:setData",e=>{this.roles=e,this.$bus.$emit("sidebarLoading:done")}),this.$bus.$on("rolesSidebar:select",e=>this.selected=e)},methods:{select(e){this.$bus.$emit("rolesSidebar:select",e)},createRole(){const e=prompt("Enter role name:");!e||window.axios.post("/admin/roles/new",{name:e,id:e.toLowerCase().replaceAll(" ","_")}).then(()=>this.$bus.$emit("rolesSidebar:update"))}},components:{DashboardPageSidebar:m}},S=["onClick"];function k(e,a,v,g,s,r){const l=_("dashboard-page-sidebar");return o(),c(l,{class:"rolesSidebar"},{default:p(()=>[b("button",{class:i(["btn btn-primary",e.$isDemo?"demoDisable":""]),onClick:a[0]||(a[0]=(...t)=>r.createRole&&r.createRole(...t))},"Create",2),s.roles?(o(!0),n(f,{key:0},u(s.roles.roles,t=>(o(),n("div",{class:i(["role",s.selected===t.id?"active":""]),key:t,onClick:w=>r.select(t.id)},h(t.name),11,S))),128)):$("",!0)]),_:1})}const H=d(C,[["render",k],["__scopeId","data-v-65c16094"]]);export{H as default};
