"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[53739],{3960:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=t(85893),r=t(11151);const a={},d="AddPressureNeumannBC",i={id:"SteadyStokes111/AddPressureNeumannBC",title:"AddPressureNeumannBC",description:"This routine sets the Neumann boundary condition for pressure field.",source:"@site/docs/docs-api/SteadyStokes111/AddPressureNeumannBC.md",sourceDirName:"SteadyStokes111",slug:"/SteadyStokes111/AddPressureNeumannBC",permalink:"/docs-api/SteadyStokes111/AddPressureNeumannBC",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/SteadyStokes111/AddPressureNeumannBC.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AddPressureDirichletBC",permalink:"/docs-api/SteadyStokes111/AddPressureDirichletBC"},next:{title:"AddVelocityDirichletBC",permalink:"/docs-api/SteadyStokes111/AddVelocityDirichletBC"}},o={},c=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"addpressureneumannbc",children:"AddPressureNeumannBC"}),"\n",(0,s.jsx)(n.p,{children:"This routine sets the Neumann boundary condition for pressure field."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["It makes ",(0,s.jsx)(n.code,{children:"obj%NBCForPressure(nbcNo)"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"nbcNo"})," should be lesser than total Neumann boundary condition for pressure field."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE AddPressureNeumannBC(obj, nbcNo, param, boundary)\n    CLASS(SteadyStokes111_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: nbcNo\n    !! Neumann boundary nunber\n    TYPE(ParameterList_), INTENT(IN) :: param\n    !! parameter for constructing [DirichletBC_](DirichletBC_.md).\n    TYPE(MeshSelection_), INTENT(IN) :: boundary\n    !! Boundary region\n  END SUBROUTINE AddPressureNeumannBC\nEND INTERFACE\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","TODO"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>d});var s=t(67294);const r={},a=s.createContext(r);function d(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);