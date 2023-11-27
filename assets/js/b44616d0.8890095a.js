"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[96122],{96048:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=n(85893),i=n(11151);const r={},c="GetVelocityNeumannBCPointer",a={id:"AbstractSTDBE/GetVelocityNeumannBCPointer",title:"GetVelocityNeumannBCPointer",description:"This routine returns the pointer to Neumann boundary condition of Velocity field in AbstractSTDBE kernel, that is obj%NBCForVelocity(nbcNo)%ptr.",source:"@site/docs/docs-api/AbstractSTDBE/GetVelocityNeumannBCPointer.md",sourceDirName:"AbstractSTDBE",slug:"/AbstractSTDBE/GetVelocityNeumannBCPointer",permalink:"/docs-api/AbstractSTDBE/GetVelocityNeumannBCPointer",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractSTDBE/GetVelocityNeumannBCPointer.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetVelocityDirichletBCPointer",permalink:"/docs-api/AbstractSTDBE/GetVelocityDirichletBCPointer"},next:{title:"Import",permalink:"/docs-api/AbstractSTDBE/Import"}},s={},l=[];function d(t){const e={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"getvelocityneumannbcpointer",children:"GetVelocityNeumannBCPointer"}),"\n",(0,o.jsxs)(e.p,{children:["This routine returns the pointer to Neumann boundary condition of Velocity field in ",(0,o.jsx)(e.a,{href:"/docs-api/AbstractSTDBE/AbstractSTDBE_",children:"AbstractSTDBE_"})," kernel, that is ",(0,o.jsx)(e.code,{children:"obj%NBCForVelocity(nbcNo)%ptr"}),"."]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"After obtaining the Neumann boundary condition pointer, user can set the boundary condition"}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"nbcNo"})," should be lesser than total Neumann boundary condition"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION STDBE_GetVelocityNeumannBCPointer(obj, nbcNo) RESULT(ans)\n    CLASS(AbstractSTDBE_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: nbcNo\n    !! Neumann boundary nunber\n    CLASS(NeumannBC_), POINTER :: ans\n  END FUNCTION STDBE_GetVelocityNeumannBCPointer\nEND INTERFACE\n"})})]})}function u(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>a,a:()=>c});var o=n(67294);const i={},r=o.createContext(i);function c(t){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:c(t.components),o.createElement(r.Provider,{value:e},t.children)}}}]);