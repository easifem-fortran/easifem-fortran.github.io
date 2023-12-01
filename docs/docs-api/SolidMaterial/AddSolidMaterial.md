# AddSolidMaterial

Add a solid material to the vector of `SolidMaterialPointer_`.

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

```fortran
INTERFACE AddSolidMaterial
  MODULE SUBROUTINE AddSolidMaterial( &
    & obj, &
    & tMaterials,   &
    & materialNo, &
    & materialName,  &
    & solidMaterialToMesh, &
    & param, &
    & region)
    TYPE(SolidMaterialPointer_), INTENT(INOUT) :: obj(:)
    INTEGER(I4B), INTENT(IN) :: tMaterials
    INTEGER(I4B), INTENT(IN) :: materialNo
    CHARACTER(*), OPTIONAL, INTENT(IN) :: materialName
    TYPE(ParameterList_), OPTIONAL, INTENT(IN) :: param
    TYPE(MeshSelection_), OPTIONAL, INTENT(IN) :: region
    TYPE(MeshSelection_), OPTIONAL, INTENT(INOUT) :: solidMaterialToMesh(:)
  END SUBROUTINE AddSolidMaterial
END INTERFACE AddSolidMaterial
```
