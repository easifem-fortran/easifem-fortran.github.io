"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[25912],{26332:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>b,contentTitle:()=>p,default:()=>x,frontMatter:()=>d,metadata:()=>m,toc:()=>f});var t=n(85893),l=n(11151),r=n(74866),o=n(85162);function s(e){const a={code:"code",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["This example shows the usage of ",(0,t.jsx)(a.code,{children:"UnscaledLobattoEval"})," method."]}),"\n",(0,t.jsx)(a.p,{children:"This routine evaluates UnscaledLobatto polynomial of order n, at single point"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ) :: ans, x, exact\n  real( dfp ), parameter :: tol=1.0E-8\n  n = 5\n  x = -0.5_DFP; call callme\n  exact = (1.0_DFP/8.0_DFP/9.0_DFP)*(63.0*x**5-90.0*x**3+27.0*x)\n  call ok( SOFTEQ(ans, exact, tol ))\n  x = 0.5_DFP; call callme\n  exact = (1.0_DFP/8.0_DFP/9.0_DFP)*(63.0*x**5-90.0*x**3+27.0*x)\n  call ok( SOFTEQ(ans, exact, tol ))\n  x = 0.2_DFP; call callme\n  exact = (1.0_DFP/8.0_DFP/9.0_DFP)*(63.0*x**5-90.0*x**3+27.0*x)\n  call ok( SOFTEQ(ans, exact, tol ))\n  contains\n  subroutine callme\n    ans= UnscaledLobattoEval( n=n, x=x )\n  end subroutine callme\nend program main\n"})})]})}function c(e={}){const{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}function i(e){const a={code:"code",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["This example shows the usage of ",(0,t.jsx)(a.code,{children:"UnscaledLobattoEval"})," method."]}),"\n",(0,t.jsx)(a.p,{children:"This routine evaluates UnscaledLobatto polynomial of order n, at several points."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ), allocatable :: ans(:), x(:), exact(:)\n  real( dfp ), parameter :: tol=1.0E-08\n  type(string) :: astr\n  n = 5\n  x = [-0.5, 0.5, 0.5]; call callme\n  exact = (1.0_DFP/8.0_DFP/9.0_DFP)*(63.0*x**5-90.0*x**3+27.0*x)\n  call ok( ALL(SOFTEQ(ans, exact, tol )))\n  contains\n  subroutine callme\n    ans= UnscaledLobattoEval( n=n, x=x )\n  end subroutine callme\nend program main\n"})})]})}function u(e={}){const{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}const d={},p="UnscaledLobattoEval",m={id:"UnscaledLobattoPolynomialUtility/UnscaledLobattoEval",title:"UnscaledLobattoEval",description:"Evaluate UnscaledLobatto polynomial.",source:"@site/docs/docs-api/UnscaledLobattoPolynomialUtility/UnscaledLobattoEval.md",sourceDirName:"UnscaledLobattoPolynomialUtility",slug:"/UnscaledLobattoPolynomialUtility/UnscaledLobattoEval",permalink:"/docs-api/UnscaledLobattoPolynomialUtility/UnscaledLobattoEval",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/UnscaledLobattoPolynomialUtility/UnscaledLobattoEval.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UnscaledLobatto",permalink:"/docs-api/UnscaledLobattoPolynomialUtility/"},next:{title:"UnscaledLobattoEvalAll",permalink:"/docs-api/UnscaledLobattoPolynomialUtility/UnscaledLobattoEvalAll"}},b={},f=[{value:"Interface",id:"interface",level:2},{value:"Interface 2",id:"interface-2",level:2}];function h(e){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"unscaledlobattoeval",children:"UnscaledLobattoEval"}),"\n",(0,t.jsx)(a.p,{children:"Evaluate UnscaledLobatto polynomial."}),"\n","\n","\n",(0,t.jsx)(a.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(o.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION UnscaledLobattoEval(n, x) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    REAL(DFP), INTENT(IN) :: x\n    REAL(DFP) :: ans\n    !! Evaluate UnscaledLobatto polynomial of order n at point x\n  END FUNCTION UnscaledLobattoEval\nEND INTERFACE\n"})})}),(0,t.jsx)(o.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(c,{})}),(0,t.jsx)(o.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,t.jsx)(a.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(o.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION UnscaledLobattoEval(n, x) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    REAL(DFP), INTENT(IN) :: x(:)\n    REAL(DFP) :: ans(SIZE(x))\n    !! Evaluate UnscaledLobatto polynomial of order n at point x\n  END FUNCTION UnscaledLobattoEval\nEND INTERFACE\n"})})}),(0,t.jsx)(o.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(u,{})}),(0,t.jsx)(o.Z,{value:"close",label:"\u21a2 "})]})]})}function x(e={}){const{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:(e,a,n)=>{n.d(a,{Z:()=>o});n(67294);var t=n(86010);const l={tabItem:"tabItem_Ymn6"};var r=n(85893);function o(e){let{children:a,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(l.tabItem,o),hidden:n,children:a})}},74866:(e,a,n)=>{n.d(a,{Z:()=>y});var t=n(67294),l=n(86010),r=n(12466),o=n(16550),s=n(20469),c=n(91980),i=n(67392),u=n(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:l}}=e;return{value:a,label:n,attributes:t,default:l}}))}(n);return function(e){const a=(0,i.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function m(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:n}=e;const l=(0,o.k6)(),r=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,c._X)(r),(0,t.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(l.location.search);a.set(r,e),l.replace({...l.location,search:a.toString()})}),[r,l])]}function f(e){const{defaultValue:a,queryString:n=!1,groupId:l}=e,r=p(e),[o,c]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:r}))),[i,d]=b({queryString:n,groupId:l}),[f,h]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[l,r]=(0,u.Nk)(n);return[l,(0,t.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:l}),x=(()=>{const e=i??f;return m({value:e,tabValues:r})?e:null})();(0,s.Z)((()=>{x&&c(x)}),[x]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),h(e)}),[d,h,r]),tabValues:r}}var h=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function E(e){let{className:a,block:n,selectedValue:t,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,r.o5)(),u=e=>{const a=e.currentTarget,n=c.indexOf(a),l=s[n].value;l!==t&&(i(a),o(l))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;a=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;a=c[n]??c[c.length-1];break}}a?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},a),children:s.map((e=>{let{value:a,label:n,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>c.push(e),onKeyDown:d,onClick:u,...r,className:(0,l.Z)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function U(e){let{lazy:a,children:n,selectedValue:l}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==l})))})}function g(e){const a=f(e);return(0,v.jsxs)("div",{className:(0,l.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(E,{...e,...a}),(0,v.jsx)(U,{...e,...a})]})}function y(e){const a=(0,h.Z)();return(0,v.jsx)(g,{...e,children:d(e.children)},String(a))}},11151:(e,a,n)=>{n.d(a,{Z:()=>s,a:()=>o});var t=n(67294);const l={},r=t.createContext(l);function o(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);