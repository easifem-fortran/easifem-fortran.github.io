"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[64115],{80052:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var n=t(85893),a=t(11151),s=t(74866),o=t(85162);function l(e){const r={code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Details:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"In this example we test ArgInsertionSort."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",metastring:"{9}",children:'PROGRAM main\nUSE easifemBase\n  REAL(REAL64) :: avec(10)\n  INTEGER( I4B ) :: arg(10)\n  CALL RANDOM_NUMBER(avec)\n  avec = avec * 10\n  arg = arange(1, 10, 1)\n  CALL Display( avec, msg="unsorted array", advance="NO", full=.true. )\n  CALL ArgInsertionSort(avec, arg, 1, size(arg))\n  CALL Display( arg, msg="arg", advance="NO", full=.true. )\n  CALL Display( avec(arg), msg="sorted array", full=.true. )\n  CALL blanklines()\n'})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsx)("div",{children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-txt",metastring:'title="results"',children:"unsorted array,  arg,  sorted array\n--------------,  ---,  ------------\n   9.74747    ,   8 ,    0.73612   \n   6.28162    ,  10 ,    0.96830   \n   7.10011    ,   6 ,    1.11567   \n   1.87641    ,   4 ,    1.87641   \n   6.14801    ,   9 ,    2.89498   \n   1.11567    ,   5 ,    6.14801   \n   9.07674    ,   2 ,    6.28162   \n   0.73612    ,   3 ,    7.10011   \n   2.89498    ,   7 ,    9.07674   \n   0.96830    ,   1 ,    9.74747   \n"})})})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function i(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}const c={},u="ArgInsertionSort",d={id:"SortUtility/ArgInsertionSort",title:"ArgInsertionSort",description:"This routine performs an indirect insertion sort on an array.",source:"@site/docs/docs-api/SortUtility/ArgInsertionSort.md",sourceDirName:"SortUtility",slug:"/SortUtility/ArgInsertionSort",permalink:"/docs-api/SortUtility/ArgInsertionSort",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/SortUtility/ArgInsertionSort.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ArgHeapSort",permalink:"/docs-api/SortUtility/ArgHeapSort"},next:{title:"ArgIntroSort",permalink:"/docs-api/SortUtility/ArgIntroSort"}},h={},p=[{value:"Interface",id:"interface",level:2}];function f(e){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"arginsertionsort",children:"ArgInsertionSort"}),"\n",(0,n.jsx)(r.p,{children:"This routine performs an indirect insertion sort on an array."}),"\n",(0,n.jsx)(r.p,{children:"It returns the integer array which can be used for obtaining the sorted array."}),"\n",(0,n.jsx)(r.p,{children:"Calling example:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:"CALL ArgInsertionSort(array, arg, low, high)\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Then, ",(0,n.jsx)(r.code,{children:"array(arg)"})," will be sorted in increasing order."]}),"\n",(0,n.jsx)(r.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,n.jsxs)(s.Z,{children:[(0,n.jsxs)(o.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:" MODULE PURE SUBROUTINE ArgInsertionSort(array, arg, low, high)\n    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: array(:)\n    INTEGER(I4B), INTENT(INOUT) :: arg(:)\n    INTEGER(I4B), INTENT(IN) :: low\n    INTEGER(I4B), INTENT(IN) :: high\n  END SUBROUTINE ArgInsertionSort \n"})}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Here, entries of ",(0,n.jsx)(r.code,{children:"array"})," are NOT modified by the routine."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"arg"})," should be allocated by the user"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"array(arg)"})," returns the sorted array."]}),"\n"]})]}),(0,n.jsx)(o.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,n.jsx)(i,{})}),(0,n.jsx)(o.Z,{value:"close",label:"\u21a2 "})]})]})}function m(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},85162:(e,r,t)=>{t.d(r,{Z:()=>o});t(67294);var n=t(86010);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function o(e){let{children:r,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,o),hidden:t,children:r})}},74866:(e,r,t)=>{t.d(r,{Z:()=>j});var n=t(67294),a=t(86010),s=t(12466),o=t(16550),l=t(20469),i=t(91980),c=t(67392),u=t(50012);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:t}=e;const a=(0,o.k6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i._X)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,s=h(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[c,d]=f({queryString:t,groupId:a}),[m,g]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,u.Nk)(t);return[a,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function x(e){let{className:r,block:t,selectedValue:n,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const r=e.currentTarget,t=i.indexOf(r),a=l[t].value;a!==n&&(c(r),o(a))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},r),children:l.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function I(e){let{lazy:r,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function y(e){const r=m(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...r}),(0,v.jsx)(I,{...e,...r})]})}function j(e){const r=(0,g.Z)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(r))}},11151:(e,r,t)=>{t.d(r,{Z:()=>l,a:()=>o});var n=t(67294);const a={},s=n.createContext(a);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);