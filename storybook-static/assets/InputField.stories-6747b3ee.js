import{j as e}from"./jsx-runtime-e7d94ccb.js";import{r as f}from"./index-981f9478.js";import{c as x,L as re}from"./loader-2-921ff082.js";const te=x("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),se=x("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),ne=x("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),w=({value:a="",onChange:t,label:n,placeholder:b,helperText:E,errorMessage:y,disabled:l=!1,invalid:O=!1,variant:$="outlined",size:A="md",type:T="text",showClearButton:B=!1,loading:g=!1,className:X="",id:j,...Z})=>{const[h,G]=f.useState(!1),[J,I]=f.useState(!1),v=f.useRef(null),q=T==="password",o=O||!!y,K=a.length>0,Q={sm:{input:"px-3 py-1.5 text-sm",label:"text-sm",icon:"w-4 h-4"},md:{input:"px-4 py-2.5 text-base",label:"text-sm",icon:"w-5 h-5"},lg:{input:"px-4 py-3 text-lg",label:"text-base",icon:"w-5 h-5"}},U={filled:{base:"bg-gray-100 border-0 border-b-2 rounded-t-lg",normal:"border-gray-300",focus:"border-blue-500 bg-gray-50",error:"border-red-500 bg-red-50"},outlined:{base:"bg-transparent border-2 rounded-lg",normal:"border-gray-300",focus:"border-blue-500",error:"border-red-500"},ghost:{base:"bg-transparent border-0 border-b-2 rounded-none",normal:"border-gray-200",focus:"border-blue-500",error:"border-red-500"}},r=Q[A],i=U[$],Y=["w-full transition-all duration-200 outline-none text-gray-900 placeholder-gray-400",i.base,r.input,l?"opacity-50 cursor-not-allowed":"hover:shadow-sm",o?i.error:J?i.focus:i.normal,X].join(" "),ee=["block font-medium mb-1 transition-colors duration-200",r.label,o?"text-red-600":"text-gray-700",l&&"opacity-50"].join(" "),ae=()=>{t&&v.current&&(t({target:{value:""}}),v.current.focus())};return e.jsxs("div",{className:"w-full",children:[n&&e.jsx("label",{className:ee,htmlFor:j,children:n}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{id:j,ref:v,type:q?h?"text":"password":T,value:a,onChange:t,placeholder:b,disabled:l||g,className:Y,onFocus:()=>I(!0),onBlur:()=>I(!1),"aria-invalid":o,...Z}),e.jsxs("div",{className:"absolute inset-y-0 right-0 flex items-center pr-3 space-x-1",children:[g&&e.jsx(re,{className:`${r.icon} text-gray-400 animate-spin`}),B&&K&&!l&&!g&&e.jsx("button",{type:"button",onClick:ae,className:"text-gray-400 hover:text-gray-600 transition-colors",tabIndex:-1,children:e.jsx(ne,{className:r.icon})}),q&&e.jsx("button",{type:"button",onClick:()=>G(!h),className:"text-gray-400 hover:text-gray-600 transition-colors",tabIndex:-1,children:h?e.jsx(te,{className:r.icon}):e.jsx(se,{className:r.icon})})]})]}),(E||y)&&e.jsx("div",{className:`mt-1 text-sm ${o?"text-red-600":"text-gray-500"}`,children:y||E})]})};w.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{id:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'ghost'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'outlined'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'text' | 'password' | 'email' | 'number'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'password'"},{name:"literal",value:"'email'"},{name:"literal",value:"'number'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},showClearButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const ue={title:"Components/InputField",component:w,parameters:{layout:"centered"},decorators:[a=>e.jsx("div",{className:"w-80 p-4",children:e.jsx(a,{})})]},s=a=>{const[t,n]=f.useState(a.value||"");return e.jsx(w,{...a,value:t,onChange:b=>n(b.target.value)})},d={render:s,args:{label:"Email",placeholder:"Enter your email",helperText:"We'll never share your email."}},u={render:s,args:{type:"password",label:"Password",placeholder:"Enter your password",helperText:"Must be at least 8 characters"}},c={render:s,args:{label:"Email",placeholder:"Enter your email",invalid:!0,errorMessage:"Please enter a valid email address"}},p={render:s,args:{label:"Disabled Input",placeholder:"This is disabled",disabled:!0,value:"Cannot edit this"}},m={render:s,args:{label:"Loading Input",placeholder:"Loading...",loading:!0}};var N,k,C;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    helperText: 'We\\'ll never share your email.'
  }
}`,...(C=(k=d.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var L,S,V;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    helperText: 'Must be at least 8 characters'
  }
}`,...(V=(S=u.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var M,W,P;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    invalid: true,
    errorMessage: 'Please enter a valid email address'
  }
}`,...(P=(W=c.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var F,D,R;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    label: 'Disabled Input',
    placeholder: 'This is disabled',
    disabled: true,
    value: 'Cannot edit this'
  }
}`,...(R=(D=p.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var z,_,H;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    label: 'Loading Input',
    placeholder: 'Loading...',
    loading: true
  }
}`,...(H=(_=m.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};const ce=["Default","Password","WithError","Disabled","Loading"];export{d as Default,p as Disabled,m as Loading,u as Password,c as WithError,ce as __namedExportsOrder,ue as default};
