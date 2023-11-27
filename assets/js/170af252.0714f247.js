"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[67334],{26987:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var i=a(85893),r=a(11151);const t={},o=void 0,s={id:"STDarcyBrinkmann/STDarcyBrinkmann_test_5",title:"STDarcyBrinkmann_test_5",description:"!> authors: Vikas Sharma, Ph. D.",source:"@site/docs/docs-api/STDarcyBrinkmann/STDarcyBrinkmann_test_5.md",sourceDirName:"STDarcyBrinkmann",slug:"/STDarcyBrinkmann/STDarcyBrinkmann_test_5",permalink:"/docs-api/STDarcyBrinkmann/STDarcyBrinkmann_test_5",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/STDarcyBrinkmann/STDarcyBrinkmann_test_5.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"STDarcyBrinkmann_test_4",permalink:"/docs-api/STDarcyBrinkmann/STDarcyBrinkmann_test_4"},next:{title:"STDarcyBrinkmann_test_6",permalink:"/docs-api/STDarcyBrinkmann/STDarcyBrinkmann_test_6"}},m={},l=[];function c(n){const e={p:"p",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"!> authors: Vikas Sharma, Ph. D.\n! date: 29 Sept 2021\n! update:\n!   - 21 Oct 2021\n!   - 23 Oct 2021\n! summary: Testing AddPorousMaterial(), different domains"}),"\n",(0,i.jsx)(e.p,{children:"! [[STDarcyBrinkmann_]], [[ParameterList_]], [[HDF5File_]]"}),"\n",(0,i.jsx)(e.p,{children:"! [[Domain_]], [[MeshSelection_]]"}),"\n",(0,i.jsx)(e.p,{children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nUSE easifemMaterials\nUSE easifemKernels\nUSE STDarcyBrinkmann_Class\nIMPLICIT NONE\nTYPE( STDarcyBrinkmann_ ) :: obj\nTYPE( ParameterList_ ) :: param\nTYPE( HDF5File_ ) :: domainFileForPressure\nTYPE( HDF5File_ ) :: domainFileForVelocity\nTYPE( MeshSelection_ ) :: region\nTYPE( Domain_ ), TARGET :: domainForPressure\nTYPE( Domain_ ), TARGET :: domainForVelocity\nTYPE( DomainPointer_ ) :: domains( 2 )\nCHARACTER( LEN = * ), PARAMETER :: domainFileNameForPressure="./mesh_tri3.h5"\nCHARACTER( LEN = * ), PARAMETER :: domainFileNameForVelocity="./mesh_tri6.h5"\n!> main\nCALL FPL_INIT(); CALL param%Initiate()\n! #SetSTDarcyBrinkmannParam\nCALL SetSTDarcyBrinkmannParam( &\n& param=param, &\n& engine="NATIVE_SERIAL", &\n& nnt=2, &\n& startTime=0.0_DFP, &\n& endTime=10.0_DFP, &\n& dt=0.001_DFP, &\n& CoordinateSystem=KERNEL_2D, &\n& tPorousMaterials=2, &\n& tFluidMaterials=1, &\n& tDirichletBCForPressure=1, &\n& tDirichletBCForVelocity=2, &\n& domainFileForPressure=domainFileNameForPressure, &\n& domainFileForVelocity=domainFileNameForVelocity )\n! #SetLinSolverParam\nCALL SetLinSolverParam( param=param, solverName=LIS_GMRES,&\n& preconditionOption=LEFT_PRECONDITION, convergenceIn=convergenceInRes, &\n& convergenceType=relativeConvergence, maxIter=100,relativeToRHS=.TRUE.,&\n& KrylovSubspaceSize=20,rtol=1.0D-10,atol=1.0D-10 )\n!> initiate domain\n! #HDF5File/Initiate\nCALL domainFileForPressure%Initiate( filename=domainFileNameForPressure, &\n& MODE="READ" )\n! #HDF5File/Open\nCALL domainFileForPressure%Open()\n! Domain/Initiate\nCALL domainForPressure%Initiate( domainFileForPressure, "" )\n! #HDF5File/Initiate\nCALL domainFileForVelocity%Initiate( filename=domainFileNameForVelocity, &\n& MODE="READ" )\n! #HDF5File/Open\nCALL domainFileForVelocity%Open()\n! #Domain/Initiate\nCALL domainForVelocity%Initiate( domainFileForVelocity, "" )\n! Domains\ndomains(1)%ptr => domainForVelocity\ndomains(2)%ptr => domainForPressure\n! #STDarcyBrinkmann/Initiate\nCALL obj%Initiate(param=param, domains=domains )\n! #MeshSelection/Initiate\nCALL region%Initiate( isSelectionByMeshID=.TRUE. )\n! #MeshSelection/Add\nCALL region%Add( xidim=domainForPressure%getNSD(), meshID=[1] )\n! #SetPorousMaterialParam\nCALL SetPorousMaterialParam( param=param, name="porousMaterial", &\n& massDensity=1700.0_DFP, stressStrainModel="LinearPoroElasticModel" )\n! #SetLinearPoroElasticModelParam\nCALL SetLinearPoroElasticModelParam( &\n& param = param,  &\n& ElasticityType = IsoLinearElasticModel, &\n& isPlaneStress = .FALSE., &\n& isPlaneStrain = .TRUE., &\n& PoissonRatio = 0.3_DFP, &\n& YoungsModulus = 1.0D+6 )\n! #STDarcyBrinkmann/AddPorousMaterial\nCALL obj%AddPorousMaterial(materialNo=1, materialName="porousMaterial", &\n& param=param, region=region)\n! #MeshSelection/Deallocate\nCALL region%Deallocate()\n! Adding another porous material\n! #MeshSelection/Initiate\nCALL region%Initiate( isSelectionByMeshID=.TRUE. )\n! #MeshSelection/Add\nCALL region%Add( xidim=domainForPressure%getNSD(), meshID=[2] )\n! #SetPorousMaterialParam\nCALL SetPorousMaterialParam( param=param, name="porousMaterial", &\n& massDensity=1700.0_DFP, stressStrainModel="LinearPoroElasticModel" )\n! #SetLinearPoroElasticModelParam\nCALL SetLinearPoroElasticModelParam( &\n& param = param,  &\n& ElasticityType = IsoLinearElasticModel, &\n& isPlaneStress = .FALSE., &\n& isPlaneStrain = .TRUE., &\n& PoissonRatio = 0.3_DFP, &\n& YoungsModulus = 1.0D+6 )\n! #STDarcyBrinkmann/AddPorousMaterial\nCALL obj%AddPorousMaterial(materialNo=2, materialName="porousMaterial", &\n& param=param, region=region)\n! #MeshSelection/Deallocate\nCALL region%Deallocate()\n! #STDarcyBrinkmann/Display\nCALL obj%Display("")\n! #STDarcyBrinkmann/Deallocate\nCALL obj%Deallocate()\nCALL domainForPressure%Deallocate()\nCALL domainForVelocity%Deallocate()\nCALL param%Deallocate(); CALL FPL_FINALIZE()\nEND PROGRAM main'})]})}function d(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},11151:(n,e,a)=>{a.d(e,{Z:()=>s,a:()=>o});var i=a(67294);const r={},t=i.createContext(r);function o(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);