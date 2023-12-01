"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[64785],{73744:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var n=i(85893),s=i(11151);const r={},l="ApplyDirichletBC",o={id:"SteadyStokes111/ApplyDirichletBC",title:"ApplyDirichletBC",description:"This routine apply the Dirichlet boundary condition to pressure and velocity field.",source:"@site/docs/docs-api/SteadyStokes111/ApplyDirichletBC.md",sourceDirName:"SteadyStokes111",slug:"/SteadyStokes111/ApplyDirichletBC",permalink:"/docs-api/SteadyStokes111/ApplyDirichletBC",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/SteadyStokes111/ApplyDirichletBC.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AddVelocityNeumannBC",permalink:"/docs-api/SteadyStokes111/AddVelocityNeumannBC"},next:{title:"Assemble",permalink:"/docs-api/SteadyStokes111/Assemble"}},c={},a=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"applydirichletbc",children:"ApplyDirichletBC"}),"\n",(0,n.jsx)(t.p,{children:"This routine apply the Dirichlet boundary condition to pressure and velocity field."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["It also makes the ",(0,n.jsx)(t.code,{children:"obj%DBCForPressure(dbcNo)"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"dbcNo"})," should be lesser than total dirichlet boundary condition for pressure field."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE ApplyDirichletBC(obj)\n    CLASS(SteadyStokes111_), INTENT(INOUT) :: obj\n  END SUBROUTINE ApplyDirichletBC\nEND INTERFACE\n"})}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," ","TODO"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>l});var n=i(67294);const s={},r=n.createContext(s);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);