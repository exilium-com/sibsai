import{d as N,c as p,w as a,r as n,b as t,B as o,C as g,F as f,e as r,N as A,g as s,A as i,z as y,f as l}from"./main-DXoWvGcG.js";const B=l("br",null,null,-1),C={key:0},z=l("br",null,null,-1),P=l("span",null,"Style:",-1),V={key:1},F=l("br",null,null,-1),I=l("span",null,"Interests:",-1),S={key:2,class:"text-grey"},L=l("br",null,null,-1),Y=N({__name:"test-personnas",setup(H){const w=[{email:"test1@exilium.com",given_name:"Mary",family_name:"Higgins",birth_date:"1944-12-1",avatar:"https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=400&h=400&auto=format&fit=crop",notes:"Lonely, daughter takes care of her when she can, but she is very busy. Would love to talk to someone without being in a hurry",purpose:"chat history",style:["casual","chatty"],interests:["cooking","gardening","movies"],role:"user"},{email:"test2@exilium.com",given_name:"Cynthia",family_name:"Lewis",birth_date:"1974-5-3",avatar:"https://randomuser.me/api/portraits/women/4.jpg",notes:"Admins one account. Has three teenage daughters, doesn't have any time to take care of her mother. Any help is appreciated",purpose:"",role:"admin"},{email:"test3@exilium.com",given_name:"Virat",family_name:"Mannan",birth_date:"1958-11-11",avatar:"https://randomuser.me/api/portraits/men/5.jpg",notes:"Very chatty, has one daughter and one son who take care of him. Son checks in more. As the daughter just texts, would like her to receive all important info about him.",purpose:"",style:["casual","chatty"],interests:["family","wildlife","boats"],role:"user"},{email:"test4@exilium.com",given_name:"Nancy",family_name:"Mannan",birth_date:"1985-7-30",avatar:"https://randomuser.me/api/portraits/women/88.jpg",notes:"Sometimes takes a look at what her dad is doing. Hates the phone. Does everything by texting",purpose:"",role:"admin"},{email:"test5@exilium.com",given_name:"Peter",family_name:"Mannan",birth_date:"1980-3-21",avatar:"https://randomuser.me/api/portraits/men/39.jpg",notes:"'Professional' admin, takes care of 3 accounts: his dad, his mother-in-law and the girlfriend of his dad! Needs to have graphs, concerns immediate jump at him, indicating which account.",purpose:"has 3 accounts, tests usage for professional admin",role:"admin"},{email:"test7@exilium.com",given_name:"Carlos",family_name:"Diaz",birth_date:"1940-9-30",avatar:"https://images.unsplash.com/photo-1624537046903-1e4acee0487f?w=400&h=400&auto=format&fit=crop",notes:"Peter's father-in-law, lives with his wife, who takes care of his account with the help of her son in law. Forgets all birthdays, and medications. Needs help reminding him of everything.",purpose:"has two admins for his account, tests interactions of admins",style:["formal","terse"],interests:["food","movies","language"],role:"user"},{email:"test8@exilium.com",given_name:"Luisa",family_name:"Diaz",birth_date:"1944-8-3",avatar:"https://images.unsplash.com/photo-1543430720-fa600c67e423?w=400&h=400&auto=format&fit=crop",notes:"Peter's mother-in-law, very independent and knows how to use the app very well. It is a user and an admin of her husband's account. Doesn't forget anything. Will make sure the AI is telling the truth, or will make fun of it.",purpose:"",style:["casual","down-to-earth"],interests:["family","movies","books","cooking"],role:"user, admin"},{email:"test6@exilium.com",given_name:"Mei",family_name:"Min",birth_date:"1960-12-13",avatar:"https://randomuser.me/api/portraits/women/83.jpg",notes:"Gullible user, has no living children. Peter helps her, but would like to stop doing it. She is the girlfriend of his dad. Believes everything the AI is saying. Believes in conspiracy theories. AI cannot say anything that is not a fact.",purpose:"",style:["casual","dreamer"],interests:["beauty","gardening"],role:"user"}];function b(v){const c=new Date,m=new Date(v);let u=c.getFullYear()-m.getFullYear();const h=c.getMonth()-m.getMonth();return(h<0||h===0&&c.getDate()<m.getDate())&&u--,u}return(v,c)=>{const m=n("v-card-title"),u=n("v-card-subtitle"),h=n("v-chip"),k=n("v-card-text"),x=n("v-divider"),D=n("v-card"),j=n("v-container");return t(),p(j,{fluid:""},{default:a(()=>[(t(),o(f,null,g(w,(e,M)=>r(D,{width:"400",key:M},{default:a(()=>[r(m,null,{default:a(()=>[r(A,{picture:e.avatar,"first-name":e.given_name,size:"x-large"},null,8,["picture","first-name"]),s(" "+i(e.given_name+" "+e.family_name+" ("+e.role+")"),1)]),_:2},1024),r(u,null,{default:a(()=>[s(i(e.email)+" ",1),B,s(" "+i(b(e.birth_date)+" years old"),1)]),_:2},1024),r(k,null,{default:a(()=>[s(i(e.notes)+" ",1),e.style&&e.style.length>0?(t(),o("div",C,[z,P,(t(!0),o(f,null,g(e.style,(d,_)=>(t(),p(h,{label:"",class:"ma-1",size:"small",key:_},{default:a(()=>[s(i(d),1)]),_:2},1024))),128))])):y("",!0),e.interests&&e.interests.length>0?(t(),o("div",V,[F,I,(t(!0),o(f,null,g(e.interests,(d,_)=>(t(),p(h,{label:"",class:"ma-1",size:"small",key:_},{default:a(()=>[s(i(d),1)]),_:2},1024))),128))])):y("",!0),e.purpose?(t(),o("span",S,[L,s(i("Purpose for the account: "+e.purpose),1)])):y("",!0)]),_:2},1024),r(x)]),_:2},1024)),64))]),_:1})}}});export{Y as default};
