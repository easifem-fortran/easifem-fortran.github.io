# Structure

Reference Prism element. It is a child of [[AbstractRefElement_]].

```fortran
TYPE, EXTENDS(AbstractRefElement_) :: RefPrism_
```

## Methods

### Initiate

Initiate an instance of RefPrism

Interface:

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, nsd)
    CLASS(RefPrism_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nsd
  !! spatial dimension
  END SUBROUTINE Initiate
END INTERFACE
```

### GetFacetElements

### GetFacetTopology

### GetTopology
