"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[4608],{60542:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=n(85893),a=n(11151);const r={sidebar_position:2},i="Structure",o={id:"AbstractBC/AbstractBC_",title:"Structure",description:"AbstractBC_ is Abstract class for handling boundary conditions in finite element methods.",source:"@site/docs/docs-api/AbstractBC/AbstractBC_.md",sourceDirName:"AbstractBC",slug:"/AbstractBC/AbstractBC_",permalink:"/docs-api/AbstractBC/AbstractBC_",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractBC/AbstractBC_.md",tags:[],version:"current",lastUpdatedAt:1701147514,formattedLastUpdatedAt:"Nov 28, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"AbstractBC",permalink:"/docs-api/AbstractBC/"},next:{title:"SetAbstractBCParam",permalink:"/docs-api/AbstractBC/SetAbstractBCParam"}},c={},d=[{value:"Structure",id:"structure-1",level:2}];function u(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"structure",children:"Structure"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"AbstractBC_"})," is Abstract class for handling boundary conditions in finite element methods."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/vickysharma0812/easifem-classes/blob/master/src/modules/AbstractBC/src/AbstractBC_Class.F90",children:"See on GitHub"})}),"\n",(0,s.jsx)(e.h2,{id:"structure-1",children:"Structure"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-fortran",children:"TYPE, ABSTRACT :: AbstractBC_\n  LOGICAL(LGT) :: isInitiated = .FALSE.\n  !! It is true if the object is initiated\n  TYPE(String) :: name\n  !! name of boundary condition\n  INTEGER(I4B) :: idof = default_idof\n  !! degree of freedom number\n  INTEGER(I4B) :: nodalValueType = default_nodalValueType\n  !! Constant, Space, SpaceTime, Time\n  LOGICAL(LGT) :: isNormal = default_isNormal\n  !! True if the boundary condition is normal to the boundary\n  LOGICAL(LGT) :: isTangent = default_isTangent\n  !! True if the boundary condition is tangent to the boundary\n  LOGICAL(LGT) :: useExternal = default_useExternal\n  !! if true then nodal values are used externally\n  !! depending upon the context.\n  !! Basically we do not use the nodal value stored in the\n  !! instance of AbstractBC_\n  LOGICAL(LGT) :: isUserFunction = default_isUserFunction\n  !! True if userFunction is set\n  REAL(DFP), ALLOCATABLE :: nodalValue(:, :)\n  !! nodal values are kept here,\n  !! nodalValues( :, its ) denotes nodal values at time step its\n  CLASS(UserFunction_), POINTER :: func => NULL()\n  !! User function\n  TYPE(MeshSelection_) :: boundary\n  !! Boundary\n  CLASS(Domain_), POINTER :: dom => NULL()\n  !! Domain\n"})})]})}function l(t={}){const{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(u,{...t})}):u(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>o,a:()=>i});var s=n(67294);const a={},r=s.createContext(a);function i(t){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:i(t.components),s.createElement(r.Provider,{value:e},t.children)}}}]);