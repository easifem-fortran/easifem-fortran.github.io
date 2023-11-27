This example tests additional operator for matrix-quadrature-variable.

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE(FEVariable_) :: obj
```

constant+constant

```fortran
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableMatrix,    &
      & typeFEVariableConstant ) &
      + QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableMatrix,    &
      & typeFEVariableConstant )
  CALL Display(obj, "constant+constant")
```

```fortran
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableMatrix,    &
      & typeFEVariableConstant ) &
      + 10.0_DFP 
  CALL Display(obj, "constant+constant")
```

space+constant

```fortran
  call display("=================================")
  obj = Quadraturevariable( reshape(arange(1.0_dfp, 12.0_dfp), [3,2,2]), &
      & typefevariablematrix, &
      & typefevariablespace ) &
      + Quadraturevariable( reshape(arange(1.0_dfp, 6.0_dfp), [3,2]), &
      & typefevariablematrix,    &
      & typefevariableconstant )
  call display(obj, "space+constant")
```

```fortran
  call display("=================================")
  obj = Quadraturevariable( reshape(arange(1.0_dfp, 12.0_dfp), [3,2,2]), &
      & typefevariablematrix, &
      & typefevariablespace ) &
      + 10.0_DFP 
  call display(obj, "space+constant")
```

time+constant

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableTime ) &
      + QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableMatrix,    &
      & typeFEVariableConstant )
  CALL Display(obj, "time+constant")
```

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableTime ) &
      + 10.0_DFP
  CALL Display(obj, "time+constant")
```

spacetime+constant

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableSpaceTime ) &
      + QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableMatrix,    &
      & typeFEVariableConstant )
  CALL Display(obj, "spacetime+constant")
```

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableSpaceTime ) &
      + 10.0_DFP 
  CALL Display(obj, "spacetime+constant")
```

```fortran
END PROGRAM main
```
