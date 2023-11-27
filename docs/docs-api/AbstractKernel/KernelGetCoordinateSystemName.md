# KernelGetCoordinateSystemName

```fortran
INTERFACE
  MODULE FUNCTION KernelGetCoordinateSystemName(uid) RESULT(Ans)
    INTEGER(I4B), INTENT(IN) :: uid
    TYPE(String) :: ans
  END FUNCTION KernelGetCoordinateSystemName
END INTERFACE
```
