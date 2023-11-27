In this example we test [QuickSort](QuickSort.md) method.

```txt
CALL QuickSort(v1,v2,v3,v4)
```

```fortran
PROGRAM main
USE easifemBase
integer(i4b), allocatable :: i1(:),i2(:),i3(:), i4(:)
real( dfp ), allocatable :: r1(:),r2(:),r3(:),r4(:)
integer(i4b) :: first, last
```

```fortran
  i1 = [5,2,1,6,3,4]
  i2 = i1
  i3 = i1
  i4 = i1
  first=1; last=size(i1)
  call QuickSort(i1,i2,i3,i4,first,last)
  call display(i1, "i1=", orient="col", advance="NO")
  call display(i2, "i2=", orient="col", advance="NO")
  call display(i3, "i3=", orient="col", advance="NO")
  call display(i4, "i4=", orient="col", advance="YES")
```

<details>
<summary>See results</summary>
<div>

```txt
i1=,  i2=,  i3=,  i4=
---,  ---,  ---,  ---
 1 ,   1 ,   1 ,   1 
 2 ,   2 ,   2 ,   2 
 3 ,   3 ,   3 ,   3 
 4 ,   4 ,   4 ,   4 
 5 ,   5 ,   5 ,   5 
 6 ,   6 ,   6 ,   6 
```

</div>
</details>

```fortran
  r4 = [1,2,3,2,2]
  i1 = [0,1,0,0,0]
  i2 = [0,0,1,0,0]
  i3 = [0,0,0,1,1]
  first=1; last=size(i1)
  call QuickSort(i1,i2,i3,r4,first,last)
  call blanklines(nol=2)
  call display( "test-2" )
  call display(i1, "i1=", orient="col", advance="NO")
  call display(i2, "i2=", orient="col", advance="NO")
  call display(i3, "i3=", orient="col", advance="NO")
  call display(r4, "r4=", orient="col", advance="YES")
```

<details>
<summary>See results</summary>
<div>

```txt
i1=,  i2=,  i3=,    r4=  
---,  ---,  ---,  -------
 0 ,   0 ,   0 ,  1.00000
 0 ,   0 ,   1 ,  2.00000
 0 ,   1 ,   0 ,  3.00000
 0 ,   0 ,   1 ,  2.00000
 1 ,   0 ,   0 ,  2.00000
```

</div>
</details>

```fortran
END PROGRAM main
```
