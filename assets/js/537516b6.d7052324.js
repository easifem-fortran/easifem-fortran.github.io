"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[5716],{44055:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>u,metadata:()=>d,toc:()=>f});var t=n(85893),r=n(11151),o=n(74866),s=n(85162);function l(e){const a={code:"code",pre:"pre",...(0,r.a)(),...e.components},{Details:n}=a;return n||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:'program main\nuse easifemBase\nimplicit none\n\nINTEGER( I4B ), parameter :: n = 5\nREAL( DFP ) :: D(n+1), E(n+1), alphaCoeff(n+1), betaCoeff(n+1)\nalphaCoeff=0.0_DFP\nbetaCoeff = 0.0_DFP\nCALL Chebyshev1JacobiRadauMatrix(-1.0_DFP, n, D, E, alphaCoeff, betaCoeff)\nCALL Display(D, "D: ")\nCALL Display(E, "E: ")\nCALL Display(alphaCoeff, "alphaCoeff: ")\nCALL Display(betaCoeff, "betaCoeff: ")\nend program main\n'})}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"See results"}),(0,t.jsx)("div",{children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-txt",metastring:'title="results"',children:"   D:   \n--------\n 0.00000\n 0.00000\n 0.00000\n 0.00000\n 0.00000\n-0.50000\n  E:   \n-------\n0.70711\n0.50000\n0.50000\n0.50000\n0.50000\n0.00000\nalphaCoeff: \n------------\n 0.00000E+00\n 0.00000E+00\n 0.00000E+00\n 0.00000E+00\n 0.00000E+00\nbetaCoeff: \n-----------\n  3.14159  \n  0.50000  \n  0.25000  \n  0.25000  \n  0.25000  \n  0.00000  \n\n"})})})]})]})}function i(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}const u={},c="Chebyshev1JacobiRadauMatrix",d={id:"Chebyshev1PolynomialUtility/Chebyshev1JacobiRadauMatrix",title:"Chebyshev1JacobiRadauMatrix",description:"Radau matrix for Chebyshev1 polynomials.",source:"@site/docs/docs-api/Chebyshev1PolynomialUtility/Chebyshev1JacobiRadauMatrix.md",sourceDirName:"Chebyshev1PolynomialUtility",slug:"/Chebyshev1PolynomialUtility/Chebyshev1JacobiRadauMatrix",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1JacobiRadauMatrix",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Chebyshev1PolynomialUtility/Chebyshev1JacobiRadauMatrix.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chebyshev1JacobiMatrix",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1JacobiMatrix"},next:{title:"Chebyshev1LeadingCoeff",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1LeadingCoeff"}},h={},f=[{value:"Examples",id:"examples",level:2}];function b(e){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"chebyshev1jacobiradaumatrix",children:"Chebyshev1JacobiRadauMatrix"}),"\n",(0,t.jsx)(a.p,{children:"Radau matrix for Chebyshev1 polynomials."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE Chebyshev1JacobiRadauMatrix(a, n, D, E, alphaCoeff, &\n    & betaCoeff)\n    REAL(DFP), INTENT(IN) :: a\n    !! one of the end of the domain\n    INTEGER(I4B), INTENT(IN) :: n\n    !! n should be greater than or equal to 1\n    REAL(DFP), INTENT(OUT) :: D(:)\n    !! the size should be 1:n+1\n    REAL(DFP), INTENT(OUT) :: E(:)\n    !! the size should be 1:n\n    REAL(DFP), OPTIONAL, INTENT(OUT) :: alphaCoeff(0:)\n    REAL(DFP), OPTIONAL, INTENT(OUT) :: betaCoeff(0:)\n  END SUBROUTINE Chebyshev1JacobiRadauMatrix\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n","\n","\n",(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(i,{})}),(0,t.jsx)(s.Z,{value:"close",label:"\u21a2 ",default:!0})]})]})}function p(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},85162:(e,a,n)=>{n.d(a,{Z:()=>s});n(67294);var t=n(86010);const r={tabItem:"tabItem_Ymn6"};var o=n(85893);function s(e){let{children:a,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,s),hidden:n,children:a})}},74866:(e,a,n)=>{n.d(a,{Z:()=>g});var t=n(67294),r=n(86010),o=n(12466),s=n(16550),l=n(20469),i=n(91980),u=n(67392),c=n(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:r}}=e;return{value:a,label:n,attributes:t,default:r}}))}(n);return function(e){const a=(0,u.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function f(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,i._X)(o),(0,t.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(r.location.search);a.set(o,e),r.replace({...r.location,search:a.toString()})}),[o,r])]}function p(e){const{defaultValue:a,queryString:n=!1,groupId:r}=e,o=h(e),[s,i]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!f({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:o}))),[u,d]=b({queryString:n,groupId:r}),[p,m]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,o]=(0,c.Nk)(n);return[r,(0,t.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),v=(()=>{const e=u??p;return f({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(85893);function x(e){let{className:a,block:n,selectedValue:t,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const a=e.currentTarget,n=i.indexOf(a),r=l[n].value;r!==t&&(u(a),s(r))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;a=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;a=i[n]??i[i.length-1];break}}a?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},a),children:l.map((e=>{let{value:a,label:n,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>i.push(e),onKeyDown:d,onClick:c,...o,className:(0,r.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function C(e){let{lazy:a,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function E(e){const a=p(e);return(0,y.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,y.jsx)(x,{...e,...a}),(0,y.jsx)(C,{...e,...a})]})}function g(e){const a=(0,m.Z)();return(0,y.jsx)(E,{...e,children:d(e.children)},String(a))}},11151:(e,a,n)=>{n.d(a,{Z:()=>l,a:()=>s});var t=n(67294);const r={},o=t.createContext(r);function s(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);