$$
\left(\begin{array}{ccc}-2 & -4 & 2 \\-4 & 1 & 2\\2 & 2 & 5\end{array}\right)
$$

```fortran
PROGRAM main
USE easifemBase
```

```fortran
    REAL( DFP ) :: mat(3,3), w(3), exact(3)
    REAL( DFP ), PARAMETER :: tol= 1.0E-5
```

Test-1

```fortran
    exact = [-5.51082, 3.65928, 5.85154]
    mat = RESHAPE([-2._DFP,-4._DFP,2._DFP,-4._DFP,1._DFP,2._DFP,2._DFP,2._DFP,5._DFP], [3,3])
    !!
    w = SymEigenValues(mat)
    CALL Display(w, "w=")
    !!
    CALL OK( ALL(SOFTEQ(w, exact, tol)), "")
```

```fortran
END PROGRAM main
```
