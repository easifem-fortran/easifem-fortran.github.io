"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[70041],{11857:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>t,toc:()=>h});var n=a(85893),c=a(11151);const l={author:"Vikas Sharma, Ph.D.",date:"18 Oct 2022",tags:["JacobiSpace1D","JacobiSpace1D_Pointer","JacobiSpace1D/GetRecurrenceCoeff","JacobiSpace1D/GetRecurrenceCoeff2","JacobiSpace1D/GetAlpha","JacobiSpace1D/GetBeta"]},i="JacobiSpace1D example 2",t={id:"JacobiSpace1D/JacobiSpace1D_test_2",title:"JacobiSpace1D example 2",description:"- This example shows how to  get the recurrence coefficients.",source:"@site/docs/docs-api/JacobiSpace1D/JacobiSpace1D_test_2.md",sourceDirName:"JacobiSpace1D",slug:"/JacobiSpace1D/JacobiSpace1D_test_2",permalink:"/docs-api/JacobiSpace1D/JacobiSpace1D_test_2",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/JacobiSpace1D/JacobiSpace1D_test_2.md",tags:[{label:"JacobiSpace1D",permalink:"/docs-api/tags/jacobi-space-1-d"},{label:"JacobiSpace1D_Pointer",permalink:"/docs-api/tags/jacobi-space-1-d-pointer"},{label:"JacobiSpace1D/GetRecurrenceCoeff",permalink:"/docs-api/tags/jacobi-space-1-d-get-recurrence-coeff"},{label:"JacobiSpace1D/GetRecurrenceCoeff2",permalink:"/docs-api/tags/jacobi-space-1-d-get-recurrence-coeff-2"},{label:"JacobiSpace1D/GetAlpha",permalink:"/docs-api/tags/jacobi-space-1-d-get-alpha"},{label:"JacobiSpace1D/GetBeta",permalink:"/docs-api/tags/jacobi-space-1-d-get-beta"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"18 Oct 2022",tags:["JacobiSpace1D","JacobiSpace1D_Pointer","JacobiSpace1D/GetRecurrenceCoeff","JacobiSpace1D/GetRecurrenceCoeff2","JacobiSpace1D/GetAlpha","JacobiSpace1D/GetBeta"]},sidebar:"tutorialSidebar",previous:{title:"JacobiSpace1D example 1",permalink:"/docs-api/JacobiSpace1D/JacobiSpace1D_test_1"},next:{title:"JacobiSpace1D example 3",permalink:"/docs-api/JacobiSpace1D/JacobiSpace1D_test_3"}},r={},h=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function d(s){const e={annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",p:"p",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"jacobispace1d-example-2",children:"JacobiSpace1D example 2"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"This example shows how to  get the recurrence coefficients."}),"\n",(0,n.jsx)(e.li,{children:"Following methods are tested."}),"\n",(0,n.jsx)(e.li,{children:"[[JacobiSpace1D_#GetRecurrenceCoeff]]"}),"\n",(0,n.jsx)(e.li,{children:"[[JacobiSpace1D_#GetRecurrenceCoeff2]]"}),"\n",(0,n.jsx)(e.li,{children:"[[JacobiSpace1D_#GetAlpha]]"}),"\n",(0,n.jsx)(e.li,{children:"[[JacobiSpace1D_#GetBeta]]"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"[[JacobiSpace1D_]]"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\nuse easifembase\nuse easifemclasses\nimplicit none\nclass(AbstractOrthopolSpace1D_), pointer :: aptr\nreal(dfp), allocatable :: coeff(:,:)\ninteger(i4b) :: n\n"})}),"\n",(0,n.jsxs)(e.p,{children:['!!! note "JacobiSpace1D_Pointer"\nConstruct an instance of ',(0,n.jsx)(e.code,{children:"JacobiSpace1D_"})," by specifying ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"\u03b1"}),(0,n.jsx)(e.mo,{children:">"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mn,{children:"1.0"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\alpha>-1.0"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.0037em"},children:"\u03b1"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:">"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mord",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mord",children:"1.0"})]})]})]})," and ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"\u03b2"}),(0,n.jsx)(e.mo,{children:">"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mn,{children:"1.0"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\beta>-1.0"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:">"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mord",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mord",children:"1.0"})]})]})]}),"."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"  aptr => JacobiSpace1D_Pointer(alpha=0.0_DFP, beta=0.0_DFP)\n"})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "GetRecurrenceCoeff"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  n = 10\n  coeff = aptr%GetRecurrenceCoeff(n=n)\n  call display(MdEncode(coeff), "coeff="//CHAR_LF)\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! example "result"\ncoeff='}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"\u03b1"}),(0,n.jsx)(e.mi,{children:"n"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\alpha_{n}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.0037em"},children:"\u03b1"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0037em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})}),(0,n.jsx)(e.th,{children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"\u03b2"}),(0,n.jsx)(e.mi,{children:"n"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\beta_{n}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0528em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"2"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0.33333"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0.26667"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0.25714"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0.25397"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0.25253"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0.25175"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0.25128"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0.25098"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0.25077"})]})]})]}),"\n",(0,n.jsx)(e.p,{children:'!!! note "GetRecurrenceCoeff2"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  n = 10\n  coeff = aptr%GetRecurrenceCoeff2(n=n)\n  call display(MdEncode(coeff), "coeff2="//CHAR_LF)\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! example "result"\ncoeff2='}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"n"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"a_{n}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})}),(0,n.jsx)(e.th,{children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"b"}),(0,n.jsx)(e.mi,{children:"n"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"b_{n}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8444em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"b"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})}),(0,n.jsx)(e.th,{children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mi,{children:"n"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"c_{n}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"-0"}),(0,n.jsx)(e.td,{children:"1.4142"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"1.5"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0.5"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"1.6667"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0.66667"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"1.75"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0.75"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"1.8"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0.8"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"1.8333"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0.83333"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"1.8571"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0.85714"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"1.875"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0.875"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"1.8889"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0.88889"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"1.9"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0.9"})]})]})]}),"\n",(0,n.jsx)(e.p,{children:'!!! note "GetAlpha"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  CALL Display(aptr%GetAlpha(n=2_I4B), "alpha_2=")\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "GetBeta"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  CALL Display(aptr%GetBeta(n=2_I4B), "beta_2=")\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "cleanup"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"  CALL aptr%Deallocate()\n  Deallocate(aptr)\n"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function m(s={}){const{wrapper:e}={...(0,c.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(d,{...s})}):d(s)}},11151:(s,e,a)=>{a.d(e,{Z:()=>t,a:()=>i});var n=a(67294);const c={},l=n.createContext(c);function i(s){const e=n.useContext(l);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(c):s.components||c:i(s.components),n.createElement(l.Provider,{value:e},s.children)}}}]);