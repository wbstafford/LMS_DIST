import{c as E,r as t,B as n,e as d}from"./index-2WPDJfjq.js";const k=()=>{const{user:s}=E(),[o,l]=t.useState(null),[a,h]=t.useState(0),[m,b]=t.useState(!1),[S,c]=t.useState(!1),[U,r]=t.useState(""),u=i=>{switch(i.toLowerCase()){case"free":case"basic":return 100;case"plus":return 250;case"premium":return 1e3;default:return 100}},p=async()=>{var g,f;const i=sessionStorage.getItem("token");if(!i){r("Authentication token is missing. Please log in again."),n.error("Authentication token is missing. Please log in again.");return}if(!(s!=null&&s.OrgID)){r("User organization ID is undefined."),n.error("User organization ID is undefined.");return}c(!0),r("");try{const e=await d.get("https://knowvara.com/api/api/orgs/subscription",{headers:{Authorization:`Bearer ${i}`}});l(e.data);const x=u(e.data.subscription_plan);h(e.data.number_of_users),b(e.data.number_of_users>=x)}catch(e){d.isAxiosError(e)?(r(`Error fetching subscription details: ${((g=e.response)==null?void 0:g.data)||e.message}`),n.error(`Error fetching subscription details: ${((f=e.response)==null?void 0:f.data)||e.message}`)):(r("Unexpected error fetching subscription details."),n.error("Unexpected error fetching subscription details."))}finally{c(!1)}};t.useEffect(()=>{s!=null&&s.OrgID&&p()},[s==null?void 0:s.OrgID]);const I=o?u(o.subscription_plan)-a:0;return{subscription:o,currentUserCount:a,remainingUserSlots:I,isUserLimitReached:m,isFetching:S,error:U,refetch:p}};export{k as u};
