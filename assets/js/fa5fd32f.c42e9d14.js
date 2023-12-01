"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[99696],{74035:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>m});var s=t(85893),i=t(11151);const l={},o="GetElemNum",r={id:"MeshSelection/GetElemNum",title:"GetElemNum",description:"This method returns the element numbers stored inside the mesh selection instance.",source:"@site/docs/docs-api/MeshSelection/GetElemNum.md",sourceDirName:"MeshSelection",slug:"/MeshSelection/GetElemNum",permalink:"/docs-api/MeshSelection/GetElemNum",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/MeshSelection/GetElemNum.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Export",permalink:"/docs-api/MeshSelection/Export"},next:{title:"GetMeshID",permalink:"/docs-api/MeshSelection/GetMeshID"}},c={},m=[{value:"Interface",id:"interface",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"getelemnum",children:"GetElemNum"}),"\n",(0,s.jsx)(n.p,{children:"This method returns the element numbers stored inside the mesh selection instance."}),"\n",(0,s.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsxs)(n.p,{children:["The following interface returns element number if ",(0,s.jsx)(n.code,{children:"isSelectionByElemNum"})," is true."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION meshSelect_getElemNum1(obj, dim) RESULT(Ans)\n    CLASS(MeshSelection_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: dim\n    INTEGER(I4B), ALLOCATABLE :: ans(:)\n  END FUNCTION meshSelect_getElemNum1\nEND INTERFACE\n"})}),"\n",(0,s.jsx)(n.p,{children:"The following interface returns element number when"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"isSelectionByElemNum"})," is true"]}),"\n",(0,s.jsxs)(n.li,{children:["or when ",(0,s.jsx)(n.code,{children:"isSelectionByMeshID"})," is true"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"TODO"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"isSelectionByNodeNum"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"isSelectionByBox"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION meshSelect_getElemNum2(obj, dim, domain) RESULT(Ans)\n    CLASS(MeshSelection_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: dim\n    CLASS(Domain_), INTENT(IN) :: domain\n    INTEGER(I4B), ALLOCATABLE :: ans(:)\n  END FUNCTION meshSelect_getElemNum2\nEND INTERFACE\n"})}),"\n",(0,s.jsx)(n.p,{children:"The following interface returns element of all dimensions."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION meshSelect_getElemNum3(obj) RESULT(Ans)\n    CLASS(MeshSelection_), INTENT(IN) :: obj\n    INTEGER(I4B), ALLOCATABLE :: ans(:)\n  END FUNCTION meshSelect_getElemNum3\nEND INTERFACE\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION meshSelect_getElemNum4(obj, domain) RESULT(Ans)\n    CLASS(MeshSelection_), INTENT(IN) :: obj\n    CLASS(Domain_), INTENT(IN) :: domain\n    INTEGER(I4B), ALLOCATABLE :: ans(:)\n  END FUNCTION meshSelect_getElemNum4\nEND INTERFACE\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var s=t(67294);const i={},l=s.createContext(i);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);