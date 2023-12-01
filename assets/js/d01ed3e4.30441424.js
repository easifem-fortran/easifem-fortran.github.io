"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[91135],{4832:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>T});var o=n(85893),r=n(11151);const a={},i="GetParam",s={id:"RefLine/GetParam",title:"GetParam",description:"Get the parameters of reference element.",source:"@site/docs/docs-api/RefLine/GetParam.md",sourceDirName:"RefLine",slug:"/RefLine/GetParam",permalink:"/docs-api/RefLine/GetParam",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/RefLine/GetParam.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetNptrs",permalink:"/docs-api/RefLine/GetNptrs"},next:{title:"GetTopology",permalink:"/docs-api/RefLine/GetTopology"}},c={},T=[{value:"Interface",id:"interface",level:2}];function N(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"getparam",children:"GetParam"}),"\n",(0,o.jsx)(t.p,{children:"Get the parameters of reference element."}),"\n",(0,o.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE refelem_SetParam(obj, xij, entityCounts, &\n    & xidimension, name, nameStr, nsd, &\n    & pointTopology, edgeTopology, faceTopology, cellTopology)\n    CLASS(AbstractRefElement_), INTENT(INOUT) :: obj\n    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: entityCounts(4)\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: xidimension\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: name\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: nameStr\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: nsd\n    TYPE(Topology_), OPTIONAL, INTENT(IN) :: pointTopology(:)\n    TYPE(Topology_), OPTIONAL, INTENT(IN) :: edgeTopology(:)\n    TYPE(Topology_), OPTIONAL, INTENT(IN) :: faceTopology(:)\n    TYPE(Topology_), OPTIONAL, INTENT(IN) :: cellTopology(:)\n  END SUBROUTINE refelem_SetParam\nEND INTERFACE\n"})})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(N,{...e})}):N(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var o=n(67294);const r={},a=o.createContext(r);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);