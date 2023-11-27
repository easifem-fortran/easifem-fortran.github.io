This example tests additional operator for scalar nodal values.

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE(FEVariable_) :: obj
```

constant+space

```fortran
  call display("=================================")
  obj = NodalVariable( 10.0_DFP, &
    & typeFEVariableScalar,    &
    & typeFEVariableConstant ) &
    + NodalVariable( arange(1.0_DFP, 3.0_DFP), &
    & typeFEVariableScalar, &
    & typeFEVariableSpace )
  CALL Display(obj, "constnat+space")
```

space+space

```fortran
  call display("=================================")
  obj = NodalVariable( arange(1.0_DFP, 3.0_DFP), &
                      & typeFEVariableScalar, &
                      & typeFEVariableSpace ) &
      + NodalVariable( arange(1.0_DFP, 3.0_DFP), &
                      & typeFEVariableScalar, &
                      & typeFEVariableSpace )
  CALL Display(obj, "space+space")
```

constant+time

```fortran
  call display("=================================")
  obj = NodalVariable( 10.0_DFP, &
    & typeFEVariableScalar,    &
    & typeFEVariableConstant ) &
    + NodalVariable( arange(1.0_DFP, 3.0_DFP), &
    & typeFEVariableScalar, &
    & typeFEVariableTime )
  CALL Display(obj, "constant+time")
```

time+time

```fortran
  call display("=================================")
  obj = NodalVariable( arange(1.0_DFP, 3.0_DFP), &
                      & typeFEVariableScalar, &
                      & typeFEVariableTime ) &
      + NodalVariable( arange(1.0_DFP, 3.0_DFP), &
                      & typeFEVariableScalar, &
                      & typeFEVariableTime )
  CALL Display(obj, "time+time")
```

constant+spacetime

```fortran
  call display("=================================")
  obj = NodalVariable( 10.0_DFP, &
    & typeFEVariableScalar,    &
    & typeFEVariableConstant ) &
    + NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
    & typeFEVariableScalar, &
    & typeFEVariableSpaceTime )
  CALL Display(obj, "constant+spacetime")
```

spacetime+spacetime

```fortran
  call display("=================================")
  obj = NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
    & typeFEVariableScalar, &
    & typeFEVariableSpaceTime ) &
    + NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
    & typeFEVariableScalar, &
    & typeFEVariableSpaceTime )
  CALL Display(obj, "spacetime+spacetime")
```

```fortran
END PROGRAM main
```
