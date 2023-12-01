"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[22071],{39062:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=n(85893),i=n(11151);const r={},c="GetPreconditionOption",a={id:"AbstractLinSolver/GetPreconditionOption",title:"GetPreconditionOption",description:"Get the precondition option.",source:"@site/docs/docs-api/AbstractLinSolver/GetPreconditionOption.md",sourceDirName:"AbstractLinSolver",slug:"/AbstractLinSolver/GetPreconditionOption",permalink:"/docs-api/AbstractLinSolver/GetPreconditionOption",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractLinSolver/GetPreconditionOption.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetParam",permalink:"/docs-api/AbstractLinSolver/GetParam"},next:{title:"Import",permalink:"/docs-api/AbstractLinSolver/Import"}},s={},d=[{value:"Interface",id:"interface",level:2}];function p(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"getpreconditionoption",children:"GetPreconditionOption"}),"\n",(0,o.jsx)(e.p,{children:"Get the precondition option."}),"\n",(0,o.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION GetPreconditionOption(obj) RESULT(Ans)\n    CLASS(AbstractLinSolver_), INTENT(IN) :: obj\n    INTEGER(I4B) :: ans\n  END FUNCTION GetPreconditionOption\nEND INTERFACE\n"})})]})}function l(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(p,{...t})}):p(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>a,a:()=>c});var o=n(67294);const i={},r=o.createContext(i);function c(t){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:c(t.components),o.createElement(r.Provider,{value:e},t.children)}}}]);