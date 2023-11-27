This example tests additional operator for vector and nodal.

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE(FEVariable_) :: obj
```

constant+space

```fortran
  call display("=================================")
  obj = NodalVariable( arange(1.0_DFP, 3.0_DFP), &
    & typeFEVariableVector,    &
    & typeFEVariableConstant ) &
    + NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP),[3,2]), &
    & typeFEVariableVector, &
    & typeFEVariableSpace )
  CALL Display(obj, "constant+space")
```

space+space

```fortran
  call display("=================================")
  obj = NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP),[3,2]), &
                      & typeFEVariableVector, &
                      & typeFEVariableSpace ) &
      + NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP),[3,2]), &
                      & typeFEVariableVector, &
                      & typeFEVariableSpace )
  CALL Display(obj, "space+space")
```

constant+time

```fortran
  call display("=================================")
  obj = NodalVariable( arange(1.0_DFP, 3.0_DFP), &
    & typeFEVariableVector,    &
    & typeFEVariableConstant ) &
    + NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP),[3,2]), &
    & typeFEVariableVector, &
    & typeFEVariableTime )
  CALL Display(obj, "constant+time")
```

time+time

```fortran
  call display("=================================")
  obj = NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP),[3,2]), &
                      & typeFEVariableVector, &
                      & typeFEVariableTime ) &
      + NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP),[3,2]), &
                      & typeFEVariableVector, &
                      & typeFEVariableTime )
  CALL Display(obj, "time+time")
```

constant+spacetime

```fortran
  call display("=================================")
  obj = NodalVariable( arange(1.0_DFP, 3.0_DFP), &
    & typeFEVariableVector,    &
    & typeFEVariableConstant ) &
    + NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
    & typeFEVariableVector, &
    & typeFEVariableSpaceTime )
  CALL Display(obj, "constant+spacetime")
```

spacetime+spacetime

```fortran
  call display("=================================")
  obj = NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
    & typeFEVariableVector, &
    & typeFEVariableSpaceTime ) &
    + NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
    & typeFEVariableVector, &
    & typeFEVariableSpaceTime )
  CALL Display(obj, "spacetime+spacetime")
```

```fortran
END PROGRAM main
```
