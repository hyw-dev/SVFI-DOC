import{f as d,o as t,c as a,N as u,P as p,b as e,Q as h,S as r}from"./app-a587a3d8.js";import{_ as v}from"./plugin-vue_export-helper-c27b6911.js";const f={class:"card-gallery"},m=["href"],g={class:"image-wrapper"},y={class:"info"},k={class:"info-name"},S={class:"info-desc"},b={class:"author"},L=["src"],x=d({__name:"cardList",props:{items:{type:Array,required:!0},cover:{type:String,required:!1,default:"cover"}},setup(c){const i=c,l=o=>{let n={cover:"cover",height:"auto 100%",width:"100 auto"};return{backgroundImage:`url(${o})`,backgroundSize:n[i.cover]}};return(o,n)=>(t(),a("div",f,[(t(!0),a(u,null,p(c.items,(s,_)=>(t(),a("a",{href:s.link,class:"card",key:_},[e("div",g,[e("div",{class:"image",style:h(l(s.img))},null,4)]),e("div",y,[e("p",k,r(s.name),1),e("p",S,r(s.desc),1)]),e("div",b,[e("img",{src:s.avatar,alt:"作者头像"},null,8,L),e("p",null,r(s.author),1)])],8,m))),128))]))}});const w=v(x,[["__scopeId","data-v-c39c3b8e"],["__file","cardList.vue"]]);export{w as default};
