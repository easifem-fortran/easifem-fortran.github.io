"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[78685],{6370:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>x,contentTitle:()=>g,default:()=>b,frontMatter:()=>p,metadata:()=>f,toc:()=>h});var a=r(85893),t=r(11151),o=r(74866),l=r(85162);function i(e){const n={code:"code",pre:"pre",...(0,t.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: i1, i2, order, elemType\n  real(dfp), allocatable :: ans( :, : ),  xij(:,:)\n\n  order=1; elemType=Line\n  xij = EquidistancePoint(order=order, elemType=elemType)\n  ans = LagrangeVandermonde(xij=xij,  order=order, elemType=elemType )\n  call display( ans, "ans (order="//tostring(order)//")=" )\n  call blanklines(nol=2)\n\n  order=2; elemType=Line\n  xij = EquidistancePoint(order=order, elemType=elemType)\n  ans = LagrangeVandermonde(xij=xij,  order=order, elemType=elemType )\n  call display( ans, "ans (order="//tostring(order)//")=" )\n  call blanklines(nol=2)\n\n  order=3; elemType=Line\n  xij = EquidistancePoint(order=order, elemType=elemType)\n  ans = LagrangeVandermonde(xij=xij,  order=order, elemType=elemType )\n  call display( ans, "ans (order="//tostring(order)//")=" )\n  call blanklines(nol=2)\nend program main\n'})}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:"See results"}),(0,a.jsx)("div",{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"  ans (order=1)=  \n------------------\n 1.00000  -1.00000\n 1.00000   1.00000\n \n       ans (order=2)=       \n----------------------------\n 1.00000  -1.00000   1.00000\n 1.00000   1.00000   1.00000\n 1.00000   0.00000   0.00000\n \n \n            ans (order=3)=            \n--------------------------------------\n 1.00000  -1.00000   1.00000  -1.00000\n 1.00000   1.00000   1.00000   1.00000\n 1.00000  -0.33333   0.11111  -0.03704\n 1.00000   0.33333   0.11111   0.03704\n"})})})]})]})}function s(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}function d(e){const n={code:"code",pre:"pre",...(0,t.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: i1, i2, order, elemType\n  real(dfp), allocatable :: ans( :, : ),  xij(:,:)\n\n  order=1; elemType=Triangle\n  xij = EquidistancePoint(order=order, elemType=elemType)\n  ans = LagrangeVandermonde(xij=xij,  order=order, elemType=elemType )\n  call display( ans, "ans (order="//tostring(order)//")=" )\n  call blanklines(nol=2)\n\n  order=2; \n  xij = EquidistancePoint(order=order, elemType=elemType)\n  ans = LagrangeVandermonde(xij=xij,  order=order, elemType=elemType )\n  call display( ans, "ans (order="//tostring(order)//")=" )\n  call blanklines(nol=2)\n\n  order=3; \n  xij = EquidistancePoint(order=order, elemType=elemType)\n  ans = LagrangeVandermonde(xij=xij,  order=order, elemType=elemType )\n  call display( ans, "ans (order="//tostring(order)//")=" )\n  call blanklines(nol=2)\nend program main\n'})}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:"See results"}),(0,a.jsx)("div",{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"      ans (order=1)=     \n-------------------------\n1.00000  0.00000  0.00000\n1.00000  1.00000  0.00000\n1.00000  0.00000  1.00000\n \n \n                   ans (order=2)=                   \n----------------------------------------------------\n1.00000  0.00000  0.00000  0.00000  0.00000  0.00000\n1.00000  1.00000  1.00000  0.00000  0.00000  0.00000\n1.00000  0.00000  0.00000  1.00000  0.00000  1.00000\n1.00000  0.50000  0.25000  0.00000  0.00000  0.00000\n1.00000  0.50000  0.25000  0.50000  0.25000  0.25000\n1.00000  0.00000  0.00000  0.50000  0.00000  0.25000\n \n \nans (order=3)=\n\n1.00000  0.00000  0.00000  0.00000,  ...,  0.00000  0.00000  0.00000  0.00000\n1.00000  1.00000  1.00000  1.00000,     ,  0.00000  0.00000  0.00000  0.00000\n1.00000  0.00000  0.00000  0.00000,     ,  0.00000  1.00000  0.00000  1.00000\n1.00000  0.33333  0.11111  0.03704,     ,  0.00000  0.00000  0.00000  0.00000\n.\n.\n.\n1.00000  0.33333  0.11111  0.03704,  ...,  0.07407  0.44444  0.14815  0.29630\n1.00000  0.00000  0.00000  0.00000,     ,  0.00000  0.44444  0.00000  0.29630\n1.00000  0.00000  0.00000  0.00000,     ,  0.00000  0.11111  0.00000  0.03704\n1.00000  0.33333  0.11111  0.03704,     ,  0.03704  0.11111  0.03704  0.03704\n"})})})]})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}function u(e){const n={code:"code",pre:"pre",...(0,t.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: i1, i2, order, elemType\n  real(dfp), allocatable :: ans( :, : ),  xij(:,:)\n\n  order=1; elemType=Quadrangle \n  xij = EquidistancePoint(order=order, elemType=elemType)\n  ans = LagrangeVandermonde(xij=xij,  order=order, elemType=elemType )\n  call display( ans, "ans (order="//tostring(order)//")=" )\n  call blanklines(nol=2)\n\n  order=2; \n  xij = EquidistancePoint(order=order, elemType=elemType)\n  ans = LagrangeVandermonde(xij=xij,  order=order, elemType=elemType )\n  call display( ans, "ans (order="//tostring(order)//")=" )\n  call blanklines(nol=2)\n\n  order=3; \n  xij = EquidistancePoint(order=order, elemType=elemType)\n  ans = LagrangeVandermonde(xij=xij,  order=order, elemType=elemType )\n  call display( ans, "ans (order="//tostring(order)//")=" )\n  call blanklines(nol=2)\nend program main\n'})}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:"See results"}),(0,a.jsx)("div",{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"            ans (order=1)=            \n--------------------------------------\n 1.00000  -1.00000  -1.00000   1.00000\n 1.00000   1.00000  -1.00000  -1.00000\n 1.00000   1.00000   1.00000   1.00000\n 1.00000  -1.00000   1.00000  -1.00000\n \n \nans (order=2)=\n 1.00000  -1.00000   1.00000  -1.00000,  ...,  -1.00000   1.00000  -1.00000   1.00000\n 1.00000   1.00000   1.00000  -1.00000,     ,  -1.00000   1.00000   1.00000   1.00000\n 1.00000   1.00000   1.00000   1.00000,     ,   1.00000   1.00000   1.00000   1.00000\n 1.00000  -1.00000   1.00000   1.00000,     ,   1.00000   1.00000  -1.00000   1.00000\n.\n.\n.\n 1.00000   1.00000   1.00000   0.00000,  ...,  0.00000  0.00000  0.00000  0.00000\n 1.00000   0.00000   0.00000   1.00000,     ,  0.00000  1.00000  0.00000  0.00000\n 1.00000  -1.00000   1.00000   0.00000,     ,  0.00000  0.00000  -.00000  0.00000\n 1.00000   0.00000   0.00000   0.00000,     ,  0.00000  0.00000  0.00000  0.00000\n \n \nans (order=3)=\n 1.00000  -1.00000   1.00000  -1.00000,  ...,  -1.00000   1.00000  -1.00000   1.00000\n 1.00000   1.00000   1.00000   1.00000,     ,  -1.00000  -1.00000  -1.00000  -1.00000\n 1.00000   1.00000   1.00000   1.00000,     ,   1.00000   1.00000   1.00000   1.00000\n 1.00000  -1.00000   1.00000  -1.00000,     ,   1.00000  -1.00000   1.00000  -1.00000\n.\n.\n.\n 1.00000  -0.33333   0.11111  -0.03704,  ...,  -3.70370E-2   1.23457E-2  -4.11523E-3   1.37174E-3\n 1.00000   0.33333   0.11111   0.03704,     ,  -3.70370E-2  -1.23457E-2  -4.11523E-3  -1.37174E-3\n 1.00000   0.33333   0.11111   0.03704,     ,   3.70370E-2   1.23457E-2   4.11523E-3   1.37174E-3\n 1.00000  -0.33333   0.11111  -0.03704,     ,   3.70370E-2  -1.23457E-2   4.11523E-3  -1.37174E-3\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}const p={},g="LagrangeVandermonde",f={id:"LagrangePolynomialUtility/LagrangeVandermonde",title:"LagrangeVandermonde",description:"This routine returns the Vandermonde matrix.",source:"@site/docs/docs-api/LagrangePolynomialUtility/LagrangeVandermonde.md",sourceDirName:"LagrangePolynomialUtility",slug:"/LagrangePolynomialUtility/LagrangeVandermonde",permalink:"/docs-api/LagrangePolynomialUtility/LagrangeVandermonde",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/LagrangePolynomialUtility/LagrangeVandermonde.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LagrangeInDOF",permalink:"/docs-api/LagrangePolynomialUtility/LagrangeInDOF"},next:{title:"Lapack95",permalink:"/docs-api/Lapack95/"}},x={},h=[{value:"Interface",id:"interface",level:2}];function y(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"lagrangevandermonde",children:"LagrangeVandermonde"}),"\n",(0,a.jsx)(n.p,{children:"This routine returns the Vandermonde matrix."}),"\n",(0,a.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION LagrangeVandermonde(x, order, elemType) &\n    & RESULT(ans)\n    REAL(DFP), INTENT(IN) :: x(:, :)\n  !!  points in $x_{iJ}$ format\n    INTEGER(I4B), INTENT(IN) :: order\n  !! order\n    INTEGER(I4B), INTENT(IN) :: elemType\n  !! element type\n    REAL(DFP), ALLOCATABLE :: ans(:, :)\n  !! vandermonde matrix nrows = number of points\n  !! ncols = number of dof\n  END FUNCTION LagrangeVandermonde\nEND INTERFACE\n"})})}),(0,a.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,a.jsx)(s,{})}),(0,a.jsx)(l.Z,{value:"example2",label:"\ufe0f\u0700 Example 2",children:(0,a.jsx)(c,{})}),(0,a.jsx)(l.Z,{value:"example3",label:"\ufe0f\u0700 Example 3",children:(0,a.jsx)(m,{})}),(0,a.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function b(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(y,{...e})}):y(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>l});r(67294);var a=r(86010);const t={tabItem:"tabItem_Ymn6"};var o=r(85893);function l(e){let{children:n,hidden:r,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(t.tabItem,l),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>E});var a=r(67294),t=r(86010),o=r(12466),l=r(16550),i=r(20469),s=r(91980),d=r(67392),c=r(50012);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const t=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace({...t.location,search:n.toString()})}),[o,t])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,o=m(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[d,u]=g({queryString:r,groupId:t}),[f,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,o]=(0,c.Nk)(r);return[t,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:t}),h=(()=>{const e=d??f;return p({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),x(e)}),[u,x,o]),tabValues:o}}var x=r(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(85893);function b(e){let{className:n,block:r,selectedValue:a,selectValue:l,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),c=e=>{const n=e.currentTarget,r=s.indexOf(n),t=i[r].value;t!==a&&(d(n),l(t))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;n=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;n=s[r]??s[s.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>s.push(e),onKeyDown:u,onClick:c,...o,className:(0,t.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:t}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function T(e){const n=f(e);return(0,y.jsxs)("div",{className:(0,t.Z)("tabs-container",h.tabList),children:[(0,y.jsx)(b,{...e,...n}),(0,y.jsx)(j,{...e,...n})]})}function E(e){const n=(0,x.Z)();return(0,y.jsx)(T,{...e,children:u(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>l});var a=r(67294);const t={},o=a.createContext(t);function l(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);