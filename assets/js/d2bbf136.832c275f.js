"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[70934],{1550:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>r});var l=a(85893),n=a(11151);const i={sidebar_position:4},t="Transversely isotropic elasticity",m={id:"programming-fem/linearElasticity/theory_trans_isotropic",title:"Transversely isotropic elasticity",description:"A transversely isotropic material is symmetric with respect to a rotation about an axis of symmetry. For such a material, if $e_$ is the axis of symmetry, then $C$ matrix can be expressed as:",source:"@site/docs/guides/programming-fem/linearElasticity/theory_trans_isotropic.md",sourceDirName:"programming-fem/linearElasticity",slug:"/programming-fem/linearElasticity/theory_trans_isotropic",permalink:"/guides/programming-fem/linearElasticity/theory_trans_isotropic",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/guides/programming-fem/linearElasticity/theory_trans_isotropic.md",tags:[],version:"current",lastUpdatedAt:1701411597,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Orthotropic elasticity",permalink:"/guides/programming-fem/linearElasticity/theory_orthotropic"},next:{title:"Anisotropic elasticity",permalink:"/guides/programming-fem/linearElasticity/theory_anisotropic"}},c={},r=[];function h(s){const e={admonition:"admonition",annotation:"annotation",h1:"h1",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",mstyle:"mstyle",msub:"msub",mtable:"mtable",mtd:"mtd",mtr:"mtr",p:"p",path:"path",semantics:"semantics",span:"span",svg:"svg",...(0,n.a)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"transversely-isotropic-elasticity",children:"Transversely isotropic elasticity"}),"\n",(0,l.jsxs)(e.p,{children:["A transversely isotropic material is symmetric with respect to a rotation about an axis of symmetry. For such a material, if ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"e"}),(0,l.jsx)(e.mn,{children:"3"})]})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"e_{3}"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"3"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})})]})," is the axis of symmetry, then ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"C"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"C"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"})]})})]})," matrix can be expressed as:"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"C"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"C"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"})]})})]})," matrix has following form:"]}),"\n",(0,l.jsx)(e.span,{className:"katex-display",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"C"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mo,{fence:"true",children:"["}),(0,l.jsxs)(e.mtable,{rowspacing:"0.16em",columnalign:"center center center center center center",columnspacing:"1em",children:[(0,l.jsxs)(e.mtr,{children:[(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"C"}),(0,l.jsx)(e.mn,{children:"11"})]})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"C"}),(0,l.jsx)(e.mn,{children:"12"})]})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"C"}),(0,l.jsx)(e.mn,{children:"13"})]})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(e.mn,{children:"0"})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(e.mn,{children:"0"})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(e.mn,{children:"0"})})})]}),(0,l.jsxs)(e.mtr,{children:[(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"C"}),(0,l.jsx)(e.mn,{children:"12"})]})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"C"}),(0,l.jsx)(e.mn,{children:"11"})]})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"C"}),(0,l.jsx)(e.mn,{children:"13"})]})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(e.mn,{children:"0"})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(e.mn,{children:"0"})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(e.mn,{children:"0"})})})]}),(0,l.jsxs)(e.mtr,{children:[(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"C"}),(0,l.jsx)(e.mn,{children:"13"})]})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"C"}),(0,l.jsx)(e.mn,{children:"13"})]})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"C"}),(0,l.jsx)(e.mn,{children:"33"})]})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(e.mn,{children:"0"})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(e.mn,{children:"0"})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(e.mn,{children:"0"})})})]}),(0,l.jsxs)(e.mtr,{children:[(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(e.mn,{children:"0"})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(e.mn,{children:"0"})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(e.mn,{children:"0"})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsxs)(e.mfrac,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"C"}),(0,l.jsx)(e.mn,{children:"11"})]}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"C"}),(0,l.jsx)(e.mn,{children:"12"})]})]}),(0,l.jsx)(e.mn,{children:"2"})]})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(e.mn,{children:"0"})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(e.mn,{children:"0"})})})]}),(0,l.jsxs)(e.mtr,{children:[(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(e.mn,{children:"0"})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(e.mn,{children:"0"})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(e.mn,{children:"0"})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(e.mn,{children:"0"})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"C"}),(0,l.jsx)(e.mn,{children:"44"})]})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(e.mn,{children:"0"})})})]}),(0,l.jsxs)(e.mtr,{children:[(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(e.mn,{children:"0"})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(e.mn,{children:"0"})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(e.mn,{children:"0"})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(e.mn,{children:"0"})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(e.mn,{children:"0"})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"C"}),(0,l.jsx)(e.mn,{children:"44"})]})})})]})]}),(0,l.jsx)(e.mo,{fence:"true",children:"]"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"C=\\begin{bmatrix}C_{11} & C_{12} & C_{13} & 0 & 0 & 0\\\\\nC_{12} & C_{11} & C_{13} & 0 & 0 & 0\\\\\nC_{13} & C_{13} & C_{33} & 0 & 0 & 0\\\\\n0 & 0 & 0 & \\frac{C_{11}-C_{12}}{2} & 0 & 0\\\\\n0 & 0 & 0 & 0 & C_{44} & 0\\\\\n0 & 0 & 0 & 0 & 0 & C_{44}\n\\end{bmatrix}"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"7.2484em",verticalAlign:"-3.3742em"}}),(0,l.jsxs)(e.span,{className:"minner",children:[(0,l.jsx)(e.span,{className:"mopen",children:(0,l.jsx)(e.span,{className:"delimsizing mult",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"3.85em"},children:(0,l.jsxs)(e.span,{style:{top:"-5.8499em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"9.2em"}}),(0,l.jsx)(e.span,{style:{width:"0.667em",height:"7.200em"},children:(0,l.jsx)(e.svg,{xmlns:"http://www.w3.org/2000/svg",width:"0.667em",height:"7.200em",viewBox:"0 0 667 7200",children:(0,l.jsx)(e.path,{d:"M403 1759 V84 H666 V0 H319 V1759 v3600 v1759 h347 v-84\nH403z M403 1759 V0 H319 V1759 v3600 v1759 h84z"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"3.35em"},children:(0,l.jsx)(e.span,{})})})]})})}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsxs)(e.span,{className:"mtable",children:[(0,l.jsx)(e.span,{className:"col-align-c",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"3.8742em"},children:[(0,l.jsxs)(e.span,{style:{top:"-6.0342em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"11"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})})]}),(0,l.jsxs)(e.span,{style:{top:"-4.8342em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"12"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})})]}),(0,l.jsxs)(e.span,{style:{top:"-3.6342em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"13"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})})]}),(0,l.jsxs)(e.span,{style:{top:"-2.3858em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"0"})})]}),(0,l.jsxs)(e.span,{style:{top:"-1.1858em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"0"})})]}),(0,l.jsxs)(e.span,{style:{top:"0.0142em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"0"})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"3.3742em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"arraycolsep",style:{width:"0.5em"}}),(0,l.jsx)(e.span,{className:"arraycolsep",style:{width:"0.5em"}}),(0,l.jsx)(e.span,{className:"col-align-c",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"3.8742em"},children:[(0,l.jsxs)(e.span,{style:{top:"-6.0342em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"12"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})})]}),(0,l.jsxs)(e.span,{style:{top:"-4.8342em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"11"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})})]}),(0,l.jsxs)(e.span,{style:{top:"-3.6342em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"13"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})})]}),(0,l.jsxs)(e.span,{style:{top:"-2.3858em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"0"})})]}),(0,l.jsxs)(e.span,{style:{top:"-1.1858em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"0"})})]}),(0,l.jsxs)(e.span,{style:{top:"0.0142em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"0"})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"3.3742em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"arraycolsep",style:{width:"0.5em"}}),(0,l.jsx)(e.span,{className:"arraycolsep",style:{width:"0.5em"}}),(0,l.jsx)(e.span,{className:"col-align-c",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"3.8742em"},children:[(0,l.jsxs)(e.span,{style:{top:"-6.0342em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"13"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})})]}),(0,l.jsxs)(e.span,{style:{top:"-4.8342em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"13"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})})]}),(0,l.jsxs)(e.span,{style:{top:"-3.6342em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"33"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})})]}),(0,l.jsxs)(e.span,{style:{top:"-2.3858em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"0"})})]}),(0,l.jsxs)(e.span,{style:{top:"-1.1858em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"0"})})]}),(0,l.jsxs)(e.span,{style:{top:"0.0142em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"0"})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"3.3742em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"arraycolsep",style:{width:"0.5em"}}),(0,l.jsx)(e.span,{className:"arraycolsep",style:{width:"0.5em"}}),(0,l.jsx)(e.span,{className:"col-align-c",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"3.8742em"},children:[(0,l.jsxs)(e.span,{style:{top:"-6.0342em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"0"})})]}),(0,l.jsxs)(e.span,{style:{top:"-4.8342em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"0"})})]}),(0,l.jsxs)(e.span,{style:{top:"-3.6342em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"0"})})]}),(0,l.jsxs)(e.span,{style:{top:"-2.3858em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,l.jsx)(e.span,{className:"mfrac",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"0.8884em"},children:[(0,l.jsxs)(e.span,{style:{top:"-2.655em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})})]}),(0,l.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,l.jsxs)(e.span,{style:{top:"-3.4101em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsxs)(e.span,{className:"mord mtight",children:[(0,l.jsxs)(e.span,{className:"mord mtight",children:[(0,l.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.07153em"},children:"C"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3173em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.357em",marginLeft:"-0.0715em",marginRight:"0.0714em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"11"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.143em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mbin mtight",children:"\u2212"}),(0,l.jsxs)(e.span,{className:"mord mtight",children:[(0,l.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.07153em"},children:"C"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3173em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.357em",marginLeft:"-0.0715em",marginRight:"0.0714em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"12"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.143em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.345em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"mclose nulldelimiter"})]})})]}),(0,l.jsxs)(e.span,{style:{top:"-1.1858em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"0"})})]}),(0,l.jsxs)(e.span,{style:{top:"0.0142em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"0"})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"3.3742em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"arraycolsep",style:{width:"0.5em"}}),(0,l.jsx)(e.span,{className:"arraycolsep",style:{width:"0.5em"}}),(0,l.jsx)(e.span,{className:"col-align-c",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"3.8742em"},children:[(0,l.jsxs)(e.span,{style:{top:"-6.0342em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"0"})})]}),(0,l.jsxs)(e.span,{style:{top:"-4.8342em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"0"})})]}),(0,l.jsxs)(e.span,{style:{top:"-3.6342em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"0"})})]}),(0,l.jsxs)(e.span,{style:{top:"-2.3858em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"0"})})]}),(0,l.jsxs)(e.span,{style:{top:"-1.1858em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"44"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})})]}),(0,l.jsxs)(e.span,{style:{top:"0.0142em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"0"})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"3.3742em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"arraycolsep",style:{width:"0.5em"}}),(0,l.jsx)(e.span,{className:"arraycolsep",style:{width:"0.5em"}}),(0,l.jsx)(e.span,{className:"col-align-c",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"3.8742em"},children:[(0,l.jsxs)(e.span,{style:{top:"-6.0342em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"0"})})]}),(0,l.jsxs)(e.span,{style:{top:"-4.8342em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"0"})})]}),(0,l.jsxs)(e.span,{style:{top:"-3.6342em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"0"})})]}),(0,l.jsxs)(e.span,{style:{top:"-2.3858em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"0"})})]}),(0,l.jsxs)(e.span,{style:{top:"-1.1858em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"0"})})]}),(0,l.jsxs)(e.span,{style:{top:"0.0142em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"44"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"3.3742em"},children:(0,l.jsx)(e.span,{})})})]})})]})}),(0,l.jsx)(e.span,{className:"mclose",children:(0,l.jsx)(e.span,{className:"delimsizing mult",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"3.85em"},children:(0,l.jsxs)(e.span,{style:{top:"-5.8499em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"9.2em"}}),(0,l.jsx)(e.span,{style:{width:"0.667em",height:"7.200em"},children:(0,l.jsx)(e.svg,{xmlns:"http://www.w3.org/2000/svg",width:"0.667em",height:"7.200em",viewBox:"0 0 667 7200",children:(0,l.jsx)(e.path,{d:"M347 1759 V0 H0 V84 H263 V1759 v3600 v1759 H0 v84 H347z\nM347 1759 V0 H263 V1759 v3600 v1759 h84z"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"3.35em"},children:(0,l.jsx)(e.span,{})})})]})})})]})]})]})]})}),"\n",(0,l.jsx)(e.admonition,{type:"info",children:(0,l.jsx)(e.p,{children:"We need total 5 parameters to describe a transversely isotropic material."})})]})}function d(s={}){const{wrapper:e}={...(0,n.a)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}},11151:(s,e,a)=>{a.d(e,{Z:()=>m,a:()=>t});var l=a(67294);const n={},i=l.createContext(n);function t(s){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function m(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(n):s.components||n:t(s.components),l.createElement(i.Provider,{value:e},s.children)}}}]);