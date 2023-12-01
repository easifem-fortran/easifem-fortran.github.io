"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[84168],{46715:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var r=i(85893),n=i(11151),s=i(52991);const a={},c="AbstractMatrixField",l={id:"AbstractMatrixField/AbstractMatrixField_",title:"AbstractMatrixField",description:"AbstractMatrixField is a child of AbstractField\\.",source:"@site/docs/docs-api/AbstractMatrixField/AbstractMatrixField_.md",sourceDirName:"AbstractMatrixField",slug:"/AbstractMatrixField/AbstractMatrixField_",permalink:"/docs-api/AbstractMatrixField/AbstractMatrixField_",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMatrixField/AbstractMatrixField_.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AbstractMatrixField",permalink:"/docs-api/AbstractMatrixField/"},next:{title:"ApplyDBC",permalink:"/docs-api/AbstractMatrixField/ApplyDBC"}},d={},o=[{value:"Structure",id:"structure",level:2},{value:"todo",id:"todo",level:2},{value:"Methods",id:"methods",level:2}];function h(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"abstractmatrixfield",children:"AbstractMatrixField"}),"\n",(0,r.jsxs)(e.p,{children:["AbstractMatrixField is a child of ",(0,r.jsx)(e.a,{href:"/docs-api/AbstractField/AbstractField_",children:"AbstractField_"}),"."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"It handles tangent matrix in finite element method."}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"structure",children:"Structure"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"TYPE, ABSTRACT, EXTENDS(AbstractField_) :: AbstractMatrixField_\n  LOGICAL(LGT) :: isPmatInitiated = .FALSE.\n  !! True if precondition matrix is initiated\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"AbstractMatrixField1",src:i(32362).Z+"",width:"683",height:"751"})}),"\n",(0,r.jsx)(e.h2,{id:"todo",children:"todo"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"ShallowCopy"}),"\n",(0,r.jsx)(e.li,{children:"Copy"}),"\n",(0,r.jsx)(e.li,{children:"Assemble"}),"\n",(0,r.jsx)(e.li,{children:"GetRange"}),"\n",(0,r.jsx)(e.li,{children:"GetNNZ"}),"\n",(0,r.jsx)(e.li,{children:"AXPY"}),"\n",(0,r.jsx)(e.li,{children:"XPAY"}),"\n",(0,r.jsx)(e.li,{children:"AXPYZ"}),"\n",(0,r.jsx)(e.li,{children:"Scale"}),"\n",(0,r.jsx)(e.li,{children:"ShiftDiagonal"}),"\n",(0,r.jsx)(e.li,{children:"ShiftMatrix"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"methods",children:"Methods"}),"\n","\n","\n",(0,r.jsx)(s.Z,{})]})}function x(t={}){const{wrapper:e}={...(0,n.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(h,{...t})}):h(t)}},52991:(t,e,i)=>{i.d(e,{Z:()=>j});i(67294);var r=i(86010),n=i(53438),s=i(39960),a=i(13919),c=i(95999),l=i(92503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var o=i(85893);function h(t){let{href:e,children:i}=t;return(0,o.jsx)(s.Z,{href:e,className:(0,r.Z)("card padding--lg",d.cardContainer),children:i})}function x(t){let{href:e,icon:i,title:n,description:s}=t;return(0,o.jsxs)(h,{href:e,children:[(0,o.jsxs)(l.Z,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:n,children:[i," ",n]}),s&&(0,o.jsx)("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function u(t){let{item:e}=t;const i=(0,n.LM)(e);return i?(0,o.jsx)(x,{href:i,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function m(t){let{item:e}=t;const i=(0,a.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,n.xz)(e.docId??void 0);return(0,o.jsx)(x,{href:e.href,icon:i,title:e.label,description:e.description??r?.description})}function p(t){let{item:e}=t;switch(e.type){case"link":return(0,o.jsx)(m,{item:e});case"category":return(0,o.jsx)(u,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function f(t){let{className:e}=t;const i=(0,n.jA)();return(0,o.jsx)(j,{items:i.items,className:e})}function j(t){const{items:e,className:i}=t;if(!e)return(0,o.jsx)(f,{...t});const s=(0,n.MN)(e);return(0,o.jsx)("section",{className:(0,r.Z)("row",i),children:s.map(((t,e)=>(0,o.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,o.jsx)(p,{item:t})},e)))})}},32362:(t,e,i)=>{i.d(e,{Z:()=>r});const r=i.p+"assets/images/AbstractMatrixField1-0a2b84d74c785c9a3c527083f275dfa7.svg"},11151:(t,e,i)=>{i.d(e,{Z:()=>c,a:()=>a});var r=i(67294);const n={},s=r.createContext(n);function a(t){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:a(t.components),r.createElement(s.Provider,{value:e},t.children)}}}]);