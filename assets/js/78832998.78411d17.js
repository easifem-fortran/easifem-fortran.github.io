"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[35313],{75952:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=s(85893),n=s(11151),a=s(52991);const o={sidebar_position:1,date:new Date("2023-01-29T00:00:00.000Z"),update:new Date("2023-01-29T00:00:00.000Z"),status:"stable",docs:"done",extpkgs:"none",category:["Kernel"],tags:["kernel","SteadyStokes111"]},r="SteadyStokes111",l={id:"SteadyStokes111/SteadyStokes111_",title:"SteadyStokes111",description:"Description of Kernel",source:"@site/docs/docs-api/SteadyStokes111/SteadyStokes111_.md",sourceDirName:"SteadyStokes111",slug:"/SteadyStokes111/SteadyStokes111_",permalink:"/docs-api/SteadyStokes111/SteadyStokes111_",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/SteadyStokes111/SteadyStokes111_.md",tags:[{label:"kernel",permalink:"/docs-api/tags/kernel"},{label:"SteadyStokes111",permalink:"/docs-api/tags/steady-stokes-111"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,date:"2023-01-29T00:00:00.000Z",update:"2023-01-29T00:00:00.000Z",status:"stable",docs:"done",extpkgs:"none",category:["Kernel"],tags:["kernel","SteadyStokes111"]},sidebar:"tutorialSidebar",previous:{title:"SteadyStokes111",permalink:"/docs-api/SteadyStokes111/"},next:{title:"AddFluidMaterial",permalink:"/docs-api/SteadyStokes111/AddFluidMaterial"}},d={},c=[{value:"Description of Kernel",id:"description-of-kernel",level:2},{value:"TODO",id:"todo",level:2},{value:"Ideas for optimization",id:"ideas-for-optimization",level:2},{value:"Methods",id:"methods",level:2}];function u(e){const t={h1:"h1",h2:"h2",input:"input",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"steadystokes111",children:"SteadyStokes111"}),"\n",(0,i.jsx)(t.h2,{id:"description-of-kernel",children:"Description of Kernel"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"(1) Equal order interpolation for velocity and pressure field"}),"\n",(0,i.jsx)(t.li,{children:"(1) Coupled linear system (dof=[u, p])"}),"\n",(0,i.jsx)(t.li,{children:"(1) Constant material properties"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Variational multiscale stabilization method is used, and following options are allowed"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"SubscalePressure = True or False"}),"\n",(0,i.jsx)(t.li,{children:"BoundarySubscale = True or False"}),"\n",(0,i.jsx)(t.li,{children:"WeakDBC = True or False"}),"\n",(0,i.jsx)(t.li,{children:"Multiphase = True or False"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"todo",children:"TODO"}),"\n",(0,i.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Body-force"]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," ","gravity"]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","conservative and non-conservative form."]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Neumann boundary condition"]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," ","higher order terms"]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Positive and negative sign in case of HOT"]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","boundary subscale"]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","pressure subscale"]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," ","no-slip boundary condition"]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," ","free-slip boundary condition"]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," ","inlet boundary condition"]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," ","outlet boundary-condition"]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," ","add an option to calculate stabilization parameter only at the center of the element"]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," ","handle quadrature mapping in general form"]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Add reference pressure node and pressure value."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"ideas-for-optimization",children:"Ideas for optimization"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Constant stabilization parameter"}),"\n",(0,i.jsx)(t.li,{children:"Better precondition for iterative solver"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n","\n","\n",(0,i.jsx)(a.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},52991:(e,t,s)=>{s.d(t,{Z:()=>j});s(67294);var i=s(86010),n=s(53438),a=s(39960),o=s(13919),r=s(95999),l=s(92503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var c=s(85893);function u(e){let{href:t,children:s}=e;return(0,c.jsx)(a.Z,{href:t,className:(0,i.Z)("card padding--lg",d.cardContainer),children:s})}function p(e){let{href:t,icon:s,title:n,description:a}=e;return(0,c.jsxs)(u,{href:t,children:[(0,c.jsxs)(l.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:n,children:[s," ",n]}),a&&(0,c.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:a,children:a})]})}function h(e){let{item:t}=e;const s=(0,n.LM)(t);return s?(0,c.jsx)(p,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,r.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const s=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,n.xz)(t.docId??void 0);return(0,c.jsx)(p,{href:t.href,icon:s,title:t.label,description:t.description??i?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,c.jsx)(m,{item:t});case"category":return(0,c.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const s=(0,n.jA)();return(0,c.jsx)(j,{items:s.items,className:t})}function j(e){const{items:t,className:s}=e;if(!t)return(0,c.jsx)(k,{...e});const a=(0,n.MN)(t);return(0,c.jsx)("section",{className:(0,i.Z)("row",s),children:a.map(((e,t)=>(0,c.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,c.jsx)(x,{item:e})},t)))})}},11151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>o});var i=s(67294);const n={},a=i.createContext(n);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);