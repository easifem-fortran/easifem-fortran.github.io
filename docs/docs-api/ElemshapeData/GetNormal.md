# GetNormal

```fortran
  MODULE PURE SUBROUTINE GetNormal(obj, normal, nsd)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: normal(:, :)
    !! normal(1:3, 1:nip) = obj%normal
    INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: nsd
  END SUBROUTINE GetNormal
```

```fortran
  MODULE PURE SUBROUTINE GetNormal(obj, normal, nsd)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    TYPE(FEVariable_), INTENT(INOUT) :: normal
    !! normal(1:3, 1:nip) = obj%normal
    !! Quadrature, Vector, Space
    INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: nsd
  END SUBROUTINE GetNormal
```

```fortran
  MODULE PURE SUBROUTINE GetNormal(obj, normal, nsd)
    CLASS(STElemshapeData_), INTENT(IN) :: obj(:)
    TYPE(FEVariable_), INTENT(INOUT) :: normal
    !! normal(1:3, 1:nip) = obj%normal
    !! Quadrature, Vector, SpaceTime
    INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: nsd
  END SUBROUTINE GetNormal
```
