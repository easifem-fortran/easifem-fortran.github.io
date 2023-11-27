This example tests additional operator for matrix-quadrature-variable.

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE(FEVariable_) :: obj
```

constant+space

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
    & typeFEVariableMatrix,    &
    & typeFEVariableConstant ) &
    + QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &
    & typeFEVariableMatrix, &
    & typeFEVariableSpace )
  CALL Display(obj, "constant+space")
```

space+space

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableSpace ) &
      + QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableSpace )
  CALL Display(obj, "space+space")
```

constant+time

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
    & typeFEVariableMatrix,    &
    & typeFEVariableConstant ) &
    + QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &
    & typeFEVariableMatrix, &
    & typeFEVariableTime )
  CALL Display(obj, "constant+time")
```

time+time

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &
                      & typeFEVariableMatrix, &
                      & typeFEVariableTime ) &
      + QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP),[3,2,2]), &
                      & typeFEVariableMatrix, &
                      & typeFEVariableTime )
  CALL Display(obj, "time+time")
```

constant+spacetime

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
    & typeFEVariableMatrix,    &
    & typeFEVariableConstant ) &
    + QuadratureVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &
    & typeFEVariableMatrix, &
    & typeFEVariableSpaceTime )
  CALL Display(obj, "constant+spacetime")
```

spacetime+spacetime

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &
    & typeFEVariableMatrix, &
    & typeFEVariableSpaceTime ) &
    + QuadratureVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &
    & typeFEVariableMatrix, &
    & typeFEVariableSpaceTime )
  CALL Display(obj, "spacetime+spacetime")
```

```fortran
END PROGRAM main
```
