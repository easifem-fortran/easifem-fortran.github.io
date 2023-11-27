```fortran
PROGRAM main
  use easifemBase
  integer(i4b), allocatable :: indx(:), ans(:)
```

```fortran
  indx = [1,2,3,4,5]
  ans = Push(indx, 1, 0)
  call Display( ans, "ans= " )
```

:::note result
        ans=
        -----
          0
          1
          2
          3
          4
          5
:::

```fortran
  ans = Push(indx, 5, 0)
  call Display( ans, "ans= " )
```

:::note result
        ans=
        -----
          1
          2
          3
          4
          0
          5
:::

```fortran
  ans = Push(indx, 2, 0)
  call Display( ans, "ans= " )
```

:::note result
        ans=
        -----
          1
          0
          2
          3
          4
          5
:::

```fortran
END PROGRAM main
```
