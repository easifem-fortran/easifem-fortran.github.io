"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[81623],{67077:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var n=r(85893),a=r(11151),s=r(74866),l=r(85162);function o(e){const t={code:"code",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\n    real(real32) :: avec(10)\n    call RANDOM_NUMBER(avec)\n    avec = avec * 10\n    call Display( avec, msg="r32 Before sorting = ", advance="NO" )\n    call HeapSort(avec )\n    call Display( avec, msg="r32 After sorting = " )\n    call blanklines()\n'})}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsx)("div",{children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"r32 Before sorting"}),(0,n.jsx)(t.th,{children:"r32 After sorting"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"8.13609"}),(0,n.jsx)(t.td,{children:"0.72018"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"9.81305"}),(0,n.jsx)(t.td,{children:"1.10549"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"5.17501"}),(0,n.jsx)(t.td,{children:"2.40877"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0.72018"}),(0,n.jsx)(t.td,{children:"3.13865"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"6.35550"}),(0,n.jsx)(t.td,{children:"4.40301"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"3.13865"}),(0,n.jsx)(t.td,{children:"5.17501"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"9.25757"}),(0,n.jsx)(t.td,{children:"6.35550"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1.10549"}),(0,n.jsx)(t.td,{children:"8.13609"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2.40877"}),(0,n.jsx)(t.td,{children:"9.25757"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"4.40301"}),(0,n.jsx)(t.td,{children:"9.81305"})]})]})]})})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function i(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}const c={},u="HeapSort",d={id:"SortUtility/HeapSort",title:"HeapSort",description:"This subroutine implements heap sort algorithm to sort the array inplace.",source:"@site/docs/docs-api/SortUtility/HeapSort.md",sourceDirName:"SortUtility",slug:"/SortUtility/HeapSort",permalink:"/docs-api/SortUtility/HeapSort",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/SortUtility/HeapSort.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ArgSort",permalink:"/docs-api/SortUtility/ArgSort"},next:{title:"InsertionSort",permalink:"/docs-api/SortUtility/InsertionSort"}},h={},p=[{value:"Interface",id:"interface",level:2}];function f(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"heapsort",children:"HeapSort"}),"\n",(0,n.jsxs)(t.p,{children:["This subroutine implements ",(0,n.jsx)(t.a,{href:"https://www.geeksforgeeks.org/heap-sort/",children:"heap sort"})," algorithm to sort the array inplace."]}),"\n",(0,n.jsx)(t.p,{children:"Calling example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"CALL HeapSort(array)\n"})}),"\n","\n","\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE HeapSort(array)\n    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(INOUT) :: array(:)\n  END SUBROUTINE HeapSort\n"})})}),(0,n.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,n.jsx)(i,{})}),(0,n.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>l});r(67294);var n=r(86010);const a={tabItem:"tabItem_Ymn6"};var s=r(85893);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,l),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>S});var n=r(67294),a=r(86010),s=r(12466),l=r(16550),o=r(20469),i=r(91980),c=r(67392),u=r(50012);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=h(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,d]=f({queryString:r,groupId:a}),[m,x]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),b=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),x(e)}),[d,x,s]),tabValues:s}}var x=r(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(85893);function v(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const t=e.currentTarget,r=i.indexOf(t),a=o[r].value;a!==n&&(c(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=m(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,j.jsx)(v,{...e,...t}),(0,j.jsx)(g,{...e,...t})]})}function S(e){const t=(0,x.Z)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(t))}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>l});var n=r(67294);const a={},s=n.createContext(a);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);