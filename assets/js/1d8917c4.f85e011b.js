"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[95353],{10332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(85893),a=n(11151);const i={},s="ApplyDBC",c={id:"MatrixField/ApplyDBC",title:"ApplyDBC",description:"Interface",source:"@site/docs/docs-api/MatrixField/ApplyDBC.md",sourceDirName:"MatrixField",slug:"/MatrixField/ApplyDBC",permalink:"/docs-api/MatrixField/ApplyDBC",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/MatrixField/ApplyDBC.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MatrixField",permalink:"/docs-api/MatrixField/"},next:{title:"CheckEssentialParam",permalink:"/docs-api/MatrixField/CheckEssentialParam"}},o={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"applydbc",children:"ApplyDBC"}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE ApplyDBC(obj, dbcPtrs)\n    IMPORT :: AbstractMatrixField_, I4B\n    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: dbcPtrs(:)\n  END SUBROUTINE ApplyDBC\nEND INTERFACE\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var r=n(67294);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);