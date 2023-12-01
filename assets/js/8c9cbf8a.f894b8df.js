"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[32282],{56490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var a=n(85893),o=n(11151),r=n(74866),l=n(85162);function i(e){const t={code:"code",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:'program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ), allocatable :: coeff(:, :)\n  type(string) :: astr\n  n = 5\n  astr = MdEncode( LobattoMonomialExpansion( n=n ) )\n  call display( astr%chars(), "" )\nend program main\n'})}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"x0"}),(0,a.jsx)(t.th,{children:"x1"}),(0,a.jsx)(t.th,{children:"x2"}),(0,a.jsx)(t.th,{children:"x3"}),(0,a.jsx)(t.th,{children:"x4"}),(0,a.jsx)(t.th,{children:"x5"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"0.7955"}),(0,a.jsx)(t.td,{children:"-0"}),(0,a.jsx)(t.td,{children:"-2.6517"}),(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"1.8562"})]})})]})]})}function s(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}const c={},u="LobattoMonomialExpansion",d={id:"LobattoPolynomialUtility/LobattoMonomialExpansion",title:"LobattoMonomialExpansion",description:"Returns all the monomial expansion of a Lobatto polynomials.",source:"@site/docs/docs-api/LobattoPolynomialUtility/LobattoMonomialExpansion.md",sourceDirName:"LobattoPolynomialUtility",slug:"/LobattoPolynomialUtility/LobattoMonomialExpansion",permalink:"/docs-api/LobattoPolynomialUtility/LobattoMonomialExpansion",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/LobattoPolynomialUtility/LobattoMonomialExpansion.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LobattoMassMatrix",permalink:"/docs-api/LobattoPolynomialUtility/LobattoMassMatrix"},next:{title:"LobattoMonomialExpansionAll",permalink:"/docs-api/LobattoPolynomialUtility/LobattoMonomialExpansionAll"}},m={},h=[{value:"Interface",id:"interface",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"lobattomonomialexpansion",children:"LobattoMonomialExpansion"}),"\n",(0,a.jsx)(t.p,{children:"Returns all the monomial expansion of a Lobatto polynomials."}),"\n","\n","\n",(0,a.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION LobattoMonomialExpansion(n) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    REAL(DFP) :: ans(1:n + 1)\n  END FUNCTION LobattoMonomialExpansion\nEND INTERFACE\n"})})}),(0,a.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,a.jsx)(s,{})}),(0,a.jsx)(l.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"n : is the order of the polynomial"}),"\n",(0,a.jsx)(t.li,{children:"ans(:) contains the coefficient of monomials for polynomial order=n"}),"\n"]})]})}function b(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var a=n(86010);const o={tabItem:"tabItem_Ymn6"};var r=n(85893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(67294),o=n(86010),r=n(12466),l=n(16550),i=n(20469),s=n(91980),c=n(67392),u=n(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const o=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=m(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,d]=p({queryString:n,groupId:o}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,u.Nk)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),x=(()=>{const e=c??b;return h({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{x&&s(x)}),[x]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function y(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{const t=e.currentTarget,n=s.indexOf(t),o=i[n].value;o!==a&&(c(t),l(o))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>s.push(e),onKeyDown:d,onClick:u,...r,className:(0,o.Z)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:o}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function g(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,o.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(y,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function E(e){const t=(0,f.Z)();return(0,v.jsx)(g,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>l});var a=n(67294);const o={},r=a.createContext(o);function l(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);