This example tests additional (+) operator for scalar quadrature.

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE(FEVariable_) :: obj
```

constant+constant

```fortran
  obj = QuadratureVariable( 1.0_DFP, &
      & typeFEVariableScalar,    &
      & typeFEVariableConstant ) &
      + QuadratureVariable( 2.0_DFP, &
      & typeFEVariableScalar,    &
      & typeFEVariableConstant )
  CALL Display(obj, "constant+constant")
```

```fortran
  obj = QuadratureVariable( 1.0_DFP, &
      & typeFEVariableScalar,    &
      & typeFEVariableConstant ) &
      + 2.0_DFP
  CALL Display(obj, "constant+constant")
```

space+constant

```fortran
  call display("=================================")
  obj = QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableScalar, &
      & typeFEVariableSpace ) &
      + QuadratureVariable( 10.0_DFP, &
      & typeFEVariableScalar,    &
      & typeFEVariableConstant )
  CALL Display(obj, "space + constant")
```

```fortran
  call display("=================================")
  obj = QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
      & typeFEVariableScalar, &
      & typeFEVariableSpace ) &
      + 10.0_DFP
  CALL Display(obj, "space+constant")
```

time+constant

```fortran
  call display("=================================")
  obj = QuadratureVariable( arange(0.0_DFP, 3.0_DFP), &
      & typeFEVariableScalar, &
      & typeFEVariableTime ) &
      + QuadratureVariable( 10.0_DFP, &
      & typeFEVariableScalar,    &
      & typeFEVariableConstant )
  CALL Display(obj, "time+constant")
```

```fortran
  call display("=================================")
  obj = QuadratureVariable( arange(0.0_DFP, 3.0_DFP), &
      & typeFEVariableScalar, &
      & typeFEVariableTime ) &
      + 10.0_DFP 
  CALL Display(obj, "time+constant")
```

spacetime+constant

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableScalar, &
      & typeFEVariableSpaceTime ) &
      + QuadratureVariable( 10.0_DFP, &
      & typeFEVariableScalar,    &
      & typeFEVariableConstant )
  CALL Display(obj, "spacetime + constant")
```

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableScalar, &
      & typeFEVariableSpaceTime ) &
      + 10.0_DFP
  CALL Display(obj, "spacetime+constant")
```

```fortran
END PROGRAM main
```
