## Structure

`Monomial2D_` is a child of [[AbstractBasis2D_]]. It defines a monomial of two variables.

$$
m(x,y,z) = x^{n1} y^{n1}
$$

```fortran
TYPE, EXTENDS( AbstractBasis2D_ ) :: Monomial2D_
  PRIVATE
  INTEGER( I4B ) :: n1 = -1_I4B
  INTEGER( I4B ) :: n2 = -1_I4B
```

## ConstructorMethods

### Monomial2D constructor

It constructs the monomial. Currently, there are two Fortran interfaces as given below:

Interface-1: Specify the power and the name of variables.

```fortran
INTERFACE
MODULE ELEMENTAL FUNCTION Monomial2D( n1, n2, &
  & name1, name2 ) &
  & RESULT( ans )
  INTEGER( I4B ), INTENT( IN ) :: n1
    !! power of variable 1
  INTEGER( I4B ), INTENT( IN ) :: n2
    !! power for variable 2
  CHARACTER( LEN = * ), INTENT( IN ) :: name1
    !! name of variable 1
  CHARACTER( LEN = * ), INTENT( IN ) :: name2
    !! name of variable 2
  TYPE( Monomial2D_ ) :: ans
    !! Monomial2D = $x^{n1} y^{n2} z^{n3}$
END FUNCTION Monomial2D
END INTERFACE
```

!!! example "Example"
    - [[Monomial2D_test_1]]

Interface-2: Specify the two monomial in 1d, that is, [[Monomial1D_]].

```fortran
INTERFACE
MODULE ELEMENTAL FUNCTION Monomial2D( f1, f2 ) RESULT( ans )
  CLASS( Monomial1D_ ), INTENT( IN ) :: f1
    !! monomial for first variable
  CLASS( Monomial1D_ ), INTENT( IN ) :: f2
    !! monomial for second variable
  TYPE( Monomial2D_ ) :: ans
    !! ans = f1*f2*f3
END FUNCTION Monomial2D
END INTERFACE
```

!!! example "Example"
    - [[Monomial2D_test_2]]

### Monomial2D_Pointer

This function returns the pointer to a newly created instance of [[Monomial2D_]]. There are two fortran interfaces same as the one given above.

### Deallocate

It deallocate or reset the monomial.

Interface:

```fortran
CALL obj%Deallocate()
```

!!! example "Example"
    - [[Monomial2D_test_1]]

## GetMethods

### Eval

Evaluate the monomial at `x,y` point.

Interface:

```fortran
INTERFACE
  MODULE ELEMENTAL FUNCTION Eval( obj, x, y ) RESULT( ans )
    CLASS( Monomial2D_ ), INTENT( IN ) :: obj
    REAL( DFP ), INTENT( IN ) :: x, y
    REAL( DFP ) :: ans
  END FUNCTION Eval
END INTERFACE
```

!!! example "Example"
    - [[Monomial2D_test_4]]

### EvalGradient

Evaluate the gradient of a monomial at `x,y`.

Interface:

```fortran
INTERFACE
MODULE ELEMENTAL FUNCTION EvalGradient( obj, x, y, dim ) &
  & RESULT( ans )
  CLASS( Monomial2D_ ), INTENT( IN ) :: obj
  REAL( DFP ), INTENT( IN ) :: x
  REAL( DFP ), INTENT( IN ) :: y
  INTEGER( I4B ), INTENT( IN ) :: dim
  REAL( DFP ) :: ans
END FUNCTION EvalGradient
END INTERFACE
```

!!! note "dim"
    For `dim=1,2,3` we evaluate $\frac{dm}{dx}$, $\frac{dm}{dy}$, $\frac{dm}{dz}$, respectively.

!!! example "Example"
    - [[Monomial2D_test_4]]

### Grad

Returns a monomial which is gradient of a given monomial.

Interface:

```fortran
INTERFACE
MODULE ELEMENTAL FUNCTION Grad( obj, dim ) RESULT( ans )
  CLASS( Monomial2D_ ), INTENT( IN ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: dim
  TYPE( Monomial2D_ ) :: ans
END FUNCTION Grad
END INTERFACE
```

!!! example "Example"
    - [[Monomial2D_test_5]]

### GetStringForUID

Returns a string for generating a unique id for the monomial.

!!! example "Example"
    - [[Monomial2D_test_6]]

### GetDisplayString

Returns a string for displaying the monomial.

!!! example "Example"
    - [[Monomial2D_test_6]]

### GetDegree

Returns the degree, $(n1,n2)$, of the monomial.

!!! example "Example"
    - [[Monomial2D_test_6]]

## IOMethods

### Display

Display the monomial on the screen.

Interface:

```fortran
INTERFACE
MODULE SUBROUTINE Display( obj, msg, unitno )
  CLASS( Monomial2D_ ), INTENT( IN ) :: obj
  CHARACTER( LEN = * ), INTENT( IN ) :: msg
  INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: unitno
END SUBROUTINE Display
END INTERFACE
```

Example:

- [[Monomial2D_test_1]]
- [[Monomial2D_test_2]]
- [[Monomial2D_test_3]]
- [[Monomial2D_test_4]]
- [[Monomial2D_test_5]]
- [[Monomial2D_test_6]]

## OperatorMethods

### Operator(*)

We can multiply two monomials to get another monomial.

Interface:

```fortran
m3 = m1 * m2
```

!!! example "Examples"
    - [[Monomial2D_test_3]]

### Assignment(=)

Assignment operator is overloaded.

Interface:

```fortran
m1 = m2
```

Interface:

```fortran
m1(:) = m2(:)
```

## BasisMethods

### Monomials2D

This function returns all the monomials for a given order on an element.

Interface:

```fortran
INTERFACE
MODULE FUNCTION Monomials2D( order, name1, name2, elemType ) &
  & RESULT( ans )
  INTEGER( I4B ), INTENT( IN ) :: order
    !! order
  CHARACTER( LEN = * ), INTENT( IN ) :: name1
    !! "x"
  CHARACTER( LEN = * ), INTENT( IN ) :: name2
    !! "y"
  INTEGER( I4B ), INTENT( IN ) :: elemType
    !! element type
    !! triangle, quadrangle
  TYPE( Monomial2D_ ), ALLOCATABLE :: ans( : )
    !! Monomials in 3D
END FUNCTION Monomials2D
END INTERFACE
```

!!! note "elemType"
    elemType defines the element type. It can take following values:
    - triangle
    - quadrangle

!!! example "Examples"
    - [[Monomial2D_test_5]] on triangle.
    - [[Monomial2D_test_6]] on quadrangle.
