"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[30893,11311,10043],{86908:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>c});var l=t(85893),i=t(11151);const r={tags:["BlockMatrixField","BlockMatrixField/SetBlockMatrixFieldParam","BlockMatrixField/CheckEssentialParam","BlockMatrixField/Initiate","BlockMatrixField/Display","BlockMatrixField/Spy","BlockMatrixField/Deallocate","BlockMatrixField/Import"]},o="BlockMatrixField example 6",n={id:"BlockMatrixField/BlockMatrixField_test_6",title:"BlockMatrixField example 6",description:"This example shows the use of BlockMatrixField",source:"@site/docs/docs-api/BlockMatrixField/BlockMatrixField_test_6.md",sourceDirName:"BlockMatrixField",slug:"/BlockMatrixField/BlockMatrixField_test_6",permalink:"/docs-api/BlockMatrixField/BlockMatrixField_test_6",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/BlockMatrixField/BlockMatrixField_test_6.md",tags:[{label:"BlockMatrixField",permalink:"/docs-api/tags/block-matrix-field"},{label:"BlockMatrixField/SetBlockMatrixFieldParam",permalink:"/docs-api/tags/block-matrix-field-set-block-matrix-field-param"},{label:"BlockMatrixField/CheckEssentialParam",permalink:"/docs-api/tags/block-matrix-field-check-essential-param"},{label:"BlockMatrixField/Initiate",permalink:"/docs-api/tags/block-matrix-field-initiate"},{label:"BlockMatrixField/Display",permalink:"/docs-api/tags/block-matrix-field-display"},{label:"BlockMatrixField/Spy",permalink:"/docs-api/tags/block-matrix-field-spy"},{label:"BlockMatrixField/Deallocate",permalink:"/docs-api/tags/block-matrix-field-deallocate"},{label:"BlockMatrixField/Import",permalink:"/docs-api/tags/block-matrix-field-import"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{tags:["BlockMatrixField","BlockMatrixField/SetBlockMatrixFieldParam","BlockMatrixField/CheckEssentialParam","BlockMatrixField/Initiate","BlockMatrixField/Display","BlockMatrixField/Spy","BlockMatrixField/Deallocate","BlockMatrixField/Import"]},sidebar:"tutorialSidebar",previous:{title:"BlockMatrixField example 5",permalink:"/docs-api/BlockMatrixField/BlockMatrixField_test_5"},next:{title:"BlockMatrixField example 7",permalink:"/docs-api/BlockMatrixField/BlockMatrixField_test_7"}},s={},c=[{value:"Usage",id:"usage",level:2}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.h1,{id:"blockmatrixfield-example-6",children:"BlockMatrixField example 6"}),"\n",(0,l.jsxs)(a.p,{children:["This example shows the use of ",(0,l.jsx)(a.a,{href:"/docs-api/BlockMatrixField/BlockMatrixField_",children:"BlockMatrixField"})]}),"\n",(0,l.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  IMPLICIT NONE\n"})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:'  TYPE( BlockMatrixField_ ) :: obj\n  TYPE( ParameterList_ ) :: param\n  TYPE( Domain_ ), TARGET :: pressureDomain\n  TYPE( Domain_ ), TARGET :: velocityDomain\n  TYPE( DomainPointer_ ) :: domains( 2 )\n  TYPE( HDF5File_ ) :: pressureMeshFile\n  TYPE( HDF5File_ ) :: velocityMeshFile\n  TYPE( HDF5File_ ) :: blockMatrixOutfile\n  CHARACTER( LEN = * ), PARAMETER :: pressureMeshFilename="./mesh_tri3.h5"\n  CHARACTER( LEN = * ), PARAMETER :: velocityMeshFilename="./mesh_tri6.h5"\n  CHARACTER( LEN = * ), PARAMETER :: blockMatrixOutfileName= &\n    & "./blockMatrixOutfile.h5"\n'})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:'  CALL pressureMeshfile%Initiate( FileName=pressureMeshFilename, MODE="READ" )\n  CALL velocityMeshfile%Initiate( FileName=velocityMeshFilename, MODE="READ" )\n  CALL pressureMeshfile%Open()\n  CALL velocityMeshfile%Open()\n  CALL pressureDomain%Initiate( pressureMeshfile, "")\n  CALL velocityDomain%Initiate( velocityMeshfile, "")\n  CALL pressureMeshfile%Deallocate()\n  CALL velocityMeshfile%Deallocate()\n  domains(1)%ptr => velocityDomain\n  domains(2)%ptr => pressureDomain\n  CALL blockMatrixOutfile%Initiate( blockMatrixOutfileName, "READWRITE" )\n  CALL blockMatrixOutfile%open()\n  CALL obj%Import(blockMatrixOutfile, "/BlockMatrixField", domains=domains)\n  CALL obj%Export(blockMatrixOutfile, "/BlockMatrixFieldState" )\n  CALL blockMatrixOutfile%Deallocate()\n  CALL obj%Deallocate()\n  !> cleanup\n  NULLIFY(domains(1)%ptr, domains(2)%ptr)\n  CALL pressureDomain%Deallocate()\n  CALL velocityDomain%Deallocate()\n  CALL obj%Deallocate()\nEND PROGRAM main\n'})})]})}function u(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},58473:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>c});var l=t(85893),i=t(11151);const r={tags:["BlockMatrixField","BlockMatrixField/SetBlockMatrixFieldParam","BlockMatrixField/CheckEssentialParam","BlockMatrixField/Initiate","BlockMatrixField/Display","BlockMatrixField/Spy","BlockMatrixField/Deallocate","BlockMatrixField/Import","BlockMatrixField/Export"]},o="BlockMatrixField example 8",n={id:"BlockMatrixField/BlockMatrixField_test_8",title:"BlockMatrixField example 8",description:"This example shows the use of BlockMatrixField",source:"@site/docs/docs-api/BlockMatrixField/BlockMatrixField_test_8.md",sourceDirName:"BlockMatrixField",slug:"/BlockMatrixField/BlockMatrixField_test_8",permalink:"/docs-api/BlockMatrixField/BlockMatrixField_test_8",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/BlockMatrixField/BlockMatrixField_test_8.md",tags:[{label:"BlockMatrixField",permalink:"/docs-api/tags/block-matrix-field"},{label:"BlockMatrixField/SetBlockMatrixFieldParam",permalink:"/docs-api/tags/block-matrix-field-set-block-matrix-field-param"},{label:"BlockMatrixField/CheckEssentialParam",permalink:"/docs-api/tags/block-matrix-field-check-essential-param"},{label:"BlockMatrixField/Initiate",permalink:"/docs-api/tags/block-matrix-field-initiate"},{label:"BlockMatrixField/Display",permalink:"/docs-api/tags/block-matrix-field-display"},{label:"BlockMatrixField/Spy",permalink:"/docs-api/tags/block-matrix-field-spy"},{label:"BlockMatrixField/Deallocate",permalink:"/docs-api/tags/block-matrix-field-deallocate"},{label:"BlockMatrixField/Import",permalink:"/docs-api/tags/block-matrix-field-import"},{label:"BlockMatrixField/Export",permalink:"/docs-api/tags/block-matrix-field-export"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{tags:["BlockMatrixField","BlockMatrixField/SetBlockMatrixFieldParam","BlockMatrixField/CheckEssentialParam","BlockMatrixField/Initiate","BlockMatrixField/Display","BlockMatrixField/Spy","BlockMatrixField/Deallocate","BlockMatrixField/Import","BlockMatrixField/Export"]},sidebar:"tutorialSidebar",previous:{title:"BlockMatrixField example 7",permalink:"/docs-api/BlockMatrixField/BlockMatrixField_test_7"},next:{title:"BlockMatrixField example 9",permalink:"/docs-api/BlockMatrixField/BlockMatrixField_test_9"}},s={},c=[{value:"Usage",id:"usage",level:2}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.h1,{id:"blockmatrixfield-example-8",children:"BlockMatrixField example 8"}),"\n",(0,l.jsxs)(a.p,{children:["This example shows the use of ",(0,l.jsx)(a.a,{href:"/docs-api/BlockMatrixField/BlockMatrixField_",children:"BlockMatrixField"})]}),"\n",(0,l.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:'PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  IMPLICIT NONE\n  TYPE( BlockMatrixField_) :: obj\n  TYPE( Domain_ ) :: dom\n  TYPE( HDF5File_) :: meshfile\n  TYPE( HDF5File_ ) :: blockMatrixOutfile\n  CHARACTER( LEN = *), PARAMETER :: meshFilename="./mesh_tri3.h5"\n  CHARACTER( LEN =* ), PARAMETER :: blockMatrixOutfileName= &\n    & "./bmf_outfile_common_domain.h5"\n  !> main\n  ! #HDF5File/#Initiate\n  CALL meshfile%Initiate( FileName=meshFilename, MODE="READ" )\n  ! #HDF5File/#Open\n  CALL meshfile%Open()\n  ! #Domain/Initiate\n  CALL dom%Initiate( meshfile, "")\n  CALL blockMatrixOutfile%Initiate( blockMatrixOutfileName, "READWRITE" )\n  CALL blockMatrixOutfile%open()\n  CALL obj%Import(blockMatrixOutfile, "/BlockMatrixField", dom=dom)\n  CALL obj%Export(blockMatrixOutfile, "/BlockMatrixFieldState" )\n  CALL blockMatrixOutfile%Deallocate()\n  ! #BlockMatrixField/Deallocate\n  CALL obj%Deallocate( )\n  !> cleanup\n  CALL meshfile%Deallocate()\n  CALL dom%Deallocate()\n  CALL obj%Deallocate()\nEND PROGRAM main\n'})})]})}function u(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},17691:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>d,default:()=>k,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var l=t(85893),i=t(11151),r=t(74866),o=t(85162),n=t(86908),s=t(58473);const c={},d="Import",u={id:"BlockMatrixField/Import",title:"Import",description:"Import the field from an external file.",source:"@site/docs/docs-api/BlockMatrixField/Import.md",sourceDirName:"BlockMatrixField",slug:"/BlockMatrixField/Import",permalink:"/docs-api/BlockMatrixField/Import",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/BlockMatrixField/Import.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ILUSolve",permalink:"/docs-api/BlockMatrixField/ILUSolve"},next:{title:"Initiate",permalink:"/docs-api/BlockMatrixField/Initiate"}},m={},p=[{value:"Interface",id:"interface",level:2}];function x(e){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.h1,{id:"import",children:"Import"}),"\n",(0,l.jsx)(a.p,{children:"Import the field from an external file."}),"\n",(0,l.jsx)(a.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(o.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\nSUBROUTINE Import( obj, hdf5, group, dom )\n  CLASS( BlockMatrixField_ ), INTENT( INOUT ) :: obj\n  TYPE( HDF5File_ ), INTENT( INOUT ) :: hdf5\n  CHARACTER( LEN = * ), INTENT( IN ) :: group\n  TYPE( Domain_ ), TARGET, INTENT( IN ) :: dom\nEND SUBROUTINE Import\nEND INTERFACE\n"})})}),(0,l.jsx)(o.Z,{value:"example",label:"\ufe0f\u0700 example 1",children:(0,l.jsx)(n.default,{})}),(0,l.jsx)(o.Z,{value:"example2",label:"\ufe0f\u0700 example 2",children:(0,l.jsx)(s.default,{})}),(0,l.jsx)(o.Z,{value:"close",label:"\u21a2 "})]})]})}function k(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},85162:(e,a,t)=>{t.d(a,{Z:()=>o});t(67294);var l=t(86010);const i={tabItem:"tabItem_Ymn6"};var r=t(85893);function o(e){let{children:a,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,l.Z)(i.tabItem,o),hidden:t,children:a})}},74866:(e,a,t)=>{t.d(a,{Z:()=>E});var l=t(67294),i=t(86010),r=t(12466),o=t(16550),n=t(20469),s=t(91980),c=t(67392),d=t(50012);function u(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:a,children:t}=e;return(0,l.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:t,attributes:l,default:i}}=e;return{value:a,label:t,attributes:l,default:i}}))}(t);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function p(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function x(e){let{queryString:a=!1,groupId:t}=e;const i=(0,o.k6)(),r=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(i.location.search);a.set(r,e),i.replace({...i.location,search:a.toString()})}),[r,i])]}function k(e){const{defaultValue:a,queryString:t=!1,groupId:i}=e,r=m(e),[o,s]=(0,l.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const l=t.find((e=>e.default))??t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:a,tabValues:r}))),[c,u]=x({queryString:t,groupId:i}),[k,f]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[i,r]=(0,d.Nk)(t);return[i,(0,l.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),h=(()=>{const e=c??k;return p({value:e,tabValues:r})?e:null})();(0,n.Z)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=t(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var M=t(85893);function F(e){let{className:a,block:t,selectedValue:l,selectValue:o,tabValues:n}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const a=e.currentTarget,t=s.indexOf(a),i=n[t].value;i!==l&&(c(a),o(i))},u=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;a=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;a=s[t]??s[s.length-1];break}}a?.focus()};return(0,M.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},a),children:n.map((e=>{let{value:a,label:t,attributes:r}=e;return(0,M.jsx)("li",{role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,ref:e=>s.push(e),onKeyDown:u,onClick:d,...r,className:(0,i.Z)("tabs__item",h.tabItem,r?.className,{"tabs__item--active":l===a}),children:t??a},a)}))})}function b(e){let{lazy:a,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===i));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,M.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==i})))})}function B(e){const a=k(e);return(0,M.jsxs)("div",{className:(0,i.Z)("tabs-container",h.tabList),children:[(0,M.jsx)(F,{...e,...a}),(0,M.jsx)(b,{...e,...a})]})}function E(e){const a=(0,f.Z)();return(0,M.jsx)(B,{...e,children:u(e.children)},String(a))}},11151:(e,a,t)=>{t.d(a,{Z:()=>n,a:()=>o});var l=t(67294);const i={},r=l.createContext(i);function o(e){const a=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),l.createElement(r.Provider,{value:a},e.children)}}}]);