# ContainsLine

```fortran
MODULE SUBROUTINE ContainsLine( refelem, xij, x1, x2, &
  & parametricLine, inside, xint )
  CLASS( ReferenceTriangle_ ), INTENT( IN ) :: refelem
  REAL( DFP ), INTENT( IN ) :: xij(:,:), x1(3), x2(3)
  LOGICAL(LGT), INTENT( IN ) :: parametricLine
  LOGICAL(LGT), INTENT (OUT) :: inside
  REAL( DFP ), INTENT( OUT ) :: xint(3)
END SUBROUTINE ContainsLine
```
