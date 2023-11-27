# Harwell-Boeing

The Harwell-Boeing format is the most popular mechanism for text-file exchange of sparse matrix data.

The following information, taken from User's Guide for the Harwell-Boeing Sparse Matrix Collection provides a specification for this format.

- Matrix data is held in an 80-column, fixed-length format for portability.
- Each matrix begins with a multiple line header block, which is followed by two, three, or four data blocks.
- The header block contains summary information on the storage formats and space requirements.
- From the header block alone, the user can determine how much space will be required to store the matrix.
- Information on the size of the representation in lines is given for ease in skipping past unwanted data.

If there are no right-hand-side vectors, the matrix has a four-line header block followed by two or three data blocks containing, in order, the column (or element) start pointers, the row (or variable) indices, and the numerical values. If right-hand sides are present, there is a fifth line in the header block and a fourth data block containing the right-hand side(s). The blocks containing the numerical values and right-hand side(s) are optional. The right-hand side(s) can be present only when the numerical values are present. If right-hand sides are present, then vectors for starting guesses and the solution can also be present; if so, they appear as separate full arrays in the right-hand side block following the right-hand side vector(s).

- The first line contains the 72-character title and the 8-character identifier by which the matrix is referenced in our documentation.
- The second line contains the number of lines for each of the following data blocks as well as the total number of lines, excluding the header block.
- The third line contains a three character string denoting the matrix type as well as the number of rows, columns (or elements), entries, and, in the case of unassembled matrices, the total number of entries in elemental matrices.
- The fourth line contains the variable Fortran formats for the following data blocks.
- The fifth line is present only if there are right-hand sides. It contains a one character string denoting the storage format for the right-hand sides as well as the number of right-hand sides, and the number of row index entries (for the assembled case).
- The exact format is given by the following, where the names of the Fortran variables in the subsequent programs are given in parentheses:

```txt
Line 1 (A72,A8)
Col. 1 - 72 Title (TITLE)
Col. 73 - 80 Key (KEY)

Line 2 (5I14)
Col. 1 - 14 Total number of lines excluding header (TOTCRD)
Col. 15 - 28 Number of lines for pointers (PTRCRD)
Col. 29 - 42 Number of lines for row (or variable) indices (INDCRD)
Col. 43 - 56 Number of lines for numerical values (VALCRD)
Col. 57 - 70 Number of lines for right-hand sides (RHSCRD)
(including starting guesses and solution vectors if present)
(zero indicates no right-hand side data is present)

Line 3 (A3, 11X, 4I14)
Col. 1 - 3 Matrix type (see below) (MXTYPE)
Col. 15 - 28 Number of rows (or variables) (NROW)
Col. 29 - 42 Number of columns (or elements) (NCOL)
Col. 43 - 56 Number of row (or variable) indices (NNZERO)
(equal to number of entries for assembled matrices)
Col. 57 - 70 Number of elemental matrix entries (NELTVL)
(zero in the case of assembled matrices)

Line 4 (2A16, 2A20)
Col. 1 - 16 Format for pointers (PTRFMT)
Col. 17 - 32 Format for row (or variable) indices (INDFMT)
Col. 33 - 52 Format for numerical values of coefficient matrix (VALFMT)
Col. 53 - 72 Format for numerical values of right-hand sides (RHSFMT)

Line 5 (A3, 11X, 2I14) Only present if there are right-hand sides present
Col. 1 Right-hand side type:
F for full storage or
M for same format as matrix
Col. 2 G if a starting vector(s) (Guess) is supplied. (RHSTYP)
Col. 3 X if an exact solution vector(s) is supplied.
Col. 15 - 28 Number of right-hand sides (NRHS)
Col. 29 - 42 Number of row indices (NRHSIX)
            (ignored in case of unassembled matrices)
```

Note: For matrices in elemental form, the leading two dimensions in the header give the number of variables in the finite element application and the number of elements. It is common that not all of the variables in the application appear in the linear algebra subproblem; hence the matrix represented can be of lower order than the first parameter, described as the "number of variables (NROW)". The finite element variables are numbered from 1 to NROW, but only the subset of variables that actually appear in the list of variables for the elements define the rows and columns of the matrix. The actual order of the square matrix cannot be determined until all of the indices are read.
The three character type field on line 3 describes the matrix type. The following table lists the permitted values for each of the three characters. As an example of the type field, RSA denotes that the matrix is real, symmetric, and assembled.

```txt
First Character:
R Real matrix
C Complex matrix
P Pattern only (no numerical values supplied)

Second Character:
S Symmetric
U Unsymmetric
H Hermitian
Z Skew symmetric
R Rectangular

Third Character:
A Assembled
E Elemental matrices (unassembled)
```
