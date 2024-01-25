# Structure

`FortranFile_` is an extension of `AbstractFile_`. It provides a simplified interface to the native Fortran file capabilities and includes error checking.

Note that `FortranFile_` does not provide any method to write and read data from the file.

This is because the data may be written in ASCII or Binary format. For this reason `FortranFile_` is extended to following file formats.

- [TxtFile_](/docs-api/TxtFile)
- DA32File (TODO)

```fortran
TYPE, EXTENDS(AbstractFile_) :: FortranFile_
  PRIVATE
  LOGICAL(LGT) :: initstat = .FALSE.
    !! file initiated or not
  INTEGER(I4B) :: unitno = -1
    !! unit number
  INTEGER(I4B) :: reclval = -1
    !! record length for direct access
  LOGICAL(LGT) :: formatstat = .FALSE.
    !! file is formatted or not
  LOGICAL(LGT) :: accessstat = .FALSE.
    !! direct or sequential access
  LOGICAL(LGT) :: newstat = .FALSE.
    !! the new status of a file
  LOGICAL(LGT) :: overwrite = .FALSE.
    !! replace or not
  LOGICAL(LGT) :: padstat = .FALSE.
    !! Whether or not the file is being padded
  LOGICAL(LGT) :: getNewUnit = .FALSE.
  CHARACTER(LEN=6) :: posopt = 'ASIS  '
  CHARACTER(LEN=1) :: comment = hash
  CHARACTER(LEN=1) :: separator = comma
  CHARACTER(LEN=2) :: delimiter = "\n"
```
