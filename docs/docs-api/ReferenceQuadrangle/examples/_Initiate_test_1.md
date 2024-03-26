```fortran
program main
use easifemBase
type(ReferenceQuadrangle_) :: refelem
call Initiate(obj=refelem, nsd=2)
call Display(refelem, "ans: ")
end program main
```

<details>
<summary>See results</summary>
<div>

```txt
ans: 

# ElemType : Quadrangle4
# XiDimension :: 2
# NSD : 2
# Order : 1
# EntityCounts(0) : 4
# EntityCounts(1) : 4
# EntityCounts(2) : 1
# EntityCounts(3) : 0
# Node( 1 ) : 
--------------
   -1.00000   
   -1.00000   
    0.00000   
# Node( 2 ) : 
--------------
    1.00000   
   -1.00000   
    0.00000   
# Node( 3 ) : 
--------------
   1.00000    
   1.00000    
   0.00000    
# Node( 4 ) : 
--------------
   -1.00000   
    1.00000   
    0.00000   
# Topology( 1 ) : 
# ElemType : Point1
# XiDim : 0
# Nptrs : 
----------
    1     
# Topology( 2 ) : 
# ElemType : Point1
# XiDim : 0
# Nptrs : 
----------
    2     
# Topology( 3 ) : 
# ElemType : Point1
# XiDim : 0
# Nptrs : 
----------
    3     
# Topology( 4 ) : 
# ElemType : Point1
# XiDim : 0
# Nptrs : 
----------
    4     
# Topology( 5 ) : 
# ElemType : Line2
# XiDim : 1
# Nptrs : 
----------
    1     
    2     
# Topology( 6 ) : 
# ElemType : Line2
# XiDim : 1
# Nptrs : 
----------
    2     
    3     
# Topology( 7 ) : 
# ElemType : Line2
# XiDim : 1
# Nptrs : 
----------
    3     
    4     
# Topology( 8 ) : 
# ElemType : Line2
# XiDim : 1
# Nptrs : 
----------
    4     
    1     
# Topology( 9 ) : 
# ElemType : Quadrangle4
# XiDim : 2
# Nptrs : 
----------
    1     
    2     
    3     
    4
```

</div>
</details>
