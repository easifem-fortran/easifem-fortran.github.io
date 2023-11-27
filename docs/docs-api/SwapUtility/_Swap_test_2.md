This example shows the usage of `Swap` method.

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  REAL( DFP ), ALLOCATABLE :: a2(:,:), b2(:,:), a3(:,:,:), b3(:,:,:), &
    & a4(:,:,:,:), b4(:,:,:,:)
```

Now let us USE `swap` for rank 3 Fortran array. But, first generate a rank 3 arrays, and display its content.

```fortran
  CALL Reallocate(b3, 2,3,2)
  CALL Random_NUMBER(b3)
  CALL Display(MdEncode(b3), "b3 = ")
```

b3 = ( :, :,  1 ) =

 |  |  |  |
 |  --- |  --- |  --- |
 | 0.85128 | 7.97914E-03 | 0.12877 |
 | 0.61923 | 2.30844E-02 | 0.67707 |

( :, :,  2 ) =

 |  |  |  |
 |  --- |  --- |  --- |
 | 9.43064E-02 | 0.82267 | 0.40266 |
 | 0.26413 | 0.32497 | 0.9931 |

Now swap dimension 2 with dimension 3.

```fortran
  CALL SWAP(a3, b3, 1,3,2)
  CALL Display(MdEncode(a3), "a3=")
```

a3=( :, :,  1 ) =

 |  |  |
 |  --- |  --- |
 | 0.85128 | 9.43064E-02 |
 | 0.61923 | 0.26413 |

( :, :,  2 ) =

 |  |  |
 |  --- |  --- |
 | 7.97914E-03 | 0.82267 |
 | 2.30844E-02 | 0.32497 |

( :, :,  3 ) =

 |  |  |
 |  --- |  --- |
 | 0.12877 | 0.40266 |
 | 0.67707 | 0.9931 |

You can verify that the dimension 2 and dimension 3 are changed.

```fortran
END PROGRAM main
```
