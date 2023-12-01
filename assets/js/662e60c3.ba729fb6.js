"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[98521,69574],{50254:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>E,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var i=t(85893),r=t(11151);const o={},s="Structure",d={id:"ReferenceElement/ReferenceElement_",title:"Structure",description:"ReferenceElement type is designed for handling the reference domains of finite elements.",source:"@site/docs/docs-api/ReferenceElement/ReferenceElement_.md",sourceDirName:"ReferenceElement",slug:"/ReferenceElement/ReferenceElement_",permalink:"/docs-api/ReferenceElement/ReferenceElement_",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/ReferenceElement/ReferenceElement_.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Order",permalink:"/docs-api/ReferenceElement/Order"},next:{title:"ReferenceElement example 1",permalink:"/docs-api/ReferenceElement/ReferenceElement_test_1"}},l={},c=[];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"structure",children:"Structure"}),"\n",(0,i.jsx)(n.p,{children:"ReferenceElement type is designed for handling the reference domains of finite elements."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"TYPE :: ReferenceElement_\n  REAL(DFP), ALLOCATABLE :: xiJ(:, :)\n    !! Node coord\n  INTEGER(I4B) :: entityCounts(4) = 0\n    !! Number of 0D, 1D, 2D, 3D entities\n  INTEGER(I4B) :: xiDimension = 0\n    !! Xidimension\n  INTEGER(I4B) :: name = 0\n    !! name of the element\n  INTEGER(I4B) :: order = 0\n    !! Order of element\n  INTEGER(I4B) :: nsd = 0\n    !! Number of spatial dimensions\n  INTEGER(I4B) :: interpolationPointType = Equidistance\n    !! Interpolation point\n    !! Equidistance, GaussLegendre, GaussLobatto, Chebyshev\n  TYPE(ReferenceTopology_), ALLOCATABLE :: topology(:)\n    !! Topology information of 0D, 1, 2, 3D entities\nPROCEDURE(highorder_refelem), POINTER, PASS(obj) :: highOrderElement => NULL()\n    !! Routine to generate hgher order LagrangeElement\nEND TYPE ReferenceElement_\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.code,{children:"xiJ"})})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Nodal coordinates of the ReferenceElement."}),"\n",(0,i.jsxs)(n.li,{children:["Rows of xij denotes the spatial coordinates, for example, ",(0,i.jsx)(n.code,{children:"xij(2, :)"})," denotes y coordinates."]}),"\n",(0,i.jsxs)(n.li,{children:["Columns of ",(0,i.jsx)(n.code,{children:"xiJ"})," denote the number of nodes in the element"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.code,{children:"entityCounts"})})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"entityCounts(xidim)"})," denotes the total number of entity of codimension, ",(0,i.jsx)(n.code,{children:"xidim"}),"=0,1,2,3."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.code,{children:"xidimension"})})}),"\n",(0,i.jsx)(n.p,{children:"Codimension of element."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"xidim"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"0"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"point"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"1"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"curve (or line)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"2"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"surface"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"3"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"volume"})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.code,{children:"name"})})}),"\n",(0,i.jsx)(n.p,{children:"name of the reference element. Name is hardcoded in GlobalData by using 4-byte integers."}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Click here to see the name"}),(0,i.jsx)("div",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTEGER(I4B), PARAMETER :: Line = 1\nINTEGER(I4B), PARAMETER :: Line2 = 1\nINTEGER(I4B), PARAMETER :: Line3 = 8\nINTEGER(I4B), PARAMETER :: Line4 = 26\nINTEGER(I4B), PARAMETER :: Line5 = 27\nINTEGER(I4B), PARAMETER :: Line6 = 28\nINTEGER(I4B), PARAMETER :: Triangle = 2\nINTEGER(I4B), PARAMETER :: Triangle3 = 2\nINTEGER(I4B), PARAMETER :: Triangle6 = 9\nINTEGER(I4B), PARAMETER :: Triangle9 = 20\nINTEGER(I4B), PARAMETER :: Triangle10 = 21\nINTEGER(I4B), PARAMETER :: Triangle12 = 22\nINTEGER(I4B), PARAMETER :: Triangle15a = 23\nINTEGER(I4B), PARAMETER :: Triangle15b = 24\nINTEGER(I4B), PARAMETER :: Triangle15 = 24\nINTEGER(I4B), PARAMETER :: Triangle21 = 25\nINTEGER(I4B), PARAMETER :: Quadrangle = 3\nINTEGER(I4B), PARAMETER :: Quadrangle4 = 3\nINTEGER(I4B), PARAMETER :: Quadrangle9 = 10\nINTEGER(I4B), PARAMETER :: Quadrangle8 = 16\nINTEGER(I4B), PARAMETER :: Quadrangle16 = 160\nINTEGER(I4B), PARAMETER :: Tetrahedron = 4\nINTEGER(I4B), PARAMETER :: Tetrahedron4 = 4\nINTEGER(I4B), PARAMETER :: Tetrahedron10 = 11\nINTEGER(I4B), PARAMETER :: Tetrahedron20 = 29\nINTEGER(I4B), PARAMETER :: Tetrahedron35 = 30\nINTEGER(I4B), PARAMETER :: Tetrahedron56 = 31\nINTEGER(I4B), PARAMETER :: Hexahedron = 5\nINTEGER(I4B), PARAMETER :: Hexahedron8 = 5\nINTEGER(I4B), PARAMETER :: Hexahedron27 = 12\nINTEGER(I4B), PARAMETER :: Hexahedron20 = 17\nINTEGER(I4B), PARAMETER :: Hexahedron64 = 92\nINTEGER(I4B), PARAMETER :: Hexahedron125 = 93\nINTEGER(I4B), PARAMETER :: Prism = 6\nINTEGER(I4B), PARAMETER :: Prism6 = 6\nINTEGER(I4B), PARAMETER :: Prism18 = 13\nINTEGER(I4B), PARAMETER :: Prism15 = 18\nINTEGER(I4B), PARAMETER :: Pyramid = 7\nINTEGER(I4B), PARAMETER :: Pyramid5 = 7\nINTEGER(I4B), PARAMETER :: Pyramid14 = 14\nINTEGER(I4B), PARAMETER :: Pyramid13 = 19\nINTEGER(I4B), PARAMETER :: Point = 15\nINTEGER(I4B), PARAMETER :: Point1 = 15\n"})})})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.code,{children:"order"})})}),"\n",(0,i.jsx)(n.p,{children:"order of element"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.code,{children:"nsd"})})}),"\n",(0,i.jsx)(n.p,{children:"number of spatial dimension of element."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.code,{children:"topology"})})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It is a vector of ReferenceTopology, which represents the topology of entities present in the reference elements."}),"\n",(0,i.jsx)(n.li,{children:"For example, a triangle is made from three points, three lines, and a surface. The points, lines, and surfaces are called entities of triangle."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Point"})," topology ranges from 1 to ",(0,i.jsx)(n.code,{children:"entityCounts(1)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Curve"})," topology ranges from ",(0,i.jsx)(n.code,{children:"entityCounts(1)+1"})," to ",(0,i.jsx)(n.code,{children:"entityCounts(1)+entityCounts(2)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Surface"})," topology ranges from ",(0,i.jsx)(n.code,{children:"entityCounts(1)+entityCounts(2)+1"})," to ",(0,i.jsx)(n.code,{children:"entityCounts(1)+entityCounts(2)+entityCounts(3)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Volume"})," topology ranges from ",(0,i.jsx)(n.code,{children:"entityCounts(1)+entityCounts(2)+entityCounts(3)+1"})," to ",(0,i.jsx)(n.code,{children:"entityCounts(1)+entityCounts(2)+entityCounts(3)+entityCounts(4)"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In this way, the size of ",(0,i.jsx)(n.code,{children:"topology"})," is equal to the sum of all the entities of ",(0,i.jsx)(n.code,{children:"entityCounts"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.code,{children:"lagrangeElement"})})}),"\n",(0,i.jsx)(n.p,{children:"This is a procedure pointer, which returns the lagrange element of higher order."})]})}function E(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},24808:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>E});var i=t(85893),r=t(11151),o=t(50254),s=t(52991);const d={sidebar_position:1,date:new Date("2023-07-07T00:00:00.000Z"),update:new Date("2023-07-07T00:00:00.000Z"),status:"stable",docs:"done",extpkgs:"none",category:["Geometry"],tags:["easifemBase","geometry","referenceElement"]},l="ReferenceElement",c={id:"ReferenceElement/index",title:"ReferenceElement",description:"ReferenceElement data type is designed for handling the reference domain of finite elements.",source:"@site/docs/docs-api/ReferenceElement/index.md",sourceDirName:"ReferenceElement",slug:"/ReferenceElement/",permalink:"/docs-api/ReferenceElement/",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/ReferenceElement/index.md",tags:[{label:"easifemBase",permalink:"/docs-api/tags/easifem-base"},{label:"geometry",permalink:"/docs-api/tags/geometry"},{label:"referenceElement",permalink:"/docs-api/tags/reference-element"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,date:"2023-07-07T00:00:00.000Z",update:"2023-07-07T00:00:00.000Z",status:"stable",docs:"done",extpkgs:"none",category:["Geometry"],tags:["easifemBase","geometry","referenceElement"]},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/RefTriangle/RefTriangle_"},next:{title:"ContainsPoint",permalink:"/docs-api/ReferenceElement/ContainsPoint"}},a={},E=[{value:"Methods",id:"methods",level:2}];function m(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"referenceelement",children:"ReferenceElement"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ReferenceElement"})," data type is designed for handling the reference domain of finite elements."]}),"\n","\n",(0,i.jsx)(o.default,{}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n","\n","\n",(0,i.jsx)(s.Z,{})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},52991:(e,n,t)=>{t.d(n,{Z:()=>u});t(67294);var i=t(86010),r=t(53438),o=t(39960),s=t(13919),d=t(95999),l=t(92503);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var a=t(85893);function E(e){let{href:n,children:t}=e;return(0,a.jsx)(o.Z,{href:n,className:(0,i.Z)("card padding--lg",c.cardContainer),children:t})}function m(e){let{href:n,icon:t,title:r,description:o}=e;return(0,a.jsxs)(E,{href:n,children:[(0,a.jsxs)(l.Z,{as:"h2",className:(0,i.Z)("text--truncate",c.cardTitle),title:r,children:[t," ",r]}),o&&(0,a.jsx)("p",{className:(0,i.Z)("text--truncate",c.cardDescription),title:o,children:o})]})}function h(e){let{item:n}=e;const t=(0,r.LM)(n);return t?(0,a.jsx)(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function R(e){let{item:n}=e;const t=(0,s.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.xz)(n.docId??void 0);return(0,a.jsx)(m,{href:n.href,icon:t,title:n.label,description:n.description??i?.description})}function f(e){let{item:n}=e;switch(n.type){case"link":return(0,a.jsx)(R,{item:n});case"category":return(0,a.jsx)(h,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function x(e){let{className:n}=e;const t=(0,r.jA)();return(0,a.jsx)(u,{items:t.items,className:n})}function u(e){const{items:n,className:t}=e;if(!n)return(0,a.jsx)(x,{...e});const o=(0,r.MN)(n);return(0,a.jsx)("section",{className:(0,i.Z)("row",t),children:o.map(((e,n)=>(0,a.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,a.jsx)(f,{item:e})},n)))})}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>s});var i=t(67294);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);