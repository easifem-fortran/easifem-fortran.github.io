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

# AbstractPolySpace2D

<span class="badge badge--primary"> AbstractPolynomialSpace2D </span>

Abstract class for defining polynomial spaces.

## Structure

```fortran
TYPE, ABSTRACT :: AbstractPolynomialSpace2D_
  PRIVATE
  INTEGER(I4B) :: n = 0_I4B
  !! order of space
END TYPE AbstractPolynomialSpace2D_
```

## Methods

### Deallocate

Destroy the instance.

```fortran
INTERFACE
  MODULE SUBROUTINE Deallocate(obj)
    CLASS(AbstractPolynomialSpace2D_), INTENT(INOUT) :: obj
  END SUBROUTINE Deallocate
END INTERFACE
```

### Display

```fortran
INTERFACE
  MODULE SUBROUTINE Display(obj, msg, unitno)
    CLASS(AbstractPolynomialSpace2D_), INTENT(IN) :: obj
    CHARACTER(LEN=*), INTENT(IN) :: msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitno
  END SUBROUTINE Display
END INTERFACE
```

### SetParam

```fortran
INTERFACE
  MODULE PURE SUBROUTINE SetParam(obj, n)
    CLASS(AbstractPolynomialSpace2D_), INTENT(INOUT) :: obj
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: n
  END SUBROUTINE SetParam
END INTERFACE
```
