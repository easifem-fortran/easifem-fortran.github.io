"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[97395],{570:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var n=t(85893),a=t(11151),l=t(74866),s=t(85162);function o(e){const r={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components},{Details:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["This example shows the usage of ",(0,n.jsx)(r.code,{children:"UltrasphericalZeros"})," method."]}),"\n",(0,n.jsx)(r.p,{children:"This routine returns the zeros of a jacobi polynomial."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:"program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ), allocatable :: pt( : )\n  real( dfp ), parameter :: lambda=0.5_DFP\n  type(string) :: msg, astr\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:"  n = 1; call callme\n"})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsx)("div",{children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"x"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"0"})})})]})})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:"  n = 2; call callme\n"})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(r.p,{children:"Zeros of T(x), n = 2"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"-0.57735"}),(0,n.jsx)(r.td,{children:"0.57735"})]})})]})]})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:"  n = 3; call callme\n"})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(r.p,{children:"Zeros of T(x), n = 3"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"-0.7746"}),(0,n.jsx)(r.td,{children:"3.71231E-16"}),(0,n.jsx)(r.td,{children:"0.7746"})]})})]})]})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:'  contains\n  subroutine callme\n    pt = UltrasphericalZeros( n=n, lambda=lambda )\n    msg = "Zeros of T(x), n = " &\n        & // tostring( n )\n    call display(msg%chars())\n    astr = MdEncode( pt )\n    call display( astr%chars(), "" )\n  end subroutine\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:"end program main\n"})})]})}function i(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}const c={},u="UltrasphericalZeros",d={id:"UltrasphericalPolynomialUtility/UltrasphericalZeros",title:"UltrasphericalZeros",description:"Zeros of Ultraspherical polynomials.",source:"@site/docs/docs-api/UltrasphericalPolynomialUtility/UltrasphericalZeros.md",sourceDirName:"UltrasphericalPolynomialUtility",slug:"/UltrasphericalPolynomialUtility/UltrasphericalZeros",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalZeros",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/UltrasphericalPolynomialUtility/UltrasphericalZeros.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UltrasphericalTransform",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalTransform"},next:{title:"UnscaledLobatto",permalink:"/docs-api/UnscaledLobattoPolynomialUtility/"}},h={},p=[{value:"Interface",id:"interface",level:2}];function m(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"ultrasphericalzeros",children:"UltrasphericalZeros"}),"\n",(0,n.jsx)(r.p,{children:"Zeros of Ultraspherical polynomials."}),"\n",(0,n.jsx)(r.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(s.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION UltrasphericalZeros(n, lambda) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of Ultraspherical polynomial\n    REAL(DFP), INTENT(IN) :: lambda\n    !! lambda should be greater than -0.5\n    REAL(DFP) :: ans(n)\n  END FUNCTION UltrasphericalZeros\nEND INTERFACE\n"})})}),(0,n.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,n.jsx)(i,{})}),(0,n.jsx)(s.Z,{value:"close",label:"\u21a2 "})]})]})}function f(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},85162:(e,r,t)=>{t.d(r,{Z:()=>s});t(67294);var n=t(86010);const a={tabItem:"tabItem_Ymn6"};var l=t(85893);function s(e){let{children:r,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,s),hidden:t,children:r})}},74866:(e,r,t)=>{t.d(r,{Z:()=>U});var n=t(67294),a=t(86010),l=t(12466),s=t(16550),o=t(20469),i=t(91980),c=t(67392),u=t(50012);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const a=(0,s.k6)(),l=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(a.location.search);r.set(l,e),a.replace({...a.location,search:r.toString()})}),[l,a])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,l=h(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:l}))),[c,d]=m({queryString:t,groupId:a}),[f,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,l]=(0,u.Nk)(t);return[a,(0,n.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),x=(()=>{const e=c??f;return p({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{x&&i(x)}),[x]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(85893);function g(e){let{className:r,block:t,selectedValue:n,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const r=e.currentTarget,t=i.indexOf(r),a=o[t].value;a!==n&&(c(r),s(a))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}r?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},r),children:o.map((e=>{let{value:r,label:t,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.Z)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function v(e){const r=f(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(g,{...e,...r}),(0,j.jsx)(y,{...e,...r})]})}function U(e){const r=(0,b.Z)();return(0,j.jsx)(v,{...e,children:d(e.children)},String(r))}},11151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>s});var n=t(67294);const a={},l=n.createContext(a);function s(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);