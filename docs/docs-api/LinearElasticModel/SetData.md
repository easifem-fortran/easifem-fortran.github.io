# SetData

Set the data.

<span class="badge badge--secondary"> @SetMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetData(obj, DATA)
    CLASS(LinearElasticModel_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: DATA(:)
  END SUBROUTINE SetData
END INTERFACE
```
