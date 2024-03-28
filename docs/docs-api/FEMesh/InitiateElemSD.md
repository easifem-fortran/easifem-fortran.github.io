# InitiateElemSD

```fortran
  MODULE SUBROUTINE InitiateElemSD(obj, &
    & orderSpace,  &
    & linSpaceElem, &
    & spaceElem, &
    & quadTypeForSpace, &
    & continuityTypeForSpace, &
    & interpolTypeForSpace )
    CLASS(Mesh_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: orderSpace
      !! integrand order in space
    CLASS(ReferenceElement_), TARGET, INTENT(IN) :: linSpaceElem
      !! linear (simplex) space element
    CLASS(ReferenceElement_), TARGET, INTENT(IN) :: spaceElem
      !! space element
    CHARACTER(LEN=*), INTENT(IN) :: quadTypeForSpace
      !! quadrature for space
    CHARACTER(LEN=*), INTENT(IN) :: continuityTypeForSpace
      !! continuity for base in space
    CHARACTER(LEN=*), INTENT(IN) :: interpolTypeForSpace
      !! interpolation type for base in space
  END SUBROUTINE InitiateElemSD
```

```fortran
  MODULE SUBROUTINE mesh_initiateElemSD2(obj, &
    & orderSpace,  &
    & linSpaceElem, &
    & spaceElem, &
    & quadTypeForSpace, &
    & continuityTypeForSpace, &
    & interpolTypeForSpace, &
    & orderTime, &
    & linTimeElem, &
    & timeElem, &
    & quadTypeForTime, &
    & continuityTypeForTime, &
    & interpolTypeForTime, &
    & tvec)
    CLASS(Mesh_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: orderSpace
      !! integrand order in space
    CLASS(ReferenceElement_), TARGET, INTENT(IN) :: linSpaceElem
      !! linear space element
    CLASS(ReferenceElement_), TARGET, INTENT(IN) :: spaceElem
      !! space element
    CHARACTER(LEN=*), INTENT(IN) :: quadTypeForSpace
      !! quadrature type for space
    CHARACTER(LEN=*), INTENT(IN) :: continuityTypeForSpace
      !! continuity type of base in space
    CHARACTER(LEN=*), INTENT(IN) :: interpolTypeForSpace
      !! interpol type of base in space
    INTEGER(I4B), INTENT(IN) :: orderTime
      !! integrand order in time
    TYPE(ReferenceLine_), INTENT(IN) :: linTimeElem
      !! linear time element
    TYPE(ReferenceLine_), INTENT(IN) :: timeElem
      !! time element
    CHARACTER(LEN=*), INTENT(IN) :: quadTypeForTime
      !! quadrature type of base in time
    CHARACTER(LEN=*), INTENT(IN) :: continuityTypeForTime
      !! continuity type of base in time
    CHARACTER(LEN=*), INTENT(IN) :: interpolTypeForTime
      !! interpol type of base in time
    REAL(DFP), INTENT(IN) :: tvec(:)
  END SUBROUTINE mesh_initiateElemSD2
```

```fortran
  MODULE SUBROUTINE mesh_initiateElemSD3(obj, &
    & orderSpace,  &
    & linSpaceElem, &
    & spaceElem, &
    & quadTypeForSpace, &
    & continuityTypeForSpace, &
    & interpolTypeForSpace, &
    & orderTime, &
    & linTimeElem, &
    & timeElem, &
    & quadTypeForTime, &
    & continuityTypeForTime, &
    & interpolTypeForTime )
    CLASS(Mesh_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: orderSpace
      !! integrand order in space
    CLASS(ReferenceElement_), TARGET, INTENT(IN) :: linSpaceElem
      !! linear space element
    CLASS(ReferenceElement_), TARGET, INTENT(IN) :: spaceElem
      !! space element
    CHARACTER(LEN=*), INTENT(IN) :: quadTypeForSpace
      !! quadrature type of base in space
    CHARACTER(LEN=*), INTENT(IN) :: continuityTypeForSpace
      !! continuity type of base in space
    CHARACTER(LEN=*), INTENT(IN) :: interpolTypeForSpace
      !! interpolation type of base in space
    INTEGER(I4B), INTENT(IN) :: orderTime
      !! integrand order in time
    TYPE(ReferenceLine_), INTENT(IN) :: linTimeElem
      !! linear time element
    TYPE(ReferenceLine_), INTENT(IN) :: timeElem
      !! time element
    CHARACTER(LEN=*), INTENT(IN) :: quadTypeForTime
      !! quadrature type of base in time
    CHARACTER(LEN=*), INTENT(IN) :: continuityTypeForTime
      !! continuity type of base in time
    CHARACTER(LEN=*), INTENT(IN) :: interpolTypeForTime
      !! interpolation type of base in time
  END SUBROUTINE mesh_initiateElemSD3
```
