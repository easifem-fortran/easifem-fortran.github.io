"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[33369],{70710:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=s(85893),i=s(11151);const r={},a=void 0,l={id:"STVectorMeshField/STVectorMeshField_test_1",title:"STVectorMeshField_test_1",description:"This example shows how to convert the mesh generated from Gmsh, MSHFileformat, into the HDF5File format.",source:"@site/docs/docs-api/STVectorMeshField/STVectorMeshField_test_1.md",sourceDirName:"STVectorMeshField",slug:"/STVectorMeshField/STVectorMeshField_test_1",permalink:"/docs-api/STVectorMeshField/STVectorMeshField_test_1",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/STVectorMeshField/STVectorMeshField_test_1.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"STVectorMeshField",permalink:"/docs-api/STVectorMeshField/"},next:{title:"STVectorMeshField_test_2",permalink:"/docs-api/STVectorMeshField/STVectorMeshField_test_2"}},o={},c=[];function h(e){const t={code:"code",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This example shows how to convert the mesh generated from Gmsh, MSHFile_format, into the HDF5File_ format."}),"\n",(0,n.jsx)(t.p,{children:"The mesh is given below"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(11068).Z+"",width:"612",height:"797"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  IMPLICIT NONE\n  TYPE( MSHFile_ ) :: mshFile\n  TYPE( HDF5File_ ) :: hdf5file\n"})}),"\n",(0,n.jsx)(t.p,{children:"Initiate an instance of MSHFile_ which is created by Gmsh"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:'  CALL mshFile%Initiate( filename="./mesh.msh", STATUS="OLD", ACTION="READ" )\n'})}),"\n",(0,n.jsx)(t.p,{children:"Open the mesh file MSHFile_"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"  CALL mshFile%Open()\n"})}),"\n",(0,n.jsx)(t.p,{children:"Read the mesh information from the file."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"  CALL mshFile%Read()\n"})}),"\n",(0,n.jsx)(t.p,{children:"Initiate an instance of HDF5File_, we will save mesh data in this file."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:'  CALL hdf5file%Initiate( "./mesh.h5", MODE="NEW" )\n'})}),"\n",(0,n.jsx)(t.p,{children:"Open the HDF5File_ file so that we can write mesh data in this file."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"  CALL hdf5file%Open()\n"})}),"\n",(0,n.jsx)(t.p,{children:"exporting mesh from MSHFile_file to HDF5File_"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:'  CALL mshFile%Export( hdf5=hdf5file, group="" )\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"  CALL mshFile%close()\n  CALL mshFile%Deallocate()\n  CALL hdf5file%close()\n  CALL hdf5file%Deallocate()\nEND PROGRAM main\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11068:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/mesh-55f489ea84bf8e71cc3043bc11a36e32.png"},11151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>a});var n=s(67294);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);