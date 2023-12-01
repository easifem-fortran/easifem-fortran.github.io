"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[49803],{23002:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var r=a(85893),n=a(11151),l=a(74866),o=a(85162);function i(e){const t={code:"code",pre:"pre",...(0,n.a)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:'program main\nuse easifemBase\nimplicit none\nINTEGER( I4B ), parameter :: n = 5\nREAL( DFP ) :: D(n+2), E(n+2), alphaCoeff(n+2), betaCoeff(n+2)\nCALL UltrasphericalJacobiLobattoMatrix(n, 0.5_DFP, D, E, alphaCoeff, betaCoeff)\nCALL Display(D, "D: ")\nCALL Display(E, "E: ")\nCALL Display(alphaCoeff, "alphaCoeff: ")\nCALL Display(betaCoeff, "betaCoeff: ")\nend program main\n'})}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsx)("div",{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-txt",metastring:'title="results"',children:"  D:   \n-------\n0.00000\n0.00000\n0.00000\n0.00000\n0.00000\n0.00000\n0.00000\n  E:   \n-------\n0.57735\n0.51640\n0.50709\n0.50395\n0.50252\n0.73855\n0.00000\nalphaCoeff: \n------------\n  0.00000   \n  0.00000   \n  0.00000   \n  0.00000   \n  0.00000   \n  0.00000   \n  0.00000   \nbetaCoeff: \n-----------\n  2.00000  \n  0.33333  \n  0.26667  \n  0.25714  \n  0.25397  \n  0.25253  \n  0.00000  \n"})})})]})]})}function s(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const c={},u="UltrasphericalJacobiLobattoMatrix",d={id:"UltrasphericalPolynomialUtility/UltrasphericalJacobiLobattoMatrix",title:"UltrasphericalJacobiLobattoMatrix",description:"Ultraspherical Lobatto matrix for Jacobi polynomial.",source:"@site/docs/docs-api/UltrasphericalPolynomialUtility/UltrasphericalJacobiLobattoMatrix.md",sourceDirName:"UltrasphericalPolynomialUtility",slug:"/UltrasphericalPolynomialUtility/UltrasphericalJacobiLobattoMatrix",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalJacobiLobattoMatrix",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/UltrasphericalPolynomialUtility/UltrasphericalJacobiLobattoMatrix.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UltrasphericalInvTransform",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalInvTransform"},next:{title:"UltrasphericalJacobiMatrix",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalJacobiMatrix"}},p={},h=[{value:"Examples",id:"examples",level:2}];function f(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"ultrasphericaljacobilobattomatrix",children:"UltrasphericalJacobiLobattoMatrix"}),"\n",(0,r.jsx)(t.p,{children:"Ultraspherical Lobatto matrix for Jacobi polynomial."}),"\n","\n","\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(o.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE UltrasphericalJacobiLobattoMatrix(n, lambda, D, E, &\n    & alphaCoeff, betaCoeff)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! n should be greater than or equal to 1\n    REAL(DFP), INTENT(IN) :: lambda\n    !! lambda should be greater than -0.5\n    REAL(DFP), INTENT(OUT) :: D(:)\n    !! the size should be 1:n+2\n    REAL(DFP), INTENT(OUT) :: E(:)\n    !! the size should be 1:n+1\n    REAL(DFP), OPTIONAL, INTENT(OUT) :: alphaCoeff(0:)\n    REAL(DFP), OPTIONAL, INTENT(OUT) :: betaCoeff(0:)\n  END SUBROUTINE UltrasphericalJacobiLobattoMatrix\nEND INTERFACE\n"})})}),(0,r.jsx)(o.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(s,{})}),(0,r.jsx)(o.Z,{value:"close",label:"\u21a2 "})]})]})}function b(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>o});a(67294);var r=a(86010);const n={tabItem:"tabItem_Ymn6"};var l=a(85893);function o(e){let{children:t,hidden:a,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(n.tabItem,o),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(67294),n=a(86010),l=a(12466),o=a(16550),i=a(20469),s=a(91980),c=a(67392),u=a(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,d]=f({queryString:a,groupId:n}),[b,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),x=(()=>{const e=c??b;return h({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{x&&s(x)}),[x]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),m(e)}),[d,m,l]),tabValues:l}}var m=a(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(85893);function y(e){let{className:t,block:a,selectedValue:r,selectValue:o,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const t=e.currentTarget,a=s.indexOf(t),n=i[a].value;n!==r&&(c(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>s.push(e),onKeyDown:d,onClick:u,...l,className:(0,n.Z)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function E(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function U(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,n.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(y,{...e,...t}),(0,v.jsx)(E,{...e,...t})]})}function g(e){const t=(0,m.Z)();return(0,v.jsx)(U,{...e,children:d(e.children)},String(t))}},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>o});var r=a(67294);const n={},l=r.createContext(n);function o(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);