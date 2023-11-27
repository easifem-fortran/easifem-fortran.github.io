# Structure

Monomial in 1D is given by $x^{n}$. Monomial1D class is designed for this task. It is a child of `AbstractBasis1D_` defined in [[AbstractBasis_]].

```fortran
TYPE, EXTENDS(AbstractBasis1D_) :: Monomial1D_
  PRIVATE
  INTEGER(I4B) :: degree = 0
CONTAINS
```

## Todo

- [ ] Add a zero monomial
- [ ] Add a method to get nth derivative
- [ ] Add integrate method
- [ ] Add evaluate integrate method

## ConstructorMethods

### Initiate

Construct an instance of `Monomial1D_`.

Interface:

```fortran
INTERFACE
  MODULE ELEMENTAL SUBROUTINE Initiate(obj, degree, varname)
    CLASS(Monomial1D_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: degree
    CHARACTER(LEN=*), INTENT(IN) :: varname
  END SUBROUTINE Initiate
END INTERFACE
```

Example: [[Monomial1D_test_1.md]], You can also use the function `Monomial1D` as shown in this example.

```fortran
CALL obj%Initiate(degree=1_I4B, varname="x")
```

or

```fortran
obj = Monomial1D(degree=1_I4B, varname="x")
```

### Deallocate

Example:

- [[Monomial1D_test_1.md]]

## GetMethods

### Eval

Evaluate the monomial at given point or points.

```fortran
INTERFACE
  MODULE ELEMENTAL FUNCTION eval(obj, x) RESULT(ans)
    CLASS(Monomial1D_), INTENT(IN) :: obj
    REAL(DFP), INTENT(IN) :: x
    REAL(DFP) :: ans
  END FUNCTION eval
END INTERFACE
```

Example:

- [[Monomial1D_test_3]]

```fortran
ans = obj%eval(x=1.0_DFP)
ans = obj%eval(x=[1.0_DFP, 2.0_DFP])
```

### EvalGradient

Evaluate the gradient at given point or points.

Interface:

```fortran
INTERFACE
  MODULE ELEMENTAL FUNCTION EvalGradient(obj, x) RESULT(ans)
    CLASS(Monomial1D_), INTENT(IN) :: obj
    REAL(DFP), INTENT(IN) :: x
    REAL(DFP) :: ans
  END FUNCTION EvalGradient
END INTERFACE
```

Example:

- [[Monomial1D_test_4]]

### OPERATOR(.Grad.)

Returns the gradient of Monomial in terms of Monomial. For example, if the  monomial is $x^{n}$, then `.GRAD.` operator returns monomial representing $x^{n-1}$.

Interface:

```fortran
INTERFACE
  MODULE ELEMENTAL FUNCTION Grad(obj) RESULT(ans)
    CLASS(Monomial1D_), INTENT(IN) :: obj
    TYPE(Monomial1D_) :: ans
  END FUNCTION Grad
END INTERFACE
```

Example:

- [[Monomial1D_test_4.md]]

!!! note "Grad"
    Note that you can also use `obj%Grad()` function to get the gradient.

### GetStringForUID

Returns the string for creating UID of the monomial. This method is for internal use only.

### GetDegree

Returns the degree of the monomial.

Interface:

```fortran
INTERFACE
  MODULE ELEMENTAL FUNCTION GetDegree(obj) RESULT(ans)
    CLASS(Monomial1D_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION GetDegree
END INTERFACE
```

!!! example "Examples"
    - [[Monomial1D_test_6]]

### GetDisplayString

Returns the string for display purpose. This routine is for internal use only.

### GetCoeff

Returns the coefficient of monomial, which is always 1.0.

## IOMethods

### Display

Display the monomial on the screen.

!!! example "Examples"
    - [[Monomial1D_test_1]]
    - [[Monomial1D_test_2]]

## OperatorMethods

### OPERATOR(*)

OPERATOR(*) multiplies two Monomial.

!!! example "Examples"
    - [[Monomial1D_test_2.md]]

### ASSIGNMENT(=)

Following assignments are valid:

```fortran
obj1= obj2
obj1(:) = obj2(:)
```

where, `obj1` and `obj2` are instances of `Monomial1D`

## BasisMethods

## Monomials1D

Generate monomials from order = 0 to N.

Interface:

```fortran
INTERFACE
  MODULE PURE FUNCTION Monomials1D(order, varname) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order
    CHARACTER(LEN=*), INTENT(IN) :: varname
    !! variable varname
    TYPE(Monomial1D_), ALLOCATABLE :: ans(:)
    !! vector of monomial
  END FUNCTION Monomials1D
END INTERFACE
```

!!! example "Examples"
    - [[Monomial1D_test_5.md]]

## EvenMonomials1D

Generate even monomials from order = 0, 2, to 2N.

Interface:

```fortran
INTERFACE
  MODULE PURE FUNCTION EvenMonomials1D(order, varname) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order
    CHARACTER(LEN=*), INTENT(IN) :: varname
    !! variable varname
    TYPE(Monomial1D_), ALLOCATABLE :: ans(:)
    !! vector of monomial
  END FUNCTION EvenMonomials1D
END INTERFACE
```

!!! example "Examples"
    - [[Monomial1D_test_5.md]]

## OddMonomials1D

Generate odd ordered monomials from order = 1, 2, to (2N+1)/2.

Interface:

```fortran
INTERFACE
  MODULE PURE FUNCTION OddMonomials1D(order, varname) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order
    CHARACTER(LEN=*), INTENT(IN) :: varname
    !! variable varname
    TYPE(Monomial1D_), ALLOCATABLE :: ans(:)
    !! vector of monomial
  END FUNCTION OddMonomials1D
END INTERFACE
```

!!! example "Examples"
    - [[Monomial1D_test_5.md]]
