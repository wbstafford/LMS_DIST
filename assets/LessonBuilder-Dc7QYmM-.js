import{d as k,r as w,j as n,b5 as j,ah as _,aq as z,M as F,f as L,g as G,v as Y,c as Q}from"./index-BEzWJCG4.js";import{u as b,a as J,D as W,H as X}from"./index-I8ALC52F.js";const Z=({page:a,onDelete:c,dragRef:u})=>{const x=k(),[l,f]=w.useState(!1),N=()=>{const d=a.Type?a.Type.toLowerCase():"page";x(d==="question"?`/admin/question-creator/${a.LessonId}/${a.Id}`:`/admin/page-creator/${a.LessonId}/${a.Id}`)},C=()=>{f(!0)},h=async()=>{f(!1);try{const d=sessionStorage.getItem("token");if(!d){console.error("No token found, user is not authenticated.");return}await L.delete(`https://knowvara.com/api/api/pages/${a.Id}`,{headers:{Authorization:`Bearer ${d}`}}),c(a.Id)}catch(d){console.error("Error deleting page:",d)}},g=d=>({__html:d}),$=()=>{switch(a.Template){case"imageRightHalf":case"imageLeftHalf":return n.jsxs("div",{className:"page-card-row",children:[a.Template==="imageLeftHalf"&&a.ImageURL&&n.jsx("div",{className:"page-card-image-container",children:n.jsx("img",{src:a.ImageURL,alt:a.Title,className:"page-card-image-half"})}),n.jsx("div",{className:"page-card-content",dangerouslySetInnerHTML:g(a.PageContent)}),a.Template==="imageRightHalf"&&a.ImageURL&&n.jsx("div",{className:"page-card-image-container",children:n.jsx("img",{src:a.ImageURL,alt:a.Title,className:"page-card-image-half"})})]});case"imageTop":case"imageBottom":return n.jsxs("div",{className:"page-card-column",children:[a.Template==="imageTop"&&a.ImageURL&&n.jsx("div",{className:"page-card-image-container-full",children:n.jsx("img",{src:a.ImageURL,alt:a.Title,className:"page-card-image-full"})}),n.jsx("div",{className:"page-card-content-full",dangerouslySetInnerHTML:g(a.PageContent)}),a.Template==="imageBottom"&&a.ImageURL&&n.jsx("div",{className:"page-card-image-container-full",children:n.jsx("img",{src:a.ImageURL,alt:a.Title,className:"page-card-image-full"})})]});case"imageOnly":return n.jsx("div",{className:"page-card-image-only-container",children:a.ImageURL&&n.jsx("img",{src:a.ImageURL,alt:a.Title,className:"page-card-image-only"})});default:return n.jsx("div",{className:"page-card-content-default",dangerouslySetInnerHTML:g(a.PageContent)})}};return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"page-card",children:[n.jsxs("div",{className:"flex justify-between items-center p-2 subnav-gradient-reverse",children:[n.jsx("div",{ref:u,className:"page-card-drag-handle text-violet-200 cursor-pointer hover:text-violet-100","aria-label":"Drag Handle",role:"button",tabIndex:0,children:n.jsx(j,{})}),n.jsxs("div",{className:"flex items-center",children:[n.jsx(_,{className:"text-violet-200 mr-2 cursor-pointer hover:text-violet-100",onClick:N,size:18,title:"Edit","aria-label":"Edit Page"}),n.jsx(z,{className:"text-violet-200 cursor-pointer hover:text-violet-100",onClick:C,size:18,title:"Delete","aria-label":"Delete Page"})]})]}),n.jsx("div",{className:"page-card-title",children:a.Title}),n.jsx("div",{className:"page-card-body",children:$()})]}),l&&n.jsx(F,{title:"Delete Page",onClose:()=>f(!1),onConfirm:h,children:n.jsx("p",{children:"Are you sure you want to delete this page?"})})]})},R={PAGE:"page"},K=({page:a,index:c,movePage:u,onDelete:x})=>{const l=w.useRef(null),f=w.useRef(null),[,N]=b({accept:R.PAGE,hover($,d){if(!l.current)return;const E=$.index,I=c;if(E===I)return;const A=l.current.getBoundingClientRect(),P=(A.bottom-A.top)/2,i=d.getClientOffset();if(!i)return;const y=i.y-A.top;E<I&&y<P||E>I&&y>P||(u(E,I),$.index=I)}}),[{isDragging:C},h]=J({type:R.PAGE,item:{type:R.PAGE,id:a.Id,index:c},collect:$=>({isDragging:$.isDragging()})});w.useEffect(()=>{f.current&&h(f.current)},[h]),N(l);const g=C?0:1;return n.jsx("div",{ref:l,style:{opacity:g},children:n.jsx(Z,{page:a,onDelete:x,dragRef:f})})};var M={exports:{}};(function(a,c){Object.defineProperty(c,"__esModule",{value:!0});function u(e){return typeof e=="object"&&!("toString"in e)?Object.prototype.toString.call(e).slice(8,-1):e}var x=typeof process=="object"&&!0;function l(e,t){if(!e)throw x?new Error("Invariant failed"):new Error(t())}c.invariant=l;var f=Object.prototype.hasOwnProperty,N=Array.prototype.splice,C=Object.prototype.toString;function h(e){return C.call(e).slice(8,-1)}var g=Object.assign||function(e,t){return $(t).forEach(function(r){f.call(t,r)&&(e[r]=t[r])}),e},$=typeof Object.getOwnPropertySymbols=="function"?function(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.keys(e)};function d(e){return Array.isArray(e)?g(e.constructor(e.length),e):h(e)==="Map"?new Map(e):h(e)==="Set"?new Set(e):e&&typeof e=="object"?g(Object.create(Object.getPrototypeOf(e)),e):e}var E=function(){function e(){this.commands=g({},I),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(t,r){return t===r},this.update.newContext=function(){return new e().update}}return Object.defineProperty(e.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(t){this.update.isEquals=t},enumerable:!0,configurable:!0}),e.prototype.extend=function(t,r){this.commands[t]=r},e.prototype.update=function(t,r){var o=this,s=typeof r=="function"?{$apply:r}:r;Array.isArray(t)&&Array.isArray(s)||l(!Array.isArray(s),function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."}),l(typeof s=="object"&&s!==null,function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the "+("following commands: "+Object.keys(o.commands).join(", ")+".")});var m=t;return $(s).forEach(function(v){if(f.call(o.commands,v)){var U=t===m;m=o.commands[v](s[v],m,s,t),U&&o.isEquals(m,t)&&(m=t)}else{var S=h(t)==="Map"?o.update(t.get(v),s[v]):o.update(t[v],s[v]),B=h(m)==="Map"?m.get(v):m[v];(!o.isEquals(S,B)||typeof S>"u"&&!f.call(t,v))&&(m===t&&(m=d(t)),h(m)==="Map"?m.set(v,S):m[v]=S)}}),m},e}();c.Context=E;var I={$push:function(e,t,r){return P(t,r,"$push"),e.length?t.concat(e):t},$unshift:function(e,t,r){return P(t,r,"$unshift"),e.length?e.concat(t):t},$splice:function(e,t,r,o){return y(t,r),e.forEach(function(s){p(s),t===o&&s.length&&(t=d(o)),N.apply(t,s)}),t},$set:function(e,t,r){return H(r),e},$toggle:function(e,t){i(e,"$toggle");var r=e.length?d(t):t;return e.forEach(function(o){r[o]=!t[o]}),r},$unset:function(e,t,r,o){return i(e,"$unset"),e.forEach(function(s){Object.hasOwnProperty.call(t,s)&&(t===o&&(t=d(o)),delete t[s])}),t},$add:function(e,t,r,o){return D(t,"$add"),i(e,"$add"),h(t)==="Map"?e.forEach(function(s){var m=s[0],v=s[1];t===o&&t.get(m)!==v&&(t=d(o)),t.set(m,v)}):e.forEach(function(s){t===o&&!t.has(s)&&(t=d(o)),t.add(s)}),t},$remove:function(e,t,r,o){return D(t,"$remove"),i(e,"$remove"),e.forEach(function(s){t===o&&t.has(s)&&(t=d(o)),t.delete(s)}),t},$merge:function(e,t,r,o){return q(t,e),$(e).forEach(function(s){e[s]!==t[s]&&(t===o&&(t=d(o)),t[s]=e[s])}),t},$apply:function(e,t){return T(e),e(t)}},A=new E;c.isEquals=A.update.isEquals,c.extend=A.extend,c.default=A.update,c.default.default=a.exports=g(c.default,c);function P(e,t,r){l(Array.isArray(e),function(){return"update(): expected target of "+u(r)+" to be an array; got "+u(e)+"."}),i(t[r],r)}function i(e,t){l(Array.isArray(e),function(){return"update(): expected spec of "+u(t)+" to be an array; got "+u(e)+". Did you forget to wrap your parameter in an array?"})}function y(e,t){l(Array.isArray(e),function(){return"Expected $splice target to be an array; got "+u(e)}),p(t.$splice)}function p(e){l(Array.isArray(e),function(){return"update(): expected spec of $splice to be an array of arrays; got "+u(e)+". Did you forget to wrap your parameters in an array?"})}function T(e){l(typeof e=="function",function(){return"update(): expected spec of $apply to be a function; got "+u(e)+"."})}function H(e){l(Object.keys(e).length===1,function(){return"Cannot have more than one key in an object with $set"})}function q(e,t){l(t&&typeof t=="object",function(){return"update(): $merge expects a spec of type 'object'; got "+u(t)}),l(e&&typeof e=="object",function(){return"update(): $merge expects a target of type 'object'; got "+u(e)})}function D(e,t){var r=h(e);l(r==="Map"||r==="Set",function(){return"update(): "+u(t)+" expects a target of type Set or Map; got "+u(r)})}})(M,M.exports);var V=M.exports;const O=G(V),ae=()=>{const{lessonId:a}=Y(),{user:c}=Q(),u=k(),[x,l]=w.useState(null),[f,N]=w.useState([]),[C,h]=w.useState(!1),g=w.useRef(null);w.useEffect(()=>{const i=async()=>{console.log("Fetching lesson details for lessonId:",a),console.log("User email:",c==null?void 0:c.Email);try{const p=sessionStorage.getItem("token");if(!p){console.error("No token found, user is not authenticated.");return}const T=await L.get(`https://knowvara.com/api/api/lessons/lesson/${a}`,{headers:{Authorization:`Bearer ${p}`}});console.log("Lesson response data:",T.data),l(T.data)}catch(p){console.error("Error fetching lesson:",p)}},y=async()=>{console.log("Fetching pages for lessonId:",a);try{const p=sessionStorage.getItem("token");if(!p){console.error("No token found, user is not authenticated.");return}const T=await L.get(`https://knowvara.com/api/api/pages/${a}`,{headers:{Authorization:`Bearer ${p}`}});console.log("Pages response data:",T.data.pages),N(T.data.pages)}catch(p){console.error("Error fetching pages:",p)}};i(),y()},[a,c==null?void 0:c.Email]);const $=i=>{N(y=>y.filter(p=>p.Id!==i))},d=()=>{u(`/admin/page-creator/${a}/0`)},E=()=>{u(`/admin/question-creator/${a}/0`)},I=()=>{u(`/admin/course-form/${x==null?void 0:x.CourseID}`)},A=w.useCallback((i,y)=>{const p=f[i];N(O(f,{$splice:[[i,1],[y,0,p]]}))},[f]),P=w.useCallback(async()=>{try{h(!0);const i=f.map(p=>p.Id),y=sessionStorage.getItem("token");if(!y){console.error("No token found, user is not authenticated.");return}await L.put(`https://knowvara.com/api/api/pages/reorder/${a}`,{orderedPageIds:i},{headers:{Authorization:`Bearer ${y}`,"Content-Type":"application/json"}}),console.log("Page order updated successfully!")}catch(i){console.error("Error saving page order:",i),alert("Failed to update page order. Please try again.")}finally{h(!1)}},[f,a]);return w.useEffect(()=>(g.current&&clearTimeout(g.current),g.current=window.setTimeout(()=>{P()},500),()=>{g.current&&clearTimeout(g.current)}),[f,P]),n.jsx(W,{backend:X,children:n.jsx("div",{className:"flex flex-col p-4 h-full",children:x&&n.jsxs("div",{children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsxs("div",{className:"flex flex-row",children:[n.jsx("p",{className:"text-2xl font-bold mr-3",children:x.Name}),n.jsx("button",{onClick:I,className:"lms-button text-white py-1 px-3 text-xs mr-2",children:"Return to Course"})]}),n.jsxs("div",{className:"flex",children:[n.jsx("button",{onClick:d,className:"lms-button text-white py-2 px-4 rounded-sm text-sm mr-2",children:"Add New Page"}),n.jsx("button",{onClick:E,className:"lms-button text-white py-2 px-4 rounded-sm text-sm",children:"Add New Question"})]})]}),n.jsx("div",{className:"lesson-builder-grid",children:f.map((i,y)=>n.jsx(K,{index:y,page:i,movePage:A,onDelete:$},i.Id))}),C&&n.jsx("div",{className:"mt-4 text-blue-500",children:"Saving new order..."})]})})})};export{ae as default};