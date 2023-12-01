"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[75736],{76642:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(85893),a=r(11151);const i={},o="GetLowerTriangle",s={id:"CSRMatrix/GetLowerTriangle",title:"GetLowerTriangle",description:"This subroutine returns the lower part of the sparse matrix.",source:"@site/docs/docs-api/CSRMatrix/GetLowerTriangle.md",sourceDirName:"CSRMatrix",slug:"/CSRMatrix/GetLowerTriangle",permalink:"/docs-api/CSRMatrix/GetLowerTriangle",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/CSRMatrix/GetLowerTriangle.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetILUTP",permalink:"/docs-api/CSRMatrix/GetILUTP"},next:{title:"GetNNZ",permalink:"/docs-api/CSRMatrix/GetNNZ"}},c={},l=[{value:"Interface",id:"interface",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"getlowertriangle",children:"GetLowerTriangle"}),"\n",(0,n.jsx)(t.p,{children:"This subroutine returns the lower part of the sparse matrix."}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",metastring:'title="Interface"',children:"INTERFACE\n  MODULE SUBROUTINE GetLowerTriangle(obj, L)\n    TYPE(CSRMatrix_), INTENT(IN) :: obj\n    TYPE(CSRMatrix_), INTENT(INOUT) :: L\n  END SUBROUTINE GetLowerTriangle\nEND INTERFACE\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>o});var n=r(67294);const a={},i=n.createContext(a);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);