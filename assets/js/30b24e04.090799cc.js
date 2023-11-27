"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[87338],{65658:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>x,contentTitle:()=>h,default:()=>p,frontMatter:()=>d,metadata:()=>m,toc:()=>o});var a=n(85893),t=n(11151),i=n(74866),l=n(85162);function r(s){const e={annotation:"annotation",code:"code",math:"math",mi:"mi",mn:"mn",mrow:"mrow",msub:"msub",p:"p",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...s.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:'program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: i1, i2, order\n  real( dfp ), allocatable :: x(:,:)\n  type(String) :: astr\n  order=2\n  x = EquidistanceInPoint_Hexahedron( order=order )\n  astr = "| no | $x_1$ | $x_2$ | $x_3$ |" // char_lf\n  astr = astr //  mdencode( arange(1.0_DFP, (order-1.0_DFP)**3) .colconcat. TRANSPOSE(x))\n  call display( astr%chars(), "xij (order="//tostring(order)//")=" // char_lf // char_lf )\nend program main\n'})}),"\n",(0,a.jsx)(e.p,{children:"xij (order=2)="}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"no"}),(0,a.jsx)(e.th,{children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mn,{children:"1"})]})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"x_1"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]})]})})]})}),(0,a.jsx)(e.th,{children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mn,{children:"2"})]})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"x_2"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]})]})})]})}),(0,a.jsx)(e.th,{children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mn,{children:"3"})]})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"x_3"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"3"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]})]})})]})})]})}),(0,a.jsx)(e.tbody,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"1"}),(0,a.jsx)(e.td,{children:"0"}),(0,a.jsx)(e.td,{children:"0"}),(0,a.jsx)(e.td,{children:"0"})]})})]})]})}function c(s={}){const{wrapper:e}={...(0,t.a)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(r,{...s})}):r(s)}const d={},h="EquidistanceInPoint",m={id:"HexahedronInterpolationUtility/EquidistanceInPoint_Hexahedron",title:"EquidistanceInPoint",description:"This subroutine returns the equidistance points in the Hexahedron.",source:"@site/docs/docs-api/HexahedronInterpolationUtility/EquidistanceInPoint_Hexahedron.md",sourceDirName:"HexahedronInterpolationUtility",slug:"/HexahedronInterpolationUtility/EquidistanceInPoint_Hexahedron",permalink:"/docs-api/HexahedronInterpolationUtility/EquidistanceInPoint_Hexahedron",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/HexahedronInterpolationUtility/EquidistanceInPoint_Hexahedron.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CellBasis",permalink:"/docs-api/HexahedronInterpolationUtility/CellBasis_Hexahedron"},next:{title:"EquidistancePoint",permalink:"/docs-api/HexahedronInterpolationUtility/EquidistancePoint_Hexahedron"}},x={},o=[{value:"Interface",id:"interface",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"Results",id:"results",level:2},{value:"Order 1",id:"order-1",level:3},{value:"Order 2",id:"order-2",level:3},{value:"Order 3",id:"order-3",level:3}];function j(s){const e={annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",math:"math",mi:"mi",mn:"mn",mrow:"mrow",msub:"msub",p:"p",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...s.components},{Details:n}=e;return n||function(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"equidistanceinpoint",children:"EquidistanceInPoint"}),"\n",(0,a.jsx)(e.p,{children:"This subroutine returns the equidistance points in the Hexahedron."}),"\n",(0,a.jsx)(e.p,{children:"The points are strictly inside the Hexahedron."}),"\n",(0,a.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION EquidistanceInPoint_Hexahedron(order, xij) &\n    & RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: order\n    !! order\n    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)\n    !! number of rows = 3\n    !! number of cols = 8\n    REAL(DFP), ALLOCATABLE :: ans(:, :)\n    !! returned coordinates in $x_{iJ}$ format\n  END FUNCTION EquidistanceInPoint_Hexahedron\nEND INTERFACE\n"})})}),(0,a.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,a.jsx)(c,{})}),(0,a.jsx)(l.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,a.jsx)(e.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:"INTERFACE EquidistanceInPoint_Hexahedron\n  MODULE PURE FUNCTION EquidistanceInPoint_Hexahedron2(p, q, r, xij) &\n    & RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: p, q, r\n    !! order in x, y, and z direction\n    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)\n    !! number of rows = 3\n    !! number of cols = 8\n    REAL(DFP), ALLOCATABLE :: ans(:, :)\n    !! returned coordinates in $x_{iJ}$ format\n  END FUNCTION EquidistanceInPoint_Hexahedron2\nEND INTERFACE EquidistanceInPoint_Hexahedron\n"})}),"\n",(0,a.jsx)(e.h2,{id:"results",children:"Results"}),"\n",(0,a.jsx)(e.h3,{id:"order-1",children:"Order 1"}),"\n",(0,a.jsx)(e.p,{children:"None"}),"\n",(0,a.jsx)(e.h3,{id:"order-2",children:"Order 2"}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"no"}),(0,a.jsx)(e.th,{children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mn,{children:"1"})]})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"x_1"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]})]})})]})}),(0,a.jsx)(e.th,{children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mn,{children:"2"})]})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"x_2"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]})]})})]})}),(0,a.jsx)(e.th,{children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mn,{children:"3"})]})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"x_3"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"3"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]})]})})]})})]})}),(0,a.jsx)(e.tbody,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"1"}),(0,a.jsx)(e.td,{children:"0"}),(0,a.jsx)(e.td,{children:"0"}),(0,a.jsx)(e.td,{children:"0"})]})})]}),"\n",(0,a.jsx)(e.h3,{id:"order-3",children:"Order 3"}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"See results"}),(0,a.jsx)("div",{children:(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"no"}),(0,a.jsx)(e.th,{children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mn,{children:"1"})]})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"x_1"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]})]})})]})}),(0,a.jsx)(e.th,{children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mn,{children:"2"})]})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"x_2"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]})]})})]})}),(0,a.jsx)(e.th,{children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mn,{children:"3"})]})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"x_3"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"3"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]})]})})]})})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"1"}),(0,a.jsx)(e.td,{children:"-0.33333"}),(0,a.jsx)(e.td,{children:"-0.33333"}),(0,a.jsx)(e.td,{children:"-0.33333"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"2"}),(0,a.jsx)(e.td,{children:"0.33333"}),(0,a.jsx)(e.td,{children:"-0.33333"}),(0,a.jsx)(e.td,{children:"-0.33333"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"3"}),(0,a.jsx)(e.td,{children:"0.33333"}),(0,a.jsx)(e.td,{children:"0.33333"}),(0,a.jsx)(e.td,{children:"-0.33333"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"4"}),(0,a.jsx)(e.td,{children:"-0.33333"}),(0,a.jsx)(e.td,{children:"0.33333"}),(0,a.jsx)(e.td,{children:"-0.33333"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"5"}),(0,a.jsx)(e.td,{children:"-0.33333"}),(0,a.jsx)(e.td,{children:"-0.33333"}),(0,a.jsx)(e.td,{children:"0.33333"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"6"}),(0,a.jsx)(e.td,{children:"0.33333"}),(0,a.jsx)(e.td,{children:"-0.33333"}),(0,a.jsx)(e.td,{children:"0.33333"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"7"}),(0,a.jsx)(e.td,{children:"0.33333"}),(0,a.jsx)(e.td,{children:"0.33333"}),(0,a.jsx)(e.td,{children:"0.33333"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"8"}),(0,a.jsx)(e.td,{children:"-0.33333"}),(0,a.jsx)(e.td,{children:"0.33333"}),(0,a.jsx)(e.td,{children:"0.33333"})]})]})]})})]})]})}function p(s={}){const{wrapper:e}={...(0,t.a)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(j,{...s})}):j(s)}},85162:(s,e,n)=>{n.d(e,{Z:()=>l});n(67294);var a=n(86010);const t={tabItem:"tabItem_Ymn6"};var i=n(85893);function l(s){let{children:e,hidden:n,className:l}=s;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(t.tabItem,l),hidden:n,children:e})}},74866:(s,e,n)=>{n.d(e,{Z:()=>y});var a=n(67294),t=n(86010),i=n(12466),l=n(16550),r=n(20469),c=n(91980),d=n(67392),h=n(50012);function m(s){return a.Children.toArray(s).filter((s=>"\n"!==s)).map((s=>{if(!s||(0,a.isValidElement)(s)&&function(s){const{props:e}=s;return!!e&&"object"==typeof e&&"value"in e}(s))return s;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof s.type?s.type:s.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(s){const{values:e,children:n}=s;return(0,a.useMemo)((()=>{const s=e??function(s){return m(s).map((s=>{let{props:{value:e,label:n,attributes:a,default:t}}=s;return{value:e,label:n,attributes:a,default:t}}))}(n);return function(s){const e=(0,d.l)(s,((s,e)=>s.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((s=>s.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(s),s}),[e,n])}function o(s){let{value:e,tabValues:n}=s;return n.some((s=>s.value===e))}function j(s){let{queryString:e=!1,groupId:n}=s;const t=(0,l.k6)(),i=function(s){let{queryString:e=!1,groupId:n}=s;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,c._X)(i),(0,a.useCallback)((s=>{if(!i)return;const e=new URLSearchParams(t.location.search);e.set(i,s),t.replace({...t.location,search:e.toString()})}),[i,t])]}function p(s){const{defaultValue:e,queryString:n=!1,groupId:t}=s,i=x(s),[l,c]=(0,a.useState)((()=>function(s){let{defaultValue:e,tabValues:n}=s;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!o({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((s=>s.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=n.find((s=>s.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:i}))),[d,m]=j({queryString:n,groupId:t}),[p,u]=function(s){let{groupId:e}=s;const n=function(s){return s?`docusaurus.tab.${s}`:null}(e),[t,i]=(0,h.Nk)(n);return[t,(0,a.useCallback)((s=>{n&&i.set(s)}),[n,i])]}({groupId:t}),N=(()=>{const s=d??p;return o({value:s,tabValues:i})?s:null})();(0,r.Z)((()=>{N&&c(N)}),[N]);return{selectedValue:l,selectValue:(0,a.useCallback)((s=>{if(!o({value:s,tabValues:i}))throw new Error(`Can't select invalid tab value=${s}`);c(s),m(s),u(s)}),[m,u,i]),tabValues:i}}var u=n(72389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function v(s){let{className:e,block:n,selectedValue:a,selectValue:l,tabValues:r}=s;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),h=s=>{const e=s.currentTarget,n=c.indexOf(e),t=r[n].value;t!==a&&(d(e),l(t))},m=s=>{let e=null;switch(s.key){case"Enter":h(s);break;case"ArrowRight":{const n=c.indexOf(s.currentTarget)+1;e=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(s.currentTarget)-1;e=c[n]??c[c.length-1];break}}e?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":n},e),children:r.map((s=>{let{value:e,label:n,attributes:i}=s;return(0,g.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:s=>c.push(s),onKeyDown:m,onClick:h,...i,className:(0,t.Z)("tabs__item",N.tabItem,i?.className,{"tabs__item--active":a===e}),children:n??e},e)}))})}function b(s){let{lazy:e,children:n,selectedValue:t}=s;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const s=i.find((s=>s.props.value===t));return s?(0,a.cloneElement)(s,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((s,e)=>(0,a.cloneElement)(s,{key:e,hidden:s.props.value!==t})))})}function f(s){const e=p(s);return(0,g.jsxs)("div",{className:(0,t.Z)("tabs-container",N.tabList),children:[(0,g.jsx)(v,{...s,...e}),(0,g.jsx)(b,{...s,...e})]})}function y(s){const e=(0,u.Z)();return(0,g.jsx)(f,{...s,children:m(s.children)},String(e))}},11151:(s,e,n)=>{n.d(e,{Z:()=>r,a:()=>l});var a=n(67294);const t={},i=a.createContext(t);function l(s){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:l(s.components),a.createElement(i.Provider,{value:e},s.children)}}}]);