# GetName

Get the name of the function.

<span class="badge badge--secondary"> @GetMethods </span>

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION auf_GetName(obj) RESULT(ans)
    CLASS(UserFunction_), INTENT(IN) :: obj
    CHARACTER(:), ALLOCATABLE :: ans
  END FUNCTION auf_GetName
END INTERFACE
```
