"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[80600],{33391:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var r=a(85893),i=a(11151);const n={},o="SetMatrixFieldParam",s={id:"MatrixField/SetMatrixFieldParam",title:"SetMatrixFieldParam",description:"Set parameters necessary for constructing MatrixField",source:"@site/docs/docs-api/MatrixField/SetMatrixFieldParam.md",sourceDirName:"MatrixField",slug:"/MatrixField/SetMatrixFieldParam",permalink:"/docs-api/MatrixField/SetMatrixFieldParam",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/MatrixField/SetMatrixFieldParam.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SetColumn",permalink:"/docs-api/MatrixField/SetColumn"},next:{title:"SetMatrixFieldPrecondParam",permalink:"/docs-api/MatrixField/SetMatrixFieldPrecondParam"}},c={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"setmatrixfieldparam",children:"SetMatrixFieldParam"}),"\n",(0,r.jsxs)(t.p,{children:["Set parameters necessary for constructing ",(0,r.jsx)(t.a,{href:"/docs-api/MatrixField/MatrixField_",children:"MatrixField_"})]}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:'INTERFACE\n  MODULE SUBROUTINE setBlockMatrixFieldParam(param, name, matrixProp, &\n    & physicalVarNames, spaceCompo, timeCompo, engine, fieldType)\n    TYPE(ParameterList_), INTENT(INOUT) :: param\n    !! Options to create [[BlockMatrixField_]] will be stored in this\n    CHARACTER(*), INTENT(IN) :: name\n    !! Name of the matrix field\n    CHARACTER(*), INTENT(IN) :: matrixProp\n    !! Matrix property, "SYM" or "UNSYM"\n    CHARACTER(*), INTENT(IN) :: physicalVarNames(:)\n    !! Name of physical variables\n    INTEGER(I4B), INTENT(IN) :: spaceCompo(:)\n    !! Number of space-components in each physicalVarNames, see [[DOF_]]\n    INTEGER(I4B), INTENT(IN) :: timeCompo(:)\n    !! Number of time-components in each physicalVarNames, see [[DOF_]]\n    CHARACTER(*), INTENT(IN) :: engine\n    !! engine\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: fieldType\n    !! fieldType can be following\n    !! FIELD_TYPE_NORMAL <-- DEFAULT\n    !! FIELD_TYPE_CONSTANT\n    !! FIELD_TYPE_CONSTANT_SPACE\n    !! FIELD_TYPE_CONSTANT_TIME\n  END SUBROUTINE setBlockMatrixFieldParam\nEND INTERFACE\n'})})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>o});var r=a(67294);const i={},n=r.createContext(i);function o(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);