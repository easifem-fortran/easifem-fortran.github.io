# Display

Display reference element.

```fortran
  MODULE SUBROUTINE Display(obj, msg, unitno)
    CLASS(ReferenceElement_), INTENT(IN) :: obj
    CHARACTER(LEN=*), INTENT(IN) :: msg
    INTEGER(I4B), INTENT(IN), OPTIONAL :: unitno
  END SUBROUTINE Display
```

Display reference topology

```fortran
  MODULE SUBROUTINE Display(obj, msg, unitno)
    CLASS(ReferenceTopology_), INTENT(IN) :: obj
    CHARACTER(LEN=*), INTENT(IN) :: msg
    INTEGER(I4B), INTENT(IN), OPTIONAL :: unitno
  END SUBROUTINE Display
```
