# Spy

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SPY(obj, filename, ext)
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    CHARACTER(*), INTENT(IN) :: filename
    CHARACTER(*), INTENT(IN) :: ext
  END SUBROUTINE SPY
END INTERFACE
```
