"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[76213],{8103:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=t(85893),o=t(11151);const s={},a="Initiate",r={id:"CSRSparsity/Initiate",title:"Initiate",description:"Interface",source:"@site/docs/docs-api/CSRSparsity/Initiate.md",sourceDirName:"CSRSparsity",slug:"/CSRSparsity/Initiate",permalink:"/docs-api/CSRSparsity/Initiate",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/CSRSparsity/Initiate.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetSym",permalink:"/docs-api/CSRSparsity/GetSym"},next:{title:"SetSparsity",permalink:"/docs-api/CSRSparsity/SetSparsity"}},c={},d=[{value:"Interface",id:"interface",level:2},{value:"Getting started",id:"getting-started",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"initiate",children:"Initiate"}),"\n",(0,i.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"  MODULE SUBROUTINE initiate( obj, ncol, nrow, idof, jdof )\n    TYPE( CSRSparsity_ ), INTENT( INOUT ) :: obj\n    INTEGER( I4B ), INTENT( IN ) :: ncol, nrow\n    TYPE( DOF_ ), OPTIONAL, INTENT( IN ) ::  idof\n    TYPE( DOF_ ), OPTIONAL, INTENT( IN ) ::  jdof\n  END SUBROUTINE initiate\n"})}),"\n",(0,i.jsx)(n.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsxs)(n.p,{children:["In order to construct an instance of ",(0,i.jsx)(n.code,{children:"CSRSparsity"})," we need to specify ",(0,i.jsx)(n.code,{children:"nrow"})," ",(0,i.jsx)(n.code,{children:"ncol"})," and ",(0,i.jsx)(n.a,{href:"/docs-api/DOF/DOF_",children:"DOF"})," object. By using ",(0,i.jsx)(n.a,{href:"/docs-api/DOF/DOF_",children:"DOF"})," object we can specify the degrees of freedom structure inside ",(0,i.jsx)(n.code,{children:"CSRMatrix_"}),". Then one can use the #CSRSparsity/Initiate method as shown below."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"CALL Initiate( CSRSparisty_::obj, INT::nrow, INT::ncol, DOF_::dof )\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Here, ",(0,i.jsx)(n.code,{children:"dof"})," is optional, if this argument is absent then DOF object has the following structure:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"}),'=["K"]']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"tNodes"}),"=[nrow]"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"spaceCompo"}),"=[1]"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"timeCompo"}),"=[1]."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Working example is given below based on this concept."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\nUSE easifemBase\nIMPLICIT NONE\nTYPE( CSRSparsity_ ) :: obj\nTYPE( DOF_ ) :: dofobj\nINTEGER( I4B ) :: i\nCALL Initiate( obj=dofobj, tNodes=[12], names=['K'], &\n    & spaceCompo=[1], timeCompo=[1], storageFMT=NODES_FMT )\nCALL Initiate( obj, ncol=12, nrow=12, dof=dofobj )\nCALL Display( obj, \"CSRSparsity : \" )\nCALL Deallocate( obj )\nEND PROGRAM main\n"})}),"\n",(0,i.jsx)(n.p,{children:"For multi-physics applications following example will be helpful."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\nUSE easifemBase\nIMPLICIT NONE\nTYPE( CSRSparsity_ ) :: obj\nTYPE( DOF_ ) :: dofobj\nINTEGER( I4B ) :: i\nCALL Initiate( obj=dofobj, tNodes=[20, 10], names=['V', 'P'], &\n  & spaceCompo=[3, 1], timeCompo=[1, 1], storageFMT=FMT_DOF )\nCALL Initiate( obj, ncol=(.tnodes. dofobj), nrow=(.tNodes. dofobj),  &\n  & dof=dofobj )\nCALL Display( obj, \"CSRSparsity : \" )\nCALL Deallocate( obj )\nEND PROGRAM main\n"})}),"\n",(0,i.jsxs)(n.p,{children:["EASIFEM also has an assignment operator (=) to initiate an instance of ",(0,i.jsx)(n.code,{children:"CSRSparsity_"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"MODULE SUBROUTINE initiate( obj, obj2 )\n  TYPE( CSRSparsity_ ), INTENT( INOUT ) :: obj\n  TYPE( CSRSparsity_ ), INTENT( IN ) :: obj2\nEND SUBROUTINE initiate\n"})}),"\n",(0,i.jsxs)(n.p,{children:["However, if you have ",(0,i.jsx)(n.code,{children:"IA"})," and",(0,i.jsx)(n.code,{children:"JA"})," indices, then you can initiate the ",(0,i.jsx)(n.code,{children:"CSRSparsity_"})," object using the following command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"MODULE SUBROUTINE initiate( obj, IA, JA )\n  TYPE( CSRSparsity_ ), INTENT( INOUT ) :: obj\n  INTEGER( I4B ), INTENT( IN ) :: IA( : ), JA( : )\nEND SUBROUTINE initiate\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var i=t(67294);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);