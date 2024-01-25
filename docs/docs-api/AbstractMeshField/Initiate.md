---
id: Initiate
aliases:
  - Initiate
tags: []
sidebar_position: 3
---

# Initiate

Initiate an instance of `AbstractMeshField_`.

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface 1 (Initiate by using param)

```fortran
INTERFACE AbstractMeshFieldInitiate
  MODULE SUBROUTINE Initiate1(obj, param, mesh)
    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    TYPE(Mesh_), TARGET, INTENT(IN) :: mesh
  END SUBROUTINE Initiate1
END INTERFACE AbstractMeshFieldInitiate
```

## Interface 2 (Initiate by copying)

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate2(obj, obj2, copyFull, copyStructure, &
    & usePointer)
    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj
    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj2
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: copyFull
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: copyStructure
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: usePointer
  END SUBROUTINE Initiate2
END INTERFACE
```

## Interface 3 (Initiate by AbstractMaterial)

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate3(obj, mesh, material, name, engine)
    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj
    !! AbstractMeshField
    TYPE(Mesh_), TARGET, INTENT(IN) :: mesh
    !! mesh
    CLASS(AbstractMaterial_), INTENT(INOUT) :: material
    !! Abstract material
    CHARACTER(*), INTENT(IN) :: name
    !! name of the AbstractMeshField
    CHARACTER(*), INTENT(IN) :: engine
    !! engine of the AbstractMeshField
  END SUBROUTINE Initiate3
END INTERFACE
```

## Interface 4 (Initiate by UserFunction)

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate4(obj, mesh, func, name, engine, nnt)
    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj
    !! AbstractMeshField
    TYPE(Mesh_), TARGET, INTENT(IN) :: mesh
    !! mesh
    CLASS(UserFunction_), INTENT(INOUT) :: func
    !! Abstract material
    CHARACTER(*), INTENT(IN) :: name
    !! name of the AbstractMeshField
    CHARACTER(*), INTENT(IN) :: engine
    !! engine of the AbstractMeshField
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: nnt
    !! number of nodes in time
  END SUBROUTINE Initiate4
END INTERFACE
```
