# Structure

[FortranFile_](../FortranFile/FortranFile_.md) is extended to create a txtfile. The content is in ASCII.

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
