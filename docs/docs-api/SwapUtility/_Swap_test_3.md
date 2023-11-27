This example shows the usage of `Swap` method.

Swap method for rank4.

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    REAL( DFP ), ALLOCATABLE :: a2(:,:), b2(:,:), a3(:,:,:), b3(:,:,:), &
      & a4(:,:,:,:), b4(:,:,:,:)
```

```fortran
    call reallocate(a2, 2,2)
    call reallocate(b2, 2,2)
    a2(1,:) = [2,1]
    a2(2,:) = [4,2]
    b2(1,1) = 1; b2(2,2) = 2
    b4 = outerprod(a2, b2)
    call swap(a=a4, b=b4, i1=1, i2=2, i3=3, i4=4)
    call display(MdEncode(a4), "a4")
```

a4(:,:,1,1) =

|  |  |
|  --- |  --- |
| 2 | 1 |
| 4 | 2 |

(:,:,2,1) =

|  |  |
|  --- |  --- |
| 0 | 0 |
| 0 | 0 |

(:,:,1,2) =

|  |  |
|  --- |  --- |
| 0 | 0 |
| 0 | 0 |

(:,:,2,2) =

|  |  |
|  --- |  --- |
| 4 | 2 |
| 8 | 4 |

```fortran
    call swap(a=a4, b=b4, i1=1, i2=3, i3=2, i4=4)
    call display(MdEncode(a4), "a4")
```

a4(:,:,1,1) =

|  |  |
|  --- |  --- |
| 2 | 0 |
| 4 | 0 |

(:,:,2,1) =

|  |  |
|  --- |  --- |
| 1 | 0 |
| 2 | 0 |

(:,:,1,2) =

|  |  |
|  --- |  --- |
| 0 | 4 |
| 0 | 8 |

(:,:,2,2) =

|  |  |
|  --- |  --- |
| 0 | 2 |
| 0 | 4 |

```fortran
END PROGRAM main
```
