"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[73753],{84532:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>r});var l=n(85893),s=n(11151);const i={author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Jacobi1D"]},o="Jacobi1D example 12",t={id:"Jacobi1D/Jacobi1D_test_12",title:"Jacobi1D example 12",description:"This example shows the usage of [[Jacobi1D_]] class. We test orthonormal Jacobi polynomial  in this case.",source:"@site/docs/docs-api/Jacobi1D/Jacobi1D_test_12.md",sourceDirName:"Jacobi1D",slug:"/Jacobi1D/Jacobi1D_test_12",permalink:"/docs-api/Jacobi1D/Jacobi1D_test_12",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Jacobi1D/Jacobi1D_test_12.md",tags:[{label:"Jacobi1D",permalink:"/docs-api/tags/jacobi-1-d"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Jacobi1D"]},sidebar:"tutorialSidebar",previous:{title:"Jacobi1D example 11",permalink:"/docs-api/Jacobi1D/Jacobi1D_test_11"},next:{title:"Jacobi1D example 13",permalink:"/docs-api/Jacobi1D/Jacobi1D_test_13"}},c={},r=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2},{value:"n=1",id:"n1",level:3},{value:"n=2",id:"n2",level:3},{value:"n=3",id:"n3",level:3},{value:"n=4",id:"n4",level:3}];function d(a){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...a.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"jacobi1d-example-12",children:"Jacobi1D example 12"}),"\n",(0,l.jsx)(e.p,{children:"This example shows the usage of [[Jacobi1D_]] class. We test orthonormal Jacobi polynomial  in this case."}),"\n",(0,l.jsx)(e.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"[[Jacobi1D_]]"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\nuse easifemBase\nuse easifemClasses\nimplicit none\ntype(Jacobi1D_) :: obj\ntype(String) :: astr\ninteger(i4b) :: ii, n\nreal( dfp ), parameter :: alpha=0.0, beta=0.0\nlogical( lgt ), parameter :: isOrthonormal = .TRUE., isMonic=.FALSE.\n"})}),"\n",(0,l.jsx)(e.h3,{id:"n1",children:"n=1"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:'  n=1\n  obj = Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta, &\n    & isOrthonormal=isOrthonormal, isMonic=isMonic )\n  call Display( "J(n=1, alpha=0.0, beta=0.0) := " )\n  call obj%Display( "=>" )\n  call obj%Deallocate()\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-txt",children:">result\nJ(n=1, alpha=0.0, beta=0.0) :=\n=>J_1( x ) = ( x-.000 )* 1.000* J_0\n=>J_0( x ) = 1\n"})}),"\n",(0,l.jsx)(e.h3,{id:"n2",children:"n=2"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:'  n=2\n  call blanklines( nol=5 )\n  obj = Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta, &\n    & isOrthonormal=isOrthonormal, isMonic=isMonic)\n  call Display( "J(n=2, alpha=0.0, beta=0.0) := " )\n  call obj%Display( "=>" )\n  call obj%Deallocate()\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-txt",children:">result\nJ(n=2, alpha=0.0, beta=0.0) :=\n=>J_2( x ) = ( x-.000 )* 1.500* J_1( x ) - .333* 1.500* J_0( x )\n=>J_1( x ) = ( x-.000 )* 1.000* J_0\n=>J_0( x ) = 1\n"})}),"\n",(0,l.jsx)(e.h3,{id:"n3",children:"n=3"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:'  n=3\n  call blanklines( nol=5 )\n  obj = Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta, &\n    & isOrthonormal=isOrthonormal, isMonic=isMonic)\n  call Display( "J(n=3, alpha=0.0, beta=0.0) := " )\n  call obj%Display( "=>" )\n  call obj%Deallocate()\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-txt",children:">result\nJ(n=3, alpha=0.0, beta=0.0) :=\n=>J_3( x ) = ( x-.000 )* 1.667* J_2( x ) - .267* 2.500* J_1( x )\n=>J_2( x ) = ( x-.000 )* 1.500* J_1( x ) - .333* 1.500* J_0( x )\n=>J_1( x ) = ( x-.000 )* 1.000* J_0\n=>J_0( x ) = 1\n"})}),"\n",(0,l.jsx)(e.h3,{id:"n4",children:"n=4"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:'  n = 4\n  call blanklines( nol=5 )\n  obj = Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta, &\n    & isOrthonormal=isOrthonormal, isMonic=isMonic)\n  call Display( "J(n=4, alpha=0.0, beta=0.0) := " )\n  call obj%Display( "=>" )\n  call obj%Deallocate()\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-txt",children:">result\nJ(n=4, alpha=0.0, beta=0.0) :=\n=>J_4( x ) = ( x-.000 )* 1.750* J_3( x ) - .257* 2.917* J_2( x )\n=>J_3( x ) = ( x-.000 )* 1.667* J_2( x ) - .267* 2.500* J_1( x )\n=>J_2( x ) = ( x-.000 )* 1.500* J_1( x ) - .333* 1.500* J_0( x )\n=>J_1( x ) = ( x-.000 )* 1.000* J_0\n=>J_0( x ) = 1\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function h(a={}){const{wrapper:e}={...(0,s.a)(),...a.components};return e?(0,l.jsx)(e,{...a,children:(0,l.jsx)(d,{...a})}):d(a)}},11151:(a,e,n)=>{n.d(e,{Z:()=>t,a:()=>o});var l=n(67294);const s={},i=l.createContext(s);function o(a){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function t(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(s):a.components||s:o(a.components),l.createElement(i.Provider,{value:e},a.children)}}}]);