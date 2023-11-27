# Arange

Returns a vector of integers (or reals) by specifying `istart`,  `iend`,  and `increment` values.

Calling example:

```fortran
avec = arange(istart, iend, increment)
```

- Default value of increment is 1.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION arange(istart, iend, increment) RESULT(Ans)
    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: istart
    !! Start value of the array
    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: iend
    !! End value of the array
    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN), OPTIONAL :: increment
    !! Array increment
    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), DIMENSION(:), ALLOCATABLE :: Ans
  END FUNCTION arange
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE15 from "./_Arange_test_1.md";

<EXAMPLE15 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
