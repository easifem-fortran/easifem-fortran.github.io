"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[16868],{31551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(85893),s=n(11151);const a={},o="Set",i={id:"AbstractKernel/Set",title:"Set",description:"This subroutine sets the option of the kernel and build the kernel.",source:"@site/docs/docs-api/AbstractKernel/Set.md",sourceDirName:"AbstractKernel",slug:"/AbstractKernel/Set",permalink:"/docs-api/AbstractKernel/Set",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractKernel/Set.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Run",permalink:"/docs-api/AbstractKernel/Run"},next:{title:"SetAbstractKernelParam",permalink:"/docs-api/AbstractKernel/SetAbstractKernelParam"}},c={},l=[];function d(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"set",children:"Set"}),"\n",(0,r.jsx)(t.p,{children:"This subroutine sets the option of the kernel and build the kernel."}),"\n",(0,r.jsxs)(t.p,{children:["We can start the main computation after calling ",(0,r.jsx)(t.code,{children:"Set"}),". In this way, the call to this subroutine indicates that all the options have been set to the kernel, and it is ready to be used."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Set(obj)\n    CLASS(AbstractKernel_), INTENT(INOUT) :: obj\n  END SUBROUTINE Set\nEND INTERFACE\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(67294);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);