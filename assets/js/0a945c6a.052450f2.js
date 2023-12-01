"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[7772],{38217:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=n(85893),s=n(11151);const a={},o="SetLinearElasticParam",r={id:"LinearElasticModel/SetLiearElasticModelParam",title:"SetLinearElasticParam",description:"Set the essential parameter for initiating an instance of LinearElasticModel_",source:"@site/docs/docs-api/LinearElasticModel/SetLiearElasticModelParam.md",sourceDirName:"LinearElasticModel",slug:"/LinearElasticModel/SetLiearElasticModelParam",permalink:"/docs-api/LinearElasticModel/SetLiearElasticModelParam",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/LinearElasticModel/SetLiearElasticModelParam.md",tags:[],version:"current",lastUpdatedAt:1701411597,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/LinearElasticModel/LinearElasticModel_"},next:{title:"LinearStaticCDR",permalink:"/docs-api/LinearStaticCDR/"}},l={},d=[{value:"Interface",id:"interface",level:2}];function c(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"setlinearelasticparam",children:"SetLinearElasticParam"}),"\n",(0,t.jsxs)(i.p,{children:["Set the essential parameter for initiating an instance of ",(0,t.jsx)(i.code,{children:"LinearElasticModel_"})]}),"\n",(0,t.jsx)("span",{class:"badge badge--secondary",children:" @ConstructorMethods "}),"\n",(0,t.jsx)(i.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE SetLinearElasticModelParam(param, elasticityType, &\n    & isPlaneStrain, isPlaneStress, poissonRatio, youngsModulus, &\n    & shearModulus, lambda, C, invC, stiffnessPower)\n    TYPE(ParameterList_), INTENT(INOUT) :: param\n    INTEGER(I4B), INTENT(IN) :: elasticityType\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isPlaneStress\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isPlaneStrain\n    REAL(DFP), OPTIONAL, INTENT(IN) :: poissonRatio\n    REAL(DFP), OPTIONAL, INTENT(IN) :: youngsModulus\n    REAL(DFP), OPTIONAL, INTENT(IN) :: shearModulus\n    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda\n    REAL(DFP), OPTIONAL, INTENT(IN) :: C(6, 6)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: invC(6, 6)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: stiffnessPower\n  END SUBROUTINE SetLinearElasticModelParam\nEND INTERFACE\n"})}),"\n",(0,t.jsxs)(i.admonition,{type:"info",children:[(0,t.jsx)(i.mdxAdmonitionTitle,{children:(0,t.jsx)(i.code,{children:"elasticityType"})}),(0,t.jsx)(i.p,{children:"Elasticity type. It can take following values:"}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"TypeElasticity%Isotropic"})," for isotropic elasticity"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"TypeElasticity%Anisotropic"})," for anisotropic elasticity."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"TypeElasticity%Orthotropic"})," for orthotropic elasticity."]}),"\n"]})]}),"\n",(0,t.jsxs)(i.admonition,{type:"note",children:[(0,t.jsx)(i.mdxAdmonitionTitle,{children:(0,t.jsx)(i.code,{children:"isPlaneStress"})}),(0,t.jsx)(i.p,{children:"Set it to true if the problem is plane stress."})]}),"\n",(0,t.jsxs)(i.admonition,{type:"info",children:[(0,t.jsx)(i.mdxAdmonitionTitle,{children:(0,t.jsx)(i.code,{children:"isPlaneStrain"})}),(0,t.jsx)(i.p,{children:"Set it to true if the problem is plane strain."})]}),"\n",(0,t.jsxs)(i.admonition,{type:"note",children:[(0,t.jsx)(i.mdxAdmonitionTitle,{children:(0,t.jsx)(i.code,{children:"poissonRatio"})}),(0,t.jsx)(i.p,{children:"Poisson's Ratio."})]}),"\n",(0,t.jsxs)(i.admonition,{type:"info",children:[(0,t.jsx)(i.mdxAdmonitionTitle,{children:(0,t.jsx)(i.code,{children:"youngsModulus"})}),(0,t.jsx)(i.p,{children:"Youngs modules."})]}),"\n",(0,t.jsxs)(i.admonition,{type:"note",children:[(0,t.jsx)(i.mdxAdmonitionTitle,{children:(0,t.jsx)(i.code,{children:"shearModulus"})}),(0,t.jsx)(i.p,{children:"Shear modulus."})]}),"\n",(0,t.jsxs)(i.admonition,{type:"info",children:[(0,t.jsx)(i.mdxAdmonitionTitle,{children:(0,t.jsx)(i.code,{children:"lambda"})}),(0,t.jsx)(i.p,{children:"Lame parameter."})]}),"\n",(0,t.jsxs)(i.admonition,{type:"note",children:[(0,t.jsx)(i.mdxAdmonitionTitle,{children:(0,t.jsx)(i.code,{children:"C"})}),(0,t.jsx)(i.p,{children:"Elastic tangent matrix."})]}),"\n",(0,t.jsxs)(i.admonition,{type:"info",children:[(0,t.jsx)(i.mdxAdmonitionTitle,{children:(0,t.jsx)(i.code,{children:"invC"})}),(0,t.jsx)(i.p,{children:"Inverse of tangent matrix."})]})]})}function m(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>o});var t=n(67294);const s={},a=t.createContext(s);function o(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);