# DirichletBCImportFromToml

Import vector of `DirichletBCPointer_` from toml file.

<span class="badge badge--secondary"> @IOMethods </span>

## Interface 1

```fortran
INTERFACE DirichletBCImportFromToml
  MODULE SUBROUTINE bc_ImportFromToml1(obj, table, dom, tomlName)
    TYPE(DirichletBCPointer_), INTENT(INOUT) :: obj(:)
    !! Should be allocated outside
    TYPE(toml_table), INTENT(INOUT) :: table
    !! Toml table to returned
    CLASS(Domain_), TARGET, INTENT(IN) :: dom
    !! domain
    CHARACTER(*), INTENT(IN) :: tomlName
  END SUBROUTINE bc_ImportFromToml1
END INTERFACE DirichletBCImportFromToml
```

## Interface 2

```fortran
INTERFACE DirichletBCImportFromToml
  MODULE SUBROUTINE bc_ImportFromToml2(obj, dom, tomlName, afile,  &
    & filename, printToml)
    TYPE(DirichletBCPointer_), INTENT(INOUT) :: obj(:)
    CLASS(Domain_), TARGET, INTENT(IN) :: dom
    CHARACTER(*), INTENT(IN) :: tomlName
    TYPE(TxtFile_), OPTIONAL, INTENT(INOUT) :: afile
    CHARACTER(*), OPTIONAL, INTENT(IN) :: filename
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: printToml
  END SUBROUTINE bc_ImportFromToml2
END INTERFACE DirichletBCImportFromToml
```
