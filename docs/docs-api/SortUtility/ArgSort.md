# ArgSort

ArgSort function performs an indirect heap sort on an array.

It returns the integer array which can be used for obtaining the sorted array.

This function also takes the name of an algorithm as an argument.

Calling example:

```fortran
ans = ArgSort(x, name)
```

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
  MODULE PURE FUNCTION ArgSort(x, name) RESULT(ans)
    INTEGER(Int8|Int16|Int32|Int64), REAL(Real32|Real64), INTENT(IN) :: x(:)
    CHARACTER(*), OPTIONAL, INTENT(IN) :: name
    INTEGER(I4B) :: ans(SIZE(x))
  END FUNCTION ArgSort
```

- `x` is a vector of reals or integers
- `Real64` and `Real32` are supported
- `Int8` to `Int64` are supported
- The result is always a vector of integer(I4B).
- `name` is optional, and represents the name of the sorting algorithm. Following algorithms are supported
  - [x] HEAPSORT
  - [x] INTROSORT, default
  - [x] INTERSECTION

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE20 from "./_ArgSort_test_1.md";

<EXAMPLE20 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Examples
