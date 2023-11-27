---
title: Structure
sidebar_position: 2
---

`AbstractField` is an abstract class for handling the finite element fields.

In FEM (or, grid-based methods), we work with variables (known or unknowns) of different ranks (scalar, vector, tensor, matrix). In easifem, these variables are called the field. We can define the fields by defining their values at :

- spatial nodes of spatial mesh
- spatial-temporal nodes of space-time slab
- spatial quadrature points of spatial mesh
- spatial-temporal quadrature points of space-time slab

In addition, EASIFEM also consider the global tangent matrix as a field. Fields are high level objects in finite element modeling. Also, implementation of these fields depends upon the engine, like `NATIVE_SERIAL`, `NATIVE_OMP`, `NATIVE_ACC`, `NATIVE_MPI`, `PETSC`, `LIS`, among others.

![](figures/AbstractField1.svg)

## Structure

```fortran
TYPE, ABSTRACT :: AbstractField_
  LOGICAL(LGT) :: isInitiated = .FALSE.
    !! It is true if the object is initiated
  INTEGER(I4B) :: fieldType = FIELD_TYPE_NORMAL
    !! fieldType can be normal, constant, can vary in space and/ or both.
  TYPE(Domain_), POINTER :: domain => NULL()
    !! Domain contains the information of the finite element meshes.
  TYPE(DomainPointer_), ALLOCATABLE :: domains(:)
    !! Domain for each physical variables
    !! The size of `domains` should be equal to the total number of
    !! physical variables.
    !! It is used in the case of BlockNodeField
    !! and BlockMatrixField
  TYPE(String) :: name
    !! name of the field
  TYPE(String) :: engine
    !! Engine of the field, for example
    !! NATIVE_SERIAL
    !! NATIVE_OMP,
    !! NATIVE_MPI,
    !! PETSC,
    !! LIS_SERIAL,
    !! LIS_OMP,
    !! LIS_MPI
  INTEGER(I4B) :: comm = 0_I4B
  !! communication group (MPI)
  INTEGER(I4B) :: myRank = 0_I4B
  !! rank of current processor (MPI)
  INTEGER(I4B) :: numProcs = 1_I4B
  !! Total number of processors (MPI)
  INTEGER(I4B) :: global_n= 0_I4B
  !! total number of nodes on all processors (MPI)
  INTEGER(I4B) :: local_n = 0_I4B
  !! local number of nodes on a given processor (MPI)
  INTEGER(I4B) :: is = 1_I4B
  !! starting index (MPI)
  INTEGER(I4B) :: ie = 0_I4B
  !! end index + 1 (MPI)
  INTEGER(INT64) :: lis_ptr = 0_INT64
  !! lis_ptr is pointer returned by the LIS library
  !! It is used when engine is LIS_OMP or LIS_MPI
```

![AbstractField2](figures/AbstractField2.svg)

