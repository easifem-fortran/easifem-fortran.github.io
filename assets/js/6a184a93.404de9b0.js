"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[60400],{16829:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>c,default:()=>E,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var o=t(85893),n=t(11151);const l={},c="Deallocate",r={id:"SolidMaterial/Deallocate",title:"Deallocate",description:"Deallocate the contents of SolidMaterial_.",source:"@site/docs/docs-api/SolidMaterial/Deallocate.md",sourceDirName:"SolidMaterial",slug:"/SolidMaterial/Deallocate",permalink:"/docs-api/SolidMaterial/Deallocate",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/SolidMaterial/Deallocate.md",tags:[],version:"current",lastUpdatedAt:1701411597,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CheckEssentialParam",permalink:"/docs-api/SolidMaterial/CheckEssentialParam"},next:{title:"Display",permalink:"/docs-api/SolidMaterial/Display"}},i={},s=[{value:"Interface",id:"interface",level:2}];function d(e){const a={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h1,{id:"deallocate",children:"Deallocate"}),"\n",(0,o.jsxs)(a.p,{children:["Deallocate the contents of ",(0,o.jsx)(a.code,{children:"SolidMaterial_"}),"."]}),"\n",(0,o.jsx)("span",{class:"badge badge--secondary",children:" @ConstructorMethods "}),"\n",(0,o.jsx)(a.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Deallocate(obj)\n    CLASS(SolidMaterial_), INTENT(INOUT) :: obj\n  END SUBROUTINE Deallocate\nEND INTERFACE\n"})}),"\n",(0,o.jsxs)(a.admonition,{type:"note",children:[(0,o.jsxs)(a.p,{children:["To deallocate the vector of ",(0,o.jsx)(a.code,{children:"SolidMaterial_"})," you can call generic routine called ",(0,o.jsx)(a.code,{children:"Deallocate"})]}),(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-fortran",children:"INTERFACE DEALLOCATE\n  MODULE SUBROUTINE Deallocate_Vector(obj)\n    TYPE(SolidMaterial_), ALLOCATABLE :: obj(:)\n  END SUBROUTINE Deallocate_Vector\nEND INTERFACE DEALLOCATE\n"})})]}),"\n",(0,o.jsxs)(a.admonition,{type:"note",children:[(0,o.jsxs)(a.p,{children:["To deallocate the vector of ",(0,o.jsx)(a.code,{children:"SolidMaterialPointer_"}),", you can call generic routine called ",(0,o.jsx)(a.code,{children:"Deallocate"}),"."]}),(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-fortran",children:"INTERFACE DEALLOCATE\n  MODULE SUBROUTINE Deallocate_Ptr_Vector(obj)\n    TYPE(SolidMaterialPointer_), ALLOCATABLE :: obj(:)\n  END SUBROUTINE Deallocate_Ptr_Vector\nEND INTERFACE DEALLOCATE\n"})})]})]})}function E(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>r,a:()=>c});var o=t(67294);const n={},l=o.createContext(n);function c(e){const a=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),o.createElement(l.Provider,{value:a},e.children)}}}]);