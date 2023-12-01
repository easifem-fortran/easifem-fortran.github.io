"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[8092],{23027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var i=n(85893),o=n(11151);const r={},c="GetPrecondition",a={id:"BlockMatrixField/GetPrecondition",title:"GetPrecondition",description:"Get the preconditioner.",source:"@site/docs/docs-api/BlockMatrixField/GetPrecondition.md",sourceDirName:"BlockMatrixField",slug:"/BlockMatrixField/GetPrecondition",permalink:"/docs-api/BlockMatrixField/GetPrecondition",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/BlockMatrixField/GetPrecondition.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetDiagonal",permalink:"/docs-api/BlockMatrixField/GetDiagonal"},next:{title:"GetRow",permalink:"/docs-api/BlockMatrixField/GetRow"}},d={},s=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"getprecondition",children:"GetPrecondition"}),"\n",(0,i.jsx)(t.p,{children:"Get the preconditioner."}),"\n",(0,i.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE getPrecondition(obj, Pmat)\n    CLASS(BlockMatrixField_), INTENT(INOUT) :: obj\n    CLASS(BlockMatrixField_), INTENT(INOUT) :: Pmat\n  END SUBROUTINE getPrecondition\nEND INTERFACE\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var i=n(67294);const o={},r=i.createContext(o);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);