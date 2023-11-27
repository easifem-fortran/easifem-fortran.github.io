```fortran
program main
  use easifemBase
  class( ReferenceElement_ ), pointer :: refelem => null()
  type( ReferenceQuadrangle_ ) :: highorder_elem
  refelem => referenceQuadrangle_pointer( nsd = 2 )

  call refelem%highOrderElement( order = 2, Highorderobj = highorder_elem, ipType=Equidistance)
  call display( highorder_elem, "higher order highorder_elem : ")

  !call refelem%LagrangeElement( order = 3, Highorderobj = highorder_elem )
  !call display( highorder_elem, "3rd order highorder_elem : ")
end program main
```

<details>
<summary>See results</summary>
<div>

higher order highorder_elem :

```txt title="results"
# ElemType : Quadrangle9
# XiDimension :: 2
# NSD : 2
# Order : 2
# EntityCounts(0) : 9
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
# Node( 5 ) : 
--------------
    0.00000   
   -1.00000   
    0.00000   
# Node( 6 ) : 
--------------
   1.00000    
   0.00000    
   0.00000    
# Node( 7 ) : 
--------------
   0.00000    
   1.00000    
   0.00000    
# Node( 8 ) : 
--------------
   -1.00000   
    0.00000   
    0.00000   
# Node( 9 ) : 
--------------
   0.00000    
   0.00000    
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
# ElemType : Point1
# XiDim : 0
# Nptrs : 
----------
    9     
# Topology( 10 ) : 
# ElemType : Line3
# XiDim : 1
# Nptrs : 
----------
    1     
    2     
    5     
# Topology( 11 ) : 
# ElemType : Line3
# XiDim : 1
# Nptrs : 
----------
    2     
    3     
    6     
# Topology( 12 ) : 
# ElemType : Line3
# XiDim : 1
# Nptrs : 
----------
    3     
    4     
    7     
# Topology( 13 ) : 
# ElemType : Line3
# XiDim : 1
# Nptrs : 
----------
    4     
    1     
    8     
# Topology( 14 ) : 
# ElemType : Quadrangle9
# XiDim : 2
# Nptrs : 
1
2
3
4
.
.
.
6
7
8
9
```

</div>
</details>
