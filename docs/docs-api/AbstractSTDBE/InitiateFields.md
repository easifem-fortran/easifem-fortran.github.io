# InitiateFields

This method should be should be defined by children.

```fortran
INTERFACE
  MODULE SUBROUTINE SSF_InitiateFields(obj)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
  END SUBROUTINE SSF_InitiateFields
END INTERFACE

```