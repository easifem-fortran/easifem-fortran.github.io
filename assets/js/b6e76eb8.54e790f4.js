"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[16396],{60805:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(85893),a=r(11151);const i={},s="ReversePermutation",o={id:"MatrixField/ReversePermutation",title:"ReversePermutation",description:"Interface",source:"@site/docs/docs-api/MatrixField/ReversePermutation.md",sourceDirName:"MatrixField",slug:"/MatrixField/ReversePermutation",permalink:"/docs-api/MatrixField/ReversePermutation",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/MatrixField/ReversePermutation.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RectangleMatrixFieldCheckEssentialParam",permalink:"/docs-api/MatrixField/RectangleMatrixFieldCheckEssentialParam"},next:{title:"Set",permalink:"/docs-api/MatrixField/Set"}},c={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"reversepermutation",children:"ReversePermutation"}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE reversePermutation(obj, rhs, sol)\n    IMPORT :: AbstractMatrixField_, AbstractNodeField_\n    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj\n    CLASS(AbstractNodeField_), TARGET, INTENT(INOUT) :: rhs\n    CLASS(AbstractNodeField_), TARGET, INTENT(INOUT) :: sol\n  END SUBROUTINE reversePermutation\nEND INTERFACE\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>s});var n=r(67294);const a={},i=n.createContext(a);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);