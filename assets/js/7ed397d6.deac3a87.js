"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[59698],{78192:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>u,metadata:()=>d,toc:()=>p});var a=t(85893),r=t(11151),l=t(74866),s=t(85162);function o(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\n\nREAL(DFP), ALLOCATABLE :: xxx(:, :, :), yyy(:, :, :), zzz(:, :, :), &\n& x(:), y(:), z(:), basisValue(:, :), val(:, :, :)\nTYPE(VTKPlot_) :: avtk\nTYPE(string) :: label(1)\nINTEGER(I4B) :: ii\n\nx = linspace(-1.0_DFP, 1.0_DFP, 11)\ny = linspace(-1.0_DFP, 1.0_DFP, 11)\nz = linspace(-1.0_DFP, 1.0_DFP, 11)\nCALL MeshGrid(xxx, yyy, zzz, x, y, z)\nx = RESHAPE(xxx, [SIZE(xxx)])\ny = RESHAPE(yyy, [SIZE(yyy)])\nz = RESHAPE(zzz, [SIZE(zzz)])\n\nbasisValue = CellBasis_Hexahedron(2, 2, 2, x, y, z)\n\nDO ii = 1, SIZE(label)\n  label(ii) = tostring(ii)\nEND DO\n\nCALL avtk%Plot(xxx, yyy, zzz, basisValue, label, "cellBasis.vts")\n\nEND PROGRAM main\n'})})}function i(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}const u={},c="CellBasis",d={id:"HexahedronInterpolationUtility/CellBasis_Hexahedron",title:"CellBasis",description:"This function returns the cell basis for hexahedron element.",source:"@site/docs/docs-api/HexahedronInterpolationUtility/CellBasis_Hexahedron.md",sourceDirName:"HexahedronInterpolationUtility",slug:"/HexahedronInterpolationUtility/CellBasis_Hexahedron",permalink:"/docs-api/HexahedronInterpolationUtility/CellBasis_Hexahedron",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/HexahedronInterpolationUtility/CellBasis_Hexahedron.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hexahedron",permalink:"/docs-api/HexahedronInterpolationUtility/"},next:{title:"EquidistanceInPoint",permalink:"/docs-api/HexahedronInterpolationUtility/EquidistanceInPoint_Hexahedron"}},h={},p=[{value:"Interface",id:"interface",level:2}];function f(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"cellbasis",children:"CellBasis"}),"\n",(0,a.jsx)(n.p,{children:"This function returns the cell basis for hexahedron element."}),"\n",(0,a.jsx)("iframe",{src:"/elements/hexahedron/cellBasis.html",height:"600",width:"100%",scrolling:"no"}),"\n",(0,a.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(s.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:" INTERFACE CellBasis_Hexahedron\n  MODULE PURE FUNCTION CellBasis_Hexahedron1(  &\n    & n1, &\n    & n2, &\n    & n3, &\n    & x,   &\n    & y,   &\n    & z)   &\n    & RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n1\n    !! order along axis 1\n    !! it should be greater than 1\n    INTEGER(I4B), INTENT(IN) :: n2\n    !! order along axis 2\n    !! it should be greater than 1\n    INTEGER(I4B), INTENT(IN) :: n3\n    !! order along axis 3\n    !! it should be greater than 1\n    REAL(DFP), INTENT(IN) :: x(:), y(:), z(:)\n    !! point of evaluation\n    !! these points should be between [-1, 1].\n    REAL(DFP) :: ans( &\n      & SIZE(x), &\n      & (n1 - 1_I4B) * (n2 - 1_I4B) * (n3 - 1_I4B))\n  END FUNCTION CellBasis_Hexahedron1\nEND INTERFACE CellBasis_Hexahedron\n"})})}),(0,a.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,a.jsx)(i,{})}),(0,a.jsx)(s.Z,{value:"close",label:"\u21a2 "})]})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var a=t(86010);const r={tabItem:"tabItem_Ymn6"};var l=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>g});var a=t(67294),r=t(86010),l=t(12466),s=t(16550),o=t(20469),i=t(91980),u=t(67392),c=t(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=h(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[u,d]=f({queryString:t,groupId:r}),[x,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),m=(()=>{const e=u??x;return p({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{m&&i(m)}),[m]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=t(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var I=t(85893);function v(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),r=o[t].value;r!==a&&(u(n),s(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,I.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,I.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...l,className:(0,r.Z)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function E(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,I.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=x(e);return(0,I.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,I.jsx)(v,{...e,...n}),(0,I.jsx)(E,{...e,...n})]})}function g(e){const n=(0,b.Z)();return(0,I.jsx)(y,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var a=t(67294);const r={},l=a.createContext(r);function s(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);