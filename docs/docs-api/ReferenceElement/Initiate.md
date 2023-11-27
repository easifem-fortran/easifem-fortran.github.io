# Initiate

Initiates an instance of ReferenceElement.

## Interface

```fortran
  MODULE PURE SUBROUTINE Initiate(obj, Anotherobj)
    CLASS(ReferenceElement_), INTENT(INOUT) :: obj
    CLASS(ReferenceElement_), INTENT(IN) :: Anotherobj
  END SUBROUTINE Initiate
```

Copy one reference element into another reference element.

## ASSIGNMENT(=)

Copy one reference element into another reference element.

```fortran
  MODULE PURE SUBROUTINE Initiate(obj, Anotherobj)
    CLASS(ReferenceElement_), INTENT(INOUT) :: obj
    CLASS(ReferenceElement_), INTENT(IN) :: Anotherobj
  END SUBROUTINE Initiate
```

## ReferenceElement_Pointer

```fortran
  MODULE FUNCTION refelem_Constructor_1(xidim, nsd, elemType) RESULT(Ans)
    INTEGER(I4B), INTENT(IN) :: xidim, nsd, elemType
    CLASS(ReferenceElement_), POINTER :: ans
  END FUNCTION refelem_Constructor_1
```

```fortran
  MODULE FUNCTION refelem_Constructor_2( refelem ) RESULT( ans )
    CLASS( ReferenceElement_ ), INTENT( IN ) :: refelem
    CLASS( ReferenceElement_ ), POINTER :: ans
  END FUNCTION refelem_Constructor_2
```
