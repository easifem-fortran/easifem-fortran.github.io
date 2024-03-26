```fortran
PROGRAM main
USE easifembase
IMPLICIT NONE
CLASS(ReferenceElement_), pointer :: obj
INTEGER(I4B), PARAMETER :: nsd = 3_I4B

obj => ReferenceHexahedron_Pointer(nsd=nsd)
CALL Display(obj, 'Obj : ')

END PROGRAM main
```

<details>
<summary>See results</summary>
<div>

```txt
Obj : 
# ElemType : Hexahedron8
# XiDimension :: 3
# NSD : 3
# Order : 1
# EntityCounts(0) : 8
# EntityCounts(1) : 12
# EntityCounts(2) : 6
# EntityCounts(3) : 1
# Node( 1 ) : 
--------------
   -1.00000   
   -1.00000   
   -1.00000   
# Node( 2 ) : 
--------------
    1.00000   
   -1.00000   
   -1.00000   
# Node( 3 ) : 
--------------
    1.00000   
    1.00000   
   -1.00000   
# Node( 4 ) : 
--------------
   -1.00000   
    1.00000   
   -1.00000   
# Node( 5 ) : 
--------------
   -1.00000   
   -1.00000   
    1.00000   
# Node( 6 ) : 
--------------
    1.00000   
   -1.00000   
    1.00000   
# Node( 7 ) : 
--------------
   1.00000    
   1.00000    
   1.00000    
# Node( 8 ) : 
--------------
   -1.00000   
    1.00000   
    1.00000   
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
# ElemType : Point1
# XiDim : 0
# Nptrs : 
----------
    5     
# Topology( 6 ) : 
# ElemType : Point1
# XiDim : 0
# Nptrs : 
----------
    6     
# Topology( 7 ) : 
# ElemType : Point1
# XiDim : 0
# Nptrs : 
----------
    7     
# Topology( 8 ) : 
# ElemType : Point1
# XiDim : 0
# Nptrs : 
----------
    8     
# Topology( 9 ) : 
# ElemType : Line2
# XiDim : 1
# Nptrs : 
----------
    1     
    2     
# Topology( 10 ) : 
# ElemType : Line2
# XiDim : 1
# Nptrs : 
----------
    1     
    4     
# Topology( 11 ) : 
# ElemType : Line2
# XiDim : 1
# Nptrs : 
----------
    1     
    5     
# Topology( 12 ) : 
# ElemType : Line2
# XiDim : 1
# Nptrs : 
----------
    2     
    3     
# Topology( 13 ) : 
# ElemType : Line2
# XiDim : 1
# Nptrs : 
----------
    2     
    6     
# Topology( 14 ) : 
# ElemType : Line2
# XiDim : 1
# Nptrs : 
----------
    3     
    4     
# Topology( 15 ) : 
# ElemType : Line2
# XiDim : 1
# Nptrs : 
----------
    3     
    7     
# Topology( 16 ) : 
# ElemType : Line2
# XiDim : 1
# Nptrs : 
----------
    4     
    8     
# Topology( 17 ) : 
# ElemType : Line2
# XiDim : 1
# Nptrs : 
----------
    5     
    6     
# Topology( 18 ) : 
# ElemType : Line2
# XiDim : 1
# Nptrs : 
----------
    5     
    8     
# Topology( 19 ) : 
# ElemType : Line2
# XiDim : 1
# Nptrs : 
----------
    6     
    7     
# Topology( 20 ) : 
# ElemType : Line2
# XiDim : 1
# Nptrs : 
----------
    7     
    8     
# Topology( 21 ) : 
# ElemType : Quadrangle4
# XiDim : 2
# Nptrs : 
----------
    1     
    4     
    3     
    2     
# Topology( 22 ) : 
# ElemType : Quadrangle4
# XiDim : 2
# Nptrs : 
----------
    5     
    6     
    7     
    8     
# Topology( 23 ) : 
# ElemType : Quadrangle4
# XiDim : 2
# Nptrs : 
----------
    1     
    5     
    8     
    4     
# Topology( 24 ) : 
# ElemType : Quadrangle4
# XiDim : 2
# Nptrs : 
----------
    2     
    3     
    7     
    6     
# Topology( 25 ) : 
# ElemType : Quadrangle4
# XiDim : 2
# Nptrs : 
----------
    3     
    4     
    8     
    7     
# Topology( 26 ) : 
# ElemType : Quadrangle4
# XiDim : 2
# Nptrs : 
----------
    1     
    2     
    6     
    5     
# Topology( 27 ) : 
# ElemType : Hexahedron8
# XiDim : 3
# Nptrs : 
----------
    1     
    2     
    3     
    4     
    5     
    6     
    7     
    8
```

</div>
</details>
