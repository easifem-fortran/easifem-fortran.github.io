"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[19622],{74293:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var r=a(85893),i=a(11151);const t={authors:"Vikas Sharma, Ph. D.",date:"29 Sept 2021",update:"21 Oct 2021 - 23 Oct 2021 - 05 Nov 2021 - 14 Nov 2021",title:"STDarcyBrinkmann example 13",tags:["ParameterList/Initiate","SetSTDarcyBrinkmannParam","SetLinSolverParam","HDF5File/Initiate","HDF5File/Open","Domain/Initiate","STDarcyBrinkmann/Initiate","STDarcyBrinkmann/AddPorousMaterial","MeshSelection/Initiate","MeshSelection/Add","SetPorousMaterialParam","SetFluidMaterialParam","SetLinearPoroElasticModelParam","SetNewtonianFluidModelParam","SetDirichletBCParam","STDarcyBrinkmann/AddVelocityBC","STDarcyBrinkmann/GetVelocityBCPointer","STDarcyBrinkmann/AddPressureBC","STDarcyBrinkmann/GetPressureBCPointer","STDarcyBrinkmann/Set"]},o="STDarcyBrinkmann example 13",s={id:"STDarcyBrinkmann/STDarcyBrinkmann_test_13",title:"STDarcyBrinkmann example 13",description:'!!! note ""',source:"@site/docs/docs-api/STDarcyBrinkmann/STDarcyBrinkmann_test_13.md",sourceDirName:"STDarcyBrinkmann",slug:"/STDarcyBrinkmann/STDarcyBrinkmann_test_13",permalink:"/docs-api/STDarcyBrinkmann/STDarcyBrinkmann_test_13",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/STDarcyBrinkmann/STDarcyBrinkmann_test_13.md",tags:[{label:"ParameterList/Initiate",permalink:"/docs-api/tags/parameter-list-initiate"},{label:"SetSTDarcyBrinkmannParam",permalink:"/docs-api/tags/set-st-darcy-brinkmann-param"},{label:"SetLinSolverParam",permalink:"/docs-api/tags/set-lin-solver-param"},{label:"HDF5File/Initiate",permalink:"/docs-api/tags/hdf-5-file-initiate"},{label:"HDF5File/Open",permalink:"/docs-api/tags/hdf-5-file-open"},{label:"Domain/Initiate",permalink:"/docs-api/tags/domain-initiate"},{label:"STDarcyBrinkmann/Initiate",permalink:"/docs-api/tags/st-darcy-brinkmann-initiate"},{label:"STDarcyBrinkmann/AddPorousMaterial",permalink:"/docs-api/tags/st-darcy-brinkmann-add-porous-material"},{label:"MeshSelection/Initiate",permalink:"/docs-api/tags/mesh-selection-initiate"},{label:"MeshSelection/Add",permalink:"/docs-api/tags/mesh-selection-add"},{label:"SetPorousMaterialParam",permalink:"/docs-api/tags/set-porous-material-param"},{label:"SetFluidMaterialParam",permalink:"/docs-api/tags/set-fluid-material-param"},{label:"SetLinearPoroElasticModelParam",permalink:"/docs-api/tags/set-linear-poro-elastic-model-param"},{label:"SetNewtonianFluidModelParam",permalink:"/docs-api/tags/set-newtonian-fluid-model-param"},{label:"SetDirichletBCParam",permalink:"/docs-api/tags/set-dirichlet-bc-param"},{label:"STDarcyBrinkmann/AddVelocityBC",permalink:"/docs-api/tags/st-darcy-brinkmann-add-velocity-bc"},{label:"STDarcyBrinkmann/GetVelocityBCPointer",permalink:"/docs-api/tags/st-darcy-brinkmann-get-velocity-bc-pointer"},{label:"STDarcyBrinkmann/AddPressureBC",permalink:"/docs-api/tags/st-darcy-brinkmann-add-pressure-bc"},{label:"STDarcyBrinkmann/GetPressureBCPointer",permalink:"/docs-api/tags/st-darcy-brinkmann-get-pressure-bc-pointer"},{label:"STDarcyBrinkmann/Set",permalink:"/docs-api/tags/st-darcy-brinkmann-set"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{authors:"Vikas Sharma, Ph. D.",date:"29 Sept 2021",update:"21 Oct 2021 - 23 Oct 2021 - 05 Nov 2021 - 14 Nov 2021",title:"STDarcyBrinkmann example 13",tags:["ParameterList/Initiate","SetSTDarcyBrinkmannParam","SetLinSolverParam","HDF5File/Initiate","HDF5File/Open","Domain/Initiate","STDarcyBrinkmann/Initiate","STDarcyBrinkmann/AddPorousMaterial","MeshSelection/Initiate","MeshSelection/Add","SetPorousMaterialParam","SetFluidMaterialParam","SetLinearPoroElasticModelParam","SetNewtonianFluidModelParam","SetDirichletBCParam","STDarcyBrinkmann/AddVelocityBC","STDarcyBrinkmann/GetVelocityBCPointer","STDarcyBrinkmann/AddPressureBC","STDarcyBrinkmann/GetPressureBCPointer","STDarcyBrinkmann/Set"]},sidebar:"tutorialSidebar",previous:{title:"STDarcyBrinkmann_test_12",permalink:"/docs-api/STDarcyBrinkmann/STDarcyBrinkmann_test_12"},next:{title:"STDarcyBrinkmann example 14",permalink:"/docs-api/STDarcyBrinkmann/STDarcyBrinkmann_test_14"}},l={},c=[{value:"Modules &amp; Classes",id:"modules--classes",level:2},{value:"Usages",id:"usages",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"stdarcybrinkmann-example-13",children:"STDarcyBrinkmann example 13"}),"\n",(0,r.jsxs)(n.p,{children:['!!! note ""\nThis example tests and demonstrates the usage of ',(0,r.jsx)(n.code,{children:"Set()"})," method."]}),"\n",(0,r.jsx)(n.h2,{id:"modules--classes",children:"Modules & Classes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"[[STDarcyBrinkmann_]]"}),"\n",(0,r.jsx)(n.li,{children:"[[ParameterList_]]"}),"\n",(0,r.jsx)(n.li,{children:"[[HDF5File_]]"}),"\n",(0,r.jsx)(n.li,{children:"[[Domain_]]"}),"\n",(0,r.jsx)(n.li,{children:"[[DomainPointer_]]"}),"\n",(0,r.jsx)(n.li,{children:"[[MeshSelection_]]"}),"\n",(0,r.jsx)(n.li,{children:"[[NeumannBC_]]"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usages",children:"Usages"}),"\n",(0,r.jsx)(n.p,{children:'!!! note ""\nIMPORT the modules.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  USE easifemMaterials\n  USE easifemKernels\n  USE STDarcyBrinkmann_Class\n  IMPLICIT NONE\n"})}),"\n",(0,r.jsx)(n.p,{children:'!!! note ""\nDefine the variables.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  TYPE(STDarcyBrinkmann_) :: obj\n  TYPE(ParameterList_) :: param\n  TYPE(HDF5File_) :: domainFileForPressure\n  TYPE(HDF5File_) :: domainFileForVelocity\n  TYPE(MeshSelection_) :: region\n  TYPE(Domain_), TARGET :: domainForPressure\n  TYPE(Domain_), TARGET :: domainForVelocity\n  TYPE(DomainPointer_) :: domains(2)\n  CLASS(DirichletBC_), POINTER :: dbc => NULL()\n  CHARACTER(LEN=*), PARAMETER :: &\n    & domainFileNameForPressure = "./mesh_tri3.h5"\n  CHARACTER(LEN=*), PARAMETER :: &\n    & domainFileNameForVelocity = "./mesh_tri6.h5"\n'})}),"\n",(0,r.jsx)(n.p,{children:'!!! note ""\nInitiate an instance of [[ParameterList_]], param, this will be used to initiate several objects.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL FPL_INIT(); CALL param%Initiate()\n"})}),"\n",(0,r.jsx)(n.p,{children:'!!! note ""\nSetting parameters for an instance of [[STDarcyBrinkmann_]].'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  CALL SetSTDarcyBrinkmannParam( &\n    & param=param, &\n    & engine="NATIVE_SERIAL", &\n    & nnt=2, &\n    & startTime=0.0_DFP, &\n    & endTime=10.0_DFP, &\n    & dt=0.001_DFP, &\n    & CoordinateSystem=KERNEL_2D, &\n    & tPorousMaterials=2, &\n    & tFluidMaterials=1, &\n    & tDirichletBCForPressure=1, &\n    & tDirichletBCForVelocity=3, &\n    & domainFileForPressure=domainFileNameForPressure, &\n    & domainFileForVelocity=domainFileNameForVelocity)\n'})}),"\n",(0,r.jsx)(n.p,{children:'!!! note ""\nSetting [[LinSolver_]] parameters.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL SetLinSolverParam( &\n    & param=param, &\n    & solverName=LIS_GMRES,&\n    & preconditionOption=LEFT_PRECONDITION, &\n    & convergenceIn=convergenceInRes, &\n    & convergenceType=relativeConvergence, &\n    & maxIter=100, &\n    & relativeToRHS=.TRUE., &\n    & KrylovSubspaceSize=20, &\n    & rtol=1.0D-10, &\n    & atol=1.0D-10 )\n"})}),"\n",(0,r.jsx)(n.p,{children:'!!! note ""\nInitiate an [[HDF5File_]] for making [[Mesh_]] and/or [[Domain_]] for pressure variable.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  CALL domainFileForPressure%Initiate(filename=domainFileNameForPressure, &\n    & MODE="READ")\n  CALL domainFileForPressure%Open()\n  CALL domainForPressure%Initiate(domainFileForPressure, "")\n'})}),"\n",(0,r.jsx)(n.p,{children:'!!! note ""\nInitiate an [[HDF5File_]] for making [[Mesh_]] and/or [[Domain_]] for velocity variable.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  CALL domainFileForVelocity%Initiate(filename=domainFileNameForVelocity, &\n  & MODE="READ")\n  CALL domainFileForVelocity%Open()\n  CALL domainForVelocity%Initiate(domainFileForVelocity, "")\n'})}),"\n",(0,r.jsx)(n.p,{children:'!!! note ""\nPacking domains in a vector of [[DomainPointer_]]'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  domains(1)%ptr => domainForVelocity\n  domains(2)%ptr => domainForPressure\n"})}),"\n",(0,r.jsx)(n.p,{children:'!!! note ""\nDEALLOCATE domain files'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL domainFileForPressure%Deallocate()\n  CALL domainFileForVelocity%Deallocate()\n"})}),"\n",(0,r.jsx)(n.p,{children:'!!! note ""\nInitiate an instance of [[STDarcyBrinkmann_]]'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%Initiate(param=param, domains=domains)\n"})}),"\n",(0,r.jsx)(n.p,{children:'!!! note "porousMaterial 1"\nAdding a porous material.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  CALL region%Initiate(isSelectionByMeshID=.TRUE.)\n  CALL region%Add(dim=domainForPressure%GetNSD(), meshID=[1])\n  CALL SetPorousMaterialParam(param=param, name="porousMaterial", &\n    & massDensity=1700.0_DFP, stressStrainModel="LinearPoroElasticModel")\n'})}),"\n",(0,r.jsx)(n.p,{children:"Adding material parameters."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL SetLinearPoroElasticModelParam( &\n    & param=param,  &\n    & ElasticityType=IsoLinearElasticModel, &\n    & isPlaneStress=.FALSE., &\n    & isPlaneStrain=.TRUE., &\n    & PoissonRatio=0.3_DFP, &\n    & YoungsModulus=1.0D+6)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  CALL obj%AddPorousMaterial(materialNo=1, materialName="porousMaterial", &\n    & param=param, region=region)\n  CALL region%Deallocate()\n'})}),"\n",(0,r.jsx)(n.p,{children:'!!! note "porousMaterial 2"\nAdding a porous material.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  CALL region%Initiate(isSelectionByMeshID=.TRUE.)\n  CALL region%Add(dim=domainForPressure%GetNSD(), meshID=[2])\n  CALL SetPorousMaterialParam(param=param, name="porousMaterial", &\n    & massDensity=1700.0_DFP, stressStrainModel="LinearPoroElasticModel")\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL SetLinearPoroElasticModelParam( &\n    & param=param,  &\n    & ElasticityType=IsoLinearElasticModel, &\n    & isPlaneStress=.FALSE., &\n    & isPlaneStrain=.TRUE., &\n    & PoissonRatio=0.3_DFP, &\n    & YoungsModulus=1.0D+6)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  CALL obj%AddPorousMaterial(materialNo=2, &\n    & materialName="porousMaterial", &\n    & param=param, region=region)\n  CALL region%Deallocate()\n'})}),"\n",(0,r.jsx)(n.p,{children:'!!! note "fluidMaterial 1"\nAdding a fluid material.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL region%Initiate(isSelectionByMeshID=.TRUE.)\n  CALL region%Add(dim=domainForVelocity%GetNSD(), meshID=[1, 2])\n"})}),"\n",(0,r.jsx)(n.p,{children:'!!! note "SetFluidMaterialParam"\nSetting PARAMETER for [[FluidMaterial_]]'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  CALL SetFluidMaterialParam(param=param, name="fluidMaterial", &\n    & massDensity=1000.0_DFP, stressStrainModel="NewtonianFluidModel")\n'})}),"\n",(0,r.jsx)(n.p,{children:'!!! note "SetNewtonianFluidModelParam"\nSetting parameters for [[NewtonianFluidModel_]] which is a material model'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL SetNewtonianFluidModelParam(param=param, Viscosity=0.001_DFP)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Adding fluid material."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  CALL obj%AddFluidMaterial(materialNo=1, materialName="fluidMaterial", &\n    & param=param, region=region)\n  CALL region%Deallocate()\n'})}),"\n",(0,r.jsx)(n.p,{children:'!!! note "Dirichlet boundary"\nLet us set [[NeumannBC_]] for velocity. We are prescribing x component of the velocity.'}),"\n",(0,r.jsx)(n.p,{children:"First we set the necessary parameters."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  CALL SetDirichletBCParam(param=param, name="ZeroV1", &\n    & idof=1, nodalValueType=Constant, useFunction=.FALSE.)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Now we SELECT the region, which is top and bottom boundary."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL region%Initiate(isSelectionByMeshID=.TRUE.)\n  CALL region%Add(dim=1, meshID=[1, 2, 4, 5])\n  CALL region%Set()\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now we CALL ",(0,r.jsx)(n.code,{children:"AddVelocityBC"})," method of [[STDarcyBrinkmann_]]. THEN we get the POINTER to the [[NeumannBC_]] which is created by the ",(0,r.jsx)(n.code,{children:"AddVelocityBC"})," method. THEN we CALL Set method on this POINTER."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%AddVelocityBC(dbcNo=1, param=param, boundary=region)\n  CALL region%Deallocate()\n  dbc => obj%GetVelocityBCPointer(dbcNo=1)\n  CALL dbc%Set(ConstantNodalValue=0.0_DFP); dbc => NULL()\n"})}),"\n",(0,r.jsx)(n.p,{children:'!!! note "Dirichlet boundary"\nLet us set [[NeumannBC_]] for velocity (boundary condition at the inlet). We are prescribing x component of the velocity.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  CALL SetDirichletBCParam(param=param, name="UpstreamV1", &\n    & idof=1, nodalValueType=Constant, useFunction=.FALSE.)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Now we SELECT the inlet region, which is the left-boundary."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL region%Initiate(isSelectionByMeshID=.TRUE.)\n  CALL region%Add(dim=1, meshID=[6])\n  CALL region%Set()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now that we have build the inlet region, let us add it to kernel for the velocity Dirichlet boundary condition."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%AddVelocityBC(dbcNo=2, param=param, boundary=region)\n  CALL region%Deallocate()\n  dbc => obj%GetVelocityBCPointer(dbcNo=2)\n  CALL dbc%Set(ConstantNodalValue=0.1_DFP); dbc => NULL()\n"})}),"\n",(0,r.jsx)(n.p,{children:'!!! note "Dirichlet boundary"\nLet us set [[NeumannBC_]] for velocity. We are prescribing y component of the velocity.'}),"\n",(0,r.jsx)(n.p,{children:"Let us set the parameter for [[NeumannBC_]]"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  CALL SetDirichletBCParam(param=param, name="ZeroV2", &\n    & idof=2, nodalValueType=Constant, useFunction=.FALSE.)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Now select the region, which is the entire boundary."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL region%Initiate(isSelectionByMeshID=.TRUE.)\n  CALL region%Add(dim=1, meshID=[1, 2, 4, 5, 6, 3])\n  CALL region%Set()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Adding region to the kernel for setting boundary condition for velocity field."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%AddVelocityBC(dbcNo=3, param=param, boundary=region)\n  CALL region%Deallocate()\n  dbc => obj%GetVelocityBCPointer(dbcNo=3)\n  CALL dbc%Set(ConstantNodalValue=0.1_DFP); dbc => NULL()\n"})}),"\n",(0,r.jsx)(n.p,{children:'!!! note "Dirichlet boundary"\nLet us set [[NeumannBC_]] for pressure. We are prescribing zero pressure condition at the outlet.'}),"\n",(0,r.jsx)(n.p,{children:"Define the parameters for constructing [[NeumannBC_]] instance."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  CALL SetDirichletBCParam(param=param, name="ZeroP", &\n    & idof=1, nodalValueType=Constant, useFunction=.FALSE.)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Construct an outlet region."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL region%Initiate(isSelectionByMeshID=.TRUE.)\n  CALL region%Add(dim=1, meshID=[3])\n  CALL region%Set()\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Add the boundary condition and outlet region of the kernel by using the method called ",(0,r.jsx)(n.code,{children:"AddPressureBC"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%AddPressureBC(dbcNo=1, param=param, boundary=region)\n  CALL region%Deallocate()\n  dbc => obj%GetPressureBCPointer(dbcNo=1)\n  CALL dbc%Set(ConstantNodalValue=0.0_DFP); dbc => NULL()\n"})}),"\n",(0,r.jsxs)(n.p,{children:['!!! success "Set"\nNow that we are done with the setup, we should call ',(0,r.jsx)(n.code,{children:"Set"})," method. Then, the kernel will check the data, configuration, and intiate the appropriate variables."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  CALL Display("Setting kernel")\n  CALL obj%Set()\n  CALL Display("Setting kernel [OK!]")\n'})}),"\n",(0,r.jsxs)(n.p,{children:['!!! note ""\nLet see the content of the kernel on the terminal screen by using ',(0,r.jsx)(n.code,{children:"Display"})," method."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  CALL obj%Display("")\n'})}),"\n",(0,r.jsx)(n.p,{children:'!!! settings "Cleanup"'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%Deallocate()\n  CALL domainForPressure%Deallocate()\n  CALL domainForVelocity%Deallocate()\n  CALL param%Deallocate(); CALL FPL_FINALIZE()\nEND PROGRAM main\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>o});var r=a(67294);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);