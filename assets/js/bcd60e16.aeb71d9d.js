"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[27170],{56527:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>t,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>r});var s=n(85893),l=n(11151);const o={author:"Vikas Sharma, Ph.D.",date:"26 July 2022",update:"17 Oct 2022",tags:["Monomial3D","Monomial3D/OPERATOR(*)"]},i="Monomial3D example 7",m={id:"Monomial3D/Monomial3D_test_7",title:"Monomial3D example 7",description:"- This example shows the usage of [[Monomial3D_]] class.",source:"@site/docs/docs-api/Monomial3D/Monomial3D_test_7.md",sourceDirName:"Monomial3D",slug:"/Monomial3D/Monomial3D_test_7",permalink:"/docs-api/Monomial3D/Monomial3D_test_7",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Monomial3D/Monomial3D_test_7.md",tags:[{label:"Monomial3D",permalink:"/docs-api/tags/monomial-3-d"},{label:"Monomial3D/OPERATOR(*)",permalink:"/docs-api/tags/monomial-3-d-operator"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"26 July 2022",update:"17 Oct 2022",tags:["Monomial3D","Monomial3D/OPERATOR(*)"]},sidebar:"tutorialSidebar",previous:{title:"Monomial3D example 6",permalink:"/docs-api/Monomial3D/Monomial3D_test_6"},next:{title:"Monomial3D example 6",permalink:"/docs-api/Monomial3D/Monomial3D_test_8"}},t={},r=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function c(a){const e={annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,l.a)(),...a.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"monomial3d-example-7",children:"Monomial3D example 7"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"This example shows the usage of [[Monomial3D_]] class."}),"\n",(0,s.jsxs)(e.li,{children:["Tests the ",(0,s.jsx)(e.code,{children:"*"})," operator"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"[[Monomial3D_]]"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-fortran",children:'PROGRAM main\nuse easifemBase\nuse easifemClasses\nimplicit none\ntype(Monomial3D_) :: obj, obj1, obj2\ninteger(I4B) :: n1, n2, n3\ncharacter(len=*), parameter :: varname1="x", varname2="y", varname3="z"\n'})}),"\n",(0,s.jsxs)(e.p,{children:['!!! note ""\nInitiate the object. ',(0,s.jsxs)(e.span,{className:"katex",children:[(0,s.jsx)(e.span,{className:"katex-mathml",children:(0,s.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(e.semantics,{children:[(0,s.jsxs)(e.mrow,{children:[(0,s.jsx)(e.mi,{children:"f"}),(0,s.jsx)(e.mo,{stretchy:"false",children:"("}),(0,s.jsx)(e.mi,{children:"x"}),(0,s.jsx)(e.mo,{separator:"true",children:","}),(0,s.jsx)(e.mi,{children:"y"}),(0,s.jsx)(e.mo,{separator:"true",children:","}),(0,s.jsx)(e.mi,{children:"z"}),(0,s.jsx)(e.mo,{stretchy:"false",children:")"}),(0,s.jsx)(e.mo,{children:"="}),(0,s.jsx)(e.mn,{children:"1"})]}),(0,s.jsx)(e.annotation,{encoding:"application/x-tex",children:"f(x,y,z)=1"})]})})}),(0,s.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,s.jsxs)(e.span,{className:"base",children:[(0,s.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,s.jsx)(e.span,{className:"mopen",children:"("}),(0,s.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,s.jsx)(e.span,{className:"mpunct",children:","}),(0,s.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,s.jsx)(e.span,{className:"mpunct",children:","}),(0,s.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,s.jsx)(e.span,{className:"mclose",children:")"}),(0,s.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.jsx)(e.span,{className:"mrel",children:"="}),(0,s.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,s.jsxs)(e.span,{className:"base",children:[(0,s.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,s.jsx)(e.span,{className:"mord",children:"1"})]})]})]})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-fortran",children:"  n1=1; n2=2; n3=3\n  obj1=Monomial3D( n1=n1, n2=n2, n3=n3, varname1=varname1, &\n    & varname2=varname2, varname3=varname3 )\n  call obj1%display( 'f1(x,y,z)=' )\n  !!\n  n1=4; n2=5; n3=6\n  obj2=Monomial3D( n1=n1, n2=n2, n3=n3, varname1=varname1, &\n    & varname2=varname2, varname3=varname3 )\n  call obj2%display( 'f2(x,y,z)=' )\n  !!\n  obj=obj1 * obj2\n  call obj%display( 'f(x,y,z)=' )\n"})}),"\n",(0,s.jsx)(e.p,{children:'!!! example "result"\nf(x,y,z)='}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(a={}){const{wrapper:e}={...(0,l.a)(),...a.components};return e?(0,s.jsx)(e,{...a,children:(0,s.jsx)(c,{...a})}):c(a)}},11151:(a,e,n)=>{n.d(e,{Z:()=>m,a:()=>i});var s=n(67294);const l={},o=s.createContext(l);function i(a){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function m(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(l):a.components||l:i(a.components),s.createElement(o.Provider,{value:e},a.children)}}}]);