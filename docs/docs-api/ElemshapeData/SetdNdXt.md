# SetdNdXt

This subroutine set $\frac{d N}{d X_t}$ internally. This subroutine will internally set `dNdXt`. It use the inverse of jacobian stored internally, so make sure jacobian is set before calling this  subroutine.

```fortran
  MODULE PURE SUBROUTINE setdNdXt(obj)
    CLASS(ElemshapeData_), INTENT(INOUT) :: obj
  END SUBROUTINE setdNdXt
```
