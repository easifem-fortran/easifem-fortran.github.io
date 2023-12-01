"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[17843],{46063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>h,toc:()=>x});var r=n(85893),l=n(11151),a=n(74866),s=n(85162);function i(e){const t={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["This example shows the usage of ",(0,r.jsx)(t.code,{children:"LobattoMonomialExpansionAll"})," method."]}),"\n",(0,r.jsx)(t.p,{children:"This routine returns the monomial expansion."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:'program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ), allocatable :: coeff(:, :)\n  type(string) :: astr\n  n = 5; call callme\n  contains\n  subroutine callme\n    coeff=LobattoMonomialExpansionAll( n=n )\n    astr = MdEncode( coeff )\n    call display( astr%chars(), "" )\n  end subroutine callme\nend program main\n'})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"P0"}),(0,r.jsx)(t.th,{children:"P1"}),(0,r.jsx)(t.th,{children:"P2"}),(0,r.jsx)(t.th,{children:"P3"}),(0,r.jsx)(t.th,{children:"P4"}),(0,r.jsx)(t.th,{children:"P5"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0.5"}),(0,r.jsx)(t.td,{children:"0.5"}),(0,r.jsx)(t.td,{children:"-0.61237"}),(0,r.jsx)(t.td,{children:"-0"}),(0,r.jsx)(t.td,{children:"0.23385"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"-0.5"}),(0,r.jsx)(t.td,{children:"0.5"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"-0.79057"}),(0,r.jsx)(t.td,{children:"-0"}),(0,r.jsx)(t.td,{children:"0.7955"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0.61237"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"-1.4031"}),(0,r.jsx)(t.td,{children:"-0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0.79057"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"-2.6517"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"1.1693"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"1.8562"})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const d={},c="LobattoMonomialExpansionAll",h={id:"LobattoPolynomialUtility/LobattoMonomialExpansionAll",title:"LobattoMonomialExpansionAll",description:"Returns all the monomial expansion of all Lobatto polynomials.",source:"@site/docs/docs-api/LobattoPolynomialUtility/LobattoMonomialExpansionAll.md",sourceDirName:"LobattoPolynomialUtility",slug:"/LobattoPolynomialUtility/LobattoMonomialExpansionAll",permalink:"/docs-api/LobattoPolynomialUtility/LobattoMonomialExpansionAll",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/LobattoPolynomialUtility/LobattoMonomialExpansionAll.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LobattoMonomialExpansion",permalink:"/docs-api/LobattoPolynomialUtility/LobattoMonomialExpansion"},next:{title:"LobattoStiffnessMatrix",permalink:"/docs-api/LobattoPolynomialUtility/LobattoStiffnessMatrix"}},u={},x=[{value:"Interface",id:"interface",level:2}];function j(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"lobattomonomialexpansionall",children:"LobattoMonomialExpansionAll"}),"\n",(0,r.jsx)(t.p,{children:"Returns all the monomial expansion of all Lobatto polynomials."}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(s.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION LobattoMonomialExpansionAll(n) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    REAL(DFP) :: ans(1:n + 1, 1:n + 1)\n  END FUNCTION LobattoMonomialExpansionAll\nEND INTERFACE\n"})}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"n : is the order of the polynomial"}),"\n",(0,r.jsx)(t.li,{children:"ans(:,i) contains the coefficient of monomials for polynomial order=i-1"}),"\n"]}),(0,r.jsx)(t.p,{children:"for example, n=5, we have the following structure of ans."}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"P0"}),(0,r.jsx)(t.th,{children:"P1"}),(0,r.jsx)(t.th,{children:"P2"}),(0,r.jsx)(t.th,{children:"P3"}),(0,r.jsx)(t.th,{children:"P4"}),(0,r.jsx)(t.th,{children:"P5"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"-0.5"}),(0,r.jsx)(t.td,{children:"-0"}),(0,r.jsx)(t.td,{children:"0.375"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"-1.5"}),(0,r.jsx)(t.td,{children:"-0"}),(0,r.jsx)(t.td,{children:"1.875"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"1.5"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"-3.75"}),(0,r.jsx)(t.td,{children:"-0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"2.5"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"-8.75"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"4.375"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"7.875"})]})]})]})]}),(0,r.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(o,{})}),(0,r.jsx)(s.Z,{value:"close",label:"\u21a2 "})]})]})}function m(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var r=n(86010);const l={tabItem:"tabItem_Ymn6"};var a=n(85893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(67294),l=n(86010),a=n(12466),s=n(16550),i=n(20469),o=n(91980),d=n(67392),c=n(50012);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:n}=e;const l=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(l.location.search);t.set(a,e),l.replace({...l.location,search:t.toString()})}),[a,l])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,a=u(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[d,h]=j({queryString:n,groupId:l}),[m,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,a]=(0,c.Nk)(n);return[l,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:l}),b=(()=>{const e=d??m;return x({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),p(e)}),[h,p,a]),tabValues:a}}var p=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function v(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),l=i[n].value;l!==r&&(d(t),s(l))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:h,onClick:c,...a,className:(0,l.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:l}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function g(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,l.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(v,{...e,...t}),(0,f.jsx)(y,{...e,...t})]})}function E(e){const t=(0,p.Z)();return(0,f.jsx)(g,{...e,children:h(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(67294);const l={},a=r.createContext(l);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);