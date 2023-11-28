"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[54454],{38921:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>f});var n=r(85893),a=r(11151),o=r(74866),l=r(85162);function s(e){const t={code:"code",pre:"pre",...(0,a.a)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\n    real(real32) :: avec(10)\n    call RANDOM_NUMBER(avec)\n    avec = avec * 10\n    call Display( avec, msg="r32 Before sorting = ", advance="NO", full=.TRUE. )\n    call Introsort(avec )\n    call Display( avec, msg="r32 After sorting = ", full=.TRUE. )\n    call blanklines()\n'})}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsx)("div",{children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-txt",metastring:'title="results"',children:"r32 Before sorting = ,  r32 After sorting = \n---------------------,  --------------------\n       6.97349       ,        0.03184       \n       0.03184       ,        3.72048       \n       8.74764       ,        4.85491       \n       7.11966       ,        5.73196       \n       3.72048       ,        6.97349       \n       8.64364       ,        7.11966       \n       7.54315       ,        7.54315       \n       8.98520       ,        8.64364       \n       4.85491       ,        8.74764       \n       5.73196       ,        8.98520       \n"})})})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function i(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}const c={},u="IntroSort",d={id:"SortUtility/IntroSort",title:"IntroSort",description:"Intro sort (in-place) algorithm.",source:"@site/docs/docs-api/SortUtility/IntroSort.md",sourceDirName:"SortUtility",slug:"/SortUtility/IntroSort",permalink:"/docs-api/SortUtility/IntroSort",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/SortUtility/IntroSort.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"InsertionSort",permalink:"/docs-api/SortUtility/InsertionSort"},next:{title:"QuickSort",permalink:"/docs-api/SortUtility/QuickSort"}},p={},f=[{value:"Interface",id:"interface",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"introsort",children:"IntroSort"}),"\n",(0,n.jsx)(t.p,{children:"Intro sort (in-place) algorithm."}),"\n",(0,n.jsxs)(t.p,{children:["Reference: ",(0,n.jsx)(t.a,{href:"https://github.com/leonfoks/coretran/blob/master/src/sorting/m_sort.f90",children:"coretran"})]}),"\n",(0,n.jsx)(t.p,{children:"Calling example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"CALL IntroSort(array)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"MODULE PURE SUBROUTINE IntroSort(array)\n  INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(INOUT) :: array(:)\nEND SUBROUTINE IntroSort\n"})})}),(0,n.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,n.jsx)(i,{})}),(0,n.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>l});r(67294);var n=r(86010);const a={tabItem:"tabItem_Ymn6"};var o=r(85893);function l(e){let{children:t,hidden:r,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,l),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>j});var n=r(67294),a=r(86010),o=r(12466),l=r(16550),s=r(20469),i=r(91980),c=r(67392),u=r(50012);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,d]=h({queryString:r,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),v=(()=>{const e=c??m;return f({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=r(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(85893);function x(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const t=e.currentTarget,r=i.indexOf(t),a=s[r].value;a!==n&&(c(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function I(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(I,{...e,...t})]})}function j(e){const t=(0,b.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},11151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>l});var n=r(67294);const a={},o=n.createContext(a);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);