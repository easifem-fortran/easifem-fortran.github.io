"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[93106],{91495:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var o=e(85893),i=e(11151);const r={},a="Domain_Pointer",s={id:"Domain/Domain_Pointer",title:"Domain_Pointer",description:"This function returns a pointer to newly created domain.",source:"@site/docs/docs-api/Domain/Domain_Pointer.md",sourceDirName:"Domain",slug:"/Domain/Domain_Pointer",permalink:"/docs-api/Domain/Domain_Pointer",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Domain/Domain_Pointer.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Domain constructor",permalink:"/docs-api/Domain/Domain_Constructor"},next:{title:"Export",permalink:"/docs-api/Domain/Export"}},c={},m=[];function d(n){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"domain_pointer",children:"Domain_Pointer"}),"\n",(0,o.jsx)(t.p,{children:"This function returns a pointer to newly created domain."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION Domain_Pointer(hdf5, group) RESULT(Ans)\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    CHARACTER(*), INTENT(IN) :: group\n    CLASS(Domain_), POINTER :: ans\n  END FUNCTION Domain_Pointer\nEND INTERFACE\n"})})]})}function p(n={}){const{wrapper:t}={...(0,i.a)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},11151:(n,t,e)=>{e.d(t,{Z:()=>s,a:()=>a});var o=e(67294);const i={},r=o.createContext(i);function a(n){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),o.createElement(r.Provider,{value:t},n.children)}}}]);