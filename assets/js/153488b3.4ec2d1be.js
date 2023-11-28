"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[64203],{36577:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>N,frontMatter:()=>t,metadata:()=>a,toc:()=>u});var r=l(85893),i=l(11151),o=l(74866),s=l(85162);const t={},d="GetRow",a={id:"MatrixField/GetRow",title:"GetRow",description:"Calling example:",source:"@site/docs/docs-api/MatrixField/GetRow.md",sourceDirName:"MatrixField",slug:"/MatrixField/GetRow",permalink:"/docs-api/MatrixField/GetRow",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/MatrixField/GetRow.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetPrecondition",permalink:"/docs-api/MatrixField/GetPrecondition"},next:{title:"ILUSolve",permalink:"/docs-api/MatrixField/ILUSolve"}},c={},u=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"Interface 3",id:"interface-3",level:2},{value:"Interface 4",id:"interface-4",level:2},{value:"Interface 5",id:"interface-5",level:2},{value:"Interface 6",id:"interface-6",level:2},{value:"Interface 7",id:"interface-7",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"getrow",children:"GetRow"}),"\n",(0,r.jsx)(n.p,{children:"Calling example:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"GetRow(obj, globalnode, idof, value(:), nodefieldval, scale, addcontribution"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"GetRow(obj, globalnode, ivar, idof, value(:), nodefieldval, scale, addcontribution"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"GetRow(obj, globalnode, ivar, spacecompo, timecompo, value(:), nodefieldval, scale, addcontribution"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"GetRow(obj, globalnode, ivar, spacecompo, timecompo(:), value(:), nodefieldval, scale, addcontribution"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"GetRow(obj, globalnode, ivar, spacecompo(:), timecompo, value(:), nodefieldval, scale, addcontribution"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"GetRow(obj, globalnode(:), ivar, spacecompo, timecompo(:), value(:), nodefieldval, scale, addcontribution"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"GetRow(obj, globalnode(:), ivar, spacecompo(:), timecompo, value(:), nodefieldval, scale, addcontribution"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n","\n","\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(s.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE getRow1(obj, globalNode, idof, VALUE, nodeFieldVal, &\n    & scale, addContribution)\n    CLASS(MatrixField_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: idof\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE getRow1\nEND INTERFACE\n"})}),(0,r.jsxs)(n.p,{children:["This routine returns the row of a sparse matrix. The row index is\ncalculated using the ",(0,r.jsx)(n.code,{children:"globalNode"})," and ",(0,r.jsx)(n.code,{children:"idof"}),"."]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"globalNode"})," is the global node number of mesh"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"idof"})," is the degree of freedom number"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"value"})," is present then the vector is returned inside the rank 1 vector"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"nodeFieldVal"})," is present then the row is returned inside the\nnode field"]}),"\n"]}),"\n"]})]}),(0,r.jsx)(s.Z,{value:"close",label:"\u21a2",default:!0})]}),"\n",(0,r.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(s.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE getRow2(obj, globalNode, ivar, idof, VALUE, &\n    & nodeFieldVal, scale, addContribution)\n    CLASS(MatrixField_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: idof\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE getRow2\nEND INTERFACE\n"})}),(0,r.jsxs)(n.p,{children:["This routine returns the row of a sparse matrix. The row index is\ncalculated using the ",(0,r.jsx)(n.code,{children:"globalNode"}),", ",(0,r.jsx)(n.code,{children:"idof"}),", and ",(0,r.jsx)(n.code,{children:"ivar"}),"."]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"globalNode"})," is the global node number of mesh"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"idof"})," is the degree of freedom number"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"value"})," is present then the vector is returned inside the rank 1 vector"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"nodeFieldVal"})," is present then the row is returned inside the\nnode field"]}),"\n"]}),"\n"]})]}),(0,r.jsx)(s.Z,{value:"close",label:"\u21a2",default:!0})]}),"\n",(0,r.jsx)(n.h2,{id:"interface-3",children:"Interface 3"}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(s.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE getRow3(obj, globalNode, ivar, spacecompo, timecompo, &\n    & VALUE, nodeFieldVal, scale, addContribution)\n    CLASS(MatrixField_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo\n    INTEGER(I4B), INTENT(IN) :: timecompo\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE getRow3\nEND INTERFACE\n"})}),(0,r.jsxs)(n.p,{children:["This routine returns the row of a sparse matrix. The row index is\ncalculated using the (",(0,r.jsx)(n.code,{children:"globalNode"}),", ",(0,r.jsx)(n.code,{children:"ivar"}),", ",(0,r.jsx)(n.code,{children:"spacecompo"}),", ",(0,r.jsx)(n.code,{children:"timecompo"}),")."]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"globalNode"})," is the global node number of mesh"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"idof"})," is the degree of freedom number"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"value"})," is present then the vector is returned inside the rank 1 vector"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"nodeFieldVal"})," is present then the row is returned inside the\nnode field"]}),"\n"]}),"\n"]})]}),(0,r.jsx)(s.Z,{value:"close",label:"\u21a2",default:!0})]}),"\n",(0,r.jsx)(n.h2,{id:"interface-4",children:"Interface 4"}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(s.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE getRow4(obj, globalNode, ivar, spacecompo, timecompo, &\n    & VALUE, nodeFieldVal, scale, addContribution)\n    CLASS(MatrixField_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo\n    INTEGER(I4B), INTENT(IN) :: timecompo(:)\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE getRow4\nEND INTERFACE\n"})}),(0,r.jsxs)(n.p,{children:["This routine returns the row of a sparse matrix. The row index is\ncalculated using the (",(0,r.jsx)(n.code,{children:"globalNode"}),", ",(0,r.jsx)(n.code,{children:"ivar"}),", ",(0,r.jsx)(n.code,{children:"spacecompo"}),", ",(0,r.jsx)(n.code,{children:"timecompo"}),")."]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"globalNode"})," is the global node number of mesh"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"idof"})," is the degree of freedom number"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"value"})," is present then the vector is returned inside the rank 1 vector"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"nodeFieldVal"})," is present then the row is returned inside the\nnode field"]}),"\n"]}),"\n"]})]}),(0,r.jsx)(s.Z,{value:"close",label:"\u21a2",default:!0})]}),"\n",(0,r.jsx)(n.h2,{id:"interface-5",children:"Interface 5"}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(s.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE getRow5(obj, globalNode, ivar, spacecompo, timecompo, &\n    & VALUE, nodeFieldVal, scale, addContribution)\n    CLASS(MatrixField_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo(:)\n    INTEGER(I4B), INTENT(IN) :: timecompo\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE getRow5\nEND INTERFACE\n"})}),(0,r.jsxs)(n.p,{children:["This routine returns the row of a sparse matrix. The row index is\ncalculated using the (",(0,r.jsx)(n.code,{children:"globalNode"}),", ",(0,r.jsx)(n.code,{children:"ivar"}),", ",(0,r.jsx)(n.code,{children:"spacecompo"}),", ",(0,r.jsx)(n.code,{children:"timecompo"}),")."]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"globalNode"})," is the global node number of mesh"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"idof"})," is the degree of freedom number"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"value"})," is present then the vector is returned inside the rank 1 vector"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"nodeFieldVal"})," is present then the row is returned inside the\nnode field"]}),"\n"]}),"\n"]})]}),(0,r.jsx)(s.Z,{value:"close",label:"\u21a2",default:!0})]}),"\n",(0,r.jsx)(n.h2,{id:"interface-6",children:"Interface 6"}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(s.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE getRow6(obj, globalNode, ivar, spacecompo, timecompo, &\n    & VALUE, nodeFieldVal, scale, addContribution)\n    CLASS(MatrixField_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo\n    INTEGER(I4B), INTENT(IN) :: timecompo(:)\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE getRow6\nEND INTERFACE\n"})}),(0,r.jsxs)(n.p,{children:["This routine returns the row of a sparse matrix. The row index is\ncalculated using the (",(0,r.jsx)(n.code,{children:"globalNode"}),", ",(0,r.jsx)(n.code,{children:"ivar"}),", ",(0,r.jsx)(n.code,{children:"spacecompo"}),", ",(0,r.jsx)(n.code,{children:"timecompo"}),")."]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"globalNode"})," is the global node number of mesh"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"idof"})," is the degree of freedom number"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"value"})," is present then the vector is returned inside the rank 1 vector"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"nodeFieldVal"})," is present then the row is returned inside the\nnode field"]}),"\n"]}),"\n"]})]}),(0,r.jsx)(s.Z,{value:"close",label:"\u21a2",default:!0})]}),"\n",(0,r.jsx)(n.h2,{id:"interface-7",children:"Interface 7"}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(s.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE getRow7(obj, globalNode, ivar, spacecompo, timecompo, &\n    & VALUE, nodeFieldVal, scale, addContribution)\n    CLASS(MatrixField_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo(:)\n    INTEGER(I4B), INTENT(IN) :: timecompo\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE getRow7\nEND INTERFACE\n"})}),(0,r.jsxs)(n.p,{children:["This routine returns the row of a sparse matrix. The row index is\ncalculated using the (",(0,r.jsx)(n.code,{children:"globalNode"}),", ",(0,r.jsx)(n.code,{children:"ivar"}),", ",(0,r.jsx)(n.code,{children:"spacecompo"}),", ",(0,r.jsx)(n.code,{children:"timecompo"}),")."]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"globalNode"})," is the global node number of mesh"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"idof"})," is the degree of freedom number"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"value"})," is present then the vector is returned inside the rank 1 vector"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"nodeFieldVal"})," is present then the row is returned inside the\nnode field"]}),"\n"]}),"\n"]})]}),(0,r.jsx)(s.Z,{value:"close",label:"\u21a2",default:!0})]})]})}function N(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,l)=>{l.d(n,{Z:()=>s});l(67294);var r=l(86010);const i={tabItem:"tabItem_Ymn6"};var o=l(85893);function s(e){let{children:n,hidden:l,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,s),hidden:l,children:n})}},74866:(e,n,l)=>{l.d(n,{Z:()=>m});var r=l(67294),i=l(86010),o=l(12466),s=l(16550),t=l(20469),d=l(91980),a=l(67392),c=l(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:l}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:l,attributes:r,default:i}}=e;return{value:n,label:l,attributes:r,default:i}}))}(l);return function(e){const n=(0,a.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function N(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function I(e){let{queryString:n=!1,groupId:l}=e;const i=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,d._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(i.location.search);n.set(o,e),i.replace({...i.location,search:n.toString()})}),[o,i])]}function T(e){const{defaultValue:n,queryString:l=!1,groupId:i}=e,o=h(e),[s,d]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!N({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=l.find((e=>e.default))??l[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[a,u]=I({queryString:l,groupId:i}),[T,x]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,o]=(0,c.Nk)(l);return[i,(0,r.useCallback)((e=>{l&&o.set(e)}),[l,o])]}({groupId:i}),j=(()=>{const e=a??T;return N({value:e,tabValues:o})?e:null})();(0,t.Z)((()=>{j&&d(j)}),[j]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!N({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),x(e)}),[u,x,o]),tabValues:o}}var x=l(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=l(85893);function E(e){let{className:n,block:l,selectedValue:r,selectValue:s,tabValues:t}=e;const d=[],{blockElementScrollPositionUntilNextRender:a}=(0,o.o5)(),c=e=>{const n=e.currentTarget,l=d.indexOf(n),i=t[l].value;i!==r&&(a(n),s(i))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const l=d.indexOf(e.currentTarget)+1;n=d[l]??d[0];break}case"ArrowLeft":{const l=d.indexOf(e.currentTarget)-1;n=d[l]??d[d.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},n),children:t.map((e=>{let{value:n,label:l,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:u,onClick:c,...o,className:(0,i.Z)("tabs__item",j.tabItem,o?.className,{"tabs__item--active":r===n}),children:l??n},n)}))})}function p(e){let{lazy:n,children:l,selectedValue:i}=e;const o=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function b(e){const n=T(e);return(0,f.jsxs)("div",{className:(0,i.Z)("tabs-container",j.tabList),children:[(0,f.jsx)(E,{...e,...n}),(0,f.jsx)(p,{...e,...n})]})}function m(e){const n=(0,x.Z)();return(0,f.jsx)(b,{...e,children:u(e.children)},String(n))}},11151:(e,n,l)=>{l.d(n,{Z:()=>t,a:()=>s});var r=l(67294);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);