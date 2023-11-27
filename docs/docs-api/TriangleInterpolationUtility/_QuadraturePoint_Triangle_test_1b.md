```fortran
PROGRAM main
USE easifembase
IMPLICIT NONE
INTEGER(i4b) :: i1, i2, order, quadType
REAL(dfp), ALLOCATABLE :: x(:, :), xij(:, :)
CHARACTER(20) :: refTriangle
order = 2
xij = RefTriangleCoord("UNIT")
quadType = Equidistance
refTriangle = "UNIT"
x = QuadraturePoint_Triangle(  &
  & order=order, &
  & quadType=quadType,  &
  & refTriangle=refTriangle)

CALL OK(test1(), "tests(1)")
CALL OK(test2(), "tests(2)")
CALL OK(test3(), "tests(3)")
CALL OK(.NOT. test4(), "tests(4)")

CONTAINS
FUNCTION test1() RESULT(ans)
  LOGICAL(LGT) :: ans
  REAL(DFP) :: exact, compute, tol
  INTEGER(I4B) :: ii
  compute = 0.0
  DO ii = 1, SIZE(x, 2)
    compute = compute + x(3, ii) * x(1, ii)**2
  END DO
  exact = 1.0_DFP / 12.0_DFP
  tol = 1.0E-10
  ans = SOFTEQ(exact, compute, tol)
END FUNCTION test1

FUNCTION test2() RESULT(ans)
  LOGICAL(LGT) :: ans
  REAL(DFP) :: exact, compute, tol
  INTEGER(I4B) :: ii
  compute = 0.0
  DO ii = 1, SIZE(x, 2)
    compute = compute + x(3, ii) * x(2, ii)**2
  END DO
  exact = 1.0_DFP / 12.0_DFP
  tol = 1.0E-10
  ans = SOFTEQ(exact, compute, tol)
END FUNCTION

FUNCTION test3() RESULT(ans)
  LOGICAL(LGT) :: ans
  REAL(DFP) :: exact, compute, tol
  INTEGER(I4B) :: ii
  compute = 0.0
  DO ii = 1, SIZE(x, 2)
    compute = compute + x(3, ii) * x(2, ii) * x(1, ii)
  END DO
  exact = 1.0_DFP / 24.0_DFP
  tol = 1.0E-10
  ans = SOFTEQ(exact, compute, tol)
END FUNCTION

FUNCTION test4() RESULT(ans)
  LOGICAL(LGT) :: ans
  REAL(DFP) :: exact, compute, tol
  INTEGER(I4B) :: ii
  compute = 0.0
  DO ii = 1, SIZE(x, 2)
    compute = compute + x(3, ii) * x(2, ii) * x(1, ii)**2
  END DO
  exact = 1.0_DFP / 60.0_DFP
  tol = 1.0E-10
  ans = SOFTEQ(exact, compute, tol)
END FUNCTION
END PROGRAM main
```
