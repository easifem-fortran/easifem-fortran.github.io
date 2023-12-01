"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[11493],{13597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=n(85893),s=n(11151);const a={},o="GetMasterCellNumber",c={id:"Mesh/GetMasterCellNumber",title:"GetMasterCellNumber",description:"Interface",source:"@site/docs/docs-api/Mesh/GetMasterCellNumber.md",sourceDirName:"Mesh",slug:"/Mesh/GetMasterCellNumber",permalink:"/docs-api/Mesh/GetMasterCellNumber",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Mesh/GetMasterCellNumber.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetLocalNodeNumber",permalink:"/docs-api/Mesh/GetLocalNodeNumber"},next:{title:"GetNodeToElements",permalink:"/docs-api/Mesh/GetNodeToElements"}},l={},i=[{value:"Interface",id:"interface",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"getmastercellnumber",children:"GetMasterCellNumber"}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"  MODULE PURE FUNCTION getMasterCellNumber( obj, facetElement, &\n    & elementType, facetBoundary )&\n    & RESULT( ans )\n    CLASS( Mesh_ ), INTENT( IN ) :: obj\n    INTEGER( I4B ), INTENT( IN ) :: facetElement\n    INTEGER( I4B ), INTENT( IN ) :: elementType\n    INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: facetBoundary\n    INTEGER( I4B ) :: ans\n  END FUNCTION getMasterCellNumber\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var r=n(67294);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);