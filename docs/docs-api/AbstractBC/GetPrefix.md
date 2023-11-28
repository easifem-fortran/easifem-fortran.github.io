# GetPrefix

Get the prefix.

<span class="badge badge--secondary"> @GetMethods </span>

:::info
This method must be implemented by the subclass of `AbstractBC_`.
:::

## Interface

```fortran
INTERFACE
  MODULE FUNCTION bc_GetPrefix(obj) RESULT(ans)
    CLASS(AbstractBC_), INTENT(IN) :: obj
    CHARACTER(:), ALLOCATABLE :: ans
  END FUNCTION bc_GetPrefix
END INTERFACE
```
