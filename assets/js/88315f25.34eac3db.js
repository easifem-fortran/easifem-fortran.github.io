"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[16692,57037],{94150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(85893),r=n(11151);const i={sidebar_position:2},o="Structure",a={id:"AbstractRefElement/AbstractRefElement_",title:"Structure",description:"The structure of AbstractRefElement is given below.",source:"@site/docs/docs-api/AbstractRefElement/AbstractRefElement_.md",sourceDirName:"AbstractRefElement",slug:"/AbstractRefElement/AbstractRefElement_",permalink:"/docs-api/AbstractRefElement/AbstractRefElement_",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractRefElement/AbstractRefElement_.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"AbstractRefElement",permalink:"/docs-api/AbstractRefElement/"},next:{title:"Copy",permalink:"/docs-api/AbstractRefElement/Copy"}},c={},l=[{value:"DeferredMethods",id:"deferredmethods",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"structure",children:"Structure"}),"\n",(0,s.jsx)(t.p,{children:"The structure of AbstractRefElement is given below."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"TYPE, ABSTRACT :: AbstractRefElement_\n  PRIVATE\n  REAL(DFP), ALLOCATABLE :: xij(:, :)\n  !! Nodal coordinates\n  INTEGER(I4B) :: entityCounts(4) = 0_I4B\n  !! Number of 0D, 1D, 2D, 3D subentities in the reference element\n  INTEGER(I4B) :: xiDimension = -1_I4B\n  !! Xidimension  elemType\n  !! 0 is for point\n  !! 1 is for line\n  !! 2 is for surface\n  !! 3 is for volume\n  INTEGER(I4B) :: name = -1_I4B\n  !! name of the element\n  TYPE(String) :: nameStr\n  !! name of the element\n  INTEGER(I4B) :: nsd = -1_I4B\n  !! Number of spatial dimensions\n  TYPE(Topology_), PUBLIC, ALLOCATABLE :: pointTopology(:)\n  !! Topology information of points\n  TYPE(Topology_), PUBLIC, ALLOCATABLE :: edgeTopology(:)\n  !! Topology information of edges\n  TYPE(Topology_), PUBLIC, ALLOCATABLE :: faceTopology(:)\n  !! Topology information of facet\n  TYPE(Topology_), PUBLIC, ALLOCATABLE :: cellTopology(:)\n  !! Topology information of cells\n  CLASS(BaseContinuity_), ALLOCATABLE :: baseContinuity\n  !! continuity or conformity of basis defined on reference\n  !! element, following values are allowed\n  !! H1, HCurl, HDiv, DG\n  CLASS(BaseInterpolation_), ALLOCATABLE :: baseInterpol\n  !! Type of basis functions used for interpolation on reference\n  !! element, Following values are allowed\n  !! LagrangeInterpolation\n  !! HermitInterpolation\n  !! SerendipityInterpolation\n  !! HierarchyInterpolation\n  !! OrthogonalInterpolation\n"})}),"\n",(0,s.jsx)(t.h2,{id:"deferredmethods",children:"DeferredMethods"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs-api/AbstractRefElement/GetName",children:"GetName"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs-api/AbstractRefElement/GetFacetMatrix",children:"GetFacetElements"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs-api/AbstractRefElement/GenerateTopology",children:"GenerateTopology"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs-api/AbstractRefElement/GenerateTopology",children:"RefCoord"})}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},15890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var s=n(85893),r=n(11151),i=n(94150),o=n(52991);const a={sidebar_position:1,date:new Date("2023-08-04T00:00:00.000Z"),update:new Date("2023-08-04T00:00:00.000Z"),status:"stable",docs:"done",extpkgs:"none",category:["Basis","ShapeFunctions","FiniteElements","Geometry"],tags:["easifemClasses","shapeFunctions","basis","finiteElements","referenceElements","geometry"]},c="AbstractRefElement",l={id:"AbstractRefElement/index",title:"AbstractRefElement",description:"Abstract class for reference element for finite elements.",source:"@site/docs/docs-api/AbstractRefElement/index.md",sourceDirName:"AbstractRefElement",slug:"/AbstractRefElement/",permalink:"/docs-api/AbstractRefElement/",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractRefElement/index.md",tags:[{label:"easifemClasses",permalink:"/docs-api/tags/easifem-classes"},{label:"shapeFunctions",permalink:"/docs-api/tags/shape-functions"},{label:"basis",permalink:"/docs-api/tags/basis"},{label:"finiteElements",permalink:"/docs-api/tags/finite-elements"},{label:"referenceElements",permalink:"/docs-api/tags/reference-elements"},{label:"geometry",permalink:"/docs-api/tags/geometry"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,date:"2023-08-04T00:00:00.000Z",update:"2023-08-04T00:00:00.000Z",status:"stable",docs:"done",extpkgs:"none",category:["Basis","ShapeFunctions","FiniteElements","Geometry"],tags:["easifemClasses","shapeFunctions","basis","finiteElements","referenceElements","geometry"]},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/AbstractPolynomialSpace3D/AbstractPolynomialSpace3D_"},next:{title:"Structure",permalink:"/docs-api/AbstractRefElement/AbstractRefElement_"}},d={},m=[{value:"Methods",id:"methods",level:2}];function f(e){const t={h1:"h1",h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"abstractrefelement",children:"AbstractRefElement"}),"\n",(0,s.jsx)(t.p,{children:"Abstract class for reference element for finite elements."}),"\n","\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n","\n","\n",(0,s.jsx)(o.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},52991:(e,t,n)=>{n.d(t,{Z:()=>A});n(67294);var s=n(86010),r=n(53438),i=n(39960),o=n(13919),a=n(95999),c=n(92503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(85893);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(i.Z,{href:t,className:(0,s.Z)("card padding--lg",l.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:r,description:i}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(c.Z,{as:"h2",className:(0,s.Z)("text--truncate",l.cardTitle),title:r,children:[n," ",r]}),i&&(0,d.jsx)("p",{className:(0,s.Z)("text--truncate",l.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e;const n=(0,r.LM)(t);return n?(0,d.jsx)(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,r.xz)(t.docId??void 0);return(0,d.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(u,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,r.jA)();return(0,d.jsx)(A,{items:n.items,className:t})}function A(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(b,{...e});const i=(0,r.MN)(t);return(0,d.jsx)("section",{className:(0,s.Z)("row",n),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var s=n(67294);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);