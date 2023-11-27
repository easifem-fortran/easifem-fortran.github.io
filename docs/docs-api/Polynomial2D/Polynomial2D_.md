# Structure

[[Polynomial2D_]] is a class for two dimensional polynomial.

```fortran
TYPE, EXTENDS( AbstractFunction1D_ ) :: Polynomial2D_
  PRIVATE
  INTEGER( I4B ), ALLOCATABLE :: degree( :, : )
    !! power of each monomial
  REAL( DFP ), ALLOCATABLE :: coeff( : )
    !! coefficient
  TYPE( Monomial2D_ ), ALLOCATABLE :: x( : )
    !! Monomial2D
  CONTAINS
```

## Constructor Methods

### Polynomial2D Function

Creates an instance of [[Polynomial2D_]].

```fortran
INTERFACE
MODULE PURE FUNCTION Polynomial2D( coeff, degree, name1, name2) &
  & RESULT( ans )
  REAL( DFP ), INTENT( IN ) :: coeff( : )
  !! coefficients
  INTEGER( I4B ), INTENT( IN ) :: degree( :, : )
  !! degrees of x and y
  CHARACTER( LEN = * ), INTENT( IN ) :: name1
  !! variable x
  CHARACTER( LEN = * ), INTENT( IN ) :: name2
  !! variable y
  TYPE( Polynomial2D_ ) :: ans
END FUNCTION Polynomial2D
END INTERFACE
```

### Polynomial2D_Pointer

Creates a pointer of recently created [[Polynomial2D_]].

```fortran
INTERFACE
MODULE FUNCTION Polynomial2D_Pointer( coeff, degree, name1, name2) &
  & RESULT( ans )
  REAL( DFP ), INTENT( IN ) :: coeff( : )
  !! coefficients
  INTEGER( I4B ), INTENT( IN ) :: degree( :, : )
  !! degree of x and y
  CHARACTER( LEN = * ), INTENT( IN ) :: name1
  !! x
  CHARACTER( LEN = * ), INTENT( IN ) :: name2
  !! y
  CLASS( Polynomial2D_ ), POINTER :: ans
END FUNCTION Polynomial2D_Pointer
END INTERFACE
```

### Deallocate

Deallocate the data.

```fortran
INTERFACE
  MODULE SUBROUTINE Deallocate( obj )
    CLASS( Polynomial2D_ ), INTENT( INOUT ) :: obj
  END SUBROUTINE Deallocate
END INTERFACE
```

## IO Methods

## Set Methods

## Get Methods
