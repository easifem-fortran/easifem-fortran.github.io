This example show how to initiate an instance of `Domain_`, `DOF_`, `CSRMatrix_` and set the sparsity pattern in the sparse matrix.
The velocity domain is given below.

![[figures/tri6.png]]

```fortran
PROGRAM main
    USE easifemBase
    USE easifemClasses
    IMPLICIT NONE
    TYPE( Domain_ ), TARGET :: pressureDomain
    TYPE( Domain_ ), TARGET :: velocityDomain
    TYPE( DomainPointer_ ) :: domains( 2 )
    TYPE( HDF5File_ ) :: pressureMeshFile
    TYPE( HDF5File_ ) :: velocityMeshFile
    TYPE( CSRMatrix_ ) :: mat
    TYPE( DOF_ ) :: dofobj
```

Open meshfile for velocity and pressure variable.

```fortran
    CALL velocityMeshFile%Initiate( FileName="./mesh_tri6.h5", MODE="READ" )
    CALL velocityMeshFile%Open()
    CALL pressureMeshFile%Initiate( FileName="./mesh_tri3.h5", MODE="READ" )
    CALL pressureMeshFile%Open()
```

Initiates domain for pressure and velocity variable.

```fortran
    CALL velocityDomain%Initiate( velocityMeshFile, "")
    CALL pressureDomain%Initiate( pressureMeshFile, "")
    domains(1)%ptr => velocityDomain
    domains(2)%ptr => pressureDomain
```

Now that the domain is ready, we can create a degree of freedom object DOF.

```fortran
    CALL Initiate( obj=dofobj, &
      & tNodes=[.tNodes. velocityDomain, .tNodes. pressureDomain], &
      & names=['V', 'P'], &
      & spaceCompo=[2, 1], &
      & timeCompo=[1,1], &
      & storageFMT=FMT_DOF)
```

Initiate an instance of [CSRMatrix](../CSRMatrix/CSRMatrix_.md), mat.

```fortran
    CALL Initiate( mat, ncol=.tnodes. dofobj, nrow=.tnodes. dofobj, &
      & dof=dofobj )
```

Now we will pass mat to domain and set the sparsity pattern.

```fortran
    CALL velocityDomain%SetSparsity( domains=domains, mat=mat )
    CALL SPY( mat, "test_5", ".png")
```

```fortran
    CALL Deallocate( mat )
    NULLIFY(domains(1)%ptr, domains(2)%ptr)
    CALL pressureDomain%Deallocate()
    CALL velocityDomain%Deallocate()
    CALL velocityMeshFile%Deallocate()
    CALL pressureMeshFile%Deallocate()
END PROGRAM main
```

The result of this program is given below.

![[figures/test_5.png]]
