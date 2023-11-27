# Structure

This class defines the Polynomials in one argument.

### ConstructorMethods

### Polynomial1D function

We can create an instance by calling Polynomial1D function.

Interface

```fortran
  MODULE PURE FUNCTION Polynomial1D(coeff, degree, varname) &
    & RESULT(ans)
    REAL(DFP), INTENT(IN) :: coeff(:)
    INTEGER(I4B), INTENT(IN) :: degree(:)
    CHARACTER(LEN=*), INTENT(IN) :: varname
    TYPE(Polynomial1D_) :: ans
  END FUNCTION Polynomial1D
```

- `coeff` coefficient of polynomial
- `degree` degress of monomials
- `varname` variable name

!!! example "Example"
    - [[Polynomial1D_test_1]]

### Polynomial1D_Pointer

Same as `Polynomial1D` function, but returns the pointer to a newly created instance of Polynomial.

### Deallocate

Deallocate the Polynomial.

```fortran
CALL obj%Deallocate()
```

## GetMethods

### Eval

Evaluate the function at a given point.

Interface:

```fortran
  MODULE PURE FUNCTION Polynomial1D(coeff, degree, &
    & varname) RESULT(ans)
    REAL(DFP), INTENT(IN) :: coeff(:)
    INTEGER(I4B), INTENT(IN) :: degree(:)
    CHARACTER(LEN=*), INTENT(IN) :: varname
    TYPE(Polynomial1D_) :: ans
  END FUNCTION Polynomial1D
```

!!! example "Example"
    - [[Polynomial1D_test_2]]

### EvalGradient

Evaluate first derivative of the polynomial at a given point.

Interface:

```fortran
  MODULE ELEMENTAL FUNCTION EvalGradient(obj, x) RESULT(ans)
    CLASS(Polynomial1D_), INTENT(IN) :: obj
    REAL(DFP), INTENT(IN) :: x
    REAL(DFP) :: ans
  END FUNCTION EvalGradient
```

!!! example "Example"
    - [[Polynomial1D_test_2]]

### Grad

Returns the gradient of the polynomial as an instance of a polynomial.

Interface:

```fortran
  MODULE ELEMENTAL FUNCTION Grad(obj) RESULT(ans)
    CLASS(Polynomial1D_), INTENT(IN) :: obj
    TYPE(Polynomial1D_) :: ans
  END FUNCTION Grad
```

!!! example "Example"
    - [[Polynomial1D_test_2]]

### GetStringForUID

Returns the string for creating the UID. This routine is for internal use only.

### GetDegree

Returns the degrees of monomials.

!!! example "Example"
    - [[Polynomial1D_test_2]]

### GetDisplayString

REturns the string for displaying the contents of the Polynomial.

### GetCoeff

Returns the coefficient of the polynomials. See, [[Polynomial1D_test_2]]

### GetOrder

Returns the order of the Polynomial.

## IOMethods

### Display

Display the content of the polynomial.

## OperatorMethods

### OPERATOR(+)

- We can add two instances of [[Monomial1D_]] to obtain an instance of [[Polynomial1D_]].
- We can add a [[Monomial1D_]] and a scalar to get an instance of [[Polynomial1D_]]
- We can add an instance of [[Polynomial1D_]] and an instance of [[Monomial1D_]] to get an instance of [[Polynomial1D_]].
- We can add two instances of [[Polynomial1D_]] to get an instance of [[Polynomial1D_]].Grad.
- We can add an instance of [[Polynomial1D_]] and a scalar to get an instance of [[Polynomial1D_]].

!!! example "Examples"
    - [[Polynomial1D_test_5.md]]

### OPERATOR(*)

- We can multiply two instances of [[Monomial1D_]] to obtain an instance of [[Polynomial1D_]].
- We can multiply a [[Monomial1D_]] and a scalar to get an instance of [[Polynomial1D_]]
- We can multiply an instance of [[Polynomial1D_]] and an instance of [[Monomial1D_]] to get an instance of [[Polynomial1D_]].
- We can multiply two instances of [[Polynomial1D_]] to get an instance of [[Polynomial1D_]].Grad.
- We can multiply an instance of [[Polynomial1D_]] and a scalar to get an instance of [[Polynomial1D_]].

!!! example "Examples"
    - [[Polynomial1D_test_4.md]]

### OPERATOR(-)

- We can subtract two instances of [[Monomial1D_]] to obtain an instance of [[Polynomial1D_]].
- We can subtract a [[Monomial1D_]] and a scalar to get an instance of [[Polynomial1D_]]
- We can subtract an instance of [[Polynomial1D_]] and an instance of [[Monomial1D_]] to get an instance of [[Polynomial1D_]].
- We can subtract two instances of [[Polynomial1D_]] to get an instance of [[Polynomial1D_]].Grad.
- We can subtract an instance of [[Polynomial1D_]] and a scalar to get an instance of [[Polynomial1D_]].

!!! example "Examples"
    - [[Polynomial1D_test_6.md]]

### ASSIGNMENT(=)

- `Poly=Poly`
- `Poly=Mono`
- `Poly=Scalar`
