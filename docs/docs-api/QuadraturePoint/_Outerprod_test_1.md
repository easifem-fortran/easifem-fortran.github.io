In this module we test `Outerprod` method on quadrature point data type. This method can be used to construct quadrature point on quadrangle by performing tensor product of quadrature point on 1D.

```fortran
PROGRAM main
USE easifemBase
type( ReferenceLine_ ) :: refelem
type( QuadraturePoint_ ) :: obj1, obj2, obj3
!!
call initiate( obj=refelem, nsd = 1 )
!!
obj1 = GaussLegendreQuadrature(refelem=refelem, nips=[2])
obj2 = GaussLegendreQuadrature(refelem=refelem, nips=[2])
obj3 = Outerprod(obj1, obj2)
!!
call display( obj1, "obj1, Line=")
call display( obj2, "obj2, Line==")
call display( obj3, "obj3, Line=")
!!
END PROGRAM main
```

<details>
<summary>See results</summary>
<div>

```txt
obj1, Line=
    # points :
------------------
-0.57735   0.57735
 1.00000   1.00000
# txi :1
obj2, Line==
    # points :
------------------
-0.57735   0.57735
 1.00000   1.00000
# txi :1
obj3, Line=
              # points :
--------------------------------------
-0.57735  -0.57735   0.57735   0.57735
-0.57735   0.57735  -0.57735   0.57735
 1.00000   1.00000   1.00000   1.00000
# txi :2
```

</div>
</details>
