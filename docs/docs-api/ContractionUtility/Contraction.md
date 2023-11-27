# Contraction

This generic function performs contraction of tensors.

The `contraction` method contracts the multi-dimension arrays.

The general syntax is given below:

```fortran
ans = CONTRACTION(a1, a2)
```

where,

- `a1` and `a2` can be a Fortran array of rank 1, 2, 3, and 4.

Let's employ the following notation:

- `r0` rank-0 scalar
- `r1` rank-1 vector
- `r2` rank-2 matrix
- `r3` rank-3
- `r4` rank-4

Then, the following table explains this operator.

| a1 | a2 | ans |
|----|----|-----|
| `r1` | `r1` | `r0`  |
| `r1` | `r2` | `r1`  |
| `r1` | `r3` | `r2`  |
| `r1` | `r4` | `r3`  |
| `r2` | `r1` | `r1`  |
| `r2` | `r2` | `r0`  |
| `r2` | `r3` | `r1`  |
| `r2` | `r4` | `r2`  |
| `r3` | `r1` | `r2`  |
| `r3` | `r2` | `r1`  |
| `r3` | `r3` | `r0`  |
| `r3` | `r4` | `r1`  |
| `r4` | `r1` | `r3`  |
| `r4` | `r2` | `r2`  |
| `r4` | `r3` | `r1`  |
| `r4` | `r4` | `r0`  |
|    |    |     |

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION Contraction(a1, a2) RESULT(ans)
    REAL(DFP), INTENT(IN) :: a1(:, :, :, :)
    REAL(DFP), INTENT(IN) :: a2(:)
    REAL(DFP) :: ans(size(a1, 1), size(a1, 2), size(a1, 3))
  END FUNCTION
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION Contraction(a1, a2) RESULT(ans)
    REAL(DFP), INTENT(IN) :: a1(:, :, :, :)
    REAL(DFP), INTENT(IN) :: a2(:,:)
    REAL(DFP) :: ans(size(a1, 1), size(a1, 2))
  END FUNCTION
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 3

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE PURE FUNCTION Contraction(a1, a2) RESULT(ans)
    REAL(DFP), INTENT(IN) :: a1(:, :, :, :)
    REAL(DFP), INTENT(IN) :: a2(:, :, :)
    REAL(DFP) :: ans(size(a1, 1))
  END FUNCTION
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 4

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION Contraction(a1, a2) RESULT(ans)
    REAL(DFP), INTENT(IN) :: a1(:, :, :, :)
    REAL(DFP), INTENT(IN) :: a2(:, :, :, :)
    REAL(DFP) :: ans
  END FUNCTION
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 5

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE PURE FUNCTION Contraction(a1, a2) RESULT(ans)
    REAL(DFP), INTENT(IN) :: a1(:, :, :)
    REAL(DFP), INTENT(IN) :: a2(:)
    REAL(DFP) :: ans(size(a1, 1), size(a1, 2))
  END FUNCTION
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 6

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE PURE FUNCTION Contraction(a1, a2) RESULT(ans)
    REAL(DFP), INTENT(IN) :: a1(:, :, :)
    REAL(DFP), INTENT(IN) :: a2(:, :)
    REAL(DFP) :: ans(size(a1, 1))
  END FUNCTION
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 7

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE PURE FUNCTION Contraction(a1, a2) RESULT(ans)
    REAL(DFP), INTENT(IN) :: a1(:,:,:)
    REAL(DFP), INTENT(IN) :: a2(:, :, :)
    REAL(DFP) :: ans
  END FUNCTION
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 8

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE PURE FUNCTION Contraction(a1, a2) RESULT(ans)
    REAL(DFP), INTENT(IN) :: a1(:,:,:)
    REAL(DFP), INTENT(IN) :: a2(:, :, :, :)
    REAL(DFP) :: ans(size(a2,4))
  END FUNCTION
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 9

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE PURE FUNCTION Contraction(a1, a2) RESULT(ans)
    REAL(DFP), INTENT(IN) :: a1(:, :)
    REAL(DFP), INTENT(IN) :: a2(:)
    REAL(DFP) :: ans(size(a1, 1))
  END FUNCTION
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 10

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE PURE FUNCTION Contraction(a1, a2) RESULT(ans)
    REAL(DFP), INTENT(IN) :: a1(:, :)
    REAL(DFP), INTENT(IN) :: a2(:, :)
    REAL(DFP) :: ans
  END FUNCTION
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 11

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE PURE FUNCTION Contraction(a1, a2) RESULT(ans)
    REAL(DFP), INTENT(IN) :: a1(:,:)
    REAL(DFP), INTENT(IN) :: a2(:, :, :)
    REAL(DFP) :: ans(size(a2,3))
  END FUNCTION
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 12

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE PURE FUNCTION Contraction(a1, a2) RESULT(ans)
    REAL(DFP), INTENT(IN) :: a1(:,:)
    REAL(DFP), INTENT(IN) :: a2(:, :, :, :)
    REAL(DFP) :: ans(size(a2,3), size(a2,4))
  END FUNCTION
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 13

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE PURE FUNCTION Contraction(a1, a2) RESULT(ans)
    REAL(DFP), INTENT(IN) :: a1(:)
    REAL(DFP), INTENT(IN) :: a2(:)
    REAL(DFP) :: ans
  END FUNCTION
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 14

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE PURE FUNCTION Contraction(a1, a2) RESULT(ans)
    REAL(DFP), INTENT(IN) :: a1(:)
    REAL(DFP), INTENT(IN) :: a2(:, :)
    REAL(DFP) :: ans(size(a2,2))
  END FUNCTION
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 15

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE PURE FUNCTION Contraction(a1, a2) RESULT(ans)
    REAL(DFP), INTENT(IN) :: a1(:)
    REAL(DFP), INTENT(IN) :: a2(:, :, :)
    REAL(DFP) :: ans(size(a2,2), size(a2,3))
  END FUNCTION
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 16

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE PURE FUNCTION Contraction(a1, a2) RESULT(ans)
    REAL(DFP), INTENT(IN) :: a1(:)
    REAL(DFP), INTENT(IN) :: a2(:, :, :, :)
    REAL(DFP) :: ans(size(a2,2), size(a2,3), size(a2,4))
  END FUNCTION
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
