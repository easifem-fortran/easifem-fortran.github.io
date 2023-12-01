"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[94826],{59562:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=i(85893),t=i(11151);const s={authors:"Vikas Sharma, Ph. D.",date:"22 Oct 2021",update:"14 Nov 2021",title:"StaticDiffusion example 3",tags:["SetStaticDiffusionParam","StaticDiffusion/Initiate","StaticDiffusion/CheckEssentialParam","StaticDiffusion/Display","Domain/Initiate","Domain/Open","HDF5File/Initiate","HDF5File/Open","SetLinSolverParam"]},o="StaticDiffusion example 3",r={id:"StaticDiffusion/StaticDiffusion_test_3",title:"StaticDiffusion example 3",description:'!!! note ""',source:"@site/docs/docs-api/StaticDiffusion/StaticDiffusion_test_3.md",sourceDirName:"StaticDiffusion",slug:"/StaticDiffusion/StaticDiffusion_test_3",permalink:"/docs-api/StaticDiffusion/StaticDiffusion_test_3",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/StaticDiffusion/StaticDiffusion_test_3.md",tags:[{label:"SetStaticDiffusionParam",permalink:"/docs-api/tags/set-static-diffusion-param"},{label:"StaticDiffusion/Initiate",permalink:"/docs-api/tags/static-diffusion-initiate"},{label:"StaticDiffusion/CheckEssentialParam",permalink:"/docs-api/tags/static-diffusion-check-essential-param"},{label:"StaticDiffusion/Display",permalink:"/docs-api/tags/static-diffusion-display"},{label:"Domain/Initiate",permalink:"/docs-api/tags/domain-initiate"},{label:"Domain/Open",permalink:"/docs-api/tags/domain-open"},{label:"HDF5File/Initiate",permalink:"/docs-api/tags/hdf-5-file-initiate"},{label:"HDF5File/Open",permalink:"/docs-api/tags/hdf-5-file-open"},{label:"SetLinSolverParam",permalink:"/docs-api/tags/set-lin-solver-param"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{authors:"Vikas Sharma, Ph. D.",date:"22 Oct 2021",update:"14 Nov 2021",title:"StaticDiffusion example 3",tags:["SetStaticDiffusionParam","StaticDiffusion/Initiate","StaticDiffusion/CheckEssentialParam","StaticDiffusion/Display","Domain/Initiate","Domain/Open","HDF5File/Initiate","HDF5File/Open","SetLinSolverParam"]},sidebar:"tutorialSidebar",previous:{title:"StaticDiffusion example 2",permalink:"/docs-api/StaticDiffusion/StaticDiffusion_test_2"},next:{title:"StaticDiffusion example 4",permalink:"/docs-api/StaticDiffusion/StaticDiffusion_test_4"}},l={},c=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"staticdiffusion-example-3",children:"StaticDiffusion example 3"}),"\n",(0,a.jsx)(n.p,{children:'!!! note ""\nThis example shows how to initiate an instance of [[StaticDiffusion_]]'}),"\n",(0,a.jsx)(n.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"[[ParameterList_]]"}),"\n",(0,a.jsx)(n.li,{children:"[[StaticDiffusion_]]"}),"\n",(0,a.jsx)(n.li,{children:"[[HDF5File_]]"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.p,{children:'!!! notes ""\nUSE modules and declare variables'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\n    USE easifemBase\n    USE easifemClasses\n    USE easifemKernels\n    USE StaticDiffusion_Class\n    IMPLICIT NONE\n    TYPE(StaticDiffusion_) :: obj\n    TYPE(ParameterList_) :: param\n    TYPE(Domain_) :: dom\n    CHARACTER( LEN = * ), PARAMETER :: domainFileName="./mesh.h5"\n    TYPE( HDF5File_ ) :: domainFile\n    INTEGER(I4B), PARAMETER :: tMaterials = 2, tDirichletBC=4, &\n      & solverName = LIS_CG, preconditionOption=LEFT_PRECONDITION, &\n      & convergenceIn = convergenceInRes, &\n      & convergenceType=relativeConvergence, &\n      & maxIter = 100, &\n      & KrylovSubspaceSize=20\n'})}),"\n",(0,a.jsx)(n.p,{children:'!!! note ""\nInitiate an instance of [[ParameterList_]].'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"    CALL FPL_INIT(); CALL param%initiate()\n"})}),"\n",(0,a.jsx)(n.p,{children:'!!! note ""\nSet parameters for [[StaticDiffusion_]] kernel.'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'    CALL SetStaticDiffusionParam( &\n      & param=param, &\n      & engine="NATIVE_SERIAL", &\n      & coordinateSystem=KERNEL_2D, &\n      & tMaterials=tMaterials, &\n      & tDirichletBC=tDirichletBC, &\n      & domainFile=domainFileName, &\n      & baseContinuity="H1", &\n      & baseInterpolation="LagrangeInterpolation", &\n      & quadratureType="GaussLegendre" )\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Here, ",(0,a.jsx)(n.code,{children:"baseContinuity"}),", ",(0,a.jsx)(n.code,{children:"baseInterpolation"}),", and ",(0,a.jsx)(n.code,{children:"quadratureType"})," are OPTIONAL."]}),"\n",(0,a.jsx)(n.p,{children:'!!! note ""\nSetting parameters for [[LinSolver_]]'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"    CALL SetLinSolverParam( &\n      & param=param, &\n      & solverName=solverName,&\n      & preconditionOption=preconditionOption, &\n      & convergenceIn=convergenceIn, &\n      & convergenceType=convergenceType, &\n      & maxIter=maxIter, &\n      & relativeToRHS=.TRUE., &\n      & KrylovSubspaceSize=KrylovSubspaceSize, &\n      & rtol=1.0D-10, &\n      & atol=1.0D-10 )\n"})}),"\n",(0,a.jsx)(n.p,{children:'!!! note ""\nInitiate the computation domain.'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"    CALL domainFile%Initiate(filename=domainFileName, mode=\"READ\")\n    CALL domainFile%Open()\n    CALL dom%Initiate( domainFile, '' )\n    CALL domainFile%Deallocate()\n"})}),"\n",(0,a.jsx)(n.p,{children:'!!! note ""\nInitiate an instance of [[StaticDiffusion_]].'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"    CALL obj%Initiate( param=param, dom=dom )\n"})}),"\n",(0,a.jsx)(n.p,{children:'!!! note ""\nDisplay the content of the kernel.'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'    CALL obj%Display( "StaticDiffusion :: ")\n'})}),"\n",(0,a.jsx)(n.p,{children:'??? mesage "Results"'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# StaticDiffusion ::\n## name :\nStaticDiffusion\n# isInitiated : TRUE\n## engine :\nNATIVE_SERIAL\n# coordinateSystem : 3\n# timeDependency : 0\n# nsd : 2\n# nnt : 0\n# tdof : 1\n# dt : 0.00000\n# startTime : 0.00000\n# endTime : 0.00000\n# currentTime : 0.00000\n# currentTimeStep : 0\n# totalTimeStep : 0\n# elemToMatID : NOT allocated\n# Linear Solver : ASSOCIATED\n# Tangent matrix : NOT ASSOCIATED\n# Procedure pointer Assemble : NOT ASSOCIATED\n# Procedure pointer AssembleTanMat : NOT ASSOCIATED\n# Procedure pointer AssembleRHS : NOT ASSOCIATED\n# Procedure pointer Solve : NOT ASSOCIATED\n# Procedure pointer Update : NOT ASSOCIATED\n# Procedure pointer isConverged : NOT ASSOCIATED\n# Procedure pointer isConverged : NOT ASSOCIATED\n# Procedure pointer WriteData : NOT ASSOCIATED\n# Procedure pointer SaveState : NOT ASSOCIATED\n# Procedure pointer LoadState : NOT ASSOCIATED\n## domainFile :\n./mesh.h5\n# tMaterials : 2\n# material : ALLOCATED, SIZE[2]\n# material(1) : NOT ASSOCIATED\n# material(2) : NOT ASSOCIATED\n# materialToMesh : ALLOCATED, SIZE[2]\n# # materialToMesh(1) :\n# The object is not initiated, nothing to show!\n# # materialToMesh(2) :\n# The object is not initiated, nothing to show!\n# baseContinuity :H1\n# baseInterpolation :LagrangeInterpolation\n# quadratureType :GaussLegendre\n# DBC : ALLOCATED, SIZE[4]\n# DBC(1) : NOT ASSOCIATED\n# DBC(2) : NOT ASSOCIATED\n# DBC(3) : NOT ASSOCIATED\n# DBC(4) : NOT ASSOCIATED\n# Dom : ASSOCIATED\n# rhs : NOT ASSOCIATED\n# sol : NOT ASSOCIATED\n# nodeCoord : NOT ASSOCIATED\n"})}),"\n",(0,a.jsx)(n.p,{children:'!!! settings "Cleanup"'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"    CALL obj%Deallocate( )\n    CALL dom%Deallocate()\n    CALL param%Deallocate()\n    CALL FPL_FINALIZE()\nEND PROGRAM main\n"})})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var a=i(67294);const t={},s=a.createContext(t);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);