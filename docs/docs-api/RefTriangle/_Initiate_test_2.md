In this example we create a reference triangle for Hierarchy polynomials.

``` fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(RefTriangle_) :: obj
CALL obj%Initiate(nsd=2, &
  & baseInterpol="Hierarchy", &
  & baseContinuity="H1")
CALL obj%display('Triangle : ')
END PROGRAM main
```


<details>
<summary>See results</summary>
<div>

```bash title="results"
Triangle : 
element type : Triangle3
xidimension :: 2
nsd : 2
entityCounts(0) : 3
entityCounts(1) : 3
entityCounts(2) : 1
entityCounts(3) : 0
Node( 1 ) : 
------------
  0.00000   
  0.00000   
Node( 2 ) : 
------------
  1.00000   
  0.00000   
Node( 3 ) : 
------------
  0.00000   
  1.00000   
pointTopology( 1 ) : 
Element type : Point1
xidimension : 0
nptrs : 
--------
   1    
pointTopology( 2 ) : 
Element type : Point1
xidimension : 0
nptrs : 
--------
   2    
pointTopology( 3 ) : 
Element type : Point1
xidimension : 0
nptrs : 
--------
   3    
edgeTopology( 1 ) : 
Element type : Line2
xidimension : 1
nptrs : 
--------
  1  2  
edgeTopology( 2 ) : 
Element type : Line2
xidimension : 1
nptrs : 
--------
  2  3  
edgeTopology( 3 ) : 
Element type : Line2
xidimension : 1
nptrs : 
--------
  3  1  
faceTopology( 1 ) : 
Element type : Triangle3
xidimension : 2
nptrs : 
--------
1  2  3 
baseContinuity: H1
baseInterpol: LagrangeInterpolation
```

</div>
</details>
