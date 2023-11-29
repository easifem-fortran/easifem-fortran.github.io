"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[35538,38816],{43414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var i=n(85893),o=n(11151);const s={},d="Get",r={id:"AbstractBC/Get",title:"Get",description:"Get node number and nodal value from the boundary condition.",source:"@site/docs/docs-api/AbstractBC/Get.md",sourceDirName:"AbstractBC",slug:"/AbstractBC/Get",permalink:"/docs-api/AbstractBC/Get",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractBC/Get.md",tags:[],version:"current",lastUpdatedAt:1701147514,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Export",permalink:"/docs-api/AbstractBC/Export"},next:{title:"GetDOFNo",permalink:"/docs-api/AbstractBC/GetDOFNo"}},c={},a=[{value:"Interface",id:"interface",level:2}];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"get",children:"Get"}),"\n",(0,i.jsx)(t.p,{children:"Get node number and nodal value from the boundary condition."}),"\n",(0,i.jsx)("span",{class:"badge badge--secondary",children:" @GetMethods "}),"\n",(0,i.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Get(obj, nodeNum, nodalValue, times)\n    CLASS(AbstractBC_), INTENT(IN) :: obj\n    INTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: nodeNum(:)\n    REAL(DFP), OPTIONAL, ALLOCATABLE, INTENT(INOUT) :: nodalValue(:, :)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: times(:)\n  END SUBROUTINE Get\nEND INTERFACE\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.mdxAdmonitionTitle,{children:(0,i.jsx)(t.code,{children:"nodeNum"})})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"nodeNum(:)"})," is the global node number of boundary nodes where boundary conditions is prescribed"]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.mdxAdmonitionTitle,{children:(0,i.jsx)(t.code,{children:"nodalValue"})})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If present ",(0,i.jsx)(t.code,{children:"nodalValue(:,:)"})," then nodal values of prescribed boundary conditions are returned."]}),"\n",(0,i.jsxs)(t.li,{children:["The row size of ",(0,i.jsx)(t.code,{children:"nodalValue"})," is always equal to the size of ",(0,i.jsx)(t.code,{children:"nodeNum"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["The number of columns in ",(0,i.jsx)(t.code,{children:"nodalValue"})," depends upon the ",(0,i.jsx)(t.code,{children:"nodalValueType"}),". If ",(0,i.jsx)(t.code,{children:"nodalValueType"})," is ",(0,i.jsx)(t.code,{children:"Time"})," or ",(0,i.jsx)(t.code,{children:"SpaceTime"}),", then the column size is equal to the size of ",(0,i.jsx)(t.code,{children:"times"})," (if present) otherwise 1."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["If ",(0,i.jsx)(t.code,{children:"IsUserFunction"})," is true then ",(0,i.jsx)(t.code,{children:"func"})," is used for computing the nodal values at the boundary."]})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["If ",(0,i.jsx)(t.code,{children:"IsUserFunction"})," is false then ",(0,i.jsx)(t.code,{children:"nodalValue"})," should be allocated. In this case, this function checks the ",(0,i.jsx)(t.code,{children:"nodalValueType"}),", and accordingly returns ",(0,i.jsx)(t.code,{children:"nodalValue"})," ."]})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},10092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var i=n(85893),o=n(11151),s=n(43414);const d={sidebar_position:6},r="Get",c={id:"DirichletBC/Get",title:"Get",description:"",source:"@site/docs/docs-api/DirichletBC/Get.md",sourceDirName:"DirichletBC",slug:"/DirichletBC/Get",permalink:"/docs-api/DirichletBC/Get",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/DirichletBC/Get.md",tags:[],version:"current",lastUpdatedAt:1701182689,formattedLastUpdatedAt:"Nov 28, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Set",permalink:"/docs-api/DirichletBC/Set"},next:{title:"AddDirichletBC",permalink:"/docs-api/DirichletBC/AddDirichletBC"}},a={},l=[];function h(e){const t={h1:"h1",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"get",children:"Get"}),"\n","\n","\n",(0,i.jsx)(s.default,{})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>d});var i=n(67294);const o={},s=i.createContext(o);function d(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);