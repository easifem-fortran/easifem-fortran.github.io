# IsInitiated

Returns true if the instance of `AbstractMaterialModel_` is initiated.

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

```fortran
FUNCTION isInitiated(obj) RESULT(ans)
  CLASS(AbstractMaterialModel_), INTENT(IN) :: obj
  LOGICAL(LGT) :: ans
  ans = obj%isInit
END FUNCTION isInitiated
```
