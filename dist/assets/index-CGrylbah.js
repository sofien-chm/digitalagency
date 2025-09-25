(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Oe={},Es=[],pn=()=>{},Ap=()=>!1,Pa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),$l=t=>t.startsWith("onUpdate:"),rt=Object.assign,Hl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},mE=Object.prototype.hasOwnProperty,Se=(t,e)=>mE.call(t,e),le=Array.isArray,vs=t=>Ca(t)==="[object Map]",Rp=t=>Ca(t)==="[object Set]",he=t=>typeof t=="function",ze=t=>typeof t=="string",Rr=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",Sp=t=>(Ue(t)||he(t))&&he(t.then)&&he(t.catch),Pp=Object.prototype.toString,Ca=t=>Pp.call(t),gE=t=>Ca(t).slice(8,-1),Cp=t=>Ca(t)==="[object Object]",ql=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,_i=jl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ka=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},_E=/-\w/g,Gt=ka(t=>t.replace(_E,e=>e.slice(1).toUpperCase())),yE=/\B([A-Z])/g,Zr=ka(t=>t.replace(yE,"-$1").toLowerCase()),Na=ka(t=>t.charAt(0).toUpperCase()+t.slice(1)),bc=ka(t=>t?`on${Na(t)}`:""),hr=(t,e)=>!Object.is(t,e),Mo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},kp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Zc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},EE=t=>{const e=ze(t)?Number(t):NaN;return isNaN(e)?t:e};let zh;const Da=()=>zh||(zh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wl(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ze(r)?IE(r):Wl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ze(t)||Ue(t))return t}const vE=/;(?![^(]*\))/g,TE=/:([^]+)/,wE=/\/\*[^]*?\*\//g;function IE(t){const e={};return t.replace(wE,"").split(vE).forEach(n=>{if(n){const r=n.split(TE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Zi(t){let e="";if(ze(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=Zi(t[n]);r&&(e+=r+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const bE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",AE=jl(bE);function Np(t){return!!t||t===""}const Dp=t=>!!(t&&t.__v_isRef===!0),tt=t=>ze(t)?t:t==null?"":le(t)||Ue(t)&&(t.toString===Pp||!he(t.toString))?Dp(t)?tt(t.value):JSON.stringify(t,Op,2):String(t),Op=(t,e)=>Dp(e)?Op(t,e.value):vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ac(r,i)+" =>"]=s,n),{})}:Rp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ac(n))}:Rr(e)?Ac(e):Ue(e)&&!le(e)&&!Cp(e)?String(e):e,Ac=(t,e="")=>{var n;return Rr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kt;class RE{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=kt;try{return kt=this,e()}finally{kt=n}}}on(){++this._on===1&&(this.prevScope=kt,kt=this)}off(){this._on>0&&--this._on===0&&(kt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function SE(){return kt}let Ve;const Rc=new WeakSet;class Vp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,kt&&kt.active&&kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Rc.has(this)&&(Rc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Lp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Kh(this),Mp(this);const e=Ve,n=Zt;Ve=this,Zt=!0;try{return this.fn()}finally{Up(this),Ve=e,Zt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Gl(e);this.deps=this.depsTail=void 0,Kh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Rc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){el(this)&&this.run()}get dirty(){return el(this)}}let xp=0,yi,Ei;function Lp(t,e=!1){if(t.flags|=8,e){t.next=Ei,Ei=t;return}t.next=yi,yi=t}function zl(){xp++}function Kl(){if(--xp>0)return;if(Ei){let e=Ei;for(Ei=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;yi;){let e=yi;for(yi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Mp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Up(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Gl(r),PE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function el(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Fp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Fp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Oi)||(t.globalVersion=Oi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!el(t))))return;t.flags|=2;const e=t.dep,n=Ve,r=Zt;Ve=t,Zt=!0;try{Mp(t);const s=t.fn(t._value);(e.version===0||hr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ve=n,Zt=r,Up(t),t.flags&=-3}}function Gl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Gl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function PE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Zt=!0;const Bp=[];function Fn(){Bp.push(Zt),Zt=!1}function Bn(){const t=Bp.pop();Zt=t===void 0?!0:t}function Kh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ve;Ve=void 0;try{e()}finally{Ve=n}}}let Oi=0;class CE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ql{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ve||!Zt||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new CE(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,jp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=r)}return n}trigger(e){this.version++,Oi++,this.notify(e)}notify(e){zl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Kl()}}}function jp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)jp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const tl=new WeakMap,Hr=Symbol(""),nl=Symbol(""),Vi=Symbol("");function yt(t,e,n){if(Zt&&Ve){let r=tl.get(t);r||tl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ql),s.map=r,s.key=n),s.track()}}function Dn(t,e,n,r,s,i){const o=tl.get(t);if(!o){Oi++;return}const c=l=>{l&&l.trigger()};if(zl(),e==="clear")o.forEach(c);else{const l=le(t),u=l&&ql(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===Vi||!Rr(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Vi)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Hr)),vs(t)&&c(o.get(nl)));break;case"delete":l||(c(o.get(Hr)),vs(t)&&c(o.get(nl)));break;case"set":vs(t)&&c(o.get(Hr));break}}Kl()}function us(t){const e=be(t);return e===t?e:(yt(e,"iterate",Vi),Kt(t)?e:e.map(ct))}function Oa(t){return yt(t=be(t),"iterate",Vi),t}const kE={__proto__:null,[Symbol.iterator](){return Sc(this,Symbol.iterator,ct)},concat(...t){return us(this).concat(...t.map(e=>le(e)?us(e):e))},entries(){return Sc(this,"entries",t=>(t[1]=ct(t[1]),t))},every(t,e){return Sn(this,"every",t,e,void 0,arguments)},filter(t,e){return Sn(this,"filter",t,e,n=>n.map(ct),arguments)},find(t,e){return Sn(this,"find",t,e,ct,arguments)},findIndex(t,e){return Sn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Sn(this,"findLast",t,e,ct,arguments)},findLastIndex(t,e){return Sn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Sn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Pc(this,"includes",t)},indexOf(...t){return Pc(this,"indexOf",t)},join(t){return us(this).join(t)},lastIndexOf(...t){return Pc(this,"lastIndexOf",t)},map(t,e){return Sn(this,"map",t,e,void 0,arguments)},pop(){return ai(this,"pop")},push(...t){return ai(this,"push",t)},reduce(t,...e){return Gh(this,"reduce",t,e)},reduceRight(t,...e){return Gh(this,"reduceRight",t,e)},shift(){return ai(this,"shift")},some(t,e){return Sn(this,"some",t,e,void 0,arguments)},splice(...t){return ai(this,"splice",t)},toReversed(){return us(this).toReversed()},toSorted(t){return us(this).toSorted(t)},toSpliced(...t){return us(this).toSpliced(...t)},unshift(...t){return ai(this,"unshift",t)},values(){return Sc(this,"values",ct)}};function Sc(t,e,n){const r=Oa(t),s=r[e]();return r!==t&&!Kt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const NE=Array.prototype;function Sn(t,e,n,r,s,i){const o=Oa(t),c=o!==t&&!Kt(t),l=o[e];if(l!==NE[e]){const p=l.apply(t,i);return c?ct(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,ct(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function Gh(t,e,n,r){const s=Oa(t);let i=n;return s!==t&&(Kt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,ct(c),l,t)}),s[e](i,...r)}function Pc(t,e,n){const r=be(t);yt(r,"iterate",Vi);const s=r[e](...n);return(s===-1||s===!1)&&Xl(n[0])?(n[0]=be(n[0]),r[e](...n)):s}function ai(t,e,n=[]){Fn(),zl();const r=be(t)[e].apply(t,n);return Kl(),Bn(),r}const DE=jl("__proto__,__v_isRef,__isVue"),$p=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Rr));function OE(t){Rr(t)||(t=String(t));const e=be(this);return yt(e,"has",t),e.hasOwnProperty(t)}class Hp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?HE:Kp:i?zp:Wp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let l;if(o&&(l=kE[n]))return l;if(n==="hasOwnProperty")return OE}const c=Reflect.get(e,n,Tt(e)?e:r);return(Rr(n)?$p.has(n):DE(n))||(s||yt(e,"get",n),i)?c:Tt(c)?o&&ql(n)?c:c.value:Ue(c)?s?Qp(c):Va(c):c}}class qp extends Hp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=_r(i);if(!Kt(r)&&!_r(r)&&(i=be(i),r=be(r)),!le(e)&&Tt(i)&&!Tt(r))return l||(i.value=r),!0}const o=le(e)&&ql(n)?Number(n)<e.length:Se(e,n),c=Reflect.set(e,n,r,Tt(e)?e:s);return e===be(s)&&(o?hr(r,i)&&Dn(e,"set",n,r):Dn(e,"add",n,r)),c}deleteProperty(e,n){const r=Se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Dn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Rr(n)||!$p.has(n))&&yt(e,"has",n),r}ownKeys(e){return yt(e,"iterate",le(e)?"length":Hr),Reflect.ownKeys(e)}}class VE extends Hp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const xE=new qp,LE=new VE,ME=new qp(!0);const rl=t=>t,bo=t=>Reflect.getPrototypeOf(t);function UE(t,e,n){return function(...r){const s=this.__v_raw,i=be(s),o=vs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?rl:e?Zo:ct;return!e&&yt(i,"iterate",l?nl:Hr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Ao(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function FE(t,e){const n={get(s){const i=this.__v_raw,o=be(i),c=be(s);t||(hr(s,c)&&yt(o,"get",s),yt(o,"get",c));const{has:l}=bo(o),u=e?rl:t?Zo:ct;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&yt(be(s),"iterate",Hr),s.size},has(s){const i=this.__v_raw,o=be(i),c=be(s);return t||(hr(s,c)&&yt(o,"has",s),yt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=be(c),u=e?rl:t?Zo:ct;return!t&&yt(l,"iterate",Hr),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return rt(n,t?{add:Ao("add"),set:Ao("set"),delete:Ao("delete"),clear:Ao("clear")}:{add(s){!e&&!Kt(s)&&!_r(s)&&(s=be(s));const i=be(this);return bo(i).has.call(i,s)||(i.add(s),Dn(i,"add",s,s)),this},set(s,i){!e&&!Kt(i)&&!_r(i)&&(i=be(i));const o=be(this),{has:c,get:l}=bo(o);let u=c.call(o,s);u||(s=be(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?hr(i,f)&&Dn(o,"set",s,i):Dn(o,"add",s,i),this},delete(s){const i=be(this),{has:o,get:c}=bo(i);let l=o.call(i,s);l||(s=be(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Dn(i,"delete",s,void 0),u},clear(){const s=be(this),i=s.size!==0,o=s.clear();return i&&Dn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=UE(s,t,e)}),n}function Yl(t,e){const n=FE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Se(n,s)&&s in r?n:r,s,i)}const BE={get:Yl(!1,!1)},jE={get:Yl(!1,!0)},$E={get:Yl(!0,!1)};const Wp=new WeakMap,zp=new WeakMap,Kp=new WeakMap,HE=new WeakMap;function qE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function WE(t){return t.__v_skip||!Object.isExtensible(t)?0:qE(gE(t))}function Va(t){return _r(t)?t:Jl(t,!1,xE,BE,Wp)}function Gp(t){return Jl(t,!1,ME,jE,zp)}function Qp(t){return Jl(t,!0,LE,$E,Kp)}function Jl(t,e,n,r,s){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=WE(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Ts(t){return _r(t)?Ts(t.__v_raw):!!(t&&t.__v_isReactive)}function _r(t){return!!(t&&t.__v_isReadonly)}function Kt(t){return!!(t&&t.__v_isShallow)}function Xl(t){return t?!!t.__v_raw:!1}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function zE(t){return!Se(t,"__v_skip")&&Object.isExtensible(t)&&kp(t,"__v_skip",!0),t}const ct=t=>Ue(t)?Va(t):t,Zo=t=>Ue(t)?Qp(t):t;function Tt(t){return t?t.__v_isRef===!0:!1}function ht(t){return Yp(t,!1)}function KE(t){return Yp(t,!0)}function Yp(t,e){return Tt(t)?t:new GE(t,e)}class GE{constructor(e,n){this.dep=new Ql,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:be(e),this._value=n?e:ct(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Kt(e)||_r(e);e=r?e:be(e),hr(e,n)&&(this._rawValue=e,this._value=r?e:ct(e),this.dep.trigger())}}function ws(t){return Tt(t)?t.value:t}const QE={get:(t,e,n)=>e==="__v_raw"?t:ws(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Tt(s)&&!Tt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Jp(t){return Ts(t)?t:new Proxy(t,QE)}class YE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ql(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Oi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return Lp(this,!0),!0}get value(){const e=this.dep.track();return Fp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function JE(t,e,n=!1){let r,s;return he(t)?r=t:(r=t.get,s=t.set),new YE(r,s,n)}const Ro={},ea=new WeakMap;let Fr;function XE(t,e=!1,n=Fr){if(n){let r=ea.get(n);r||ea.set(n,r=[]),r.push(t)}}function ZE(t,e,n=Oe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=z=>s?z:Kt(z)||s===!1||s===0?On(z,1):On(z);let f,p,m,_,C=!1,D=!1;if(Tt(t)?(p=()=>t.value,C=Kt(t)):Ts(t)?(p=()=>u(t),C=!0):le(t)?(D=!0,C=t.some(z=>Ts(z)||Kt(z)),p=()=>t.map(z=>{if(Tt(z))return z.value;if(Ts(z))return u(z);if(he(z))return l?l(z,2):z()})):he(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Fn();try{m()}finally{Bn()}}const z=Fr;Fr=f;try{return l?l(t,3,[_]):t(_)}finally{Fr=z}}:p=pn,e&&s){const z=p,te=s===!0?1/0:s;p=()=>On(z(),te)}const O=SE(),j=()=>{f.stop(),O&&O.active&&Hl(O.effects,f)};if(i&&e){const z=e;e=(...te)=>{z(...te),j()}}let F=D?new Array(t.length).fill(Ro):Ro;const $=z=>{if(!(!(f.flags&1)||!f.dirty&&!z))if(e){const te=f.run();if(s||C||(D?te.some((oe,A)=>hr(oe,F[A])):hr(te,F))){m&&m();const oe=Fr;Fr=f;try{const A=[te,F===Ro?void 0:D&&F[0]===Ro?[]:F,_];F=te,l?l(e,3,A):e(...A)}finally{Fr=oe}}}else f.run()};return c&&c($),f=new Vp(p),f.scheduler=o?()=>o($,!1):$,_=z=>XE(z,!1,f),m=f.onStop=()=>{const z=ea.get(f);if(z){if(l)l(z,4);else for(const te of z)te();ea.delete(f)}},e?r?$(!0):F=f.run():o?o($.bind(null,!0),!0):f.run(),j.pause=f.pause.bind(f),j.resume=f.resume.bind(f),j.stop=j,j}function On(t,e=1/0,n){if(e<=0||!Ue(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Tt(t))On(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)On(t[r],e,n);else if(Rp(t)||vs(t))t.forEach(r=>{On(r,e,n)});else if(Cp(t)){for(const r in t)On(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&On(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function eo(t,e,n,r){try{return r?t(...r):t()}catch(s){xa(s,e,n)}}function tn(t,e,n,r){if(he(t)){const s=eo(t,e,n,r);return s&&Sp(s)&&s.catch(i=>{xa(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(tn(t[i],e,n,r));return s}}function xa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Oe;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){Fn(),eo(i,null,10,[t,l,u]),Bn();return}}ev(t,n,s,r,o)}function ev(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Rt=[];let un=-1;const Is=[];let nr=null,hs=0;const Xp=Promise.resolve();let ta=null;function Zp(t){const e=ta||Xp;return t?e.then(this?t.bind(this):t):e}function tv(t){let e=un+1,n=Rt.length;for(;e<n;){const r=e+n>>>1,s=Rt[r],i=xi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Zl(t){if(!(t.flags&1)){const e=xi(t),n=Rt[Rt.length-1];!n||!(t.flags&2)&&e>=xi(n)?Rt.push(t):Rt.splice(tv(e),0,t),t.flags|=1,em()}}function em(){ta||(ta=Xp.then(nm))}function nv(t){le(t)?Is.push(...t):nr&&t.id===-1?nr.splice(hs+1,0,t):t.flags&1||(Is.push(t),t.flags|=1),em()}function Qh(t,e,n=un+1){for(;n<Rt.length;n++){const r=Rt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Rt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function tm(t){if(Is.length){const e=[...new Set(Is)].sort((n,r)=>xi(n)-xi(r));if(Is.length=0,nr){nr.push(...e);return}for(nr=e,hs=0;hs<nr.length;hs++){const n=nr[hs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}nr=null,hs=0}}const xi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function nm(t){try{for(un=0;un<Rt.length;un++){const e=Rt[un];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),eo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;un<Rt.length;un++){const e=Rt[un];e&&(e.flags&=-2)}un=-1,Rt.length=0,tm(),ta=null,(Rt.length||Is.length)&&nm()}}let Ut=null,rm=null;function na(t){const e=Ut;return Ut=t,rm=t&&t.type.__scopeId||null,e}function Vn(t,e=Ut,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ia(-1);const i=na(e);let o;try{o=t(...s)}finally{na(i),r._d&&ia(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function $t(t,e){if(Ut===null)return t;const n=ja(Ut),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Oe]=e[s];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&On(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function xr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Fn(),tn(l,n,8,[t.el,c,t,e]),Bn())}}const rv=Symbol("_vte"),sm=t=>t.__isTeleport,Nn=Symbol("_leaveCb"),So=Symbol("_enterCb");function sv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Bs(()=>{t.isMounted=!0}),Ua(()=>{t.isUnmounting=!0}),t}const jt=[Function,Array],im={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:jt,onEnter:jt,onAfterEnter:jt,onEnterCancelled:jt,onBeforeLeave:jt,onLeave:jt,onAfterLeave:jt,onLeaveCancelled:jt,onBeforeAppear:jt,onAppear:jt,onAfterAppear:jt,onAppearCancelled:jt},om=t=>{const e=t.subTree;return e.component?om(e.component):e},iv={name:"BaseTransition",props:im,setup(t,{slots:e}){const n=Vm(),r=sv();return()=>{const s=e.default&&lm(e.default(),!0);if(!s||!s.length)return;const i=am(s),o=be(t),{mode:c}=o;if(r.isLeaving)return Cc(i);const l=Yh(i);if(!l)return Cc(i);let u=sl(l,o,r,n,p=>u=p);l.type!==St&&Li(l,u);let f=n.subTree&&Yh(n.subTree);if(f&&f.type!==St&&!jr(f,l)&&om(n).type!==St){let p=sl(f,o,r,n);if(Li(f,p),c==="out-in"&&l.type!==St)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},Cc(i);c==="in-out"&&l.type!==St?p.delayLeave=(m,_,C)=>{const D=cm(r,f);D[String(f.key)]=f,m[Nn]=()=>{_(),m[Nn]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{C(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function am(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==St){e=n;break}}return e}const ov=iv;function cm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function sl(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:m,onLeave:_,onAfterLeave:C,onLeaveCancelled:D,onBeforeAppear:O,onAppear:j,onAfterAppear:F,onAppearCancelled:$}=e,z=String(t.key),te=cm(n,t),oe=(y,R)=>{y&&tn(y,r,9,R)},A=(y,R)=>{const b=R[1];oe(y,R),le(y)?y.every(I=>I.length<=1)&&b():y.length<=1&&b()},v={mode:o,persisted:c,beforeEnter(y){let R=l;if(!n.isMounted)if(i)R=O||l;else return;y[Nn]&&y[Nn](!0);const b=te[z];b&&jr(t,b)&&b.el[Nn]&&b.el[Nn](),oe(R,[y])},enter(y){let R=u,b=f,I=p;if(!n.isMounted)if(i)R=j||u,b=F||f,I=$||p;else return;let E=!1;const Te=y[So]=qe=>{E||(E=!0,qe?oe(I,[y]):oe(b,[y]),v.delayedLeave&&v.delayedLeave(),y[So]=void 0)};R?A(R,[y,Te]):Te()},leave(y,R){const b=String(t.key);if(y[So]&&y[So](!0),n.isUnmounting)return R();oe(m,[y]);let I=!1;const E=y[Nn]=Te=>{I||(I=!0,R(),Te?oe(D,[y]):oe(C,[y]),y[Nn]=void 0,te[b]===t&&delete te[b])};te[b]=t,_?A(_,[y,E]):E()},clone(y){const R=sl(y,e,n,r,s);return s&&s(R),R}};return v}function Cc(t){if(La(t))return t=yr(t),t.children=null,t}function Yh(t){if(!La(t))return sm(t.type)&&t.children?am(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&he(n.default))return n.default()}}function Li(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Li(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function lm(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===nt?(o.patchFlag&128&&s++,r=r.concat(lm(o.children,e,c))):(e||o.type!==St)&&r.push(c!=null?yr(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function um(t,e){return he(t)?rt({name:t.name},e,{setup:t}):t}function hm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const ra=new WeakMap;function vi(t,e,n,r,s=!1){if(le(t)){t.forEach((C,D)=>vi(C,e&&(le(e)?e[D]:e),n,r,s));return}if(Ti(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&vi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ja(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===Oe?c.refs={}:c.refs,p=c.setupState,m=be(p),_=p===Oe?Ap:C=>Se(m,C);if(u!=null&&u!==l){if(Jh(e),ze(u))f[u]=null,_(u)&&(p[u]=null);else if(Tt(u)){u.value=null;const C=e;C.k&&(f[C.k]=null)}}if(he(l))eo(l,c,12,[o,f]);else{const C=ze(l),D=Tt(l);if(C||D){const O=()=>{if(t.f){const j=C?_(l)?p[l]:f[l]:l.value;if(s)le(j)&&Hl(j,i);else if(le(j))j.includes(i)||j.push(i);else if(C)f[l]=[i],_(l)&&(p[l]=f[l]);else{const F=[i];l.value=F,t.k&&(f[t.k]=F)}}else C?(f[l]=o,_(l)&&(p[l]=o)):D&&(l.value=o,t.k&&(f[t.k]=o))};if(o){const j=()=>{O(),ra.delete(t)};j.id=-1,ra.set(t,j),Lt(j,n)}else Jh(t),O()}}}function Jh(t){const e=ra.get(t);e&&(e.flags|=8,ra.delete(t))}Da().requestIdleCallback;Da().cancelIdleCallback;const Ti=t=>!!t.type.__asyncLoader,La=t=>t.type.__isKeepAlive;function av(t,e){fm(t,"a",e)}function cv(t,e){fm(t,"da",e)}function fm(t,e,n=vt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ma(e,r,n),n){let s=n.parent;for(;s&&s.parent;)La(s.parent.vnode)&&lv(r,e,n,s),s=s.parent}}function lv(t,e,n,r){const s=Ma(e,t,r,!0);dm(()=>{Hl(r[e],s)},n)}function Ma(t,e,n=vt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Fn();const c=to(n),l=tn(e,n,t,o);return c(),Bn(),l});return r?s.unshift(i):s.push(i),i}}const Wn=t=>(e,n=vt)=>{(!Fi||t==="sp")&&Ma(t,(...r)=>e(...r),n)},uv=Wn("bm"),Bs=Wn("m"),hv=Wn("bu"),fv=Wn("u"),Ua=Wn("bum"),dm=Wn("um"),dv=Wn("sp"),pv=Wn("rtg"),mv=Wn("rtc");function gv(t,e=vt){Ma("ec",t,e)}const _v="components";function Ns(t,e){return Ev(_v,t,!0,e)||t}const yv=Symbol.for("v-ndc");function Ev(t,e,n=!0,r=!1){const s=Ut||vt;if(s){const i=s.type;{const c=oT(i,!1);if(c&&(c===e||c===Gt(e)||c===Na(Gt(e))))return i}const o=Xh(s[t]||i[t],e)||Xh(s.appContext[t],e);return!o&&r?i:o}}function Xh(t,e){return t&&(t[e]||t[Gt(e)]||t[Na(Gt(e))])}function Mi(t,e,n,r){let s;const i=n,o=le(t);if(o||ze(t)){const c=o&&Ts(t);let l=!1,u=!1;c&&(l=!Kt(t),u=_r(t),t=Oa(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?Zo(ct(t[f])):ct(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ue(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const il=t=>t?xm(t)?ja(t):il(t.parent):null,wi=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>il(t.parent),$root:t=>il(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>mm(t),$forceUpdate:t=>t.f||(t.f=()=>{Zl(t.update)}),$nextTick:t=>t.n||(t.n=Zp.bind(t.proxy)),$watch:t=>Bv.bind(t)}),kc=(t,e)=>t!==Oe&&!t.__isScriptSetup&&Se(t,e),vv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(kc(r,e))return o[e]=1,r[e];if(s!==Oe&&Se(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Se(u,e))return o[e]=3,i[e];if(n!==Oe&&Se(n,e))return o[e]=4,n[e];ol&&(o[e]=0)}}const f=wi[e];let p,m;if(f)return e==="$attrs"&&yt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Oe&&Se(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Se(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return kc(s,e)?(s[e]=n,!0):r!==Oe&&Se(r,e)?(r[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},c){let l,u;return!!(n[c]||t!==Oe&&c[0]!=="$"&&Se(t,c)||kc(e,c)||(l=i[0])&&Se(l,c)||Se(r,c)||Se(wi,c)||Se(s.config.globalProperties,c)||(u=o.__cssModules)&&u[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Zh(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ol=!0;function Tv(t){const e=mm(t),n=t.proxy,r=t.ctx;ol=!1,e.beforeCreate&&ef(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:C,activated:D,deactivated:O,beforeDestroy:j,beforeUnmount:F,destroyed:$,unmounted:z,render:te,renderTracked:oe,renderTriggered:A,errorCaptured:v,serverPrefetch:y,expose:R,inheritAttrs:b,components:I,directives:E,filters:Te}=e;if(u&&wv(u,r,null),o)for(const Ae in o){const ye=o[Ae];he(ye)&&(r[Ae]=ye.bind(n))}if(s){const Ae=s.call(n,n);Ue(Ae)&&(t.data=Va(Ae))}if(ol=!0,i)for(const Ae in i){const ye=i[Ae],Ct=he(ye)?ye.bind(n,n):he(ye.get)?ye.get.bind(n,n):pn,on=!he(ye)&&he(ye.set)?ye.set.bind(n):pn,Dt=qt({get:Ct,set:on});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:it=>Dt.value=it})}if(c)for(const Ae in c)pm(c[Ae],r,n,Ae);if(l){const Ae=he(l)?l.call(n):l;Reflect.ownKeys(Ae).forEach(ye=>{Uo(ye,Ae[ye])})}f&&ef(f,t,"c");function Fe(Ae,ye){le(ye)?ye.forEach(Ct=>Ae(Ct.bind(n))):ye&&Ae(ye.bind(n))}if(Fe(uv,p),Fe(Bs,m),Fe(hv,_),Fe(fv,C),Fe(av,D),Fe(cv,O),Fe(gv,v),Fe(mv,oe),Fe(pv,A),Fe(Ua,F),Fe(dm,z),Fe(dv,y),le(R))if(R.length){const Ae=t.exposed||(t.exposed={});R.forEach(ye=>{Object.defineProperty(Ae,ye,{get:()=>n[ye],set:Ct=>n[ye]=Ct,enumerable:!0})})}else t.exposed||(t.exposed={});te&&t.render===pn&&(t.render=te),b!=null&&(t.inheritAttrs=b),I&&(t.components=I),E&&(t.directives=E),y&&hm(t)}function wv(t,e,n=pn){le(t)&&(t=al(t));for(const r in t){const s=t[r];let i;Ue(s)?"default"in s?i=en(s.from||r,s.default,!0):i=en(s.from||r):i=en(s),Tt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ef(t,e,n){tn(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function pm(t,e,n,r){let s=r.includes(".")?Pm(n,r):()=>n[r];if(ze(t)){const i=e[t];he(i)&&Fo(s,i)}else if(he(t))Fo(s,t.bind(n));else if(Ue(t))if(le(t))t.forEach(i=>pm(i,e,n,r));else{const i=he(t.handler)?t.handler.bind(n):e[t.handler];he(i)&&Fo(s,i,t)}}function mm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>sa(l,u,o,!0)),sa(l,e,o)),Ue(e)&&i.set(e,l),l}function sa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&sa(t,i,n,!0),s&&s.forEach(o=>sa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Iv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Iv={data:tf,props:nf,emits:nf,methods:hi,computed:hi,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:hi,directives:hi,watch:Av,provide:tf,inject:bv};function tf(t,e){return e?t?function(){return rt(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function bv(t,e){return hi(al(t),al(e))}function al(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function hi(t,e){return t?rt(Object.create(null),t,e):e}function nf(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:rt(Object.create(null),Zh(t),Zh(e??{})):e}function Av(t,e){if(!t)return e;if(!e)return t;const n=rt(Object.create(null),t);for(const r in e)n[r]=At(t[r],e[r]);return n}function gm(){return{app:null,config:{isNativeTag:Ap,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rv=0;function Sv(t,e){return function(r,s=null){he(r)||(r=rt({},r)),s!=null&&!Ue(s)&&(s=null);const i=gm(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:Rv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:cT,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&he(f.install)?(o.add(f),f.install(u,...p)):he(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!l){const _=u._ceVNode||Ne(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),l=!0,u._container=f,f.__vue_app__=u,ja(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(tn(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=bs;bs=u;try{return f()}finally{bs=p}}};return u}}let bs=null;function Uo(t,e){if(vt){let n=vt.provides;const r=vt.parent&&vt.parent.provides;r===n&&(n=vt.provides=Object.create(r)),n[t]=e}}function en(t,e,n=!1){const r=Vm();if(r||bs){let s=bs?bs._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&he(e)?e.call(r&&r.proxy):e}}const _m={},ym=()=>Object.create(_m),Em=t=>Object.getPrototypeOf(t)===_m;function Pv(t,e,n,r=!1){const s={},i=ym();t.propsDefaults=Object.create(null),vm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Gp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Cv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=be(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Fa(t.emitsOptions,m))continue;const _=e[m];if(l)if(Se(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const C=Gt(m);s[C]=cl(l,c,C,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{vm(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!Se(e,p)&&((f=Zr(p))===p||!Se(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=cl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Se(e,p))&&(delete i[p],u=!0)}u&&Dn(t.attrs,"set","")}function vm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(_i(l))continue;const u=e[l];let f;s&&Se(s,f=Gt(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:Fa(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=be(n),u=c||Oe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=cl(s,l,p,u[p],t,!Se(u,p))}}return o}function cl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Se(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&he(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=to(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Zr(n))&&(r=!0))}return r}const kv=new WeakMap;function Tm(t,e,n=!1){const r=n?kv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!he(t)){const f=p=>{l=!0;const[m,_]=Tm(p,e,!0);rt(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Ue(t)&&r.set(t,Es),Es;if(le(i))for(let f=0;f<i.length;f++){const p=Gt(i[f]);rf(p)&&(o[p]=Oe)}else if(i)for(const f in i){const p=Gt(f);if(rf(p)){const m=i[f],_=o[p]=le(m)||he(m)?{type:m}:rt({},m),C=_.type;let D=!1,O=!0;if(le(C))for(let j=0;j<C.length;++j){const F=C[j],$=he(F)&&F.name;if($==="Boolean"){D=!0;break}else $==="String"&&(O=!1)}else D=he(C)&&C.name==="Boolean";_[0]=D,_[1]=O,(D||Se(_,"default"))&&c.push(p)}}const u=[o,c];return Ue(t)&&r.set(t,u),u}function rf(t){return t[0]!=="$"&&!_i(t)}const eu=t=>t==="_"||t==="_ctx"||t==="$stable",tu=t=>le(t)?t.map(fn):[fn(t)],Nv=(t,e,n)=>{if(e._n)return e;const r=Vn((...s)=>tu(e(...s)),n);return r._c=!1,r},wm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(eu(s))continue;const i=t[s];if(he(i))e[s]=Nv(s,i,r);else if(i!=null){const o=tu(i);e[s]=()=>o}}},Im=(t,e)=>{const n=tu(e);t.slots.default=()=>n},bm=(t,e,n)=>{for(const r in e)(n||!eu(r))&&(t[r]=e[r])},Dv=(t,e,n)=>{const r=t.slots=ym();if(t.vnode.shapeFlag&32){const s=e._;s?(bm(r,e,n),n&&kp(r,"_",s,!0)):wm(e,r)}else e&&Im(t,e)},Ov=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Oe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:bm(s,e,n):(i=!e.$stable,wm(e,s)),o=e}else e&&(Im(t,e),o={default:1});if(i)for(const c in s)!eu(c)&&o[c]==null&&delete s[c]},Lt=Gv;function Vv(t){return xv(t)}function xv(t,e){const n=Da();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=pn,insertStaticContent:C}=t,D=(T,w,S,L=null,U=null,V=null,G=void 0,W=null,H=!!w.dynamicChildren)=>{if(T===w)return;T&&!jr(T,w)&&(L=x(T),it(T,U,V,!0),T=null),w.patchFlag===-2&&(H=!1,w.dynamicChildren=null);const{type:q,ref:se,shapeFlag:Y}=w;switch(q){case Ba:O(T,w,S,L);break;case St:j(T,w,S,L);break;case Bo:T==null&&F(w,S,L,G);break;case nt:I(T,w,S,L,U,V,G,W,H);break;default:Y&1?te(T,w,S,L,U,V,G,W,H):Y&6?E(T,w,S,L,U,V,G,W,H):(Y&64||Y&128)&&q.process(T,w,S,L,U,V,G,W,H,Z)}se!=null&&U?vi(se,T&&T.ref,V,w||T,!w):se==null&&T&&T.ref!=null&&vi(T.ref,null,V,T,!0)},O=(T,w,S,L)=>{if(T==null)r(w.el=c(w.children),S,L);else{const U=w.el=T.el;w.children!==T.children&&u(U,w.children)}},j=(T,w,S,L)=>{T==null?r(w.el=l(w.children||""),S,L):w.el=T.el},F=(T,w,S,L)=>{[T.el,T.anchor]=C(T.children,w,S,L,T.el,T.anchor)},$=({el:T,anchor:w},S,L)=>{let U;for(;T&&T!==w;)U=m(T),r(T,S,L),T=U;r(w,S,L)},z=({el:T,anchor:w})=>{let S;for(;T&&T!==w;)S=m(T),s(T),T=S;s(w)},te=(T,w,S,L,U,V,G,W,H)=>{w.type==="svg"?G="svg":w.type==="math"&&(G="mathml"),T==null?oe(w,S,L,U,V,G,W,H):y(T,w,U,V,G,W,H)},oe=(T,w,S,L,U,V,G,W)=>{let H,q;const{props:se,shapeFlag:Y,transition:ne,dirs:ie}=T;if(H=T.el=o(T.type,V,se&&se.is,se),Y&8?f(H,T.children):Y&16&&v(T.children,H,null,L,U,Nc(T,V),G,W),ie&&xr(T,null,L,"created"),A(H,T,T.scopeId,G,L),se){for(const ke in se)ke!=="value"&&!_i(ke)&&i(H,ke,null,se[ke],V,L);"value"in se&&i(H,"value",null,se.value,V),(q=se.onVnodeBeforeMount)&&ln(q,L,T)}ie&&xr(T,null,L,"beforeMount");const pe=Lv(U,ne);pe&&ne.beforeEnter(H),r(H,w,S),((q=se&&se.onVnodeMounted)||pe||ie)&&Lt(()=>{q&&ln(q,L,T),pe&&ne.enter(H),ie&&xr(T,null,L,"mounted")},U)},A=(T,w,S,L,U)=>{if(S&&_(T,S),L)for(let V=0;V<L.length;V++)_(T,L[V]);if(U){let V=U.subTree;if(w===V||km(V.type)&&(V.ssContent===w||V.ssFallback===w)){const G=U.vnode;A(T,G,G.scopeId,G.slotScopeIds,U.parent)}}},v=(T,w,S,L,U,V,G,W,H=0)=>{for(let q=H;q<T.length;q++){const se=T[q]=W?rr(T[q]):fn(T[q]);D(null,se,w,S,L,U,V,G,W)}},y=(T,w,S,L,U,V,G)=>{const W=w.el=T.el;let{patchFlag:H,dynamicChildren:q,dirs:se}=w;H|=T.patchFlag&16;const Y=T.props||Oe,ne=w.props||Oe;let ie;if(S&&Lr(S,!1),(ie=ne.onVnodeBeforeUpdate)&&ln(ie,S,w,T),se&&xr(w,T,S,"beforeUpdate"),S&&Lr(S,!0),(Y.innerHTML&&ne.innerHTML==null||Y.textContent&&ne.textContent==null)&&f(W,""),q?R(T.dynamicChildren,q,W,S,L,Nc(w,U),V):G||ye(T,w,W,null,S,L,Nc(w,U),V,!1),H>0){if(H&16)b(W,Y,ne,S,U);else if(H&2&&Y.class!==ne.class&&i(W,"class",null,ne.class,U),H&4&&i(W,"style",Y.style,ne.style,U),H&8){const pe=w.dynamicProps;for(let ke=0;ke<pe.length;ke++){const we=pe[ke],pt=Y[we],mt=ne[we];(mt!==pt||we==="value")&&i(W,we,pt,mt,U,S)}}H&1&&T.children!==w.children&&f(W,w.children)}else!G&&q==null&&b(W,Y,ne,S,U);((ie=ne.onVnodeUpdated)||se)&&Lt(()=>{ie&&ln(ie,S,w,T),se&&xr(w,T,S,"updated")},L)},R=(T,w,S,L,U,V,G)=>{for(let W=0;W<w.length;W++){const H=T[W],q=w[W],se=H.el&&(H.type===nt||!jr(H,q)||H.shapeFlag&198)?p(H.el):S;D(H,q,se,null,L,U,V,G,!0)}},b=(T,w,S,L,U)=>{if(w!==S){if(w!==Oe)for(const V in w)!_i(V)&&!(V in S)&&i(T,V,w[V],null,U,L);for(const V in S){if(_i(V))continue;const G=S[V],W=w[V];G!==W&&V!=="value"&&i(T,V,W,G,U,L)}"value"in S&&i(T,"value",w.value,S.value,U)}},I=(T,w,S,L,U,V,G,W,H)=>{const q=w.el=T?T.el:c(""),se=w.anchor=T?T.anchor:c("");let{patchFlag:Y,dynamicChildren:ne,slotScopeIds:ie}=w;ie&&(W=W?W.concat(ie):ie),T==null?(r(q,S,L),r(se,S,L),v(w.children||[],S,se,U,V,G,W,H)):Y>0&&Y&64&&ne&&T.dynamicChildren?(R(T.dynamicChildren,ne,S,U,V,G,W),(w.key!=null||U&&w===U.subTree)&&Am(T,w,!0)):ye(T,w,S,se,U,V,G,W,H)},E=(T,w,S,L,U,V,G,W,H)=>{w.slotScopeIds=W,T==null?w.shapeFlag&512?U.ctx.activate(w,S,L,G,H):Te(w,S,L,U,V,G,H):qe(T,w,H)},Te=(T,w,S,L,U,V,G)=>{const W=T.component=tT(T,L,U);if(La(T)&&(W.ctx.renderer=Z),nT(W,!1,G),W.asyncDep){if(U&&U.registerDep(W,Fe,G),!T.el){const H=W.subTree=Ne(St);j(null,H,w,S),T.placeholder=H.el}}else Fe(W,T,w,S,U,V,G)},qe=(T,w,S)=>{const L=w.component=T.component;if(zv(T,w,S))if(L.asyncDep&&!L.asyncResolved){Ae(L,w,S);return}else L.next=w,L.update();else w.el=T.el,L.vnode=w},Fe=(T,w,S,L,U,V,G)=>{const W=()=>{if(T.isMounted){let{next:Y,bu:ne,u:ie,parent:pe,vnode:ke}=T;{const Vt=Rm(T);if(Vt){Y&&(Y.el=ke.el,Ae(T,Y,G)),Vt.asyncDep.then(()=>{T.isUnmounted||W()});return}}let we=Y,pt;Lr(T,!1),Y?(Y.el=ke.el,Ae(T,Y,G)):Y=ke,ne&&Mo(ne),(pt=Y.props&&Y.props.onVnodeBeforeUpdate)&&ln(pt,pe,Y,ke),Lr(T,!0);const mt=of(T),Ot=T.subTree;T.subTree=mt,D(Ot,mt,p(Ot.el),x(Ot),T,U,V),Y.el=mt.el,we===null&&Kv(T,mt.el),ie&&Lt(ie,U),(pt=Y.props&&Y.props.onVnodeUpdated)&&Lt(()=>ln(pt,pe,Y,ke),U)}else{let Y;const{el:ne,props:ie}=w,{bm:pe,m:ke,parent:we,root:pt,type:mt}=T,Ot=Ti(w);Lr(T,!1),pe&&Mo(pe),!Ot&&(Y=ie&&ie.onVnodeBeforeMount)&&ln(Y,we,w),Lr(T,!0);{pt.ce&&pt.ce._def.shadowRoot!==!1&&pt.ce._injectChildStyle(mt);const Vt=T.subTree=of(T);D(null,Vt,S,L,T,U,V),w.el=Vt.el}if(ke&&Lt(ke,U),!Ot&&(Y=ie&&ie.onVnodeMounted)){const Vt=w;Lt(()=>ln(Y,we,Vt),U)}(w.shapeFlag&256||we&&Ti(we.vnode)&&we.vnode.shapeFlag&256)&&T.a&&Lt(T.a,U),T.isMounted=!0,w=S=L=null}};T.scope.on();const H=T.effect=new Vp(W);T.scope.off();const q=T.update=H.run.bind(H),se=T.job=H.runIfDirty.bind(H);se.i=T,se.id=T.uid,H.scheduler=()=>Zl(se),Lr(T,!0),q()},Ae=(T,w,S)=>{w.component=T;const L=T.vnode.props;T.vnode=w,T.next=null,Cv(T,w.props,L,S),Ov(T,w.children,S),Fn(),Qh(T),Bn()},ye=(T,w,S,L,U,V,G,W,H=!1)=>{const q=T&&T.children,se=T?T.shapeFlag:0,Y=w.children,{patchFlag:ne,shapeFlag:ie}=w;if(ne>0){if(ne&128){on(q,Y,S,L,U,V,G,W,H);return}else if(ne&256){Ct(q,Y,S,L,U,V,G,W,H);return}}ie&8?(se&16&&dt(q,U,V),Y!==q&&f(S,Y)):se&16?ie&16?on(q,Y,S,L,U,V,G,W,H):dt(q,U,V,!0):(se&8&&f(S,""),ie&16&&v(Y,S,L,U,V,G,W,H))},Ct=(T,w,S,L,U,V,G,W,H)=>{T=T||Es,w=w||Es;const q=T.length,se=w.length,Y=Math.min(q,se);let ne;for(ne=0;ne<Y;ne++){const ie=w[ne]=H?rr(w[ne]):fn(w[ne]);D(T[ne],ie,S,null,U,V,G,W,H)}q>se?dt(T,U,V,!0,!1,Y):v(w,S,L,U,V,G,W,H,Y)},on=(T,w,S,L,U,V,G,W,H)=>{let q=0;const se=w.length;let Y=T.length-1,ne=se-1;for(;q<=Y&&q<=ne;){const ie=T[q],pe=w[q]=H?rr(w[q]):fn(w[q]);if(jr(ie,pe))D(ie,pe,S,null,U,V,G,W,H);else break;q++}for(;q<=Y&&q<=ne;){const ie=T[Y],pe=w[ne]=H?rr(w[ne]):fn(w[ne]);if(jr(ie,pe))D(ie,pe,S,null,U,V,G,W,H);else break;Y--,ne--}if(q>Y){if(q<=ne){const ie=ne+1,pe=ie<se?w[ie].el:L;for(;q<=ne;)D(null,w[q]=H?rr(w[q]):fn(w[q]),S,pe,U,V,G,W,H),q++}}else if(q>ne)for(;q<=Y;)it(T[q],U,V,!0),q++;else{const ie=q,pe=q,ke=new Map;for(q=pe;q<=ne;q++){const ot=w[q]=H?rr(w[q]):fn(w[q]);ot.key!=null&&ke.set(ot.key,q)}let we,pt=0;const mt=ne-pe+1;let Ot=!1,Vt=0;const Yt=new Array(mt);for(q=0;q<mt;q++)Yt[q]=0;for(q=ie;q<=Y;q++){const ot=T[q];if(pt>=mt){it(ot,U,V,!0);continue}let Xe;if(ot.key!=null)Xe=ke.get(ot.key);else for(we=pe;we<=ne;we++)if(Yt[we-pe]===0&&jr(ot,w[we])){Xe=we;break}Xe===void 0?it(ot,U,V,!0):(Yt[Xe-pe]=q+1,Xe>=Vt?Vt=Xe:Ot=!0,D(ot,w[Xe],S,null,U,V,G,W,H),pt++)}const os=Ot?Mv(Yt):Es;for(we=os.length-1,q=mt-1;q>=0;q--){const ot=pe+q,Xe=w[ot],zs=w[ot+1],kr=ot+1<se?zs.el||zs.placeholder:L;Yt[q]===0?D(null,Xe,S,kr,U,V,G,W,H):Ot&&(we<0||q!==os[we]?Dt(Xe,S,kr,2):we--)}}},Dt=(T,w,S,L,U=null)=>{const{el:V,type:G,transition:W,children:H,shapeFlag:q}=T;if(q&6){Dt(T.component.subTree,w,S,L);return}if(q&128){T.suspense.move(w,S,L);return}if(q&64){G.move(T,w,S,Z);return}if(G===nt){r(V,w,S);for(let Y=0;Y<H.length;Y++)Dt(H[Y],w,S,L);r(T.anchor,w,S);return}if(G===Bo){$(T,w,S);return}if(L!==2&&q&1&&W)if(L===0)W.beforeEnter(V),r(V,w,S),Lt(()=>W.enter(V),U);else{const{leave:Y,delayLeave:ne,afterLeave:ie}=W,pe=()=>{T.ctx.isUnmounted?s(V):r(V,w,S)},ke=()=>{V._isLeaving&&V[Nn](!0),Y(V,()=>{pe(),ie&&ie()})};ne?ne(V,pe,ke):ke()}else r(V,w,S)},it=(T,w,S,L=!1,U=!1)=>{const{type:V,props:G,ref:W,children:H,dynamicChildren:q,shapeFlag:se,patchFlag:Y,dirs:ne,cacheIndex:ie}=T;if(Y===-2&&(U=!1),W!=null&&(Fn(),vi(W,null,S,T,!0),Bn()),ie!=null&&(w.renderCache[ie]=void 0),se&256){w.ctx.deactivate(T);return}const pe=se&1&&ne,ke=!Ti(T);let we;if(ke&&(we=G&&G.onVnodeBeforeUnmount)&&ln(we,w,T),se&6)zn(T.component,S,L);else{if(se&128){T.suspense.unmount(S,L);return}pe&&xr(T,null,w,"beforeUnmount"),se&64?T.type.remove(T,w,S,Z,L):q&&!q.hasOnce&&(V!==nt||Y>0&&Y&64)?dt(q,w,S,!1,!0):(V===nt&&Y&384||!U&&se&16)&&dt(H,w,S),L&&Rn(T)}(ke&&(we=G&&G.onVnodeUnmounted)||pe)&&Lt(()=>{we&&ln(we,w,T),pe&&xr(T,null,w,"unmounted")},S)},Rn=T=>{const{type:w,el:S,anchor:L,transition:U}=T;if(w===nt){Qt(S,L);return}if(w===Bo){z(T);return}const V=()=>{s(S),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(T.shapeFlag&1&&U&&!U.persisted){const{leave:G,delayLeave:W}=U,H=()=>G(S,V);W?W(T.el,V,H):H()}else V()},Qt=(T,w)=>{let S;for(;T!==w;)S=m(T),s(T),T=S;s(w)},zn=(T,w,S)=>{const{bum:L,scope:U,job:V,subTree:G,um:W,m:H,a:q}=T;sf(H),sf(q),L&&Mo(L),U.stop(),V&&(V.flags|=8,it(G,T,w,S)),W&&Lt(W,w),Lt(()=>{T.isUnmounted=!0},w)},dt=(T,w,S,L=!1,U=!1,V=0)=>{for(let G=V;G<T.length;G++)it(T[G],w,S,L,U)},x=T=>{if(T.shapeFlag&6)return x(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const w=m(T.anchor||T.el),S=w&&w[rv];return S?m(S):w};let J=!1;const Q=(T,w,S)=>{T==null?w._vnode&&it(w._vnode,null,null,!0):D(w._vnode||null,T,w,null,null,null,S),w._vnode=T,J||(J=!0,Qh(),tm(),J=!1)},Z={p:D,um:it,m:Dt,r:Rn,mt:Te,mc:v,pc:ye,pbc:R,n:x,o:t};return{render:Q,hydrate:void 0,createApp:Sv(Q)}}function Nc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Lr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Lv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Am(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=rr(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Am(o,c)),c.type===Ba&&c.patchFlag!==-1&&(c.el=o.el),c.type===St&&!c.el&&(c.el=o.el)}}function Mv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Rm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Rm(e)}function sf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Uv=Symbol.for("v-scx"),Fv=()=>en(Uv);function Fo(t,e,n){return Sm(t,e,n)}function Sm(t,e,n=Oe){const{immediate:r,deep:s,flush:i,once:o}=n,c=rt({},n),l=e&&r||!e&&i!=="post";let u;if(Fi){if(i==="sync"){const _=Fv();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=pn,_.resume=pn,_.pause=pn,_}}const f=vt;c.call=(_,C,D)=>tn(_,f,C,D);let p=!1;i==="post"?c.scheduler=_=>{Lt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,C)=>{C?_():Zl(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=ZE(t,e,c);return Fi&&(u?u.push(m):l&&m()),m}function Bv(t,e,n){const r=this.proxy,s=ze(t)?t.includes(".")?Pm(r,t):()=>r[t]:t.bind(r,r);let i;he(e)?i=e:(i=e.handler,n=e);const o=to(this),c=Sm(s,i.bind(r),n);return o(),c}function Pm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const jv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Gt(e)}Modifiers`]||t[`${Zr(e)}Modifiers`];function $v(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Oe;let s=n;const i=e.startsWith("update:"),o=i&&jv(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>ze(f)?f.trim():f)),o.number&&(s=n.map(Zc)));let c,l=r[c=bc(e)]||r[c=bc(Gt(e))];!l&&i&&(l=r[c=bc(Zr(e))]),l&&tn(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,tn(u,t,6,s)}}const Hv=new WeakMap;function Cm(t,e,n=!1){const r=n?Hv:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!he(t)){const l=u=>{const f=Cm(u,e,!0);f&&(c=!0,rt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ue(t)&&r.set(t,null),null):(le(i)?i.forEach(l=>o[l]=null):rt(o,i),Ue(t)&&r.set(t,o),o)}function Fa(t,e){return!t||!Pa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,Zr(e))||Se(t,e))}function of(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:_,ctx:C,inheritAttrs:D}=t,O=na(t);let j,F;try{if(n.shapeFlag&4){const z=s||r,te=z;j=fn(u.call(te,z,f,p,_,m,C)),F=c}else{const z=e;j=fn(z.length>1?z(p,{attrs:c,slots:o,emit:l}):z(p,null)),F=e.props?c:qv(c)}}catch(z){Ii.length=0,xa(z,t,1),j=Ne(St)}let $=j;if(F&&D!==!1){const z=Object.keys(F),{shapeFlag:te}=$;z.length&&te&7&&(i&&z.some($l)&&(F=Wv(F,i)),$=yr($,F,!1,!0))}return n.dirs&&($=yr($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&Li($,n.transition),j=$,na(O),j}const qv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Pa(n))&&((e||(e={}))[n]=t[n]);return e},Wv=(t,e)=>{const n={};for(const r in t)(!$l(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function zv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?af(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!Fa(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?af(r,o,u):!0:!!o;return!1}function af(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Fa(n,i))return!0}return!1}function Kv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const km=t=>t.__isSuspense;function Gv(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):nv(t)}const nt=Symbol.for("v-fgt"),Ba=Symbol.for("v-txt"),St=Symbol.for("v-cmt"),Bo=Symbol.for("v-stc"),Ii=[];let Ft=null;function ve(t=!1){Ii.push(Ft=t?null:[])}function Qv(){Ii.pop(),Ft=Ii[Ii.length-1]||null}let Ui=1;function ia(t,e=!1){Ui+=t,t<0&&Ft&&e&&(Ft.hasOnce=!0)}function Nm(t){return t.dynamicChildren=Ui>0?Ft||Es:null,Qv(),Ui>0&&Ft&&Ft.push(t),t}function Ie(t,e,n,r,s,i){return Nm(N(t,e,n,r,s,i,!0))}function Dm(t,e,n,r,s){return Nm(Ne(t,e,n,r,s,!0))}function oa(t){return t?t.__v_isVNode===!0:!1}function jr(t,e){return t.type===e.type&&t.key===e.key}const Om=({key:t})=>t??null,jo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||Tt(t)||he(t)?{i:Ut,r:t,k:e,f:!!n}:t:null);function N(t,e=null,n=null,r=0,s=null,i=t===nt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Om(e),ref:e&&jo(e),scopeId:rm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ut};return c?(ru(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ze(n)?8:16),Ui>0&&!o&&Ft&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ft.push(l),l}const Ne=Yv;function Yv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===yv)&&(t=St),oa(t)){const c=yr(t,e,!0);return n&&ru(c,n),Ui>0&&!i&&Ft&&(c.shapeFlag&6?Ft[Ft.indexOf(t)]=c:Ft.push(c)),c.patchFlag=-2,c}if(aT(t)&&(t=t.__vccOpts),e){e=Jv(e);let{class:c,style:l}=e;c&&!ze(c)&&(e.class=Zi(c)),Ue(l)&&(Xl(l)&&!le(l)&&(l=rt({},l)),e.style=Wl(l))}const o=ze(t)?1:km(t)?128:sm(t)?64:Ue(t)?4:he(t)?2:0;return N(t,e,n,r,s,o,i,!0)}function Jv(t){return t?Xl(t)||Em(t)?rt({},t):t:null}function yr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?Xv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Om(u),ref:e&&e.ref?n&&i?le(i)?i.concat(jo(e)):[i,jo(e)]:jo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==nt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yr(t.ssContent),ssFallback:t.ssFallback&&yr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Li(f,l.clone(f)),f}function Pt(t=" ",e=0){return Ne(Ba,null,t,e)}function nu(t,e){const n=Ne(Bo,null,t);return n.staticCount=e,n}function wn(t="",e=!1){return e?(ve(),Dm(St,null,t)):Ne(St,null,t)}function fn(t){return t==null||typeof t=="boolean"?Ne(St):le(t)?Ne(nt,null,t.slice()):oa(t)?rr(t):Ne(Ba,null,String(t))}function rr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:yr(t)}function ru(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ru(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Em(e)?e._ctx=Ut:s===3&&Ut&&(Ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:Ut},n=32):(e=String(e),r&64?(n=16,e=[Pt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Xv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Zi([e.class,r.class]));else if(s==="style")e.style=Wl([e.style,r.style]);else if(Pa(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ln(t,e,n,r=null){tn(t,e,7,[n,r])}const Zv=gm();let eT=0;function tT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Zv,i={uid:eT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new RE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tm(r,s),emitsOptions:Cm(r,s),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:r.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=$v.bind(null,i),t.ce&&t.ce(i),i}let vt=null;const Vm=()=>vt||Ut;let aa,ll;{const t=Da(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};aa=e("__VUE_INSTANCE_SETTERS__",n=>vt=n),ll=e("__VUE_SSR_SETTERS__",n=>Fi=n)}const to=t=>{const e=vt;return aa(t),t.scope.on(),()=>{t.scope.off(),aa(e)}},cf=()=>{vt&&vt.scope.off(),aa(null)};function xm(t){return t.vnode.shapeFlag&4}let Fi=!1;function nT(t,e=!1,n=!1){e&&ll(e);const{props:r,children:s}=t.vnode,i=xm(t);Pv(t,r,i,e),Dv(t,s,n||e);const o=i?rT(t,e):void 0;return e&&ll(!1),o}function rT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,vv);const{setup:r}=n;if(r){Fn();const s=t.setupContext=r.length>1?iT(t):null,i=to(t),o=eo(r,t,0,[t.props,s]),c=Sp(o);if(Bn(),i(),(c||t.sp)&&!Ti(t)&&hm(t),c){if(o.then(cf,cf),e)return o.then(l=>{lf(t,l)}).catch(l=>{xa(l,t,0)});t.asyncDep=o}else lf(t,o)}else Lm(t)}function lf(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=Jp(e)),Lm(t)}function Lm(t,e,n){const r=t.type;t.render||(t.render=r.render||pn);{const s=to(t);Fn();try{Tv(t)}finally{Bn(),s()}}}const sT={get(t,e){return yt(t,"get",""),t[e]}};function iT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,sT),slots:t.slots,emit:t.emit,expose:e}}function ja(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Jp(zE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in wi)return wi[n](t)},has(e,n){return n in e||n in wi}})):t.proxy}function oT(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function aT(t){return he(t)&&"__vccOpts"in t}const qt=(t,e)=>JE(t,e,Fi);function su(t,e,n){const r=(i,o,c)=>{ia(-1);try{return Ne(i,o,c)}finally{ia(1)}},s=arguments.length;return s===2?Ue(e)&&!le(e)?oa(e)?r(t,null,[e]):r(t,e):r(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&oa(n)&&(n=[n]),r(t,e,n))}const cT="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ul;const uf=typeof window<"u"&&window.trustedTypes;if(uf)try{ul=uf.createPolicy("vue",{createHTML:t=>t})}catch{}const Mm=ul?t=>ul.createHTML(t):t=>t,lT="http://www.w3.org/2000/svg",uT="http://www.w3.org/1998/Math/MathML",kn=typeof document<"u"?document:null,hf=kn&&kn.createElement("template"),hT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?kn.createElementNS(lT,t):e==="mathml"?kn.createElementNS(uT,t):n?kn.createElement(t,{is:n}):kn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>kn.createTextNode(t),createComment:t=>kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{hf.innerHTML=Mm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=hf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Zn="transition",ci="animation",Bi=Symbol("_vtc"),Um={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},fT=rt({},im,Um),dT=t=>(t.displayName="Transition",t.props=fT,t),Fm=dT((t,{slots:e})=>su(ov,pT(t),e)),Mr=(t,e=[])=>{le(t)?t.forEach(n=>n(...e)):t&&t(...e)},ff=t=>t?le(t)?t.some(e=>e.length>1):t.length>1:!1;function pT(t){const e={};for(const I in t)I in Um||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,C=mT(s),D=C&&C[0],O=C&&C[1],{onBeforeEnter:j,onEnter:F,onEnterCancelled:$,onLeave:z,onLeaveCancelled:te,onBeforeAppear:oe=j,onAppear:A=F,onAppearCancelled:v=$}=e,y=(I,E,Te,qe)=>{I._enterCancelled=qe,Ur(I,E?f:c),Ur(I,E?u:o),Te&&Te()},R=(I,E)=>{I._isLeaving=!1,Ur(I,p),Ur(I,_),Ur(I,m),E&&E()},b=I=>(E,Te)=>{const qe=I?A:F,Fe=()=>y(E,I,Te);Mr(qe,[E,Fe]),df(()=>{Ur(E,I?l:i),Pn(E,I?f:c),ff(qe)||pf(E,r,D,Fe)})};return rt(e,{onBeforeEnter(I){Mr(j,[I]),Pn(I,i),Pn(I,o)},onBeforeAppear(I){Mr(oe,[I]),Pn(I,l),Pn(I,u)},onEnter:b(!1),onAppear:b(!0),onLeave(I,E){I._isLeaving=!0;const Te=()=>R(I,E);Pn(I,p),I._enterCancelled?(Pn(I,m),_f()):(_f(),Pn(I,m)),df(()=>{I._isLeaving&&(Ur(I,p),Pn(I,_),ff(z)||pf(I,r,O,Te))}),Mr(z,[I,Te])},onEnterCancelled(I){y(I,!1,void 0,!0),Mr($,[I])},onAppearCancelled(I){y(I,!0,void 0,!0),Mr(v,[I])},onLeaveCancelled(I){R(I),Mr(te,[I])}})}function mT(t){if(t==null)return null;if(Ue(t))return[Dc(t.enter),Dc(t.leave)];{const e=Dc(t);return[e,e]}}function Dc(t){return EE(t)}function Pn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Bi]||(t[Bi]=new Set)).add(e)}function Ur(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Bi];n&&(n.delete(e),n.size||(t[Bi]=void 0))}function df(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let gT=0;function pf(t,e,n,r){const s=t._endId=++gT,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=_T(t,e);if(!o)return r();const u=o+"end";let f=0;const p=()=>{t.removeEventListener(u,m),i()},m=_=>{_.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},c+1),t.addEventListener(u,m)}function _T(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${Zn}Delay`),i=r(`${Zn}Duration`),o=mf(s,i),c=r(`${ci}Delay`),l=r(`${ci}Duration`),u=mf(c,l);let f=null,p=0,m=0;e===Zn?o>0&&(f=Zn,p=o,m=i.length):e===ci?u>0&&(f=ci,p=u,m=l.length):(p=Math.max(o,u),f=p>0?o>u?Zn:ci:null,m=f?f===Zn?i.length:l.length:0);const _=f===Zn&&/\b(?:transform|all)(?:,|$)/.test(r(`${Zn}Property`).toString());return{type:f,timeout:p,propCount:m,hasTransform:_}}function mf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>gf(n)+gf(t[r])))}function gf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function _f(){return document.body.offsetHeight}function yT(t,e,n){const r=t[Bi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const yf=Symbol("_vod"),ET=Symbol("_vsh"),vT=Symbol(""),TT=/(?:^|;)\s*display\s*:/;function wT(t,e,n){const r=t.style,s=ze(n);let i=!1;if(n&&!s){if(e)if(ze(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&$o(r,c,"")}else for(const o in e)n[o]==null&&$o(r,o,"");for(const o in n)o==="display"&&(i=!0),$o(r,o,n[o])}else if(s){if(e!==n){const o=r[vT];o&&(n+=";"+o),r.cssText=n,i=TT.test(n)}}else e&&t.removeAttribute("style");yf in t&&(t[yf]=i?r.display:"",t[ET]&&(r.display="none"))}const Ef=/\s*!important$/;function $o(t,e,n){if(le(n))n.forEach(r=>$o(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=IT(t,e);Ef.test(n)?t.setProperty(Zr(r),n.replace(Ef,""),"important"):t[r]=n}}const vf=["Webkit","Moz","ms"],Oc={};function IT(t,e){const n=Oc[e];if(n)return n;let r=Gt(e);if(r!=="filter"&&r in t)return Oc[e]=r;r=Na(r);for(let s=0;s<vf.length;s++){const i=vf[s]+r;if(i in t)return Oc[e]=i}return e}const Tf="http://www.w3.org/1999/xlink";function wf(t,e,n,r,s,i=AE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Tf,e.slice(6,e.length)):t.setAttributeNS(Tf,e,n):n==null||i&&!Np(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Rr(n)?String(n):n)}function If(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Mm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Np(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function fs(t,e,n,r){t.addEventListener(e,n,r)}function bT(t,e,n,r){t.removeEventListener(e,n,r)}const bf=Symbol("_vei");function AT(t,e,n,r,s=null){const i=t[bf]||(t[bf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=RT(e);if(r){const u=i[e]=CT(r,s);fs(t,c,u,l)}else o&&(bT(t,c,o,l),i[e]=void 0)}}const Af=/(?:Once|Passive|Capture)$/;function RT(t){let e;if(Af.test(t)){e={};let r;for(;r=t.match(Af);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Zr(t.slice(2)),e]}let Vc=0;const ST=Promise.resolve(),PT=()=>Vc||(ST.then(()=>Vc=0),Vc=Date.now());function CT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;tn(kT(r,n.value),e,5,[r])};return n.value=t,n.attached=PT(),n}function kT(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Rf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,NT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?yT(t,r,o):e==="style"?wT(t,n,r):Pa(e)?$l(e)||AT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):DT(t,e,r,o))?(If(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&wf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ze(r))?If(t,Gt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),wf(t,e,r,o))};function DT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Rf(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Rf(e)&&ze(n)?!1:e in t}const Sf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>Mo(e,n):e};function OT(t){t.target.composing=!0}function Pf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const xc=Symbol("_assign"),Ht={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[xc]=Sf(s);const i=r||s.props&&s.props.type==="number";fs(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Zc(c)),t[xc](c)}),n&&fs(t,"change",()=>{t.value=t.value.trim()}),e||(fs(t,"compositionstart",OT),fs(t,"compositionend",Pf),fs(t,"change",Pf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[xc]=Sf(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Zc(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},VT=["ctrl","shift","alt","meta"],xT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>VT.some(n=>t[`${n}Key`]&&!e.includes(n))},$a=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const c=xT[e[o]];if(c&&c(s,e))return}return t(s,...i)}))},LT=rt({patchProp:NT},hT);let Cf;function MT(){return Cf||(Cf=Vv(LT))}const UT=((...t)=>{const e=MT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=BT(r);if(!s)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,FT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function FT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function BT(t){return ze(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ds=typeof document<"u";function Bm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function jT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Bm(t.default)}const Re=Object.assign;function Lc(t,e){const n={};for(const r in e){const s=e[r];n[r]=nn(s)?s.map(t):t(s)}return n}const bi=()=>{},nn=Array.isArray,jm=/#/g,$T=/&/g,HT=/\//g,qT=/=/g,WT=/\?/g,$m=/\+/g,zT=/%5B/g,KT=/%5D/g,Hm=/%5E/g,GT=/%60/g,qm=/%7B/g,QT=/%7C/g,Wm=/%7D/g,YT=/%20/g;function iu(t){return encodeURI(""+t).replace(QT,"|").replace(zT,"[").replace(KT,"]")}function JT(t){return iu(t).replace(qm,"{").replace(Wm,"}").replace(Hm,"^")}function hl(t){return iu(t).replace($m,"%2B").replace(YT,"+").replace(jm,"%23").replace($T,"%26").replace(GT,"`").replace(qm,"{").replace(Wm,"}").replace(Hm,"^")}function XT(t){return hl(t).replace(qT,"%3D")}function ZT(t){return iu(t).replace(jm,"%23").replace(WT,"%3F")}function ew(t){return t==null?"":ZT(t).replace(HT,"%2F")}function ji(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const tw=/\/$/,nw=t=>t.replace(tw,"");function Mc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=ow(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ji(o)}}function rw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function kf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function sw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ds(e.matched[r],n.matched[s])&&zm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ds(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function zm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!iw(t[n],e[n]))return!1;return!0}function iw(t,e){return nn(t)?Nf(t,e):nn(e)?Nf(e,t):t===e}function Nf(t,e){return nn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ow(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const er={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var $i;(function(t){t.pop="pop",t.push="push"})($i||($i={}));var Ai;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ai||(Ai={}));function aw(t){if(!t)if(ds){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),nw(t)}const cw=/^[^#]+#/;function lw(t,e){return t.replace(cw,"#")+e}function uw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ha=()=>({left:window.scrollX,top:window.scrollY});function hw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=uw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Df(t,e){return(history.state?history.state.position-e:-1)+t}const fl=new Map;function fw(t,e){fl.set(t,e)}function dw(t){const e=fl.get(t);return fl.delete(t),e}let pw=()=>location.protocol+"//"+location.host;function Km(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),kf(l,"")}return kf(n,t)+r+s}function mw(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=Km(t,location),C=n.value,D=e.value;let O=0;if(m){if(n.value=_,e.value=m,o&&o===C){o=null;return}O=D?m.position-D.position:0}else r(_);s.forEach(j=>{j(n.value,C,{delta:O,type:$i.pop,direction:O?O>0?Ai.forward:Ai.back:Ai.unknown})})};function l(){o=n.value}function u(m){s.push(m);const _=()=>{const C=s.indexOf(m);C>-1&&s.splice(C,1)};return i.push(_),_}function f(){const{history:m}=window;m.state&&m.replaceState(Re({},m.state,{scroll:Ha()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function Of(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ha():null}}function gw(t){const{history:e,location:n}=window,r={value:Km(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:pw()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(l,u){const f=Re({},e.state,Of(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,u){const f=Re({},s.value,e.state,{forward:l,scroll:Ha()});i(f.current,f,!0);const p=Re({},Of(r.value,l,null),{position:f.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function _w(t){t=aw(t);const e=gw(t),n=mw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:lw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function yw(t){return typeof t=="string"||t&&typeof t=="object"}function Gm(t){return typeof t=="string"||typeof t=="symbol"}const Qm=Symbol("");var Vf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Vf||(Vf={}));function Os(t,e){return Re(new Error,{type:t,[Qm]:!0},e)}function Cn(t,e){return t instanceof Error&&Qm in t&&(e==null||!!(t.type&e))}const xf="[^/]+?",Ew={sensitive:!1,strict:!1,start:!0,end:!0},vw=/[.+*?^${}()[\]/\\]/g;function Tw(t,e){const n=Re({},Ew,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(vw,"\\$&"),_+=40;else if(m.type===1){const{value:C,repeatable:D,optional:O,regexp:j}=m;i.push({name:C,repeatable:D,optional:O});const F=j||xf;if(F!==xf){_+=10;try{new RegExp(`(${F})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${C}" (${F}): `+z.message)}}let $=D?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;p||($=O&&u.length<2?`(?:/${$})`:"/"+$),O&&($+="?"),s+=$,_+=20,O&&(_+=-8),D&&(_+=-20),F===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",C=i[m-1];p[C.name]=_&&C.repeatable?_.split("/"):_}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of m)if(_.type===0)f+=_.value;else if(_.type===1){const{value:C,repeatable:D,optional:O}=_,j=C in u?u[C]:"";if(nn(j)&&!D)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const F=nn(j)?j.join("/"):j;if(!F)if(O)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);f+=F}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function ww(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Ym(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ww(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Lf(r))return 1;if(Lf(s))return-1}return s.length-r.length}function Lf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Iw={type:0,value:""},bw=/[a-zA-Z0-9_]/;function Aw(t){if(!t)return[[]];if(t==="/")return[[Iw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:bw.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function Rw(t,e,n){const r=Tw(Aw(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Sw(t,e){const n=[],r=new Map;e=Bf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const C=!_,D=Uf(p);D.aliasOf=_&&_.record;const O=Bf(e,p),j=[D];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const te of z)j.push(Uf(Re({},D,{components:_?_.record.components:D.components,path:te,aliasOf:_?_.record:D})))}let F,$;for(const z of j){const{path:te}=z;if(m&&te[0]!=="/"){const oe=m.record.path,A=oe[oe.length-1]==="/"?"":"/";z.path=m.record.path+(te&&A+te)}if(F=Rw(z,m,O),_?_.alias.push(F):($=$||F,$!==F&&$.alias.push(F),C&&p.name&&!Ff(F)&&o(p.name)),Jm(F)&&l(F),D.children){const oe=D.children;for(let A=0;A<oe.length;A++)i(oe[A],F,_&&_.children[A])}_=_||F}return $?()=>{o($)}:bi}function o(p){if(Gm(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=kw(p,n);n.splice(m,0,p),p.record.name&&!Ff(p)&&r.set(p.record.name,p)}function u(p,m){let _,C={},D,O;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Os(1,{location:p});O=_.record.name,C=Re(Mf(m.params,_.keys.filter($=>!$.optional).concat(_.parent?_.parent.keys.filter($=>$.optional):[]).map($=>$.name)),p.params&&Mf(p.params,_.keys.map($=>$.name))),D=_.stringify(C)}else if(p.path!=null)D=p.path,_=n.find($=>$.re.test(D)),_&&(C=_.parse(D),O=_.record.name);else{if(_=m.name?r.get(m.name):n.find($=>$.re.test(m.path)),!_)throw Os(1,{location:p,currentLocation:m});O=_.record.name,C=Re({},m.params,p.params),D=_.stringify(C)}const j=[];let F=_;for(;F;)j.unshift(F.record),F=F.parent;return{name:O,path:D,params:C,matched:j,meta:Cw(j)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Mf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Uf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Pw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Pw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ff(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Cw(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function Bf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function kw(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Ym(t,e[i])<0?r=i:n=i+1}const s=Nw(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Nw(t){let e=t;for(;e=e.parent;)if(Jm(e)&&Ym(t,e)===0)return e}function Jm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Dw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace($m," "),o=i.indexOf("="),c=ji(o<0?i:i.slice(0,o)),l=o<0?null:ji(i.slice(o+1));if(c in e){let u=e[c];nn(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function jf(t){let e="";for(let n in t){const r=t[n];if(n=XT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(nn(r)?r.map(i=>i&&hl(i)):[r&&hl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Ow(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=nn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Vw=Symbol(""),$f=Symbol(""),qa=Symbol(""),ou=Symbol(""),dl=Symbol("");function li(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function sr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(Os(4,{from:n,to:e})):m instanceof Error?l(m):yw(m)?l(Os(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function Uc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Bm(l)){const f=(l.__vccOpts||l)[e];f&&i.push(sr(f,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=jT(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&sr(_,n,r,o,c,s)()}))}}return i}function Hf(t){const e=en(qa),n=en(ou),r=qt(()=>{const l=ws(t.to);return e.resolve(l)}),s=qt(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Ds.bind(null,f));if(m>-1)return m;const _=qf(l[u-2]);return u>1&&qf(f)===_&&p[p.length-1].path!==_?p.findIndex(Ds.bind(null,l[u-2])):m}),i=qt(()=>s.value>-1&&Fw(n.params,r.value.params)),o=qt(()=>s.value>-1&&s.value===n.matched.length-1&&zm(n.params,r.value.params));function c(l={}){if(Uw(l)){const u=e[ws(t.replace)?"replace":"push"](ws(t.to)).catch(bi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:qt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function xw(t){return t.length===1?t[0]:t}const Lw=um({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Hf,setup(t,{slots:e}){const n=Va(Hf(t)),{options:r}=en(qa),s=qt(()=>({[Wf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Wf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&xw(e.default(n));return t.custom?i:su("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Mw=Lw;function Uw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Fw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!nn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function qf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Wf=(t,e,n)=>t??e??n,Bw=um({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=en(dl),s=qt(()=>t.route||r.value),i=en($f,0),o=qt(()=>{let u=ws(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=qt(()=>s.value.matched[o.value]);Uo($f,qt(()=>o.value+1)),Uo(Vw,c),Uo(dl,s);const l=ht();return Fo(()=>[l.value,c.value,t.name],([u,f,p],[m,_,C])=>{f&&(f.instances[p]=u,_&&_!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!Ds(f,_)||!m)&&(f.enterCallbacks[p]||[]).forEach(D=>D(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return zf(n.default,{Component:m,route:u});const _=p.props[f],C=_?_===!0?u.params:typeof _=="function"?_(u):_:null,O=su(m,Re({},C,e,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return zf(n.default,{Component:O,route:u})||O}}});function zf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const jw=Bw;function $w(t){const e=Sw(t.routes,t),n=t.parseQuery||Dw,r=t.stringifyQuery||jf,s=t.history,i=li(),o=li(),c=li(),l=KE(er);let u=er;ds&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Lc.bind(null,x=>""+x),p=Lc.bind(null,ew),m=Lc.bind(null,ji);function _(x,J){let Q,Z;return Gm(x)?(Q=e.getRecordMatcher(x),Z=J):Z=x,e.addRoute(Z,Q)}function C(x){const J=e.getRecordMatcher(x);J&&e.removeRoute(J)}function D(){return e.getRoutes().map(x=>x.record)}function O(x){return!!e.getRecordMatcher(x)}function j(x,J){if(J=Re({},J||l.value),typeof x=="string"){const S=Mc(n,x,J.path),L=e.resolve({path:S.path},J),U=s.createHref(S.fullPath);return Re(S,L,{params:m(L.params),hash:ji(S.hash),redirectedFrom:void 0,href:U})}let Q;if(x.path!=null)Q=Re({},x,{path:Mc(n,x.path,J.path).path});else{const S=Re({},x.params);for(const L in S)S[L]==null&&delete S[L];Q=Re({},x,{params:p(S)}),J.params=p(J.params)}const Z=e.resolve(Q,J),Ce=x.hash||"";Z.params=f(m(Z.params));const T=rw(r,Re({},x,{hash:JT(Ce),path:Z.path})),w=s.createHref(T);return Re({fullPath:T,hash:Ce,query:r===jf?Ow(x.query):x.query||{}},Z,{redirectedFrom:void 0,href:w})}function F(x){return typeof x=="string"?Mc(n,x,l.value.path):Re({},x)}function $(x,J){if(u!==x)return Os(8,{from:J,to:x})}function z(x){return A(x)}function te(x){return z(Re(F(x),{replace:!0}))}function oe(x){const J=x.matched[x.matched.length-1];if(J&&J.redirect){const{redirect:Q}=J;let Z=typeof Q=="function"?Q(x):Q;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=F(Z):{path:Z},Z.params={}),Re({query:x.query,hash:x.hash,params:Z.path!=null?{}:x.params},Z)}}function A(x,J){const Q=u=j(x),Z=l.value,Ce=x.state,T=x.force,w=x.replace===!0,S=oe(Q);if(S)return A(Re(F(S),{state:typeof S=="object"?Re({},Ce,S.state):Ce,force:T,replace:w}),J||Q);const L=Q;L.redirectedFrom=J;let U;return!T&&sw(r,Z,Q)&&(U=Os(16,{to:L,from:Z}),Dt(Z,Z,!0,!1)),(U?Promise.resolve(U):R(L,Z)).catch(V=>Cn(V)?Cn(V,2)?V:on(V):ye(V,L,Z)).then(V=>{if(V){if(Cn(V,2))return A(Re({replace:w},F(V.to),{state:typeof V.to=="object"?Re({},Ce,V.to.state):Ce,force:T}),J||L)}else V=I(L,Z,!0,w,Ce);return b(L,Z,V),V})}function v(x,J){const Q=$(x,J);return Q?Promise.reject(Q):Promise.resolve()}function y(x){const J=Qt.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(x):x()}function R(x,J){let Q;const[Z,Ce,T]=Hw(x,J);Q=Uc(Z.reverse(),"beforeRouteLeave",x,J);for(const S of Z)S.leaveGuards.forEach(L=>{Q.push(sr(L,x,J))});const w=v.bind(null,x,J);return Q.push(w),dt(Q).then(()=>{Q=[];for(const S of i.list())Q.push(sr(S,x,J));return Q.push(w),dt(Q)}).then(()=>{Q=Uc(Ce,"beforeRouteUpdate",x,J);for(const S of Ce)S.updateGuards.forEach(L=>{Q.push(sr(L,x,J))});return Q.push(w),dt(Q)}).then(()=>{Q=[];for(const S of T)if(S.beforeEnter)if(nn(S.beforeEnter))for(const L of S.beforeEnter)Q.push(sr(L,x,J));else Q.push(sr(S.beforeEnter,x,J));return Q.push(w),dt(Q)}).then(()=>(x.matched.forEach(S=>S.enterCallbacks={}),Q=Uc(T,"beforeRouteEnter",x,J,y),Q.push(w),dt(Q))).then(()=>{Q=[];for(const S of o.list())Q.push(sr(S,x,J));return Q.push(w),dt(Q)}).catch(S=>Cn(S,8)?S:Promise.reject(S))}function b(x,J,Q){c.list().forEach(Z=>y(()=>Z(x,J,Q)))}function I(x,J,Q,Z,Ce){const T=$(x,J);if(T)return T;const w=J===er,S=ds?history.state:{};Q&&(Z||w?s.replace(x.fullPath,Re({scroll:w&&S&&S.scroll},Ce)):s.push(x.fullPath,Ce)),l.value=x,Dt(x,J,Q,w),on()}let E;function Te(){E||(E=s.listen((x,J,Q)=>{if(!zn.listening)return;const Z=j(x),Ce=oe(Z);if(Ce){A(Re(Ce,{replace:!0,force:!0}),Z).catch(bi);return}u=Z;const T=l.value;ds&&fw(Df(T.fullPath,Q.delta),Ha()),R(Z,T).catch(w=>Cn(w,12)?w:Cn(w,2)?(A(Re(F(w.to),{force:!0}),Z).then(S=>{Cn(S,20)&&!Q.delta&&Q.type===$i.pop&&s.go(-1,!1)}).catch(bi),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ye(w,Z,T))).then(w=>{w=w||I(Z,T,!1),w&&(Q.delta&&!Cn(w,8)?s.go(-Q.delta,!1):Q.type===$i.pop&&Cn(w,20)&&s.go(-1,!1)),b(Z,T,w)}).catch(bi)}))}let qe=li(),Fe=li(),Ae;function ye(x,J,Q){on(x);const Z=Fe.list();return Z.length?Z.forEach(Ce=>Ce(x,J,Q)):console.error(x),Promise.reject(x)}function Ct(){return Ae&&l.value!==er?Promise.resolve():new Promise((x,J)=>{qe.add([x,J])})}function on(x){return Ae||(Ae=!x,Te(),qe.list().forEach(([J,Q])=>x?Q(x):J()),qe.reset()),x}function Dt(x,J,Q,Z){const{scrollBehavior:Ce}=t;if(!ds||!Ce)return Promise.resolve();const T=!Q&&dw(Df(x.fullPath,0))||(Z||!Q)&&history.state&&history.state.scroll||null;return Zp().then(()=>Ce(x,J,T)).then(w=>w&&hw(w)).catch(w=>ye(w,x,J))}const it=x=>s.go(x);let Rn;const Qt=new Set,zn={currentRoute:l,listening:!0,addRoute:_,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:D,resolve:j,options:t,push:z,replace:te,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Fe.add,isReady:Ct,install(x){const J=this;x.component("RouterLink",Mw),x.component("RouterView",jw),x.config.globalProperties.$router=J,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>ws(l)}),ds&&!Rn&&l.value===er&&(Rn=!0,z(s.location).catch(Ce=>{}));const Q={};for(const Ce in er)Object.defineProperty(Q,Ce,{get:()=>l.value[Ce],enumerable:!0});x.provide(qa,J),x.provide(ou,Gp(Q)),x.provide(dl,l);const Z=x.unmount;Qt.add(x),x.unmount=function(){Qt.delete(x),Qt.size<1&&(u=er,E&&E(),E=null,l.value=er,Rn=!1,Ae=!1),Z()}}};function dt(x){return x.reduce((J,Q)=>J.then(()=>y(Q)),Promise.resolve())}return zn}function Hw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Ds(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Ds(u,l))||s.push(l))}return[n,r,s]}function Xm(){return en(qa)}function qw(t){return en(ou)}const sn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Ww={name:"HeaderComponent",setup(){const t=qw(),e=qt(()=>t.path.startsWith("/dashbord")),n=ht(!1),r=ht("home"),s=()=>{const o=window.location.hash;o==="#about"?r.value="about":o==="#services"?r.value="services":o==="#projects"?r.value="projects":o==="#contact"?r.value="contact":r.value="home"},i=()=>{n.value=window.scrollY>50};return Bs(()=>{window.addEventListener("scroll",i),window.addEventListener("hashchange",s),s()}),Ua(()=>{window.removeEventListener("scroll",i),window.removeEventListener("hashchange",s)}),{isScrolled:n,isdashbordPage:e,activeSection:r}}},zw={class:"container"};function Kw(t,e,n,r,s,i){const o=Ns("router-link");return r.isdashbordPage?wn("",!0):(ve(),Ie("nav",{key:0,class:Zi(["menu ",{scrolled:r.isScrolled}])},[N("div",zw,[e[5]||(e[5]=N("div",{class:"logo"},"KS",-1)),N("ul",null,[Ne(o,{class:"custom-link",to:"/"},{default:Vn(()=>[...e[0]||(e[0]=[Pt("HOME",-1)])]),_:1}),N("li",null,[Ne(o,{class:"custom-link",to:{path:"/#about",hash:"#about"}},{default:Vn(()=>[...e[1]||(e[1]=[Pt("ABOUT ME",-1)])]),_:1})]),N("li",null,[Ne(o,{class:"custom-link",to:{path:"/#services",hash:"#services"}},{default:Vn(()=>[...e[2]||(e[2]=[Pt("SERVICES",-1)])]),_:1})]),N("li",null,[Ne(o,{class:"custom-link",to:{path:"/#projects",hash:"#projects"}},{default:Vn(()=>[...e[3]||(e[3]=[Pt("PROJECTS",-1)])]),_:1})]),N("li",null,[Ne(o,{class:"custom-link",to:{path:"/",hash:"#contact"}},{default:Vn(()=>[...e[4]||(e[4]=[Pt("CONTACT",-1)])]),_:1})])]),e[6]||(e[6]=N("a",{href:"#letstalk",class:"lets-talk-btn"},"LET'S TALK",-1))])],2))}const Gw=sn(Ww,[["render",Kw],["__scopeId","data-v-e31090a7"]]),Qw={__name:"App",setup(t){return(e,n)=>{const r=Ns("router-view");return ve(),Ie(nt,null,[Ne(Gw),Ne(r)],64)}}},Yw=()=>{};var Kf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Jw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},eg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),r.push(n[f],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Jw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new Xw;const m=i<<2|c>>4;if(r.push(m),u!==64){const _=c<<4&240|u>>2;if(r.push(_),p!==64){const C=u<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Xw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zw=function(t){const e=Zm(t);return eg.encodeByteArray(e,!0)},ca=function(t){return Zw(t).replace(/\./g,"")},tg=function(t){try{return eg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI=()=>eI().__FIREBASE_DEFAULTS__,nI=()=>{if(typeof process>"u"||typeof Kf>"u")return;const t=Kf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tg(t[1]);return e&&JSON.parse(e)},Wa=()=>{try{return Yw()||tI()||nI()||rI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ng=t=>Wa()?.emulatorHosts?.[t],rg=t=>{const e=ng(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},sg=()=>Wa()?.config,ig=t=>Wa()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function au(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ca(JSON.stringify(n)),ca(JSON.stringify(o)),""].join(".")}const Ri={};function iI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ri))Ri[e]?t.emulator.push(e):t.prod.push(e);return t}function oI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Gf=!1;function cu(t,e){if(typeof window>"u"||typeof document>"u"||!Sr(window.location.host)||Ri[t]===e||Ri[t]||Gf)return;Ri[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=iI().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Gf=!0,o()},m}function f(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=oI(r),_=n("text"),C=document.getElementById(_)||document.createElement("span"),D=n("learnmore"),O=document.getElementById(D)||document.createElement("a"),j=n("preprendIcon"),F=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const $=m.element;c($),f(O,D);const z=u();l(F,j),$.append(F,C,O,z),document.body.appendChild($)}i?(C.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function cI(){const t=Wa()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fI(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dI(){return!cI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pI(){try{return typeof indexedDB=="object"}catch{return!1}}function mI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI="FirebaseError";class An extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gI,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,no.prototype.create)}}class no{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?_I(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new An(s,c,r)}}function _I(t,e){return t.replace(yI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const yI=/\{\$([^}]+)}/g;function EI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Qf(i)&&Qf(o)){if(!Wr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Qf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function di(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vI(t,e){const n=new TI(t,e);return n.subscribe.bind(n)}class TI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Fc),s.error===void 0&&(s.error=Fc),s.complete===void 0&&(s.complete=Fc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t){return t&&t._delegate?t._delegate:t}class Er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AI(e))try{this.getOrInitializeService({instanceIdentifier:Br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Br){return this.instances.has(e)}getOptions(e=Br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Br){return this.component?this.component.multipleInstances?e:Br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bI(t){return t===Br?void 0:t}function AI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new II(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const SI={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},PI=me.INFO,CI={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},kI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=CI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lu{constructor(e){this.name=e,this._logLevel=PI,this._logHandler=kI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?SI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const NI=(t,e)=>e.some(n=>t instanceof n);let Yf,Jf;function DI(){return Yf||(Yf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OI(){return Jf||(Jf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ag=new WeakMap,pl=new WeakMap,cg=new WeakMap,Bc=new WeakMap,uu=new WeakMap;function VI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(fr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ag.set(n,t)}).catch(()=>{}),uu.set(e,t),e}function xI(t){if(pl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});pl.set(t,e)}let ml={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function LI(t){ml=t(ml)}function MI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jc(this),e,...n);return cg.set(r,e.sort?e.sort():[e]),fr(r)}:OI().includes(t)?function(...e){return t.apply(jc(this),e),fr(ag.get(this))}:function(...e){return fr(t.apply(jc(this),e))}}function UI(t){return typeof t=="function"?MI(t):(t instanceof IDBTransaction&&xI(t),NI(t,DI())?new Proxy(t,ml):t)}function fr(t){if(t instanceof IDBRequest)return VI(t);if(Bc.has(t))return Bc.get(t);const e=UI(t);return e!==t&&(Bc.set(t,e),uu.set(e,t)),e}const jc=t=>uu.get(t);function FI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=fr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(fr(o.result),l.oldVersion,l.newVersion,fr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const BI=["get","getKey","getAll","getAllKeys","count"],jI=["put","add","delete","clear"],$c=new Map;function Xf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($c.get(e))return $c.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=jI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||BI.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return $c.set(e,i),i}LI(t=>({...t,get:(e,n,r)=>Xf(e,n)||t.get(e,n,r),has:(e,n)=>!!Xf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HI(t){return t.getComponent()?.type==="VERSION"}const gl="@firebase/app",Zf="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new lu("@firebase/app"),qI="@firebase/app-compat",WI="@firebase/analytics-compat",zI="@firebase/analytics",KI="@firebase/app-check-compat",GI="@firebase/app-check",QI="@firebase/auth",YI="@firebase/auth-compat",JI="@firebase/database",XI="@firebase/data-connect",ZI="@firebase/database-compat",eb="@firebase/functions",tb="@firebase/functions-compat",nb="@firebase/installations",rb="@firebase/installations-compat",sb="@firebase/messaging",ib="@firebase/messaging-compat",ob="@firebase/performance",ab="@firebase/performance-compat",cb="@firebase/remote-config",lb="@firebase/remote-config-compat",ub="@firebase/storage",hb="@firebase/storage-compat",fb="@firebase/firestore",db="@firebase/ai",pb="@firebase/firestore-compat",mb="firebase",gb="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="[DEFAULT]",_b={[gl]:"fire-core",[qI]:"fire-core-compat",[zI]:"fire-analytics",[WI]:"fire-analytics-compat",[GI]:"fire-app-check",[KI]:"fire-app-check-compat",[QI]:"fire-auth",[YI]:"fire-auth-compat",[JI]:"fire-rtdb",[XI]:"fire-data-connect",[ZI]:"fire-rtdb-compat",[eb]:"fire-fn",[tb]:"fire-fn-compat",[nb]:"fire-iid",[rb]:"fire-iid-compat",[sb]:"fire-fcm",[ib]:"fire-fcm-compat",[ob]:"fire-perf",[ab]:"fire-perf-compat",[cb]:"fire-rc",[lb]:"fire-rc-compat",[ub]:"fire-gcs",[hb]:"fire-gcs-compat",[fb]:"fire-fst",[pb]:"fire-fst-compat",[db]:"fire-vertex","fire-js":"fire-js",[mb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=new Map,yb=new Map,yl=new Map;function ed(t,e){try{t.container.addComponent(e)}catch(n){jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zr(t){const e=t.name;if(yl.has(e))return jn.debug(`There were multiple attempts to register component ${e}.`),!1;yl.set(e,t);for(const n of la.values())ed(n,t);for(const n of yb.values())ed(n,t);return!0}function za(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Mt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dr=new no("app","Firebase",Eb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=gb;function lg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:_l,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw dr.create("bad-app-name",{appName:String(s)});if(n||(n=sg()),!n)throw dr.create("no-options");const i=la.get(s);if(i){if(Wr(n,i.options)&&Wr(r,i.config))return i;throw dr.create("duplicate-app",{appName:s})}const o=new RI(s);for(const l of yl.values())o.addComponent(l);const c=new vb(n,r,o);return la.set(s,c),c}function Kr(t=_l){const e=la.get(t);if(!e&&t===_l&&sg())return lg();if(!e)throw dr.create("no-app",{appName:t});return e}function mn(t,e,n){let r=_b[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jn.warn(o.join(" "));return}zr(new Er(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb="firebase-heartbeat-database",wb=1,Hi="firebase-heartbeat-store";let Hc=null;function ug(){return Hc||(Hc=FI(Tb,wb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hi)}catch(n){console.warn(n)}}}}).catch(t=>{throw dr.create("idb-open",{originalErrorMessage:t.message})})),Hc}async function Ib(t){try{const n=(await ug()).transaction(Hi),r=await n.objectStore(Hi).get(hg(t));return await n.done,r}catch(e){if(e instanceof An)jn.warn(e.message);else{const n=dr.create("idb-get",{originalErrorMessage:e?.message});jn.warn(n.message)}}}async function td(t,e){try{const r=(await ug()).transaction(Hi,"readwrite");await r.objectStore(Hi).put(e,hg(t)),await r.done}catch(n){if(n instanceof An)jn.warn(n.message);else{const r=dr.create("idb-set",{originalErrorMessage:n?.message});jn.warn(r.message)}}}function hg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=1024,Ab=30;class Rb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=nd();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>Ab){const s=Cb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){jn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nd(),{heartbeatsToSend:n,unsentEntries:r}=Sb(this._heartbeatsCache.heartbeats),s=ca(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return jn.warn(e),""}}}function nd(){return new Date().toISOString().substring(0,10)}function Sb(t,e=bb){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),rd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),rd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pI()?mI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ib(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return td(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return td(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function rd(t){return ca(JSON.stringify({version:2,heartbeats:t})).length}function Cb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(t){zr(new Er("platform-logger",e=>new $I(e),"PRIVATE")),zr(new Er("heartbeat",e=>new Rb(e),"PRIVATE")),mn(gl,Zf,t),mn(gl,Zf,"esm2020"),mn("fire-js","")}kb("");function fg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Nb=fg,dg=new no("auth","Firebase",fg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=new lu("@firebase/auth");function Db(t,...e){ua.logLevel<=me.WARN&&ua.warn(`Auth (${es}): ${t}`,...e)}function Ho(t,...e){ua.logLevel<=me.ERROR&&ua.error(`Auth (${es}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t,...e){throw hu(t,...e)}function gn(t,...e){return hu(t,...e)}function pg(t,e,n){const r={...Nb(),[e]:n};return new no("auth","Firebase",r).create(e,{appName:t.name})}function Mn(t){return pg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dg.create(t,...e)}function ae(t,e,...n){if(!t)throw hu(e,...n)}function xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ho(e),new Error(e)}function $n(t,e){t||xn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(){return typeof self<"u"&&self.location?.href||""}function Ob(){return sd()==="http:"||sd()==="https:"}function sd(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ob()||uI()||"connection"in navigator)?navigator.onLine:!0}function xb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n){this.shortDelay=e,this.longDelay=n,$n(n>e,"Short delay should be less than long delay!"),this.isMobile=aI()||hI()}get(){return Vb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(t,e){$n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ub=new so(3e4,6e4);function Pr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Cr(t,e,n,r,s={}){return gg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=ro({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return lI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Sr(t.emulatorConfig.host)&&(u.credentials="include"),mg.fetch()(await _g(t,t.config.apiHost,n,c),u)})}async function gg(t,e,n){t._canInitEmulator=!1;const r={...Lb,...e};try{const s=new Bb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Po(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Po(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Po(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Po(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw pg(t,f,u);rn(t,f)}}catch(s){if(s instanceof An)throw s;rn(t,"network-request-failed",{message:String(s)})}}async function io(t,e,n,r,s={}){const i=await Cr(t,e,n,r,s);return"mfaPendingCredential"in i&&rn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function _g(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?fu(t.config,s):`${t.config.apiScheme}://${s}`;return Mb.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Fb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Bb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gn(this.auth,"network-request-failed")),Ub.get())})}}function Po(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=gn(t,e,r);return s.customData._tokenResponse=n,s}function id(t){return t!==void 0&&t.enterprise!==void 0}class jb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Fb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function $b(t,e){return Cr(t,"GET","/v2/recaptchaConfig",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hb(t,e){return Cr(t,"POST","/v1/accounts:delete",e)}async function ha(t,e){return Cr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qb(t,e=!1){const n=st(t),r=await n.getIdToken(e),s=du(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Si(qc(s.auth_time)),issuedAtTime:Si(qc(s.iat)),expirationTime:Si(qc(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function qc(t){return Number(t)*1e3}function du(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ho("JWT malformed, contained fewer than 3 sections"),null;try{const s=tg(n);return s?JSON.parse(s):(Ho("Failed to decode base64 JWT payload"),null)}catch(s){return Ho("Caught error parsing JWT payload as JSON",s?.toString()),null}}function od(t){const e=du(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof An&&Wb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Wb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Si(this.lastLoginAt),this.creationTime=Si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fa(t){const e=t.auth,n=await t.getIdToken(),r=await qi(t,ha(e,{idToken:n}));ae(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?yg(s.providerUserInfo):[],o=Gb(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new vl(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function Kb(t){const e=st(t);await fa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function yg(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qb(t,e){const n=await gg(t,{},async()=>{const r=ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await _g(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Sr(t.emulatorConfig.host)&&(l.credentials="include"),mg.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Yb(t,e){return Cr(t,"POST","/v2/accounts:revokeToken",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):od(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=od(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Qb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new As;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new As,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new zb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await qi(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qb(this,e)}reload(){return Kb(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mt(this.auth.app))return Promise.reject(Mn(this.auth));const e=await this.getIdToken();return await qi(this,Hb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:_,providerData:C,stsTokenManager:D}=n;ae(p&&D,e,"internal-error");const O=As.fromJSON(this.name,D);ae(typeof p=="string",e,"internal-error"),tr(r,e.name),tr(s,e.name),ae(typeof m=="boolean",e,"internal-error"),ae(typeof _=="boolean",e,"internal-error"),tr(i,e.name),tr(o,e.name),tr(c,e.name),tr(l,e.name),tr(u,e.name),tr(f,e.name);const j=new Jt({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:O,createdAt:u,lastLoginAt:f});return C&&Array.isArray(C)&&(j.providerData=C.map(F=>({...F}))),l&&(j._redirectEventId=l),j}static async _fromIdTokenResponse(e,n,r=!1){const s=new As;s.updateFromServerResponse(n);const i=new Jt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await fa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?yg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new As;c.updateFromIdToken(r);const l=new Jt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new vl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad=new Map;function Ln(t){$n(t instanceof Function,"Expected a class definition");let e=ad.get(t);return e?($n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ad.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Eg.type="NONE";const cd=Eg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t,e,n){return`firebase:${t}:${e}:${n}`}class Rs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=qo(this.userKey,s.apiKey,i),this.fullPersistenceKey=qo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ha(this.auth,{idToken:e}).catch(()=>{});return n?Jt._fromGetAccountInfoResponse(this.auth,n,e):null}return Jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Rs(Ln(cd),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Ln(cd);const o=qo(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await ha(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Jt._fromGetAccountInfoResponse(e,m,f)}else p=Jt._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Rs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Rs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ig(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ag(e))return"Blackberry";if(Rg(e))return"Webos";if(Tg(e))return"Safari";if((e.includes("chrome/")||wg(e))&&!e.includes("edge/"))return"Chrome";if(bg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function vg(t=wt()){return/firefox\//i.test(t)}function Tg(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wg(t=wt()){return/crios\//i.test(t)}function Ig(t=wt()){return/iemobile/i.test(t)}function bg(t=wt()){return/android/i.test(t)}function Ag(t=wt()){return/blackberry/i.test(t)}function Rg(t=wt()){return/webos/i.test(t)}function pu(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Jb(t=wt()){return pu(t)&&!!window.navigator?.standalone}function Xb(){return fI()&&document.documentMode===10}function Sg(t=wt()){return pu(t)||bg(t)||Rg(t)||Ag(t)||/windows phone/i.test(t)||Ig(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t,e=[]){let n;switch(t){case"Browser":n=ld(wt());break;case"Worker":n=`${ld(wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${es}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(t,e={}){return Cr(t,"GET","/v2/passwordPolicy",Pr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=6;class nA{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??tA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ud(this),this.idTokenSubscription=new ud(this),this.beforeStateQueue=new Zb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ln(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Rs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ha(this,{idToken:e}),r=await Jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Mt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fa(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mt(this.app))return Promise.reject(Mn(this));const n=e?st(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mt(this.app)?Promise.reject(Mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mt(this.app)?Promise.reject(Mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eA(this),n=new nA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new no("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Yb(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ln(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await Rs.create(this,[Ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Db(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ts(t){return st(t)}class ud{constructor(e){this.auth=e,this.observer=null,this.addObserver=vI(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ka={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sA(t){Ka=t}function Cg(t){return Ka.loadJS(t)}function iA(){return Ka.recaptchaEnterpriseScript}function oA(){return Ka.gapiScript}function aA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class cA{constructor(){this.enterprise=new lA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class lA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const uA="recaptcha-enterprise",kg="NO_RECAPTCHA";class hA{constructor(e){this.type=uA,this.auth=ts(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{$b(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new jb(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;id(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(kg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new cA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&id(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=iA();l.length!==0&&(l+=c),Cg(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function hd(t,e,n,r=!1,s=!1){const i=new hA(t);let o;if(s)o=kg;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Tl(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await hd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await hd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(t,e){const n=za(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Wr(i,e??{}))return s;rn(s,"already-initialized")}return n.initialize({options:e})}function dA(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Ln);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function pA(t,e,n){const r=ts(t);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ng(e),{host:o,port:c}=mA(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(Wr(u,r.config.emulator)&&Wr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Sr(o)?(au(`${i}//${o}${l}`),cu("Auth",!0)):gA()}function Ng(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mA(t){const e=Ng(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:fd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:fd(o)}}}function fd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xn("not implemented")}_getIdTokenResponse(e){return xn("not implemented")}_linkToIdToken(e,n){return xn("not implemented")}_getReauthenticationResolver(e){return xn("not implemented")}}async function _A(t,e){return Cr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(t,e){return io(t,"POST","/v1/accounts:signInWithPassword",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EA(t,e){return io(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}async function vA(t,e){return io(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends mu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Wi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tl(e,n,"signInWithPassword",yA);case"emailLink":return EA(e,{email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tl(e,r,"signUpPassword",_A);case"emailLink":return vA(e,{idToken:n,email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(t,e){return io(t,"POST","/v1/accounts:signInWithIdp",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA="http://localhost";class Gr extends mu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Gr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ss(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ss(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ss(e,n)}buildRequest(){const e={requestUri:TA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ro(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function IA(t){const e=fi(di(t)).link,n=e?fi(di(e)).deep_link_id:null,r=fi(di(t)).deep_link_id;return(r?fi(di(r)).link:null)||r||n||e||t}class gu{constructor(e){const n=fi(di(e)),r=n.apiKey??null,s=n.oobCode??null,i=wA(n.mode??null);ae(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=IA(e);try{return new gu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.providerId=js.PROVIDER_ID}static credential(e,n){return Wi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gu.parseLink(n);return ae(r,"argument-error"),Wi._fromEmailAndCode(e,r.code,r.tenantId)}}js.PROVIDER_ID="password";js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo extends Dg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends oo{constructor(){super("facebook.com")}static credential(e){return Gr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";ir.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends oo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return or.credential(n,r)}catch{return null}}}or.GOOGLE_SIGN_IN_METHOD="google.com";or.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends oo{constructor(){super("github.com")}static credential(e){return Gr._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends oo{constructor(){super("twitter.com")}static credential(e,n){return Gr._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.TWITTER_SIGN_IN_METHOD="twitter.com";cr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bA(t,e){return io(t,"POST","/v1/accounts:signUp",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Jt._fromIdTokenResponse(e,r,s),o=dd(r);return new Qr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=dd(r);return new Qr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function dd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da extends An{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,da.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new da(e,n,r,s)}}function Og(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?da._fromErrorAndOperation(t,i,e,r):i})}async function AA(t,e,n=!1){const r=await qi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RA(t,e,n=!1){const{auth:r}=t;if(Mt(r.app))return Promise.reject(Mn(r));const s="reauthenticate";try{const i=await qi(t,Og(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=du(i.idToken);ae(o,r,"internal-error");const{sub:c}=o;return ae(t.uid===c,r,"user-mismatch"),Qr._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&rn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vg(t,e,n=!1){if(Mt(t.app))return Promise.reject(Mn(t));const r="signIn",s=await Og(t,r,e),i=await Qr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function SA(t,e){return Vg(ts(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xg(t){const e=ts(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function PA(t,e,n){if(Mt(t.app))return Promise.reject(Mn(t));const r=ts(t),o=await Tl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",bA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&xg(t),l}),c=await Qr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function CA(t,e,n){return Mt(t.app)?Promise.reject(Mn(t)):SA(st(t),js.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&xg(t),r})}function kA(t,e,n,r){return st(t).onIdTokenChanged(e,n,r)}function NA(t,e,n){return st(t).beforeAuthStateChanged(e,n)}function _u(t,e,n,r){return st(t).onAuthStateChanged(e,n,r)}function DA(t){return st(t).signOut()}const pa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pa,"1"),this.storage.removeItem(pa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=1e3,VA=10;class Mg extends Lg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Xb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,VA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},OA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mg.type="LOCAL";const xA=Mg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug extends Lg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ug.type="SESSION";const Fg=Ug;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ga(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await LA(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ga.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=yu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return window}function UA(t){_n().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function FA(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function BA(){return navigator?.serviceWorker?.controller||null}function jA(){return Bg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg="firebaseLocalStorageDb",$A=1,ma="firebaseLocalStorage",$g="fbase_key";class ao{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qa(t,e){return t.transaction([ma],e?"readwrite":"readonly").objectStore(ma)}function HA(){const t=indexedDB.deleteDatabase(jg);return new ao(t).toPromise()}function wl(){const t=indexedDB.open(jg,$A);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ma,{keyPath:$g})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ma)?e(r):(r.close(),await HA(),e(await wl()))})})}async function pd(t,e,n){const r=Qa(t,!0).put({[$g]:e,value:n});return new ao(r).toPromise()}async function qA(t,e){const n=Qa(t,!1).get(e),r=await new ao(n).toPromise();return r===void 0?null:r.value}function md(t,e){const n=Qa(t,!0).delete(e);return new ao(n).toPromise()}const WA=800,zA=3;class Hg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ga._getInstance(jA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await FA(),!this.activeServiceWorker)return;this.sender=new MA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||BA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wl();return await pd(e,pa,"1"),await md(e,pa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>qA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>md(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Qa(s,!1).getAll();return new ao(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hg.type="LOCAL";const KA=Hg;new so(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(t,e){return e?Ln(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu extends mu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ss(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ss(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ss(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function QA(t){return Vg(t.auth,new Eu(t),t.bypassAuthState)}function YA(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),RA(n,new Eu(t),t.bypassAuthState)}async function JA(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),AA(n,new Eu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QA;case"linkViaPopup":case"linkViaRedirect":return JA;case"reauthViaPopup":case"reauthViaRedirect":return YA;default:rn(this.auth,"internal-error")}}resolve(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=new so(2e3,1e4);class ys extends qg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ys.currentPopupAction&&ys.currentPopupAction.cancel(),ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){$n(this.filter.length===1,"Popup operations only handle one event");const e=yu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,XA.get())};e()}}ys.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA="pendingRedirect",Wo=new Map;class eR extends qg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wo.get(this.auth._key());if(!e){try{const r=await tR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wo.set(this.auth._key(),e)}return this.bypassAuthState||Wo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tR(t,e){const n=sR(e),r=rR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function nR(t,e){Wo.set(t._key(),e)}function rR(t){return Ln(t._redirectPersistence)}function sR(t){return qo(ZA,t.config.apiKey,t.name)}async function iR(t,e,n=!1){if(Mt(t.app))return Promise.reject(Mn(t));const r=ts(t),s=GA(r,e),o=await new eR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=600*1e3;class aR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Wg(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(gn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oR&&this.cachedEventUids.clear(),this.cachedEventUids.has(gd(e))}saveEventToCache(e){this.cachedEventUids.add(gd(e)),this.lastProcessedEventTime=Date.now()}}function gd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wg({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function cR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lR(t,e={}){return Cr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hR=/^https?/;async function fR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lR(t);for(const n of e)try{if(dR(n))return}catch{}rn(t,"unauthorized-domain")}function dR(t){const e=El(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hR.test(n))return!1;if(uR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=new so(3e4,6e4);function _d(){const t=_n().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mR(t){return new Promise((e,n)=>{function r(){_d(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_d(),n(gn(t,"network-request-failed"))},timeout:pR.get()})}if(_n().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(_n().gapi?.load)r();else{const s=aA("iframefcb");return _n()[s]=()=>{gapi.load?r():n(gn(t,"network-request-failed"))},Cg(`${oA()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw zo=null,e})}let zo=null;function gR(t){return zo=zo||mR(t),zo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=new so(5e3,15e3),yR="__/auth/iframe",ER="emulator/auth/iframe",vR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wR(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fu(e,ER):`https://${t.config.authDomain}/${yR}`,r={apiKey:e.apiKey,appName:t.name,v:es},s=TR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ro(r).slice(1)}`}async function IR(t){const e=await gR(t),n=_n().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:wR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=gn(t,"network-request-failed"),c=_n().setTimeout(()=>{i(o)},_R.get());function l(){_n().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AR=500,RR=600,SR="_blank",PR="http://localhost";class yd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CR(t,e,n,r=AR,s=RR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...bR,width:r.toString(),height:s.toString(),top:i,left:o},u=wt().toLowerCase();n&&(c=wg(u)?SR:n),vg(u)&&(e=e||PR,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[_,C])=>`${m}${_}=${C},`,"");if(Jb(u)&&c!=="_self")return kR(e||"",c),new yd(null);const p=window.open(e||"",c,f);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new yd(p)}function kR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR="__/auth/handler",DR="emulator/auth/handler",OR=encodeURIComponent("fac");async function Ed(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:es,eventId:s};if(e instanceof Dg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",EI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof oo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${OR}=${encodeURIComponent(l)}`:"";return`${VR(t)}?${ro(c).slice(1)}${u}`}function VR({config:t}){return t.emulator?fu(t,DR):`https://${t.authDomain}/${NR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="webStorageSupport";class xR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fg,this._completeRedirectFn=iR,this._overrideRedirectResult=nR}async _openPopup(e,n,r,s){$n(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Ed(e,n,r,El(),s);return CR(e,i,yu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ed(e,n,r,El(),s);return UA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):($n(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await IR(e),r=new aR(e);return n.register("authEvent",s=>(ae(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wc,{type:Wc},s=>{const i=s?.[0]?.[Wc];i!==void 0&&n(!!i),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sg()||Tg()||pu()}}const LR=xR;var vd="@firebase/auth",Td="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function FR(t){zr(new Er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pg(t)},u=new rA(r,s,i,l);return dA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zr(new Er("auth-internal",e=>{const n=ts(e.getProvider("auth").getImmediate());return(r=>new MR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mn(vd,Td,UR(t)),mn(vd,Td,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR=300,jR=ig("authIdTokenMaxAge")||BR;let wd=null;const $R=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jR)return;const s=n?.token;wd!==s&&(wd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function vu(t=Kr()){const e=za(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fA(t,{popupRedirectResolver:LR,persistence:[KA,xA,Fg]}),r=ig("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=$R(i.toString());NA(n,o,()=>o(n.currentUser)),kA(n,c=>o(c))}}const s=ng("auth");return s&&pA(n,`http://${s}`),n}function HR(){return document.getElementsByTagName("head")?.[0]??document}sA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=gn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",HR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});FR("Browser");const qR="/digitalagency/assets/logo-Nd5STkHf.png",WR={class:"banner-section container"},zR={__name:"Banner",setup(t){return(e,n)=>(ve(),Ie("section",WR,[...n[0]||(n[0]=[nu('<div class="row align-items-center"><div class="col-lg-6"><h1 class="fw-bold display-6 text-white mb-2">HEY! WE&#39;RE WEB DEVELOPERS</h1><h2 class="fw-bold display-5" style="color:#2196f3;font-size:26px;">BUILDING DIGITAL SOLUTIONS</h2><p class="text-light mt-4 fs-5" style="max-width:500px;"> With a combined experience of 14 years in web development,<br> we specialize in crafting modern, effective websites and web applications.<br> From WordPress to Vue.js, Angular, .NET, Drupal, and PrestaShop, deliver results that help freelancers and businesses grow.<br> Let us turn your ideas into reality with creative and reliable web solutions. </p></div><div class="col-lg-6 banner-pic position-relative"><img src="'+qR+'" alt="Profile" class="rounded-circle img-fluid banner-image"></div></div>',1)])]))}},KR="/digitalagency/assets/3-C5Bmx5Ee.png",GR={name:"WhatWeOffer",data(){return{services:[{title:"Web Development",points:["Vue.js, Angular, .NET, WordPress, Drupal, PrestaShop","Custom Web Applications","E-commerce Solutions"],icon:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5C5AFF" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="feather feather-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>'},{title:"Website Design",points:["Modern UI/UX Design","Responsive & Mobile-Friendly","Custom Branding"],icon:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5C5AFF" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="feather feather-paint-brush"><path d="M2.5 19.5l5-5a4.5 4.5 0 016.36 0l3.78 3.78a3 3 0 010 4.24l-3.78 3.78a4.5 4.5 0 01-6.36 0l-5-5z"/></svg>'},{title:"Maintenance & Support",points:["Fast Issue Resolution","Updates & Security Improvements","Technical Consulting"],icon:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5C5AFF" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>'}]}}},QR={class:"about-section",id:"about"};function YR(t,e,n,r,s,i){return ve(),Ie("section",QR,[...e[0]||(e[0]=[nu('<div class="container"><div class="row align-items-center"><div class="col-md-5 text-center position-relative"><img src="'+KR+'" alt="About Us" class="about-photo rounded-3 shadow"><div class="about-circle decor-circle"></div></div><div class="col-md-7"><span class="badge rounded-pill bg-primary px-3 py-2 mb-3">ABOUT US</span><h2 class="fw-bold text-white mb-3">WE ARE AVAILABLE FOR <span class="accent-blue">UI UX DESIGN</span> PROJECTS</h2><p class="text-light mb-4"> With 14 years of combined experience, we specialize in building custom web solutions for businesses and entrepreneurs. From WordPress to Vue.js, Angular, .NET, Drupal, and PrestaShop, we deliver websites and applications that help our clients succeed online. </p><div class="row mb-4"><div class="col-4"><div class="about-feature bg-dark rounded-3 p-3 text-center text-white"><div class="fs-4 fw-bold">100+</div><div class="fs-6">Projects Delivered</div></div></div><div class="col-4"><div class="about-feature bg-dark rounded-3 p-3 text-center text-white"><div class="fs-4 fw-bold">7+</div><div class="fs-6">Years Experience</div></div></div><div class="col-4"><div class="about-feature bg-dark rounded-3 p-3 text-center text-white"><div class="fs-4 fw-bold">49+</div><div class="fs-6">Custom Integrations</div></div></div></div><a href="#contact" class="btn btn-primary rounded-pill px-4 py-2">GET IN TOUCH</a></div></div></div>',1)])])}const zg=sn(GR,[["render",YR]]),JR={name:"WhatWeOffer",data(){return{services:[{image:new URL("/digitalagency/assets/service1-DSv3OfLQ.jpg",import.meta.url).href,title:"Web Development",points:["Vue.js, Angular, .NET, WordPress, Drupal, PrestaShop","Custom Web Applications","E-commerce Solutions"],icon:"bi bi-code-slash"},{title:"Website Design",points:["Modern UI/UX Design","Responsive & Mobile-Friendly","Custom Branding"],icon:"bi bi-pencil-square "},{title:"Maintenance & Support",points:["Fast Issue Resolution","Updates & Security Improvements","Technical Consulting"],icon:"bi bi-speedometer2 "}],servicess:[{title:"Website Designs",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",image:new URL("/digitalagency/assets/service1-DSv3OfLQ.jpg",import.meta.url).href,icon:"bi bi-pencil-square"},{title:"Website Design",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",image:new URL("/digitalagency/assets/service1-DSv3OfLQ.jpg",import.meta.url).href,icon:"bi bi-code-slash"},{title:"SEO Marketing",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",image:new URL("/digitalagency/assets/service1-DSv3OfLQ.jpg",import.meta.url).href,icon:"bi bi-speedometer2"},{title:"Graphic Design",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",image:new URL("/digitalagency/assets/service1-DSv3OfLQ.jpg",import.meta.url).href,icon:"bi bi-palette"}]}}},XR={class:"what-we-offer",id:"services"},ZR={class:"container"},eS={class:"cards-container"},tS={class:"card-body"},nS={class:"icon-badge mb-3"},rS={class:"card-title"},sS={class:"card-list"};function iS(t,e,n,r,s,i){return ve(),Ie("section",XR,[N("div",ZR,[e[1]||(e[1]=N("span",{class:"badge bg-primary px-3 py-2 mb-2"},"SERVICES",-1)),e[2]||(e[2]=N("h2",{class:"section-title mb-5"},[Pt(" WHAT WE "),N("span",{class:"text-primary"},"OFFER")],-1)),N("div",eS,[(ve(!0),Ie(nt,null,Mi(s.services,(o,c)=>(ve(),Ie("div",{class:"card",key:c},[N("div",tS,[N("div",nS,[N("i",{class:Zi(o.icon)},null,2)]),N("h3",rS,tt(o.title),1),N("ul",sS,[(ve(!0),Ie(nt,null,Mi(o.points,(l,u)=>(ve(),Ie("li",{key:u,class:"card-list-item"}," → "+tt(l),1))),128))]),e[0]||(e[0]=N("a",{href:"#",class:"read-more"},"Read More →",-1))])]))),128))])])])}const Kg=sn(JR,[["render",iS],["__scopeId","data-v-dad4f140"]]);var Id=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pr,Gg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,v){function y(){}y.prototype=v.prototype,A.F=v.prototype,A.prototype=new y,A.prototype.constructor=A,A.D=function(R,b,I){for(var E=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)E[Te-2]=arguments[Te];return v.prototype[b].apply(R,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,v,y){y||(y=0);const R=Array(16);if(typeof v=="string")for(var b=0;b<16;++b)R[b]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(b=0;b<16;++b)R[b]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=A.g[0],y=A.g[1],b=A.g[2];let I=A.g[3],E;E=v+(I^y&(b^I))+R[0]+3614090360&4294967295,v=y+(E<<7&4294967295|E>>>25),E=I+(b^v&(y^b))+R[1]+3905402710&4294967295,I=v+(E<<12&4294967295|E>>>20),E=b+(y^I&(v^y))+R[2]+606105819&4294967295,b=I+(E<<17&4294967295|E>>>15),E=y+(v^b&(I^v))+R[3]+3250441966&4294967295,y=b+(E<<22&4294967295|E>>>10),E=v+(I^y&(b^I))+R[4]+4118548399&4294967295,v=y+(E<<7&4294967295|E>>>25),E=I+(b^v&(y^b))+R[5]+1200080426&4294967295,I=v+(E<<12&4294967295|E>>>20),E=b+(y^I&(v^y))+R[6]+2821735955&4294967295,b=I+(E<<17&4294967295|E>>>15),E=y+(v^b&(I^v))+R[7]+4249261313&4294967295,y=b+(E<<22&4294967295|E>>>10),E=v+(I^y&(b^I))+R[8]+1770035416&4294967295,v=y+(E<<7&4294967295|E>>>25),E=I+(b^v&(y^b))+R[9]+2336552879&4294967295,I=v+(E<<12&4294967295|E>>>20),E=b+(y^I&(v^y))+R[10]+4294925233&4294967295,b=I+(E<<17&4294967295|E>>>15),E=y+(v^b&(I^v))+R[11]+2304563134&4294967295,y=b+(E<<22&4294967295|E>>>10),E=v+(I^y&(b^I))+R[12]+1804603682&4294967295,v=y+(E<<7&4294967295|E>>>25),E=I+(b^v&(y^b))+R[13]+4254626195&4294967295,I=v+(E<<12&4294967295|E>>>20),E=b+(y^I&(v^y))+R[14]+2792965006&4294967295,b=I+(E<<17&4294967295|E>>>15),E=y+(v^b&(I^v))+R[15]+1236535329&4294967295,y=b+(E<<22&4294967295|E>>>10),E=v+(b^I&(y^b))+R[1]+4129170786&4294967295,v=y+(E<<5&4294967295|E>>>27),E=I+(y^b&(v^y))+R[6]+3225465664&4294967295,I=v+(E<<9&4294967295|E>>>23),E=b+(v^y&(I^v))+R[11]+643717713&4294967295,b=I+(E<<14&4294967295|E>>>18),E=y+(I^v&(b^I))+R[0]+3921069994&4294967295,y=b+(E<<20&4294967295|E>>>12),E=v+(b^I&(y^b))+R[5]+3593408605&4294967295,v=y+(E<<5&4294967295|E>>>27),E=I+(y^b&(v^y))+R[10]+38016083&4294967295,I=v+(E<<9&4294967295|E>>>23),E=b+(v^y&(I^v))+R[15]+3634488961&4294967295,b=I+(E<<14&4294967295|E>>>18),E=y+(I^v&(b^I))+R[4]+3889429448&4294967295,y=b+(E<<20&4294967295|E>>>12),E=v+(b^I&(y^b))+R[9]+568446438&4294967295,v=y+(E<<5&4294967295|E>>>27),E=I+(y^b&(v^y))+R[14]+3275163606&4294967295,I=v+(E<<9&4294967295|E>>>23),E=b+(v^y&(I^v))+R[3]+4107603335&4294967295,b=I+(E<<14&4294967295|E>>>18),E=y+(I^v&(b^I))+R[8]+1163531501&4294967295,y=b+(E<<20&4294967295|E>>>12),E=v+(b^I&(y^b))+R[13]+2850285829&4294967295,v=y+(E<<5&4294967295|E>>>27),E=I+(y^b&(v^y))+R[2]+4243563512&4294967295,I=v+(E<<9&4294967295|E>>>23),E=b+(v^y&(I^v))+R[7]+1735328473&4294967295,b=I+(E<<14&4294967295|E>>>18),E=y+(I^v&(b^I))+R[12]+2368359562&4294967295,y=b+(E<<20&4294967295|E>>>12),E=v+(y^b^I)+R[5]+4294588738&4294967295,v=y+(E<<4&4294967295|E>>>28),E=I+(v^y^b)+R[8]+2272392833&4294967295,I=v+(E<<11&4294967295|E>>>21),E=b+(I^v^y)+R[11]+1839030562&4294967295,b=I+(E<<16&4294967295|E>>>16),E=y+(b^I^v)+R[14]+4259657740&4294967295,y=b+(E<<23&4294967295|E>>>9),E=v+(y^b^I)+R[1]+2763975236&4294967295,v=y+(E<<4&4294967295|E>>>28),E=I+(v^y^b)+R[4]+1272893353&4294967295,I=v+(E<<11&4294967295|E>>>21),E=b+(I^v^y)+R[7]+4139469664&4294967295,b=I+(E<<16&4294967295|E>>>16),E=y+(b^I^v)+R[10]+3200236656&4294967295,y=b+(E<<23&4294967295|E>>>9),E=v+(y^b^I)+R[13]+681279174&4294967295,v=y+(E<<4&4294967295|E>>>28),E=I+(v^y^b)+R[0]+3936430074&4294967295,I=v+(E<<11&4294967295|E>>>21),E=b+(I^v^y)+R[3]+3572445317&4294967295,b=I+(E<<16&4294967295|E>>>16),E=y+(b^I^v)+R[6]+76029189&4294967295,y=b+(E<<23&4294967295|E>>>9),E=v+(y^b^I)+R[9]+3654602809&4294967295,v=y+(E<<4&4294967295|E>>>28),E=I+(v^y^b)+R[12]+3873151461&4294967295,I=v+(E<<11&4294967295|E>>>21),E=b+(I^v^y)+R[15]+530742520&4294967295,b=I+(E<<16&4294967295|E>>>16),E=y+(b^I^v)+R[2]+3299628645&4294967295,y=b+(E<<23&4294967295|E>>>9),E=v+(b^(y|~I))+R[0]+4096336452&4294967295,v=y+(E<<6&4294967295|E>>>26),E=I+(y^(v|~b))+R[7]+1126891415&4294967295,I=v+(E<<10&4294967295|E>>>22),E=b+(v^(I|~y))+R[14]+2878612391&4294967295,b=I+(E<<15&4294967295|E>>>17),E=y+(I^(b|~v))+R[5]+4237533241&4294967295,y=b+(E<<21&4294967295|E>>>11),E=v+(b^(y|~I))+R[12]+1700485571&4294967295,v=y+(E<<6&4294967295|E>>>26),E=I+(y^(v|~b))+R[3]+2399980690&4294967295,I=v+(E<<10&4294967295|E>>>22),E=b+(v^(I|~y))+R[10]+4293915773&4294967295,b=I+(E<<15&4294967295|E>>>17),E=y+(I^(b|~v))+R[1]+2240044497&4294967295,y=b+(E<<21&4294967295|E>>>11),E=v+(b^(y|~I))+R[8]+1873313359&4294967295,v=y+(E<<6&4294967295|E>>>26),E=I+(y^(v|~b))+R[15]+4264355552&4294967295,I=v+(E<<10&4294967295|E>>>22),E=b+(v^(I|~y))+R[6]+2734768916&4294967295,b=I+(E<<15&4294967295|E>>>17),E=y+(I^(b|~v))+R[13]+1309151649&4294967295,y=b+(E<<21&4294967295|E>>>11),E=v+(b^(y|~I))+R[4]+4149444226&4294967295,v=y+(E<<6&4294967295|E>>>26),E=I+(y^(v|~b))+R[11]+3174756917&4294967295,I=v+(E<<10&4294967295|E>>>22),E=b+(v^(I|~y))+R[2]+718787259&4294967295,b=I+(E<<15&4294967295|E>>>17),E=y+(I^(b|~v))+R[9]+3951481745&4294967295,A.g[0]=A.g[0]+v&4294967295,A.g[1]=A.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,A.g[2]=A.g[2]+b&4294967295,A.g[3]=A.g[3]+I&4294967295}r.prototype.v=function(A,v){v===void 0&&(v=A.length);const y=v-this.blockSize,R=this.C;let b=this.h,I=0;for(;I<v;){if(b==0)for(;I<=y;)s(this,A,I),I+=this.blockSize;if(typeof A=="string"){for(;I<v;)if(R[b++]=A.charCodeAt(I++),b==this.blockSize){s(this,R),b=0;break}}else for(;I<v;)if(R[b++]=A[I++],b==this.blockSize){s(this,R),b=0;break}}this.h=b,this.o+=v},r.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var v=1;v<A.length-8;++v)A[v]=0;v=this.o*8;for(var y=A.length-8;y<A.length;++y)A[y]=v&255,v/=256;for(this.v(A),A=Array(16),v=0,y=0;y<4;++y)for(let R=0;R<32;R+=8)A[v++]=this.g[y]>>>R&255;return A};function i(A,v){var y=c;return Object.prototype.hasOwnProperty.call(y,A)?y[A]:y[A]=v(A)}function o(A,v){this.h=v;const y=[];let R=!0;for(let b=A.length-1;b>=0;b--){const I=A[b]|0;R&&I==v||(y[b]=I,R=!1)}this.g=y}var c={};function l(A){return-128<=A&&A<128?i(A,function(v){return new o([v|0],v<0?-1:0)}):new o([A|0],A<0?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return p;if(A<0)return O(u(-A));const v=[];let y=1;for(let R=0;A>=y;R++)v[R]=A/y|0,y*=4294967296;return new o(v,0)}function f(A,v){if(A.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(A.charAt(0)=="-")return O(f(A.substring(1),v));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=u(Math.pow(v,8));let R=p;for(let I=0;I<A.length;I+=8){var b=Math.min(8,A.length-I);const E=parseInt(A.substring(I,I+b),v);b<8?(b=u(Math.pow(v,b)),R=R.j(b).add(u(E))):(R=R.j(y),R=R.add(u(E)))}return R}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(D(this))return-O(this).m();let A=0,v=1;for(let y=0;y<this.g.length;y++){const R=this.i(y);A+=(R>=0?R:4294967296+R)*v,v*=4294967296}return A},t.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(C(this))return"0";if(D(this))return"-"+O(this).toString(A);const v=u(Math.pow(A,6));var y=this;let R="";for(;;){const b=z(y,v).g;y=j(y,b.j(v));let I=((y.g.length>0?y.g[0]:y.h)>>>0).toString(A);if(y=b,C(y))return I+R;for(;I.length<6;)I="0"+I;R=I+R}},t.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function C(A){if(A.h!=0)return!1;for(let v=0;v<A.g.length;v++)if(A.g[v]!=0)return!1;return!0}function D(A){return A.h==-1}t.l=function(A){return A=j(this,A),D(A)?-1:C(A)?0:1};function O(A){const v=A.g.length,y=[];for(let R=0;R<v;R++)y[R]=~A.g[R];return new o(y,~A.h).add(m)}t.abs=function(){return D(this)?O(this):this},t.add=function(A){const v=Math.max(this.g.length,A.g.length),y=[];let R=0;for(let b=0;b<=v;b++){let I=R+(this.i(b)&65535)+(A.i(b)&65535),E=(I>>>16)+(this.i(b)>>>16)+(A.i(b)>>>16);R=E>>>16,I&=65535,E&=65535,y[b]=E<<16|I}return new o(y,y[y.length-1]&-2147483648?-1:0)};function j(A,v){return A.add(O(v))}t.j=function(A){if(C(this)||C(A))return p;if(D(this))return D(A)?O(this).j(O(A)):O(O(this).j(A));if(D(A))return O(this.j(O(A)));if(this.l(_)<0&&A.l(_)<0)return u(this.m()*A.m());const v=this.g.length+A.g.length,y=[];for(var R=0;R<2*v;R++)y[R]=0;for(R=0;R<this.g.length;R++)for(let b=0;b<A.g.length;b++){const I=this.i(R)>>>16,E=this.i(R)&65535,Te=A.i(b)>>>16,qe=A.i(b)&65535;y[2*R+2*b]+=E*qe,F(y,2*R+2*b),y[2*R+2*b+1]+=I*qe,F(y,2*R+2*b+1),y[2*R+2*b+1]+=E*Te,F(y,2*R+2*b+1),y[2*R+2*b+2]+=I*Te,F(y,2*R+2*b+2)}for(A=0;A<v;A++)y[A]=y[2*A+1]<<16|y[2*A];for(A=v;A<2*v;A++)y[A]=0;return new o(y,0)};function F(A,v){for(;(A[v]&65535)!=A[v];)A[v+1]+=A[v]>>>16,A[v]&=65535,v++}function $(A,v){this.g=A,this.h=v}function z(A,v){if(C(v))throw Error("division by zero");if(C(A))return new $(p,p);if(D(A))return v=z(O(A),v),new $(O(v.g),O(v.h));if(D(v))return v=z(A,O(v)),new $(O(v.g),v.h);if(A.g.length>30){if(D(A)||D(v))throw Error("slowDivide_ only works with positive integers.");for(var y=m,R=v;R.l(A)<=0;)y=te(y),R=te(R);var b=oe(y,1),I=oe(R,1);for(R=oe(R,2),y=oe(y,2);!C(R);){var E=I.add(R);E.l(A)<=0&&(b=b.add(y),I=E),R=oe(R,1),y=oe(y,1)}return v=j(A,b.j(v)),new $(b,v)}for(b=p;A.l(v)>=0;){for(y=Math.max(1,Math.floor(A.m()/v.m())),R=Math.ceil(Math.log(y)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),I=u(y),E=I.j(v);D(E)||E.l(A)>0;)y-=R,I=u(y),E=I.j(v);C(I)&&(I=m),b=b.add(I),A=j(A,E)}return new $(b,A)}t.B=function(A){return z(this,A).h},t.and=function(A){const v=Math.max(this.g.length,A.g.length),y=[];for(let R=0;R<v;R++)y[R]=this.i(R)&A.i(R);return new o(y,this.h&A.h)},t.or=function(A){const v=Math.max(this.g.length,A.g.length),y=[];for(let R=0;R<v;R++)y[R]=this.i(R)|A.i(R);return new o(y,this.h|A.h)},t.xor=function(A){const v=Math.max(this.g.length,A.g.length),y=[];for(let R=0;R<v;R++)y[R]=this.i(R)^A.i(R);return new o(y,this.h^A.h)};function te(A){const v=A.g.length+1,y=[];for(let R=0;R<v;R++)y[R]=A.i(R)<<1|A.i(R-1)>>>31;return new o(y,A.h)}function oe(A,v){const y=v>>5;v%=32;const R=A.g.length-y,b=[];for(let I=0;I<R;I++)b[I]=v>0?A.i(I+y)>>>v|A.i(I+y+1)<<32-v:A.i(I+y);return new o(b,A.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Gg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,pr=o}).apply(typeof Id<"u"?Id:typeof self<"u"?self:typeof window<"u"?window:{});var Co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qg,pi,Yg,Ko,Il,Jg,Xg,Zg;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Co=="object"&&Co];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=l,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,P,k){for(var K=Array(arguments.length-2),de=2;de<arguments.length;de++)K[de-2]=arguments[de];return h.prototype[P].apply(g,K)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function C(a,h){for(let g=1;g<arguments.length;g++){const P=arguments[g];var d=typeof P;if(d=d!="object"?d:P?Array.isArray(P)?"array":d:"null",d=="array"||d=="object"&&typeof P.length=="number"){d=a.length||0;const k=P.length||0;a.length=d+k;for(let K=0;K<k;K++)a[d+K]=P[K]}else a.push(P)}}class D{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function O(a){o.setTimeout(()=>{throw a},0)}function j(){var a=A;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class F{constructor(){this.h=this.g=null}add(h,d){const g=$.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var $=new D(()=>new z,a=>a.reset());class z{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let te,oe=!1,A=new F,v=()=>{const a=Promise.resolve(void 0);te=()=>{a.then(y)}};function y(){for(var a;a=j();){try{a.h.call(a.g)}catch(d){O(d)}var h=$;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}oe=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function E(a){return/^[\s\xa0]*$/.test(a)}function Te(a,h){b.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Te,b),Te.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Te.Z.h.call(this)},Te.prototype.h=function(){Te.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var qe="closure_listenable_"+(Math.random()*1e6|0),Fe=0;function Ae(a,h,d,g,P){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=P,this.key=++Fe,this.da=this.fa=!1}function ye(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ct(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function on(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function Dt(a){const h={};for(const d in a)h[d]=a[d];return h}const it="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rn(a,h){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let k=0;k<it.length;k++)d=it[k],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function Qt(a){this.src=a,this.g={},this.h=0}Qt.prototype.add=function(a,h,d,g,P){const k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);const K=dt(a,h,g,P);return K>-1?(h=a[K],d||(h.fa=!1)):(h=new Ae(h,this.src,k,!!g,P),h.fa=d,a.push(h)),h};function zn(a,h){const d=h.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,h,void 0),k;(k=P>=0)&&Array.prototype.splice.call(g,P,1),k&&(ye(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function dt(a,h,d,g){for(let P=0;P<a.length;++P){const k=a[P];if(!k.da&&k.listener==h&&k.capture==!!d&&k.ha==g)return P}return-1}var x="closure_lm_"+(Math.random()*1e6|0),J={};function Q(a,h,d,g,P){if(Array.isArray(h)){for(let k=0;k<h.length;k++)Q(a,h[k],d,g,P);return null}return d=G(d),a&&a[qe]?a.J(h,d,c(g)?!!g.capture:!1,P):Z(a,h,d,!1,g,P)}function Z(a,h,d,g,P,k){if(!h)throw Error("Invalid event type");const K=c(P)?!!P.capture:!!P;let de=U(a);if(de||(a[x]=de=new Qt(a)),d=de.add(h,d,g,K,k),d.proxy)return d;if(g=Ce(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)I||(P=K),P===void 0&&(P=!1),a.addEventListener(h.toString(),g,P);else if(a.attachEvent)a.attachEvent(S(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ce(){function a(d){return h.call(a.src,a.listener,d)}const h=L;return a}function T(a,h,d,g,P){if(Array.isArray(h))for(var k=0;k<h.length;k++)T(a,h[k],d,g,P);else g=c(g)?!!g.capture:!!g,d=G(d),a&&a[qe]?(a=a.i,k=String(h).toString(),k in a.g&&(h=a.g[k],d=dt(h,d,g,P),d>-1&&(ye(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[k],a.h--)))):a&&(a=U(a))&&(h=a.g[h.toString()],a=-1,h&&(a=dt(h,d,g,P)),(d=a>-1?h[a]:null)&&w(d))}function w(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[qe])zn(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(S(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=U(h))?(zn(d,a),d.h==0&&(d.src=null,h[x]=null)):ye(a)}}}function S(a){return a in J?J[a]:J[a]="on"+a}function L(a,h){if(a.da)a=!0;else{h=new Te(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&w(a),a=d.call(g,h)}return a}function U(a){return a=a[x],a instanceof Qt?a:null}var V="__closure_events_fn_"+(Math.random()*1e9>>>0);function G(a){return typeof a=="function"?a:(a[V]||(a[V]=function(h){return a.handleEvent(h)}),a[V])}function W(){R.call(this),this.i=new Qt(this),this.M=this,this.G=null}p(W,R),W.prototype[qe]=!0,W.prototype.removeEventListener=function(a,h,d,g){T(this,a,h,d,g)};function H(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new b(h,a);else if(h instanceof b)h.target=h.target||a;else{var P=h;h=new b(g,a),Rn(h,P)}P=!0;let k,K;if(d)for(K=d.length-1;K>=0;K--)k=h.g=d[K],P=q(k,g,!0,h)&&P;if(k=h.g=a,P=q(k,g,!0,h)&&P,P=q(k,g,!1,h)&&P,d)for(K=0;K<d.length;K++)k=h.g=d[K],P=q(k,g,!1,h)&&P}W.prototype.N=function(){if(W.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)ye(d[g]);delete a.g[h],a.h--}}this.G=null},W.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},W.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function q(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let P=!0;for(let k=0;k<h.length;++k){const K=h[k];if(K&&!K.da&&K.capture==d){const de=K.listener,Qe=K.ha||K.src;K.fa&&zn(a.i,K),P=de.call(Qe,g)!==!1&&P}}return P&&!g.defaultPrevented}function se(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Y(a){a.g=se(()=>{a.g=null,a.i&&(a.i=!1,Y(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ne extends R{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Y(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ie(a){R.call(this),this.h=a,this.g={}}p(ie,R);var pe=[];function ke(a){Ct(a.g,function(h,d){this.g.hasOwnProperty(d)&&w(h)},a),a.g={}}ie.prototype.N=function(){ie.Z.N.call(this),ke(this)},ie.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var we=o.JSON.stringify,pt=o.JSON.parse,mt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ot(){}function Vt(){}var Yt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function os(){b.call(this,"d")}p(os,b);function ot(){b.call(this,"c")}p(ot,b);var Xe={},zs=null;function kr(){return zs=zs||new W}Xe.Ia="serverreachability";function sh(a){b.call(this,Xe.Ia,a)}p(sh,b);function Ks(a){const h=kr();H(h,new sh(h))}Xe.STAT_EVENT="statevent";function ih(a,h){b.call(this,Xe.STAT_EVENT,a),this.stat=h}p(ih,b);function It(a){const h=kr();H(h,new ih(h,a))}Xe.Ja="timingevent";function oh(a,h){b.call(this,Xe.Ja,a),this.size=h}p(oh,b);function Gs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Qs(){this.g=!0}Qs.prototype.ua=function(){this.g=!1};function Ky(a,h,d,g,P,k){a.info(function(){if(a.g)if(k){var K="",de=k.split("&");for(let De=0;De<de.length;De++){var Qe=de[De].split("=");if(Qe.length>1){const Ze=Qe[0];Qe=Qe[1];const cn=Ze.split("_");K=cn.length>=2&&cn[1]=="type"?K+(Ze+"="+Qe+"&"):K+(Ze+"=redacted&")}}}else K=null;else K=k;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+h+`
`+d+`
`+K})}function Gy(a,h,d,g,P,k,K){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+h+`
`+d+`
`+k+" "+K})}function as(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Yy(a,d)+(g?" "+g:"")})}function Qy(a,h){a.info(function(){return"TIMEOUT: "+h})}Qs.prototype.info=function(){};function Yy(a,h){if(!a.g)return h;if(!h)return null;try{const k=JSON.parse(h);if(k){for(a=0;a<k.length;a++)if(Array.isArray(k[a])){var d=k[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var P=g[0];if(P!="noop"&&P!="stop"&&P!="close")for(let K=1;K<g.length;K++)g[K]=""}}}}return we(k)}catch{return h}}var po={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ah={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ch;function uc(){}p(uc,Ot),uc.prototype.g=function(){return new XMLHttpRequest},ch=new uc;function Ys(a){return encodeURIComponent(String(a))}function Jy(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function Kn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new ie(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new lh}function lh(){this.i=null,this.g="",this.h=!1}var uh={},hc={};function fc(a,h,d){a.M=1,a.A=go(an(h)),a.u=d,a.R=!0,hh(a,null)}function hh(a,h){a.F=Date.now(),mo(a),a.B=an(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),bh(d.i,"t",g),a.C=0,d=a.j.L,a.h=new lh,a.g=$h(a.j,d?h:null,!a.u),a.P>0&&(a.O=new ne(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(pe[0]=P.toString()),P=pe);for(let k=0;k<P.length;k++){const K=Q(d,P[k],g||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.J?Dt(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Ks(),Ky(a.i,a.v,a.B,a.l,a.S,a.u)}Kn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Yn(a)==3?h.j():this.Y(a)},Kn.prototype.Y=function(a){try{if(a==this.g)e:{const de=Yn(this.g),Qe=this.g.ya(),De=this.g.ca();if(!(de<3)&&(de!=3||this.g&&(this.h.h||this.g.la()||Nh(this.g)))){this.K||de!=4||Qe==7||(Qe==8||De<=0?Ks(3):Ks(2)),dc(this);var h=this.g.ca();this.X=h;var d=Xy(this);if(this.o=h==200,Gy(this.i,this.v,this.B,this.l,this.S,de,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,P=this.g;if((g=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(g)){var k=g;break t}}k=null}if(a=k)as(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,pc(this,a);else{this.o=!1,this.m=3,It(12),Nr(this),Js(this);break e}}if(this.R){a=!0;let Ze;for(;!this.K&&this.C<d.length;)if(Ze=Zy(this,d),Ze==hc){de==4&&(this.m=4,It(14),a=!1),as(this.i,this.l,null,"[Incomplete Response]");break}else if(Ze==uh){this.m=4,It(15),as(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else as(this.i,this.l,Ze,null),pc(this,Ze);if(fh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),de!=4||d.length!=0||this.h.h||(this.m=1,It(16),a=!1),this.o=this.o&&a,!a)as(this.i,this.l,d,"[Invalid Chunked Response]"),Nr(this),Js(this);else if(d.length>0&&!this.W){this.W=!0;var K=this.j;K.g==this&&K.aa&&!K.P&&(K.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),wc(K),K.P=!0,It(11))}}else as(this.i,this.l,d,null),pc(this,d);de==4&&Nr(this),this.o&&!this.K&&(de==4?Uh(this.j,this):(this.o=!1,mo(this)))}else dE(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,It(12)):(this.m=0,It(13)),Nr(this),Js(this)}}}catch{}finally{}};function Xy(a){if(!fh(a))return a.g.la();const h=Nh(a.g);if(h==="")return"";let d="";const g=h.length,P=Yn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Nr(a),Js(a),"";a.h.i=new o.TextDecoder}for(let k=0;k<g;k++)a.h.h=!0,d+=a.h.i.decode(h[k],{stream:!(P&&k==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function fh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Zy(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?hc:(d=Number(h.substring(d,g)),isNaN(d)?uh:(g+=1,g+d>h.length?hc:(h=h.slice(g,g+d),a.C=g+d,h)))}Kn.prototype.cancel=function(){this.K=!0,Nr(this)};function mo(a){a.T=Date.now()+a.H,dh(a,a.H)}function dh(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Gs(u(a.aa,a),h)}function dc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Kn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Qy(this.i,this.B),this.M!=2&&(Ks(),It(17)),Nr(this),this.m=2,Js(this)):dh(this,this.T-a)};function Js(a){a.j.I==0||a.K||Uh(a.j,a)}function Nr(a){dc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,ke(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function pc(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||mc(d.h,a))){if(!a.L&&mc(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)To(d),Eo(d);else break e;Tc(d),It(18)}}else d.xa=P[1],0<d.xa-d.K&&P[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Gs(u(d.Va,d),6e3));gh(d.h)<=1&&d.ta&&(d.ta=void 0)}else Or(d,11)}else if((a.L||d.g==a)&&To(d),!E(h))for(P=d.Ba.g.parse(h),h=0;h<P.length;h++){let De=P[h];const Ze=De[0];if(!(Ze<=d.K))if(d.K=Ze,De=De[1],d.I==2)if(De[0]=="c"){d.M=De[1],d.ba=De[2];const cn=De[3];cn!=null&&(d.ka=cn,d.j.info("VER="+d.ka));const Vr=De[4];Vr!=null&&(d.za=Vr,d.j.info("SVER="+d.za));const Jn=De[5];Jn!=null&&typeof Jn=="number"&&Jn>0&&(g=1.5*Jn,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Xn=a.g;if(Xn){const Io=Xn.g?Xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Io){var k=g.h;k.g||Io.indexOf("spdy")==-1&&Io.indexOf("quic")==-1&&Io.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(gc(k,k.h),k.h=null))}if(g.G){const Ic=Xn.g?Xn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ic&&(g.wa=Ic,xe(g.J,g.G,Ic))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var K=a;if(g.na=jh(g,g.L?g.ba:null,g.W),K.L){_h(g.h,K);var de=K,Qe=g.O;Qe&&(de.H=Qe),de.D&&(dc(de),mo(de)),g.g=K}else Lh(g);d.i.length>0&&vo(d)}else De[0]!="stop"&&De[0]!="close"||Or(d,7);else d.I==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?Or(d,7):vc(d):De[0]!="noop"&&d.l&&d.l.qa(De),d.A=0)}}Ks(4)}catch{}}var eE=class{constructor(a,h){this.g=a,this.map=h}};function ph(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function mh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function gh(a){return a.h?1:a.g?a.g.size:0}function mc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function gc(a,h){a.g?a.g.add(h):a.h=h}function _h(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}ph.prototype.cancel=function(){if(this.i=yh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function yh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return _(a.i)}var Eh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tE(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let P,k=null;g>=0?(P=a[d].substring(0,g),k=a[d].substring(g+1)):P=a[d],h(P,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Gn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Gn?(this.l=a.l,Xs(this,a.j),this.o=a.o,this.g=a.g,Zs(this,a.u),this.h=a.h,_c(this,Ah(a.i)),this.m=a.m):a&&(h=String(a).match(Eh))?(this.l=!1,Xs(this,h[1]||"",!0),this.o=ei(h[2]||""),this.g=ei(h[3]||"",!0),Zs(this,h[4]),this.h=ei(h[5]||"",!0),_c(this,h[6]||"",!0),this.m=ei(h[7]||"")):(this.l=!1,this.i=new ni(null,this.l))}Gn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(ti(h,vh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ti(h,vh,!0),"@"),a.push(Ys(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ti(d,d.charAt(0)=="/"?sE:rE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ti(d,oE)),a.join("")},Gn.prototype.resolve=function(a){const h=an(this);let d=!!a.j;d?Xs(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)Zs(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var P=h.h.lastIndexOf("/");P!=-1&&(g=h.h.slice(0,P+1)+g)}if(P=g,P==".."||P==".")g="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){g=P.lastIndexOf("/",0)==0,P=P.split("/");const k=[];for(let K=0;K<P.length;){const de=P[K++];de=="."?g&&K==P.length&&k.push(""):de==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),g&&K==P.length&&k.push("")):(k.push(de),g=!0)}g=k.join("/")}else g=P}return d?h.h=g:d=a.i.toString()!=="",d?_c(h,Ah(a.i)):d=!!a.m,d&&(h.m=a.m),h};function an(a){return new Gn(a)}function Xs(a,h,d){a.j=d?ei(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Zs(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function _c(a,h,d){h instanceof ni?(a.i=h,aE(a.i,a.l)):(d||(h=ti(h,iE)),a.i=new ni(h,a.l))}function xe(a,h,d){a.i.set(h,d)}function go(a){return xe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ei(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ti(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,nE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function nE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var vh=/[#\/\?@]/g,rE=/[#\?:]/g,sE=/[#\?]/g,iE=/[#\?@]/g,oE=/#/g;function ni(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Dr(a){a.g||(a.g=new Map,a.h=0,a.i&&tE(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=ni.prototype,t.add=function(a,h){Dr(this),this.i=null,a=cs(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Th(a,h){Dr(a),h=cs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function wh(a,h){return Dr(a),h=cs(a,h),a.g.has(h)}t.forEach=function(a,h){Dr(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(h,P,g,this)},this)},this)};function Ih(a,h){Dr(a);let d=[];if(typeof h=="string")wh(a,h)&&(d=d.concat(a.g.get(cs(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return Dr(this),this.i=null,a=cs(this,a),wh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Ih(this,a),a.length>0?String(a[0]):h):h};function bh(a,h,d){Th(a,h),d.length>0&&(a.i=null,a.g.set(cs(a,h),_(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const P=Ys(d);d=Ih(this,d);for(let k=0;k<d.length;k++){let K=P;d[k]!==""&&(K+="="+Ys(d[k])),a.push(K)}}return this.i=a.join("&")};function Ah(a){const h=new ni;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function cs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function aE(a,h){h&&!a.j&&(Dr(a),a.i=null,a.g.forEach(function(d,g){const P=g.toLowerCase();g!=P&&(Th(this,g),bh(this,P,d))},a)),a.j=h}function cE(a,h){const d=new Qs;if(o.Image){const g=new Image;g.onload=f(Qn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(Qn,d,"TestLoadImage: error",!1,h,g),g.onabort=f(Qn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(Qn,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function lE(a,h){const d=new Qs,g=new AbortController,P=setTimeout(()=>{g.abort(),Qn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(k=>{clearTimeout(P),k.ok?Qn(d,"TestPingServer: ok",!0,h):Qn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),Qn(d,"TestPingServer: error",!1,h)})}function Qn(a,h,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function uE(){this.g=new mt}function yc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(yc,Ot),yc.prototype.g=function(){return new _o(this.i,this.h)};function _o(a,h){W.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(_o,W),t=_o.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,si(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ri(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,si(this)),this.g&&(this.readyState=3,si(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Rh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Rh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ri(this):si(this),this.readyState==3&&Rh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,ri(this))},t.Na=function(a){this.g&&(this.response=a,ri(this))},t.ga=function(){this.g&&ri(this)};function ri(a){a.readyState=4,a.l=null,a.j=null,a.B=null,si(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function si(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(_o.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Sh(a){let h="";return Ct(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Ec(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Sh(d),typeof a=="string"?d!=null&&Ys(d):xe(a,h,d))}function je(a){W.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(je,W);var hE=/^https?$/i,fE=["POST","PUT"];t=je.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ch.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(k){Ph(this,k);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())d.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(fE,h,void 0)>=0)||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,K]of d)this.g.setRequestHeader(k,K);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(k){Ph(this,k)}};function Ph(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Ch(a),yo(a)}function Ch(a){a.A||(a.A=!0,H(a,"complete"),H(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,H(this,"complete"),H(this,"abort"),yo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yo(this,!0)),je.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?kh(this):this.Xa())},t.Xa=function(){kh(this)};function kh(a){if(a.h&&typeof i<"u"){if(a.v&&Yn(a)==4)setTimeout(a.Ca.bind(a),0);else if(H(a,"readystatechange"),Yn(a)==4){a.h=!1;try{const k=a.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=k===0){let K=String(a.D).match(Eh)[1]||null;!K&&o.self&&o.self.location&&(K=o.self.location.protocol.slice(0,-1)),g=!hE.test(K?K.toLowerCase():"")}d=g}if(d)H(a,"complete"),H(a,"success");else{a.o=6;try{var P=Yn(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",Ch(a)}}finally{yo(a)}}}}function yo(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||H(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Yn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Yn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),pt(h)}};function Nh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function dE(a){const h={};a=(a.g&&Yn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(E(a[g]))continue;var d=Jy(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=h[P]||[];h[P]=k,k.push(d)}on(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ii(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Dh(a){this.za=0,this.i=[],this.j=new Qs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ii("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ii("baseRetryDelayMs",5e3,a),this.Za=ii("retryDelaySeedMs",1e4,a),this.Ta=ii("forwardChannelMaxRetries",2,a),this.va=ii("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ph(a&&a.concurrentRequestLimit),this.Ba=new uE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Dh.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,g){It(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=jh(this,null,this.W),vo(this)};function vc(a){if(Oh(a),a.I==3){var h=a.V++,d=an(a.J);if(xe(d,"SID",a.M),xe(d,"RID",h),xe(d,"TYPE","terminate"),oi(a,d),h=new Kn(a,a.j,h),h.M=2,h.A=go(an(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=$h(h.j,null),h.g.ea(h.A)),h.F=Date.now(),mo(h)}Bh(a)}function Eo(a){a.g&&(wc(a),a.g.cancel(),a.g=null)}function Oh(a){Eo(a),a.v&&(o.clearTimeout(a.v),a.v=null),To(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function vo(a){if(!mh(a.h)&&!a.m){a.m=!0;var h=a.Ea;te||v(),oe||(te(),oe=!0),A.add(h,a),a.D=0}}function pE(a,h){return gh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Gs(u(a.Ea,a,h),Fh(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new Kn(this,this.j,a);let k=this.o;if(this.U&&(k?(k=Dt(k),Rn(k,this.U)):k=this.U),this.u!==null||this.R||(P.J=k,k=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=xh(this,P,h),d=an(this.J),xe(d,"RID",a),xe(d,"CVER",22),this.G&&xe(d,"X-HTTP-Session-Id",this.G),oi(this,d),k&&(this.R?h="headers="+Ys(Sh(k))+"&"+h:this.u&&Ec(d,this.u,k)),gc(this.h,P),this.Ra&&xe(d,"TYPE","init"),this.S?(xe(d,"$req",h),xe(d,"SID","null"),P.U=!0,fc(P,d,null)):fc(P,d,h),this.I=2}}else this.I==3&&(a?Vh(this,a):this.i.length==0||mh(this.h)||Vh(this))};function Vh(a,h){var d;h?d=h.l:d=a.V++;const g=an(a.J);xe(g,"SID",a.M),xe(g,"RID",d),xe(g,"AID",a.K),oi(a,g),a.u&&a.o&&Ec(g,a.u,a.o),d=new Kn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=xh(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),gc(a.h,d),fc(d,g,h)}function oi(a,h){a.H&&Ct(a.H,function(d,g){xe(h,g,d)}),a.l&&Ct({},function(d,g){xe(h,g,d)})}function xh(a,h,d){d=Math.min(a.i.length,d);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var P=a.i;let de=-1;for(;;){const Qe=["count="+d];de==-1?d>0?(de=P[0].g,Qe.push("ofs="+de)):de=0:Qe.push("ofs="+de);let De=!0;for(let Ze=0;Ze<d;Ze++){var k=P[Ze].g;const cn=P[Ze].map;if(k-=de,k<0)de=Math.max(0,P[Ze].g-100),De=!1;else try{k="req"+k+"_"||"";try{var K=cn instanceof Map?cn:Object.entries(cn);for(const[Vr,Jn]of K){let Xn=Jn;c(Jn)&&(Xn=we(Jn)),Qe.push(k+Vr+"="+encodeURIComponent(Xn))}}catch(Vr){throw Qe.push(k+"type="+encodeURIComponent("_badmap")),Vr}}catch{g&&g(cn)}}if(De){K=Qe.join("&");break e}}K=void 0}return a=a.i.splice(0,d),h.G=a,K}function Lh(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;te||v(),oe||(te(),oe=!0),A.add(h,a),a.A=0}}function Tc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Gs(u(a.Da,a),Fh(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Mh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Gs(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,It(10),Eo(this),Mh(this))};function wc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Mh(a){a.g=new Kn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=an(a.na);xe(h,"RID","rpc"),xe(h,"SID",a.M),xe(h,"AID",a.K),xe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&xe(h,"TO",a.ia),xe(h,"TYPE","xmlhttp"),oi(a,h),a.u&&a.o&&Ec(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=go(an(h)),d.u=null,d.R=!0,hh(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Eo(this),Tc(this),It(19))};function To(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Uh(a,h){var d=null;if(a.g==h){To(a),wc(a),a.g=null;var g=2}else if(mc(a.h,h))d=h.G,_h(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var P=a.D;g=kr(),H(g,new oh(g,d)),vo(a)}else Lh(a);else if(P=h.m,P==3||P==0&&h.X>0||!(g==1&&pE(a,h)||g==2&&Tc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),P){case 1:Or(a,5);break;case 4:Or(a,10);break;case 3:Or(a,6);break;default:Or(a,2)}}}function Fh(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Or(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),g=a.Ua;const P=!g;g=new Gn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Xs(g,"https"),go(g),P?cE(g.toString(),d):lE(g.toString(),d)}else It(2);a.I=0,a.l&&a.l.pa(h),Bh(a),Oh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Bh(a){if(a.I=0,a.ja=[],a.l){const h=yh(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ja,h),C(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function jh(a,h,d){var g=d instanceof Gn?an(d):new Gn(d);if(g.g!="")h&&(g.g=h+"."+g.g),Zs(g,g.u);else{var P=o.location;g=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;const k=new Gn(null);g&&Xs(k,g),h&&(k.g=h),P&&Zs(k,P),d&&(k.h=d),g=k}return d=a.G,h=a.wa,d&&h&&xe(g,d,h),xe(g,"VER",a.ka),oi(a,g),g}function $h(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new je(new yc({ab:d})):new je(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hh(){}t=Hh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function wo(){}wo.prototype.g=function(a,h){return new xt(a,h)};function xt(a,h){W.call(this),this.g=new Dh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!E(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ls(this)}p(xt,W),xt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){vc(this.g)},xt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=we(a),a=d);h.i.push(new eE(h.Ya++,a)),h.I==3&&vo(h)},xt.prototype.N=function(){this.g.l=null,delete this.j,vc(this.g),delete this.g,xt.Z.N.call(this)};function qh(a){os.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(qh,os);function Wh(){ot.call(this),this.status=1}p(Wh,ot);function ls(a){this.g=a}p(ls,Hh),ls.prototype.ra=function(){H(this.g,"a")},ls.prototype.qa=function(a){H(this.g,new qh(a))},ls.prototype.pa=function(a){H(this.g,new Wh)},ls.prototype.oa=function(){H(this.g,"b")},wo.prototype.createWebChannel=wo.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,Zg=function(){return new wo},Xg=function(){return kr()},Jg=Xe,Il={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},po.NO_ERROR=0,po.TIMEOUT=8,po.HTTP_ERROR=6,Ko=po,ah.COMPLETE="complete",Yg=ah,Vt.EventType=Yt,Yt.OPEN="a",Yt.CLOSE="b",Yt.ERROR="c",Yt.MESSAGE="d",W.prototype.listen=W.prototype.J,pi=Vt,je.prototype.listenOnce=je.prototype.K,je.prototype.getLastError=je.prototype.Ha,je.prototype.getLastErrorCode=je.prototype.ya,je.prototype.getStatus=je.prototype.ca,je.prototype.getResponseJson=je.prototype.La,je.prototype.getResponseText=je.prototype.la,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Fa,Qg=je}).apply(typeof Co<"u"?Co:typeof self<"u"?self:typeof window<"u"?window:{});const bd="@firebase/firestore",Ad="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $s="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new lu("@firebase/firestore");function ps(){return Yr.logLevel}function X(t,...e){if(Yr.logLevel<=me.DEBUG){const n=e.map(Tu);Yr.debug(`Firestore (${$s}): ${t}`,...n)}}function Hn(t,...e){if(Yr.logLevel<=me.ERROR){const n=e.map(Tu);Yr.error(`Firestore (${$s}): ${t}`,...n)}}function Vs(t,...e){if(Yr.logLevel<=me.WARN){const n=e.map(Tu);Yr.warn(`Firestore (${$s}): ${t}`,...n)}}function Tu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,e_(t,r,n)}function e_(t,e,n){let r=`FIRESTORE (${$s}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Hn(r),new Error(r)}function Pe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||e_(e,s,r)}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends An{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(_t.UNAUTHENTICATED)))}shutdown(){}}class aS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class cS{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Pe(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new mr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new mr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new mr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string",31837,{l:r}),new t_(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string",2055,{h:e}),new _t(e)}}class lS{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class uS{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new lS(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(_t.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Rd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hS{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Mt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Pe(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Rd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Pe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Rd(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=fS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function bl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return zc(s)===zc(i)?ge(s,i):zc(s)?1:-1}return ge(t.length,e.length)}const dS=55296,pS=57343;function zc(t){const e=t.charCodeAt(0);return e>=dS&&e<=pS}function xs(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="__name__";class hn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ce(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ce(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return hn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof hn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=hn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ge(e.length,n.length)}static compareSegments(e,n){const r=hn.isNumericId(e),s=hn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?hn.extractNumericId(e).compare(hn.extractNumericId(n)):bl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return pr.fromString(e.substring(4,e.length-2))}}class Le extends hn{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Le(n)}static emptyPath(){return new Le([])}}const mS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends hn{construct(e,n,r){return new lt(e,n,r)}static isValidIdentifier(e){return mS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Sd}static keyField(){return new lt([Sd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ee(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ee(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ee(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new ee(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Le.fromString(e))}static fromName(e){return new re(Le.fromString(e).popFirst(5))}static empty(){return new re(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Le(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(t,e,n){if(!n)throw new ee(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gS(t,e,n,r){if(e===!0&&r===!0)throw new ee(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Pd(t){if(!re.isDocumentKey(t))throw new ee(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Cd(t){if(re.isDocumentKey(t))throw new ee(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function r_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Iu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce(12329,{type:typeof t})}function ga(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Iu(t);throw new ee(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t,e){const n={typeString:t};return e&&(n.value=e),n}function co(t,e){if(!r_(t))throw new ee(B.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ee(B.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=-62135596800,Nd=1e6;class Me{static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Nd);return new Me(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ee(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<kd)throw new ee(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Nd}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(co(e,Me._jsonSchema))return new Me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-kd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Me._jsonSchemaVersion="firestore/timestamp/1.0",Me._jsonSchema={type:Ge("string",Me._jsonSchemaVersion),seconds:Ge("number"),nanoseconds:Ge("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Me(0,0))}static max(){return new ue(new Me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=-1;function _S(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new vr(s,re.empty(),e)}function yS(t){return new vr(t.readTime,t.key,zi)}class vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vr(ue.min(),re.empty(),zi)}static max(){return new vr(ue.max(),re.empty(),zi)}}function ES(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class TS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==vS)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):M.reject(n)}static resolve(e){return new M(((n,r)=>{n(e)}))}static reject(e){return new M(((n,r)=>{r(e)}))}static waitFor(e){return new M(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next((s=>s?M.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new M(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((f=>{o[u]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new M(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function wS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function qs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ya.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=-1;function Ja(t){return t==null}function _a(t){return t===0&&1/t==-1/0}function IS(t){return typeof t=="number"&&Number.isInteger(t)&&!_a(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="";function bS(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Dd(e)),e=AS(t.get(n),e);return Dd(e)}function AS(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case s_:n+="";break;default:n+=i}}return n}function Dd(t){return t+s_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ns(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function i_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ko(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ko(this.root,e,this.comparator,!1)}getReverseIterator(){return new ko(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ko(this.root,e,this.comparator,!0)}}class ko{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=i??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ce(27949);return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw ce(57766)}get value(){throw ce(16141)}get color(){throw ce(16727)}get left(){throw ce(29726)}get right(){throw ce(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vd(this.data.getIterator())}getIteratorFrom(e){return new Vd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class Vd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new Je(lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xs(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new o_("Invalid base64 string: "+i):i}})(e);return new ft(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const RS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tr(t){if(Pe(!!t,39018),typeof t=="string"){let e=0;const n=RS.exec(t);if(Pe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function wr(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="server_timestamp",c_="__type__",l_="__previous_value__",u_="__local_write_time__";function Au(t){return(t?.mapValue?.fields||{})[c_]?.stringValue===a_}function Xa(t){const e=t.mapValue.fields[l_];return Au(e)?Xa(e):e}function Ki(t){const e=Tr(t.mapValue.fields[u_].timestampValue);return new Me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const ya="(default)";class Gi{constructor(e,n){this.projectId=e,this.database=n||ya}static empty(){return new Gi("","")}get isDefaultDatabase(){return this.database===ya}isEqual(e){return e instanceof Gi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="__type__",PS="__max__",No={mapValue:{}},f_="__vector__",Ea="value";function Ir(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Au(t)?4:kS(t)?9007199254740991:CS(t)?10:11:ce(28295,{value:t})}function In(t,e){if(t===e)return!0;const n=Ir(t);if(n!==Ir(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ki(t).isEqual(Ki(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Tr(s.timestampValue),c=Tr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return wr(s.bytesValue).isEqual(wr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return We(s.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return We(s.integerValue)===We(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=We(s.doubleValue),c=We(i.doubleValue);return o===c?_a(o)===_a(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return xs(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Od(o)!==Od(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!In(o[l],c[l])))return!1;return!0})(t,e);default:return ce(52216,{left:t})}}function Qi(t,e){return(t.values||[]).find((n=>In(n,e)))!==void 0}function Ls(t,e){if(t===e)return 0;const n=Ir(t),r=Ir(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=We(i.integerValue||i.doubleValue),l=We(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return xd(t.timestampValue,e.timestampValue);case 4:return xd(Ki(t),Ki(e));case 5:return bl(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=wr(i),l=wr(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=ge(c[u],l[u]);if(f!==0)return f}return ge(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=ge(We(i.latitude),We(o.latitude));return c!==0?c:ge(We(i.longitude),We(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Ld(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const c=i.fields||{},l=o.fields||{},u=c[Ea]?.arrayValue,f=l[Ea]?.arrayValue,p=ge(u?.values?.length||0,f?.values?.length||0);return p!==0?p:Ld(u,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===No.mapValue&&o===No.mapValue)return 0;if(i===No.mapValue)return 1;if(o===No.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=bl(l[p],f[p]);if(m!==0)return m;const _=Ls(c[l[p]],u[f[p]]);if(_!==0)return _}return ge(l.length,f.length)})(t.mapValue,e.mapValue);default:throw ce(23264,{he:n})}}function xd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=Tr(t),r=Tr(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function Ld(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ls(n[s],r[s]);if(i)return i}return ge(n.length,r.length)}function Ms(t){return Al(t)}function Al(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Tr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return wr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return re.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Al(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Al(n.fields[o])}`;return s+"}"})(t.mapValue):ce(61005,{value:t})}function Go(t){switch(Ir(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xa(t);return e?16+Go(e):16;case 5:return 2*t.stringValue.length;case 6:return wr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Go(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return ns(r.fields,((i,o)=>{s+=i.length+Go(o)})),s})(t.mapValue);default:throw ce(13486,{value:t})}}function Rl(t){return!!t&&"integerValue"in t}function Ru(t){return!!t&&"arrayValue"in t}function Md(t){return!!t&&"nullValue"in t}function Ud(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qo(t){return!!t&&"mapValue"in t}function CS(t){return(t?.mapValue?.fields||{})[h_]?.stringValue===f_}function Pi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ns(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Pi(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Pi(t.arrayValue.values[n]);return e}return{...t}}function kS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===PS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.value=e}static empty(){return new Wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Qo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pi(n)}setAll(e){let n=lt.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Pi(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Qo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Qo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ns(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Wt(Pi(this.value))}}function d_(t){const e=[];return ns(t.fields,((n,r)=>{const s=new lt([n]);if(Qo(r)){const i=d_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Et(e,0,ue.min(),ue.min(),ue.min(),Wt.empty(),0)}static newFoundDocument(e,n,r,s){return new Et(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new Et(e,2,n,ue.min(),ue.min(),Wt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,ue.min(),ue.min(),Wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n){this.position=e,this.inclusive=n}}function Fd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=Ls(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Bd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n="asc"){this.field=e,this.dir=n}}function NS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{}class Ye extends p_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new OS(e,n,r):n==="array-contains"?new LS(e,r):n==="in"?new MS(e,r):n==="not-in"?new US(e,r):n==="array-contains-any"?new FS(e,r):new Ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new VS(e,r):new xS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ls(n,this.value)):n!==null&&Ir(this.value)===Ir(n)&&this.matchesComparison(Ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bn extends p_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new bn(e,n)}matches(e){return m_(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function m_(t){return t.op==="and"}function g_(t){return DS(t)&&m_(t)}function DS(t){for(const e of t.filters)if(e instanceof bn)return!1;return!0}function Sl(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+Ms(t.value);if(g_(t))return t.filters.map((e=>Sl(e))).join(",");{const e=t.filters.map((n=>Sl(n))).join(",");return`${t.op}(${e})`}}function __(t,e){return t instanceof Ye?(function(r,s){return s instanceof Ye&&r.op===s.op&&r.field.isEqual(s.field)&&In(r.value,s.value)})(t,e):t instanceof bn?(function(r,s){return s instanceof bn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&__(o,s.filters[c])),!0):!1})(t,e):void ce(19439)}function y_(t){return t instanceof Ye?(function(n){return`${n.field.canonicalString()} ${n.op} ${Ms(n.value)}`})(t):t instanceof bn?(function(n){return n.op.toString()+" {"+n.getFilters().map(y_).join(" ,")+"}"})(t):"Filter"}class OS extends Ye{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class VS extends Ye{constructor(e,n){super(e,"in",n),this.keys=E_("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class xS extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=E_("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function E_(t,e){return(e.arrayValue?.values||[]).map((n=>re.fromName(n.referenceValue)))}class LS extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ru(n)&&Qi(n.arrayValue,this.value)}}class MS extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qi(this.value.arrayValue,n)}}class US extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Qi(this.value.arrayValue,n)}}class FS extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ru(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Qi(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function jd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new BS(t,e,n,r,s,i,o)}function Su(t){const e=fe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Sl(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Ja(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Ms(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Ms(r))).join(",")),e.Te=n}return e.Te}function Pu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!NS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!__(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Bd(t.startAt,e.startAt)&&Bd(t.endAt,e.endAt)}function Pl(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function jS(t,e,n,r,s,i,o,c){return new Za(t,e,n,r,s,i,o,c)}function v_(t){return new Za(t)}function $d(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $S(t){return t.collectionGroup!==null}function Ci(t){const e=fe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Je(lt.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ta(i,r))})),n.has(lt.keyField().canonicalString())||e.Ie.push(new Ta(lt.keyField(),r))}return e.Ie}function yn(t){const e=fe(t);return e.Ee||(e.Ee=HS(e,Ci(t))),e.Ee}function HS(t,e){if(t.limitType==="F")return jd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Ta(s.field,i)}));const n=t.endAt?new va(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new va(t.startAt.position,t.startAt.inclusive):null;return jd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Cl(t,e,n){return new Za(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ec(t,e){return Pu(yn(t),yn(e))&&t.limitType===e.limitType}function T_(t){return`${Su(yn(t))}|lt:${t.limitType}`}function ms(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>y_(s))).join(", ")}]`),Ja(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Ms(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Ms(s))).join(",")),`Target(${r})`})(yn(t))}; limitType=${t.limitType})`}function tc(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Ci(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=Fd(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,Ci(r),s)||r.endAt&&!(function(o,c,l){const u=Fd(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,Ci(r),s))})(t,e)}function qS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function w_(t){return(e,n)=>{let r=!1;for(const s of Ci(t)){const i=WS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function WS(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Ls(l,u):ce(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ce(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ns(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return i_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=new Be(re.comparator);function qn(){return zS}const I_=new Be(re.comparator);function mi(...t){let e=I_;for(const n of t)e=e.insert(n.key,n);return e}function b_(t){let e=I_;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function $r(){return ki()}function A_(){return ki()}function ki(){return new rs((t=>t.toString()),((t,e)=>t.isEqual(e)))}const KS=new Be(re.comparator),GS=new Je(re.comparator);function _e(...t){let e=GS;for(const n of t)e=e.add(n);return e}const QS=new Je(ge);function YS(){return QS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_a(e)?"-0":e}}function R_(t){return{integerValue:""+t}}function JS(t,e){return IS(e)?R_(e):Cu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(){this._=void 0}}function XS(t,e,n){return t instanceof Yi?(function(s,i){const o={fields:{[c_]:{stringValue:a_},[u_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Au(i)&&(i=Xa(i)),i&&(o.fields[l_]=i),{mapValue:o}})(n,e):t instanceof Ji?P_(t,e):t instanceof Xi?C_(t,e):(function(s,i){const o=S_(s,i),c=Hd(o)+Hd(s.Ae);return Rl(o)&&Rl(s.Ae)?R_(c):Cu(s.serializer,c)})(t,e)}function ZS(t,e,n){return t instanceof Ji?P_(t,e):t instanceof Xi?C_(t,e):n}function S_(t,e){return t instanceof wa?(function(r){return Rl(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Yi extends nc{}class Ji extends nc{constructor(e){super(),this.elements=e}}function P_(t,e){const n=k_(e);for(const r of t.elements)n.some((s=>In(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Xi extends nc{constructor(e){super(),this.elements=e}}function C_(t,e){let n=k_(e);for(const r of t.elements)n=n.filter((s=>!In(s,r)));return{arrayValue:{values:n}}}class wa extends nc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Hd(t){return We(t.integerValue||t.doubleValue)}function k_(t){return Ru(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,n){this.field=e,this.transform=n}}function t0(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Ji&&s instanceof Ji||r instanceof Xi&&s instanceof Xi?xs(r.elements,s.elements,In):r instanceof wa&&s instanceof wa?In(r.Ae,s.Ae):r instanceof Yi&&s instanceof Yi})(t.transform,e.transform)}class n0{constructor(e,n){this.version=e,this.transformResults=n}}class Un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Un}static exists(e){return new Un(void 0,e)}static updateTime(e){return new Un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class rc{}function N_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new O_(t.key,Un.none()):new lo(t.key,t.data,Un.none());{const n=t.data,r=Wt.empty();let s=new Je(lt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ss(t.key,r,new Xt(s.toArray()),Un.none())}}function r0(t,e,n){t instanceof lo?(function(s,i,o){const c=s.value.clone(),l=Wd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof ss?(function(s,i,o){if(!Yo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Wd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(D_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Ni(t,e,n,r){return t instanceof lo?(function(i,o,c,l){if(!Yo(i.precondition,o))return c;const u=i.value.clone(),f=zd(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof ss?(function(i,o,c,l){if(!Yo(i.precondition,o))return c;const u=zd(i.fieldTransforms,l,o),f=o.data;return f.setAll(D_(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,c){return Yo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function s0(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=S_(r.transform,s||null);i!=null&&(n===null&&(n=Wt.empty()),n.set(r.field,i))}return n||null}function qd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&xs(r,s,((i,o)=>t0(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class lo extends rc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ss extends rc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function D_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Wd(t,e,n){const r=new Map;Pe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,ZS(o,c,n[s]))}return r}function zd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,XS(i,o,e))}return r}class O_ extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class i0 extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&r0(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ni(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ni(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=A_();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=N_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ue.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),_e())}isEqual(e){return this.batchId===e.batchId&&xs(this.mutations,e.mutations,((n,r)=>qd(n,r)))&&xs(this.baseMutations,e.baseMutations,((n,r)=>qd(n,r)))}}class ku{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Pe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return KS})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ku(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,Ee;function l0(t){switch(t){case B.OK:return ce(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return ce(15467,{code:t})}}function V_(t){if(t===void 0)return Hn("GRPC error has no .code"),B.UNKNOWN;switch(t){case Ke.OK:return B.OK;case Ke.CANCELLED:return B.CANCELLED;case Ke.UNKNOWN:return B.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return B.INTERNAL;case Ke.UNAVAILABLE:return B.UNAVAILABLE;case Ke.UNAUTHENTICATED:return B.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case Ke.NOT_FOUND:return B.NOT_FOUND;case Ke.ALREADY_EXISTS:return B.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return B.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case Ke.ABORTED:return B.ABORTED;case Ke.OUT_OF_RANGE:return B.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return B.UNIMPLEMENTED;case Ke.DATA_LOSS:return B.DATA_LOSS;default:return ce(39323,{code:t})}}(Ee=Ke||(Ke={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=new pr([4294967295,4294967295],0);function Kd(t){const e=u0().encode(t),n=new Gg;return n.update(e),new Uint8Array(n.digest())}function Gd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new pr([n,r],0),new pr([s,i],0)]}class Nu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new gi(`Invalid padding: ${n}`);if(r<0)throw new gi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new gi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new gi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=pr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(pr.fromNumber(r)));return s.compare(h0)===1&&(s=new pr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Kd(e),[r,s]=Gd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Nu(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const n=Kd(e),[r,s]=Gd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class gi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,uo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new sc(ue.min(),s,new Be(ge),qn(),_e())}}class uo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new uo(r,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class x_{constructor(e,n){this.targetId=e,this.Ce=n}}class L_{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Qd{constructor(){this.ve=0,this.Fe=Yd(),this.Me=ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=_e(),n=_e(),r=_e();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ce(38017,{changeType:i})}})),new uo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Yd()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Pe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class f0{constructor(e){this.Ge=e,this.ze=new Map,this.je=qn(),this.Je=Do(),this.He=Do(),this.Ye=new Be(ge)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ce(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Pl(i))if(r===0){const o=new re(i.path);this.et(n,o,Et.newNoDocument(o,ue.min()))}else Pe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=wr(r).toUint8Array()}catch(l){if(l instanceof o_)return Vs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Nu(o,s,i)}catch(l){return Vs(l instanceof gi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&Pl(c.target)){const l=new re(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Et.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=_e();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new sc(e,n,this.Ye,this.je,r);return this.je=qn(),this.Je=Do(),this.He=Do(),this.Ye=new Be(ge),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Qd,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Je(ge),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Je(ge),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Qd),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Do(){return new Be(re.comparator)}function Yd(){return new Be(re.comparator)}const d0={asc:"ASCENDING",desc:"DESCENDING"},p0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},m0={and:"AND",or:"OR"};class g0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kl(t,e){return t.useProto3Json||Ja(e)?e:{value:e}}function Ia(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function M_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _0(t,e){return Ia(t,e.toTimestamp())}function En(t){return Pe(!!t,49232),ue.fromTimestamp((function(n){const r=Tr(n);return new Me(r.seconds,r.nanos)})(t))}function Du(t,e){return Nl(t,e).canonicalString()}function Nl(t,e){const n=(function(s){return new Le(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function U_(t){const e=Le.fromString(t);return Pe(H_(e),10190,{key:e.toString()}),e}function Dl(t,e){return Du(t.databaseId,e.path)}function Kc(t,e){const n=U_(e);if(n.get(1)!==t.databaseId.projectId)throw new ee(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ee(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(B_(n))}function F_(t,e){return Du(t.databaseId,e)}function y0(t){const e=U_(t);return e.length===4?Le.emptyPath():B_(e)}function Ol(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function B_(t){return Pe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Jd(t,e,n){return{name:Dl(t,e),fields:n.value.mapValue.fields}}function E0(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ce(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Pe(f===void 0||typeof f=="string",58123),ft.fromBase64String(f||"")):(Pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ft.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?B.UNKNOWN:V_(u.code);return new ee(f,u.message||"")})(o);n=new L_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Kc(t,r.document.name),i=En(r.document.updateTime),o=r.document.createTime?En(r.document.createTime):ue.min(),c=new Wt({mapValue:{fields:r.document.fields}}),l=Et.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Jo(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Kc(t,r.document),i=r.readTime?En(r.readTime):ue.min(),o=Et.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Jo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Kc(t,r.document),i=r.removedTargetIds||[];n=new Jo([],i,s,null)}else{if(!("filter"in e))return ce(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new c0(s,i),c=r.targetId;n=new x_(c,o)}}return n}function v0(t,e){let n;if(e instanceof lo)n={update:Jd(t,e.key,e.value)};else if(e instanceof O_)n={delete:Dl(t,e.key)};else if(e instanceof ss)n={update:Jd(t,e.key,e.data),updateMask:C0(e.fieldMask)};else{if(!(e instanceof i0))return ce(16599,{Vt:e.type});n={verify:Dl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof Yi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ji)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Xi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof wa)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw ce(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:_0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce(27497)})(t,e.precondition)),n}function T0(t,e){return t&&t.length>0?(Pe(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?En(s.updateTime):En(i);return o.isEqual(ue.min())&&(o=En(i)),new n0(o,s.transformResults||[])})(n,e)))):[]}function w0(t,e){return{documents:[F_(t,e.path)]}}function I0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=F_(t,s);const i=(function(u){if(u.length!==0)return $_(bn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:gs(m.field),direction:R0(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=kl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function b0(t){let e=y0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Pe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=j_(p);return m instanceof bn&&g_(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(C){return new Ta(_s(C.field),(function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(m)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,Ja(m)?null:m})(n.limit));let l=null;n.startAt&&(l=(function(p){const m=!!p.before,_=p.values||[];return new va(_,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,_=p.values||[];return new va(_,m)})(n.endAt)),jS(e,s,o,i,c,"F",l,u)}function A0(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function j_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_s(n.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=_s(n.unaryFilter.field);return Ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=_s(n.unaryFilter.field);return Ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_s(n.unaryFilter.field);return Ye.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ce(61313);default:return ce(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Ye.create(_s(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ce(58110);default:return ce(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return bn.create(n.compositeFilter.filters.map((r=>j_(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce(1026)}})(n.compositeFilter.op))})(t):ce(30097,{filter:t})}function R0(t){return d0[t]}function S0(t){return p0[t]}function P0(t){return m0[t]}function gs(t){return{fieldPath:t.canonicalString()}}function _s(t){return lt.fromServerFormat(t.fieldPath)}function $_(t){return t instanceof Ye?(function(n){if(n.op==="=="){if(Ud(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NAN"}};if(Md(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ud(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NOT_NAN"}};if(Md(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gs(n.field),op:S0(n.op),value:n.value}}})(t):t instanceof bn?(function(n){const r=n.getFilters().map((s=>$_(s)));return r.length===1?r[0]:{compositeFilter:{op:P0(n.op),filters:r}}})(t):ce(54877,{filter:t})}function C0(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function H_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n,r,s,i=ue.min(),o=ue.min(),c=ft.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e){this.yt=e}}function N0(t){const e=b0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Cl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(){this.Cn=new O0}addToCollectionParentIndex(e,n){return this.Cn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(vr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(vr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class O0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Je(Le.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Je(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},q_=41943040;class Nt{static withCacheSize(e){return new Nt(e,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(q_,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Us(0)}static cr(){return new Us(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="LruGarbageCollector",V0=1048576;function ep([t,e],[n,r]){const s=ge(t,n);return s===0?ge(e,r):s}class x0{constructor(e){this.Ir=e,this.buffer=new Je(ep),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ep(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class L0{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){X(Zd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){qs(n)?X(Zd,"Ignoring IndexedDB error during garbage collection: ",n):await Hs(n)}await this.Vr(3e5)}))}}class M0{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Ya.ce);const r=new x0(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Xd)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xd):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),ps()<=me.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function U0(t,e){return new M0(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(){this.changes=new rs((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Ni(r.mutation,s,Xt.empty(),Me.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,_e()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=_e()){const s=$r();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=mi();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=$r();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,_e())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=qn();const o=ki(),c=(function(){return ki()})();return n.forEach(((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof ss)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Ni(f.mutation,u,f.mutation.getFieldMask(),Me.now())):o.set(u.key,Xt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>c.set(u,new B0(f,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,n){const r=ki();let s=new Be(((o,c)=>o-c)),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Xt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||_e()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=A_();f.forEach((m=>{if(!i.has(m)){const _=N_(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return M.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$S(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve($r());let c=zi,l=i;return o.next((u=>M.forEach(u,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,_e()))).next((f=>({batchId:c,changes:b_(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next((r=>{let s=mi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=mi();return this.indexManager.getCollectionParents(e,i).next((c=>M.forEach(c,(l=>{const u=(function(p,m){return new Za(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Et.newInvalidDocument(f)))}));let c=mi();return o.forEach(((l,u)=>{const f=i.get(l);f!==void 0&&Ni(f.mutation,u,Xt.empty(),Me.now()),tc(n,u)&&(c=c.insert(l,u))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return M.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:En(s.createTime)}})(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:N0(s.bundledQuery),readTime:En(s.readTime)}})(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(){this.overlays=new Be(re.comparator),this.qr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$r();return M.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=$r(),i=n.length+1,o=new re(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=$r(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=$r(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=s)););return M.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new a0(n,r));let i=this.qr.get(n);i===void 0&&(i=_e(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(){this.Qr=new Je(et.$r),this.Ur=new Je(et.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new et(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new et(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new re(new Le([])),r=new et(n,e),s=new et(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new re(new Le([])),r=new et(n,e),s=new et(n,e+1);let i=_e();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new et(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return re.comparator(e.key,n.key)||ge(e.Yr,n.Yr)}static Kr(e,n){return ge(e.Yr,n.Yr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Je(et.$r)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new o0(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new et(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?bu:this.tr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),s=new et(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const c=this.Xr(o.Yr);i.push(c)})),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(ge);return n.forEach((s=>{const i=new et(s,0),o=new et(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(c=>{r=r.add(c.Yr)}))})),M.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new et(new re(i),0);let c=new Je(ge);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)}),o),M.resolve(this.ti(c))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Pe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return M.forEach(n.mutations,(s=>{const i=new et(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new et(n,0),s=this.Zr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.ri=e,this.docs=(function(){return new Be(re.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=qn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Et.newInvalidDocument(s))})),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=qn();const o=n.path,c=new re(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||ES(yS(f),r)<=0||(s.has(f.key)||tc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ce(9500)}ii(e,n){return M.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new K0(this)}getSize(e){return M.resolve(this.size)}}class K0 extends F0{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),M.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e){this.persistence=e,this.si=new rs((n=>Su(n)),Pu),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.oi=0,this._i=new Ou,this.targetCount=0,this.ai=Us.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),M.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Us(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Pr(n),M.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),M.waitFor(i).next((()=>s))}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,n){this.ui={},this.overlays={},this.ci=new Ya(0),this.li=!1,this.li=!0,this.hi=new q0,this.referenceDelegate=e(this),this.Pi=new G0(this),this.indexManager=new D0,this.remoteDocumentCache=(function(s){return new z0(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new k0(n),this.Ii=new $0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new H0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new W0(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new Q0(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return M.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class Q0 extends TS{constructor(e){super(),this.currentSequenceNumber=e}}class Vu{constructor(e){this.persistence=e,this.Ri=new Ou,this.Vi=null}static mi(e){return new Vu(e)}get fi(){if(this.Vi)return this.Vi;throw ce(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.fi,(r=>{const s=re.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,ue.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class ba{constructor(e,n){this.persistence=e,this.pi=new rs((r=>bS(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=U0(this,n)}static mi(e,n){return new ba(e,n)}Ei(){}di(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return M.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?M.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((c=>{c||(r++,i.removeEntry(o,ue.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Go(e.data.value)),n}br(e,n,r){return M.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new xu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return dI()?8:wS(wt())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new Y0;return this.Ss(e,n,o).next((c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(ps()<=me.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",ms(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),M.resolve()):(ps()<=me.DEBUG&&X("QueryEngine","Query:",ms(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(ps()<=me.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",ms(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yn(n))):M.resolve())}ys(e,n){if($d(n))return M.resolve(null);let r=yn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Cl(n,null,"F"),r=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=_e(...i);return this.ps.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.Ds(n,c);return this.Cs(n,u,o,l.readTime)?this.ys(e,Cl(n,null,"F")):this.vs(e,u,n,l)}))))})))))}ws(e,n,r,s){return $d(n)||s.isEqual(ue.min())?M.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?M.resolve(null):(ps()<=me.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ms(n)),this.vs(e,o,n,_S(s,zi)).next((c=>c)))}))}Ds(e,n){let r=new Je(w_(e));return n.forEach(((s,i)=>{tc(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return ps()<=me.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",ms(n)),this.ps.getDocumentsMatchingQuery(e,n,vr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="LocalStore",X0=3e8;class Z0{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Be(ge),this.xs=new rs((i=>Su(i)),Pu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new j0(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function eP(t,e,n,r){return new Z0(t,e,n,r)}async function z_(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=_e();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function tP(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const p=u.batch,m=p.keys();let _=M.resolve();return m.forEach((C=>{_=_.next((()=>f.getEntry(l,C))).next((D=>{const O=u.docVersions.get(C);Pe(O!==null,48541),D.version.compareTo(O)<0&&(p.applyToRemoteDocument(D,u),D.isValidDocument()&&(D.setReadTime(u.commitVersion),f.addEntry(D)))}))})),_.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=_e();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function K_(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function nP(t,e){const n=fe(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(ft.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),(function(D,O,j){return D.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=X0?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0})(m,_,f)&&c.push(n.Pi.updateTargetData(i,_))}));let l=qn(),u=_e();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(rP(i,o,e.documentUpdates).next((f=>{l=f.ks,u=f.qs}))),!r.isEqual(ue.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return M.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.Ms=s,i)))}function rP(t,e,n){let r=_e(),s=_e();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=qn();return n.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ue.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X(Lu,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:s}}))}function sP(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=bu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function iP(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,M.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new ur(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function Vl(t,e,n){const r=fe(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!qs(o))throw o;X(Lu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function tp(t,e,n){const r=fe(t);let s=ue.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const p=fe(l),m=p.xs.get(f);return m!==void 0?M.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)})(r,o,yn(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:ue.min(),n?i:_e()))).next((c=>(oP(r,qS(e),c),{documents:c,Qs:i})))))}function oP(t,e,n){let r=t.Os.get(e)||ue.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class np{constructor(){this.activeTargetIds=YS()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aP{constructor(){this.Mo=new np,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new np,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="ConnectivityMonitor";class sp{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){X(rp,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){X(rp,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo=null;function xl(){return Oo===null?Oo=(function(){return 268435456+Math.round(2147483648*Math.random())})():Oo++,"0x"+Oo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="RestConnection",lP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class uP{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ya?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=xl(),c=this.zo(e,n.toUriEncodedString());X(Gc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(c),f=Sr(u);return this.Jo(e,c,l,r,f).then((p=>(X(Gc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Vs(Gc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+$s})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=lP[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class fP extends uP{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=xl();return new Promise(((c,l)=>{const u=new Qg;u.setWithCredentials(!0),u.listenOnce(Yg.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Ko.NO_ERROR:const p=u.getResponseJson();X(gt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Ko.TIMEOUT:X(gt,`RPC '${e}' ${o} timed out`),l(new ee(B.DEADLINE_EXCEEDED,"Request time out"));break;case Ko.HTTP_ERROR:const m=u.getStatus();if(X(gt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const C=_?.error;if(C&&C.status&&C.message){const D=(function(j){const F=j.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(F)>=0?F:B.UNKNOWN})(C.status);l(new ee(D,C.message))}else l(new ee(B.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new ee(B.UNAVAILABLE,"Connection failed."));break;default:ce(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{X(gt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);X(gt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=xl(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Zg(),c=Xg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");X(gt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let m=!1,_=!1;const C=new hP({Yo:O=>{_?X(gt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(m||(X(gt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),X(gt,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},Zo:()=>p.close()}),D=(O,j,F)=>{O.listen(j,($=>{try{F($)}catch(z){setTimeout((()=>{throw z}),0)}}))};return D(p,pi.EventType.OPEN,(()=>{_||(X(gt,`RPC '${e}' stream ${s} transport opened.`),C.o_())})),D(p,pi.EventType.CLOSE,(()=>{_||(_=!0,X(gt,`RPC '${e}' stream ${s} transport closed`),C.a_(),this.E_(p))})),D(p,pi.EventType.ERROR,(O=>{_||(_=!0,Vs(gt,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),C.a_(new ee(B.UNAVAILABLE,"The operation could not be completed")))})),D(p,pi.EventType.MESSAGE,(O=>{if(!_){const j=O.data[0];Pe(!!j,16349);const F=j,$=F?.error||F[0]?.error;if($){X(gt,`RPC '${e}' stream ${s} received error:`,$);const z=$.status;let te=(function(v){const y=Ke[v];if(y!==void 0)return V_(y)})(z),oe=$.message;te===void 0&&(te=B.INTERNAL,oe="Unknown error status: "+z+" with message "+$.message),_=!0,C.a_(new ee(te,oe)),p.close()}else X(gt,`RPC '${e}' stream ${s} received:`,j),C.u_(j)}})),D(c,Jg.STAT_EVENT,(O=>{O.stat===Il.PROXY?X(gt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Il.NOPROXY&&X(gt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.__()}),0),C}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function Qc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(t){return new g0(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="PersistentStream";class Q_{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new G_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(Hn(n.toString()),Hn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new ee(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return X(ip,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(X(ip,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class dP extends Q_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=E0(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ue.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?En(o.readTime):ue.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Ol(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=Pl(l)?{documents:w0(i,l)}:{query:I0(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=M_(i,o.resumeToken);const u=kl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(ue.min())>0){c.readTime=Ia(i,o.snapshotVersion.toTimestamp());const u=kl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=A0(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Ol(this.serializer),n.removeTarget=e,this.q_(n)}}class pP extends Q_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=T0(e.writeResults,e.commitTime),r=En(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Ol(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>v0(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{}class gP extends mP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new ee(B.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,Nl(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ee(B.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Ho(e,Nl(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee(B.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class _P{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Hn(n),this.aa=!1):X("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="RemoteStore";class yP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{is(this)&&(X(Jr,"Restarting streams for network reachability change."),await(async function(l){const u=fe(l);u.Ea.add(4),await ho(u),u.Ra.set("Unknown"),u.Ea.delete(4),await oc(u)})(this))}))})),this.Ra=new _P(r,s)}}async function oc(t){if(is(t))for(const e of t.da)await e(!0)}async function ho(t){for(const e of t.da)await e(!1)}function Y_(t,e){const n=fe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Bu(n)?Fu(n):Ws(n).O_()&&Uu(n,e))}function Mu(t,e){const n=fe(t),r=Ws(n);n.Ia.delete(e),r.O_()&&J_(n,e),n.Ia.size===0&&(r.O_()?r.L_():is(n)&&n.Ra.set("Unknown"))}function Uu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ws(t).Y_(e)}function J_(t,e){t.Va.Ue(e),Ws(t).Z_(e)}function Fu(t){t.Va=new f0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ws(t).start(),t.Ra.ua()}function Bu(t){return is(t)&&!Ws(t).x_()&&t.Ia.size>0}function is(t){return fe(t).Ea.size===0}function X_(t){t.Va=void 0}async function EP(t){t.Ra.set("Online")}async function vP(t){t.Ia.forEach(((e,n)=>{Uu(t,e)}))}async function TP(t,e){X_(t),Bu(t)?(t.Ra.ha(e),Fu(t)):t.Ra.set("Unknown")}async function wP(t,e,n){if(t.Ra.set("Online"),e instanceof L_&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))})(t,e)}catch(r){X(Jr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Aa(t,r)}else if(e instanceof Jo?t.Va.Ze(e):e instanceof x_?t.Va.st(e):t.Va.tt(e),!n.isEqual(ue.min()))try{const r=await K_(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(ft.EMPTY_BYTE_STRING,f.snapshotVersion)),J_(i,l);const p=new ur(f.target,l,u,f.sequenceNumber);Uu(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){X(Jr,"Failed to raise snapshot:",r),await Aa(t,r)}}async function Aa(t,e,n){if(!qs(e))throw e;t.Ea.add(1),await ho(t),t.Ra.set("Offline"),n||(n=()=>K_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{X(Jr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await oc(t)}))}function Z_(t,e){return e().catch((n=>Aa(t,n,e)))}async function ac(t){const e=fe(t),n=br(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:bu;for(;IP(e);)try{const s=await sP(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,bP(e,s)}catch(s){await Aa(e,s)}ey(e)&&ty(e)}function IP(t){return is(t)&&t.Ta.length<10}function bP(t,e){t.Ta.push(e);const n=br(t);n.O_()&&n.X_&&n.ea(e.mutations)}function ey(t){return is(t)&&!br(t).x_()&&t.Ta.length>0}function ty(t){br(t).start()}async function AP(t){br(t).ra()}async function RP(t){const e=br(t);for(const n of t.Ta)e.ea(n.mutations)}async function SP(t,e,n){const r=t.Ta.shift(),s=ku.from(r,e,n);await Z_(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await ac(t)}async function PP(t,e){e&&br(t).X_&&await(async function(r,s){if((function(o){return l0(o)&&o!==B.ABORTED})(s.code)){const i=r.Ta.shift();br(r).B_(),await Z_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await ac(r)}})(t,e),ey(t)&&ty(t)}async function op(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),X(Jr,"RemoteStore received new credentials");const r=is(n);n.Ea.add(3),await ho(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await oc(n)}async function CP(t,e){const n=fe(t);e?(n.Ea.delete(2),await oc(n)):e||(n.Ea.add(2),await ho(n),n.Ra.set("Unknown"))}function Ws(t){return t.ma||(t.ma=(function(n,r,s){const i=fe(n);return i.sa(),new dP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:EP.bind(null,t),t_:vP.bind(null,t),r_:TP.bind(null,t),H_:wP.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Bu(t)?Fu(t):t.Ra.set("Unknown")):(await t.ma.stop(),X_(t))}))),t.ma}function br(t){return t.fa||(t.fa=(function(n,r,s){const i=fe(n);return i.sa(),new pP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:AP.bind(null,t),r_:PP.bind(null,t),ta:RP.bind(null,t),na:SP.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await ac(t)):(await t.fa.stop(),t.Ta.length>0&&(X(Jr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new ju(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $u(t,e){if(Hn("AsyncQueue",`${e}: ${t}`),qs(t))return new ee(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{static emptySet(e){return new Ps(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=mi(),this.sortedSet=new Be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ps)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ps;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(){this.ga=new Be(re.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ce(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Fs{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new Fs(e,n,Ps.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ec(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class NP{constructor(){this.queries=cp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=fe(n),i=s.queries;s.queries=cp(),i.forEach(((o,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new ee(B.ABORTED,"Firestore shutting down"))}}function cp(){return new rs((t=>T_(t)),ec)}async function DP(t,e){const n=fe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new kP,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=$u(o,`Initialization of query '${ms(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Hu(n)}async function OP(t,e){const n=fe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function VP(t,e){const n=fe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&Hu(n)}function xP(t,e,n){const r=fe(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Hu(t){t.Ca.forEach((e=>{e.next()}))}var Ll,lp;(lp=Ll||(Ll={})).Ma="default",lp.Cache="cache";class LP{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Fs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ll.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e){this.key=e}}class ry{constructor(e){this.key=e}}class MP{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=_e(),this.mutatedKeys=_e(),this.eu=w_(e),this.tu=new Ps(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new ap,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),_=tc(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),D=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let O=!1;m&&_?m.data.isEqual(_.data)?C!==D&&(r.track({type:3,doc:_}),O=!0):this.su(m,_)||(r.track({type:2,doc:_}),O=!0,(l&&this.eu(_,l)>0||u&&this.eu(_,u)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),O=!0):m&&!_&&(r.track({type:1,doc:m}),O=!0,(l||u)&&(c=!0)),O&&(_?(o=o.add(_),i=D?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(_,C){const D=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce(20277,{Rt:O})}};return D(_)-D(C)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Fs(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ap,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=_e(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new ry(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new ny(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=_e();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Fs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const qu="SyncEngine";class UP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class FP{constructor(e){this.key=e,this.hu=!1}}class BP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new rs((c=>T_(c)),ec),this.Iu=new Map,this.Eu=new Set,this.du=new Be(re.comparator),this.Au=new Map,this.Ru=new Ou,this.Vu={},this.mu=new Map,this.fu=Us.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function jP(t,e,n=!0){const r=ly(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await sy(r,e,n,!0),s}async function $P(t,e){const n=ly(t);await sy(n,e,!0,!1)}async function sy(t,e,n,r){const s=await iP(t.localStore,yn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await HP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Y_(t.remoteStore,s),c}async function HP(t,e,n,r,s){t.pu=(p,m,_)=>(async function(D,O,j,F){let $=O.view.ru(j);$.Cs&&($=await tp(D.localStore,O.query,!1).then((({documents:A})=>O.view.ru(A,$))));const z=F&&F.targetChanges.get(O.targetId),te=F&&F.targetMismatches.get(O.targetId)!=null,oe=O.view.applyChanges($,D.isPrimaryClient,z,te);return hp(D,O.targetId,oe.au),oe.snapshot})(t,p,m,_);const i=await tp(t.localStore,e,!0),o=new MP(e,i.Qs),c=o.ru(i.documents),l=uo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);hp(t,n,u.au);const f=new UP(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function qP(t,e,n){const r=fe(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!ec(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Vl(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Mu(r.remoteStore,s.targetId),Ml(r,s.targetId)})).catch(Hs)):(Ml(r,s.targetId),await Vl(r.localStore,s.targetId,!0))}async function WP(t,e){const n=fe(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Mu(n.remoteStore,r.targetId))}async function zP(t,e,n){const r=ZP(t);try{const s=await(function(o,c){const l=fe(o),u=Me.now(),f=c.reduce(((_,C)=>_.add(C.key)),_e());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let C=qn(),D=_e();return l.Ns.getEntries(_,f).next((O=>{C=O,C.forEach(((j,F)=>{F.isValidDocument()||(D=D.add(j))}))})).next((()=>l.localDocuments.getOverlayedDocuments(_,C))).next((O=>{p=O;const j=[];for(const F of c){const $=s0(F,p.get(F.key).overlayedDocument);$!=null&&j.push(new ss(F.key,$,d_($.value.mapValue),Un.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,j,c)})).next((O=>{m=O;const j=O.applyToLocalDocumentSet(p,D);return l.documentOverlayCache.saveOverlays(_,O.batchId,j)}))})).then((()=>({batchId:m.batchId,changes:b_(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new Be(ge)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,n),await fo(r,s.changes),await ac(r.remoteStore)}catch(s){const i=$u(s,"Failed to persist write");n.reject(i)}}async function iy(t,e){const n=fe(t);try{const r=await nP(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(Pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Pe(o.hu,14607):s.removedDocuments.size>0&&(Pe(o.hu,42227),o.hu=!1))})),await fo(n,r,e)}catch(r){await Hs(r)}}function up(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=fe(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(c)&&(u=!0)})),u&&Hu(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function KP(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Be(re.comparator);o=o.insert(i,Et.newNoDocument(i,ue.min()));const c=_e().add(i),l=new sc(ue.min(),new Map,new Be(ge),o,c);await iy(r,l),r.du=r.du.remove(i),r.Au.delete(e),Wu(r)}else await Vl(r.localStore,e,!1).then((()=>Ml(r,e,n))).catch(Hs)}async function GP(t,e){const n=fe(t),r=e.batch.batchId;try{const s=await tP(n.localStore,e);ay(n,r,null),oy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fo(n,s)}catch(s){await Hs(s)}}async function QP(t,e,n){const r=fe(t);try{const s=await(function(o,c){const l=fe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(Pe(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);ay(r,e,n),oy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await fo(r,s)}catch(s){await Hs(s)}}function oy(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function ay(t,e,n){const r=fe(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Ml(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||cy(t,r)}))}function cy(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Mu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Wu(t))}function hp(t,e,n){for(const r of n)r instanceof ny?(t.Ru.addReference(r.key,e),YP(t,r)):r instanceof ry?(X(qu,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||cy(t,r.key)):ce(19791,{wu:r})}function YP(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(X(qu,"New document in limbo: "+n),t.Eu.add(r),Wu(t))}function Wu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new re(Le.fromString(e)),r=t.fu.next();t.Au.set(r,new FP(n)),t.du=t.du.insert(n,r),Y_(t.remoteStore,new ur(yn(v_(n.path)),r,"TargetPurposeLimboResolution",Ya.ce))}}async function fo(t,e,n){const r=fe(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,n).then((u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=xu.As(l.targetId,u);i.push(f)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(l,u){const f=fe(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>M.forEach(u,(m=>M.forEach(m.Es,(_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_))).next((()=>M.forEach(m.ds,(_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))))))}catch(p){if(!qs(p))throw p;X(Lu,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=f.Ms.get(m),C=_.snapshotVersion,D=_.withLastLimboFreeSnapshotVersion(C);f.Ms=f.Ms.insert(m,D)}}})(r.localStore,i))}async function JP(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){X(qu,"User change. New user:",e.toKey());const r=await z_(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new ee(B.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fo(n,r.Ls)}}function XP(t,e){const n=fe(t),r=n.Au.get(e);if(r&&r.hu)return _e().add(r.key);{let s=_e();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function ly(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=iy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KP.bind(null,e),e.Pu.H_=VP.bind(null,e.eventManager),e.Pu.yu=xP.bind(null,e.eventManager),e}function ZP(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QP.bind(null,e),e}class Ra{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ic(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return eP(this.persistence,new J0,e.initialUser,this.serializer)}Cu(e){return new W_(Vu.mi,this.serializer)}Du(e){return new aP}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ra.provider={build:()=>new Ra};class eC extends Ra{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Pe(this.persistence.referenceDelegate instanceof ba,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new L0(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new W_((r=>ba.mi(r,n)),this.serializer)}}class Ul{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>up(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=JP.bind(null,this.syncEngine),await CP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new NP})()}createDatastore(e){const n=ic(e.databaseInfo.databaseId),r=(function(i){return new fP(i)})(e.databaseInfo);return(function(i,o,c,l){return new gP(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new yP(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>up(this.syncEngine,n,0)),(function(){return sp.v()?new sp:new cP})())}createSyncEngine(e,n){return(function(s,i,o,c,l,u,f){const p=new BP(s,i,o,c,l,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=fe(n);X(Jr,"RemoteStore shutting down."),r.Ea.add(5),await ho(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ul.provider={build:()=>new Ul};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Hn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="FirestoreClient";class nC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=wu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{X(Ar,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(X(Ar,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=$u(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Yc(t,e){t.asyncQueue.verifyOperationInProgress(),X(Ar,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await z_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function fp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rC(t);X(Ar,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>op(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>op(e.remoteStore,s))),t._onlineComponents=e}async function rC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(Ar,"Using user provided OfflineComponentProvider");try{await Yc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Vs("Error using user provided cache. Falling back to memory cache: "+n),await Yc(t,new Ra)}}else X(Ar,"Using default OfflineComponentProvider"),await Yc(t,new eC(void 0));return t._offlineComponents}async function uy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(Ar,"Using user provided OnlineComponentProvider"),await fp(t,t._uninitializedComponentsProvider._online)):(X(Ar,"Using default OnlineComponentProvider"),await fp(t,new Ul))),t._onlineComponents}function sC(t){return uy(t).then((e=>e.syncEngine))}async function iC(t){const e=await uy(t),n=e.eventManager;return n.onListen=jP.bind(null,e.syncEngine),n.onUnlisten=qP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$P.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=WP.bind(null,e.syncEngine),n}function oC(t,e,n={}){const r=new mr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new tC({next:m=>{f.Nu(),o.enqueueAndForget((()=>OP(i,p))),m.fromCache&&l.source==="server"?u.reject(new ee(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new LP(c,f,{includeMetadataChanges:!0,qa:!0});return DP(i,p)})(await iC(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy="firestore.googleapis.com",pp=!0;class mp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fy,this.ssl=pp}else this.host=e.host,this.ssl=e.ssl??pp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=q_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<V0)throw new ee(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hy(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ee(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ee(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ee(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new oS;switch(r.type){case"firstParty":return new uS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=dp.get(n);r&&(X("ComponentProvider","Removing Datastore"),dp.delete(n),r.terminate())})(this),Promise.resolve()}}function aC(t,e,n,r={}){t=ga(t,cc);const s=Sr(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(au(`https://${c}`),cu("Firestore",!0)),i.host!==fy&&i.host!==c&&Vs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Wr(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=_t.MOCK_USER;else{u=og(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new ee(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new _t(p)}t._authCredentials=new aS(new t_(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lc(this.firestore,e,this._query)}}class ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ut(this.firestore,e,this._key)}toJSON(){return{type:ut._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(co(n,ut._jsonSchema))return new ut(e,r||null,new re(Le.fromString(n.referencePath)))}}ut._jsonSchemaVersion="firestore/documentReference/1.0",ut._jsonSchema={type:Ge("string",ut._jsonSchemaVersion),referencePath:Ge("string")};class gr extends lc{constructor(e,n,r){super(e,n,v_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ut(this.firestore,null,new re(e))}withConverter(e){return new gr(this.firestore,e,this._path)}}function Fl(t,e,...n){if(t=st(t),n_("collection","path",e),t instanceof cc){const r=Le.fromString(e,...n);return Cd(r),new gr(t,null,r)}{if(!(t instanceof ut||t instanceof gr))throw new ee(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return Cd(r),new gr(t.firestore,null,r)}}function cC(t,e,...n){if(t=st(t),arguments.length===1&&(e=wu.newId()),n_("doc","path",e),t instanceof cc){const r=Le.fromString(e,...n);return Pd(r),new ut(t,null,new re(r))}{if(!(t instanceof ut||t instanceof gr))throw new ee(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return Pd(r),new ut(t.firestore,t instanceof gr?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp="AsyncQueue";class _p{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new G_(this,"async_queue_retry"),this._c=()=>{const r=Qc();r&&X(gp,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Qc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Qc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new mr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!qs(e))throw e;X(gp,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Hn("INTERNAL UNHANDLED ERROR: ",yp(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=ju.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&ce(47125,{Pc:yp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function yp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class zu extends cc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new _p,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _p(e),this._firestoreClient=void 0,await e}}}function Ku(t,e){const n=typeof t=="object"?t:Kr(),r=typeof t=="string"?t:ya,s=za(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=rg("firestore");i&&aC(s,...i)}return s}function dy(t){if(t._terminated)throw new ee(B.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||lC(t),t._firestoreClient}function lC(t){const e=t._freezeSettings(),n=(function(s,i,o,c){return new SS(s,i,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,hy(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new nC(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zt(ft.fromBase64String(e))}catch(n){throw new ee(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zt(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:zt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(co(e,zt._jsonSchema))return zt.fromBase64String(e.bytes)}}zt._jsonSchemaVersion="firestore/bytes/1.0",zt._jsonSchema={type:Ge("string",zt._jsonSchemaVersion),bytes:Ge("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ee(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ee(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ee(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:vn._jsonSchemaVersion}}static fromJSON(e){if(co(e,vn._jsonSchema))return new vn(e.latitude,e.longitude)}}vn._jsonSchemaVersion="firestore/geoPoint/1.0",vn._jsonSchema={type:Ge("string",vn._jsonSchemaVersion),latitude:Ge("number"),longitude:Ge("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Tn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(co(e,Tn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Tn(e.vectorValues);throw new ee(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Tn._jsonSchemaVersion="firestore/vectorValue/1.0",Tn._jsonSchema={type:Ge("string",Tn._jsonSchemaVersion),vectorValues:Ge("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=/^__.*__$/;class hC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new lo(e,this.data,n,this.fieldTransforms)}}function py(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce(40011,{Ac:t})}}class Yu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Yu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Sa(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(py(this.Ac)&&uC.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class fC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ic(e)}Cc(e,n,r,s=!1){return new Yu({Ac:e,methodName:n,Dc:r,path:lt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dC(t){const e=t._freezeSettings(),n=ic(t._databaseId);return new fC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pC(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);yy("Data must be an object, but it was:",o,r);const c=gy(r,o);let l,u;if(i.merge)l=new Xt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=mC(e,p,n);if(!o.contains(m))throw new ee(B.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);_C(f,m)||f.push(m)}l=new Xt(f),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new hC(new Wt(c),l,u)}class Ju extends Qu{_toFieldTransform(e){return new e0(e.path,new Yi)}isEqual(e){return e instanceof Ju}}function my(t,e){if(_y(t=st(t)))return yy("Unsupported field value:",e,t),gy(t,e);if(t instanceof Qu)return(function(r,s){if(!py(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=my(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=st(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return JS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Me.fromDate(r);return{timestampValue:Ia(s.serializer,i)}}if(r instanceof Me){const i=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ia(s.serializer,i)}}if(r instanceof vn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zt)return{bytesValue:M_(s.serializer,r._byteString)};if(r instanceof ut){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Du(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Tn)return(function(o,c){return{mapValue:{fields:{[h_]:{stringValue:f_},[Ea]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return Cu(c.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${Iu(r)}`)})(t,e)}function gy(t,e){const n={};return i_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ns(t,((r,s)=>{const i=my(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function _y(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof vn||t instanceof zt||t instanceof ut||t instanceof Qu||t instanceof Tn)}function yy(t,e,n){if(!_y(n)||!r_(n)){const r=Iu(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function mC(t,e,n){if((e=st(e))instanceof Gu)return e._internalPath;if(typeof e=="string")return Ey(t,e);throw Sa("Field path arguments must be of type string or ",t,!1,void 0,n)}const gC=new RegExp("[~\\*/\\[\\]]");function Ey(t,e,n){if(e.search(gC)>=0)throw Sa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gu(...e.split("."))._internalPath}catch{throw Sa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ee(B.INVALID_ARGUMENT,c+t+l)}function _C(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ty("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yC extends vy{data(){return super.data()}}function Ty(t,e){return typeof e=="string"?Ey(t,e):e instanceof Gu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ee(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vC{convertValue(e,n="none"){switch(Ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ce(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ns(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[Ea].arrayValue?.values?.map((r=>We(r.doubleValue)));return new Tn(n)}convertGeoPoint(e){return new vn(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Xa(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ki(e));default:return null}}convertTimestamp(e){const n=Tr(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);Pe(H_(r),9688,{name:e});const s=new Gi(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||Hn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Vo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cs extends vy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Xo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ty("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Cs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Cs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Cs._jsonSchema={type:Ge("string",Cs._jsonSchemaVersion),bundleSource:Ge("string","DocumentSnapshot"),bundleName:Ge("string"),bundle:Ge("string")};class Xo extends Cs{data(e={}){return super.data(e)}}class ks{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Vo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Xo(this._firestore,this._userDataWriter,r.key,r,new Vo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new Xo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Vo(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new Xo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Vo(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:wC(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ks._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=wu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function wC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce(61501,{type:t})}}ks._jsonSchemaVersion="firestore/querySnapshot/1.0",ks._jsonSchema={type:Ge("string",ks._jsonSchemaVersion),bundleSource:Ge("string","QuerySnapshot"),bundleName:Ge("string"),bundle:Ge("string")};class IC extends vC{constructor(e){super(),this.firestore=e}convertBytes(e){return new zt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,n)}}function wy(t){t=ga(t,lc);const e=ga(t.firestore,zu),n=dy(e),r=new IC(e);return EC(t._query),oC(n,t._query).then((s=>new ks(e,r,t,s)))}function bC(t,e){const n=ga(t.firestore,zu),r=cC(t),s=TC(t.converter,e);return AC(n,[pC(dC(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Un.exists(!1))]).then((()=>r))}function AC(t,e){return(function(r,s){const i=new mr;return r.asyncQueue.enqueueAndForget((async()=>zP(await sC(r),s,i))),i.promise})(dy(t),e)}function RC(){return new Ju("serverTimestamp")}(function(e,n=!0){(function(s){$s=s})(es),zr(new Er("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new zu(new cS(r.getProvider("auth-internal")),new hS(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ee(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gi(u.options.projectId,f)})(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),mn(bd,Ad,e),mn(bd,Ad,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="firebasestorage.googleapis.com",by="storageBucket",SC=120*1e3,PC=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends An{constructor(e,n,r=0){super(Jc(e),`Firebase Storage: ${n} (${Jc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,He.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Jc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var $e;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})($e||($e={}));function Jc(t){return"storage/"+t}function Xu(){const t="An unknown error occurred, please check the error payload for server response.";return new He($e.UNKNOWN,t)}function CC(t){return new He($e.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function kC(t){return new He($e.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function NC(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new He($e.UNAUTHENTICATED,t)}function DC(){return new He($e.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function OC(t){return new He($e.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function VC(){return new He($e.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xC(){return new He($e.CANCELED,"User canceled the upload/download.")}function LC(t){return new He($e.INVALID_URL,"Invalid URL '"+t+"'.")}function MC(t){return new He($e.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function UC(){return new He($e.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+by+"' property when initializing the app?")}function FC(){return new He($e.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function BC(){return new He($e.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function jC(t){return new He($e.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Bl(t){return new He($e.INVALID_ARGUMENT,t)}function Ay(){return new He($e.APP_DELETED,"The Firebase app was deleted.")}function $C(t){return new He($e.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Di(t,e){return new He($e.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ui(t){throw new He($e.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Bt.makeFromUrl(e,n)}catch{return new Bt(e,"")}if(r.path==="")return r;throw MC(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(z){z.path.charAt(z.path.length-1)==="/"&&(z.path_=z.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(z){z.path_=decodeURIComponent(z.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${f}/b/${s}/o${m}`,"i"),C={bucket:1,path:3},D=n===Iy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",j=new RegExp(`^https?://${D}/${s}/${O}`,"i"),$=[{regex:c,indices:l,postModify:i},{regex:_,indices:C,postModify:u},{regex:j,indices:{bucket:1,path:2},postModify:u}];for(let z=0;z<$.length;z++){const te=$[z],oe=te.regex.exec(e);if(oe){const A=oe[te.indices.bucket];let v=oe[te.indices.path];v||(v=""),r=new Bt(A,v),te.postModify(r);break}}if(r==null)throw LC(e);return r}}class HC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function f(...O){u||(u=!0,e.apply(null,O))}function p(O){s=setTimeout(()=>{s=null,t(_,l())},O)}function m(){i&&clearTimeout(i)}function _(O,...j){if(u){m();return}if(O){m(),f.call(null,O,...j);return}if(l()||o){m(),f.call(null,O,...j);return}r<64&&(r*=2);let $;c===1?(c=2,$=0):$=(r+Math.random())*1e3,p($)}let C=!1;function D(O){C||(C=!0,m(),!u&&(s!==null?(O||(c=2),clearTimeout(s),p(0)):O||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,D(!0)},n),D}function WC(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zC(t){return t!==void 0}function KC(t){return typeof t=="object"&&!Array.isArray(t)}function Zu(t){return typeof t=="string"||t instanceof String}function Ep(t){return eh()&&t instanceof Blob}function eh(){return typeof Blob<"u"}function vp(t,e,n,r){if(r<e)throw Bl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Bl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Ry(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var qr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(qr||(qr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,n,r,s,i,o,c,l,u,f,p,m=!0,_=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,D)=>{this.resolve_=C,this.reject_=D,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new xo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===qr.NO_ERROR,l=i.getStatus();if(!c||GC(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===qr.ABORT;r(!1,new xo(!1,null,f));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new xo(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());zC(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=Xu();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Ay():xC();o(l)}else{const l=VC();o(l)}};this.canceled_?n(!1,new xo(!1,null,!0)):this.backoffId_=qC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&WC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function YC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function JC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function XC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ZC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function e1(t,e,n,r,s,i,o=!0,c=!1){const l=Ry(t.urlParams),u=t.url+l,f=Object.assign({},t.headers);return XC(f,e),YC(f,n),JC(f,i),ZC(f,r),new QC(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function n1(...t){const e=t1();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(eh())return new Blob(t);throw new He($e.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function r1(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(t){if(typeof atob>"u")throw jC("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xc{constructor(e,n){this.data=e,this.contentType=n||null}}function i1(t,e){switch(t){case dn.RAW:return new Xc(Sy(e));case dn.BASE64:case dn.BASE64URL:return new Xc(Py(t,e));case dn.DATA_URL:return new Xc(a1(e),c1(e))}throw Xu()}function Sy(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function o1(t){let e;try{e=decodeURIComponent(t)}catch{throw Di(dn.DATA_URL,"Malformed data URL.")}return Sy(e)}function Py(t,e){switch(t){case dn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Di(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case dn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Di(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=s1(e)}catch(s){throw s.message.includes("polyfill")?s:Di(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Cy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Di(dn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=l1(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function a1(t){const e=new Cy(t);return e.base64?Py(dn.BASE64,e.rest):o1(e.rest)}function c1(t){return new Cy(t).contentType}function l1(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n){let r=0,s="";Ep(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ep(this.data_)){const r=this.data_,s=r1(r,e,n);return s===null?null:new lr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new lr(r,!0)}}static getBlob(...e){if(eh()){const n=e.map(r=>r instanceof lr?r.data_:r);return new lr(n1.apply(null,n))}else{const n=e.map(o=>Zu(o)?i1(dn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new lr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t){let e;try{e=JSON.parse(t)}catch{return null}return KC(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function h1(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Ny(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(t,e){return e}class bt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||f1}}let Lo=null;function d1(t){return!Zu(t)||t.length<2?t:Ny(t)}function Dy(){if(Lo)return Lo;const t=[];t.push(new bt("bucket")),t.push(new bt("generation")),t.push(new bt("metageneration")),t.push(new bt("name","fullPath",!0));function e(i,o){return d1(o)}const n=new bt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new bt("size");return s.xform=r,t.push(s),t.push(new bt("timeCreated")),t.push(new bt("updated")),t.push(new bt("md5Hash",null,!0)),t.push(new bt("cacheControl",null,!0)),t.push(new bt("contentDisposition",null,!0)),t.push(new bt("contentEncoding",null,!0)),t.push(new bt("contentLanguage",null,!0)),t.push(new bt("contentType",null,!0)),t.push(new bt("metadata","customMetadata",!0)),Lo=t,Lo}function p1(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Bt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function m1(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return p1(r,t),r}function Oy(t,e,n){const r=ky(e);return r===null?null:m1(t,r,n)}function g1(t,e,n,r){const s=ky(e);if(s===null||!Zu(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const f=t.bucket,p=t.fullPath,m="/b/"+o(f)+"/o/"+o(p),_=th(m,n,r),C=Ry({alt:"media",token:u});return _+C})[0]}function _1(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Vy{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(t){if(!t)throw Xu()}function y1(t,e){function n(r,s){const i=Oy(t,s,e);return xy(i!==null),i}return n}function E1(t,e){function n(r,s){const i=Oy(t,s,e);return xy(i!==null),g1(i,s,t.host,t._protocol)}return n}function Ly(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=DC():s=NC():n.getStatus()===402?s=kC(t.bucket):n.getStatus()===403?s=OC(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function v1(t){const e=Ly(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=CC(t.path)),i.serverResponse=s.serverResponse,i}return n}function T1(t,e,n){const r=e.fullServerUrl(),s=th(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new Vy(s,i,E1(t,n),o);return c.errorHandler=v1(e),c}function w1(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function I1(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=w1(null,e)),r}function b1(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let $="";for(let z=0;z<2;z++)$=$+Math.random().toString().slice(2);return $}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const u=I1(e,r,s),f=_1(u,n),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+l+"--",_=lr.getBlob(p,r,m);if(_===null)throw FC();const C={name:u.fullPath},D=th(i,t.host,t._protocol),O="POST",j=t.maxUploadRetryTime,F=new Vy(D,O,y1(t,n),j);return F.urlParams=C,F.headers=o,F.body=_.uploadData(),F.errorHandler=Ly(e),F}class A1{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=qr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=qr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=qr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw ui("cannot .send() more than once");if(Sr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ui("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ui("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ui("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ui("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class R1 extends A1{initXhr(){this.xhr_.responseType="text"}}function My(){return new R1}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n){this._service=e,n instanceof Bt?this._location=n:this._location=Bt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Xr(e,n)}get root(){const e=new Bt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ny(this._location.path)}get storage(){return this._service}get parent(){const e=u1(this._location.path);if(e===null)return null;const n=new Bt(this._location.bucket,e);return new Xr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw $C(e)}}function S1(t,e,n){t._throwIfRoot("uploadBytes");const r=b1(t.storage,t._location,Dy(),new lr(e,!0),n);return t.storage.makeRequestWithTokens(r,My).then(s=>({metadata:s,ref:t}))}function P1(t){t._throwIfRoot("getDownloadURL");const e=T1(t.storage,t._location,Dy());return t.storage.makeRequestWithTokens(e,My).then(n=>{if(n===null)throw BC();return n})}function C1(t,e){const n=h1(t._location.path,e),r=new Bt(t._location.bucket,n);return new Xr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(t){return/^[A-Za-z]+:\/\//.test(t)}function N1(t,e){return new Xr(t,e)}function Uy(t,e){if(t instanceof nh){const n=t;if(n._bucket==null)throw UC();const r=new Xr(n,n._bucket);return e!=null?Uy(r,e):r}else return e!==void 0?C1(t,e):t}function D1(t,e){if(e&&k1(e)){if(t instanceof nh)return N1(t,e);throw Bl("To use ref(service, url), the first argument must be a Storage instance.")}else return Uy(t,e)}function Tp(t,e){const n=e?.[by];return n==null?null:Bt.makeFromBucketSpec(n,t)}function O1(t,e,n,r={}){t.host=`${e}:${n}`;const s=Sr(e);s&&(au(`https://${t.host}/b`),cu("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:og(i,t.app.options.projectId))}class nh{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Iy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=SC,this._maxUploadRetryTime=PC,this._requests=new Set,s!=null?this._bucket=Bt.makeFromBucketSpec(s,this._host):this._bucket=Tp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Bt.makeFromBucketSpec(this._url,e):this._bucket=Tp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){vp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){vp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new HC(Ay());{const o=e1(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const wp="@firebase/storage",Ip="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy="storage";function V1(t,e,n){return t=st(t),S1(t,e,n)}function x1(t){return t=st(t),P1(t)}function L1(t,e){return t=st(t),D1(t,e)}function By(t=Kr(),e){t=st(t);const r=za(t,Fy).getImmediate({identifier:e}),s=rg("storage");return s&&M1(r,...s),r}function M1(t,e,n,r={}){O1(t,e,n,r)}function U1(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new nh(n,r,s,e,es)}function F1(){zr(new Er(Fy,U1,"PUBLIC").setMultipleInstances(!0)),mn(wp,Ip,""),mn(wp,Ip,"esm2020")}F1();var B1="firebase",j1="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mn(B1,j1,"app");const $1={name:"projects",setup(){const t=Ku(Kr());By(Kr());const e=ht([]),n=ht(!1),r=async()=>{const o=await wy(Fl(t,"projet"));e.value=o.docs.map(c=>({id:c.id,...c.data()}))},s=o=>{newProject.value.imageFile=o.target.files[0]},i=[{image:new URL("/digitalagency/assets/project1-LAZLm2JI.jpg",import.meta.url).href,title:"Website Design",subtitle:"Web Design, App Design"},{image:new URL("/digitalagency/assets/project1-LAZLm2JI.jpg",import.meta.url).href,title:"Website Design",subtitle:"Web Design, App Design"},{image:new URL("/digitalagency/assets/project1-LAZLm2JI.jpg",import.meta.url).href,title:"Website Design",subtitle:"Web Design, App Design"},{image:new URL("/digitalagency/assets/project1-LAZLm2JI.jpg",import.meta.url).href,title:"Website Design",subtitle:"Web Design, App Design"}];return Bs(r),{projet:e,onFileChange:s,loading:n,projects:i}}},H1={class:"projects-section",id:"projects"},q1={class:"container"},W1={class:"row g-4"},z1={class:"card h-100 project-card"},K1=["src"],G1={class:"card-body"},Q1={class:"card-title fw-bold"},Y1={class:"card-text text-secondary"},J1=["href"];function X1(t,e,n,r,s,i){return ve(),Ie("section",H1,[N("div",q1,[e[1]||(e[1]=N("span",{class:"badge rounded-pill bg-primary fs-6 px-3 py-2 mb-3"},"MY WORK",-1)),e[2]||(e[2]=N("h2",{class:"fw-bold display-5 text-white mb-4"},"RECENT PROJECT",-1)),N("div",W1,[(ve(!0),Ie(nt,null,Mi(r.projet,o=>(ve(),Ie("div",{class:"col-md-3",key:o.id},[N("div",z1,[o.imageURL?(ve(),Ie("img",{key:0,src:o.imageURL,alt:"Project Image",class:"card-img-top"},null,8,K1)):wn("",!0),N("div",G1,[N("h5",Q1,tt(o.title),1),N("p",Y1,tt(o.tags),1),o.liveUrl?(ve(),Ie("a",{key:0,class:"btn btn-primary rounded-circle float-end rounded-circle_custom",href:o.liveUrl,target:"_blank"},[...e[0]||(e[0]=[N("i",{class:"bi bi-arrow-right"},null,-1)])],8,J1)):wn("",!0)])])]))),128))])])])}const jy=sn($1,[["render",X1]]),Z1={name:"TeamSection",data(){return{hover:"",people:[{name:"Sofien Cheikh mohamed",role:"Frontend Developer",photo:new URL("/digitalagency/assets/profile-pic-DjAJ2Wyb.png",import.meta.url).href,socials:{instagram:"https://instagram.com/yourprofile",facebook:"https://facebook.com/yourprofile",x:"https://x.com/yourprofile",linkedin:"https://linkedin.com/in/yourprofile"}},{name:"Khalil hmessi",role:"Full Stack Developer",photo:new URL("/digitalagency/assets/khalil-1-vUnvFGZ9.png",import.meta.url).href,socials:{instagram:"https://instagram.com/friendprofile",facebook:"https://facebook.com/friendprofile",x:"https://x.com/friendprofile",linkedin:"https://linkedin.com/in/friendprofile"}}]}}},ek={class:"team-section",id:"team"},tk={class:"container"},nk={class:"row g-4 justify-content-center"},rk=["onMouseenter"],sk=["src"],ik={class:"team-info"},ok={class:"name"},ak={class:"role"},ck={class:"share-wrap"},lk={key:0,class:"socials"},uk=["href"],hk=["href"],fk=["href"],dk=["href"];function pk(t,e,n,r,s,i){return ve(),Ie("section",ek,[N("div",tk,[e[6]||(e[6]=N("span",{class:"badge bg-primary px-3 py-2 mb-2"},"TEAM",-1)),e[7]||(e[7]=N("h2",{class:"section-title mb-5"},[Pt(" WHO WE "),N("span",{class:"text-primary"},"ARE")],-1)),N("div",nk,[(ve(!0),Ie(nt,null,Mi(s.people,o=>(ve(),Ie("div",{class:"col-lg-4 col-md-6",key:o.name},[N("div",{class:"team-card",onMouseenter:c=>s.hover=o.name,onMouseleave:e[0]||(e[0]=c=>s.hover="")},[N("img",{src:o.photo,class:"team-photo",alt:"person.name"},null,8,sk),N("div",ik,[N("div",ok,tt(o.name),1),N("div",ak,tt(o.role),1)]),N("div",ck,[e[5]||(e[5]=N("button",{class:"share-btn"},[N("i",{class:"fa fa-share-alt"})],-1)),Ne(Fm,{name:"fade"},{default:Vn(()=>[s.hover===o.name?(ve(),Ie("div",lk,[N("a",{href:o.socials.instagram,target:"_blank"},[...e[1]||(e[1]=[N("i",{class:"bi bi-instagram"},null,-1)])],8,uk),N("a",{href:o.socials.facebook,target:"_blank"},[...e[2]||(e[2]=[N("i",{class:"bi bi-facebook"},null,-1)])],8,hk),N("a",{href:o.socials.x,target:"_blank"},[...e[3]||(e[3]=[N("i",{class:"bi bi-twitter"},null,-1)])],8,fk),N("a",{href:o.socials.linkedin,target:"_blank"},[...e[4]||(e[4]=[N("i",{class:"bi bi-linkedin"},null,-1)])],8,dk)])):wn("",!0)]),_:2},1024)])],40,rk)]))),128))])])])}const mk=sn(Z1,[["render",pk],["__scopeId","data-v-54da94c0"]]),gk={class:"contact-section",id:"contact"},_k={__name:"Contact",setup(t){return(e,n)=>(ve(),Ie("section",gk,[...n[0]||(n[0]=[nu('<div class="container" data-v-18a99482><div class="row justify-content-center" data-v-18a99482><div class="col-lg-8" data-v-18a99482><div class="contact-card p-5 rounded-4 mx-auto" data-v-18a99482><h2 class="text-center mb-2 fw-bold" data-v-18a99482>Let’s Discuss Your Project</h2><p class="text-center text-light mb-4" data-v-18a99482> Always available for freelancing if the right project comes along.<br data-v-18a99482> Feel free to contact me. </p><form data-v-18a99482><div class="row mb-3" data-v-18a99482><div class="col-md-6" data-v-18a99482><label class="form-label small text-light" data-v-18a99482>FIRST NAME</label><input type="text" class="form-control" placeholder="Name *" required data-v-18a99482></div><div class="col-md-6" data-v-18a99482><label class="form-label small text-light" data-v-18a99482>YOUR EMAIL</label><input type="email" class="form-control" placeholder="Email *" required data-v-18a99482></div></div><div class="mb-3" data-v-18a99482><label class="form-label small text-light" data-v-18a99482>SUBJECT</label><input type="text" class="form-control" placeholder="Subject *" required data-v-18a99482></div><div class="mb-4" data-v-18a99482><label class="form-label small text-light" data-v-18a99482>YOUR MESSAGE</label><textarea class="form-control" rows="4" placeholder="Your message *" required data-v-18a99482></textarea></div><button type="submit" class="btn btn-block btn-primary w-100 fw-bold py-2 rounded-pill gradient-blue" data-v-18a99482> SEND MESSAGE </button></form></div></div></div></div>',1)])]))}},$y=sn(_k,[["__scopeId","data-v-18a99482"]]),yk={id:"app"},Ek={__name:"Home",setup(t){return(e,n)=>{const r=Ns("router-view");return ve(),Ie(nt,null,[Ne(r),N("div",yk,[Ne(zR),N("main",null,[Ne(zg,{id:"about"}),Ne(Kg,{id:"services"}),Ne(jy,{id:"projects"}),Ne(mk,{id:"team"}),Ne($y,{id:"contact"})])])],64)}}},vk={},Tk={class:"letstalk-section"};function wk(t,e){return ve(),Ie("section",Tk,[...e[0]||(e[0]=[N("h2",null,"Let's Talk",-1),N("p",null," Ready to start your next big idea? Let's connect! ",-1)])])}const Ik=sn(vk,[["render",wk],["__scopeId","data-v-5c59518c"]]),bk={apiKey:"AIzaSyCHzAO1NhUptz04NghDpEneruu7EunBvmw",authDomain:"project-management-26957.firebaseapp.com",projectId:"project-management-26957",storageBucket:"project-management-26957.appspot.com",messagingSenderId:"855490773695",appId:"1:855490773695:web:1a963b28f4d6b4a6dbfc0a",measurementId:"G-H805RN16K0"},Hy=lg(bk),rh=vu(Hy);Ku(Hy);const Ak={key:0,class:"error"},Rk={__name:"Signup",setup(t){const e=ht(""),n=ht(""),r=ht("");async function s(){r.value="";try{const i=await PA(rh,e.value,n.value);console.log("Signup success:",i.user)}catch(i){r.value=i.message}}return(i,o)=>{const c=Ns("router-view");return ve(),Ie(nt,null,[Ne(c),N("form",{onSubmit:$a(s,["prevent"]),class:"auth-form"},[o[2]||(o[2]=N("h2",null,"Sign Up",-1)),$t(N("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l),type:"email",placeholder:"Email",required:""},null,512),[[Ht,e.value]]),$t(N("input",{"onUpdate:modelValue":o[1]||(o[1]=l=>n.value=l),type:"password",placeholder:"Password",required:"",minlength:"6"},null,512),[[Ht,n.value]]),o[3]||(o[3]=N("button",{type:"submit"},"Create Account",-1)),r.value?(ve(),Ie("p",Ak,tt(r.value),1)):wn("",!0)],32)],64)}}},Sk=sn(Rk,[["__scopeId","data-v-5d8a0506"]]),Pk={key:0,class:"error"},Ck={__name:"Login",setup(t){const e=ht(""),n=ht(""),r=ht(""),s=Xm();async function i(){r.value="";try{const o=await CA(rh,e.value,n.value);console.log("Login success:",o.user),s.push("/dashbord")}catch(o){r.value=o.message}}return(o,c)=>(ve(),Ie("form",{onSubmit:$a(i,["prevent"]),class:"auth-form"},[c[2]||(c[2]=N("h2",null,"Login",-1)),$t(N("input",{"onUpdate:modelValue":c[0]||(c[0]=l=>e.value=l),type:"email",placeholder:"Email",required:""},null,512),[[Ht,e.value]]),$t(N("input",{"onUpdate:modelValue":c[1]||(c[1]=l=>n.value=l),type:"password",placeholder:"Password",required:""},null,512),[[Ht,n.value]]),c[3]||(c[3]=N("button",{type:"submit"},"Login",-1)),r.value?(ve(),Ie("p",Pk,tt(r.value),1)):wn("",!0)],32))}},kk=sn(Ck,[["__scopeId","data-v-2b407faf"]]),Nk={name:"ProjectAdmin",setup(){const t=Ku(Kr()),e=By(Kr()),n=ht([]),r=ht({title:"",description:"",type:"",languages:"",platform:"",country:"",liveUrl:"",tags:"",imageFile:null}),s=ht(!1),i=async()=>{const l=await wy(Fl(t,"projet"));n.value=l.docs.map(u=>({id:u.id,...u.data()}))},o=l=>{r.value.imageFile=l.target.files[0]},c=async()=>{if(!r.value.imageFile)return;s.value=!0;const l=L1(e,`projet/${Date.now()}_${r.value.imageFile.name}`);await V1(l,r.value.imageFile);const u=await x1(l);await bC(Fl(t,"projet"),{title:r.value.title,description:r.value.description,type:r.value.type,languages:r.value.languages,platform:r.value.platform,country:r.value.country,liveUrl:r.value.liveUrl,tags:r.value.tags,imageURL:u,createdAt:RC()}),await i(),r.value={title:"",description:"",type:"",languages:"",platform:"",country:"",liveUrl:"",tags:"",imageFile:null},s.value=!1};return Bs(i),{newProject:r,projet:n,addProject:c,onFileChange:o,loading:s}}},Dk={class:"project-admin"},Ok={class:"mb-3 form-group col-md-6"},Vk={class:"mb-3 form-group col-md-6"},xk={class:"mb-3 form-group col-md-12"},Lk={class:"mb-3 form-group col-md-6"},Mk={class:"mb-3 form-group col-md-6"},Uk={class:"mb-3 form-group col-md-6"},Fk={class:"mb-3 form-group col-md-6"},Bk={class:"mb-3 form-group col-md-6"},jk={class:"mb-3 form-group col-md-6"},$k=["disabled"],Hk={class:"projects-list row row-cols-1 row-cols-md-3 g-4 mt-4"},qk={class:"card h-100"},Wk=["src"],zk={class:"card-body"},Kk={class:"card-title"},Gk={class:"card-text"},Qk=["href"];function Yk(t,e,n,r,s,i){return ve(),Ie("div",Dk,[N("form",{onSubmit:e[9]||(e[9]=$a((...o)=>r.addProject&&r.addProject(...o),["prevent"])),class:"project-form row",enctype:"multipart/form-data"},[N("div",Ok,[e[10]||(e[10]=N("label",{class:"form-label"},"Image:",-1)),N("input",{type:"file",accept:"image/*",onChange:e[0]||(e[0]=(...o)=>r.onFileChange&&r.onFileChange(...o)),required:"",class:"form-control"},null,32)]),N("div",Vk,[e[11]||(e[11]=N("label",{class:"form-label"},"Title:",-1)),$t(N("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>r.newProject.title=o),required:"",class:"form-control"},null,512),[[Ht,r.newProject.title]])]),N("div",xk,[e[12]||(e[12]=N("label",{class:"form-label"},"Description:",-1)),$t(N("textarea",{"onUpdate:modelValue":e[2]||(e[2]=o=>r.newProject.description=o),required:"",class:"form-control",rows:"3"},null,512),[[Ht,r.newProject.description]])]),N("div",Lk,[e[13]||(e[13]=N("label",{class:"form-label"},"Type:",-1)),$t(N("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=o=>r.newProject.type=o),placeholder:"e.g. Website, App, Platform",required:"",class:"form-control"},null,512),[[Ht,r.newProject.type]])]),N("div",Mk,[e[14]||(e[14]=N("label",{class:"form-label"},"Languages:",-1)),$t(N("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=o=>r.newProject.languages=o),placeholder:"e.g. JavaScript, PHP",required:"",class:"form-control"},null,512),[[Ht,r.newProject.languages]])]),N("div",Uk,[e[15]||(e[15]=N("label",{class:"form-label"},"Platform:",-1)),$t(N("input",{type:"text","onUpdate:modelValue":e[5]||(e[5]=o=>r.newProject.platform=o),placeholder:"e.g. Web, iOS, Android",required:"",class:"form-control"},null,512),[[Ht,r.newProject.platform]])]),N("div",Fk,[e[16]||(e[16]=N("label",{class:"form-label"},"Country:",-1)),$t(N("input",{type:"text","onUpdate:modelValue":e[6]||(e[6]=o=>r.newProject.country=o),required:"",class:"form-control"},null,512),[[Ht,r.newProject.country]])]),N("div",Bk,[e[17]||(e[17]=N("label",{class:"form-label"},"Live URL:",-1)),$t(N("input",{type:"url","onUpdate:modelValue":e[7]||(e[7]=o=>r.newProject.liveUrl=o),placeholder:"https://example.com",class:"form-control"},null,512),[[Ht,r.newProject.liveUrl]])]),N("div",jk,[e[18]||(e[18]=N("label",{class:"form-label"},"Tags:",-1)),$t(N("input",{type:"text","onUpdate:modelValue":e[8]||(e[8]=o=>r.newProject.tags=o),placeholder:"e.g. Web Design, App Design",required:"",class:"form-control"},null,512),[[Ht,r.newProject.tags]])]),N("button",{type:"submit",disabled:r.loading,class:"btn btn-primary mt-4"},tt(r.loading?"Saving...":"Add Project"),9,$k)],32),N("div",Hk,[(ve(!0),Ie(nt,null,Mi(r.projet,o=>(ve(),Ie("div",{class:"project-card col",key:o.id},[N("div",qk,[o.imageURL?(ve(),Ie("img",{key:0,src:o.imageURL,alt:"Project Image",class:"card-img-top"},null,8,Wk)):wn("",!0),N("div",zk,[N("h5",Kk,tt(o.title),1),N("p",Gk,tt(o.description),1),N("p",null,[e[19]||(e[19]=N("strong",null,"Type:",-1)),Pt(" "+tt(o.type),1)]),N("p",null,[e[20]||(e[20]=N("strong",null,"Languages:",-1)),Pt(" "+tt(o.languages),1)]),N("p",null,[e[21]||(e[21]=N("strong",null,"Platform:",-1)),Pt(" "+tt(o.platform),1)]),N("p",null,[e[22]||(e[22]=N("strong",null,"Country:",-1)),Pt(" "+tt(o.country),1)]),N("p",null,[e[23]||(e[23]=N("strong",null,"Tags:",-1)),Pt(" "+tt(o.tags),1)]),o.liveUrl?(ve(),Ie("a",{key:0,href:o.liveUrl,target:"_blank",class:"card-link"},"Live URL",8,Qk)):wn("",!0)]),e[24]||(e[24]=N("div",{class:"card-footer d-flex justify-content-end"},[N("button",{class:"btn btn-primary rounded-circle"}," → ")],-1))])]))),128))])])}const qy=sn(Nk,[["render",Yk],["__scopeId","data-v-465b0a5d"]]),Jk={components:{AddProject:qy},setup(){const t=ht(!1),e=ht(null),n=()=>{t.value=!0},r=vu(),s=Xm(),i=ht(!1),o=()=>{i.value=!i.value},c=()=>{DA(r).then(()=>{s.push("/"),console.log("User signed out successfully")}).catch(u=>{console.error("Error signing out:",u)})},l=u=>{const f=document.querySelector(".profile-menu-wrapper");f&&!f.contains(u.target)&&(i.value=!1)};return Bs(()=>{document.addEventListener("mousedown",l),_u(r,u=>{u?e.value=u.displayName||u.email||"User":e.value=null})}),Ua(()=>{document.removeEventListener("mousedown",l)}),{showProfileMenu:i,toggleProfileMenu:o,logout:c,handleAddPortfolioClick:n,showAddProject:t,userName:e}}},Xk={class:"dashboard d-flex min-vh-100"},Zk={class:"sidebar d-flex flex-column p-4"},eN={class:"sidebar-logo mb-4"},tN={class:"sidebar-section mb-2"},nN={class:"list-unstyled mt-2 ps-3"},rN={class:"content-area flex-fill d-flex flex-column"},sN={class:"dashboard-topbar d-flex justify-content-between align-items-center p-3 border-bottom bg-white"},iN={class:"profile-menu-wrapper",style:{position:"relative"}},oN={class:"fw-bold",style:{cursor:"pointer"}},aN={key:0,class:"profile-dropdown shadow rounded"},cN={class:"flex-fill bg-dashboard"};function lN(t,e,n,r,s,i){const o=Ns("router-link"),c=Ns("AddProject");return ve(),Ie("div",Xk,[N("aside",Zk,[N("div",eN,[Ne(o,{class:"custom-link",to:"/"},{default:Vn(()=>[...e[3]||(e[3]=[Pt("AS",-1)])]),_:1})]),N("div",null,[N("div",tN,[e[5]||(e[5]=N("span",{class:"fw-semibold"},[N("i",{class:"bi bi-journal-text me-2"}),Pt("Portfolio")],-1)),N("ul",nN,[N("a",{href:"#",class:"sidebar-link",onClick:e[0]||(e[0]=$a((...l)=>r.handleAddPortfolioClick&&r.handleAddPortfolioClick(...l),["prevent"]))},"Add portfolio"),e[4]||(e[4]=N("li",null,[N("a",{href:"#",class:"sidebar-link"},"Show portfolio")],-1))])])])]),N("div",rN,[N("header",sN,[e[8]||(e[8]=N("button",{class:"btn btn-link"},[N("i",{class:"bi bi-list"})],-1)),N("div",iN,[N("div",{class:"profile d-flex align-items-center",onClick:e[1]||(e[1]=(...l)=>r.toggleProfileMenu&&r.toggleProfileMenu(...l))},[e[7]||(e[7]=N("img",{src:"https://randomuser.me/api/portraits/women/47.jpg",alt:"Anna Adame",class:"rounded-circle me-2",width:"36",height:"36",style:{cursor:"pointer"}},null,-1)),N("div",null,[N("div",oN,tt(r.userName),1),e[6]||(e[6]=N("div",{class:"small text-muted",style:{cursor:"pointer"}},"Founder",-1))])]),Ne(Fm,{name:"fade"},{default:Vn(()=>[r.showProfileMenu?(ve(),Ie("div",aN,[N("button",{onClick:e[2]||(e[2]=(...l)=>r.logout&&r.logout(...l)),class:"btn btn-logout w-100"},"Log Out")])):wn("",!0)]),_:1})])]),N("main",cN,[r.showAddProject?(ve(),Dm(c,{key:0})):wn("",!0)]),e[9]||(e[9]=N("footer",{class:"dashboard-footer text-end text-muted p-2 small"}," 2025 © Velzon. Design & Develop by Themesbrand ",-1))])])}const uN=sn(Jk,[["render",lN],["__scopeId","data-v-20f1f032"]]),hN=[{path:"/",name:"Home",component:Ek},{path:"/about",name:"AboutMe",component:zg},{path:"/services",name:"Services",component:Kg},{path:"/projects",name:"Projects",component:jy},{path:"/contact",name:"Contact",component:$y},{path:"/letstalk",name:"LetsTalk",component:Ik},{path:"/signup",component:Sk},{path:"/login",component:kk},{path:"/dashbord",component:uN,meta:{requiresAuth:!0}},{path:"/addproject",component:qy,meta:{requiresAuth:!0}}],Wy=$w({history:_w(),routes:hN,scrollBehavior(t,e,n){return t.hash?new Promise(r=>{setTimeout(()=>{const s=document.querySelector(t.hash);s?(s.scrollIntoView({behavior:"smooth"}),r({el:s})):r({top:0})},300)}):n||{top:0}}}),zy=vu();Wy.beforeEach((t,e,n)=>{const r=t.matched.some(i=>i.meta.requiresAuth),s=zy.currentUser;r&&!s?n("/"):n()});_u(zy,t=>{t?console.log("User is logged in:",t):console.log("User is logged out")});let bp;_u(rh,()=>{bp||(bp=UT(Qw).use(Wy).mount("#app"))});
