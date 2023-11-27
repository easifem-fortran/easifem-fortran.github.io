```fortran
PROGRAM main
USE easifembase
IMPLICIT NONE
INTEGER(i4b) :: i1, i2, order
TYPE(string) :: astr
INTEGER(I4B), ALLOCATABLE :: deg(:, :)
order = 1
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
| 0 | 1 | 0 | 
| 1 | 1 | 0 | 
| 0 | 0 | 1 | 
| 1 | 0 | 1 | 
| 0 | 1 | 1 | 
| 1 | 1 | 1 | 

$$
1, x, y, xy, z, xz, yz, xyz 
$$

</div>
</details>
