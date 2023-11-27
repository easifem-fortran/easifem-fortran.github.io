# Measure_Simplex_Point

This function returns the measure of point element.

## Interface

```fortran
MODULE PURE FUNCTION Measure_Simplex_Point( RefElem, XiJ ) RESULT( Ans )
  CLASS( ReferencePoint_ ), INTENT( IN ) :: RefElem
  REAL( DFP ), INTENT( IN ) :: XiJ( :, : )
  REAL( DFP ) :: Ans
END FUNCTION Measure_Simplex_Point
```

## Example

```fortran
 type( ReferencePoint_ ) :: obj
 real( dfp ) :: xij( 3, 1 )
 call random_number( xij )
 call initiate( obj=obj, NSD=3, XiJ=xij )
 call display( MeasureSimplex(obj, obj%xij), "Measure :: ")
```
