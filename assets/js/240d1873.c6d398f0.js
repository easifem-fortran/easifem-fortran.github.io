"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[50438],{26305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>x});var a=n(85893),r=n(11151),s=n(74866),l=n(85162);function o(e){const t={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["This example shows the usage of ",(0,a.jsx)(t.code,{children:"UnscaledLobattoStiffnessMatrix"})," method."]}),"\n",(0,a.jsx)(t.p,{children:"This routine evaluates stiffness matrix for lobatto polynomials."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ), allocatable :: ans(:,:)\n  type(string) :: astr\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"  n = 0\n  call callme\n"})}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.th,{})})}),(0,a.jsx)(t.tbody,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.td,{children:"0.5"})})})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"  n = 1\n  call callme\n"})}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"0.5"}),(0,a.jsx)(t.td,{children:"-0.5"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"-0.5"}),(0,a.jsx)(t.td,{children:"0.5"})]})]})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"  n = 4\n  call callme\n"})}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"0.5"}),(0,a.jsx)(t.td,{children:"-0.5"}),(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"0"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"-0.5"}),(0,a.jsx)(t.td,{children:"0.5"}),(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"0"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"0.66667"}),(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"0"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"0.4"}),(0,a.jsx)(t.td,{children:"0"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"0.28571"})]})]})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:'  contains\n  subroutine callme\n    ans= UnscaledLobattoStiffnessMatrix( n=n )\n    astr = MdEncode(ans)\n    CALL Display( "UnscaledLobatto mass matrix = " )\n    CALL Display(astr, "" )\n    call blanklines(nol=2)\n  end subroutine callme\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"end program main\n"})})]})}function i(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}const c={},d="UnscaledLobattoStiffnessMatrix",u={id:"UnscaledLobattoPolynomialUtility/UnscaledLobattoStiffnessMatrix",title:"UnscaledLobattoStiffnessMatrix",description:"Evaluates the Stiffness matrix for UnscaledLobatto polynomial.",source:"@site/docs/docs-api/UnscaledLobattoPolynomialUtility/UnscaledLobattoStiffnessMatrix.md",sourceDirName:"UnscaledLobattoPolynomialUtility",slug:"/UnscaledLobattoPolynomialUtility/UnscaledLobattoStiffnessMatrix",permalink:"/docs-api/UnscaledLobattoPolynomialUtility/UnscaledLobattoStiffnessMatrix",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/UnscaledLobattoPolynomialUtility/UnscaledLobattoStiffnessMatrix.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UnscaledLobattoMonomialExpansionAll",permalink:"/docs-api/UnscaledLobattoPolynomialUtility/UnscaledLobattoMonomialExpansionAll"},next:{title:"UnscaledLobattoZeros",permalink:"/docs-api/UnscaledLobattoPolynomialUtility/UnscaledLobattoZeros"}},h={},x=[{value:"Interface",id:"interface",level:2}];function f(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"unscaledlobattostiffnessmatrix",children:"UnscaledLobattoStiffnessMatrix"}),"\n",(0,a.jsx)(t.p,{children:"Evaluates the Stiffness matrix for UnscaledLobatto polynomial."}),"\n","\n","\n",(0,a.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION UnscaledLobattoStiffnessMatrix(n) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    REAL(DFP) :: ans(n + 1, n + 1)\n  END FUNCTION UnscaledLobattoStiffnessMatrix\nEND INTERFACE\n"})})}),(0,a.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,a.jsx)(i,{})}),(0,a.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function b(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var a=n(86010);const r={tabItem:"tabItem_Ymn6"};var s=n(85893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>U});var a=n(67294),r=n(86010),s=n(12466),l=n(16550),o=n(20469),i=n(91980),c=n(67392),d=n(50012);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,u]=f({queryString:n,groupId:r}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,d.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),p=(()=>{const e=c??b;return x({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{p&&i(p)}),[p]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=n(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(85893);function v(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),r=o[n].value;r!==a&&(c(t),l(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.Z)("tabs__item",p.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function g(e){const t=b(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",p.tabList),children:[(0,j.jsx)(v,{...e,...t}),(0,j.jsx)(y,{...e,...t})]})}function U(e){const t=(0,m.Z)();return(0,j.jsx)(g,{...e,children:u(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>l});var a=n(67294);const r={},s=a.createContext(r);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);