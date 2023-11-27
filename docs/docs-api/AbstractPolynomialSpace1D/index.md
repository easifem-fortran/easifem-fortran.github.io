---
sidebar_position: 1
date: 2023-08-04
update: 2023-08-04
status: stable
docs: done
extpkgs: none
category:
  - Basis
  - ShapeFunctions
tags:
  - easifemClasses
  - shapeFunctions
  - basis
---

# AbstractPolySpace1D

<span class="badge badge--primary"> AbstractPolynomialSpace1D </span>

Abstract class for defining polynomial spaces.

## Structure

```fortran
TYPE, ABSTRACT :: AbstractPolynomialSpace1D_
  PRIVATE
  INTEGER(I4B) :: n = 0_I4B
  !! order of space
END TYPE AbstractPolynomialSpace1D_
```

## Methods

### Deallocate

Destroy the instance.

```fortran
INTERFACE
  MODULE SUBROUTINE Deallocate(obj)
    CLASS(AbstractPolynomialSpace1D_), INTENT(INOUT) :: obj
  END SUBROUTINE Deallocate
END INTERFACE
```

### Display

```fortran
INTERFACE
  MODULE SUBROUTINE Display(obj, msg, unitno)
    CLASS(AbstractPolynomialSpace1D_), INTENT(IN) :: obj
    CHARACTER(LEN=*), INTENT(IN) :: msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitno
  END SUBROUTINE Display
END INTERFACE
```

### SetParam

```fortran
INTERFACE
  MODULE PURE SUBROUTINE SetParam(obj, n)
    CLASS(AbstractPolynomialSpace1D_), INTENT(INOUT) :: obj
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: n
  END SUBROUTINE SetParam
END INTERFACE
```
