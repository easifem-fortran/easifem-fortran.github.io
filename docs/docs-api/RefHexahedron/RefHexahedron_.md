# Structure

Reference Hexahedron element. It is a child of [[AbstractRefElement_]].

```fortran
TYPE, EXTENDS(AbstractRefElement_) :: RefHexahedron_
```

## Methods

### Initiate

Initiate an instance of RefHexahedron

Interface:

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, nsd)
    CLASS(RefHexahedron_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nsd
  !! spatial dimension
  END SUBROUTINE Initiate
END INTERFACE
```

### GetFacetElements

### GetFacetTopology

### GetTopology
