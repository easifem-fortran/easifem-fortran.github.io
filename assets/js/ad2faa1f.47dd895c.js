"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[14157],{20722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var i=n(85893),o=n(11151);const c={},s="GetConnectivity",r={id:"Mesh/GetConnectivity",title:"GetConnectivity",description:"Interface",source:"@site/docs/docs-api/Mesh/GetConnectivity.md",sourceDirName:"Mesh",slug:"/Mesh/GetConnectivity",permalink:"/docs-api/Mesh/GetConnectivity",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Mesh/GetConnectivity.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetCellNumber",permalink:"/docs-api/Mesh/GetCellNumber"},next:{title:"GetElemNum",permalink:"/docs-api/Mesh/GetElemNum"}},a={},l=[{value:"Interface",id:"interface",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"getconnectivity",children:"GetConnectivity"}),"\n",(0,i.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-fortran",children:"  MODULE PURE FUNCTION getConnectivity(obj, globalElement) RESULT(ans)\n    CLASS(Mesh_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalElement\n    INTEGER(I4B), ALLOCATABLE :: ans(:)\n  END FUNCTION getConnectivity\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var i=n(67294);const o={},c=i.createContext(o);function s(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);