"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[45037],{72699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=n(85893),c=n(11151);const o={},i="MasterFacetLocalID",r={id:"DomainConnectivity/MasterFacetLocalID",title:"MasterFacetLocalID",description:"Returns the local facet id in master cell.",source:"@site/docs/docs-api/DomainConnectivity/MasterFacetLocalID.md",sourceDirName:"DomainConnectivity",slug:"/DomainConnectivity/MasterFacetLocalID",permalink:"/docs-api/DomainConnectivity/MasterFacetLocalID",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/DomainConnectivity/MasterFacetLocalID.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MasterDimTag",permalink:"/docs-api/DomainConnectivity/MasterDimTag"},next:{title:"SlaveCellNumber",permalink:"/docs-api/DomainConnectivity/SlaveCellNumber"}},s={},l=[{value:"Interface1",id:"interface1",level:2},{value:"Interface2",id:"interface2",level:2}];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"masterfacetlocalid",children:"MasterFacetLocalID"}),"\n",(0,a.jsx)(t.p,{children:"Returns the local facet id in master cell."}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"This routine takes local number of facet element."})}),"\n",(0,a.jsx)(t.h2,{id:"interface1",children:"Interface1"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION MasterFacetLocalID(obj, localElement) RESULT(ans)\n    CLASS(DomainConnectivity_), INTENT(IN) :: obj\n    !! Mesh connectivity object\n    INTEGER(I4B), INTENT(IN) :: localElement\n    !! Facet element number\n    INTEGER(I4B) :: ans\n    !! Local facet ID\n  END FUNCTION MasterFacetLocalID\nEND INTERFACE\n"})}),"\n",(0,a.jsx)(t.h2,{id:"interface2",children:"Interface2"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION MasterFacetLocalID(obj, localElement) RESULT(ans)\n    CLASS(DomainConnectivity_), INTENT(IN) :: obj\n    !! Mesh connectivity data\n    INTEGER(I4B), INTENT(IN) :: localElement(:)\n    !! List of facet element numbers\n    INTEGER(I4B) :: ans(SIZE(localElement))\n    !! List of local facet IDs\n  END FUNCTION MasterFacetLocalID\nEND INTERFACE\n"})})]})}function m(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var a=n(67294);const c={},o=a.createContext(c);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);