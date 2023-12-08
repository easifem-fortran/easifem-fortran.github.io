---
id: index
aliases:
  - AbstractMeshField
tags:
  - fields
  - space-time
  - todo
  - easifemClasses
  - domain
  - mesh
  - vectors
  - linearAlgebra
category:
  - Fields
  - SpaceTime
  - Mesh
  - Domain
date: "2023-08-05"
docs: done
extpkgs: none
sidebar_position: 1
status: stable
update: "2023-08-05"
---

# AbstractMeshField

`AbstractMeshField_` is defined to contain the element level data inside a finite element. In simple terms it contains `Scalar`, `Vector`, and `Tensor` data defined inside the element of finite element mesh.

It can contains `nodal` or `quadrature` value.

:::info `nodal`
The nodal values are defined on the nodes of element.
:::

:::note `quadrature`
The quadrature values are defined on the Gauss-quadrature points of element. These points are usually different from the nodes of the element.
:::

This abstract class has following subclasses.

- [ScalarMeshField](/docs-api/ScalarMeshField)
- [STScalarMeshField](/docs-api/STScalarMeshField)
- [VectorMeshField](/docs-api/VectorMeshField)
- [STVectorMeshField](/docs-api/STVectorMeshField)
- [TensorMeshField](/docs-api/TensorMeshField)
- [STTensorMeshField](/docs-api/STTensorMeshField)

## Construct an instance

There are three ways to initiate an instance of `AbstractMeshField_`.

- Initiate by using `ParameterList_`
- Initiate by using `UserFunction_`
- Initiate by using `AbstractMaterial_`

### Initiate by using `ParameterList_`

In this case, first, we set the parameters in an instance of `ParameterList_`:

| Subclass                                         | Method to set parameters                                                           |
| ------------------------------------------------ | ---------------------------------------------------------------------------------- |
| [ScalarMeshField](/docs-api/ScalarMeshField)     | [SetScalarMeshFieldParam](/docs-api/ScalarMeshField/SetScalarMeshFieldParam)       |
| [STScalarMeshField](/docs-api/STScalarMeshField) | [SetSTScalarMeshFieldParam](/docs-api/STScalarMeshField/SetSTScalarMeshFieldParam) |
| [VectorMeshField](/docs-api/VectorMeshField)     | [SetVectorMeshFieldParam](/docs-api/VectorMeshField/SetVectorMeshFieldParam)       |
| [STVectorMeshField](/docs-api/STVectorMeshField) | [SetSTVectorMeshFieldParam](/docs-api/STVectorMeshField/SetSTVectorMeshFieldParam) |
| [TensorMeshField](/docs-api/TensorMeshField)     | [SetTensorMeshFieldParam](/docs-api/TensorMeshField/SetTensorMeshFieldParam)       |
| [STTensorMeshField](/docs-api/STTensorMeshField) | [SetSTTensorMeshFieldParam](/docs-api/STTensorMeshField/SetSTTensorMeshFieldParam) |

After setting the parameters, we call `Initiate` method to construct an instance of `AbstractMeshField_`. The interface of initiate method is given below.

```fortran
INTERFACE AbstractMeshFieldInitiate
  MODULE SUBROUTINE Initiate1(obj, param, mesh)
    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    TYPE(Mesh_), TARGET, INTENT(IN) :: mesh
  END SUBROUTINE Initiate1
END INTERFACE AbstractMeshFieldInitiate
```

### Initiate by using `UserFunction_`

To initiate an instance of `AbstractMeshField_` by using a [UserFunction](/docs-api/UserFunction), we call [Initiate](/docs-api/AbstractMeshField/Initiate) method, which has the following interface.

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, mesh, func, name, engine, nnt)
    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj
    TYPE(Mesh_), TARGET, INTENT(IN) :: mesh
    CLASS(UserFunction_), INTENT(INOUT) :: func
    CHARACTER(*), INTENT(IN) :: name
    CHARACTER(*), INTENT(IN) :: engine
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: nnt
  END SUBROUTINE Initiate
END INTERFACE
```

### Initiate by using `AbstractMaterial_`

To initiate an instance of [AbstractMeshField](/docs-api/AbstractMeshField) by using [AbstractMaterial](/docs-api/AbstractMaterial), we call [Initiate](/docs-api/AbstractMeshField/Initiate) method, which as following interface.

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, mesh, material, name, engine)
    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj
    TYPE(Mesh_), TARGET, INTENT(IN) :: mesh
    CLASS(AbstractMaterial_), INTENT(INOUT) :: material
    CHARACTER(*), INTENT(IN) :: name
    CHARACTER(*), INTENT(IN) :: engine
  END SUBROUTINE Initiate
END INTERFACE
```

## Setting value

### Setting value by using `FEVariable_`

By using [Set](/docs-api/AbstractMeshField/Set) method and the [FEVariable](/docs-api/FEVariable) we can set the individual value in the `AbstractMeshField_`. The interface is given below.

```fortran
INTERFACE
  MODULE SUBROUTINE Set(obj, globalElement, fevar)
    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: globalElement
    TYPE(FEVariable_), INTENT(IN) :: fevar
  END SUBROUTINE Set
END INTERFACE
```

### Setting value by using `UserFunction`

We can use [Set](/docs-api/AbstractMeshField/Set) method and the [UserFunction](/docs-api/UserFunction) to set the values in `AbstractMeshField_`. The interface of this method is given below.

```fortran
INTERFACE
  MODULE SUBROUTINE Set(obj, func, dom, timeVec)
    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj
    CLASS(UserFunction_), INTENT(INOUT) :: func
    CLASS(Domain_), INTENT(INOUT) :: dom
    REAL(DFP), OPTIONAL, INTENT(IN) :: timeVec(:)
  END SUBROUTINE Set
END INTERFACE
```

## Getting value

Currently, we can only get the individual values in an instance of [FEVariable](/docs-api/FEVariable). The interface is given below.

```fortran
INTERFACE
  MODULE SUBROUTINE Get(obj, globalElement, fevar)
    CLASS(AbstractMeshField_), INTENT(IN) :: obj
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: globalElement
    TYPE(FEVariable_), INTENT(INOUT) :: fevar
  END SUBROUTINE Get
END INTERFACE
```

## Methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
