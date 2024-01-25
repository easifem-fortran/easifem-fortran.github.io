# Shape

Returns the shape of the data in each element.

For a scalar field following rules are defined.

- For `varType=Constant`, `Shape` function returns a one dimensional vector.
- For `varType=Space | Time`, This function returns a one dimensional vector.
- For `varType=SpaceTime`, this function returns a two dimensional vector.

For a vector field following rules are defined.

- For `varType=Constant`, `Shape` function returns a one dimensional vector.
- For `varType=Space | Time`, This function returns a two dimensional vector.
- For `varType=SpaceTime`, this function returns a three dimensional vector.

For a tensor field following rules are defined.

- For `varType=Constant`, `Shape` function returns a two dimensional vector.
- For `varType=Space | Time`, This function returns a three dimensional vector.
- For `varType=SpaceTime`, this function returns a four dimensional vector.

<span class="badge badge--secondary"> @GetMethods </span>

## Interface

```fortran
INTERFACE
  MODULE FUNCTION Shape(obj) RESULT(ans)
    CLASS(AbstractMeshField_), INTENT(IN) :: obj
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION Shape
END INTERFACE
```
