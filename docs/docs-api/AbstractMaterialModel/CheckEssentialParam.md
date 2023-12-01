# CheckEssentialParam

Check essential parameter.

<span class="badge badge--secondary"> @ConstructorMethods </span>

:::info
This routine is for internal use only.
:::

## Interface

```fortran
ABSTRACT INTERFACE
  SUBROUTINE CheckEssentialParam(obj, param)
    IMPORT :: AbstractMaterialModel_, ParameterList_
    CLASS(AbstractMaterialModel_), INTENT(IN) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
  END SUBROUTINE CheckEssentialParam
END INTERFACE
```
