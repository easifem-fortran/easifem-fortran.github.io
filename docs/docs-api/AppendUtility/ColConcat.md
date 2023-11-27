# ColConcat

This function concatenates the columns of array (of rank 1 or 2).

Calling examples:

```fortran
c(:,:) = a(:) .colconcat. b(:)
c(:,:) = a(:,:) .colconcat. b(:)
c(:,:) = a(:) .colconcat. b(:,:)
c(:,:) = a(:,:) .colconcat. b(:,:)
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
MODULE PURE FUNCTION colConcat(a, b) RESULT(ans)
    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: a(:)
    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: b(:)
    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), ALLOCATABLE :: ans(:, :)
END FUNCTION colConcat
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE16 from "./_ColConcat_test_1.md";

<EXAMPLE16 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
MODULE PURE FUNCTION colConcat(a, b) RESULT(ans)
  INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: a(:, :)
  INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: b(:)
  INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), ALLOCATABLE :: ans(:, :)
END FUNCTION colConcat
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE47 from "./_ColConcat_test_2.md";

<EXAMPLE47 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 3

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
MODULE PURE FUNCTION colConcat(a, b) RESULT(ans)
  INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: a(:)
  INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: b(:, :)
  INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), ALLOCATABLE :: ans(:, :)
END FUNCTION colConcat
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE75 from "./_ColConcat_test_2.md";

<EXAMPLE75 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 4

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
MODULE PURE FUNCTION colConcat(a, b) RESULT(ans)
  INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: a(:, :)
  INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: b(:, :)
  INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), ALLOCATABLE :: ans(:, :)
END FUNCTION colConcat
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE103 from "./_ColConcat_test_3.md";

<EXAMPLE103 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
