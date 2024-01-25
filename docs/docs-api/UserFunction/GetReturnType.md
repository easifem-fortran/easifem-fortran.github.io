# GetReturnType

Get return type of user function.

<span class="badge badge--secondary"> @GetMethods </span>

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION auf_GetReturnType(obj) RESULT(ans)
    CLASS(UserFunction_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION auf_GetReturnType
END INTERFACE
```
