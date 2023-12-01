"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[85350],{371:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>T,contentTitle:()=>N,default:()=>F,frontMatter:()=>x,metadata:()=>C,toc:()=>b});var l=a(85893),r=a(11151),t=a(74866),i=a(85162);function s(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["In this example we test ",(0,l.jsx)(n.a,{href:"/docs-api/ScalarFieldLis/Get",children:"Get"})," method."]}),"\n",(0,l.jsx)(n.p,{children:"Get single entry."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  TYPE( Domain_ ) :: dom\n  TYPE( ScalarFieldLis_ ) :: obj\n  TYPE( HDF5File_ ) :: meshfile, resultFile\n  TYPE( ParameterList_ ) :: param\n  INTEGER( I4B ) :: ierr\n  REAL( DFP ), ALLOCATABLE :: realVec( : )\n  REAL( DFP ) :: avar\n  CHARACTER( LEN = * ), PARAMETER :: engine = "LIS_OMP"\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="Open file for import"',children:'  CALL FPL_INIT()\n  CALL param%initiate()\n  CALL resultFile%initiate( filename="./result.h5", mode="READ" )\n  CALL resultFile%open()\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="read domain"  ',children:'  !> start creating domain\n  CALL meshfile%initiate( filename="./mesh.h5", mode="READ" )\n  CALL meshfile%open()\n  CALL dom%initiate( hdf5=meshfile, group="" )\n  !> end creating domain\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="initiate scalar field"',children:'  CALL SetScalarFieldParam( param=param, &\n    & fieldType=FIELD_TYPE_NORMAL, &\n    & name="U", &\n    & engine=engine)\n  CALL obj%initiate( param, dom )\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="setting all values using vector"',children:'  CALL reallocate( realVec, dom%getTotalNodes() )\n  CALL RANDOM_NUMBER( realVec )\n  CALL obj%set(realVec)\n  CALL obj%display( "scalar field = ")\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"0.525588,   \n0.106782,   \n0.665122,   \n0.108642,   \n0.482753,   \n0.356140,   \n0.737333,   \n0.739410,   \n0.286026,   \n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:'  CALL obj%get( value=avar, globalNode=2)\n  CALL Display(avar, "avar = ")\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"avar = 0.106782\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="Cleanup"',children:"  CALL obj%Deallocate(); CALL dom%Deallocate()\n  CALL meshfile%Deallocate()\n  CALL resultFile%Deallocate()\n  CALL param%Deallocate(); CALL FPL_FINALIZE()\n  IF(allocated(realVec) ) deallocate(realVec)\nEND PROGRAM main\n"})})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}function o(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["In this example we test ",(0,l.jsx)(n.a,{href:"/docs-api/ScalarFieldLis/Get",children:"Get"})," method."]}),"\n",(0,l.jsx)(n.p,{children:"Get all entries in a vector of reals."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  TYPE( Domain_ ) :: dom\n  TYPE( ScalarFieldLis_ ) :: obj\n  TYPE( HDF5File_ ) :: meshfile, resultFile\n  TYPE( ParameterList_ ) :: param\n  INTEGER( I4B ) :: ierr\n  REAL( DFP ), ALLOCATABLE :: realVec( : )\n  REAL( DFP ) :: avar\n  CHARACTER( LEN = * ), PARAMETER :: engine = "LIS_OMP"\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="Open file for import"',children:'  CALL FPL_INIT()\n  CALL param%initiate()\n  CALL resultFile%initiate( filename="./result.h5", mode="READ" )\n  CALL resultFile%open()\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="read domain"  ',children:'  !> start creating domain\n  CALL meshfile%initiate( filename="./mesh.h5", mode="READ" )\n  CALL meshfile%open()\n  CALL dom%initiate( hdf5=meshfile, group="" )\n  !> end creating domain\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="initiate scalar field"',children:'  CALL SetScalarFieldParam( param=param, &\n    & fieldType=FIELD_TYPE_NORMAL, &\n    & name="U", &\n    & engine=engine)\n  CALL obj%initiate( param, dom )\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="setting all values using vector"',children:'  CALL reallocate( realVec, dom%getTotalNodes() )\n  CALL RANDOM_NUMBER( realVec )\n  CALL obj%set(realVec)\n  CALL obj%display( "scalar field = ")\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"0.132029,   \n0.489434,   \n0.690163,   \n0.424993,   \n0.313813,   \n0.833015,   \n0.369671,   \n0.252695,   \n0.327842,   \n0.649937,   \n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="Get all entries"',children:'  CALL obj%get( value=realVec)\n  CALL Display(realVec(1:5), "realVec(1:5) = ")\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"   0.132029    \n   0.489434    \n   0.690163    \n   0.424993    \n   0.313813    \n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="Cleanup"',children:"  CALL obj%Deallocate(); CALL dom%Deallocate()\n  CALL meshfile%Deallocate()\n  CALL resultFile%Deallocate()\n  CALL param%Deallocate(); CALL FPL_FINALIZE()\n  if(allocated(realVec) ) deallocate(realVec)\nEND PROGRAM main\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}function m(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["In this example we test ",(0,l.jsx)(n.a,{href:"/docs-api/ScalarFieldLis/Get",children:"Get"})," method."]}),"\n",(0,l.jsx)(n.p,{children:"Get multiple entries."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  TYPE( Domain_ ) :: dom\n  TYPE( ScalarFieldLis_ ) :: obj\n  TYPE( HDF5File_ ) :: meshfile, resultFile\n  TYPE( ParameterList_ ) :: param\n  INTEGER( I4B ) :: ierr\n  REAL( DFP ), ALLOCATABLE :: realVec( : )\n  REAL( DFP ) :: avar\n  CHARACTER( LEN = * ), PARAMETER :: engine = "LIS_OMP"\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="Open file for import"',children:'  CALL FPL_INIT()\n  CALL param%initiate()\n  CALL resultFile%initiate( filename="./result.h5", mode="READ" )\n  CALL resultFile%open()\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="read domain"  ',children:'  !> start creating domain\n  CALL meshfile%initiate( filename="./mesh.h5", mode="READ" )\n  CALL meshfile%open()\n  CALL dom%initiate( hdf5=meshfile, group="" )\n  !> end creating domain\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="initiate scalar field"',children:'  CALL SetScalarFieldParam( param=param, &\n    & fieldType=FIELD_TYPE_NORMAL, &\n    & name="U", &\n    & engine=engine)\n  CALL obj%initiate( param, dom )\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="setting all values using vector"',children:'  CALL reallocate( realVec, dom%getTotalNodes() )\n  CALL RANDOM_NUMBER( realVec )\n  CALL obj%set(realVec)\n  CALL obj%display( "scalar field = ")\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"0.335789,   \n0.222078,   \n0.384477,   \n0.360936,   \n0.522693,   \n0.260172,   \n0.219712,   \n0.416958,   \n0.313375,   \n0.566592,   \n0.783093,   \n0.844735,   \n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="Get multiple entries"',children:'  CALL obj%get( value=realVec, globalNode=[1,2,3,4,5])\n  CALL Display(realVec(1:5), "realVec(1:5) = ")\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"realVec(1:5) = \n---------------\n   0.335789    \n   0.222078    \n   0.384477    \n   0.360936    \n   0.522693    \n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="Cleanup"',children:"  CALL obj%Deallocate(); CALL dom%Deallocate()\n  CALL meshfile%Deallocate()\n  CALL resultFile%Deallocate()\n  CALL param%Deallocate(); CALL FPL_FINALIZE()\n  if(allocated(realVec) ) deallocate(realVec)\nEND PROGRAM main\n"})})]})}function L(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}function u(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["In this example we test ",(0,l.jsx)(n.a,{href:"/docs-api/ScalarFieldLis/Get",children:"Get"})," method."]}),"\n",(0,l.jsx)(n.p,{children:"Get multiple values using triplets."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  TYPE( Domain_ ) :: dom\n  TYPE( ScalarFieldLis_ ) :: obj\n  TYPE( HDF5File_ ) :: meshfile, resultFile\n  TYPE( ParameterList_ ) :: param\n  INTEGER( I4B ) :: ierr\n  REAL( DFP ), ALLOCATABLE :: realVec( : )\n  REAL( DFP ) :: avar\n  CHARACTER( LEN = * ), PARAMETER :: engine = "LIS_OMP"\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="Open file for import"',children:'  CALL FPL_INIT()\n  CALL param%initiate()\n  CALL resultFile%initiate( filename="./result.h5", mode="READ" )\n  CALL resultFile%open()\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="read domain"  ',children:'  !> start creating domain\n  CALL meshfile%initiate( filename="./mesh.h5", mode="READ" )\n  CALL meshfile%open()\n  CALL dom%initiate( hdf5=meshfile, group="" )\n  !> end creating domain\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="initiate scalar field"',children:'  CALL SetScalarFieldParam( param=param, &\n    & fieldType=FIELD_TYPE_NORMAL, &\n    & name="U", &\n    & engine=engine)\n  CALL obj%initiate( param, dom )\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="setting all values using vector"',children:'  CALL reallocate( realVec, dom%getTotalNodes() )\n  CALL RANDOM_NUMBER( realVec )\n  CALL obj%set(realVec)\n  CALL obj%display( "scalar field = ")\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"0.622789,   \n0.905349,   \n0.707204,   \n0.759759,   \n0.867313,   \n0.557912,   \n0.618558,   \n0.111490,   \n0.447643,   \n0.582593,   \n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="Get multiple entries"',children:'  CALL obj%get( value=realVec, istart=1, iend=5, stride=1)\n  CALL Display(realVec(1:5), "realVec(1:5) = ")\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"realVec(1:5) = \n---------------\n   0.622789    \n   0.905349    \n   0.707204    \n   0.759759    \n   0.867313    \n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="Cleanup"',children:"  CALL obj%Deallocate(); CALL dom%Deallocate()\n  CALL meshfile%Deallocate()\n  CALL resultFile%Deallocate()\n  CALL param%Deallocate(); CALL FPL_FINALIZE()\n  if(allocated(realVec) ) deallocate(realVec)\nEND PROGRAM main\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}function h(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["In this example we test ",(0,l.jsx)(n.a,{href:"/docs-api/ScalarFieldLis/Get",children:"Get"})," method."]}),"\n",(0,l.jsx)(n.p,{children:"Get multiple entries in FEVariable."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  TYPE( Domain_ ) :: dom\n  TYPE( ScalarFieldLis_ ) :: obj\n  TYPE( HDF5File_ ) :: meshfile, resultFile\n  TYPE( ParameterList_ ) :: param\n  INTEGER( I4B ) :: ierr\n  REAL( DFP ), ALLOCATABLE :: realVec( : )\n  REAL( DFP ) :: avar\n  CHARACTER( LEN = * ), PARAMETER :: engine = "LIS_OMP"\n  TYPE(FEVariable_) :: fevar\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="Open file for import"',children:'  CALL FPL_INIT()\n  CALL param%initiate()\n  CALL resultFile%initiate( filename="./result.h5", mode="READ" )\n  CALL resultFile%open()\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="read domain"  ',children:'  !> start creating domain\n  CALL meshfile%initiate( filename="./mesh.h5", mode="READ" )\n  CALL meshfile%open()\n  CALL dom%initiate( hdf5=meshfile, group="" )\n  !> end creating domain\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="initiate scalar field"',children:'  CALL SetScalarFieldParam( param=param, &\n    & fieldType=FIELD_TYPE_NORMAL, &\n    & name="U", &\n    & engine=engine)\n  CALL obj%initiate( param, dom )\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="setting all values using vector"',children:'  CALL reallocate( realVec, dom%getTotalNodes() )\n  CALL RANDOM_NUMBER( realVec )\n  CALL obj%set(realVec)\n  CALL obj%display( "scalar field = ")\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"0.476675,   \n0.721996,   \n0.808386,   \n0.022536,   \n0.843059,   \n0.107551,   \n0.443036,   \n0.104665,   \n0.759430,   \n0.853888,   \n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="Get multiple entries"',children:'  CALL obj%get( value=fevar, globalNode=arange(1,5,1) )\n  CALL Display(fevar, "fevar = ")\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"fevar = \n# RANK :: 0 (SCALAR)\n# VarType: SPACE\n# VALUE: \n---------\n0.476675 \n0.721996 \n0.808386 \n0.022536 \n0.843059 \n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="Cleanup"',children:"  CALL obj%Deallocate(); CALL dom%Deallocate()\n  CALL meshfile%Deallocate()\n  CALL resultFile%Deallocate()\n  CALL param%Deallocate(); CALL FPL_FINALIZE()\n  if(allocated(realVec) ) deallocate(realVec)\nEND PROGRAM main\n"})})]})}function g(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}function A(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["In this example we test ",(0,l.jsx)(n.a,{href:"/docs-api/ScalarFieldLis/Get",children:"Get"})," method."]}),"\n",(0,l.jsx)(n.p,{children:"Get all entry in obj2, where obj2 is an instance of ScalarFieldLis_"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-txt",children:"obj2 = obj\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Both ",(0,l.jsx)(n.code,{children:"obj"})," and ",(0,l.jsx)(n.code,{children:"obj2"})," are instances of ",(0,l.jsx)(n.code,{children:"ScalarFieldLis_"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  TYPE( Domain_ ) :: dom\n  TYPE( ScalarFieldLis_ ) :: obj\n  TYPE( ScalarFieldLis_ ) :: obj2\n  TYPE( HDF5File_ ) :: meshfile, resultFile\n  TYPE( ParameterList_ ) :: param\n  INTEGER( I4B ) :: ierr\n  REAL( DFP ), ALLOCATABLE :: realVec( : )\n  REAL( DFP ) :: avar\n  CHARACTER( LEN = * ), PARAMETER :: engine = "LIS_OMP"\n  TYPE(FEVariable_) :: fevar\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="Open file for import"',children:'  CALL FPL_INIT()\n  CALL param%initiate()\n  CALL resultFile%initiate( filename="./result.h5", mode="READ" )\n  CALL resultFile%open()\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="read domain"  ',children:'  !> start creating domain\n  CALL meshfile%initiate( filename="./mesh.h5", mode="READ" )\n  CALL meshfile%open()\n  CALL dom%initiate( hdf5=meshfile, group="" )\n  !> end creating domain\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="initiate scalar field"',children:'  CALL SetScalarFieldParam( param=param, &\n    & fieldType=FIELD_TYPE_NORMAL, &\n    & name="U", &\n    & engine=engine)\n  CALL obj%initiate( param, dom )\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="initiate scalar field"',children:'  CALL SetScalarFieldParam( param=param, &\n    & fieldType=FIELD_TYPE_NORMAL, &\n    & name="U2", &\n    & engine=engine)\n  CALL obj2%initiate( param, dom )\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="setting all values using vector"',children:'  CALL reallocate( realVec, dom%getTotalNodes() )\n  CALL RANDOM_NUMBER( realVec )\n  CALL obj%set(realVec)\n  CALL obj%display( "scalar field = ")\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"#scalar field =\n# isInitiated : TRUE\n# name :U\n# fieldType : NORMAL\n# engine :LIS_OMP\n# comm: 0\n# myRank: 0\n# numProcs: 1\n# global_n: 102\n# local_n: 102\n# is: 1\n# ie: 103\n# lis_ptr: 94642949263200\n# domain : ASSOCIATED\n# domains : NOT ALLOCATED\n# tSize : 102\n# # DOF data :\n# Total Physical Variables :1\n# Name : U\n# Space Components : 1\n# Time Components : 1\n# Total Nodes : 102\n# Storage Format : Nodes\n# Value Map : \n--------------\n       1      \n     103      \n# VAR :U\n  DOF-1 ,   \n--------,   \n0.677787,   \n0.648929,   \n0.876577,   \n0.929737,   \n0.746531,   \n0.655029,   \n0.956440,   \n0.892157,   \n0.563374,   \n0.149392,   \n0.217981,   \n0.207189,   \n0.355624,   \n0.396910,   \n0.559421,   \n0.589930,   \n0.713219,   \n0.625906,   \n0.838845,   \n0.960102,   \n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="Get multiple entries"',children:'  CALL obj%get( value=obj2 )\n  CALL obj2%Display("obj2")\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"#obj2\n# isInitiated : TRUE\n# name :U2\n# fieldType : NORMAL\n# engine :LIS_OMP\n# comm: 0\n# myRank: 0\n# numProcs: 1\n# global_n: 102\n# local_n: 102\n# is: 1\n# ie: 103\n# lis_ptr: 94642948865744\n# domain : ASSOCIATED\n# domains : NOT ALLOCATED\n# tSize : 102\n# # DOF data :\n# Total Physical Variables :1\n# Name : U\n# Space Components : 1\n# Time Components : 1\n# Total Nodes : 102\n# Storage Format : Nodes\n# Value Map : \n--------------\n       1      \n     103      \n# VAR :U\n  DOF-1 ,   \n--------,   \n0.677787,   \n0.648929,   \n0.876577,   \n0.929737,   \n0.746531,   \n0.655029,   \n0.956440,   \n0.892157,   \n0.563374,   \n0.149392,   \n0.217981,   \n0.207189,   \n0.355624,   \n0.396910,   \n0.559421,   \n0.589930,   \n0.713219,   \n0.625906,   \n0.838845,   \n0.960102,   \n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="Cleanup"',children:"  CALL obj%Deallocate(); CALL dom%Deallocate()\n  CALL meshfile%Deallocate()\n  CALL resultFile%Deallocate()\n  CALL param%Deallocate(); CALL FPL_FINALIZE()\n  if(allocated(realVec) ) deallocate(realVec)\nEND PROGRAM main\n"})})]})}function j(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(A,{...e})}):A(e)}function f(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["In this example we test ",(0,l.jsx)(n.a,{href:"/docs-api/ScalarFieldLis/Get",children:"Get"})," method."]}),"\n",(0,l.jsxs)(n.p,{children:["Get all entry in obj2, where obj2 is an instance of ",(0,l.jsx)(n.code,{children:"ScalarField_"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-txt",children:"obj2 = obj\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Both ",(0,l.jsx)(n.code,{children:"obj"})," and ",(0,l.jsx)(n.code,{children:"obj2"})," are instances of ",(0,l.jsx)(n.code,{children:"ScalarFieldLis_"})," and ",(0,l.jsx)(n.code,{children:"ScalarField_"}),", respectively."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  TYPE( Domain_ ) :: dom\n  TYPE( ScalarFieldLis_ ) :: obj\n  TYPE( ScalarField_ ) :: obj2\n  TYPE( HDF5File_ ) :: meshfile, resultFile\n  TYPE( ParameterList_ ) :: param\n  INTEGER( I4B ) :: ierr\n  REAL( DFP ), ALLOCATABLE :: realVec( : )\n  REAL( DFP ) :: avar\n  CHARACTER( LEN = * ), PARAMETER :: engine = "LIS_OMP"\n  TYPE(FEVariable_) :: fevar\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="Open file for import"',children:'  CALL FPL_INIT()\n  CALL param%initiate()\n  CALL resultFile%initiate( filename="./result.h5", mode="READ" )\n  CALL resultFile%open()\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="read domain"  ',children:'  !> start creating domain\n  CALL meshfile%initiate( filename="./mesh.h5", mode="READ" )\n  CALL meshfile%open()\n  CALL dom%initiate( hdf5=meshfile, group="" )\n  !> end creating domain\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="initiate scalar field"',children:'  CALL SetScalarFieldParam( param=param, &\n    & fieldType=FIELD_TYPE_NORMAL, &\n    & name="U", &\n    & engine=engine)\n  CALL obj%initiate( param, dom )\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="initiate scalar field"',children:'  CALL SetScalarFieldParam( param=param, &\n    & fieldType=FIELD_TYPE_NORMAL, &\n    & name="U2", &\n    & engine="NATIVE_SERIAL")\n  CALL obj2%initiate( param, dom )\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="setting all values using vector"',children:'  CALL reallocate( realVec, dom%getTotalNodes() )\n  CALL RANDOM_NUMBER( realVec )\n  CALL obj%set(realVec)\n  CALL obj%display( "scalar field = ")\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"#scalar field =\n# isInitiated : TRUE\n# name :U\n# fieldType : NORMAL\n# engine :LIS_OMP\n# comm: 0\n# myRank: 0\n# numProcs: 1\n# global_n: 102\n# local_n: 102\n# is: 1\n# ie: 103\n# lis_ptr: 94778893242208\n# domain : ASSOCIATED\n# domains : NOT ALLOCATED\n# tSize : 102\n# # DOF data :\n# Total Physical Variables :1\n# Name : U\n# Space Components : 1\n# Time Components : 1\n# Total Nodes : 102\n# Storage Format : Nodes\n# Value Map : \n--------------\n       1      \n     103      \n# VAR :U\n  DOF-1 ,   \n--------,   \n0.976837,   \n0.483390,   \n0.581184,   \n0.147984,   \n0.724879,   \n0.299203,   \n0.940301,   \n0.663552,   \n0.240904,   \n0.941748,   \n0.447914,   \n0.202338,   \n0.454285,   \n0.881168,   \n0.323755,   \n0.373271,   \n0.530906,   \n0.802271,   \n0.433111,   \n0.472424,   \n0.749044,   \n\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="Get multiple entries"',children:'  CALL obj%get( value=obj2 )\n  CALL obj2%Display("obj2")\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"#obj2\n# isInitiated : TRUE\n# name :U2\n# fieldType : NORMAL\n# engine :NATIVE_SERIAL\n# comm: 0\n# myRank: 0\n# numProcs: 1\n# global_n: 102\n# local_n: 102\n# is: 0\n# ie: 0\n# lis_ptr: 0\n# domain : ASSOCIATED\n# domains : NOT ALLOCATED\n# tSize : 102\n# # DOF data :\n# Total Physical Variables :1\n# Name : U\n# Space Components : 1\n# Time Components : 1\n# Total Nodes : 102\n# Storage Format : Nodes\n# Value Map : \n--------------\n       1      \n     103      \n# VAR :U\n  DOF-1 ,   \n--------,   \n0.976837,   \n0.483390,   \n0.581184,   \n0.147984,   \n0.724879,   \n0.299203,   \n0.940301,   \n0.663552,   \n0.240904,   \n0.941748,   \n0.447914,   \n0.202338,   \n0.454285,   \n0.881168,   \n0.323755,   \n0.373271,   \n0.530906,   \n0.802271,   \n0.433111,   \n0.472424,   \n0.749044,   \n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",metastring:'title="Cleanup"',children:"  CALL obj%Deallocate(); CALL dom%Deallocate()\n  CALL meshfile%Deallocate()\n  CALL resultFile%Deallocate()\n  CALL param%Deallocate(); CALL FPL_FINALIZE()\n  if(allocated(realVec) ) deallocate(realVec)\nEND PROGRAM main\n"})})]})}function E(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(f,{...e})}):f(e)}const x={},N="Get",C={id:"ScalarFieldLis/Get",title:"Get",description:"Get the entries from scalar field.",source:"@site/docs/docs-api/ScalarFieldLis/Get.md",sourceDirName:"ScalarFieldLis",slug:"/ScalarFieldLis/Get",permalink:"/docs-api/ScalarFieldLis/Get",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/ScalarFieldLis/Get.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Export",permalink:"/docs-api/ScalarFieldLis/Export"},next:{title:"GetPointer",permalink:"/docs-api/ScalarFieldLis/GetPointer"}},T={},b=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"Interface 3",id:"interface-3",level:2},{value:"Interface 4",id:"interface-4",level:2},{value:"Interface 5",id:"interface-5",level:2},{value:"Interface 6",id:"interface-6",level:2}];function I(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"get",children:"Get"}),"\n",(0,l.jsx)(n.p,{children:"Get the entries from scalar field."}),"\n",(0,l.jsx)(n.p,{children:"Calling examples:"}),"\n",(0,l.jsx)("span",{class:"badge badge--primary",children:" Getting single entry "}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"CALL Get(\n    CLASS(ScalarFieldLis_):: obj\n    REAL(DFP):: VALUE\n    INTEGER(I4B):: globalNode\n)\n"})}),"\n",(0,l.jsx)("span",{class:"badge badge--primary",children:" Getting all entries "}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"CALL Get(\n    CLASS(ScalarFieldLis_):: obj\n    REAL(DFP):: VALUE(:)\n)\n"})}),"\n",(0,l.jsx)("span",{class:"badge badge--primary",children:" Getting multiple entries "}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"CALL Get(\n    CLASS(ScalarFieldLis_):: obj\n    REAL(DFP):: VALUE(:)\n    INTEGER(I4B):: globalNode(:)\n    )\n"})}),"\n",(0,l.jsx)("span",{class:"badge badge--primary",children:" Getting multiple entries "}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"CALL Get(\n    CLASS(ScalarFieldLis_):: obj\n    REAL(DFP):: VALUE(:)\n    INTEGER(I4B):: istart\n    INTEGER(I4B):: iend\n    INTEGER(I4B):: stride\n    )\n"})}),"\n",(0,l.jsx)("span",{class:"badge badge--primary",children:" Getting multiple entries "}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"CALL Get(\n    CLASS(ScalarFieldLis_):: obj\n    TYPE(FEVariable_):: VALUE\n    INTEGER(I4B):: globalNode(:)\n    )\n"})}),"\n",(0,l.jsx)("span",{class:"badge badge--primary",children:" Getting all entries "}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"CALL Get(\n    CLASS(ScalarFieldLis_):: obj\n    CLASS(ScalarField_):: VALUE\n    )\n"})}),"\n","\n","\n",(0,l.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,l.jsxs)(t.Z,{children:[(0,l.jsxs)(i.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE get1(obj, VALUE, globalNode)\n    CLASS(ScalarFieldLis_), INTENT(IN) :: obj\n    REAL(DFP), INTENT(INOUT) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: globalNode\n  END SUBROUTINE get1\nEND INTERFACE\n"})}),(0,l.jsx)(n.p,{children:"Get a single entry."})]}),(0,l.jsx)(i.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,l.jsx)(c,{})}),(0,l.jsx)(i.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,l.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,l.jsxs)(t.Z,{children:[(0,l.jsxs)(i.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE get2(obj, VALUE)\n    CLASS(ScalarFieldLis_), INTENT(IN) :: obj\n    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)\n  END SUBROUTINE get2\nEND INTERFACE\n"})}),(0,l.jsx)(n.p,{children:"Get all entries in a vector of reals."})]}),(0,l.jsx)(i.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,l.jsx)(d,{})}),(0,l.jsx)(i.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,l.jsx)(n.h2,{id:"interface-3",children:"Interface 3"}),"\n",(0,l.jsxs)(t.Z,{children:[(0,l.jsxs)(i.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE get3(obj, VALUE, globalNode)\n    CLASS(ScalarFieldLis_), INTENT(IN) :: obj\n    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n  END SUBROUTINE get3\nEND INTERFACE\n"})}),(0,l.jsx)(n.p,{children:"Get multiple entries."})]}),(0,l.jsx)(i.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,l.jsx)(L,{})}),(0,l.jsx)(i.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,l.jsx)(n.h2,{id:"interface-4",children:"Interface 4"}),"\n",(0,l.jsxs)(t.Z,{children:[(0,l.jsxs)(i.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE get4(obj, VALUE, istart, iend, stride)\n    CLASS(ScalarFieldLis_), INTENT(IN) :: obj\n    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)\n    INTEGER(I4B), INTENT(IN) :: istart\n    INTEGER(I4B), INTENT(IN) :: iend\n    INTEGER(I4B), INTENT(IN) :: stride\n  END SUBROUTINE get4\nEND INTERFACE\n"})}),(0,l.jsx)(n.p,{children:"Get multiple entries by using triplets."})]}),(0,l.jsx)(i.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,l.jsx)(p,{})}),(0,l.jsx)(i.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,l.jsx)(n.h2,{id:"interface-5",children:"Interface 5"}),"\n",(0,l.jsxs)(t.Z,{children:[(0,l.jsxs)(i.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE get5(obj, VALUE, globalNode)\n    CLASS(ScalarFieldLis_), INTENT(IN) :: obj\n    TYPE(FEVariable_), INTENT(INOUT) :: VALUE\n  !! Scalar Nodal FEVariable\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n  END SUBROUTINE get5\nEND INTERFACE\n"})}),(0,l.jsxs)(n.p,{children:["Get multiple entries in ",(0,l.jsx)(n.a,{href:"/docs-api/FEVariable/FEVariable_",children:"FEVariable"})]})]}),(0,l.jsx)(i.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,l.jsx)(g,{})}),(0,l.jsx)(i.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,l.jsx)(n.h2,{id:"interface-6",children:"Interface 6"}),"\n",(0,l.jsxs)(t.Z,{children:[(0,l.jsxs)(i.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE get6(obj, VALUE)\n    CLASS(ScalarFieldLis_), INTENT(IN) :: obj\n    CLASS(ScalarField_), INTENT(INOUT) :: VALUE\n  END SUBROUTINE get6\nEND INTERFACE\n"})}),(0,l.jsx)(n.p,{children:"Get a scalarfield in an instance of scalar field."})]}),(0,l.jsx)(i.Z,{value:"example1",label:"\ufe0f\u0700 Example 1",children:(0,l.jsx)(j,{})}),(0,l.jsx)(i.Z,{value:"example2",label:"\ufe0f\u0700 Example 2",children:(0,l.jsx)(E,{})}),(0,l.jsx)(i.Z,{value:"close",label:"\u21a2 "})]})]})}function F(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(I,{...e})}):I(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>i});a(67294);var l=a(86010);const r={tabItem:"tabItem_Ymn6"};var t=a(85893);function i(e){let{children:n,hidden:a,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>N});var l=a(67294),r=a(86010),t=a(12466),i=a(16550),s=a(20469),c=a(91980),o=a(67392),d=a(50012);function m(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function L(e){const{values:n,children:a}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return m(e).map((e=>{let{props:{value:n,label:a,attributes:l,default:r}}=e;return{value:n,label:a,attributes:l,default:r}}))}(a);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function u(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const r=(0,i.k6)(),t=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c._X)(t),(0,l.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace({...r.location,search:n.toString()})}),[t,r])]}function h(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,t=L(e),[i,c]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=a.find((e=>e.default))??a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:t}))),[o,m]=p({queryString:a,groupId:r}),[h,g]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,t]=(0,d.Nk)(a);return[r,(0,l.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:r}),A=(()=>{const e=o??h;return u({value:e,tabValues:t})?e:null})();(0,s.Z)((()=>{A&&c(A)}),[A]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!u({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),m(e),g(e)}),[m,g,t]),tabValues:t}}var g=a(72389);const A={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(85893);function f(e){let{className:n,block:a,selectedValue:l,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.o5)(),d=e=>{const n=e.currentTarget,a=c.indexOf(n),r=s[a].value;r!==l&&(o(n),i(r))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:s.map((e=>{let{value:n,label:a,attributes:t}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>c.push(e),onKeyDown:m,onClick:d,...t,className:(0,r.Z)("tabs__item",A.tabItem,t?.className,{"tabs__item--active":l===n}),children:a??n},n)}))})}function E(e){let{lazy:n,children:a,selectedValue:r}=e;const t=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function x(e){const n=h(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",A.tabList),children:[(0,j.jsx)(f,{...e,...n}),(0,j.jsx)(E,{...e,...n})]})}function N(e){const n=(0,g.Z)();return(0,j.jsx)(x,{...e,children:m(e.children)},String(n))}},11151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>i});var l=a(67294);const r={},t=l.createContext(r);function i(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);