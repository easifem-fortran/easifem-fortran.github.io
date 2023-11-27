# Sort

Sort is a function for sorting a vector, which also takes the name of sorting algorithm as an input.

Calling example

```fortran
ans = Sort(avec, name)
```

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
  MODULE PURE FUNCTION Sort(x, name) RESULT(ans)
    INTEGER(Int8|Int16|Int32|Int64) | REAL(Real32|Real64), INTENT(IN) :: x(:)
    CHARACTER(*), OPTIONAL, INTENT(IN) :: name
    INTEGER(Int32) :: ans(SIZE(x))
  END FUNCTION Sort
```

- `x` is a vector of reals or integers.
- `Real32`, `Real64` are supported.
- `Int8`, `Int16`, `Int32`, `Int64` are supported.
- `name` is name of sorting algorithm. Following algorithms are supported:
  - [x] HEAPSORT
  - [x] QUICKSORT
  - [x] INTROSORT, default
  - [x] INSERTIONSORT, default

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE16 from "./_Sort_test_1.md";

<EXAMPLE16 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
