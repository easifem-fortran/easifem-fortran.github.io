# Run

Run the simulation.

```fortran
INTERFACE
  MODULE SUBROUTINE run(obj, param)
    CLASS(AbstractKernel_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
  END SUBROUTINE run
END INTERFACE
```
