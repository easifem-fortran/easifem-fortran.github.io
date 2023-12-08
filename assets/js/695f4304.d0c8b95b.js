"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[19026,10745],{78464:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var s=r(85893),o=r(11151);const n={},i="Export",a={id:"AbstractMeshField/Export",title:"Export",description:"Export data stored in AbstractField to HDF5File.",source:"@site/docs/docs-api/AbstractMeshField/Export.md",sourceDirName:"AbstractMeshField",slug:"/AbstractMeshField/Export",permalink:"/docs-api/AbstractMeshField/Export",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMeshField/Export.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Display",permalink:"/docs-api/AbstractMeshField/Display"},next:{title:"GetPointer",permalink:"/docs-api/AbstractMeshField/GetPointer"}},d={},c=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"export",children:"Export"}),"\n",(0,s.jsxs)(t.p,{children:["Export data stored in ",(0,s.jsx)(t.code,{children:"AbstractField"})," to HDF5File."]}),"\n",(0,s.jsx)("span",{class:"badge badge--secondary",children:" @IOMethods "}),"\n",(0,s.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Export(obj, hdf5, group)\n    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    CHARACTER(*), INTENT(IN) :: group\n  END SUBROUTINE Export\nEND INTERFACE\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},84439:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=r(85893),o=r(11151),n=r(78464);const i={},a="Export",d={id:"VectorMeshField/Export",title:"Export",description:"Inheritated from AbstractMeshField.",source:"@site/docs/docs-api/VectorMeshField/Export.md",sourceDirName:"VectorMeshField",slug:"/VectorMeshField/Export",permalink:"/docs-api/VectorMeshField/Export",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/VectorMeshField/Export.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Display",permalink:"/docs-api/VectorMeshField/Display"},next:{title:"Get",permalink:"/docs-api/VectorMeshField/Get"}},c={},l=[];function p(e){const t={a:"a",h1:"h1",p:"p",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"export",children:"Export"}),"\n",(0,s.jsxs)(t.p,{children:["Inheritated from ",(0,s.jsx)(t.a,{href:"/docs-api/AbstractMeshField",children:"AbstractMeshField"}),"."]}),"\n","\n","\n",(0,s.jsx)(n.default,{})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>i});var s=r(67294);const o={},n=s.createContext(o);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);