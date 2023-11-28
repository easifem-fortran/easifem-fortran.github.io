"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[63819],{83737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(85893),c=n(11151);const i={},s="GetFacetConnectivity",o={id:"Mesh/GetFacetConnectivity",title:"GetFacetConnectivity",description:"Interface",source:"@site/docs/docs-api/Mesh/GetFacetConnectivity.md",sourceDirName:"Mesh",slug:"/Mesh/GetFacetConnectivity",permalink:"/docs-api/Mesh/GetFacetConnectivity",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Mesh/GetFacetConnectivity.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetElementToElements",permalink:"/docs-api/Mesh/GetElementToElements"},next:{title:"GetFacetElementType",permalink:"/docs-api/Mesh/GetFacetElementType"}},r={},l=[{value:"Interface",id:"interface",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"getfacetconnectivity",children:"GetFacetConnectivity"}),"\n",(0,a.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"  MODULE PURE FUNCTION getFacetConnectivity( obj, facetElement, &\n    & elementType, isMaster, facetBoundary ) RESULT( ans )\n    CLASS( Mesh_ ), INTENT( IN ) :: obj\n    INTEGER( I4B ), INTENT( IN ) :: facetElement\n    INTEGER( I4B ), INTENT( IN ) :: elementType\n    LOGICAL( LGT ), INTENT( IN ) :: isMaster\n      !! if isMaster is true then connectivity of facet in master-cell\n      !! is returned, otherwise connectivity of facet in slave-cell\n      !! is returned. This is only applicable for internal facet element\n      !! because for domain facet we do not have slave-cell.\n      !! Currently, we do not support slave-cell for meshFacet because\n      !! the slave of meshFacet lives in different instance of\n    INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: facetBoundary\n    INTEGER( I4B ), ALLOCATABLE :: ans( : )\n  END FUNCTION getFacetConnectivity\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"  MODULE PURE FUNCTION getFacetConnectivity( obj, globalElement, &\n    & iface ) RESULT( ans )\n    CLASS( Mesh_ ), INTENT( IN ) :: obj\n    INTEGER( I4B ), INTENT( IN ) :: globalElement\n    INTEGER( I4B ), INTENT( IN ) :: iface\n    INTEGER( I4B ), ALLOCATABLE :: ans( : )\n  END FUNCTION getFacetConnectivity\n"})})]})}function f(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var a=n(67294);const c={},i=a.createContext(c);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);