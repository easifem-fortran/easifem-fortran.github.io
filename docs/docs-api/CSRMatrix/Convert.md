# Convert

`Convert()` is a generic method, which can be used to change the format of matrix.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="📝 Interface 1" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Convert(A, IA, JA, mat)
    REAL(DFP), INTENT(IN) :: A(:)
    INTEGER(I4B), INTENT(IN) :: IA(:)
    INTEGER(I4B), INTENT(IN) :: JA(:)
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: mat(:, :)
  END SUBROUTINE Convert
END INTERFACE
```

- This subroutine converts CSRMatrix into a dense storage format `A(:), IA(:), JA(:)` denotes CSR format.
- This subroutine can be used for debuggin purpose.

</TabItem>

<TabItem value="iface2" label="Interface 2">

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Convert(To, From)
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: To(:, :)
    TYPE(CSRMatrix_), INTENT(IN) :: From
  END SUBROUTINE Convert
END INTERFACE
```

This subroutine converts sparsematrix to dense storage format `A(:), IA(:), JA(:)` denotes CSR format.

This method is used for defining ASSIGNMENT operator.

</TabItem>

<TabItem value="iface3" label="Interface 3">

This subroutine converts sparsematrix to dense storage format `A(:), IA(:), JA(:)` denotes CSR format.

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Convert(To, From)
    TYPE(RealMatrix_), INTENT(INOUT) :: To
    TYPE(CSRMatrix_), INTENT(IN) :: From
  END SUBROUTINE Convert
END INTERFACE
```

</TabItem>

<TabItem value="close" label="◉ Close">

</TabItem>
</Tabs>
