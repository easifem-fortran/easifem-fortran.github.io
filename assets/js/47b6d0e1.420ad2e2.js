"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[75461],{60475:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var a=r(85893),t=r(11151),i=r(74866),o=r(85162),s=r(78698);const l={},c="AddPressureDirichletBC",d={id:"SteadyStokes111/AddPressureDirichletBC",title:"AddPressureDirichletBC",description:"This routine sets the Dirichlet boundary condition for pressure field in AbstractSteadyStokes kernel.",source:"@site/docs/docs-api/SteadyStokes111/AddPressureDirichletBC.md",sourceDirName:"SteadyStokes111",slug:"/SteadyStokes111/AddPressureDirichletBC",permalink:"/docs-api/SteadyStokes111/AddPressureDirichletBC",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/SteadyStokes111/AddPressureDirichletBC.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AddFluidMaterial",permalink:"/docs-api/SteadyStokes111/AddFluidMaterial"},next:{title:"AddPressureNeumannBC",permalink:"/docs-api/SteadyStokes111/AddPressureNeumannBC"}},u={},h=[{value:"Interface",id:"interface",level:2}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"addpressuredirichletbc",children:"AddPressureDirichletBC"}),"\n",(0,a.jsxs)(n.p,{children:["This routine sets the Dirichlet boundary condition for pressure field in ",(0,a.jsx)(n.a,{href:"/docs-api/AbstractSteadyStokes/AbstractSteadyStokes_",children:"AbstractSteadyStokes_"})," kernel."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["It also makes the ",(0,a.jsx)(n.code,{children:"obj%DBCForPressure(dbcNo)"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"dbcNo"})," should be lesser than total dirichlet boundary condition for pressure field"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(o.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE AddPressureDirichletBC(obj, dbcNo, param, boundary)\n    CLASS(SteadyStokes111_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: dbcNo\n    !! Dirichlet boundary nunber\n    TYPE(ParameterList_), INTENT(IN) :: param\n    !! parameter for constructing [DirichletBC_](DirichletBC_.md).\n    TYPE(MeshSelection_), INTENT(IN) :: boundary\n    !! Boundary region\n  END SUBROUTINE AddPressureDirichletBC\nEND INTERFACE\n"})})}),(0,a.jsx)(o.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,a.jsx)(s.ZP,{})}),(0,a.jsx)(o.Z,{value:"close",label:"\u21a2 "})]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},78698:(e,n,r)=>{r.d(n,{ZP:()=>o});var a=r(85893),t=r(11151);function i(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"In this example we will learn how to add pressure and velocity dirichlet boundary condition"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  USE easifemMaterials\n  USE easifemKernels\n  USE SteadyStokes111_Class\n  IMPLICIT NONE\n  TYPE( SteadyStokes111_ ) :: obj\n  TYPE( ParameterList_ ) :: param\n  TYPE( HDF5File_ ) :: domainFile\n  TYPE( Domain_ ) :: dom\n  INTEGER( I4B ), PARAMETER :: refPressureNode=2\n  REAL( DFP ), PARAMETER :: refPressure = 0.0_DFP\n  INTEGER( I4B ), PARAMETER :: tDirichletBCForVelocity = 2\n  INTEGER( I4B ), PARAMETER :: tDirichletBCForPressure = 0\n  INTEGER( I4B ), PARAMETER :: tFluidMaterials= 1\n  INTEGER( I4B ), PARAMETER :: stabParamOption= 1\n  LOGICAL( LGT ), PARAMETER :: isSubscalePressure = .FALSE.\n  LOGICAL( LGT ), PARAMETER :: isBoundarySubscale = .FALSE.\n  REAL( DFP ), PARAMETER :: gravity(3)=[0.0, -9.8, 0.0]\n  LOGICAL( LGT ), PARAMETER :: isConservativeForm = .TRUE.\n  CHARACTER( * ), PARAMETER :: engine="NATIVE_SERIAL"\n  CHARACTER( * ), PARAMETER :: domainFileName="./long_pipe_tri3.h5"\n  INTEGER( I4B ), PARAMETER :: CoordinateSystem = KERNEL_CARTESIAN\n  INTEGER( I4B ), PARAMETER :: maxIter = 100\n  REAL( DFP ), PARAMETER :: rtoleranceForPressure = 1.0E-6\n  REAL( DFP ), PARAMETER :: rtoleranceForVelocity = 1.0E-6\n  REAL( DFP ), PARAMETER :: atoleranceForPressure = 1.0E-6\n  REAL( DFP ), PARAMETER :: atoleranceForVelocity = 1.0E-6\n  REAL( DFP ), PARAMETER :: toleranceForSteadyState = 1.0E-6\n  CHARACTER(*), PARAMETER :: baseInterpolationForSpace="LagrangeInterpolation"\n  CHARACTER(*), PARAMETER :: baseContinuityForSpace="H1"\n  CHARACTER(*), PARAMETER :: quadratureTypeForSpace="GaussLegendre"\n  INTEGER(I4B), PARAMETER :: ls_solverName = LIS_GMRES\n  INTEGER(I4B), PARAMETER :: ls_preconditionOption= LEFT_PRECONDITION\n  INTEGER(I4B), PARAMETER :: ls_convergenceIn = convergenceInRes\n  INTEGER(I4B), PARAMETER :: ls_convergenceType = relativeConvergence\n  INTEGER( I4B ), PARAMETER :: ls_maxIter = 100\n  LOGICAL( LGT ), PARAMETER :: ls_relativeToRHS = .TRUE.\n  INTEGER( I4B ), PARAMETER :: ls_KrylovSubspaceSize=20\n  REAL( DFP ) , PARAMETER :: ls_rtol=1.0E-10\n  REAL( DFP ) , PARAMETER :: ls_atol=1.0E-10\n  TYPE( MeshSelection_ ) :: region\n  INTEGER( I4B ), PARAMETER :: fluid_meshID(1) = [1]\n  REAL( DFP ), PARAMETER :: fluid_massDensity=1000.0\n  REAL( DFP ), PARAMETER :: fluid_dynamicViscosity=0.001_DFP\n  CHARACTER( LEN = * ), PARAMETER :: fluid_stressStrainModel="NewtonianFluidModel"\n  CLASS( DirichletBC_ ), POINTER :: dbc => NULL()\n'})}),"\n",(0,a.jsx)(n.p,{children:"Set parameters for kernel."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL FPL_INIT(); CALL param%Initiate()\n"})}),"\n",(0,a.jsx)(n.p,{children:"Set parameters for the kernel."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL SetSteadyStokes111Param( &\n    & param=param, &\n    & isConservativeForm=isConservativeForm, &\n    & gravity = gravity, &\n    & isSubscalePressure = isSubscalePressure, &\n    & isBoundarySubscale = isBoundarySubscale, &\n    & stabParamOption = stabParamOption, &\n    & domainFile = domainFileName, &\n    & engine=engine, &\n    & CoordinateSystem=KERNEL_CARTESIAN, &\n    & maxIter =maxIter, &\n    & rtoleranceForPressure = rtoleranceForPressure, &\n    & rtoleranceForVelocity = rtoleranceForVelocity, &\n    & atoleranceForPressure = atoleranceForPressure, &\n    & atoleranceForVelocity = atoleranceForVelocity, &\n    & toleranceForSteadyState = toleranceForSteadyState, &\n    & tFluidMaterials=tFluidMaterials, &\n    & tDirichletBCForPressure=tDirichletBCForPressure, &\n    & tDirichletBCForVelocity=tDirichletBCForVelocity, &\n    & baseInterpolationForSpace=baseInterpolationForSpace, &\n    & baseContinuityForSpace=baseContinuityForSpace, &\n    & quadratureTypeForSpace=quadratureTypeForSpace, &\n    & refPressureNode=refPressureNode, &\n    & refPressure=refPressure &\n    & )\n"})}),"\n",(0,a.jsx)(n.p,{children:"Setting parameters for linear solver."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL SetLinSolverParam( &\n    & param=param, &\n    & solverName=ls_solverName,&\n    & preconditionOption=ls_preconditionOption, &\n    & convergenceIn=ls_convergenceIn, &\n    & convergenceType=ls_convergenceType, &\n    & maxIter=ls_maxIter, &\n    & relativeToRHS=ls_relativeToRHS, &\n    & KrylovSubspaceSize=ls_KrylovSubspaceSize, &\n    & rtol=ls_rtol, &\n    & atol=ls_atol )\n"})}),"\n",(0,a.jsx)(n.p,{children:"Initiate domain by reading data from a domain file."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'  CALL domainFile%Initiate( filename=domainFileName, MODE="READ" )\n  CALL domainFile%Open()\n  CALL dom%Initiate( domainFile, "" )\n  CALL domainFile%Deallocate()\n'})}),"\n",(0,a.jsx)(n.p,{children:"Initiate the kernel."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%Initiate(param=param, dom=dom )\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Add fluid material to kernel. To do so, we first create an instance of ",(0,a.jsx)(n.a,{href:"/docs-api/MeshSelection/MeshSelection_",children:"MeshSelection"}),". Then, we add this instance to the kernel."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'  CALL region%Initiate( isSelectionByMeshID=.TRUE. )\n  CALL region%Add( dim=dom%GetNSD(), meshID=fluid_meshID )\n  CALL SetFluidMaterialParam( &\n    & param=param, &\n    & name="fluidMaterial", &\n    & massDensity=fluid_massDensity, &\n    & dynamicViscosity = fluid_dynamicViscosity, &\n    & stressStrainModel=fluid_stressStrainModel )\n  CALL SetNewtonianFluidModelParam( &\n    & param = param, &\n    & dynamicViscosity = fluid_dynamicViscosity )\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'  CALL obj%AddFluidMaterial( &\n    & materialNo=1, &\n    & materialName="fluidMaterial", &\n    & param=param, &\n    & region=region)\n  CALL region%Deallocate()\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Now we show how to add dirichlet boundary condition. To this end first we create an instance of ",(0,a.jsx)(n.a,{href:"/docs-api/MeshSelection/MeshSelection_",children:"MeshSelection"})," to select the region of the mesh. Then we define the dirichlet bonundary condition, and pass these two information to kernel."]}),"\n",(0,a.jsx)(n.p,{children:"set parameters for dirichlet boundary condition:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"#define BOTTOM 1\n#define RIGHT 2\n#define TOP 3\n#define LEFT 4\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'  CALL SetDirichletBCParam( &\n    & param=param, &\n    & name="V2=0", &\n    & idof=2, &\n    & nodalValueType=Constant, &\n    & useFunction=.FALSE. )\n'})}),"\n",(0,a.jsx)(n.p,{children:"select the mesh region:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL region%Initiate( isSelectionByMeshID=.TRUE. )\n  CALL region%Add( dim=obj%nsd-1, meshID=[BOTTOM, TOP, LEFT] )\n  CALL region%Set()\n"})}),"\n",(0,a.jsx)(n.p,{children:"Add dirichlet boundary condition and the region to kernel:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%AddVelocityDirichletBC( &\n    & dbcNo=1, &\n    & param=param, &\n    & boundary=region )\n  dbc => obj%GetVelocityDirichletBCPointer( dbcNo=1 )\n  CALL dbc%Set( ConstantNodalValue=0.0_DFP )\n  dbc=>NULL()\n"})}),"\n",(0,a.jsx)(n.p,{children:"AddDirichletBC, V1=U,\nset parameters for dirichlet boundary condition:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'  CALL SetDirichletBCParam( &\n    & param=param, &\n    & name="UpstreamV1", &\n    & idof=1, &\n    & nodalValueType=Constant, &\n    & useFunction=.FALSE. )\n'})}),"\n",(0,a.jsx)(n.p,{children:"select the mesh region:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL region%Deallocate()\n  CALL region%Initiate( isSelectionByMeshID=.TRUE. )\n  CALL region%Add( dim=obj%nsd-1, meshID=[LEFT] )\n  CALL region%Set()\n"})}),"\n",(0,a.jsx)(n.p,{children:"Add dirichlet boundary condition and the region to kernel:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%AddVelocityDirichletBC( &\n    & dbcNo=2, &\n    & param=param, &\n    & boundary=region )\n  dbc => obj%GetVelocityDirichletBCPointer( dbcNo=2 )\n  CALL dbc%Set( ConstantNodalValue=0.01_DFP )\n  dbc=>NULL()\n  CALL region%Deallocate()\n"})}),"\n",(0,a.jsx)(n.p,{children:"AddDirichletBC, P=0\nset parameters for dirichlet boundary condition:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-comment",children:'CALL SetDirichletBCParam( &\n  & param=param, &\n  & name="ZeroP", &\n  & idof=1, &\n  & nodalValueType=Constant, &\n  & useFunction=.FALSE. )\n\n  CALL region%Deallocate()\n  CALL region%Initiate( isSelectionByMeshID=.TRUE. )\n  CALL region%Add( dim=1, meshID=[3] )\n  CALL region%Set()\n\n  CALL obj%AddPressureDirichletBC( dbcNo=1, param=param, &\n    & boundary=region )\n  dbc => obj%GetPressureDirichletBCPointer( dbcNo=1 )\n  CALL dbc%Set( ConstantNodalValue=0.0_DFP ); dbc=>NULL()\n  CALL region%Deallocate()\n'})}),"\n",(0,a.jsx)(n.p,{children:"Display the kernel."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'  CALL obj%Display("")\n'})}),"\n",(0,a.jsx)(n.p,{children:"cleanup"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"CALL obj%Deallocate()\nCALL dom%Deallocate()\nCALL param%Deallocate(); CALL FPL_FINALIZE()\nEND PROGRAM main\n"})})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>o});r(67294);var a=r(86010);const t={tabItem:"tabItem_Ymn6"};var i=r(85893);function o(e){let{children:n,hidden:r,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(t.tabItem,o),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>S});var a=r(67294),t=r(86010),i=r(12466),o=r(16550),s=r(20469),l=r(91980),c=r(67392),d=r(50012);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const t=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function A(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,i=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,u]=p({queryString:r,groupId:t}),[A,E]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,d.Nk)(r);return[t,(0,a.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:t}),f=(()=>{const e=c??A;return m({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),E(e)}),[u,E,i]),tabValues:i}}var E=r(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(85893);function L(e){let{className:n,block:r,selectedValue:a,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),t=s[r].value;t!==a&&(c(n),o(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:s.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,t.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function R(e){let{lazy:n,children:r,selectedValue:t}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function T(e){const n=A(e);return(0,b.jsxs)("div",{className:(0,t.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(L,{...e,...n}),(0,b.jsx)(R,{...e,...n})]})}function S(e){const n=(0,E.Z)();return(0,b.jsx)(T,{...e,children:u(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>o});var a=r(67294);const t={},i=a.createContext(t);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);