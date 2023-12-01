"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[20417],{37129:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=i(85893),r=i(11151);const o={},c="GetVelocityDirichletBCPointer",s={id:"AbstractSTDBE/GetVelocityDirichletBCPointer",title:"GetVelocityDirichletBCPointer",description:"This routine returns the pointer to Dirichlet boundary condition of Velocity field in AbstractSTDBE kernel, that is  obj%DBCForVelocity(dbcNo)%ptr.",source:"@site/docs/docs-api/AbstractSTDBE/GetVelocityDirichletBCPointer.md",sourceDirName:"AbstractSTDBE",slug:"/AbstractSTDBE/GetVelocityDirichletBCPointer",permalink:"/docs-api/AbstractSTDBE/GetVelocityDirichletBCPointer",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractSTDBE/GetVelocityDirichletBCPointer.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetPressureNeumannBCPointer",permalink:"/docs-api/AbstractSTDBE/GetPressureNeumannBCPointer"},next:{title:"GetVelocityNeumannBCPointer",permalink:"/docs-api/AbstractSTDBE/GetVelocityNeumannBCPointer"}},a={},l=[];function d(t){const e={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"getvelocitydirichletbcpointer",children:"GetVelocityDirichletBCPointer"}),"\n",(0,n.jsxs)(e.p,{children:["This routine returns the pointer to Dirichlet boundary condition of Velocity field in ",(0,n.jsx)(e.a,{href:"/docs-api/AbstractSTDBE/AbstractSTDBE_",children:"AbstractSTDBE_"})," kernel, that is  ",(0,n.jsx)(e.code,{children:"obj%DBCForVelocity(dbcNo)%ptr"}),"."]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"After obtaining the Dirichlet boundary condition pointer, user can set the boundary condition"}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"dbcNo"})," should be lesser than total dirichlet boundary condition"]}),"\n"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION STDBE_GetVelocityDirichletBCPointer(obj, dbcNo) RESULT(ans)\n    CLASS(AbstractSTDBE_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: dbcNo\n    !! Dirichlet boundary nunber\n    CLASS(DirichletBC_), POINTER :: ans\n  END FUNCTION STDBE_GetVelocityDirichletBCPointer\nEND INTERFACE\n"})})]})}function u(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(d,{...t})}):d(t)}},11151:(t,e,i)=>{i.d(e,{Z:()=>s,a:()=>c});var n=i(67294);const r={},o=n.createContext(r);function c(t){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:c(t.components),n.createElement(o.Provider,{value:e},t.children)}}}]);