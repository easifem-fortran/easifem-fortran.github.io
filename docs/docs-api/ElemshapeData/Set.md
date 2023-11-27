# Set

This subroutine set parameters defined on physical element.

## Interface1

- `val` denotes nodal coordinates of element in `xiJ` format
- This subroutine will call
  - `setJacobian`
  - `setJs`
  - `setdNdXt`
  - `setBarycentricCoord`
- The facility of `N` and `dNdXi` allow us to handle non-isoparametric elements

In case `obj` is instance of [[stelemshapedata_]] then `val` will denotes coordinates of spatial nodes at some time in [tn, tn+1].

```fortran
  MODULE PURE SUBROUTINE set1(obj, val, N, dNdXi)
    CLASS(ElemshapeData_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: val(:, :)
    !! Spatial nodal coordinates
    REAL(DFP), INTENT(IN) :: N(:, :)
    !! Shape function for geometry
    REAL(DFP), INTENT(IN) :: dNdXi(:, :, :)
    !! Local derivative of shape functions for geometry
  END SUBROUTINE set1
```

The following subroutine set parameters defined on physical element.

- `val` denotes coordinates of the space-time element in `xiJa` format
- The facility of supplying `N`, `T`, and `dNdXi` allows us to handle non-isoparametric element
- This subroutine will call
  - `setJacobian` uses `dNdXi`
  - `setJs`
  - `setdNdXt`
  - `setBarycentricCoord` uses `N` and `T`
  - `setdNTdXt`
  - `setdNTdt`

## Interface2

```fortran
INTERFACE
  MODULE PURE SUBROUTINE elemsd_set2(facetobj, cellobj, cellval, cellN, &
    & celldNdXi, facetN, facetdNdXi)
    CLASS(ElemshapeData_), INTENT(INOUT) :: facetobj
    CLASS(ElemshapeData_), INTENT(INOUT) :: cellobj
    REAL(DFP), INTENT(IN) :: cellval(:, :)
    !! Spatial nodal coordinates of cell
    REAL(DFP), INTENT(IN) :: cellN(:, :)
    !! shape function for cell
    REAL(DFP), INTENT(IN) :: facetN(:, :)
    !! Shape function for geometry
    REAL(DFP), INTENT(IN) :: celldNdXi(:, :, :)
    REAL(DFP), INTENT(IN) :: facetdNdXi(:, :, :)
    !! Local derivative of shape functions for geometry
  END SUBROUTINE elemsd_set2
END INTERFACE
```

## Interface3

```fortran
INTERFACE
  MODULE PURE SUBROUTINE elemsd_set3( &
    & masterFacetobj, &
    & masterCellobj, &
    & masterCellval, &
    & masterCellN, &
    & masterCelldNdXi, &
    & masterFacetN, &
    & masterFacetdNdXi, &
    & slaveFacetobj, &
    & slaveCellobj, &
    & slaveCellval, &
    & slaveCellN, &
    & slaveCelldNdXi, &
    & slaveFacetN, &
    & slaveFacetdNdXi)
    CLASS(ElemshapeData_), INTENT(INOUT) :: masterFacetobj
    CLASS(ElemshapeData_), INTENT(INOUT) :: masterCellobj
    REAL(DFP), INTENT(IN) :: masterCellval(:, :)
    !! Spatial nodal coordinates
    REAL(DFP), INTENT(IN) :: masterCellN(:, :)
    REAL(DFP), INTENT(IN) :: masterFacetN(:, :)
    !! Shape function for geometry
    REAL(DFP), INTENT(IN) :: masterCelldNdXi(:, :, :)
    REAL(DFP), INTENT(IN) :: masterFacetdNdXi(:, :, :)
    !! Local derivative of shape functions for geometry
    CLASS(ElemshapeData_), INTENT(INOUT) :: slaveFacetobj
    CLASS(ElemshapeData_), INTENT(INOUT) :: slaveCellobj
    REAL(DFP), INTENT(IN) :: slaveCellval(:, :)
    !! Spatial nodal coordinates
    REAL(DFP), INTENT(IN) :: slaveCellN(:, :)
    REAL(DFP), INTENT(IN) :: slaveFacetN(:, :)
    !! Shape function for geometry
    REAL(DFP), INTENT(IN) :: slaveCelldNdXi(:, :, :)
    REAL(DFP), INTENT(IN) :: slaveFacetdNdXi(:, :, :)
    !! Local derivative of shape functions for geometry
  END SUBROUTINE elemsd_set3
END INTERFACE
```

## Interface4

In case of [[stelemshapedata_]] `val` denotes nodal coordinate at some intermediate space-time slab.

```fortran
  MODULE PURE SUBROUTINE stset1(obj, val, N, T, dNdXi)
    CLASS(STElemshapeData_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: val(:, :, :)
    !! Spatial nodal coordinates
    REAL(DFP), INTENT(IN) :: N(:, :)
    REAL(DFP), INTENT(IN) :: T(:)
    REAL(DFP), INTENT(IN) :: dNdXi(:, :, :)
  END SUBROUTINE stset1
```
