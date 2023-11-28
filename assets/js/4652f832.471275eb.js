"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[78971],{96308:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>x,contentTitle:()=>h,default:()=>j,frontMatter:()=>d,metadata:()=>f,toc:()=>b});var t=n(85893),s=n(11151),l=n(74866),r=n(85162);function i(a){const e={annotation:"annotation",blockquote:"blockquote",code:"code",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,s.a)(),...a.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["This example shows the usage of ",(0,t.jsx)(e.code,{children:"JacobiTransform"})," method which is defined in [[JacobiPolynomialUtility]] MODULE. This routine performs the forward Jacobi transform."]}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["In this example ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"\u03b1"}),(0,t.jsx)(e.mo,{children:"="}),(0,t.jsx)(e.mi,{children:"\u03b2"}),(0,t.jsx)(e.mo,{children:"="}),(0,t.jsx)(e.mn,{children:"0.0"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\alpha=\\beta=0.0"})]})})}),(0,t.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.0037em"},children:"\u03b1"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(e.span,{className:"mrel",children:"="}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(e.span,{className:"mrel",children:"="}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(e.span,{className:"mord",children:"0.0"})]})]})]})," (that is, proportional to Legendre polynomial)"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:'program main\n  use easifembase\n  use easifemclasses\n  implicit none\n  integer( i4b ) :: n\n  real(dfp), allocatable :: uhat(:), u( : ), pt( : ), wt(:)\n  real( dfp ), parameter :: alpha=0.0_DFP, beta=0.0_DFP, tol=1.0E-10\n  type(string) :: astr\n  integer( i4b ), parameter :: quadType = GaussLobatto\n  type(CSVFile_) :: afile\n  character( len=* ), parameter :: fname = "./results/test15"\n  type(PLPlot_) :: aplot\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:'  n = 10\n  call reallocate( pt, n+1, wt, n+1 )\n  call JacobiQuadrature( n=n+1, alpha=alpha, beta=beta, &\n    & pt=pt, wt=wt, quadType=quadType )\n  u = JacobiEval(n=5_I4B, alpha=alpha, beta=beta, &\n    & x=pt)\n  uhat = JacobiTransform(n=n, alpha=alpha, &\n    & beta=beta, coeff=u, &\n    & x=pt, w=wt, quadType=quadType)\n  uhat( 6 ) = uhat( 6 ) - 1.0_dFP\n  CALL ok( SOFTEQ( NORM2(uhat), 0.0_DFP, tol), "test"  )\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"  n = 10\n  call reallocate( pt, n+1, wt, n+1 )\n  call JacobiQuadrature( n=n+1, alpha=alpha, beta=beta, &\n    & pt=pt, wt=wt, quadType=quadType )\n  u = SIN(4.0_DFP * pi * pt)\n  uhat = JacobiTransform(n=n, alpha=alpha, &\n    & beta=beta, coeff=u, x=pt, w=wt, quadType=quadType)\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:'  CALL afile%initiate(filename=fname // ".csv", &\n    & status="NEW", action="WRITE")\n  CALL afile%open()\n  CALL afile%write(val="n="//tostring(n))\n  CALL afile%write(val=uhat)\n  CALL afile%write()\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:'  CALL aplot%Initiate()\n  CALL aplot%Set( &\n    & device="svg", &\n    & filename=fname//"-%n.svg")\n  CALL aplot%figure()\n  CALL aplot%subplot(1,1,1)\n  pt = arange(0,n,1)\n  CALL aplot%setXYLim([-10.0_DFP, 50.0_DFP], [ -3.0_DFP, 3.0_DFP])\n  CALL aplot%setTicks()\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:'  CALL aplot%plot2D(x=pt,y=uhat, &\n    & pointType=PS_DOT, &\n    & pointSize=4.0_DFP, &\n    & pointColor="b", &\n    & lineWidth=0.0_DFP)\n  !CALL aplot%setLabels("","","")\n  !CALL aplot%Show()\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:'  n = 20\n  call reallocate( pt, n+1, wt, n+1 )\n  call JacobiQuadrature( n=n+1, alpha=alpha, beta=beta, &\n    & pt=pt, wt=wt, quadType=quadType )\n  u = SIN(4.0_DFP * pi * pt)\n  uhat = JacobiTransform(n=n, alpha=alpha, beta=beta,&\n    & coeff=u, x=pt, w=wt, quadType=quadType)\n  CALL afile%write(val="n="//tostring(n))\n  CALL afile%write(val=uhat)\n  CALL afile%write()\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:'  pt = arange(0,n,1)\n  CALL aplot%plot2D(x=pt,y=uhat, &\n    & pointType=PS_DOT, &\n    & pointSize=4.0_DFP, &\n    & pointColor="r", &\n    & lineWidth=0.0_DFP)\n  !CALL aplot%setLabels("N","uhat","")\n  !CALL aplot%Show()\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:'  n = 30\n  call reallocate( pt, n+1, wt, n+1 )\n  call JacobiQuadrature( n=n+1, alpha=alpha, beta=beta, &\n    & pt=pt, wt=wt, quadType=quadType )\n  u = SIN(4.0_DFP * pi * pt)\n  uhat = JacobiTransform(n=n, alpha=alpha, beta=beta, &\n    & coeff=u, x=pt, w=wt, quadType=quadType)\n  CALL afile%write(val="n="//tostring(n))\n  CALL afile%write(val=uhat)\n  CALL afile%write()\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:'  pt = arange(0,n,1)\n  CALL aplot%plot2D(x=pt,y=uhat, &\n    & pointType=PS_DOT, &\n    & pointSize=10.0_DFP, &\n    & pointColor="k", &\n    & lineWidth=0.0_DFP)\n  CALL aplot%setLabels("N","uhat","")\n  CALL aplot%Show()\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:'  n = 40\n  call reallocate( pt, n+1, wt, n+1 )\n  call JacobiQuadrature( n=n+1, alpha=alpha, beta=beta, &\n    & pt=pt, wt=wt, quadType=quadType )\n  u = SIN(4.0_DFP * pi * pt)\n  uhat = JacobiTransform(n=n, alpha=alpha, beta=beta, &\n    & coeff=u, x=pt, w=wt, quadType=quadType)\n  CALL afile%write(val="n="//tostring(n))\n  CALL afile%write(val=uhat)\n  CALL afile%write()\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"  CALL afile%deallocate()\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"end program main\n"})})]})}function o(a={}){const{wrapper:e}={...(0,s.a)(),...a.components};return e?(0,t.jsx)(e,{...a,children:(0,t.jsx)(i,{...a})}):i(a)}function c(a){const e={annotation:"annotation",blockquote:"blockquote",code:"code",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,s.a)(),...a.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["This example shows the usage of ",(0,t.jsx)(e.code,{children:"JacobiTransform"})," method which is defined in [[JacobiPolynomialUtility]] MODULE. This routine performs the forward Jacobi transform of column data."]}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["In this example ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"\u03b1"}),(0,t.jsx)(e.mo,{children:"="}),(0,t.jsx)(e.mi,{children:"\u03b2"}),(0,t.jsx)(e.mo,{children:"="}),(0,t.jsx)(e.mn,{children:"0.0"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\alpha=\\beta=0.0"})]})})}),(0,t.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.0037em"},children:"\u03b1"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(e.span,{className:"mrel",children:"="}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(e.span,{className:"mrel",children:"="}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(e.span,{className:"mord",children:"0.0"})]})]})]})," (that is, proportional to Legendre polynomial)"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real(dfp), allocatable :: uhat(:, :), u( :, : ), pt( : ), wt(:)\n  real( dfp ), parameter :: alpha=0.0_DFP, beta=0.0_DFP, tol=1.0E-10\n  type(string) :: astr\n  integer( i4b ), parameter :: quadType = GaussLobatto\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:'  n = 10\n  call reallocate( pt, n+1, wt, n+1 )\n  call JacobiQuadrature( n=n+1, alpha=alpha, beta=beta, &\n    & pt=pt, wt=wt, quadType=quadType )\n  u = SIN(4.0_DFP * pi * pt) .COLCONCAT. SIN(4.0_DFP * pi * pt)\n  uhat = JacobiTransform(n=n, alpha=alpha, beta=beta, coeff=u, &\n    & x=pt, w=wt, quadType=quadType)\n  CALL Display(uhat, "uhat=")\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"end program main\n"})})]})}function p(a={}){const{wrapper:e}={...(0,s.a)(),...a.components};return e?(0,t.jsx)(e,{...a,children:(0,t.jsx)(c,{...a})}):c(a)}function u(a){const e={admonition:"admonition",annotation:"annotation",blockquote:"blockquote",code:"code",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,s.a)(),...a.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["This example shows the usage of ",(0,t.jsx)(e.code,{children:"JacobiTransform"})," method."]}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["In this example ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"\u03b1"}),(0,t.jsx)(e.mo,{children:"="}),(0,t.jsx)(e.mi,{children:"\u03b2"}),(0,t.jsx)(e.mo,{children:"="}),(0,t.jsx)(e.mn,{children:"0.0"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\alpha=\\beta=0.0"})]})})}),(0,t.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.0037em"},children:"\u03b1"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(e.span,{className:"mrel",children:"="}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(e.span,{className:"mrel",children:"="}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(e.span,{className:"mord",children:"0.0"})]})]})]})," (that is, proportional to Legendre polynomial)"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"program main\n  use easifembase\n  use easifemclasses\n  implicit none\n  integer( i4b ) :: n, ii\n  real(dfp), allocatable :: uhat(:), u( : ), pt( : ), wt(:), fhat(:)\n  real( dfp ), parameter :: alpha=0.0_DFP, beta=0.0_DFP, tol=1.0E-10\n  type(string) :: astr\n  integer( i4b ), parameter :: quadType = GaussLobatto\n  procedure(iface_1Dfunction), pointer :: f => NULL()\n"})}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsxs)(e.p,{children:["To make quadrature points we call ",(0,t.jsx)(e.code,{children:"JacobiQuadrature"})," routine, and specify ",(0,t.jsx)(e.code,{children:"QuadType"}),"."]})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"  n = 10\n  call reallocate( pt, n+1, wt, n+1, u, n+1 )\n  call JacobiQuadrature( n=n+1, alpha=alpha, beta=beta, &\n    & pt=pt, wt=wt, quadType=quadType )\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",metastring:'title "JacobiTransformation"',children:'  f => func1\n  !!\n  do ii = 1, size(u)\n    u(ii) = f(pt(ii))\n  end do\n  !!\n  uhat = JacobiTransform(n=n, alpha=alpha, &\n    & beta=beta, coeff=u, x=pt, w=wt, quadType=quadType)\n  !!\n  fhat = JacobiTransform(n=n, alpha=alpha, beta=beta, &\n    & f=f, quadType=quadType)\n  !!\n  call OK(ALL(SOFTEQ(fhat, uhat, tol)), "n=10")\n  !!\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"  contains\n  pure function func1(x) result(ans)\n    real(dfp), intent(in) :: x\n    real(dfp) :: ans\n    ans = SIN(4.0_DFP * pi * x)\n  end function func1\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"end program main\n"})})]})}function m(a={}){const{wrapper:e}={...(0,s.a)(),...a.components};return e?(0,t.jsx)(e,{...a,children:(0,t.jsx)(u,{...a})}):u(a)}const d={},h="JacobiTransform",f={id:"JacobiPolynomialUtility/JacobiTransform",title:"JacobiTransform",description:"Discrete Jacobi transform.",source:"@site/docs/docs-api/JacobiPolynomialUtility/JacobiTransform.md",sourceDirName:"JacobiPolynomialUtility",slug:"/JacobiPolynomialUtility/JacobiTransform",permalink:"/docs-api/JacobiPolynomialUtility/JacobiTransform",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/JacobiPolynomialUtility/JacobiTransform.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JacobiQuadrature",permalink:"/docs-api/JacobiPolynomialUtility/JacobiQuadrature"},next:{title:"JacobiZeros",permalink:"/docs-api/JacobiPolynomialUtility/JacobiZeros"}},x={},b=[{value:"Interface",id:"interface",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"Interface 3",id:"interface-3",level:2},{value:"Examples",id:"examples",level:2}];function N(a){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...a.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"jacobitransform",children:"JacobiTransform"}),"\n",(0,t.jsx)(e.p,{children:"Discrete Jacobi transform."}),"\n",(0,t.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION JacobiTransform(n, alpha, beta, coeff, x, w, &\n    &  quadType) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of jacobi polynomial\n    REAL(DFP), INTENT(IN) :: alpha\n    !! alpha of Jacobi polynomial > -1.0_DFP\n    REAL(DFP), INTENT(IN) :: beta\n    !! beta of Jacobi polynomial > -1.0_DFP\n    REAL(DFP), INTENT(IN) :: coeff(0:n)\n    !! nodal value (at quad points)\n    REAL(DFP), INTENT(IN) :: x(0:n)\n    !! quadrature points\n    REAL(DFP), INTENT(IN) :: w(0:n)\n    !! weights\n    INTEGER(I4B), INTENT(IN) :: quadType\n    !! Quadrature type, Gauss, GaussLobatto, GaussRadau, GaussRadauLeft\n    !! GaussRadauRight\n    REAL(DFP) :: ans(0:n)\n    !! modal values  or coefficients\n  END FUNCTION JacobiTransform\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(e.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION JacobiTransform(n, alpha, beta, coeff, x, w, &\n    & quadType) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of polynomial\n    REAL(DFP), INTENT(IN) :: alpha\n    !! alpha of Jacobi polynomial > -1.0_DFP\n    REAL(DFP), INTENT(IN) :: beta\n    !! beta of Jacobi polynomial > -1.0_DFP\n    REAL(DFP), INTENT(IN) :: coeff(0:, 1:)\n    !! nodal value (at quad points)\n    REAL(DFP), INTENT(IN) :: x(0:n)\n    !! quadrature points\n    REAL(DFP), INTENT(IN) :: w(0:n)\n    !! weights\n    INTEGER(I4B), INTENT(IN) :: quadType\n    !! Quadrature type, Gauss, GaussLobatto, GaussRadau, GaussRadauLeft\n    !! GaussRadauRight\n    REAL(DFP) :: ans(0:n, 1:SIZE(coeff, 2))\n    !! modal values  or coefficients for each column of val\n  END FUNCTION JacobiTransform\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(e.h2,{id:"interface-3",children:"Interface 3"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION JacobiTransform(n, alpha, beta, f, quadType) &\n    & RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of jacobi polynomial\n    REAL(DFP), INTENT(IN) :: alpha\n    !! alpha of Jacobi polynomial > -1.0_DFP\n    REAL(DFP), INTENT(IN) :: beta\n    !! beta of Jacobi polynomial > -1.0_DFP\n    PROCEDURE(iface_1DFunction), POINTER, INTENT(IN) :: f\n    !! 1D space function\n    INTEGER(I4B), INTENT(IN) :: quadType\n    !! Quadrature type, Gauss, GaussLobatto, GaussRadau, GaussRadauLeft\n    !! GaussRadauRight\n    REAL(DFP) :: ans(0:n)\n    !! modal values  or coefficients\n  END FUNCTION JacobiTransform\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n","\n","\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(r.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(o,{})}),(0,t.jsx)(r.Z,{value:"close",label:"\u21a2 ",default:!0})]}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(r.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(p,{})}),(0,t.jsx)(r.Z,{value:"close",label:"\u21a2 ",default:!0})]}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(r.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(m,{})}),(0,t.jsx)(r.Z,{value:"close",label:"\u21a2 ",default:!0})]})]})}function j(a={}){const{wrapper:e}={...(0,s.a)(),...a.components};return e?(0,t.jsx)(e,{...a,children:(0,t.jsx)(N,{...a})}):N(a)}},85162:(a,e,n)=>{n.d(e,{Z:()=>r});n(67294);var t=n(86010);const s={tabItem:"tabItem_Ymn6"};var l=n(85893);function r(a){let{children:e,hidden:n,className:r}=a;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,r),hidden:n,children:e})}},74866:(a,e,n)=>{n.d(e,{Z:()=>y});var t=n(67294),s=n(86010),l=n(12466),r=n(16550),i=n(20469),o=n(91980),c=n(67392),p=n(50012);function u(a){return t.Children.toArray(a).filter((a=>"\n"!==a)).map((a=>{if(!a||(0,t.isValidElement)(a)&&function(a){const{props:e}=a;return!!e&&"object"==typeof e&&"value"in e}(a))return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(a){const{values:e,children:n}=a;return(0,t.useMemo)((()=>{const a=e??function(a){return u(a).map((a=>{let{props:{value:e,label:n,attributes:t,default:s}}=a;return{value:e,label:n,attributes:t,default:s}}))}(n);return function(a){const e=(0,c.l)(a,((a,e)=>a.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(a),a}),[e,n])}function d(a){let{value:e,tabValues:n}=a;return n.some((a=>a.value===e))}function h(a){let{queryString:e=!1,groupId:n}=a;const s=(0,r.k6)(),l=function(a){let{queryString:e=!1,groupId:n}=a;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,o._X)(l),(0,t.useCallback)((a=>{if(!l)return;const e=new URLSearchParams(s.location.search);e.set(l,a),s.replace({...s.location,search:e.toString()})}),[l,s])]}function f(a){const{defaultValue:e,queryString:n=!1,groupId:s}=a,l=m(a),[r,o]=(0,t.useState)((()=>function(a){let{defaultValue:e,tabValues:n}=a;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!d({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const t=n.find((a=>a.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:e,tabValues:l}))),[c,u]=h({queryString:n,groupId:s}),[f,x]=function(a){let{groupId:e}=a;const n=function(a){return a?`docusaurus.tab.${a}`:null}(e),[s,l]=(0,p.Nk)(n);return[s,(0,t.useCallback)((a=>{n&&l.set(a)}),[n,l])]}({groupId:s}),b=(()=>{const a=c??f;return d({value:a,tabValues:l})?a:null})();(0,i.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:r,selectValue:(0,t.useCallback)((a=>{if(!d({value:a,tabValues:l}))throw new Error(`Can't select invalid tab value=${a}`);o(a),u(a),x(a)}),[u,x,l]),tabValues:l}}var x=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var N=n(85893);function j(a){let{className:e,block:n,selectedValue:t,selectValue:r,tabValues:i}=a;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=a=>{const e=a.currentTarget,n=o.indexOf(e),s=i[n].value;s!==t&&(c(e),r(s))},u=a=>{let e=null;switch(a.key){case"Enter":p(a);break;case"ArrowRight":{const n=o.indexOf(a.currentTarget)+1;e=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(a.currentTarget)-1;e=o[n]??o[o.length-1];break}}e?.focus()};return(0,N.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},e),children:i.map((a=>{let{value:e,label:n,attributes:l}=a;return(0,N.jsx)("li",{role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:a=>o.push(a),onKeyDown:u,onClick:p,...l,className:(0,s.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":t===e}),children:n??e},e)}))})}function g(a){let{lazy:e,children:n,selectedValue:s}=a;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const a=l.find((a=>a.props.value===s));return a?(0,t.cloneElement)(a,{className:"margin-top--md"}):null}return(0,N.jsx)("div",{className:"margin-top--md",children:l.map(((a,e)=>(0,t.cloneElement)(a,{key:e,hidden:a.props.value!==s})))})}function T(a){const e=f(a);return(0,N.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,N.jsx)(j,{...a,...e}),(0,N.jsx)(g,{...a,...e})]})}function y(a){const e=(0,x.Z)();return(0,N.jsx)(T,{...a,children:u(a.children)},String(e))}},11151:(a,e,n)=>{n.d(e,{Z:()=>i,a:()=>r});var t=n(67294);const s={},l=t.createContext(s);function r(a){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function i(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(s):a.components||s:r(a.components),t.createElement(l.Provider,{value:e},a.children)}}}]);