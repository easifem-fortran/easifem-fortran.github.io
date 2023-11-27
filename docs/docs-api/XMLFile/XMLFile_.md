# Structure

XMLFile is a child of [[AbstractFile_]] class.

```fortran
TYPE, EXTENDS( AbstractFile_ ) :: XMLFile_
  PRIVATE
  LOGICAL( LGT ), PUBLIC :: isInitiated = .FALSE.
    !! Logical indicating if file was initialized
  INTEGER( I4B ), PUBLIC :: unitNo=-1
    !! The unit number assigned to the file
  REAL( DFP ) :: version=1.0_DFP
    !! The XML version
  CHARACTER( LEN=32 ) :: encoding='UTF-8'
    !! The XML file encoding
  TYPE( String ) :: style_sheet
  LOGICAL( LGT ) :: standalone=.FALSE.
    !! The root XML element of the file
  LOGICAL( LGT ) :: newstat=.FALSE.
    !! The 'new' status of a file
  LOGICAL( LGT ) :: overwriteStat=.FALSE.
    !! When .TRUE., file data can be overwritten
  TYPE( String ) :: fullname
    !! full name of the file
  TYPE( XMLTag_ ), PUBLIC, POINTER :: root => NULL()
```

## ConstructorMethods

### Initiate

```fortran
MODULE SUBROUTINE Initiate( obj, filename, mode )
  CLASS( xmlFile_ ), INTENT( INOUT ) :: obj
  CHARACTER( LEN = * ), INTENT( IN ) :: filename
  CHARACTER( LEN = * ), INTENT( IN ) :: mode
    !! mode can be READ, WRITE, NEW, OVERWRITE
END SUBROUTINE Initiate
```

This routine initiates the XMLFile .

- filename is full name of the file
- mode can be READ, WRITE, NEW, OVERWRITE
- **READ**: The file should exist.
- **WRITE**: The file should exist.
- **OVERWRITE**: The file is opened with read and write access. If the file does not exist, then a new file is created.
- **NEW**: The file is opened with read and write access. If the file does not exist, then a new file is created.

### Deallocate

```fortran
MODULE SUBROUTINE Deallocate( obj, delete )
  CLASS( xmlFile_ ), INTENT( INOUT ) :: obj
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: delete
END SUBROUTINE Deallocate
```

This routine deallocates the data stored in the file. This routine also close the file. If `delete` is present then delete the file.

### Open

```fortran
MODULE SUBROUTINE Open( obj )
  CLASS( xmlFile_ ), INTENT( INOUT ) :: obj
END SUBROUTINE Open
```

### Close

```fortran
MODULE SUBROUTINE Close( obj )
  CLASS( xmlFile_ ), INTENT( INOUT ) :: obj
END SUBROUTINE Close
```

### Delete

```fortran
MODULE SUBROUTINE Delete( obj )
  CLASS( xmlFile_ ), INTENT( INOUT ) :: obj
END SUBROUTINE Delete
```

## IOMethods

### Export

```fortran
MODULE SUBROUTINE Export( obj, filename )
  CLASS( xmlFile_ ), INTENT( IN ) :: obj
  CHARACTER( LEN = * ), INTENT( IN ) :: filename
END SUBROUTINE Export
```

Export the content of a XMLFile to an XML file.

### Import

```fortran
MODULE SUBROUTINE Import( obj, filename )
  CLASS( xmlFile_ ), INTENT( INOUT ) :: obj
  CHARACTER( LEN = * ), INTENT( IN ) :: filename
END SUBROUTINE Import
```

### Display

```fortran
MODULE SUBROUTINE Display( obj, msg, unitNo )
  CLASS( XMLFile_ ), INTENT( IN ) :: obj
  CHARACTER( LEN = * ), INTENT( IN ) :: msg
  INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: unitNo
END SUBROUTINE Display
```

### ParseXMLDeclaration

```fortran
MODULE SUBROUTINE ParseXMLDeclaration( obj )
  CLASS( XMLFile_ ), INTENT( INOUT ) :: obj
END SUBROUTINE ParseXMLDeclaration
```

### BuildCache

```fortran
MODULE SUBROUTINE BuildCache( obj, nchars, fileCache )
  CLASS( XMLFile_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( OUT ) :: nchars
  CHARACTER( LEN=1 ), ALLOCATABLE, INTENT( INOUT ) :: fileCache(:)
END SUBROUTINE BuildCache
```

## SetMethods

### SetNewStat

```fortran
MODULE SUBROUTINE SetNewStat( obj, bool )
  CLASS( XMLFile_ ), INTENT( INOUT ) :: obj
  LOGICAL( LGT ), INTENT( IN ) :: bool
END SUBROUTINE SetNewStat
```

### SetOverwriteStat

```fortran
MODULE SUBROUTINE SetOverwriteStat( obj, bool )
  CLASS( XMLFile_ ), INTENT( INOUT ) :: obj
  LOGICAL( LGT ), INTENT( IN ) :: bool
END SUBROUTINE SetOverwriteStat
```

## GetMethods

### isNew

```fortran
MODULE PURE FUNCTION isNew( obj ) RESULT( Ans )
  CLASS( XMLFile_ ), INTENT( IN ) :: obj
  LOGICAL( LGT ) :: ans
END FUNCTION isNew
```

### isOverwrite

```fortran
MODULE PURE FUNCTION isFormatted( obj ) RESULT( ans )
  CLASS( XMLFile_ ), INTENT( IN ) :: obj
  LOGICAL( LGT ) :: ans
END FUNCTION isFormatted
```
