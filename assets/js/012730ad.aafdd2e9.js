"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[87916],{77745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var r=n(85893),a=n(11151),s=n(74866),l=n(85162);function i(e){const t={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"Note this routine destroys the matrix at output."})}),"\n",(0,r.jsx)(t.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"PROGRAM main\nUSE easifemBase\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"    REAL( DFP ), ALLOCATABLE :: mat0(:,:), mat(:,:), w(:), exact(:)\n    REAL( DFP ), PARAMETER :: tol= 1.0E-2\n"})}),"\n",(0,r.jsx)(t.p,{children:'!!! note "Test-1"'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:'    mat =RESHAPE( &\n      [   1.96, -6.49, -0.47, -7.20, -0.65, &\n        & -6.49, 3.80, -6.39, 1.50, -6.34, &\n        & -0.47,-6.39, 4.17, -1.51, 2.67, &\n        & -7.20, 1.50,-1.51, 5.70, 1.80, &\n        & -0.65,-6.34, 2.67, 1.80,-7.10 &\n      ], [5,5])\n    mat0=mat\n    !!\n    CALL Reallocate(w, SIZE(mat,1))\n    CALL GetSymEigenValues_(mat=mat, eigenValues=w)\n    !!\n    exact = [-11.07, -6.23, 0.86, 8.87, 16.09]\n    !!\n    CALL OK( ALL(SOFTEQ(w, exact, tol)), "")\n    !!\n    CALL Display(MdEncode(ABS(mat0-mat)), "mat0-mat=")\n'})}),"\n",(0,r.jsxs)(t.admonition,{type:"caution",children:[(0,r.jsxs)(t.p,{children:["At output ",(0,r.jsx)(t.code,{children:"mat"})," is changed, the difference is given below.\n",(0,r.jsx)(t.code,{children:"mat0-mat="})]}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0.79415"}),(0,r.jsx)(t.td,{children:"10.448"}),(0,r.jsx)(t.td,{children:"0.47892"}),(0,r.jsx)(t.td,{children:"7.5634"}),(0,r.jsx)(t.td,{children:"0.5773"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"1.5357"}),(0,r.jsx)(t.td,{children:"2.4282"}),(0,r.jsx)(t.td,{children:"1.5005"}),(0,r.jsx)(t.td,{children:"5.6309"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"1.599"}),(0,r.jsx)(t.td,{children:"7.8722"}),(0,r.jsx)(t.td,{children:"2.3714"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0.85741"}),(0,r.jsx)(t.td,{children:"8.9405"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"})]})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const o={},u="GetSymEigenValues_",d={id:"EigenUtility/GetSymEigenValues_",title:"GetSymEigenValues_",description:"This subroutine calculates eigenvalues of a symmetric matrix.",source:"@site/docs/docs-api/EigenUtility/GetSymEigenValues_.md",sourceDirName:"EigenUtility",slug:"/EigenUtility/GetSymEigenValues_",permalink:"/docs-api/EigenUtility/GetSymEigenValues_",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/EigenUtility/GetSymEigenValues_.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetSymEigenValues",permalink:"/docs-api/EigenUtility/GetSymEigenValues"},next:{title:"SymEigenValues",permalink:"/docs-api/EigenUtility/SymEigenValues"}},h={},m=[];function x(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"getsymeigenvalues_",children:"GetSymEigenValues_"}),"\n",(0,r.jsx)(t.p,{children:"This subroutine calculates eigenvalues of a symmetric matrix."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["For ",(0,r.jsx)(t.code,{children:"n=2"})," it calls ",(0,r.jsx)(t.a,{href:"/docs-api/EigenUtility/SymEigenValues2by2",children:"SymEigenValues2y2"})]}),"\n",(0,r.jsxs)(t.li,{children:["For ",(0,r.jsx)(t.code,{children:"n=3"})," it calls ",(0,r.jsx)(t.a,{href:"/docs-api/EigenUtility/SymEigenValues3by3",children:"SymEigenValues3by3"})]}),"\n",(0,r.jsxs)(t.li,{children:["For ",(0,r.jsx)(t.code,{children:"n>=4"})," it calls ",(0,r.jsx)(t.code,{children:"SYEV"})," routine from Lapack95"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["In this routine matrix ",(0,r.jsx)(t.code,{children:"mat"})," will be destroyed. If you want to preserve ",(0,r.jsx)(t.code,{children:"mat"}),", then call ",(0,r.jsx)(t.a,{href:"/docs-api/EigenUtility/GetSymEigenValues",children:"GetSymEigenValues"}),"."]})}),"\n","\n","\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE GetSymEigenValues_(mat, eigenValues)\n    REAL(DFP), INTENT(INOUT) :: mat(:, :)\n    REAL(DFP), INTENT(OUT) :: eigenValues(:)\n  END SUBROUTINE GetSymEigenValues_\nEND INTERFACE\n"})})}),(0,r.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(c,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var r=n(86010);const a={tabItem:"tabItem_Ymn6"};var s=n(85893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(67294),a=n(86010),s=n(12466),l=n(16550),i=n(20469),c=n(91980),o=n(67392),u=n(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[o,d]=x({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),j=(()=>{const e=o??p;return m({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function b(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==r&&(o(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.Z)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function E(e){const t=p(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",j.tabList),children:[(0,g.jsx)(b,{...e,...t}),(0,g.jsx)(y,{...e,...t})]})}function v(e){const t=(0,f.Z)();return(0,g.jsx)(E,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>l});var r=n(67294);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);