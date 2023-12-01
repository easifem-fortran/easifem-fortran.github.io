"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[945],{48418:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>T});var t=n(85893),r=n(11151);const i={},o="GetHRQIParam",s={id:"ElemshapeData/GetHRQIParam",title:"GetHRQIParam",description:"Stabilization and discontinuity-capturing parameters for space-time flow computations with finite element and isogeometric discretizations, Takizawa, Tezduyar, Otoguro, Computational Mechanics (2018)",source:"@site/docs/docs-api/ElemshapeData/GetHRQIParam.md",sourceDirName:"ElemshapeData",slug:"/ElemshapeData/GetHRQIParam",permalink:"/docs-api/ElemshapeData/GetHRQIParam",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/ElemshapeData/GetHRQIParam.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetHRGNParam",permalink:"/docs-api/ElemshapeData/GetHRGNParam"},next:{title:"GetInterpolation",permalink:"/docs-api/ElemshapeData/GetInterpolation"}},c={},T=[];function N(a){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...a.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"gethrqiparam",children:"GetHRQIParam"}),"\n",(0,t.jsx)(e.p,{children:"Stabilization and discontinuity-capturing parameters for space-time flow computations with finite element and isogeometric discretizations, Takizawa, Tezduyar, Otoguro, Computational Mechanics (2018)"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE GetHRQIParam1(obj, h, val, hmax, hmin, &\n    & r, opt)\n    CLASS(ElemshapeData_), INTENT(IN) :: obj\n      !! obj can be an instance of [[STElemshapeData_]]\n    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: h( : )\n      !! h is a scalar, and defined on quadrature points\n    TYPE(FEVariable_), INTENT(IN) :: val\n      !! val can be a vector or a scalar\n    REAL(DFP), OPTIONAL, ALLOCATABLE, INTENT(INOUT) :: hmax( : )\n    REAL(DFP), OPTIONAL, ALLOCATABLE, INTENT(INOUT) :: hmin( : )\n    REAL(DFP), OPTIONAL, ALLOCATABLE, INTENT(INOUT) :: r( :, : )\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt\n      !! currently, opt is not used, but it may be used in future\n  END SUBROUTINE GetHRQIParam1\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE GetHRQIParam2(obj, h, val, hmax, &\n    & hmin, r, opt)\n    CLASS(ElemshapeData_), INTENT(IN) :: obj\n      !! obj can be an instance of [[STElemshapeData_]]\n    TYPE(FEVariable_), INTENT(INOUT) :: h\n      !! h is a scalar, and defined on quadrature points\n    TYPE(FEVariable_), INTENT(IN) :: val\n      !! val can be a vector or a scalar\n    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: hmax, hmin, r\n      !! h is a scalar, and defined on quadrature points\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt\n      !! currently, opt is not used, but it may be used in future\n  END SUBROUTINE GetHRQIParam2\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE GetHRQIParam3(obj, h, val, hmax, &\n    & hmin, r, opt)\n    CLASS(STElemshapeData_), INTENT(IN) :: obj(:)\n      !! Spacetime shape function data, obj(ipt) denotes data at\n      !! ipt quadrature point in time domain\n    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: h( :, : )\n      !! scalar variable, defined on space-time quadrature points\n    TYPE(FEVariable_), INTENT(IN) :: val\n      !! it can be a scalar, defined on space or space-time quadrature points\n    REAL(DFP), OPTIONAL, ALLOCATABLE, INTENT(INOUT) :: hmax( :, : )\n    REAL(DFP), OPTIONAL, ALLOCATABLE, INTENT(INOUT) :: hmin( :, : )\n    REAL(DFP), OPTIONAL, ALLOCATABLE, INTENT(INOUT) :: r( :, :, : )\n      !! scalar variable, defined on space-time quadrature points\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt\n  END SUBROUTINE GetHRQIParam3\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE GetHRQIParam4(obj, h, val, hmax, &\n    & hmin, r, opt)\n    CLASS(STElemshapeData_), INTENT(IN) :: obj(:)\n      !! Spacetime shape function data, obj(ipt) denotes data at\n      !! ipt quadrature point in time domain\n    TYPE(FEVariable_), INTENT(INOUT) :: h\n      !! scalar variable, defined on space-time quadrature points\n    TYPE(FEVariable_), INTENT(IN) :: val\n      !! it can be a scalar, defined on space or space-time quadrature points\n    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: hmax, hmin, r\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt\n  END SUBROUTINE GetHRQIParam4\n"})})]})}function m(a={}){const{wrapper:e}={...(0,r.a)(),...a.components};return e?(0,t.jsx)(e,{...a,children:(0,t.jsx)(N,{...a})}):N(a)}},11151:(a,e,n)=>{n.d(e,{Z:()=>s,a:()=>o});var t=n(67294);const r={},i=t.createContext(r);function o(a){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function s(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(r):a.components||r:o(a.components),t.createElement(i.Provider,{value:e},a.children)}}}]);