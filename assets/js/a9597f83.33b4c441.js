"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[48057],{78868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>S,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(85893),i=n(11151);const s={},a="Set",o={id:"LinSolverLis/Set",title:"Set",description:"Set the abstract linear solver.",source:"@site/docs/docs-api/LinSolverLis/Set.md",sourceDirName:"LinSolverLis",slug:"/LinSolverLis/Set",permalink:"/docs-api/LinSolverLis/Set",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/LinSolverLis/Set.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/LinSolverLis/LinSolverLis_"},next:{title:"SetLinSolverParam",permalink:"/docs-api/LinSolverLis/SetLinSolverParam"}},c={},l=[{value:"Interface",id:"interface",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"set",children:"Set"}),"\n",(0,r.jsx)(t.p,{children:"Set the abstract linear solver."}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE Set(obj, Amat)\n    IMPORT :: AbstractLinSolver_, AbstractMatrixField_\n    CLASS(AbstractLinSolver_), INTENT(INOUT) :: obj\n    CLASS(AbstractMatrixField_), TARGET, INTENT(INOUT) :: Amat\n  END SUBROUTINE Set\nEND INTERFACE\n"})})]})}function S(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var r=n(67294);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);