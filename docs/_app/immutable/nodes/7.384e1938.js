import{s as J,h as A,n as M,o as K}from"../chunks/scheduler.48a88938.js";import{S as Q,i as R,g as w,s as D,m as V,h as g,j as T,f as b,c as j,n as E,z as H,k as v,a as z,y as a,o as N}from"../chunks/index.e338ce96.js";import{d as P}from"../chunks/data.68ad4685.js";import{m as U}from"../chunks/index.da28ebb7.js";function F(d){let e,l,t=d[3].season+"",u,o,s=d[3].episode+"",r,p,m=d[2].episode_title+"",n;return{c(){e=w("span"),l=V("S"),u=V(t),o=V(" E"),r=V(s),p=V(", "),n=V(m),this.h()},l(_){e=g(_,"SPAN",{class:!0});var i=T(e);l=E(i,"S"),u=E(i,t),o=E(i," E"),r=E(i,s),p=E(i,", "),n=E(i,m),i.forEach(b),this.h()},h(){v(e,"class","menu-caption")},m(_,i){z(_,e,i),a(e,l),a(e,u),a(e,o),a(e,r),a(e,p),a(e,n)},p(_,i){i&8&&t!==(t=_[3].season+"")&&N(u,t),i&8&&s!==(s=_[3].episode+"")&&N(r,s),i&4&&m!==(m=_[2].episode_title+"")&&N(n,m)},d(_){_&&b(e)}}}function L(d){let e,l="Next Episode";return{c(){e=w("button"),e.textContent=l,this.h()},l(t){e=g(t,"BUTTON",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-13fohc1"&&(e.textContent=l),this.h()},h(){v(e,"class","button")},m(t,u){z(t,e,u)},d(t){t&&b(e)}}}function W(d){let e,l,t,u,o,s,r,p,m,n,_,i,B="Mark as Finished",$,y,q,c=d[2].type=="TV Show"&&F(d),f=d[2].type=="TV Show"&&L();return{c(){e=w("div"),l=w("div"),t=w("video"),o=D(),s=w("div"),r=V(d[0]),p=D(),c&&c.c(),m=D(),n=w("div"),f&&f.c(),_=D(),i=w("button"),i.textContent=B,$=D(),y=w("a"),q=V("View Source"),this.h()},l(h){e=g(h,"DIV",{class:!0});var S=T(e);l=g(S,"DIV",{class:!0});var C=T(l);t=g(C,"VIDEO",{src:!0,class:!0}),T(t).forEach(b),o=j(C),s=g(C,"DIV",{class:!0});var I=T(s);r=E(I,d[0]),p=j(I),c&&c.l(I),I.forEach(b),m=j(C),n=g(C,"DIV",{class:!0});var k=T(n);f&&f.l(k),_=j(k),i=g(k,"BUTTON",{class:!0,"data-svelte-h":!0}),H(i)!=="svelte-1wyaazw"&&(i.textContent=B),$=j(k),y=g(k,"A",{class:!0,href:!0});var O=T(y);q=E(O,"View Source"),O.forEach(b),k.forEach(b),C.forEach(b),S.forEach(b),this.h()},h(){t.autoplay=!0,t.controls=!0,A(t.src,u=d[1])||v(t,"src",u),v(t,"class","svelte-jbl6zj"),v(s,"class","menu-title"),v(i,"class","button"),v(y,"class","button"),v(y,"href",d[1]),v(n,"class","menu scroll"),v(l,"class","viewer"),v(e,"class","page")},m(h,S){z(h,e,S),a(e,l),a(l,t),a(l,o),a(l,s),a(s,r),a(s,p),c&&c.m(s,null),a(l,m),a(l,n),f&&f.m(n,null),a(n,_),a(n,i),a(n,$),a(n,y),a(y,q)},p(h,[S]){S&2&&!A(t.src,u=h[1])&&v(t,"src",u),S&1&&N(r,h[0]),h[2].type=="TV Show"?c?c.p(h,S):(c=F(h),c.c(),c.m(s,null)):c&&(c.d(1),c=null),h[2].type=="TV Show"?f||(f=L(),f.c(),f.m(n,_)):f&&(f.d(1),f=null),S&2&&v(y,"href",h[1])},i:M,o:M,d(h){h&&b(e),c&&c.d(),f&&f.d()}}}const G="http://209.163.185.11/videos";function X(d,e,l){let t,u,o,s;return P.subscribe(r=>{if(l(0,t=r.currently_watching),l(2,o=U.filter(p=>p.title==t)[0]),l(3,s=r.library.filter(p=>p.title==o.title)[0]),s==null){let p={title:o.title,progress:0};o.type=="TV Show"&&(p={title:o.title,progress:0,season:1,episode:1}),P.update(m=>(m.library.push(p),m))}}),o.type=="TV Show"?(o.episode_title=U.filter(r=>r.title==o.title)[0].seasons[s.season-1][s.episode-1],u=`${G}/${t}/Season ${s.season}/${o.episode_title}.mp4`):u=`${G}/${t}.mp4`,K(()=>{let r=document.querySelector("video");r.addEventListener("timeupdate",()=>{l(3,s.progress=r.currentTime/r.duration,s)})}),[t,u,o,s]}class te extends Q{constructor(e){super(),R(this,e,X,W,J,{})}}export{te as component};
