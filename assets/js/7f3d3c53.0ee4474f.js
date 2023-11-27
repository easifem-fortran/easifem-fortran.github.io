"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[99573],{35389:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=s(85893),t=s(11151);const a={},o=void 0,r={id:"STTensorMeshField/STTensorMeshField_test_2",title:"STTensorMeshField_test_2",description:"This example shows how to initiate an instance of Meshby reading data from mesh file, which is in HDF5Fileformat. It also showns how to construct an instance of STTensorMeshField_.",source:"@site/docs/docs-api/STTensorMeshField/STTensorMeshField_test_2.md",sourceDirName:"STTensorMeshField",slug:"/STTensorMeshField/STTensorMeshField_test_2",permalink:"/docs-api/STTensorMeshField/STTensorMeshField_test_2",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/STTensorMeshField/STTensorMeshField_test_2.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"STTensorMeshField_test_1",permalink:"/docs-api/STTensorMeshField/STTensorMeshField_test_1"},next:{title:"STVectorField",permalink:"/docs-api/STVectorField/"}},l={},c=[];function d(e){const n={code:"code",img:"img",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This example shows how to initiate an instance of Mesh_by reading data from mesh file, which is in HDF5File_format. It also showns how to construct an instance of STTensorMeshField_."}),"\n",(0,i.jsx)(n.p,{children:"The mesh is given below"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(61094).Z+"",width:"612",height:"797"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  IMPLICIT NONE\n  TYPE( HDF5File_ ) :: meshfile\n  TYPE( Mesh_ ) :: amesh\n  TYPE( STTensorMeshField_ ) :: obj\n  TYPE( ParameterList_ ) :: param\n"})}),"\n",(0,i.jsx)(n.p,{children:"Initiate and open the mesh file which is in HDF5File_ format."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'  CALL meshfile%Initiate( FileName="./mesh.h5", MODE="READ" )\n  CALL meshfile%Open()\n  CALL amesh%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )\n'})}),"\n",(0,i.jsx)(n.p,{children:"Initiate an instance of STTensorMeshField_"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"  CALL FPL_INIT(); CALL param%initiate()\n  CALL setSTTensorMeshFieldParam( &\n    & param=param, &\n    & name='aSTTensor', &\n    & fieldType=FIELD_TYPE_NORMAL, &\n    & engine='NATIVE_SERIAL', &\n    & defineOn=Nodal, &\n    & dim1=3, dim2=3, &\n    & nns=6, nnt=3 )\n  CALL obj%Initiate( param=param, mesh=amesh )\n  CALL obj%Display( 'obj: ' )\n"})}),"\n",(0,i.jsx)(n.p,{children:"cleaning up."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%Deallocate()\n  CALL amesh%Deallocate()\n  CALL meshfile%Close()\n  CALL meshfile%Deallocate()\n  CALL param%Deallocate(); CALL FPL_FINALIZE()\nEND PROGRAM main\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},61094:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/mesh-55f489ea84bf8e71cc3043bc11a36e32.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>o});var i=s(67294);const t={},a=i.createContext(t);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);