"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[43997],{77414:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>a});var o=t(85893),l=t(11151);const r={},i="ElementTopology",s={id:"ReferenceElement/ElementTopology",title:"ElementTopology",description:"This routine returns the topology of the reference element",source:"@site/docs/docs-api/ReferenceElement/ElementTopology.md",sourceDirName:"ReferenceElement",slug:"/ReferenceElement/ElementTopology",permalink:"/docs-api/ReferenceElement/ElementTopology",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/ReferenceElement/ElementTopology.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ElementQuality",permalink:"/docs-api/ReferenceElement/ElementQuality"},next:{title:"ElementType",permalink:"/docs-api/ReferenceElement/ElementType"}},c={},a=[];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"elementtopology",children:"ElementTopology"}),"\n",(0,o.jsx)(n.p,{children:"This routine returns the topology of the reference element"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Line"}),"\n",(0,o.jsx)(n.li,{children:"Triangle"}),"\n",(0,o.jsx)(n.li,{children:"Quadrangle"}),"\n",(0,o.jsx)(n.li,{children:"Tetrahedron"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:"  MODULE PURE FUNCTION refelem_ElementTopology1(ElemType) RESULT(Ans)\n    INTEGER(I4B), INTENT(IN) :: ElemType\n    INTEGER(I4B) :: Ans\n  END FUNCTION refelem_ElementTopology1\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:"  MODULE PURE FUNCTION refelem_ElementTopology2(obj) RESULT(Ans)\n    CLASS(ReferenceElement_), INTENT(IN) :: obj\n    INTEGER(I4B) :: Ans\n  END FUNCTION refelem_ElementTopology2\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"OPERATOR(.topology.) is an alias to ElementTopology."})})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var o=t(67294);const l={},r=o.createContext(l);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);