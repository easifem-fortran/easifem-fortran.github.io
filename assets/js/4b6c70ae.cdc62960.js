"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[16355],{72382:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=i(85893),a=i(11151);const r={},s="Display",o={id:"MatrixField/Display",title:"Display",description:"Display the content of AbstractMatrixField",source:"@site/docs/docs-api/MatrixField/Display.md",sourceDirName:"MatrixField",slug:"/MatrixField/Display",permalink:"/docs-api/MatrixField/Display",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/MatrixField/Display.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DiagonalScaling",permalink:"/docs-api/MatrixField/DiagonalScaling"},next:{title:"Export",permalink:"/docs-api/MatrixField/Export"}},c={},l=[{value:"Interface",id:"interface",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"display",children:"Display"}),"\n",(0,n.jsx)(t.p,{children:"Display the content of AbstractMatrixField"}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\nSUBROUTINE Display( obj, msg, unitNo )\n  CLASS( AbstractMatrixField_ ), INTENT( INOUT ) :: obj\n  CHARACTER( LEN = * ), INTENT( IN ) :: msg\n  INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: unitNo\nEND SUBROUTINE Display\nEND INTERFACE\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>s});var n=i(67294);const a={},r=n.createContext(a);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);