"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[85303],{45167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>N,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=n(85893),r=n(11151);const a={},s="GetParam",c={id:"AbstractRefElement/GetParam",title:"GetParam",description:"Get the parameters of reference element.",source:"@site/docs/docs-api/AbstractRefElement/GetParam.md",sourceDirName:"AbstractRefElement",slug:"/AbstractRefElement/GetParam",permalink:"/docs-api/AbstractRefElement/GetParam",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractRefElement/GetParam.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetNptrs",permalink:"/docs-api/AbstractRefElement/GetNptrs"},next:{title:"GetTopology",permalink:"/docs-api/AbstractRefElement/GetTopology"}},i={},l=[{value:"Interface",id:"interface",level:2}];function T(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"getparam",children:"GetParam"}),"\n",(0,o.jsx)(t.p,{children:"Get the parameters of reference element."}),"\n",(0,o.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE refelem_SetParam(obj, xij, entityCounts, &\n    & xidimension, name, nameStr, nsd, &\n    & pointTopology, edgeTopology, faceTopology, cellTopology)\n    CLASS(AbstractRefElement_), INTENT(INOUT) :: obj\n    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: entityCounts(4)\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: xidimension\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: name\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: nameStr\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: nsd\n    TYPE(Topology_), OPTIONAL, INTENT(IN) :: pointTopology(:)\n    TYPE(Topology_), OPTIONAL, INTENT(IN) :: edgeTopology(:)\n    TYPE(Topology_), OPTIONAL, INTENT(IN) :: faceTopology(:)\n    TYPE(Topology_), OPTIONAL, INTENT(IN) :: cellTopology(:)\n  END SUBROUTINE refelem_SetParam\nEND INTERFACE\n"})})]})}function N(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(T,{...e})}):T(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var o=n(67294);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);