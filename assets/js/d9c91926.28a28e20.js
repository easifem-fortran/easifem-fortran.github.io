"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[1663],{52542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>h,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>j});var r=n(85893),s=n(11151),d=n(74866),l=n(85162);function i(e){const t={a:"a",code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["In this example we show the usage of ",(0,r.jsx)(t.a,{href:"/docs-api/DiagUtility/SetDiag",children:"SetDiag"})," function.\nWe will extract diagonals from a square matrix."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",metastring:'title="header"',children:"program main\n  use easifemBase\n  real( DFP ), allocatable :: mat(:, :)\n  real( DFP ), allocatable :: d(:)\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",metastring:'title="form random diagonal"',children:'  mat = zeros(5,5,1.0_DFP)\n  call reallocate(d, size(mat,1))\n  call random_number(d)\n  d = d * 10\n  call display( MdEncode(d), "d = "// CHAR_LF )\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",metastring:'title="set main diagonal"',children:'  call SetDiag(mat, d, 0)\n  call Display( MdEncode(mat), "mat = " // CHAR_LF)\n'})}),"\n",(0,r.jsx)(t.p,{children:"d ="}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"6.6689"}),(0,r.jsx)(t.td,{children:"5.5432"}),(0,r.jsx)(t.td,{children:"6.7909"}),(0,r.jsx)(t.td,{children:"2.3661"}),(0,r.jsx)(t.td,{children:"2.1642"})]})})]}),"\n",(0,r.jsx)(t.p,{children:"mat ="}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"6.6689"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"5.5432"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"6.7909"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"2.3661"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"2.1642"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"See line 5."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",metastring:'{5} title="set first super-diagonal"',children:'  call reallocate(d, size(mat,1)-1)\n  call random_number(d)\n  d = d * 10\n  call display( MdEncode(d), "d = "// CHAR_LF )\n  call SetDiag(mat, d, 1)\n  call Display( MdEncode(mat), "mat = " // CHAR_LF)\n'})}),"\n",(0,r.jsx)(t.p,{children:"d ="}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"4.594"}),(0,r.jsx)(t.td,{children:"8.1182"}),(0,r.jsx)(t.td,{children:"4.0813"}),(0,r.jsx)(t.td,{children:"0.83561"})]})})]}),"\n",(0,r.jsx)(t.p,{children:"mat ="}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"6.6689"}),(0,r.jsx)(t.td,{children:"4.594"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"5.5432"}),(0,r.jsx)(t.td,{children:"8.1182"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"6.7909"}),(0,r.jsx)(t.td,{children:"4.0813"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"2.3661"}),(0,r.jsx)(t.td,{children:"0.83561"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"2.1642"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"See line 5."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",metastring:'{5} title="set second super-diagonal"',children:'  call reallocate(d, size(mat,1)-2)\n  call random_number(d)\n  d = d * 10\n  call display( MdEncode(d), "d = "// CHAR_LF )\n  call SetDiag(mat, d, 2)\n  call Display( MdEncode(mat), "mat = " // CHAR_LF)\n'})}),"\n",(0,r.jsx)(t.p,{children:"d ="}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"7.2706"}),(0,r.jsx)(t.td,{children:"1.6909"}),(0,r.jsx)(t.td,{children:"6.0739"})]})})]}),"\n",(0,r.jsx)(t.p,{children:"mat ="}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"6.6689"}),(0,r.jsx)(t.td,{children:"4.594"}),(0,r.jsx)(t.td,{children:"7.2706"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"5.5432"}),(0,r.jsx)(t.td,{children:"8.1182"}),(0,r.jsx)(t.td,{children:"1.6909"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"6.7909"}),(0,r.jsx)(t.td,{children:"4.0813"}),(0,r.jsx)(t.td,{children:"6.0739"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"2.3661"}),(0,r.jsx)(t.td,{children:"0.83561"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"2.1642"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"See line 5."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",metastring:'{5} title="set second sub-diagonal"',children:'  call reallocate(d, size(mat,1)-2)\n  call random_number(d)\n  d = d * 10\n  call display( MdEncode(d), "d = "// CHAR_LF )\n  call SetDiag(mat, d, -2)\n  call Display( MdEncode(mat), "mat = " // CHAR_LF)\n'})}),"\n",(0,r.jsx)(t.p,{children:"d ="}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"8.4214"}),(0,r.jsx)(t.td,{children:"2.8808"}),(0,r.jsx)(t.td,{children:"6.9836"})]})})]}),"\n",(0,r.jsx)(t.p,{children:"mat ="}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"6.6689"}),(0,r.jsx)(t.td,{children:"4.594"}),(0,r.jsx)(t.td,{children:"7.2706"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"5.5432"}),(0,r.jsx)(t.td,{children:"8.1182"}),(0,r.jsx)(t.td,{children:"1.6909"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"8.4214"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"6.7909"}),(0,r.jsx)(t.td,{children:"4.0813"}),(0,r.jsx)(t.td,{children:"6.0739"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"2.8808"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"2.3661"}),(0,r.jsx)(t.td,{children:"0.83561"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"6.9836"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"2.1642"})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",metastring:'title="cleanup"',children:"end program\n"})})]})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const c={},h="SetDiag",o={id:"DiagUtility/SetDiag",title:"SetDiag",description:"SetDiag routine can be used for setting the diagonal entries of a square dense matrix. The generic call is given below.",source:"@site/docs/docs-api/DiagUtility/SetDiag.md",sourceDirName:"DiagUtility",slug:"/DiagUtility/SetDiag",permalink:"/docs-api/DiagUtility/SetDiag",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/DiagUtility/SetDiag.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DiagSize",permalink:"/docs-api/DiagUtility/DiagSize"},next:{title:"SetTriDiag",permalink:"/docs-api/DiagUtility/SetTriDiag"}},x={},j=[];function u(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"setdiag",children:"SetDiag"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"SetDiag"})," routine can be used for setting the diagonal entries of a square dense matrix. The generic call is given below."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"CALL SetDiag( mat, d, diagNo )\n"})}),"\n",(0,r.jsx)(t.p,{children:"where,"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"mat(:,:)"})," is a square matrix of ",(0,r.jsx)(t.code,{children:"Real(DFP)"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"d(:)"})," is a vector of ",(0,r.jsx)(t.code,{children:"Real32 | Real64 | Int8 | Int16 | Int32 | Int64"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["If size of ",(0,r.jsx)(t.code,{children:"d"})," is 1, then it means the diagonal values are constant, otherwise the size of ",(0,r.jsx)(t.code,{children:"d"})," should be same as the corresponding diagonal of matrix ",(0,r.jsx)(t.code,{children:"mat"}),". For example, if ",(0,r.jsx)(t.code,{children:"d"})," is first sub diagonal, then its size should be ",(0,r.jsx)(t.code,{children:"n-1"})," (where, n is size of mat)."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"diagNo"})," is an integer, which stands for the diagonal number."]}),"\n"]}),"\n","\n","\n",(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(l.Z,{value:"example",label:"\u0700 See example",children:(0,r.jsx)(a,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 Close",default:!0})]})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var r=n(86010);const s={tabItem:"tabItem_Ymn6"};var d=n(85893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>D});var r=n(67294),s=n(86010),d=n(12466),l=n(16550),i=n(20469),a=n(91980),c=n(67392),h=n(50012);function o(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return o(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function j(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.k6)(),d=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a._X)(d),(0,r.useCallback)((e=>{if(!d)return;const t=new URLSearchParams(s.location.search);t.set(d,e),s.replace({...s.location,search:t.toString()})}),[d,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,d=x(e),[l,a]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:d}))),[c,o]=u({queryString:n,groupId:s}),[m,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,d]=(0,h.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&d.set(e)}),[n,d])]}({groupId:s}),g=(()=>{const e=c??m;return j({value:e,tabValues:d})?e:null})();(0,i.Z)((()=>{g&&a(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!j({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);a(e),o(e),p(e)}),[o,p,d]),tabValues:d}}var p=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function b(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:i}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,d.o5)(),h=e=>{const t=e.currentTarget,n=a.indexOf(t),s=i[n].value;s!==r&&(c(t),l(s))},o=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;t=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;t=a[n]??a[a.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:d}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>a.push(e),onKeyDown:o,onClick:h,...d,className:(0,s.Z)("tabs__item",g.tabItem,d?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;const d=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=d.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:d.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,f.jsx)(b,{...e,...t}),(0,f.jsx)(v,{...e,...t})]})}function D(e){const t=(0,p.Z)();return(0,f.jsx)(y,{...e,children:o(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>l});var r=n(67294);const s={},d=r.createContext(s);function l(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);