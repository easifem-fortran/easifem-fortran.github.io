"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[5470],{79591:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>u,toc:()=>x});var t=r(85893),a=r(11151),s=r(74866),i=r(85162);function l(e){const n={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'program main\n  use easifemBase\n  implicit none\n  integer(i4b) :: order\n  real(dfp) :: x\n  real(dfp), allocatable :: xij(:,:), coeff(:,:), ans(:, :)\n  character( len = * ), parameter :: layout="INCREASING" \n  integer(i4b) :: quadType\n\n  order = 4_I4B\n\n  quadType = GaussLegendre\n  ans = QuadraturePoint_Line(order=order, quadType=quadType, layout=layout)\n  call display(mdencode(ans), "GaussLegendre: " //char_lf//char_lf ) \n\n  quadType = GaussLegendreLobatto \n  ans = QuadraturePoint_Line(order=order, quadType=quadType, layout=layout, xij=xij)\n  call display(mdencode(ans), "GaussLegendreLobatto: " //char_lf//char_lf)\n\n  quadType = GaussChebyshev\n  ans = QuadraturePoint_Line(order=order, quadType=quadType, layout=layout, xij=xij)\n  call display(mdencode(ans), "GaussChebyshev: "//char_lf//char_lf)\n\n  quadType = GaussChebyshevLobatto\n  ans = QuadraturePoint_Line(order=order, quadType=quadType, layout=layout, xij=xij)\n  call display(mdencode(ans), "GaussChebyshevLobatto: "//char_lf//char_lf)\n\nend program main\n'})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"See results"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n.p,{children:"GaussLegendre:"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"-0.7746"}),(0,t.jsx)(n.td,{children:"3.71231E-16"}),(0,t.jsx)(n.td,{children:"0.7746"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0.55556"}),(0,t.jsx)(n.td,{children:"0.88889"}),(0,t.jsx)(n.td,{children:"0.55556"})]})]})]}),(0,t.jsx)(n.p,{children:"GaussLegendreLobatto:"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"-1"}),(0,t.jsx)(n.td,{children:"-0.44721"}),(0,t.jsx)(n.td,{children:"0.44721"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0.16667"}),(0,t.jsx)(n.td,{children:"0.83333"}),(0,t.jsx)(n.td,{children:"0.83333"}),(0,t.jsx)(n.td,{children:"0.16667"})]})]})]}),(0,t.jsx)(n.p,{children:"GaussChebyshev:"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"-0.86603"}),(0,t.jsx)(n.td,{children:"1.03412E-13"}),(0,t.jsx)(n.td,{children:"0.86603"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.0472"}),(0,t.jsx)(n.td,{children:"1.0472"}),(0,t.jsx)(n.td,{children:"1.0472"})]})]})]}),(0,t.jsx)(n.p,{children:"GaussChebyshevLobatto:"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"-1"}),(0,t.jsx)(n.td,{children:"-0.5"}),(0,t.jsx)(n.td,{children:"0.5"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0.5236"}),(0,t.jsx)(n.td,{children:"1.0472"}),(0,t.jsx)(n.td,{children:"1.0472"}),(0,t.jsx)(n.td,{children:"0.5236"})]})]})]})]})]})]})}function o(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}const d={sidebar_label:"QuadraturePoint"},c="QuadraturePoint_Line",u={id:"LineInterpolationUtility/QuadraturePoint_Line",title:"QuadraturePoint_Line",description:"This routine returns the quadrature points on the line.",source:"@site/docs/docs-api/LineInterpolationUtility/QuadraturePoint_Line.md",sourceDirName:"LineInterpolationUtility",slug:"/LineInterpolationUtility/QuadraturePoint_Line",permalink:"/docs-api/LineInterpolationUtility/QuadraturePoint_Line",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/LineInterpolationUtility/QuadraturePoint_Line.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{sidebar_label:"QuadraturePoint"},sidebar:"tutorialSidebar",previous:{title:"LagrangeInDOF",permalink:"/docs-api/LineInterpolationUtility/LagrangeInDOF_Line"},next:{title:"LinearAlgebraUtility",permalink:"/docs-api/LinearAlgebraUtility/"}},h={},x=[{value:"Interface",id:"interface",level:2},{value:"Interface 2",id:"interface-2",level:2}];function j(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"quadraturepoint_line",children:"QuadraturePoint_Line"}),"\n",(0,t.jsx)(n.p,{children:"This routine returns the quadrature points on the line."}),"\n",(0,t.jsx)(n.p,{children:"Calling example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"ans = QuadraturePoint_Line1( &\n  & order, &\n  & quadType, &\n  & layout, &\n  & xij, &\n  & alpha, &\n  & beta, &\n  & lambda) \n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{children:(0,t.jsx)(n.code,{children:"ans"})}),(0,t.jsxs)(n.p,{children:["The last row of ",(0,t.jsx)(n.code,{children:"ans"})," contains the weights. The first few rows contain the quadrature points. If ",(0,t.jsx)(n.code,{children:"xij"})," is absent then ",(0,t.jsx)(n.code,{children:"ans"})," has two rows. If ",(0,t.jsx)(n.code,{children:"xij"})," is present then ",(0,t.jsx)(n.code,{children:"ans"})," has ",(0,t.jsx)(n.code,{children:"SIZE(xij, 1)+1"})," rows."]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"order"})," is order of integrand"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"xij"})," contains nodal coordinates of line in xij format."]}),"\n",(0,t.jsx)(n.li,{children:"SIZE(xij,1) = nsd, and SIZE(xij,2)=2"}),"\n",(0,t.jsx)(n.li,{children:"If xij is absent then [-1,1] is used"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"quadType"})," is interpolation point type, it can take following values","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"GaussLegendre"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"GaussLegendreLobatto"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"GaussLegendreRadauLeft"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"GaussLegendreRadauRight"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"GaussChebyshev"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"GaussChebyshevLobatto"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"GaussChebyshevRadauLeft"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"GaussChebyshevRadauRight"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"GaussJacobi"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"GaussJacobiLobatto"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"GaussJacobiRadauLeft"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"GaussJacobiRadauRight"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"GaussUltraspherical"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"GaussUltrasphericalLobatto"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"GaussUltrasphericalRadauLeft"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"GaussUltrasphericalRadauRight"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"layout"})," specifies the arrangement of points. Following options are possible:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"layout=VEFC"})," vertex, edge, face, cell, in this case first two points are boundary points, remaining (from 3 to n) are internal points in increasing order."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"layout=INCREASING"})," points are arranged in increasing order"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'INTERFACE QuadraturePoint_Line\n  MODULE FUNCTION QuadraturePoint_Line1( &\n    & order, &\n    & quadType, &\n    & layout, &\n    & xij, &\n    & alpha, &\n    & beta, &\n    & lambda) RESULT(ans)\n    !!\n    INTEGER(I4B), INTENT(IN) :: order\n    !! Order of interpolation\n    INTEGER(I4B), INTENT(IN) :: quadType\n    !! Quadrature point type\n    !! Equidistance,\n    !! GaussLegendre,\n    !! GaussLegendreLobatto,\n    !! GaussChebyshev,\n    !! GaussChebyshevLobatto,\n    !! GaussJacobi,\n    !! GaussJacobiLobatto\n    CHARACTER(*), INTENT(IN) :: layout\n    !! "VEFC"\n    !! "INCREASING"\n    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)\n    !! domain of interpolation\n    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha\n    !! Jacobi parameter\n    REAL(DFP), OPTIONAL, INTENT(IN) :: beta\n    !! Jacobi parameter\n    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda\n    !! Ultraspherical parameter\n    REAL(DFP), ALLOCATABLE :: ans(:, :)\n    !! quadrature points\n    !! If xij is present then the number of rows in ans\n    !! is same as size(xij,1) + 1.\n    !! If xij is not present then the number of rows in\n    !! ans is 2\n    !! The last row of ans contains the weights\n    !! The first few rows contains the quadrature points\n  END FUNCTION QuadraturePoint_Line1\nEND INTERFACE QuadraturePoint_Line\n'})})}),(0,t.jsx)(i.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(o,{})}),(0,t.jsx)(i.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,t.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'INTERFACE QuadraturePoint_Line\n  MODULE FUNCTION QuadraturePoint_Line2( &\n    & order, &\n    & quadType, &\n    & xij, &\n    & layout, &\n    & alpha, &\n    & beta, &\n    & lambda) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: order\n    !! order of interpolation\n    INTEGER(I4B), INTENT(IN) :: quadType\n    !! Quadrature point type\n    !! Equidistance\n    !! GaussLegendre\n    !! GaussLegendreLobatto\n    !! GaussChebyshev,\n    !! GaussChebyshevLobatto\n    !! GaussJacobi\n    !! GaussJacobiLobatto\n    REAL(DFP), INTENT(IN) :: xij(2)\n    !! end points\n    CHARACTER(*), INTENT(IN) :: layout\n    !! "VEFC"\n    !! "INCREASING"\n    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha\n    !! Jacobi parameter\n    REAL(DFP), OPTIONAL, INTENT(IN) :: beta\n    !! Jacobi parameter\n    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda\n    !! Ultraspherical parameter\n    REAL(DFP), ALLOCATABLE :: ans(:,:)\n  END FUNCTION QuadraturePoint_Line2\nEND INTERFACE QuadraturePoint_Line\n'})})}),(0,t.jsx)(i.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(n.p,{children:"See above example."})}),(0,t.jsx)(i.Z,{value:"close",label:"\u21a2 "})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>i});r(67294);var t=r(86010);const a={tabItem:"tabItem_Ymn6"};var s=r(85893);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,i),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>T});var t=r(67294),a=r(86010),s=r(12466),i=r(16550),l=r(20469),o=r(91980),d=r(67392),c=r(50012);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function x(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function p(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=h(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[d,u]=j({queryString:r,groupId:a}),[p,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Nk)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),f=(()=>{const e=d??p;return x({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=r(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(85893);function y(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const n=e.currentTarget,r=o.indexOf(n),a=l[r].value;a!==t&&(d(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:u,onClick:c,...s,className:(0,a.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function I(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function L(e){const n=p(e);return(0,m.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,m.jsx)(y,{...e,...n}),(0,m.jsx)(I,{...e,...n})]})}function T(e){const n=(0,b.Z)();return(0,m.jsx)(L,{...e,children:u(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>i});var t=r(67294);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);