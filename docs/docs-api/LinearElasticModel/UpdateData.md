# UpdateData

Update constitutive data.

<span class="badge badge--secondary"> @SetMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE UpdateData(obj, DATA)
    CLASS(LinearElasticModel_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(INOUT) :: DATA(:)
  END SUBROUTINE UpdateData
END INTERFACE
```
