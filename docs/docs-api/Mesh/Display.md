# Display

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE mesh_display(obj, msg, UnitNo)
    CLASS(Mesh_), INTENT(INOUT) :: obj
    !! mesh object
    CHARACTER(*), INTENT(IN) :: msg
    !! message on screen
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: UnitNo
    !! unit number of ouput file
  END SUBROUTINE mesh_display
END INTERFACE
```
