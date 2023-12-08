"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[90032],{37659:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=i(85893),n=i(11151);const s={sidebar_position:2},r="Structure",o={id:"LinearElasticModel/LinearElasticModel_",title:"Structure",description:"LinearElasticModel_ is the class for modeling linear elastic material behavior.",source:"@site/docs/docs-api/LinearElasticModel/LinearElasticModel_.md",sourceDirName:"LinearElasticModel",slug:"/LinearElasticModel/LinearElasticModel_",permalink:"/docs-api/LinearElasticModel/LinearElasticModel_",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/LinearElasticModel/LinearElasticModel_.md",tags:[],version:"current",lastUpdatedAt:1701497244,formattedLastUpdatedAt:"Dec 2, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"LinearElasticModel",permalink:"/docs-api/LinearElasticModel/"},next:{title:"Initiate",permalink:"/docs-api/LinearElasticModel/Initiate"}},c={},l=[];function d(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"structure",children:"Structure"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"LinearElasticModel_"})," is the class for modeling linear elastic material behavior."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"LinearElasticModel_"})," is a subclass of ",(0,a.jsx)(t.a,{href:"/docs-api/AbstractSolidMechanicsModel",children:"AbstractSolidMechanicsModel"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"TYPE, EXTENDS(AbstractSolidMechanicsModel_) :: LinearElasticModel_\n  PRIVATE\n  INTEGER(I4B) :: elasticityType = 0\n  REAL(DFP) :: nu = 0.0_DFP\n  REAL(DFP) :: G = 0.0_DFP\n  REAL(DFP) :: E = 0.0_DFP\n  REAL(DFP) :: lambda = 0.0_DFP\n  REAL(DFP) :: C(6, 6) = 0.0_DFP\n  REAL(DFP) :: invC(6, 6) = 0.0_DFP\n  REAL(DFP) :: stiffnessPower = 0.0_DFP\nEND TYPE\n"})})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>r});var a=i(67294);const n={},s=a.createContext(n);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);