```fortran
program main
use easifemBase
implicit none
```

```fortran
BLOCK
INTEGER(I4B), ALLOCATABLE :: indx(:,:)
CALL Display(TriuIndx(m=3,n=3,diagNo=0), "(3,3) diagNo=0, = " )
CALL Display(TriuIndx(m=3,n=3,diagNo=1), "(3,3) diagNo=1, = " )
CALL Display(TriuIndx(m=3,n=3,diagNo=2), "(3,3) diagNo=2, = " )
END BLOCK
```

<details>
<summary>See results</summary>
<div>

```txt
(3,3) diagNo=0, =
------------------
       1  1
       2  2
       3  3
       1  2
       2  3
       1  3

(3,3) diagNo=1, =
------------------
       1  2
       2  3
       1  3

(3,3) diagNo=2, =
------------------
       1  3
```

</div>
</details>

```fortran
BLOCK
CALL Display(TriuIndx(m=3,n=3,diagNo=-1), "(3,3) diagNo=-1, = " )
CALL Display(TriuIndx(m=3,n=3,diagNo=-2), "(3,3) diagNo=-2, = " )
END BLOCK
```

<details>
<summary>See results</summary>
<div>

```txt
(3,3) diagNo=-1, =
-------------------
       2  1
       3  2
       1  1
       2  2
       3  3
       1  2
       2  3
       1  3
(3,3) diagNo=-2, =
-------------------
       3  1
       2  1
       3  2
       1  1
       2  2
       3  3
       1  2
       2  3
       1  3
```

</div>
</details>

```fortran
end program main
```
