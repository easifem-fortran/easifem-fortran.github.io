"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[56131],{10410:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>f,contentTitle:()=>h,default:()=>y,frontMatter:()=>d,metadata:()=>p,toc:()=>m});var t=a(85893),r=a(11151),s=a(74866),l=a(85162);function o(e){const n={code:"code",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This example shows the usage of ",(0,t.jsx)(n.code,{children:"Chebyshev1Transform"})," method."]}),"\n",(0,t.jsx)(n.li,{children:"This routine performs the forward Chebyshev1 transform."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real(dfp), allocatable :: uhat(:), u( : ), pt( : ), &\n    & wt(:), exact(:), error(:,:)\n  real( dfp ), parameter :: tol=1.0E-10\n  type(string) :: astr\n  integer( i4b ), parameter :: quadType = GaussLobatto\n  n = 10\n  call reallocate( pt, n+1, wt, n+1 )\n  call Chebyshev1Quadrature( n=n+1, pt=pt, wt=wt, &\n    & quadType=quadType )\n  u = Chebyshev1Eval(n=5_I4B, x=pt)\n  uhat = Chebyshev1Transform(n=n, coeff=u, x=pt, w=wt, &\n    & quadType=quadType)\n  uhat( 6 ) = uhat( 6 ) - 1.0_dFP\n  CALL ok( SOFTEQ( NORM2(uhat), 0.0_DFP, tol), "test"  )\n  n = 10\n  call reallocate( pt, n+1, wt, n+1, exact, n+1 )\n  call Chebyshev1Quadrature( n=n+1, &\n    & pt=pt, wt=wt, quadType=quadType )\n  !u = 1.0 / (1.0 + 16.0*pt**2)\n  u = 1.0*pt + 2.0*pt**2\n  uhat = Chebyshev1Transform(n=n, &\n    & coeff=u, x=pt, w=wt, quadType=quadType)\n  exact(1:3) = 1.0_DFP\n  call ok( ALL(SOFTEQ(exact, uhat, tol)), "n=10 "//CHAR_LF)\nend program main\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}function i(e){const n={code:"code",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This example shows the usage of ",(0,t.jsx)(n.code,{children:"Chebyshev1Transform"})," method."]}),"\n",(0,t.jsx)(n.li,{children:"This routine performs the forward Chebyshev1 transform."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real(dfp), allocatable :: uhat(:), u( : ), pt( : ), &\n    & wt(:), exact(:), error(:,:)\n  real( dfp ), parameter :: tol=1.0E-10\n  type(string) :: astr\n  integer( i4b ), parameter :: quadType = Gauss\n  n = 10\n  call reallocate( pt, n+1, wt, n+1 )\n  call Chebyshev1Quadrature( n=n+1, pt=pt, wt=wt, &\n    & quadType=quadType )\n  u = Chebyshev1Eval(n=5_I4B, x=pt)\n  uhat = Chebyshev1Transform(n=n, coeff=u, x=pt, w=wt, &\n    & quadType=quadType)\n  uhat( 6 ) = uhat( 6 ) - 1.0_dFP\n  CALL ok( SOFTEQ( NORM2(uhat), 0.0_DFP, tol), "test"  )\n  n = 10\n  call reallocate( pt, n+1, wt, n+1, exact, n+1 )\n  call Chebyshev1Quadrature( n=n+1, &\n    & pt=pt, wt=wt, quadType=quadType )\n  !u = 1.0 / (1.0 + 16.0*pt**2)\n  u = 1.0*pt + 2.0*pt**2\n  uhat = Chebyshev1Transform(n=n, &\n    & coeff=u, x=pt, w=wt, quadType=quadType)\n  exact(1:3) = 1.0_DFP\n  call ok( ALL(SOFTEQ(exact, uhat, tol)), "n=10 "//CHAR_LF)\nend program main\n'})})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}const d={},h="Chebyshev1Transform",p={id:"Chebyshev1PolynomialUtility/Chebyshev1Transform",title:"Chebyshev1Transform",description:"Discrete Chebyshev1 transform.",source:"@site/docs/docs-api/Chebyshev1PolynomialUtility/Chebyshev1Transform.md",sourceDirName:"Chebyshev1PolynomialUtility",slug:"/Chebyshev1PolynomialUtility/Chebyshev1Transform",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1Transform",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Chebyshev1PolynomialUtility/Chebyshev1Transform.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chebyshev1Quadrature",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1Quadrature"},next:{title:"Chebyshev1Zeros",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1Zeros"}},f={},m=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"Interface 3",id:"interface-3",level:2}];function b(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"chebyshev1transform",children:"Chebyshev1Transform"}),"\n",(0,t.jsx)(n.p,{children:"Discrete Chebyshev1 transform."}),"\n","\n","\n",(0,t.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION Chebyshev1Transform(n, coeff, x, w, &\n    &  quadType) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of jacobi polynomial\n    REAL(DFP), INTENT(IN) :: coeff(0:n)\n    !! nodal value (at quad points)\n    REAL(DFP), INTENT(IN) :: x(0:n)\n    !! quadrature points\n    REAL(DFP), INTENT(IN) :: w(0:n)\n    !! weights\n    INTEGER(I4B), INTENT(IN) :: quadType\n    !! Quadrature type, Gauss, GaussLobatto, GaussRadau, GaussRadauLeft\n    !! GaussRadauRight\n    REAL(DFP) :: ans(0:n)\n    !! modal values  or coefficients\n  END FUNCTION Chebyshev1Transform\nEND INTERFACE\n"})})}),(0,t.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(u,{})}),(0,t.jsx)(l.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,t.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION Chebyshev1Transform(n, coeff, x, w, &\n    & quadType) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of polynomial\n    REAL(DFP), INTENT(IN) :: coeff(0:, 1:)\n    !! nodal value (at quad points)\n    REAL(DFP), INTENT(IN) :: x(0:n)\n    !! quadrature points\n    REAL(DFP), INTENT(IN) :: w(0:n)\n    !! weights\n    INTEGER(I4B), INTENT(IN) :: quadType\n    !! Quadrature type, Gauss, GaussLobatto, GaussRadau, GaussRadauLeft\n    !! GaussRadauRight\n    REAL(DFP) :: ans(0:n, 1:SIZE(coeff, 2))\n    !! modal values  or coefficients for each column of val\n  END FUNCTION Chebyshev1Transform\nEND INTERFACE\n"})})}),(0,t.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example"}),(0,t.jsx)(l.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,t.jsx)(n.h2,{id:"interface-3",children:"Interface 3"}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION Chebyshev1Transform(n, f, quadType) &\n    & RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of jacobi polynomial\n    PROCEDURE(iface_1DFunction), POINTER, INTENT(IN) :: f\n    !! 1D space function\n    INTEGER(I4B), INTENT(IN) :: quadType\n    !! Quadrature type, Gauss, GaussLobatto, GaussRadau, GaussRadauLeft\n    !! GaussRadauRight\n    REAL(DFP) :: ans(0:n)\n    !! modal values  or coefficients\n  END FUNCTION Chebyshev1Transform\nEND INTERFACE\n"})})}),(0,t.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(c,{})}),(0,t.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function y(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>l});a(67294);var t=a(86010);const r={tabItem:"tabItem_Ymn6"};var s=a(85893);function l(e){let{children:n,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,l),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>E});var t=a(67294),r=a(86010),s=a(12466),l=a(16550),o=a(20469),u=a(91980),i=a(67392),c=a(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:a}=e;const r=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,u._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,s=h(e),[l,u]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[i,d]=f({queryString:a,groupId:r}),[m,b]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Nk)(a);return[r,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),y=(()=>{const e=i??m;return p({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{y&&u(y)}),[y]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=a(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var T=a(85893);function v(e){let{className:n,block:a,selectedValue:t,selectValue:l,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.o5)(),c=e=>{const n=e.currentTarget,a=u.indexOf(n),r=o[a].value;r!==t&&(i(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;n=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;n=u[a]??u[u.length-1];break}}n?.focus()};return(0,T.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,T.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function x(e){let{lazy:n,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,T.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function N(e){const n=m(e);return(0,T.jsxs)("div",{className:(0,r.Z)("tabs-container",y.tabList),children:[(0,T.jsx)(v,{...e,...n}),(0,T.jsx)(x,{...e,...n})]})}function E(e){const n=(0,b.Z)();return(0,T.jsx)(N,{...e,children:d(e.children)},String(n))}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>l});var t=a(67294);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);