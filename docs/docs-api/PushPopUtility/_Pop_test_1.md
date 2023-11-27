```fortran
PROGRAM main
  use easifemBase
  integer(i4b), allocatable :: indx(:), ans(:)
```

```fortran
  indx = [1,2,3,4,5]
  ans = Pop(indx, 1)
  call Display( ans, "ans= " )
```

:::note results
        ans=
        -----
          2
          3
          4
          5
:::

```fortran
  ans = Pop(indx, 5)
  call Display( ans, "ans= " )
```

:::note results
        ans=
        -----
          1
          2
          3
          4
:::

```fortran
  ans = Pop(indx, 2)
  call Display( ans, "ans= " )
```

:::note results 
        ans=
        -----
          1
          3
          4
          5
:::

```fortran
END PROGRAM main
```
