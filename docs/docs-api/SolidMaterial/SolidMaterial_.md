# Structure

[SolidMaterial_](/docs-api/SolidMaterial/SolidMaterial_) is a subclass of [AbstractMaterial](/docs-api/AbstractMaterial) class. Its purpose is to handle solid materials, like steel, brass, copper, among others.

`SolidMaterial_` also encapsulates the abstract model for defining the material constitutive behavior. The structure of `SolidMaterial_` is given below.

```fortran
TYPE, EXTENDS(AbstractMaterial_) :: SolidMaterial_
  CLASS(AbstractSolidMechanicsModel_), POINTER :: stressStrainModel => NULL()
    !! Pointer to stress strain material behavior of solids
END TYPE
```

The module `SolidMaterial_Class` defines following methods:

- `DEALLOCATE`
- `SetSolidMaterialParam`
- `AddSolidMaterial`

In addition the class `SolidMaterial_` defines following methods.

- `CheckEssentialParam`
- `Initiate`
- `Deallocate`
- `Import`
- `Export`
- `Display`
- `GetStressStrainModelPointer`
- `GetPrefix`
