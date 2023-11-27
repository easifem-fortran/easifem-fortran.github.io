``` fortran
PROGRAM main
  CLASS( ReferenceElement_ ), POINTER :: obj_ptr => NULL()
  TYPE( ReferenceLine_ ) :: obj
  obj_ptr => ReferenceLine_Pointer(nsd=1)
  CALL display( obj_ptr, 'obj_ptr : ' )
  CALL obj_ptr%LagrangeElement( Order=2, HighOrderobj=obj )
  CALL display( obj, "Second Order Lagrange Element : ")
  CALL display( MeasureSimplex(obj, obj%xij), "Measuresimplex : ")
END PROGRAM main
```
