"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[69596],{78993:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>f});var r=t(85893),a=t(11151),i=t(74866),l=t(85162);function s(e){const n={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'program main\n  use easifembase\n  use easifemClasses\n  implicit none\n  real(dfp), allocatable :: xij(:,:), avec(:), lambda(:, :)\n  integer(i4b) :: ii, jj, cnt, n\n\n  n = 51\n  call reallocate(avec, n)\n  call reallocate(xij, 2, int((n+1)*(n+2)/2))\n  avec= linspace(0.0_DFP, 1.0_DFP, n)\n  cnt=0\n  do ii = 1, n\n    do jj = 1, n-ii+1\n      cnt=cnt+1\n      xij(1,cnt) = avec(ii)\n      xij(2,cnt) = avec(jj)\n    end do\n  end do\n\n  lambda = BarycentricCoordTriangle(xij, "UNIT")\n\n  BLOCK\n    real(dfp), allocatable :: ans(:,:)\n    integer(i4b) :: ii, order, pe1, pe2, pe3\n    type( VTKPlot_ ) :: aplot\n    character(len=*), parameter :: fname="./results/"\n    !!\n    order=4\n    pe1=order; pe2 = order; pe3 = order\n    !!\n    ans = BarycentricVertexBasis_Triangle(&\n      & lambda=lambda )\n    !!\n    do ii  = 1, size(ans,2)\n      call aplot%scatter3D(x=xij(1,:), y=xij(2, :), z=ans(:,ii), &\n        & filename=fname//"PVertexBary-" // tostring(ii) // &\n        & tostring(ii) //".vtp", &\n        & label="P")\n    end do\n    !!\n  END BLOCK\nend program main\n'})})}function o(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}const c={},u="BarycentricVertexBasis",d={id:"TriangleInterpolationUtility/BarycentricVertexBasis_Triangle",title:"BarycentricVertexBasis",description:"Returns the vertex basis functions on reference Triangle.",source:"@site/docs/docs-api/TriangleInterpolationUtility/BarycentricVertexBasis_Triangle.md",sourceDirName:"TriangleInterpolationUtility",slug:"/TriangleInterpolationUtility/BarycentricVertexBasis_Triangle",permalink:"/docs-api/TriangleInterpolationUtility/BarycentricVertexBasis_Triangle",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/TriangleInterpolationUtility/BarycentricVertexBasis_Triangle.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BarycentricHeirarchicalBasis",permalink:"/docs-api/TriangleInterpolationUtility/BarycentricHeirarchicalBasis_Triangle"},next:{title:"CellBasis",permalink:"/docs-api/TriangleInterpolationUtility/CellBasis_Triangle"}},p={},f=[{value:"Interface",id:"interface",level:2}];function m(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"barycentricvertexbasis",children:"BarycentricVertexBasis"}),"\n",(0,r.jsx)(n.p,{children:"Returns the vertex basis functions on reference Triangle."}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION BarycentricVertexBasis_Triangle(lambda) &\n    & RESULT(ans)\n    REAL(DFP), INTENT(IN) :: lambda(:, :)\n    !! point of evaluation in terms of barycentrix coords\n    REAL(DFP) :: ans(SIZE(lambda, 2), 3)\n    !! ans(:,v1) basis function of vertex v1 at all points\n  END FUNCTION BarycentricVertexBasis_Triangle\nEND INTERFACE\n"})})}),(0,r.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(o,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function b(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var r=t(86010);const a={tabItem:"tabItem_Ymn6"};var i=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>j});var r=t(67294),a=t(86010),i=t(12466),l=t(16550),s=t(20469),o=t(91980),c=t(67392),u=t(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,d]=m({queryString:t,groupId:a}),[b,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),v=(()=>{const e=c??b;return f({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),h(e)}),[d,h,i]),tabValues:i}}var h=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function x(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),a=s[t].value;a!==r&&(c(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function T(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(y,{...e,...n})]})}function j(e){const n=(0,h.Z)();return(0,g.jsx)(T,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>l});var r=t(67294);const a={},i=r.createContext(a);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);