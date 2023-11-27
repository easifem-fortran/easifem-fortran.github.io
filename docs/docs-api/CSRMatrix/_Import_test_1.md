```fortran
PROGRAM FIDAPM33
USE easifemBase
TYPE(csrmatrix_) :: obj, obj2, pmat, pmat2
TYPE(sparseMatrixReOrdering_) :: reorder
```

Import matrix

```fortran
CALL IMPORT(obj, "./matrixMarket/fidapm33.mtx", SPARSE_FMT_COO)
```

Let's see its content

```fortran
CALL SPY(obj=obj, filename="FIDAPM33_BEFORE", ext="png")
```

![](./figures/FIDAPM33_BEFORE.png)

```fortran title="Incomplete LU decompositiont"
CALL getILUD(obj=obj, Pmat=pmat, alpha=1.0_DFP, droptol=0.001_DFP)
CALL spy(obj=pmat, filename="FIDAPM33_ILUD_BEFORE", ext="png")
```

![](./figures/FIDAPM33_ILUD_BEFORE.png)

NestedDissect from Metis.

```fortran title="Cleanup"
! CALL NestedDissect(reorder=reorder, csrMat=obj)
! obj2 = Permute(obj, reorder, reorder)
! CALL SPY(obj2, "FIDAPM33_AFTER")
!
! CALL getILUD(obj=obj2, Pmat=pmat2, alpha=1.0_DFP, droptol=0.001_DFP)
! CALL spy(pmat2, "FIDAPM33_ILUD_AFTER")

CALL DEALLOCATE (obj)
CALL DEALLOCATE (obj2)
CALL DEALLOCATE (pmat)
CALL DEALLOCATE (pmat2)
END PROGRAM FIDAPM33
```
