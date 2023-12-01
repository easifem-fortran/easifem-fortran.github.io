"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[6531],{84263:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>I,frontMatter:()=>N,metadata:()=>a,toc:()=>s});var i=l(85893),o=l(11151);const N={},d="Set",a={id:"BlockNodeField/Set",title:"Set",description:"Set the entries of BlockNodeField.",source:"@site/docs/docs-api/BlockNodeField/Set.md",sourceDirName:"BlockNodeField",slug:"/BlockNodeField/Set",permalink:"/docs-api/BlockNodeField/Set",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/BlockNodeField/Set.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Norm2",permalink:"/docs-api/BlockNodeField/Norm2"},next:{title:"SetBlockNodeFieldParam",permalink:"/docs-api/BlockNodeField/SetBlockNodeFieldParam"}},c={},s=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"Interface 3",id:"interface-3",level:2},{value:"Interface 4",id:"interface-4",level:2},{value:"Interface 5",id:"interface-5",level:2},{value:"Interface 6",id:"interface-6",level:2},{value:"Interface 7",id:"interface-7",level:2},{value:"Interface 8",id:"interface-8",level:2},{value:"Interface 9",id:"interface-9",level:2},{value:"Interface 10",id:"interface-10",level:2},{value:"Interface 11",id:"interface-11",level:2},{value:"Interface 12",id:"interface-12",level:2},{value:"Interface 13",id:"interface-13",level:2},{value:"Interface 14",id:"interface-14",level:2},{value:"Interface 15",id:"interface-15",level:2},{value:"Interface 16",id:"interface-16",level:2},{value:"Interface 17",id:"interface-17",level:2},{value:"Interface 18",id:"interface-18",level:2},{value:"Interface 19",id:"interface-19",level:2}];function r(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"set",children:"Set"}),"\n",(0,i.jsx)(n.p,{children:"Set the entries of BlockNodeField."}),"\n",(0,i.jsx)(n.p,{children:"Calling example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Set(obj, value, scale, addcontribution)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Set(obj, value(:), scale, addcontribution)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Set(obj, globalnode, value, ivar, idof, scale, addcontribution)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Set(obj, globalnode(:), value, ivar, scale, addcontribution)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Set(obj, globalnode(:), value(:), ivar, scale, addcontribution)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Set(obj, globalnode(:), value, ivar, idof, scale, addcontribution)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Set(obj, globalnode(:), value(:), ivar, idof, scale, addcontribution)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Set(obj, globalnode(:), value, ivar, spacecompo, timecompo, scale, addcontribution)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Set(obj, globalnode(:), value(:), ivar, spacecompo, timecompo, scale, addcontribution)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Set(obj, globalnode(:), value, ivar, spacecompo, timecompo(:), scale, addcontribution)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Set(obj, globalnode(:), value(:), ivar, spacecompo, timecompo(:), scale, addcontribution)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Set(obj, globalnode(:), value, ivar, spacecompo(:), timecompo, scale, addcontribution)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Set(obj, globalnode(:), value(:), ivar, spacecompo(:), timecompo, scale, addcontribution)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Set(obj, globalnode, value, ivar, spacecompo, timecompo, scale, addcontribution)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Set(obj, globalnode, value, ivar, spacecompo, timecompo(:), scale, addcontribution)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Set(obj, globalnode, value, ivar, spacecompo(:), timecompo, scale, addcontribution)"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE set1(obj, VALUE, scale, addContribution)\n    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(IN) :: VALUE\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set1\nEND INTERFACE\n"})}),"\n",(0,i.jsx)(n.p,{children:"Set all values to scalar."}),"\n",(0,i.jsx)(n.p,{children:"Example 3"}),"\n",(0,i.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE set2(obj, VALUE, scale, addContribution)\n    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(IN) :: VALUE(:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set2\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This routine sets all values to ",(0,i.jsx)(n.code,{children:"value"})]}),"\n",(0,i.jsxs)(n.li,{children:["The size of ",(0,i.jsx)(n.code,{children:"value"})," should be same ",(0,i.jsx)(n.code,{children:"obj%size()"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example 4"}),"\n",(0,i.jsx)(n.h2,{id:"interface-3",children:"Interface 3"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE set3(obj, globalNode, VALUE, ivar, idof, &\n    & scale, addContribution)\n    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    REAL(DFP), INTENT(IN) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: idof\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set3\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This routine sets a single entry"}),"\n",(0,i.jsxs)(n.li,{children:["The entry is selected by ",(0,i.jsx)(n.code,{children:"ivar"}),", ",(0,i.jsx)(n.code,{children:"idof"})," and ",(0,i.jsx)(n.code,{children:"globalNode"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example 2."}),"\n",(0,i.jsx)(n.h2,{id:"interface-4",children:"Interface 4"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE set4(obj, globalNode, VALUE, ivar, scale, &\n    & addContribution)\n    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    REAL(DFP), INTENT(IN) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: ivar\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set4\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Set multiple entries to a constance scalar value."}),"\n",(0,i.jsxs)(n.li,{children:["The entry is selected by ",(0,i.jsx)(n.code,{children:"ivar"})," and ",(0,i.jsx)(n.code,{children:"globalNode"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example 5."}),"\n",(0,i.jsx)(n.h2,{id:"interface-5",children:"Interface 5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE set5(obj, globalNode, VALUE, ivar, scale, &\n    & addContribution)\n    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    REAL(DFP), INTENT(IN) :: VALUE(:)\n    INTEGER(I4B), INTENT(IN) :: ivar\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set5\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set multiple entries by using ",(0,i.jsx)(n.code,{children:"value"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The size of value should be equal to the size of globalNode times total number of degrees of freedom in ",(0,i.jsx)(n.code,{children:"ivar"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The entry is selected by ",(0,i.jsx)(n.code,{children:"ivar"})," and ",(0,i.jsx)(n.code,{children:"globalNode"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The storage format in ",(0,i.jsx)(n.code,{children:"value"})," should be ",(0,i.jsx)(n.code,{children:"FMT_DOF"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"Example 6."}),"\n",(0,i.jsx)(n.h2,{id:"interface-6",children:"Interface 6"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE set6(obj, globalNode, VALUE, ivar, idof, &\n    & scale, addContribution)\n    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    REAL(DFP), INTENT(IN) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: idof\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set6\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Set multiple entries to scalar value."}),"\n",(0,i.jsxs)(n.li,{children:["The entry is selected by ",(0,i.jsx)(n.code,{children:"ivar"}),", ",(0,i.jsx)(n.code,{children:"idof"})," and ",(0,i.jsx)(n.code,{children:"globalNode"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example 7."}),"\n",(0,i.jsx)(n.h2,{id:"interface-7",children:"Interface 7"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE set7(obj, globalNode, VALUE, ivar, idof, &\n    & scale, addContribution)\n    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    REAL(DFP), INTENT(IN) :: VALUE(:)\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: idof\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set7\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set multiple entries by using ",(0,i.jsx)(n.code,{children:"value"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"The size of value should be equal to the size of globalNode."}),"\n",(0,i.jsxs)(n.li,{children:["The entry is selected by ",(0,i.jsx)(n.code,{children:"ivar"}),", ",(0,i.jsx)(n.code,{children:"idof"})," and ",(0,i.jsx)(n.code,{children:"globalNode"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example 8."}),"\n",(0,i.jsx)(n.h2,{id:"interface-8",children:"Interface 8"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE set8(obj, globalNode, VALUE, ivar, &\n    & spaceCompo, timeCompo, scale, addContribution)\n    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    REAL(DFP), INTENT(IN) :: VALUE(:)\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spaceCompo\n    INTEGER(I4B), INTENT(IN) :: timeCompo\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set8\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set multiple entries by using ",(0,i.jsx)(n.code,{children:"value"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"The size of value should be equal to the size of globalNode."}),"\n",(0,i.jsxs)(n.li,{children:["The entry is selected by ",(0,i.jsx)(n.code,{children:"ivar"}),", ",(0,i.jsx)(n.code,{children:"spaceCompo"}),", ",(0,i.jsx)(n.code,{children:"timeCompo"})," and ",(0,i.jsx)(n.code,{children:"globalNode"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example 9."}),"\n",(0,i.jsx)(n.h2,{id:"interface-9",children:"Interface 9"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE set9(obj, globalNode, VALUE, ivar, &\n    & spaceCompo, timeCompo, scale, addContribution)\n    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    REAL(DFP), INTENT(IN) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spaceCompo\n    INTEGER(I4B), INTENT(IN) :: timeCompo\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set9\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Set multiple entries to a constant scalar value."}),"\n",(0,i.jsx)(n.li,{children:"The size of value should be equal to the size of globalNode."}),"\n",(0,i.jsxs)(n.li,{children:["The entry is selected by ",(0,i.jsx)(n.code,{children:"ivar"}),", ",(0,i.jsx)(n.code,{children:"spaceCompo"}),", ",(0,i.jsx)(n.code,{children:"timeCompo"})," and ",(0,i.jsx)(n.code,{children:"globalNode"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example 10."}),"\n",(0,i.jsx)(n.h2,{id:"interface-10",children:"Interface 10"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE set10(obj, globalNode, VALUE, ivar, &\n    & spaceCompo, timeCompo, scale, addContribution)\n    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    REAL(DFP), INTENT(IN) :: VALUE(:)\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spaceCompo\n    INTEGER(I4B), INTENT(IN) :: timeCompo(:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set10\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Set multiple entries."}),"\n",(0,i.jsx)(n.li,{children:"The size of value should be the same as the size of globalnode times the size of timecompo."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example 11."}),"\n",(0,i.jsx)(n.h2,{id:"interface-11",children:"Interface 11"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE set11(obj, globalNode, VALUE, ivar, &\n    & spaceCompo, timeCompo, scale, addContribution)\n    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    REAL(DFP), INTENT(IN) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spaceCompo\n    INTEGER(I4B), INTENT(IN) :: timeCompo(:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set11\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Set multiple entries to a constant value."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example 12."}),"\n",(0,i.jsx)(n.h2,{id:"interface-12",children:"Interface 12"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE set12(obj, globalNode, VALUE, ivar, &\n    & spaceCompo, timeCompo, scale, addContribution)\n    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    REAL(DFP), INTENT(IN) :: VALUE(:)\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spaceCompo(:)\n    INTEGER(I4B), INTENT(IN) :: timeCompo\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set12\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Set multiple entries by using value."}),"\n",(0,i.jsx)(n.li,{children:"The size of value should be the same as the size of globalnode times the size of spacecompo."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example 13."}),"\n",(0,i.jsx)(n.h2,{id:"interface-13",children:"Interface 13"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE set13(obj, globalNode, VALUE, ivar, &\n    & spaceCompo, timeCompo, scale, addContribution)\n    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    REAL(DFP), INTENT(IN) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spaceCompo(:)\n    INTEGER(I4B), INTENT(IN) :: timeCompo\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set13\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Set multiple entries to a constant value."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example 14."}),"\n",(0,i.jsx)(n.h2,{id:"interface-14",children:"Interface 14"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE set14(obj, globalNode, VALUE, ivar, &\n    & spaceCompo, timeCompo, scale, addContribution)\n    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    REAL(DFP), INTENT(IN) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spaceCompo\n    INTEGER(I4B), INTENT(IN) :: timeCompo\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set14\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Set a single entry."}),"\n",(0,i.jsxs)(n.li,{children:["The entry is slected by ",(0,i.jsx)(n.code,{children:"ivar"}),", ",(0,i.jsx)(n.code,{children:"spacecompo"}),", ",(0,i.jsx)(n.code,{children:"timeCompo"}),", and ",(0,i.jsx)(n.code,{children:"globalNode"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example 15."}),"\n",(0,i.jsx)(n.h2,{id:"interface-15",children:"Interface 15"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE set15(obj, globalNode, VALUE, ivar, &\n    & spaceCompo, timeCompo, scale, addContribution)\n    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    REAL(DFP), INTENT(IN) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spaceCompo\n    INTEGER(I4B), INTENT(IN) :: timeCompo(:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set15\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Set a single entry."}),"\n",(0,i.jsxs)(n.li,{children:["The entry is slected by ",(0,i.jsx)(n.code,{children:"ivar"}),", ",(0,i.jsx)(n.code,{children:"spacecompo"}),", ",(0,i.jsx)(n.code,{children:"timeCompo"}),", and ",(0,i.jsx)(n.code,{children:"globalNode"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example 16."}),"\n",(0,i.jsx)(n.h2,{id:"interface-16",children:"Interface 16"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE set16(obj, globalNode, VALUE, ivar, &\n    & spaceCompo, timeCompo, scale, addContribution)\n    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    REAL(DFP), INTENT(IN) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spaceCompo(:)\n    INTEGER(I4B), INTENT(IN) :: timeCompo\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set16\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Set a single entry."}),"\n",(0,i.jsxs)(n.li,{children:["The entry is slected by ",(0,i.jsx)(n.code,{children:"ivar"}),", ",(0,i.jsx)(n.code,{children:"spacecompo"}),", ",(0,i.jsx)(n.code,{children:"timeCompo"}),", and ",(0,i.jsx)(n.code,{children:"globalNode"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example 17."}),"\n",(0,i.jsx)(n.h2,{id:"interface-17",children:"Interface 17"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE set17(obj, obj2, scale, addContribution)\n    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj\n    CLASS(BlockNodeFieldLis_), INTENT(IN) :: obj2\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set17\nEND INTERFACE\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example 18"}),"\n",(0,i.jsx)(n.h2,{id:"interface-18",children:"Interface 18"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE bnField_set18(obj, ivar, idof, VALUE, ivar_value, &\n    & idof_value, scale, addContribution)\n    CLASS(BlockNodeField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: idof\n    CLASS(AbstractNodeField_), INTENT(IN) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: ivar_value\n    INTEGER(I4B), INTENT(IN) :: idof_value\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE bnField_set18\nEND INTERFACE\n"})}),"\n",(0,i.jsx)(n.h2,{id:"interface-19",children:"Interface 19"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE assign(obj, VALUE)\n    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(IN) :: VALUE\n  END SUBROUTINE assign\nEND INTERFACE\n"})})]})}function I(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},11151:(e,n,l)=>{l.d(n,{Z:()=>a,a:()=>d});var i=l(67294);const o={},N=i.createContext(o);function d(e){const n=i.useContext(N);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(N.Provider,{value:n},e.children)}}}]);