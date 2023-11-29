"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[14202],{65784:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>s});var r=i(85893),n=i(11151);const c={},d="AddDirichletBC",o={id:"DirichletBC/AddDirichletBC",title:"AddDirichletBC",description:"Add DirichletBC to a vector of DirichletBCPointer_.",source:"@site/docs/docs-api/DirichletBC/AddDirichletBC.md",sourceDirName:"DirichletBC",slug:"/DirichletBC/AddDirichletBC",permalink:"/docs-api/DirichletBC/AddDirichletBC",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/DirichletBC/AddDirichletBC.md",tags:[],version:"current",lastUpdatedAt:1701182689,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Get",permalink:"/docs-api/DirichletBC/Get"},next:{title:"CheckEssentialParam",permalink:"/docs-api/DirichletBC/CheckEssentialParam"}},a={},s=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"adddirichletbc",children:"AddDirichletBC"}),"\n",(0,r.jsxs)(t.p,{children:["Add ",(0,r.jsx)(t.code,{children:"DirichletBC"})," to a vector of ",(0,r.jsx)(t.code,{children:"DirichletBCPointer_"}),"."]}),"\n",(0,r.jsx)("span",{class:"badge badge--secondary",children:" @SetMethods "}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE AddDirichletBC\n  MODULE SUBROUTINE bc_AddDirichletBC(dbc, dbcNo, param, boundary, dom)\n    TYPE(DirichletBCPointer_), INTENT(INOUT) :: dbc(:)\n    !! Dirichlet boundary to form\n    INTEGER(I4B), INTENT(IN) :: dbcNo\n    !! Dirichlet boundary number\n    TYPE(ParameterList_), INTENT(IN) :: param\n    !! parameter for constructing [[DirichletBC_]].\n    TYPE(MeshSelection_), INTENT(IN) :: boundary\n    !! Boundary region\n    CLASS(Domain_), INTENT(IN) :: dom\n  END SUBROUTINE bc_AddDirichletBC\nEND INTERFACE AddDirichletBC\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>d});var r=i(67294);const n={},c=r.createContext(n);function d(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);