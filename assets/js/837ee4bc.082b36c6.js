"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[82077],{96213:(s,a,e)=>{e.r(a),e.d(a,{assets:()=>r,contentTitle:()=>i,default:()=>x,frontMatter:()=>m,metadata:()=>c,toc:()=>t});var n=e(85893),l=e(11151);const m={author:"Vikas Sharma, Ph.D.",date:"26 July 2022",update:"18 August 2022",tags:["Monomial2D"]},i="Monomial2D example 1",c={id:"Monomial2D/Monomial2D_test_1",title:"Monomial2D example 1",description:"This example shows the usage of [[Monomial2D_]] class.",source:"@site/docs/docs-api/Monomial2D/Monomial2D_test_1.md",sourceDirName:"Monomial2D",slug:"/Monomial2D/Monomial2D_test_1",permalink:"/docs-api/Monomial2D/Monomial2D_test_1",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Monomial2D/Monomial2D_test_1.md",tags:[{label:"Monomial2D",permalink:"/docs-api/tags/monomial-2-d"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"26 July 2022",update:"18 August 2022",tags:["Monomial2D"]},sidebar:"tutorialSidebar",previous:{title:"Monomial2D_",permalink:"/docs-api/Monomial2D/Monomial2D_"},next:{title:"Monomial2D example 1",permalink:"/docs-api/Monomial2D/Monomial2D_test_2"}},r={},t=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function h(s){const a={annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,l.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"monomial2d-example-1",children:"Monomial2D example 1"}),"\n",(0,n.jsx)(a.p,{children:"This example shows the usage of [[Monomial2D_]] class."}),"\n",(0,n.jsx)(a.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"[[Monomial2D_]]"}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"PROGRAM main\nuse easifemBase\nuse easifemClasses\nimplicit none\ntype(Monomial2D_) :: obj\n"})}),"\n",(0,n.jsx)(a.p,{children:"Initiate the object."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"f"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"y"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mn,{children:"1"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"f(x,y)=1"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(a.span,{className:"mclose",children:")"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"})]})]})]})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  obj=Monomial2D( n1=0, n2=0, name1="x", name2="y" )\n  call obj%display( \'f(x,y)=\' )\n'})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-txt",children:">result\nf(x,y)=x^0*y^0\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"f"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"y"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mi,{children:"x"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"f(x,y)=x"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(a.span,{className:"mclose",children:")"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"})]})]})]})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  obj=Monomial2D( n1=1, n2=0, name1="x", name2="y" )\n  call obj%display( \'f(x,y)=\' )\n'})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-txt",children:">result\nf(x,y)=x^1*y^0\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"f"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"y"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mi,{children:"y"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"f(x,y)=y"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(a.span,{className:"mclose",children:")"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})]})]})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  obj=Monomial2D( n1=0, n2=1, name1="x", name2="y" )\n  call obj%display( \'f(x,y)=\' )\n'})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-txt",children:">result\nf(x,y)=x^0*y^1\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"f"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"y"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mi,{children:"y"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"f(x,y)=xy"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(a.span,{className:"mclose",children:")"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})]})]})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  obj=Monomial2D( n1=1, n2=1, name1="x", name2="y" )\n  call obj%display( \'f(x,y)=\' )\n'})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-txt",children:">result\nf(x,y)=x^1*y^1\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"f"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"y"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsxs)(a.msup,{children:[(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mn,{children:"2"})]}),(0,n.jsx)(a.mo,{children:"\u2217"}),(0,n.jsx)(a.mi,{children:"y"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"f(x,y)=x^2*y"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(a.span,{className:"mclose",children:")"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8141em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsx)(a.span,{className:"vlist-t",children:(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.8141em"},children:(0,n.jsxs)(a.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})]})]})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  obj=Monomial2D( n1=2, n2=1, name1="x", name2="y" )\n  call obj%display( \'f(x,y)=\' )\n'})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-txt",children:">result\nf(x,y)=x^2*y^1\n"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function x(s={}){const{wrapper:a}={...(0,l.a)(),...s.components};return a?(0,n.jsx)(a,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},11151:(s,a,e)=>{e.d(a,{Z:()=>c,a:()=>i});var n=e(67294);const l={},m=n.createContext(l);function i(s){const a=n.useContext(m);return n.useMemo((function(){return"function"==typeof s?s(a):{...a,...s}}),[a,s])}function c(s){let a;return a=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:i(s.components),n.createElement(m.Provider,{value:a},s.children)}}}]);