"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[82225],{64490:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var l=i(85893),t=i(11151);const n={tags:["ParameterList/Print","SetBlockMatrixFieldParam","BlockMatrixField/Initiate","BlockMatrixField/Set","BlockMatrixField/Display","BlockMatrixField/Deallocate","HDF5File/Initiate","HDF5File/Open","Domain/Initiate"]},r="BlockMatrixField example 11",s={id:"BlockMatrixField/BlockMatrixField_test_11",title:"BlockMatrixField example 11",description:"This example shows the usage of Set methods BlockMatrixField.",source:"@site/docs/docs-api/BlockMatrixField/BlockMatrixField_test_11.md",sourceDirName:"BlockMatrixField",slug:"/BlockMatrixField/BlockMatrixField_test_11",permalink:"/docs-api/BlockMatrixField/BlockMatrixField_test_11",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/BlockMatrixField/BlockMatrixField_test_11.md",tags:[{label:"ParameterList/Print",permalink:"/docs-api/tags/parameter-list-print"},{label:"SetBlockMatrixFieldParam",permalink:"/docs-api/tags/set-block-matrix-field-param"},{label:"BlockMatrixField/Initiate",permalink:"/docs-api/tags/block-matrix-field-initiate"},{label:"BlockMatrixField/Set",permalink:"/docs-api/tags/block-matrix-field-set"},{label:"BlockMatrixField/Display",permalink:"/docs-api/tags/block-matrix-field-display"},{label:"BlockMatrixField/Deallocate",permalink:"/docs-api/tags/block-matrix-field-deallocate"},{label:"HDF5File/Initiate",permalink:"/docs-api/tags/hdf-5-file-initiate"},{label:"HDF5File/Open",permalink:"/docs-api/tags/hdf-5-file-open"},{label:"Domain/Initiate",permalink:"/docs-api/tags/domain-initiate"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{tags:["ParameterList/Print","SetBlockMatrixFieldParam","BlockMatrixField/Initiate","BlockMatrixField/Set","BlockMatrixField/Display","BlockMatrixField/Deallocate","HDF5File/Initiate","HDF5File/Open","Domain/Initiate"]},sidebar:"tutorialSidebar",previous:{title:"BlockMatrixField example 1",permalink:"/docs-api/BlockMatrixField/BlockMatrixField_test_1"},next:{title:"BlockMatrixField example 2",permalink:"/docs-api/BlockMatrixField/BlockMatrixField_test_2"}},o={},c=[{value:"Usage",id:"usage",level:2}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.h1,{id:"blockmatrixfield-example-11",children:"BlockMatrixField example 11"}),"\n",(0,l.jsxs)(a.p,{children:["This example shows the usage of ",(0,l.jsx)(a.code,{children:"Set"})," methods ",(0,l.jsx)(a.a,{href:"/docs-api/BlockMatrixField/BlockMatrixField_",children:"BlockMatrixField"}),"."]}),"\n",(0,l.jsx)(a.p,{children:"Following modules are used"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:"[[BlockMatrixField_]]"}),"\n",(0,l.jsx)(a.li,{children:"[[ParameterList_]]"}),"\n",(0,l.jsx)(a.li,{children:"[[HDF5File_]]"}),"\n",(0,l.jsx)(a.li,{children:"[[Domain_]]"}),"\n",(0,l.jsx)(a.li,{children:"[[DomainPointer_]]"}),"\n"]}),"\n",(0,l.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(a.p,{children:"Import modules and define variables"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:'PROGRAM main\n    USE easifemBase\n    USE easifemClasses\n    IMPLICIT NONE\n    TYPE( BlockMatrixField_ ) :: obj\n    TYPE( ParameterList_ ) :: param\n    TYPE( Domain_ ), TARGET :: pressureDomain\n    TYPE( Domain_ ), TARGET :: velocityDomain\n    TYPE( DomainPointer_ ) :: domains( 2 )\n    TYPE( HDF5File_ ) :: pressureMeshFile\n    TYPE( HDF5File_ ) :: velocityMeshFile\n    CHARACTER( LEN = * ), PARAMETER :: &\n      & pressureMeshFilename="./mesh_tri3.h5"\n    CHARACTER( LEN = * ), PARAMETER :: &\n      & velocityMeshFilename="./mesh_tri6.h5"\n'})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:"    CALL FPL_INIT(); CALL param%Initiate()\n"})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:'    CALL SetBlockMatrixFieldParam(param=param, name="K",  &\n      & physicalVarNames=["V", "P"], spaceCompo=[2, 1], &\n      & timeCompo=[1,1], fieldType=FIELD_TYPE_NORMAL,  &\n      & matrixProp="UNSYM" )\n'})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:'    CALL pressureMeshfile%Initiate( FileName=pressureMeshFilename, MODE="READ" )\n    CALL velocityMeshfile%Initiate( FileName=velocityMeshFilename, MODE="READ" )\n    CALL pressureMeshfile%Open()\n    CALL velocityMeshfile%Open()\n'})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:'    CALL pressureDomain%Initiate( pressureMeshfile, "")\n'})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:'    CALL velocityDomain%Initiate( velocityMeshfile, "")\n'})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:"    CALL pressureMeshfile%Deallocate()\n    CALL velocityMeshfile%Deallocate()\n"})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:"    domains(1)%ptr => velocityDomain\n    domains(2)%ptr => pressureDomain\n"})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:"    CALL obj%Initiate(param=param, dom=domains)\n"})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:"    CALL obj%Set(value=1.0_DFP)\n"})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:'    CALL obj%Display("")\n'})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:"    CALL obj%Deallocate()\n"})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:"    CALL param%Deallocate(); CALL FPL_FINALIZE()\n    NULLIFY(domains(1)%ptr, domains(2)%ptr)\n    CALL pressureDomain%Deallocate()\n    CALL velocityDomain%Deallocate()\n    CALL obj%Deallocate()\nEND PROGRAM main\n"})})]})}function m(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},11151:(e,a,i)=>{i.d(a,{Z:()=>s,a:()=>r});var l=i(67294);const t={},n=l.createContext(t);function r(e){const a=l.useContext(n);return l.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(n.Provider,{value:a},e.children)}}}]);