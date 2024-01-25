# GetPrefix

Get the prefix.

<span class="badge badge--secondary"> @GetMethods </span>

## Interface

```fortran
INTERFACE
  MODULE FUNCTION obj_GetPrefix(obj) RESULT(ans)
    CLASS(AbstractMaterial_), INTENT(IN) :: obj
    CHARACTER(:), ALLOCATABLE :: ans
  END FUNCTION obj_GetPrefix
END INTERFACE
```
