"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[49947],{26249:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var t=n(85893),i=n(11151);const r={},o="DiagonalScaling",c={id:"MatrixField/DiagonalScaling",title:"DiagonalScaling",description:"Interface",source:"@site/docs/docs-api/MatrixField/DiagonalScaling.md",sourceDirName:"MatrixField",slug:"/MatrixField/DiagonalScaling",permalink:"/docs-api/MatrixField/DiagonalScaling",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/MatrixField/DiagonalScaling.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deallocate",permalink:"/docs-api/MatrixField/Deallocate"},next:{title:"Display",permalink:"/docs-api/MatrixField/Display"}},l={},s=[{value:"Interface",id:"interface",level:2}];function d(e){const a={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"diagonalscaling",children:"DiagonalScaling"}),"\n",(0,t.jsx)(a.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE DiagonalScaling(obj, side, diag, OPERATOR)\n    IMPORT :: AbstractMatrixField_, DFP\n    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj\n    CHARACTER(*), INTENT(IN) :: side\n    REAL(DFP), OPTIONAL, INTENT(IN) :: diag(:)\n    CHARACTER(*), OPTIONAL, INTENT(IN) :: OPERATOR\n  END SUBROUTINE DiagonalScaling\nEND INTERFACE\n"})})]})}function g(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>c,a:()=>o});var t=n(67294);const i={},r=t.createContext(i);function o(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);