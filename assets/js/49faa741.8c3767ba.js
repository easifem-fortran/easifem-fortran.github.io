"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[34864],{55780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(85893),a=n(11151);const o={},s="GetName",c={id:"UserFunction/GetName",title:"GetName",description:"Get the name of the function.",source:"@site/docs/docs-api/UserFunction/GetName.md",sourceDirName:"UserFunction",slug:"/UserFunction/GetName",permalink:"/docs-api/UserFunction/GetName",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/UserFunction/GetName.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetArgType",permalink:"/docs-api/UserFunction/GetArgType"},next:{title:"GetReturnType",permalink:"/docs-api/UserFunction/GetReturnType"}},i={},d=[{value:"Interface",id:"interface",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"getname",children:"GetName"}),"\n",(0,r.jsx)(t.p,{children:"Get the name of the function."}),"\n",(0,r.jsx)("span",{class:"badge badge--secondary",children:" @GetMethods "}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION auf_GetName(obj) RESULT(ans)\n    CLASS(UserFunction_), INTENT(IN) :: obj\n    CHARACTER(:), ALLOCATABLE :: ans\n  END FUNCTION auf_GetName\nEND INTERFACE\n"})})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var r=n(67294);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);