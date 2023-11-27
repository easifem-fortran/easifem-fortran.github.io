This example tests additional operator for vector-quadrature.

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE(FEVariable_) :: obj
```

constant+constant

```fortran
  obj = QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableVector,    &
      & typeFEVariableConstant ) &
      + QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableVector,    &
      & typeFEVariableConstant )
  CALL Display(obj, "constant+constant")
```

```fortran
  obj = QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableVector,    &
      & typeFEVariableConstant ) &
      + 10.0_DFP 
  CALL Display(obj, "constant+constant")
```

space+constant

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableSpace ) &
      + QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableVector,    &
      & typeFEVariableConstant )
  CALL Display(obj, "space+constant")
```

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableSpace ) &
      + 10.0_DFP 
  CALL Display(obj, "space+constant")
```

time+constant

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableTime ) &
      + QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableVector,    &
      & typeFEVariableConstant )
  CALL Display(obj, "time+constant")
```

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableTime ) &
      + 10.0_DFP
  CALL Display(obj, "time+constant")
```

spacetime+constant

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
      & typeFEVariableVector, &
      & typeFEVariableSpaceTime ) &
      + QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableVector,    &
      & typeFEVariableConstant )
  CALL Display(obj, "spacetime+constant")
```

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
      & typeFEVariableVector, &
      & typeFEVariableSpaceTime ) &
      + 10.0_DFP 
  CALL Display(obj, "spacetime+constant")
```

```fortran
END PROGRAM main
```
