"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[69245],{2736:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>h,metadata:()=>p,toc:()=>x});var n=a(85893),l=a(11151),t=a(74866),r=a(85162);function i(e){const s={code:"code",pre:"pre",...(0,l.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:'program main\nuse easifembase\nimplicit none\n\nreal(dfp), allocatable :: alphacoeff(:)\nreal(dfp), allocatable :: betacoeff(:)\ninteger(i4b) :: n\n\nn = 5; call reallocate(alphacoeff, n, betacoeff, n)\n\ncall GetJacobiRecurrenceCoeff(n=n, &\n& alpha=0.0_DFP, beta=0.0_DFP, &\n& alphacoeff=alphacoeff, betacoeff=betacoeff)\n\ncall display( alphacoeff .colconcat. betacoeff, "ans = ")\n\nend program main\n'})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsx)("div",{children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-txt",metastring:'title="results"',children:"     ans =      \n----------------\n0.00000  2.00000\n0.00000  0.33333\n0.00000  0.26667\n0.00000  0.25714\n0.00000  0.25397\n"})})})]})]})}function c(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}function m(e){const s={code:"code",pre:"pre",...(0,l.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:'program main\nuse easifembase\nimplicit none\n\nreal(dfp), allocatable :: A(:)\nreal(dfp), allocatable :: B(:)\nreal(dfp), allocatable :: C(:)\ninteger(i4b) :: n\n\nn = 5; call reallocate(A, n, B, n, C, n)\n\ncall GetJacobiRecurrenceCoeff2(n=n, &\n& alpha=0.0_DFP, beta=0.0_DFP, &\n& A=A, B=B, C=C)\n\ncall display( A .colconcat. B .colconcat. C, "ans = ")\n\nend program main\n'})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsx)("div",{children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-txt",metastring:'title="results"',children:"          ans =          \n-------------------------\n1.00000  -.00000  1.41421\n1.50000  0.00000  0.50000\n1.66667  0.00000  0.66667\n1.75000  0.00000  0.75000\n1.80000  0.00000  0.80000\n"})})})]})]})}function o(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}const h={},d="GetJacobiRecurrenceCoeff",p={id:"JacobiPolynomialUtility/GetJacobiRecurrenceCoeff",title:"GetJacobiRecurrenceCoeff",description:"Recurrence coefficients are for monic and nonmonic jacobi polynomials.",source:"@site/docs/docs-api/JacobiPolynomialUtility/GetJacobiRecurrenceCoeff.md",sourceDirName:"JacobiPolynomialUtility",slug:"/JacobiPolynomialUtility/GetJacobiRecurrenceCoeff",permalink:"/docs-api/JacobiPolynomialUtility/GetJacobiRecurrenceCoeff",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/JacobiPolynomialUtility/GetJacobiRecurrenceCoeff.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Jacobi",permalink:"/docs-api/JacobiPolynomialUtility/"},next:{title:"JacobiAlpha",permalink:"/docs-api/JacobiPolynomialUtility/JacobiAlpha"}},u={},x=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2}];function j(e){const s={annotation:"annotation",code:"code",h1:"h1",h2:"h2",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",mspace:"mspace",msub:"msub",msubsup:"msubsup",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"getjacobirecurrencecoeff",children:"GetJacobiRecurrenceCoeff"}),"\n",(0,n.jsx)(s.p,{children:"Recurrence coefficients are for monic and nonmonic jacobi polynomials."}),"\n","\n","\n",(0,n.jsx)(s.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,n.jsx)(s.p,{children:"Monic polynomials"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE GetJacobiRecurrenceCoeff(n, alpha, beta, &\n    & alphaCoeff, betaCoeff)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of jacobi polynomial, it should be greater than 1\n    REAL(DFP), INTENT(IN) :: alpha\n    REAL(DFP), INTENT(IN) :: beta\n    REAL(DFP), INTENT(OUT) :: alphaCoeff(0:n - 1)\n    REAL(DFP), INTENT(OUT) :: betaCoeff(0:n - 1)\n  END SUBROUTINE GetJacobiRecurrenceCoeff\nEND INTERFACE\n"})}),"\n",(0,n.jsxs)(t.Z,{children:[(0,n.jsx)(r.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,n.jsx)(c,{})}),(0,n.jsx)(r.Z,{value:"close",label:"\u21a2 ",default:!0})]}),"\n",(0,n.jsx)(s.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,n.jsx)(s.p,{children:"These recurrence coefficients are for non-monic jacobi polynomials."}),"\n",(0,n.jsx)(s.span,{className:"katex-display",children:(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsxs)(s.msubsup,{children:[(0,n.jsx)(s.mi,{children:"P"}),(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"n"}),(0,n.jsx)(s.mo,{children:"+"}),(0,n.jsx)(s.mn,{children:"1"})]}),(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"\u03b1"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mi,{children:"\u03b2"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]})]}),(0,n.jsx)(s.mo,{children:"="}),(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mo,{fence:"true",children:"("}),(0,n.jsxs)(s.msub,{children:[(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mi,{children:"n"})]}),(0,n.jsx)(s.mi,{children:"x"}),(0,n.jsx)(s.mo,{children:"+"}),(0,n.jsxs)(s.msub,{children:[(0,n.jsx)(s.mi,{children:"b"}),(0,n.jsx)(s.mi,{children:"n"})]}),(0,n.jsx)(s.mo,{fence:"true",children:")"})]}),(0,n.jsxs)(s.msubsup,{children:[(0,n.jsx)(s.mi,{children:"P"}),(0,n.jsx)(s.mi,{children:"n"}),(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"\u03b1"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mi,{children:"\u03b2"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]})]}),(0,n.jsx)(s.mo,{children:"\u2212"}),(0,n.jsxs)(s.msub,{children:[(0,n.jsx)(s.mi,{children:"c"}),(0,n.jsx)(s.mi,{children:"n"})]}),(0,n.jsxs)(s.msubsup,{children:[(0,n.jsx)(s.mi,{children:"P"}),(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"n"}),(0,n.jsx)(s.mo,{children:"\u2212"}),(0,n.jsx)(s.mn,{children:"1"})]}),(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"\u03b1"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mi,{children:"\u03b2"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]})]}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mspace,{width:"1em"}),(0,n.jsx)(s.mi,{children:"n"}),(0,n.jsx)(s.mo,{children:"="}),(0,n.jsx)(s.mn,{children:"1"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mn,{children:"2"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mo,{children:"\u22ef"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:" P_{n+1}^{(\\alpha,\\beta)}=\\left(a_{n}x+b_{n}\\right)P_{n}^{(\\alpha,\\beta)}\n -c_{n}P_{n-1}^{(\\alpha,\\beta)},\\quad n=1,2,\\cdots"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1.3694em",verticalAlign:"-0.3246em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(s.span,{className:"vlist-r",children:[(0,n.jsxs)(s.span,{className:"vlist",style:{height:"1.0448em"},children:[(0,n.jsxs)(s.span,{style:{top:"-2.4337em",marginLeft:"-0.1389em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(s.span,{className:"mord mtight",children:[(0,n.jsx)(s.span,{className:"mord mathnormal mtight",children:"n"}),(0,n.jsx)(s.span,{className:"mbin mtight",children:"+"}),(0,n.jsx)(s.span,{className:"mord mtight",children:"1"})]})})]}),(0,n.jsxs)(s.span,{style:{top:"-3.2198em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(s.span,{className:"mord mtight",children:[(0,n.jsx)(s.span,{className:"mopen mtight",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.0037em"},children:"\u03b1"}),(0,n.jsx)(s.span,{className:"mpunct mtight",children:","}),(0,n.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,n.jsx)(s.span,{className:"mclose mtight",children:")"})]})})]})]}),(0,n.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.3246em"},children:(0,n.jsx)(s.span,{})})})]})})]}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(s.span,{className:"mrel",children:"="}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1.188em",verticalAlign:"-0.25em"}}),(0,n.jsxs)(s.span,{className:"minner",children:[(0,n.jsx)(s.span,{className:"mopen delimcenter",style:{top:"0em"},children:"("}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(s.span,{className:"vlist-r",children:[(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mathnormal mtight",children:"n"})})})]})}),(0,n.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(s.span,{})})})]})})]}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"+"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",children:"b"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(s.span,{className:"vlist-r",children:[(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mathnormal mtight",children:"n"})})})]})}),(0,n.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(s.span,{})})})]})})]}),(0,n.jsx)(s.span,{className:"mclose delimcenter",style:{top:"0em"},children:")"})]}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(s.span,{className:"vlist-r",children:[(0,n.jsxs)(s.span,{className:"vlist",style:{height:"0.938em"},children:[(0,n.jsxs)(s.span,{style:{top:"-2.453em",marginLeft:"-0.1389em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mathnormal mtight",children:"n"})})})]}),(0,n.jsxs)(s.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(s.span,{className:"mord mtight",children:[(0,n.jsx)(s.span,{className:"mopen mtight",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.0037em"},children:"\u03b1"}),(0,n.jsx)(s.span,{className:"mpunct mtight",children:","}),(0,n.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,n.jsx)(s.span,{className:"mclose mtight",children:")"})]})})]})]}),(0,n.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.247em"},children:(0,n.jsx)(s.span,{})})})]})})]}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1.3694em",verticalAlign:"-0.3246em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(s.span,{className:"vlist-r",children:[(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mathnormal mtight",children:"n"})})})]})}),(0,n.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(s.span,{})})})]})})]}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(s.span,{className:"vlist-r",children:[(0,n.jsxs)(s.span,{className:"vlist",style:{height:"1.0448em"},children:[(0,n.jsxs)(s.span,{style:{top:"-2.4337em",marginLeft:"-0.1389em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(s.span,{className:"mord mtight",children:[(0,n.jsx)(s.span,{className:"mord mathnormal mtight",children:"n"}),(0,n.jsx)(s.span,{className:"mbin mtight",children:"\u2212"}),(0,n.jsx)(s.span,{className:"mord mtight",children:"1"})]})})]}),(0,n.jsxs)(s.span,{style:{top:"-3.2198em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(s.span,{className:"mord mtight",children:[(0,n.jsx)(s.span,{className:"mopen mtight",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.0037em"},children:"\u03b1"}),(0,n.jsx)(s.span,{className:"mpunct mtight",children:","}),(0,n.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,n.jsx)(s.span,{className:"mclose mtight",children:")"})]})})]})]}),(0,n.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.3246em"},children:(0,n.jsx)(s.span,{})})})]})})]}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"1em"}}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(s.span,{className:"mrel",children:"="}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(s.span,{className:"mord",children:"1"}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord",children:"2"}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"minner",children:"\u22ef"})]})]})]})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE GetJacobiRecurrenceCoeff2(n, alpha, beta, &\n    & A, B, C)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of jacobi polynomial, it should be greater than 1\n    REAL(DFP), INTENT(IN) :: alpha\n    REAL(DFP), INTENT(IN) :: beta\n    REAL(DFP), INTENT(OUT) :: A(0:n - 1)\n    REAL(DFP), INTENT(OUT) :: B(0:n - 1)\n    REAL(DFP), INTENT(OUT) :: C(0:n - 1)\n  END SUBROUTINE GetJacobiRecurrenceCoeff2\nEND INTERFACE\n"})}),"\n",(0,n.jsxs)(t.Z,{children:[(0,n.jsx)(r.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,n.jsx)(o,{})}),(0,n.jsx)(r.Z,{value:"close",label:"\u21a2 ",default:!0})]})]})}function g(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},85162:(e,s,a)=>{a.d(s,{Z:()=>r});a(67294);var n=a(86010);const l={tabItem:"tabItem_Ymn6"};var t=a(85893);function r(e){let{children:s,hidden:a,className:r}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,r),hidden:a,children:s})}},74866:(e,s,a)=>{a.d(s,{Z:()=>v});var n=a(67294),l=a(86010),t=a(12466),r=a(16550),i=a(20469),c=a(91980),m=a(67392),o=a(50012);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:s,children:a}=e;return(0,n.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:a,attributes:n,default:l}}=e;return{value:s,label:a,attributes:n,default:l}}))}(a);return function(e){const s=(0,m.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,a])}function p(e){let{value:s,tabValues:a}=e;return a.some((e=>e.value===s))}function u(e){let{queryString:s=!1,groupId:a}=e;const l=(0,r.k6)(),t=function(e){let{queryString:s=!1,groupId:a}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:s,groupId:a});return[(0,c._X)(t),(0,n.useCallback)((e=>{if(!t)return;const s=new URLSearchParams(l.location.search);s.set(t,e),l.replace({...l.location,search:s.toString()})}),[t,l])]}function x(e){const{defaultValue:s,queryString:a=!1,groupId:l}=e,t=d(e),[r,c]=(0,n.useState)((()=>function(e){let{defaultValue:s,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:s,tabValues:t}))),[m,h]=u({queryString:a,groupId:l}),[x,j]=function(e){let{groupId:s}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(s),[l,t]=(0,o.Nk)(a);return[l,(0,n.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:l}),g=(()=>{const e=m??x;return p({value:e,tabValues:t})?e:null})();(0,i.Z)((()=>{g&&c(g)}),[g]);return{selectedValue:r,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),j(e)}),[h,j,t]),tabValues:t}}var j=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var N=a(85893);function f(e){let{className:s,block:a,selectedValue:n,selectValue:r,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,t.o5)(),o=e=>{const s=e.currentTarget,a=c.indexOf(s),l=i[a].value;l!==n&&(m(s),r(l))},h=e=>{let s=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;s=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;s=c[a]??c[c.length-1];break}}s?.focus()};return(0,N.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},s),children:i.map((e=>{let{value:s,label:a,attributes:t}=e;return(0,N.jsx)("li",{role:"tab",tabIndex:n===s?0:-1,"aria-selected":n===s,ref:e=>c.push(e),onKeyDown:h,onClick:o,...t,className:(0,l.Z)("tabs__item",g.tabItem,t?.className,{"tabs__item--active":n===s}),children:a??s},s)}))})}function b(e){let{lazy:s,children:a,selectedValue:l}=e;const t=(Array.isArray(a)?a:[a]).filter(Boolean);if(s){const e=t.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,N.jsx)("div",{className:"margin-top--md",children:t.map(((e,s)=>(0,n.cloneElement)(e,{key:s,hidden:e.props.value!==l})))})}function y(e){const s=x(e);return(0,N.jsxs)("div",{className:(0,l.Z)("tabs-container",g.tabList),children:[(0,N.jsx)(f,{...e,...s}),(0,N.jsx)(b,{...e,...s})]})}function v(e){const s=(0,j.Z)();return(0,N.jsx)(y,{...e,children:h(e.children)},String(s))}},11151:(e,s,a)=>{a.d(s,{Z:()=>i,a:()=>r});var n=a(67294);const l={},t=n.createContext(l);function r(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);