"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[49891],{1423:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=a(85893),t=a(11151);const r={},o=void 0,l={id:"STDarcyBrinkmann/STDarcyBrinkmann_test_11",title:"STDarcyBrinkmann_test_11",description:"!> authors: Vikas Sharma, Ph. D.",source:"@site/docs/docs-api/STDarcyBrinkmann/STDarcyBrinkmann_test_11.md",sourceDirName:"STDarcyBrinkmann",slug:"/STDarcyBrinkmann/STDarcyBrinkmann_test_11",permalink:"/docs-api/STDarcyBrinkmann/STDarcyBrinkmann_test_11",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/STDarcyBrinkmann/STDarcyBrinkmann_test_11.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"STDarcyBrinkmann_test_10",permalink:"/docs-api/STDarcyBrinkmann/STDarcyBrinkmann_test_10"},next:{title:"STDarcyBrinkmann_test_12",permalink:"/docs-api/STDarcyBrinkmann/STDarcyBrinkmann_test_12"}},s={},c=[];function m(e){const n={p:"p",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"!> authors: Vikas Sharma, Ph. D.\n! date: 29 Sept 2021\n! update:\n!   - 21 Oct 2021\n!   - 23 Oct 2021\n! summary: Testing AddPressureBC, AddVelocityBC"}),"\n",(0,i.jsx)(n.p,{children:"! [[STDarcyBrinkmann_]], [[ParameterList_]], [[HDF5File_]]"}),"\n",(0,i.jsx)(n.p,{children:"! [[Domain_]], [[MeshSelection_]], [[NeumannBC_]]"}),"\n",(0,i.jsx)(n.p,{children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nUSE easifemMaterials\nUSE easifemKernels\nUSE STDarcyBrinkmann_Class\nIMPLICIT NONE\nTYPE( STDarcyBrinkmann_ ) :: obj\nTYPE( ParameterList_ ) :: param\nTYPE( HDF5File_ ) :: domainFileForPressure\nTYPE( HDF5File_ ) :: domainFileForVelocity\nTYPE( MeshSelection_ ) :: region\nTYPE( Domain_ ), TARGET :: domainForPressure\nTYPE( Domain_ ), TARGET :: domainForVelocity\nTYPE( DomainPointer_ ) :: domains( 2 )\nCLASS( DirichletBC_ ), POINTER :: dbc => NULL()\nCHARACTER( LEN = * ), PARAMETER :: domainFileNameForPressure="./mesh_tri3.h5"\nCHARACTER( LEN = * ), PARAMETER :: domainFileNameForVelocity="./mesh_tri6.h5"\n! main\n! #ParameterList/Initiate\nCALL FPL_INIT(); CALL param%Initiate()\n! #SetSTDarcyBrinkmannParam\nCALL SetSTDarcyBrinkmannParam( &\n& param=param, &\n& engine="NATIVE_SERIAL", &\n& nnt=2, &\n& startTime=0.0_DFP, &\n& endTime=10.0_DFP, &\n& dt=0.001_DFP, &\n& CoordinateSystem=KERNEL_2D, &\n& tPorousMaterials=2, &\n& tFluidMaterials=1, &\n& tDirichletBCForPressure=1, &\n& tDirichletBCForVelocity=3, &\n& domainFileForPressure=domainFileNameForPressure, &\n& domainFileForVelocity=domainFileNameForVelocity )\n! #SetLinSolverParam\nCALL SetLinSolverParam( param=param, solverName=LIS_GMRES,&\n& preconditionOption=LEFT_PRECONDITION, convergenceIn=convergenceInRes, &\n& convergenceType=relativeConvergence, maxIter=100,relativeToRHS=.TRUE.,&\n& KrylovSubspaceSize=20,rtol=1.0D-10,atol=1.0D-10 )\n! #HDF5File/Initiate\nCALL domainFileForPressure%Initiate( filename=domainFileNameForPressure, &\n& MODE="READ" )\n! #HDF5File/Open\nCALL domainFileForPressure%Open()\n! Domain/Initiate\nCALL domainForPressure%Initiate( domainFileForPressure, "" )\n! #HDF5File/Initiate\nCALL domainFileForVelocity%Initiate( filename=domainFileNameForVelocity, &\n& MODE="READ" )\n! #HDF5File/Open\nCALL domainFileForVelocity%Open()\n! #Domain/Initiate\nCALL domainForVelocity%Initiate( domainFileForVelocity, "" )\n! Domains\ndomains(1)%ptr => domainForVelocity\ndomains(2)%ptr => domainForPressure\nCALL domainFileForPressure%Deallocate()\nCALL domainFileForVelocity%Deallocate()\n! #STDarcyBrinkmann/Initiate\nCALL obj%Initiate(param=param, domains=domains )\n!----------------------------------------------------------------------------\n!::::::::::::::::::::::::::::::::::::::::::::::::::::::::: POROUS MATERIAL 1\n!----------------------------------------------------------------------------\n! #MeshSelection/Initiate\nCALL region%Initiate( isSelectionByMeshID=.TRUE. )\n! #MeshSelection/Add\nCALL region%Add( xidim=domainForPressure%GetNSD(), meshID=[1] )\n! #SetPorousMaterialParam\nCALL SetPorousMaterialParam( param=param, name="porousMaterial", &\n& massDensity=1700.0_DFP, stressStrainModel="LinearPoroElasticModel" )\n! #SetLinearPoroElasticModelParam\nCALL SetLinearPoroElasticModelParam( &\n& param = param,  &\n& ElasticityType = IsoLinearElasticModel, &\n& isPlaneStress = .FALSE., &\n& isPlaneStrain = .TRUE., &\n& PoissonRatio = 0.3_DFP, &\n& YoungsModulus = 1.0D+6 )\n! #STDarcyBrinkmann/AddPorousMaterial\nCALL obj%AddPorousMaterial(materialNo=1, materialName="porousMaterial", &\n& param=param, region=region)\n!> Adding another porous material\n! #MeshSelection/Deallocate\nCALL region%Deallocate()\n!----------------------------------------------------------------------------\n!::::::::::::::::::::::::::::::::::::::::::::::::::::::::: POROUS MATERIAL 2\n!----------------------------------------------------------------------------\n! #MeshSelection/Initiate\nCALL region%Initiate( isSelectionByMeshID=.TRUE. )\n! #MeshSelection/Add\nCALL region%Add( xidim=domainForPressure%GetNSD(), meshID=[2] )\n! #SetPorousMaterialParam\nCALL SetPorousMaterialParam( param=param, name="porousMaterial", &\n& massDensity=1700.0_DFP, stressStrainModel="LinearPoroElasticModel" )\n! #SetLinearPoroElasticModelParam\nCALL SetLinearPoroElasticModelParam( &\n& param = param,  &\n& ElasticityType = IsoLinearElasticModel, &\n& isPlaneStress = .FALSE., &\n& isPlaneStrain = .TRUE., &\n& PoissonRatio = 0.3_DFP, &\n& YoungsModulus = 1.0D+6 )\n! #STDarcyBrinkmann/AddPorousMaterial\nCALL obj%AddPorousMaterial(materialNo=2, materialName="porousMaterial", &\n& param=param, region=region)\n! #MeshSelection/Deallocate\nCALL region%Deallocate()\n!----------------------------------------------------------------------------\n!::::::::::::::::::::::::::::::::::::::::::::::::::::::::: FLUID MATERIAL 1\n!----------------------------------------------------------------------------\n! #MeshSelection/Initiate\nCALL region%Initiate( isSelectionByMeshID=.TRUE. )\n! #MeshSelection/Add\nCALL region%Add( xidim=domainForVelocity%GetNSD(), meshID=[1,2] )\n! #SetFluidMaterialParam\nCALL SetFluidMaterialParam( param=param, name="fluidMaterial", &\n& massDensity=1000.0_DFP, stressStrainModel="NewtonianFluidModel" )\n! #SetNewtonianFluidModelParam\nCALL SetNewtonianFluidModelParam( param = param, Viscosity = 0.001_DFP )\n! #STDarcyBrinkmann/AddFluidMaterial\nCALL obj%AddFluidMaterial(materialNo=1, materialName="fluidMaterial", &\n& param=param, region=region)\n! #MeshSelection/Deallocate\nCALL region%Deallocate()\n!----------------------------------------------------------------------------\n!:::::::::::::::::::::::::::::::::::::::::::::::::::::: ZERO V1 DIRICHLET BC\n!----------------------------------------------------------------------------\n! #SetDirichletBCParam\nCALL SetDirichletBCParam(param=param, name="ZeroV1", &\n& idof=1, nodalValueType=Constant, useFunction=.FALSE. )\n! #MesSelection/Initiate\nCALL region%Initiate( isSelectionByMeshID=.TRUE. )\n! #MeshSelection/Add\nCALL region%Add( xidim=1, meshID=[1,2,4,5] )\n! #MeshSelection/Set\nCALL region%Set()\n! #STDarcyBrinkmann/AddVelocityBC\nCALL obj%AddVelocityBC( dbcNo=1, param=param, boundary=region )\n! #STDarcyBrinkmann/GetVelocityBCPointer\ndbc => obj%GetVelocityBCPointer( dbcNo=1 )\nCALL dbc%Set( ConstantNodalValue=0.0_DFP ); dbc=>NULL()\n!----------------------------------------------------------------------------\n!::::::::::::::::::::::::::::::::::::::::::::::::::: UPSTREAM V1 DIRICHLET BC\n!----------------------------------------------------------------------------\n! #SetDirichletBCParam\nCALL SetDirichletBCParam(param=param, name="UpstreamV1", &\n& idof=1, nodalValueType=Constant, useFunction=.FALSE. )\n! #MeshSelection/Deallocate\nCALL region%Deallocate()\n! #MeshSelection/Initiate\nCALL region%Initiate( isSelectionByMeshID=.TRUE. )\n! #MeshSelection/Add\nCALL region%Add( xidim=1, meshID=[6] )\n! #MeshSelection/Set\nCALL region%Set()\n! #STDarcyBrinkmann/AddVelocityBC\nCALL obj%AddVelocityBC( dbcNo=2, param=param, boundary=region )\n! #STDarcyBrinkmann/GetVelocityBCPointer\ndbc => obj%GetVelocityBCPointer( dbcNo=2 )\n! #DirichletBc/Set\ncall dbc%Set( ConstantNodalValue=0.1_DFP ); dbc=>NULL()\n! #MeshSelection/Deallocate\nCALL region%Deallocate()\n!----------------------------------------------------------------------------\n!::::::::::::::::::::::::::::::::::::::::::::::::::::::: ZERO V2 DIRICHLET BC\n!----------------------------------------------------------------------------\n! #SetDirichletBCParam\nCALL SetDirichletBCParam(param=param, name="ZeroV2", &\n& idof=2, nodalValueType=Constant, useFunction=.FALSE. )\n! #MeshSelection/Deallocate\nCALL region%Deallocate()\n! #MeshSelection/Initiate\nCALL region%Initiate( isSelectionByMeshID=.TRUE. )\n! #MeshSelection/Add\nCALL region%Add( xidim=1, meshID=[1,2,4,5,6,3] )\n! #MeshSelection/Set\nCALL region%Set()\n! #STDarcyBrinkmann/AddVelocityBC\nCALL obj%AddVelocityBC( dbcNo=3, param=param, boundary=region )\n! #STDarcyBrinkmann/GetVelocityBCPointer\ndbc => obj%GetVelocityBCPointer( dbcNo=3 )\n! #DirichletBc/Set\ncall dbc%Set( ConstantNodalValue=0.1_DFP ); dbc=>NULL()\n! #MeshSelection/Deallocate\nCALL region%Deallocate()\n!----------------------------------------------------------------------------\n!:::::::::::::::::::::::::::::::::::::::::: DOWN-STREAM PRESSURE DIRICHLET BC\n!----------------------------------------------------------------------------\n! #SetDirichletBCParam\nCALL SetDirichletBCParam(param=param, name="ZeroP", &\n& idof=1, nodalValueType=Constant, useFunction=.FALSE. )\n! #MeshSelection/Deallocate\nCALL region%Deallocate()\n! #MeshSelection/Initiate\nCALL region%Initiate( isSelectionByMeshID=.TRUE. )\n! #MeshSelection/Add\nCALL region%Add( xidim=1, meshID=[3] )\n! #MeshSelection/Set\nCALL region%Set()\n! #STDarcyBrinkmann/AddVelocityBC\nCALL obj%AddPressureBC( dbcNo=1, param=param, boundary=region )\n! #STDarcyBrinkmann/GetVelocityBCPointer\ndbc => obj%GetPressureBCPointer( dbcNo=1 )\n! #DirichletBc/Set\ncall dbc%Set( ConstantNodalValue=0.0_DFP ); dbc=>NULL()\n! #MeshSelection/Deallocate\nCALL region%Deallocate()\n!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------\n! #STDarcyBrinkmann/Display\nCALL obj%Display("")\n! #STDarcyBrinkmann/Deallocate\nCALL obj%Deallocate()\n! #Domain/Deallocate\nCALL domainForPressure%Deallocate()\nCALL domainForVelocity%Deallocate()\n! #ParameterList/Deallocate\nCALL param%Deallocate(); CALL FPL_FINALIZE()\nEND PROGRAM main'})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>o});var i=a(67294);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);