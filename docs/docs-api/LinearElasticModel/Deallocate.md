# Deallocate

Deallocate the data stored in the `LinearElasticModel_`.

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE Deallocate(obj)
    CLASS(LinearElasticModel_), INTENT(INOUT) :: obj
  END SUBROUTINE Deallocate
END INTERFACE
```
