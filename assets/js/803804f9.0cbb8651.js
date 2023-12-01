"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[23875],{97392:(a,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var n=r(85893),i=r(11151);const t={title:"FEVariable example 66",author:"Vikas Sharma, Ph. D.",date:"04 Jan 2022",update:"04 Jan 2022",tags:["FEVariable/QuadratureVariable","FEVariable/Display","FEVariable/ABS"]},l="FEVariable example 66",s={id:"FEVariable/FEVariable_test_66",title:"FEVariable example 66",description:'!!! note ""',source:"@site/docs/docs-api/FEVariable/FEVariable_test_66.md",sourceDirName:"FEVariable",slug:"/FEVariable/FEVariable_test_66",permalink:"/docs-api/FEVariable/FEVariable_test_66",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/FEVariable/FEVariable_test_66.md",tags:[{label:"FEVariable/QuadratureVariable",permalink:"/docs-api/tags/fe-variable-quadrature-variable"},{label:"FEVariable/Display",permalink:"/docs-api/tags/fe-variable-display"},{label:"FEVariable/ABS",permalink:"/docs-api/tags/fe-variable-abs"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"FEVariable example 66",author:"Vikas Sharma, Ph. D.",date:"04 Jan 2022",update:"04 Jan 2022",tags:["FEVariable/QuadratureVariable","FEVariable/Display","FEVariable/ABS"]},sidebar:"tutorialSidebar",previous:{title:"FEVariable example 65",permalink:"/docs-api/FEVariable/FEVariable_test_65"},next:{title:"NodalVariable",permalink:"/docs-api/FEVariable/NodalVariable"}},o={},d=[{value:"Use association",id:"use-association",level:2},{value:"Usage",id:"usage",level:2}];function p(a){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...a.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"fevariable-example-66",children:"FEVariable example 66"}),"\n",(0,n.jsxs)(e.p,{children:['!!! note ""\nThis example tests ',(0,n.jsx)(e.code,{children:"ABS"})," operator. Matrix, Quadrature"]}),"\n",(0,n.jsx)(e.h2,{id:"use-association",children:"Use association"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"[[FEVariable_]]"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(e.p,{children:'!!! note "Import modules and declare variable"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  IMPLICIT NONE\n  TYPE(FEVariable_) :: obj\n  TYPE(FEVariable_) :: ans\n"})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "constant"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"  obj = ABS(QuadratureVariable( &\n        & reshape(-arange(1.0_DFP, 6.0_DFP), [3,2]), &\n        & typeFEVariableMatrix,    &\n        & typeFEVariableConstant ))\n  ans = QuadratureVariable( &\n        & reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n        & typeFEVariableMatrix,    &\n        & typeFEVariableConstant )\n  CALL OK( obj .eq. ans, 'constant' )\n"})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "space"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"  obj = ABS(Quadraturevariable( &\n        & reshape(-arange(1.0_dfp, 12.0_dfp), [3,2,2]), &\n        & typefevariablematrix, &\n        & typefevariablespace ))\n  ans = Quadraturevariable( &\n        & reshape(arange(1.0_dfp, 12.0_dfp), [3,2,2]), &\n        & typefevariablematrix, &\n        & typefevariablespace )\n  CALL OK( obj .eq. ans, 'space')\n"})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "time"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"  obj = ABS(Quadraturevariable( &\n        & reshape(-arange(1.0_dfp, 12.0_dfp), [3,2,2]), &\n        & typefevariablematrix, &\n        & typefevariabletime ))\n  ans = Quadraturevariable( &\n        & reshape(arange(1.0_dfp, 12.0_dfp), [3,2,2]), &\n        & typefevariablematrix, &\n        & typefevariabletime )\n  CALL OK( obj .eq. ans, 'time')\n"})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "spacetime"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"  obj = ABS(QuadratureVariable( &\n        & reshape(-arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &\n        & typeFEVariableMatrix, &\n        & typeFEVariableSpaceTime ))\n  ans = QuadratureVariable( &\n        & reshape(arange(1.0_DFP, 24.0_DFP) , [3,2,2,2]), &\n        & typeFEVariableMatrix, &\n        & typeFEVariableSpaceTime )\n  CALL OK( obj .eq. ans, 'spacetime')\n"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function c(a={}){const{wrapper:e}={...(0,i.a)(),...a.components};return e?(0,n.jsx)(e,{...a,children:(0,n.jsx)(p,{...a})}):p(a)}},11151:(a,e,r)=>{r.d(e,{Z:()=>s,a:()=>l});var n=r(67294);const i={},t=n.createContext(i);function l(a){const e=n.useContext(t);return n.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function s(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(i):a.components||i:l(a.components),n.createElement(t.Provider,{value:e},a.children)}}}]);