# Deallocate

Deallocate the content stored in `AbstractMaterialModel_`.

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

```fortran
ABSTRACT INTERFACE
  SUBROUTINE Deallocate(obj)
    IMPORT :: AbstractMaterialModel_
    CLASS(AbstractMaterialModel_), INTENT(INOUT) :: obj
  END SUBROUTINE Deallocate
END INTERFACE
```
