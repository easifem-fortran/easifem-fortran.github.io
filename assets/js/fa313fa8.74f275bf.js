"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[83481],{33206:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(85893),a=r(11151);const i={},s="KernelInitiateFromParam",o={id:"AbstractKernel/KernelInitiateFromParam",title:"KernelInitiateFromParam",description:"This routine initiates the kernel by reading the basic parameters, if they are present. This routine can be used by children to set the data defined in AbstractKernel_.",source:"@site/docs/docs-api/AbstractKernel/KernelInitiateFromParam.md",sourceDirName:"AbstractKernel",slug:"/AbstractKernel/KernelInitiateFromParam",permalink:"/docs-api/AbstractKernel/KernelInitiateFromParam",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractKernel/KernelInitiateFromParam.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"KernelGetNSDFromName",permalink:"/docs-api/AbstractKernel/KernelGetNSDFromName"},next:{title:"Run",permalink:"/docs-api/AbstractKernel/Run"}},c={},l=[];function d(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"kernelinitiatefromparam",children:"KernelInitiateFromParam"}),"\n",(0,n.jsxs)(t.p,{children:["This routine initiates the kernel by reading the basic parameters, if they are present. This routine can be used by children to set the data defined in ",(0,n.jsx)(t.code,{children:"AbstractKernel_"}),"."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"param"})," contains the parameters for kernel"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE KernelInitiateFromParam(obj, param, prefix)\n    CLASS(AbstractKernel_), INTENT(INOUT) :: obj\n    !! Kernel object\n    TYPE(ParameterList_), INTENT(IN) :: param\n    !! Parameter list\n    CHARACTER(LEN=*), INTENT(IN) :: prefix\n    !! prefix to add to the field of [AbstractKernel_](AbstractKernel_.md)\n  END SUBROUTINE KernelInitiateFromParam\nEND INTERFACE\n"})})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>s});var n=r(67294);const a={},i=n.createContext(a);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);