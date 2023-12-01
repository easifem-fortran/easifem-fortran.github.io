"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[33993],{58102:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>u,metadata:()=>d,toc:()=>f});var a=t(85893),r=t(11151),l=t(74866),i=t(85162);function s(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'program main\n  use easifembase\n  use easifemClasses\n  implicit none\n  real(dfp), allocatable :: xij(:,:), avec(:)\n  integer(i4b) :: ii, jj, cnt, n\n  real(dfp), allocatable :: ans(:,:)\n  integer(i4b) :: order\n  type( VTKPlot_ ) :: aplot\n  character(len=*), parameter :: fname="./results/"\n\n  n = 51\n  call reallocate(avec, n)\n  call reallocate(xij, 2, int((n+1)*(n+2)/2))\n  avec= linspace(0.0_DFP, 1.0_DFP, n)\n  cnt=0\n  do ii = 1, n\n    do jj = 1, n-ii+1\n      cnt=cnt+1\n      xij(1,cnt) = avec(ii)\n      xij(2,cnt) = avec(jj)\n    end do\n  end do\n\n  order=5\n  ans = CellBasis_Triangle(order=order, xij=xij, refTriangle="UNIT")\n  do ii  = 1, size(ans,2)\n    call aplot%scatter3D(x=xij(1,:), y=xij(2, :), z=ans(:,ii), &\n      & filename=fname//"CellBasis( order=" // tostring(order) // &\n        & " )" // tostring(ii) // &\n        & ".vtp", &\n      & label="P")\n  end do\nend program main\n'})})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}const u={},c="CellBasis",d={id:"QuadrangleInterpolationUtility/CellBasis_Quadrangle",title:"CellBasis",description:"Evaluate basis functions in the cell.",source:"@site/docs/docs-api/QuadrangleInterpolationUtility/CellBasis_Quadrangle.md",sourceDirName:"QuadrangleInterpolationUtility",slug:"/QuadrangleInterpolationUtility/CellBasis_Quadrangle",permalink:"/docs-api/QuadrangleInterpolationUtility/CellBasis_Quadrangle",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/QuadrangleInterpolationUtility/CellBasis_Quadrangle.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Quadrangle",permalink:"/docs-api/QuadrangleInterpolationUtility/"},next:{title:"Dubiner",permalink:"/docs-api/QuadrangleInterpolationUtility/Dubiner_Quadrangle"}},p={},f=[{value:"Interface",id:"interface",level:2}];function b(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"cellbasis",children:"CellBasis"}),"\n",(0,a.jsx)(n.p,{children:"Evaluate basis functions in the cell."}),"\n",(0,a.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(i.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION CellBasis_Quadrangle(pb, qb, x, y) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: pb\n    !! order on bottom vertical edge (e3), it should be greater than 1\n    INTEGER(I4B), INTENT(IN) :: qb\n    !! order on top vertical edge(e4), it should be greater than 1\n    REAL(DFP), INTENT(IN) :: x(:), y(:)\n    !! point of evaluation\n    REAL(DFP) :: ans(SIZE(x), (pb - 1) * (qb - 1))\n  END FUNCTION CellBasis_Quadrangle\nEND INTERFACE\n"})})}),(0,a.jsx)(i.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,a.jsx)(o,{})}),(0,a.jsx)(i.Z,{value:"close",label:"\u21a2 "})]})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var a=t(86010);const r={tabItem:"tabItem_Ymn6"};var l=t(85893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(67294),r=t(86010),l=t(12466),i=t(16550),s=t(20469),o=t(91980),u=t(67392),c=t(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=p(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[u,d]=b({queryString:t,groupId:r}),[m,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),g=(()=>{const e=u??m;return f({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),h(e)}),[d,h,l]),tabValues:l}}var h=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function x(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),r=s[t].value;r!==a&&(u(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,r.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function I(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(I,{...e,...n})]})}function y(e){const n=(0,h.Z)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var a=t(67294);const r={},l=a.createContext(r);function i(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);