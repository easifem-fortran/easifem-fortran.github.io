Use of following methods:

- ReferenceLine
- MeasureSimplex
- LagrangeElement
- ReferenceLine_Pointer

``` fortran
PROGRAM main
  TYPE( ReferenceLine_ ) :: obj1, obj2, obj3
  CLASS( ReferenceElement_ ), POINTER :: obj_ptr1 => NULL()
  REAL( DFP ) :: xij( 3, 2 )
  CALL RANDOM_NUMBER( xij )
  CALL Initiate( obj=obj1, NSD=3 )
  CALL display( obj1, "obj1 : " )
  CALL display( MeasureSimplex(obj1, obj1%xij), "measure = ")
  obj2 = ReferenceLine(nsd=3)
  CALL display( obj2, 'obj2 : ' )
  CALL obj1%LagrangeElement( Order=2, HighOrderobj=obj3 )
  CALL display( obj3, "Second Order Lagrange Element : ")
  obj_ptr1 => ReferenceLine_Pointer( nsd = 3, xij = xij )
  CALL display( obj_ptr1, "obj_ptr1 : ")
END PROGRAM main
```
