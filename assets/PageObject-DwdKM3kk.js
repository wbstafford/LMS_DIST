import{r as n,j as e,f as h}from"./index-C0udBar1.js";const U=({pageId:i,initialImageURL:b,initialImageDescription:j,onImageUpload:l,className:y})=>{const c=n.useRef(null),[d,m]=n.useState(b),[k,o]=n.useState(!1),[u,I]=n.useState(j||""),[p,g]=n.useState(!1),N=async t=>{var f;const r=(f=t.target.files)==null?void 0:f[0];if(!r)return;const s=new FormData;s.append("image",r);try{const a=sessionStorage.getItem("token");if(!a){console.error("No token found, user is not authenticated.");return}const x=(await h.post(`https://knowvara.com/api/api/pages/uploadImage/${i}`,s,{headers:{Authorization:`Bearer ${a}`,"Content-Type":"multipart/form-data"}})).data.imageUrl;m(x),l(x)}catch(a){console.error("Error uploading image:",a)}},w=()=>{var t;(t=c.current)==null||t.click()},C=()=>{o(!0)},v=async()=>{g(!0);try{const t=sessionStorage.getItem("token");if(!t){console.error("No token found, user is not authenticated.");return}const s=(await h.post(`https://knowvara.com/api/api/pages/generateImage/${i}`,{description:u},{headers:{Authorization:`Bearer ${t}`}})).data.imageUrl;m(s),l(s),o(!1)}catch(t){console.error("Error generating AI image:",t)}finally{g(!1)}},A=()=>{o(!1)};return e.jsxs("div",{className:`relative p-4 rounded-md ${y}`,style:{backgroundImage:d?`url(${d})`:"none",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},children:[e.jsx("input",{type:"file",ref:c,onChange:N,className:"hidden"}),e.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center",children:[e.jsx("button",{type:"button",onClick:w,className:"py-2 px-4 rounded-sm lms-button mb-2 text-sm",children:"Upload Image"}),e.jsx("button",{type:"button",onClick:C,className:"py-2 px-4 rounded-sm lms-button text-sm",children:"Generate Image"})]}),k&&e.jsxs("div",{className:"absolute bottom-0 left-0 p-4 bg-white rounded-md shadow-lg w-full",children:[e.jsx("textarea",{value:u,onChange:t=>I(t.target.value),placeholder:"Enter a detailed description for AI image generation...",rows:3,className:"w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"}),!p&&e.jsxs("div",{className:"mt-2 flex justify-end space-x-2",children:[e.jsx("button",{onClick:A,className:"lms-button py-2 px-4 rounded-sm text-sm",children:"Cancel"}),e.jsx("button",{onClick:v,className:"lms-button py-2 px-4 rounded-sm text-sm",children:"Generate"})]}),p&&e.jsxs("div",{className:"mt-2 flex items-center justify-center",children:[e.jsx("div",{className:"loader mr-2"}),e.jsx("span",{children:"Generating image, please wait..."})]})]})]})};export{U as P};