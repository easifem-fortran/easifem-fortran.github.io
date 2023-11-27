"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[8227],{5736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>I,frontMatter:()=>o,metadata:()=>T,toc:()=>N});var r=n(85893),a=n(11151);const o={},i="SetAbstractKernelParam",T={id:"AbstractKernel/SetAbstractKernelParam",title:"SetAbstractKernelParam",description:"Set kernel parameters",source:"@site/docs/docs-api/AbstractKernel/SetAbstractKernelParam.md",sourceDirName:"AbstractKernel",slug:"/AbstractKernel/SetAbstractKernelParam",permalink:"/docs-api/AbstractKernel/SetAbstractKernelParam",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractKernel/SetAbstractKernelParam.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Set",permalink:"/docs-api/AbstractKernel/Set"},next:{title:"SetCurrentTimeStep",permalink:"/docs-api/AbstractKernel/SetCurrentTimeStep"}},s={},N=[{value:"Interface",id:"interface",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"setabstractkernelparam",children:"SetAbstractKernelParam"}),"\n",(0,r.jsx)(t.p,{children:"Set kernel parameters"}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE setAbstractKernelParam( &\n    & prefix, &\n    & param, &\n    & name, &\n    & engine, &\n    & coordinateSystem, &\n    & timeDependency, &\n    & nsd, &\n    & nnt, &\n    & tdof, &\n    & dt, &\n    & startTime, &\n    & endTime, &\n    & currentTime, &\n    & currentTimeStep, &\n    & totalTimeStep, &\n    & baseInterpolationForSpace, &\n    & baseContinuityForSpace, &\n    & quadratureTypeForSpace, &\n    & baseInterpolationForTime, &\n    & baseContinuityForTime, &\n    & quadratureTypeForTime, &\n    & postProcessOpt)\n    CHARACTER(LEN=*), INTENT(IN) :: prefix\n    TYPE(ParameterList_), INTENT(INOUT) :: param\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: name\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: engine\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: coordinateSystem\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: timeDependency\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: nsd\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: nnt\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tdof\n    REAL(DFP), OPTIONAL, INTENT(IN) :: dt\n    REAL(DFP), OPTIONAL, INTENT(IN) :: startTime\n    REAL(DFP), OPTIONAL, INTENT(IN) :: endTime\n    REAL(DFP), OPTIONAL, INTENT(IN) :: currentTime\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: currentTimeStep\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: totalTimeStep\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: baseInterpolationForSpace\n    !! Type of interpolation function used for velocity\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: baseContinuityForSpace\n    !! Type of continuity of basis function for velocity\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: quadratureTypeForSpace\n    !! Type of quadrature for velocity field\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: baseInterpolationForTime\n    !! Type of interpolation function used for Time\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: baseContinuityForTime\n    !! Type of continuity of basis function for Time\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: quadratureTypeForTime\n    !! Type of quadrature for time\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: postProcessOpt\n    !! Postprocessing option for writeData\n  END SUBROUTINE setAbstractKernelParam\nEND INTERFACE\n"})})]})}function I(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>T,a:()=>i});var r=n(67294);const a={},o=r.createContext(a);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function T(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);