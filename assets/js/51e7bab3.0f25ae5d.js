"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[27202],{81376:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=s(85893),n=s(11151);const r={id:"Get",aliases:["Get"],tags:[],sidebar_position:6},i="Get",c={id:"AbstractMeshField/Get",title:"Get",description:"Get data from the AbstractMeshField_",source:"@site/docs/docs-api/AbstractMeshField/Get.md",sourceDirName:"AbstractMeshField",slug:"/AbstractMeshField/Get",permalink:"/docs-api/AbstractMeshField/Get",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMeshField/Get.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",sidebarPosition:6,frontMatter:{id:"Get",aliases:["Get"],tags:[],sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Add",permalink:"/docs-api/AbstractMeshField/Add"},next:{title:"CheckEssentialParam",permalink:"/docs-api/AbstractMeshField/CheckEssentialParam"}},o={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"get",children:"Get"}),"\n",(0,a.jsxs)(t.p,{children:["Get data from the ",(0,a.jsx)(t.code,{children:"AbstractMeshField_"})]}),"\n",(0,a.jsx)("span",{class:"badge badge--secondary",children:" @GetMethods "}),"\n",(0,a.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Get(obj, globalElement, fevar)\n    CLASS(AbstractMeshField_), INTENT(IN) :: obj\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: globalElement\n    TYPE(FEVariable_), INTENT(INOUT) :: fevar\n  END SUBROUTINE Get\nEND INTERFACE\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>i});var a=s(67294);const n={},r=a.createContext(n);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);