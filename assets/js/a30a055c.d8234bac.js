"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[15889],{58266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=n(85893),o=n(11151);const r={},a="Point_Quality",s={id:"ReferencePoint/Point_Quality",title:"Point_Quality",description:"",source:"@site/docs/docs-api/ReferencePoint/Point_Quality.md",sourceDirName:"ReferencePoint",slug:"/ReferencePoint/Point_Quality",permalink:"/docs-api/ReferencePoint/Point_Quality",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/ReferencePoint/Point_Quality.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Measure_Simplex_Point",permalink:"/docs-api/ReferencePoint/Measure_Simplex_Point"},next:{title:"ReferencePrism",permalink:"/docs-api/ReferencePrism/"}},c={},u=[];function l(e){const t={code:"code",h1:"h1",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"point_quality",children:"Point_Quality"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-fortran",children:"MODULE FUNCTION Point_Quality( refelem, xij, measure ) RESULT( Ans )\n  CLASS( ReferencePoint_ ), INTENT( IN ) :: refelem\n  REAL( DFP ) , INTENT( IN ) :: xij(:,:)\n  INTEGER( I4B ), INTENT( IN ) :: measure\n  REAL( DFP ) :: Ans\nEND FUNCTION Point_Quality\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var i=n(67294);const o={},r=i.createContext(o);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);