---
title: ReferenceTetrahedron Initiate Example 1
---

```fortran
PROGRAM main
USE easifembase

IMPLICIT NONE

TYPE(ReferenceTetrahedron_) :: obj
INTEGER(I4B), PARAMETER :: nsd = 3_I4B

CALL Initiate(obj=obj, nsd=nsd)
CALL Display(obj, 'obj : ')

END PROGRAM main
```

<details>
<summary>Click here to see result</summary>
<div>

Result

```txt
obj :
DomainName : UNIT
ElemType : Tetrahedron4
XiDimension :: 3
NSD : 3
Order : 1
EntityCounts(0) : 4
EntityCounts(1) : 6
EntityCounts(2) : 4
EntityCounts(3) : 1
 
==============================
Node( 1 ) :
------------
  0.00000
  0.00000
  0.00000
 
==============================
Node( 2 ) :
------------
  1.00000
  0.00000
  0.00000
 
==============================
Node( 3 ) :
------------
  0.00000
  1.00000
  0.00000
 
==============================
Node( 4 ) :
------------
  0.00000
  0.00000
  1.00000
 
==============================
Topology( 1 ) :
ElemType: Point1
XiDim: 0
Nptrs:
-------
   1
 
==============================
Topology( 2 ) :
ElemType: Point1
XiDim: 0
Nptrs:
-------
   2
 
==============================
Topology( 3 ) :
ElemType: Point1
XiDim: 0
Nptrs:
-------
   3
 
==============================
Topology( 4 ) :
ElemType: Point1
XiDim: 0
Nptrs:
-------
   4
 
==============================
Topology( 5 ) :
ElemType: Line2
XiDim: 1
Nptrs:
-------
   1
   2
 
==============================
Topology( 6 ) :
ElemType: Line2
XiDim: 1
Nptrs:
-------
   1
   3
 
==============================
Topology( 7 ) :
ElemType: Line2
XiDim: 1
Nptrs:
-------
   1
   4
 
==============================
Topology( 8 ) :
ElemType: Line2
XiDim: 1
Nptrs:
-------
   2
   3
 
==============================
Topology( 9 ) :
ElemType: Line2
XiDim: 1
Nptrs:
-------
   2
   4
 
==============================
Topology( 10 ) :
ElemType: Line2
XiDim: 1
Nptrs:
-------
   3
   4
 
==============================
Topology( 11 ) :
ElemType: Triangle3
XiDim: 2
Nptrs:
-------
   1
   3
   2
 
==============================
Topology( 12 ) :
ElemType: Triangle3
XiDim: 2
Nptrs:
-------
   1
   2
   4
 
==============================
Topology( 13 ) :
ElemType: Triangle3
XiDim: 2
Nptrs:
-------
   1
   4
   3
 
==============================
Topology( 14 ) :
ElemType: Triangle3
XiDim: 2
Nptrs:
-------
   2
   3
   4
 
==============================
Topology( 15 ) :
ElemType: Tetrahedron4
XiDim: 3
Nptrs:
-------
   1
   2
   3
   4
```

</div>
</details>
