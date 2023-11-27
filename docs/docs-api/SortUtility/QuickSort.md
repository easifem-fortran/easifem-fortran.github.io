# QuickSort

QuickSort algorithm for sorting.

At present `QuickSort` generic method contains following interfaces.

```fortran
CALL QuickSort(vec1, low, high)
CALL QuickSort(vec1, vect2, low, high)
CALL QuickSort(vec1, vect2, vect3, low, high)
CALL QuickSort(vect1, vect2, vect3, vect4, low, high)
```

## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="interface" label="܀ QuickSort(vect1, low, high)">

```fortran
  MODULE RECURSIVE PURE SUBROUTINE QuickSort(vect1, low, high)
    Int8|Int16|Int32|Int64|Real32|Real64, INTENT(INOUT) :: vect1(:)
    INTEGER(I4B), INTENT(IN) :: low, high
  END SUBROUTINE QuickSort
```

In this interface `vect1` can be a one dimensional fortran array of

- `Int8`, `Int16`, `Int32`, `Int64`
- `Real32`, `Real64`

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE43 from "./_QuickSort_test_1.md";

<EXAMPLE43 />

</TabItem>

<TabItem value="close" label="↢">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ QuickSort(vect1, vect2, low, high)">

```fortran
INTERFACE
  MODULE RECURSIVE PURE SUBROUTINE QuickSort(vect1, vect2, low, high)
    INTEGER( I4B )| REAL( DFP ) , DIMENSION(:), INTENT(INOUT) :: vect1
    INTEGER( I4B )| REAL( DFP ) , DIMENSION(:), INTENT(INOUT) :: vect2
    INTEGER(I4B), INTENT(IN) :: low, high
  END SUBROUTINE QuickSort
END INTERFACE
```

In this interface `vect1` and `vect2` can be a one dimensional fortran array of

- `Int32` or `I4B` 4 byte integers
- `Real(DFP)` default floating point, usually `Real64`

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE63 from "./_QuickSort_test_2.md";

<EXAMPLE63 />

</TabItem>

<TabItem value="close" label="↢">

</TabItem>
</Tabs>

## Interface 3

<Tabs>
<TabItem value="interface" label="܀ QuickSort(vect1, vect2, vect3, low, high)">

```fortran
INTERFACE
  MODULE PURE RECURSIVE SUBROUTINE QuickSort(vect1, vect2, vect3, &
    & low, high)
    INTEGER(I4B) | REAL(DFP), DIMENSION(:), INTENT(INOUT) :: vect3
    REAL(DFP) | INTEGER(I4B), DIMENSION(:), INTENT(INOUT) :: vect1, vect2
    INTEGER(I4B), INTENT(IN) :: low, high
  END SUBROUTINE QuickSort
END INTERFACE
```

In this interface `vect1`, `vect2`, and `vect3` can be a one dimensional fortran array of

- `Int32` or `I4B` 4 byte integers
- `Real(DFP)` default floating point, usually `Real64`

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE86 from "./_QuickSort_test_3.md";

<EXAMPLE86 />

</TabItem>

<TabItem value="close" label="↢">

</TabItem>
</Tabs>

## Interface 4

<Tabs>
<TabItem value="interface" label="܀ QuickSort(vect1, vect2, vect3, vect4, low, high)">

```fortran
INTERFACE
  MODULE PURE RECURSIVE SUBROUTINE QuickSort(vect1, vect2, vect3, &
      & vect4, low, high)
    INTEGER(I4B)| REAL( DFP ), DIMENSION(:), INTENT(INOUT) :: vect1, vect2, vect3, vect4
    INTEGER(I4B), INTENT(IN) :: low, high
  END SUBROUTINE QuickSort
END INTERFACE
```

In this interface `vect1`, `vect2`, `vect3`, and `vect4` can be a one dimensional fortran array of

- `Int32` or `I4B` 4 byte integers
- `Real(DFP)` default floating point, usually `Real64`

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE106 from "./_QuickSort_test_4.md";

<EXAMPLE106 />

</TabItem>

<TabItem value="close" label="↢">

</TabItem>
</Tabs>
