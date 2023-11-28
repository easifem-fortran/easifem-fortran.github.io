"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[58993],{29877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(85893),o=n(11151);const i={},s="Import",a={id:"AbstractSTDBE/Import",title:"Import",description:"This rotuine imports the properties of the kernel, and then builds it. All the properties are mentioned in the hdf5 file HDF5File. Domain dom is used as a target for kernel's domain pointer Domain.",source:"@site/docs/docs-api/AbstractSTDBE/Import.md",sourceDirName:"AbstractSTDBE",slug:"/AbstractSTDBE/Import",permalink:"/docs-api/AbstractSTDBE/Import",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractSTDBE/Import.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetVelocityNeumannBCPointer",permalink:"/docs-api/AbstractSTDBE/GetVelocityNeumannBCPointer"},next:{title:"Initiate",permalink:"/docs-api/AbstractSTDBE/Initiate"}},c={},d=[];function p(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"import",children:"Import"}),"\n",(0,r.jsxs)(t.p,{children:["This rotuine imports the properties of the kernel, and then builds it. All the properties are mentioned in the hdf5 file ",(0,r.jsx)(t.a,{href:"/docs-api/HDF5File/HDF5File_",children:"HDF5File_"}),". Domain ",(0,r.jsx)(t.code,{children:"dom"})," is used as a target for kernel's domain pointer ",(0,r.jsx)(t.a,{href:"/docs-api/Domain/Domain_",children:"Domain_"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE STDBE_Import(obj, hdf5, group, dom)\n    CLASS(AbstractSTDBE_), INTENT(INOUT) :: obj\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    CHARACTER(LEN=*), INTENT(IN) :: group\n    CLASS(Domain_), TARGET, INTENT(INOUT) :: dom\n  END SUBROUTINE STDBE_Import\nEND INTERFACE\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var r=n(67294);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);