---
title: LinearStaticCDR example 14b
authors: Vikas Sharma, Ph. D.
date: 30 Nov 2021
update: 30 Nov 2021
tags:
  - SetLinearStaticCDRParam
  - LinearStaticCDR/Initiate
  - LinearStaticCDR/CheckEssentialParam
  - LinearStaticCDR/AddMaterial
  - LinearStaticCDR/AddDirichletBC
  - LinearStaticCDR/GetDirichletBCPointer
  - LinearStaticCDR/Export
  - LinearStaticCDR/AssembleTanmat
  - LinearStaticCDR/AssembleRHS
  - LinearStaticCDR/Assemble
  - DirichletBC/Set
  - LinearStaticCDR/Display
  - Domain/Initiate
  - Domain/Open
  - HDF5File/Initiate
  - HDF5File/Open
  - SetLinSolverParam
---

# LinearStaticCDR example 14b

!!! note ""
    Example 2.6.2 from Donea and Huerta 2003 text book.

Mesh used in this example is given below.

![](./mesh.png)

- domain $\left \[0,1 \right \]$
- $\phi(0)=0, \phi(1)=1$
- $\nu=1$
- $Pe=0.9$ this is obtained by changing the velocity
- $h=0.1$

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
    TYPE( HDF5File_ ) :: domainFile
    TYPE( HDF5File_ ) :: outfile
    TYPE( MeshSelection_ ) :: region
    CLASS( DirichletBC_ ), POINTER :: dbc
    CHARACTER( LEN = * ), PARAMETER :: &
      & domainfilename="./test14.domain.h5"
    CHARACTER( LEN = * ), PARAMETER :: &
        & outfileName="./test14b.output.h5"
    INTEGER(I4B), PARAMETER :: tMaterials = 1, &
      & tDirichletBC=2, &
      & solverName = LIS_GMRES, &
      & preconditionOption=LEFT_PRECONDITION, &
      & convergenceIn = convergenceInRes, &
      & convergenceType=relativeConvergence, &
      & maxIter = 100, &
      & KrylovSubspaceSize=20
    REAL(DFP), parameter :: leftphi=0.0, &
      & rightphi=1.0, h=0.1, pe=0.9, nu=1.0
    REAL(DFP), parameter :: cvel = pe * 2.0 * nu / h
```

!!! note "ParameterList"
    Initiate an instance of [[ParameterList_]]

```fortran
    CALL FPL_INIT(); CALL param%Initiate()
```

!!! note "LinearStaticCDR"
    Set the PARAMETER for [[LinearStaticCDR_]]

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

!!! note "LinSolver"
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

!!! note "Domain"
    Initiates computation domain.

```fortran
    CALL domainFile%Initiate(filename=domainFileName, mode="READ")
    CALL domainFile%Open()
    CALL dom%Initiate( domainFile, '' )
    CALL domainFile%Deallocate()
```

!!! note "LinearStaticCDR"
    Initiate an instace of [[LinearStaticCDR_]] kernel

```fortran
    CALL obj%Initiate( param=param, dom=dom )
```

!!! note "addMaterial 1"
    Add another material and domain region in the [[LinearStaticCDR_]] kernel.

```fortran
    CALL region%Initiate( isSelectionByMeshID=.TRUE. )
    CALL region%Add( dim=2, meshID=[1] )
    CALL SetSolidMaterialParam( param=param, &
      & name="SolidMaterial", &
      & massDensity=1.0_DFP, &
      & diffusivity=nu )
    CALL obj%AddMaterial( materialNo=1, materialName="SolidMaterial",  &
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
    CALL region%Add( dim=1, meshID=[4] )
    CALL obj%AddDirichletBC( dbcNo=1, boundary=region, param=param )
    CALL region%Deallocate()
    dbc => obj%GetDirichletBCPointer( dbcNo=1 )
    CALL dbc%Set( ConstantNodalValue=leftphi ); dbc=>NULL()
```

!!! note "SetDirichletBC 2"
    Let us repeat the PROCEDURE mentioned above to prescribe another boundary condition.

```fortran
    CALL SetDirichletBCParam(param=param, name="NonZeroDBC", idof=1, &
      & nodalValueType=Constant, useFunction=.FALSE. )
    CALL region%Initiate( isSelectionByMeshID=.TRUE.)
    CALL region%Add( dim=1, meshID=[2] )
    CALL obj%AddDirichletBC( dbcNo=2, boundary=region, param=param )
    CALL region%Deallocate()
    dbc => obj%GetDirichletBCPointer( dbcNo=2 )
    CALL dbc%Set( ConstantNodalValue=rightphi ); dbc=>NULL()
```

!!! note "Set"
    Now that we are done setting the kernels properties, we will CALL `Set` method.

```fortran
    CALL obj%set()
```

!!! note "SetVelocity"
    Let us set the convective velocity

```fortran
    CALL obj%SetVelocity(constantVelocity=[cvel, 0.0_DFP])
```

!!! note "AssembleTanmat"
    Let us assemble the tangent matrix.

```fortran
   CALL obj%AssembleTanMat()
   CALL obj%AssembleRHS()
   CALL obj%Assemble()
```

!!! note "Solve"
    solve the system of linear equations.

```fortran
    CALL obj%Solve()
    CALL obj%Update(reset=.true.)
```

!!! note "Export"
    Now we export the kernel [[HDF5File_]] file

```fortran
    CALL outfile%Initiate(outfileName, "NEW")
    CALL outfile%Open()
    CALL obj%WriteData(outfile, "/1")
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
