"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[35002],{80432:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>d,toc:()=>o});var r=a(85893),i=a(11151);const n={},s="AddFluidMaterial",d={id:"AbstractSTDBE/AddFluidMaterial",title:"AddFluidMaterial",description:"- This routine adds Fluid material to the AbstractSTDBE.",source:"@site/docs/docs-api/AbstractSTDBE/AddFluidMaterial.md",sourceDirName:"AbstractSTDBE",slug:"/AbstractSTDBE/AddFluidMaterial",permalink:"/docs-api/AbstractSTDBE/AddFluidMaterial",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractSTDBE/AddFluidMaterial.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/AbstractSTDBE/AbstractSTDBE_"},next:{title:"AddPorousMaterial",permalink:"/docs-api/AbstractSTDBE/AddPorousMaterial"}},l={},o=[];function c(e){const t={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"addfluidmaterial",children:"AddFluidMaterial"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["This routine adds Fluid material to the ",(0,r.jsx)(t.a,{href:"/docs-api/AbstractSTDBE/AbstractSTDBE_",children:"AbstractSTDBE_"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["This routine prepares ",(0,r.jsx)(t.code,{children:"obj%FluidMaterialToMesh(materialNo)"})," and ",(0,r.jsx)(t.code,{children:"obj%fluidMaterial(materialNo)"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"param"})," contains the parameters for constructing a FluidMaterial"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"materialName"})," is the name of material, it should be ",(0,r.jsx)(t.code,{children:"fluidMaterial"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"region"})," is an instance of ",(0,r.jsx)(t.a,{href:"/docs-api/MeshSelection/MeshSelection_",children:"MeshSelection_"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"materialNo"})," should be lesser than or equal to the total number of Fluid materials."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE STDBE_AddFluidMaterial(obj, materialNo, materialName, &\n    & param, region)\n    CLASS(AbstractSTDBE_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: materialNo\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: materialName\n    TYPE(ParameterList_), OPTIONAL, INTENT(IN) :: param\n    TYPE(MeshSelection_), OPTIONAL, INTENT(IN) :: region\n  END SUBROUTINE STDBE_AddFluidMaterial\nEND INTERFACE\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>d,a:()=>s});var r=a(67294);const i={},n=r.createContext(i);function s(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);