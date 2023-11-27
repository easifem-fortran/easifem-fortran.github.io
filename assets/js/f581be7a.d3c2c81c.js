"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[1522],{91300:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>h,toc:()=>d});var t=a(85893),n=a(11151);const r={title:"ChebyshevFirst1D example 8",author:"Vikas Sharma, Ph.D.",date:"02 Aug 2022",tags:["ChebyshevFirst1D/Initiate","ChebyshevFirst1D/Display","ChebyshevFirst1D/GaussRadauQuadrature"]},i="ChebyshevFirst1D example 8",h={id:"ChebyshevFirst1D/ChebyshevFirst1D_test_8",title:"ChebyshevFirst1D example 8",description:"This example shows the usage of [[ChebyshevFirst1D_]] class. We test GaussRadauQuadrature function in this routine, which returns the GaussRadauQuadrature points for Chebyshev1 polynomial.",source:"@site/docs/docs-api/ChebyshevFirst1D/ChebyshevFirst1D_test_8.md",sourceDirName:"ChebyshevFirst1D",slug:"/ChebyshevFirst1D/ChebyshevFirst1D_test_8",permalink:"/docs-api/ChebyshevFirst1D/ChebyshevFirst1D_test_8",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/ChebyshevFirst1D/ChebyshevFirst1D_test_8.md",tags:[{label:"ChebyshevFirst1D/Initiate",permalink:"/docs-api/tags/chebyshev-first-1-d-initiate"},{label:"ChebyshevFirst1D/Display",permalink:"/docs-api/tags/chebyshev-first-1-d-display"},{label:"ChebyshevFirst1D/GaussRadauQuadrature",permalink:"/docs-api/tags/chebyshev-first-1-d-gauss-radau-quadrature"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"ChebyshevFirst1D example 8",author:"Vikas Sharma, Ph.D.",date:"02 Aug 2022",tags:["ChebyshevFirst1D/Initiate","ChebyshevFirst1D/Display","ChebyshevFirst1D/GaussRadauQuadrature"]},sidebar:"tutorialSidebar",previous:{title:"ChebyshevFirst1D example 7",permalink:"/docs-api/ChebyshevFirst1D/ChebyshevFirst1D_test_7"},next:{title:"ChebyshevFirst1D example 9",permalink:"/docs-api/ChebyshevFirst1D/ChebyshevFirst1D_test_9"}},l={},d=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2},{value:"n=1",id:"n1",level:3},{value:"n=2",id:"n2",level:3},{value:"n=3",id:"n3",level:3},{value:"n=4",id:"n4",level:3}];function o(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"chebyshevfirst1d-example-8",children:"ChebyshevFirst1D example 8"}),"\n",(0,t.jsxs)(s.p,{children:["This example shows the usage of [[ChebyshevFirst1D_]] class. We test ",(0,t.jsx)(s.code,{children:"GaussRadauQuadrature"})," function in this routine, which returns the GaussRadauQuadrature points for Chebyshev1 polynomial."]}),"\n",(0,t.jsx)(s.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"[[ChebyshevFirst1D_]]"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-fortran",children:"PROGRAM main\nuse easifemBase\nuse easifemClasses\nimplicit none\ntype(ChebyshevFirst1D_) :: obj\nreal( dfp ), allocatable :: x( :, : )\ninteger( i4b ) :: n\nreal( dfp ), parameter :: a = -1.0_DFP\n"})}),"\n",(0,t.jsx)(s.h3,{id:"n1",children:"n=1"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-fortran",children:'  n = 1\n  obj=ChebyshevFirst1D(varname="x", n=n)\n  x = obj%GaussRadauQuadrature(a)\n  call display( x, "pt | wt for n="//tostring(n) )\n'})}),"\n",(0,t.jsx)(s.h3,{id:"n2",children:"n=2"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-fortran",children:'  n = 2\n  obj=ChebyshevFirst1D(varname="x", n=n)\n  x = obj%GaussRadauQuadrature(a)\n  call display( x, "pt | wt for n="//tostring(n) )\n'})}),"\n",(0,t.jsx)(s.h3,{id:"n3",children:"n=3"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-fortran",children:'  n = 3\n  obj=ChebyshevFirst1D(varname="x", n=n)\n  x = obj%GaussRadauQuadrature(a)\n  call display( x, "pt | wt for n="//tostring(n) )\n'})}),"\n",(0,t.jsx)(s.h3,{id:"n4",children:"n=4"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-fortran",children:'  n = 4\n  obj=ChebyshevFirst1D(varname="x", n=n)\n  x = obj%GaussRadauQuadrature(a)\n  call display( x, "pt | wt for n="//tostring(n) )\n'})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function u(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},11151:(e,s,a)=>{a.d(s,{Z:()=>h,a:()=>i});var t=a(67294);const n={},r=t.createContext(n);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);