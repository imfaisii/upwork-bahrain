import{_ as o}from"./app.f6b791b5.js";import{e as n,f as l,x as r}from"./@vue.ca773235.js";const c={data(){return{state:!1}},props:{value:{type:Boolean,default:!1},onChange:{type:Function,default:null}},methods:{toggle(){this.state=!this.state,this.onChange&&this.onChange(this.state)}},created(){this.state=this.value}};function i(_,t,h,d,s,e){return n(),l("div",{class:r(`switch ${s.state?"on":"off"}`),onClick:t[0]||(t[0]=(...a)=>e.toggle&&e.toggle(...a))},null,2)}const u=o(c,[["render",i],["__scopeId","data-v-6cb725b0"]]);export{u as D};