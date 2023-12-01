"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[99015],{35838:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(85893),a=r(11151),i=r(74866),s=r(85162);const o={},l="Initiate",c={id:"AbstractNodeField/Initiate",title:"Initiate",description:"This method constructs an instance of AbstractField.",source:"@site/docs/docs-api/AbstractNodeField/Initiate.md",sourceDirName:"AbstractNodeField",slug:"/AbstractNodeField/Initiate",permalink:"/docs-api/AbstractNodeField/Initiate",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractNodeField/Initiate.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Import",permalink:"/docs-api/AbstractNodeField/Import"},next:{title:"Norm2",permalink:"/docs-api/AbstractNodeField/Norm2"}},u={},d=[{value:"Interface",id:"interface",level:2}];function b(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"initiate",children:"Initiate"}),"\n",(0,n.jsx)(t.p,{children:"This method constructs an instance of AbstractField."}),"\n",(0,n.jsxs)(t.p,{children:["Inherited from ",(0,n.jsx)(t.a,{href:"/docs-api/AbstractField/Initiate",children:"AbstractField_"})]}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(s.Z,{value:"1",label:"Interface 1",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"ABSTRACT INTERFACE\nSUBROUTINE Initiate( obj, param, dom )\n  IMPORT :: AbstractField_, ParameterList_, Domain_\n  CLASS( AbstractField_ ), INTENT( INOUT ) :: obj\n  TYPE( ParameterList_), INTENT( IN ) :: param\n  TYPE( Domain_ ), TARGET, INTENT( IN ) :: dom\nEND SUBROUTINE Initiate\nEND INTERFACE\n"})})}),(0,n.jsxs)(s.Z,{value:"2",label:"Interface 2",children:[(0,n.jsx)(t.p,{children:"Initiate by copying from other fields"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"ABSTRACT INTERFACE\nSUBROUTINE Initiate( obj, obj2, copyFull, copyStructure, &\n  & usePointer )\n  IMPORT :: AbstractField_, LGT\n  CLASS( AbstractField_ ), INTENT( INOUT ) :: obj\n  CLASS( AbstractField_ ), INTENT( INOUT ) :: obj2\n  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: copyFull\n  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: copyStructure\n  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: usePointer\nEND SUBROUTINE Initiate\nEND INTERFACE\n"})})]}),(0,n.jsxs)(s.Z,{value:"3",label:"Interface 3",children:[(0,n.jsx)(t.p,{children:"Initiate by reading from parameters. This is used for block data structure."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"ABSTRACT INTERFACE\n  SUBROUTINE Initiate(obj, param, dom)\n    IMPORT :: AbstractField_, ParameterList_, DomainPointer_\n    CLASS(AbstractField_), INTENT(INOUT) :: obj\n    TYPE(ParameterList_), INTENT(IN) :: param\n    TYPE(DomainPointer_), TARGET, INTENT(IN) :: dom(:)\n  END SUBROUTINE Initiate\nEND INTERFACE\n"})})]})]})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>s});r(67294);var n=r(86010);const a={tabItem:"tabItem_Ymn6"};var i=r(85893);function s(e){let{children:t,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,s),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>A});var n=r(67294),a=r(86010),i=r(12466),s=r(16550),o=r(20469),l=r(91980),c=r(67392),u=r(50012);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,i=b(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,d]=f({queryString:r,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),I=(()=>{const e=c??p;return m({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{I&&l(I)}),[I]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,i]),tabValues:i}}var h=r(72389);const I={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var N=r(85893);function T(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),a=o[r].value;a!==n&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,N.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,N.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.Z)("tabs__item",I.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function E(e){let{lazy:t,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,N.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function v(e){const t=p(e);return(0,N.jsxs)("div",{className:(0,a.Z)("tabs-container",I.tabList),children:[(0,N.jsx)(T,{...e,...t}),(0,N.jsx)(E,{...e,...t})]})}function A(e){const t=(0,h.Z)();return(0,N.jsx)(v,{...e,children:d(e.children)},String(t))}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>s});var n=r(67294);const a={},i=n.createContext(a);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);