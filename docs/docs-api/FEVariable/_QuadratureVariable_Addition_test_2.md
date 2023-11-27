This example tests additional operator, scalar quadrature.

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE(FEVariable_) :: obj
```

constant+space

```fortran
  call display("=================================")
  obj = QuadratureVariable( 10.0_DFP, &
    & typeFEVariableScalar,    &
    & typeFEVariableConstant ) &
    + QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
    & typeFEVariableScalar, &
    & typeFEVariableSpace )
  CALL Display(obj, "constnat+space")
```

space+space

```fortran
  call display("=================================")
  obj = QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
                      & typeFEVariableScalar, &
                      & typeFEVariableSpace ) &
      + QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
                      & typeFEVariableScalar, &
                      & typeFEVariableSpace )
  CALL Display(obj, "space+space")
```

constant+time

```fortran
  call display("=================================")
  obj = QuadratureVariable( 10.0_DFP, &
    & typeFEVariableScalar,    &
    & typeFEVariableConstant ) &
    + QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
    & typeFEVariableScalar, &
    & typeFEVariableTime )
  CALL Display(obj, "constant+time")
```

time+time

```fortran
  call display("=================================")
  obj = QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
                      & typeFEVariableScalar, &
                      & typeFEVariableTime ) &
      + QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
                      & typeFEVariableScalar, &
                      & typeFEVariableTime )
  CALL Display(obj, "time+time")
```

constant+spacetime

```fortran
  call display("=================================")
  obj = QuadratureVariable( 10.0_DFP, &
    & typeFEVariableScalar,    &
    & typeFEVariableConstant ) &
    + QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
    & typeFEVariableScalar, &
    & typeFEVariableSpaceTime )
  CALL Display(obj, "constant+spacetime")
```

spacetime+spacetime

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
    & typeFEVariableScalar, &
    & typeFEVariableSpaceTime ) &
    + QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
    & typeFEVariableScalar, &
    & typeFEVariableSpaceTime )
  CALL Display(obj, "spacetime+spacetime")
```

```fortran
END PROGRAM main
```
