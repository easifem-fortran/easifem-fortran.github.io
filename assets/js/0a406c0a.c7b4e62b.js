"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[36007],{14416:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(85893),a=r(11151);const o={},i="ImportFromToml",l={id:"AbstractMaterial/ImportFromToml",title:"ImportFromToml",description:"Initiate an instance by using a toml config.",source:"@site/docs/docs-api/AbstractMaterial/ImportFromToml.md",sourceDirName:"AbstractMaterial",slug:"/AbstractMaterial/ImportFromToml",permalink:"/docs-api/AbstractMaterial/ImportFromToml",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMaterial/ImportFromToml.md",tags:[],version:"current",lastUpdatedAt:1701411597,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Import",permalink:"/docs-api/AbstractMaterial/Import"},next:{title:"Initiate",permalink:"/docs-api/AbstractMaterial/Initiate"}},s={},c=[{value:"Interface",id:"interface",level:2}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"importfromtoml",children:"ImportFromToml"}),"\n",(0,n.jsxs)(t.p,{children:["Initiate an instance by using a ",(0,n.jsx)(t.code,{children:"toml"})," config."]}),"\n",(0,n.jsx)("span",{class:"badge badge--secondary",children:" @IOMethods "}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Click here to see toml-config"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:'[[material]]\nreturnType = "Scalar"\n# returnType = "Vector"\n# returnType = "Matrix"\nargType = "Space"\n# argType = "Constant"\n# argType = "Space"\n# argType = "Time"\n# argType = "SpaceTime"\nnumArgs = 3\nnumReturns = 1\nluaScript = "./hello.lua"\nluaFunctionName="hello"\nscalarValue = 1.0 \nvectorValue = [1.0, 2.0, 3.0]\nmatrixValue = [[1.0, 2.0, 3.0], [4.0, 5.0, 6.0], [7.0, 8.0, 9.0]]\n\n[[material]]\nreturnType = "Scalar"\n# returnType = "Vector"\n# returnType = "Matrix"\nargType = "Space"\n# argType = "Constant"\n# argType = "Space"\n# argType = "Time"\n# argType = "SpaceTime"\nnumArgs = 3\nnumReturns = 1\nluaScript = "./hello.lua"\nluaFunctionName="hello"\nscalarValue = 1.0 \nvectorValue = [1.0, 2.0, 3.0]\nmatrixValue = [[1.0, 2.0, 3.0], [4.0, 5.0, 6.0], [7.0, 8.0, 9.0]]\n'})}),(0,n.jsxs)(t.p,{children:["This ",(0,n.jsx)(t.code,{children:"toml"})," configuration is almost same as the ",(0,n.jsx)(t.a,{href:"/docs-api/UserFunction",children:"UserFunction"}),"."]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE AbstractMaterialImportFromToml\n  MODULE SUBROUTINE ImportFromToml3(obj, tomlName, afile, filename,  &\n    & printToml)\n    CLASS(AbstractMaterial_), INTENT(INOUT) :: obj\n    CHARACTER(*), INTENT(IN) :: tomlName\n    TYPE(TxtFile_), OPTIONAL, INTENT(INOUT) :: afile\n    CHARACTER(*), OPTIONAL, INTENT(IN) :: filename\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: printToml\n  END SUBROUTINE ImportFromToml3\nEND INTERFACE AbstractMaterialImportFromToml\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"The following interfaces are mainly for internal use only. Most of the users should use the above interface."})}),"\n",(0,n.jsx)("span",{class:"badge badge--warning",children:" Developer only "}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE AbstractMaterialImportFromToml\n  MODULE SUBROUTINE ImportFromToml1(obj, table)\n    CLASS(AbstractMaterial_), INTENT(INOUT) :: obj\n    TYPE(toml_table), INTENT(INOUT) :: table\n  END SUBROUTINE ImportFromToml1\nEND INTERFACE AbstractMaterialImportFromToml\n"})}),"\n",(0,n.jsx)("span",{class:"badge badge--warning",children:" Developer only "}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE AbstractMaterialImportFromToml\n  MODULE SUBROUTINE ImportFromToml2(obj, array)\n    CLASS(AbstractMaterial_), INTENT(INOUT) :: obj\n    TYPE(toml_array), POINTER, INTENT(INOUT) :: array\n  END SUBROUTINE ImportFromToml2\nEND INTERFACE AbstractMaterialImportFromToml\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>i});var n=r(67294);const a={},o=n.createContext(a);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);