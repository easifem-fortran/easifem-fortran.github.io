import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This is a test program for [SymSmallestEigenVal](ARPACK.md#symsmallesteigenval) routine.

Import modules:

```fortran
PROGRAM main
USE easifemBase
Implicit none
```

Declare variables

```fortran
REAL( DFP ) :: minEigenVal
REAL( DFP ), ALLOCATABLE :: mat(:,:)
INTEGER( I4B ) :: ncv
```

Getting the <span class="badge badge--primary"> ALGEBRAIC </span> Smallest eigenvalue of a diagonal matrix.

<Tabs>

<TabItem value="command " label="🖳 Command" default>

```fortran {4}
  mat = zeros(100,100, 1.0_DFP)
  call SetDiag(mat=mat, d=arange(1, SIZE(mat,1)), diagNo=0)
  mat(1,1) = -1
  minEigenVal = SymSmallestEigenVal(mat=mat )
  CALL Display(minEigenVal, "smallest Algebraic eigen val =")
```

</TabItem>

<TabItem value="result" label="🚀 Result">

```fortran
smallest Algebraic eigen val =2.00000
```

</TabItem>

<TabItem value="close" label="◉ Close">

</TabItem>

</Tabs>

- In Line 4, we can also specify `which="SA"` (which is default option) for algebraic minimum value. Default value of `which` is `"SA"` which stands for <span class="badge badge--primary"> smallest </span> ALGEBRAIC eigenvalue.
- Getting the ABSOLUTE smallest eigenvalue of a diagonal matrix. In this case we provide extra argument `which="SM"`. When `which="SM"`, the returned eigenvalue can be positive.

<Tabs>

<TabItem value="command " label="🖳 Command" default>

```fortran
  minEigenVal = SymSmallestEigenVal(mat=mat, which="SM")
  call display(minEigenVal, "smallest absolute eigen val=")
```

</TabItem>

<TabItem value="result" label="🚀 Result">

```fortran
smallest absolute eigen val=-1.00000
```

</TabItem>

<TabItem value="close" label="◉ Close">

</TabItem>

</Tabs>

```fortran
END PROGRAM main
```
