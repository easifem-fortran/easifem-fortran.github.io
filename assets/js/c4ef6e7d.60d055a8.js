"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[5284],{2043:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(85893),i=a(11151);const r={},s="Initiate",o={id:"AbstractMaterialModel/Initiate",title:"Initiate",description:"Initiate an instance of AbstractMaterialModel_.",source:"@site/docs/docs-api/AbstractMaterialModel/Initiate.md",sourceDirName:"AbstractMaterialModel",slug:"/AbstractMaterialModel/Initiate",permalink:"/docs-api/AbstractMaterialModel/Initiate",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMaterialModel/Initiate.md",tags:[],version:"current",lastUpdatedAt:1701411597,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Import",permalink:"/docs-api/AbstractMaterialModel/Import"},next:{title:"IsInitiated",permalink:"/docs-api/AbstractMaterialModel/IsInitiated"}},c={},d=[{value:"Interface",id:"interface",level:2}];function l(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"initiate",children:"Initiate"}),"\n",(0,n.jsxs)(e.p,{children:["Initiate an instance of ",(0,n.jsx)(e.code,{children:"AbstractMaterialModel_"}),"."]}),"\n",(0,n.jsx)("span",{class:"badge badge--secondary",children:" @ConstructorMethods "}),"\n",(0,n.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"ABSTRACT INTERFACE\n  SUBROUTINE Initiate(obj, param)\n    IMPORT :: AbstractMaterialModel_, ParameterList_\n    CLASS(AbstractMaterialModel_), INTENT(INOUT) :: obj\n    TYPE(ParameterList_), INTENT(IN) :: param\n  END SUBROUTINE Initiate\nEND INTERFACE\n"})})]})}function p(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(l,{...t})}):l(t)}},11151:(t,e,a)=>{a.d(e,{Z:()=>o,a:()=>s});var n=a(67294);const i={},r=n.createContext(i);function s(t){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),n.createElement(r.Provider,{value:e},t.children)}}}]);