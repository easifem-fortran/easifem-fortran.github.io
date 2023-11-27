"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[7530],{33836:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=r(85893),n=r(11151),s=r(74866),l=r(85162);const o={},u="RemoveDuplicates",i={id:"CSRMatrix/RemoveDuplicates",title:"RemoveDuplicates",description:"Remove the duplicate entries from the sparse matrix",source:"@site/docs/docs-api/CSRMatrix/RemoveDuplicates.md",sourceDirName:"CSRMatrix",slug:"/CSRMatrix/RemoveDuplicates",permalink:"/docs-api/CSRMatrix/RemoveDuplicates",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/CSRMatrix/RemoveDuplicates.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PermuteRow",permalink:"/docs-api/CSRMatrix/PermuteRow"},next:{title:"SPY",permalink:"/docs-api/CSRMatrix/SPY"}},c={},d=[{value:"Interface",id:"interface",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"removeduplicates",children:"RemoveDuplicates"}),"\n",(0,a.jsx)(t.p,{children:"Remove the duplicate entries from the sparse matrix"}),"\n","\n","\n",(0,a.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(l.Z,{value:"interface",label:"\ud83d\udcdd Interface",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE csrMat_RemoveDuplicates(obj, isValues)\n    TYPE(CSRMatrix_), INTENT(INOUT) :: obj\n    LOGICAL(LGT), INTENT(IN), OPTIONAL :: isValues\n  END SUBROUTINE csrMat_RemoveDuplicates\nEND INTERFACE\n"})})}),(0,a.jsx)(l.Z,{value:"close",label:"\u25c9 Close"})]})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>l});r(67294);var a=r(86010);const n={tabItem:"tabItem_Ymn6"};var s=r(85893);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(n.tabItem,l),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>y});var a=r(67294),n=r(86010),s=r(12466),l=r(16550),o=r(20469),u=r(91980),i=r(67392),c=r(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=p(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,d]=f({queryString:r,groupId:n}),[h,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),v=(()=>{const e=i??h;return m({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{v&&u(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(85893);function g(e){let{className:t,block:r,selectedValue:a,selectValue:l,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.o5)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),n=o[r].value;n!==a&&(i(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function I(e){let{lazy:t,children:r,selectedValue:n}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function R(e){const t=h(e);return(0,x.jsxs)("div",{className:(0,n.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...e,...t}),(0,x.jsx)(I,{...e,...t})]})}function y(e){const t=(0,b.Z)();return(0,x.jsx)(R,{...e,children:d(e.children)},String(t))}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>l});var a=r(67294);const n={},s=a.createContext(n);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);