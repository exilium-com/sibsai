import{R as K}from"./index-Ds8sQTGX.js";import{R as L}from"./rating-popup-BJUnKf4E.js";import{d as V,a as U,m as z,x as I,r as o,b as n,c as d,w as a,e as s,f as D,g as B,y as C,z as w,A as T,B as f,F as R,C as N,D as E,E as H,G as $,l as i,n as j,H as p,I as G,J,K as P,k as q}from"./main-DXoWvGcG.js";const A=V({__name:"chat-summary",props:{skeleton:{type:Boolean},skeletonShort:{type:Boolean},summary:{},time:{},topics:{},id:{},rating:{},comment:{}},setup(S){let l=!0;const t=S,v=U(),g=z({clickable:null});I(()=>g.clickable,e=>{e&&(e.style.cursor="pointer")});function k(){v.push({name:"chat",params:{chatId:t.id}})}return(e,u)=>{const _=o("v-skeleton-loader"),y=o("v-card-text"),b=o("v-card"),h=o("v-icon"),r=o("v-avatar"),c=o("v-col"),m=o("v-row"),M=o("v-chip");return e.skeleton?(n(),d(b,{key:0,class:"px-1 px-md-2 py-0"},{default:a(()=>[s(y,null,{default:a(()=>[e.skeletonShort?(n(),d(_,{key:0,type:"avatar, sentences, actions"})):(n(),d(_,{key:1,type:"list-item-avatar-three-line, button@3",class:"flex-row-reverse"}))]),_:1})]),_:1})):(n(),d(b,{key:1,class:"px-1 px-md-2 py-0"},{default:a(()=>[s(y,null,{default:a(()=>[s(m,null,{default:a(()=>[s(c,{cols:"auto",class:"px-0"},{default:a(()=>[s(r,{color:"secondary"},{default:a(()=>[s(h,{icon:"mdi-robot"})]),_:1})]),_:1}),s(c,null,{default:a(()=>[D("div",{ref:x=>{g.clickable=x},onClick:k},[s(m,{"no-gutters":"",class:"align-baseline"},{default:a(()=>[s(c,{cols:"auto",class:"text-start h6"},{default:a(()=>[B(" Luana ")]),_:1}),s(c,null,{default:a(()=>[C(l)?(n(),d(L,{key:0,initialRating:e.rating,initialComment:e.comment},null,8,["initialRating","initialComment"])):w("",!0)]),_:1}),s(c,{cols:"auto",class:"text-end"},{default:a(()=>[e.time&&e.time!="0"&&e.summary?(n(),d(C(K),{key:0,time:new Date(e.time),locale:null},null,8,["time"])):w("",!0),s(h,{icon:"mdi-chevron-right",size:"large"})]),_:1})]),_:1}),s(m,{"no-gutters":"",class:"pb-1"},{default:a(()=>[s(c,{class:"text-start"},{default:a(()=>[B(T(e.summary),1)]),_:1})]),_:1})],512),s(m,{justify:"space-between",class:"align-baseline"},{default:a(()=>[s(c,{cols:"auto"},{default:a(()=>[(n(!0),f(R,null,N(e.topics,(x,F)=>(n(),d(M,{key:F,label:"",class:"ma-1",size:"small",variant:"flat",color:x[0]=="!"?"warning":"secondary"},{default:a(()=>[B(T(x[0]=="!"?x.slice(1):x),1)]),_:2},1032,["color"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}}),O=V({__name:"search-field",props:{searchComplete:{type:Boolean}},emits:["search"],setup(S,{emit:l}){const t=z({searchString:"",searching:!1,chip:""}),v=S,g=l;I(()=>v.searchComplete,()=>{i.debug(i.context(),"searchComplete changed",v.searchComplete,"searchString = ",t.searchString),v.searchComplete&&(t.chip=t.searchString,t.searchString="",t.searching=!1)});function k(){t.searching=!1,t.searchString="",t.chip="",g("search","")}function e(){g("search",t.searchString),t.searching=!0}function u(){i.debug(i.context(),"str=",t.searchString)}return(_,y)=>{const b=o("v-text-field"),h=o("v-chip"),r=o("v-expand-transition"),c=E("debounce");return n(),f(R,null,[H(s(b,{label:"Search","prepend-inner-icon":"mdi-magnify",clearable:"","hide-details":"",modelValue:t.searchString,"onUpdate:modelValue":y[0]||(y[0]=m=>t.searchString=m),"single-line":"",class:"mb-2",density:"compact",loading:t.searching,onDebounced:u,"onClick:prependInner":e,onKeydown:$(e,["enter"]),"onClick:clear":k},null,8,["modelValue","loading"]),[[c,500]]),s(r,null,{default:a(()=>[t.chip?(n(),d(h,{key:0,closable:"","onClick:close":k,class:"mb-2",density:"compact"},{default:a(()=>[B(T(t.chip),1)]),_:1})):w("",!0)]),_:1})],64)}}}),Q={key:0},W={key:1},X=V({__name:"chats-view",setup(S){const l=z({searchComplete:!1,filterChats:!1,filteredChats:[]});let t=[{key:0,short:!0},{key:1,short:!1},{key:2,short:!1},{key:3,short:!1},{key:4,short:!0},{key:5,short:!1},{key:6,short:!1},{key:7,short:!0},{key:8,short:!1}];const v=j();I(()=>v.currentAccount,async(e,u)=>{i.debug(i.context(),"currentAccount changed",e,u),e&&(await G(e.id),await g())},{immediate:!0});async function g(){await J(),window.scrollTo(0,document.body.scrollHeight)}async function k(e){l.searchComplete=!1,i.debug(i.context(),"search=",e),e?P(e).then(()=>{l.searchComplete=!0,l.filterChats=!0,i.debug(i.context(),"searchComplete",l.searchComplete)}).catch(u=>{i.error(i.context(),"search error",u),l.filterChats=!1}):l.filterChats=!1}return I(()=>p.filteredChatsMetadata,()=>{if(!p.allChatsMetadata||!p.filteredChatsMetadata){l.filteredChats=[];return}l.filteredChats=[];for(let e of p.filteredChatsMetadata){let u=p.allChatsMetadata.findIndex(_=>_._id===e);u!==-1&&l.filteredChats.push(p.allChatsMetadata[u])}}),(e,u)=>{const _=o("v-divider"),y=o("v-expand-transition"),b=o("v-container");return n(),d(b,{class:"v-col-sm-9 v-col-lg-6"},{default:a(()=>[s(O,{onSearch:k,searchComplete:l.searchComplete},null,8,["searchComplete"]),s(y,null,{default:a(()=>[C(p).allChatsMetadata?(n(),f("div",Q,[D("ul",null,[(n(!0),f(R,null,N(l.filterChats?l.filteredChats.entries():C(p).allChatsMetadata.entries(),([h,r])=>{var c,m,M;return n(),f("li",{class:"list-group-item",key:r._id||1},[r._id?(n(),d(A,{key:0,summary:((c=r.summary)==null?void 0:c.content)??"empty",time:((m=r.summary)==null?void 0:m.timestamp)??"0",id:r._id,topics:((M=r.summary)==null?void 0:M.topics)??[]},null,8,["summary","time","id","topics"])):w("",!0),h!==(l.filterChats?l.filteredChats.length-1:C(p).allChatsMetadata.length-1)?(n(),d(_,{key:1,class:"ma-1"})):w("",!0)])}),128))])])):(n(),f("div",W,[D("ul",null,[(n(!0),f(R,null,N(C(t).entries(),([h,r])=>(n(),f("li",{class:"list-group-item",key:h},[s(A,{skeleton:"",skeletonShort:r.short},null,8,["skeletonShort"]),h!==C(t).length-1?(n(),d(_,{key:0,class:"ma-1"})):w("",!0)]))),128))])]))]),_:1})]),_:1})}}}),te=q(X,[["__scopeId","data-v-8b1ded70"]]);export{te as default};
