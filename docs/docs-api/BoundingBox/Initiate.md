# Initiate

This routine initiates the bounding box.

## Interface

```fortran
INTERFACE
  MODULE PURE SUBROUTINE initiate(obj, nsd, lim)
    CLASS(BoundingBox_), INTENT(INOUT) :: obj
    !! Instance of bounding box
    INTEGER(I4B), INTENT(IN) :: NSD
    !! Spatial dimension
    REAL(DFP), INTENT(IN) :: lim(6)
    !! Extent of bounding box
  END SUBROUTINE initiate
END INTERFACE
```

```fortran
INTERFACE
  MODULE PURE SUBROUTINE initiate(obj, Anotherobj)
    CLASS(BoundingBox_), INTENT(INOUT) :: obj
    CLASS(BoundingBox_), INTENT(IN) :: Anotherobj
  END SUBROUTINE initiate
END INTERFACE
```

```fortran
INTERFACE
  MODULE PURE FUNCTION BoundingBox(nsd, lim) RESULT(Ans)
    TYPE(BoundingBox_) :: Ans
    INTEGER(I4B), INTENT(IN) :: nsd
    REAL(DFP), INTENT(IN) :: lim(6)
  END FUNCTION BoundingBox
END INTERFACE
```

```fortran
INTERFACE
  MODULE PURE FUNCTION BoundingBox(Anotherobj) RESULT(Ans)
    TYPE(BoundingBox_) :: Ans
    CLASS(BoundingBox_), INTENT(IN) :: Anotherobj
  END FUNCTION BoundingBox
END INTERFACE
```

```fortran
INTERFACE
  MODULE PURE FUNCTION BoundingBox(xij) RESULT(Ans)
    REAL(DFP), INTENT(IN) :: xij(:, :)
    !! Nodal coordinates xij( 1:nsd, 1:tnodes )
    TYPE(BoundingBox_) :: Ans
    !!
  END FUNCTION BoundingBox
END INTERFACE
```

```fortran
INTERFACE
  MODULE FUNCTION BoundingBox_Pointer(nsd, lim) RESULT(Ans)
    CLASS(BoundingBox_), POINTER :: Ans
    INTEGER(I4B), INTENT(IN) :: nsd
    REAL(DFP), INTENT(IN) :: lim(6)
  END FUNCTION BoundingBox_Pointer
END INTERFACE
```

```fortran
INTERFACE
  MODULE FUNCTION BoundingBox_Pointer(Anotherobj) RESULT(Ans)
    CLASS(BoundingBox_), POINTER :: Ans
    CLASS(BoundingBox_), INTENT(IN) :: Anotherobj
  END FUNCTION BoundingBox_Pointer
END INTERFACE
```

## Example

import EXAMPLE81 from "./_Initiate_test_1.md";

<EXAMPLE81 />
