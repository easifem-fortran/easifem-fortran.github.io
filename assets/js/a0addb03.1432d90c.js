"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[49336],{94822:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=n(85893),i=n(11151);const a={},s="GetPrefix",o={id:"LinearElasticModel/GetPrefix",title:"GetPrefix",description:"Get prefix.",source:"@site/docs/docs-api/LinearElasticModel/GetPrefix.md",sourceDirName:"LinearElasticModel",slug:"/LinearElasticModel/GetPrefix",permalink:"/docs-api/LinearElasticModel/GetPrefix",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/LinearElasticModel/GetPrefix.md",tags:[],version:"current",lastUpdatedAt:1701497244,formattedLastUpdatedAt:"Dec 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetParam",permalink:"/docs-api/LinearElasticModel/GetParam"},next:{title:"Import",permalink:"/docs-api/LinearElasticModel/Import"}},c={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"getprefix",children:"GetPrefix"}),"\n",(0,r.jsx)(t.p,{children:"Get prefix."}),"\n",(0,r.jsx)("span",{class:"badge badge--secondary",children:" @GetMethods "}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION GetPrefix(obj) RESULT(ans)\n    CLASS(LinearElasticModel_), INTENT(IN) :: obj\n    CHARACTER(:), ALLOCATABLE :: ans\n  END FUNCTION GetPrefix\nEND INTERFACE\n"})})]})}function f(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var r=n(67294);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);