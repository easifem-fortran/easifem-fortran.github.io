"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[14064],{14110:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>m,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>c});var n=a(85893),l=a(11151);const i={author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Monomial2D","Monomial2D/Grad"]},m="Monomial2D example 5",t={id:"Monomial2D/Monomial2D_test_5",title:"Monomial2D example 5",description:"This example shows the usage of [[Monomial2D_]] class. We test Grad method, which returns an monomial 2d object.",source:"@site/docs/docs-api/Monomial2D/Monomial2D_test_5.md",sourceDirName:"Monomial2D",slug:"/Monomial2D/Monomial2D_test_5",permalink:"/docs-api/Monomial2D/Monomial2D_test_5",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Monomial2D/Monomial2D_test_5.md",tags:[{label:"Monomial2D",permalink:"/docs-api/tags/monomial-2-d"},{label:"Monomial2D/Grad",permalink:"/docs-api/tags/monomial-2-d-grad"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Monomial2D","Monomial2D/Grad"]},sidebar:"tutorialSidebar",previous:{title:"Monomial2D example 4",permalink:"/docs-api/Monomial2D/Monomial2D_test_4"},next:{title:"Monomial2D example 6",permalink:"/docs-api/Monomial2D/Monomial2D_test_6"}},r={},c=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function h(s){const e={annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,l.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"monomial2d-example-5",children:"Monomial2D example 5"}),"\n",(0,n.jsxs)(e.p,{children:["This example shows the usage of [[Monomial2D_]] class. We test ",(0,n.jsx)(e.code,{children:"Grad"})," method, which returns an monomial 2d object."]}),"\n",(0,n.jsx)(e.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"[[Monomial2D_]]"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\nuse easifemBase\nuse easifemClasses\nimplicit none\ntype(Monomial2D_) :: ans, f1, f2, f3\ninteger(I4B) :: degree(2)\ncharacter(len=256) :: varname(2)\n"})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "Initiate"\nInitiate the object.'}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"f"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mi,{children:"y"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"f(x,y)=x^2 y"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0585em",verticalAlign:"-0.1944em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})]})]})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  f1=Monomial2D( 2, 1, "x", "y" )\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "Grad"\nEvaluating gradient'}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.mfrac,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"f"})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"x"})]})]}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{children:"y"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\frac{df}{dx} = 2xy"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"2.0574em",verticalAlign:"-0.686em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.3714em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"df"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.686em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})]})]})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  f2 = f1 .GRAD. 1\n  CALL f2%Display( "f1 .GRAD. 1 = ")\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! example "result"\nf1 .GRAD. 1 =x^1*y^1\nNote that [[Monomial2D_]] does not contains the coefficient.'}),"\n",(0,n.jsx)(e.p,{children:'!!! note "Grad"\nEvaluating gradient'}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.mfrac,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"f"})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"y"})]})]}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mn,{children:"2"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\frac{df}{dy} = x^2"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"2.2519em",verticalAlign:"-0.8804em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.3714em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"df"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8804em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8641em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]})]})]})]})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  f3 = f1 .GRAD. 2\n  CALL f3%Display( "f1 .GRAD. 2 = ")\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! example "result"\nf1 .GRAD. 2 =x^2*y^0\nNote that [[Monomial2D_]] does not contains the coefficient.'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(s={}){const{wrapper:e}={...(0,l.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},11151:(s,e,a)=>{a.d(e,{Z:()=>t,a:()=>m});var n=a(67294);const l={},i=n.createContext(l);function m(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:m(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);