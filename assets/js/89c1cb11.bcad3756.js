"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[770],{50979:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>T,frontMatter:()=>a,metadata:()=>E,toc:()=>N});var t=o(85893),s=o(11151);const a={},r="Set",E={id:"DOF/Set",title:"Set",description:"Set the entries in vector of reals.",source:"@site/docs/docs-api/DOF/Set.md",sourceDirName:"DOF",slug:"/DOF/Set",permalink:"/docs-api/DOF/Set",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/DOF/Set.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Names",permalink:"/docs-api/DOF/Names"},next:{title:"SpaceComponents",permalink:"/docs-api/DOF/SpaceComponents"}},i={},N=[{value:"Interface",id:"interface",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"set",children:"Set"}),"\n",(0,t.jsx)(n.p,{children:"Set the entries in vector of reals."}),"\n",(0,t.jsx)(n.p,{children:"Calling example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Set(vec(:), obj, nodenum(:), value(:), conversion(1))"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Set(vec(:), obj, nodenum(:), value)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Set(vec(:), obj, nodenum(:), value(:), idof)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Set(vec(:), obj, nodenum(:), value(:), ivar, idof)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Set(vec(:), obj, nodenum(:), value(:), ivar, spacecompo, timecompo)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Set(vec(:), obj, nodenum(:), value(:), ivar, spacecompo, timecompo(:))"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Set(vec(:), obj, nodenum(:), value(:), ivar, spacecompo(:), timecompo)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Set(vec(:), obj, nodenum, value)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Set(vec(:), obj, nodenum, value, idof)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Set(vec(:), obj, nodenum, value, ivar, idof)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Set(vec(:), obj, nodenum, value, ivar, spacecompo, timecompo)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Set(vec(:), obj, nodenum, value, ivar, spacecompo, timecompo(:))"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Set(vec(:), obj, nodenum, value, ivar, spacecompo(:), timecompo)"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"!----------------------------------------------------------------------------\n!                                                             set@setMethod\n!----------------------------------------------------------------------------\n\n!> author: Vikas Sharma, Ph. D.\n! date: 26 June 2021\n! summary: Set values in a vector of real numbers\n!\n!# Introduction\n!\n! - This subroutine is designed to set the values in a vector of real number\n! - This subroutine effectivily performes `vec( nptrs ) = value`\n! - If `SIZE(value)==1` then all values are set to `value(1)`\n! - If `SIZE(value) .EQ. SIZE(nptrs)` then, each dof is set to value\n! - If `SIZE(value)=tDOF*Size(nptrs)` then each dof is set to appropriate\n! value from value\n\nINTERFACE\n  MODULE PURE SUBROUTINE dof_set1(vec, obj, nodenum, VALUE, conversion)\n    REAL(DFP), INTENT(INOUT) :: vec(:)\n    CLASS(DOF_), INTENT(IN) :: obj\n  !! `obj` contains the storage pattern of degrees of freedom\n  !! inside `vec`.\n  !! This storage pattern can be `FMT_Nodes` or `FMT_DOF`\n    INTEGER(I4B), INTENT(IN) :: nodenum(:)\n    INTEGER(I4B), INTENT(IN) :: conversion(1)\n  !! DOFToNodes\n  !! NodesTODOF\n  !! None\n    REAL(DFP), INTENT(IN) :: VALUE(:)\n  !! `value` denotes the nodal values of all dof defined inside `obj`.\n  !! The storage pattern in `value` can be `FMT_DOF` or `FMT_Nodes`.\n  END SUBROUTINE dof_set1\nEND INTERFACE\n\nINTERFACE set\n  MODULE PROCEDURE dof_set1\nEND INTERFACE set\n\n!----------------------------------------------------------------------------\n!                                                             set@setMethod\n!----------------------------------------------------------------------------\n\n!> author: Vikas Sharma, Ph. D.\n! date: 26 June 2021\n! summary: Set values in a vector of real numbers\n\nINTERFACE\n  MODULE PURE SUBROUTINE dof_set2(vec, obj, nodenum, VALUE)\n    REAL(DFP), INTENT(INOUT) :: vec(:)\n    CLASS(DOF_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: nodenum(:)\n    REAL(DFP), INTENT(IN) :: VALUE\n  END SUBROUTINE dof_set2\nEND INTERFACE\n\nINTERFACE set\n  MODULE PROCEDURE dof_set2\nEND INTERFACE set\n\n!----------------------------------------------------------------------------\n!                                                             set@setMethod\n!----------------------------------------------------------------------------\n\n!> author: Vikas Sharma, Ph. D.\n! date: 27 June 2021\n! summary: Set values in a vector of real numbers\n!\n!# Introduction\n!\n! - This subroutine is designed to set the values in a array of real number.\n! - This subroutine handles only those entries which belongs to the\n! dofno.\n! - This subroutine effectivily performes `vec( nptrs ) = value`\n! - If the size of value is not equal to 1, then the size of nptrs should be\n! same as the size of value\n!\n!@note\n! In [[DOF_]], dofno are continuously numbered, so if there are two\n! or more physical variables, then dofno of the second or later physical\n! variables will not start from 1.\n!@endnote\n\nINTERFACE\n  MODULE PURE SUBROUTINE dof_set3(vec, obj, nodenum, VALUE, idof)\n    REAL(DFP), INTENT(INOUT) :: vec(:)\n    CLASS(DOF_), INTENT(IN) :: obj\n  !! Object `obj` contains the storage pattern of degrees of freedom\n  !! inside `vec`.\n  !! This storage pattern can be `FMT_Nodes` or `FMT_DOF`\n    INTEGER(I4B), INTENT(IN) :: nodenum(:)\n  !! node number\n    REAL(DFP), INTENT(IN) :: VALUE(:)\n  !! `value` denotes the nodal values of dof `idof`.\n    INTEGER(I4B), INTENT(IN) :: idof\n  END SUBROUTINE dof_set3\nEND INTERFACE\n\nINTERFACE set\n  MODULE PROCEDURE dof_set3\nEND INTERFACE set\n\n!----------------------------------------------------------------------------\n!                                                             set@setMethod\n!----------------------------------------------------------------------------\n\n!> author: Vikas Sharma, Ph. D.\n! date: 27 June 2021\n! summary: Set values in a vector of real numbers\n\nINTERFACE\n  MODULE PURE SUBROUTINE dof_set4(vec, obj, nodenum, VALUE, ivar, idof)\n    REAL(DFP), INTENT(INOUT) :: vec(:)\n    CLASS(DOF_), INTENT(IN) :: obj\n  !! Object `obj` contains the storage pattern of degrees of freedom\n  !! inside `vec`.\n  !! This storage pattern can be `FMT_Nodes` or `FMT_DOF`\n    INTEGER(I4B), INTENT(IN) :: nodenum(:)\n  !! node number\n    REAL(DFP), INTENT(IN) :: VALUE(:)\n  !! `value` denotes the nodal values of dof `idof`.\n    INTEGER(I4B), INTENT(IN) :: ivar\n  !! physical variable\n    INTEGER(I4B), INTENT(IN) :: idof\n  END SUBROUTINE dof_set4\nEND INTERFACE\n\nINTERFACE set\n  MODULE PROCEDURE dof_set4\nEND INTERFACE set\n\n!----------------------------------------------------------------------------\n!                                                             set@setMethod\n!----------------------------------------------------------------------------\n\n!> author: Vikas Sharma, Ph. D.\n! date: 27 June 2021\n! summary: Set values in a vector of real numbers\n\nINTERFACE\n  MODULE PURE SUBROUTINE dof_set5(vec, obj, nodenum, VALUE, ivar, &\n      & spacecompo, timecompo)\n    REAL(DFP), INTENT(INOUT) :: vec(:)\n    CLASS(DOF_), INTENT(IN) :: obj\n  !! Object `obj` contains the storage pattern of degrees of freedom\n  !! inside `vec`.\n  !! This storage pattern can be `FMT_Nodes` or `FMT_DOF`\n    INTEGER(I4B), INTENT(IN) :: nodenum(:)\n  !! node number\n    REAL(DFP), INTENT(IN) :: VALUE(:)\n  !! `value` denotes the nodal values of dof `idof`.\n    INTEGER(I4B), INTENT(IN) :: ivar\n  !! physical variable\n    INTEGER(I4B), INTENT(IN) :: spacecompo\n    INTEGER(I4B), INTENT(IN) :: timecompo\n  END SUBROUTINE dof_set5\nEND INTERFACE\n\nINTERFACE set\n  MODULE PROCEDURE dof_set5\nEND INTERFACE set\n\n!----------------------------------------------------------------------------\n!                                                             set@setMethod\n!----------------------------------------------------------------------------\n\n!> author: Vikas Sharma, Ph. D.\n! date: 27 June 2021\n! summary: Set values in a vector of real numbers\n\nINTERFACE\n  MODULE PURE SUBROUTINE dof_set6(vec, obj, nodenum, VALUE, ivar, &\n      & spacecompo, timecompo)\n    REAL(DFP), INTENT(INOUT) :: vec(:)\n    CLASS(DOF_), INTENT(IN) :: obj\n  !! Object `obj` contains the storage pattern of degrees of freedom\n  !! inside `vec`.\n  !! This storage pattern can be `FMT_Nodes` or `FMT_DOF`\n    INTEGER(I4B), INTENT(IN) :: nodenum(:)\n  !! node number\n    REAL(DFP), INTENT(IN) :: VALUE(:)\n  !! `value` denotes the nodal values of dof `idof`.\n    INTEGER(I4B), INTENT(IN) :: ivar\n  !! physical variable\n    INTEGER(I4B), INTENT(IN) :: spacecompo\n    INTEGER(I4B), INTENT(IN) :: timecompo(:)\n  END SUBROUTINE dof_set6\nEND INTERFACE\n\nINTERFACE set\n  MODULE PROCEDURE dof_set6\nEND INTERFACE set\n\n!----------------------------------------------------------------------------\n!                                                             set@setMethod\n!----------------------------------------------------------------------------\n\n!> author: Vikas Sharma, Ph. D.\n! date: 27 June 2021\n! summary: Set values in a vector of real numbers\n\nINTERFACE\n  MODULE PURE SUBROUTINE dof_set7(vec, obj, nodenum, VALUE, ivar, &\n      & spacecompo, timecompo)\n    REAL(DFP), INTENT(INOUT) :: vec(:)\n    CLASS(DOF_), INTENT(IN) :: obj\n  !! Object `obj` contains the storage pattern of degrees of freedom\n  !! inside `vec`.\n  !! This storage pattern can be `FMT_Nodes` or `FMT_DOF`\n    INTEGER(I4B), INTENT(IN) :: nodenum(:)\n  !! node number\n    REAL(DFP), INTENT(IN) :: VALUE(:)\n  !! `value` denotes the nodal values of dof `idof`.\n    INTEGER(I4B), INTENT(IN) :: ivar\n  !! physical variable\n    INTEGER(I4B), INTENT(IN) :: spacecompo(:)\n    INTEGER(I4B), INTENT(IN) :: timecompo\n  END SUBROUTINE dof_set7\nEND INTERFACE\n\nINTERFACE set\n  MODULE PROCEDURE dof_set7\nEND INTERFACE set\n\n!----------------------------------------------------------------------------\n!                                                             set@setMethod\n!----------------------------------------------------------------------------\n\n!> author: Vikas Sharma, Ph. D.\n! date: 26 June 2021\n! summary: Set values in a vector of real numbers\n\nINTERFACE\n  MODULE PURE SUBROUTINE dof_set8(vec, obj, nodenum, VALUE)\n    REAL(DFP), INTENT(INOUT) :: vec(:)\n    CLASS(DOF_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: nodenum\n    REAL(DFP), INTENT(IN) :: VALUE\n  END SUBROUTINE dof_set8\nEND INTERFACE\n\nINTERFACE set\n  MODULE PROCEDURE dof_set8\nEND INTERFACE set\n\n!----------------------------------------------------------------------------\n!                                                             set@setMethod\n!----------------------------------------------------------------------------\n\n!> author: Vikas Sharma, Ph. D.\n! date: 27 June 2021\n! summary: Set values in a vector of real numbers\n!\n!# Introduction\n!\n! - This subroutine is designed to set the values in a array of real number.\n! - This subroutine handles only those entries which belongs to the\n! dofno.\n! - This subroutine effectivily performes `vec( nptrs ) = value`\n! - If the size of value is not equal to 1, then the size of nptrs should be\n! same as the size of value\n!\n!@note\n! In [[DOF_]], dofno are continuously numbered, so if there are two\n! or more physical variables, then dofno of the second or later physical\n! variables will not start from 1.\n!@endnote\n\nINTERFACE\n  MODULE PURE SUBROUTINE dof_set9(vec, obj, nodenum, VALUE, idof)\n    REAL(DFP), INTENT(INOUT) :: vec(:)\n    CLASS(DOF_), INTENT(IN) :: obj\n  !! Object `obj` contains the storage pattern of degrees of freedom\n  !! inside `vec`.\n  !! This storage pattern can be `FMT_Nodes` or `FMT_DOF`\n    INTEGER(I4B), INTENT(IN) :: nodenum\n  !! node number\n    REAL(DFP), INTENT(IN) :: VALUE\n  !! `value` denotes the nodal values of dof `idof`.\n    INTEGER(I4B), INTENT(IN) :: idof\n  END SUBROUTINE dof_set9\nEND INTERFACE\n\nINTERFACE set\n  MODULE PROCEDURE dof_set9\nEND INTERFACE set\n\n!----------------------------------------------------------------------------\n!                                                             set@setMethod\n!----------------------------------------------------------------------------\n\n!> author: Vikas Sharma, Ph. D.\n! date: 27 June 2021\n! summary: Set values in a vector of real numbers\n!\n!# Introduction\n!\n! - This subroutine is designed to set the values in a array of real number.\n! - This subroutine handles only those entries which belongs to the\n! dofno.\n! - This subroutine effectivily performes `vec( nptrs ) = value`\n! - If the size of value is not equal to 1, then the size of nptrs should be\n! same as the size of value\n!\n!@note\n! In [[DOF_]], dofno are continuously numbered, so if there are two\n! or more physical variables, then dofno of the second or later physical\n! variables will not start from 1.\n!@endnote\n\nINTERFACE\n  MODULE PURE SUBROUTINE dof_set10(vec, obj, nodenum, VALUE, ivar, idof)\n    REAL(DFP), INTENT(INOUT) :: vec(:)\n    CLASS(DOF_), INTENT(IN) :: obj\n  !! object `obj` contains the storage pattern of degrees of freedom\n  !! inside `vec`.\n  !! This storage pattern can be `FMT_Nodes` or `FMT_DOF`\n    INTEGER(I4B), INTENT(IN) :: nodenum\n  !! node number\n    REAL(DFP), INTENT(IN) :: VALUE\n  !! `value` denotes the nodal values of dof `idof`.\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: idof\n  END SUBROUTINE dof_set10\nEND INTERFACE\n\nINTERFACE set\n  MODULE PROCEDURE dof_set10\nEND INTERFACE set\n\n!----------------------------------------------------------------------------\n!                                                             set@setMethod\n!----------------------------------------------------------------------------\n\n!> author: Vikas Sharma, Ph. D.\n! date: 27 June 2021\n! summary: Set values in a vector of real numbers\n!\n!# Introduction\n!\n! - This subroutine is designed to set the values in a array of real number.\n! - This subroutine handles only those entries which belongs to the\n! dofno.\n! - This subroutine effectivily performes `vec( nptrs ) = value`\n! - If the size of value is not equal to 1, then the size of nptrs should be\n! same as the size of value\n!\n!@note\n! In [[DOF_]], dofno are continuously numbered, so if there are two\n! or more physical variables, then dofno of the second or later physical\n! variables will not start from 1.\n!@endnote\n\nINTERFACE\n  MODULE PURE SUBROUTINE dof_set11(vec, obj, nodenum, VALUE, ivar, &\n    & spacecompo, timecompo)\n    REAL(DFP), INTENT(INOUT) :: vec(:)\n    CLASS(DOF_), INTENT(IN) :: obj\n  !! object `obj` contains the storage pattern of degrees of freedom\n  !! inside `vec`.\n  !! This storage pattern can be `FMT_Nodes` or `FMT_DOF`\n    INTEGER(I4B), INTENT(IN) :: nodenum\n  !! node number\n    REAL(DFP), INTENT(IN) :: VALUE\n  !! `value` denotes the nodal values of dof `idof`.\n\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo\n    INTEGER(I4B), INTENT(IN) :: timecompo\n  END SUBROUTINE dof_set11\nEND INTERFACE\n\nINTERFACE set\n  MODULE PROCEDURE dof_set11\nEND INTERFACE set\n\n!----------------------------------------------------------------------------\n!                                                             set@setMethod\n!----------------------------------------------------------------------------\n\n!> author: Vikas Sharma, Ph. D.\n! date: 27 June 2021\n! summary: Set values in a vector of real numbers\n!\n!# Introduction\n!\n! - This subroutine is designed to set the values in a array of real number.\n! - This subroutine handles only those entries which belongs to the\n! dofno.\n! - This subroutine effectivily performes `vec( nptrs ) = value`\n! - If the size of value is not equal to 1, then the size of nptrs should be\n! same as the size of value\n!\n!@note\n! In [[DOF_]], dofno are continuously numbered, so if there are two\n! or more physical variables, then dofno of the second or later physical\n! variables will not start from 1.\n!@endnote\n\nINTERFACE\n  MODULE PURE SUBROUTINE dof_set12(vec, obj, nodenum, VALUE, ivar, &\n    & spacecompo, timecompo)\n    REAL(DFP), INTENT(INOUT) :: vec(:)\n    CLASS(DOF_), INTENT(IN) :: obj\n  !! object `obj` contains the storage pattern of degrees of freedom\n  !! inside `vec`.\n  !! This storage pattern can be `FMT_Nodes` or `FMT_DOF`\n    INTEGER(I4B), INTENT(IN) :: nodenum\n  !! node number\n    REAL(DFP), INTENT(IN) :: VALUE\n  !! `value` denotes the nodal values of dof `idof`.\n\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo\n    INTEGER(I4B), INTENT(IN) :: timecompo(:)\n  END SUBROUTINE dof_set12\nEND INTERFACE\n\nINTERFACE set\n  MODULE PROCEDURE dof_set12\nEND INTERFACE set\n\n!----------------------------------------------------------------------------\n!                                                             set@setMethod\n!----------------------------------------------------------------------------\n\n!> author: Vikas Sharma, Ph. D.\n! date: 27 June 2021\n! summary: Set values in a vector of real numbers\n!\n!# Introduction\n!\n! - This subroutine is designed to set the values in a array of real number.\n! - This subroutine handles only those entries which belongs to the\n! dofno.\n! - This subroutine effectivily performes `vec( nptrs ) = value`\n! - If the size of value is not equal to 1, then the size of nptrs should be\n! same as the size of value\n!\n!@note\n! In [[DOF_]], dofno are continuously numbered, so if there are two\n! or more physical variables, then dofno of the second or later physical\n! variables will not start from 1.\n!@endnote\n\nINTERFACE\n  MODULE PURE SUBROUTINE dof_set13(vec, obj, nodenum, VALUE, ivar, &\n    & spacecompo, timecompo)\n    REAL(DFP), INTENT(INOUT) :: vec(:)\n    CLASS(DOF_), INTENT(IN) :: obj\n  !! object `obj` contains the storage pattern of degrees of freedom\n  !! inside `vec`.\n  !! This storage pattern can be `FMT_Nodes` or `FMT_DOF`\n    INTEGER(I4B), INTENT(IN) :: nodenum\n  !! node number\n    REAL(DFP), INTENT(IN) :: VALUE\n  !! `value` denotes the nodal values of dof `idof`.\n\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo(:)\n    INTEGER(I4B), INTENT(IN) :: timecompo\n  END SUBROUTINE dof_set13\nEND INTERFACE\n\nINTERFACE set\n  MODULE PROCEDURE dof_set13\nEND INTERFACE set\n"})})]})}function T(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>E,a:()=>r});var t=o(67294);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function E(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);