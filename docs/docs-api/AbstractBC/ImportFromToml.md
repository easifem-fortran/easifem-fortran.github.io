# ImportFromToml

Initiate an instance of `AbstractBC_` from toml configuration.

## Interface 1

```fortran
INTERFACE AbstractBCImportFromToml
  MODULE SUBROUTINE bc_ImportFromToml1(obj, table, dom)
    CLASS(AbstractBC_), INTENT(INOUT) :: obj
    TYPE(toml_table), INTENT(INOUT) :: table
    CLASS(Domain_), TARGET, INTENT(IN) :: dom
  END SUBROUTINE bc_ImportFromToml1
END INTERFACE AbstractBCImportFromToml
```

## Interface 2

```fortran
INTERFACE AbstractBCImportFromToml
  MODULE SUBROUTINE bc_ImportFromToml2(obj, dom, tomlName, afile,  &
    & filename, printToml)
    CLASS(AbstractBC_), INTENT(INOUT) :: obj
    CLASS(Domain_), TARGET, INTENT(IN) :: dom
    CHARACTER(*), INTENT(IN) :: tomlName
    TYPE(TxtFile_), OPTIONAL, INTENT(INOUT) :: afile
    CHARACTER(*), OPTIONAL, INTENT(IN) :: filename
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: printToml
  END SUBROUTINE bc_ImportFromToml2
END INTERFACE AbstractBCImportFromToml
```

## TOML configuration

```toml
luaScript = "./hello.lua"
# name of the lua script which contains the functions

luaFunctionName = "hello"
# which function in the lua script to be used for boundary condition
```
