# IsEmpty

This function returns True if the bounding box is empty.

```fortran
INTERFACE
  MODULE PURE FUNCTION isEmpty(obj) RESULT(ans)
    CLASS(BoundingBox_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isEmpty
END INTERFACE
```
