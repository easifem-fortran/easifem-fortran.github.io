# AbstractFile

This type is an abstract type, so it has no specific implementation. It exists only to provide a base for the extended types. It specifies the maximum lengths for the file path, name, and extension, some basic attributes of a file such as whether or not it is open and also if it is open for reading or writing are provided. Methods to interface to all attributes are also provided. Since this is an abstract type, it has no specific implementation so see one of it's extended types for examples on how it should be used.

:::info Inspiration

The developement of this module is inspired from the `FileType_Base.F90` of Futility package. The original source is located [here](https://github.com/CASL/Futility/blob/master/src/FileType_Base.F90). The original code has been modified as per the code-standard of easifem library.

:::

## Structure

```fortran
TYPE,ABSTRACT :: AbstractFile_
  PRIVATE
  INTEGER(I4B) :: pathlen=0
    !! The length of the path string for this file
  INTEGER(I4B) :: fnamelen=0
    !! The length of the name string for this file
  INTEGER(I4B) :: extlen=0
    !! The length of the file name extension string for this file
  TYPE(String) :: path
    !! The path string to the file
  TYPE(String) :: fileName
    !! The name of the file (without the file extension)
  TYPE(String) :: ext
    !! The extension of the file name
  LOGICAL(LGT) :: openstat=.FALSE.
    !! Whether or not the file is open
  LOGICAL(LGT) :: EOFstat=.FALSE.
    !! Whether or not the end of file has been reached
  LOGICAL(LGT) :: readstat=.FALSE.
    !! Whether or not the file is open for reading
  LOGICAL(LGT) :: writestat=.FALSE.
    !! Whether or not the file is open for writing
```

## Deferred methods

### Open

Method to open the file. The generic interface is given below

```fortran
ABSTRACT INTERFACE
  SUBROUTINE Open(obj)
    IMPORT :: AbstractFile_
    CLASS( AbstractFile_ ), INTENT( INOUT ) :: obj
  END SUBROUTINE Open
END INTERFACE
```

### Close

Method to close the file. The generic interface is given below.

```fortran
ABSTRACT INTERFACE
  SUBROUTINE Close(obj)
    IMPORT :: AbstractFile_
    CLASS( AbstractFile_ ), INTENT( INOUT ) :: obj
  END SUBROUTINE Close
END INTERFACE
```

### Delete

Method to delete a file. The generic interface is given below.

```fortran

ABSTRACT INTERFACE
  SUBROUTINE Delete(obj)
    IMPORT :: AbstractFile_
    CLASS( AbstractFile_ ), INTENT( INOUT ) :: obj
  END SUBROUTINE Delete
END INTERFACE
```

## ConstructorMethods

### AddSurrogate

Add surrogate to the module error handler.

```fortran

INTERFACE
MODULE SUBROUTINE addSurrogate( obj, UserObj )
  CLASS( AbstractFile_ ), INTENT( INOUT ) :: obj
  TYPE( ExceptionHandler_ ), INTENT( IN ) :: UserObj
END SUBROUTINE addSurrogate
END INTERFACE

```

### Deallocate

Deallocate the data stored inside an instance of file object. Also you can delete the existing file.

```fortran
INTERFACE
MODULE SUBROUTINE Deallocate( obj, delete )
  CLASS( AbstractFile_ ), INTENT( INOUT ) :: obj
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: delete
END SUBROUTINE Deallocate
END INTERFACE

```

## SetMethods

### SetFilePath

Set the path of file.

```fortran
INTERFACE
MODULE SUBROUTINE setFilePath( obj, path )
  CLASS( AbstractFile_ ), INTENT( INOUT ) :: obj
  TYPE( String ), INTENT( IN ) :: path
END SUBROUTINE setFilePath
END INTERFACE
```

### SetFileName

Set filename (without extension and dot)

```fortran
INTERFACE
MODULE SUBROUTINE setFileName( obj, fileName )
  CLASS( AbstractFile_ ), INTENT( INOUT ) :: obj
  TYPE( String ), INTENT( IN ) :: fileName
END SUBROUTINE setFileName
END INTERFACE

```

### SetFileExt

Set the file extension.

```fortran
INTERFACE
MODULE SUBROUTINE setFileExt( obj, Ext )
  CLASS( AbstractFile_ ), INTENT( INOUT ) :: obj
  TYPE( String ), INTENT( IN ) :: Ext
END SUBROUTINE setFileExt
END INTERFACE
```

### SetEOFStat

Set the end of file status.

```fortran
INTERFACE
MODULE SUBROUTINE setEOFstat( obj, stat )
  CLASS( AbstractFile_ ), INTENT( INOUT ) :: obj
  LOGICAL( LGT ), INTENT( IN ) :: stat
END SUBROUTINE setEOFstat
END INTERFACE
```

### SetOpenStat

Set the status of open or not.

```fortran
INTERFACE
MODULE SUBROUTINE setOpenStat( obj, stat )
  CLASS( AbstractFile_ ), INTENT( INOUT ) :: obj
  LOGICAL( LGT ), INTENT( IN ) :: stat
END SUBROUTINE setOpenStat
END INTERFACE

```

### SetReadStat

Set the status for read access

```fortran
INTERFACE
MODULE SUBROUTINE setReadStat( obj, stat )
  CLASS( AbstractFile_ ), INTENT( INOUT ) :: obj
  LOGICAL( LGT ), INTENT( IN ) :: stat
END SUBROUTINE setReadStat
END INTERFACE

```

### SetWriteStat

Set the status for write access

```fortran
INTERFACE
MODULE SUBROUTINE setWriteStat( obj, stat )
  CLASS( AbstractFile_ ), INTENT( INOUT ) :: obj
  LOGICAL( LGT ), INTENT( IN ) :: stat
END SUBROUTINE setWriteStat
END INTERFACE

```

## GetMethods

### GetFilePath

Get the path of the file.

```fortran
INTERFACE
MODULE FUNCTION getFilePath( obj ) RESULT( path )
  CLASS( AbstractFile_ ), INTENT( IN ) :: obj
  TYPE( String ) :: path
END FUNCTION getFilePath
END INTERFACE
```

### GetFileName

Get the name of the file without extension

```fortran
INTERFACE
MODULE FUNCTION getFileName( obj ) RESULT( fileName )
  CLASS( AbstractFile_ ), INTENT( IN ) :: obj
  TYPE( String ) :: fileName
END FUNCTION getFileName
END INTERFACE

```

### GetFileExt

Get the extension of the file.

```fortran
INTERFACE
MODULE FUNCTION getFileExt( obj ) RESULT( Ext )
  CLASS( AbstractFile_ ), INTENT( IN ) :: obj
  TYPE( String ) :: Ext
END FUNCTION getFileExt
END INTERFACE

```

### GetFileParts

Get the path, name, and extension of the file.

```fortran
INTERFACE
MODULE PURE SUBROUTINE getFileParts( obj, path, fileName, ext )
  CLASS( AbstractFile_ ), INTENT( IN ) :: obj
  TYPE( String ), INTENT( OUT ) :: path
  TYPE( String ), INTENT( OUT ) :: fileName
  TYPE( String ), INTENT( OUT ) :: ext
END SUBROUTINE getFileParts
END INTERFACE

```

## EnquireMethods

### IsOpen

Returns true if the file is open

```forran
INTERFACE
MODULE FUNCTION isOpen( obj ) RESULT( ans )
  CLASS( AbstractFile_ ), INTENT( IN ) :: obj
  LOGICAL( LGT ) :: ans
END FUNCTION isOpen
END INTERFACE
```

### IsEOF

Returns true if end of file is reached.

```fortran
INTERFACE
MODULE FUNCTION isEOF( obj ) RESULT( ans )
  CLASS( AbstractFile_ ), INTENT( IN ) :: obj
  LOGICAL( LGT ) :: ans
END FUNCTION isEOF
END INTERFACE
```

### IsRead

Returns true if the file is opened with read access.

```fortran
INTERFACE
MODULE FUNCTION isRead( obj ) RESULT( ans )
  CLASS( AbstractFile_ ), INTENT( IN ) :: obj
  LOGICAL( LGT ) :: ans
END FUNCTION isRead
END INTERFACE
```

### IsWrite

Returns true if the file is opened with write access.

```fortran
INTERFACE
MODULE FUNCTION isWrite( obj ) RESULT( ans )
  CLASS( AbstractFile_ ), INTENT( IN ) :: obj
  LOGICAL( LGT ) :: ans
END FUNCTION isWrite
END INTERFACE

```
