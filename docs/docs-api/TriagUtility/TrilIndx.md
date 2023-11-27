# TrilIndx

Returns the indices of lower triangle part of a matrix.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE PURE FUNCTION TrilIndx(m, n, diagNo) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: m
    !! number of rows
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: n
    !! number of columns, default = m
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: diagNo
    !! diagonal number, default = 0
    !! diagNo>0 means super diagonal
    !! diagNo<0 means subdiagonal
    INTEGER(I4B), ALLOCATABLE :: ans(:, :)
    !! ans(:,1) contains the row indices
    !! ans(:,2) contains the col indices
  END FUNCTION TrilIndx
END INTERFACE 
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./_TrilIndx_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION TrilIndx(A, diagNo) RESULT(ans)
    CLASS(*), INTENT(IN) :: A(:, :)
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: diagNo
    !! diagonal number, default = 0
    !! diagNo>0 means super diagonal
    !! diagNo<0 means subdiagonal
    INTEGER(I4B), ALLOCATABLE :: ans(:, :)
    !! ans(:,1) contains the row indices
    !! ans(:,2) contains the col indices
  END FUNCTION TrilIndx
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE45 from "./_TrilIndx_test_2.md";

<EXAMPLE45 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
