import{s as j}from"../chunks/scheduler.48a88938.js";import{S as k,i as A,g as _,s as S,r as I,h as v,j as y,f as $,c as V,u as q,k as p,a as B,y as d,v as D,A as N,d as E,t as M,w as C}from"../chunks/index.e338ce96.js";import"../chunks/data.68ad4685.js";import{m as U}from"../chunks/index.da28ebb7.js";import{M as T}from"../chunks/MediaSection.442ae5bd.js";function b(r){let t,l,s,c,n,i,u,a,h,g,w;return i=new T({props:{title:"Movies",items:r[0].filter(L)}}),a=new T({props:{title:"TV Shows",items:r[0].filter(P)}}),{c(){t=_("div"),l=_("div"),s=_("input"),c=S(),n=_("div"),I(i.$$.fragment),u=S(),I(a.$$.fragment),this.h()},l(e){t=v(e,"DIV",{class:!0});var o=y(t);l=v(o,"DIV",{class:!0});var f=y(l);s=v(f,"INPUT",{type:!0,id:!0,placeholder:!0,class:!0}),f.forEach($),c=V(o),n=v(o,"DIV",{class:!0});var m=y(n);q(i.$$.fragment,m),u=V(m),q(a.$$.fragment,m),m.forEach($),o.forEach($),this.h()},h(){p(s,"type","text"),p(s,"id","searchInput"),p(s,"placeholder","Search"),s.value="",p(s,"class","svelte-19eyyso"),p(l,"class","search-wrapper svelte-19eyyso"),p(n,"class","media-grid svelte-19eyyso"),p(t,"class","page moat-delete")},m(e,o){B(e,t,o),d(t,l),d(l,s),d(t,c),d(t,n),D(i,n,null),d(n,u),D(a,n,null),h=!0,g||(w=N(s,"input",r[1]),g=!0)},p(e,[o]){const f={};o&1&&(f.items=e[0].filter(L)),i.$set(f);const m={};o&1&&(m.items=e[0].filter(P)),a.$set(m)},i(e){h||(E(i.$$.fragment,e),E(a.$$.fragment,e),h=!0)},o(e){M(i.$$.fragment,e),M(a.$$.fragment,e),h=!1},d(e){e&&$(t),C(i),C(a),g=!1,w()}}}const L=r=>r.type=="Movie",P=r=>r.type=="TV Show";function x(r,t,l){const s=U;let c=s;function n(i){let u=document.querySelector("#searchInput").value;l(0,c=[]),s.forEach(a=>{console.log(a),a.title.toLowerCase().includes(u.toLowerCase())&&c.push(a)})}return[c,n]}class K extends k{constructor(t){super(),A(this,t,x,b,j,{})}}export{K as component};