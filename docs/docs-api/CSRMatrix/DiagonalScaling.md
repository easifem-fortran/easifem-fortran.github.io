# DiagonalScaling

`DiagonalScaling` performs diagonal scaling on CSRMatrix.

Calling example:

```fortran
CALL DiagonalScaling(obj, side, OPERATOR)
CALL DiagonalScaling(obj, side, diag, OPERATOR)
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE DiagonalScaling(obj, side, OPERATOR)
    CLASS(CSRMatrix_), INTENT(INOUT) :: obj
    CHARACTER(*), INTENT(IN) :: side
    CHARACTER(*), OPTIONAL, INTENT(IN) :: OPERATOR
  END SUBROUTINE DiagonalScaling
END INTERFACE
```

- `side` can have any value from ("LEFT", "RIGHT", "BOTH")
- `operator`, can be "SQRT" (default) and "NONE".

</TabItem>

<TabItem value="example1" label="️܀ Example 1">

</TabItem>

<TabItem value="example2" label="️܀ Example 2">

</TabItem>

<TabItem value="example3" label="️܀ Example 3">

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>

</Tabs>

<Tabs>
<TabItem value="interface" label="܀ Interface">

```fortran
INTERFACE
  MODULE SUBROUTINE DiagonalScaling(obj, side, diag, OPERATOR)
    CLASS(CSRMatrix_), INTENT(INOUT) :: obj
    CHARACTER(*), INTENT(IN) :: side
    REAL(DFP), INTENT(IN) :: diag(:)
    CHARACTER(*), OPTIONAL, INTENT(IN) :: OPERATOR
  END SUBROUTINE DiagonalScaling
END INTERFACE
```

- `side` can have any value from ("LEFT", "RIGHT", "BOTH")
- `operator`, can be "SQRT" (default) and "NONE".

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
