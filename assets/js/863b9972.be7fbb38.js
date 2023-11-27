"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[17407],{41529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(85893),a=n(11151),i=n(74866),l=n(85162);const s={},o="Initiate",c={id:"STVectorFieldLis/Initiate",title:"Initiate",description:"This method constructs an instance of AbstractField.",source:"@site/docs/docs-api/STVectorFieldLis/Initiate.md",sourceDirName:"STVectorFieldLis",slug:"/STVectorFieldLis/Initiate",permalink:"/docs-api/STVectorFieldLis/Initiate",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/STVectorFieldLis/Initiate.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Import",permalink:"/docs-api/STVectorFieldLis/Import"},next:{title:"Norm1",permalink:"/docs-api/STVectorFieldLis/Norm1"}},u={},d=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"Interface 3",id:"interface-3",level:2}];function f(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"initiate",children:"Initiate"}),"\n",(0,r.jsx)(t.p,{children:"This method constructs an instance of AbstractField."}),"\n","\n","\n",(0,r.jsx)(t.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(l.Z,{value:"1",label:"Interface 1",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\nSUBROUTINE Initiate( obj, param, dom )\n  CLASS(STVectorFieldLis_), INTENT( INOUT ) :: obj\n  TYPE( ParameterList_), INTENT( IN ) :: param\n  TYPE( Domain_ ), TARGET, INTENT( IN ) :: dom\nEND SUBROUTINE Initiate\nEND INTERFACE\n"})})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,r.jsx)(t.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(l.Z,{value:"2",label:"Interface 2",default:!0,children:[(0,r.jsx)(t.p,{children:"Initiate by copying from other fields"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\nSUBROUTINE Initiate( obj, obj2, copyFull, copyStructure, &\n  & usePointer )\n  CLASS(STVectorFieldLis_), INTENT( INOUT ) :: obj\n  CLASS( AbstractField_ ), INTENT( INOUT ) :: obj2\n  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: copyFull\n  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: copyStructure\n  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: usePointer\nEND SUBROUTINE Initiate\nEND INTERFACE\n"})})]}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,r.jsx)(t.h2,{id:"interface-3",children:"Interface 3"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(l.Z,{value:"3",label:"Interface 3",default:!0,children:[(0,r.jsx)(t.p,{children:"Initiate by reading from parameters. This is used for block data structure."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE Initiate(obj, param, dom)\n    CLASS(STVectorFieldLis_), INTENT(INOUT) :: obj\n    TYPE(ParameterList_), INTENT(IN) :: param\n    TYPE(DomainPointer_), TARGET, INTENT(IN) :: dom(:)\n  END SUBROUTINE Initiate\nEND INTERFACE\n"})})]}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var r=n(86010);const a={tabItem:"tabItem_Ymn6"};var i=n(85893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(67294),a=n(86010),i=n(12466),l=n(16550),s=n(20469),o=n(91980),c=n(67392),u=n(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=f(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,d]=h({queryString:n,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),I=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{I&&o(I)}),[I]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=n(72389);const I={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var T=n(85893);function N(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),a=s[n].value;a!==r&&(c(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,T.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,T.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.Z)("tabs__item",I.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,T.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function E(e){const t=m(e);return(0,T.jsxs)("div",{className:(0,a.Z)("tabs-container",I.tabList),children:[(0,T.jsx)(N,{...e,...t}),(0,T.jsx)(v,{...e,...t})]})}function j(e){const t=(0,b.Z)();return(0,T.jsx)(E,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>l});var r=n(67294);const a={},i=r.createContext(a);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);