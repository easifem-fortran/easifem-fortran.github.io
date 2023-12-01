"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[76702],{66047:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>S});var n=r(85893),s=r(11151);const a={},o="CSRSparsity constructor",i={id:"CSRSparsity/CSRSparsity_Constructor",title:"CSRSparsity constructor",description:"EASIFEM also has CSRSparsity and CSRSparsityPointer functions. They can be used to create an instance of [[CSRSparsity]]. The later returns the pointer to the newly created instance of [[CSRSparsity]] object. The usage are given below.",source:"@site/docs/docs-api/CSRSparsity/CSRSparsity_Constructor.md",sourceDirName:"CSRSparsity",slug:"/CSRSparsity/CSRSparsity_Constructor",permalink:"/docs-api/CSRSparsity/CSRSparsity_Constructor",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/CSRSparsity/CSRSparsity_Constructor.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/CSRSparsity/CSRSparsity_"},next:{title:"CSRSparsity example 1",permalink:"/docs-api/CSRSparsity/CSRSparsity_test_1"}},c={},S=[];function p(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"csrsparsity-constructor",children:"CSRSparsity constructor"}),"\n",(0,n.jsxs)(e.p,{children:["EASIFEM also has ",(0,n.jsx)(e.code,{children:"CSRSparsity"})," and ",(0,n.jsx)(e.code,{children:"CSRSparsityPointer"})," functions. They can be used to create an instance of [[CSRSparsity_]]. The later returns the pointer to the newly created instance of [[CSRSparsity_]] object. The usage are given below."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"MODULE FUNCTION CSRSparsity( nrow, ncol, dof ) RESULT( Ans )\n  INTEGER( I4B ), INTENT( IN ) :: nrow\n  INTEGER( I4B ), INTENT( IN ) :: ncol\n  TYPE( DOF_ ), OPTIONAL, INTENT( IN ) :: dof\n  TYPE( CSRSparsity_ ) :: ans\nEND FUNCTION CSRSparsity\n"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"MODULE FUNCTION CSRSparsity( IA, JA ) RESULT( Ans )\n  INTEGER( I4B ), INTENT( IN ) :: IA(:)\n  INTEGER( I4B ), INTENT( IN ) :: JA(:)\n  TYPE( CSRSparsity_ ) :: ans\nEND FUNCTION CSRSparsity\n"})})]})}function d(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(p,{...t})}):p(t)}},11151:(t,e,r)=>{r.d(e,{Z:()=>i,a:()=>o});var n=r(67294);const s={},a=n.createContext(s);function o(t){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),n.createElement(a.Provider,{value:e},t.children)}}}]);