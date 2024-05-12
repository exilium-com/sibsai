import{d as I,J as P,H as J,o as ie,al as Fe,z,b as f,c as y,bn as Pe,w as i,e as t,j as R,bo as be,bp as Me,R as Le,l as m,M as Re,bq as Ye,P as re,S as We,br as Xe,h as p,W as A,g as Y,U as D,a2 as xe,X as W,aJ as X,Y as G,Z as pe,T as v,aK as U,a6 as ce,Q as we,q as j,a7 as Ce,a9 as de,bb as ke,bs as Se,b9 as Ve,t as K,bt as Ue,ap as fe,ah as N,be as je,bd as Oe,A as Z,F as Ee,ax as qe,aW as $e,az as Ge,aj as He,y as le,aB as ne,bu as Je,aa as Ke,ab as Ze,aX as Qe,am as et,aY as tt,ag as at,ad as x,bv as nt,f as L,bw as O,aO as lt,bx as it,aM as me,ac as Te,by as De,C as rt,ao as st,E as ot,V as Ae,u as ut,at as ct,ae as dt,bi as mt,bz as he,n as ft}from"./main-J1mwJ8PB.js";import{V as H}from"./VRow-BjIh_6hr.js";import{V as k}from"./VCol-8t7F6D9y.js";import{_ as ht}from"./mermaid-graph.vue_vue_type_style_index_0_lang-r0zrgayu.js";const B=I({__name:"card-favorite",props:{cardType:{}},setup(e){const n=P(),a=J({fav:!1,showFavoriteIcon:!0}),c=e;function l(){var d,S,V;let o=((V=(S=(d=n.person)==null?void 0:d.preferences)==null?void 0:S.favorites)==null?void 0:V.includes(c.cardType))??!1;return m.debug(m.context(),c.cardType,o),o}ie(()=>{a.fav=l(),a.showFavoriteIcon=Fe("showFavoriteIcon",!0)}),z(()=>n.person,()=>{a.fav=l()});async function u(){var C,F,g,w,h,s,_;if(a.fav==l()){m.debug(m.context(),"no change");return}let o={},d={};a.fav?d.favorites=((g=(F=(C=n.person)==null?void 0:C.preferences)==null?void 0:F.favorites)==null?void 0:g.concat(c.cardType))??[c.cardType]:d.favorites=((s=(h=(w=n.person)==null?void 0:w.preferences)==null?void 0:h.favorites)==null?void 0:s.filter(b=>b!=c.cardType))??[],o.preferences=d,m.debug(m.context(),"favorites = ",o.preferences.favorites,"array length = ",(_=o.preferences.favorites)==null?void 0:_.length);const{data:S,error:V}=await Re("/api/person/me",{body:o});V?m.error(m.context(),V):m.debug(m.context(),{data:S}),await Ye()}function r(){a.fav=!a.fav,u()}return(o,d)=>(f(),y(Le,{id:c.cardType},Pe({default:i(()=>[Me(o.$slots,"default")]),_:2},[a.showFavoriteIcon?{name:"append",fn:i(()=>[t(R,{icon:a.fav?"mdi-heart":"mdi-heart-outline",variant:"plain",onClick:be(r,["prevent"])},null,8,["icon"])]),key:"0"}:void 0]),1032,["id"]))}}),yt={key:0},gt=I({__name:"card-weather",props:{city:{},weather:{},temperature:{},temperature_unit:{},humidity:{},wind_speed:{},metric:{type:Boolean},icon:{},alert:{}},setup(e){const n=e;let a=[{day:"Tuesday",icon:"mdi-white-balance-sunny",temp:"24°/12°"},{day:"Wednesday",icon:"mdi-white-balance-sunny",temp:"22°/14°"},{day:"Thursday",icon:"mdi-cloud",temp:"25°/15°"}];function c(u){return Math.floor(u*1.60934)}const l=J({wind:n.metric?Math.floor(n.wind_speed)+"km/h":c(n.wind_speed)+"mph",expand:!1});return(u,r)=>(f(),y(B,{cardType:"Weather",title:n.city,subtitle:n.weather},{default:i(()=>[t(re,{class:"py-0"},{default:i(()=>[t(H,{class:"align-center"},{default:i(()=>[t(k,null,{default:i(()=>[t(We,{size:"x-large"},{default:i(()=>[t(Xe,{src:n.icon},null,8,["src"])]),_:1})]),_:1}),t(k,{class:"text-h5 text-right"},{default:i(()=>[p(A(n.temperature)+" ° "+A(n.temperature_unit),1)]),_:1})]),_:1}),n.alert?(f(),y(H,{key:0},{default:i(()=>[t(k,null,{default:i(()=>[t(Y,{icon:"mdi-alert",size:"18",color:"error",class:"me-1 pb-1"}),p(" "+A(n.alert),1)]),_:1})]),_:1})):D("",!0),t(H,{class:"pb-6 align-center"},{default:i(()=>[t(k,{cols:"6"},{default:i(()=>[t(Y,{icon:"mdi-weather-windy"}),p(" "+A(l.wind),1)]),_:1}),t(k,{cols:"6",class:"text-right"},{default:i(()=>[t(Y,{icon:"mdi-water-percent"}),p(" "+A(n.humidity)+"% ",1)]),_:1})]),_:1})]),_:1}),t(xe,null,{default:i(()=>[l.expand?(f(),W("div",yt,[t(X,{class:"bg-transparent"},{default:i(()=>[(f(!0),W(G,null,pe(v(a),o=>(f(),y(U,{key:o.day,title:o.day,"append-icon":o.icon,subtitle:o.temp},null,8,["title","append-icon","subtitle"]))),128))]),_:1})])):D("",!0)]),_:1}),t(ce),t(we,null,{default:i(()=>[t(R,{onClick:r[0]||(r[0]=o=>l.expand=!l.expand)},{default:i(()=>[p(A(l.expand?"Hide Forecast":"Forecast"),1)]),_:1})]),_:1})]),_:1},8,["title","subtitle"]))}}),vt=j({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:Ce,iconColor:String,lineColor:String,...de(),...ke(),...Se(),...Ve()},"VTimelineDivider"),_t=K()({name:"VTimelineDivider",props:vt(),setup(e,n){let{slots:a}=n;const{sizeClasses:c,sizeStyles:l}=Ue(e,"v-timeline-divider__dot"),{backgroundColorStyles:u,backgroundColorClasses:r}=fe(N(e,"dotColor")),{roundedClasses:o}=je(e,"v-timeline-divider__dot"),{elevationClasses:d}=Oe(e),{backgroundColorClasses:S,backgroundColorStyles:V}=fe(N(e,"lineColor"));return Z(()=>t("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[t("div",{class:["v-timeline-divider__before",S.value],style:V.value},null),!e.hideDot&&t("div",{key:"dot",class:["v-timeline-divider__dot",d.value,o.value,c.value],style:l.value},[t("div",{class:["v-timeline-divider__inner-dot",r.value,o.value],style:u.value},[a.default?t(Ee,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},a.default):t(Y,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),t("div",{class:["v-timeline-divider__after",S.value],style:V.value},null)])),{}}}),Ie=j({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:Ce,iconColor:String,lineInset:[Number,String],...de(),...qe(),...Ve(),...ke(),...Se(),...$e()},"VTimelineItem"),bt=K()({name:"VTimelineItem",props:Ie(),setup(e,n){let{slots:a}=n;const{dimensionStyles:c}=Ge(e),l=He(0),u=le();return z(u,r=>{var o;r&&(l.value=((o=r.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:o.getBoundingClientRect().width)??0)},{flush:"post"}),Z(()=>{var r,o;return t("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":ne(l.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${ne(e.lineInset)})`:ne(0)},e.style]},[t("div",{class:"v-timeline-item__body",style:c.value},[(r=a.default)==null?void 0:r.call(a)]),t(_t,{ref:u,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:a.icon}),e.density!=="compact"&&t("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((o=a.opposite)==null?void 0:o.call(a))])])}),{}}}),xt=j({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...Je(Ie({lineInset:0}),["dotColor","fillDot","hideOpposite","iconColor","lineInset","size"]),...de(),...Ke(),...$e(),...Ze()},"VTimeline"),pt=K()({name:"VTimeline",props:xt(),setup(e,n){let{slots:a}=n;const{themeClasses:c}=Qe(e),{densityClasses:l}=et(e),{rtlClasses:u}=tt();at({VTimelineDivider:{lineColor:N(e,"lineColor")},VTimelineItem:{density:N(e,"density"),dotColor:N(e,"dotColor"),fillDot:N(e,"fillDot"),hideOpposite:N(e,"hideOpposite"),iconColor:N(e,"iconColor"),lineColor:N(e,"lineColor"),lineInset:N(e,"lineInset"),size:N(e,"size")}});const r=x(()=>{const d=e.side?e.side:e.density!=="default"?"end":null;return d&&`v-timeline--side-${d}`}),o=x(()=>{const d=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return d;case"start":return d[0];case"end":return d[1];default:return null}});return Z(()=>t(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,o.value,{"v-timeline--inset-line":!!e.lineInset},c.value,l.value,r.value,u.value,e.class],style:[{"--v-timeline-line-thickness":ne(e.lineThickness)},e.style]},a)),{}}}),wt={class:"mb-1"},Ct={class:"font-weight-normal"},kt=I({__name:"card-today",setup(e){const n=J({expand:!1});let a=[{message:"Take cholesterol pill",time:"10:42am",color:"deep-purple-lighten-1",medicines:!0},{message:"Prepare to leave for dentist appointment",time:"11:45am",color:"green",medicines:!1},{message:"Take fiber pills",time:"3pm",color:"deep-purple-lighten-1",medicines:!0}],c=x(()=>n.expand?a:a.slice(0,1));return(l,u)=>(f(),y(B,{cardType:"Today",title:"Today"},{default:i(()=>[t(nt,null,{subtitle:i(()=>[t(Y,{icon:"mdi-clock",size:"18",color:"error",class:"me-1 pb-1"}),p(" Sunday, Feb 4th, 8:55AM ")]),_:1}),t(re,null,{default:i(()=>[t(pt,{density:"compact",align:"start"},{default:i(()=>[(f(!0),W(G,null,pe(v(c),r=>(f(),y(bt,{key:r.time,"dot-color":r.color,size:"x-small"},{default:i(()=>[L("div",wt,[L("div",Ct,[L("strong",null,A(r.time),1)]),L("div",null,A(r.message),1),r.medicines?(f(),y(H,{key:0},{default:i(()=>[t(k,null,{default:i(()=>[t(R,{color:"primary",class:"mt-2"},{default:i(()=>[p("Taken")]),_:1})]),_:1}),t(k,null,{default:i(()=>[t(R,{color:"primary",class:"mt-2"},{default:i(()=>[p("Skipped")]),_:1})]),_:1})]),_:1})):D("",!0)])]),_:2},1032,["dot-color"]))),128))]),_:1})]),_:1}),t(xe),t(ce),t(we,null,{default:i(()=>[t(R,{onClick:u[0]||(u[0]=r=>n.expand=!n.expand)},{default:i(()=>[p(A(n.expand?"See next reminder":"See all reminders"),1)]),_:1})]),_:1})]),_:1}))}}),St=I({__name:"card-news",setup(e){return(n,a)=>(f(),y(B,{cardType:"News",title:"News"},{default:i(()=>[t(X,null,{default:i(()=>[t(U,{"prepend-icon":"mdi-format-float-left"},{default:i(()=>[p(" 49ers win and go to super-bowl, new recipe for a healthy breakfast ")]),_:1})]),_:1})]),_:1}))}}),Vt=I({__name:"card-chats",setup(e){const n=P();return(a,c)=>{var l;return f(),y(B,{cardType:"Chats",title:"Latest chats",subtitle:v(O)((l=v(n).currentAccount)==null?void 0:l.user)},{default:i(()=>[t(X,null,{default:i(()=>[t(U,{"prepend-icon":"mdi-comment-multiple",density:"compact"},{default:i(()=>[p(" Talked to Luana two hours ago, talked to Fabio 10 days ago ")]),_:1})]),_:1})]),_:1},8,["subtitle"])}}}),$t=L("br",null,null,-1),Tt=L("br",null,null,-1),Dt=I({__name:"card-profile",setup(e){const n=P();return z(()=>{var a;return(a=n.currentAccount)==null?void 0:a.user},()=>{m.debug(m.context(),"user changed")}),(a,c)=>(f(),y(B,{cardType:"Profile",title:"Profile",href:"/profile"},{default:i(()=>[t(re,null,{default:i(()=>[t(H,null,{default:i(()=>[t(k,{cols:"auto"},{default:i(()=>{var l,u,r;return[t(lt,{picture:(l=v(n).currentAccount)==null?void 0:l.user.avatar,firstName:(u=v(n).currentAccount)==null?void 0:u.user.given_name,lastName:(r=v(n).currentAccount)==null?void 0:r.user.family_name},null,8,["picture","firstName","lastName"])]}),_:1}),t(k,{cols:"auto"},{default:i(()=>{var l,u,r;return[p(A(v(O)((l=v(n).currentAccount)==null?void 0:l.user))+" ",1),$t,p(" "+A((u=v(n).currentAccount)==null?void 0:u.user.email)+" ",1),Tt,p(" "+A(v(it)((r=v(n).currentAccount)==null?void 0:r.user))+" years old ",1)]}),_:1})]),_:1})]),_:1})]),_:1}))}}),At=I({__name:"card-family",setup(e){const n=P();z(()=>{var l;return(l=n.currentAccount)==null?void 0:l.user},()=>{m.debug(m.context(),"user changed"),c()});const a=J({familyMap:void 0});async function c(){var r;m.debug(m.context(),"entering");const{data:l,error:u}=await me("/api/person/me/family",{params:{query:{format:"mermaid_mindmap"}}});u||l.mermaid_mindmap==null?(a.familyMap=`mindmap
  id((**${(r=n.currentAccount)==null?void 0:r.user.given_name}**<br>*self*))
  :::self level0
`,u&&m.error(m.context(),u)):(a.familyMap=l.mermaid_mindmap,m.debug(m.context(),a.familyMap))}return ie(async()=>{await c()}),(l,u)=>(f(),y(B,{cardType:"Family",title:"Family",href:"/family"},{default:i(()=>[t(ht,{content:a.familyMap,disablePanzoom:!0,onClick:u[0]||(u[0]=be(()=>{},["prevent"]))},null,8,["content"])]),_:1}))}}),Ne=j({autoDraw:Boolean,autoDrawDuration:[Number,String],autoDrawEasing:{type:String,default:"ease"},color:String,gradient:{type:Array,default:()=>[]},gradientDirection:{type:String,validator:e=>["top","bottom","left","right"].includes(e),default:"top"},height:{type:[String,Number],default:75},labels:{type:Array,default:()=>[]},labelSize:{type:[Number,String],default:7},lineWidth:{type:[String,Number],default:4},id:String,itemValue:{type:String,default:"value"},modelValue:{type:Array,default:()=>[]},min:[String,Number],max:[String,Number],padding:{type:[String,Number],default:8},showLabels:Boolean,smooth:Boolean,width:{type:[Number,String],default:300}},"Line"),ze=j({autoLineWidth:Boolean,...Ne()},"VBarline"),ye=K()({name:"VBarline",props:ze(),setup(e,n){let{slots:a}=n;const c=Te(),l=x(()=>e.id||`barline-${c}`),u=x(()=>Number(e.autoDrawDuration)||500),r=x(()=>!!(e.showLabels||e.labels.length>0||a!=null&&a.label)),o=x(()=>parseFloat(e.lineWidth)||4),d=x(()=>Math.max(e.modelValue.length*o.value,Number(e.width))),S=x(()=>({minX:0,maxX:d.value,minY:0,maxY:parseInt(e.height,10)})),V=x(()=>e.modelValue.map(h=>De(h,e.itemValue,h)));function C(h,s){const{minX:_,maxX:b,minY:$,maxY:T}=s,M=h.length;let Q=e.max!=null?Number(e.max):Math.max(...h),E=e.min!=null?Number(e.min):Math.min(...h);E>0&&e.min==null&&(E=0),Q<0&&e.max==null&&(Q=0);const ee=b/M,te=(T-$)/(Q-E||1),se=T-Math.abs(E*te);return h.map((q,oe)=>{const ue=Math.abs(te*q);return{x:_+oe*ee,y:se-ue+ +(q<0)*ue,height:ue,value:q}})}const F=x(()=>{const h=[],s=C(V.value,S.value),_=s.length;for(let b=0;h.length<_;b++){const $=s[b];let T=e.labels[b];T||(T=typeof $=="object"?$.value:$),h.push({x:$.x,value:String(T)})}return h}),g=x(()=>C(V.value,S.value)),w=x(()=>(Math.abs(g.value[0].x-g.value[1].x)-o.value)/2);Z(()=>{const h=e.gradient.slice().length?e.gradient.slice().reverse():[""];return t("svg",{display:"block"},[t("defs",null,[t("linearGradient",{id:l.value,gradientUnits:"userSpaceOnUse",x1:e.gradientDirection==="left"?"100%":"0",y1:e.gradientDirection==="top"?"100%":"0",x2:e.gradientDirection==="right"?"100%":"0",y2:e.gradientDirection==="bottom"?"100%":"0"},[h.map((s,_)=>t("stop",{offset:_/Math.max(h.length-1,1),"stop-color":s||"currentColor"},null))])]),t("clipPath",{id:`${l.value}-clip`},[g.value.map(s=>t("rect",{x:s.x+w.value,y:s.y,width:o.value,height:s.height,rx:typeof e.smooth=="number"?e.smooth:e.smooth?2:0,ry:typeof e.smooth=="number"?e.smooth:e.smooth?2:0},[e.autoDraw&&t(G,null,[t("animate",{attributeName:"y",from:s.y+s.height,to:s.y,dur:`${u.value}ms`,fill:"freeze"},null),t("animate",{attributeName:"height",from:"0",to:s.height,dur:`${u.value}ms`,fill:"freeze"},null)])]))]),r.value&&t("g",{key:"labels",style:{textAnchor:"middle",dominantBaseline:"mathematical",fill:"currentColor"}},[F.value.map((s,_)=>{var b;return t("text",{x:s.x+w.value+o.value/2,y:parseInt(e.height,10)-2+(parseInt(e.labelSize,10)||7*.75),"font-size":Number(e.labelSize)||7},[((b=a.label)==null?void 0:b.call(a,{index:_,value:s.value}))??s.value])})]),t("g",{"clip-path":`url(#${l.value}-clip)`,fill:`url(#${l.value})`},[t("rect",{x:0,y:0,width:Math.max(e.modelValue.length*o.value,Number(e.width)),height:e.height},null)])])})}});function It(e,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:75;if(e.length===0)return"";const l=e.shift(),u=e[e.length-1];return(a?`M${l.x} ${c-l.x+2} L${l.x} ${l.y}`:`M${l.x} ${l.y}`)+e.map((r,o)=>{const d=e[o+1],S=e[o-1]||l,V=d&&Nt(d,r,S);if(!d||V)return`L${r.x} ${r.y}`;const C=Math.min(ge(S,r),ge(d,r)),g=C/2<n?C/2:n,w=ve(S,r,g),h=ve(d,r,g);return`L${w.x} ${w.y}S${r.x} ${r.y} ${h.x} ${h.y}`}).join("")+(a?`L${u.x} ${c-l.x+2} Z`:"")}function ae(e){return parseInt(e,10)}function Nt(e,n,a){return ae(e.x+a.x)===ae(2*n.x)&&ae(e.y+a.y)===ae(2*n.y)}function ge(e,n){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))}function ve(e,n,a){const c={x:e.x-n.x,y:e.y-n.y},l=Math.sqrt(c.x*c.x+c.y*c.y),u={x:c.x/l,y:c.y/l};return{x:n.x+u.x*a,y:n.y+u.y*a}}const Be=j({fill:Boolean,...Ne()},"VTrendline"),_e=K()({name:"VTrendline",props:Be(),setup(e,n){let{slots:a}=n;const c=Te(),l=x(()=>e.id||`trendline-${c}`),u=x(()=>Number(e.autoDrawDuration)||(e.fill?500:2e3)),r=le(0),o=le(null);function d(s,_){const{minX:b,maxX:$,minY:T,maxY:M}=_,Q=s.length,E=e.max!=null?Number(e.max):Math.max(...s),ee=e.min!=null?Number(e.min):Math.min(...s),te=($-b)/(Q-1),se=(M-T)/(E-ee||1);return s.map((q,oe)=>({x:b+oe*te,y:M-(q-ee)*se,value:q}))}const S=x(()=>!!(e.showLabels||e.labels.length>0||a!=null&&a.label)),V=x(()=>parseFloat(e.lineWidth)||4),C=x(()=>Number(e.width)),F=x(()=>{const s=Number(e.padding);return{minX:s,maxX:C.value-s,minY:s,maxY:parseInt(e.height,10)-s}}),g=x(()=>e.modelValue.map(s=>De(s,e.itemValue,s))),w=x(()=>{const s=[],_=d(g.value,F.value),b=_.length;for(let $=0;s.length<b;$++){const T=_[$];let M=e.labels[$];M||(M=typeof T=="object"?T.value:T),s.push({x:T.x,value:String(M)})}return s});z(()=>e.modelValue,async()=>{if(await rt(),!e.autoDraw||!o.value)return;const s=o.value,_=s.getTotalLength();e.fill?(s.style.transformOrigin="bottom center",s.style.transition="none",s.style.transform="scaleY(0)",s.getBoundingClientRect(),s.style.transition=`transform ${u.value}ms ${e.autoDrawEasing}`,s.style.transform="scaleY(1)"):(s.style.strokeDasharray=`${_}`,s.style.strokeDashoffset=`${_}`,s.getBoundingClientRect(),s.style.transition=`stroke-dashoffset ${u.value}ms ${e.autoDrawEasing}`,s.style.strokeDashoffset="0"),r.value=_},{immediate:!0});function h(s){return It(d(g.value,F.value),e.smooth?8:Number(e.smooth),s,parseInt(e.height,10))}Z(()=>{var _;const s=e.gradient.slice().length?e.gradient.slice().reverse():[""];return t("svg",{display:"block","stroke-width":parseFloat(e.lineWidth)??4},[t("defs",null,[t("linearGradient",{id:l.value,gradientUnits:"userSpaceOnUse",x1:e.gradientDirection==="left"?"100%":"0",y1:e.gradientDirection==="top"?"100%":"0",x2:e.gradientDirection==="right"?"100%":"0",y2:e.gradientDirection==="bottom"?"100%":"0"},[s.map((b,$)=>t("stop",{offset:$/Math.max(s.length-1,1),"stop-color":b||"currentColor"},null))])]),S.value&&t("g",{key:"labels",style:{textAnchor:"middle",dominantBaseline:"mathematical",fill:"currentColor"}},[w.value.map((b,$)=>{var T;return t("text",{x:b.x+V.value/2+V.value/2,y:parseInt(e.height,10)-4+(parseInt(e.labelSize,10)||7*.75),"font-size":Number(e.labelSize)||7},[((T=a.label)==null?void 0:T.call(a,{index:$,value:b.value}))??b.value])})]),t("path",{ref:o,d:h(e.fill),fill:e.fill?`url(#${l.value})`:"none",stroke:e.fill?"none":`url(#${l.value})`},null),e.fill&&t("path",{d:h(!1),fill:"none",stroke:e.color??((_=e.gradient)==null?void 0:_[0])},null)])})}}),zt=j({type:{type:String,default:"trend"},...ze(),...Be()},"VSparkline"),Bt=K()({name:"VSparkline",props:zt(),setup(e,n){let{slots:a}=n;const{textColorClasses:c,textColorStyles:l}=st(N(e,"color")),u=x(()=>!!(e.showLabels||e.labels.length>0||a!=null&&a.label)),r=x(()=>{let o=parseInt(e.height,10);return u.value&&(o+=parseInt(e.labelSize,10)*1.5),o});Z(()=>{const o=e.type==="trend"?_e:ye,d=e.type==="trend"?_e.filterProps(e):ye.filterProps(e);return t(o,ot({key:e.type,class:c.value,style:l.value,viewBox:`0 0 ${e.width} ${parseInt(r.value,10)}`},d),a)})}}),Ft=L("div",{class:"subheading font-weight-light text-grey"}," ??? ",-1),Pt=L("span",{class:"text-caption text-grey font-weight-light"},"Last interaction 26 minutes ago",-1),Mt=I({__name:"card-usage",setup(e){const n=P();z(()=>{var u;return(u=n.currentAccount)==null?void 0:u.user},()=>{m.debug(m.context(),"user changed")});const a=[["#222"],["#42b3f4"],["red","orange","yellow"],["purple","violet"],["#00c6ff","#F0F","#FF0"],["#f72047","#ffd200","#1feaea"]],c=[0,3,6,9,12,15,18,21],l=[200,675,410,390,310,460,250,240];return(u,r)=>{var o;return f(),y(B,{cardType:"Usage",title:"Usage",subtitle:v(O)((o=v(n).currentAccount)==null?void 0:o.user)+"'s interactions",class:"overflow-visible"},{default:i(()=>[t(Ae,null,{default:i(()=>[t(Bt,{labels:c,"model-value":l,gradient:a[2],smooth:!0,padding:"8","line-width":"6","auto-line-width":!1,"stroke-linecap":"round","gradient-direction":"top",fill:!1,type:"bar","auto-draw":""},null,8,["gradient"])]),_:1}),t(re,{class:"pt-0"},{default:i(()=>[Ft,t(ce,{class:"my-2"}),t(Y,{class:"me-2",size:"small"},{default:i(()=>[p(" mdi-clock ")]),_:1}),Pt]),_:1})]),_:1},8,["subtitle"])}}}),Lt=I({__name:"card-meds",setup(e){const n=P();return z(()=>{var a;return(a=n.currentAccount)==null?void 0:a.user},()=>{m.debug(m.context(),"user changed")}),(a,c)=>{var l;return f(),y(B,{cardType:"Meds",title:"Medications",subtitle:v(O)((l=v(n).currentAccount)==null?void 0:l.user)+"'s list",href:"/profile"},{default:i(()=>[t(X,null,{default:i(()=>[t(U,{"prepend-icon":"mdi-pill-multiple"},{default:i(()=>[p(" Atovarstatin, Vitamin D, Levothyroxine, Vitamin C, Aspirin, Vitamin B-12 ")]),_:1})]),_:1})]),_:1},8,["subtitle"])}}}),Rt=I({__name:"card-sharing",setup(e){const n=P();z(()=>{var l;return(l=n.currentAccount)==null?void 0:l.user},()=>{m.debug(m.context(),"user changed"),c()});const a=J({sharingCount:0});async function c(){var l,u;if(m.debug(m.context(),"entering"),a.sharingCount=0,(l=n.currentAccount)!=null&&l.id){const{data:r,error:o}=await me("/api/account/{account_id}/admins",{params:{path:{account_id:(u=n.currentAccount)==null?void 0:u.id}}});o&&m.error(m.context(),o),a.sharingCount=r?r.length-1:0}}return ie(async()=>{await c()}),(l,u)=>{var r;return f(),y(B,{cardType:"Sharing",title:"Sharing",subtitle:v(O)((r=v(n).currentAccount)==null?void 0:r.user),to:"/sharing"},{default:i(()=>[t(X,null,{default:i(()=>[t(U,{"prepend-icon":"mdi-human-greeting-variant"},{default:i(()=>[a.sharingCount>0?(f(),W(G,{key:0},[p(" Sharing data with "+A(a.sharingCount)+" person"+A(a.sharingCount>1?"s":""),1)],64)):(f(),W(G,{key:1},[p(" Not sharing with anyone yet ")],64)),v(n).invitationCount>0?(f(),W(G,{key:2},[p(" , "+A(v(n).invitationCount)+" pending invitation"+A(v(n).invitationCount>1?"s":""),1)],64)):D("",!0)]),_:1})]),_:1})]),_:1},8,["subtitle"])}}}),Yt=I({__name:"card-concerns",setup(e){const n=P();return z(()=>{var a;return(a=n.currentAccount)==null?void 0:a.user},()=>{m.debug(m.context(),"user changed")}),(a,c)=>{var l;return f(),y(B,{cardType:"Concerns",title:"Concerns",subtitle:v(O)((l=v(n).currentAccount)==null?void 0:l.user)},{default:i(()=>[t(X,null,{default:i(()=>[t(U,null,{prepend:i(()=>[t(Y,{color:"red"},{default:i(()=>[p("mdi-alert")]),_:1})]),default:i(()=>[p(" Asked emergency contact to call ")]),_:1})]),_:1})]),_:1},8,["subtitle"])}}}),Wt=I({__name:"card-interests",setup(e){const n=P();return z(()=>{var a;return(a=n.currentAccount)==null?void 0:a.user},()=>{m.debug(m.context(),"user changed")}),(a,c)=>{var l;return f(),y(B,{cardType:"Interests",title:"Interests",subtitle:v(O)((l=v(n).currentAccount)==null?void 0:l.user)},{default:i(()=>[t(X,null,{default:i(()=>[t(U,{"prepend-icon":"mdi-star"},{default:i(()=>[p(" Sports, Hiking, Biking, Reading, Cooking, Gardening ")]),_:1})]),_:1})]),_:1},8,["subtitle"])}}}),Xt={key:0,class:"pt-4 text-end"},Ut=I({__name:"cards-view",props:{onlyFavorites:{type:Boolean}},setup(e){const n=e;let a=le(!n.onlyFavorites);const{isAuthenticated:c}=ut();m.debug(m.context(),">>>> home page, isAuthenticated",c.value);const{xs:l,sm:u}=ct(),r=x(()=>u.value||l.value?12:6),o=P(),d=J({daily_updates:void 0,city:void 0,favorites:[]});function S(){var g,w,h,s,_,b;d.favorites=((w=(g=o.person)==null?void 0:g.preferences)==null?void 0:w.favorites)??[],m.debug(m.context(),"person = ",o.person,"preferences = ",(h=o.person)==null?void 0:h.preferences,"favorites = ",(_=(s=o.person)==null?void 0:s.preferences)==null?void 0:_.favorites,"array length = ",(b=d.favorites)==null?void 0:b.length)}function V(g){return d.favorites.includes(g)}function C(g){return a.value||V(g)}ie(()=>{S(),dt("showFavoriteIcon",a)}),z(()=>o.person,()=>{S()}),z(()=>[o.currentAccount],async(g,w)=>{var h,s;o.currentAccount&&(m.debug(m.context(),"currentAccount changed, fetching daily updates",{newValue:g},{oldValue:w}),await F(),(s=(h=d.daily_updates)==null?void 0:h.weather)!=null&&s.city?d.city=[d.daily_updates.weather.city,d.daily_updates.weather.country].filter(Boolean).join(", "):d.city="")},{immediate:!0});async function F(){if(!o.currentAccount)return;const{data:g,error:w}=await me("/api/account/{account_id}/daily_updates",{params:{path:{account_id:o.currentAccount.id}}});w&&m.error(m.context(),w),g&&(m.debug(m.context(),g),d.daily_updates=g)}return(g,w)=>(f(),y(Ae,{class:"v-col-sm-12 v-col-lg-6"},{default:i(()=>[t(H,{dense:""},{default:i(()=>[t(mt,{name:"grow"},{default:i(()=>[C("Today")?(f(),y(k,{key:0,cols:r.value},{default:i(()=>[t(kt,{text1:"Dentist appointment",text2:"Tomorrow at 10am"})]),_:1},8,["cols"])):D("",!0),C("Weather")&&d.daily_updates&&d.daily_updates.weather?(f(),y(k,{key:1,cols:r.value},{default:i(()=>[t(gt,{height:"100%",city:d.city??"-",weather:d.daily_updates.weather.description,temperature:d.daily_updates.weather.temperature,temperature_unit:"C",icon:d.daily_updates.weather.icon,wind_speed:d.daily_updates.weather.wind_speed,metric:!0,humidity:d.daily_updates.weather.humidity},null,8,["city","weather","temperature","icon","wind_speed","humidity"])]),_:1},8,["cols"])):D("",!0),C("Chats")?(f(),y(k,{key:2,cols:r.value},{default:i(()=>[t(Vt,{height:"100%"})]),_:1},8,["cols"])):D("",!0),C("News")?(f(),y(k,{key:3,cols:r.value},{default:i(()=>[t(St,{height:"100%"})]),_:1},8,["cols"])):D("",!0),C("Profile")?(f(),y(k,{key:4,cols:r.value},{default:i(()=>[t(Dt,{height:"100%"})]),_:1},8,["cols"])):D("",!0),C("Family")?(f(),y(k,{key:5,cols:r.value},{default:i(()=>[t(At,{height:"100%"})]),_:1},8,["cols"])):D("",!0),C("Usage")?(f(),y(k,{key:6,cols:r.value},{default:i(()=>[t(Mt,{height:"100%"})]),_:1},8,["cols"])):D("",!0),C("Meds")?(f(),y(k,{key:7,cols:r.value},{default:i(()=>[t(Lt,{height:"100%"})]),_:1},8,["cols"])):D("",!0),C("Sharing")?(f(),y(k,{key:8,cols:r.value},{default:i(()=>[t(Rt,{height:"100%"})]),_:1},8,["cols"])):D("",!0),C("Concerns")?(f(),y(k,{key:9,cols:r.value},{default:i(()=>[t(Yt,{height:"100%"})]),_:1},8,["cols"])):D("",!0),C("Interests")?(f(),y(k,{key:10,cols:r.value},{default:i(()=>[t(Wt,{height:"100%"})]),_:1},8,["cols"])):D("",!0)]),_:1})]),_:1}),n.onlyFavorites?(f(),W("div",Xt,[v(a)?(f(),y(R,{key:1,block:"",variant:"plain",onClick:w[1]||(w[1]=h=>he(a)?a.value=!1:a=!1)},{default:i(()=>[p("Show favorites")]),_:1})):(f(),y(R,{key:0,block:"",variant:"plain",onClick:w[0]||(w[0]=h=>he(a)?a.value=!0:a=!0)},{default:i(()=>[p("Show more")]),_:1}))])):D("",!0)]),_:1}))}}),Gt=ft(Ut,[["__scopeId","data-v-cabebb79"]]);export{Gt as F};
