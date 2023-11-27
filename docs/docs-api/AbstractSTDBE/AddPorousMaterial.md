# AddPorousMaterial

- This routine adds porous material to the [AbstractSTDBE_
- This routine prepares `obj%PorousMaterialToMesh(materialNo)` and `obj%porousMaterial(materialNo)`.
- `param` contains the parameters for constructing a PorousMaterial.
- `materialName` is the name of material, it should be `porousMaterial`.
- `region` is an instance of [MeshSelection_](../MeshSelection/MeshSelection_.md).

:::caution
`materialNo` should be lesser than or equal to the total number of porous materials, i.e., `tPorousMaterials`
:::

```fortran
INTERFACE
  MODULE SUBROUTINE STDBE_AddPorousMaterial(obj, materialNo, materialName, &
    & param, region)
    CLASS(AbstractSTDBE_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: materialNo
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: materialName
    TYPE(ParameterList_), OPTIONAL, INTENT(IN) :: param
    TYPE(MeshSelection_), OPTIONAL, INTENT(IN) :: region
  END SUBROUTINE STDBE_AddPorousMaterial
END INTERFACE
```
