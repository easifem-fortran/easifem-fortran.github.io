# RectangleMatrixFieldCheckEssentialParam

Check essential parameters for constructing rectangle matrix field.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE RectangleMatrixFieldCheckEssentialParam(obj, param)
    CLASS(MatrixField_), INTENT(IN) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
  END SUBROUTINE RectangleMatrixFieldCheckEssentialParam
END INTERFACE
```
