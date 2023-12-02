# GetElasticityType

Get elasticity type.

<span class="badge badge--secondary"> @GetMethods </span>

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetElasticityType(obj) RESULT(Ans)
    CLASS(LinearElasticModel_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION GetElasticityType
END INTERFACE
```
