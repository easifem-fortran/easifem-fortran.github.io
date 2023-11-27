"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[37531],{99215:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>d,toc:()=>s});var i=r(85893),a=r(11151);const n={},o="SetMatrixFieldPrecondParam",d={id:"MatrixFieldLis/SetMatrixFieldPrecondParam",title:"SetMatrixFieldPrecondParam",description:"Set the parameters for constructing the preconditioner for MatrixFieldLis.",source:"@site/docs/docs-api/MatrixFieldLis/SetMatrixFieldPrecondParam.md",sourceDirName:"MatrixFieldLis",slug:"/MatrixFieldLis/SetMatrixFieldPrecondParam",permalink:"/docs-api/MatrixFieldLis/SetMatrixFieldPrecondParam",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/MatrixFieldLis/SetMatrixFieldPrecondParam.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SetMatrixFieldParam",permalink:"/docs-api/MatrixFieldLis/SetMatrixFieldParam"},next:{title:"SetPrecondition",permalink:"/docs-api/MatrixFieldLis/SetPrecondition"}},c={},s=[{value:"Interface",id:"interface",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"setmatrixfieldprecondparam",children:"SetMatrixFieldPrecondParam"}),"\n",(0,i.jsxs)(t.p,{children:["Set the parameters for constructing the preconditioner for ",(0,i.jsx)(t.a,{href:"/docs-api/MatrixFieldLis/MatrixFieldLis_",children:"MatrixFieldLis_"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-fortran",children:'INTERFACE\n  MODULE SUBROUTINE SetMatrixFieldPrecondParam( &\n    & param, &\n    & name, &\n    & engine, &\n    & lfil, mbloc, droptol, permtol, alpha)\n    TYPE(ParameterList_), INTENT(INOUT) :: param\n    !! Options to create precondition of [[MatrixField_]]\n    INTEGER(I4B), INTENT(IN) :: name\n    !! Name of precondition\n    CHARACTER(*), INTENT(IN) :: engine\n    !! "NATIVE_SERIE"\n    !! "LIS_OMP"\n    !! "LIS_MPI"\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: lfil\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: mbloc\n    REAL(DFP), OPTIONAL, INTENT(IN) :: droptol\n    !! Droptoleranace\n    REAL(DFP), OPTIONAL, INTENT(IN) :: permtol\n    !! permutation tolerance\n    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha\n  END SUBROUTINE SetMatrixFieldPrecondParam\nEND INTERFACE\n'})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>d,a:()=>o});var i=r(67294);const a={},n=i.createContext(a);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);