import{R as j}from"./index-B9eHhWSs.js";import{V as D,R as H}from"./rating-popup-BZQd9w9G.js";import{d as I,a as K,r as R,S,b as l,c,w as s,e as t,n as N,v as F,m as q,V as L,f as w,h as v,s as C,C as y,z as M,y as h,F as x,H as T,ak as P,D as z,t as W,E as G,I as U,l as i,$ as J,al as O,W as Q,am as X,an as d,q as A,j as Y}from"./main-B70GkIj-.js";import{V}from"./VRow-CuQ7f1Ee.js";import{V as p}from"./VCol-BMSgih9K.js";import{V as $}from"./VChip-nrhLc83y.js";import{V as Z}from"./VTextField-CfpYqE7h.js";import{V as ee}from"./VContainer-DYD4C6sI.js";/* empty css              */const E=I({__name:"chat-summary",props:{skeleton:{type:Boolean},skeletonShort:{type:Boolean},summary:{},time:{},topics:{},id:{},rating:{},comment:{}},setup(k){let r=!0;const a=k,m=K(),f=R({clickable:null});S(()=>f.clickable,e=>{e&&(e.style.cursor="pointer")});function g(){m.push({name:"chat",params:{chatId:a.id}})}return(e,u)=>e.skeleton?(l(),c(F,{key:0,class:"px-1 px-md-2 py-0"},{default:s(()=>[t(N,null,{default:s(()=>[e.skeletonShort?(l(),c(D,{key:0,type:"avatar, sentences, actions"})):(l(),c(D,{key:1,type:"list-item-avatar-three-line, button@3",class:"flex-row-reverse"}))]),_:1})]),_:1})):(l(),c(F,{key:1,class:"px-1 px-md-2 py-0"},{default:s(()=>[t(N,null,{default:s(()=>[t(V,null,{default:s(()=>[t(p,{cols:"auto",class:"px-0"},{default:s(()=>[t(q,{color:"secondary"},{default:s(()=>[t(L,{icon:"mdi-robot"})]),_:1})]),_:1}),t(p,null,{default:s(()=>[w("div",{ref:o=>{f.clickable=o},onClick:g},[t(V,{"no-gutters":"",class:"align-baseline"},{default:s(()=>[t(p,{cols:"auto",class:"text-start h6"},{default:s(()=>[v(" Luana ")]),_:1}),t(p,null,{default:s(()=>[C(r)?(l(),c(H,{key:0,initialRating:e.rating,initialComment:e.comment},null,8,["initialRating","initialComment"])):y("",!0)]),_:1}),t(p,{cols:"auto",class:"text-end"},{default:s(()=>[e.time&&e.time!="0"&&e.summary?(l(),c(C(j),{key:0,time:new Date(e.time),locale:null},null,8,["time"])):y("",!0),t(L,{icon:"mdi-chevron-right",size:"large"})]),_:1})]),_:1}),t(V,{"no-gutters":"",class:"pb-1"},{default:s(()=>[t(p,{class:"text-start"},{default:s(()=>[v(M(e.summary),1)]),_:1})]),_:1})],512),t(V,{justify:"space-between",class:"align-baseline"},{default:s(()=>[t(p,{cols:"auto"},{default:s(()=>[(l(!0),h(x,null,T(e.topics,(o,n)=>(l(),c($,{key:n,label:"",class:"ma-1",size:"small",variant:"flat",color:o[0]=="!"?"warning":"secondary"},{default:s(()=>[v(M(o[0]=="!"?o.slice(1):o),1)]),_:2},1032,["color"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),te=I({__name:"search-field",props:{searchComplete:{type:Boolean}},emits:["search"],setup(k,{emit:r}){const a=R({searchString:"",searching:!1,chip:""}),m=k,f=r;S(()=>m.searchComplete,()=>{i.debug(i.context(),"searchComplete changed",m.searchComplete,"searchString = ",a.searchString),m.searchComplete&&(a.chip=a.searchString,a.searchString="",a.searching=!1)});function g(){a.searching=!1,a.searchString="",a.chip="",f("search","")}function e(){f("search",a.searchString),a.searching=!0}function u(){i.debug(i.context(),"str=",a.searchString)}return(o,n)=>{const _=P("debounce");return l(),h(x,null,[z(t(Z,{label:"Search","prepend-inner-icon":"mdi-magnify",clearable:"","hide-details":"",modelValue:a.searchString,"onUpdate:modelValue":n[0]||(n[0]=b=>a.searchString=b),"single-line":"",class:"mb-2",density:"compact",loading:a.searching,onDebounced:u,"onClick:prependInner":e,onKeydown:W(e,["enter"]),"onClick:clear":g},null,8,["modelValue","loading"]),[[_,500]]),t(U,null,{default:s(()=>[z(t($,{closable:"","onClick:close":g,class:"mb-2",density:"compact"},{default:s(()=>[v(M(a.chip),1)]),_:1},512),[[G,a.chip]])]),_:1})],64)}}}),ae={key:0},se={key:1},le=I({__name:"chats-view",setup(k){const r=R({searchComplete:!1,filterChats:!1,filteredChats:[]});let a=[{key:0,short:!0},{key:1,short:!1},{key:2,short:!1},{key:3,short:!1},{key:4,short:!0},{key:5,short:!1},{key:6,short:!1},{key:7,short:!0},{key:8,short:!1}];const m=J();S(()=>m.currentAccount,async(e,u)=>{i.debug(i.context(),"currentAccount changed",e,u),e&&(await O(e.id),await f())},{immediate:!0});async function f(){await Q(),window.scrollTo(0,document.body.scrollHeight)}async function g(e){r.searchComplete=!1,i.debug(i.context(),"search=",e),e?X(e).then(()=>{r.searchComplete=!0,r.filterChats=!0,i.debug(i.context(),"searchComplete",r.searchComplete)}).catch(u=>{i.error(i.context(),"search error",u),r.filterChats=!1}):r.filterChats=!1}return S(()=>d.filteredChatsMetadata,()=>{if(!d.allChatsMetadata||!d.filteredChatsMetadata){r.filteredChats=[];return}r.filteredChats=[];for(let e of d.filteredChatsMetadata){let u=d.allChatsMetadata.findIndex(o=>o._id===e);u!==-1&&r.filteredChats.push(d.allChatsMetadata[u])}}),(e,u)=>(l(),c(ee,{class:"v-col-sm-9 v-col-lg-6"},{default:s(()=>[t(te,{onSearch:g,searchComplete:r.searchComplete},null,8,["searchComplete"]),t(U,null,{default:s(()=>[C(d).allChatsMetadata?(l(),h("div",ae,[w("ul",null,[(l(!0),h(x,null,T(r.filterChats?r.filteredChats.entries():C(d).allChatsMetadata.entries(),([o,n])=>{var _,b,B;return l(),h("li",{class:"list-group-item",key:n._id||1},[n._id?(l(),c(E,{key:0,summary:((_=n.summary)==null?void 0:_.content)??"empty",time:((b=n.summary)==null?void 0:b.timestamp)??"0",id:n._id,topics:((B=n.summary)==null?void 0:B.topics)??[]},null,8,["summary","time","id","topics"])):y("",!0),o!==(r.filterChats?r.filteredChats.length-1:C(d).allChatsMetadata.length-1)?(l(),c(A,{key:1,class:"ma-1"})):y("",!0)])}),128))])])):(l(),h("div",se,[w("ul",null,[(l(!0),h(x,null,T(C(a).entries(),([o,n])=>(l(),h("li",{class:"list-group-item",key:o},[t(E,{skeleton:"",skeletonShort:n.short},null,8,["skeletonShort"]),o!==C(a).length-1?(l(),c(A,{key:0,class:"ma-1"})):y("",!0)]))),128))])]))]),_:1})]),_:1}))}}),fe=Y(le,[["__scopeId","data-v-d2a6d80c"]]);export{fe as default};