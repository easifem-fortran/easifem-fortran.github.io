"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[87899],{62298:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(85893),o=r(11151);const i={},a="Import",s={id:"AbstractLinSolver/Import",title:"Import",description:"Import the linear solver from external file.",source:"@site/docs/docs-api/AbstractLinSolver/Import.md",sourceDirName:"AbstractLinSolver",slug:"/AbstractLinSolver/Import",permalink:"/docs-api/AbstractLinSolver/Import",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractLinSolver/Import.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetPreconditionOption",permalink:"/docs-api/AbstractLinSolver/GetPreconditionOption"},next:{title:"Initiate",permalink:"/docs-api/AbstractLinSolver/Initiate"}},c={},l=[{value:"Interface",id:"interface",level:2}];function p(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"import",children:"Import"}),"\n",(0,n.jsx)(e.p,{children:"Import the linear solver from external file."}),"\n",(0,n.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE Import(obj, hdf5, group)\n    IMPORT :: AbstractLinSolver_, HDF5File_\n    CLASS(AbstractLinSolver_), INTENT(INOUT) :: obj\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    CHARACTER(*), INTENT(IN) :: group\n  END SUBROUTINE Import\nEND INTERFACE\n"})})]})}function d(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(p,{...t})}):p(t)}},11151:(t,e,r)=>{r.d(e,{Z:()=>s,a:()=>a});var n=r(67294);const o={},i=n.createContext(o);function a(t){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:a(t.components),n.createElement(i.Provider,{value:e},t.children)}}}]);