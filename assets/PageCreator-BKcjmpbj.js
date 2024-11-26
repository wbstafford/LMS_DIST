import{t as q,c as J,d as K,r as l,j as e,e as d,b4 as V}from"./index-2WPDJfjq.js";import{P as X}from"./PageObject-AS3tGorh.js";const Z=[[{header:"1"},{header:"2"},{font:[]}],[{size:[]}],["bold","italic","underline"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link"],[{color:[]},{background:[]}],[{align:[]}]],_={toolbar:Z},x={textOnly:{title:"Text Only",layout:[{field:"content",width:"full"}],contentClass:"text-only-content",imageClass:""},imageRightHalf:{title:"Image Right Half",layout:[{field:"content",width:"half"},{field:"image",width:"half"}],contentClass:"image-right-half-content",imageClass:"image-right-half-image"},imageLeftHalf:{title:"Image Left Half",layout:[{field:"image",width:"half"},{field:"content",width:"half"}],contentClass:"image-left-half-content",imageClass:"image-left-half-image"},imageBottom:{title:"Image Bottom",layout:[{field:"content",width:"full"},{field:"image",width:"full"}],contentClass:"image-bottom-content",imageClass:"image-bottom-image"},imageTop:{title:"Image Top",layout:[{field:"image",width:"full"},{field:"content",width:"full"}],contentClass:"image-top-content",imageClass:"image-top-image"},imageOnly:{title:"Image Only",layout:[{field:"image",width:"full"}],contentClass:"",imageClass:"image-only-image"}},ae=()=>{const{lessonId:m,pageId:i}=q(),{user:c}=J(),g=K(),[s,r]=l.useState(null),[u,b]=l.useState("textOnly"),[T,w]=l.useState(!1),[p,y]=l.useState(""),[j,I]=l.useState(!1),[U,E]=l.useState(""),[L,v]=l.useState(!1),[A,h]=l.useState(""),[C,N]=l.useState(!1),[S,f]=l.useState("");l.useEffect(()=>{i&&i!=="0"?(console.log("Looking up page id: "+i),(async()=>{const o=sessionStorage.getItem("token");if(!o){console.error("No token found, user is not authenticated.");return}try{const n=await d.get(`https://knowvara.com/api/api/pages/page/${i}`,{headers:{Authorization:`Bearer ${o}`}});r(n.data),b(n.data.Template||"textOnly")}catch(n){console.error("Error fetching page:",n)}})()):(async()=>{console.log(c==null?void 0:c.Email);const t=sessionStorage.getItem("token");if(!t){console.error("No token found, user is not authenticated.");return}try{const n=(await d.post("https://knowvara.com/api/api/pages/createTemporaryPage",{lessonId:m},{headers:{Authorization:`Bearer ${t}`}})).data.pageId;g(`/admin/page-creator/${m}/${n}`)}catch(o){console.error("Error creating temporary page:",o)}})()},[i,m,c==null?void 0:c.Email,g]);const z=a=>{b(a),r(t=>t?{...t,Template:a}:null)},B=a=>{const{name:t,value:o}=a.target;r(n=>n?{...n,[t]:o}:null)},F=a=>{r(t=>t?{...t,PageContent:a}:null)},O=a=>{r(t=>t?{...t,ImageURL:a}:null)},P=async a=>{if(a.target.files&&a.target.files.length>0){const t=a.target.files[0];if(!t.type.startsWith("audio/")){h("Invalid file type. Please upload a valid audio file.");return}if(t.size>10*1024*1024){h("File size exceeds 10 MB.");return}v(!0),h(""),f("");const o=new FormData;o.append("audio",t);const n=sessionStorage.getItem("token");if(!n){h("User is not authenticated."),v(!1);return}try{const $=await d.post(`https://knowvara.com/api/api/pages/uploadAudio/${s==null?void 0:s.Id}`,o,{headers:{Authorization:`Bearer ${n}`,"Content-Type":"multipart/form-data"}});r(R=>R?{...R,AudioURL:$.data.audioUrl}:null)}catch($){console.error("Error uploading audio:",$),h("Failed to upload audio.")}finally{v(!1)}}},H=async()=>{if(!(s!=null&&s.AudioURL))return;N(!0),f("");const a=sessionStorage.getItem("token");if(!a){f("User is not authenticated."),N(!1);return}try{await d.delete(`https://knowvara.com/api/api/pages/removeAudio/${s.Id}`,{headers:{Authorization:`Bearer ${a}`}}),r(t=>t?{...t,AudioURL:""}:null)}catch(t){console.error("Error removing audio:",t),f("Failed to remove audio.")}finally{N(!1)}},M=async()=>{try{r(t=>t?{...t,temporary:"n"}:null);const a=sessionStorage.getItem("token");if(!a){console.error("No token found, user is not authenticated.");return}i&&i!=="0"?await d.put(`https://knowvara.com/api/api/pages/${i}`,s,{headers:{Authorization:`Bearer ${a}`}}):await d.post("https://knowvara.com/api/api/pages",s,{headers:{Authorization:`Bearer ${a}`}}),g(`/admin/lesson-builder/${m}`)}catch(a){console.error("Error saving page:",a)}},D=()=>{w(!0)},W=()=>{g(`/admin/lesson-builder/${m}`)},G=async()=>{if(!p){alert("Please enter a description.");return}I(!0),E("Generating page. Please wait...");const a=sessionStorage.getItem("token");if(!a){console.error("No token found, user is not authenticated.");return}try{await d.post("https://knowvara.com/api/api/content/createAIPage",{pageId:i,description:p},{headers:{Authorization:`Bearer ${a}`}});const t=await d.get(`https://knowvara.com/api/api/pages/page/${i}`,{headers:{Authorization:`Bearer ${a}`}});r({...t.data,Template:"imageRightHalf"}),b("imageRightHalf"),w(!1),y("")}catch(t){console.error("Error generating page with AI:",t)}finally{I(!1)}},Q=()=>{w(!1),y("")},k=a=>{switch(a.field){case"title":return e.jsx("input",{type:"text",name:"Title",value:(s==null?void 0:s.Title)||"",onChange:B,placeholder:"Title: "+(s==null?void 0:s.Id),className:"w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-8"});case"content":return e.jsx(V,{value:(s==null?void 0:s.PageContent)||"",onChange:F,placeholder:"Content",modules:_,className:`mb-14 w-full ${x[u].contentClass}`});case"image":return e.jsx(X,{pageId:(s==null?void 0:s.Id)||0,initialImageURL:(s==null?void 0:s.ImageURL)||"",onImageUpload:O,className:x[u].imageClass});default:return null}},Y=()=>{const a=x[u].layout;return e.jsxs(e.Fragment,{children:[k({field:"title",width:"full"}),u==="imageRightHalf"||u==="imageLeftHalf"?e.jsx("div",{className:"flex space-x-4",children:a.map((t,o)=>e.jsx("div",{className:`mb-4 ${t.width==="half"?"w-1/2":"w-full"} px-2`,children:k(t)},o))}):a.map((t,o)=>e.jsx("div",{className:`mb-4 ${t.width==="half"?"w-1/2":"w-full"}`,children:k(t)},o))]})};return e.jsxs("div",{className:"flex h-full",children:[e.jsx("div",{className:"w-1/5 p-4 border-r overflow-y-auto",children:Object.entries(x).map(([a,t])=>e.jsx("div",{className:`p-4 cursor-pointer ${u===a?"bg-violet-100":""}`,onClick:()=>z(a),children:t.title},a))}),e.jsx("div",{className:"w-4/5 p-4 flex flex-col justify-between",children:s&&e.jsxs(e.Fragment,{children:[e.jsx("div",{children:Y()}),e.jsxs("div",{className:"flex items-center justify-between mt-8",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[s.AudioURL?e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("audio",{controls:!0,src:`${s.AudioURL}`,className:"flex-1",children:"Your browser does not support the audio element."}),e.jsx("label",{htmlFor:"audio-upload",className:"lms-button text-white py-2 px-4 rounded-sm cursor-pointer text-sm",children:"Replace Audio"}),e.jsx("button",{onClick:H,className:`lms-button text-white py-2 px-4 rounded-sm text-sm ${C?"bg-gray-400 cursor-not-allowed":"bg-red-500 hover:bg-red-600"}`,disabled:C,children:C?"Removing...":"Remove Audio"})]}):e.jsx("label",{htmlFor:"audio-upload",className:"lms-button text-white py-2 px-4 rounded-sm cursor-pointer text-sm",children:"Upload Audio File"}),e.jsx("input",{id:"audio-upload",type:"file",accept:"audio/*",className:"hidden",onChange:P})]}),e.jsxs("div",{className:"flex items-center space-x-2 ml-auto",children:[e.jsx("button",{onClick:W,className:"lms-button text-white py-2 px-4 rounded-sm text-sm",children:"Cancel"}),e.jsx("button",{onClick:D,className:"lms-button text-white py-2 px-4 rounded-sm text-sm",children:"Build this page for me"}),e.jsx("button",{onClick:M,className:"lms-button text-white py-2 px-4 rounded-sm text-sm",children:"Save Page"})]}),e.jsxs("div",{className:"flex flex-col ml-4",children:[L&&e.jsx("span",{className:"text-gray-500 text-sm",children:"Uploading audio..."}),A&&e.jsx("span",{className:"text-red-500 text-sm",children:A}),S&&e.jsx("span",{className:"text-red-500 text-sm",children:S})]})]})]})}),T&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",children:e.jsx("div",{className:"bg-white p-6 shadow-lg w-1/2 mx-auto",children:j?e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"loader mb-4"}),e.jsx("p",{children:U})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"What should this page be about?"}),e.jsx("textarea",{className:"w-full p-3 border rounded-md",rows:5,value:p,onChange:a=>y(a.target.value),placeholder:"Describe what the page should be about..."}),e.jsxs("div",{className:"mt-4 flex justify-end",children:[e.jsx("button",{onClick:Q,className:"lms-button py-2 px-4 mr-2 rounded-sm text-sm",children:"Cancel"}),e.jsx("button",{onClick:G,disabled:j||!p,className:`lms-button py-2 px-4 rounded-sm ${j?"bg-gray-300":"bg-blue-500 text-sm"}`,children:"Submit"})]})]})})})]})};export{ae as default};
