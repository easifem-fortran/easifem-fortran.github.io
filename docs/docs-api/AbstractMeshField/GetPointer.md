# GetPointer

Returns the pointer to fortran array stored inside `AbstractMeshField`

<span class="badge badge--secondary"> @GetMethods </span>

:::caution
You should not use this method, if you do not know what you are doing.
:::

## Interface

```fortran
INTERFACE
  MODULE FUNCTION obj_GetPointer(obj) RESULT(ans)
    CLASS(AbstractMeshField_), TARGET, INTENT(IN) :: obj
    REAL(DFP), POINTER :: ans(:, :)
  END FUNCTION obj_GetPointer
END INTERFACE
```
