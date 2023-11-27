"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[12306],{39028:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>T,frontMatter:()=>c,metadata:()=>N,toc:()=>I});var t=a(85893),l=a(11151),r=a(74866),s=a(85162);function o(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["In this example we test the ",(0,t.jsx)(n.a,{href:"/docs-api/VectorFieldLis/Set",children:"Set"})," method."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  TYPE( Domain_ ) :: dom\n  TYPE( VectorFieldLis_ ) :: obj\n  TYPE( HDF5File_ ) :: meshfile\n  TYPE( ParameterList_ ) :: param\n  INTEGER( I4B ) :: ierr\n  INTEGER( I4B ), PARAMETER :: spaceCompo=2_I4B\n  CHARACTER(*), PARAMETER :: engine = "LIS_OMP"\n  REAL( DFP ), allocatable :: value(:)\n\n  ! import domain\n  CALL meshfile%initiate( filename="./mesh.h5", mode="READ" )\n  CALL meshfile%open()\n  CALL dom%initiate( hdf5=meshfile, group="" )\n  CALL meshfile%Deallocate()\n\n\n  ! set parameters for VectorField_\n  CALL FPL_INIT()\n  CALL param%initiate()\n  CALL SetVectorFieldParam( param=param, &\n    & fieldType=FIELD_TYPE_NORMAL, &\n    & name="U", &\n    & engine=engine, &\n    & spaceCompo=spaceCompo)\n\n  CALL obj%initiate( param, dom )\n  !! set a single entry\n  CALL Reallocate(value, spaceCompo)\n  CALL Random_number(value)\n  CALL Display(value, "value = ")\n  CALL obj%set(value=value, globalNode=1)\n  CALL obj%set(value=value, globalNode=2)\n  CALL obj%set(value=value, globalNode=3)\n  CALL obj%Display("obj = ")\n\n  CALL obj%Deallocate(); CALL dom%Deallocate()\n  CALL param%Deallocate(); CALL FPL_FINALIZE()\nEND PROGRAM main\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",metastring:'title="Results"',children:"value = \n--------\n0.574890\n0.598815\n\n# VAR :U\n DOF-1 ,   DOF-2 ,   \n-------,  -------,   \n0.57489,  0.59881,   \n0.57489,  0.59881,   \n0.57489,  0.59881,   \n"})})]})}function i(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}const c={},d="Set",N={id:"VectorFieldLis/Set",title:"Set",description:"Set entries in vector field.",source:"@site/docs/docs-api/VectorFieldLis/Set.md",sourceDirName:"VectorFieldLis",slug:"/VectorFieldLis/Set",permalink:"/docs-api/VectorFieldLis/Set",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/VectorFieldLis/Set.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Norm2",permalink:"/docs-api/VectorFieldLis/Norm2"},next:{title:"SetVectorFieldParam",permalink:"/docs-api/VectorFieldLis/SetVectorFieldParam"}},u={},I=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"Interface 3",id:"interface-3",level:2},{value:"Interface 4",id:"interface-4",level:2},{value:"Interface 5",id:"interface-5",level:2},{value:"Interface 6",id:"interface-6",level:2},{value:"Interface 7",id:"interface-7",level:2},{value:"Interface 8",id:"interface-8",level:2},{value:"Interface 9",id:"interface-9",level:2},{value:"Interface 10",id:"interface-10",level:2},{value:"Interface 11",id:"interface-11",level:2},{value:"Interface 12",id:"interface-12",level:2},{value:"Interface 13",id:"interface-13",level:2},{value:"Interface 14",id:"interface-14",level:2}];function E(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"set",children:"Set"}),"\n",(0,t.jsx)(n.p,{children:"Set entries in vector field."}),"\n",(0,t.jsx)(n.p,{children:"Calling example:"}),"\n","\n","\n",(0,t.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsxs)(s.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:" INTERFACE\n  MODULE SUBROUTINE set1(obj, globalNode, VALUE, &\n    & scale, addContribution)\n    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    REAL(DFP), INTENT(IN) :: VALUE(:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set1\nEND INTERFACE\n"})}),(0,t.jsx)(n.p,{children:"This routine sets the single entry of the vector field."}),(0,t.jsxs)(n.p,{children:["Here, ",(0,t.jsx)(n.code,{children:"value"})," should be a vector representing the components of a vector."]}),(0,t.jsxs)(n.p,{children:["The size of ",(0,t.jsx)(n.code,{children:"value"})," should be same as ",(0,t.jsx)(n.code,{children:"obj%spaceCompo"}),"."]}),(0,t.jsx)(n.p,{children:"In simple words it does following."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"vector( 1:spaceCompo, globalNode ) = value( 1:spaceCompo )\n"})})]}),(0,t.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(i,{})}),(0,t.jsx)(s.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,t.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE set2(obj, VALUE, scale, addContribution)\n    CLASS(VectorFieldLis_), TARGET, INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(IN) :: VALUE(:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set2\nEND INTERFACE\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This method sets all the nodal values to ",(0,t.jsx)(n.code,{children:"value"})]}),"\n",(0,t.jsxs)(n.li,{children:["The size of value should be same as the ",(0,t.jsx)(n.code,{children:"obj%spaceCompo"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"vector( 1:spaceCompo, i ) = value( 1:spaceCompo ), for i = 1, tNodes\n"})}),"\n",(0,t.jsx)(n.h2,{id:"interface-3",children:"Interface 3"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:" INTERFACE\n MODULE SUBROUTINE set3(obj, VALUE, spaceCompo, scale, addContribution)\n    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(IN) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: spaceCompo\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set3\nEND INTERFACE\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This routine sets all values of ",(0,t.jsx)(n.code,{children:"spaceCompo"})," component of the vector field to a given scalar value ",(0,t.jsx)(n.code,{children:"value"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"vector( spaceCompo, i ) = value, for i = 1, tNodes\n"})}),"\n",(0,t.jsx)(n.h2,{id:"interface-4",children:"Interface 4"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:" INTERFACE\n  MODULE SUBROUTINE set4(obj, VALUE, scale, addContribution)\n    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(IN) :: VALUE(:, :)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set4\nEND INTERFACE\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This routine set all entries of vector field to given vector"}),"\n",(0,t.jsxs)(n.li,{children:["Here shape of should be ",(0,t.jsx)(n.code,{children:"value(1:spaceCompo, tNodes)"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"vector( :, : ) = value( :, : )\n"})}),"\n",(0,t.jsx)(n.h2,{id:"interface-5",children:"Interface 5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:" INTERFACE\n MODULE SUBROUTINE set5(obj, VALUE, spaceCompo, scale, addContribution)\n    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(IN) :: VALUE(:)\n    INTEGER(I4B), INTENT(IN) :: spaceCompo\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set5\nEND INTERFACE\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This routine sets all entries of the component ",(0,t.jsx)(n.code,{children:"spaceCompo"})," of VectorFieldLis to a given fortran vector ",(0,t.jsx)(n.code,{children:"value"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"vector( spaceCompo, : ) = value( : )\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The size of ",(0,t.jsx)(n.code,{children:"value"})," should be equal to the tNodes."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"interface-6",children:"Interface 6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n MODULE SUBROUTINE set6(obj, VALUE, spaceCompo, scale, addContribution)\n    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj\n    TYPE(ScalarField_), INTENT(IN) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: spaceCompo\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set6\nEND INTERFACE\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This routine sets all entries of the component ",(0,t.jsx)(n.code,{children:"spaceCompo"})," of VectorFieldLis to a given ScalarField ",(0,t.jsx)(n.code,{children:"value"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"vector( spaceCompo, : ) = value\n"})}),"\n",(0,t.jsx)(n.h2,{id:"interface-7",children:"Interface 7"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n MODULE SUBROUTINE set7(obj, VALUE, globalNode, scale, addContribution)\n    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    REAL(DFP), INTENT(IN) :: VALUE(:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set7\nEND INTERFACE\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This soubroutine sets the selected enties to a vector entry ",(0,t.jsx)(n.code,{children:"value( : )"})]}),"\n",(0,t.jsxs)(n.li,{children:["Size of ",(0,t.jsx)(n.code,{children:"value"})," should be equal to the ",(0,t.jsx)(n.code,{children:"obj%spaceCompo"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"Effectively it does the following:\nvector( :, globalNode ) = value( : ), for entries in global nodes\n"})}),"\n",(0,t.jsx)(n.h2,{id:"interface-8",children:"Interface 8"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE set8(obj, globalNode, VALUE, scale, &\n    & addContribution)\n    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    REAL(DFP), INTENT(IN) :: VALUE(:, :)\n  !! value is in value(i,J) format.\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set8\nEND INTERFACE\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This routine sets the selected entries."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:" vector( :, globalNode ) = value( :, : )\n"})}),"\n",(0,t.jsx)(n.h2,{id:"interface-9",children:"Interface 9"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:" INTERFACE\n  MODULE SUBROUTINE set9(obj, VALUE, globalNode, spaceCompo, scale, &\n    & addContribution)\n    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(IN) :: VALUE(:)\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    INTEGER(I4B), INTENT(IN) :: spaceCompo\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set9\nEND INTERFACE\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This routine sets the multiple values"}),"\n",(0,t.jsxs)(n.li,{children:["Size of ",(0,t.jsx)(n.code,{children:"value"})," should be equal to size of ",(0,t.jsx)(n.code,{children:"globalNode"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"vector( spaceCompo, globalNode ) = value( : )\n"})}),"\n",(0,t.jsx)(n.h2,{id:"interface-10",children:"Interface 10"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:" INTERFACE\n  MODULE SUBROUTINE set10(obj, VALUE, globalNode, spaceCompo, scale, &\n    & addContribution)\n    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(IN) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: spaceCompo\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set10\nEND INTERFACE\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This routine sets a single entry"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"interface-11",children:"Interface 11"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:" INTERFACE\n  MODULE SUBROUTINE set13(obj, VALUE, globalNode, scale, &\n    & addContribution)\n    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj\n    TYPE(FEVariable_), INTENT(IN) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set13\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sets the multiple values using FEVariable."}),"\n",(0,t.jsx)(n.h2,{id:"interface-12",children:"Interface 12"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE set12(obj, VALUE, istart, iend, stride, scale, &\n    & addContribution)\n    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(IN) :: VALUE(:, :)\n    INTEGER(I4B), INTENT(IN) :: istart\n    INTEGER(I4B), INTENT(IN) :: iend\n    INTEGER(I4B), INTENT(IN) :: stride\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set12\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(n.h2,{id:"interface-13",children:"Interface 13"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:" INTERFACE\n  MODULE SUBROUTINE set13(obj, VALUE, globalNode, scale, &\n    & addContribution)\n    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj\n    TYPE(FEVariable_), INTENT(IN) :: VALUE\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set13\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(n.h2,{id:"interface-14",children:"Interface 14"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:" INTERFACE\n  MODULE SUBROUTINE set14(obj, VALUE, scale, addContribution)\n    CLASS(VectorFieldLis_), INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(IN) :: VALUE\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scale\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution\n  END SUBROUTINE set14\nEND INTERFACE\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sets all values"}),"\n"]})]})}function T(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(E,{...e})}):E(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>s});a(67294);var t=a(86010);const l={tabItem:"tabItem_Ymn6"};var r=a(85893);function s(e){let{children:n,hidden:a,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(l.tabItem,s),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>A});var t=a(67294),l=a(86010),r=a(12466),s=a(16550),o=a(20469),i=a(91980),c=a(67392),d=a(50012);function N(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return N(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:l}}=e;return{value:n,label:a,attributes:t,default:l}}))}(a);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function I(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function E(e){let{queryString:n=!1,groupId:a}=e;const l=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,i._X)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(l.location.search);n.set(r,e),l.replace({...l.location,search:n.toString()})}),[r,l])]}function T(e){const{defaultValue:n,queryString:a=!1,groupId:l}=e,r=u(e),[s,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!I({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[c,N]=E({queryString:a,groupId:l}),[T,h]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,r]=(0,d.Nk)(a);return[l,(0,t.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:l}),L=(()=>{const e=c??T;return I({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{L&&i(L)}),[L]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!I({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),N(e),h(e)}),[N,h,r]),tabValues:r}}var h=a(72389);const L={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var p=a(85893);function f(e){let{className:n,block:a,selectedValue:t,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const n=e.currentTarget,a=i.indexOf(n),l=o[a].value;l!==t&&(c(n),s(l))},N=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;n=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;n=i[a]??i[i.length-1];break}}n?.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,p.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:N,onClick:d,...r,className:(0,l.Z)("tabs__item",L.tabItem,r?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:l}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function m(e){const n=T(e);return(0,p.jsxs)("div",{className:(0,l.Z)("tabs-container",L.tabList),children:[(0,p.jsx)(f,{...e,...n}),(0,p.jsx)(j,{...e,...n})]})}function A(e){const n=(0,h.Z)();return(0,p.jsx)(m,{...e,children:N(e.children)},String(n))}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>s});var t=a(67294);const l={},r=t.createContext(l);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);