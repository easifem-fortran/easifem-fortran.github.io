"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[74998],{27247:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>o,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>r});var n=a(85893),l=a(11151);const i={author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Monomial2D"]},t="Monomial2D example 3",m={id:"Monomial2D/Monomial2D_test_3",title:"Monomial2D example 3",description:"This example shows the usage of [[Monomial2D_]] class. We test * operator. We can only multiply a monomial with another monomial.",source:"@site/docs/docs-api/Monomial2D/Monomial2D_test_3.md",sourceDirName:"Monomial2D",slug:"/Monomial2D/Monomial2D_test_3",permalink:"/docs-api/Monomial2D/Monomial2D_test_3",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Monomial2D/Monomial2D_test_3.md",tags:[{label:"Monomial2D",permalink:"/docs-api/tags/monomial-2-d"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Monomial2D"]},sidebar:"tutorialSidebar",previous:{title:"Monomial2D example 1",permalink:"/docs-api/Monomial2D/Monomial2D_test_2"},next:{title:"Monomial2D example 4",permalink:"/docs-api/Monomial2D/Monomial2D_test_4"}},o={},r=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function c(e){const s={annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"monomial2d-example-3",children:"Monomial2D example 3"}),"\n",(0,n.jsxs)(s.p,{children:["This example shows the usage of [[Monomial2D_]] class. We test ",(0,n.jsx)(s.code,{children:"*"})," operator. We can only multiply a monomial with another monomial."]}),"\n",(0,n.jsx)(s.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"[[Monomial2D_]]"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"PROGRAM main\nuse easifemBase\nuse easifemClasses\nimplicit none\ntype(Monomial2D_) :: ans, f1, f2, f3\n"})}),"\n",(0,n.jsxs)(s.p,{children:['!!! note "Initiate"\nInitiate an instance of [[Monomial2D_]]\n',(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"f"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"x"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mi,{children:"y"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"}),(0,n.jsx)(s.mo,{children:"="}),(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mi,{children:"x"}),(0,n.jsx)(s.mn,{children:"2"})]}),(0,n.jsx)(s.mi,{children:"y"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"f(x,y)=x^2 y"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(s.span,{className:"mclose",children:")"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(s.span,{className:"mrel",children:"="}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1.0085em",verticalAlign:"-0.1944em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})]})]})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:'  f1=Monomial2D( n1=2, n2=1, name1="x", name2="y" )\n  call f1%display( "f(x,y)=" )\n'})}),"\n",(0,n.jsx)(s.p,{children:'!!! note "f2=f1*f1"\nWe can multiply two instance of [[Monomial2D_]] to get another\ninstance.'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"  f2 = f1 * f1\n  call f2%display( 'f(x,y)=' )\n"})}),"\n",(0,n.jsx)(s.p,{children:'!!! example "results"\nf(x,y)=x^4*y^2'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,s,a)=>{a.d(s,{Z:()=>m,a:()=>t});var n=a(67294);const l={},i=n.createContext(l);function t(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function m(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);