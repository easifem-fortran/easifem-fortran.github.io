"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[95129],{93392:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>h,default:()=>m,frontMatter:()=>u,metadata:()=>x,toc:()=>j});var r=a(85893),t=a(11151),i=a(74866),s=a(85162);function o(e){const n={a:"a",code:"code",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  IMPLICIT NONE\n  TYPE( CSRMatrix_ ) :: obj\n  TYPE( DOF_ ) :: dofobj\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["First, we initiate ",(0,r.jsx)(n.a,{href:"/docs-api/DOF/DOF_",children:"DOF"}),", which contains the structure of Degrees of freedom"]}),"\n",(0,r.jsxs)(n.li,{children:["The degrees of freedom has:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"1 physical variable"}),"\n",(0,r.jsx)(n.li,{children:"1 space component"}),"\n",(0,r.jsx)(n.li,{children:"1 time component"}),"\n",(0,r.jsxs)(n.li,{children:["12 number of spatial nodes are stored in ",(0,r.jsx)(n.code,{children:"NODES_FMT"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL Initiate( obj=dofobj, tNodes=[12], names=['K'], &\n    & spaceCompo=[1], timeCompo=[1], storageFMT=NODES_FMT )\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Below we create a sparse matrix with 12 number of rows and 12 number of cols."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL Initiate( obj, ncol=12, nrow=12, idof=dofobj, jdof=dofobj )\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL Deallocate( obj )\nEND PROGRAM main\n"})})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}function c(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n    USE easifemBase\n    IMPLICIT NONE\n    TYPE( CSRMatrix_ ) :: obj\n    TYPE( DOF_ ) :: dofobj\n    REAL( DFP ), ALLOCATABLE :: m2(:,:)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Initiate degrees of freedom object ",(0,r.jsx)(n.a,{href:"/docs-api/DOF/DOF_",children:"DOF"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"    CALL Initiate( obj=dofobj, tNodes=[4, 2], names=['V', 'P'], &\n      & spaceCompo=[2, 1], timeCompo=[1,1], storageFMT=FMT_DOF )\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Initiate ",(0,r.jsx)(n.a,{href:"/docs-api/CSRMatrix/CSRMatrix_",children:"CSRMatrix_"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"    CALL Initiate( obj, &\n      & ncol=.tnodes. dofobj, &\n      & nrow=.tnodes. dofobj, &\n      & idof=dofobj, jdof=dofobj )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Convert CSRMatrix to dense matrix."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'    m2 = obj\n    CALL Display( m2, "test2" )\n'})}),"\n",(0,r.jsx)(n.p,{children:"Cleanup"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"    CALL Deallocate( obj )\nEND PROGRAM main\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}const u={},h="Initiate",x={id:"CSRMatrix/Initiate",title:"Initiate",description:"Initiate() method constructs an instance of CSRMatrix_.",source:"@site/docs/docs-api/CSRMatrix/Initiate.md",sourceDirName:"CSRMatrix",slug:"/CSRMatrix/Initiate",permalink:"/docs-api/CSRMatrix/Initiate",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/CSRMatrix/Initiate.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Import",permalink:"/docs-api/CSRMatrix/Import"},next:{title:"LUSolve",permalink:"/docs-api/CSRMatrix/LUSolve"}},p={},j=[{value:"Interface",id:"interface",level:2}];function f(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"initiate",children:"Initiate"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Initiate()"})," method constructs an instance of ",(0,r.jsx)(n.code,{children:"CSRMatrix_"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["At present, there are 6 interfaces to ",(0,r.jsx)(n.code,{children:"initiate"})," method. You can see their interface and examples below."]}),"\n",(0,r.jsx)(n.p,{children:"Calling example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"CALL Initiate(CSRMatrix_::obj, Integer::ncol, Integer::nrow &\n  & [, DOF_::idof, DOF_::jdof, CHAR::MatrixProp] )\n!!\nCALL Initiate(CSRMatrix_::obj, CSRSparsity_::csr [, CHAR::matrixProp])\n!!\nCALL Initiate(CSRMatrix_:: obj, Real::A(:), Integer::IA(:), Integer::JA(:) &\n  & [, CHAR::MatrixProp])\n!!\nCALL Initiate(CSRMatrix_::obj, CSRMatrix_::obj2)\n!!\nCALL Initiate(CSRMatrix_::obj, CSRMatrix_::obj2, &\n  & Integer::i1, Integer::i2, Integer::j1, Integer::j2)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(s.Z,{value:"interface",label:"\u0700 Initiate(obj, ncol, nrow, idof, jdof, matrixProp)",default:!0,children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Initiate(obj, ncol, nrow, idof, jdof, matrixProp)\n    TYPE(CSRMatrix_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: ncol\n    !! number of columns in sparse matrix\n    INTEGER(I4B), INTENT(IN) :: nrow\n    !! number of rows in sparse matrix\n    TYPE(DOF_), OPTIONAL, INTENT(IN) :: idof, jdof\n    !! degree of freedom object; It contains information like\n    !! storage format (NODES_FMT, DOF_FMT), and names of physical variable\n    !! space-time component in each physical variables\n    !! Total number of nodes used for these physical variables\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: MatrixProp\n    !! Matrix is `SYM`, `UNSYM`\n  END SUBROUTINE Initiate\nEND INTERFACE\n"})}),(0,r.jsxs)(n.p,{children:["If user has information about the number of rows ",(0,r.jsx)(n.code,{children:"nrow"}),", number of columns ",(0,r.jsx)(n.code,{children:"ncol"})," of sparse matrix, then the above interface can be used to initiate an instance of ",(0,r.jsx)(n.code,{children:"CSRMatrix_"}),"."]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"dof"})," and ",(0,r.jsx)(n.code,{children:"matrixProp"})," are optional."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"dof"})," is ",(0,r.jsx)(n.a,{href:"/docs-api/DOF/DOF_",children:"DOF"})," object, and it is used to initiate ",(0,r.jsx)(n.code,{children:"obj%csr"}),", ",(0,r.jsx)(n.a,{href:"/docs-api/CSRSparsity/CSRSparsity_",children:"CSRSparsity"})," field."]}),"\n"]})]}),(0,r.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 Example 1",children:(0,r.jsx)(l,{})}),(0,r.jsx)(s.Z,{value:"example2",label:"\ufe0f\u0700 Example 2",children:(0,r.jsx)(d,{})}),(0,r.jsx)(s.Z,{value:"close",label:"\u21a2"})]}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(s.Z,{value:"iface2",label:"Initiate(obj, csr, matrixProp)",children:[(0,r.jsxs)(n.p,{children:["We can also initiate the sparse matrix by providing an instance of ",(0,r.jsx)(n.a,{href:"/docs-api/CSRSparsity/CSRSparsity_",children:"CSRSparsity"}),"."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Initiate(obj, csr, matrixProp)\n    TYPE(CSRMatrix_), INTENT(INOUT) :: obj\n    TYPE(CSRSparsity_), INTENT(IN) :: csr\n    !! number of columns in sparse matrix\n    !! number of rows in sparse matrix\n    !! degree of freedom object; It contains information like\n    !! storage format (NODES_FMT, DOF_FMT), and names of physical variable\n    !! space-time component in each physical variables\n    !! Total number of nodes used for these physical variables\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: MatrixProp\n    !! Matrix is `SYM`, `UNSYM`\n  END SUBROUTINE Initiate\nEND INTERFACE\n"})}),(0,r.jsxs)(n.p,{children:["In the above call, ",(0,r.jsx)(n.a,{href:"/docs-api/CSRSparsity/CSRSparsity_",children:"CSRSparsity"})," object, ",(0,r.jsx)(n.code,{children:"csr"}),", should be initiated by the user before passing it to the routine. This is because ",(0,r.jsx)(n.code,{children:"initiate"})," uses information such as ",(0,r.jsx)(n.code,{children:"ncol, nrow, nnz"})," stored inside ",(0,r.jsx)(n.code,{children:"csr"}),"."]})]}),(0,r.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(n.p,{children:"TODO"})}),(0,r.jsx)(s.Z,{value:"close",label:"\u21a2"})]}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(s.Z,{value:"iface3",label:"Interface 3",children:[(0,r.jsxs)(n.p,{children:["We can also pass ",(0,r.jsx)(n.code,{children:"INT::IA(:)"}),", ",(0,r.jsx)(n.code,{children:"INT:JA(:)"})," and matrix value ",(0,r.jsx)(n.code,{children:"REAL::A(:)"})," to ",(0,r.jsx)(n.code,{children:"Initiate()"})," method for constructing the sparse matrix. The interface is given below."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Initiate(obj, A, IA, JA, MatrixProp)\n    TYPE(CSRMatrix_), INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(IN) :: A(:)\n    INTEGER(I4B), INTENT(IN) :: IA(:), JA(:)\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: MatrixProp\n  END SUBROUTINE Initiate\nEND INTERFACE\n"})}),(0,r.jsxs)(n.p,{children:["This subroutine will allocate memory for ",(0,r.jsx)(n.code,{children:"csr"}),", which is an instance of ",(0,r.jsx)(n.a,{href:"/docs-api/CSRSparsity/CSRSparsity_",children:"CSRSparsity"}),"."]})]}),(0,r.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(n.p,{children:"TODO"})}),(0,r.jsx)(s.Z,{value:"close",label:"\u21a2"})]}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(s.Z,{value:"iface4",label:"Interface 4",children:[(0,r.jsx)(n.p,{children:"EASIFEM also provides an assignment operator for copying contents of one sparse matrix into another sparse matrix. The syntax is given below."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Initiate(obj, obj2)\n    TYPE(CSRMatrix_), INTENT(INOUT) :: obj\n    TYPE(CSRMatrix_), INTENT(IN) :: obj2\n  END SUBROUTINE Initiate\nEND INTERFACE\n"})}),(0,r.jsxs)(n.p,{children:["The above call is equivalent to ",(0,r.jsx)(n.code,{children:"obj=obj2"}),", and it will also copy ",(0,r.jsx)(n.code,{children:"obj%csr"}),"."]})]}),(0,r.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(n.p,{children:"TODO"})}),(0,r.jsx)(s.Z,{value:"close",label:"\u21a2"})]}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(s.Z,{value:"iface5",label:"Interface 5",children:[(0,r.jsx)(n.p,{children:"We can also create a csrmatrix from a subset of another csrmatrix."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Initiate(obj, obj2, i1, i2, j1, j2)\n    TYPE(CSRMatrix_), INTENT(INOUT) :: obj\n    TYPE(CSRMatrix_), INTENT(IN) :: obj2\n    INTEGER(I4B), INTENT(IN) :: i1, i2\n    INTEGER(I4B), INTENT(IN) :: j1, j2\n  END SUBROUTINE Initiate\nEND INTERFACE\n"})}),(0,r.jsxs)(n.p,{children:["Symbolically the above call is equivalent to ",(0,r.jsx)(n.code,{children:"obj=obj2(i1:i2, j1:j2)"}),", and it will allocate memory for ",(0,r.jsx)(n.code,{children:"obj%csr"}),"."]})]}),(0,r.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(n.p,{children:"TODO"})}),(0,r.jsx)(s.Z,{value:"close",label:"\u21a2"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>s});a(67294);var r=a(86010);const t={tabItem:"tabItem_Ymn6"};var i=a(85893);function s(e){let{children:n,hidden:a,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(t.tabItem,s),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>E});var r=a(67294),t=a(86010),i=a(12466),s=a(16550),o=a(20469),l=a(91980),c=a(67392),d=a(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:r,default:t}}=e;return{value:n,label:a,attributes:r,default:t}}))}(a);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function x(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const t=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function j(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,i=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,u]=p({queryString:a,groupId:t}),[j,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,d.Nk)(a);return[t,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:t}),m=(()=>{const e=c??j;return x({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=a(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(85893);function I(e){let{className:n,block:a,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,a=l.indexOf(n),t=o[a].value;t!==r&&(c(n),s(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,t.Z)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":r===n}),children:a??n},n)}))})}function N(e){let{lazy:n,children:a,selectedValue:t}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function T(e){const n=j(e);return(0,b.jsxs)("div",{className:(0,t.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(I,{...e,...n}),(0,b.jsx)(N,{...e,...n})]})}function E(e){const n=(0,f.Z)();return(0,b.jsx)(T,{...e,children:u(e.children)},String(n))}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>s});var r=a(67294);const t={},i=r.createContext(t);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);