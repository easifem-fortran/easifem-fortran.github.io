# GetFromToml

Initiate an instance of `AbstractMaterialModel` from toml-file.

<span class="badge badge--secondary"> @IOMethods </span>

## Interface

```fortran
ABSTRACT INTERFACE
  SUBROUTINE ImportFromToml2(obj, tomlName, afile, filename,  &
    & printToml)
    IMPORT :: AbstractMaterialModel_, TxtFile_, LGT
    CLASS(AbstractMaterialModel_), INTENT(INOUT) :: obj
    CHARACTER(*), INTENT(IN) :: tomlName
    TYPE(TxtFile_), OPTIONAL, INTENT(INOUT) :: afile
    CHARACTER(*), OPTIONAL, INTENT(IN) :: filename
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: printToml
  END SUBROUTINE ImportFromToml2
END INTERFACE
```

:::info
The following method is only for internal use.
:::

```fortran
ABSTRACT INTERFACE
  SUBROUTINE ImportFromToml1(obj, table)
    IMPORT :: AbstractMaterialModel_, toml_table
    CLASS(AbstractMaterialModel_), INTENT(INOUT) :: obj
    TYPE(toml_table), INTENT(INOUT) :: table
  END SUBROUTINE ImportFromToml1
END INTERFACE
```
