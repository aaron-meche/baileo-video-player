function w(){}function F(e,t){for(const n in t)e[n]=t[n];return e}function me(e,t,n,i,r){e.__svelte_meta={loc:{file:t,line:n,column:i,char:r}}}function q(e){return e()}function k(){return Object.create(null)}function g(e){e.forEach(q)}function L(e){return typeof e=="function"}function pe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let x;function ye(e,t){return x||(x=document.createElement("a")),x.href=t,e===x.href}function G(e){return Object.keys(e).length===0}function be(e,t){if(e!=null&&typeof e.subscribe!="function")throw new Error(`'${t}' is not a store with a 'subscribe' method`)}function J(e,...t){if(e==null)return w;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function ge(e,t,n){e.$$.on_destroy.push(J(t,n))}function ve(e,t,n,i){if(e){const r=P(e,t,n,i);return e[0](r)}}function P(e,t,n,i){return e[1]&&i?F(n.ctx.slice(),e[1](i(t))):n.ctx}function xe(e,t,n,i){if(e[2]&&i){const r=e[2](i(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const u=[],o=Math.max(t.dirty.length,r.length);for(let c=0;c<o;c+=1)u[c]=t.dirty[c]|r[c];return u}return t.dirty|r}return t.dirty}function $e(e,t,n,i,r,u){if(r){const o=P(t,n,i,u);e.p(o,r)}}function we(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let i=0;i<n;i++)t[i]=-1;return t}return-1}const K=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in K;let E=!1;function Q(){E=!0}function U(){E=!1}function V(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function Y(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let l=0;l<t.length;l++){const f=t[l];f.claim_order!==void 0&&s.push(f)}t=s}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let s=0;s<t.length;s++){const l=t[s].claim_order,f=(r>0&&t[n[r]].claim_order<=l?r+1:V(1,r,v=>t[n[v]].claim_order,l))-1;i[s]=n[f]+1;const a=f+1;n[a]=s,r=Math.max(a,r)}const u=[],o=[];let c=t.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(u.push(t[s-1]);c>=s;c--)o.push(t[c]);c--}for(;c>=0;c--)o.push(t[c]);u.reverse(),o.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<o.length;s++){for(;l<u.length&&o[s].claim_order>=u[l].claim_order;)l++;const f=l<u.length?u[l]:null;e.insertBefore(o[s],f)}}function R(e,t){if(E){for(Y(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function X(e,t,n){E&&!n?R(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function B(e){e.parentNode&&e.parentNode.removeChild(e)}function Ee(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function Z(e){return document.createElement(e)}function A(e){return document.createTextNode(e)}function Se(){return A(" ")}function Oe(){return A("")}function ee(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function te(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ne(e){return Array.from(e.childNodes)}function ie(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function H(e,t,n,i,r=!1){ie(e);const u=(()=>{for(let o=e.claim_info.last_index;o<e.length;o++){const c=e[o];if(t(c)){const s=n(c);return s===void 0?e.splice(o,1):e[o]=s,r||(e.claim_info.last_index=o),c}}for(let o=e.claim_info.last_index-1;o>=0;o--){const c=e[o];if(t(c)){const s=n(c);return s===void 0?e.splice(o,1):e[o]=s,r?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=o,c}}return i()})();return u.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,u}function re(e,t,n,i){return H(e,r=>r.nodeName===t,r=>{const u=[];for(let o=0;o<r.attributes.length;o++){const c=r.attributes[o];n[c.name]||u.push(c.name)}u.forEach(o=>r.removeAttribute(o))},()=>i(t))}function Me(e,t,n){return re(e,t,n,Z)}function oe(e,t){return H(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>A(t),!0)}function Ae(e){return oe(e," ")}function De(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function se(e,t,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,i,t),r}function je(e,t){const n=[];let i=0;for(const r of t.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${e}_END`?(i-=1,n.push(r)):u===`HEAD_${e}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}let b;function y(e){b=e}function D(){if(!b)throw new Error("Function called outside component initialization");return b}function Ne(e){D().$$.on_mount.push(e)}function ke(e){D().$$.after_update.push(e)}function Ce(e,t){return D().$$.context.set(e,t),t}const m=[],C=[];let p=[];const T=[],I=Promise.resolve();let O=!1;function W(){O||(O=!0,I.then(z))}function Te(){return W(),I}function M(e){p.push(e)}const S=new Set;let h=0;function z(){if(h!==0)return;const e=b;do{try{for(;h<m.length;){const t=m[h];h++,y(t),ce(t.$$)}}catch(t){throw m.length=0,h=0,t}for(y(null),m.length=0,h=0;C.length;)C.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];S.has(n)||(S.add(n),n())}p.length=0}while(m.length);for(;T.length;)T.pop()();O=!1,S.clear(),y(e)}function ce(e){if(e.fragment!==null){e.update(),g(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}function le(e){const t=[],n=[];p.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),p=t}const $=new Set;let _;function qe(){_={r:0,c:[],p:_}}function Le(){_.r||g(_.c),_=_.p}function ue(e,t){e&&e.i&&($.delete(e),e.i(t))}function Pe(e,t,n,i){if(e&&e.o){if($.has(e))return;$.add(e),_.c.push(()=>{$.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}const ae=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...ae];function Re(e){e&&e.c()}function Be(e,t){e&&e.l(t)}function fe(e,t,n,i){const{fragment:r,after_update:u}=e.$$;r&&r.m(t,n),i||M(()=>{const o=e.$$.on_mount.map(q).filter(L);e.$$.on_destroy?e.$$.on_destroy.push(...o):g(o),e.$$.on_mount=[]}),u.forEach(M)}function de(e,t){const n=e.$$;n.fragment!==null&&(le(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function _e(e,t){e.$$.dirty[0]===-1&&(m.push(e),W(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function He(e,t,n,i,r,u,o,c=[-1]){const s=b;y(e);const l=e.$$={fragment:null,ctx:[],props:u,update:w,not_equal:r,bound:k(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:k(),dirty:c,skip_bound:!1,root:t.target||s.$$.root};o&&o(l.root);let f=!1;if(l.ctx=n?n(e,t.props||{},(a,v,...j)=>{const N=j.length?j[0]:v;return l.ctx&&r(l.ctx[a],l.ctx[a]=N)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](N),f&&_e(e,a)),v}):[],l.update(),f=!0,g(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){Q();const a=ne(t.target);l.fragment&&l.fragment.l(a),a.forEach(B)}else l.fragment&&l.fragment.c();t.intro&&ue(e.$$.fragment),fe(e,t.target,t.anchor,t.customElement),U(),z()}y(s)}class he{$destroy(){de(this,1),this.$destroy=w}$on(t,n){if(!L(n))return w;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!G(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function d(e,t){document.dispatchEvent(se(e,Object.assign({version:"3.59.1"},t),{bubbles:!0}))}function Ie(e,t){d("SvelteDOMInsert",{target:e,node:t}),R(e,t)}function We(e,t,n){d("SvelteDOMInsert",{target:e,node:t,anchor:n}),X(e,t,n)}function ze(e){d("SvelteDOMRemove",{node:e}),B(e)}function Fe(e,t,n,i,r,u,o){const c=i===!0?["capture"]:i?Array.from(Object.keys(i)):[];r&&c.push("preventDefault"),u&&c.push("stopPropagation"),o&&c.push("stopImmediatePropagation"),d("SvelteDOMAddEventListener",{node:e,event:t,handler:n,modifiers:c});const s=ee(e,t,n,i);return()=>{d("SvelteDOMRemoveEventListener",{node:e,event:t,handler:n,modifiers:c}),s()}}function Ge(e,t,n){te(e,t,n),n==null?d("SvelteDOMRemoveAttribute",{node:e,attribute:t}):d("SvelteDOMSetAttribute",{node:e,attribute:t,value:n})}function Je(e,t){t=""+t,e.data!==t&&(d("SvelteDOMSetData",{node:e,data:t}),e.data=t)}function Ke(e){if(typeof e!="string"&&!(e&&typeof e=="object"&&"length"in e)){let t="{#each} only iterates over array-like objects.";throw typeof Symbol=="function"&&e&&Symbol.iterator in e&&(t+=" You can use a spread to convert this iterable into an array."),new Error(t)}}function Qe(e,t,n){for(const i of Object.keys(t))~n.indexOf(i)||console.warn(`<${e}> received an unexpected slot "${i}".`)}function Ue(e,t){const n="this={...} of <svelte:component> should specify a Svelte component.";try{const i=new e(t);if(!i.$$||!i.$set||!i.$on||!i.$destroy)throw new Error(n);return i}catch(i){const{message:r}=i;throw typeof r=="string"&&r.indexOf("is not a constructor")!==-1?new Error(n):i}}class Ve extends he{constructor(t){if(!t||!t.target&&!t.$$inline)throw new Error("'target' is a required option");super()}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}export{Je as A,qe as B,Re as C,Be as D,fe as E,de as F,be as G,ge as H,ye as I,Ie as J,Fe as K,w as L,g as M,ve as N,$e as O,we as P,xe as Q,K as R,Ve as S,je as T,Ke as U,Ee as V,ke as a,Ce as b,Se as c,d,Oe as e,Ae as f,We as g,Pe as h,He as i,Le as j,ue as k,ze as l,C as m,Ue as n,Ne as o,Z as p,Me as q,ne as r,pe as s,Te as t,Ge as u,Qe as v,De as w,me as x,A as y,oe as z};