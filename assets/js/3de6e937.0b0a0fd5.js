"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[31036],{73418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var l=n(85893),i=n(11151);const s={},r="Introduction",d={id:"StaticLinearElasticity/StaticLinearElasticity_",title:"Introduction",description:"StaticLinearElasticity class is designed for simulating the static response of linear elastic solid materials. It is a child of [[AbstractKernel]].",source:"@site/docs/docs-api/StaticLinearElasticity/StaticLinearElasticity_.md",sourceDirName:"StaticLinearElasticity",slug:"/StaticLinearElasticity/StaticLinearElasticity_",permalink:"/docs-api/StaticLinearElasticity/StaticLinearElasticity_",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/StaticLinearElasticity/StaticLinearElasticity_.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"StaticLinearElasticity",permalink:"/docs-api/StaticLinearElasticity/"},next:{title:"SteadyStokes111",permalink:"/docs-api/SteadyStokes111/"}},c={},a=[{value:"Getting started",id:"getting-started",level:2},{value:"Construct by using <code>Initiate</code>",id:"construct-by-using-initiate",level:3},{value:"Construct by using <code>Import</code>",id:"construct-by-using-import",level:3},{value:"Adding materials",id:"adding-materials",level:2}];function x(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"StaticLinearElasticity_"})," class is designed for simulating the static response of linear elastic solid materials. It is a child of [[AbstractKernel_]]."]}),"\n",(0,l.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,l.jsxs)(t.h3,{id:"construct-by-using-initiate",children:["Construct by using ",(0,l.jsx)(t.code,{children:"Initiate"})]}),"\n",(0,l.jsxs)(t.p,{children:["The following code demonstrates how we can initiate the ",(0,l.jsx)(t.code,{children:"StaticLinearElastic"})," kernel by using ",(0,l.jsx)(t.code,{children:"Initiate"})," method."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-fortran",children:'  type( StaticLinearElasticity_ ) :: obj\n  type( ParameterList_ ) :: param\n  type( domain_ ) :: dom\n  type( MeshSelection_ ) :: region\n  CHARACTER( LEN = * ), PARAMETER :: domainFileName="./mesh.h5"\n  CHARACTER( LEN = * ), PARAMETER :: sleFileName="./templateSLE1.hdf5"\n  type( HDF5File_ ) :: domainFile, sleFile\n  !> main program starts here\n  call Display( "TESTING INITIATE, ADDMATERIAL, EXPORT")\n  call FPL_INIT(); call param%initiate()\n  call setStaticLinearElasticityParam( param=param, engine="NATIVE_SERIAL", &\n    & CoordinateSystem=KERNEL_PLANE_STRESS, tMaterials=2, &\n    & totalDirichletBC=3, domainFile=domainFileName, BaseContinuity="H1", &\n    & BaseInterpolation="LagrangeInterpolation", &\n    & QuadratureType="GaussLegendre" )\n  call setLinSolverParam( param=param, solverName=LIS_CG,&\n    & preconditionOption=LEFT_PRECONDITION, convergenceIn=convergenceInRes, &\n    & convergenceType=relativeConvergence, maxIter=100,relativeToRHS=.TRUE.,&\n    & KrylovSubspaceSize=20,rtol=1.0D-10,atol=1.0D-10 )\n  !> initiating domain\n  call Display( "INITIATING DOMAIN" )\n  call domainFile%initiate( filename=domainFileName, mode="READ" )\n  call domainFile%open()\n  call dom%initiate( domainFile, \'\' )\n  !> initiating kernel\n  call Display( "INITIATING STATIC LINEAR ELASTICITY KERNEL" )\n  call obj%initiate( param=param, dom=dom )\n  !> now we add material\n  !> first we select mesh region\n  call region%initiate( isSelectionByMeshID=.TRUE. )\n  call region%add( xidim=1, meshID=[1,5,6] )\n  call region%add( xidim=2, meshID=[1] )\n  !> now we add it to the kernel\n  call obj%addMaterial( materialNo=1, region=region )\n  !> now we select another region\n  call region%Deallocate()\n  call region%initiate( isSelectionByMeshID=.TRUE. )\n  call region%add( xidim=1, meshID=[2,3,4] )\n  call region%add( xidim=2, meshID=[2] )\n  !> now we add it to the kernel\n  call obj%addMaterial( materialNo=2, region=region )\n  !> preparing solid material\n  call setSolidParam( param=param, name="Solid", massDensity=5000.0_DFP, &\n    & stressStrainModel="LinearElasticModel" )\n  call setLinearElasticModelParam( &\n    & param = param,  &\n    & ElasticityType = IsoLinearElasticModel, &\n    & isPlaneStrain = .TRUE., &\n    & PoissonRatio = 0.3_DFP, &\n    & YoungsModulus = 1.0D+6 )\n  call obj%addMaterial( materialNo=1, materialName="Solid", param=param )\n  call setSolidParam( param=param, name="Solid", massDensity=8000.0_DFP, &\n    & stressStrainModel="LinearElasticModel" )\n  call setLinearElasticModelParam( &\n    & param = param,  &\n    & ElasticityType = IsoLinearElasticModel, &\n    & isPlaneStrain = .TRUE., &\n    & PoissonRatio = 0.3_DFP, &\n    & YoungsModulus = 2.0D+6 )\n  call obj%addMaterial( materialNo=2, materialName="Solid", param=param )\n  call obj%set()\n  call sleFile%initiate( filename=sleFileName, mode="NEW" )\n  call sleFile%open()\n  call obj%export( hdf5=sleFile, group=\'\' )\n  call obj%Deallocate( )\n  !> Deallocating stuffs\n  call dom%Deallocate()\n  call domainFile%close(); call domainFile%Deallocate()\n  call sleFile%close(); call sleFile%Deallocate()\n  CALL param%Deallocate()\n  CALL FPL_FINALIZE()\n'})}),"\n",(0,l.jsxs)(t.h3,{id:"construct-by-using-import",children:["Construct by using ",(0,l.jsx)(t.code,{children:"Import"})]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Dataset"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Data type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Value"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Comment"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"domainFile"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"The path of the  mesh file"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"name"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"StaticLinearElasticity"})}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"It is a constant"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"engine"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)(t.code,{children:"NATIVE_SERIAL"})," ",(0,l.jsx)(t.code,{children:"NATIVE_OMP"})," ",(0,l.jsx)(t.code,{children:"NATIVE_MPI"})," ",(0,l.jsx)(t.code,{children:"PETSC"})]}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"BasseContinuity"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)(t.code,{children:"H1"}),",",(0,l.jsx)(t.code,{children:"H1Div"}),",",(0,l.jsx)(t.code,{children:"H1Curl"}),",",(0,l.jsx)(t.code,{children:"DG"})]}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Continuity of shape function."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"BaseInterpolation"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)(t.code,{children:"LagrangeInterpolation"}),", ",(0,l.jsx)(t.code,{children:"HermitInterpolation"}),", ",(0,l.jsx)(t.code,{children:"SerendipityInterpolation"}),", ",(0,l.jsx)(t.code,{children:"HierarchyInterpolation"})]}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Interpolation of shape functions"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"QuadratureType"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"GaussLegendre"})}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"CoordinateSystem"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)(t.code,{children:"1D_H"}),", ",(0,l.jsx)(t.code,{children:"1D_V"}),",",(0,l.jsx)(t.code,{children:"AXISYM"}),", ",(0,l.jsx)(t.code,{children:"PLANE_STRAIN"}),", ",(0,l.jsx)(t.code,{children:"PLANE_STRESS"}),", ",(0,l.jsx)(t.code,{children:"3D"})]}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"This  variable  defines the spatial dimension of the partial differential equation."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"tMaterials"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Integer"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Total number of materials present in the computations"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"Material1"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Group dataset"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"/"}),(0,l.jsxs)(t.td,{style:{textAlign:"right"},children:["This is a group dataset, that is, a directory. Its content depends upon the  child of ",(0,l.jsx)(t.code,{children:"Solid_"})," class. Please refer to the manual."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"Material2"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Group dataset"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"/"}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"boundaryCondition"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Group dataset"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"/"}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"boundaryCondition/totalDirichletBC"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Integer"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Total number of  Dirichlet boundary conditions"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:[(0,l.jsx)(t.code,{children:"boundaryCondition/DirichletBC1"}),"..."]}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Group dataset"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"/"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Dirichlet Boundary Condition 1, 2,..."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:[(0,l.jsx)(t.code,{children:"Material1"}),"..."]}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Group dataset"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"/"}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"linSolver"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Group dataset"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"/"}),(0,l.jsxs)(t.td,{style:{textAlign:"right"},children:["This is a group dataset , that is, a directory. Its  content depends upon the child of ",(0,l.jsx)(t.code,{children:"abstractLinSolver"}),". Please check the manual of individual child, for more detail"]})]})]})]}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.strong,{children:"template"})," of ",(0,l.jsx)(t.code,{children:"DirichletBC1"})," is given below."]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Variable"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Data type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Value"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Comment"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"name"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"idof"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"nodalValueType"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)(t.code,{children:"CONSTANT"}),", ",(0,l.jsx)(t.code,{children:"SPACE"}),", ",(0,l.jsx)(t.code,{children:"TIME"}),", ",(0,l.jsx)(t.code,{children:"SPACETIME"})]}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"UseFunction"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"BOOL"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"Boundary"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Group"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"/"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:(0,l.jsx)(t.code,{children:"Boundary"})})]})]})]}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.strong,{children:"template"})," of ",(0,l.jsx)(t.code,{children:"Boundary"})," , which is an instance of ",(0,l.jsx)(t.code,{children:"MeshSelection_"}),", is given below."]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Variable"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Data type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Value"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Comment"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"isSelectionByMeshID"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Bool"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"True or False"}),(0,l.jsxs)(t.td,{style:{textAlign:"right"},children:["Optional. Set it  to true, if you want  to select by supply ",(0,l.jsx)(t.code,{children:"meshID"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"isSelectionByElemID"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Bool"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"True or False"}),(0,l.jsxs)(t.td,{style:{textAlign:"right"},children:["Optional. Set it  to true, if you want  to select by supply ",(0,l.jsx)(t.code,{children:"elemID"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"isSelectionByBox"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Bool"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"True or False"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Optional. Set it  to true, if you want  to select by supply  bounding box"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"isSelectionByNode"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Bool"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"PointMeshID"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"CurveMeshID"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"SurfaceMeshID"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"PointElemNum"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"CurveElemNum"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"SurfaceElemNum"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"VolumeElemNum"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"NodeNum"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]})]})]}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.strong,{children:"template"})," of ",(0,l.jsx)(t.code,{children:"Material1"})," is given below"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Variable"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Data type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Value"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Comment"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"isSelectionByMeshID"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Bool"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"True or False"}),(0,l.jsxs)(t.td,{style:{textAlign:"right"},children:["Optional. Set it  to true, if you want  to select by supply ",(0,l.jsx)(t.code,{children:"meshID"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"isSelectionByElemNum"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Bool"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"True or False"}),(0,l.jsxs)(t.td,{style:{textAlign:"right"},children:["Optional. Set it  to true, if you want  to select by supply ",(0,l.jsx)(t.code,{children:"elemID"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"isSelectionByBox"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Bool"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"True or False"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Optional. Set it  to true, if you want  to select by supply  bounding box"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"isSelectionByNodeNum"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Bool"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"PointMeshID"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"CurveMeshID"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"SurfaceMeshID"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"VolumeMeshID"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"PointElemNum"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"CurveElemNum"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"SurfaceElemNum"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"VolumeElemNum"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"NodeNum"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"name"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"massDensity"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"REAL"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"stressStrainModel"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Group dataset"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"/"}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]})]})]}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.strong,{children:"template"})," for ",(0,l.jsx)(t.code,{children:"stressStrainModel"}),", which is an instance of  ",(0,l.jsx)(t.code,{children:"LinearElasticModel_"})," is given below."]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Variable name"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Data type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Value"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Comment"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"name"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"LinearElasticModel"})}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"It is constant, which denotes the name of the class."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"elasticityType"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)(t.code,{children:"ISO"}),", ",(0,l.jsx)(t.code,{children:"ANISO"}),", ",(0,l.jsx)(t.code,{children:"ORTHO"}),", ",(0,l.jsx)(t.code,{children:"TRANS"})]}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"It denotes the linear elasticity type"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"isPlaneStress"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)(t.code,{children:"T"}),"or ",(0,l.jsx)(t.code,{children:"F"})]}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"If the problem is 2D, and plane stress then set it to .TRUE."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"isPlaneStrain"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)(t.code,{children:"T"})," or ",(0,l.jsx)(t.code,{children:"F"})]}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"If the problem is 2D, and plane strain , then set it to .FALSE."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"lambda"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"REAL"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsxs)(t.td,{style:{textAlign:"right"},children:["This is required when ",(0,l.jsx)(t.code,{children:"ISO"})," option is selected"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"ShearModulus"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"REAL"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsxs)(t.td,{style:{textAlign:"right"},children:["This is required when ",(0,l.jsx)(t.code,{children:"ISO"})," option is selected"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"YoungsModulus"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"REAL"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsxs)(t.td,{style:{textAlign:"right"},children:["This is required when ",(0,l.jsx)(t.code,{children:"ISO"})," option is selected"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"PoissonRatio"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"REAL"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsxs)(t.td,{style:{textAlign:"right"},children:["This is required when ",(0,l.jsx)(t.code,{children:"ISO"})," option is selected"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"C"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"REAL(6,6)"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsxs)(t.td,{style:{textAlign:"right"},children:["This is necessary when ",(0,l.jsx)(t.code,{children:"ANISO"})," option is selected."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"invC"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"REAL(6,6)"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsxs)(t.td,{style:{textAlign:"right"},children:["This is necessary when ",(0,l.jsx)(t.code,{children:"ANISO"})," option is selected."]})]})]})]}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.strong,{children:"template"})," of ",(0,l.jsx)(t.code,{children:"linSolver"}),", which is an instance of ",(0,l.jsx)(t.code,{children:"LinearSolver_"})," class, with engine type ",(0,l.jsx)(t.code,{children:"NATIVE_SERIES"})," is given below."]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Variable"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Data type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Value"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Comment"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"engine"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"NATIVE_SERIAL"})}),(0,l.jsxs)(t.td,{style:{textAlign:"right"},children:["This variable helps us to create correct child of ",(0,l.jsx)(t.code,{children:"AbstractLinSolver"})," class. For other children we have following values reserved  : ",(0,l.jsx)(t.code,{children:"NATIVE_OMP"}),",",(0,l.jsx)(t.code,{children:"NATIVE_MPI"}),",",(0,l.jsx)(t.code,{children:"PETSC"}),",",(0,l.jsx)(t.code,{children:"LIS_SERIAL"}),",",(0,l.jsx)(t.code,{children:"LIS_OMP"}),",",(0,l.jsx)(t.code,{children:"LIS_MPI"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"solverName"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"CG"})}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"This is a constant"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"preconditionOption"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)(t.code,{children:"LEFT"}),", ",(0,l.jsx)(t.code,{children:"RIGHT"}),", ",(0,l.jsx)(t.code,{children:"LEFT_RIGHT"}),", ",(0,l.jsx)(t.code,{children:"NONE"})]}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"What type of preconditioning do you want to use?"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"convergenceIn"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)(t.code,{children:"RESIDUAL"}),", ",(0,l.jsx)(t.code,{children:"SOLUTION"})]}),(0,l.jsxs)(t.td,{style:{textAlign:"right"},children:["Should we check convergence in ",(0,l.jsx)(t.code,{children:"residual"})," or the ",(0,l.jsx)(t.code,{children:"solution"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"convergenceType"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)(t.code,{children:"ABSOLUT"}),", ",(0,l.jsx)(t.code,{children:"RELATIVE"})]}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Absolute convergence or relative convergence"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"relativeToRHS"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Char"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)(t.code,{children:"T"}),", ",(0,l.jsx)(t.code,{children:"F"})]}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"It is used when convergence Type is relative"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"maxIter"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"INT"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Maximum number of iterations"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"KrylovSubspaceSize"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"INT"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"This is used when GMRES is used, you can set it to 15 to 20."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"relativeTolerance"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"REAL"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Tolerance for checking the relative convergence"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"absoluteTolerance"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"REAL"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Tolerance for checking the absolute convergence"})]})]})]}),"\n",(0,l.jsxs)(t.p,{children:["First we export the data to a ",(0,l.jsx)(t.code,{children:"hdf5"})," file using the following commands."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-fortran",children:' type( StaticLinearElasticity_ ) :: obj\n  type( ParameterList_ ) :: param\n  type( domain_ ) :: dom\n  CHARACTER( LEN = * ), PARAMETER :: domainFileName="./mesh.h5"\n  CHARACTER( LEN = * ), PARAMETER :: sleFileName="./templateSLE1.hdf5"\n  type( HDF5File_ ) :: domainFile, sleFile\n  !> main program starts here\n  call Display( "TESTING INITIATE, ADDMATERIAL, EXPORT")\n  call FPL_INIT(); call param%initiate()\n  call setStaticLinearElasticityParam( param=param, engine="NATIVE_SERIAL", &\n    & CoordinateSystem=KERNEL_PLANE_STRESS, tMaterials=2, &\n    & totalDirichletBC=3, domainFile=domainFileName, BaseContinuity="H1", &\n    & BaseInterpolation="LagrangeInterpolation", &\n    & QuadratureType="GaussLegendre" )\n  call setLinSolverParam( param=param, solverName=LIS_CG,&\n    & preconditionOption=LEFT_PRECONDITION, convergenceIn=convergenceInRes, &\n    & convergenceType=relativeConvergence, maxIter=100,relativeToRHS=.TRUE.,&\n    & KrylovSubspaceSize=20,rtol=1.0D-10,atol=1.0D-10 )\n  !> initiating domain\n  call Display( "INITIATING DOMAIN" )\n  call domainFile%initiate( filename=domainFileName, mode="READ" )\n  call domainFile%open()\n  call dom%initiate( domainFile, \'\' )\n  !> initiating kernel\n  call Display( "INITIATING STATIC LINEAR ELASTICITY KERNEL" )\n  call obj%initiate( param=param, dom=dom )\n  !> now we add material\n  call obj%addMaterial( materialNo=1, xidim=1, meshID=[1,5,6], &\n    & isSelectionByMeshID=.TRUE. )\n  call obj%addMaterial( materialNo=1, xidim=2, meshID=[1] )\n  call obj%addMaterial( materialNo=2, xidim=1, meshID=[2,3,4], &\n    & isSelectionByMeshID=.TRUE. )\n  call obj%addMaterial( materialNo=2, xidim=2, meshID=[2] )\n  !> preparing solid material\n  call setSolidParam( param=param, name="Solid", massDensity=5000.0_DFP, &\n    & stressStrainModel="LinearElasticModel" )\n  call setLinearElasticModelParam( &\n    & param = param,  &\n    & ElasticityType = IsoLinearElasticModel, &\n    & isPlaneStrain = .TRUE., &\n    & PoissonRatio = 0.3_DFP, &\n    & YoungsModulus = 1.0D+6 )\n  call obj%addMaterial( materialNo=1, materialName="Solid", param=param )\n  call setSolidParam( param=param, name="Solid", massDensity=8000.0_DFP, &\n    & stressStrainModel="LinearElasticModel" )\n  call setLinearElasticModelParam( &\n    & param = param,  &\n    & ElasticityType = IsoLinearElasticModel, &\n    & isPlaneStrain = .TRUE., &\n    & PoissonRatio = 0.3_DFP, &\n    & YoungsModulus = 2.0D+6 )\n  call obj%addMaterial( materialNo=2, materialName="Solid", param=param )\n  call obj%set()\n  call sleFile%initiate( filename=sleFileName, mode="NEW" )\n  call sleFile%open()\n  call obj%export( hdf5=sleFile, group=\'\' )\n  call obj%Deallocate( )\n  !> Deallocating stuffs\n  call dom%Deallocate()\n  call domainFile%close(); call domainFile%Deallocate()\n  call sleFile%close(); call sleFile%Deallocate()\n  CALL param%Deallocate()\n  CALL FPL_FINALIZE()\n'})}),"\n",(0,l.jsx)(t.p,{children:"Then, we import the data using the following code."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-fortran",children:'  type( StaticLinearElasticity_ ) :: obj\n  type( domain_ ) :: dom\n  CHARACTER( LEN = * ), PARAMETER :: domainFilePath="./mesh.h5"\n  CHARACTER( LEN = * ), PARAMETER :: kernelFilePath="./templateSLE1.hdf5"\n  type( HDF5File_ ) :: domainFile, kernelFile\n  call Display( "TESTING INITIATE & IMPORT")\n  !> initiating domain\n  call Display( "INITIATING DOMAIN" )\n  call domainFile%initiate( filename=domainFilePath, mode="READ" )\n  call domainFile%open()\n  call dom%initiate( domainFile, \'\' )\n  !> initiating kernel\n  call Display( "INITIATING KERNEL" )\n  call kernelFile%initiate( filename=kernelFilePath, mode="READ" )\n  call kernelFile%open()\n  call obj%import( hdf5=kernelFile, group=\'\', dom=dom )\n  call obj%set()\n  call obj%Deallocate( )\n  !> Deallocating stuffs\n  call dom%Deallocate()\n  call domainFile%close(); call domainFile%Deallocate()\n  call kernelFile%close(); call kernelFile%Deallocate()\n'})}),"\n",(0,l.jsx)(t.h2,{id:"adding-materials",children:"Adding materials"}),"\n",(0,l.jsx)(t.p,{children:"In this section we demonstrate how to add materials to the kernel. It is a two step process."}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"Add the mesh region"}),"\n",(0,l.jsx)(t.li,{children:"Add the material"}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"The following code explains how to add the mesh region"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-fortran",children:"type( MeshSelection_ ) :: region\n call region%initiate( isSelectionByMeshID=.TRUE. )\n call region%add( xidim=1, meshID=[1,5,6] )\n call region%add( xidim=2, meshID=[1] )\n call obj%addMaterial( materialNo=1, region=region )\n !> now we select another region\n  call region%Deallocate()\n  call region%initiate( isSelectionByMeshID=.TRUE. )\n  call region%add( xidim=1, meshID=[2,3,4] )\n  call region%add( xidim=2, meshID=[2] )\n  !> now we add it to the kernel\n  call obj%addMaterial( materialNo=2, region=region )\n"})}),"\n",(0,l.jsx)(t.p,{children:"The following code explains how to add material to the kernel"})]})}function o(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>r});var l=n(67294);const i={},s=l.createContext(i);function r(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);