"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[60133],{98700:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var s=n(85893),i=n(11151);const a={author:"Vikas Sharma, Ph.D.",date:"10 Aug 2022",tags:["ReferencePrism","ReferencePrism/Initiate","ReferencePrism/Display"]},t="ReferencePrism example 1",c={id:"ReferencePrism/ReferencePrism_test_1",title:"ReferencePrism example 1",description:"Modules and classes",source:"@site/docs/docs-api/ReferencePrism/ReferencePrism_test_1.md",sourceDirName:"ReferencePrism",slug:"/ReferencePrism/ReferencePrism_test_1",permalink:"/docs-api/ReferencePrism/ReferencePrism_test_1",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/ReferencePrism/ReferencePrism_test_1.md",tags:[{label:"ReferencePrism",permalink:"/docs-api/tags/reference-prism"},{label:"ReferencePrism/Initiate",permalink:"/docs-api/tags/reference-prism-initiate"},{label:"ReferencePrism/Display",permalink:"/docs-api/tags/reference-prism-display"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"10 Aug 2022",tags:["ReferencePrism","ReferencePrism/Initiate","ReferencePrism/Display"]},sidebar:"tutorialSidebar",previous:{title:"ReferencePrism",permalink:"/docs-api/ReferencePrism/ReferencePrism_"},next:{title:"ReferencePyramid",permalink:"/docs-api/ReferencePyramid/"}},l={},o=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function m(e){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"referenceprism-example-1",children:"ReferencePrism example 1"}),"\n",(0,s.jsx)(r.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"[[ReferencePrism_]]"}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-fortran",children:"program main\n  use easifembase\n  use easifemclasses\n  implicit none\n  type( test_referencePrism_ ) :: obj\n  real( dfp ) :: avar\n  integer( i4b ), parameter :: nsd=3_I4B\n"})}),"\n",(0,s.jsx)(r.p,{children:'!!! note "Initiate"\nInitiate an instance of [[ReferencePrism_]]'}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-fortran",children:"  CALL obj%Initiate(nsd=nsd)\n  CALL obj%display( 'Obj : ' )\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>t});var s=n(67294);const i={},a=s.createContext(i);function t(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);