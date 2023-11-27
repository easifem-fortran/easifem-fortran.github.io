```fortran
program main
use easifemBase
implicit none
INTEGER(I4B), ALLOCATABLE :: indx(:,:)
REAL( DFP ) :: amat(3,3)
```

```fortran
CALL Display(TriuIndx(amat,diagNo=0), "(3,3) diagNo=0, = " )
CALL Display(TriuIndx(amat,diagNo=1), "(3,3) diagNo=1, = " )
CALL Display(TriuIndx(amat,diagNo=2), "(3,3) diagNo=2, = " )
CALL Display(TriuIndx(amat,diagNo=-1), "(3,3) diagNo=-1, = " )
CALL Display(TriuIndx(amat,diagNo=-2), "(3,3) diagNo=-2, = " )
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
