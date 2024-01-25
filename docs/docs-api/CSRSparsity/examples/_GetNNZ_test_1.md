This example tests `GetNNZ` method.

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

TYPE(CSRSparsity_) :: obj1, obj2
INTEGER(I4B) :: nnz

CALL Initiate(obj=obj1, ia=[1, 2, 2, 3, 4], ja=[2, 1, 1], ncol=3)
CALL Initiate(obj=obj2, ia=[1, 3, 5, 6, 7], ja=[1, 2, 2, 3, 3, 3], ncol=3)

nnz = GetNNZ(obj1=obj1, obj2=obj2, op="+")
CALL OK(nnz .eq. 8, "Get NNZ: ")

nnz = GetNNZ(obj1=obj1, obj2=obj2, op="+", isSorted=.true.)
CALL OK(nnz .eq. 8, "Get NNZ: ")

END PROGRAM main
```
