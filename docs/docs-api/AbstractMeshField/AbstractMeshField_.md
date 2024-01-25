---
sidebar_position: 2 
---

# Structure

```fortran
TYPE, ABSTRACT :: AbstractMeshField_
  LOGICAL(LGT) :: isInitiated = .FALSE.
  !! It is true if the object is initiated
  INTEGER(I4B) :: fieldType = FIELD_TYPE_NORMAL
  !! fieldType can be normal, constant, can vary in space and/ or both.
  TYPE(String) :: name
  !! name of the field
  TYPE(String) :: engine
  !! Engine of the field, for example
  !! NATIVE_SERIAL,
  !! NATIVE_OMP,
  !! NATIVE_MPI,
  !! PETSC,
  !! LIS_SERIAL,
  !! LIS_OMP,
  !! LIS_MPI
  INTEGER(I4B) :: tSize = 0
  !! total number of elements
  INTEGER(I4B) :: defineOn = 0
  !! Nodal: nodal values
  !! Quadrature: quadrature values
  INTEGER(I4B) :: rank = 0
  !! Scalar
  !! Vector
  !! Matrix
  INTEGER(I4B) :: varType = 0
  !! Space
  !! Time
  !! SpaceTime
  !! Constant
  INTEGER(I4B) :: s(MAX_RANK_FEVARIABLE) = 1
  !! shape of the data
  REAL(DFP), ALLOCATABLE :: val(:, :)
  !! values, val( :, iel ) corresponds to element number iel
  !! iel is local element number
  !! also, note that val( :, iel ) will be decoded
  !! based on the information stored in s(:)
  TYPE(Mesh_), POINTER :: mesh => NULL()
  !! Domain contains the information of the finite element meshes.
END TYPE AbstractMeshField_
```

:::info `varType`
`varType` specify how a value changes inside an element. The value can be constant, space-dependent, time-dependent, or space-time dependent.
:::

:::note `s`
`s` denotes the shape of data inside an element. The following rule is defined.

For a scalar field following rules are defined.

- For `varType=Constant`, `s` has length 1.
- For `varType=Space | Time`, `s` has length 1, which denotes the value at `Space` or `Time` nodes.
- For `varType=SpaceTime`, `s` has length 2, which denotes the value at `Space` and `Time` nodes.

For a vector field following rules are defined.

- For `varType=Constant`, `s` has length 1 which denotes all vector components.
- For `varType=Space | Time`, `s` has length 2, which denotes vector components at `Space` or `Time` nodes inside the element.
- For `varType=SpaceTime`, `s` has length 3, which denotes vector components at `Space` and `Time` nodes inside the element.

For a tensor field following rules are defined.

- For `varType=Constant`, `s` has length 2 which denotes tensor components.
- For `varType=Space | Time`, `s` has length 3 which denotes tensor components at `Space` or `Time` nodes inside the element.
- For `varType=SpaceTime`, `s` has length 4 which denotes tensor components at `Space` and `Time` nodes inside the element.

:::
