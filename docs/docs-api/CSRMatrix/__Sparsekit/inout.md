# Sparsekit Manual

This page provides the documentation of `inout.f`. The contents of this module are described below.

| Routine  | Description |
|---|---|
|  `READMT` | reads matrices in the Boeing/Harwell format.               |
|  `PRTMT`  | prints matrices in the Boeing/Harwell format.              |
|  `DUMP`   | outputs matrix rows in a simple format (debugging purposes)|
|  `PSPLTM` | generates a post-script plot of the non-zero pattern of A  |
|  `PLTMT`  | produces a 'pic' file for plotting a sparse matrix         |
|  `SMMS`   | write the matrx in a format used in SMMS package           |
|  `READSM` | reads matrics in coordinate format (as in SMMS package)    |
|  `READSK` | reads matrices in CSR format (simplified H/B formate).     |
|  `SKIT`   | writes matrics to a file, format same as above.            |
|  `PRTUNF` | writes matrics (in CSR format) unformatted                 |
|  `READUNF`| reads unformatted data of matrics (in CSR format)          |

## DUMP

```fortran
subroutine dump (i1,i2,values,a,ja,ia,iout)
  integer i1, i2, ia(*), ja(*), iout
  real*8 a(*)
  logical values
```

> outputs rows i1 through i2 of a sparse matrix stored in CSR format (or columns i1 through i2 of a matrix stored in CSC format) in a file, one (column) row at a time in a nice readable format. This is a simple routine which is useful for debugging.

on entry:

- i1 = first row (column) to print out
- i2 = last row (column) to print out
- values = logical. indicates whether or not to print real values.
- iout  = logical unit number for output. the output file iout will have written in it the rows or columns
of the matrix in one of two possible formats (depending on the max number of elements per row. The values are output with only two digits of accuracy)

## PSPLTM

```fortran
  subroutine pspltm(nrow,ncol,mode,ja,ia,title,ptitle,size,munt,
    nlines,lines,iunt)
    integer nrow,ncol,ptitle,mode,iunt, ja(*), ia(*), lines(nlines)
    real size
    character title*(*), munt*2
```

PSPLTM - PostScript PLoTer of a (sparse) Matrix. This version by loris renggli (renggli@masg1.epfl.ch), Dec 1991 and Youcef Saad.

input arguments description

- `NROW`   = number of rows in matrix
- `NCOL`   = number of columns in matrix
- `MODE`   = integer indicating whether the matrix is stored in CSR mode (mode=0) or CSC mode (mode=1) or MSR mode (mode=2)
- `JA`     = column indices of nonzero elements when matrix is stored rowise. Row indices if stores column-wise.
- `IA`     = integer array of containing the pointers to the beginning of the columns in arrays a, ja.
- `TITLE`  = character*(*). a title of arbitrary length to be printed as a caption to the figure. Can be a blank character if no caption is desired.
- `PTITLE` = position of title; 0 under the drawing, else above
- `SIZE`   = size of the drawing
- `MUNT`   = units used for size : 'cm' or 'in'
- `NLINES` = number of separation lines to draw for showing a partionning of the matrix. enter zero if no partition lines are wanted.
- `LINES`  = integer array of length `nlines` containing the coordinates of the desired partition lines . The partitioning is symmetric: a horizontal line across the matrix will be drawn in between rows lines(i) and lines(i)+1 for i=1, 2, ..., nlines an a vertical line will be similarly drawn between columns lines(i) and lines(i)+1 for i=1,2,...,nlines
- `IUNT`   = logical unit number where to write the matrix into.

> Use of 'cm' assumes european format for paper size (21cm wide) and use of 'in' assumes american format (8.5in wide). The correct centering of the figure depends on the proper choice. Y.S.