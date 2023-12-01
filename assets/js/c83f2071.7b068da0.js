"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[79772],{11322:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=a(85893),r=a(11151);const o={},c="Deallocate",s={id:"AbstractLinSolver/Deallocate",title:"Deallocate",description:"Deallocate the memory occupied by the abstract lin solver.",source:"@site/docs/docs-api/AbstractLinSolver/Deallocate.md",sourceDirName:"AbstractLinSolver",slug:"/AbstractLinSolver/Deallocate",permalink:"/docs-api/AbstractLinSolver/Deallocate",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractLinSolver/Deallocate.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CheckEssentialParam",permalink:"/docs-api/AbstractLinSolver/CheckEssentialParam"},next:{title:"Display",permalink:"/docs-api/AbstractLinSolver/Display"}},l={},i=[{value:"Interface",id:"interface",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"deallocate",children:"Deallocate"}),"\n",(0,n.jsx)(t.p,{children:"Deallocate the memory occupied by the abstract lin solver."}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE Deallocate(obj)\n    IMPORT :: AbstractLinSolver_\n    CLASS(AbstractLinSolver_), INTENT(INOUT) :: obj\n  END SUBROUTINE Deallocate\nEND INTERFACE\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>c});var n=a(67294);const r={},o=n.createContext(r);function c(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);