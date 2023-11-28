"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[69130],{79422:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>s,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>o,toc:()=>n});var t=i(85893),l=i(11151);const r={tags:["BlockMatrixField","BlockMatrixField/SetBlockMatrixFieldParam","BlockMatrixField/CheckEssentialParam"]},c="BlockMatrixField example 1",o={id:"BlockMatrixField/BlockMatrixField_test_1",title:"BlockMatrixField example 1",description:"This example shows the use of SetBlockMatrixFieldParam, BlockMatrixField",source:"@site/docs/docs-api/BlockMatrixField/BlockMatrixField_test_1.md",sourceDirName:"BlockMatrixField",slug:"/BlockMatrixField/BlockMatrixField_test_1",permalink:"/docs-api/BlockMatrixField/BlockMatrixField_test_1",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/BlockMatrixField/BlockMatrixField_test_1.md",tags:[{label:"BlockMatrixField",permalink:"/docs-api/tags/block-matrix-field"},{label:"BlockMatrixField/SetBlockMatrixFieldParam",permalink:"/docs-api/tags/block-matrix-field-set-block-matrix-field-param"},{label:"BlockMatrixField/CheckEssentialParam",permalink:"/docs-api/tags/block-matrix-field-check-essential-param"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{tags:["BlockMatrixField","BlockMatrixField/SetBlockMatrixFieldParam","BlockMatrixField/CheckEssentialParam"]},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/BlockMatrixField/BlockMatrixField_"},next:{title:"BlockMatrixField example 11",permalink:"/docs-api/BlockMatrixField/BlockMatrixField_test_11"}},s={},n=[{value:"Usage",id:"usage",level:2}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"blockmatrixfield-example-1",children:"BlockMatrixField example 1"}),"\n",(0,t.jsxs)(a.p,{children:["This example shows the use of ",(0,t.jsx)(a.code,{children:"SetBlockMatrixFieldParam"}),", ",(0,t.jsx)(a.a,{href:"/docs-api/BlockMatrixField/BlockMatrixField_",children:"BlockMatrixField"})]}),"\n",(0,t.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"PROGRAM main\n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"  USE easifemBase\n  USE easifemClasses\n  IMPLICIT NONE\n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"  TYPE( BlockMatrixField_ ) :: obj\n  TYPE( ParameterList_ ) :: param\n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:'  CALL FPL_INIT(); CALL param%Initiate()\n  CALL SetBlockMatrixFieldParam(param=param, name="K",  &\n    & physicalVarNames=["V", "P"], spaceCompo=[2, 1], &\n    & timeCompo=[1,1], fieldType=FIELD_TYPE_NORMAL,  &\n    & matrixProp="UNSYM" )\n  CALL obj%CheckEssentialParam( param )\n  CALL param%Print()\n  CALL param%Deallocate(); CALL FPL_FINALIZE()\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function x(e={}){const{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,a,i)=>{i.d(a,{Z:()=>o,a:()=>c});var t=i(67294);const l={},r=t.createContext(l);function c(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);