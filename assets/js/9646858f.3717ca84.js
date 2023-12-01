"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[97095],{27386:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>j,metadata:()=>m,toc:()=>g});var r=t(85893),s=t(11151),l=t(74866),d=t(85162);function a(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["In this example we show the usage of Diag function.\nWe will form diagonal matrix in this example from ",(0,r.jsx)(n.code,{children:"REAL(DFP)"})," vector."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'program main\n  use easifemBase\n\n  real( DFP ), allocatable :: mat(:, :)\n  real( DFP ), allocatable :: d(:)\n\n  call reallocate(d, 5)\n  call random_number(d)\n  d = d * 10\n  call display( MdEncode(d), "d = " )\n\n  mat = Diag(d)\n  call display( MdEncode(mat), "mat = " )\n\nend program\n'})}),"\n",(0,r.jsx)(n.h2,{id:"results",children:"Results"}),"\n",(0,r.jsx)(n.p,{children:"d ="}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"8.2717"}),(0,r.jsx)(n.td,{children:"3.502"}),(0,r.jsx)(n.td,{children:"0.39168"}),(0,r.jsx)(n.td,{children:"0.51942"}),(0,r.jsx)(n.td,{children:"2.6892"})]})})]}),"\n",(0,r.jsx)(n.p,{children:"mat ="}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"8.2717"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"3.502"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0.39168"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0.51942"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"2.6892"})]})]})]})]})}function i(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}function c(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["In this example we show the usage of Diag function. We will form diagonal matrix in this example from ",(0,r.jsx)(n.code,{children:"REAL(Real32)"})," vector."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",metastring:'title="header"',children:"program main\n  use easifemBase\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",metastring:'title="variables"',children:"  real( DFP ), allocatable :: mat(:, :)\n  real( Real32 ), allocatable :: d(:)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",metastring:'title="form random diagonal"',children:'  call reallocate(d, 5)\n  call random_number(d)\n  d = d * 10\n  call display( MdEncode(d), "d = " )\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",metastring:'title="diagonal matrix"',children:'  mat = Diag(d)\n  call display( MdEncode(mat), "mat = " )\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",metastring:'title="cleanup"',children:"end program\n"})}),"\n",(0,r.jsx)(n.h2,{id:"results",children:"Results"}),"\n",(0,r.jsx)(n.p,{children:"d ="}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5.165"}),(0,r.jsx)(n.td,{children:"2.5622"}),(0,r.jsx)(n.td,{children:"1.1153"}),(0,r.jsx)(n.td,{children:"1.0442"}),(0,r.jsx)(n.td,{children:"5.2306"})]})})]}),"\n",(0,r.jsx)(n.p,{children:"mat ="}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5.165"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"2.5622"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"1.1153"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"1.0442"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"5.2306"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function o(e){const n={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"In this example we show the usage of Diag function."}),"\n",(0,r.jsx)(n.p,{children:"We will extract diagonals from a square matrix."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'program main\n  use easifemBase\n\n  real( DFP ), allocatable :: mat(:, :)\n  real( DFP ), allocatable :: d(:)\n\n  call reallocate(mat, 5, 5)\n  call random_number(mat)\n  call display( MdEncode(mat), "mat = " )\n'})}),"\n",(0,r.jsx)(n.p,{children:"mat ="}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0.68758"}),(0,r.jsx)(n.td,{children:"3.17016E-02"}),(0,r.jsx)(n.td,{children:"0.59785"}),(0,r.jsx)(n.td,{children:"4.6886E-02"}),(0,r.jsx)(n.td,{children:"0.61175"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0.48573"}),(0,r.jsx)(n.td,{children:"0.67486"}),(0,r.jsx)(n.td,{children:"0.73655"}),(0,r.jsx)(n.td,{children:"0.52901"}),(0,r.jsx)(n.td,{children:"0.60769"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0.17241"}),(0,r.jsx)(n.td,{children:"0.52752"}),(0,r.jsx)(n.td,{children:"0.79169"}),(0,r.jsx)(n.td,{children:"0.21098"}),(0,r.jsx)(n.td,{children:"0.94547"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0.21998"}),(0,r.jsx)(n.td,{children:"0.67235"}),(0,r.jsx)(n.td,{children:"0.52645"}),(0,r.jsx)(n.td,{children:"0.32917"}),(0,r.jsx)(n.td,{children:"0.3067"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0.50651"}),(0,r.jsx)(n.td,{children:"5.82701E-02"}),(0,r.jsx)(n.td,{children:"4.87607E-02"}),(0,r.jsx)(n.td,{children:"0.38279"}),(0,r.jsx)(n.td,{children:"0.11833"})]})]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",metastring:'title="getting the main diagonal"',children:'  d = Diag(mat, 0)\n  call display( MdEncode(d), "main diagonal = " )\n'})}),"\n",(0,r.jsx)(n.p,{children:"main diagonal ="}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0.68758"}),(0,r.jsx)(n.td,{children:"0.67486"}),(0,r.jsx)(n.td,{children:"0.79169"}),(0,r.jsx)(n.td,{children:"0.32917"}),(0,r.jsx)(n.td,{children:"0.11833"})]})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",metastring:'title="getting the first super diagonal"',children:'  d = Diag(mat, 1)\n  call display( MdEncode(d), "super diagonal 1= " )\n'})}),"\n",(0,r.jsx)(n.p,{children:"super diagonal 1="}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3.17016E-02"}),(0,r.jsx)(n.td,{children:"0.73655"}),(0,r.jsx)(n.td,{children:"0.21098"}),(0,r.jsx)(n.td,{children:"0.3067"})]})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",metastring:'title="getting the second super diagonal"',children:'  d = Diag(mat, 2)\n  call display( MdEncode(d), "super diagonal 2= " )\n'})}),"\n",(0,r.jsx)(n.p,{children:"super diagonal 2="}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0.59785"}),(0,r.jsx)(n.td,{children:"0.52901"}),(0,r.jsx)(n.td,{children:"0.94547"})]})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",metastring:'title="getting the first sub diagonal"',children:'  d = Diag(mat, -1)\n  call display( MdEncode(d), "subdiagonal 1= " )\n'})}),"\n",(0,r.jsx)(n.p,{children:"subdiagonal 1="}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0.48573"}),(0,r.jsx)(n.td,{children:"0.52752"}),(0,r.jsx)(n.td,{children:"0.52645"}),(0,r.jsx)(n.td,{children:"0.38279"})]})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",metastring:'title="getting the second subdiagonal"',children:'  d = Diag(mat, -2)\n  call display( MdEncode(d), "subdiagonal 2= " )\n'})}),"\n",(0,r.jsx)(n.p,{children:"subdiagonal 2="}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0.17241"}),(0,r.jsx)(n.td,{children:"0.67235"}),(0,r.jsx)(n.td,{children:"4.87607E-02"})]})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",metastring:'title="cleanup"',children:"end program\n"})})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}const j={},u="Diag",m={id:"DiagUtility/Diag",title:"Diag",description:"This function creates a diagonal matrix.",source:"@site/docs/docs-api/DiagUtility/Diag.md",sourceDirName:"DiagUtility",slug:"/DiagUtility/Diag",permalink:"/docs-api/DiagUtility/Diag",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/DiagUtility/Diag.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DiagUtility",permalink:"/docs-api/DiagUtility/"},next:{title:"DiagIndx",permalink:"/docs-api/DiagUtility/DiagIndx"}},p={},g=[];function f(e){const n={admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"diag",children:"Diag"}),"\n",(0,r.jsx)(n.p,{children:"This function creates a diagonal matrix."}),"\n",(0,r.jsx)(n.p,{children:"The generic syntax is given below."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",metastring:'title="Diag syntax"',children:"diagMat = Diag(d)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["where, ",(0,r.jsx)(n.code,{children:"d"})," denotes the main diagonal of the ",(0,r.jsx)(n.code,{children:"diagMat"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"d"})," can be a vector of ",(0,r.jsx)(n.code,{children:"Real32, Real64, Int8, Int16, Int32, Int64"})]}),"\n",(0,r.jsxs)(n.li,{children:["The result is always ",(0,r.jsx)(n.code,{children:"n x n"})," matrix of ",(0,r.jsx)(n.code,{children:"REAL(DFP)"}),"."]}),"\n"]}),"\n","\n","\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(d.Z,{value:"example 1",label:"\u0700 Example 1",children:(0,r.jsx)(i,{})}),(0,r.jsx)(d.Z,{value:"example 2",label:"\u0700 Example 2",children:(0,r.jsx)(h,{})}),(0,r.jsx)(d.Z,{value:"close",label:"\u21a2 Close",default:!0})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["We can also use ",(0,r.jsx)(n.code,{children:"Diag"})," to access the diagonal of the matrix. The syntaxt is given below:"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"d = Diag(mat, diagNo)\n"})}),"\n",(0,r.jsx)(n.p,{children:"where,"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"mat"})," is a two-dimensional square matrix"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"diagNo"})," is an integer, which stands for the diagonal"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"diagNo == 0"})," denotes the main diagonal"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"diagNo > 0"})," denotes the super-diagonal"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"diagNo < 0"})," denotes the sub diagonal"]}),"\n"]}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(d.Z,{value:"example",label:"\u0700 See example",children:(0,r.jsx)(x,{})}),(0,r.jsx)(d.Z,{value:"close",label:"\u21a2 Close",default:!0})]})]})}function b(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>d});t(67294);var r=t(86010);const s={tabItem:"tabItem_Ymn6"};var l=t(85893);function d(e){let{children:n,hidden:t,className:d}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,d),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>D});var r=t(67294),s=t(86010),l=t(12466),d=t(16550),a=t(20469),i=t(91980),c=t(67392),h=t(50012);function o(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return o(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function j(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function u(e){let{queryString:n=!1,groupId:t}=e;const s=(0,d.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})}),[l,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,l=x(e),[d,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!j({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,o]=u({queryString:t,groupId:s}),[m,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,l]=(0,h.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:s}),g=(()=>{const e=c??m;return j({value:e,tabValues:l})?e:null})();(0,a.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:d,selectValue:(0,r.useCallback)((e=>{if(!j({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),p(e)}),[o,p,l]),tabValues:l}}var p=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function b(e){let{className:n,block:t,selectedValue:r,selectValue:d,tabValues:a}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),h=e=>{const n=e.currentTarget,t=i.indexOf(n),s=a[t].value;s!==r&&(c(n),d(s))},o=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:o,onClick:h,...l,className:(0,s.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,f.jsx)(b,{...e,...n}),(0,f.jsx)(y,{...e,...n})]})}function D(e){const n=(0,p.Z)();return(0,f.jsx)(v,{...e,children:o(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>d});var r=t(67294);const s={},l=r.createContext(s);function d(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);