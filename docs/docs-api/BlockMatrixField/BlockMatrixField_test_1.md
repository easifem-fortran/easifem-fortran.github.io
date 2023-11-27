---
tags:
    - BlockMatrixField
    - BlockMatrixField/SetBlockMatrixFieldParam
    - BlockMatrixField/CheckEssentialParam
---

# BlockMatrixField example 1

This example shows the use of `SetBlockMatrixFieldParam`, [BlockMatrixField](BlockMatrixField_.md)

## Usage

```fortran
PROGRAM main
```

```fortran
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
```

```fortran
  TYPE( BlockMatrixField_ ) :: obj
  TYPE( ParameterList_ ) :: param
```

```fortran
  CALL FPL_INIT(); CALL param%Initiate()
  CALL SetBlockMatrixFieldParam(param=param, name="K",  &
    & physicalVarNames=["V", "P"], spaceCompo=[2, 1], &
    & timeCompo=[1,1], fieldType=FIELD_TYPE_NORMAL,  &
    & matrixProp="UNSYM" )
  CALL obj%CheckEssentialParam( param )
  CALL param%Print()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
```

```fortran
END PROGRAM main
```
