---
sidebar_position: 2
---

# Structure

`DirichletBC_` is a child of `AbstractBC_` class. It is designed to handle Dirichlet boundary conditions in finite element method.

## Structure

```fortran
TYPE, EXTENDS(AbstractBC_) :: DirichletBC_
```

The module `DirichletBC_Class` defines following routines.

- [DEALLOCATE](Deallocate)
- [AddDirichletBC](AddDirichletBC)
- [GetDirichletBCPointer](GetDirichletBCPointer)
- [DirichletBCImportFromToml](DirichletBCImportFromToml)
