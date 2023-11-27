```fortran
PROGRAM main
USE easifemBase
TYPE(MultiIndices_) :: obj
integer(i4b) :: n, d
integer(i4b), allocatable :: indices(:,:)
```

Initiate the object.

```fortran
  n = 0
  d=1
  CALL Initiate(obj=obj, n=n, d=d)
  CALL Display( obj, "(n,d=0,1)=")
  indices = GetMultiIndices(obj)
  CALL Display(transpose(indices), "indices=")
```

<details>
<summary>See results</summary>
<div>

```txt title="results"

(n,d=0,1)=
n = 0
d = 1
indices=
--------
  0  0
```

</div>
</details>

:::note
n=1, d=1
:::

```fortran
  obj=MultiIndices(n=1, d=1)
  indices = GetMultiIndices(obj)
  CALL Display(transpose(indices), "indices=")
```

<details>
<summary>See results</summary>
<div>

```txt title="results"

indices=
--------
0  1
1  0
```

</div>
</details>

:::note
n=4, d=1
:::

```fortran
  obj=MultiIndices(n=4, d=1)
  indices = GetMultiIndices(obj)
  CALL Display(transpose(indices), "indices=")
```

<details>
<summary>See results</summary>
<div>

```txt title="results"

indices=
--------
  0  4
  1  3
  2  2
  3  1
  4  0
```

</div>
</details>

:::note
n=4, d=2
:::

```fortran
  obj=MultiIndices(n=2, d=2)
  indices = GetMultiIndices(obj)
  CALL Display(transpose(indices), "indices=")
```

<details>
<summary>See results</summary>
<div>

```txt title="results"

indices=
--------
0  0  2
0  1  1
0  2  0
1  0  1
1  1  0
2  0  0
```

</div>
</details>  

:::note
"n=3, d=2"
:::

```fortran
  obj=MultiIndices(n=3, d=2)
  indices = GetMultiIndices(obj)
  CALL Display(transpose(indices), "indices=")
```

<details>
<summary>See results</summary>
<div>

```txt title="results"

indices=
--------
0  0  3
0  1  2
0  2  1
0  3  0
1  0  2
1  1  1
1  2  0
2  0  1
2  1  0
3  0  0
```

</div>
</details>

:::note
n=4, d=2
:::
  
```fortran
  obj=MultiIndices(n=4, d=2)
  indices = GetMultiIndices(obj)
  CALL Display(transpose(indices), "indices=")
```

<details>
<summary>See results</summary>
<div>

```txt title="results"

indices=
--------
0  0  4
0  1  3
0  2  2
0  3  1
0  4  0
1  0  3
1  1  2
1  2  1
1  3  0
2  0  2
2  1  1
2  2  0
3  0  1
3  1  0
4  0  0
```

</div>
</details>

```fortran
END PROGRAM main
```
