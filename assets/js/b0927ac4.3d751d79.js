"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[98195],{99225:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=a(85893),s=a(11151);const r={},o="CheckEssentialParam",c={id:"SteadyStokes111/CheckEssentialParam",title:"CheckEssentialParam",description:"Check essential parameter.",source:"@site/docs/docs-api/SteadyStokes111/CheckEssentialParam.md",sourceDirName:"SteadyStokes111",slug:"/SteadyStokes111/CheckEssentialParam",permalink:"/docs-api/SteadyStokes111/CheckEssentialParam",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/SteadyStokes111/CheckEssentialParam.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AssembleTanMat_NeumanFacet",permalink:"/docs-api/SteadyStokes111/AssembleTanMat_NeumanFacet"},next:{title:"ComputeStabParam",permalink:"/docs-api/SteadyStokes111/ComputeStabParam"}},i={},d=[{value:"Interface",id:"interface",level:2}];function m(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"checkessentialparam",children:"CheckEssentialParam"}),"\n",(0,n.jsx)(t.p,{children:"Check essential parameter."}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE CheckEssentialParam(obj, param, prefix)\n    CLASS(SteadyStokes111_), INTENT(INOUT) :: obj\n    TYPE(ParameterList_), INTENT(IN) :: param\n    CHARACTER(*), OPTIONAL, INTENT(IN) :: prefix\n  END SUBROUTINE CheckEssentialParam\nEND INTERFACE\n"})})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>o});var n=a(67294);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);