"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[75933],{26814:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var t=r(85893),a=r(11151);const o={},i="\ud805\uddd5Measure_Simplex_Hexahedron",s={id:"ReferenceHexahedron/Measure_Simplex_Hexahedron",title:"\ud805\uddd5Measure_Simplex_Hexahedron",description:"This function returns the measure of linear hexahexron.",source:"@site/docs/docs-api/ReferenceHexahedron/Measure_Simplex_Hexahedron.md",sourceDirName:"ReferenceHexahedron",slug:"/ReferenceHexahedron/Measure_Simplex_Hexahedron",permalink:"/docs-api/ReferenceHexahedron/Measure_Simplex_Hexahedron",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/ReferenceHexahedron/Measure_Simplex_Hexahedron.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Initiate",permalink:"/docs-api/ReferenceHexahedron/Initiate"},next:{title:"ReferenceLine",permalink:"/docs-api/ReferenceLine/"}},c={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"measure_simplex_hexahedron",children:"\ud805\uddd5Measure_Simplex_Hexahedron"}),"\n",(0,t.jsx)(n.p,{children:"This function returns the measure of linear hexahexron."}),"\n",(0,t.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION Measure_Simplex_Hexahedron(refelem, xij) RESULT(Ans)\n    CLASS(ReferenceElement_), INTENT(IN) :: refelem\n    REAL(DFP), INTENT(IN) :: xij(:, :)\n    REAL(DFP) :: Ans\n  END FUNCTION Measure_Simplex_Hexahedron\nEND INTERFACE\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>i});var t=r(67294);const a={},o=t.createContext(a);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);