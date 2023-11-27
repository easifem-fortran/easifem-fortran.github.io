# Copy

Copy one instance of MeshSelection into another meshselection instance.

Calling example:

```fortran
obj=obj2
```

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE Copy(obj, obj2)
    CLASS(MeshSelection_), INTENT(INOUT) :: obj
    CLASS(MeshSelection_), INTENT(IN) :: obj2
  END SUBROUTINE Copy
END INTERFACE
```

This routine is also used to define assignment operator.
