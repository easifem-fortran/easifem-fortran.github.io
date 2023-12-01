"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[13533],{35033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>j,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var r=n(85893),s=n(11151),l=n(74866),i=n(85162),a=n(38037);const c={},d="GetFacetElements",o={id:"RefLine/GetFacetElements",title:"GetFacetElements",description:"Get the facet elements.",source:"@site/docs/docs-api/RefLine/GetFacetElements.md",sourceDirName:"RefLine",slug:"/RefLine/GetFacetElements",permalink:"/docs-api/RefLine/GetFacetElements",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/RefLine/GetFacetElements.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetElementTopology",permalink:"/docs-api/RefLine/GetElementTopology"},next:{title:"GetFacetMatrix",permalink:"/docs-api/RefLine/GetFacetMatrix"}},u={},h=[{value:"Interface",id:"interface",level:2}];function x(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"getfacetelements",children:"GetFacetElements"}),"\n",(0,r.jsx)(t.p,{children:"Get the facet elements."}),"\n",(0,r.jsx)(t.p,{children:"The facet elements of line elements are points."}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(i.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:" INTERFACE\n  MODULE SUBROUTINE refelem_GetFacetElements(obj, ans)\n    CLASS(RefLine_), INTENT(IN) :: obj\n    TYPE(AbstractRefElementPointer_), ALLOCATABLE :: ans(:)\n  END SUBROUTINE refelem_GetFacetElements\nEND INTERFACE\n"})})}),(0,r.jsx)(i.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(a.ZP,{})}),(0,r.jsx)(i.Z,{value:"close",label:"\u21a2 "})]})]})}function j(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},38037:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(85893),s=n(11151);function l(e){const t={code:"code",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\nTYPE(RefLine_) :: obj\nTYPE(AbstractRefElementPointer_), ALLOCATABLE :: faceElem(:)\nINTEGER(I4B) :: ii\nTYPE(String) :: astr\n\nREAL(DFP) :: avar, xij(1, 2)\nCALL obj%Initiate(nsd=1, baseInterpol="Lagrange", baseContinuity="H1")\nCALL obj%GetFacetElements(faceElem)\n\nDO ii = 1, SIZE(faceElem)\n  astr = "**Facet Element "//tostring(ii)//"**"//char_lf//char_lf//  &\n  & faceElem(ii)%ptr%MdEncode()\n  CALL display(astr, "")\nEND DO\nEND PROGRAM main\n'})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Facet Element 1"})}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Element type"}),(0,r.jsx)(t.td,{children:"Point1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Xidimension"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"NSD"}),(0,r.jsx)(t.td,{children:"1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tPoints"}),(0,r.jsx)(t.td,{children:"1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tLines"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tSurfaces"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tVolumes"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"BaseContinuity"}),(0,r.jsx)(t.td,{children:"H1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"BaseInterpolation"}),(0,r.jsx)(t.td,{children:"LagrangeInterpolation"})]})]})]}),(0,r.jsx)(t.p,{children:"Nodal Coordinates:"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"x"}),(0,r.jsx)(t.td,{children:"-1"})]})})]}),(0,r.jsx)(t.p,{children:"PointTopology( 1 ) :"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Element type"}),(0,r.jsx)(t.td,{children:"Point1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Xidimension"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Nptrs"}),(0,r.jsx)(t.td,{children:"1"})]})]})]}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Facet Element 2"})}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Element type"}),(0,r.jsx)(t.td,{children:"Point1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Xidimension"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"NSD"}),(0,r.jsx)(t.td,{children:"1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tPoints"}),(0,r.jsx)(t.td,{children:"1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tLines"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tSurfaces"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tVolumes"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"BaseContinuity"}),(0,r.jsx)(t.td,{children:"H1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"BaseInterpolation"}),(0,r.jsx)(t.td,{children:"LagrangeInterpolation"})]})]})]}),(0,r.jsx)(t.p,{children:"Nodal Coordinates:"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"x"}),(0,r.jsx)(t.td,{children:"1"})]})})]}),(0,r.jsx)(t.p,{children:"PointTopology( 1 ) :"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Element type"}),(0,r.jsx)(t.td,{children:"Point1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Xidimension"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Nptrs"}),(0,r.jsx)(t.td,{children:"1"})]})]})]})]})]})]})}function i(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var r=n(86010);const s={tabItem:"tabItem_Ymn6"};var l=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),s=n(86010),l=n(12466),i=n(16550),a=n(20469),c=n(91980),d=n(67392),o=n(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,l=h(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[d,u]=j({queryString:n,groupId:s}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,o.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:s}),p=(()=>{const e=d??m;return x({value:e,tabValues:l})?e:null})();(0,a.Z)((()=>{p&&c(p)}),[p]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var f=n(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function E(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),o=e=>{const t=e.currentTarget,n=c.indexOf(t),s=a[n].value;s!==r&&(d(t),i(s))},u=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:u,onClick:o,...l,className:(0,s.Z)("tabs__item",p.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",p.tabList),children:[(0,b.jsx)(E,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function y(e){const t=(0,f.Z)();return(0,b.jsx)(v,{...e,children:u(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(67294);const s={},l=r.createContext(s);function i(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);