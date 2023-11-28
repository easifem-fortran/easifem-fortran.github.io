"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[97360],{14042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(85893),s=n(11151);const i={},d="Import",l={id:"NeumannBC/Import",title:"Import",description:"Import NeumannBC by reading a HDF5File",source:"@site/docs/docs-api/NeumannBC/Import.md",sourceDirName:"NeumannBC",slug:"/NeumannBC/Import",permalink:"/docs-api/NeumannBC/Import",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/NeumannBC/Import.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetMeshID",permalink:"/docs-api/NeumannBC/GetMeshID"},next:{title:"Initiate",permalink:"/docs-api/NeumannBC/Initiate"}},c={},o=[{value:"Interface",id:"interface",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"import",children:"Import"}),"\n",(0,r.jsxs)(t.p,{children:["Import ",(0,r.jsx)(t.a,{href:"/docs-api/NeumannBC/NeumannBC_",children:"NeumannBC_"})," by reading a ",(0,r.jsx)(t.a,{href:"/docs-api/HDF5File/HDF5File_",children:"HDF5File_"})]}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE Import(obj, hdf5, group, dom)\n    CLASS(NeumannBC_), INTENT(INOUT) :: obj\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    CHARACTER(*), INTENT(IN) :: group\n    CLASS(Domain_), TARGET, INTENT(IN) :: dom\n  END SUBROUTINE Import\nEND INTERFACE\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Template"})," is given below."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Variable"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Data type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Value"}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"name"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"idof"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"nodalValueType"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)(t.code,{children:"CONSTANT"}),", ",(0,r.jsx)(t.code,{children:"SPACE"}),", ",(0,r.jsx)(t.code,{children:"TIME"}),", ",(0,r.jsx)(t.code,{children:"SPACETIME"})]}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UseFunction"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"BOOL"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Boundary"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Group"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\\"}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>d});var r=n(67294);const s={},i=r.createContext(s);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);