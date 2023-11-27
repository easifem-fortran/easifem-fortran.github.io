# ApplyDirichletBC

This method should be implemented by the child.

```fortran
INTERFACE
  MODULE SUBROUTINE SSF_applyDirichletBC(obj)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
  END SUBROUTINE SSF_applyDirichletBC
END INTERFACE
```