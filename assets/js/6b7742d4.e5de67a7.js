"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[13548,53688],{49964:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});var s=d(85893),a=d(11151);const r={id:"Add",aliases:["Add"],tags:[],sidebar_position:5},i="Add",n={id:"AbstractMeshField/Add",title:"Add",description:"Add data to AbstractMeshField.",source:"@site/docs/docs-api/AbstractMeshField/Add.md",sourceDirName:"AbstractMeshField",slug:"/AbstractMeshField/Add",permalink:"/docs-api/AbstractMeshField/Add",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMeshField/Add.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",sidebarPosition:5,frontMatter:{id:"Add",aliases:["Add"],tags:[],sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Set",permalink:"/docs-api/AbstractMeshField/Set"},next:{title:"Get",permalink:"/docs-api/AbstractMeshField/Get"}},o={},c=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"add",children:"Add"}),"\n",(0,s.jsxs)(t.p,{children:["Add data to ",(0,s.jsx)(t.code,{children:"AbstractMeshField"}),"."]}),"\n",(0,s.jsx)("span",{class:"badge badge--secondary",children:" @SetMethods "}),"\n",(0,s.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Add(obj, globalElement, scale, fevar)\n    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: globalElement\n    REAL(DFP), INTENT(IN) :: scale\n    TYPE(FEVariable_), INTENT(IN) :: fevar\n  END SUBROUTINE Add\nEND INTERFACE\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},36153:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=d(85893),a=d(11151),r=d(49964);const i={},n="Add",o={id:"VectorMeshField/Add",title:"Add",description:"Inheritated from AbstractMeshField.",source:"@site/docs/docs-api/VectorMeshField/Add.md",sourceDirName:"VectorMeshField",slug:"/VectorMeshField/Add",permalink:"/docs-api/VectorMeshField/Add",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/VectorMeshField/Add.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Initiate",permalink:"/docs-api/VectorMeshField/Initiate"},next:{title:"CheckEssentialParam",permalink:"/docs-api/VectorMeshField/CheckEssentialParam"}},c={},l=[];function h(e){const t={a:"a",h1:"h1",p:"p",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"add",children:"Add"}),"\n",(0,s.jsxs)(t.p,{children:["Inheritated from ",(0,s.jsx)(t.a,{href:"/docs-api/AbstractMeshField",children:"AbstractMeshField"}),"."]}),"\n","\n","\n",(0,s.jsx)(r.default,{})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,t,d)=>{d.d(t,{Z:()=>n,a:()=>i});var s=d(67294);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);