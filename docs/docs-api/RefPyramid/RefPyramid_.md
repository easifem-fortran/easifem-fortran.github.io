# Structure

Reference Pyramid element. It is a child of [[AbstractRefElement_]].

```fortran
TYPE, EXTENDS(AbstractRefElement_) :: RefPyramid_
```

## Methods

### Initiate

Initiate an instance of RefPyramid

Interface:

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, nsd)
    CLASS(RefPyramid_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nsd
  !! spatial dimension
  END SUBROUTINE Initiate
END INTERFACE
```

### GetFacetElements

### GetFacetTopology

### GetTopology
