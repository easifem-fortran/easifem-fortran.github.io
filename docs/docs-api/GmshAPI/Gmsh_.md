# Gmsh

## Introduction

## Getting started

```fortran
subroutine test1
  type( gmsh_ ) :: gmsh
  integer( i4b ) :: ierr
  CALL GMSH_INIT
  ierr = gmsh%initialize()
  ierr = gmsh%open(fileName="t1.msh" )
  ierr = gmsh%write(fileName="t2.msh")
  ierr = gmsh%finalize()
  ierr = gmsh%clear()
  CALL GMSH_FINAL
end subroutine test1
```

## Structure

![](figures/Gmsh_Class.svg)

Status of these components is given below.

- [x] GmshOption [OK!]
- [x] GmshModel [OK!]
- [ ] GmshView
- [ ] GmshPlugin
- [x] GmshGraphics [OK!]
- [x] GmshFLTK [OK!]
- [ ] GmshParser
- [ ] GmshOnelab
- [ ] GmshLogger

```fortran
TYPE :: Gmsh_
  PRIVATE
  TYPE( GmshModel_ ), PUBLIC, POINTER :: model => NULL( )
  ! TYPE( GmshView_ ), PUBLIC, POINTER :: view => NULL( )
  !! TODO
  TYPE( GmshOption_ ), PUBLIC, POINTER :: option => NULL()
  ! TYPE( GmshPlugin_ ), PUBLIC, POINTER :: plugin => NULL( )
  !! TODO
  ! TYPE( GmshLogger_ ), PUBLIC, POINTER :: logger => NULL( )
  !! TODO
  TYPE( GmshGraphics_ ), PUBLIC, POINTER :: graphics => NULL()
  TYPE( GmshFLTK_ ), PUBLIC, POINTER :: fltk => NULL()
  TYPE( GmshOnelab_ ), PUBLIC, POINTER :: onelab => NULL()
  LOGICAL( LGT ) :: isInitiated = .FALSE.
END TYPE Gmsh_
```

## Methods

### Initialize

This function will start the Gmsh engine, and it allocates the pointer fields.

```fortran
FUNCTION Initialize( obj ) RESULT( ans )
  CLASS( Gmsh_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ) :: ans
```

### Finalize

This function will stop the Gmsh engine

```fortran
FUNCTION finalize( obj ) RESULT( ans )
  CLASS( Gmsh_  ), INTENT( INOUT ) :: obj
  INTEGER( I4B ) :: ans
```

### Final

This function will stop the Gmsh engine

```fortran
SUBROUTINE GMSH_FINAL
END SUBROUTINE GMSH_FINAL
```

### Open

Open a file. Equivalent to the `File->Open` menu in the Gmsh app. Handling of the file depends on its extension and/or its contents: opening a file with model data will create a new model.

```fortran
FUNCTION Open( obj, fileName ) RESULT( ans )
  CLASS( Gmsh_ ), INTENT( INOUT ) :: obj
  CHARACTER( LEN = * ), INTENT( IN ) :: fileName
  INTEGER( I4B ) :: ans
END FUNCTION Open
```

### Merge

Merge a file. Equivalent to the `File->Merge` menu in the Gmsh app. Handling of the file depends on its extension and/or its contents. Merging a file with model data will add the data to the current model.

```fortran
FUNCTION Merge( obj, fileName ) RESULT( ans )
  CLASS( Gmsh_ ), INTENT( INOUT ) :: obj
  CHARACTER( LEN = * ), INTENT( IN ) :: fileName
  INTEGER( I4B ) :: ans
END FUNCTION Merge
```

### Write

Write a file. The export format is determined by the file extension.

```fortran
FUNCTION Write( obj, fileName ) RESULT( ans )
  CLASS( Gmsh_ ), INTENT( INOUT ) :: obj
  CHARACTER( LEN = * ), INTENT( IN ) :: fileName
  INTEGER( I4B ) :: ans
END FUNCTION Write
```

### Clear

Clear all loaded models and post-processing data, and add a new empty model.

```fortran
FUNCTION Clear( obj ) RESULT( ans )
  CLASS( Gmsh_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ) :: ans
END FUNCTION Clear
```
