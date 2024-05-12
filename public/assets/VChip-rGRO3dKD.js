import{q as L,a8 as J,a9 as R,bM as Q,aW as z,ab as F,c3 as T,t as w,aX as M,aZ as ee,ag as ae,ah as r,A as le,e as l,E as O,a7 as C,bO as G,b8 as te,aa as ne,b9 as se,a_ as ie,bb as ce,c4 as de,bs as oe,ai as ue,aG as re,bc as ve,c5 as fe,am as pe,bd as me,be as ke,bt as be,v as he,b0 as ye,c6 as Ce,ad as V,a0 as _,$ as Ve,c7 as Pe,bU as ge,g as v,F as f,aP as Ie,Y as x,S as D}from"./main-J1mwJ8PB.js";import{m as Se,V as E}from"./VSlideGroup-BEQo82bC.js";const $=Symbol.for("vuetify:v-chip-group"),Ae=L({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:J},...Se(),...R(),...Q({selectedClass:"v-chip--selected"}),...z(),...F(),...T({variant:"tonal"})},"VChipGroup");w()({name:"VChipGroup",props:Ae(),emits:{"update:modelValue":e=>!0},setup(e,p){let{slots:c}=p;const{themeClasses:o}=M(e),{isSelected:t,select:m,next:k,prev:b,selected:h}=ee(e,$);return ae({VChip:{color:r(e,"color"),disabled:r(e,"disabled"),filter:r(e,"filter"),variant:r(e,"variant")}}),le(()=>{const y=E.filterProps(e);return l(E,O(y,{class:["v-chip-group",{"v-chip-group--column":e.column},o.value,e.class],style:e.style}),{default:()=>{var u;return[(u=c.default)==null?void 0:u.call(c,{isSelected:t,select:m,next:k,prev:b,selected:h.value})]}})}),{}}});const Be=L({activeClass:String,appendAvatar:String,appendIcon:C,closable:Boolean,closeIcon:{type:C,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:C,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:G(),onClickOnce:G(),...te(),...R(),...ne(),...se(),...ie(),...ce(),...de(),...oe(),...z({tag:"span"}),...F(),...T({variant:"tonal"})},"VChip"),xe=w()({name:"VChip",directives:{Ripple:ue},props:Be(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,p){let{attrs:c,emit:o,slots:t}=p;const{t:m}=re(),{borderClasses:k}=ve(e),{colorClasses:b,colorStyles:h,variantClasses:y}=fe(e),{densityClasses:u}=pe(e),{elevationClasses:q}=me(e),{roundedClasses:K}=ke(e),{sizeClasses:X}=be(e),{themeClasses:j}=M(e),P=he(e,"modelValue"),a=ye(e,$,!1),s=Ce(e,c),N=V(()=>e.link!==!1&&s.isLink.value),i=V(()=>!e.disabled&&e.link!==!1&&(!!a||e.link||s.isClickable.value)),U=V(()=>({"aria-label":m(e.closeLabel),onClick(n){n.preventDefault(),n.stopPropagation(),P.value=!1,o("click:close",n)}}));function g(n){var d;o("click",n),i.value&&((d=s.navigate)==null||d.call(s,n),a==null||a.toggle())}function W(n){(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),g(n))}return()=>{const n=s.isLink.value?"a":e.tag,d=!!(e.appendIcon||e.appendAvatar),Y=!!(d||t.append),Z=!!(t.close||e.closable),I=!!(t.filter||e.filter)&&a,S=!!(e.prependIcon||e.prependAvatar),H=!!(S||t.prepend),A=!a||a.isSelected.value;return P.value&&_(l(n,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":i.value,"v-chip--filter":I,"v-chip--pill":e.pill},j.value,k.value,A?b.value:void 0,u.value,q.value,K.value,X.value,y.value,a==null?void 0:a.selectedClass.value,e.class],style:[A?h.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:s.href.value,tabindex:i.value?0:void 0,onClick:g,onKeydown:i.value&&!N.value&&W},{default:()=>{var B;return[Pe(i.value,"v-chip"),I&&l(ge,{key:"filter"},{default:()=>[_(l("div",{class:"v-chip__filter"},[t.filter?l(f,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},t.filter):l(v,{key:"filter-icon",icon:e.filterIcon},null)]),[[Ie,a.isSelected.value]])]}),H&&l("div",{key:"prepend",class:"v-chip__prepend"},[t.prepend?l(f,{key:"prepend-defaults",disabled:!S,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},t.prepend):l(x,null,[e.prependIcon&&l(v,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&l(D,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),l("div",{class:"v-chip__content","data-no-activator":""},[((B=t.default)==null?void 0:B.call(t,{isSelected:a==null?void 0:a.isSelected.value,selectedClass:a==null?void 0:a.selectedClass.value,select:a==null?void 0:a.select,toggle:a==null?void 0:a.toggle,value:a==null?void 0:a.value.value,disabled:e.disabled}))??e.text]),Y&&l("div",{key:"append",class:"v-chip__append"},[t.append?l(f,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},t.append):l(x,null,[e.appendIcon&&l(v,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&l(D,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),Z&&l("button",O({key:"close",class:"v-chip__close",type:"button"},U.value),[t.close?l(f,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},t.close):l(v,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Ve("ripple"),i.value&&e.ripple,null]])}}});export{xe as V};