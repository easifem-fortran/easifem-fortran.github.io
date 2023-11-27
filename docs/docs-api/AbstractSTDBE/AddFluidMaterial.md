# AddFluidMaterial

- This routine adds Fluid material to the [AbstractSTDBE_](./AbstractSTDBE_.md).
- This routine prepares `obj%FluidMaterialToMesh(materialNo)` and `obj%fluidMaterial(materialNo)`.
- `param` contains the parameters for constructing a FluidMaterial
- `materialName` is the name of material, it should be `fluidMaterial`.
- `region` is an instance of [MeshSelection_](../MeshSelection/MeshSelection_.md).

`materialNo` should be lesser than or equal to the total number of Fluid materials.

```fortran
INTERFACE
  MODULE SUBROUTINE STDBE_AddFluidMaterial(obj, materialNo, materialName, &
    & param, region)
    CLASS(AbstractSTDBE_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: materialNo
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: materialName
    TYPE(ParameterList_), OPTIONAL, INTENT(IN) :: param
    TYPE(MeshSelection_), OPTIONAL, INTENT(IN) :: region
  END SUBROUTINE STDBE_AddFluidMaterial
END INTERFACE
```
