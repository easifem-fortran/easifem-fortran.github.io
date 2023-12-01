"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[24019],{16445:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=a(85893),n=a(11151);const o={},i="GetTotalQuadraturePoints",s={id:"QuadraturePoint/GetTotalQuadraturePoints",title:"GetTotalQuadraturePoints",description:"Returns the total number of quadrature points.",source:"@site/docs/docs-api/QuadraturePoint/GetTotalQuadraturePoints.md",sourceDirName:"QuadraturePoint",slug:"/QuadraturePoint/GetTotalQuadraturePoints",permalink:"/docs-api/QuadraturePoint/GetTotalQuadraturePoints",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/QuadraturePoint/GetTotalQuadraturePoints.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetQuadraturePoints",permalink:"/docs-api/QuadraturePoint/GetQuadraturePoints"},next:{title:"Initiate",permalink:"/docs-api/QuadraturePoint/Initiate"}},u={},d=[{value:"Interface",id:"interface",level:2}];function c(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"gettotalquadraturepoints",children:"GetTotalQuadraturePoints"}),"\n",(0,r.jsx)(e.p,{children:"Returns the total number of quadrature points."}),"\n",(0,r.jsx)(e.p,{children:"Calling example:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"a = GetTotalQuadraturePoints(obj)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"MODULE PURE FUNCTION GetTotalQuadraturePoints( obj, dims ) RESULT( Ans )\n  CLASS( QuadraturePoint_ ), INTENT( IN ) :: obj\n  INTEGER( I4B ), INTENT( IN ) :: dims\n  INTEGER( I4B ) :: Ans\nEND FUNCTION GetTotalQuadraturePoints\n"})})]})}function l(t={}){const{wrapper:e}={...(0,n.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(c,{...t})}):c(t)}},11151:(t,e,a)=>{a.d(e,{Z:()=>s,a:()=>i});var r=a(67294);const n={},o=r.createContext(n);function i(t){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:i(t.components),r.createElement(o.Provider,{value:e},t.children)}}}]);