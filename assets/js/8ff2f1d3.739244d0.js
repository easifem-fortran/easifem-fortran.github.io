"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[86417],{25138:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>h,toc:()=>x});var n=r(85893),s=r(11151),l=r(74866),i=r(85162);function d(e){const t={a:"a",code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This example shows the usage of ",(0,n.jsx)(t.a,{href:"/docs-api/SymUtility/Sym",children:"Sym"})," method."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",metastring:'title="header"',children:"program main\n  use easifemBase\n  implicit none\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For ",(0,n.jsx)(t.code,{children:"Real(DFP)"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",metastring:'title="Sym from U"',children:'  block\n    real(dfp), allocatable :: a(:,:), b(:, :)\n    call Reallocate(b, 5, 5)\n    call RANDOM_NUMBER(b)\n    b = b * 10.0\n    a = Sym(mat=b, from="U")\n    call Display( MdEncode(b), "b = " // CHAR_LF )\n    call Display( MdEncode(a), "a = Sym(b, \'U\') = "// CHAR_LF )\n  end block\n'})}),"\n",(0,n.jsx)(t.p,{children:"b ="}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"9.1092"}),(0,n.jsx)(t.td,{children:"3.1157"}),(0,n.jsx)(t.td,{children:"2.4922"}),(0,n.jsx)(t.td,{children:"5.2597"}),(0,n.jsx)(t.td,{children:"5.7134"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"4.9975"}),(0,n.jsx)(t.td,{children:"7.2487"}),(0,n.jsx)(t.td,{children:"3.4857"}),(0,n.jsx)(t.td,{children:"2.0651"}),(0,n.jsx)(t.td,{children:"8.8911"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"6.248"}),(0,n.jsx)(t.td,{children:"6.3238"}),(0,n.jsx)(t.td,{children:"3.0667"}),(0,n.jsx)(t.td,{children:"2.7061"}),(0,n.jsx)(t.td,{children:"1.9605"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"3.5998"}),(0,n.jsx)(t.td,{children:"1.5125"}),(0,n.jsx)(t.td,{children:"8.7133"}),(0,n.jsx)(t.td,{children:"4.4033"}),(0,n.jsx)(t.td,{children:"4.1027"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"9.1797"}),(0,n.jsx)(t.td,{children:"0.34982"}),(0,n.jsx)(t.td,{children:"4.4058"}),(0,n.jsx)(t.td,{children:"5.9536"}),(0,n.jsx)(t.td,{children:"8.905"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"a = Sym(b, 'U') ="}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"9.1092"}),(0,n.jsx)(t.td,{children:"3.1157"}),(0,n.jsx)(t.td,{children:"2.4922"}),(0,n.jsx)(t.td,{children:"5.2597"}),(0,n.jsx)(t.td,{children:"5.7134"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"3.1157"}),(0,n.jsx)(t.td,{children:"7.2487"}),(0,n.jsx)(t.td,{children:"3.4857"}),(0,n.jsx)(t.td,{children:"2.0651"}),(0,n.jsx)(t.td,{children:"8.8911"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2.4922"}),(0,n.jsx)(t.td,{children:"3.4857"}),(0,n.jsx)(t.td,{children:"3.0667"}),(0,n.jsx)(t.td,{children:"2.7061"}),(0,n.jsx)(t.td,{children:"1.9605"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"5.2597"}),(0,n.jsx)(t.td,{children:"2.0651"}),(0,n.jsx)(t.td,{children:"2.7061"}),(0,n.jsx)(t.td,{children:"4.4033"}),(0,n.jsx)(t.td,{children:"4.1027"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"5.7134"}),(0,n.jsx)(t.td,{children:"8.8911"}),(0,n.jsx)(t.td,{children:"1.9605"}),(0,n.jsx)(t.td,{children:"4.1027"}),(0,n.jsx)(t.td,{children:"8.905"})]})]})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",metastring:'title="Sym from L"',children:'  block\n    real(dfp), allocatable :: a(:,:), b(:, :)\n    call Reallocate(b, 5, 5)\n    call RANDOM_NUMBER(b)\n    b = b * 10.0\n    a = Sym(mat=b, from="L")\n    call Display( MdEncode(b), "b = " // CHAR_LF )\n    call Display( MdEncode(a), "a = Sym(b, \'L\') = "// CHAR_LF )\n  end block\n'})}),"\n",(0,n.jsx)(t.p,{children:"b ="}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"5.0055"}),(0,n.jsx)(t.td,{children:"6.9798"}),(0,n.jsx)(t.td,{children:"4.7405"}),(0,n.jsx)(t.td,{children:"2.5558"}),(0,n.jsx)(t.td,{children:"9.0049"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0.94932"}),(0,n.jsx)(t.td,{children:"4.4983"}),(0,n.jsx)(t.td,{children:"3.8745"}),(0,n.jsx)(t.td,{children:"4.7315"}),(0,n.jsx)(t.td,{children:"4.0114"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1.8051"}),(0,n.jsx)(t.td,{children:"3.7857"}),(0,n.jsx)(t.td,{children:"6.4184"}),(0,n.jsx)(t.td,{children:"1.3453"}),(0,n.jsx)(t.td,{children:"0.66188"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2.2517"}),(0,n.jsx)(t.td,{children:"5.5031"}),(0,n.jsx)(t.td,{children:"7.8064"}),(0,n.jsx)(t.td,{children:"0.72241"}),(0,n.jsx)(t.td,{children:"5.8013"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"6.5009"}),(0,n.jsx)(t.td,{children:"5.5032"}),(0,n.jsx)(t.td,{children:"0.86608"}),(0,n.jsx)(t.td,{children:"5.6514"}),(0,n.jsx)(t.td,{children:"8.6163"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"a = Sym(b, 'L') ="}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"5.0055"}),(0,n.jsx)(t.td,{children:"0.94932"}),(0,n.jsx)(t.td,{children:"1.8051"}),(0,n.jsx)(t.td,{children:"2.2517"}),(0,n.jsx)(t.td,{children:"6.5009"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0.94932"}),(0,n.jsx)(t.td,{children:"4.4983"}),(0,n.jsx)(t.td,{children:"3.7857"}),(0,n.jsx)(t.td,{children:"5.5031"}),(0,n.jsx)(t.td,{children:"5.5032"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1.8051"}),(0,n.jsx)(t.td,{children:"3.7857"}),(0,n.jsx)(t.td,{children:"6.4184"}),(0,n.jsx)(t.td,{children:"7.8064"}),(0,n.jsx)(t.td,{children:"0.86608"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2.2517"}),(0,n.jsx)(t.td,{children:"5.5031"}),(0,n.jsx)(t.td,{children:"7.8064"}),(0,n.jsx)(t.td,{children:"0.72241"}),(0,n.jsx)(t.td,{children:"5.6514"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"6.5009"}),(0,n.jsx)(t.td,{children:"5.5032"}),(0,n.jsx)(t.td,{children:"0.86608"}),(0,n.jsx)(t.td,{children:"5.6514"}),(0,n.jsx)(t.td,{children:"8.6163"})]})]})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",metastring:'title="cleanup"',children:"end program main\n"})})]})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}const c={},o="Sym",h={id:"SymUtility/Sym",title:"Sym",description:"This function makes the symmetric matrix by using lower or part of the matrix.",source:"@site/docs/docs-api/SymUtility/Sym.md",sourceDirName:"SymUtility",slug:"/SymUtility/Sym",permalink:"/docs-api/SymUtility/Sym",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/SymUtility/Sym.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetSym",permalink:"/docs-api/SymUtility/GetSym"},next:{title:"TailUtility",permalink:"/docs-api/TailUtility/"}},u={},x=[{value:"Interface",id:"interface",level:2}];function j(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"sym",children:"Sym"}),"\n",(0,n.jsx)(t.p,{children:"This function makes the symmetric matrix by using lower or part of the matrix."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Please use this function when the matrix is not too big, otherwise use ",(0,n.jsx)(t.a,{href:"/docs-api/SymUtility/GetSym",children:"GetSym"}),"."]})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The following call will form symmetric matrix by using the upper triangle part of matrix ",(0,n.jsx)(t.code,{children:"B"})]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",metastring:'title="Sym from Upper part"',children:'A = Sym(mat=B, from="U")\n'})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The following call will form symmetric matrix by using the lower triangle part of matrix ",(0,n.jsx)(t.code,{children:"B"})]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",metastring:'title="Sym from Lower part"',children:'A = Sym(mat=B, from="L")\n'})}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(i.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:'  MODULE PURE FUNCTION Sym(mat, from) RESULT(ans)\n    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: mat(:, :)\n    CHARACTER(1), INTENT(IN) :: from\n    !! from = "U", then upper triangular part must be provided\n    !! from = "L", then lower triangular part must be provided\n    INTEGER(INT8) :: ans(SIZE(mat, 1), SIZE(mat, 2))\n  END FUNCTION Sym\n'})})}),(0,n.jsx)(i.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,n.jsx)(a,{})}),(0,n.jsx)(i.Z,{value:"close",label:"\u21a2 "})]})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>i});r(67294);var n=r(86010);const s={tabItem:"tabItem_Ymn6"};var l=r(85893);function i(e){let{children:t,hidden:r,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,i),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>S});var n=r(67294),s=r(86010),l=r(12466),i=r(16550),d=r(20469),a=r(91980),c=r(67392),o=r(50012);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const s=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,l=u(e),[i,a]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[c,h]=j({queryString:r,groupId:s}),[m,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,o.Nk)(r);return[s,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:s}),f=(()=>{const e=c??m;return x({value:e,tabValues:l})?e:null})();(0,d.Z)((()=>{f&&a(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),p(e)}),[h,p,l]),tabValues:l}}var p=r(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(85893);function y(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:d}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),o=e=>{const t=e.currentTarget,r=a.indexOf(t),s=d[r].value;s!==n&&(c(t),i(s))},h=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;t=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;t=a[r]??a[a.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t),children:d.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>a.push(e),onKeyDown:h,onClick:o,...l,className:(0,s.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function S(e){const t=(0,p.Z)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(t))}},11151:(e,t,r)=>{r.d(t,{Z:()=>d,a:()=>i});var n=r(67294);const s={},l=n.createContext(s);function i(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);