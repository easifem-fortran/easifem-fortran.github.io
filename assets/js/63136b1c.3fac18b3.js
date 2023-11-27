"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[34819],{50642:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=n(85893),i=n(11151);const o={},r="Set",a={id:"AbstractSTDBE/Set",title:"Set",description:"This routine is the most important one. This routine should be called before starting the main computation. After initiating the kernel, we have all the information to construct the state of the kernel. This routine checks all the options, and produce notify user if some information is missing or incorrect.",source:"@site/docs/docs-api/AbstractSTDBE/Set.md",sourceDirName:"AbstractSTDBE",slug:"/AbstractSTDBE/Set",permalink:"/docs-api/AbstractSTDBE/Set",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractSTDBE/Set.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IsSteadyState",permalink:"/docs-api/AbstractSTDBE/IsSteadyState"},next:{title:"Solve",permalink:"/docs-api/AbstractSTDBE/Solve"}},c={},d=[];function l(t){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"set",children:"Set"}),"\n",(0,s.jsxs)(e.p,{children:["This routine is the most ",(0,s.jsx)(e.strong,{children:"important"})," one. This routine should be called before starting the main computation. After initiating the kernel, we have all the information to construct the state of the kernel. This routine checks all the options, and produce notify user if some information is missing or incorrect."]}),"\n",(0,s.jsxs)(e.p,{children:["This routine calls ",(0,s.jsx)(e.a,{href:"/docs-api/AbstractSTDBE/AbstractSTDBE_#InitiateFields"})," method."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE STDBE_Set(obj)\n    CLASS(AbstractSTDBE_), INTENT(INOUT) :: obj\n  END SUBROUTINE STDBE_Set\nEND INTERFACE\n"})}),"\n",(0,s.jsxs)(e.p,{children:["While extending this method, child can call this routine by calling ",(0,s.jsx)(e.code,{children:"AbstractSTDBESet"})," routine."]})]})}function h(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>a,a:()=>r});var s=n(67294);const i={},o=s.createContext(i);function r(t){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),s.createElement(o.Provider,{value:e},t.children)}}}]);