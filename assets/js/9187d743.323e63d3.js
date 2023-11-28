"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[35563],{87312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>N,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var o=n(85893),s=n(11151);const a={},r="GetNodeToElements",d={id:"Mesh/GetNodeToElements",title:"GetNodeToElements",description:"Interface",source:"@site/docs/docs-api/Mesh/GetNodeToElements.md",sourceDirName:"Mesh",slug:"/Mesh/GetNodeToElements",permalink:"/docs-api/Mesh/GetNodeToElements",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Mesh/GetNodeToElements.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetMasterCellNumber",permalink:"/docs-api/Mesh/GetMasterCellNumber"},next:{title:"GetNodeToNodes",permalink:"/docs-api/Mesh/GetNodeToNodes"}},l={},c=[{value:"Interface",id:"interface",level:2}];function i(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"getnodetoelements",children:"GetNodeToElements"}),"\n",(0,o.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"  MODULE PURE FUNCTION getNodeToElements(obj, globalNode) RESULT(ans)\n    CLASS(Mesh_), INTENT(IN) :: obj\n    !! mesh data\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    !! global node number\n    INTEGER(I4B), ALLOCATABLE :: ans(:)\n    !! A vector of local element number\n  END FUNCTION getNodeToElements\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"  MODULE PURE FUNCTION getNodeToElements(obj, globalNode) RESULT(ans)\n    CLASS(Mesh_), INTENT(IN) :: obj\n    !! mesh data\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    !! global node number\n    INTEGER(I4B), ALLOCATABLE :: ans(:)\n    !! A vector of local element number\n  END FUNCTION getNodeToElements\n"})})]})}function N(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>r});var o=n(67294);const s={},a=o.createContext(s);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);