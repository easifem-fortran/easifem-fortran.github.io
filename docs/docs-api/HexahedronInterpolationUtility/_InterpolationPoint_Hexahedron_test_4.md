```fortran
PROGRAM main
USE easifembase
IMPLICIT NONE
INTEGER(i4b) :: i1, i2, p, q, r
REAL(dfp), ALLOCATABLE :: x(:, :)
TYPE(string) :: astr
  p = 2
  q = 1
  r = 1
  x = InterpolationPoint_Hexahedron( &
    & p=p, q=q, r = r, &
    & ipType1=Equidistance, &
    & ipType2=Equidistance, &
    & iptype3=Equidistance )
astr = "| no | $x_1$ | $x_2$ | $x_3$ |"//char_lf
  astr = astr //  mdencode( arange(1.0_DFP, real(size(x, 2), dfp) ) .colconcat. TRANSPOSE(x))
  call display( astr%chars(), "xij (order="//tostring([p,q,r])//")=" // char_lf // char_lf )
END PROGRAM main
```
