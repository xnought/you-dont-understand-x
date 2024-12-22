(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const vn=!1;var Nt=Array.isArray,Pt=Array.from,rr=Object.defineProperty,re=Object.getOwnPropertyDescriptor,_n=Object.getOwnPropertyDescriptors,ir=Object.prototype,or=Array.prototype,Rt=Object.getPrototypeOf;function ge(e){return typeof e=="function"}const H=()=>{};function sr(e){return typeof(e==null?void 0:e.then)=="function"}function ur(e){return e()}function ze(e){for(var t=0;t<e.length;t++)e[t]()}const K=2,dn=4,Me=8,Je=16,j=32,$e=64,vt=128,_e=256,Ge=512,q=1024,oe=2048,Se=4096,z=8192,Te=16384,pn=32768,qe=65536,lr=1<<17,hn=1<<19,mn=1<<20,ve=Symbol("$state"),gn=Symbol("legacy props");function yn(e){return e===this.v}function It(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function ar(e,t){return e!==t}function Ct(e){return!It(e,this.v)}function fr(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function cr(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function vr(e){throw new Error("https://svelte.dev/e/effect_orphan")}function _r(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function dr(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function pr(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function hr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function mr(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function gr(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Oe=!1;function yr(){Oe=!0}const kt=1,Dt=2,wn=4,wr=8,br=16,Er=1,xr=2,bn=4,Sr=8,Tr=16,Or=1,Ar=2,Nr=4,Pr=1,Rr=2,k=Symbol();function L(e,t){var n={f:0,v:e,reactions:null,equals:yn,version:0};return n}function xe(e,t=!1){var r;const n=L(e);return t||(n.equals=Ct),Oe&&E!==null&&E.l!==null&&((r=E.l).s??(r.s=[])).push(n),n}function _t(e,t=!1){return Ir(xe(e,t))}function Ir(e){return A!==null&&A.f&K&&(G===null?Kr([e]):G.push(e)),e}function M(e,t){return A!==null&&Fe()&&A.f&(K|Je)&&(G===null||!G.includes(e))&&gr(),we(e,t)}function we(e,t){return e.equals(t)||(e.v=t,e.version=Un(),En(e,oe),Fe()&&b!==null&&b.f&q&&!(b.f&j)&&(D!==null&&D.includes(e)?(V(b,oe),rt(b)):ie===null?jr([e]):ie.push(e))),t}function En(e,t){var n=e.reactions;if(n!==null)for(var r=Fe(),i=n.length,o=0;o<i;o++){var s=n[o],v=s.f;v&oe||!r&&s===b||(V(s,t),v&(q|_e)&&(v&K?En(s,Se):rt(s)))}}let Cr=!1;function ye(e,t=null,n){if(typeof e!="object"||e===null||ve in e)return e;const r=Rt(e);if(r!==ir&&r!==or)return e;var i=new Map,o=Nt(e),s=L(0);o&&i.set("length",L(e.length));var v;return new Proxy(e,{defineProperty(a,u,l){(!("value"in l)||l.configurable===!1||l.enumerable===!1||l.writable===!1)&&pr();var f=i.get(u);return f===void 0?(f=L(l.value),i.set(u,f)):M(f,ye(l.value,v)),!0},deleteProperty(a,u){var l=i.get(u);if(l===void 0)u in a&&i.set(u,L(k));else{if(o&&typeof u=="string"){var f=i.get("length"),c=Number(u);Number.isInteger(c)&&c<f.v&&M(f,c)}M(l,k),Vt(s)}return!0},get(a,u,l){var d;if(u===ve)return e;var f=i.get(u),c=u in a;if(f===void 0&&(!c||(d=re(a,u))!=null&&d.writable)&&(f=L(ye(c?a[u]:k,v)),i.set(u,f)),f!==void 0){var _=N(f);return _===k?void 0:_}return Reflect.get(a,u,l)},getOwnPropertyDescriptor(a,u){var l=Reflect.getOwnPropertyDescriptor(a,u);if(l&&"value"in l){var f=i.get(u);f&&(l.value=N(f))}else if(l===void 0){var c=i.get(u),_=c==null?void 0:c.v;if(c!==void 0&&_!==k)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return l},has(a,u){var _;if(u===ve)return!0;var l=i.get(u),f=l!==void 0&&l.v!==k||Reflect.has(a,u);if(l!==void 0||b!==null&&(!f||(_=re(a,u))!=null&&_.writable)){l===void 0&&(l=L(f?ye(a[u],v):k),i.set(u,l));var c=N(l);if(c===k)return!1}return f},set(a,u,l,f){var S;var c=i.get(u),_=u in a;if(o&&u==="length")for(var d=l;d<c.v;d+=1){var p=i.get(d+"");p!==void 0?M(p,k):d in a&&(p=L(k),i.set(d+"",p))}c===void 0?(!_||(S=re(a,u))!=null&&S.writable)&&(c=L(void 0),M(c,ye(l,v)),i.set(u,c)):(_=c.v!==k,M(c,ye(l,v)));var h=Reflect.getOwnPropertyDescriptor(a,u);if(h!=null&&h.set&&h.set.call(f,l),!_){if(o&&typeof u=="string"){var m=i.get("length"),g=Number(u);Number.isInteger(g)&&g>=m.v&&M(m,g+1)}Vt(s)}return!0},ownKeys(a){N(s);var u=Reflect.ownKeys(a).filter(c=>{var _=i.get(c);return _===void 0||_.v!==k});for(var[l,f]of i)f.v!==k&&!(l in a)&&u.push(l);return u},setPrototypeOf(){hr()}})}function Vt(e,t=1){M(e,e.v+t)}var zt,xn,Sn,Tn;function kr(){if(zt===void 0){zt=window,xn=document;var e=Element.prototype,t=Node.prototype;Sn=re(t,"firstChild").get,Tn=re(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function Qe(e=""){return document.createTextNode(e)}function We(e){return Sn.call(e)}function et(e){return Tn.call(e)}function le(e,t){return We(e)}function X(e,t){{var n=We(e);return n instanceof Comment&&n.data===""?et(n):n}}function it(e,t=1,n=!1){let r=e;for(;t--;)r=et(r);return r}function Dr(e){e.textContent=""}function Ze(e){var t=K|oe;b===null?t|=_e:b.f|=mn;var n=A!==null&&A.f&K?A:null;const r={children:null,ctx:E,deps:null,equals:yn,f:t,fn:e,reactions:null,v:null,version:0,parent:n??b};return n!==null&&(n.children??(n.children=[])).push(r),r}function Lr(e){const t=Ze(e);return t.equals=Ct,t}function On(e){var t=e.children;if(t!==null){e.children=null;for(var n=0;n<t.length;n+=1){var r=t[n];r.f&K?Lt(r):ue(r)}}}function Mr(e){for(var t=e.parent;t!==null;){if(!(t.f&K))return t;t=t.parent}return null}function An(e){var t,n=b;B(Mr(e));try{On(e),t=Hn(e)}finally{B(n)}return t}function Nn(e){var t=An(e),n=(fe||e.f&_e)&&e.deps!==null?Se:q;V(e,n),e.equals(t)||(e.v=t,e.version=Un())}function Lt(e){On(e),Le(e,0),V(e,Te),e.v=e.children=e.deps=e.ctx=e.reactions=null}function Pn(e){b===null&&A===null&&vr(),A!==null&&A.f&_e&&cr(),Ut&&fr()}function $r(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Ae(e,t,n,r=!0){var i=(e&$e)!==0,o=b,s={ctx:E,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|oe,first:null,fn:t,last:null,next:null,parent:i?null:o,prev:null,teardown:null,transitions:null,version:0};if(n){var v=be;try{Gt(!0),Ue(s),s.f|=pn}catch(l){throw ue(s),l}finally{Gt(v)}}else t!==null&&rt(s);var a=n&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&mn)===0;if(!a&&!i&&r&&(o!==null&&$r(s,o),A!==null&&A.f&K)){var u=A;(u.children??(u.children=[])).push(s)}return s}function qr(e){const t=Ae(Me,null,!1);return V(t,q),t.teardown=e,t}function dt(e){Pn();var t=b!==null&&(b.f&j)!==0&&E!==null&&!E.m;if(t){var n=E;(n.e??(n.e=[])).push({fn:e,effect:b,reaction:A})}else{var r=tt(e);return r}}function Fr(e){return Pn(),Mt(e)}function Ur(e){const t=Ae($e,e,!0);return(n={})=>new Promise(r=>{n.outro?Q(t,()=>{ue(t),r(void 0)}):(ue(t),r(void 0))})}function tt(e){return Ae(dn,e,!1)}function pt(e,t){var n=E,r={effect:null,ran:!1};n.l.r1.push(r),r.effect=Mt(()=>{e(),!r.ran&&(r.ran=!0,M(n.l.r2,!0),ee(t))})}function Rn(){var e=E;Mt(()=>{if(N(e.l.r2)){for(var t of e.l.r1){var n=t.effect;n.f&q&&V(n,Se),Ne(n)&&Ue(n),t.ran=!1}e.l.r2.v=!1}})}function Mt(e){return Ae(Me,e,!0)}function ht(e){return de(e)}function de(e,t=0){return Ae(Me|Je|t,e,!0)}function se(e,t=!0){return Ae(Me|j,e,!0,t)}function In(e){var t=e.teardown;if(t!==null){const n=Ut,r=A;Wt(!0),W(null);try{t.call(null)}finally{Wt(n),W(r)}}}function Cn(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var n=0;n<t.length;n+=1)Lt(t[n])}}function kn(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){var r=n.next;ue(n,t),n=r}}function Hr(e){for(var t=e.first;t!==null;){var n=t.next;t.f&j||ue(t),t=n}}function ue(e,t=!0){var n=!1;if((t||e.f&hn)&&e.nodes_start!==null){for(var r=e.nodes_start,i=e.nodes_end;r!==null;){var o=r===i?null:et(r);r.remove(),r=o}n=!0}kn(e,t&&!n),Cn(e),Le(e,0),V(e,Te);var s=e.transitions;if(s!==null)for(const a of s)a.stop();In(e);var v=e.parent;v!==null&&v.first!==null&&Dn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Dn(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Q(e,t){var n=[];$t(e,n,!0),Ln(n,()=>{ue(e),t&&t()})}function Ln(e,t){var n=e.length;if(n>0){var r=()=>--n||t();for(var i of e)i.out(r)}else t()}function $t(e,t,n){if(!(e.f&z)){if(e.f^=z,e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&t.push(s);for(var r=e.first;r!==null;){var i=r.next,o=(r.f&qe)!==0||(r.f&j)!==0;$t(r,t,o?n:!1),r=i}}}function Ce(e){Mn(e,!0)}function Mn(e,t){if(e.f&z){Ne(e)&&Ue(e),e.f^=z;for(var n=e.first;n!==null;){var r=n.next,i=(n.f&qe)!==0||(n.f&j)!==0;Mn(n,i?t:!1),n=r}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||t)&&o.in()}}let Xe=!1,mt=[];function $n(){Xe=!1;const e=mt.slice();mt=[],ze(e)}function qt(e){Xe||(Xe=!0,queueMicrotask($n)),mt.push(e)}function Br(){Xe&&$n()}function Ft(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const qn=0,Yr=1;let je=!1,Ve=qn,ke=!1,De=null,be=!1,Ut=!1;function Gt(e){be=e}function Wt(e){Ut=e}let ae=[],Ee=0;let A=null;function W(e){A=e}let b=null;function B(e){b=e}let G=null;function Kr(e){G=e}let D=null,U=0,ie=null;function jr(e){ie=e}let Fn=1,fe=!1,E=null;function Zt(e){E=e}function Un(){return++Fn}function Fe(){return!Oe||E!==null&&E.l===null}function Ne(e){var s,v;var t=e.f;if(t&oe)return!0;if(t&Se){var n=e.deps,r=(t&_e)!==0;if(n!==null){var i;if(t&Ge){for(i=0;i<n.length;i++)((s=n[i]).reactions??(s.reactions=[])).push(e);e.f^=Ge}for(i=0;i<n.length;i++){var o=n[i];if(Ne(o)&&Nn(o),r&&b!==null&&!fe&&!((v=o==null?void 0:o.reactions)!=null&&v.includes(e))&&(o.reactions??(o.reactions=[])).push(e),o.version>e.version)return!0}}(!r||b!==null&&!fe)&&V(e,q)}return!1}function Vr(e,t){for(var n=t;n!==null;){if(n.f&vt)try{n.fn(e);return}catch{n.f^=vt}n=n.parent}throw je=!1,e}function zr(e){return(e.f&Te)===0&&(e.parent===null||(e.parent.f&vt)===0)}function nt(e,t,n,r){if(je){if(n===null&&(je=!1),zr(t))throw e;return}n!==null&&(je=!0);{Vr(e,t);return}}function Hn(e){var c;var t=D,n=U,r=ie,i=A,o=fe,s=G,v=E,a=e.f;D=null,U=0,ie=null,A=a&(j|$e)?null:e,fe=!be&&(a&_e)!==0,G=null,E=e.ctx;try{var u=(0,e.fn)(),l=e.deps;if(D!==null){var f;if(Le(e,U),l!==null&&U>0)for(l.length=U+D.length,f=0;f<D.length;f++)l[U+f]=D[f];else e.deps=l=D;if(!fe)for(f=U;f<l.length;f++)((c=l[f]).reactions??(c.reactions=[])).push(e)}else l!==null&&U<l.length&&(Le(e,U),l.length=U);return u}finally{D=t,U=n,ie=r,A=i,fe=o,G=s,E=v}}function Gr(e,t){let n=t.reactions;if(n!==null){var r=n.indexOf(e);if(r!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[r]=n[i],n.pop())}}n===null&&t.f&K&&(D===null||!D.includes(t))&&(V(t,Se),t.f&(_e|Ge)||(t.f^=Ge),Le(t,0))}function Le(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Gr(e,n[r])}function Ue(e){var t=e.f;if(!(t&Te)){V(e,q);var n=b,r=E;b=e;try{t&Je?Hr(e):kn(e),Cn(e),In(e);var i=Hn(e);e.teardown=typeof i=="function"?i:null,e.version=Fn}catch(o){nt(o,e,n,r||e.ctx)}finally{b=n}}}function Bn(){if(Ee>1e3){Ee=0;try{_r()}catch(e){if(De!==null)nt(e,De,null);else throw e}}Ee++}function Yn(e){var t=e.length;if(t!==0){Bn();var n=be;be=!0;try{for(var r=0;r<t;r++){var i=e[r];i.f&q||(i.f^=q);var o=[];Kn(i,o),Wr(o)}}finally{be=n}}}function Wr(e){var t=e.length;if(t!==0)for(var n=0;n<t;n++){var r=e[n];if(!(r.f&(Te|z)))try{Ne(r)&&(Ue(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Dn(r):r.fn=null))}catch(i){nt(i,r,null,r.ctx)}}}function Zr(){if(ke=!1,Ee>1001)return;const e=ae;ae=[],Yn(e),ke||(Ee=0,De=null)}function rt(e){Ve===qn&&(ke||(ke=!0,queueMicrotask(Zr))),De=e;for(var t=e;t.parent!==null;){t=t.parent;var n=t.f;if(n&($e|j)){if(!(n&q))return;t.f^=q}}ae.push(t)}function Kn(e,t){var n=e.first,r=[];e:for(;n!==null;){var i=n.f,o=(i&j)!==0,s=o&&(i&q)!==0,v=n.next;if(!s&&!(i&z))if(i&Me){if(o)n.f^=q;else try{Ne(n)&&Ue(n)}catch(f){nt(f,n,null,n.ctx)}var a=n.first;if(a!==null){n=a;continue}}else i&dn&&r.push(n);if(v===null){let f=n.parent;for(;f!==null;){if(e===f)break e;var u=f.next;if(u!==null){n=u;continue e}f=f.parent}}n=v}for(var l=0;l<r.length;l++)a=r[l],t.push(a),Kn(a,t)}function jn(e){var t=Ve,n=ae;try{Bn();const i=[];Ve=Yr,ae=i,ke=!1,Yn(n);var r=e==null?void 0:e();return Br(),(ae.length>0||i.length>0)&&jn(),Ee=0,De=null,r}finally{Ve=t,ae=n}}function N(e){var l;var t=e.f,n=(t&K)!==0;if(n&&t&Te){var r=An(e);return Lt(e),r}if(A!==null){G!==null&&G.includes(e)&&mr();var i=A.deps;D===null&&i!==null&&i[U]===e?U++:D===null?D=[e]:D.push(e),ie!==null&&b!==null&&b.f&q&&!(b.f&j)&&ie.includes(e)&&(V(b,oe),rt(b))}else if(n&&e.deps===null)for(var o=e,s=o.parent,v=o;s!==null;)if(s.f&K){var a=s;v=a,s=a.parent}else{var u=s;(l=u.deriveds)!=null&&l.includes(v)||(u.deriveds??(u.deriveds=[])).push(v);break}return n&&(o=e,Ne(o)&&Nn(o)),e.v}function ee(e){const t=A;try{return A=null,e()}finally{A=t}}const Xr=~(oe|Se|q);function V(e,t){e.f=e.f&Xr|t}function gt(e){return Vn().get(e)}function ot(e,t){return Vn().set(e,t),t}function Vn(e){return E===null&&Ft(),E.c??(E.c=new Map(Jr(E)||void 0))}function Jr(e){let t=e.p;for(;t!==null;){const n=t.c;if(n!==null)return n;t=t.p}return null}function Xt(e,t=1){var n=N(e),r=t===1?n++:n--;return M(e,n),r}function Ht(e,t=!1,n){E={p:E,c:null,e:null,m:!1,s:e,x:null,l:null},Oe&&!t&&(E.l={s:null,u:null,r1:[],r2:L(!1)})}function Bt(e){const t=E;if(t!==null){const s=t.e;if(s!==null){var n=b,r=A;t.e=null;try{for(var i=0;i<s.length;i++){var o=s[i];B(o.effect),W(o.reaction),tt(o.fn)}}finally{B(n),W(r)}}E=t.p,t.m=!0}return{}}function zn(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(ve in e)yt(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&ve in n&&yt(n)}}}function yt(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{yt(e[r],t)}catch{}const n=Rt(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=_n(n);for(let i in r){const o=r[i].get;if(o)try{o.call(e)}catch{}}}}}const Qr=["touchstart","touchmove"];function ei(e){return Qr.includes(e)}const ti=new Set,Jt=new Set;function He(e){var g;var t=this,n=t.ownerDocument,r=e.type,i=((g=e.composedPath)==null?void 0:g.call(e))||[],o=i[0]||e.target,s=0,v=e.__root;if(v){var a=i.indexOf(v);if(a!==-1&&(t===document||t===window)){e.__root=t;return}var u=i.indexOf(t);if(u===-1)return;a<=u&&(s=a)}if(o=i[s]||e.target,o!==t){rr(e,"currentTarget",{configurable:!0,get(){return o||n}});var l=A,f=b;W(null),B(null);try{for(var c,_=[];o!==null;){var d=o.assignedSlot||o.parentNode||o.host||null;try{var p=o["__"+r];if(p!==void 0&&!o.disabled)if(Nt(p)){var[h,...m]=p;h.apply(o,[e,...m])}else p.call(o,e)}catch(S){c?_.push(S):c=S}if(e.cancelBubble||d===t||d===null)break;o=d}if(c){for(let S of _)queueMicrotask(()=>{throw S});throw c}}finally{e.__root=t,delete e.currentTarget,W(l),B(f)}}}function ni(e){var t;t=document.head.appendChild(Qe());try{de(()=>e(t),hn)}finally{}}function ri(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function wt(e,t){var n=b;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=t)}function pe(e,t){var n=(t&Pr)!==0,r=(t&Rr)!==0,i,o=!e.startsWith("<!>");return()=>{i===void 0&&(i=ri(o?e:"<!>"+e),n||(i=We(i)));var s=r?document.importNode(i,!0):i.cloneNode(!0);if(n){var v=We(s),a=s.lastChild;wt(v,a)}else wt(s,s);return s}}function ne(){var e=document.createDocumentFragment(),t=document.createComment(""),n=Qe();return e.append(t,n),wt(t,n),e}function $(e,t){e!==null&&e.before(t)}let bt=!0;function Gn(e,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function ii(e,t){return oi(e,t)}const he=new Map;function oi(e,{target:t,anchor:n,props:r={},events:i,context:o,intro:s=!0}){kr();var v=new Set,a=f=>{for(var c=0;c<f.length;c++){var _=f[c];if(!v.has(_)){v.add(_);var d=ei(_);t.addEventListener(_,He,{passive:d});var p=he.get(_);p===void 0?(document.addEventListener(_,He,{passive:d}),he.set(_,1)):he.set(_,p+1)}}};a(Pt(ti)),Jt.add(a);var u=void 0,l=Ur(()=>{var f=n??t.appendChild(Qe());return se(()=>{if(o){Ht({});var c=E;c.c=o}i&&(r.$$events=i),bt=s,u=e(f,r)||{},bt=!0,o&&Bt()}),()=>{var d;for(var c of v){t.removeEventListener(c,He);var _=he.get(c);--_===0?(document.removeEventListener(c,He),he.delete(c)):he.set(c,_)}Jt.delete(a),f!==n&&((d=f.parentNode)==null||d.removeChild(f))}});return si.set(u,l),u}let si=new WeakMap;const st=0,Be=1,ut=2;function ui(e,t,n,r,i){var o=e,s=Fe(),v=E,a=k,u,l,f,c=(s?L:xe)(void 0),_=(s?L:xe)(void 0),d=!1;function p(m,g){d=!0,g&&(B(h),W(h),Zt(v));try{m===Be&&r&&(l?Ce(l):l=se(()=>r(o,c))),m!==st&&u&&Q(u,()=>u=null),m!==Be&&l&&Q(l,()=>l=null),m!==ut&&f&&Q(f,()=>f=null)}finally{g&&(Zt(null),W(null),B(null),jn())}}var h=de(()=>{if(a!==(a=t())){if(sr(a)){var m=a;d=!1,m.then(g=>{m===a&&(we(c,g),p(Be,!0))},g=>{if(m===a)throw we(_,g),p(ut,!0),_.v}),qt(()=>{d||p(st,!0)})}else we(c,a),p(Be,!1);return()=>a=k}})}function Et(e,t,n=!1){var r=e,i=null,o=null,s=k,v=n?qe:0,a=!1;const u=(f,c=!0)=>{a=!0,l(c,f)},l=(f,c)=>{s!==(s=f)&&(s?(i?Ce(i):c&&(i=se(()=>c(r))),o&&Q(o,()=>{o=null})):(o?Ce(o):c&&(o=se(()=>c(r))),i&&Q(i,()=>{i=null})))};de(()=>{a=!1,t(u),a||l(null,null)},v)}function li(e,t,n){var r=e,i=k,o,s=Fe()?ar:It;de(()=>{s(i,i=t())&&(o&&Q(o),o=se(()=>n(r)))})}function Qt(e,t){return t}function ai(e,t,n,r){for(var i=[],o=t.length,s=0;s<o;s++)$t(t[s].e,i,!0);var v=o>0&&i.length===0&&n!==null;if(v){var a=n.parentNode;Dr(a),a.append(n),r.clear(),te(e,t[0].prev,t[o-1].next)}Ln(i,()=>{for(var u=0;u<o;u++){var l=t[u];v||(r.delete(l.k),te(e,l.prev,l.next)),ue(l.e,!v)}})}function en(e,t,n,r,i,o=null){var s=e,v={flags:t,items:new Map,first:null},a=(t&wn)!==0;if(a){var u=e;s=u.appendChild(Qe())}var l=null,f=!1;de(()=>{var c=n(),_=Nt(c)?c:c==null?[]:Pt(c),d=_.length;if(!(f&&d===0)){f=d===0;{var p=A;fi(_,v,s,i,t,(p.f&z)!==0,r)}o!==null&&(d===0?l?Ce(l):l=se(()=>o(s)):l!==null&&Q(l,()=>{l=null})),n()}})}function fi(e,t,n,r,i,o,s,v){var Z,Pe,Yt,Kt;var a=(i&wr)!==0,u=(i&(kt|Dt))!==0,l=e.length,f=t.items,c=t.first,_=c,d,p=null,h,m=[],g=[],S,C,y,w;if(a)for(w=0;w<l;w+=1)S=e[w],C=s(S,w),y=f.get(C),y!==void 0&&((Z=y.a)==null||Z.measure(),(h??(h=new Set)).add(y));for(w=0;w<l;w+=1){if(S=e[w],C=s(S,w),y=f.get(C),y===void 0){var F=_?_.e.nodes_start:n;p=vi(F,t,p,p===null?t.first:p.next,S,C,w,r,i),f.set(C,p),m=[],g=[],_=p.next;continue}if(u&&ci(y,S,w,i),y.e.f&z&&(Ce(y.e),a&&((Pe=y.a)==null||Pe.unfix(),(h??(h=new Set)).delete(y))),y!==_){if(d!==void 0&&d.has(y)){if(m.length<g.length){var T=g[0],R;p=T.prev;var Y=m[0],x=m[m.length-1];for(R=0;R<m.length;R+=1)tn(m[R],T,n);for(R=0;R<g.length;R+=1)d.delete(g[R]);te(t,Y.prev,x.next),te(t,p,Y),te(t,x,T),_=T,p=x,w-=1,m=[],g=[]}else d.delete(y),tn(y,_,n),te(t,y.prev,y.next),te(t,y,p===null?t.first:p.next),te(t,p,y),p=y;continue}for(m=[],g=[];_!==null&&_.k!==C;)(o||!(_.e.f&z))&&(d??(d=new Set)).add(_),g.push(_),_=_.next;if(_===null)continue;y=_}m.push(y),p=y,_=y.next}if(_!==null||d!==void 0){for(var O=d===void 0?[]:Pt(d);_!==null;)(o||!(_.e.f&z))&&O.push(_),_=_.next;var P=O.length;if(P>0){var I=i&wn&&l===0?n:null;if(a){for(w=0;w<P;w+=1)(Yt=O[w].a)==null||Yt.measure();for(w=0;w<P;w+=1)(Kt=O[w].a)==null||Kt.fix()}ai(t,O,I,f)}}a&&qt(()=>{var jt;if(h!==void 0)for(y of h)(jt=y.a)==null||jt.apply()}),b.first=t.first&&t.first.e,b.last=p&&p.e}function ci(e,t,n,r){r&kt&&we(e.v,t),r&Dt?we(e.i,n):e.i=n}function vi(e,t,n,r,i,o,s,v,a,u){var l=(a&kt)!==0,f=(a&br)===0,c=l?f?xe(i):L(i):i,_=a&Dt?L(s):s,d={i:_,v:c,k:o,a:null,e:null,prev:n,next:r};try{return d.e=se(()=>v(e,c,_),Cr),d.e.prev=n&&n.e,d.e.next=r&&r.e,n===null?t.first=d:(n.next=d,n.e.next=d.e),r!==null&&(r.prev=d,r.e.prev=d.e),d}finally{}}function tn(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,i=t?t.e.nodes_start:n,o=e.e.nodes_start;o!==r;){var s=et(o);i.before(o),o=s}}function te(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function xt(e,t,n,r,i){var v;var o=(v=t.$$slots)==null?void 0:v[n],s=!1;o===!0&&(o=t.children,s=!0),o===void 0||o(e,s?()=>r:r)}function Wn(e,t,n){var r=e,i,o;de(()=>{i!==(i=t())&&(o&&(Q(o),o=null),i&&(o=se(()=>n(r,i))))},qe)}function _i(e,t,n){tt(()=>{var r=ee(()=>t(e,n==null?void 0:n())||{});if(r!=null&&r.destroy)return()=>r.destroy()})}function di(e,t,n,r){var i=e.__attributes??(e.__attributes={});i[t]!==(i[t]=n)&&(n==null?e.removeAttribute(t):typeof n!="string"&&pi(e).includes(t)?e[t]=n:e.setAttribute(t,n))}var nn=new Map;function pi(e){var t=nn.get(e.nodeName);if(t)return t;nn.set(e.nodeName,t=[]);for(var n,r=e,i=Element.prototype;i!==r;){n=_n(r);for(var o in n)n[o].set&&t.push(o);r=Rt(r)}return t}const hi=()=>performance.now(),J={tick:e=>requestAnimationFrame(e),now:()=>hi(),tasks:new Set};function Zn(){const e=J.now();J.tasks.forEach(t=>{t.c(e)||(J.tasks.delete(t),t.f())}),J.tasks.size!==0&&J.tick(Zn)}function mi(e){let t;return J.tasks.size===0&&J.tick(Zn),{promise:new Promise(n=>{J.tasks.add(t={c:e,f:n})}),abort(){J.tasks.delete(t)}}}function Ye(e,t){e.dispatchEvent(new CustomEvent(t))}function gi(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function rn(e){const t={},n=e.split(";");for(const r of n){const[i,o]=r.split(":");if(!i||o===void 0)break;const s=gi(i.trim());t[s]=o.trim()}return t}const yi=e=>e;function on(e,t,n,r){var i=(e&Or)!==0,o=(e&Ar)!==0,s=i&&o,v=(e&Nr)!==0,a=s?"both":i?"in":"out",u,l=t.inert,f,c;function _(){var g=A,S=b;W(null),B(null);try{return u??(u=n()(t,(r==null?void 0:r())??{},{direction:a}))}finally{W(g),B(S)}}var d={is_global:v,in(){var g;if(t.inert=l,!i){c==null||c.abort(),(g=c==null?void 0:c.reset)==null||g.call(c);return}o||f==null||f.abort(),Ye(t,"introstart"),f=St(t,_(),c,1,()=>{Ye(t,"introend"),f==null||f.abort(),f=u=void 0})},out(g){if(!o){g==null||g(),u=void 0;return}t.inert=!0,Ye(t,"outrostart"),c=St(t,_(),f,0,()=>{Ye(t,"outroend"),g==null||g()})},stop:()=>{f==null||f.abort(),c==null||c.abort()}},p=b;if((p.transitions??(p.transitions=[])).push(d),i&&bt){var h=v;if(!h){for(var m=p.parent;m&&m.f&qe;)for(;(m=m.parent)&&!(m.f&Je););h=!m||(m.f&pn)!==0}h&&tt(()=>{ee(()=>d.in())})}}function St(e,t,n,r,i){var o=r===1;if(ge(t)){var s,v=!1;return qt(()=>{if(!v){var h=t({direction:o?"in":"out"});s=St(e,h,n,r,i)}}),{abort:()=>{v=!0,s==null||s.abort()},deactivate:()=>s.deactivate(),reset:()=>s.reset(),t:()=>s.t()}}if(n==null||n.deactivate(),!(t!=null&&t.duration))return i(),{abort:H,deactivate:H,reset:H,t:()=>r};const{delay:a=0,css:u,tick:l,easing:f=yi}=t;var c=[];if(o&&n===void 0&&(l&&l(0,1),u)){var _=rn(u(0,1));c.push(_,_)}var d=()=>1-r,p=e.animate(c,{duration:a});return p.onfinish=()=>{var h=(n==null?void 0:n.t())??1-r;n==null||n.abort();var m=r-h,g=t.duration*Math.abs(m),S=[];if(g>0){if(u)for(var C=Math.ceil(g/16.666666666666668),y=0;y<=C;y+=1){var w=h+m*f(y/C),F=u(w,1-w);S.push(rn(F))}d=()=>{var T=p.currentTime;return h+m*f(T/g)},l&&mi(()=>{if(p.playState!=="running")return!1;var T=d();return l(T,1-T),!0})}p=e.animate(S,{duration:g,fill:"forwards"}),p.onfinish=()=>{d=()=>r,l==null||l(r,1-r),i()}},{abort:()=>{p&&(p.cancel(),p.effect=null,p.onfinish=H)},deactivate:()=>{i=H},reset:()=>{r===0&&(l==null||l(1,0))},t:()=>d()}}function Xn(e=!1){const t=E,n=t.l.u;if(!n)return;let r=()=>zn(t.s);if(e){let i=0,o={};const s=Ze(()=>{let v=!1;const a=t.s;for(const u in a)a[u]!==o[u]&&(o[u]=a[u],v=!0);return v&&i++,i});r=()=>N(s)}n.b.length&&Fr(()=>{sn(t,r),ze(n.b)}),dt(()=>{const i=ee(()=>n.m.map(ur));return()=>{for(const o of i)typeof o=="function"&&o()}}),n.a.length&&dt(()=>{sn(t,r),ze(n.a)})}function sn(e,t){if(e.l.s)for(const n of e.l.s)N(n);t()}function Jn(e,t,n){if(e==null)return t(void 0),n&&n(void 0),H;const r=ee(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}let Ke=!1;function Re(e,t,n){const r=n[t]??(n[t]={store:null,source:xe(void 0),unsubscribe:H});if(r.store!==e)if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=H;else{var i=!0;r.unsubscribe=Jn(e,o=>{i?r.source.v=o:M(r.source,o)}),i=!1}return N(r.source)}function Qn(){const e={};return qr(()=>{for(var t in e)e[t].unsubscribe()}),e}function wi(e){var t=Ke;try{return Ke=!1,[e(),Ke]}finally{Ke=t}}const bi={get(e,t){if(!e.exclude.includes(t))return N(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){return t in e.special||(e.special[t]=ce({get[t](){return e.props[t]}},t,bn)),e.special[t](n),Xt(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),Xt(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function Ei(e,t){return new Proxy({props:e,exclude:t,special:{},version:L(0)},bi)}const xi={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(ge(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let i=e.props[r];ge(i)&&(i=i());const o=re(i,t);if(o&&o.set)return o.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(ge(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const i=re(r,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===ve||t===gn)return!1;for(let n of e.props)if(ge(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props){ge(n)&&(n=n());for(const r in n)t.includes(r)||t.push(r)}return t}};function Si(...e){return new Proxy({props:e},xi)}function un(e){for(var t=b,n=b;t!==null&&!(t.f&(j|$e));)t=t.parent;try{return B(t),e()}finally{B(n)}}function ce(e,t,n,r){var F;var i=(n&Er)!==0,o=!Oe||(n&xr)!==0,s=(n&Sr)!==0,v=(n&Tr)!==0,a=!1,u;s?[u,a]=wi(()=>e[t]):u=e[t];var l=ve in e||gn in e,f=((F=re(e,t))==null?void 0:F.set)??(l&&s&&t in e?T=>e[t]=T:void 0),c=r,_=!0,d=!1,p=()=>(d=!0,_&&(_=!1,v?c=ee(r):c=r),c);u===void 0&&r!==void 0&&(f&&o&&dr(),u=p(),f&&f(u));var h;if(o)h=()=>{var T=e[t];return T===void 0?p():(_=!0,d=!1,T)};else{var m=un(()=>(i?Ze:Lr)(()=>e[t]));m.f|=lr,h=()=>{var T=N(m);return T!==void 0&&(c=void 0),T===void 0?c:T}}if(!(n&bn))return h;if(f){var g=e.$$legacy;return function(T,R){return arguments.length>0?((!o||!R||g||a)&&f(R?h():T),T):h()}}var S=!1,C=!1,y=xe(u),w=un(()=>Ze(()=>{var T=h(),R=N(y);return S?(S=!1,C=!0,R):(C=!1,y.v=T)}));return i||(w.equals=Ct),function(T,R){if(arguments.length>0){const Y=R?N(w):o&&s?ye(T):T;return w.equals(Y)||(S=!0,M(y,Y),d&&c!==void 0&&(c=Y),ee(()=>N(w))),T}return N(w)}}function er(e){E===null&&Ft(),Oe&&E.l!==null?Oi(E).m.push(e):dt(()=>{const t=ee(e);if(typeof t=="function")return t})}function Ti(e){E===null&&Ft(),er(()=>()=>ee(e))}function Oi(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const Ai="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ai);yr();var Ni=pe("<section><p>Works!</p></section>");function Pi(e){var t=Ni();$(e,t)}const ln={},Tt={},Ri={},tr=/^:(.+)/,an=4,Ii=3,Ci=2,ki=1,Di=1,Ot=e=>e.replace(/(^\/+|\/+$)/g,"").split("/"),lt=e=>e.replace(/(^\/+|\/+$)/g,""),Li=(e,t)=>{const n=e.default?0:Ot(e.path).reduce((r,i)=>(r+=an,i===""?r+=Di:tr.test(i)?r+=Ci:i[0]==="*"?r-=an+ki:r+=Ii,r),0);return{route:e,score:n,index:t}},Mi=e=>e.map(Li).sort((t,n)=>t.score<n.score?1:t.score>n.score?-1:t.index-n.index),fn=(e,t)=>{let n,r;const[i]=t.split("?"),o=Ot(i),s=o[0]==="",v=Mi(e);for(let a=0,u=v.length;a<u;a++){const l=v[a].route;let f=!1;if(l.default){r={route:l,params:{},uri:t};continue}const c=Ot(l.path),_={},d=Math.max(o.length,c.length);let p=0;for(;p<d;p++){const h=c[p],m=o[p];if(h&&h[0]==="*"){const S=h==="*"?"*":h.slice(1);_[S]=o.slice(p).map(decodeURIComponent).join("/");break}if(typeof m>"u"){f=!0;break}const g=tr.exec(h);if(g&&!s){const S=decodeURIComponent(m);_[g[1]]=S}else if(h!==m){f=!0;break}}if(!f){n={route:l,params:_,uri:"/"+o.slice(0,p).join("/")};break}}return n||r||null},at=(e,t)=>`${lt(t==="/"?e:`${lt(e)}/${lt(t)}`)}/`,$i=e=>!e.defaultPrevented&&e.button===0&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey),qi=e=>{const t=location.host;return e.host===t||e.href.indexOf(`https://${t}`)===0||e.href.indexOf(`http://${t}`)===0},At=()=>typeof window<"u"&&"document"in window&&"location"in window;function cn(e,t){const n=Ei(t,["children","$$slots","$$events","$$legacy"]);Ht(t,!1);const r=Qn(),i=()=>Re(f,"$activeRoute",r);let o=ce(t,"path",8,""),s=ce(t,"component",12,null),v=_t({}),a=_t({});const{registerRoute:u,unregisterRoute:l,activeRoute:f}=gt(Tt),c={path:o(),default:o()===""};u(c),Ti(()=>{l(c)}),pt(()=>(i(),zn(n),At),()=>{if(i()&&i().route===c){M(v,i().params);const{component:h,path:m,...g}=n;M(a,g),h&&(h.toString().startsWith("class ")?s(h):s(h())),At()&&!i().preserveScroll&&(window==null||window.scrollTo(0,0))}}),Rn(),Xn();var _=ne(),d=X(_);{var p=h=>{var m=ne(),g=X(m);{var S=y=>{var w=ne(),F=X(w);ui(F,s,null,(T,R)=>{var Y=ne(),x=X(Y);Wn(x,()=>{var O;return((O=N(R))==null?void 0:O.default)||N(R)},(O,P)=>{P(O,Si(()=>N(v),()=>N(a)))}),$(T,Y)}),$(y,w)},C=y=>{var w=ne(),F=X(w);xt(F,t,"default",{get params(){return N(v)}}),$(y,w)};Et(g,y=>{s()?y(S):y(C,!1)})}$(h,m)};Et(d,h=>{i()&&i().route===c&&h(p)})}$(e,_),Bt()}const me=[];function Fi(e,t){return{subscribe:Ie(e,t).subscribe}}function Ie(e,t=H){let n=null;const r=new Set;function i(v){if(It(e,v)&&(e=v,n)){const a=!me.length;for(const u of r)u[1](),me.push(u,e);if(a){for(let u=0;u<me.length;u+=2)me[u][0](me[u+1]);me.length=0}}}function o(v){i(v(e))}function s(v,a=H){const u=[v,a];return r.add(u),r.size===1&&(n=t(i,o)||H),v(e),()=>{r.delete(u),r.size===0&&n&&(n(),n=null)}}return{set:i,update:o,subscribe:s}}function Ui(e,t,n){const r=!Array.isArray(e),i=r?[e]:e;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const o=t.length<2;return Fi(n,(s,v)=>{let a=!1;const u=[];let l=0,f=H;const c=()=>{if(l)return;f();const d=t(r?u[0]:u,s,v);o?s(d):f=typeof d=="function"?d:H},_=i.map((d,p)=>Jn(d,h=>{u[p]=h,l&=~(1<<p),a&&c()},()=>{l|=1<<p}));return a=!0,c(),function(){ze(_),f(),a=!1}})}const ft=e=>({...e.location,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}),Hi=e=>{const t=[];let n=ft(e);return{get location(){return n},listen(r){t.push(r);const i=()=>{n=ft(e),r({location:n,action:"POP"})};return e.addEventListener("popstate",i),()=>{e.removeEventListener("popstate",i);const o=t.indexOf(r);t.splice(o,1)}},navigate(r,{state:i,replace:o=!1,preserveScroll:s=!1,blurActiveElement:v=!0}={}){i={...i,key:Date.now()+""};try{o?e.history.replaceState(i,"",r):e.history.pushState(i,"",r)}catch{e.location[o?"replace":"assign"](r)}n=ft(e),t.forEach(a=>a({location:n,action:"PUSH",preserveScroll:s})),v&&document.activeElement.blur()}}},Bi=(e="/")=>{let t=0;const n=[{pathname:e,search:""}],r=[];return{get location(){return n[t]},addEventListener(i,o){},removeEventListener(i,o){},history:{get entries(){return n},get index(){return t},get state(){return r[t]},pushState(i,o,s){const[v,a=""]=s.split("?");t++,n.push({pathname:v,search:a}),r.push(i)},replaceState(i,o,s){const[v,a=""]=s.split("?");n[t]={pathname:v,search:a},r[t]=i}}}},nr=Hi(At()?window:Bi()),{navigate:Yi}=nr;var Ki=pe("<div><!></div>");function ji(e,t){Ht(t,!1);const n=Qn(),r=()=>Re(g,"$base",n),i=()=>Re(m,"$location",n),o=()=>Re(d,"$routes",n),s=()=>Re(p,"$activeRoute",n);let v=ce(t,"basepath",8,"/"),a=ce(t,"url",8,null),u=ce(t,"viewtransition",8,null),l=ce(t,"history",8,nr);const f=(x,O,P)=>{const I=u()(P);return typeof(I==null?void 0:I.fn)=="function"?I.fn(x,I):I};ot(Ri,l());const c=gt(ln),_=gt(Tt),d=Ie([]),p=Ie(null);let h=!1;const m=c||Ie(a()?{pathname:a()}:l().location),g=_?_.routerBase:Ie({path:v(),uri:v()}),S=Ui([g,p],([x,O])=>{if(!O)return x;const{path:P}=x,{route:I,uri:Z}=O;return{path:I.default?P:I.path.replace(/\*.*$/,""),uri:Z}}),C=x=>{const{path:O}=r();let{path:P}=x;if(x._path=P,x.path=at(O,P),typeof window>"u"){if(h)return;const I=fn([x],i().pathname);I&&(p.set(I),h=!0)}else d.update(I=>[...I,x])},y=x=>{d.update(O=>O.filter(P=>P!==x))};let w=_t(!1);c||(er(()=>l().listen(O=>{M(w,O.preserveScroll||!1),m.set(O.location)})),ot(ln,m)),ot(Tt,{activeRoute:p,base:g,routerBase:S,registerRoute:C,unregisterRoute:y}),pt(()=>(r(),at),()=>{const{path:x}=r();d.update(O=>O.map(P=>Object.assign(P,{path:at(x,P._path)})))}),pt(()=>(o(),i(),N(w)),()=>{const x=fn(o(),i().pathname);p.set(x&&{...x,preserveScroll:N(w)})}),Rn(),Xn();var F=ne(),T=X(F);{var R=x=>{var O=ne(),P=X(O);li(P,()=>i().pathname,I=>{var Z=Ki(),Pe=le(Z);xt(Pe,t,"default",{get route(){return s()&&s().uri},get location(){return i()}}),on(1,Z,()=>f),on(2,Z,()=>f),$(I,Z)}),$(x,O)},Y=x=>{var O=ne(),P=X(O);xt(P,t,"default",{get route(){return s()&&s().uri},get location(){return i()}}),$(x,O)};Et(T,x=>{u()?x(R):x(Y,!1)})}$(e,F),Bt()}const ct=e=>{const t=n=>{const r=n.currentTarget;(r.target===""||r.target==="_self")&&qi(r)&&$i(n)&&(n.preventDefault(),Yi(r.pathname+r.search,{replace:r.hasAttribute("replace"),preserveScroll:r.hasAttribute("preserveScroll")}))};return e.addEventListener("click",t),{destroy(){e.removeEventListener("click",t)}}};var Vi=pe("<h1> </h1>");function zi(e,t){var n=Vi();ni(i=>{ht(()=>xn.title=`You Don't Understand ${t.title??""}`)});var r=le(n);ht(()=>Gn(r,t.title)),$(e,n)}var Gi=pe("<li><a> </a></li>"),Wi=pe("<article><h1>You Don't Understand</h1> <section><ul></ul></section></article>"),Zi=pe("<article><!> <!></article>"),Xi=pe("<!> <!>",1);function Ji(e){const t="you-dont-understand",n=[{title:"Numbers",link:"numbers",component:Pi}];ji(e,{basepath:t,children:(r,i)=>{var o=Xi(),s=X(o);cn(s,{path:"/",children:(a,u)=>{var l=Wi(),f=it(le(l),2),c=le(f);en(c,5,()=>n,Qt,(_,d)=>{var p=Gi(),h=le(p),m=le(h);_i(h,g=>ct==null?void 0:ct(g)),ht(()=>{di(h,"href",N(d).link),Gn(m,N(d).title)}),$(_,p)}),$(a,l)},$$slots:{default:!0}});var v=it(s,2);en(v,1,()=>n,Qt,(a,u)=>{cn(a,{get path(){return N(u).link},children:(l,f)=>{var c=Zi(),_=le(c);zi(_,{get title(){return N(u).title}});var d=it(_,2);Wn(d,()=>N(u).component,(p,h)=>{h(p,{})}),$(l,c)},$$slots:{default:!0}})}),$(r,o)},$$slots:{default:!0}})}ii(Ji,{target:document.getElementById("app")});
