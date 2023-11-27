```fortran
PROGRAM main
USE easifembase
IMPLICIT NONE
INTEGER(i4b) :: i1, i2, order
TYPE(string) :: astr
INTEGER(I4B), ALLOCATABLE :: deg(:, :)
order = 2
deg = LagrangeDegree_Hexahedron(order=order)

CALL display(mdencode(deg), "degrees: ")

END PROGRAM main
```


<details>
<summary>See results</summary>
<div>


degrees: 

| a |  b |  c | 
|  --- |  --- |  --- | 
| 0 | 0 | 0 | 
| 1 | 0 | 0 | 
| 2 | 0 | 0 | 
| 0 | 1 | 0 | 
| 1 | 1 | 0 | 
| 2 | 1 | 0 | 
| 0 | 2 | 0 | 
| 1 | 2 | 0 | 
| 2 | 2 | 0 | 
| 0 | 0 | 1 | 
| 1 | 0 | 1 | 
| 2 | 0 | 1 | 
| 0 | 1 | 1 | 
| 1 | 1 | 1 | 
| 2 | 1 | 1 | 
| 0 | 2 | 1 | 
| 1 | 2 | 1 | 
| 2 | 2 | 1 | 
| 0 | 0 | 2 | 
| 1 | 0 | 2 | 
| 2 | 0 | 2 | 
| 0 | 1 | 2 | 
| 1 | 1 | 2 | 
| 2 | 1 | 2 | 
| 0 | 2 | 2 | 
| 1 | 2 | 2 | 
| 2 | 2 | 2 | 


</div>
</details>
