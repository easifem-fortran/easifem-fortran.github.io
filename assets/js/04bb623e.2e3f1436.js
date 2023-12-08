"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[74792,99164],{69305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=n(85893),i=n(11151);const a={id:"Set",aliases:["Set"],tags:[],sidebar_position:4},r="Set",c={id:"AbstractMeshField/Set",title:"Set",description:"Set data in AbstractMeshField_.",source:"@site/docs/docs-api/AbstractMeshField/Set.md",sourceDirName:"AbstractMeshField",slug:"/AbstractMeshField/Set",permalink:"/docs-api/AbstractMeshField/Set",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMeshField/Set.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",sidebarPosition:4,frontMatter:{id:"Set",aliases:["Set"],tags:[],sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Initiate",permalink:"/docs-api/AbstractMeshField/Initiate"},next:{title:"Add",permalink:"/docs-api/AbstractMeshField/Add"}},o={},d=[{value:"Interface 1 (Set by using FEVariable)",id:"interface-1-set-by-using-fevariable",level:2},{value:"Interface 2 (Set by using UserFunction)",id:"interface-2-set-by-using-userfunction",level:2},{value:"Interface 3 (Set by using Materials)",id:"interface-3-set-by-using-materials",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"set",children:"Set"}),"\n",(0,s.jsxs)(t.p,{children:["Set data in ",(0,s.jsx)(t.code,{children:"AbstractMeshField_"}),"."]}),"\n",(0,s.jsx)("span",{class:"badge badge--secondary",children:" @SetMethods "}),"\n",(0,s.jsx)(t.h2,{id:"interface-1-set-by-using-fevariable",children:"Interface 1 (Set by using FEVariable)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Set(obj, globalElement, fevar)\n    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: globalElement\n    TYPE(FEVariable_), INTENT(IN) :: fevar\n  END SUBROUTINE Set\nEND INTERFACE\n"})}),"\n",(0,s.jsx)(t.h2,{id:"interface-2-set-by-using-userfunction",children:"Interface 2 (Set by using UserFunction)"}),"\n",(0,s.jsxs)(t.p,{children:["We can use ",(0,s.jsx)(t.a,{href:"/docs-api/AbstractMeshField/Set",children:"Set"})," method and the ",(0,s.jsx)(t.a,{href:"/docs-api/UserFunction",children:"UserFunction"})," to set the values in ",(0,s.jsx)(t.code,{children:"AbstractMeshField_"}),". The interface of this method is given below."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Set(obj, func, dom, timeVec)\n    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj\n    CLASS(UserFunction_), INTENT(INOUT) :: func\n    CLASS(Domain_), INTENT(INOUT) :: dom\n    REAL(DFP), OPTIONAL, INTENT(IN) :: timeVec(:)\n  END SUBROUTINE Set\nEND INTERFACE\n"})}),"\n",(0,s.jsx)(t.h2,{id:"interface-3-set-by-using-materials",children:"Interface 3 (Set by using Materials)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Set3(obj, material, name, dom, timeVec)\n    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj\n    CLASS(AbstractMaterial_), INTENT(INOUT) :: material\n    !! Abstract material\n    CHARACTER(*), INTENT(IN) :: name\n    !! name of the AbstractMeshField\n    CLASS(Domain_), INTENT(INOUT) :: dom\n    !! domain to access the node coord\n    REAL(DFP), OPTIONAL, INTENT(IN) :: timeVec(:)\n    !! time vector when the var type is `Time` or `SpaceTime`\n  END SUBROUTINE Set3\nEND INTERFACE\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},12312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=n(85893),i=n(11151),a=n(69305);const r={},c="Set",o={id:"TensorMeshField/Set",title:"Set",description:"Inherited from AbstractMeshField",source:"@site/docs/docs-api/TensorMeshField/Set.md",sourceDirName:"TensorMeshField",slug:"/TensorMeshField/Set",permalink:"/docs-api/TensorMeshField/Set",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/TensorMeshField/Set.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Import",permalink:"/docs-api/TensorMeshField/Import"},next:{title:"SetTensorMeshFieldParam",permalink:"/docs-api/TensorMeshField/SetTensorMeshFieldParam"}},d={},l=[];function h(e){const t={a:"a",h1:"h1",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"set",children:"Set"}),"\n",(0,s.jsxs)(t.p,{children:["Inherited from ",(0,s.jsx)(t.a,{href:"/docs-api/AbstractMeshField",children:"AbstractMeshField"})]}),"\n","\n","\n",(0,s.jsx)(a.default,{})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var s=n(67294);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);