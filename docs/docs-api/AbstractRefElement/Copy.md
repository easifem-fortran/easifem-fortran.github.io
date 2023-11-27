# Copy

Copy an instance of reference elements to another.

<span class="badge badge--primary"> Generic Method: ASSIGNMENT(=) </span>

This method is used for defining assignment operator.

## Interface

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Copy(obj, obj2)
    CLASS(AbstractRefElement_), INTENT(INOUT) :: obj
    CLASS(AbstractRefElement_), INTENT(IN) :: obj2
  END SUBROUTINE Copy
END INTERFACE
```
