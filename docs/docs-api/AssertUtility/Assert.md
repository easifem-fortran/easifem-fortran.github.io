# Assert

Assertion related methods.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE SUBROUTINE Assert(Mat, s, msg, file, line, routine)
    REAL(DFP), INTENT(IN) :: Mat(:, :)
    INTEGER(I4B), INTENT(IN) :: s(2)
    INTEGER(I4B), INTENT(IN) :: line
    CHARACTER(*), INTENT(IN) :: msg, file, routine
  END SUBROUTINE
END INTERFACE
```

If shape of `Mat` is not same as `s`, then this routine prints error and stop program.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE13 from "./_Assert_test_1.md";

<EXAMPLE13 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Assert(Mat, s, msg, file, line, routine)
    REAL(DFP), INTENT(IN) :: Mat(:, :, :)
    INTEGER(I4B), INTENT(IN) :: s(3)
    INTEGER(I4B), INTENT(IN) :: line
    CHARACTER(*), INTENT(IN) :: msg, file, routine
  END SUBROUTINE
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE49 from "./_Assert_test_2.md";

<EXAMPLE49 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 3

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Assert(Mat, s, msg, file, line, routine)
    REAL(DFP), INTENT(IN) :: Mat(:, :, :, :)
    INTEGER(I4B), INTENT(IN) :: s(4)
    INTEGER(I4B), INTENT(IN) :: line
    CHARACTER(*), INTENT(IN) :: msg, file, routine
  END SUBROUTINE
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE80 from "./_Assert_test_3.md";

<EXAMPLE80 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 4

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
MODULE SUBROUTINE Assert(n1, n2, msg, file, line, routine)
  INTEGER(I4B), INTENT(IN) :: n1, n2
  INTEGER(I4B), INTENT(IN) :: line
  CHARACTER(*), INTENT(IN) :: msg, file, routine
END SUBROUTINE Assert
```

</TabItem>

<TabItem value="interface2" label="܀ Interface">

```fortran
  MODULE SUBROUTINE Assert(n1, n2, n3, msg, file, line, routine)
    INTEGER(I4B), INTENT(IN) :: n1, n2, n3
    INTEGER(I4B), INTENT(IN) :: line
    CHARACTER(*), INTENT(IN) :: msg, file, routine
  END SUBROUTINE Assert
```

</TabItem>

<TabItem value="interface3" label="܀ Interface">

```fortran
  MODULE SUBROUTINE Assert(n1, n2, n3, n4, msg, file, line, routine)
    INTEGER(I4B), INTENT(IN) :: n1, n2, n3, n4
    INTEGER(I4B), INTENT(IN) :: line
    CHARACTER(*), INTENT(IN) :: msg, file, routine
  END SUBROUTINE Assert
```

</TabItem>

<TabItem value="interface4" label="܀ interface">

```fortran
  MODULE SUBROUTINE Assert(nn, msg, file, line, routine)
    INTEGER(I4B), DIMENSION(:), INTENT(IN) :: nn
    INTEGER(I4B), INTENT(IN) :: line
    CHARACTER(*), INTENT(IN) :: msg, file, routine
  END SUBROUTINE Assert
```

</TabItem>  

<TabItem value="example" label="️܀ See example">

import EXAMPLE111 from "./_Assert_test_4.md";

<EXAMPLE111 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
