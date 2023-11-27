# Structure

The Fortran file type is an extension of [[AbstractFile_]].
It provides a simplified interface to the native Fortran file capabilities and includes error checking.

Note that FortranFile does not provide any method to write and read data from the file. This is because the data may be written in ASCII or Binary format. For this reason FortranFile is extended to following file formats.

- [[TxtFile_]]
- [[DA32File_]].

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

## ConstructorMethods

### AddSurrogate

Add surrogate to the module

```fortran
INTERFACE
  MODULE SUBROUTINE addSurrogate(obj, UserObj)
    CLASS(FortranFile_), INTENT(INOUT) :: obj
    TYPE(ExceptionHandler_), INTENT(IN) :: UserObj
  END SUBROUTINE addSurrogate
END INTERFACE
```

### Initiate

Initiate the fortran file. See example [[FortranFile_test_1]] and [[FortranFile_test_2]]

```fortran
INTERFACE
  MODULE SUBROUTINE initiate( obj, filename, unit, status, access, form, &
    & position, action, pad, recl, comment, separator, delimiter)
    CLASS(FortranFile_), INTENT(INOUT) :: obj
    CHARACTER(LEN=*), INTENT(IN) :: filename
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unit
    !! unit number, should not be equal to `stdout, stdin, stderr`
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: status
    !! OLD, NEW, SCRATCH, REPLACE, UNKNOWN
    !! If UNKNOWN then we use REPLACE
    !! Default is REPLACE
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: access
    !! DIRECT, SEQUENTIAL, STREAM
    !! Default is SEQUENTIAL
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: form
    !! FORMATTED, UNFORMATTED
    !! Default is FORMATTED
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: position
    !! REWIND, APPEND, ASIS
    !! Default is ASIS
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: action
    !! READ, WRITE, READWRITE
    !! Default is READWRITE
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: pad
    !! YES, NO
    !! Default is YES
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: recl
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: comment
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: separator
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: delimiter
  END SUBROUTINE initiate
END INTERFACE
```

### Deallocate

Deallocate the content of Fortran file, you can delete the file if you want. Note that we have overridden the deallocate method defined for [[AbstractFile_]]. See [[FortranFile_test_1]] and [[FortranFile_test_2]].

```fortran
INTERFACE
  MODULE SUBROUTINE Deallocate(obj, delete)
    CLASS(FortranFile_), INTENT(INOUT) :: obj
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: delete
  END SUBROUTINE Deallocate
END INTERFACE
```

### Open

Open the Fortran file. See [[FortranFile_test_1]] and [[FortranFile_test_2]]

```fortran
INTERFACE
  MODULE SUBROUTINE open(obj)
    CLASS(FortranFile_), INTENT(INOUT) :: obj
  END SUBROUTINE open
END INTERFACE
```

### Close

Close the fortran file. See [[FortranFile_test_1]] and [[FortranFile_test_2]]

```fortran
INTERFACE
  MODULE SUBROUTINE close(obj)
    CLASS(FortranFile_), INTENT(INOUT) :: obj
  END SUBROUTINE close
END INTERFACE
```

### Delete

Delete the fortran file. See [[FortranFile_test_1]] and [[FortranFile_test_2]]

```fortran
INTERFACE
  MODULE SUBROUTINE delete(obj)
    CLASS(FortranFile_), INTENT(INOUT) :: obj
  END SUBROUTINE delete
END INTERFACE
```

### Backspace

Move one line back

```fortran
INTERFACE
  MODULE SUBROUTINE backspace(obj)
    CLASS(FortranFile_), INTENT(INOUT) :: obj
  END SUBROUTINE backspace
END INTERFACE
```

### Rewind

Move to the begining

```fortran
INTERFACE
  MODULE SUBROUTINE rewind(obj)
    CLASS(FortranFile_), INTENT(INOUT) :: obj
  END SUBROUTINE rewind
END INTERFACE
```

## SetMethods

### SetStatus

Set the status of the file.

- If the status is `OLD` then file should exists
- Otherwise we will create new file and replace any existing file.

```fortran
INTERFACE
  MODULE SUBROUTINE SetStatus(obj, status)
    CLASS(FortranFile_), INTENT(INOUT) :: obj
    CHARACTER(LEN=*), INTENT(IN) :: status
    !! status can be
    !! OLD, NEW, REPLACE, SCRATCH, UNKNOWN
    LOGICAL(LGT) :: ans
  END SUBROUTINE SetStatus
END INTERFACE
```

## GetMethods

### GetUnitNo

Get the unit number of the fortran file

```fortran
INTERFACE
  MODULE PURE FUNCTION getUnitNo(obj) RESULT(ans)
    CLASS(FortranFile_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION getUnitNo
END INTERFACE
```

### GetRecLen

Get the length of the record

```fortran
INTERFACE
  MODULE PURE FUNCTION getRecLen(obj) RESULT(ans)
    CLASS(FortranFile_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION getRecLen
END INTERFACE
```

## EnquireMethods

### IsFormatted

Returns true if the file is formatted

```fortran
INTERFACE
  MODULE PURE FUNCTION isFormatted(obj) RESULT(ans)
    CLASS(FortranFile_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isFormatted
END INTERFACE
```

### IsDirect

Returns true if direct access

```fortran
INTERFACE
  MODULE PURE FUNCTION isDirect(obj) RESULT(ans)
    CLASS(FortranFile_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isDirect
END INTERFACE
```

### IsPadded

Returns true if padded

```fortran
INTERFACE
  MODULE PURE FUNCTION isPadded(obj) RESULT(ans)
    CLASS(FortranFile_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isPadded
END INTERFACE
```

### IsNew

Returns true if the file is new

```fortran
INTERFACE
  MODULE PURE FUNCTION isNew(obj) RESULT(Ans)
    CLASS(FortranFile_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isNew
END INTERFACE
```

### IsOverwrite

Returns true if overwrite status is set

```fortran
INTERFACE
  MODULE PURE FUNCTION isOverwrite(obj) RESULT(Ans)
    CLASS(FortranFile_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isOverwrite
END INTERFACE
```

### IsInitiated

Returns true if the file is initiated

```fortran
INTERFACE
  MODULE PURE FUNCTION isInitiated(obj) RESULT(Ans)
    CLASS(FortranFile_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isInitiated
END INTERFACE
```
