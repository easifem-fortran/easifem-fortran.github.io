"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[61330],{32782:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>r});var n=s(85893),o=s(11151);const i={},c="IsMeshIDAllocated",a={id:"MeshSelection/IsMeshIDAllocated",title:"IsMeshIDAllocated",description:"This routine returns true if meshID of given dim is allocated",source:"@site/docs/docs-api/MeshSelection/IsMeshIDAllocated.md",sourceDirName:"MeshSelection",slug:"/MeshSelection/IsMeshIDAllocated",permalink:"/docs-api/MeshSelection/IsMeshIDAllocated",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/MeshSelection/IsMeshIDAllocated.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IsElemNumAllocated",permalink:"/docs-api/MeshSelection/IsElemNumAllocated"},next:{title:"IsNodeNumAllocated",permalink:"/docs-api/MeshSelection/IsNodeNumAllocated"}},l={},r=[{value:"Interface",id:"interface",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"ismeshidallocated",children:"IsMeshIDAllocated"}),"\n",(0,n.jsx)(t.p,{children:"This routine returns true if meshID of given dim is allocated"}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION isMeshIDAllocated(obj, dim) RESULT(Ans)\n    CLASS(MeshSelection_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: dim\n    LOGICAL(LGT) :: ans\n  END FUNCTION isMeshIDAllocated\nEND INTERFACE\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>c});var n=s(67294);const o={},i=n.createContext(o);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);