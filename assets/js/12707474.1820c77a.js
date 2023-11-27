"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[1965],{23999:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var t=r(85893),s=r(11151);const a={},o="AddPressureNeumannBC",c={id:"AbstractSTDBE/AddPressureNeumannBC",title:"AddPressureNeumannBC",description:"This routine sets the Neumann boundary condition for pressure field in AbstractSTDBE kernel. It makes obj%NBCForPressure(nbcNo)",source:"@site/docs/docs-api/AbstractSTDBE/AddPressureNeumannBC.md",sourceDirName:"AbstractSTDBE",slug:"/AbstractSTDBE/AddPressureNeumannBC",permalink:"/docs-api/AbstractSTDBE/AddPressureNeumannBC",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractSTDBE/AddPressureNeumannBC.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AddPressureDirichletBC",permalink:"/docs-api/AbstractSTDBE/AddPressureDirichletBC"},next:{title:"AddVelocityDirichletBC",permalink:"/docs-api/AbstractSTDBE/AddVelocityDirichletBC"}},d={},i=[];function u(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"addpressureneumannbc",children:"AddPressureNeumannBC"}),"\n",(0,t.jsxs)(n.p,{children:["This routine sets the Neumann boundary condition for pressure field in ",(0,t.jsx)(n.a,{href:"/docs-api/AbstractSTDBE/AbstractSTDBE_",children:"AbstractSTDBE_"})," kernel. It makes ",(0,t.jsx)(n.code,{children:"obj%NBCForPressure(nbcNo)"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"nbcNo"})," should be lesser than total Neumann boundary condition for pressure field"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE STDBE_AddPressureNeumannBC(obj, nbcNo, param, boundary)\n    CLASS(AbstractSTDBE_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: nbcNo\n    !! Neumann boundary nunber\n    TYPE(ParameterList_), INTENT(IN) :: param\n    !! parameter for constructing [DirichletBC_](DirichletBC_.md).\n    TYPE(MeshSelection_), INTENT(IN) :: boundary\n    !! Boundary region\n  END SUBROUTINE STDBE_AddPressureNeumannBC\nEND INTERFACE\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>o});var t=r(67294);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);