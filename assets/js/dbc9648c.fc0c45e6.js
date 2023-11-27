"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[23490],{85619:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=o(85893),r=o(11151);const i={},a="GetLinSolverNameFromCode",s={id:"LinSolverLis/GetLinSolverCodeFromName",title:"GetLinSolverNameFromCode",description:"This function returns the name of linear solver from the integer code.",source:"@site/docs/docs-api/LinSolverLis/GetLinSolverCodeFromName.md",sourceDirName:"LinSolverLis",slug:"/LinSolverLis/GetLinSolverCodeFromName",permalink:"/docs-api/LinSolverLis/GetLinSolverCodeFromName",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/LinSolverLis/GetLinSolverCodeFromName.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Export",permalink:"/docs-api/LinSolverLis/Export"},next:{title:"GetLinSolverNameFromCode",permalink:"/docs-api/LinSolverLis/GetLinSolverNameFromCode"}},c={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"getlinsolvernamefromcode",children:"GetLinSolverNameFromCode"}),"\n",(0,t.jsx)(n.p,{children:"This function returns the name of linear solver from the integer code."}),"\n",(0,t.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION getLinSolverNameFromCode(name) RESULT(Ans)\n    INTEGER(I4B), INTENT(IN) :: name\n    CHARACTER(15) :: ans\n  END FUNCTION getLinSolverNameFromCode\nEND INTERFACE\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>a});var t=o(67294);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);