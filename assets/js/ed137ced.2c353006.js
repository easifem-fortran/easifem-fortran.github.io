"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[96723],{29643:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(85893),l=n(11151);const i={title:"FEVariable example 32b",author:"Vikas Sharma, Ph. D.",date:"21 Nov 2021",update:"21 Nov 2021",tags:["FEVariable/NodalVariable","FEVariable/Display"]},t="FEVariable example 32b",s={id:"FEVariable/FEVariable_test_32b",title:"FEVariable example 32b",description:'!!! note ""',source:"@site/docs/docs-api/FEVariable/FEVariable_test_32b.md",sourceDirName:"FEVariable",slug:"/FEVariable/FEVariable_test_32b",permalink:"/docs-api/FEVariable/FEVariable_test_32b",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/FEVariable/FEVariable_test_32b.md",tags:[{label:"FEVariable/NodalVariable",permalink:"/docs-api/tags/fe-variable-nodal-variable"},{label:"FEVariable/Display",permalink:"/docs-api/tags/fe-variable-display"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"FEVariable example 32b",author:"Vikas Sharma, Ph. D.",date:"21 Nov 2021",update:"21 Nov 2021",tags:["FEVariable/NodalVariable","FEVariable/Display"]},sidebar:"tutorialSidebar",previous:{title:"FEVariable example 32a",permalink:"/docs-api/FEVariable/FEVariable_test_32a"},next:{title:"FEVariable example 32c",permalink:"/docs-api/FEVariable/FEVariable_test_32c"}},o={},c=[{value:"Use association",id:"use-association",level:2},{value:"Usage",id:"usage",level:2}];function p(e){const a={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"fevariable-example-32b",children:"FEVariable example 32b"}),"\n",(0,r.jsx)(a.p,{children:'!!! note ""\nThis example tests * operator. Vector, Nodal'}),"\n",(0,r.jsx)(a.h2,{id:"use-association",children:"Use association"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"[[FEVariable_]]"}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(a.p,{children:'!!! note "Import modules and declare variable"'}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  IMPLICIT NONE\n  TYPE(FEVariable_) :: obj\n"})}),"\n",(0,r.jsx)(a.p,{children:'!!! note "constant * space"'}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = NodalVariable( arange(1.0_DFP, 3.0_DFP), &\n    & typeFEVariableVector,    &\n    & typeFEVariableConstant ) &\n    * NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP),[3,2]), &\n    & typeFEVariableVector, &\n    & typeFEVariableSpace )\n  CALL Display(obj, "constant * space")\n'})}),"\n",(0,r.jsx)(a.p,{children:'!!! note "space * space"'}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP),[3,2]), &\n      & typeFEVariableVector, &\n      & typeFEVariableSpace ) &\n      * NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP),[3,2]), &\n      & typeFEVariableVector, &\n      & typeFEVariableSpace )\n  CALL Display(obj, "space * space")\n'})}),"\n",(0,r.jsx)(a.p,{children:'!!! note "constant * time"'}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = NodalVariable( arange(1.0_DFP, 3.0_DFP), &\n    & typeFEVariableVector,    &\n    & typeFEVariableConstant ) &\n    * NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP),[3,2]), &\n    & typeFEVariableVector, &\n    & typeFEVariableTime )\n  CALL Display(obj, "constant*time")\n'})}),"\n",(0,r.jsx)(a.p,{children:'!!! note "time*time"'}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP),[3,2]), &\n      & typeFEVariableVector, &\n      & typeFEVariableTime ) &\n      * NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP),[3,2]), &\n      & typeFEVariableVector, &\n      & typeFEVariableTime )\n  CALL Display(obj, "time * time")\n'})}),"\n",(0,r.jsx)(a.p,{children:'!!! note "constant * spacetime"'}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = NodalVariable( arange(1.0_DFP, 3.0_DFP), &\n    & typeFEVariableVector,    &\n    & typeFEVariableConstant ) &\n    * NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &\n    & typeFEVariableVector, &\n    & typeFEVariableSpaceTime )\n  CALL Display(obj, "constant * spacetime")\n'})}),"\n",(0,r.jsx)(a.p,{children:'!!! note "spacetime * spacetime"'}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:'  call display("=================================")\n  obj = NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &\n    & typeFEVariableVector, &\n    & typeFEVariableSpaceTime ) &\n    * NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &\n    & typeFEVariableVector, &\n    & typeFEVariableSpaceTime )\n  CALL Display(obj, "spacetime * spacetime")\n'})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(e={}){const{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>s,a:()=>t});var r=n(67294);const l={},i=r.createContext(l);function t(e){const a=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);