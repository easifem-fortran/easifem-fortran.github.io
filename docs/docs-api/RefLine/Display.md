---
sidebar_position: 4
---

# Display

Display the content of reference element.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE Display(obj, msg, unitno)
    CLASS(AbstractRefElement_), INTENT(IN) :: obj
    CHARACTER(LEN=*), INTENT(IN) :: msg
    INTEGER(I4B), INTENT(IN), OPTIONAL :: unitno
  END SUBROUTINE Display
END INTERFACE
```
