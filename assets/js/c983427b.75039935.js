"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[25852],{92651:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>y,contentTitle:()=>l,default:()=>D,frontMatter:()=>r,metadata:()=>T,toc:()=>o});var t=i(85893),a=i(11151);const r={},l=void 0,T={id:"VTKFile/test_VTKFile",title:"test_VTKFile",description:"module test_m",source:"@site/docs/docs-api/VTKFile/test_VTKFile.md",sourceDirName:"VTKFile",slug:"/VTKFile/test_VTKFile",permalink:"/docs-api/VTKFile/test_VTKFile",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/VTKFile/test_VTKFile.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"VTKFile_test_9",permalink:"/docs-api/VTKFile/VTKFile_test_9"},next:{title:"VTKPlot",permalink:"/docs-api/VTKPlot/"}},y={},o=[];function x(n){const e={p:"p",...(0,a.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"module test_m\nuse easifemBase\nuse easifemClasses\nimplicit none\ncontains"}),"\n",(0,t.jsx)(e.p,{children:"!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------"}),"\n",(0,t.jsxs)(e.p,{children:["SUBROUTINE test13\nTYPE(VTKFile_) :: aVTKfile\nINTEGER( I4B ), PARAMETER :: nx1=0, nx2=9, ny1=0, ny2=5, nz1=0, nz2=5\nREAL(DFP) :: xv(nx1",":nx2","), yv(ny1",":ny2","), zv(nz1",":nz2","), &\n& x(nx1",":nx2",", ny1",":ny2",", nz1",":nz2","), y(nx1",":nx2",", ny1",":ny2",", nz1",":nz2","), &\n& z(nx1",":nx2",", ny1",":ny2",", nz1",":nz2","), v(nx1",":nx2",", ny1",":ny2",", nz1",":nz2",")\nINTEGER(I4B) :: i, j, k\nCALL Display(\"TEST :: BINARY APPENDED VTS\")\nCALL aVTKfile%InitiateVTKFile(filename=\"./vtkfile_binary_appended.vts\", &\n& mode=\"NEW\", DataFormat=VTK_BINARY_APPENDED, &\n& DataStructureType=VTK_StructuredGrid, &\n& WholeExtent=[nx1, nx2, ny1, ny2, nz1, nz2])\nCALL aVTKfile%WritePiece(extent=[nx1, nx2, ny1, ny2, nz1, nz2])\nDO k = nz1, nz2\nDO j = ny1, ny2\nDO i = nx1, nx2\nx(i, j, k) = i * 1.0_DFP\ny(i, j, k) = j * 1.0_DFP\nz(i, j, k) = k * 1.0_DFP\nv(i, j, k) = x(i, j, k)**2 + y(i, j, k)**2 + z(i, j, k)**2\nEND DO\nEND DO\nEND DO\nCALL aVTKfile%WritePoints(x=x, y=y, z=z)\nCALL aVTKfile%WriteDataArray(location=String('node'), &\n& action=String('open'))\nCALL aVTKfile%WriteDataArray(name=String(\"presssure\"), x=v, &\n& numberOfComponents=1)\nCALL aVTKfile%WriteDataArray(location=String('node'), &\n& action=String('close'))\nCALL aVTKfile%WritePiece()\nCALL aVTKfile%Close()\nCALL aVTKfile%Deallocate()\nEND SUBROUTINE"]}),"\n",(0,t.jsx)(e.p,{children:"!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------"}),"\n",(0,t.jsxs)(e.p,{children:["SUBROUTINE test12\nTYPE(VTKFile_) :: aVTKfile\nINTEGER( I4B ), PARAMETER :: nx1=0, nx2=9, ny1=0, ny2=5, nz1=0, nz2=5\nREAL(DFP) :: xv(nx1",":nx2","), yv(ny1",":ny2","), zv(nz1",":nz2","), &\n& x(nx1",":nx2",", ny1",":ny2",", nz1",":nz2","), y(nx1",":nx2",", ny1",":ny2",", nz1",":nz2","), &\n& z(nx1",":nx2",", ny1",":ny2",", nz1",":nz2","), v(nx1",":nx2",", ny1",":ny2",", nz1",":nz2",")\nINTEGER(I4B) :: i, j, k\nCALL Display(\"TEST :: BINARY VTS\")\nCALL aVTKfile%InitiateVTKFile(filename=\"./vtkfile_binary.vts\", mode=\"NEW\",&\n& DataFormat=VTK_BINARY, DataStructureType=VTK_StructuredGrid, &\n& WholeExtent=[nx1, nx2, ny1, ny2, nz1, nz2])\nCALL aVTKfile%WritePiece(extent=[nx1, nx2, ny1, ny2, nz1, nz2])\nDO k = nz1, nz2\nDO j = ny1, ny2\nDO i = nx1, nx2\nx(i, j, k) = i * 1.0_DFP\ny(i, j, k) = j * 1.0_DFP\nz(i, j, k) = k * 1.0_DFP\nv(i, j, k) = x(i, j, k)**2 + y(i, j, k)**2 + z(i, j, k)**2\nEND DO\nEND DO\nEND DO\nCALL aVTKfile%WritePoints(x=x, y=y, z=z)\nCALL aVTKfile%WriteDataArray(location=String('node'), &\n& action=String('open'))\nCALL aVTKfile%WriteDataArray(name=String(\"presssure\"), x=v, &\n& numberOfComponents=1)\nCALL aVTKfile%WriteDataArray(location=String('node'), &\n& action=String('close'))\nCALL aVTKfile%WritePiece()\nCALL aVTKfile%Close()\nCALL aVTKfile%Deallocate()\nEND SUBROUTINE"]}),"\n",(0,t.jsx)(e.p,{children:"!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------"}),"\n",(0,t.jsxs)(e.p,{children:["SUBROUTINE test0\nTYPE(VTKFile_) :: aVTKfile\nINTEGER( I4B ), PARAMETER :: nx1=0, nx2=9, ny1=0, ny2=5, nz1=0, nz2=5\nREAL(DFP) :: x(nx1",":nx2","), y(ny1",":ny2","), z(nz1",":nz2","), v(nx1",":nx2",", ny1",":ny2",", nz1",":nz2",')\nINTEGER(I4B) :: i, j, k\nCALL Display("TEST :: ASCII VTR")\nCALL aVTKfile%InitiateVTKFile(filename="./vtkfile_ascii.vtr", mode="NEW", &\n& DataFormat=VTK_ASCII, DataStructureType=VTK_RectilinearGrid, &\n& WholeExtent=[nx1, nx2, ny1, ny2, nz1, nz2])\nCALL aVTKfile%WritePiece(extent=[nx1, nx2, ny1, ny2, nz1, nz2])']}),"\n",(0,t.jsx)(e.p,{children:"CALL RANDOM_NUMBER(x)\nCALL RANDOM_NUMBER(y)\nCALL RANDOM_NUMBER(z)\nDO k = nz1, nz2\nDO j = ny1, ny2\nDO i = nx1, nx2\nv(i, j, k) = x(i) * y(j) * z(k)\nEND DO\nEND DO\nEND DO\nCALL aVTKfile%WritePoints(x=x, y=y, z=z)\n! CALL aVTKfile%WriteDataArray(location=String('node'), &\n!   & action=String('open'))\n! CALL aVTKfile%WriteDataArray( name=String(\"presssure\"), x=v, &\n!   & numberOfComponents=1 )\n! CALL aVTKfile%WriteDataArray( location=String('node'), &\n!   & action=String('close') )\nCALL aVTKfile%WritePiece()\nCALL aVTKfile%Close()\nCALL aVTKfile%Deallocate()\nEND SUBROUTINE"}),"\n",(0,t.jsx)(e.p,{children:"!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------"}),"\n",(0,t.jsxs)(e.p,{children:["SUBROUTINE test10\nTYPE(VTKFile_) :: aVTKfile\nINTEGER( I4B ), PARAMETER :: nx1=0, nx2=9, ny1=0, ny2=5, nz1=0, nz2=5\nREAL(DFP) :: v(nx1",":nx2",", ny1",":ny2",", nz1",":nz2",")\nINTEGER(I4B) :: i, j, k\nCALL Display(\"TEST :: BINARY APPENDED VTI\")\nCALL aVTKfile%InitiateVTKFile(filename=\"./vtkfile_binary_appended.vti\", &\n& mode=\"NEW\", DataFormat=VTK_BINARY_APPENDED, &\n& DataStructureType=VTK_ImageData, &\n& WholeExtent=[nx1, nx2, ny1, ny2, nz1, nz2])\nCALL aVTKfile%WritePiece(extent=[nx1, nx2, ny1, ny2, nz1, nz2])\nDO k = nz1, nz2\nDO j = ny1, ny2\nDO i = nx1, nx2\nv(i, j, k) = REAL(i * j * k, DFP)\nEND DO\nEND DO\nEND DO\nCALL aVTKfile%WriteDataArray(location=String('node'), &\n& action=String('open'))\nCALL aVTKfile%WriteDataArray(name=String(\"presssure\"), x=v, &\n& numberOfComponents=1)\nCALL aVTKfile%WriteDataArray(location=String('node'), &\n& action=String('close'))\nCALL aVTKfile%WritePiece()\nCALL aVTKfile%Close()\nCALL aVTKfile%Deallocate()\nEND SUBROUTINE"]}),"\n",(0,t.jsx)(e.p,{children:"!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------"}),"\n",(0,t.jsxs)(e.p,{children:["SUBROUTINE test9\nTYPE(VTKFile_) :: aVTKfile\nINTEGER( I4B ), PARAMETER :: nx1=0, nx2=9, ny1=0, ny2=5, nz1=0, nz2=5\nREAL(DFP) :: v(nx1",":nx2",", ny1",":ny2",", nz1",":nz2",")\nINTEGER(I4B) :: i, j, k\nCALL Display(\"TEST :: BINARY VTI\")\nCALL aVTKfile%InitiateVTKFile(filename=\"./vtkfile_binary.vti\", &\n& mode=\"NEW\", DataFormat=VTK_BINARY, DataStructureType=VTK_ImageData, &\n& WholeExtent=[nx1, nx2, ny1, ny2, nz1, nz2])\nCALL aVTKfile%WritePiece(extent=[nx1, nx2, ny1, ny2, nz1, nz2])\nDO k = nz1, nz2\nDO j = ny1, ny2\nDO i = nx1, nx2\nv(i, j, k) = REAL(i * j * k, DFP)\nEND DO\nEND DO\nEND DO\nCALL aVTKfile%WriteDataArray(location=String('node'), &\n& action=String('open'))\nCALL aVTKfile%WriteDataArray(name=String(\"presssure\"), x=v, &\n& numberOfComponents=1)\nCALL aVTKfile%WriteDataArray(location=String('node'), &\n& action=String('close'))\nCALL aVTKfile%WritePiece()\nCALL aVTKfile%Close()\nCALL aVTKfile%Deallocate()\nEND SUBROUTINE"]}),"\n",(0,t.jsx)(e.p,{children:"!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------"}),"\n",(0,t.jsxs)(e.p,{children:["SUBROUTINE test8\nTYPE(VTKFile_) :: aVTKfile\nINTEGER( I4B ), PARAMETER :: nx1=0, nx2=9, ny1=0, ny2=5, nz1=0, nz2=5\nREAL(DFP) :: v(nx1",":nx2",", ny1",":ny2",", nz1",":nz2",")\nINTEGER(I4B) :: i, j, k\nCALL Display(\"TEST :: ASCII VTI\")\nCALL aVTKfile%InitiateVTKFile(filename=\"./vtkfile_ascii.vti\", mode=\"NEW\", &\n& DataFormat=VTK_ASCII, DataStructureType=VTK_ImageData, &\n& WholeExtent=[nx1, nx2, ny1, ny2, nz1, nz2])\nCALL aVTKfile%WritePiece(extent=[nx1, nx2, ny1, ny2, nz1, nz2])\nDO k = nz1, nz2\nDO j = ny1, ny2\nDO i = nx1, nx2\nv(i, j, k) = REAL(i * j * k, DFP)\nEND DO\nEND DO\nEND DO\nCALL aVTKfile%WriteDataArray(location=String('node'), &\n& action=String('open'))\nCALL aVTKfile%WriteDataArray(name=String(\"presssure\"), x=v, &\n& numberOfComponents=1)\nCALL aVTKfile%WriteDataArray(location=String('node'), &\n& action=String('close'))\nCALL aVTKfile%WritePiece()\nCALL aVTKfile%Close()\nCALL aVTKfile%Deallocate()\nEND SUBROUTINE"]}),"\n",(0,t.jsx)(e.p,{children:"!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------"}),"\n",(0,t.jsxs)(e.p,{children:["SUBROUTINE test7\nTYPE(VTKFile_) :: aVTKfile\nINTEGER( I4B ), PARAMETER :: nx1=0, nx2=9, ny1=0, ny2=5, nz1=0, nz2=5\nREAL(DFP) :: xv(nx1",":nx2","), yv(ny1",":ny2","), zv(nz1",":nz2","), &\n& x(nx1",":nx2",", ny1",":ny2",", nz1",":nz2","), y(nx1",":nx2",", ny1",":ny2",", nz1",":nz2","), &\n& z(nx1",":nx2",", ny1",":ny2",", nz1",":nz2","), v(nx1",":nx2",", ny1",":ny2",", nz1",":nz2",")\nINTEGER(I4B) :: i, j, k\nCALL Display(\"TEST :: BINARY APPENDED VTS\")\nCALL aVTKfile%InitiateVTKFile(filename=\"./vtkfile_binary_appended.vts\", &\n& mode=\"NEW\", DataFormat=VTK_BINARY_APPENDED, &\n& DataStructureType=VTK_StructuredGrid, &\n& WholeExtent=[nx1, nx2, ny1, ny2, nz1, nz2])\nCALL aVTKfile%WritePiece(extent=[nx1, nx2, ny1, ny2, nz1, nz2])\nDO k = nz1, nz2\nDO j = ny1, ny2\nDO i = nx1, nx2\nx(i, j, k) = i * 1.0_DFP\ny(i, j, k) = j * 1.0_DFP\nz(i, j, k) = k * 1.0_DFP\nv(i, j, k) = x(i, j, k)**2 + y(i, j, k)**2 + z(i, j, k)**2\nEND DO\nEND DO\nEND DO\nCALL aVTKfile%WritePoints(x=x, y=y, z=z)\nCALL aVTKfile%WriteDataArray(location=String('node'), &\n& action=String('open'))\nCALL aVTKfile%WriteDataArray(name=String(\"presssure\"), x=v, &\n& numberOfComponents=1)\nCALL aVTKfile%WriteDataArray(location=String('node'), &\n& action=String('close'))\nCALL aVTKfile%WritePiece()\nCALL aVTKfile%Close()\nCALL aVTKfile%Deallocate()\nEND SUBROUTINE"]}),"\n",(0,t.jsx)(e.p,{children:"!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------"}),"\n",(0,t.jsxs)(e.p,{children:["SUBROUTINE test6\nTYPE(VTKFile_) :: aVTKfile\nINTEGER( I4B ), PARAMETER :: nx1=0, nx2=9, ny1=0, ny2=5, nz1=0, nz2=5\nREAL(DFP) :: xv(nx1",":nx2","), yv(ny1",":ny2","), zv(nz1",":nz2","), &\n& x(nx1",":nx2",", ny1",":ny2",", nz1",":nz2","), y(nx1",":nx2",", ny1",":ny2",", nz1",":nz2","), &\n& z(nx1",":nx2",", ny1",":ny2",", nz1",":nz2","), v(nx1",":nx2",", ny1",":ny2",", nz1",":nz2",")\nINTEGER(I4B) :: i, j, k\nCALL Display(\"TEST :: BINARY VTS\")\nCALL aVTKfile%InitiateVTKFile(filename=\"./vtkfile_binary.vts\", mode=\"NEW\",&\n& DataFormat=VTK_BINARY, DataStructureType=VTK_StructuredGrid, &\n& WholeExtent=[nx1, nx2, ny1, ny2, nz1, nz2])\nCALL aVTKfile%WritePiece(extent=[nx1, nx2, ny1, ny2, nz1, nz2])\nDO k = nz1, nz2\nDO j = ny1, ny2\nDO i = nx1, nx2\nx(i, j, k) = i * 1.0_DFP\ny(i, j, k) = j * 1.0_DFP\nz(i, j, k) = k * 1.0_DFP\nv(i, j, k) = x(i, j, k)**2 + y(i, j, k)**2 + z(i, j, k)**2\nEND DO\nEND DO\nEND DO\nCALL aVTKfile%WritePoints(x=x, y=y, z=z)\nCALL aVTKfile%WriteDataArray(location=String('node'), &\n& action=String('open'))\nCALL aVTKfile%WriteDataArray(name=String(\"presssure\"), x=v, &\n& numberOfComponents=1)\nCALL aVTKfile%WriteDataArray(location=String('node'), &\n& action=String('close'))\nCALL aVTKfile%WritePiece()\nCALL aVTKfile%Close()\nCALL aVTKfile%Deallocate()\nEND SUBROUTINE"]}),"\n",(0,t.jsx)(e.p,{children:"!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------"}),"\n",(0,t.jsxs)(e.p,{children:["SUBROUTINE test5\nTYPE(VTKFile_) :: aVTKfile\nINTEGER( I4B ), PARAMETER :: nx1=0, nx2=9, ny1=0, ny2=5, nz1=0, nz2=5\nREAL(DFP) :: xv(nx1",":nx2","), yv(ny1",":ny2","), zv(nz1",":nz2","), &\n& x(nx1",":nx2",", ny1",":ny2",", nz1",":nz2","), y(nx1",":nx2",", ny1",":ny2",", nz1",":nz2","), &\n& z(nx1",":nx2",", ny1",":ny2",", nz1",":nz2","), v(nx1",":nx2",", ny1",":ny2",", nz1",":nz2",")\nINTEGER(I4B) :: i, j, k\nCALL Display(\"TEST :: ASCII VTS\")\nCALL aVTKfile%InitiateVTKFile(filename=\"./vtkfile_ascii.vts\", mode=\"NEW\", &\n& DataFormat=VTK_ASCII, DataStructureType=VTK_StructuredGrid, &\n& WholeExtent=[nx1, nx2, ny1, ny2, nz1, nz2])\nCALL aVTKfile%WritePiece(extent=[nx1, nx2, ny1, ny2, nz1, nz2])\nDO k = nz1, nz2\nDO j = ny1, ny2\nDO i = nx1, nx2\nx(i, j, k) = i * 1.0_DFP\ny(i, j, k) = j * 1.0_DFP\nz(i, j, k) = k * 1.0_DFP\nv(i, j, k) = REAL(i * j * k, DFP)\nEND DO\nEND DO\nEND DO\nCALL aVTKfile%WritePoints(x=x, y=y, z=z)\nCALL aVTKfile%WriteDataArray(location=String('node'), &\n& action=String('open'))\nCALL aVTKfile%WriteDataArray(name=String(\"presssure\"), x=v, &\n& numberOfComponents=1)\nCALL aVTKfile%WriteDataArray(location=String('node'), &\n& action=String('close'))\nCALL aVTKfile%WritePiece()\nCALL aVTKfile%Close()\nCALL aVTKfile%Deallocate()\nEND SUBROUTINE"]})]})}function D(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(x,{...n})}):x(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>T,a:()=>l});var t=i(67294);const a={},r=t.createContext(a);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function T(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);