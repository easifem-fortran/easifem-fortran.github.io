"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[12181],{59258:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=l(85893),a=l(11151);const o={sidebar_position:3},s="ElemData",i={id:"Mesh/ElemData_",title:"ElemData",description:"It is a data type for storing the element-data information.",source:"@site/docs/docs-api/Mesh/ElemData_.md",sourceDirName:"Mesh",slug:"/Mesh/ElemData_",permalink:"/docs-api/Mesh/ElemData_",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Mesh/ElemData_.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"NodeData",permalink:"/docs-api/Mesh/NodeData_"},next:{title:"InternalFacetData",permalink:"/docs-api/Mesh/InternalFacetData_"}},c={},d=[];function r(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"elemdata",children:"ElemData"}),"\n",(0,t.jsx)(n.p,{children:"It is a data type for storing the element-data information."}),"\n",(0,t.jsx)(n.p,{children:"The methods related to this data structure are in ElementDataMethods, BoundaryDataMethods, FacetDataMethods"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"TYPE :: ElemData_\n  INTEGER(I4B) :: globalElemNum = 0\n  INTEGER(I4B) :: localElemNum = 0\n  INTEGER(I4B) :: elementType = INTERNAL_ELEMENT\n  INTEGER(I4B), ALLOCATABLE :: globalNodes(:)\n  INTEGER(I4B), ALLOCATABLE :: globalElements(:)\n  INTEGER(I4B), ALLOCATABLE :: boundaryData(:)\n  CONTAINS\n  PROCEDURE, PUBLIC, PASS( obj ) :: Display => elemData_Display\nEND TYPE ElemData_\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"globalElemNum"})," global element number"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"localElemNum"})," local element number"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"elementType"})," following element types are defined:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"BOUNDARY_ELEMENT"}),": If the element contains the boundary node of the mesh, then it will be called the boundary element"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"INTERNAL_ELEMENT"}),": If the element does not contain the boundary node of the mesh, then it will be called the internal element"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"globalNodes"})," nodes contained in the element, i.e., connectivity"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"globalElements"})," contains the information about the elements surrounding an element. This is explained below:"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Let us say that ",(0,t.jsx)(n.code,{children:"globalElem1"}),", ",(0,t.jsx)(n.code,{children:"globalElem2"}),", and ",(0,t.jsx)(n.code,{children:"globalElem3"})," surround a local element ",(0,t.jsx)(n.code,{children:"ielem"})," (its global element number is globalElem), then"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"globalElements( [1,2,3] )"})," contains ",(0,t.jsx)(n.code,{children:"globalElem1"}),", ",(0,t.jsx)(n.code,{children:"pFace"}),", ",(0,t.jsx)(n.code,{children:"nFace"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"globalElements( [4,5,6] )"})," contains ",(0,t.jsx)(n.code,{children:"globalElem2"}),", ",(0,t.jsx)(n.code,{children:"pFace"}),", ",(0,t.jsx)(n.code,{children:"nFace"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"globalElements( [7,8,9] )"})," contains ",(0,t.jsx)(n.code,{children:"globalElem3"}),", ",(0,t.jsx)(n.code,{children:"pFace"}),", ",(0,t.jsx)(n.code,{children:"nFace"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Here, ",(0,t.jsx)(n.code,{children:"pFace"})," is the local-facet-number of parent element, i.e., ",(0,t.jsx)(n.code,{children:"globalElem (ielem)"}),", which is connected to the ",(0,t.jsx)(n.code,{children:"nFace"})," (local-facet-number) of the neighboring element."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"boundaryData"})," If an element contains the boundary node of the mesh, then it is considered as a boundary element. If ",(0,t.jsx)(n.code,{children:"iel"})," is a boundary element, then ",(0,t.jsx)(n.code,{children:"boudnaryData"})," contains the local-facet-numbers of ",(0,t.jsx)(n.code,{children:"iel"})," which coincides with the mesh boundary. It may happen that a boundary element has no boundary face (but only a single boundary node), in this case ",(0,t.jsx)(n.code,{children:"boundaryData"})," will have zero size."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},11151:(e,n,l)=>{l.d(n,{Z:()=>i,a:()=>s});var t=l(67294);const a={},o=t.createContext(a);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);