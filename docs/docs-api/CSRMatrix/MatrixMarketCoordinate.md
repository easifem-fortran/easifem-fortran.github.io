# Matrix Market Coordinate

[Reference](https://math.nist.gov/MatrixMarket/formats.html#MMformat)

This is the native exchange format for the Matrix Market.

The Matrix Market (MM) exchange formats provide a simple mechanism to facilitate the exchange of matrix data. In particular, the objective has been to define a minimal base ASCII file format which can be very easily explained and parsed, but can easily adapted to applications with a more rigid structure, or extended to related data objects. The MM exchange format for matrices is really a collection of affiliated formats which share design elements. In our initial specification, two matrix formats are defined.

A file format suitable for representing general sparse matrices. Only nonzero entries are provided, and the coordinates of each nonzero entry is given explicitly. This is illustrated in the example below.

- Comment starts with `%`

Consider the following `5x5` matrix:

```txt
1    0      0       6      0     
0   10.5    0       0      0     
0    0    .015      0      0     
0  250.5    0     -280    33.32  
0    0      0       0     12  
```

In MM coordinate format this could be represented as follows.

```txt
%%MatrixMarket matrix coordinate real general 
%=================================================================================
%
% This ASCII file represents a sparse MxN matrix with L 
% nonzeros in the following Matrix Market format:
%
% Indices are 1-based, i.e. A(1,1) is the first element.
%
%=================================================================================
  5  5  8
    1     1   1.000e+00
    2     2   1.050e+01
    3     3   1.500e-02
    1     4   6.000e+00
    4     2   2.505e+02
    4     4  -2.800e+02
    4     5   3.332e+01
    5     5   1.200e+01
```

### Header

```txt
%%MatrixMarket ${1} ${2} ${3} ${4} ${5}
```

- `${2}=matrix`
- `${3}=coorindate|array`
- `${4}=real|integer|complex|pattern|`
- `${5}=general|symmetric|skew-symmetric|Hermitian`

- The first line contains the type code. In this example, it indicates that the object being represented is a `matrix` in `coordinate` format and that the numeric data following is `real` and represented in `general` form. (By general we mean that the matrix format is not taking advantage of any symmetry properties.)
- Variants of the coordinate format are defined for matrices with complex and integer entries, as well as for those in which only the position of the nonzero entries is prescribed (pattern matrices). (These would be indicated by changing real to complex, integer, or pattern, respectively, on the header line).
- Additional variants are defined for cases in which symmetries can be used to significantly reduce the size of the data: symmetric, skew-symmetric and Hermitian. In these cases, only entries in the lower triangular portion need be supplied. In the skew-symmetric case the diagonal entries are zero, and hence they too are omitted. (These would be indicated by changing general to symmetric, skew-symmetric, or hermitian, respectively, on the header line).
