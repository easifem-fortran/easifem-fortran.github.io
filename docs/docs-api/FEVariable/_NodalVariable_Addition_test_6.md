This example tests additional operator, matrix, nodal.

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE(FEVariable_) :: obj
```

constant+space

```fortran
  call display("=================================")
  obj = NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
    & typeFEVariableMatrix,    &
    & typeFEVariableConstant ) &
    + NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &
    & typeFEVariableMatrix, &
    & typeFEVariableSpace )
  CALL Display(obj, "constant+space")
```

space+space

```fortran
  call display("=================================")
  obj = NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableSpace ) &
      + NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableSpace )
  CALL Display(obj, "space+space")
```

constant+time

```fortran
  call display("=================================")
  obj = NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
    & typeFEVariableMatrix,    &
    & typeFEVariableConstant ) &
    + NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &
    & typeFEVariableMatrix, &
    & typeFEVariableTime )
  CALL Display(obj, "constant+time")
```

time+time

```fortran
  call display("=================================")
  obj = NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &
                      & typeFEVariableMatrix, &
                      & typeFEVariableTime ) &
      + NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &
                      & typeFEVariableMatrix, &
                      & typeFEVariableTime )
  CALL Display(obj, "time+time")
```

constant+spacetime

```fortran
  call display("=================================")
  obj = NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
    & typeFEVariableMatrix,    &
    & typeFEVariableConstant ) &
    + NodalVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &
    & typeFEVariableMatrix, &
    & typeFEVariableSpaceTime )
  CALL Display(obj, "constant+spacetime")
```

spacetime+spacetime

```fortran
  call display("=================================")
  obj = NodalVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &
    & typeFEVariableMatrix, &
    & typeFEVariableSpaceTime ) &
    + NodalVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &
    & typeFEVariableMatrix, &
    & typeFEVariableSpaceTime )
  CALL Display(obj, "spacetime+spacetime")
```

```fortran
END PROGRAM main
```
