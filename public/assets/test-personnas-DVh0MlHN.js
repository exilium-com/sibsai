import{d as w,c as d,w as a,V as b,b as t,X as o,Z as c,Y as p,e as r,R as k,O as x,aO as V,h as s,W as i,bF as C,P as D,U as g,a6 as j,f as l}from"./main-DvUrgrR9.js";import{V as _}from"./VChip-5qzSb2bY.js";import"./VSlideGroup-CLz4jni5.js";const M=l("br",null,null,-1),N={key:0},P=l("br",null,null,-1),A=l("span",null,"Style:",-1),B={key:1},S=l("br",null,null,-1),z=l("span",null,"Interests:",-1),F={key:2,class:"text-grey"},I=l("br",null,null,-1),W=w({__name:"test-personnas",setup(L){const y=[{email:"test1@exilium.com",given_name:"Mary",family_name:"Higgins",birth_date:"1944-12-1",avatar:"https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=400&h=400&auto=format&fit=crop",notes:"Lonely, daughter takes care of her when she can, but she is very busy. Would love to talk to someone without being in a hurry",purpose:"chat history",style:["casual","chatty"],interests:["cooking","gardening","movies"],role:"user"},{email:"test2@exilium.com",given_name:"Cynthia",family_name:"Lewis",birth_date:"1974-5-3",avatar:"https://randomuser.me/api/portraits/women/4.jpg",notes:"Admins one account. Has three teenage daughters, doesn't have any time to take care of her mother. Any help is appreciated",purpose:"",role:"admin"},{email:"test3@exilium.com",given_name:"Virat",family_name:"Mannan",birth_date:"1958-11-11",avatar:"https://randomuser.me/api/portraits/men/5.jpg",notes:"Very chatty, has one daughter and one son who take care of him. Son checks in more. As the daughter just texts, would like her to receive all important info about him.",purpose:"",style:["casual","chatty"],interests:["family","wildlife","boats"],role:"user"},{email:"test4@exilium.com",given_name:"Nancy",family_name:"Mannan",birth_date:"1985-7-30",avatar:"https://randomuser.me/api/portraits/women/88.jpg",notes:"Sometimes takes a look at what her dad is doing. Hates the phone. Does everything by texting",purpose:"",role:"admin"},{email:"test5@exilium.com",given_name:"Peter",family_name:"Mannan",birth_date:"1980-3-21",avatar:"https://randomuser.me/api/portraits/men/39.jpg",notes:"'Professional' admin, takes care of 3 accounts: his dad, his mother-in-law and the girlfriend of his dad! Needs to have graphs, concerns immediate jump at him, indicating which account.",purpose:"has 3 accounts, tests usage for professional admin",role:"admin"},{email:"test7@exilium.com",given_name:"Carlos",family_name:"Diaz",birth_date:"1940-9-30",avatar:"https://images.unsplash.com/photo-1624537046903-1e4acee0487f?w=400&h=400&auto=format&fit=crop",notes:"Peter's father-in-law, lives with his wife, who takes care of his account with the help of her son in law. Forgets all birthdays, and medications. Needs help reminding him of everything.",purpose:"has two admins for his account, tests interactions of admins",style:["formal","terse"],interests:["food","movies","language"],role:"user"},{email:"test8@exilium.com",given_name:"Luisa",family_name:"Diaz",birth_date:"1944-8-3",avatar:"https://images.unsplash.com/photo-1543430720-fa600c67e423?w=400&h=400&auto=format&fit=crop",notes:"Peter's mother-in-law, very independent and knows how to use the app very well. It is a user and an admin of her husband's account. Doesn't forget anything. Will make sure the AI is telling the truth, or will make fun of it.",purpose:"",style:["casual","down-to-earth"],interests:["family","movies","books","cooking"],role:"user, admin"},{email:"test6@exilium.com",given_name:"Mei",family_name:"Min",birth_date:"1960-12-13",avatar:"https://randomuser.me/api/portraits/women/83.jpg",notes:"Gullible user, has no living children. Peter helps her, but would like to stop doing it. She is the girlfriend of his dad. Believes everything the AI is saying. Believes in conspiracy theories. AI cannot say anything that is not a fact.",purpose:"",style:["casual","dreamer"],interests:["beauty","gardening"],role:"user"}];function v(f){const m=new Date,e=new Date(f);let h=m.getFullYear()-e.getFullYear();const n=m.getMonth()-e.getMonth();return(n<0||n===0&&m.getDate()<e.getDate())&&h--,h}return(f,m)=>(t(),d(b,{fluid:""},{default:a(()=>[(t(),o(p,null,c(y,(e,h)=>r(k,{width:"400",key:h},{default:a(()=>[r(x,null,{default:a(()=>[r(V,{picture:e.avatar,"first-name":e.given_name,size:"x-large"},null,8,["picture","first-name"]),s(" "+i(e.given_name+" "+e.family_name+" ("+e.role+")"),1)]),_:2},1024),r(C,null,{default:a(()=>[s(i(e.email)+" ",1),M,s(" "+i(v(e.birth_date)+" years old"),1)]),_:2},1024),r(D,null,{default:a(()=>[s(i(e.notes)+" ",1),e.style&&e.style.length>0?(t(),o("div",N,[P,A,(t(!0),o(p,null,c(e.style,(n,u)=>(t(),d(_,{label:"",class:"ma-1",size:"small",key:u},{default:a(()=>[s(i(n),1)]),_:2},1024))),128))])):g("",!0),e.interests&&e.interests.length>0?(t(),o("div",B,[S,z,(t(!0),o(p,null,c(e.interests,(n,u)=>(t(),d(_,{label:"",class:"ma-1",size:"small",key:u},{default:a(()=>[s(i(n),1)]),_:2},1024))),128))])):g("",!0),e.purpose?(t(),o("span",F,[I,s(i("Purpose for the account: "+e.purpose),1)])):g("",!0)]),_:2},1024),r(j)]),_:2},1024)),64))]),_:1}))}});export{W as default};
