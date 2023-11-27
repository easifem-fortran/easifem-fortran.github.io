This example tests additional operator, vector, quadrature values.

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE(FEVariable_) :: obj
```

constant+space

```fortran
  call display("=================================")
  obj = QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
    & typeFEVariableVector,    &
    & typeFEVariableConstant ) &
    + QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP),[3,2]), &
    & typeFEVariableVector, &
    & typeFEVariableSpace )
  CALL Display(obj, "constant+space")
```

space+space

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP),[3,2]), &
                      & typeFEVariableVector, &
                      & typeFEVariableSpace ) &
      + QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP),[3,2]), &
                      & typeFEVariableVector, &
                      & typeFEVariableSpace )
  CALL Display(obj, "space+space")
```

constant+time

```fortran
  call display("=================================")
  obj = QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
    & typeFEVariableVector,    &
    & typeFEVariableConstant ) &
    + QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP),[3,2]), &
    & typeFEVariableVector, &
    & typeFEVariableTime )
  CALL Display(obj, "constant+time")
```

time+time

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP),[3,2]), &
                      & typeFEVariableVector, &
                      & typeFEVariableTime ) &
      + QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP),[3,2]), &
                      & typeFEVariableVector, &
                      & typeFEVariableTime )
  CALL Display(obj, "time+time")
```

constant+spacetime

```fortran
  call display("=================================")
  obj = QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
    & typeFEVariableVector,    &
    & typeFEVariableConstant ) &
    + QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
    & typeFEVariableVector, &
    & typeFEVariableSpaceTime )
  CALL Display(obj, "constant+spacetime")
```

spacetime+spacetime

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
    & typeFEVariableVector, &
    & typeFEVariableSpaceTime ) &
    + QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
    & typeFEVariableVector, &
    & typeFEVariableSpaceTime )
  CALL Display(obj, "spacetime+spacetime")
```

```fortran
END PROGRAM main
```
