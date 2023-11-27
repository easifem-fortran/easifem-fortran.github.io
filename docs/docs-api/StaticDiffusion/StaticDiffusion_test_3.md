---
authors: Vikas Sharma, Ph. D.
date: 22 Oct 2021
update: 14 Nov 2021
title: StaticDiffusion example 3
tags:
  - SetStaticDiffusionParam
  - StaticDiffusion/Initiate
  - StaticDiffusion/CheckEssentialParam
  - StaticDiffusion/Display
  - Domain/Initiate
  - Domain/Open
  - HDF5File/Initiate
  - HDF5File/Open
  - SetLinSolverParam
---

# StaticDiffusion example 3

!!! note ""
    This example shows how to initiate an instance of [[StaticDiffusion_]]

## Modules and classes

- [[ParameterList_]]
- [[StaticDiffusion_]]
- [[HDF5File_]]

## Usage

!!! notes ""
    USE modules and declare variables

``` fortran
PROGRAM main
    USE easifemBase
    USE easifemClasses
    USE easifemKernels
    USE StaticDiffusion_Class
    IMPLICIT NONE
    TYPE(StaticDiffusion_) :: obj
    TYPE(ParameterList_) :: param
    TYPE(Domain_) :: dom
    CHARACTER( LEN = * ), PARAMETER :: domainFileName="./mesh.h5"
    TYPE( HDF5File_ ) :: domainFile
    INTEGER(I4B), PARAMETER :: tMaterials = 2, tDirichletBC=4, &
      & solverName = LIS_CG, preconditionOption=LEFT_PRECONDITION, &
      & convergenceIn = convergenceInRes, &
      & convergenceType=relativeConvergence, &
      & maxIter = 100, &
      & KrylovSubspaceSize=20
```

!!! note ""
    Initiate an instance of [[ParameterList_]].

```fortran
    CALL FPL_INIT(); CALL param%initiate()
```

!!! note ""
    Set parameters for [[StaticDiffusion_]] kernel.

```fortran
    CALL SetStaticDiffusionParam( &
      & param=param, &
      & engine="NATIVE_SERIAL", &
      & coordinateSystem=KERNEL_2D, &
      & tMaterials=tMaterials, &
      & tDirichletBC=tDirichletBC, &
      & domainFile=domainFileName, &
      & baseContinuity="H1", &
      & baseInterpolation="LagrangeInterpolation", &
      & quadratureType="GaussLegendre" )
```

Here, `baseContinuity`, `baseInterpolation`, and `quadratureType` are OPTIONAL.

!!! note ""
    Setting parameters for [[LinSolver_]]

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
    Initiate the computation domain.

```fortran
    CALL domainFile%Initiate(filename=domainFileName, mode="READ")
    CALL domainFile%Open()
    CALL dom%Initiate( domainFile, '' )
    CALL domainFile%Deallocate()
```

!!! note ""
    Initiate an instance of [[StaticDiffusion_]].

```fortran
    CALL obj%Initiate( param=param, dom=dom )
```

!!! note ""
    Display the content of the kernel.

```fortran
    CALL obj%Display( "StaticDiffusion :: ")
```

??? mesage "Results"

    ```bash
    # StaticDiffusion ::
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
    # material(1) : NOT ASSOCIATED
    # material(2) : NOT ASSOCIATED
    # materialToMesh : ALLOCATED, SIZE[2]
    # # materialToMesh(1) :
    # The object is not initiated, nothing to show!
    # # materialToMesh(2) :
    # The object is not initiated, nothing to show!
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
