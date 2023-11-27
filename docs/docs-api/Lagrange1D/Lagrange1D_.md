# Structure

`Lagrange1D_` class defines the Lagrange polynomial in 1D. It is a child of [[Polynomial1D_]].

```fortran
TYPE, EXTENDS(Polynomial1D_) :: Lagrange1D_
```

## Methods

### Initiate

- The following routine constructs lagrange at point $i$ from the given interpolation points $x$.
- It solves a linear system by LU decomposition by using Lapack lib

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate1(obj, i, x, varname)
    CLASS(Lagrange1D_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: i
  !! ith lagrange polynomial
    REAL(DFP), INTENT(IN) :: x(:)
  !! points, order = size(x) - 1
    CHARACTER(LEN=*), INTENT(IN) :: varname
  !! variable varname
  END SUBROUTINE Initiate1
END INTERFACE
```

- The following routine constructs lagrange at point $i$ from the vandermonde matrix.
- User provides the vandermonde matrix
- This routine copies vandermonde matrix internally and solves a linear system by using Lapack lib

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate2(obj, i, v, varname)
    CLASS(Lagrange1D_), INTENT(INOUT) :: obj
    !! lagrange1d
    INTEGER(I4B), INTENT(IN) :: i
    !! ith lagrange polynomial
    REAL(DFP), INTENT(IN) :: v(:, :)
    !! Vandermonde matrix
    CHARACTER(LEN=*), INTENT(IN) :: varname
    !! variable varname
  END SUBROUTINE Initiate2
END INTERFACE
```

- The following routine constructs lagrange polynomial at point $i$ from the lu decomposed vandermonde matrix.
- User provides the LU deomposition of vandermonde matrix
- The LU decomposition should be obtained by calling Lapack lib
- The GetLU method should be used to obtain LU decomposition and ipiv
- linear system of equations is solved by using Lapack lib

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate3(obj, i, v, ipiv, varname)
    CLASS(Lagrange1D_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: i
    !! ith lagrange polynomial
    REAL(DFP), INTENT(INOUT) :: v(:, :)
    !! LU decomposition of Vandermonde matrix
    INTEGER(I4B), INTENT(IN) :: ipiv(:)
    !! inverse pivoting mapping, compes from LU decomposition
    CHARACTER(LEN=*), INTENT(IN) :: varname
    !! variable varname
  END SUBROUTINE Initiate3
END INTERFACE
```

### Lagrange1D function

- This routine constructs the lagrange polynomial in 1D
- This routine calls the `Initiate1` method which is described above

Interface:

```fortran
INTERFACE
  MODULE FUNCTION Lagrange1D(i, x, order, varname) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: i
  !! ith lagrange polynomial
    REAL(DFP), INTENT(IN) :: x(:)
  !! points, order = size(x) - 1
    INTEGER(I4B), INTENT(IN) :: order
  !! order
    CHARACTER(LEN=*), INTENT(IN) :: varname
  !! variable varname
    TYPE(Lagrange1D_) :: ans
  END FUNCTION Lagrange1D
END INTERFACE
```

- The following routine calls the `Initiate2` method which is described above

Interface:

```fortran
INTERFACE
  MODULE FUNCTION Lagrange1D(i, v, order, varname) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: i
  !! ith lagrange polynomial
    REAL(DFP), INTENT(IN) :: v(:, :)
  !! Vandermonde matrix
    INTEGER(I4B), INTENT(IN) :: order
  !! order
    CHARACTER(LEN=*), INTENT(IN) :: varname
  !! variable varname
    TYPE(Lagrange1D_) :: ans
  END FUNCTION Lagrange1D
END INTERFACE
```

- The following routine calls the `Initiate3` method which is described above

Interface:

```fortran
INTERFACE
  MODULE FUNCTION Lagrange1D(i, v, order, ipiv, varname) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: i
  !! ith lagrange polynomial
    REAL(DFP), INTENT(INOUT) :: v(:, :)
  !! LU decomposition of Vandermonde matrix
    INTEGER(I4B), INTENT(IN) :: order
  !! order
    INTEGER(I4B), INTENT(IN) :: ipiv(:)
  !! inverse pivoting mapping, compes from LU decomposition
    CHARACTER(LEN=*), INTENT(IN) :: varname
  !! variable varname
    TYPE(Lagrange1D_) :: ans
  END FUNCTION Lagrange1D
END INTERFACE
```

!!! example "Example"
    - [[Lagrange1D_test_1]]

- The following function generates a set of n lagrange polynomials.

```fortran
INTERFACE
  MODULE FUNCTION Lagrange1D(x, order, varname) RESULT(ans)
    REAL(DFP), INTENT(IN) :: x(:)
    !! points, order = size(x) - 1
    INTEGER(I4B), INTENT(IN) :: order
    !! order
    CHARACTER(LEN=*), INTENT(IN) :: varname
    !! variable varname
    TYPE(Lagrange1D_) :: ans(SIZE(x))
  END FUNCTION Lagrange1D
END INTERFACE
```

!!! example "Example"
    - [[Lagrange1D_test_1]]

### Lagrange1D_Pointer

This function returns a pointer to a newly created instance of `Lagrange1D_`. The interface is same as the `Lagrange1D` function which is described above.
