"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[80991],{4143:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>c});var a=n(85893),l=n(11151);const i={},r=void 0,t={id:"Monomial2D/Monomial2D_",title:"Monomial2D_",description:"Structure",source:"@site/docs/docs-api/Monomial2D/Monomial2D_.md",sourceDirName:"Monomial2D",slug:"/Monomial2D/Monomial2D_",permalink:"/docs-api/Monomial2D/Monomial2D_",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Monomial2D/Monomial2D_.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Monomial2D",permalink:"/docs-api/Monomial2D/"},next:{title:"Monomial2D example 1",permalink:"/docs-api/Monomial2D/Monomial2D_test_1"}},m={},c=[{value:"Structure",id:"structure",level:2},{value:"ConstructorMethods",id:"constructormethods",level:2},{value:"Monomial2D constructor",id:"monomial2d-constructor",level:3},{value:"Monomial2D_Pointer",id:"monomial2d_pointer",level:3},{value:"Deallocate",id:"deallocate",level:3},{value:"GetMethods",id:"getmethods",level:2},{value:"Eval",id:"eval",level:3},{value:"EvalGradient",id:"evalgradient",level:3},{value:"Grad",id:"grad",level:3},{value:"GetStringForUID",id:"getstringforuid",level:3},{value:"GetDisplayString",id:"getdisplaystring",level:3},{value:"GetDegree",id:"getdegree",level:3},{value:"IOMethods",id:"iomethods",level:2},{value:"Display",id:"display",level:3},{value:"OperatorMethods",id:"operatormethods",level:2},{value:"Operator(*)",id:"operator",level:3},{value:"Assignment(=)",id:"assignment",level:3},{value:"BasisMethods",id:"basismethods",level:2},{value:"Monomials2D",id:"monomials2d",level:3}];function d(s){const e={annotation:"annotation",code:"code",h2:"h2",h3:"h3",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,l.a)(),...s.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"structure",children:"Structure"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"Monomial2D_"})," is a child of [[AbstractBasis2D_]]. It defines a monomial of two variables."]}),"\n",(0,a.jsx)(e.span,{className:"katex-display",children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"m"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mo,{separator:"true",children:","}),(0,a.jsx)(e.mi,{children:"y"}),(0,a.jsx)(e.mo,{separator:"true",children:","}),(0,a.jsx)(e.mi,{children:"z"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mn,{children:"1"})]})]}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mi,{children:"y"}),(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mn,{children:"1"})]})]})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"m(x,y,z) = x^{n1} y^{n1}"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"mpunct",children:","}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,a.jsx)(e.span,{className:"mpunct",children:","}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,a.jsx)(e.span,{className:"mclose",children:")"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1.0585em",verticalAlign:"-0.1944em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsxs)(e.span,{className:"mord mtight",children:[(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"}),(0,a.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]})})})})})]}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsxs)(e.span,{className:"mord mtight",children:[(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"}),(0,a.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]})})})})})]})]})]})]})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:"TYPE, EXTENDS( AbstractBasis2D_ ) :: Monomial2D_\n  PRIVATE\n  INTEGER( I4B ) :: n1 = -1_I4B\n  INTEGER( I4B ) :: n2 = -1_I4B\n"})}),"\n",(0,a.jsx)(e.h2,{id:"constructormethods",children:"ConstructorMethods"}),"\n",(0,a.jsx)(e.h3,{id:"monomial2d-constructor",children:"Monomial2D constructor"}),"\n",(0,a.jsx)(e.p,{children:"It constructs the monomial. Currently, there are two Fortran interfaces as given below:"}),"\n",(0,a.jsx)(e.p,{children:"Interface-1: Specify the power and the name of variables."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\nMODULE ELEMENTAL FUNCTION Monomial2D( n1, n2, &\n  & name1, name2 ) &\n  & RESULT( ans )\n  INTEGER( I4B ), INTENT( IN ) :: n1\n    !! power of variable 1\n  INTEGER( I4B ), INTENT( IN ) :: n2\n    !! power for variable 2\n  CHARACTER( LEN = * ), INTENT( IN ) :: name1\n    !! name of variable 1\n  CHARACTER( LEN = * ), INTENT( IN ) :: name2\n    !! name of variable 2\n  TYPE( Monomial2D_ ) :: ans\n    !! Monomial2D = $x^{n1} y^{n2} z^{n3}$\nEND FUNCTION Monomial2D\nEND INTERFACE\n"})}),"\n",(0,a.jsx)(e.p,{children:'!!! example "Example"'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"[[Monomial2D_test_1]]"}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"Interface-2: Specify the two monomial in 1d, that is, [[Monomial1D_]]."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\nMODULE ELEMENTAL FUNCTION Monomial2D( f1, f2 ) RESULT( ans )\n  CLASS( Monomial1D_ ), INTENT( IN ) :: f1\n    !! monomial for first variable\n  CLASS( Monomial1D_ ), INTENT( IN ) :: f2\n    !! monomial for second variable\n  TYPE( Monomial2D_ ) :: ans\n    !! ans = f1*f2*f3\nEND FUNCTION Monomial2D\nEND INTERFACE\n"})}),"\n",(0,a.jsx)(e.p,{children:'!!! example "Example"'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"[[Monomial2D_test_2]]"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"monomial2d_pointer",children:"Monomial2D_Pointer"}),"\n",(0,a.jsx)(e.p,{children:"This function returns the pointer to a newly created instance of [[Monomial2D_]]. There are two fortran interfaces same as the one given above."}),"\n",(0,a.jsx)(e.h3,{id:"deallocate",children:"Deallocate"}),"\n",(0,a.jsx)(e.p,{children:"It deallocate or reset the monomial."}),"\n",(0,a.jsx)(e.p,{children:"Interface:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:"CALL obj%Deallocate()\n"})}),"\n",(0,a.jsx)(e.p,{children:'!!! example "Example"'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"[[Monomial2D_test_1]]"}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"getmethods",children:"GetMethods"}),"\n",(0,a.jsx)(e.h3,{id:"eval",children:"Eval"}),"\n",(0,a.jsxs)(e.p,{children:["Evaluate the monomial at ",(0,a.jsx)(e.code,{children:"x,y"})," point."]}),"\n",(0,a.jsx)(e.p,{children:"Interface:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE ELEMENTAL FUNCTION Eval( obj, x, y ) RESULT( ans )\n    CLASS( Monomial2D_ ), INTENT( IN ) :: obj\n    REAL( DFP ), INTENT( IN ) :: x, y\n    REAL( DFP ) :: ans\n  END FUNCTION Eval\nEND INTERFACE\n"})}),"\n",(0,a.jsx)(e.p,{children:'!!! example "Example"'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"[[Monomial2D_test_4]]"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"evalgradient",children:"EvalGradient"}),"\n",(0,a.jsxs)(e.p,{children:["Evaluate the gradient of a monomial at ",(0,a.jsx)(e.code,{children:"x,y"}),"."]}),"\n",(0,a.jsx)(e.p,{children:"Interface:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\nMODULE ELEMENTAL FUNCTION EvalGradient( obj, x, y, dim ) &\n  & RESULT( ans )\n  CLASS( Monomial2D_ ), INTENT( IN ) :: obj\n  REAL( DFP ), INTENT( IN ) :: x\n  REAL( DFP ), INTENT( IN ) :: y\n  INTEGER( I4B ), INTENT( IN ) :: dim\n  REAL( DFP ) :: ans\nEND FUNCTION EvalGradient\nEND INTERFACE\n"})}),"\n",(0,a.jsxs)(e.p,{children:['!!! note "dim"\nFor ',(0,a.jsx)(e.code,{children:"dim=1,2,3"})," we evaluate ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsxs)(e.mfrac,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"d"}),(0,a.jsx)(e.mi,{children:"m"})]}),(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"d"}),(0,a.jsx)(e.mi,{children:"x"})]})]})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\frac{dm}{dx}"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1.2251em",verticalAlign:"-0.345em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,a.jsx)(e.span,{className:"mfrac",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsxs)(e.span,{className:"vlist",style:{height:"0.8801em"},children:[(0,a.jsxs)(e.span,{style:{top:"-2.655em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsxs)(e.span,{className:"mord mtight",children:[(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"d"}),(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"x"})]})})]}),(0,a.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,a.jsxs)(e.span,{style:{top:"-3.394em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsxs)(e.span,{className:"mord mtight",children:[(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"d"}),(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"m"})]})})]})]}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.345em"},children:(0,a.jsx)(e.span,{})})})]})}),(0,a.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})})]}),", ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsxs)(e.mfrac,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"d"}),(0,a.jsx)(e.mi,{children:"m"})]}),(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"d"}),(0,a.jsx)(e.mi,{children:"y"})]})]})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\frac{dm}{dy}"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1.3612em",verticalAlign:"-0.4811em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,a.jsx)(e.span,{className:"mfrac",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsxs)(e.span,{className:"vlist",style:{height:"0.8801em"},children:[(0,a.jsxs)(e.span,{style:{top:"-2.655em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsxs)(e.span,{className:"mord mtight",children:[(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"d"}),(0,a.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"y"})]})})]}),(0,a.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,a.jsxs)(e.span,{style:{top:"-3.394em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsxs)(e.span,{className:"mord mtight",children:[(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"d"}),(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"m"})]})})]})]}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.4811em"},children:(0,a.jsx)(e.span,{})})})]})}),(0,a.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})})]}),", ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsxs)(e.mfrac,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"d"}),(0,a.jsx)(e.mi,{children:"m"})]}),(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"d"}),(0,a.jsx)(e.mi,{children:"z"})]})]})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\frac{dm}{dz}"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1.2251em",verticalAlign:"-0.345em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,a.jsx)(e.span,{className:"mfrac",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsxs)(e.span,{className:"vlist",style:{height:"0.8801em"},children:[(0,a.jsxs)(e.span,{style:{top:"-2.655em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsxs)(e.span,{className:"mord mtight",children:[(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"d"}),(0,a.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.04398em"},children:"z"})]})})]}),(0,a.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,a.jsxs)(e.span,{style:{top:"-3.394em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsxs)(e.span,{className:"mord mtight",children:[(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"d"}),(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"m"})]})})]})]}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.345em"},children:(0,a.jsx)(e.span,{})})})]})}),(0,a.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})})]}),", respectively."]}),"\n",(0,a.jsx)(e.p,{children:'!!! example "Example"'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"[[Monomial2D_test_4]]"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"grad",children:"Grad"}),"\n",(0,a.jsx)(e.p,{children:"Returns a monomial which is gradient of a given monomial."}),"\n",(0,a.jsx)(e.p,{children:"Interface:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\nMODULE ELEMENTAL FUNCTION Grad( obj, dim ) RESULT( ans )\n  CLASS( Monomial2D_ ), INTENT( IN ) :: obj\n  INTEGER( I4B ), INTENT( IN ) :: dim\n  TYPE( Monomial2D_ ) :: ans\nEND FUNCTION Grad\nEND INTERFACE\n"})}),"\n",(0,a.jsx)(e.p,{children:'!!! example "Example"'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"[[Monomial2D_test_5]]"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"getstringforuid",children:"GetStringForUID"}),"\n",(0,a.jsx)(e.p,{children:"Returns a string for generating a unique id for the monomial."}),"\n",(0,a.jsx)(e.p,{children:'!!! example "Example"'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"[[Monomial2D_test_6]]"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"getdisplaystring",children:"GetDisplayString"}),"\n",(0,a.jsx)(e.p,{children:"Returns a string for displaying the monomial."}),"\n",(0,a.jsx)(e.p,{children:'!!! example "Example"'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"[[Monomial2D_test_6]]"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"getdegree",children:"GetDegree"}),"\n",(0,a.jsxs)(e.p,{children:["Returns the degree, ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mn,{children:"1"}),(0,a.jsx)(e.mo,{separator:"true",children:","}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mn,{children:"2"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"(n1,n2)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mord",children:"1"}),(0,a.jsx)(e.span,{className:"mpunct",children:","}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mord",children:"2"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]}),", of the monomial."]}),"\n",(0,a.jsx)(e.p,{children:'!!! example "Example"'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"[[Monomial2D_test_6]]"}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"iomethods",children:"IOMethods"}),"\n",(0,a.jsx)(e.h3,{id:"display",children:"Display"}),"\n",(0,a.jsx)(e.p,{children:"Display the monomial on the screen."}),"\n",(0,a.jsx)(e.p,{children:"Interface:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\nMODULE SUBROUTINE Display( obj, msg, unitno )\n  CLASS( Monomial2D_ ), INTENT( IN ) :: obj\n  CHARACTER( LEN = * ), INTENT( IN ) :: msg\n  INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: unitno\nEND SUBROUTINE Display\nEND INTERFACE\n"})}),"\n",(0,a.jsx)(e.p,{children:"Example:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"[[Monomial2D_test_1]]"}),"\n",(0,a.jsx)(e.li,{children:"[[Monomial2D_test_2]]"}),"\n",(0,a.jsx)(e.li,{children:"[[Monomial2D_test_3]]"}),"\n",(0,a.jsx)(e.li,{children:"[[Monomial2D_test_4]]"}),"\n",(0,a.jsx)(e.li,{children:"[[Monomial2D_test_5]]"}),"\n",(0,a.jsx)(e.li,{children:"[[Monomial2D_test_6]]"}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"operatormethods",children:"OperatorMethods"}),"\n",(0,a.jsx)(e.h3,{id:"operator",children:"Operator(*)"}),"\n",(0,a.jsx)(e.p,{children:"We can multiply two monomials to get another monomial."}),"\n",(0,a.jsx)(e.p,{children:"Interface:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:"m3 = m1 * m2\n"})}),"\n",(0,a.jsx)(e.p,{children:'!!! example "Examples"'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"[[Monomial2D_test_3]]"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"assignment",children:"Assignment(=)"}),"\n",(0,a.jsx)(e.p,{children:"Assignment operator is overloaded."}),"\n",(0,a.jsx)(e.p,{children:"Interface:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:"m1 = m2\n"})}),"\n",(0,a.jsx)(e.p,{children:"Interface:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:"m1(:) = m2(:)\n"})}),"\n",(0,a.jsx)(e.h2,{id:"basismethods",children:"BasisMethods"}),"\n",(0,a.jsx)(e.h3,{id:"monomials2d",children:"Monomials2D"}),"\n",(0,a.jsx)(e.p,{children:"This function returns all the monomials for a given order on an element."}),"\n",(0,a.jsx)(e.p,{children:"Interface:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:'INTERFACE\nMODULE FUNCTION Monomials2D( order, name1, name2, elemType ) &\n  & RESULT( ans )\n  INTEGER( I4B ), INTENT( IN ) :: order\n    !! order\n  CHARACTER( LEN = * ), INTENT( IN ) :: name1\n    !! "x"\n  CHARACTER( LEN = * ), INTENT( IN ) :: name2\n    !! "y"\n  INTEGER( I4B ), INTENT( IN ) :: elemType\n    !! element type\n    !! triangle, quadrangle\n  TYPE( Monomial2D_ ), ALLOCATABLE :: ans( : )\n    !! Monomials in 3D\nEND FUNCTION Monomials2D\nEND INTERFACE\n'})}),"\n",(0,a.jsx)(e.p,{children:'!!! note "elemType"\nelemType defines the element type. It can take following values:'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"triangle"}),"\n",(0,a.jsx)(e.li,{children:"quadrangle"}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:'!!! example "Examples"'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"[[Monomial2D_test_5]] on triangle."}),"\n",(0,a.jsx)(e.li,{children:"[[Monomial2D_test_6]] on quadrangle."}),"\n"]})]})}function h(s={}){const{wrapper:e}={...(0,l.a)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(d,{...s})}):d(s)}},11151:(s,e,n)=>{n.d(e,{Z:()=>t,a:()=>r});var a=n(67294);const l={},i=a.createContext(l);function r(s){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:r(s.components),a.createElement(i.Provider,{value:e},s.children)}}}]);