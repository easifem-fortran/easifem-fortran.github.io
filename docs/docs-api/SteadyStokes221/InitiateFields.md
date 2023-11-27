# InitiateFields

This routine initiates the field variable, deferred type.

This is one of the most important subroutines.
The subroutine is called internally by `Set` method.
The subroutine initiates the global matrices, vectors, and container for material properties.
In detail this subroutine performs following tasks.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE InitiateFields(obj)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
  END SUBROUTINE InitiateFields
END INTERFACE
```

## Example

- `Kmat` is an instance of [MatrixField](../MatrixField/MatrixField_.md), which is a square matrix of shape, `nrow=ncol=tNodes_velocity * nsd`
- `Gmat` is an instance of [MatrixField](../MatrixField/MatrixField_.md), which is a rectangle matrix of shape `nrow=tNodes_velocity * nsd`, and `ncol=tNodes_pressure`
