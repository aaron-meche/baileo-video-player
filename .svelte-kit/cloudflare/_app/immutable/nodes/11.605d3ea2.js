import{s as J,n as M,o as R,h as q}from"../chunks/scheduler.e80ae01c.js";import{S as K,i as N,g,h as k,y as O,k as f,a as z,f as $,s as y,j as w,c as I,x as d,d as D,t as T,b as U,z as W,m as C,n as x,A as X,o as A,r as Y,u as Z,v as ee,w as te,p as se}from"../chunks/index.b2ac34d8.js";import{e as B}from"../chunks/each.e59479a4.js";import{m as le}from"../chunks/index.9da56747.js";import{d as S}from"../chunks/data.eb78c716.js";/* empty css                                                          */function ae(r){let e,s='<img src="icons/dog.png" alt="" class="svelte-s3ziko"/> <p class="svelte-s3ziko">Sorry, we have results to show!<br/></p>';return{c(){e=g("div"),e.innerHTML=s,this.h()},l(t){e=k(t,"DIV",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-64co4h"&&(e.innerHTML=s),this.h()},h(){f(e,"class","error svelte-s3ziko")},m(t,c){z(t,e,c)},p:M,i:M,o:M,d(t){t&&$(e)}}}function re(r,e,s){let{val:t}=e;return r.$$set=c=>{"val"in c&&s(0,t=c.val)},[t]}class ne extends K{constructor(e){super(),N(this,e,re,ae,J,{val:0})}}function G(r,e,s){const t=r.slice();return t[3]=e[s],t}function P(r){let e,s,t,c,u,o,_=r[3].title+"",v,i,a,l=r[3].type+"",h,n,p,E,H;function Q(){return r[2](r[3])}return{c(){e=g("a"),s=g("img"),c=y(),u=g("div"),o=g("div"),v=C(_),i=y(),a=g("div"),h=C(l),n=y(),this.h()},l(b){e=k(b,"A",{href:!0,class:!0});var m=w(e);s=k(m,"IMG",{class:!0,src:!0,alt:!0}),c=I(m),u=k(m,"DIV",{class:!0});var V=w(u);o=k(V,"DIV",{class:!0});var L=w(o);v=x(L,_),L.forEach($),i=I(V),a=k(V,"DIV",{class:!0});var j=w(a);h=x(j,l),j.forEach($),V.forEach($),n=I(m),m.forEach($),this.h()},h(){f(s,"class","thumbnail svelte-19e0aks"),q(s.src,t="thumbnails/"+r[3].title+".jpeg")||f(s,"src",t),f(s,"alt",""),f(o,"class","media-title"),f(a,"class","media-caption svelte-19e0aks"),f(u,"class","info svelte-19e0aks"),f(e,"href",p="/"+(r[3].type=="TV Show"?"episode-selector":"watch")),f(e,"class","item svelte-19e0aks")},m(b,m){z(b,e,m),d(e,s),d(e,c),d(e,u),d(u,o),d(o,v),d(u,i),d(u,a),d(a,h),d(e,n),E||(H=X(e,"click",Q),E=!0)},p(b,m){r=b,m&1&&!q(s.src,t="thumbnails/"+r[3].title+".jpeg")&&f(s,"src",t),m&1&&_!==(_=r[3].title+"")&&A(v,_),m&1&&l!==(l=r[3].type+"")&&A(h,l),m&1&&p!==(p="/"+(r[3].type=="TV Show"?"episode-selector":"watch"))&&f(e,"href",p)},d(b){b&&$(e),E=!1,H()}}}function F(r){let e,s;return e=new ne({}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,c){ee(e,t,c),s=!0},i(t){s||(D(e.$$.fragment,t),s=!0)},o(t){T(e.$$.fragment,t),s=!1},d(t){te(e,t)}}}function ie(r){let e,s,t='<input type="text" placeholder="I want to watch..."/>',c,u,o,_,v=B(r[0]),i=[];for(let l=0;l<v.length;l+=1)i[l]=P(G(r,v,l));let a=r[0].length==0&&F();return{c(){e=g("div"),s=g("div"),s.innerHTML=t,c=y(),u=g("div");for(let l=0;l<i.length;l+=1)i[l].c();o=y(),a&&a.c(),this.h()},l(l){e=k(l,"DIV",{class:!0});var h=w(e);s=k(h,"DIV",{class:!0,"data-svelte-h":!0}),O(s)!=="svelte-1xgkx8q"&&(s.innerHTML=t),c=I(h),u=k(h,"DIV",{class:!0});var n=w(u);for(let p=0;p<i.length;p+=1)i[p].l(n);n.forEach($),o=I(h),a&&a.l(h),h.forEach($),this.h()},h(){f(s,"class","search-bar"),f(u,"class","media-grid svelte-19e0aks"),f(e,"class","page moat-delete")},m(l,h){z(l,e,h),d(e,s),d(e,c),d(e,u);for(let n=0;n<i.length;n+=1)i[n]&&i[n].m(u,null);d(e,o),a&&a.m(e,null),_=!0},p(l,[h]){if(h&3){v=B(l[0]);let n;for(n=0;n<v.length;n+=1){const p=G(l,v,n);i[n]?i[n].p(p,h):(i[n]=P(p),i[n].c(),i[n].m(u,null))}for(;n<i.length;n+=1)i[n].d(1);i.length=v.length}l[0].length==0?a?h&1&&D(a,1):(a=F(),a.c(),D(a,1),a.m(e,null)):a&&(se(),T(a,1,1,()=>{a=null}),U())},i(l){_||(D(a),_=!0)},o(l){T(a),_=!1},d(l){l&&$(e),W(i,l),a&&a.d()}}}function oe(r,e,s){function t(o){S.update(_=>(_.currently_watching=o.title,_))}let c=[];return S.subscribe(o=>{s(0,c=o.search_result)}),R(()=>{S.update(o=>(o.search_result=le,o))}),[c,t,o=>t(o)]}class me extends K{constructor(e){super(),N(this,e,oe,ie,J,{})}}export{me as component};
