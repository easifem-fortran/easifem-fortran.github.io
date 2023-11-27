"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[86395],{44613:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var a=r(85893),t=r(11151);const s={author:"Vikas Sharma, Ph.D.",date:"10 Aug 2022",tags:["ReferenceTetrahedron","ReferenceTetrahedron/Initiate","ReferenceTetrahedron/Display"]},o="ReferenceTetrahedron example 1",c={id:"ReferenceTetrahedron/ReferenceTetrahedron_test_1",title:"ReferenceTetrahedron example 1",description:"Modules and classes",source:"@site/docs/docs-api/ReferenceTetrahedron/ReferenceTetrahedron_test_1.md",sourceDirName:"ReferenceTetrahedron",slug:"/ReferenceTetrahedron/ReferenceTetrahedron_test_1",permalink:"/docs-api/ReferenceTetrahedron/ReferenceTetrahedron_test_1",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/ReferenceTetrahedron/ReferenceTetrahedron_test_1.md",tags:[{label:"ReferenceTetrahedron",permalink:"/docs-api/tags/reference-tetrahedron"},{label:"ReferenceTetrahedron/Initiate",permalink:"/docs-api/tags/reference-tetrahedron-initiate"},{label:"ReferenceTetrahedron/Display",permalink:"/docs-api/tags/reference-tetrahedron-display"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"10 Aug 2022",tags:["ReferenceTetrahedron","ReferenceTetrahedron/Initiate","ReferenceTetrahedron/Display"]},sidebar:"tutorialSidebar",previous:{title:"ReferenceTetrahedron",permalink:"/docs-api/ReferenceTetrahedron/ReferenceTetrahedron_"},next:{title:"ReferenceTopology",permalink:"/docs-api/ReferenceTopology/"}},d={},i=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"referencetetrahedron-example-1",children:"ReferenceTetrahedron example 1"}),"\n",(0,a.jsx)(n.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"[[ReferenceTetrahedron_]]"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"program main\n  use easifembase\n  use easifemclasses\n  implicit none\n  type( test_referenceTetrahedron_ ) :: obj\n  real( dfp ) :: avar\n  integer( i4b ), parameter :: nsd=3_I4B\n"})}),"\n",(0,a.jsx)(n.p,{children:'!!! note "Initiate"\nInitiate an instance of [[ReferenceTetrahedron_]]'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%Initiate(nsd=nsd)\n  CALL obj%display( 'Obj : ' )\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>o});var a=r(67294);const t={},s=a.createContext(t);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);