# UnscaledLobattoStiffnessMatrix

Evaluates the Stiffness matrix for UnscaledLobatto polynomial.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION UnscaledLobattoStiffnessMatrix(n) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP) :: ans(n + 1, n + 1)
  END FUNCTION UnscaledLobattoStiffnessMatrix
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE11 from "./_UnscaledLobattoStiffnessMatrix_test_1.md";

<EXAMPLE11 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
