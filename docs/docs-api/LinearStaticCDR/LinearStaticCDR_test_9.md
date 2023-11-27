---
title: LinearStaticCDR example 9
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

# LinearStaticCDR example 9

!!! note ""
    This example shows how to export the content of [[LinearStaticCDR_]] kernel in a [[HDF5File_]] file FORMAT.

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
    CHARACTER( LEN = * ), PARAMETER :: &
        & outfileName="./LinearStaticCDRExport.h5"
    TYPE( HDF5File_ ) :: domainFile
    TYPE( HDF5File_ ) :: outfile
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
    Set the PARAMETER for [[LinearStaticCDR_]]

```fortran
    CALL SetLinearStaticCDRParam( param=param, &
      & engine="NATIVE_SERIAL", &
      & isConservative = .False., &
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
    Now we set the Dirichlet boundary condition. First we SELECT the mesh
    boundary, THEN we prescribe the boundary condition.

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
    Let us repeat the PROCEDURE mentioned above to prescribe another boundary condition.

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
    Now that we are done setting the kernels properties, we will CALL `Set` method.

```fortran
    CALL obj%set()
```

!!! note "Export"
    Now we export the kernel in [[HDF5File_]] file

```fortran
    CALL outfile%Initiate(outfileName, "NEW")
    CALL outfile%Open()
    CALL obj%Export(outfile, "")
    CALL outfile%Deallocate()
```

!!! settings "Cleanup"

```fortran
    CALL obj%Deallocate( )
    CALL dom%Deallocate()
    CALL param%Deallocate()
    CALL FPL_FINALIZE()
END PROGRAM main
```
