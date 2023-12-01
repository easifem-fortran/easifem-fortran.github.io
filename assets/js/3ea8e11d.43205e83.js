"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[80634],{55047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(85893),r=n(11151);const a={},s="GetDOFNo",i={id:"NeumannBC/GetDOFNo",title:"GetDOFNo",description:"Get degree of freedom number.",source:"@site/docs/docs-api/NeumannBC/GetDOFNo.md",sourceDirName:"NeumannBC",slug:"/NeumannBC/GetDOFNo",permalink:"/docs-api/NeumannBC/GetDOFNo",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/NeumannBC/GetDOFNo.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Get",permalink:"/docs-api/NeumannBC/Get"},next:{title:"GetMeshID",permalink:"/docs-api/NeumannBC/GetMeshID"}},c={},d=[{value:"Interface",id:"interface",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"getdofno",children:"GetDOFNo"}),"\n",(0,o.jsx)(t.p,{children:"Get degree of freedom number."}),"\n",(0,o.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION GetDOFNo(obj) RESULT(ans)\n    CLASS(AbstractBC_), INTENT(IN) :: obj\n    INTEGER(I4B) :: ans\n  END FUNCTION GetDOFNo\nEND INTERFACE\n"})}),"\n",(0,o.jsxs)(t.p,{children:["This routine is inherited from ",(0,o.jsx)(t.a,{href:"/docs-api/AbstractBC/AbstractBC_",children:"AbstractBC_"}),"."]})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var o=n(67294);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);