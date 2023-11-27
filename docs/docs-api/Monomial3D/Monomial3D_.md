## Structure

`Monomial3D_` is a child of [[AbstractBasis3D_]]. It defines a monomial in three variables.

$$
m(x,y,z) = x^{n1} y^{n1} z^{n1}
$$

```fortran
TYPE, EXTENDS( AbstractBasis3D_ ) :: Monomial3D_
  PRIVATE
  INTEGER( I4B ) :: n1 = -1_I4B
  INTEGER( I4B ) :: n2 = -1_I4B
  INTEGER( I4B ) :: n3 = -1_I4B
```

## ConstructorMethods

### Monomial3D constructor

It constructs the monomial. Currently, there are two Fortran interfaces as given below:

Interface-1: Specify the power and the name of variables.

```fortran
INTERFACE
MODULE ELEMENTAL FUNCTION Monomial3D( n1, n2, n3, &
  & varname1, varname2, varname3 ) &
  & RESULT( ans )
  INTEGER( I4B ), INTENT( IN ) :: n1
    !! power of variable 1
  INTEGER( I4B ), INTENT( IN ) :: n2
    !! power for variable 2
  INTEGER( I4B ), INTENT( IN ) :: n3
    !! power for variable 3
  CHARACTER( LEN = * ), INTENT( IN ) :: varname1
    !! varname of variable 1
  CHARACTER( LEN = * ), INTENT( IN ) :: varname2
    !! varname of variable 2
  CHARACTER( LEN = * ), INTENT( IN ) :: varname3
    !! name of variable 3
  TYPE( Monomial3D_ ) :: ans
    !! Monomial3D = $x^{n1} y^{n2} z^{n3}$
END FUNCTION Monomial3D
END INTERFACE
```

!!! example "Example"
    - [[Monomial3D_test_1]]

Interface-2:

Construct a 3D monomial from three monomial in 1d, that is, [[Monomial1D_]].

```fortran
INTERFACE
MODULE ELEMENTAL FUNCTION Monomial3D( f1, f2, f3 ) RESULT( ans )
  CLASS( Monomial1D_ ), INTENT( IN ) :: f1
    !! monomial for first variable
  CLASS( Monomial1D_ ), INTENT( IN ) :: f2
    !! monomial for second variable
  CLASS( Monomial1D_ ), INTENT( IN ) :: f3
    !! monomial for third variable
  TYPE( Monomial3D_ ) :: ans
    !! ans = f1*f2*f3
END FUNCTION Monomial3D
END INTERFACE
```

!!! example "Example"
    - [[Monomial3D_test_1]]

### Monomial3D_Pointer

This function returns the pointer to a newly created instance of [[Monomial3D_]]. There are two fortran interfaces same as the one given above.

!!! example "Example"
    - [[Monomial3D_test_2]]

### Deallocate

It deallocate or reset the monomial.

Interface:

```fortran
CALL obj%Deallocate()
```

!!! example "Example"
    - [[Monomial3D_test_1]]

## GetMethods

### Eval

Evaluate the monomial at `x,y,z` point.

Interface:

```fortran
INTERFACE
  MODULE ELEMENTAL FUNCTION Eval( obj, x, y, z ) RESULT( ans )
    CLASS( Monomial3D_ ), INTENT( IN ) :: obj
    REAL( DFP ), INTENT( IN ) :: x, y, z
    REAL( DFP ) :: ans
  END FUNCTION Eval
END INTERFACE
```

!!! example "Example"
    - [[Monomial3D_test_3]]

### EvalGradient

Evaluate the gradient of a monomial at `x,y,z`.

Interface:

```fortran
INTERFACE
MODULE ELEMENTAL FUNCTION EvalGradient( obj, x, y, z, dim ) &
  & RESULT( ans )
  CLASS( Monomial3D_ ), INTENT( IN ) :: obj
  REAL( DFP ), INTENT( IN ) :: x
  REAL( DFP ), INTENT( IN ) :: y
  REAL( DFP ), INTENT( IN ) :: z
  INTEGER( I4B ), INTENT( IN ) :: dim
  REAL( DFP ) :: ans
END FUNCTION EvalGradient
END INTERFACE
```

!!! note "dim"
    For `dim=1,2,3` we evaluate $\frac{dm}{dx}$, $\frac{dm}{dy}$, $\frac{dm}{dz}$, respectively.

!!! example "Example"
    - [[Monomial3D_test_4]]

### Grad

Returns a monomial which is gradient of a given monomial.

Interface:

```fortran
INTERFACE
MODULE ELEMENTAL FUNCTION Grad( obj, dim ) RESULT( ans )
  CLASS( Monomial3D_ ), INTENT( IN ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: dim
  TYPE( Monomial3D_ ) :: ans
END FUNCTION Grad
END INTERFACE
```

!!! example "Example"
    - [[Monomial3D_test_5]]

### GetStringForUID

Returns a string for generating a unique id for the monomial.

!!! example "Example"
    - [[Monomial3D_test_6]]

### GetDisplayString

Returns a string for displaying the monomial.

!!! example "Example"
    - [[Monomial3D_test_6]]

### GetDegree

Returns the degree, $(n1,n2,n3)$, of the monomial.

!!! example "Example"
    - [[Monomial3D_test_6]]

## IOMethods

### Display

Display the monomial on the screen.

Interface:

```fortran
INTERFACE
MODULE SUBROUTINE Display( obj, msg, unitno )
  CLASS( Monomial3D_ ), INTENT( IN ) :: obj
  CHARACTER( LEN = * ), INTENT( IN ) :: msg
  INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: unitno
END SUBROUTINE Display
END INTERFACE
```

!!! example "Example"
    - [[Monomial3D_test_1]]
    - [[Monomial3D_test_2]]
    - [[Monomial3D_test_3]]
    - [[Monomial3D_test_4]]
    - [[Monomial3D_test_5]]
    - [[Monomial3D_test_6]]

## OperatorMethods

### Operator(*)

We can multiply two monomials to get another monomial.

Interface:

```fortran
m3 = m1 * m2
```

!!! example "Examples"
    - [[Monomial3D_test_7]]

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

### Monomials3D

This function returns all the monomials for a given order on an element.

Interface:

```fortran
INTERFACE
MODULE FUNCTION Monomials3D( order, name1, name2, name3, elemType ) &
  & RESULT( ans )
  INTEGER( I4B ), INTENT( IN ) :: order
    !! order
  CHARACTER( LEN = * ), INTENT( IN ) :: name1
    !! "x"
  CHARACTER( LEN = * ), INTENT( IN ) :: name2
    !! "y"
  CHARACTER( LEN = * ), INTENT( IN ) :: name3
    !! "z"
  INTEGER( I4B ), INTENT( IN ) :: elemType
    !! element type
    !! tetrahedron, hexahedron, pyramid, prism
  TYPE( Monomial3D_ ), ALLOCATABLE :: ans( : )
    !! Monomials in 3D
END FUNCTION Monomials3D
END INTERFACE
```

!!! note "elemType"
    elemType defines the element type. It can take following values:
    - tetrahedron
    - hexahedron
    - pyramid
    - prism

!!! example "Examples"
    - [[Monomial3D_test_8]]
