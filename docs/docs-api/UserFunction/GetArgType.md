# GetArgType

Returns the argument type of the function.

<span class="badge badge--secondary"> @GetMethods </span>

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION auf_GetArgType(obj) RESULT(ans)
    CLASS(UserFunction_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION auf_GetArgType
END INTERFACE
```
