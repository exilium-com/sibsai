import{d as w,H as S,bk as I,bl as R,b as m,c as g,w as r,g as c,U as p,e as n,aI as B,R as P,V as A,j as k,b7 as T,T as L,J as z,l as b,bm as y,n as U,q as $,ax as D,b9 as j,ab as q,t as E,ap as F,ah as M,az as N,bd as G,aX as H,aG as J,ad as O,an as X,A as K}from"./main-DvUrgrR9.js";import{V as Q}from"./VRow-CW_IcRvc.js";import{V as x}from"./VCol-C5-JK7ff.js";import{V as W}from"./VTextField-Cu_6rxR4.js";const Y=w({__name:"rating-popup",props:{initialRating:{},initialComment:{},messageIndex:{}},setup(t){const a=t,e=S({ratingPopup:!1,rating:a.initialRating??0,comment:a.initialComment??""});let s=e.rating,d=e.comment,f=["thumbs-down","thumbs-none","thumbs-up"];function u(){const i=z();if(!i.currentAccount){b.error(b.context(),"no current account");return}if(!i.chatId){b.error(b.context(),"no chat id");return}(e.rating!=s||e.comment!=d)&&(a.messageIndex==null?y("/api/chat/{account_id}/{chat_id}/summary",{params:{path:{account_id:i.currentAccount.id,chat_id:i.chatId}},body:{rating:e.rating,comment:e.comment}}).then(()=>{s=e.rating,d=e.comment}):y("/api/chat/{account_id}/{chat_id}",{params:{path:{account_id:i.currentAccount.id,chat_id:i.chatId},query:{message_index:a.messageIndex}},body:{rating:e.rating,comment:e.comment}}).then(()=>{s=e.rating,d=e.comment}))}return I(()=>{u()}),R(()=>{u()}),(i,o)=>i.gDevMode?(m(),g(k,{key:0,icon:"",variant:"plain",onClick:o[3]||(o[3]=l=>e.ratingPopup=!e.ratingPopup),class:T(L(f)[e.rating+1]),size:"x-small"},{default:r(()=>[e.rating==-1?(m(),g(c,{key:0,icon:"mdi-thumb-down"})):p("",!0),e.rating==0?(m(),g(c,{key:1,icon:"mdi-thumb-up-outline"})):p("",!0),e.rating==1?(m(),g(c,{key:2,icon:"mdi-thumb-up"})):p("",!0),n(B,{activator:"parent"},{default:r(()=>[n(P,null,{default:r(()=>[n(A,{class:"d-inline-flex pa-2 pt-0",style:{"min-width":"400px"}},{default:r(()=>[n(Q,{dense:"",class:"align-end"},{default:r(()=>[n(x,{cols:"auto"},{default:r(()=>[n(k,{icon:"",color:e.rating==1?"success":"light",onClick:o[0]||(o[0]=l=>e.rating=e.rating==1?0:1),size:"x-small"},{default:r(()=>[n(c,{icon:"mdi-thumb-up"})]),_:1},8,["color"])]),_:1}),n(x,{cols:"auto"},{default:r(()=>[n(k,{icon:"",color:e.rating==-1?"error":"light",onClick:o[1]||(o[1]=l=>e.rating=e.rating==-1?0:-1),size:"x-small"},{default:r(()=>[n(c,{icon:"mdi-thumb-down"})]),_:1},8,["color"])]),_:1}),n(x,null,{default:r(()=>[n(W,{"hide-details":"",density:"compact",variant:"underlined",placeholder:"Optional Comment",modelValue:e.comment,"onUpdate:modelValue":o[2]||(o[2]=l=>e.comment=l)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["class"])):p("",!0)}}),re=U(Y,[["__scopeId","data-v-0629c3b6"]]),Z={actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, heading","card-avatar":"image, list-item-avatar",chip:"chip","date-picker":"list-item, heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",divider:"divider",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",ossein:"ossein",paragraph:"text@3",sentences:"text@2",subtitle:"text",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"chip, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"text@6","table-tfoot":"text@2, avatar@2",text:"text"};function ee(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return n("div",{class:["v-skeleton-loader__bone",`v-skeleton-loader__${t}`]},[a])}function C(t){const[a,e]=t.split("@");return Array.from({length:e}).map(()=>h(a))}function h(t){let a=[];if(!t)return a;const e=Z[t];if(t!==e){if(t.includes(","))return V(t);if(t.includes("@"))return C(t);e.includes(",")?a=V(e):e.includes("@")?a=C(e):e&&a.push(h(e))}return[ee(t,a)]}function V(t){return t.replace(/\s/g,"").split(",").map(h)}const te=$({boilerplate:Boolean,color:String,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},type:{type:[String,Array],default:"ossein"},...D(),...j(),...q()},"VSkeletonLoader"),le=E()({name:"VSkeletonLoader",props:te(),setup(t,a){let{slots:e}=a;const{backgroundColorClasses:s,backgroundColorStyles:d}=F(M(t,"color")),{dimensionStyles:f}=N(t),{elevationClasses:u}=G(t),{themeClasses:i}=H(t),{t:o}=J(),l=O(()=>h(X(t.type).join(",")));return K(()=>{var _;const v=!e.default||t.loading;return n("div",{class:["v-skeleton-loader",{"v-skeleton-loader--boilerplate":t.boilerplate},i.value,s.value,u.value],style:[d.value,v?f.value:{}],"aria-busy":t.boilerplate?void 0:v,"aria-live":t.boilerplate?void 0:"polite","aria-label":t.boilerplate?void 0:o(t.loadingText),role:t.boilerplate?void 0:"alert"},[v?l.value:(_=e.default)==null?void 0:_.call(e)])}),{}}});export{re as R,le as V};
