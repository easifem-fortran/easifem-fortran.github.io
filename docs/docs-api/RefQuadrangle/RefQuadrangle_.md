# Structure

Reference Quadrangle element. It is a child of [[AbstractRefElement_]].

```fortran
TYPE, EXTENDS(AbstractRefElement_) :: RefQuadrangle_
```

## Methods

### Initiate

Initiate an instance of RefQuadrangle

Interface:

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, nsd)
    CLASS(RefQuadrangle_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nsd
  !! spatial dimension
  END SUBROUTINE Initiate
END INTERFACE
```

### GetFacetElements

### GetFacetTopology

### GetTopology
