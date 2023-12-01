"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[12268],{66033:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>P,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=s(85893),n=s(11151);const l={author:"Vikas Sharma, Ph.D.",date:"14 Aug 2022",tags:["PLPlot"]},o="PLPlot example 3",r={id:"PLPlot/PLPlot_test_3",title:"PLPlot example 3",description:"This example shows how to plot a graph by using [[PLPlot_]].",source:"@site/docs/docs-api/PLPlot/PLPlot_test_3.md",sourceDirName:"PLPlot",slug:"/PLPlot/PLPlot_test_3",permalink:"/docs-api/PLPlot/PLPlot_test_3",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/PLPlot/PLPlot_test_3.md",tags:[{label:"PLPlot",permalink:"/docs-api/tags/pl-plot"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"14 Aug 2022",tags:["PLPlot"]},sidebar:"tutorialSidebar",previous:{title:"PLPlot example 2",permalink:"/docs-api/PLPlot/PLPlot_test_2"},next:{title:"ParameterList",permalink:"/docs-api/ParameterList/"}},i={},c=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"plplot-example-3",children:"PLPlot example 3"}),"\n",(0,a.jsx)(t.p,{children:"This example shows how to plot a graph by using [[PLPlot_]]."}),"\n",(0,a.jsx)(t.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"[[PLPlot_]]"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.p,{children:"IMPORT modules and declare variables"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"PROGRAM main\n  use easifemBase\n  use easifemClasses\n  implicit none\n  real( DFP ), allocatable :: x( : ), y( : )\n  type( PLPlot_ ) :: obj\n"})}),"\n",(0,a.jsx)(t.p,{children:'!!! note ""\nPrepare data to be plotted.'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"  x = linspace( 0.0_DFP, 1.0_DFP, 101 )\n  y = x**2\n"})}),"\n",(0,a.jsx)(t.p,{children:'!!! note "svg"\nLinePlot method'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:'  CALL obj%LinePlot( x=x, y=y, filename="test_3.svg", &\n    &  )\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function P(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>o});var a=s(67294);const n={},l=a.createContext(n);function o(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);