"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[35934],{26789:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>h,default:()=>b,frontMatter:()=>u,metadata:()=>p,toc:()=>f});var r=t(85893),a=t(11151),l=t(74866),s=t(85162);function o(e){const n={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This example shows the usage of ",(0,r.jsx)(n.code,{children:"LegendreEvalAll"})," method."]}),"\n",(0,r.jsx)(n.p,{children:"This routine evaluates Legendre polynomial upto order n, for many points"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ), allocatable :: ans( :, : ), x( : )\n  type(string) :: astr\n  x = [-1.0, 0.0, 1.0]\n  n = 3\n  ans= LegendreEvalAll( n=n, x=x )\n  astr = MdEncode( ans )\n  call display( astr%chars(), "" )\nend program main\n'})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"P0"}),(0,r.jsx)(n.th,{children:"P1"}),(0,r.jsx)(n.th,{children:"P2"}),(0,r.jsx)(n.th,{children:"P3"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"-1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"-0.5"}),(0,r.jsx)(n.td,{children:"-0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"1"})]})]})]})]})}function i(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}function d(e){const n={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This example shows the usage of ",(0,r.jsx)(n.code,{children:"LegendreEvalAll"})," method."]}),"\n",(0,r.jsx)(n.p,{children:"This routine evaluates Legendre polynomial upto order n, for many points"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ), allocatable :: ans( : ), x\n  type(string) :: astr\n  x = -1.0_DFP\n  n = 3\n  ans= LegendreEvalAll( n=n, x=x )\n  astr = MdEncode( ans )\n  call display( astr%chars(), "" )\nend program main\n'})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"P0"}),(0,r.jsx)(n.th,{children:"P1"}),(0,r.jsx)(n.th,{children:"P2"}),(0,r.jsx)(n.th,{children:"P3"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"-1"})]})})]})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}const u={},h="LegendreEvalAll",p={id:"LegendrePolynomialUtility/LegendreEvalAll",title:"LegendreEvalAll",description:"Evaluate Legendre polynomials from order = 0 to n at single or several points.",source:"@site/docs/docs-api/LegendrePolynomialUtility/LegendreEvalAll.md",sourceDirName:"LegendrePolynomialUtility",slug:"/LegendrePolynomialUtility/LegendreEvalAll",permalink:"/docs-api/LegendrePolynomialUtility/LegendreEvalAll",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/LegendrePolynomialUtility/LegendreEvalAll.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LegendreEval",permalink:"/docs-api/LegendrePolynomialUtility/LegendreEval"},next:{title:"LegendreEvalSum",permalink:"/docs-api/LegendrePolynomialUtility/LegendreEvalSum"}},m={},f=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2}];function x(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"legendreevalall",children:"LegendreEvalAll"}),"\n",(0,r.jsx)(n.p,{children:"Evaluate Legendre polynomials from order = 0 to n at single or several points."}),"\n","\n","\n",(0,r.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(s.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION LegendreEvalAll(n, x) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! Highest order of polynomial.\n    !! Polynomials from 0 to n will be computed.\n    REAL(DFP), INTENT(IN) :: x\n    !! Point of evaluation, $x \\in [-1, 1]$\n    REAL(DFP) :: ans(n + 1)\n    !! Evaluate Legendre polynomial of order = 0 to n (total n+1)\n    !! at point x\n  END FUNCTION LegendreEvalAll\nEND INTERFACE\n"})})}),(0,r.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(i,{})}),(0,r.jsx)(s.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,r.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(s.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION LegendreEvalAll(n, x) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! Highest order of polynomial.\n    !! Polynomials from 0 to n will be computed.\n    REAL(DFP), INTENT(IN) :: x(:)\n    !! number of points, SIZE(x)=M\n    REAL(DFP) :: ans(SIZE(x), n + 1)\n    !! shape (M,N+1)\n  END FUNCTION LegendreEvalAll\nEND INTERFACE\n"})})}),(0,r.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(c,{})}),(0,r.jsx)(s.Z,{value:"close",label:"\u21a2 "})]})]})}function b(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var r=t(86010);const a={tabItem:"tabItem_Ymn6"};var l=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(67294),a=t(86010),l=t(12466),s=t(16550),o=t(20469),i=t(91980),d=t(67392),c=t(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[d,u]=m({queryString:t,groupId:a}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),b=(()=>{const e=d??f;return p({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),x(e)}),[u,x,l]),tabValues:l}}var x=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function v(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),a=o[t].value;a!==r&&(d(n),s(a))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:u,onClick:c,...l,className:(0,a.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function E(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(v,{...e,...n}),(0,g.jsx)(j,{...e,...n})]})}function y(e){const n=(0,x.Z)();return(0,g.jsx)(E,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var r=t(67294);const a={},l=r.createContext(a);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);