# CellBasis

This function returns the cell basis for hexahedron element.

<iframe src="/elements/hexahedron/cellBasis.html" height="600" width="100%" scrolling="no"></iframe>

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE CellBasis_Hexahedron
  MODULE PURE FUNCTION CellBasis_Hexahedron1(  &
    & n1, &
    & n2, &
    & n3, &
    & x,   &
    & y,   &
    & z)   &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n1
    !! order along axis 1
    !! it should be greater than 1
    INTEGER(I4B), INTENT(IN) :: n2
    !! order along axis 2
    !! it should be greater than 1
    INTEGER(I4B), INTENT(IN) :: n3
    !! order along axis 3
    !! it should be greater than 1
    REAL(DFP), INTENT(IN) :: x(:), y(:), z(:)
    !! point of evaluation
    !! these points should be between [-1, 1].
    REAL(DFP) :: ans( &
      & SIZE(x), &
      & (n1 - 1_I4B) * (n2 - 1_I4B) * (n3 - 1_I4B))
  END FUNCTION CellBasis_Hexahedron1
END INTERFACE CellBasis_Hexahedron
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE10 from "./_CellBasis_Hexahedron_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
