"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[15645],{84560:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var i=t(85893),a=t(11151),o=t(74866),r=t(85162);function s(e){const n={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'program main\n  use easifemBase\n  implicit none\n  integer(i4b) :: order\n  real(dfp) :: x\n  real(dfp), allocatable :: xij(:,:), coeff(:,:), ans(:, :)\n  character( len = * ), parameter :: layout="VEFC" \n  integer(i4b) :: ipType\n  !! "INCREASING"\n  xij = zeros(1, 2, 1.0_DFP)\n  xij(1, :) = [0,1]\n  order = 4_I4B\n\n  iptype = Equidistance\n  ans = InterpolationPoint_Line(order=order, iptype=iptype, layout=layout, xij=xij)\n  call display(ans, "Equidistance: ")\n\n  iptype = GaussLegendre\n  ans = InterpolationPoint_Line(order=order, iptype=iptype, layout=layout, xij=xij)\n  call display(ans, "GaussLegendre: ")\n\n  iptype = GaussLegendreLobatto \n  ans = InterpolationPoint_Line(order=order, iptype=iptype, layout=layout, xij=xij)\n  call display(ans, "GaussLegendreLobatto: ")\n\n  iptype = GaussChebyshev\n  ans = InterpolationPoint_Line(order=order, iptype=iptype, layout=layout, xij=xij)\n  call display(ans, "GaussChebyshev: ")\n\n  iptype = GaussChebyshevLobatto\n  ans = InterpolationPoint_Line(order=order, iptype=iptype, layout=layout, xij=xij)\n  call display(ans, "GaussChebyshevLobatto: ")\n\nend program main\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"               Equidistance:               \n-------------------------------------------\n0.00000  1.00000  0.25000  0.50000  0.75000\n                 GaussLegendre:                 \n------------------------------------------------\n0.046910  0.230765  0.500000  0.769235  0.953090\n             GaussLegendreLobatto:              \n------------------------------------------------\n-0.00000   1.00000   0.17267   0.50000   0.82733\n                GaussChebyshev:                 \n------------------------------------------------\n0.024472  0.206107  0.500000  0.793893  0.975528\n          GaussChebyshevLobatto:           \n-------------------------------------------\n0.00000  1.00000  0.14645  0.50000  0.85355\n"})})]})}function l(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}const c={sidebar_label:"InterpolationPoint"},d="InterpolationPoint_Line",u={id:"LineInterpolationUtility/InterpolationPoint_Line",title:"InterpolationPoint_Line",description:"This routine returns the interplation points on the line.",source:"@site/docs/docs-api/LineInterpolationUtility/InterpolationPoint_Line.md",sourceDirName:"LineInterpolationUtility",slug:"/LineInterpolationUtility/InterpolationPoint_Line",permalink:"/docs-api/LineInterpolationUtility/InterpolationPoint_Line",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/LineInterpolationUtility/InterpolationPoint_Line.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{sidebar_label:"InterpolationPoint"},sidebar:"tutorialSidebar",previous:{title:"EquidistancePoint",permalink:"/docs-api/LineInterpolationUtility/EquidistancePoint_Line"},next:{title:"LagrangeCoeff",permalink:"/docs-api/LineInterpolationUtility/LagrangeCoeff_Line"}},p={},h=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"interpolationpoint_line",children:"InterpolationPoint_Line"}),"\n",(0,i.jsx)(n.p,{children:"This routine returns the interplation points on the line."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)("span",{class:"badge badge--primary",children:" Calling example "}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"ans = InterpolationPoint_Line(order, ipType, layout, xij)\n"})}),"\n",(0,i.jsx)("span",{class:"badge badge--secondary",children:" Interplation points: "}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ipType"})," is interpolation point type, it can take following values:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Equidistance"}),", uniformly/evenly distributed points"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GaussLegendre"}),", Zeros of Legendre polynomials, all nodes are strictly inside the domain."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GaussLegendreLobatto"})," are zeros of Lobatto polynomials they always contain boundary points"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GaussChebyshev"})," Zeros of Chebyshev polynomials of first kind, all nodes are internal"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GaussChebyshevLobatto"})," they contain boundary points ",(0,i.jsx)(n.code,{children:"GaussJacobi"})," and ",(0,i.jsx)(n.code,{children:"GaussJacobiLobatto"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n","\n","\n",(0,i.jsxs)(o.Z,{children:[(0,i.jsxs)(r.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'INTERFACE InterpolationPoint_Line\n  MODULE FUNCTION InterpolationPoint_Line1(order, ipType, &\n    & layout, xij, alpha, beta, lambda) RESULT(ans)\n    !!\n    INTEGER(I4B), INTENT(IN) :: order\n    !! Order of interpolation\n    INTEGER(I4B), INTENT(IN) :: ipType\n    !! Interpolation point type\n    !! Equidistance, GaussLegendre, GaussLegendreLobatto, GaussChebyshev,\n    !! GaussChebyshevLobatto, GaussJacobi, GaussJacobiLobatto\n    CHARACTER(*), INTENT(IN) :: layout\n    !! "VEFC"\n    !! "INCREASING"\n    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)\n    !! domain of interpolation\n    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha\n    !! Jacobi parameter\n    REAL(DFP), OPTIONAL, INTENT(IN) :: beta\n    !! Jacobi parameter\n    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda\n    !! Ultraspherical parameter\n    REAL(DFP), ALLOCATABLE :: ans(:, :)\n    !! interpolation points in xij format\n    !! size(ans,1) = 1 (if xij not present) else size(xij,1)\n    !! size(ans,2) = order+1\n  END FUNCTION InterpolationPoint_Line1\nEND INTERFACE InterpolationPoint_Line\n'})}),(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.code,{children:"xij"})})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"xij"})," contains nodal coordinates of line in xij format."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"SIZE(xij,1) = nsd, and SIZE(xij,2)=2"}),"\n",(0,i.jsx)(n.li,{children:"If xij is absent then [-1,1] is used"}),"\n"]}),(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.code,{children:"ans"})})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ans"})," contains the equidistance points. If ",(0,i.jsx)(n.code,{children:"xij"})," is present, then the number of rows in xij is same as the number of rows in xij. Otherwise, ",(0,i.jsx)(n.code,{children:"ans"})," has 1 row (for 1D)."]}),(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.code,{children:"layout"})})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"layout"})," specifies the arrangement of points. Following options are possible:"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"layout=VEFC"})," vertex, edge, face, cell, in this case first two points are boundary points, remaining (from 3 to n) are internal points in increasing order."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"layout=INCREASING"})," points are arranged in increasing order"]}),"\n"]})]}),(0,i.jsx)(r.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,i.jsx)(l,{})}),(0,i.jsx)(r.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,i.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,i.jsxs)(o.Z,{children:[(0,i.jsxs)(r.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'INTERFACE InterpolationPoint_Line\n  MODULE FUNCTION InterpolationPoint_Line2(order, ipType, xij, &\n    & layout, alpha, beta, lambda) RESULT(ans)\n    !!\n    INTEGER(I4B), INTENT(IN) :: order\n    !! order of interpolation\n    INTEGER(I4B), INTENT(IN) :: ipType\n    !! Interpolation point type\n    !! Equidistance\n    !! GaussLegendre\n    !! GaussLegendreLobatto\n    !! GaussChebyshev,\n    !! GaussChebyshevLobatto\n    !! GaussJacobi\n    !! GaussJacobiLobatto\n    REAL(DFP), INTENT(IN) :: xij(2)\n    !! end points\n    CHARACTER(*), INTENT(IN) :: layout\n    !! "VEFC"\n    !! "INCREASING"\n    !! "DECREASING"\n    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha\n    !! Jacobi parameter\n    REAL(DFP), OPTIONAL, INTENT(IN) :: beta\n    !! Jacobi parameter\n    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda\n    !! Ultraspherical parameter\n    REAL(DFP), ALLOCATABLE :: ans(:)\n    !! one dimensional interpolation point\n  END FUNCTION InterpolationPoint_Line2\nEND INTERFACE InterpolationPoint_Line\n'})}),(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.code,{children:"xij"})})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"xij"})," contains nodal coordinates of line in 1D."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"xij(1)"})," contains 1D coordinates of starting point of line."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"xij(2)"})," contains the 1D coordinates of ending point of line."]}),"\n"]}),(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.code,{children:"ans"})})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ans"})," contains the equidistance points. If ",(0,i.jsx)(n.code,{children:"xij"})," is present, then the number of rows in xij is same as the number of rows in xij. Otherwise, ",(0,i.jsx)(n.code,{children:"ans"})," has 1 row (for 1D)."]}),(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.code,{children:"layout"})})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"layout"})," specifies the arrangement of points. Following options are possible:"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"layout=VEFC"})," vertex, edge, face, cell, in this case first two points are boundary points, remaining (from 3 to n) are internal points in increasing order."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"layout=INCREASING"})," points are arranged in increasing order"]}),"\n"]})]}),(0,i.jsx)(r.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,i.jsx)(n.p,{children:"See above example."})}),(0,i.jsx)(r.Z,{value:"close",label:"\u21a2 "})]})]})}function f(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var i=t(86010);const a={tabItem:"tabItem_Ymn6"};var o=t(85893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,i.Z)(a.tabItem,r),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>L});var i=t(67294),a=t(86010),o=t(12466),r=t(16550),s=t(20469),l=t(91980),c=t(67392),d=t(50012);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const a=(0,r.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,i.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=p(e),[r,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:o}))),[c,u]=x({queryString:t,groupId:a}),[f,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,d.Nk)(t);return[a,(0,i.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),m=(()=>{const e=c??f;return h({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,o]),tabValues:o}}var j=t(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function I(e){let{className:n,block:t,selectedValue:i,selectValue:r,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==i&&(c(n),r(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.Z)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function N(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(I,{...e,...n}),(0,b.jsx)(y,{...e,...n})]})}function L(e){const n=(0,j.Z)();return(0,b.jsx)(N,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var i=t(67294);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);