---
tags:
  - ParameterList/Print
  - SetBlockMatrixFieldParam
  - BlockMatrixField/Initiate
  - BlockMatrixField/Set
  - BlockMatrixField/Display
  - BlockMatrixField/Deallocate
  - HDF5File/Initiate
  - HDF5File/Open
  - Domain/Initiate
---

# BlockMatrixField example 11

This example shows the usage of `Set` methods [BlockMatrixField](BlockMatrixField_.md).

Following modules are used

- [[BlockMatrixField_]]
- [[ParameterList_]]
- [[HDF5File_]]
- [[Domain_]]
- [[DomainPointer_]]

## Usage

Import modules and define variables

``` fortran
PROGRAM main
    USE easifemBase
    USE easifemClasses
    IMPLICIT NONE
    TYPE( BlockMatrixField_ ) :: obj
    TYPE( ParameterList_ ) :: param
    TYPE( Domain_ ), TARGET :: pressureDomain
    TYPE( Domain_ ), TARGET :: velocityDomain
    TYPE( DomainPointer_ ) :: domains( 2 )
    TYPE( HDF5File_ ) :: pressureMeshFile
    TYPE( HDF5File_ ) :: velocityMeshFile
    CHARACTER( LEN = * ), PARAMETER :: &
      & pressureMeshFilename="./mesh_tri3.h5"
    CHARACTER( LEN = * ), PARAMETER :: &
      & velocityMeshFilename="./mesh_tri6.h5"
```

```fortran
    CALL FPL_INIT(); CALL param%Initiate()
```

```fortran
    CALL SetBlockMatrixFieldParam(param=param, name="K",  &
      & physicalVarNames=["V", "P"], spaceCompo=[2, 1], &
      & timeCompo=[1,1], fieldType=FIELD_TYPE_NORMAL,  &
      & matrixProp="UNSYM" )
```

```fortran
    CALL pressureMeshfile%Initiate( FileName=pressureMeshFilename, MODE="READ" )
    CALL velocityMeshfile%Initiate( FileName=velocityMeshFilename, MODE="READ" )
    CALL pressureMeshfile%Open()
    CALL velocityMeshfile%Open()
```

```fortran
    CALL pressureDomain%Initiate( pressureMeshfile, "")
```

```fortran
    CALL velocityDomain%Initiate( velocityMeshfile, "")
```

```fortran
    CALL pressureMeshfile%Deallocate()
    CALL velocityMeshfile%Deallocate()
```

```fortran
    domains(1)%ptr => velocityDomain
    domains(2)%ptr => pressureDomain
```

```fortran
    CALL obj%Initiate(param=param, dom=domains)
```

```fortran
    CALL obj%Set(value=1.0_DFP)
```

```fortran
    CALL obj%Display("")
```

```fortran
    CALL obj%Deallocate()
```

```fortran
    CALL param%Deallocate(); CALL FPL_FINALIZE()
    NULLIFY(domains(1)%ptr, domains(2)%ptr)
    CALL pressureDomain%Deallocate()
    CALL velocityDomain%Deallocate()
    CALL obj%Deallocate()
END PROGRAM main
```
