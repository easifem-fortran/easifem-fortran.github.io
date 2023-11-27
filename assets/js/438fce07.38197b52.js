"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[76577],{95928:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>n,contentTitle:()=>r,default:()=>x,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var l=a(85893),t=a(11151);const o={tags:["BlockMatrixField","BlockMatrixField/SetBlockMatrixFieldParam","BlockMatrixField/CheckEssentialParam","BlockMatrixField/Initiate","BlockMatrixField/Display","BlockMatrixField/Spy","BlockMatrixField/Deallocate","BlockMatrixField/Export"]},r="BlockMatrixField example 7",c={id:"BlockMatrixField/BlockMatrixField_test_7",title:"BlockMatrixField example 7",description:"This example shows the use of BlockMatrixField",source:"@site/docs/docs-api/BlockMatrixField/BlockMatrixField_test_7.md",sourceDirName:"BlockMatrixField",slug:"/BlockMatrixField/BlockMatrixField_test_7",permalink:"/docs-api/BlockMatrixField/BlockMatrixField_test_7",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/BlockMatrixField/BlockMatrixField_test_7.md",tags:[{label:"BlockMatrixField",permalink:"/docs-api/tags/block-matrix-field"},{label:"BlockMatrixField/SetBlockMatrixFieldParam",permalink:"/docs-api/tags/block-matrix-field-set-block-matrix-field-param"},{label:"BlockMatrixField/CheckEssentialParam",permalink:"/docs-api/tags/block-matrix-field-check-essential-param"},{label:"BlockMatrixField/Initiate",permalink:"/docs-api/tags/block-matrix-field-initiate"},{label:"BlockMatrixField/Display",permalink:"/docs-api/tags/block-matrix-field-display"},{label:"BlockMatrixField/Spy",permalink:"/docs-api/tags/block-matrix-field-spy"},{label:"BlockMatrixField/Deallocate",permalink:"/docs-api/tags/block-matrix-field-deallocate"},{label:"BlockMatrixField/Export",permalink:"/docs-api/tags/block-matrix-field-export"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{tags:["BlockMatrixField","BlockMatrixField/SetBlockMatrixFieldParam","BlockMatrixField/CheckEssentialParam","BlockMatrixField/Initiate","BlockMatrixField/Display","BlockMatrixField/Spy","BlockMatrixField/Deallocate","BlockMatrixField/Export"]},sidebar:"tutorialSidebar",previous:{title:"BlockMatrixField example 6",permalink:"/docs-api/BlockMatrixField/BlockMatrixField_test_6"},next:{title:"BlockMatrixField example 8",permalink:"/docs-api/BlockMatrixField/BlockMatrixField_test_8"}},n={},d=[{value:"Usage",id:"usage",level:2}];function s(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h1,{id:"blockmatrixfield-example-7",children:"BlockMatrixField example 7"}),"\n",(0,l.jsxs)(i.p,{children:["This example shows the use of ",(0,l.jsx)(i.a,{href:"/docs-api/BlockMatrixField/BlockMatrixField_",children:"BlockMatrixField"})]}),"\n",(0,l.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-fortran",children:'PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  IMPLICIT NONE\n  !\n  ! [[ParameterList_]], [[BlockMatrixField_]]\n  !\n  TYPE( BlockMatrixField_ ) :: obj\n  TYPE( ParameterList_ ) :: param\n  TYPE( Domain_ ) :: dom\n  TYPE( HDF5File_ ) :: meshfile\n  TYPE( HDF5File_ ) :: blockMatrixOutfile\n  CHARACTER( LEN = * ), PARAMETER :: meshFilename="./mesh_tri3.h5"\n  CHARACTER( LEN = * ), PARAMETER :: blockMatrixOutfileName= &\n    & "./bmf_outfile_common_domain.h5"\n  !> main\n  CALL FPL_INIT(); CALL param%Initiate()\n  ! #BlockMatrixField/SetBlockMatrixFieldParam\n  CALL SetBlockMatrixFieldParam(param=param, name="K",  &\n    & physicalVarNames=["V", "P"], spaceCompo=[2, 1], &\n    & timeCompo=[1,1], fieldType=FIELD_TYPE_NORMAL,  &\n    & matrixProp="UNSYM" )\n  ! #HDF5File/#Initiate\n  CALL meshfile%Initiate( FileName=meshFilename, MODE="READ" )\n  ! #HDF5File/#Open\n  CALL meshfile%Open()\n  ! #Domain/Initiate\n  CALL dom%Initiate( meshfile, "")\n  ! #BlockMatrixField/Initiate\n  CALL obj%Initiate(param=param, dom=dom)\n  ! #BlockMatrixField/Export\n  CALL blockMatrixOutfile%Initiate( blockMatrixOutfileName, "NEW" )\n  CALL blockMatrixOutfile%open()\n  CALL obj%Export(blockMatrixOutfile, "/BlockMatrixField")\n  CALL blockMatrixOutfile%Deallocate()\n  ! #BlockMatrixField/Deallocate\n  CALL obj%Deallocate( )\n  !> cleanup\n  CALL param%Deallocate(); CALL FPL_FINALIZE()\n  CALL meshfile%Deallocate()\n  CALL dom%Deallocate()\n  CALL obj%Deallocate()\nEND PROGRAM main\n'})})]})}function x(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}},11151:(e,i,a)=>{a.d(i,{Z:()=>c,a:()=>r});var l=a(67294);const t={},o=l.createContext(t);function r(e){const i=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(o.Provider,{value:i},e.children)}}}]);