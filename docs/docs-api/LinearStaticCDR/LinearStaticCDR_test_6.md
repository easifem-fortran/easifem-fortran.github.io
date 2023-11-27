---
title: LinearStaticCDR example 6
authors: Vikas Sharma, Ph. D.
date: 22 Oct 2021
update: 15 Nov 2021
tags:
  - SetLinearStaticCDRParam
  - LinearStaticCDR/Initiate
  - LinearStaticCDR/CheckEssentialParam
  - LinearStaticCDR/AddMaterial
  - LinearStaticCDR/Display
  - Domain/Initiate
  - Domain/Open
  - HDF5File/Initiate
  - HDF5File/Open
  - SetLinSolverParam
---

# LinearStaticCDR example 6

!!! note ""
    This example demonstrates how to USE `addMaterial` to add NEW material to [[LinearStaticCDR_]] kernel.

## Modules and classes

- [[ParameterList_]]
- [[LinearStaticCDR_]]
- [[HDF5File_]]
- [[MeshSelection_]]
- [[Domain_]]

## Usage

!!! notes ""
    USE modules and declare variables

``` fortran
PROGRAM main
    USE easifemBase
    USE easifemClasses
    USE easifemMaterials
    USE easifemKernels
    USE LinearStaticCDR_Class
    IMPLICIT NONE
    TYPE(LinearStaticCDR_) :: obj
    TYPE(ParameterList_) :: param
    TYPE(Domain_) :: dom
    CHARACTER( LEN = * ), PARAMETER :: domainFileName="./mesh.h5"
    TYPE( HDF5File_ ) :: domainFile
    TYPE( MeshSelection_ ) :: region
    INTEGER(I4B), PARAMETER :: tMaterials = 2, tDirichletBC=4, &
      & solverName = LIS_GMRES, preconditionOption=LEFT_PRECONDITION, &
      & convergenceIn = convergenceInRes, &
      & convergenceType=relativeConvergence, &
      & maxIter = 100, &
      & KrylovSubspaceSize=20
```

!!! note ""
    Initiate an instance of [[ParameterList_]]

```fortran
    CALL FPL_INIT(); CALL param%Initiate()
```

!!! note ""
    Set the PARAMETER for [[LinearStaticCDR_]]

```fortran
    CALL SetLinearStaticCDRParam( param=param, &
      & engine="NATIVE_SERIAL", &
      & isConservative=.TRUE., &
      & coordinateSystem=KERNEL_2D, &
      & tMaterials=tMaterials, &
      & tDirichletBC=tDirichletBC, &
      & domainFile=domainFileName, &
      & baseContinuity="H1", &
      & baseInterpolation="LagrangeInterpolation", &
      & quadratureType="GaussLegendre" )
```

!!! note ""
    Set the PARAMETER for [[LinSolver_]].


```fortran
    CALL SetLinSolverParam( &
      & param=param, &
      & solverName=solverName,&
      & preconditionOption=preconditionOption, &
      & convergenceIn=convergenceIn, &
      & convergenceType=convergenceType, &
      & maxIter=maxIter, &
      & relativeToRHS=.TRUE., &
      & KrylovSubspaceSize=KrylovSubspaceSize, &
      & rtol=1.0D-10, &
      & atol=1.0D-10 )
```

!!! note ""
    Initiates computation domain.

```fortran
    CALL domainFile%Initiate(filename=domainFileName, mode="READ")
    CALL domainFile%Open()
    CALL dom%Initiate( domainFile, '' )
    CALL domainFile%Deallocate()
```

!!! note ""
    Initiate an instace of [[LinearStaticCDR_]] kernel

```fortran
    CALL obj%Initiate( param=param, dom=dom )
```

!!! note "addMaterial 1"
    Add another material and domain region in the [[LinearStaticCDR_]] kernel.

```fortran
    CALL region%Initiate( isSelectionByMeshID=.TRUE. )
    CALL region%Add( dim=2, meshID=[1] )
    CALL SetSolidMaterialParam( param=param, name="SolidMaterial", &
      & massDensity=7000.0_DFP, diffusivity=11.72D-6 )
    CALL obj%AddMaterial( materialNo=1, materialName="SolidMaterial",  &
      & param=param, region=region )
    CALL region%Deallocate()
```

!!! note "addMaterial 2"
    Add another material and domain region in the [[LinearStaticCDR_]] kernel.

```fortran
    CALL region%Initiate( isSelectionByMeshID=.TRUE. )
    CALL region%Add( dim=2, meshID=[2] )
    CALL SetSolidMaterialParam( param=param, name="SolidMaterial", &
      & massDensity=7000.0_DFP, diffusivity=11.72D-6 )
    CALL obj%AddMaterial( materialNo=2, materialName="SolidMaterial",  &
      & param=param, region=region )
    CALL region%Deallocate()
```

!!! note ""
    Display the content of kernel.

```fortran
    CALL obj%Display( "LinearStaticCDR :: ")
```

??? example "Results"

    ```bash
    LinearStaticCDR ::
    ## name :
    LinearStaticCDR
    # isInitiated : TRUE
    ## engine :
    NATIVE_SERIAL
    # coordinateSystem : 3
    # timeDependency : 0
    # nsd : 2
    # nnt : 0
    # tdof : 1
    # dt : 0.00000
    # startTime : 0.00000
    # endTime : 0.00000
    # currentTime : 0.00000
    # currentTimeStep : 0
    # totalTimeStep : 0
    # elemToMatID : NOT allocated
    # Linear Solver : ASSOCIATED
    # Tangent matrix : NOT ASSOCIATED
    # Procedure pointer Assemble : NOT ASSOCIATED
    # Procedure pointer AssembleTanMat : NOT ASSOCIATED
    # Procedure pointer AssembleRHS : NOT ASSOCIATED
    # Procedure pointer Solve : NOT ASSOCIATED
    # Procedure pointer Update : NOT ASSOCIATED
    # Procedure pointer isConverged : NOT ASSOCIATED
    # Procedure pointer isConverged : NOT ASSOCIATED
    # Procedure pointer WriteData : NOT ASSOCIATED
    # Procedure pointer SaveState : NOT ASSOCIATED
    # Procedure pointer LoadState : NOT ASSOCIATED
    ## domainFile :
    ./mesh.h5
    # tMaterials : 2
    # material : ALLOCATED, SIZE[2]
    ## material(1) :
    # name : SolidMaterial
    # massDensity : 7000.00
    diffusivity :
    # isUserFunctionSet: FALSE
    # returnType:Scalar
    # argType:Constant
    # scalarValue: 1.17200E-5
    ## material(2) :
    # name : SolidMaterial
    # massDensity : 7000.00
    diffusivity :
    # isUserFunctionSet: FALSE
    # returnType:Scalar
    # argType:Constant
    # scalarValue: 1.17200E-5
    # materialToMesh : ALLOCATED, SIZE[2]
    # # materialToMesh(1) :
    # isInitiated : TRUE
    # isSelectionByMeshID : T
    # isSelectionByElemNum : F
    # isSelectionByNodeNum : F
    # isSelectionByBox : F
    # SurfaceMeshID :
    size : 1
    1
    # # materialToMesh(2) :
    # isInitiated : TRUE
    # isSelectionByMeshID : T
    # isSelectionByElemNum : F
    # isSelectionByNodeNum : F
    # isSelectionByBox : F
    # SurfaceMeshID :
    size : 1
    2
    # baseContinuity :H1
    # baseInterpolation :LagrangeInterpolation
    # quadratureType :GaussLegendre
    # DBC : ALLOCATED, SIZE[4]
    # DBC(1) : NOT ASSOCIATED
    # DBC(2) : NOT ASSOCIATED
    # DBC(3) : NOT ASSOCIATED
    # DBC(4) : NOT ASSOCIATED
    # Dom : ASSOCIATED
    # rhs : NOT ASSOCIATED
    # sol : NOT ASSOCIATED
    # nodeCoord : NOT ASSOCIATED
    ```

!!! settings "Cleanup"

```fortran
    CALL obj%Deallocate( )
    CALL dom%Deallocate()
    CALL param%Deallocate()
    CALL FPL_FINALIZE()
END PROGRAM main
```
