"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[44197],{47951:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>j,contentTitle:()=>u,default:()=>f,frontMatter:()=>o,metadata:()=>x,toc:()=>p});var n=t(85893),s=t(11151),d=t(74866),l=t(85162);function i(e){const r={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components},{Details:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"This example shows the use of GetTriu."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:"program main\nuse easifemBase\nimplicit none\n"})}),"\n",(0,n.jsx)(r.p,{children:"Testing for Square matrix"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:'REAL( Real32 ) :: A( 4, 4 ), lu(4, 4)\nCALL RANDOM_NUMBER(A); A = A*10\n\nCALl Display(MdEncode(A), "A = " // CHAR_LF // CHAR_LF)\n'})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(r.p,{children:"A ="}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"7.9596"}),(0,n.jsx)(r.td,{children:"0.4582"}),(0,n.jsx)(r.td,{children:"9.668"}),(0,n.jsx)(r.td,{children:"3.2888"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"9.8813"}),(0,n.jsx)(r.td,{children:"8.812"}),(0,n.jsx)(r.td,{children:"8.1055"}),(0,n.jsx)(r.td,{children:"0.42248"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"2.7221"}),(0,n.jsx)(r.td,{children:"5.3213"}),(0,n.jsx)(r.td,{children:"8.3696"}),(0,n.jsx)(r.td,{children:"0.61326"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"5.3658"}),(0,n.jsx)(r.td,{children:"7.8775"}),(0,n.jsx)(r.td,{children:"4.4198"}),(0,n.jsx)(r.td,{children:"1.9634"})]})]})]})]})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:'CALL GetTriu(A=A, diagNo=0, lu=lu)\nCALL Display(MdEncode(lu), "diagNo=0, = " // CHAR_LF // CHAR_LF )\n'})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(r.p,{children:"diagNo=0, ="}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"7.9596"}),(0,n.jsx)(r.td,{children:"0.4582"}),(0,n.jsx)(r.td,{children:"9.668"}),(0,n.jsx)(r.td,{children:"3.2888"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"8.812"}),(0,n.jsx)(r.td,{children:"8.1055"}),(0,n.jsx)(r.td,{children:"0.42248"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"8.3696"}),(0,n.jsx)(r.td,{children:"0.61326"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"1.9634"})]})]})]})]})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:'CALL GetTriu(A=A, diagNo=1, lu=lu)\nCALL Display(MdEncode(lu), "diagNo=1, = " // CHAR_LF  // CHAR_LF)\n'})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(r.p,{children:"diagNo=1, ="}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0.4582"}),(0,n.jsx)(r.td,{children:"9.668"}),(0,n.jsx)(r.td,{children:"3.2888"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"8.1055"}),(0,n.jsx)(r.td,{children:"0.42248"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0.61326"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0"})]})]})]})]})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:'CALL GetTriu(A=A, diagNo=2, lu=lu)\nCALL Display(MdEncode(lu), "diagNo=2, = " // CHAR_LF // CHAR_LF )\n'})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(r.p,{children:"diagNo=2, ="}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"9.668"}),(0,n.jsx)(r.td,{children:"3.2888"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0.42248"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0"})]})]})]})]})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:"end program main\n"})})]})}function c(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}function a(e){const r={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components},{Details:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"This example shows the use of GetTriu."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:"program main\nuse easifemBase\nimplicit none\n"})}),"\n",(0,n.jsx)(r.p,{children:"Testing for Square matrix\nLet's get the upper triangular form above Subdiagonals."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:'REAL( Real32 ) :: A( 4, 4 ), lu(4,4)\nCALL RANDOM_NUMBER(A); A = A*10\n\nCALl Display(MdEncode(A), "A = " // CHAR_LF // CHAR_LF)\n\nCALL GetTriu(A=A,diagNo=-1, lu=lu)\nCALL Display(MdEncode(lu), "diagNo=-1, = " // CHAR_LF  // CHAR_LF)\n\nCALL GetTriu(A=A,diagNo=-2, lu=lu)\nCALL Display(MdEncode(lu), "diagNo=-2, = " // CHAR_LF // CHAR_LF )\n'})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(r.p,{children:"A ="}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"4.3601"}),(0,n.jsx)(r.td,{children:"7.6972"}),(0,n.jsx)(r.td,{children:"7.6983"}),(0,n.jsx)(r.td,{children:"2.2272"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"6.2194"}),(0,n.jsx)(r.td,{children:"1.4554"}),(0,n.jsx)(r.td,{children:"1.4307"}),(0,n.jsx)(r.td,{children:"9.2086"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"8.7748"}),(0,n.jsx)(r.td,{children:"4.4743"}),(0,n.jsx)(r.td,{children:"9.8157"}),(0,n.jsx)(r.td,{children:"7.9489"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"9.6914"}),(0,n.jsx)(r.td,{children:"8.4748"}),(0,n.jsx)(r.td,{children:"5.7968"}),(0,n.jsx)(r.td,{children:"1.1776"})]})]})]}),(0,n.jsx)(r.p,{children:"diagNo=-1, ="}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"4.3601"}),(0,n.jsx)(r.td,{children:"7.6972"}),(0,n.jsx)(r.td,{children:"7.6983"}),(0,n.jsx)(r.td,{children:"2.2272"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"6.2194"}),(0,n.jsx)(r.td,{children:"1.4554"}),(0,n.jsx)(r.td,{children:"1.4307"}),(0,n.jsx)(r.td,{children:"9.2086"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"4.4743"}),(0,n.jsx)(r.td,{children:"9.8157"}),(0,n.jsx)(r.td,{children:"7.9489"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"5.7968"}),(0,n.jsx)(r.td,{children:"1.1776"})]})]})]}),(0,n.jsx)(r.p,{children:"diagNo=-2, ="}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"4.3601"}),(0,n.jsx)(r.td,{children:"7.6972"}),(0,n.jsx)(r.td,{children:"7.6983"}),(0,n.jsx)(r.td,{children:"2.2272"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"6.2194"}),(0,n.jsx)(r.td,{children:"1.4554"}),(0,n.jsx)(r.td,{children:"1.4307"}),(0,n.jsx)(r.td,{children:"9.2086"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"8.7748"}),(0,n.jsx)(r.td,{children:"4.4743"}),(0,n.jsx)(r.td,{children:"9.8157"}),(0,n.jsx)(r.td,{children:"7.9489"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"8.4748"}),(0,n.jsx)(r.td,{children:"5.7968"}),(0,n.jsx)(r.td,{children:"1.1776"})]})]})]})]})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:"end program main\n"})})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}const o={},u="GetTriu",x={id:"TriagUtility/GetTriu",title:"GetTriu",description:"This subroutine returns the upper triangle part of an int vector.",source:"@site/docs/docs-api/TriagUtility/GetTriu.md",sourceDirName:"TriagUtility",slug:"/TriagUtility/GetTriu",permalink:"/docs-api/TriagUtility/GetTriu",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/TriagUtility/GetTriu.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetTril",permalink:"/docs-api/TriagUtility/GetTril"},next:{title:"SetTril",permalink:"/docs-api/TriagUtility/SetTril"}},j={},p=[{value:"Interface",id:"interface",level:2}];function m(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"gettriu",children:"GetTriu"}),"\n",(0,n.jsx)(r.p,{children:"This subroutine returns the upper triangle part of an int vector."}),"\n",(0,n.jsx)(r.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE GetTriu(A, diagNo, lu)\n    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: A(:, :)\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: diagNo\n    !! diagonal number, default = 0\n    REAL(REAL32), INTENT(OUT) :: lu(SIZE(A, 1), SIZE(A, 2))\n  END SUBROUTINE GetTriu\n"})})}),(0,n.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 Example 1",children:(0,n.jsx)(c,{})}),(0,n.jsx)(l.Z,{value:"example2",label:"Example 2",children:(0,n.jsx)(h,{})}),(0,n.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function f(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},85162:(e,r,t)=>{t.d(r,{Z:()=>l});t(67294);var n=t(86010);const s={tabItem:"tabItem_Ymn6"};var d=t(85893);function l(e){let{children:r,hidden:t,className:l}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,l),hidden:t,children:r})}},74866:(e,r,t)=>{t.d(r,{Z:()=>T});var n=t(67294),s=t(86010),d=t(12466),l=t(16550),i=t(20469),c=t(91980),a=t(67392),h=t(50012);function o(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return o(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}(t);return function(e){const r=(0,a.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function x(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function j(e){let{queryString:r=!1,groupId:t}=e;const s=(0,l.k6)(),d=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,c._X)(d),(0,n.useCallback)((e=>{if(!d)return;const r=new URLSearchParams(s.location.search);r.set(d,e),s.replace({...s.location,search:r.toString()})}),[d,s])]}function p(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,d=u(e),[l,c]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!x({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:d}))),[a,o]=j({queryString:t,groupId:s}),[p,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,d]=(0,h.Nk)(t);return[s,(0,n.useCallback)((e=>{t&&d.set(e)}),[t,d])]}({groupId:s}),f=(()=>{const e=a??p;return x({value:e,tabValues:d})?e:null})();(0,i.Z)((()=>{f&&c(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);c(e),o(e),m(e)}),[o,m,d]),tabValues:d}}var m=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function g(e){let{className:r,block:t,selectedValue:n,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,d.o5)(),h=e=>{const r=e.currentTarget,t=c.indexOf(r),s=i[t].value;s!==n&&(a(r),l(s))},o=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},r),children:i.map((e=>{let{value:r,label:t,attributes:d}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>c.push(e),onKeyDown:o,onClick:h,...d,className:(0,s.Z)("tabs__item",f.tabItem,d?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function A(e){let{lazy:r,children:t,selectedValue:s}=e;const d=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=d.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:d.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function v(e){const r=p(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(g,{...e,...r}),(0,b.jsx)(A,{...e,...r})]})}function T(e){const r=(0,m.Z)();return(0,b.jsx)(v,{...e,children:o(e.children)},String(r))}},11151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>l});var n=t(67294);const s={},d=n.createContext(s);function l(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);