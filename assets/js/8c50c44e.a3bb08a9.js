"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[65976],{43196:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=a(85893),s=a(11151);const r={},i="DisplayInternalFacetData",c={id:"Mesh/DisplayInternalFacetData",title:"DisplayInternalFacetData",description:"Interface",source:"@site/docs/docs-api/Mesh/DisplayInternalFacetData.md",sourceDirName:"Mesh",slug:"/Mesh/DisplayInternalFacetData",permalink:"/docs-api/Mesh/DisplayInternalFacetData",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Mesh/DisplayInternalFacetData.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DisplayFacetElements",permalink:"/docs-api/Mesh/DisplayFacetElements"},next:{title:"DisplayNodeData",permalink:"/docs-api/Mesh/DisplayNodeData"}},o={},l=[{value:"Interface",id:"interface",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"displayinternalfacetdata",children:"DisplayInternalFacetData"}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE mesh_DisplayInternalFacetData(obj, msg, unitno)\n    CLASS(Mesh_), INTENT(IN) :: obj\n    CHARACTER(*), INTENT(IN) :: msg\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitno\n  END SUBROUTINE mesh_DisplayInternalFacetData\nEND INTERFACE\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>i});var n=a(67294);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);