import{L as S,M as B,N as T,O as k,P as L,Q as D,B as F,R as O,S as E,T as N,U as R,W as U,J as h,X as V,e as l,Y as I,Z as M,d as z,r as W,o as Z,$ as j,l as e,a0 as P,a1 as H,a2 as y,y as J,w as f,F as K,a as Q,a3 as X,b as Y,K as $,v as q,a4 as G,h as _,n as ee,a5 as te,g as oe,f as C}from"./main-B70GkIj-.js";import{V as ne}from"./VSpacer-CJQu-8NM.js";/* empty css              */const ae=S({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...B({origin:"center center",scrollStrategy:"block",transition:{component:T},zIndex:2400})},"VDialog"),re=k()({name:"VDialog",props:ae(),emits:{"update:modelValue":s=>!0,afterLeave:()=>!0},setup(s,p){let{emit:i,slots:v}=p;const d=L(s,"modelValue"),{scopeId:x}=D(),t=F();function n(a){var g,b;const o=a.relatedTarget,m=a.target;if(o!==m&&((g=t.value)!=null&&g.contentEl)&&((b=t.value)!=null&&b.globalTop)&&![document,t.value.contentEl].includes(m)&&!t.value.contentEl.contains(m)){const u=M(t.value.contentEl);if(!u.length)return;const w=u[0],A=u[u.length-1];o===w?A.focus():w.focus()}}O&&E(()=>d.value&&s.retainFocus,a=>{a?document.addEventListener("focusin",n):document.removeEventListener("focusin",n)},{immediate:!0});function r(){var a;(a=t.value)!=null&&a.contentEl&&!t.value.contentEl.contains(document.activeElement)&&t.value.contentEl.focus({preventScroll:!0})}function c(){i("afterLeave")}return E(d,async a=>{var o;a||(await U(),(o=t.value.activatorEl)==null||o.focus({preventScroll:!0}))}),N(()=>{const a=h.filterProps(s),o=V({"aria-haspopup":"dialog","aria-expanded":String(d.value)},s.activatorProps),m=V({tabindex:-1},s.contentProps);return l(h,V({ref:t,class:["v-dialog",{"v-dialog--fullscreen":s.fullscreen,"v-dialog--scrollable":s.scrollable},s.class],style:s.style},a,{modelValue:d.value,"onUpdate:modelValue":g=>d.value=g,"aria-modal":"true",activatorProps:o,contentProps:m,role:"dialog",onAfterEnter:r,onAfterLeave:c},x),{activator:v.activator,default:function(){for(var g=arguments.length,b=new Array(g),u=0;u<g;u++)b[u]=arguments[u];return l(I,{root:"VDialog"},{default:()=>{var w;return[(w=v.default)==null?void 0:w.call(v,...b)]}})}})}),R({},t)}}),se=C("p",null,"We are working hard for everyone to be able to use sibs.ai soon.",-1),ie=C("br",null,null,-1),de=z({__name:"auth-done",setup(s){const p=Q(),i=W({signinError:!1,registering:!1});function v(t){return t=t||{enableHighAccuracy:!1,timeout:1e4,maximumAge:0},new Promise((n,r)=>navigator.geolocation.getCurrentPosition(n,r,t))}function d(){const t={};v().then(n=>{t.latitude=n.coords.latitude,t.longitude=n.coords.longitude,e.debug(e.context(),"getPosition:",t)}).catch(n=>{e.error(e.context(),"getPosition error",n)}).finally(async()=>{let n={login_location:t};const{data:r,error:c}=await P.PUT("/api/person/me",{body:n});c?e.error(e.context(),c):e.debug(e.context(),"updatePosition ok",t,r),await X(),e.debug(e.context(),"updatePosition done")})}Z(async()=>{var n,r;const t=j();e.debug(e.context(),">>>>>>>>    OnBeforeMount entering"),t.clear();try{const c=navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language,a=Intl.DateTimeFormat().resolvedOptions().timeZone;i.registering=!0;const o=await P.POST("/api/person/register",{body:{language:c,tz:a}});if(e.debug(e.context(),"register returns response=",o,"error=",o.error),!o.response.ok||!o.data)throw e.error(e.context(),"register error",o.error,o.response.status),o.response.status==403&&(e.error(e.context(),"person not allowed"),i.signinError=!0),new Error("register failed");if(e.debug(e.context(),"person",o.data.person),t.person=o.data.person,e.debug(e.context(),"userStore.accounts = ",t.accounts),o.data.person.validation==="New")e.debug(e.context(),"new person: go to profile",o.data.person),p.push({name:"signup_profile"});else if(o.data.person.validation==="Verified")e.debug(e.context(),"new person verified, go to invitations"),p.push({name:"signup_profile"});else if(o.data.person.validation==="Filled")e.debug(e.context(),"new person filled, go to verify"),t.invitationCount=((n=o.data.invite_list)==null?void 0:n.length)??0,p.push({name:"signup_invitations"});else if(o.data.person.validation==="Ready"){if(await t.setAccounts(o.data.user_list,o.data.admin_list,o.data.owner_list),t.invitationCount=((r=o.data.invite_list)==null?void 0:r.length)??0,e.debug(e.context(),"userStore.accounts",t.accounts,"invitation count = ",t.invitationCount),d(),!t.currentAccount)throw new Error("invalid account state");if(t.currentAccount.role=="admin")p.push({name:"chats"});else if(t.currentAccount.role=="user")H();else throw new Error("unknown role")}else throw new Error("unknown validation state")}catch(c){e.error(e.context(),"register error",c,i.signinError),i.signinError||await y()}finally{i.registering=!1}e.debug(e.context(),"<<<<<<<   OnBeforeMount exiting")});async function x(){e.debug("closing"),await y()}return(t,n)=>(Y(),J(K,null,[l(h,{location_strategy:"static",modelValue:i.registering,"onUpdate:modelValue":n[0]||(n[0]=r=>i.registering=r),class:"align-center justify-center"},{default:f(()=>[l($,{indeterminate:"",size:"x-large"})]),_:1},8,["modelValue"]),l(re,{modelValue:i.signinError,"onUpdate:modelValue":n[1]||(n[1]=r=>i.signinError=r),persistent:"",width:"400"},{default:f(()=>[l(q,null,{default:f(()=>[l(G,null,{default:f(()=>[_("sibs.ai is open for alpha-testers")]),_:1}),l(ee,null,{default:f(()=>[se,ie]),_:1}),l(te,null,{default:f(()=>[l(ne),l(oe,{color:"primary",onClick:x},{default:f(()=>[_("Close")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}});export{de as default};