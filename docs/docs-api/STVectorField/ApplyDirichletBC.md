# ApplyDirichletBC

This method applies Dirichlet boundary condition to Space-time nodal vector.

Calling example:

TODO

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE stvField_applyDirichletBC1(obj, dbc)
    CLASS(STVectorField_), INTENT(INOUT) :: obj
    CLASS(DirichletBC_), INTENT(IN) :: dbc
  END SUBROUTINE stvField_applyDirichletBC1
END INTERFACE
```

## Interface 2

```fortran
INTERFACE
  MODULE SUBROUTINE stvField_applyDirichletBC2(obj, dbc)
    CLASS(STVectorField_), INTENT(INOUT) :: obj
    CLASS(DirichletBCPointer_), INTENT(IN) :: dbc(:)
  END SUBROUTINE stvField_applyDirichletBC2
END INTERFACE
```
