# Structure

[[Polynomial3D_]] is a class for polynomials of argument in $R^3$.

```fortran
TYPE, EXTENDS( AbstractFunction1D_ ) :: Polynomial3D_
  PRIVATE
  INTEGER( I4B ), ALLOCATABLE :: degree( :, : )
    !! power of each monomial
  REAL( DFP ), ALLOCATABLE :: coeff( : )
    !! coefficient
  TYPE( Monomial3D_ ), ALLOCATABLE :: x( : )
    !! Monomial3D
```

!!! note "degree"
    Degrees of each monomial

!!! note "coeff"
    Coefficient of each monomial

!!! note "x"
    A vector of [[Monomial3D_]]

## ConstructorMethods

### Polynomial3D constructor

Creates an instance of [[Polynomial3D_]].

Interface:

```fortran
INTERFACE
MODULE PURE FUNCTION Polynomial3D( coeff, degree, name1, name2, name3) &
  & RESULT( ans )
  REAL( DFP ), INTENT( IN ) :: coeff( : )
  !! coefficients
  INTEGER( I4B ), INTENT( IN ) :: degree( :, : )
  !! degrees of x and y
  CHARACTER( LEN = * ), INTENT( IN ) :: name1
  !! variable x
  CHARACTER( LEN = * ), INTENT( IN ) :: name2
  !! variable y
  CHARACTER( LEN = * ), INTENT( IN ) :: name3
  !! variable z
  TYPE( Polynomial3D_ ) :: ans
END FUNCTION Polynomial3D
END INTERFACE
```

Example:

- [[Polynomial3D_test_1]]

### Polynomial3D_Pointer

Creates a pointer to a newly created instance of [[Polynomial3D_]], the interface is same as the one given above.

Example:

- [[Polynomial3D_test_2.md]]

### Deallocate

Deallocate the data.

```fortran
INTERFACE
  MODULE SUBROUTINE Deallocate( obj )
    CLASS( Polynomial3D_ ), INTENT( INOUT ) :: obj
  END SUBROUTINE Deallocate
END INTERFACE
```

## IOMethods

### Display

Display the content of polynomial on the screen.

Interface:

```fortran
INTERFACE
MODULE SUBROUTINE Display( obj, msg, unitno )
  CLASS( Polynomial3D_ ), INTENT( IN ) :: obj
  CHARACTER( LEN = * ), INTENT( IN ) :: msg
  INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: unitno
END SUBROUTINE Display
END INTERFACE
```

## GetMethods

### Eval

Evaluate the polynomial at `x,y,z` point.

Interface:

```fortran
INTERFACE
  MODULE ELEMENTAL FUNCTION Eval( obj, x, y, z ) RESULT( ans )
    CLASS( Polynomial3D_ ), INTENT( IN ) :: obj
    REAL( DFP ), INTENT( IN ) :: x
    REAL( DFP ), INTENT( IN ) :: y
    REAL( DFP ), INTENT( IN ) :: z
    REAL( DFP ) :: ans
  END FUNCTION Eval
END INTERFACE
```

Example:

- [[Polynomial3D_test_3]]

### EvalGradient

Evaluate the gradient of polynomial.

Interface:

```fortran
INTERFACE
  MODULE ELEMENTAL FUNCTION EvalGradient( obj, x, y, z, dim ) &
    & RESULT( ans )
    CLASS( Polynomial3D_ ), INTENT( IN ) :: obj
    REAL( DFP ), INTENT( IN ) :: x
    REAL( DFP ), INTENT( IN ) :: y
    REAL( DFP ), INTENT( IN ) :: z
    INTEGER( I4B ), INTENT( IN ) :: dim
    REAL( DFP ) :: ans
  END FUNCTION EvalGradient
END INTERFACE
```

!!! note "dim"
    - dim=1 corresponds to $\frac{df}{dx}$
    - dim=2 corresponds to $\frac{df}{dy}$
    - dim=3 corresponds to $\frac{df}{dz}$

Example:

- [[Polynomial2D_test_4]]

### Grad

This function returns the gradient of a polynomial as an instance of [[Polynomial3D_]]

Interface:

```fortran
INTERFACE
MODULE FUNCTION Grad( obj, dim ) RESULT( ans )
  CLASS( Polynomial3D_ ), INTENT( IN ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: dim
  TYPE( Polynomial3D_ ) :: ans
END FUNCTION Grad
END INTERFACE
```

!!! note "dim"
    See the above remark on dim.

Example:

- [[Polynomial2D_test_5]]

### GetStringForUID

Returns the string for creating UID.

Example:

- [[Polynomial2D_test_6]]

### GetDisplayString

Returns the string for display.

Example:

- [[Polynomial2D_test_6]]

### GetDegree

Returns the degree.

Example:

- [[Polynomial2D_test_6]]

### GetCoeff

Returns the coefficient.

Example:

- [[Polynomial2D_test_6]]

### GetOrder

Returns the order of polynomial.

## AddMethods

Addition operator has been overloaded. Following operation is allowed.

```fortran
c = a + b
```

where, a, b, c are given in following table.

| a      | b      | c      |
|--------|--------|--------|
| Poly3D | Poly3D | Poly3D |
| Poly3D | Poly3D | Mono3D |
| Poly3D | Mono3D | Poly3D |
| Poly3D | Mono3D | Mono3D |
| Poly3D | Mono3D | Int8   |
| Poly3D | Mono3D | Int16  |
| Poly3D | Mono3D | Int32  |
| Poly3D | Mono3D | Int64  |
| Poly3D | Mono3D | Real32 |
| Poly3D | Mono3D | Real64 |
| Poly3D | Int8   | Mono3D |
| Poly3D | Int16  | Mono3D |
| Poly3D | Int32  | Mono3D |
| Poly3D | Int64  | Mono3D |
| Poly3D | Real32 | Mono3D |
| Poly3D | Real64 | Mono3D |
| Poly3D | Poly3D | Int8   |
| Poly3D | Poly3D | Int16  |
| Poly3D | Poly3D | Int32  |
| Poly3D | Poly3D | Int64  |
| Poly3D | Poly3D | Real32 |
| Poly3D | Poly3D | Real64 |
| Poly3D | Int8   | Poly3D |
| Poly3D | Int16  | Poly3D |
| Poly3D | Int32  | Poly3D |
| Poly3D | Int64  | Poly3D |
| Poly3D | Real32 | Poly3D |
| Poly3D | Real64 | Poly3D |

where,

- Poly3D is an instance of [[Polynomial3D_]]
- Mono3D is an instance of [[Monomial3D_]]

## SubtractMethods

Subtraction operator has been overloaded. Following operation is allowed.

```fortran
c = a - b
```

!!! note "a,b,c"
    a,b,c are given above.

## MultiplicationMethods

Multiplication operator has been overloaded. Following operation is allowed.

```fortran
c = a * b
```

!!! note "a,b,c"
    a,b,c are given above.
