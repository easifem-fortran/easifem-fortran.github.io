# Copy

Copy sparse matrix into each other

## Interface

```fortran
INTERFACE
 MODULE SUBROUTINE Copy(From, To)
   TYPE(CSRMatrix_), INTENT(IN) :: From
   TYPE(CSRMatrix_), INTENT(INOUT) :: To
 END SUBROUTINE Copy
END INTERFACE
```
