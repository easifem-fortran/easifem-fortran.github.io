"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[82099],{31924:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(85893),i=n(11151);const l={title:"FEVariable example 65",author:"Vikas Sharma, Ph. D.",date:"04 Jan 2022",update:"04 Jan 2022",tags:["FEVariable/NodalVariable","FEVariable/Display","FEVariable/ABS"]},t="FEVariable example 65",s={id:"FEVariable/FEVariable_test_65",title:"FEVariable example 65",description:'!!! note ""',source:"@site/docs/docs-api/FEVariable/FEVariable_test_65.md",sourceDirName:"FEVariable",slug:"/FEVariable/FEVariable_test_65",permalink:"/docs-api/FEVariable/FEVariable_test_65",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/FEVariable/FEVariable_test_65.md",tags:[{label:"FEVariable/NodalVariable",permalink:"/docs-api/tags/fe-variable-nodal-variable"},{label:"FEVariable/Display",permalink:"/docs-api/tags/fe-variable-display"},{label:"FEVariable/ABS",permalink:"/docs-api/tags/fe-variable-abs"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"FEVariable example 65",author:"Vikas Sharma, Ph. D.",date:"04 Jan 2022",update:"04 Jan 2022",tags:["FEVariable/NodalVariable","FEVariable/Display","FEVariable/ABS"]},sidebar:"tutorialSidebar",previous:{title:"FEVariable example 64",permalink:"/docs-api/FEVariable/FEVariable_test_64"},next:{title:"FEVariable example 66",permalink:"/docs-api/FEVariable/FEVariable_test_66"}},o={},p=[{value:"Use association",id:"use-association",level:2},{value:"Usage",id:"usage",level:2}];function d(a){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...a.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"fevariable-example-65",children:"FEVariable example 65"}),"\n",(0,r.jsxs)(e.p,{children:['!!! note ""\nThis example tests ',(0,r.jsx)(e.code,{children:"ABS"})," operator. Matrix, Nodal"]}),"\n",(0,r.jsx)(e.h2,{id:"use-association",children:"Use association"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"[[FEVariable_]]"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(e.p,{children:'!!! note "Import modules and declare variable"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  IMPLICIT NONE\n  TYPE(FEVariable_) :: obj\n  TYPE(FEVariable_) :: ans\n"})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "constant"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"  obj = ABS(NodalVariable( &\n        & reshape(-arange(1.0_DFP, 6.0_DFP), [3,2]), &\n        & typeFEVariableMatrix,    &\n        & typeFEVariableConstant ))\n  ans = NodalVariable( &\n        & reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &\n        & typeFEVariableMatrix,    &\n        & typeFEVariableConstant )\n  CALL OK( obj .eq. ans, 'constant' )\n"})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "space"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"  obj = ABS(nodalvariable( &\n        & reshape(-arange(1.0_dfp, 12.0_dfp), [3,2,2]), &\n        & typefevariablematrix, &\n        & typefevariablespace ))\n  ans = nodalvariable( &\n        & reshape(arange(1.0_dfp, 12.0_dfp), [3,2,2]), &\n        & typefevariablematrix, &\n        & typefevariablespace )\n  CALL OK( obj .eq. ans, 'space')\n"})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "time"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"  obj = ABS(nodalvariable( &\n        & reshape(-arange(1.0_dfp, 12.0_dfp), [3,2,2]), &\n        & typefevariablematrix, &\n        & typefevariabletime ))\n  ans = nodalvariable( &\n        & reshape(arange(1.0_dfp, 12.0_dfp), [3,2,2]), &\n        & typefevariablematrix, &\n        & typefevariabletime )\n  CALL OK( obj .eq. ans, 'time')\n"})}),"\n",(0,r.jsx)(e.p,{children:'!!! note "spacetime"'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"  obj = ABS(NodalVariable( &\n        & reshape(-arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &\n        & typeFEVariableMatrix, &\n        & typeFEVariableSpaceTime ))\n  ans = NodalVariable( &\n        & reshape(arange(1.0_DFP, 24.0_DFP) , [3,2,2,2]), &\n        & typeFEVariableMatrix, &\n        & typeFEVariableSpaceTime )\n  CALL OK( obj .eq. ans, 'spacetime')\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function c(a={}){const{wrapper:e}={...(0,i.a)(),...a.components};return e?(0,r.jsx)(e,{...a,children:(0,r.jsx)(d,{...a})}):d(a)}},11151:(a,e,n)=>{n.d(e,{Z:()=>s,a:()=>t});var r=n(67294);const i={},l=r.createContext(i);function t(a){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function s(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(i):a.components||i:t(a.components),r.createElement(l.Provider,{value:e},a.children)}}}]);