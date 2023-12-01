"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[22458],{78726:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>c});var n=a(85893),i=a(11151);const l={title:"STConvectiveMatrix example 25",author:"Vikas Sharma, Ph.D.",date:"23 Nov 2021",update:"23 Nov 2021",tags:["ReferenceLine","ReferenceLine/Initiate","QuadraturePoint/Initiate","STElemshapeData","STElemshapeData/Initiate","ConvectiveMatrix","STConvectiveMatrix"]},t="STConvectiveMatrix example 26",m={id:"STConvectiveMatrix/STConvectiveMatrix_test_27",title:"STConvectiveMatrix example 25",description:'!!! note ""',source:"@site/docs/docs-api/STConvectiveMatrix/STConvectiveMatrix_test_27.md",sourceDirName:"STConvectiveMatrix",slug:"/STConvectiveMatrix/STConvectiveMatrix_test_27",permalink:"/docs-api/STConvectiveMatrix/STConvectiveMatrix_test_27",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/STConvectiveMatrix/STConvectiveMatrix_test_27.md",tags:[{label:"ReferenceLine",permalink:"/docs-api/tags/reference-line"},{label:"ReferenceLine/Initiate",permalink:"/docs-api/tags/reference-line-initiate"},{label:"QuadraturePoint/Initiate",permalink:"/docs-api/tags/quadrature-point-initiate"},{label:"STElemshapeData",permalink:"/docs-api/tags/st-elemshape-data"},{label:"STElemshapeData/Initiate",permalink:"/docs-api/tags/st-elemshape-data-initiate"},{label:"ConvectiveMatrix",permalink:"/docs-api/tags/convective-matrix"},{label:"STConvectiveMatrix",permalink:"/docs-api/tags/st-convective-matrix"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"STConvectiveMatrix example 25",author:"Vikas Sharma, Ph.D.",date:"23 Nov 2021",update:"23 Nov 2021",tags:["ReferenceLine","ReferenceLine/Initiate","QuadraturePoint/Initiate","STElemshapeData","STElemshapeData/Initiate","ConvectiveMatrix","STConvectiveMatrix"]},sidebar:"tutorialSidebar",previous:{title:"STConvectiveMatrix example 25",permalink:"/docs-api/STConvectiveMatrix/STConvectiveMatrix_test_26"},next:{title:"STConvectiveMatrix example 3",permalink:"/docs-api/STConvectiveMatrix/STConvectiveMatrix_test_3"}},r={},c=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function h(s){const e={annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mo:"mo",mrow:"mrow",msub:"msub",msubsup:"msubsup",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,i.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"stconvectivematrix-example-26",children:"STConvectiveMatrix example 26"}),"\n",(0,n.jsxs)(e.p,{children:['!!! note ""\nThis example shows how to USE the SUBROUTINE called ',(0,n.jsx)(e.code,{children:"STConvectiveMatrix"})," to create a space-time convective matrix. Triangle3 in space and Line2 in time."]}),"\n",(0,n.jsx)(e.p,{children:"Here, we want to DO the following."}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"I"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"J"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"b"})]}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msubsup,{children:[(0,n.jsx)(e.mo,{children:"\u222b"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"I"}),(0,n.jsx)(e.mi,{children:"n"})]}),(0,n.jsx)(e.mrow,{})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msubsup,{children:[(0,n.jsx)(e.mo,{children:"\u222b"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u03a9"}),(0,n.jsx)(e.mrow,{})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.mfrac,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2202"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"N"}),(0,n.jsx)(e.mi,{children:"I"})]}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsx)(e.mi,{children:"a"})]})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2202"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{children:"i"})]})]})]}),(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mo,{children:"\u22c5"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"N"}),(0,n.jsx)(e.mi,{children:"J"})]}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsx)(e.mi,{children:"b"})]}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u03a9"}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"t"})]})]})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"M\\left( {I,J,a,b} \\right) =  {\\int_{{I_n}}^{} {\\int_\\Omega ^{} {\\frac{{\\partial {N^I}{T_a}}}{{\\partial x_{i}}} c \\cdot {N^J}{T_b}d\\Omega dt} } } "})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:"("}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.09618em"},children:"J"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"b"})]}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:")"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"2.5304em",verticalAlign:"-1.012em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsxs)(e.span,{className:"mop",children:[(0,n.jsx)(e.span,{className:"mop op-symbol large-op",style:{marginRight:"0.44445em",position:"relative",top:"-0.0011em"},children:"\u222b"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.1129em"},children:[(0,n.jsxs)(e.span,{style:{top:"-1.7881em",marginLeft:"-0.4445em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.07847em"},children:"I"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1645em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.357em",marginLeft:"-0.0785em",marginRight:"0.0714em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.143em"},children:(0,n.jsx)(e.span,{})})})]})})]})})})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.8129em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"1.012em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsxs)(e.span,{className:"mop",children:[(0,n.jsx)(e.span,{className:"mop op-symbol large-op",style:{marginRight:"0.44445em",position:"relative",top:"-0.0011em"},children:"\u222b"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.1129em"},children:[(0,n.jsxs)(e.span,{style:{top:"-1.7881em",marginLeft:"-0.4445em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u03a9"})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.8129em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.9119em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.5183em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",style:{marginRight:"0.05556em"},children:"\u2202"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",style:{marginRight:"0.05556em"},children:"\u2202"}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8413em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.07847em"},children:"I"})})]})})})})})]})}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"a"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})})]})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.836em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u22c5"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8913em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.09618em"},children:"J"})})]})})})})})]})}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"b"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord",children:"\u03a9"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"t"})]})]})]})]})]})]})}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"I"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"J"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"b"})]}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msubsup,{children:[(0,n.jsx)(e.mo,{children:"\u222b"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"I"}),(0,n.jsx)(e.mi,{children:"n"})]}),(0,n.jsx)(e.mrow,{})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msubsup,{children:[(0,n.jsx)(e.mo,{children:"\u222b"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u03a9"}),(0,n.jsx)(e.mrow,{})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"N"}),(0,n.jsx)(e.mi,{children:"J"})]}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsx)(e.mi,{children:"b"})]}),(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mo,{children:"\u22c5"}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2202"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"N"}),(0,n.jsx)(e.mi,{children:"J"})]}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsx)(e.mi,{children:"b"})]})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2202"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{children:"i"})]})]})]}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u03a9"}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"t"})]})]})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"M\\left( {I,J,a,b} \\right) =  {\\int_{{I_n}}^{} {\\int_\\Omega ^{} {{N^J}{T_b} c \\cdot  \\frac{{\\partial {N^J}{T_b}}}{{\\partial x_{i}}}d\\Omega dt} } } "})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:"("}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.09618em"},children:"J"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"b"})]}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:")"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"2.5304em",verticalAlign:"-1.012em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsxs)(e.span,{className:"mop",children:[(0,n.jsx)(e.span,{className:"mop op-symbol large-op",style:{marginRight:"0.44445em",position:"relative",top:"-0.0011em"},children:"\u222b"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.1129em"},children:[(0,n.jsxs)(e.span,{style:{top:"-1.7881em",marginLeft:"-0.4445em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.07847em"},children:"I"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1645em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.357em",marginLeft:"-0.0785em",marginRight:"0.0714em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.143em"},children:(0,n.jsx)(e.span,{})})})]})})]})})})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.8129em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"1.012em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsxs)(e.span,{className:"mop",children:[(0,n.jsx)(e.span,{className:"mop op-symbol large-op",style:{marginRight:"0.44445em",position:"relative",top:"-0.0011em"},children:"\u222b"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.1129em"},children:[(0,n.jsxs)(e.span,{style:{top:"-1.7881em",marginLeft:"-0.4445em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u03a9"})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.8129em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.9119em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8913em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.09618em"},children:"J"})})]})})})})})]})}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"b"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u22c5"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.5183em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",style:{marginRight:"0.05556em"},children:"\u2202"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",style:{marginRight:"0.05556em"},children:"\u2202"}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8413em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.09618em"},children:"J"})})]})})})})})]})}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"b"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})})]})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.836em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord",children:"\u03a9"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"t"})]})]})]})]})]})]})}),"\n",(0,n.jsxs)(e.p,{children:['!!! warning ""\n',(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"c"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"c"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"})]})})]})," is scalar [[FEVariable_]], which can be a constant, or a FUNCTION of space-time, or some nonlinear FUNCTION."]}),"\n",(0,n.jsx)(e.p,{children:"In this example, convective matrix is formed for"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"[[ReferenceTriangle_]] Triangle3 element for  space"}),"\n",(0,n.jsx)(e.li,{children:"[[ReferenceLine_]] Line2 element for time"}),"\n",(0,n.jsxs)(e.li,{children:["[[QuadraturePoint_]] ",(0,n.jsx)(e.code,{children:"GaussLegendre"})]}),"\n",(0,n.jsxs)(e.li,{children:["Space-time nodal values ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"c"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"c"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"})]})})]})]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"[[ElemshapeData_]]"}),"\n",(0,n.jsx)(e.li,{children:"[[STElemshapeData_]]"}),"\n",(0,n.jsx)(e.li,{children:"[[QuadraturePoint_]]"}),"\n",(0,n.jsx)(e.li,{children:"[[ReferenceLine_]]"}),"\n",(0,n.jsx)(e.li,{children:"[[ReferenceTriangle_]]"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\n    USE easifemBase\n    IMPLICIT NONE\n    TYPE(STElemshapeData_), ALLOCATABLE :: test(:)\n    TYPE(ElemshapeData_) :: time_elemsd\n    TYPE(Quadraturepoint_) :: quadFortime\n    TYPE(Quadraturepoint_) :: quadForspace\n    TYPE(ReferenceTriangle_):: refelemForSpace\n    TYPE(ReferenceLine_) :: refelemForTime\n    INTEGER(I4B) :: ii\n    INTEGER(I4B), PARAMETER :: nsd=2, nns=3, nnt=2\n    INTEGER(I4B), PARAMETER :: orderForTime=2, orderForSpace=1\n    REAL(DFP), PARAMETER :: tij(1, 2) = RESHAPE([-1,1], [1,2])\n    REAL(DFP), PARAMETER :: xij(2, 3)=RESHAPE([0,0,1,0,0,1], [nsd, nns])\n    ! spatial nodal coordinates\n    REAL(DFP), ALLOCATABLE :: xija(:, :, :), mat(:,:)\n    ! spatial-temporal nodal coordinates\n    REAL(DFP), parameter :: c(3,2)=reshape([1.0,1.0,1.0,1.0,1.0,1.0],[3,2])\n    type(FEVariable_) :: cvar\n"})}),"\n",(0,n.jsxs)(e.p,{children:['!!! note ""\nFirst, we initiate a [[ReferenceLine_]] element for time domain. Note that ',(0,n.jsx)(e.code,{children:"nsd"})," should be 1 when making reference element for time domain. Generate the quadrature points, and initiates an instance of [[ElemshapeData_]]."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'    refelemForTime= ReferenceLine(nsd=1)\n    CALL Initiate(obj=quadFortime, &\n\t\t& refelem=refelemForTime,&\n\t\t& order=orderForTime, &\n      \t& quadratureType="GaussLegendre" )\n    CALL Initiate( &\n    \t& obj=time_elemsd, &\n\t  \t& quad=quadForTime, &\n\t\t& refelem=refelemForTime, &\n      \t& ContinuityType=typeH1,&\n\t\t& InterpolType=TypeLagrangeInterpolation)\n    CALL Set(obj=time_elemsd, &\n\t\t& val=tiJ, N=time_elemsd%N, &\n        & dNdXi=time_elemsd%dNdXi)\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! note ""\nInitiate [[STElemshapeData_]].'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"    CALL Initiate(obj=test, elemsd=time_elemsd)\n"})}),"\n",(0,n.jsx)(e.p,{children:'!!! note ""\nGenerating shape functions for space-elements. Here, we are selecting a triangular element'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"    refelemForSpace = ReferenceTriangle(nsd=nsd)\n    CALL Initiate(obj=quadForSpace, &\n\t\t& refelem=refelemForSpace, &\n\t\t& order=orderForSpace, &\n\t\t& quadratureType='GaussLegendre')\n"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"    DO ii = 1, SIZE(test)\n      CALL Initiate( obj=test(ii), &\n\t  \t& quad=quadForSpace, &\n\t\t& refelem=refelemForSpace, &\n        & ContinuityType=typeH1, &\n\t\t& InterpolType=TypeLagrangeInterpolation)\n    END DO\n"})}),"\n",(0,n.jsxs)(e.p,{children:['!!! note ""\nSetting the remaining DATA in obj. Here, ',(0,n.jsx)(e.code,{children:"xija"})," are the space-time nodal coordinates."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"\tCALL Reallocate(xija, nsd, nns, nnt)\n    DO ii = 1, nnt; xija(:, :, ii) = xij; END DO\n    DO ii = 1, SIZE(test)\n        CALL Set(obj=test(ii), &\n            & val=xija, &\n\t\t\t& N=test(ii)%N, &\n            & dNdXi=test(ii)%dNdXi, &\n            & T=test(ii)%T)\n    END DO\n"})}),"\n",(0,n.jsx)(e.p,{children:'!!! note ""\nLet us now create the space-time convective matrix.'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"    cvar = NodalVariable(c, typeFEVariableScalar, typeFEVariableSpaceTime)\n"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'    mat=ConvectiveMatrix(test=test, trial=test, &\n        & term1=del_none, term2=del_x_all, &\n        & c=cvar)\n    CALL Display(mat, "mat:")\n'})}),"\n",(0,n.jsx)(e.p,{children:'??? example "Results"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"                                                        mat:                                                           \n--------------------------------------------------------------------------------------------------------------------------\n-0.111111  0.111111  0.000000  -0.111111  0.000000  0.111111  -0.055556  0.055556  0.000000  -0.055556  0.000000  0.055556\n-0.111111  0.111111  0.000000  -0.111111  0.000000  0.111111  -0.055556  0.055556  0.000000  -0.055556  0.000000  0.055556\n-0.111111  0.111111  0.000000  -0.111111  0.000000  0.111111  -0.055556  0.055556  0.000000  -0.055556  0.000000  0.055556\n-0.055556  0.055556  0.000000  -0.055556  0.000000  0.055556  -0.111111  0.111111  0.000000  -0.111111  0.000000  0.111111\n-0.055556  0.055556  0.000000  -0.055556  0.000000  0.055556  -0.111111  0.111111  0.000000  -0.111111  0.000000  0.111111\n-0.055556  0.055556  0.000000  -0.055556  0.000000  0.055556  -0.111111  0.111111  0.000000  -0.111111  0.000000  0.111111\n"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'    mat=ConvectiveMatrix(test=test, trial=test, &\n        & term1=del_x_all, term2=del_none, &\n        & c=cvar)\n    CALL Display(mat, "mat:")\n'})}),"\n",(0,n.jsx)(e.p,{children:'??? example "Results"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"                                mat:                              \n----------------------------------------------------------------\n-0.111111  -0.111111  -0.111111  -0.055556  -0.055556  -0.055556\n0.111111   0.111111   0.111111   0.055556   0.055556   0.055556\n0.000000   0.000000   0.000000   0.000000   0.000000   0.000000\n-0.111111  -0.111111  -0.111111  -0.055556  -0.055556  -0.055556\n0.000000   0.000000   0.000000   0.000000   0.000000   0.000000\n0.111111   0.111111   0.111111   0.055556   0.055556   0.055556\n-0.055556  -0.055556  -0.055556  -0.111111  -0.111111  -0.111111\n0.055556   0.055556   0.055556   0.111111   0.111111   0.111111\n0.000000   0.000000   0.000000   0.000000   0.000000   0.000000\n-0.055556  -0.055556  -0.055556  -0.111111  -0.111111  -0.111111\n0.000000   0.000000   0.000000   0.000000   0.000000   0.000000\n0.055556   0.055556   0.055556   0.111111   0.111111   0.111111\n"})}),"\n",(0,n.jsx)(e.p,{children:'!!! settings "Cleanup"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(s={}){const{wrapper:e}={...(0,i.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},11151:(s,e,a)=>{a.d(e,{Z:()=>m,a:()=>t});var n=a(67294);const i={},l=n.createContext(i);function t(s){const e=n.useContext(l);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function m(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:t(s.components),n.createElement(l.Provider,{value:e},s.children)}}}]);