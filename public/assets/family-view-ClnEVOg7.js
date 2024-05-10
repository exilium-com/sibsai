import{_ as g}from"./mermaid-graph.vue_vue_type_style_index_0_lang-DfuaoyRT.js";import{d as M,m as O,o as S,c as l,w as c,l as e,n as f,M as y,R as b,r as i,b as d,e as o,g as m,A as F,z as v,q as x,k as $}from"./main-DXoWvGcG.js";import{C as q}from"./chat-thread-CoLopJdp.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ds8sQTGX.js";import"./rating-popup-BJUnKf4E.js";const B=M({__name:"family-view",setup(R){const a=O({familyMap:void 0,familyTree:void 0,personName:void 0,activeTabId:"mindmap",familyChat:void 0,needsUpdate:!1,processingUpdate:!1,readOnly:!1});async function h(){e.debug(e.context(),"entering");const r=f();if(e.debug(e.context(),`person is ${r.person}`),!r.person){e.error(e.context(),"no person");return}a.personName=r.person.given_name;{const{data:t,error:n}=await y("/api/person/me/family",{params:{query:{format:"mermaid_mindmap"}}});e.debug(e.context(),t),n||t.mermaid_mindmap==null?(a.familyMap=`mindmap
  id((**${a.personName}**<br>*self*))
  :::self level0
`,a.activeTabId="chat",n&&e.error(e.context(),n)):(a.familyMap=t.mermaid_mindmap,e.debug(e.context(),a.familyMap))}{const{data:t,error:n}=await y("/api/person/me/family",{params:{query:{format:"mermaid_graph"}}});e.debug(e.context(),t),n||t.mermaid_graph==null?(a.familyTree=`graph
  id((${a.personName}<br>self))
`,n&&e.error(e.context(),n)):(a.familyTree=t.mermaid_graph,e.debug(e.context(),a.familyTree))}}async function w(){var s;e.debug(e.context(),"entering");const r=f();if(e.debug(e.context(),`accountId is ${(s=r.currentAccount)==null?void 0:s.id}`),!r.currentAccount){e.error(e.context(),"no current account"),a.familyChat=void 0;return}const{data:t,error:n}=await y("/api/account/{account_id}/latestchat",{params:{path:{account_id:r.currentAccount.id},query:{kind:"family_tree",closed:!1}}});n?e.error(e.context(),n):(t==null?a.familyChat=await b("family_tree"):a.familyChat=t._id,e.debug(e.context(),t,a.familyChat))}async function C(){e.debug(e.context(),"entering");const r=f();if(!r.currentAccount){e.error(e.context(),"no current account");return}a.readOnly=!0,a.processingUpdate=!0,e.debug(e.context(),"summarizing chat"),x("/api/chat/{account_id}/{chat_id}/summarize",{params:{path:{account_id:r.currentAccount.id,chat_id:a.familyChat}}}).then(async t=>{if(e.debug(e.context(),"summarize returns",t),await h(),a.activeTabId="mindmap",a.needsUpdate=!1,!r.currentAccount){e.error(e.context(),"no current account");return}e.debug(e.context(),"closing chat");const{error:n}=await x("/api/chat/{account_id}/{chat_id}/close",{params:{path:{account_id:r.currentAccount.id,chat_id:a.familyChat}}});n?e.error(e.context(),n):a.familyChat=await b("family_tree")}).finally(()=>{a.processingUpdate=!1,a.readOnly=!1})}S(async()=>{await h(),await w()});function T(){e.debug(e.context(),"needsUpdate -> true"),a.needsUpdate=!0}return(r,t)=>{const n=i("v-card-title"),s=i("v-icon"),u=i("v-tab"),U=i("v-tabs"),p=i("v-window-item"),I=i("v-window"),N=i("v-card-text"),k=i("v-card"),V=i("v-progress-circular"),z=i("v-btn"),A=i("v-container");return d(),l(A,{class:"h-100 v-col-sm-9 v-col-lg-6"},{default:c(()=>[o(k,{class:"py-2 h-100"},{default:c(()=>[a.personName?(d(),l(n,{key:0,class:"text-center"},{default:c(()=>[m(F(a.personName)+"'s Family ",1)]),_:1})):v("",!0),o(U,{modelValue:a.activeTabId,"onUpdate:modelValue":t[0]||(t[0]=_=>a.activeTabId=_),"align-tabs":"center","fixed-tabs":""},{default:c(()=>[o(u,{value:"mindmap"},{default:c(()=>[o(s,{icon:"mdi-atom",size:"large"}),m("  Relations ")]),_:1}),o(u,{value:"tree"},{default:c(()=>[o(s,{icon:"mdi-sitemap",size:"large"}),m(" Tree ")]),_:1}),o(u,{value:"chat"},{default:c(()=>[o(s,{icon:"mdi-comment-multiple",size:"large"}),m(" Chat ")]),_:1})]),_:1},8,["modelValue"]),o(N,{class:"h-100"},{default:c(()=>[o(I,{modelValue:a.activeTabId,"onUpdate:modelValue":t[1]||(t[1]=_=>a.activeTabId=_),class:"h-100"},{default:c(()=>[o(p,{value:"mindmap",class:"h-100"},{default:c(()=>[o(g,{content:a.familyMap},null,8,["content"])]),_:1}),o(p,{value:"tree",class:"h-100"},{default:c(()=>[o(g,{content:a.familyTree},null,8,["content"])]),_:1}),o(p,{value:"chat"},{default:c(()=>[a.familyChat?(d(),l(q,{key:0,chatId:a.familyChat,readOnly:a.readOnly,onSummaryNeedsUpdate:T},null,8,["chatId","readOnly"])):v("",!0)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),a.needsUpdate?(d(),l(z,{key:0,class:"me-2 mb-2 floating",elevation:"12",onClick:C,color:"primary"},{default:c(()=>[a.processingUpdate?(d(),l(V,{key:0,indeterminate:"",size:"small"})):(d(),l(s,{key:1,icon:"mdi-sync",size:"x-large"})),m("  Update Family ")]),_:1})):v("",!0)]),_:1})}}}),K=$(B,[["__scopeId","data-v-2a702d10"]]);export{K as default};
