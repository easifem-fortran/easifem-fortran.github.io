"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[32291],{93533:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(85893),a=r(11151);const i={},s="Permute",o={id:"CSRMatrix/Permute",title:"Permute",description:"Permute the columns of sparse matrix",source:"@site/docs/docs-api/CSRMatrix/Permute.md",sourceDirName:"CSRMatrix",slug:"/CSRMatrix/Permute",permalink:"/docs-api/CSRMatrix/Permute",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/CSRMatrix/Permute.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Matrix Market Coordinate",permalink:"/docs-api/CSRMatrix/MatrixMarketCoordinate"},next:{title:"PermuteColumn",permalink:"/docs-api/CSRMatrix/PermuteColumn"}},c={},u=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2}];function m(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"permute",children:"Permute"}),"\n",(0,n.jsx)(t.p,{children:"Permute the columns of sparse matrix"}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",metastring:'title="Interface"',children:"INTERFACE\n  MODULE FUNCTION Permute(obj, rowPERM, colPERM, &\n    & isValues, symPERM) RESULT(ans)\n    TYPE(CSRMatrix_), INTENT(IN) :: obj\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: rowPERM(:)\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: colPERM(:)\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isValues\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: symPERM\n    TYPE(CSRMatrix_) :: ans\n  END FUNCTION Permute\nEND INTERFACE\n"})}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:"TODO"})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>s});var n=r(67294);const a={},i=n.createContext(a);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);