import{s as E,h as M,n as b}from"../chunks/scheduler.48a88938.js";import{S as k,i as S,g as v,s as V,m as q,h as g,j as $,c as D,n as z,f as d,z as W,k as h,a as w,y as _,o as G,d as x,p as A,b as F,t as I,x as H,r as N,u as O,v as P,w as U}from"../chunks/index.e338ce96.js";import{m as J}from"../chunks/index.da28ebb7.js";import{e as T}from"../chunks/each.e59479a4.js";function K(o){let e,t,s,r,n,f,m=o[0].title+"",i,y,l,c="TV Show - S1 E3";return{c(){e=v("button"),t=v("img"),r=V(),n=v("div"),f=v("div"),i=q(m),y=V(),l=v("div"),l.textContent=c,this.h()},l(a){e=g(a,"BUTTON",{class:!0});var u=$(e);t=g(u,"IMG",{src:!0,alt:!0,class:!0}),r=D(u),n=g(u,"DIV",{class:!0});var p=$(n);f=g(p,"DIV",{class:!0});var C=$(f);i=z(C,m),C.forEach(d),y=D(p),l=g(p,"DIV",{class:!0,"data-svelte-h":!0}),W(l)!=="svelte-1lkogoa"&&(l.textContent=c),p.forEach(d),u.forEach(d),this.h()},h(){M(t.src,s="thumbnails/"+o[0].title+".jpeg")||h(t,"src",s),h(t,"alt","thumbnail"),h(t,"class","svelte-1xhy3lf"),h(f,"class","media-title svelte-1xhy3lf"),h(l,"class","media-caption svelte-1xhy3lf"),h(n,"class","info"),h(e,"class","item svelte-1xhy3lf")},m(a,u){w(a,e,u),_(e,t),_(e,r),_(e,n),_(n,f),_(f,i),_(n,y),_(n,l)},p(a,[u]){u&1&&!M(t.src,s="thumbnails/"+a[0].title+".jpeg")&&h(t,"src",s),u&1&&m!==(m=a[0].title+"")&&G(i,m)},i:b,o:b,d(a){a&&d(e)}}}function L(o,e,t){let{item:s}=e;return console.log(s),o.$$set=r=>{"item"in r&&t(0,s=r.item)},[s]}class Q extends k{constructor(e){super(),S(this,e,L,K,E,{item:0})}}function j(o,e,t){const s=o.slice();return s[2]=e[t],s}function B(o){let e,t;return e=new Q({props:{item:o[2]}}),{c(){N(e.$$.fragment)},l(s){O(e.$$.fragment,s)},m(s,r){P(e,s,r),t=!0},p(s,r){const n={};r&2&&(n.item=s[2]),e.$set(n)},i(s){t||(x(e.$$.fragment,s),t=!0)},o(s){I(e.$$.fragment,s),t=!1},d(s){U(e,s)}}}function R(o){let e,t,s,r,n,f,m=T(o[1]),i=[];for(let l=0;l<m.length;l+=1)i[l]=B(j(o,m,l));const y=l=>I(i[l],1,1,()=>{i[l]=null});return{c(){e=v("div"),t=v("div"),s=q(o[0]),r=V(),n=v("div");for(let l=0;l<i.length;l+=1)i[l].c();this.h()},l(l){e=g(l,"DIV",{class:!0});var c=$(e);t=g(c,"DIV",{class:!0});var a=$(t);s=z(a,o[0]),a.forEach(d),r=D(c),n=g(c,"DIV",{class:!0});var u=$(n);for(let p=0;p<i.length;p+=1)i[p].l(u);u.forEach(d),c.forEach(d),this.h()},h(){h(t,"class","menu-title"),h(n,"class","menu scroll svelte-3kl2u8"),h(e,"class","wrapper")},m(l,c){w(l,e,c),_(e,t),_(t,s),_(e,r),_(e,n);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(n,null);f=!0},p(l,[c]){if((!f||c&1)&&G(s,l[0]),c&2){m=T(l[1]);let a;for(a=0;a<m.length;a+=1){const u=j(l,m,a);i[a]?(i[a].p(u,c),x(i[a],1)):(i[a]=B(u),i[a].c(),x(i[a],1),i[a].m(n,null))}for(A(),a=m.length;a<i.length;a+=1)y(a);F()}},i(l){if(!f){for(let c=0;c<m.length;c+=1)x(i[c]);f=!0}},o(l){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)I(i[c]);f=!1},d(l){l&&d(e),H(i,l)}}}function X(o,e,t){let{title:s,items:r}=e;return console.log(r),o.$$set=n=>{"title"in n&&t(0,s=n.title),"items"in n&&t(1,r=n.items)},[s,r]}class Y extends k{constructor(e){super(),S(this,e,X,R,E,{title:0,items:1})}}function Z(o){let e,t,s;return t=new Y({props:{title:"Continue Watching",items:J.filter(ee)}}),{c(){e=v("div"),N(t.$$.fragment),this.h()},l(r){e=g(r,"DIV",{class:!0});var n=$(e);O(t.$$.fragment,n),n.forEach(d),this.h()},h(){h(e,"class","page")},m(r,n){w(r,e,n),P(t,e,null),s=!0},p:b,i(r){s||(x(t.$$.fragment,r),s=!0)},o(r){I(t.$$.fragment,r),s=!1},d(r){r&&d(e),U(t)}}}const ee=o=>o.type=="TV Show";class ne extends k{constructor(e){super(),S(this,e,null,Z,E,{})}}export{ne as component};
