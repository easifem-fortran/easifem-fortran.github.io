"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[21457],{96916:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=r(85893),n=r(11151);const i={},s="GetPrefix",o={id:"AbstractMaterial/GetPrefix",title:"GetPrefix",description:"Get the prefix.",source:"@site/docs/docs-api/AbstractMaterial/GetPrefix.md",sourceDirName:"AbstractMaterial",slug:"/AbstractMaterial/GetPrefix",permalink:"/docs-api/AbstractMaterial/GetPrefix",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMaterial/GetPrefix.md",tags:[],version:"current",lastUpdatedAt:1701500958,formattedLastUpdatedAt:"Dec 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetMaterialPointer",permalink:"/docs-api/AbstractMaterial/GetMaterialPointer"},next:{title:"Import",permalink:"/docs-api/AbstractMaterial/Import"}},c={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"getprefix",children:"GetPrefix"}),"\n",(0,a.jsx)(t.p,{children:"Get the prefix."}),"\n",(0,a.jsx)("span",{class:"badge badge--secondary",children:" @GetMethods "}),"\n",(0,a.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION obj_GetPrefix(obj) RESULT(ans)\n    CLASS(AbstractMaterial_), INTENT(IN) :: obj\n    CHARACTER(:), ALLOCATABLE :: ans\n  END FUNCTION obj_GetPrefix\nEND INTERFACE\n"})})]})}function f(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>s});var a=r(67294);const n={},i=a.createContext(n);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);