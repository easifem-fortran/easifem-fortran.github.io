"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[16998],{84745:(a,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(85893),t=r(11151);const i={title:"FEVariable example 64",author:"Vikas Sharma, Ph. D.",date:"04 Jan 2021",update:"04 Jan 2021",tags:["FEVariable/QuadratureVariable","FEVariable/Display","FEVariable/ABS"]},l="FEVariable example 64",s={id:"FEVariable/FEVariable_test_64",title:"FEVariable example 64",description:'!!! note ""',source:"@site/docs/docs-api/FEVariable/FEVariable_test_64.md",sourceDirName:"FEVariable",slug:"/FEVariable/FEVariable_test_64",permalink:"/docs-api/FEVariable/FEVariable_test_64",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/FEVariable/FEVariable_test_64.md",tags:[{label:"FEVariable/QuadratureVariable",permalink:"/docs-api/tags/fe-variable-quadrature-variable"},{label:"FEVariable/Display",permalink:"/docs-api/tags/fe-variable-display"},{label:"FEVariable/ABS",permalink:"/docs-api/tags/fe-variable-abs"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"FEVariable example 64",author:"Vikas Sharma, Ph. D.",date:"04 Jan 2021",update:"04 Jan 2021",tags:["FEVariable/QuadratureVariable","FEVariable/Display","FEVariable/ABS"]},sidebar:"tutorialSidebar",previous:{title:"FEVariable example 63",permalink:"/docs-api/FEVariable/FEVariable_test_63"},next:{title:"FEVariable example 65",permalink:"/docs-api/FEVariable/FEVariable_test_65"}},o={},c=[{value:"Use association",id:"use-association",level:2},{value:"Usage",id:"usage",level:2}];function p(a){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...a.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"fevariable-example-64",children:"FEVariable example 64"}),"\n",(0,n.jsxs)(e.p,{children:['!!! note ""\nThis example tests ',(0,n.jsx)(e.code,{children:"ABS"})," operator. Vector, Quadrature"]}),"\n",(0,n.jsx)(e.h2,{id:"use-association",children:"Use association"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"[[FEVariable_]]"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(e.p,{children:'!!! note "Import modules and declare variable"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  IMPLICIT NONE\n  TYPE(FEVariable_) :: obj\n  TYPE(FEVariable_) :: ans\n"})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "constant"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  obj = ABS(QuadratureVariable( &\n      & -arange(1.0_DFP, 3.0_DFP), &\n      & typeFEVariableVector,    &\n      & typeFEVariableConstant ))\n  ans = QuadratureVariable( &\n      & arange(1.0_DFP, 3.0_DFP), &\n      & typeFEVariableVector,    &\n      & typeFEVariableConstant )\n  CALL OK( obj .EQ. ans, "constant:" )\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "space"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  obj = ABS(QuadratureVariable( &\n      & reshape(-arange(1.0_DFP, 6.0_DFP), [3,2]), &\n      & typeFEVariableVector, &\n      & typeFEVariableSpace ))\n  ans = QuadratureVariable( &\n      & reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n      & typeFEVariableVector, &\n      & typeFEVariableSpace )\n  CALL OK( obj .EQ. ans, "space:" )\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "time"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  obj = ABS(QuadratureVariable( &\n      & reshape(-arange(1.0_DFP, 6.0_DFP), [3,2]), &\n      & typeFEVariableVector, &\n      & typeFEVariableTime ))\n  ans = QuadratureVariable( &\n      & reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n      & typeFEVariableVector, &\n      & typeFEVariableTime )\n  CALL OK( obj .EQ. ans, "time:" )\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "spacetime"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  obj = ABS(QuadratureVariable( &\n      & reshape(-arange(1.0_DFP, 12.0_DFP), [3,2,2]), &\n      & typeFEVariableVector, &\n      & typeFEVariableSpaceTime ))\n  ans = QuadratureVariable( &\n      & reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &\n      & typeFEVariableVector, &\n      & typeFEVariableSpaceTime )\n  CALL OK( obj .EQ. ans, "spacetime:" )\n'})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(a={}){const{wrapper:e}={...(0,t.a)(),...a.components};return e?(0,n.jsx)(e,{...a,children:(0,n.jsx)(p,{...a})}):p(a)}},11151:(a,e,r)=>{r.d(e,{Z:()=>s,a:()=>l});var n=r(67294);const t={},i=n.createContext(t);function l(a){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function s(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(t):a.components||t:l(a.components),n.createElement(i.Provider,{value:e},a.children)}}}]);