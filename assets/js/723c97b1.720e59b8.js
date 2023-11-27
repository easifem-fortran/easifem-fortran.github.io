"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[24749],{98176:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>x,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var s=t(85893),n=t(11151);const a={},r="Structure",d={id:"MatrixFieldLis/MatrixFieldLis_",title:"Structure",description:"It handles the tangent-matrix in finite element computations.",source:"@site/docs/docs-api/MatrixFieldLis/MatrixFieldLis_.md",sourceDirName:"MatrixFieldLis",slug:"/MatrixFieldLis/MatrixFieldLis_",permalink:"/docs-api/MatrixFieldLis/MatrixFieldLis_",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/MatrixFieldLis/MatrixFieldLis_.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MatrixFieldCheckEssentialParam",permalink:"/docs-api/MatrixFieldLis/MatrixFieldCheckEssentialParam"},next:{title:"RectangleMatrixFieldCheckEssentialParam",permalink:"/docs-api/MatrixFieldLis/RectangleMatrixFieldCheckEssentialParam"}},l={},c=[];function o(e){const i={a:"a",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"structure",children:"Structure"}),"\n",(0,s.jsx)(i.p,{children:"It handles the tangent-matrix in finite element computations."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"MatrixFieldLis_"})," is a child of ",(0,s.jsx)(i.a,{href:"/docs-api/MatrixField/MatrixField_",children:"MatrixField_"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["It uses ",(0,s.jsx)(i.code,{children:"LIS_OMP"})," engine."]}),"\n",(0,s.jsx)(i.li,{children:"It also defines a data type for storing the precondition matrix."}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-fortran",children:"TYPE, EXTENDS(MatrixField_) :: MatrixFieldLis_\n  INTEGER(I4B), ALLOCATABLE :: lis_ia(:)\n  INTEGER(I4B), ALLOCATABLE :: lis_ja(:)\n"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:t(55530).Z+"",width:"1553",height:"981"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["If the matrix is square, then the storage format is ",(0,s.jsx)(i.code,{children:"FMT_NODES"})]}),"\n",(0,s.jsxs)(i.li,{children:["If the matrix is Rectangle, then the storage format is ",(0,s.jsx)(i.code,{children:"FMT_NODES"})]}),"\n"]})]})}function x(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},55530:(e,i,t)=>{t.d(i,{Z:()=>s});const s=t.p+"assets/images/MatrixField1-7df10df6ef940db07beab2ed327d305a.svg"},11151:(e,i,t)=>{t.d(i,{Z:()=>d,a:()=>r});var s=t(67294);const n={},a=s.createContext(n);function r(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);