# Structure

`TxtFile_` is a subclass of [FortranFile_](/docs-api/FortranFile).

It contains the content is in ASCII format.

```fortran
TYPE, EXTENDS(FortranFile_) :: TxtFile_
  PRIVATE
  LOGICAL(LGT) :: echostat = .FALSE.
  INTEGER(I4B) :: echounit = -1
```

## ConstructorMethods

### AddSurrogate

### Initiate

### Deallocate

## SetMethods

### SetEchoStat

### SetEchoUnit

## GetMethods

### GetEchoStat

### GetEchoUnit

### GetTotalRecords

## ReadMethods

### ReadLine

### ReadLines

## WriteMethods
