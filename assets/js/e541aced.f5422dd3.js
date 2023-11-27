"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[13473],{80864:(s,a,e)=>{e.r(a),e.d(a,{assets:()=>m,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=e(85893),l=e(11151);const i={author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Monomial1D/EvalGradient","Monomial1D/Grad"]},t="Monomial1D example 4",r={id:"Monomial1D/Monomial1D_test_4",title:"Monomial1D example 4",description:"This example shows the usage of EvalGradient and Grad operator for [[Monomial1D_]] class.",source:"@site/docs/docs-api/Monomial1D/Monomial1D_test_4.md",sourceDirName:"Monomial1D",slug:"/Monomial1D/Monomial1D_test_4",permalink:"/docs-api/Monomial1D/Monomial1D_test_4",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Monomial1D/Monomial1D_test_4.md",tags:[{label:"Monomial1D/EvalGradient",permalink:"/docs-api/tags/monomial-1-d-eval-gradient"},{label:"Monomial1D/Grad",permalink:"/docs-api/tags/monomial-1-d-grad"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Monomial1D/EvalGradient","Monomial1D/Grad"]},sidebar:"tutorialSidebar",previous:{title:"Monomial1D example 3",permalink:"/docs-api/Monomial1D/Monomial1D_test_3"},next:{title:"Monomial1D example 5",permalink:"/docs-api/Monomial1D/Monomial1D_test_5"}},m={},c=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function o(s){const a={annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,l.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"monomial1d-example-4",children:"Monomial1D example 4"}),"\n",(0,n.jsxs)(a.p,{children:["This example shows the usage of ",(0,n.jsx)(a.code,{children:"EvalGradient"})," and ",(0,n.jsx)(a.code,{children:"Grad"})," operator for [[Monomial1D_]] class."]}),"\n",(0,n.jsx)(a.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"[[Monomial1D_]]"}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"PROGRAM main\nuse easifemBase\nuse easifemClasses\nimplicit none\ntype(Monomial1D_) :: y0, y1, y2, y3, ans\n"})}),"\n",(0,n.jsx)(a.p,{children:"Initiate the object."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"y"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mn,{children:"1"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"y=1"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"})]})]})]})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  y0=Monomial1D( degree=0_I4B, varname="x" )\n  CALL Display( y0%evalgradient( x=1.0_DFP ), "f(1)="  )\n'})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-txt",children:">result\nf(1)=0.00000\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"y"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mi,{children:"x"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"y=x"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"})]})]})]})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  y1=Monomial1D( degree=1_I4B, varname="x" )\n  CALL Display( y1%EvalGradient(1.0_DFP), "f(1)="  )\n'})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-txt",children:">result\nf(1)=1.00000\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"y"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsxs)(a.msup,{children:[(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mn,{children:"2"})]})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"y=x^{2}"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8141em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsx)(a.span,{className:"vlist-t",children:(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.8141em"},children:(0,n.jsxs)(a.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mtight",children:(0,n.jsx)(a.span,{className:"mord mtight",children:"2"})})})]})})})})})]})]})]})]})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  y2=Monomial1D( degree=2_I4B, varname="x" )\n  CALL Display( y2%EvalGradient(1.0_DFP), "f(1)="  )\n'})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-txt",children:">result\nf(1)=2.00000\n"})}),"\n",(0,n.jsx)(a.p,{children:"We can also get the gradient of the monomial"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  ans = y2%Grad()\n  CALL ans%display("grad of y2 f(x) = ")\n'})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-txt",children:">result\ngrad of y2 f(x) =x^1\n"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(s={}){const{wrapper:a}={...(0,l.a)(),...s.components};return a?(0,n.jsx)(a,{...s,children:(0,n.jsx)(o,{...s})}):o(s)}},11151:(s,a,e)=>{e.d(a,{Z:()=>r,a:()=>t});var n=e(67294);const l={},i=n.createContext(l);function t(s){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(a):{...a,...s}}),[a,s])}function r(s){let a;return a=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:t(s.components),n.createElement(i.Provider,{value:a},s.children)}}}]);