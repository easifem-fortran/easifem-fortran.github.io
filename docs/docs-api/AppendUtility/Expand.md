# Expand

Expand method expands a vector (if necessary) and add an element to it.

[Reference](https://github.com/jacobwilliams/fortran-csv-module/blob/master/src/csv_utilities.f90)

Calling example

```fortran
CALL Expand(vec, n=0, chunk_size)
CALL Expand(vec, n, chunk_size, finished=.TRUE.)
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
  MODULE PURE SUBROUTINE Expand(vec, n, chunk_size, val, finished)
    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), ALLOCATABLE, INTENT(INOUT) :: vec(:)
    INTEGER(I4B), INTENT(INOUT) :: n
    !! counter for last element added to `vec`.
    !! must be initialized to `size(vec)`
    !! (or 0 if not allocated) before first call
    INTEGER(I4B), INTENT(IN) :: chunk_size
    !! allocate `vec` in blocks of this size (>0)
    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), OPTIONAL, INTENT(IN) :: val
    !! the value to add to `vec`
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: finished
    !! set to true to return `vec`
    !! as its correct size (`n`)
  END SUBROUTINE Expand
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE11 from "./_Expand_test_1.md";

<EXAMPLE11 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
