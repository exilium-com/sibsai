import{L as b,aq as V,b8 as G,O as P,az as S,bb as j,T as m,e as l,D as C,E as z,I as O,ao as E,ax as $,aD as T,aa as r,ak as q,Y as h,V as F,bg as N,b7 as Y,bj as H,b3 as w,b9 as J,bl as K,bo as M,au as Q,bO as U,bP as W,as as X,b6 as Z,b4 as ee,ab as ae,aw as t}from"./main-B70GkIj-.js";const p=Symbol.for("vuetify:v-expansion-panel"),A=b({...V(),...G()},"VExpansionPanelText"),k=P()({name:"VExpansionPanelText",props:A(),setup(e,d){let{slots:n}=d;const a=S(p);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:u}=j(e,a.isSelected);return m(()=>l(O,{onAfterLeave:u},{default:()=>{var o;return[C(l("div",{class:["v-expansion-panel-text",e.class],style:e.style},[n.default&&i.value&&l("div",{class:"v-expansion-panel-text__wrapper"},[(o=n.default)==null?void 0:o.call(n)])]),[[z,a.isSelected.value]])]}})),{}}}),B=b({color:String,expandIcon:{type:E,default:"$expand"},collapseIcon:{type:E,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...V()},"VExpansionPanelTitle"),I=P()({name:"VExpansionPanelTitle",directives:{Ripple:$},props:B(),setup(e,d){let{slots:n}=d;const a=S(p);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:u}=T(e,"color"),o=r(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})),v=r(()=>a.isSelected.value?e.collapseIcon:e.expandIcon);return m(()=>{var f;return C(l("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},i.value,e.class],style:[u.value,e.style],type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[l("span",{class:"v-expansion-panel-title__overlay"},null),(f=n.default)==null?void 0:f.call(n,o.value),!e.hideActions&&l(h,{defaults:{VIcon:{icon:v.value}}},{default:()=>{var x;return[l("span",{class:"v-expansion-panel-title__icon"},[((x=n.actions)==null?void 0:x.call(n,o.value))??l(F,null,null)])]}})]),[[q("ripple"),e.ripple]])}),{}}}),_=b({title:String,text:String,bgColor:String,...N(),...Y(),...H(),...w(),...B(),...A()},"VExpansionPanel"),se=P()({name:"VExpansionPanel",props:_(),emits:{"group:selected":e=>!0},setup(e,d){let{slots:n}=d;const a=J(e,p),{backgroundColorClasses:i,backgroundColorStyles:u}=T(e,"bgColor"),{elevationClasses:o}=K(e),{roundedClasses:v}=M(e),f=r(()=>(a==null?void 0:a.disabled.value)||e.disabled),x=r(()=>a.group.items.value.reduce((c,s,y)=>(a.group.selected.value.includes(s.id)&&c.push(y),c),[])),D=r(()=>{const c=a.group.items.value.findIndex(s=>s.id===a.id);return!a.isSelected.value&&x.value.some(s=>s-c===1)}),L=r(()=>{const c=a.group.items.value.findIndex(s=>s.id===a.id);return!a.isSelected.value&&x.value.some(s=>s-c===-1)});return Q(p,a),m(()=>{const c=!!(n.text||e.text),s=!!(n.title||e.title),y=I.filterProps(e),R=k.filterProps(e);return l(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":D.value,"v-expansion-panel--after-active":L.value,"v-expansion-panel--disabled":f.value},v.value,i.value,e.class],style:[u.value,e.style]},{default:()=>[l("div",{class:["v-expansion-panel__shadow",...o.value]},null),l(h,{defaults:{VExpansionPanelTitle:{...y},VExpansionPanelText:{...R}}},{default:()=>{var g;return[s&&l(I,{key:"title"},{default:()=>[n.title?n.title():e.title]}),c&&l(k,{key:"text"},{default:()=>[n.text?n.text():e.text]}),(g=n.default)==null?void 0:g.call(n)]}})]})}),{groupItem:a}}}),ne=["default","accordion","inset","popout"],le=b({flat:Boolean,...U(),...W(_(),["bgColor","collapseIcon","color","eager","elevation","expandIcon","focusable","hideActions","readonly","ripple","rounded","tile","static"]),...X(),...V(),...w(),variant:{type:String,default:"default",validator:e=>ne.includes(e)}},"VExpansionPanels"),oe=P()({name:"VExpansionPanels",props:le(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:n}=d;const{next:a,prev:i}=Z(e,p),{themeClasses:u}=ee(e),o=r(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return ae({VExpansionPanel:{bgColor:t(e,"bgColor"),collapseIcon:t(e,"collapseIcon"),color:t(e,"color"),eager:t(e,"eager"),elevation:t(e,"elevation"),expandIcon:t(e,"expandIcon"),focusable:t(e,"focusable"),hideActions:t(e,"hideActions"),readonly:t(e,"readonly"),ripple:t(e,"ripple"),rounded:t(e,"rounded"),static:t(e,"static")}}),m(()=>l(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},u.value,o.value,e.class],style:e.style},{default:()=>{var v;return[(v=n.default)==null?void 0:v.call(n,{prev:i,next:a})]}})),{next:a,prev:i}}});export{oe as V,se as a,I as b,k as c};
