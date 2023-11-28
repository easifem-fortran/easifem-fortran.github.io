"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[38925],{53883:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(85893),r=t(11151);const o={},a="Size",s={id:"QuadraturePoint/Size",title:"Size",description:"Returns the size of obj%Points",source:"@site/docs/docs-api/QuadraturePoint/Size.md",sourceDirName:"QuadraturePoint",slug:"/QuadraturePoint/Size",permalink:"/docs-api/QuadraturePoint/Size",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/QuadraturePoint/Size.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Outerprod",permalink:"/docs-api/QuadraturePoint/Outerprod"},next:{title:"Rank2Tensor",permalink:"/docs-api/Rank2Tensor/"}},d={},c=[{value:"Interface",id:"interface",level:2}];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"size",children:"Size"}),"\n",(0,i.jsxs)(n.p,{children:["Returns the size of ",(0,i.jsx)(n.code,{children:"obj%Points"})]}),"\n",(0,i.jsx)(n.p,{children:"Calling example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"a = SIZE(obj, 1)\nb = SIZE(obj,2)\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Total number of quadrature points are give by ",(0,i.jsx)(n.code,{children:"SIZE(quad, 2)"})]}),"\n",(0,i.jsxs)(n.li,{children:["The weights are kept in the last row, that is ",(0,i.jsx)(n.code,{children:"SIZE(quad,1)"})]}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"MODULE PURE FUNCTION Size( obj, dims ) RESULT( Ans )\n  CLASS( QuadraturePoint_ ), INTENT( IN ) :: obj\n  INTEGER( I4B ), INTENT( IN ) :: dims\n  INTEGER( I4B ) :: Ans\nEND FUNCTION Size\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var i=t(67294);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);