# RowConcat

This function concates the rows of array (of rank 1 or 2).

Calling example:

```fortran
c(:,:) = a(:) .RowConcat. b(:)
c(:,:) = a(:,:) .RowConcat. b(:)
c(:,:) = a(:) .RowConcat. b(:,:)
c(:,:) = a(:,:) .RowConcat. b(:,:)
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
  MODULE PURE FUNCTION rowConcat(a, b) RESULT(ans)
    REAL(REAL32), INTENT(IN) :: a(:)
    REAL(REAL32), INTENT(IN) :: b(:)
    REAL(REAL32), ALLOCATABLE :: ans(:, :)
  END FUNCTION rowConcat
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE16 from "./_RowConcat_test_1.md";

<EXAMPLE16 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
  MODULE PURE FUNCTION rowConcat(a, b) RESULT(ans)
    REAL(REAL32), INTENT(IN) :: a(:, :)
    REAL(REAL32), INTENT(IN) :: b(:)
    REAL(REAL32), ALLOCATABLE :: ans(:, :)
  END FUNCTION rowConcat
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE41 from "./_RowConcat_test_2.md";

<EXAMPLE41 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 3

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
  MODULE PURE FUNCTION rowConcat(a, b) RESULT(ans)
    REAL(REAL32), INTENT(IN) :: a(:)
    REAL(REAL32), INTENT(IN) :: b(:, :)
    REAL(REAL32), ALLOCATABLE :: ans(:, :)
  END FUNCTION rowConcat
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE66 from "./_RowConcat_test_2.md";

<EXAMPLE66 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 4

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
  MODULE PURE FUNCTION rowConcat(a, b) RESULT(ans)
    REAL(REAL32), INTENT(IN) :: a(:, :)
    REAL(REAL32), INTENT(IN) :: b(:, :)
    REAL(REAL32), ALLOCATABLE :: ans(:, :)
  END FUNCTION rowConcat
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE103 from "./_RowConcat_test_3.md";

<EXAMPLE103 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
