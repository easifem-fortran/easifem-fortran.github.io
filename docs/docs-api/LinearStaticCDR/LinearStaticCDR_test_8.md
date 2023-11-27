---
title: LinearStaticCDR example 8
authors: Vikas Sharma, Ph. D.
date: 25 Nov 2021
update: 25 Nov 2021
tags:
  - SetLinearStaticCDRParam
  - LinearStaticCDR/Initiate
  - LinearStaticCDR/CheckEssentialParam
  - LinearStaticCDR/AddMaterial
  - LinearStaticCDR/AddDirichletBC
  - LinearStaticCDR/GetDirichletBCPointer
  - DirichletBC/Set
  - LinearStaticCDR/Display
  - Domain/Initiate
  - Domain/Open
  - HDF5File/Initiate
  - HDF5File/Open
  - SetLinSolverParam
---

# LinearStaticCDR example 8

!!! note ""
    This example shows how to use set method in [[LinearStaticCDR_]] kernel.

Mesh used in this example is given below.

![](./mesh.png)

## Use association

- [[HDF5File_]]
- [[MSHFile_]]
- [[ParameterList_]]
- [[Domain_]]
- [[MeshSelection_]]

## Usage

## Usage

```fortran
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
    INTEGER(I4B), PARAMETER :: tMaterials = 2, tDirichletBC=2, &
      & solverName = LIS_GMRES, preconditionOption=LEFT_PRECONDITION, &
      & convergenceIn = convergenceInRes, &
      & convergenceType=relativeConvergence, &
      & maxIter = 100, &
      & KrylovSubspaceSize=20
    CLASS( DirichletBC_ ), POINTER :: dbc
```

!!! note ""
    Initiate an instance of [[ParameterList_]]

```fortran
    CALL FPL_INIT(); CALL param%Initiate()
```

!!! note ""
    Set the parameter for [[LinearStaticCDR_]]

```fortran
    CALL SetLinearStaticCDRParam( param=param, &
        & engine="NATIVE_SERIAL", &
        & isConservative=.FALSE., &
        & coordinateSystem=KERNEL_2D, &
        & tMaterials=tMaterials, &
        & tDirichletBC=tDirichletBC, &
        & domainFile=domainFileName, &
        & baseContinuity="H1", &
        & baseInterpolation="LagrangeInterpolation", &
        & quadratureType="GaussLegendre" )
```

!!! note ""
    Set the parameter for [[LinSolver_]].


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
      & massDensity=1.0_DFP, diffusivity=1.0_DFP )
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
      & massDensity=1.0_DFP, diffusivity=1.0_DFP )
    CALL obj%AddMaterial( materialNo=2, materialName="SolidMaterial",  &
      & param=param, region=region )
    CALL region%Deallocate()
```

!!! note "SetDirichletBC 1"
    Now we set the Dirichlet boundary condition. First we select the mesh
    boundary, then we prescribe the boundary condition.

```fortran
    CALL SetDirichletBCParam(param=param, name="ZeroDBC", idof=1, &
      & nodalValueType=Constant, useFunction=.FALSE. )
    CALL region%Initiate( isSelectionByMeshID=.TRUE.)
    CALL region%Add( dim=1, meshID=[3] )
    CALL obj%AddDirichletBC( dbcNo=1, boundary=region, param=param )
    CALL region%Deallocate()
    dbc => obj%GetDirichletBCPointer( dbcNo=1 )
    CALL dbc%Set( ConstantNodalValue=0.0_DFP ); dbc=>NULL()
```

!!! note "SetDirichletBC 2"
    Let us repeat the procedure mentioned above to prescribe another boundary condition.

```fortran
    CALL SetDirichletBCParam(param=param, name="NonZeroDBC", idof=1, &
      & nodalValueType=Constant, useFunction=.FALSE. )
    CALL region%Initiate( isSelectionByMeshID=.TRUE.)
    CALL region%Add( dim=1, meshID=[6] )
    CALL obj%AddDirichletBC( dbcNo=2, boundary=region, param=param )
    CALL region%Deallocate()
    dbc => obj%GetDirichletBCPointer( dbcNo=2 )
    CALL dbc%Set( ConstantNodalValue=1.0_DFP ); dbc=>NULL()
```

!!! note "Set"
    Now that we are done setting the kernels properties, we will call `Set` method.

```fortran
    CALL obj%set()
```

!!! note ""
    Display the content of kernel.

```fortran
    CALL obj%Display( "LinearStaticCDR :: ")
```

??? example "Results"

    ```bash
    # LinearStaticCDR ::
    ## name :
    StaticDiffusion
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
    # Tangent matrix : ASSOCIATED
    # Procedure pointer Assemble : ASSOCIATED
    # Procedure pointer AssembleTanMat : ASSOCIATED
    # Procedure pointer AssembleRHS : ASSOCIATED
    # Procedure pointer Solve : ASSOCIATED
    # Procedure pointer Update : ASSOCIATED
    # Procedure pointer isConverged : ASSOCIATED
    # Procedure pointer isConverged : ASSOCIATED
    # Procedure pointer WriteData : ASSOCIATED
    # Procedure pointer SaveState : ASSOCIATED
    # Procedure pointer LoadState : ASSOCIATED
    ## domainFile :
    ./mesh.h5
    # tMaterials : 2
    # material : ALLOCATED, SIZE[2]
    ## material(1) :
    # name : SolidMaterial
    # massDensity : 1.00000
    diffusivity :
    # isUserFunctionSet: FALSE
    # returnType:Scalar
    # argType:Constant
    # scalarValue: 1.00000
    ## material(2) :
    # name : SolidMaterial
    # massDensity : 1.00000
    diffusivity :
    # isUserFunctionSet: FALSE
    # returnType:Scalar
    # argType:Constant
    # scalarValue: 1.00000
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
    # DBC : ALLOCATED, SIZE[2]
    # name : ZeroDBC
    # idof : 1
    # nodalValueType : CONSTANT
    # useFunction : F
    # Boundary :
    # isInitiated : TRUE
    # isSelectionByMeshID : T
    # isSelectionByElemNum : F
    # isSelectionByNodeNum : F
    # isSelectionByBox : F
    # CurveMeshID :
    size : 1
    3
    # NodalValue : 0.00000
    # name : NonZeroDBC
    # idof : 1
    # nodalValueType : CONSTANT
    # useFunction : F
    # Boundary :
    # isInitiated : TRUE
    # isSelectionByMeshID : T
    # isSelectionByElemNum : F
    # isSelectionByNodeNum : F
    # isSelectionByBox : F
    # CurveMeshID :
    size : 1
    6
    # NodalValue : 1.00000
    # Dom : ASSOCIATED
    # rhs : ASSOCIATED
    # sol : ASSOCIATED
    # nodeCoord : ASSOCIATED
    LinearStaticCDR is in CONVECTIVE form
    # vel : ASSOCIATED
    ```

!!! settings "Cleanup"

```fortran
    CALL obj%Deallocate( )
    CALL dom%Deallocate()
    CALL param%Deallocate()
    CALL FPL_FINALIZE()
END PROGRAM main
```
