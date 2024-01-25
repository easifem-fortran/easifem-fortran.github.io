# GetPrefix

Get the prefix.

<span class="badge badge--secondary"> @GetMethods </span>

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetPrefix(obj) RESULT(ans)
    CLASS(AbstractMeshField_), INTENT(IN) :: obj
    CHARACTER(:), ALLOCATABLE :: ans
  END FUNCTION GetPrefix
END INTERFACE
```
