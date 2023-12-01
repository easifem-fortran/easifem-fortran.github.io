"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[22215],{44669:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>x,contentTitle:()=>h,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var t=s(85893),r=s(11151),l=s(74866),a=s(85162);function i(e){const n={admonition:"admonition",annotation:"annotation",code:"code",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This example shows the usage of ",(0,t.jsx)(n.code,{children:"Chebyshev1DMatrix"})," method."]}),"\n",(0,t.jsxs)(n.li,{children:["This routine yields the differentiation matrix, ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"D"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"D"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"})]})})]}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In this example we consider"}),"\n",(0,t.jsx)(n.span,{className:"katex-display",children:(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"f"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mi,{children:"x"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"}),(0,t.jsx)(n.mo,{children:"="}),(0,t.jsx)(n.mi,{children:"s"}),(0,t.jsx)(n.mi,{children:"i"}),(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mn,{children:"4"}),(0,t.jsx)(n.mi,{children:"\u03c0"}),(0,t.jsx)(n.mi,{children:"x"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"f(x) = sin(4\\pi x)"})]})})}),(0,t.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"x"}),(0,t.jsx)(n.span,{className:"mclose",children:")"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(n.span,{className:"mrel",children:"="}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"s"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"in"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord",children:"4"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"\u03c0"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"x"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})]})]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"program main\n  use easifembase\n  use easifemclasses\n  implicit none\n  integer( i4b ) :: n, ii\n  real(dfp), allocatable :: fval( : ), pt( : ), wt(:), &\n    & f1val(:), error(:, :), D(:,:)\n  real( dfp ), parameter :: tol=1.0E-10\n  type(string) :: astr\n  integer( i4b ), parameter :: quadType = GaussLobatto\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Structure of D for odd N"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'  !!\n  n = 5\n  !!\n  call reallocate( pt, n+1, wt, n+1, fval, n+1 )\n  !!\n  call Chebyshev1Quadrature( n=n+1,  &\n    & pt=pt, wt=wt, quadType=quadType )\n  !!\n  fval = func1(pt)\n  !!\n  D = Chebyshev1DMatrix(n=n,  x=pt, quadType=quadType)\n  !!\n  CALL display(MdEncode(D), "D="//CHAR_LF)\n'})}),"\n",(0,t.jsx)(n.p,{children:"D ="}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"-8.5"}),(0,t.jsx)(n.td,{children:"10.472"}),(0,t.jsx)(n.td,{children:"-2.8944"}),(0,t.jsx)(n.td,{children:"1.5279"}),(0,t.jsx)(n.td,{children:"-1.1056"}),(0,t.jsx)(n.td,{children:"0.5"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"-2.618"}),(0,t.jsx)(n.td,{children:"1.1708"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"-0.89443"}),(0,t.jsx)(n.td,{children:"0.61803"}),(0,t.jsx)(n.td,{children:"-0.27639"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0.72361"}),(0,t.jsx)(n.td,{children:"-2"}),(0,t.jsx)(n.td,{children:"0.17082"}),(0,t.jsx)(n.td,{children:"1.618"}),(0,t.jsx)(n.td,{children:"-0.89443"}),(0,t.jsx)(n.td,{children:"0.38197"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"-0.38197"}),(0,t.jsx)(n.td,{children:"0.89443"}),(0,t.jsx)(n.td,{children:"-1.618"}),(0,t.jsx)(n.td,{children:"-0.17082"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"-0.72361"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0.27639"}),(0,t.jsx)(n.td,{children:"-0.61803"}),(0,t.jsx)(n.td,{children:"0.89443"}),(0,t.jsx)(n.td,{children:"-2"}),(0,t.jsx)(n.td,{children:"-1.1708"}),(0,t.jsx)(n.td,{children:"2.618"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"-0.5"}),(0,t.jsx)(n.td,{children:"1.1056"}),(0,t.jsx)(n.td,{children:"-1.5279"}),(0,t.jsx)(n.td,{children:"2.8944"}),(0,t.jsx)(n.td,{children:"-10.472"}),(0,t.jsx)(n.td,{children:"8.5"})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Structure of D for even D"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'  !!\n  n = 6\n  !!\n  call reallocate( pt, n+1, wt, n+1, fval, n+1 )\n  !!\n  call Chebyshev1Quadrature( n=n+1,  &\n    & pt=pt, wt=wt, quadType=quadType )\n  !!\n  fval = func1(pt)\n  !!\n  D = Chebyshev1DMatrix(n=n,  x=pt, quadType=quadType)\n  !!\n  CALL display(MdEncode(D), "D="//CHAR_LF)\n'})}),"\n",(0,t.jsx)(n.p,{children:"D ="}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"-12.167"}),(0,t.jsx)(n.td,{children:"14.928"}),(0,t.jsx)(n.td,{children:"-4"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"-1.3333"}),(0,t.jsx)(n.td,{children:"1.0718"}),(0,t.jsx)(n.td,{children:"-0.5"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"-3.7321"}),(0,t.jsx)(n.td,{children:"1.7321"}),(0,t.jsx)(n.td,{children:"2.7321"}),(0,t.jsx)(n.td,{children:"-1.1547"}),(0,t.jsx)(n.td,{children:"0.73205"}),(0,t.jsx)(n.td,{children:"-0.57735"}),(0,t.jsx)(n.td,{children:"0.26795"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"-2.7321"}),(0,t.jsx)(n.td,{children:"0.33333"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"-1"}),(0,t.jsx)(n.td,{children:"0.73205"}),(0,t.jsx)(n.td,{children:"-0.33333"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"-0.5"}),(0,t.jsx)(n.td,{children:"1.1547"}),(0,t.jsx)(n.td,{children:"-2"}),(0,t.jsx)(n.td,{children:"5.17058E-14"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"-1.1547"}),(0,t.jsx)(n.td,{children:"0.5"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0.33333"}),(0,t.jsx)(n.td,{children:"-0.73205"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"-2"}),(0,t.jsx)(n.td,{children:"-0.33333"}),(0,t.jsx)(n.td,{children:"2.7321"}),(0,t.jsx)(n.td,{children:"-1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"-0.26795"}),(0,t.jsx)(n.td,{children:"0.57735"}),(0,t.jsx)(n.td,{children:"-0.73205"}),(0,t.jsx)(n.td,{children:"1.1547"}),(0,t.jsx)(n.td,{children:"-2.7321"}),(0,t.jsx)(n.td,{children:"-1.7321"}),(0,t.jsx)(n.td,{children:"3.7321"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0.5"}),(0,t.jsx)(n.td,{children:"-1.0718"}),(0,t.jsx)(n.td,{children:"1.3333"}),(0,t.jsx)(n.td,{children:"-2"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"-14.928"}),(0,t.jsx)(n.td,{children:"12.167"})]})]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'  !!\n  error = zeros(30, 2, 1.0_DFP)\n  !!\n  DO n = 1, SIZE(error,1)\n    !!\n    call reallocate( pt, n+1, wt, n+1, fval, n+1 )\n    !!\n    call Chebyshev1Quadrature( n=n+1,  &\n      & pt=pt, wt=wt, quadType=quadType )\n    !!\n    fval = func1(pt)\n    !!\n    D = Chebyshev1DMatrix(n=n,  x=pt, quadType=quadType)\n    !!\n    f1val = dfunc1(pt)\n    !!\n    error(n,1) = n\n    error(n,2) = NORM2( ABS(f1val-MATMUL(D,fval)) )\n    !!\n  END DO\n  !!\n  CALL display( MdEncode(error), "error=")\n'})}),"\n",(0,t.jsx)(n.p,{children:"error="}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"order(n)"}),(0,t.jsx)(n.th,{children:"MAX(err)"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"17.772"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"21.766"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"25.133"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"28.364"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{children:"22.41"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"10"}),(0,t.jsx)(n.td,{children:"31.339"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"15"}),(0,t.jsx)(n.td,{children:"3.7315"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"20"}),(0,t.jsx)(n.td,{children:"6.37404E-02"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"25"}),(0,t.jsx)(n.td,{children:"6.32687E-05"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"30"}),(0,t.jsx)(n.td,{children:"1.32593E-07"})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Define function"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"  contains\n  elemental function func1(x) result(ans)\n    real(dfp), intent(in) :: x\n    real(dfp) :: ans\n    ans = SIN(4.0_DFP * pi * x)\n  end function func1\n  !!\n  elemental function dfunc1(x) result(ans)\n    real(dfp), intent(in) :: x\n    real(dfp) :: ans\n    ans = 4.0_DFP * pi * COS(4.0_DFP * pi * x)\n  end function dfunc1\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"end program main\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}const c={},h="Chebyshev1DMatrix",o={id:"Chebyshev1PolynomialUtility/Chebyshev1DMatrix",title:"Chebyshev1DMatrix",description:"Interface",source:"@site/docs/docs-api/Chebyshev1PolynomialUtility/Chebyshev1DMatrix.md",sourceDirName:"Chebyshev1PolynomialUtility",slug:"/Chebyshev1PolynomialUtility/Chebyshev1DMatrix",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1DMatrix",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Chebyshev1PolynomialUtility/Chebyshev1DMatrix.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chebyshev1Beta",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1Beta"},next:{title:"Chebyshev1Eval",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1Eval"}},x={},u=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2}];function j(e){const n={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"chebyshev1dmatrix",children:"Chebyshev1DMatrix"}),"\n",(0,t.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION Chebyshev1DMatrix(n, x, quadType) &\n    & RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n      !! order of Chebyshev1 polynomial\n    REAL(DFP), INTENT(IN) :: x(0:n)\n      !! quadrature points\n    INTEGER(I4B), INTENT(IN) :: quadType\n      !! Gauss and GaussLobatto\n    REAL(DFP) :: ans(0:n, 0:n)\n      !! D matrix\n  END FUNCTION Chebyshev1DMatrix\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(a.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(d,{})}),(0,t.jsx)(a.Z,{value:"close",label:"\u21a2 ",default:!0})]})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},85162:(e,n,s)=>{s.d(n,{Z:()=>a});s(67294);var t=s(86010);const r={tabItem:"tabItem_Ymn6"};var l=s(85893);function a(e){let{children:n,hidden:s,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,a),hidden:s,children:n})}},74866:(e,n,s)=>{s.d(n,{Z:()=>N});var t=s(67294),r=s(86010),l=s(12466),a=s(16550),i=s(20469),d=s(91980),c=s(67392),h=s(50012);function o(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return o(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function u(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:s}=e;const r=(0,a.k6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,d._X)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,l=x(e),[a,d]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[c,o]=j({queryString:s,groupId:r}),[m,p]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,h.Nk)(s);return[r,(0,t.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:r}),f=(()=>{const e=c??m;return u({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{f&&d(f)}),[f]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);d(e),o(e),p(e)}),[o,p,l]),tabValues:l}}var p=s(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(85893);function y(e){let{className:n,block:s,selectedValue:t,selectValue:a,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),h=e=>{const n=e.currentTarget,s=d.indexOf(n),r=i[s].value;r!==t&&(c(n),a(r))},o=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const s=d.indexOf(e.currentTarget)+1;n=d[s]??d[0];break}case"ArrowLeft":{const s=d.indexOf(e.currentTarget)-1;n=d[s]??d[d.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:o,onClick:h,...l,className:(0,r.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:r}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function g(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(y,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function N(e){const n=(0,p.Z)();return(0,b.jsx)(g,{...e,children:o(e.children)},String(n))}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>a});var t=s(67294);const r={},l=t.createContext(r);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);