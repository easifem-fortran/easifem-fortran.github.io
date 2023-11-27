"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[72583],{41031:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=t(85893),r=t(11151),l=t(74866),s=t(85162);const i={},c="SymLargestEigenval",o={id:"ARPACK/SymLargestEigenval",title:"SymLargestEigenval",description:"This function computes the largest eigenvalue of a symmetric matrix.",source:"@site/docs/docs-api/ARPACK/SymLargestEigenval.md",sourceDirName:"ARPACK",slug:"/ARPACK/SymLargestEigenval",permalink:"/docs-api/ARPACK/SymLargestEigenval",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/ARPACK/SymLargestEigenval.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SSEUPD",permalink:"/docs-api/ARPACK/SSEUPD"},next:{title:"SymSmallestEigenVal",permalink:"/docs-api/ARPACK/SymSmallestEigenval"}},u={},d=[];function h(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"symlargesteigenval",children:"SymLargestEigenval"}),"\n",(0,a.jsx)(n.p,{children:"This function computes the largest eigenvalue of a symmetric matrix."}),"\n",(0,a.jsxs)(n.p,{children:["This function calls ARPACK's ",(0,a.jsx)(n.a,{href:"/docs-api/ARPACK/SSAUPD",children:"SSAUPD"})," or DSAUPD routine."]}),"\n",(0,a.jsx)(n.p,{children:"Currently, there are two interfaces under this generic method."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"ans = SymLargestEigenVal(real::mat(:,:), char::which, int::NCV, int::maxIter, real::tol)\nans(1:nev) = SymLargestEigenVal(real::mat(:,:), int::nev, char::which, int::NCV, int::maxIter, real::tol)\n"})}),"\n","\n","\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsxs)(s.Z,{value:"interface 1",label:"\u0700 Interface 1",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'INTERFACE\n  MODULE FUNCTION SymLargestEigenVal(mat, which, NCV, maxIter, tol) &\n    & RESULT(ans)\n    REAL(DFP), INTENT(IN) :: mat(:, :)\n    !! dense matrix\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: which\n    !! `which = "LM"` \u21e8 absolute largest eigenvalue\n    !! `which = "LA"` \u21e8 algebraic largest eigenvalue\n    !! default is "LA"\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: NCV\n    !! Number of Lanczos vectors generated\n    !! It must be greater than 1 and smaller than `size(mat,1)`\n    !! Default is `NCV = MIN(n, 20)`\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: maxIter\n    !! Maximum number of iteration default = `N*10`\n    REAL(DFP), OPTIONAL, INTENT(IN) :: tol\n    !! tolerance, default = 0.0\n    REAL(DFP) :: ans\n    !! maximum eigenvalue\n  END FUNCTION SymLargestEigenVal\nEND INTERFACE\n'})}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"mat"})," is dense matrix"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:'which = "LM"'})," \u21e8 absolute largest eigenvalue"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:'which = "LA"'})," \u21e8 algebraic largest eigenvalue"]}),"\n",(0,a.jsxs)(n.li,{children:["Default value of ",(0,a.jsx)(n.code,{children:"which"}),' is "LA"']}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"NCV"})," Number of Lanczos vectors generated. It must be greater than 1 and smaller than ",(0,a.jsx)(n.code,{children:"size(mat,1)"}),". Default is ",(0,a.jsx)(n.code,{children:"NCV = MIN(n, 20)"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"maxIter"})," Maximum number of iteration default = ",(0,a.jsx)(n.code,{children:"N*10"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"tol"})," tolerance, default = 0.0"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"ans"})," maximum eigenvalue."]}),"\n"]})]}),(0,a.jsxs)(s.Z,{value:"interface 2",label:"\u0700 Interface 2",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'INTERFACE\n  MODULE FUNCTION SymLargestEigenVal(mat, nev, which, NCV, maxIter, tol) &\n    & RESULT(ans)\n    REAL(DFP), INTENT(IN) :: mat(:, :)\n    !! dense matrix\n    INTEGER(I4B), INTENT(IN) :: nev\n    !! number of eigenvalues requested\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: which\n    !! `which = "LM"` \u21e8 absolute largest eigenvalue\n    !! `which = "LA"` \u21e8 algebraic largest eigenvalue\n    !! default is "LA"\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: NCV\n    !! Number of Lanczos vectors generated\n    !! It must be greater than 1 and smaller than `size(mat,1)`\n    !! Default is `NCV = MIN(n, MAX(2*nev+1, 20))`\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: maxIter\n    !! Maximum number of iteration default = `N*10`\n    REAL(DFP), OPTIONAL, INTENT(IN) :: tol\n    !! tolerance, default = 0.0\n    REAL(DFP) :: ans(nev)\n    !! first k, largest eigenvalue\n  END FUNCTION SymLargestEigenVal\nEND INTERFACE\n'})}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"mat"})," dense matrix"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"nev"})," number of eigenvalues requested"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:'which = "LM"'})," \u21e8 absolute largest eigenvalue"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:'which = "LA"'})," \u21e8 algebraic largest eigenvalue"]}),"\n",(0,a.jsxs)(n.li,{children:["Default value of ",(0,a.jsx)(n.code,{children:"which"}),' is "LA"']}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"NCV"})," Number of Lanczos vectors generated. It must be greater than 1 and smaller than ",(0,a.jsx)(n.code,{children:"size(mat,1)"}),". Default is ",(0,a.jsx)(n.code,{children:"NCV = MIN(n, MAX(2*nev+1, 20))"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"maxIter"})," Maximum number of iteration default = ",(0,a.jsx)(n.code,{children:"N*10"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"tol"})," tolerance, default = 0.0"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"ans(nev)"})," first k, the largest eigenvalue."]}),"\n"]})]}),(0,a.jsx)(s.Z,{value:"close",label:"\u21a2 Close",default:!0})]})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var a=t(86010);const r={tabItem:"tabItem_Ymn6"};var l=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>E});var a=t(67294),r=t(86010),l=t(12466),s=t(16550),i=t(20469),c=t(91980),o=t(67392),u=t(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=h(e),[s,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[o,d]=f({queryString:t,groupId:r}),[g,N]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),x=(()=>{const e=o??g;return m({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{x&&c(x)}),[x]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),N(e)}),[d,N,l]),tabValues:l}}var N=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function b(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),r=i[t].value;r!==a&&(o(n),s(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...l,className:(0,r.Z)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function p(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function I(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(b,{...e,...n}),(0,v.jsx)(p,{...e,...n})]})}function E(e){const n=(0,N.Z)();return(0,v.jsx)(I,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var a=t(67294);const r={},l=a.createContext(r);function s(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);