"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[9176],{73632:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>o,contentTitle:()=>n,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var l=i(85893),t=i(11151);const r={tags:["BlockMatrixField","BlockMatrixField/SetBlockMatrixFieldParam","BlockMatrixField/CheckEssentialParam","BlockMatrixField/Initiate","BlockMatrixField/Display","BlockMatrixField/Deallocate"]},n="BlockMatrixField example 3",s={id:"BlockMatrixField/BlockMatrixField_test_3",title:"BlockMatrixField example 3",description:"This example shows the use of SetBlockMatrixFieldParam, BlockMatrixField",source:"@site/docs/docs-api/BlockMatrixField/BlockMatrixField_test_3.md",sourceDirName:"BlockMatrixField",slug:"/BlockMatrixField/BlockMatrixField_test_3",permalink:"/docs-api/BlockMatrixField/BlockMatrixField_test_3",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/BlockMatrixField/BlockMatrixField_test_3.md",tags:[{label:"BlockMatrixField",permalink:"/docs-api/tags/block-matrix-field"},{label:"BlockMatrixField/SetBlockMatrixFieldParam",permalink:"/docs-api/tags/block-matrix-field-set-block-matrix-field-param"},{label:"BlockMatrixField/CheckEssentialParam",permalink:"/docs-api/tags/block-matrix-field-check-essential-param"},{label:"BlockMatrixField/Initiate",permalink:"/docs-api/tags/block-matrix-field-initiate"},{label:"BlockMatrixField/Display",permalink:"/docs-api/tags/block-matrix-field-display"},{label:"BlockMatrixField/Deallocate",permalink:"/docs-api/tags/block-matrix-field-deallocate"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{tags:["BlockMatrixField","BlockMatrixField/SetBlockMatrixFieldParam","BlockMatrixField/CheckEssentialParam","BlockMatrixField/Initiate","BlockMatrixField/Display","BlockMatrixField/Deallocate"]},sidebar:"tutorialSidebar",previous:{title:"BlockMatrixField example 2",permalink:"/docs-api/BlockMatrixField/BlockMatrixField_test_2"},next:{title:"BlockMatrixField example 4",permalink:"/docs-api/BlockMatrixField/BlockMatrixField_test_4"}},o={},c=[{value:"Usage",id:"usage",level:2},{value:"Cleanup",id:"cleanup",level:3}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.h1,{id:"blockmatrixfield-example-3",children:"BlockMatrixField example 3"}),"\n",(0,l.jsxs)(a.p,{children:["This example shows the use of ",(0,l.jsx)(a.code,{children:"SetBlockMatrixFieldParam"}),", ",(0,l.jsx)(a.a,{href:"/docs-api/BlockMatrixField/BlockMatrixField_",children:"BlockMatrixField"})]}),"\n",(0,l.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  IMPLICIT NONE\n"})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:'  TYPE( BlockMatrixField_) :: obj\n  TYPE( ParameterList_ ) :: param\n  TYPE( Domain_), TARGET :: pressureDomain\n  TYPE( Domain_ ), TARGET :: velocityDomain\n  TYPE( DomainPointer_) :: domains( 2 )\n  TYPE( HDF5File_ ) :: pressureMeshFile\n  TYPE( HDF5File_ ) :: velocityMeshFile\n  CHARACTER( LEN = * ), PARAMETER :: pressureMeshFilename="./mesh_tri3.h5"\n  CHARACTER( LEN = * ), PARAMETER :: velocityMeshFilename="./mesh_tri6.h5"\n'})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:'  CALL FPL_INIT(); CALL param%Initiate()\n  CALL SetBlockMatrixFieldParam(param=param, name="K",  &\n    & physicalVarNames=["V", "P"], spaceCompo=[2, 1], &\n    & timeCompo=[1,1], fieldType=FIELD_TYPE_NORMAL,  &\n    & matrixProp="UNSYM" )\n'})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:'  CALL pressureMeshfile%Initiate( FileName=pressureMeshFilename, MODE="READ" )\n  CALL velocityMeshfile%Initiate( FileName=velocityMeshFilename, MODE="READ" )\n  CALL pressureMeshfile%Open()\n  CALL velocityMeshfile%Open()\n  CALL pressureDomain%Initiate( pressureMeshfile, "")\n  CALL velocityDomain%Initiate( velocityMeshfile, "")\n'})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:"  CALL pressureMeshfile%Deallocate()\n  CALL velocityMeshfile%Deallocate()\n"})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:"  domains(1)%ptr => velocityDomain\n  domains(2)%ptr => pressureDomain\n  CALL obj%Initiate(param=param, dom=domains)\n"})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:'  CALL obj%Display("")\n'})}),"\n",(0,l.jsx)(a.h3,{id:"cleanup",children:"Cleanup"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:"  CALL obj%Deallocate()\n  CALL param%Deallocate(); CALL FPL_FINALIZE()\n  NULLIFY(domains(1)%ptr, domains(2)%ptr)\n  CALL pressureDomain%Deallocate()\n  CALL velocityDomain%Deallocate()\n  CALL obj%Deallocate()\nEND PROGRAM main\n"})})]})}function m(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},11151:(e,a,i)=>{i.d(a,{Z:()=>s,a:()=>n});var l=i(67294);const t={},r=l.createContext(t);function n(e){const a=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),l.createElement(r.Provider,{value:a},e.children)}}}]);