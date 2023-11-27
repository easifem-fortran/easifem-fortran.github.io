"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[66954],{18803:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>N,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>t,toc:()=>r});var i=l(85893),o=l(11151);const s={},a="Set",t={id:"VectorField/Set",title:"Set",description:"Set entries in vector field",source:"@site/docs/docs-api/VectorField/Set.md",sourceDirName:"VectorField",slug:"/VectorField/Set",permalink:"/docs-api/VectorField/Set",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/VectorField/Set.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Norm2",permalink:"/docs-api/VectorField/Norm2"},next:{title:"SetVectorFieldParam",permalink:"/docs-api/VectorField/SetVectorFieldParam"}},N={},r=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"Interface 3",id:"interface-3",level:2},{value:"Interface 4",id:"interface-4",level:2},{value:"Interface 5",id:"interface-5",level:2},{value:"Interface 6",id:"interface-6",level:2},{value:"Interface 7",id:"interface-7",level:2},{value:"Interface 8",id:"interface-8",level:2},{value:"Interface 9",id:"interface-9",level:2},{value:"Interface 10",id:"interface-10",level:2},{value:"Interface 11",id:"interface-11",level:2},{value:"Interface 12",id:"interface-12",level:2},{value:"Interface 13",id:"interface-13",level:2},{value:"Interface 14",id:"interface-14",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"set",children:"Set"}),"\n",(0,i.jsx)(n.p,{children:"Set entries in vector field"}),"\n",(0,i.jsx)(n.p,{children:"Calling example:"}),"\n",(0,i.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:" INTERFACE\n  MODULE SUBROUTINE vField_set1(obj, globalNode, VALUE, &\n    & scale, addContribution)\n    CLASS(VectorField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    REAL(DFP), INTENT(IN) :: VALUE(:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE vField_set1\nEND INTERFACE\n"})}),"\n",(0,i.jsx)(n.p,{children:"This routine sets the single entry of the vector field."}),"\n",(0,i.jsxs)(n.p,{children:["Here, ",(0,i.jsx)(n.code,{children:"value"})," should be a vector representing the components of a vector."]}),"\n",(0,i.jsxs)(n.p,{children:["The size of ",(0,i.jsx)(n.code,{children:"value"})," should be same as ",(0,i.jsx)(n.code,{children:"obj%spaceCompo"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"In simple words it does following."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"vector( 1:spaceCompo, globalNode ) = value( 1:spaceCompo )\n"})}),"\n",(0,i.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE vField_set2(obj, VALUE, scale, addContribution)\n    CLASS(VectorField_), TARGET, INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(IN) :: VALUE(:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE vField_set2\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This method sets all the nodal values to ",(0,i.jsx)(n.code,{children:"value"})]}),"\n",(0,i.jsxs)(n.li,{children:["The size of value should be same as the ",(0,i.jsx)(n.code,{children:"obj%spaceCompo"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"vector( 1:spaceCompo, i ) = value( 1:spaceCompo ), for i = 1, tNodes\n"})}),"\n",(0,i.jsx)(n.h2,{id:"interface-3",children:"Interface 3"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:" INTERFACE\n MODULE SUBROUTINE vField_set3(obj, VALUE, spaceCompo, scale, addContribution)\n    CLASS(VectorField_), INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(IN) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: spaceCompo\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE vField_set3\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This routine sets all values of ",(0,i.jsx)(n.code,{children:"spaceCompo"})," component of the vector field to a given scalar value ",(0,i.jsx)(n.code,{children:"value"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"vector( spaceCompo, i ) = value, for i = 1, tNodes\n"})}),"\n",(0,i.jsx)(n.h2,{id:"interface-4",children:"Interface 4"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:" INTERFACE\n  MODULE SUBROUTINE vField_set4(obj, VALUE, scale, addContribution)\n    CLASS(VectorField_), INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(IN) :: VALUE(:, :)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE vField_set4\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This routine set all entries of vector field to given vector"}),"\n",(0,i.jsxs)(n.li,{children:["Here shape of should be ",(0,i.jsx)(n.code,{children:"value(1:spaceCompo, tNodes)"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"vector( :, : ) = value( :, : )\n"})}),"\n",(0,i.jsx)(n.h2,{id:"interface-5",children:"Interface 5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:" INTERFACE\n MODULE SUBROUTINE vField_set5(obj, VALUE, spaceCompo, scale, addContribution)\n    CLASS(VectorField_), INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(IN) :: VALUE(:)\n    INTEGER(I4B), INTENT(IN) :: spaceCompo\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE vField_set5\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This routine sets all entries of the component ",(0,i.jsx)(n.code,{children:"spaceCompo"})," of VectorField to a given fortran vector ",(0,i.jsx)(n.code,{children:"value"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"vector( spaceCompo, : ) = value( : )\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The size of ",(0,i.jsx)(n.code,{children:"value"})," should be equal to the tNodes."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"interface-6",children:"Interface 6"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n MODULE SUBROUTINE vField_set6(obj, VALUE, spaceCompo, scale, addContribution)\n    CLASS(VectorField_), INTENT(INOUT) :: obj\n    TYPE(ScalarField_), INTENT(IN) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: spaceCompo\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE vField_set6\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This routine sets all entries of the component ",(0,i.jsx)(n.code,{children:"spaceCompo"})," of VectorField to a given ScalarField ",(0,i.jsx)(n.code,{children:"value"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"vector( spaceCompo, : ) = value\n"})}),"\n",(0,i.jsx)(n.h2,{id:"interface-7",children:"Interface 7"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n MODULE SUBROUTINE vField_set7(obj, VALUE, globalNode, scale, addContribution)\n    CLASS(VectorField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    REAL(DFP), INTENT(IN) :: VALUE(:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE vField_set7\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This soubroutine sets the selected enties to a vector entry ",(0,i.jsx)(n.code,{children:"value( : )"})]}),"\n",(0,i.jsxs)(n.li,{children:["Size of ",(0,i.jsx)(n.code,{children:"value"})," should be equal to the ",(0,i.jsx)(n.code,{children:"obj%spaceCompo"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"Effectively it does the following:\nvector( :, globalNode ) = value( : ), for entries in global nodes\n"})}),"\n",(0,i.jsx)(n.h2,{id:"interface-8",children:"Interface 8"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE vField_set8(obj, globalNode, VALUE, scale, &\n    & addContribution)\n    CLASS(VectorField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    REAL(DFP), INTENT(IN) :: VALUE(:, :)\n  !! value is in value(i,J) format.\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE vField_set8\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This routine sets the selected entries."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:" vector( :, globalNode ) = value( :, : )\n"})}),"\n",(0,i.jsx)(n.h2,{id:"interface-9",children:"Interface 9"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:" INTERFACE\n  MODULE SUBROUTINE vField_set9(obj, VALUE, globalNode, spaceCompo, scale, &\n    & addContribution)\n    CLASS(VectorField_), INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(IN) :: VALUE(:)\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    INTEGER(I4B), INTENT(IN) :: spaceCompo\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE vField_set9\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This routine sets the multiple values"}),"\n",(0,i.jsxs)(n.li,{children:["Size of ",(0,i.jsx)(n.code,{children:"value"})," should be equal to size of ",(0,i.jsx)(n.code,{children:"globalNode"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"vector( spaceCompo, globalNode ) = value( : )\n"})}),"\n",(0,i.jsx)(n.h2,{id:"interface-10",children:"Interface 10"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:" INTERFACE\n  MODULE SUBROUTINE vField_set10(obj, VALUE, globalNode, spaceCompo, scale, &\n    & addContribution)\n    CLASS(VectorField_), INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(IN) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: spaceCompo\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE vField_set10\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This routine sets a single entry"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"interface-11",children:"Interface 11"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:" INTERFACE\n  MODULE SUBROUTINE vField_set13(obj, VALUE, globalNode, scale, &\n    & addContribution)\n    CLASS(VectorField_), INTENT(INOUT) :: obj\n    TYPE(FEVariable_), INTENT(IN) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE vField_set13\nEND INTERFACE\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sets the multiple values using FEVariable."}),"\n",(0,i.jsx)(n.h2,{id:"interface-12",children:"Interface 12"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE vField_set12(obj, VALUE, istart, iend, stride, scale, &\n    & addContribution)\n    CLASS(VectorField_), INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(IN) :: VALUE(:, :)\n    INTEGER(I4B), INTENT(IN) :: istart\n    INTEGER(I4B), INTENT(IN) :: iend\n    INTEGER(I4B), INTENT(IN) :: stride\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE vField_set12\nEND INTERFACE\n"})}),"\n",(0,i.jsx)(n.h2,{id:"interface-13",children:"Interface 13"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:" INTERFACE\n  MODULE SUBROUTINE vField_set13(obj, VALUE, globalNode, scale, &\n    & addContribution)\n    CLASS(VectorField_), INTENT(INOUT) :: obj\n    TYPE(FEVariable_), INTENT(IN) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE vField_set13\nEND INTERFACE\n"})}),"\n",(0,i.jsx)(n.h2,{id:"interface-14",children:"Interface 14"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:" INTERFACE\n  MODULE SUBROUTINE vField_set14(obj, VALUE, scale, addContribution)\n    CLASS(VectorField_), INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(IN) :: VALUE\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE vField_set14\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Sets all values"}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,l)=>{l.d(n,{Z:()=>t,a:()=>a});var i=l(67294);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);