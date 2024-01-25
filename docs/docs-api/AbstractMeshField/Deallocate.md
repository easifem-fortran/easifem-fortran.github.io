# Deallocate

This method dealllocates the data stored in `AbstractMeshField`.

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

```fortran
INTERFACE AbstractMeshFieldDeallocate
  MODULE SUBROUTINE Deallocate(obj)
    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj
  END SUBROUTINE Deallocate
END INTERFACE AbstractMeshFieldDeallocate
```

## Interface 2

```fortran
INTERFACE AbstractMeshFieldDeallocate
  MODULE SUBROUTINE Deallocate_Ptr_Vector(obj)
    TYPE(AbstractMeshFieldPointer_), ALLOCATABLE :: obj(:)
  END SUBROUTINE Deallocate_Ptr_Vector
END INTERFACE AbstractMeshFieldDeallocate
```
