``` fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( RefLine_ ) :: obj
  REAL( DFP ) :: avar, xij( 1, 2 )
  CALL obj%Initiate(nsd=1, baseInterpol="Lagrange", baseContinuity="H1")
  CALL OK(obj%GetName() .EQ. Line2, "GetName:")
END PROGRAM main
```

