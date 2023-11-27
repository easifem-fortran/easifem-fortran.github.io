"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[21772],{36821:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>T,frontMatter:()=>r,metadata:()=>c,toc:()=>N});var o=t(85893),l=t(11151);const r={},a="Structure",c={id:"VTKPlot/VTKPlot_",title:"Structure",description:"ConstructorMethods",source:"@site/docs/docs-api/VTKPlot/VTKPlot_.md",sourceDirName:"VTKPlot",slug:"/VTKPlot/VTKPlot_",permalink:"/docs-api/VTKPlot/VTKPlot_",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/VTKPlot/VTKPlot_.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"VTKPlot",permalink:"/docs-api/VTKPlot/"},next:{title:"VTKPlot example 1",permalink:"/docs-api/VTKPlot/VTKPlot_test_1"}},s={},N=[{value:"ConstructorMethods",id:"constructormethods",level:2},{value:"Initiate",id:"initiate",level:3},{value:"Deallocate",id:"deallocate",level:3},{value:"Display",id:"display",level:3},{value:"StructuredGridMethods",id:"structuredgridmethods",level:2},{value:"Plot",id:"plot",level:3}];function i(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"structure",children:"Structure"}),"\n",(0,o.jsx)(n.h2,{id:"constructormethods",children:"ConstructorMethods"}),"\n",(0,o.jsx)(n.h3,{id:"initiate",children:"Initiate"}),"\n",(0,o.jsx)(n.h3,{id:"deallocate",children:"Deallocate"}),"\n",(0,o.jsx)(n.h3,{id:"display",children:"Display"}),"\n",(0,o.jsx)(n.h2,{id:"structuredgridmethods",children:"StructuredGridMethods"}),"\n",(0,o.jsx)(n.h3,{id:"plot",children:"Plot"}),"\n",(0,o.jsx)(n.p,{children:"There are several interfaces as described below:"}),"\n",(0,o.jsx)(n.p,{children:"Interface-1"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\nMODULE SUBROUTINE vts_plot_x1y1( obj, x, y, filename )\n  CLASS( VTKPlot_ ), INTENT( IN ) :: obj\n  REAL( DFP ), INTENT( IN ) :: x( : )\n  REAL( DFP ), INTENT( IN ) :: y( : )\n  CHARACTER( LEN = * ), INTENT( IN ) :: filename\nEND SUBROUTINE vts_plot_x1y1\nEND INTERFACE\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can learn about the interface from [[VTKPlot_test_1]]"}),"\n",(0,o.jsx)(n.p,{children:"Interface-2"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\nMODULE SUBROUTINE vts_plot_x1y1z1( obj, x, y, z, filename )\n  CLASS( VTKPlot_ ), INTENT( IN ) :: obj\n  REAL( DFP ), INTENT( IN ) :: x( : )\n  REAL( DFP ), INTENT( IN ) :: y( : )\n  REAL( DFP ), INTENT( IN ) :: z( : )\n  CHARACTER( LEN = * ), INTENT( IN ) :: filename\nEND SUBROUTINE vts_plot_x1y1z1\nEND INTERFACE\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can learn about interface-2 from [[VTKPlot_test_3]]."}),"\n",(0,o.jsx)(n.p,{children:"Interface-3"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\nMODULE SUBROUTINE vts_plot_x2y2( obj, x, y, filename )\n  CLASS( VTKPlot_ ), INTENT( IN ) :: obj\n  REAL( DFP ), INTENT( IN ) :: x( :, : )\n  REAL( DFP ), INTENT( IN ) :: y( :, : )\n  CHARACTER( LEN = * ), INTENT( IN ) :: filename\nEND SUBROUTINE vts_plot_x2y2\nEND INTERFACE\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can learn about interface-3 from [[VTKPlot_test_4]]"}),"\n",(0,o.jsx)(n.p,{children:"Interface-4"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\nMODULE SUBROUTINE vts_plot_x3y3z3( obj, x, y, z, filename )\n  CLASS( VTKPlot_ ), INTENT( IN ) :: obj\n  REAL( DFP ), INTENT( IN ) :: x( :, :, : )\n  REAL( DFP ), INTENT( IN ) :: y( :, :, : )\n  REAL( DFP ), INTENT( IN ) :: z( :, :, : )\n  CHARACTER( LEN = * ), INTENT( IN ) :: filename\nEND SUBROUTINE vts_plot_x3y3z3\nEND INTERFACE\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can learn about interface-4 from [[VTKPlot_test_6]]"}),"\n",(0,o.jsx)(n.p,{children:"Interface-5"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:"SUBROUTINE vts_plot_x1y1f( obj, x, y, f, filename )\n  CLASS( VTKPlot_ ), INTENT( IN ) :: obj\n  REAL( DFP ), INTENT( IN ) :: x( : )\n  REAL( DFP ), INTENT( IN ) :: y( : )\n  PROCEDURE( iface_SpaceFunction ), POINTER :: f\n  CHARACTER( LEN = * ), INTENT( IN ) :: filename\nEND SUBROUTINE\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can learn about interface-5 from [[VTKPlot_test_2]]"}),"\n",(0,o.jsx)(n.p,{children:"Interface-6"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:"SUBROUTINE vts_plot_x2y2f( obj, x, y, f, filename )\n  CLASS( VTKPlot_ ), INTENT( IN ) :: obj\n  REAL( DFP ), INTENT( IN ) :: x( :, : )\n  REAL( DFP ), INTENT( IN ) :: y( :, : )\n  PROCEDURE( iface_SpaceFunction ), POINTER :: f\n  CHARACTER( LEN = * ), INTENT( IN ) :: filename\nEND SUBROUTINE\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can learn about interface-6 from [[VTKPlot_test_5]]."}),"\n",(0,o.jsx)(n.p,{children:"Interface-7"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:"SUBROUTINE vts_plot_x3y3z3f( obj, x, y, z, f, filename )\n  CLASS( VTKPlot_ ), INTENT( IN ) :: obj\n  REAL( DFP ), INTENT( IN ) :: x( :, :, : )\n  REAL( DFP ), INTENT( IN ) :: y( :, :, : )\n  REAL( DFP ), INTENT( IN ) :: z( :, :, : )\n  PROCEDURE( iface_SpaceFunction ), POINTER :: f\n  CHARACTER( LEN = * ), INTENT( IN ) :: filename\nEND SUBROUTINE\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can learn about interface-7 from [[VTKPlot_test_7]]"})]})}function T(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var o=t(67294);const l={},r=o.createContext(l);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);