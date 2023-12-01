"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[47446],{48433:(n,a,e)=>{e.r(a),e.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>s,toc:()=>m});var i=e(85893),r=e(11151);const t={},o=void 0,s={id:"STDarcyBrinkmann/STDarcyBrinkmann_test_10",title:"STDarcyBrinkmann_test_10",description:"!> authors: Vikas Sharma, Ph. D.",source:"@site/docs/docs-api/STDarcyBrinkmann/STDarcyBrinkmann_test_10.md",sourceDirName:"STDarcyBrinkmann",slug:"/STDarcyBrinkmann/STDarcyBrinkmann_test_10",permalink:"/docs-api/STDarcyBrinkmann/STDarcyBrinkmann_test_10",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/STDarcyBrinkmann/STDarcyBrinkmann_test_10.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"STDarcyBrinkmann_test_1",permalink:"/docs-api/STDarcyBrinkmann/STDarcyBrinkmann_test_1"},next:{title:"STDarcyBrinkmann_test_11",permalink:"/docs-api/STDarcyBrinkmann/STDarcyBrinkmann_test_11"}},l={},m=[];function c(n){const a={p:"p",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"!> authors: Vikas Sharma, Ph. D.\n! date: 29 Sept 2021\n! update:\n!   - 21 Oct 2021\n!   - 23 Oct 2021\n! summary: Testing AddPorousMaterial(), AddFluidMaterial()"}),"\n",(0,i.jsx)(a.p,{children:"! [[STDarcyBrinkmann_]], [[ParameterList_]], [[HDF5File_]]"}),"\n",(0,i.jsx)(a.p,{children:"! [[Domain_]], [[MeshSelection_]]"}),"\n",(0,i.jsx)(a.p,{children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nUSE easifemMaterials\nUSE easifemKernels\nUSE STDarcyBrinkmann_Class\nIMPLICIT NONE\nTYPE( STDarcyBrinkmann_ ) :: obj\nTYPE( ParameterList_ ) :: param\nTYPE( HDF5File_ ) :: domainFile\nTYPE( Domain_ ) :: dom\nTYPE( MeshSelection_ ) :: region\nCHARACTER( LEN = * ), PARAMETER :: domainFileName="./mesh_tri3.h5"\n!> main\n! #ParameterList/Initiate\nCALL FPL_INIT(); CALL param%Initiate()\n! #SetSTDarcyBrinkmannParam\nCALL SetSTDarcyBrinkmannParam( &\n& param=param, &\n& engine="NATIVE_SERIAL", &\n& nnt=2, &\n& startTime=0.0_DFP, &\n& endTime=10.0_DFP, &\n& dt=0.001_DFP, &\n& CoordinateSystem=KERNEL_2D, &\n& tPorousMaterials=2, &\n& tFluidMaterials=1, &\n& tDirichletBCForPressure=1, &\n& tDirichletBCForVelocity=2, &\n& domainFileForPressure=domainFileName, &\n& domainFileForVelocity=domainFileName )\n! #SetLinSolverParam\nCALL SetLinSolverParam( param=param, solverName=LIS_GMRES,&\n& preconditionOption=LEFT_PRECONDITION, convergenceIn=convergenceInRes, &\n& convergenceType=relativeConvergence, maxIter=100,relativeToRHS=.TRUE.,&\n& KrylovSubspaceSize=20,rtol=1.0D-10,atol=1.0D-10 )\n! #HDF5File/Initiate\nCALL domainFile%Initiate( domainFileName, MODE="READ" )\n! #HDF5File/Open\nCALL domainFile%Open()\n! #Domain/Initiate\nCALL dom%Initiate( domainFile, "" )\n! #HDF5File/Close\nCALL domainFile%Deallocate()\n! #STDarcyBrinkmann/Initiate\nCALL obj%Initiate(param=param, dom=dom )\n! #MeshSelection/Initiate\nCALL region%Initiate( isSelectionByMeshID=.TRUE. )\n! #MeshSelection/Add\nCALL region%Add( xidim=dom%GetNSD(), meshID=[1] )\n! #SetPorousMaterialParam\nCALL SetPorousMaterialParam( param=param, name="porousMaterial", &\n& massDensity=1700.0_DFP, stressStrainModel="LinearPoroElasticModel" )\n! #SetLinearPoroElasticModelParam\nCALL SetLinearPoroElasticModelParam( &\n& param = param,  &\n& ElasticityType = IsoLinearElasticModel, &\n& isPlaneStress = .FALSE., &\n& isPlaneStrain = .TRUE., &\n& PoissonRatio = 0.3_DFP, &\n& YoungsModulus = 1.0D+6 )\n! #STDarcyBrinkmann/AddPorousMaterial\nCALL obj%AddPorousMaterial(materialNo=1, materialName="porousMaterial", &\n& param=param, region=region)\n!> Adding another porous material\n! #MeshSelection/Deallocate\nCALL region%Deallocate()\n! #MeshSelection/Initiate\nCALL region%Initiate( isSelectionByMeshID=.TRUE. )\n! #MeshSelection/Add\nCALL region%Add( xidim=dom%GetNSD(), meshID=[2] )\n! #SetPorousMaterialParam\nCALL SetPorousMaterialParam( param=param, name="porousMaterial", &\n& massDensity=1700.0_DFP, stressStrainModel="LinearPoroElasticModel" )\n! #SetLinearPoroElasticModelParam\nCALL SetLinearPoroElasticModelParam( &\n& param = param,  &\n& ElasticityType = IsoLinearElasticModel, &\n& isPlaneStress = .FALSE., &\n& isPlaneStrain = .TRUE., &\n& PoissonRatio = 0.3_DFP, &\n& YoungsModulus = 1.0D+6 )\n! #STDarcyBrinkmann/AddPorousMaterial\nCALL obj%AddPorousMaterial(materialNo=2, materialName="porousMaterial", &\n& param=param, region=region)\n! #MeshSelection/Deallocate\nCALL region%Deallocate()\n! #MeshSelection/Initiate\nCALL region%Initiate( isSelectionByMeshID=.TRUE. )\n! #MeshSelection/Add\nCALL region%Add( xidim=dom%GetNSD(), meshID=[1,2] )\n! #SetFluidMaterialParam\nCALL SetFluidMaterialParam( param=param, name="fluidMaterial", &\n& massDensity=1000.0_DFP, stressStrainModel="NewtonianFluidModel" )\n! #SetNewtonianFluidModelParam\nCALL SetNewtonianFluidModelParam( param = param,  &\n& Viscosity = 0.001_DFP )\n! #STDarcyBrinkmann/AddFluidMaterial\nCALL obj%AddFluidMaterial(materialNo=1, materialName="fluidMaterial", &\n& param=param, region=region)\n! #STDarcyBrinkmann/Display\nCALL obj%Display("")\n! #STDarcyBrinkmann/Deallocate\nCALL obj%Deallocate()\n! #Domain/Deallocate\nCALL Dom%Deallocate()\nCALL param%Deallocate(); CALL FPL_FINALIZE()\nEND PROGRAM main'})]})}function d(n={}){const{wrapper:a}={...(0,r.a)(),...n.components};return a?(0,i.jsx)(a,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},11151:(n,a,e)=>{e.d(a,{Z:()=>s,a:()=>o});var i=e(67294);const r={},t=i.createContext(r);function o(n){const a=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(a):{...a,...n}}),[a,n])}function s(n){let a;return a=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),i.createElement(t.Provider,{value:a},n.children)}}}]);