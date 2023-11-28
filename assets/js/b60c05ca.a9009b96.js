"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[66730],{74562:(s,a,e)=>{e.r(a),e.d(a,{assets:()=>r,contentTitle:()=>m,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>c});var n=e(85893),l=e(11151);const i={author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Monomial2D","Monomial2D/Eval","Monomial2D/EvalGradient"]},m="Monomial2D example 4",t={id:"Monomial2D/Monomial2D_test_4",title:"Monomial2D example 4",description:"This example shows the usage of [[Monomial2D_]] class. We test Eval and EvalGradient methods.",source:"@site/docs/docs-api/Monomial2D/Monomial2D_test_4.md",sourceDirName:"Monomial2D",slug:"/Monomial2D/Monomial2D_test_4",permalink:"/docs-api/Monomial2D/Monomial2D_test_4",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Monomial2D/Monomial2D_test_4.md",tags:[{label:"Monomial2D",permalink:"/docs-api/tags/monomial-2-d"},{label:"Monomial2D/Eval",permalink:"/docs-api/tags/monomial-2-d-eval"},{label:"Monomial2D/EvalGradient",permalink:"/docs-api/tags/monomial-2-d-eval-gradient"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Monomial2D","Monomial2D/Eval","Monomial2D/EvalGradient"]},sidebar:"tutorialSidebar",previous:{title:"Monomial2D example 3",permalink:"/docs-api/Monomial2D/Monomial2D_test_3"},next:{title:"Monomial2D example 5",permalink:"/docs-api/Monomial2D/Monomial2D_test_5"}},r={},c=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function d(s){const a={annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,l.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"monomial2d-example-4",children:"Monomial2D example 4"}),"\n",(0,n.jsxs)(a.p,{children:["This example shows the usage of [[Monomial2D_]] class. We test ",(0,n.jsx)(a.code,{children:"Eval"})," and ",(0,n.jsx)(a.code,{children:"EvalGradient"})," methods."]}),"\n",(0,n.jsx)(a.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"[[Monomial2D_]]"}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"PROGRAM main\nuse easifemBase\nuse easifemClasses\nimplicit none\ntype(Monomial2D_) :: ans, f1, f2, f3\ninteger(I4B) :: degree(2)\ncharacter(len=256) :: varname(2)\n"})}),"\n",(0,n.jsx)(a.p,{children:'!!! note "Initiate"\nInitiate the object.'}),"\n",(0,n.jsx)(a.span,{className:"katex-display",children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"f"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"y"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsxs)(a.msup,{children:[(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mn,{children:"2"})]}),(0,n.jsx)(a.mi,{children:"y"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"f(x,y)=x^2 y"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(a.span,{className:"mclose",children:")"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1.0585em",verticalAlign:"-0.1944em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsx)(a.span,{className:"vlist-t",children:(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.8641em"},children:(0,n.jsxs)(a.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})]})]})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  f1=Monomial2D( 2, 1, "x", "y" )\n'})}),"\n",(0,n.jsx)(a.p,{children:'!!! note "Eval"\nEvaluating values.'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  call display( f1%eval(1.0_DFP, 1.0_DFP), "f(1,1)=" )\n  call display( f1%eval(2.0_DFP, 3.0_DFP), "f(2,3)=" )\n'})}),"\n",(0,n.jsx)(a.p,{children:'!!! example "result"\nf(1,1)=1.00000\nf(2,3)=12.0000'}),"\n",(0,n.jsx)(a.p,{children:'!!! note "EvalGradient"\nEvaluating gradient'}),"\n",(0,n.jsx)(a.span,{className:"katex-display",children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsxs)(a.mfrac,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"d"}),(0,n.jsx)(a.mi,{children:"f"})]}),(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"d"}),(0,n.jsx)(a.mi,{children:"x"})]})]}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mn,{children:"2"}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mi,{children:"y"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\frac{df}{dx} = 2xy"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"2.0574em",verticalAlign:"-0.686em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(a.span,{className:"mfrac",children:(0,n.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(a.span,{className:"vlist-r",children:[(0,n.jsxs)(a.span,{className:"vlist",style:{height:"1.3714em"},children:[(0,n.jsxs)(a.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"})]})]}),(0,n.jsxs)(a.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(a.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(a.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(a.span,{className:"mord",children:(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"df"})})]})]}),(0,n.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.686em"},children:(0,n.jsx)(a.span,{})})})]})}),(0,n.jsx)(a.span,{className:"mclose nulldelimiter"})]}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord",children:"2"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})]})]})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  call display( f1%evalGradient(1.0_DFP, 1.0_DFP, dim=1_I4B), &\n    & "dfdx(1,1)=" )\n  call display( f1%evalGradient(2.0_DFP, 3.0_DFP, dim=1_I4B), &\n    & "dfdx(2,3)=" )\n'})}),"\n",(0,n.jsx)(a.p,{children:'!!! example "result"\ndfdx(1,1)=2.00000\ndfdx(2,3)=12.0000'}),"\n",(0,n.jsx)(a.p,{children:'!!! note "EvalGradient"\nEvaluating gradient'}),"\n",(0,n.jsx)(a.span,{className:"katex-display",children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsxs)(a.mfrac,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"d"}),(0,n.jsx)(a.mi,{children:"f"})]}),(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"d"}),(0,n.jsx)(a.mi,{children:"y"})]})]}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsxs)(a.msup,{children:[(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mn,{children:"2"})]})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\frac{df}{dy} = x^2"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"2.2519em",verticalAlign:"-0.8804em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(a.span,{className:"mfrac",children:(0,n.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(a.span,{className:"vlist-r",children:[(0,n.jsxs)(a.span,{className:"vlist",style:{height:"1.3714em"},children:[(0,n.jsxs)(a.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})]}),(0,n.jsxs)(a.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(a.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(a.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(a.span,{className:"mord",children:(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"df"})})]})]}),(0,n.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.8804em"},children:(0,n.jsx)(a.span,{})})})]})}),(0,n.jsx)(a.span,{className:"mclose nulldelimiter"})]}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8641em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsx)(a.span,{className:"vlist-t",children:(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.8641em"},children:(0,n.jsxs)(a.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mtight",children:"2"})})]})})})})})]})]})]})]})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  call display( f1%evalGradient(1.0_DFP, 1.0_DFP, dim=2_I4B), &\n    & "dfdy(1,1)=" )\n  call display( f1%evalGradient(2.0_DFP, 3.0_DFP, dim=2_I4B), &\n    & "dfdy(2,3)=" )\n'})}),"\n",(0,n.jsx)(a.p,{children:'!!! example "results"\ndfdy(1,1)=1.00000\ndfdy(2,3)=4.00000'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function h(s={}){const{wrapper:a}={...(0,l.a)(),...s.components};return a?(0,n.jsx)(a,{...s,children:(0,n.jsx)(d,{...s})}):d(s)}},11151:(s,a,e)=>{e.d(a,{Z:()=>t,a:()=>m});var n=e(67294);const l={},i=n.createContext(l);function m(s){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(a):{...a,...s}}),[a,s])}function t(s){let a;return a=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:m(s.components),n.createElement(i.Provider,{value:a},s.children)}}}]);