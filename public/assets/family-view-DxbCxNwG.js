import{_ as J}from"./mermaid-graph.vue_vue_type_style_index_0_lang-r0zrgayu.js";import{q as W,ar as ee,aS as be,t as E,ao as xe,y as H,ad as b,A as U,j as R,e as r,Y as te,E as p,B as Ce,aT as _e,aU as Te,aV as ae,a9 as ne,aW as oe,ab as Ve,aX as we,aY as Se,aG as ke,aZ as Ie,aj as N,z as Be,ae as Pe,a0 as se,$ as $e,al as ie,v as le,a_ as pe,a$ as We,b0 as Ee,b1 as Ue,b2 as Me,aP as Ye,b3 as Re,aB as L,C as Xe,aa as ze,am as Ae,ap as He,ah as k,x as Oe,ag as Fe,b4 as Ge,d as Ne,H as Le,o as je,c as P,w as y,V as De,l as s,J as O,aM as F,b5 as K,b as $,O as qe,h as M,W as Je,U as G,g as z,P as Ke,R as Ze,b6 as Qe,K as Z,n as et}from"./main-J1mwJ8PB.js";import{C as tt}from"./chat-thread-cTKf6neR.js";import{m as at,V as Q}from"./VSlideGroup-BEQo82bC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DQhmecZd.js";import"./VSkeletonLoader-BC6Th1oE.js";import"./VRow-BjIh_6hr.js";import"./VCol-8t7F6D9y.js";import"./VTextField-BRxBEl6s.js";const D=Symbol.for("vuetify:v-tabs"),nt=W({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...ee(be({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),A=E()({name:"VTab",props:nt(),setup(e,t){let{slots:n,attrs:a}=t;const{textColorClasses:c,textColorStyles:u}=xe(e,"sliderColor"),o=H(),i=H(),l=b(()=>e.direction==="horizontal"),h=b(()=>{var x,d;return((d=(x=o.value)==null?void 0:x.group)==null?void 0:d.isSelected.value)??!1});function V(x){var v,m;let{value:d}=x;if(d){const C=(m=(v=o.value)==null?void 0:v.$el.parentElement)==null?void 0:m.querySelector(".v-tab--selected .v-tab__slider"),I=i.value;if(!C||!I)return;const X=getComputedStyle(C).color,w=C.getBoundingClientRect(),S=I.getBoundingClientRect(),f=l.value?"x":"y",g=l.value?"X":"Y",_=l.value?"right":"bottom",T=l.value?"width":"height",fe=w[f],ve=S[f],B=fe>ve?w[_]-S[_]:w[f]-S[f],he=Math.sign(B)>0?l.value?"right":"bottom":Math.sign(B)<0?l.value?"left":"top":"center",ge=(Math.abs(B)+(Math.sign(B)<0?w[T]:S[T]))/Math.max(w[T],S[T])||0,ye=w[T]/S[T]||0,q=1.5;_e(I,{backgroundColor:[X,"currentcolor"],transform:[`translate${g}(${B}px) scale${g}(${ye})`,`translate${g}(${B/q}px) scale${g}(${(ge-1)/q+1})`,"none"],transformOrigin:Array(3).fill(he)},{duration:225,easing:Te})}}return U(()=>{const x=R.filterProps(e);return r(R,p({symbol:D,ref:o,class:["v-tab",e.class],style:e.style,tabindex:h.value?0:-1,role:"tab","aria-selected":String(h.value),active:!1},x,a,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":V}),{...n,default:()=>{var d;return r(te,null,[((d=n.default)==null?void 0:d.call(n))??e.text,!e.hideSlider&&r("div",{ref:i,class:["v-tab__slider",c.value],style:u.value},null)])}})}),Ce({},o)}}),ot=e=>{const{touchstartX:t,touchendX:n,touchstartY:a,touchendY:c}=e,u=.5,o=16;e.offsetX=n-t,e.offsetY=c-a,Math.abs(e.offsetY)<u*Math.abs(e.offsetX)&&(e.left&&n<t-o&&e.left(e),e.right&&n>t+o&&e.right(e)),Math.abs(e.offsetX)<u*Math.abs(e.offsetY)&&(e.up&&c<a-o&&e.up(e),e.down&&c>a+o&&e.down(e))};function st(e,t){var a;const n=e.changedTouches[0];t.touchstartX=n.clientX,t.touchstartY=n.clientY,(a=t.start)==null||a.call(t,{originalEvent:e,...t})}function it(e,t){var a;const n=e.changedTouches[0];t.touchendX=n.clientX,t.touchendY=n.clientY,(a=t.end)==null||a.call(t,{originalEvent:e,...t}),ot(t)}function lt(e,t){var a;const n=e.changedTouches[0];t.touchmoveX=n.clientX,t.touchmoveY=n.clientY,(a=t.move)==null||a.call(t,{originalEvent:e,...t})}function rt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:n=>st(n,t),touchend:n=>it(n,t),touchmove:n=>lt(n,t)}}function ct(e,t){var i;const n=t.value,a=n!=null&&n.parent?e.parentElement:e,c=(n==null?void 0:n.options)??{passive:!0},u=(i=t.instance)==null?void 0:i.$.uid;if(!a||!u)return;const o=rt(t.value);a._touchHandlers=a._touchHandlers??Object.create(null),a._touchHandlers[u]=o,ae(o).forEach(l=>{a.addEventListener(l,o[l],c)})}function ut(e,t){var u,o;const n=(u=t.value)!=null&&u.parent?e.parentElement:e,a=(o=t.instance)==null?void 0:o.$.uid;if(!(n!=null&&n._touchHandlers)||!a)return;const c=n._touchHandlers[a];ae(c).forEach(i=>{n.removeEventListener(i,c[i])}),delete n._touchHandlers[a]}const re={mounted:ct,unmounted:ut},dt=re,ce=Symbol.for("vuetify:v-window"),ue=Symbol.for("vuetify:v-window-group"),de=W({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...ne(),...oe(),...Ve()},"VWindow"),j=E()({name:"VWindow",directives:{Touch:re},props:de(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{themeClasses:a}=we(e),{isRtl:c}=Se(),{t:u}=ke(),o=Ie(e,ue),i=H(),l=b(()=>c.value?!e.reverse:e.reverse),h=N(!1),V=b(()=>{const f=e.direction==="vertical"?"y":"x",_=(l.value?!h.value:h.value)?"-reverse":"";return`v-window-${f}${_}-transition`}),x=N(0),d=H(void 0),v=b(()=>o.items.value.findIndex(f=>o.selected.value.includes(f.id)));Be(v,(f,g)=>{const _=o.items.value.length,T=_-1;_<=2?h.value=f<g:f===T&&g===0?h.value=!0:f===0&&g===T?h.value=!1:h.value=f<g}),Pe(ce,{transition:V,isReversed:h,transitionCount:x,transitionHeight:d,rootRef:i});const m=b(()=>e.continuous||v.value!==0),C=b(()=>e.continuous||v.value!==o.items.value.length-1);function I(){m.value&&o.prev()}function X(){C.value&&o.next()}const w=b(()=>{const f=[],g={icon:c.value?e.nextIcon:e.prevIcon,class:`v-window__${l.value?"right":"left"}`,onClick:o.prev,"aria-label":u("$vuetify.carousel.prev")};f.push(m.value?n.prev?n.prev({props:g}):r(R,g,null):r("div",null,null));const _={icon:c.value?e.prevIcon:e.nextIcon,class:`v-window__${l.value?"left":"right"}`,onClick:o.next,"aria-label":u("$vuetify.carousel.next")};return f.push(C.value?n.next?n.next({props:_}):r(R,_,null):r("div",null,null)),f}),S=b(()=>e.touch===!1?e.touch:{...{left:()=>{l.value?I():X()},right:()=>{l.value?X():I()},start:g=>{let{originalEvent:_}=g;_.stopPropagation()}},...e.touch===!0?{}:e.touch});return U(()=>se(r(e.tag,{ref:i,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},a.value,e.class],style:e.style},{default:()=>{var f,g;return[r("div",{class:"v-window__container",style:{height:d.value}},[(f=n.default)==null?void 0:f.call(n,{group:o}),e.showArrows!==!1&&r("div",{class:"v-window__controls"},[w.value])]),(g=n.additional)==null?void 0:g.call(n,{group:o})]}}),[[$e("touch"),S.value]])),{group:o}}}),mt=W({...ee(de(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),ft=E()({name:"VTabsWindow",props:mt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const a=ie(D,null),c=le(e,"modelValue"),u=b({get(){var o;return c.value!=null||!a?c.value:(o=a.items.value.find(i=>a.selected.value.includes(i.id)))==null?void 0:o.value},set(o){c.value=o}});return U(()=>{const o=j.filterProps(e);return r(j,p({_as:"VTabsWindow"},o,{modelValue:u.value,"onUpdate:modelValue":i=>u.value=i,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),n)}),{}}}),me=W({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...ne(),...pe(),...We()},"VWindowItem"),Y=E()({name:"VWindowItem",directives:{Touch:dt},props:me(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:n}=t;const a=ie(ce),c=Ee(e,ue),{isBooted:u}=Ue();if(!a||!c)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const o=N(!1),i=b(()=>u.value&&(a.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function l(){!o.value||!a||(o.value=!1,a.transitionCount.value>0&&(a.transitionCount.value-=1,a.transitionCount.value===0&&(a.transitionHeight.value=void 0)))}function h(){var m;o.value||!a||(o.value=!0,a.transitionCount.value===0&&(a.transitionHeight.value=L((m=a.rootRef.value)==null?void 0:m.clientHeight)),a.transitionCount.value+=1)}function V(){l()}function x(m){o.value&&Xe(()=>{!i.value||!o.value||!a||(a.transitionHeight.value=L(m.clientHeight))})}const d=b(()=>{const m=a.isReversed.value?e.reverseTransition:e.transition;return i.value?{name:typeof m!="string"?a.transition.value:m,onBeforeEnter:h,onAfterEnter:l,onEnterCancelled:V,onBeforeLeave:h,onAfterLeave:l,onLeaveCancelled:V,onEnter:x}:!1}),{hasContent:v}=Me(e,c.isSelected);return U(()=>r(Re,{transition:d.value,disabled:!u.value},{default:()=>{var m;return[se(r("div",{class:["v-window-item",c.selectedClass.value,e.class],style:e.style},[v.value&&((m=n.default)==null?void 0:m.call(n))]),[[Ye,c.isSelected.value]])]}})),{groupItem:c}}}),vt=W({...me()},"VTabsWindowItem"),ht=E()({name:"VTabsWindowItem",props:vt(),setup(e,t){let{slots:n}=t;return U(()=>{const a=Y.filterProps(e);return r(Y,p({_as:"VTabsWindowItem"},a,{class:["v-tabs-window-item",e.class],style:e.style}),n)}),{}}});function gt(e){return e?e.map(t=>Ge(t)?t:{text:t,value:t}):[]}const yt=W({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...at({mandatory:"force",selectedClass:"v-tab-item--selected"}),...ze(),...oe()},"VTabs"),bt=E()({name:"VTabs",props:yt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:n,slots:a}=t;const c=le(e,"modelValue"),u=b(()=>gt(e.items)),{densityClasses:o}=Ae(e),{backgroundColorClasses:i,backgroundColorStyles:l}=He(k(e,"bgColor")),{scopeId:h}=Oe();return Fe({VTab:{color:k(e,"color"),direction:k(e,"direction"),stacked:k(e,"stacked"),fixed:k(e,"fixedTabs"),sliderColor:k(e,"sliderColor"),hideSlider:k(e,"hideSlider")}}),U(()=>{const V=Q.filterProps(e),x=!!(a.window||e.items.length>0);return r(te,null,[r(Q,p(V,{modelValue:c.value,"onUpdate:modelValue":d=>c.value=d,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},o.value,i.value,e.class],style:[{"--v-tabs-height":L(e.height)},l.value,e.style],role:"tablist",symbol:D},h,n),{default:()=>{var d;return[((d=a.default)==null?void 0:d.call(a))??u.value.map(v=>{var m;return((m=a.tab)==null?void 0:m.call(a,{item:v}))??r(A,p(v,{key:v.text,value:v.value}),{default:()=>{var C;return(C=a[`tab.${v.value}`])==null?void 0:C.call(a,{item:v})}})})]}}),x&&r(ft,p({modelValue:c.value,"onUpdate:modelValue":d=>c.value=d,key:"tabs-window"},h),{default:()=>{var d;return[u.value.map(v=>{var m;return((m=a.item)==null?void 0:m.call(a,{item:v}))??r(ht,{value:v.value},{default:()=>{var C;return(C=a[`item.${v.value}`])==null?void 0:C.call(a,{item:v})}})}),(d=a.window)==null?void 0:d.call(a)]}})])}),{}}}),xt=Ne({__name:"family-view",setup(e){const t=Le({familyMap:void 0,familyTree:void 0,personName:void 0,activeTabId:"mindmap",familyChat:void 0,needsUpdate:!1,processingUpdate:!1,readOnly:!1});async function n(){s.debug(s.context(),"entering");const o=O();if(s.debug(s.context(),`person is ${o.person}`),!o.person){s.error(s.context(),"no person");return}t.personName=o.person.given_name;{const{data:i,error:l}=await F("/api/person/me/family",{params:{query:{format:"mermaid_mindmap"}}});s.debug(s.context(),i),l||i.mermaid_mindmap==null?(t.familyMap=`mindmap
  id((**${t.personName}**<br>*self*))
  :::self level0
`,t.activeTabId="chat",l&&s.error(s.context(),l)):(t.familyMap=i.mermaid_mindmap,s.debug(s.context(),t.familyMap))}{const{data:i,error:l}=await F("/api/person/me/family",{params:{query:{format:"mermaid_graph"}}});s.debug(s.context(),i),l||i.mermaid_graph==null?(t.familyTree=`graph
  id((${t.personName}<br>self))
`,l&&s.error(s.context(),l)):(t.familyTree=i.mermaid_graph,s.debug(s.context(),t.familyTree))}}async function a(){var h;s.debug(s.context(),"entering");const o=O();if(s.debug(s.context(),`accountId is ${(h=o.currentAccount)==null?void 0:h.id}`),!o.currentAccount){s.error(s.context(),"no current account"),t.familyChat=void 0;return}const{data:i,error:l}=await F("/api/account/{account_id}/latestchat",{params:{path:{account_id:o.currentAccount.id},query:{kind:"family_tree",closed:!1}}});l?s.error(s.context(),l):(i==null?t.familyChat=await K("family_tree"):t.familyChat=i._id,s.debug(s.context(),i,t.familyChat))}async function c(){s.debug(s.context(),"entering");const o=O();if(!o.currentAccount){s.error(s.context(),"no current account");return}t.readOnly=!0,t.processingUpdate=!0,s.debug(s.context(),"summarizing chat"),Z("/api/chat/{account_id}/{chat_id}/summarize",{params:{path:{account_id:o.currentAccount.id,chat_id:t.familyChat}}}).then(async i=>{if(s.debug(s.context(),"summarize returns",i),await n(),t.activeTabId="mindmap",t.needsUpdate=!1,!o.currentAccount){s.error(s.context(),"no current account");return}s.debug(s.context(),"closing chat");const{error:l}=await Z("/api/chat/{account_id}/{chat_id}/close",{params:{path:{account_id:o.currentAccount.id,chat_id:t.familyChat}}});l?s.error(s.context(),l):t.familyChat=await K("family_tree")}).finally(()=>{t.processingUpdate=!1,t.readOnly=!1})}je(async()=>{await n(),await a()});function u(){s.debug(s.context(),"needsUpdate -> true"),t.needsUpdate=!0}return(o,i)=>($(),P(De,{class:"h-100 v-col-sm-9 v-col-lg-6"},{default:y(()=>[r(Ze,{class:"py-2 h-100"},{default:y(()=>[t.personName?($(),P(qe,{key:0,class:"text-center"},{default:y(()=>[M(Je(t.personName)+"'s Family ",1)]),_:1})):G("",!0),r(bt,{modelValue:t.activeTabId,"onUpdate:modelValue":i[0]||(i[0]=l=>t.activeTabId=l),"align-tabs":"center","fixed-tabs":""},{default:y(()=>[r(A,{value:"mindmap"},{default:y(()=>[r(z,{icon:"mdi-atom",size:"large"}),M("  Relations ")]),_:1}),r(A,{value:"tree"},{default:y(()=>[r(z,{icon:"mdi-sitemap",size:"large"}),M(" Tree ")]),_:1}),r(A,{value:"chat"},{default:y(()=>[r(z,{icon:"mdi-comment-multiple",size:"large"}),M(" Chat ")]),_:1})]),_:1},8,["modelValue"]),r(Ke,{class:"h-100"},{default:y(()=>[r(j,{modelValue:t.activeTabId,"onUpdate:modelValue":i[1]||(i[1]=l=>t.activeTabId=l),class:"h-100"},{default:y(()=>[r(Y,{value:"mindmap",class:"h-100"},{default:y(()=>[r(J,{content:t.familyMap},null,8,["content"])]),_:1}),r(Y,{value:"tree",class:"h-100"},{default:y(()=>[r(J,{content:t.familyTree},null,8,["content"])]),_:1}),r(Y,{value:"chat"},{default:y(()=>[t.familyChat?($(),P(tt,{key:0,chatId:t.familyChat,readOnly:t.readOnly,onSummaryNeedsUpdate:u},null,8,["chatId","readOnly"])):G("",!0)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t.needsUpdate?($(),P(R,{key:0,class:"me-2 mb-2 floating",elevation:"12",onClick:c,color:"primary"},{default:y(()=>[t.processingUpdate?($(),P(Qe,{key:0,indeterminate:"",size:"small"})):($(),P(z,{key:1,icon:"mdi-sync",size:"x-large"})),M("  Update Family ")]),_:1})):G("",!0)]),_:1}))}}),pt=et(xt,[["__scopeId","data-v-2a702d10"]]);export{pt as default};
