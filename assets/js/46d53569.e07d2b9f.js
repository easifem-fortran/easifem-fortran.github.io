"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[46187],{91959:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(85893),n=t(11151);const o={sidebar_position:1,date:new Date("2023-08-04T00:00:00.000Z"),update:new Date("2023-08-04T00:00:00.000Z"),status:"stable",docs:"done",extpkgs:"none",category:["Basis","ShapeFunctions"],tags:["easifemClasses","shapeFunctions","basis"]},c="AbstractPolySpace1D",r={id:"AbstractPolynomialSpace1D/index",title:"AbstractPolySpace1D",description:"AbstractPolynomialSpace1D",source:"@site/docs/docs-api/AbstractPolynomialSpace1D/index.md",sourceDirName:"AbstractPolynomialSpace1D",slug:"/AbstractPolynomialSpace1D/",permalink:"/docs-api/AbstractPolynomialSpace1D/",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractPolynomialSpace1D/index.md",tags:[{label:"easifemClasses",permalink:"/docs-api/tags/easifem-classes"},{label:"shapeFunctions",permalink:"/docs-api/tags/shape-functions"},{label:"basis",permalink:"/docs-api/tags/basis"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,date:"2023-08-04T00:00:00.000Z",update:"2023-08-04T00:00:00.000Z",status:"stable",docs:"done",extpkgs:"none",category:["Basis","ShapeFunctions"],tags:["easifemClasses","shapeFunctions","basis"]},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/AbstractOrthopolSpace1D/AbstractOrthopolSpace1D_"},next:{title:"Structure",permalink:"/docs-api/AbstractPolynomialSpace1D/AbstractPolynomialSpace1D_"}},i={},l=[{value:"Structure",id:"structure",level:2},{value:"Methods",id:"methods",level:2},{value:"Deallocate",id:"deallocate",level:3},{value:"Display",id:"display",level:3},{value:"SetParam",id:"setparam",level:3}];function d(e){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"abstractpolyspace1d",children:"AbstractPolySpace1D"}),"\n",(0,s.jsx)("span",{class:"badge badge--primary",children:" AbstractPolynomialSpace1D "}),"\n",(0,s.jsx)(a.p,{children:"Abstract class for defining polynomial spaces."}),"\n",(0,s.jsx)(a.h2,{id:"structure",children:"Structure"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-fortran",children:"TYPE, ABSTRACT :: AbstractPolynomialSpace1D_\n  PRIVATE\n  INTEGER(I4B) :: n = 0_I4B\n  !! order of space\nEND TYPE AbstractPolynomialSpace1D_\n"})}),"\n",(0,s.jsx)(a.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(a.h3,{id:"deallocate",children:"Deallocate"}),"\n",(0,s.jsx)(a.p,{children:"Destroy the instance."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Deallocate(obj)\n    CLASS(AbstractPolynomialSpace1D_), INTENT(INOUT) :: obj\n  END SUBROUTINE Deallocate\nEND INTERFACE\n"})}),"\n",(0,s.jsx)(a.h3,{id:"display",children:"Display"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Display(obj, msg, unitno)\n    CLASS(AbstractPolynomialSpace1D_), INTENT(IN) :: obj\n    CHARACTER(LEN=*), INTENT(IN) :: msg\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitno\n  END SUBROUTINE Display\nEND INTERFACE\n"})}),"\n",(0,s.jsx)(a.h3,{id:"setparam",children:"SetParam"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE SetParam(obj, n)\n    CLASS(AbstractPolynomialSpace1D_), INTENT(INOUT) :: obj\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: n\n  END SUBROUTINE SetParam\nEND INTERFACE\n"})})]})}function p(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>r,a:()=>c});var s=t(67294);const n={},o=s.createContext(n);function c(e){const a=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);