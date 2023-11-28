"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[58810],{84400:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var n=t(85893),a=t(11151),s=t(74866),l=t(85162);function i(e){const r={a:"a",code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components},{Details:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["In this example we test ",(0,n.jsx)(r.a,{href:"/docs-api/SortUtility/ArgHeapSort",children:"ArgHeapSort"})," method."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",metastring:"{8}",children:'PROGRAM main\nUSE easifemBase\n  REAL(REAL64) :: avec(10)\n  INTEGER( I4B ) :: arg(10)\n  CALL RANDOM_NUMBER(avec)\n  avec = avec * 10\n  CALL Display( avec, msg="unsorted array", advance="NO" )\n  CALL ArgHeapSort(avec, arg )\n  CALL Display( arg, msg="arg", advance="NO" )\n  CALL Display( avec(arg), msg="sorted array" )\n  CALL blanklines()\n'})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsx)("div",{children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"unsorted array"}),(0,n.jsx)(r.th,{children:"arg"}),(0,n.jsx)(r.th,{children:"sorted array"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"0.22266"}),(0,n.jsx)(r.td,{children:"1"}),(0,n.jsx)(r.td,{children:"0.22266"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"4.14185"}),(0,n.jsx)(r.td,{children:"5"}),(0,n.jsx)(r.td,{children:"1.86131"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"1.91306"}),(0,n.jsx)(r.td,{children:"3"}),(0,n.jsx)(r.td,{children:"1.91306"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"6.25599"}),(0,n.jsx)(r.td,{children:"9"}),(0,n.jsx)(r.td,{children:"3.14910"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"1.86131"}),(0,n.jsx)(r.td,{children:"2"}),(0,n.jsx)(r.td,{children:"4.14185"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"5.61020"}),(0,n.jsx)(r.td,{children:"7"}),(0,n.jsx)(r.td,{children:"4.56137"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"4.56137"}),(0,n.jsx)(r.td,{children:"6"}),(0,n.jsx)(r.td,{children:"5.61020"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"9.58795"}),(0,n.jsx)(r.td,{children:"4"}),(0,n.jsx)(r.td,{children:"6.25599"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"3.14910"}),(0,n.jsx)(r.td,{children:"8"}),(0,n.jsx)(r.td,{children:"9.58795"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"9.77462"}),(0,n.jsx)(r.td,{children:"10"}),(0,n.jsx)(r.td,{children:"9.77462"})]})]})]})})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function o(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}const c={},d="ArgHeapSort",u={id:"SortUtility/ArgHeapSort",title:"ArgHeapSort",description:"This routine performs an indirect heap sort on an array.",source:"@site/docs/docs-api/SortUtility/ArgHeapSort.md",sourceDirName:"SortUtility",slug:"/SortUtility/ArgHeapSort",permalink:"/docs-api/SortUtility/ArgHeapSort",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/SortUtility/ArgHeapSort.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SortUtility",permalink:"/docs-api/SortUtility/"},next:{title:"ArgInsertionSort",permalink:"/docs-api/SortUtility/ArgInsertionSort"}},h={},p=[{value:"Interface",id:"interface",level:2}];function x(e){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"argheapsort",children:"ArgHeapSort"}),"\n",(0,n.jsx)(r.p,{children:"This routine performs an indirect heap sort on an array."}),"\n",(0,n.jsx)(r.p,{children:"It returns the integer array which can be used for obtaining the sorted array."}),"\n",(0,n.jsx)(r.p,{children:"Calling example:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:"CALL ArgHeapSort(array, arg)\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Then, ",(0,n.jsx)(r.code,{children:"array(arg)"})," will be sorted in increasing order."]}),"\n",(0,n.jsx)(r.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,n.jsxs)(s.Z,{children:[(0,n.jsxs)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE ArgHeapSort(array, arg)\n    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: array(:)\n    INTEGER(I4B), INTENT(OUT) :: arg(0:)\n  END SUBROUTINE ArgHeapSort\n"})}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Here, entries of ",(0,n.jsx)(r.code,{children:"array"})," are NOT modified by the routine."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"arg"})," should be allocated by the user"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"array(arg)"})," returns the sorted array."]}),"\n"]})]}),(0,n.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,n.jsx)(o,{})}),(0,n.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function f(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},85162:(e,r,t)=>{t.d(r,{Z:()=>l});t(67294);var n=t(86010);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function l(e){let{children:r,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,l),hidden:t,children:r})}},74866:(e,r,t)=>{t.d(r,{Z:()=>S});var n=t(67294),a=t(86010),s=t(12466),l=t(16550),i=t(20469),o=t(91980),c=t(67392),d=t(50012);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:t}=e;const a=(0,l.k6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o._X)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,s=h(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[c,u]=x({queryString:t,groupId:a}),[f,j]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,d.Nk)(t);return[a,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),m=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{m&&o(m)}),[m]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),j(e)}),[u,j,s]),tabValues:s}}var j=t(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function g(e){let{className:r,block:t,selectedValue:n,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const r=e.currentTarget,t=o.indexOf(r),a=i[t].value;a!==n&&(c(r),l(a))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},r),children:i.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.Z)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function y(e){const r=f(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(g,{...e,...r}),(0,b.jsx)(v,{...e,...r})]})}function S(e){const r=(0,j.Z)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(r))}},11151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>l});var n=t(67294);const a={},s=n.createContext(a);function l(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);