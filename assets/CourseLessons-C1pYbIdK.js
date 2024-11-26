import{c as S,r as n,d as L,e as h,j as t,a5 as T,O as A,a6 as C,a2 as B,a7 as O,a8 as z,a9 as M}from"./index-2WPDJfjq.js";import{C as R}from"./CourseStatusBar-D5Anj0Mn.js";const G=({courseId:o,enrollmentId:u=0,inPlayer:c=!1,updatedLesson:i,currentLessonId:N,orderLessons:p=!1,hideLaunchButtons:f=!1,courseName:l,imageURL:x})=>{const{user:a}=S(),[d,g]=n.useState([]),[y,b]=n.useState(!1),w=L();n.useEffect(()=>{if(o&&(a!=null&&a.Id)){const e=`https://knowvara.com/api/api/lessons/status/${o}/${a.Id}/${u}`;b(!0),h.get(e).then(r=>{const s=r.data;g(s)}).catch(r=>{console.error("Error fetching lessons:",r)}).finally(()=>{b(!1)})}},[o,a==null?void 0:a.Id,u]),n.useEffect(()=>{i&&g(e=>e.map(r=>r.Id===Number(i.lessonId)?{...r,status:i.status}:r))},[i]),n.useEffect(()=>{c&&!l&&(a!=null&&a.OrgID)&&(async()=>{const r=sessionStorage.getItem("token");if(!r){console.error("No token found, user is not authenticated.");return}try{await h.get(`https://knowvara.com/api/api/courses/${a==null?void 0:a.OrgID}/${o}`,{headers:{Authorization:`Bearer ${r}`}})}catch(s){console.error("Error fetching course name:",s)}})()},[c,o,a==null?void 0:a.OrgID,l]);const I=async()=>{const e=sessionStorage.getItem("token");if(!e)return console.error("No token found, user is not authenticated."),null;try{return(await h.post("https://knowvara.com/api/api/courses/enrollment",{courseId:o,userId:a==null?void 0:a.Id},{headers:{Authorization:`Bearer ${e}`}})).data.enrollmentId}catch(r){return console.error("Error creating enrollment:",r),null}},$=async(e,r)=>{if(f)return;let s=u;if(console.log("Current enrollment: "+s),(!s||s===0)&&(s=await I(),!s)){console.error("Failed to create enrollment, cannot launch lesson.");return}if(a&&s){const m=sessionStorage.getItem("token");if(!m){console.error("No token found, user is not authenticated.");return}const F={userId:a.Id,type:"lessonLaunch",orgId:a.OrgID,enrollmentId:s,courseId:o,lessonId:e};try{await h.post("https://knowvara.com/api/api/actions/log",F,{headers:{Authorization:`Bearer ${m}`}}),console.log("Action logged successfully")}catch(D){console.error("Error logging action:",D)}}if(a){const{Id:m}=a;w(`/course-player/${e}/${s}/${o}/${m}/${r}`)}},k=e=>{if(!e)return"";const r=new Date(e);return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(r)},v=e=>{switch(e){case"completed":case"passed":return t.jsx(M,{className:"large-icon"});case"incomplete":case"failed":return t.jsx(z,{className:"large-icon"});default:return t.jsx(O,{className:"large-icon"})}},j=p?d.find(e=>e.Type!=="header"&&e.status!=="completed"&&e.status!=="passed"):null,E=n.useMemo(()=>new Set(d.filter(e=>e.status==="completed"||e.status==="passed").map(e=>e.Id)),[d]);return t.jsxs("div",{className:c?"overflow-x-auto border-r min-h-[100%]":"overflow-x-auto",children:[c&&l&&t.jsxs("div",{className:"flex items-center p-3",children:[x&&t.jsx("img",{src:x,alt:l,className:"w-16 h-16 mr-4 shadow-lg rounded-lg"}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-lg font-bold text-gray-700 pb-1 mt-2",children:l}),t.jsx("div",{className:"mb-2",children:t.jsx(R,{courseId:o})})]})]}),y?t.jsx("p",{children:"Loading..."}):t.jsx("div",{className:"p-0 md:p-2",children:t.jsx("table",{className:"min-w-full bg-white",children:t.jsx("tbody",{children:d.map(e=>{let r=!1;return f||(p?(E.has(e.Id)||j&&e.Id===j.Id)&&(r=!0):r=!0),t.jsx("tr",{className:`${e.Type==="header"?"bg-gray-100":e.Id===Number(N)?"bg-violet-100":""}`,children:e.Type==="header"?t.jsx("td",{className:"py-3 px-4 border-b border-t font-bold w-4 text-sm",colSpan:6,children:e.Name}):t.jsxs(t.Fragment,{children:[t.jsx("td",{className:"py-3 px-2 md:px-4 border-b border-t text-center w-4",children:e.Type==="mp4"?t.jsx(T,{className:"large-icon"}):e.Type==="pdf"?t.jsx(A,{className:"large-icon"}):t.jsx(C,{className:"large-icon"})}),t.jsx("td",{className:"py-3 px-2 md:px-4 border-b border-t text-sm",children:e.Name}),!c&&t.jsxs(t.Fragment,{children:[t.jsx("td",{className:"py-3 px-4 border-b border-t hidden md:table-cell",children:e.score||""}),t.jsx("td",{className:"py-3 px-4 border-b border-t hidden md:table-cell",children:k(e.completedDate)})]}),t.jsx("td",{className:"py-3 px-4 border-b border-t text-center w-16",children:v(e.status)}),t.jsx("td",{className:"py-3 px-4 border-b border-t text-center w-16",children:r?t.jsx(B,{className:"cursor-pointer large-icon",onClick:()=>$(e.Id,e.Type),"aria-label":`Launch lesson ${e.Name}`,title:`Launch lesson ${e.Name}`}):null})]})},e.Id)})})})})]})};export{G as C};
