"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[34819],{50642:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=n(85893),s=n(11151);const i={},r="Set",a={id:"AbstractSTDBE/Set",title:"Set",description:"This routine is the most important one. This routine should be called before starting the main computation. After initiating the kernel, we have all the information to construct the state of the kernel. This routine checks all the options, and produce notify user if some information is missing or incorrect.",source:"@site/docs/docs-api/AbstractSTDBE/Set.md",sourceDirName:"AbstractSTDBE",slug:"/AbstractSTDBE/Set",permalink:"/docs-api/AbstractSTDBE/Set",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractSTDBE/Set.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IsSteadyState",permalink:"/docs-api/AbstractSTDBE/IsSteadyState"},next:{title:"Solve",permalink:"/docs-api/AbstractSTDBE/Solve"}},c={},d=[];function l(t){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"set",children:"Set"}),"\n",(0,o.jsxs)(e.p,{children:["This routine is the most ",(0,o.jsx)(e.strong,{children:"important"})," one. This routine should be called before starting the main computation. After initiating the kernel, we have all the information to construct the state of the kernel. This routine checks all the options, and produce notify user if some information is missing or incorrect."]}),"\n",(0,o.jsxs)(e.p,{children:["This routine calls ",(0,o.jsx)(e.a,{href:"/docs-api/AbstractSTDBE/AbstractSTDBE_#InitiateFields"})," method."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE STDBE_Set(obj)\n    CLASS(AbstractSTDBE_), INTENT(INOUT) :: obj\n  END SUBROUTINE STDBE_Set\nEND INTERFACE\n"})}),"\n",(0,o.jsxs)(e.p,{children:["While extending this method, child can call this routine by calling ",(0,o.jsx)(e.code,{children:"AbstractSTDBESet"})," routine."]})]})}function h(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>a,a:()=>r});var o=n(67294);const s={},i=o.createContext(s);function r(t){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),o.createElement(i.Provider,{value:e},t.children)}}}]);