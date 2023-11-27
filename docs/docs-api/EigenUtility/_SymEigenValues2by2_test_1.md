```fortran
PROGRAM main
USE easifemBase
```

```fortran
    REAL( DFP ) :: mat(2,2), w(2), e, exact(2)
    REAL( DFP ), PARAMETER :: tol= 1.0E-12
```

Test 1

```fortran
    e = 0.5
    exact = [1.0_DFP - e, 1.0_DFP + 4.0_DFP*e]
    mat(1,1) = 1+3*e
    mat(1,2) = 2*e
    mat(2,1) = 2*e
    mat(2,2) = 1
    !!
    w = SymEigenValues2by2(mat)
    !!
    CALL OK( ALL(SOFTEQ(w, exact, tol)), "e = "//tostring(e))
```

Test 2

```fortran
    e = 0.01
    exact = [1.0_DFP - e, 1.0_DFP + 4.0_DFP*e]
    mat(1,1) = 1+3*e
    mat(1,2) = 2*e
    mat(2,1) = 2*e
    mat(2,2) = 1
    !!
    w = SymEigenValues2by2(mat)
    !!
    CALL OK( ALL(SOFTEQ(w, exact, tol)), "e = "//tostring(e))
```

```fortran
END PROGRAM main
```
