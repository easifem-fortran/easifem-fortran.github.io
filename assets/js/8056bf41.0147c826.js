"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[45354,20510],{92946:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=a(85893),i=a(11151);const r={},n="Display",c={id:"AbstractBC/Display",title:"Display",description:"Display the content of AbstractBC.",source:"@site/docs/docs-api/AbstractBC/Display.md",sourceDirName:"AbstractBC",slug:"/AbstractBC/Display",permalink:"/docs-api/AbstractBC/Display",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractBC/Display.md",tags:[],version:"current",lastUpdatedAt:1701147514,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deallocate",permalink:"/docs-api/AbstractBC/Deallocate"},next:{title:"Export",permalink:"/docs-api/AbstractBC/Export"}},o={},l=[{value:"Interface",id:"interface",level:2}];function d(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"display",children:"Display"}),"\n",(0,s.jsxs)(e.p,{children:["Display the content of ",(0,s.jsx)(e.a,{href:"/docs-api/AbstractBC/AbstractBC_",children:"AbstractBC_"}),"."]}),"\n",(0,s.jsx)("span",{class:"badge badge--secondary",children:" @IOMethods "}),"\n",(0,s.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-fortran",children:"ABSTRACT INTERFACE\n  SUBROUTINE Display(obj, msg, unitNo)\n    IMPORT :: AbstractBC_, I4B\n    CLASS(AbstractBC_), INTENT(IN) :: obj\n    CHARACTER(*), INTENT(IN) :: msg\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitNo\n  END SUBROUTINE Display\nEND INTERFACE\n"})})]})}function p(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},72376:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var s=a(85893),i=a(11151),r=a(92946);const n={},c="Display",o={id:"DirichletBC/Display",title:"Display",description:"",source:"@site/docs/docs-api/DirichletBC/Display.md",sourceDirName:"DirichletBC",slug:"/DirichletBC/Display",permalink:"/docs-api/DirichletBC/Display",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/DirichletBC/Display.md",tags:[],version:"current",lastUpdatedAt:1701182689,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DirichletBCImportFromToml",permalink:"/docs-api/DirichletBC/DirichletBCImportFromToml"},next:{title:"Export",permalink:"/docs-api/DirichletBC/Export"}},l={},d=[];function p(t){const e={h1:"h1",...(0,i.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"display",children:"Display"}),"\n","\n","\n",(0,s.jsx)(r.default,{})]})}function h(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(p,{...t})}):p(t)}},11151:(t,e,a)=>{a.d(e,{Z:()=>c,a:()=>n});var s=a(67294);const i={},r=s.createContext(i);function n(t){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:n(t.components),s.createElement(r.Provider,{value:e},t.children)}}}]);