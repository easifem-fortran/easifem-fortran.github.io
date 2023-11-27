"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[41129],{81373:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=t(85893),s=t(11151);const a={title:"Structure",sidebar_position:2},r=void 0,o={id:"AbstractField/AbstractField_",title:"Structure",description:"AbstractField is an abstract class for handling the finite element fields.",source:"@site/docs/docs-api/AbstractField/AbstractField_.md",sourceDirName:"AbstractField",slug:"/AbstractField/AbstractField_",permalink:"/docs-api/AbstractField/AbstractField_",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractField/AbstractField_.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:2,frontMatter:{title:"Structure",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"AbstractField",permalink:"/docs-api/AbstractField/"},next:{title:"CheckEssentialParam",permalink:"/docs-api/AbstractField/CheckEssentialParam"}},l={},c=[{value:"Structure",id:"structure",level:2}];function d(e){const n={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"AbstractField"})," is an abstract class for handling the finite element fields."]}),"\n",(0,i.jsx)(n.p,{children:"In FEM (or, grid-based methods), we work with variables (known or unknowns) of different ranks (scalar, vector, tensor, matrix). In easifem, these variables are called the field. We can define the fields by defining their values at :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"spatial nodes of spatial mesh"}),"\n",(0,i.jsx)(n.li,{children:"spatial-temporal nodes of space-time slab"}),"\n",(0,i.jsx)(n.li,{children:"spatial quadrature points of spatial mesh"}),"\n",(0,i.jsx)(n.li,{children:"spatial-temporal quadrature points of space-time slab"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In addition, EASIFEM also consider the global tangent matrix as a field. Fields are high level objects in finite element modeling. Also, implementation of these fields depends upon the engine, like ",(0,i.jsx)(n.code,{children:"NATIVE_SERIAL"}),", ",(0,i.jsx)(n.code,{children:"NATIVE_OMP"}),", ",(0,i.jsx)(n.code,{children:"NATIVE_ACC"}),", ",(0,i.jsx)(n.code,{children:"NATIVE_MPI"}),", ",(0,i.jsx)(n.code,{children:"PETSC"}),", ",(0,i.jsx)(n.code,{children:"LIS"}),", among others."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(34618).Z+"",width:"995",height:"196"})}),"\n",(0,i.jsx)(n.h2,{id:"structure",children:"Structure"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"TYPE, ABSTRACT :: AbstractField_\n  LOGICAL(LGT) :: isInitiated = .FALSE.\n    !! It is true if the object is initiated\n  INTEGER(I4B) :: fieldType = FIELD_TYPE_NORMAL\n    !! fieldType can be normal, constant, can vary in space and/ or both.\n  TYPE(Domain_), POINTER :: domain => NULL()\n    !! Domain contains the information of the finite element meshes.\n  TYPE(DomainPointer_), ALLOCATABLE :: domains(:)\n    !! Domain for each physical variables\n    !! The size of `domains` should be equal to the total number of\n    !! physical variables.\n    !! It is used in the case of BlockNodeField\n    !! and BlockMatrixField\n  TYPE(String) :: name\n    !! name of the field\n  TYPE(String) :: engine\n    !! Engine of the field, for example\n    !! NATIVE_SERIAL\n    !! NATIVE_OMP,\n    !! NATIVE_MPI,\n    !! PETSC,\n    !! LIS_SERIAL,\n    !! LIS_OMP,\n    !! LIS_MPI\n  INTEGER(I4B) :: comm = 0_I4B\n  !! communication group (MPI)\n  INTEGER(I4B) :: myRank = 0_I4B\n  !! rank of current processor (MPI)\n  INTEGER(I4B) :: numProcs = 1_I4B\n  !! Total number of processors (MPI)\n  INTEGER(I4B) :: global_n= 0_I4B\n  !! total number of nodes on all processors (MPI)\n  INTEGER(I4B) :: local_n = 0_I4B\n  !! local number of nodes on a given processor (MPI)\n  INTEGER(I4B) :: is = 1_I4B\n  !! starting index (MPI)\n  INTEGER(I4B) :: ie = 0_I4B\n  !! end index + 1 (MPI)\n  INTEGER(INT64) :: lis_ptr = 0_INT64\n  !! lis_ptr is pointer returned by the LIS library\n  !! It is used when engine is LIS_OMP or LIS_MPI\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"AbstractField2",src:t(47953).Z+"",width:"274",height:"611"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},34618:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/AbstractField1-62ff8eda8ae9570580bcb05e41f2b3a8.svg"},47953:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/AbstractField2-55b42fbc5e97660654510751a344cab9.svg"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var i=t(67294);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);