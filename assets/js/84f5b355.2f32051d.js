"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[18682],{19134:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>m,toc:()=>c});var n=a(85893),l=a(11151);const i={author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Monomial1D"]},t="Monomial1D example 1",m={id:"Monomial1D/Monomial1D_test_1",title:"Monomial1D example 1",description:"This example shows the usage of [[Monomial1D_]] class.",source:"@site/docs/docs-api/Monomial1D/Monomial1D_test_1.md",sourceDirName:"Monomial1D",slug:"/Monomial1D/Monomial1D_test_1",permalink:"/docs-api/Monomial1D/Monomial1D_test_1",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Monomial1D/Monomial1D_test_1.md",tags:[{label:"Monomial1D",permalink:"/docs-api/tags/monomial-1-d"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Monomial1D"]},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/Monomial1D/Monomial1D_"},next:{title:"Monomial1D example 2",permalink:"/docs-api/Monomial1D/Monomial1D_test_2"}},r={},c=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function o(s){const e={annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,l.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"monomial1d-example-1",children:"Monomial1D example 1"}),"\n",(0,n.jsx)(e.p,{children:"This example shows the usage of [[Monomial1D_]] class."}),"\n",(0,n.jsx)(e.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"[[Monomial1D_]]"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\nuse easifemBase\nuse easifemClasses\nimplicit none\ntype(Monomial1D_) :: obj\n"})}),"\n",(0,n.jsx)(e.p,{children:"Initiate the object."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"y=1"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"})]})]})]})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"  obj=Monomial1D( degree=0_I4B, varname=\"x\" )\n  call obj%display( 'f(x)=' )\n"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-txt",children:">result\nf(x)=x^0\n"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:"x"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"y=x"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})]})]})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"  obj=Monomial1D( degree=1_I4B, varname=\"x\" )\n  call obj%display( 'f(x)=' )\n"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-txt",children:">result\nf(x)=x^1\n"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mn,{children:"2"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"y=x^2"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]})]})]})]})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"  obj=Monomial1D( degree=2_I4B, varname=\"x\" )\n  call obj%display( 'f(x)=' )\n"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-txt",children:">result\nf(x)=x^2\n"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function h(s={}){const{wrapper:e}={...(0,l.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(o,{...s})}):o(s)}},11151:(s,e,a)=>{a.d(e,{Z:()=>m,a:()=>t});var n=a(67294);const l={},i=n.createContext(l);function t(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function m(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:t(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);