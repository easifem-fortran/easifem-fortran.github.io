"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[39537],{68406:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(85893),a=t(11151);const i={title:"ChebyshevFirst1D example 3",author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["ChebyshevFirst1D"]},r="ChebyshevFirst1D example 3",l={id:"ChebyshevFirst1D/ChebyshevFirst1D_test_3",title:"ChebyshevFirst1D example 3",description:"This example shows the usage of [[ChebyshevFirst1D_]] class. We test Eval in this routine",source:"@site/docs/docs-api/ChebyshevFirst1D/ChebyshevFirst1D_test_3.md",sourceDirName:"ChebyshevFirst1D",slug:"/ChebyshevFirst1D/ChebyshevFirst1D_test_3",permalink:"/docs-api/ChebyshevFirst1D/ChebyshevFirst1D_test_3",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/ChebyshevFirst1D/ChebyshevFirst1D_test_3.md",tags:[{label:"ChebyshevFirst1D",permalink:"/docs-api/tags/chebyshev-first-1-d"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"ChebyshevFirst1D example 3",author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["ChebyshevFirst1D"]},sidebar:"tutorialSidebar",previous:{title:"ChebyshevFirst1D example 2",permalink:"/docs-api/ChebyshevFirst1D/ChebyshevFirst1D_test_2"},next:{title:"ChebyshevFirst1D example 4",permalink:"/docs-api/ChebyshevFirst1D/ChebyshevFirst1D_test_4"}},h={},c=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2},{value:"n=1",id:"n1",level:3},{value:"n=2",id:"n2",level:3},{value:"n=3",id:"n3",level:3},{value:"n=4",id:"n4",level:3}];function o(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"chebyshevfirst1d-example-3",children:"ChebyshevFirst1D example 3"}),"\n",(0,n.jsxs)(s.p,{children:["This example shows the usage of [[ChebyshevFirst1D_]] class. We test ",(0,n.jsx)(s.code,{children:"Eval"})," in this routine"]}),"\n",(0,n.jsx)(s.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"[[ChebyshevFirst1D_]]"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"PROGRAM main\nuse easifemBase\nuse easifemClasses\nimplicit none\ntype(ChebyshevFirst1D_) :: obj\ntype(String) :: astr\ninteger(i4b) :: ii\nreal( dfp ), allocatable :: x(:), yexact( : ), y( : )\nreal( dfp ), parameter :: tol=1.0E-10\n"})}),"\n",(0,n.jsx)(s.h3,{id:"n1",children:"n=1"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:'  x = linspace(-1.0_DFP, 1.0_DFP, 11_I4B)\n  yexact = x\n  obj = ChebyshevFirst1D(varname="x", n=1)\n  y = obj%Eval( x )\n  call OK( ALL(SOFTEQ(y, yexact, tol)), "test-1:" )\n'})}),"\n",(0,n.jsx)(s.h3,{id:"n2",children:"n=2"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:'  yexact = 2.0*x**2 - 1.0\n  obj = ChebyshevFirst1D(varname="x", n=2)\n  y = obj%Eval( x )\n  call OK( ALL(SOFTEQ(y, yexact, tol)), "test-2:" )\n'})}),"\n",(0,n.jsx)(s.h3,{id:"n3",children:"n=3"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:'  yexact = 4.0*x**3 - 3.0*x\n  obj = ChebyshevFirst1D(varname="x", n=3)\n  y = obj%Eval( x )\n  call OK( ALL(SOFTEQ(y, yexact, tol)), "test-3:" )\n'})}),"\n",(0,n.jsx)(s.h3,{id:"n4",children:"n=4"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:'  yexact = 8.0*x**4 - 8.0*x**2 + 1.0\n  obj = ChebyshevFirst1D(varname="x", n=4)\n  y = obj%Eval( x )\n  call OK( ALL(SOFTEQ(y, yexact, tol)), "test-4:" )\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>l,a:()=>r});var n=t(67294);const a={},i=n.createContext(a);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);