```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

CHARACTER(1024) :: file_name
INTEGER(I4B) :: unitno, iostat, rows, cols, nnz, nnzmax
CHARACTER(1024) :: iomsg
CHARACTER(50) :: rep, symm, field
INTEGER(I4B), ALLOCATABLE :: indx(:), jndx(:)
REAL(DFP), ALLOCATABLE :: val(:)

file_name = "./matrixMarket/fidap005.mtx"

OPEN (newunit=unitno, file=file_name, status="old", action="read", iostat=iostat, iomsg=iomsg)

IF (iostat .NE. 0) CALL display("Main error opening the file")

CALL MMRead(unitno, rep, field, symm, rows, cols, nnz, indx, jndx, val)

CALL Display([rows, cols, nnz], "rows, cols, nnz= ")
CALL Display(TRIM(rep), "matrix-type = ")
CALL Display(TRIM(field), "field type = ")
CALL Display(TRIM(symm), "matrix structure = ")
CALL Display(indx, "indx = ", advance="NO")
CALL Display(jndx, "jndx = ", advance="NO")
CALL Display(val, "val = ", advance="YES")

CLOSE (unitno)

END PROGRAM main
```
