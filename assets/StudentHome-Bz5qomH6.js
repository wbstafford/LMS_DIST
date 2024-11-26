import{c as L,r as l,d as M,v as R,j as e,w as U,x as H,F as O,e as y,M as G,y as v,B as j,z as V,C as Y,D as J,E as K,G as W,H as X,I as Z,J as q,K as Q,L as z,N as ee,O as te,P as se,R as ae,S as re,T as ne,U as oe,V as le,W as ie,X as ce,Y as de,Z as me,$ as xe,a0 as ue}from"./index-2WPDJfjq.js";import{C as he}from"./CourseCard-C2IzyHUm.js";import{C as fe}from"./CourseStatusBar-D5Anj0Mn.js";import{L as ge,U as pe}from"./UserDetails-CKF0bxZn.js";import{u as je}from"./useSubscription-BTmiCD9f.js";import{c as E,n as be,s as I,f as ye}from"./format-Dt71a7ij.js";const Ne=()=>{const{user:t}=L(),[a,s]=l.useState([]),[c]=l.useState("y"),[i,m]=l.useState("DueDate"),[x,f]=l.useState(""),[o,d]=l.useState(!1),[n,g]=l.useState(localStorage.getItem("courseFilter")||"all"),[p,N]=l.useState(localStorage.getItem("viewModeHome")||"grid"),S=M(),w=l.useMemo(()=>R(r=>{f(r)},300),[]);l.useEffect(()=>()=>{w.cancel()},[w]),l.useEffect(()=>{(async()=>{if(!(t!=null&&t.OrgID)||!(t!=null&&t.Id))return;const C=sessionStorage.getItem("token");if(!C){console.error("No token found, user is not authenticated.");return}d(!0);try{const u=await y.post(`https://knowvara.com/api/api/courses/catalog/${t.OrgID}`,{userId:t.Id,enrolled:c,sortBy:i},{headers:{Authorization:`Bearer ${C}`}}),h=Array.isArray(u.data)?u.data:[];s(h)}catch(u){console.error("Error fetching courses:",u)}finally{d(!1)}})()},[t==null?void 0:t.OrgID,t==null?void 0:t.Id,c,i]);const D=r=>r?new Date(r).getTime():1/0,b=l.useMemo(()=>{let r=a;if(x.trim()||n!=="all"){const u=x.trim().toLowerCase();r=a.filter(h=>{const T=h.Name.toLowerCase().includes(u),P=h.ShortDescription.toLowerCase().includes(u),_=n==="completed"?["completed","passed"].includes(h.completionStatus):n==="inProgress"?h.completionStatus!=="completed"&&h.completionStatus!=="passed":!0;return(T||P)&&_})}return[...r].sort((u,h)=>i==="DueDate"?D(u.dueDate)-D(h.dueDate):i==="Name"?u.Name.localeCompare(h.Name):i==="Likes"?(h.Likes||0)-(u.Likes||0):0)},[a,x,n,i]),A=()=>{S("/student/catalog")},F=r=>{g(r),localStorage.setItem("courseFilter",r)},k=r=>{N(r),localStorage.setItem("viewModeHome",r)},$=r=>{S(`/student/course/${r}`)};return e.jsxs("div",{className:"pl-2 pr-2",children:[e.jsx("h2",{className:"text-lg font-semibold text-gray-700 mr-8 mb-3",children:"My Courses"}),e.jsxs("div",{className:"mb-2 md:mb-6 ml-auto flex flex-wrap items-center text-sm gap-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("label",{htmlFor:"search",className:"mr-2",children:"Search:"}),e.jsx("input",{type:"text",id:"search",placeholder:"Search courses...",onChange:r=>w(r.target.value),className:"p-1 border rounded text-sm"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("label",{htmlFor:"sortBy",className:"mr-2",children:"Sort by:"}),e.jsxs("select",{id:"sortBy",value:i,onChange:r=>m(r.target.value),className:"p-1 border rounded text-sm",children:[e.jsx("option",{value:"Name",children:"Name"}),e.jsx("option",{value:"Likes",children:"Popularity"}),e.jsx("option",{value:"DueDate",children:"Due Date"})]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("button",{className:`mr-2 ${n==="all"?"font-bold underline":""}`,onClick:()=>F("all"),children:"All"}),"|",e.jsx("button",{className:`mr-2 ml-2 ${n==="inProgress"?"font-bold underline":""}`,onClick:()=>F("inProgress"),children:"In Progress"}),"|",e.jsx("button",{className:`ml-2 ${n==="completed"?"font-bold underline":""}`,onClick:()=>F("completed"),children:"Completed"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("button",{onClick:()=>k("grid"),className:`mr-2 ${p==="grid"?"text-blue-500":"text-gray-500"}`,"aria-label":"Grid View",children:e.jsx(U,{size:18})}),e.jsx("button",{onClick:()=>k("table"),className:`${p==="table"?"text-blue-500":"text-gray-500"}`,"aria-label":"Table View",children:e.jsx(H,{size:18})})]})]}),e.jsx("div",{children:o?e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(O,{className:"animate-spin"}),e.jsx("span",{children:"Loading courses..."})]}):p==="grid"?b.length>0?e.jsx("div",{className:"flex flex-wrap justify-start gap-5 lg:gap-8 2xl:gap-12",children:b.map(r=>e.jsx(he,{course:r,enrolled:r.enrolled,searchTerm:x,isEcomm:t==null?void 0:t.ecommerce},r.Id))}):e.jsxs("p",{className:"text-gray-500",children:["No courses found. Please go to the"," ",e.jsx("a",{href:"#",onClick:A,className:"text-blue-500 hover:underline cursor-pointer",children:"catalog"})," ","to find courses."]}):e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full bg-white",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-2 px-4 border-b border-gray-200 text-left"}),e.jsx("th",{className:"py-2 px-4 border-b border-gray-200 text-left font-semibold text-gray-700",children:"Name"}),e.jsx("th",{className:"py-2 px-4 border-b border-gray-200 text-left font-semibold text-gray-700 hidden md:table-cell",children:"Short Description"}),e.jsx("th",{className:"py-2 px-4 border-b border-gray-200 text-left w-64 font-semibold text-gray-700",children:"Status"}),e.jsx("th",{className:"py-2 px-4 border-b border-gray-200 text-left"})]})}),e.jsx("tbody",{children:b.length>0?b.map(r=>e.jsxs("tr",{children:[e.jsx("td",{className:"py-0 md:py-2 px-0 md:px-4 border-b border-gray-200 w-12 md:w-20",children:e.jsx("img",{src:r.ImageURL||"/GenericCourseIcon.webp",alt:r.Name,className:"w-12 h-8 object-cover rounded"})}),e.jsx("td",{className:"py-2 px-4 border-b border-gray-200",children:r.Name}),e.jsx("td",{className:"py-2 px-4 border-b border-gray-200 hidden md:table-cell",children:r.ShortDescription}),e.jsx("td",{className:"py-2 px-4 border-b border-gray-200",children:r.enrolled&&e.jsx(fe,{courseId:r.Id})}),e.jsx("td",{className:"py-2 px-4 border-b border-gray-200 w-32",children:e.jsx("button",{onClick:()=>$(r.Id),className:"px-3 py-1 text-white text-sm rounded-sm lms-button",children:"Details"})})]},r.Id)):e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"py-2 px-4 border-b border-gray-200 text-center",children:"No courses found."})})})]})})})]})};function we(t){return E(t,Date.now())}function Fe(t,a,s){const[c,i]=be(s==null?void 0:s.in,t,a);return+I(c)==+I(i)}function Ce(t,a){return Fe(E(t,t),we(t))}const ve=()=>{const[t,a]=l.useState([]),[s,c]=l.useState(!1),[i,m]=l.useState(!1),x="https://knowvara.com/api";l.useEffect(()=>{(async()=>{try{const d=sessionStorage.getItem("token");if(!d){j.error("Authentication token is missing. Please log in again.");return}const n=await y.get(`${x}/api/gamification/badge-notifications`,{headers:{Authorization:`Bearer ${d}`}});n.data.notifications.length>0?(a(n.data.notifications),c(!0),console.log("got notifications",n.data.notifications)):console.log("got no notifications")}catch(d){console.error("Error fetching badge notifications:",d),j.error("Failed to fetch badge notifications.")}})()},[x]);const f=async()=>{if(t.length===0){c(!1);return}m(!0);try{const o=sessionStorage.getItem("token");if(!o){j.error("Authentication token is missing. Please log in again."),m(!1);return}const d=t.map(n=>y.put(`${x}/api/gamification/badge-notifications/${n.id}/read`,{},{headers:{Authorization:`Bearer ${o}`}}));await Promise.all(d),a([]),c(!1)}catch(o){console.error("Error marking badge notifications as read:",o),j.error("Failed to mark badge notifications as read.")}finally{m(!1)}};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-lg hidden",children:"I'm right here"}),s&&e.jsx(G,{title:"New Badges Earned!",onClose:()=>{i||f()},onConfirm:()=>{i||f()},singleButton:!0,confirmText:"OK",children:i?e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsx(v,{className:"animate-spin text-2xl text-blue-500"}),e.jsx("span",{className:"ml-2",children:"Processing..."})]}):e.jsx("div",{className:"space-y-4",children:t.map(o=>e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("div",{className:"w-[80px] h-[80px] rounded-full flex items-center justify-center",style:{backgroundColor:o.color},children:e.jsx("div",{className:"w-[75px] h-[75px] rounded-full bg-white flex items-center justify-center",children:e.jsx("div",{className:"w-[70px] h-[70px] rounded-full flex items-center justify-center text-white",style:{backgroundColor:o.color},children:Se(o.icon,26,"#ffffff")})})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-lg font-semibold",style:{color:o.color},children:o.name}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Awarded on:"," ",De(o.notified_at)?new Date(B(o.notified_at)).toLocaleDateString():"Unknown Date"]})]})]},o.id))})})]})},Se=(t,a=20,s="#ffffff")=>({FaStar:e.jsx(V,{size:a,color:s}),FaHeart:e.jsx(Y,{size:a,color:s}),FaCheckCircle:e.jsx(v,{size:a,color:s}),FaMedal:e.jsx(J,{size:a,color:s}),FaTrophy:e.jsx(K,{size:a,color:s}),FaCrown:e.jsx(W,{size:a,color:s}),FaBolt:e.jsx(X,{size:a,color:s}),FaLeaf:e.jsx(Z,{size:a,color:s}),FaRocket:e.jsx(q,{size:a,color:s}),FaShieldAlt:e.jsx(Q,{size:a,color:s}),FaGlobe:e.jsx(z,{size:a,color:s}),FaLightbulb:e.jsx(ee,{size:a,color:s}),FaBook:e.jsx(te,{size:a,color:s}),FaLaptop:e.jsx(se,{size:a,color:s}),FaCamera:e.jsx(ae,{size:a,color:s}),FaMusic:e.jsx(re,{size:a,color:s}),FaCameraRetro:e.jsx(ne,{size:a,color:s}),FaCode:e.jsx(oe,{size:a,color:s}),FaCloud:e.jsx(le,{size:a,color:s}),FaComments:e.jsx(ie,{size:a,color:s}),FaCoffee:e.jsx(ce,{size:a,color:s}),FaDatabase:e.jsx(de,{size:a,color:s}),FaDice:e.jsx(me,{size:a,color:s}),FaGlasses:e.jsx(xe,{size:a,color:s}),FaHeartbeat:e.jsx(ue,{size:a,color:s})})[t]||e.jsx(v,{size:a,color:s}),B=t=>t?t.replace(" ","T"):"",De=t=>{if(!t)return!1;const a=new Date(B(t));return!isNaN(a.getTime())},ke=()=>{const[t,a]=l.useState(null),[s,c]=l.useState(!0),[i,m]=l.useState(""),x=async()=>{const n=sessionStorage.getItem("token");if(!n){m("User is not authenticated."),c(!1);return}try{const g=await y.get("https://knowvara.com/api/api/events/upcoming",{headers:{Authorization:`Bearer ${n}`}});a(g.data)}catch(g){console.error("Error fetching upcoming events:",g),m("Failed to load upcoming events.")}finally{c(!1)}};if(l.useEffect(()=>{x()},[]),s||i||!t)return null;const{registeredEvents:f,instructedEvents:o}=t;if(f.length===0&&o.length===0)return null;const d=({event:n})=>{const g=new Date(n.DateTime),p=Ce(g),N=ye(g,"MMM d, yyyy h:mm a");return e.jsxs("li",{className:`flex flex-col sm:flex-row justify-between items-start sm:items-center p-2 mb-2 rounded ${p?"bg-green-50 border":"bg-gray-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:n.LessonName})," ",e.jsx("p",{className:"text-sm",children:N}),e.jsx("p",{className:"text-sm text-gray-600",children:n.Location}),n.OnlineMeetingLink&&n.OnlineMeetingLink.trim()!==""&&e.jsx("a",{href:n.OnlineMeetingLink,target:"_blank",rel:"noopener noreferrer",className:"mt-1 inline-block text-blue-500 hover:underline text-sm",children:"Join Meeting"})]}),p&&e.jsx("span",{className:"mt-1 sm:mt-0",children:"Today"})]},n.Id)};return e.jsxs("div",{className:"",children:[f.length>0&&e.jsxs("div",{className:"bg-white shadow-md rounded mb-3",children:[e.jsx("div",{className:"flex w-full p-2 subnav-gradient text-white font-bold",children:"Upcoming Events"}),e.jsx("ul",{className:"p-2",children:f.map(n=>e.jsx(d,{event:n},n.Id))})]}),o.length>0&&e.jsxs("div",{className:"bg-white shadow-md rounded mb-4",children:[e.jsx("div",{className:"flex w-full p-2 subnav-gradient text-white font-bold",children:"Events You Are Leading"}),e.jsx("ul",{className:"p-2",children:o.map(n=>e.jsx(d,{event:n},n.Id))})]})]})},$e=()=>{const{user:t}=L(),a=M(),{subscription:s,error:c}=je(),[i,m]=l.useState(0);return l.useEffect(()=>{if(s&&s.subscription_plan.toLowerCase()==="free"&&s.trial_end){const x=new Date,o=new Date(s.trial_end).getTime()-x.getTime(),d=Math.ceil(o/(1e3*3600*24));d>0?m(d):m(0)}else m(0)},[s]),l.useEffect(()=>{c&&j.error(c)},[c]),e.jsxs("div",{className:"flex flex-col md:flex-row h-auto min-h-[100%]",children:[e.jsxs("div",{className:"flex flex-col items-start w-full md:w-3/4 border-r border-gray-300 p-4",children:[e.jsx("div",{className:"w-full",children:e.jsx(ge,{allowLaunch:!0})}),e.jsx("div",{className:"w-full",children:e.jsx(Ne,{})})]}),e.jsxs("div",{className:"w-full md:w-1/4 p-4 relative",children:[(t==null?void 0:t.Admin)==="y"&&s&&s.subscription_plan.toLowerCase()==="free"&&s.trial_end&&e.jsxs("div",{className:"bg-red-600 text-white text-xs px-4 py-2 rounded-md mb-2 text-center",children:["Your free trial expires in ",i," ",i===1?"day":"days",". Go to"," ",e.jsx("span",{className:"underline cursor-pointer",onClick:()=>a("/admin/settings"),children:"Settings"})," ","to upgrade your plan."]}),(t==null?void 0:t.Id)&&e.jsxs(e.Fragment,{children:[e.jsx(ke,{}),e.jsx(pe,{userId:t.Id,gamify:t.gamify,isMe:!0})]}),e.jsx(ve,{})]})]})};export{$e as default};
