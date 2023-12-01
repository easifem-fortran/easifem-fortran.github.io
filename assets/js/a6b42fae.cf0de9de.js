"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[82203],{19611:(s,a,e)=>{e.r(a),e.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>m,metadata:()=>r,toc:()=>t});var n=e(85893),l=e(11151);const m={author:"Vikas Sharma, Ph.D.",date:"26 July 2022",update:"18 Aug 2022",tags:["Monomial3D","Monomial3D/Display"]},i="Monomial3D example 1",r={id:"Monomial3D/Monomial3D_test_1",title:"Monomial3D example 1",description:"This example shows the usage of [[Monomial3D_]] class.",source:"@site/docs/docs-api/Monomial3D/Monomial3D_test_1.md",sourceDirName:"Monomial3D",slug:"/Monomial3D/Monomial3D_test_1",permalink:"/docs-api/Monomial3D/Monomial3D_test_1",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Monomial3D/Monomial3D_test_1.md",tags:[{label:"Monomial3D",permalink:"/docs-api/tags/monomial-3-d"},{label:"Monomial3D/Display",permalink:"/docs-api/tags/monomial-3-d-display"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"26 July 2022",update:"18 Aug 2022",tags:["Monomial3D","Monomial3D/Display"]},sidebar:"tutorialSidebar",previous:{title:"Monomial3D_",permalink:"/docs-api/Monomial3D/Monomial3D_"},next:{title:"Monomial3D example 2",permalink:"/docs-api/Monomial3D/Monomial3D_test_2"}},c={},t=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function h(s){const a={annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,l.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"monomial3d-example-1",children:"Monomial3D example 1"}),"\n",(0,n.jsx)(a.p,{children:"This example shows the usage of [[Monomial3D_]] class."}),"\n",(0,n.jsx)(a.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"[[Monomial3D_]]"}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'PROGRAM main\nuse easifemBase\nuse easifemClasses\nimplicit none\ntype(Monomial3D_) :: obj\ninteger(I4B) :: n1, n2, n3\ncharacter(len=*), parameter :: varname1="x", varname2="y", varname3="z"\n'})}),"\n",(0,n.jsxs)(a.p,{children:['!!! note ""\nInitiate the object. ',(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"f"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"y"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"z"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mn,{children:"1"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"f(x,y,z)=1"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,n.jsx)(a.span,{className:"mclose",children:")"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"})]})]})]})]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"  n1=0; n2=0; n3=0\n  obj=Monomial3D( n1=n1, n2=n2, n3=n3, varname1=varname1, &\n    & varname2=varname2, varname3=varname3 )\n  call obj%display( 'f(x,y,z)=' )\n"})}),"\n",(0,n.jsx)(a.p,{children:'!!! example "result"\nf(x,y,z)='}),"\n",(0,n.jsx)(a.p,{children:'!!! note ""'}),"\n",(0,n.jsx)(a.span,{className:"katex-display",children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"f"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"y"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"z"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsxs)(a.msup,{children:[(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mn,{children:"1"})]})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"f(x,y,z)=x^1"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,n.jsx)(a.span,{className:"mclose",children:")"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8641em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsx)(a.span,{className:"vlist-t",children:(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.8641em"},children:(0,n.jsxs)(a.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mtight",children:"1"})})]})})})})})]})]})]})]})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"  n1=1; n2=0; n3=0\n  obj=Monomial3D( n1=n1, n2=n2, n3=n3, varname1=varname1, &\n    & varname2=varname2, varname3=varname3 )\n  call obj%display( 'f(x,y,z)=' )\n"})}),"\n",(0,n.jsx)(a.p,{children:'!!! example "result"\nf(x,y,z)=x^1'}),"\n",(0,n.jsx)(a.p,{children:'!!! note ""'}),"\n",(0,n.jsx)(a.span,{className:"katex-display",children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"f"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"y"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"z"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsxs)(a.msup,{children:[(0,n.jsx)(a.mi,{children:"y"}),(0,n.jsx)(a.mn,{children:"1"})]})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"f(x,y,z)=y^1"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,n.jsx)(a.span,{className:"mclose",children:")"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1.0585em",verticalAlign:"-0.1944em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsx)(a.span,{className:"vlist-t",children:(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.8641em"},children:(0,n.jsxs)(a.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mtight",children:"1"})})]})})})})})]})]})]})]})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"  n1=0; n2=1; n3=0\n  obj=Monomial3D( n1=n1, n2=n2, n3=n3, varname1=varname1, &\n    & varname2=varname2, varname3=varname3 )\n  call obj%display( 'f(x,y,z)=' )\n"})}),"\n",(0,n.jsx)(a.p,{children:'!!! example "result"\nf(x,y,z)=y^1'}),"\n",(0,n.jsx)(a.p,{children:'!!! note ""'}),"\n",(0,n.jsx)(a.span,{className:"katex-display",children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"f"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"y"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"z"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mi,{children:"y"}),(0,n.jsx)(a.mi,{children:"z"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"f(x,y,z)=xyz"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,n.jsx)(a.span,{className:"mclose",children:")"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"yz"})]})]})]})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"  n1=1; n2=1; n3=1\n  obj=Monomial3D( n1=n1, n2=n2, n3=n3, varname1=varname1, &\n    & varname2=varname2, varname3=varname3 )\n  call obj%display( 'f(x,y,z)=' )\n"})}),"\n",(0,n.jsx)(a.p,{children:'!!! example "result"\nf(x,y,z)=x^1 y^1 z^1'}),"\n",(0,n.jsx)(a.p,{children:'!!! note ""'}),"\n",(0,n.jsx)(a.span,{className:"katex-display",children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"f"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"y"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsxs)(a.msup,{children:[(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mn,{children:"2"})]}),(0,n.jsx)(a.mi,{children:"y"}),(0,n.jsx)(a.mi,{children:"z"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"f(x,y)=x^2 y z"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(a.span,{className:"mclose",children:")"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1.0585em",verticalAlign:"-0.1944em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsx)(a.span,{className:"vlist-t",children:(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.8641em"},children:(0,n.jsxs)(a.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"yz"})]})]})]})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"  n1=2; n2=1; n3=1\n  obj=Monomial3D( n1=n1, n2=n2, n3=n3, varname1=varname1, &\n    & varname2=varname2, varname3=varname3 )\n  call obj%display( 'f(x,y,z)=' )\n"})}),"\n",(0,n.jsx)(a.p,{children:'!!! example "result"\nf(x,y,z)=x^2 y^1 z^1'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(s={}){const{wrapper:a}={...(0,l.a)(),...s.components};return a?(0,n.jsx)(a,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},11151:(s,a,e)=>{e.d(a,{Z:()=>r,a:()=>i});var n=e(67294);const l={},m=n.createContext(l);function i(s){const a=n.useContext(m);return n.useMemo((function(){return"function"==typeof s?s(a):{...a,...s}}),[a,s])}function r(s){let a;return a=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:i(s.components),n.createElement(m.Provider,{value:a},s.children)}}}]);