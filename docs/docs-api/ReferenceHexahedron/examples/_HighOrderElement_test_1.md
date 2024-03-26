```fortran
PROGRAM main
USE easifembase
IMPLICIT NONE

TYPE(ReferenceHexahedron_) :: obj, high_obj
INTEGER(I4B), PARAMETER :: nsd = 3_I4B

CALL Initiate(obj=obj, nsd=nsd)

CALL obj%highOrderElement(order=2, highOrderObj=high_obj,  &
  & iptype=Equidistance)

CALL Display(high_obj, 'second order Obj : ')
END PROGRAM main
```
