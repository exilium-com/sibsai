import{d as c,r as u,o as d,c as f,w as g,J as p,a as m,A as h,b as y,e as _,K as S}from"./main-B70GkIj-.js";const N=c({__name:"social-authCB-view",props:{social:{}},setup(i){const t=i,n=m();let a="";const s=u({handlingSocial:!1});async function o(){try{s.handlingSocial=!0;const e=await h.signInAndUp();e.status==="OK"?e.createdNewRecipeUser&&e.user.loginMethods.length:e.status==="SIGN_IN_UP_NOT_ALLOWED"?a=e.reason:a=`No email provided by ${t.social}. Please use a different form of sign in`}catch(e){e.isSuperTokensGeneralError===!0?a=e.message:a="Error signing in"}finally{s.handlingSocial=!1,a?n.push({name:"signin",query:{incomingError:a}}):n.push({name:"authorized"})}}return d(async()=>{await o()}),(e,r)=>(y(),f(p,{location_strategy:"static",modelValue:s.handlingSocial,"onUpdate:modelValue":r[0]||(r[0]=l=>s.handlingSocial=l),class:"align-center justify-center"},{default:g(()=>[_(S,{indeterminate:"",size:"x-large"})]),_:1},8,["modelValue"]))}});export{N as default};
