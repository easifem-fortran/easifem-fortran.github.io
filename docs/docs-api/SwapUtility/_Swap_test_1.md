Swap two scalars.

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    REAL( DFP ), ALLOCATABLE :: a2(:,:), b2(:,:), a3(:,:,:), b3(:,:,:), &
      & a4(:,:,:,:), b4(:,:,:,:)
```

Make a random matrix and display it.

```fortran
    CALL Reallocate( b2, 4, 3 )
    CALL RANDOM_NUMBER(b2)
```

Make another matrix `a` so that we can swap the indices of `b` and SAVE it in `a`.

In this swap we are using:

- i1=1
- i2=2

which means `a=b`.

```fortran
  CALL SWAP(a=a2,b=b2,i1=1,i2=2)
  CALL OK( ALL( a2 .approxeq. b2 ), "swap"  )
```

Now let us use

- i1=2
- i2=1

which will produce `a=transpose(b)`.

```fortran
    CALL SWAP(a=a2,b=b2,i1=2,i2=1)
    CALL OK( ALL( a2 .approxeq. TRANSPOSE(b2) ), "swap"  )
```

Let us see what happens when i1=1, i2=1. Actually, it will DO nothing but `a=b`.

```fortran
    CALL SWAP(a=a2,b=b2,i1=1,i2=1)
    CALL OK( ALL( a2 .approxeq. b2), "swap"  )
```

We DO not indend to USE `swap` for two-dimensional arrays, because we already have `transpose` FUNCTION for doing the same. The purpose was to check that algorithm works.

```fortran
END PROGRAM main
```
