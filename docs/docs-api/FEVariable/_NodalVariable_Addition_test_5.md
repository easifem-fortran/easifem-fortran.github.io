This example tests additional operator, matrix, nodal.

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE(FEVariable_) :: obj
```

constant+constant

```fortran
  obj = NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
                      & typeFEVariableMatrix,    &
                      & typeFEVariableConstant ) &
      + NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
                      & typeFEVariableMatrix,    &
                      & typeFEVariableConstant )
  CALL Display(obj, "constant+constant")
```

```fortran
  obj = NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
                      & typeFEVariableMatrix,    &
                      & typeFEVariableConstant ) &
      + 10.0_DFP 
  CALL Display(obj, "constant+constant")
```

space+constant

```fortran
  call display("=================================")
  obj = nodalvariable( reshape(arange(1.0_dfp, 12.0_dfp), [3,2,2]), &
                      & typefevariablematrix, &
                      & typefevariablespace ) &
      + nodalvariable( reshape(arange(1.0_dfp, 6.0_dfp), [3,2]), &
                      & typefevariablematrix,    &
                      & typefevariableconstant )
  call display(obj, "space+constant")
```

```fortran
  call display("=================================")
  obj = nodalvariable( reshape(arange(1.0_dfp, 12.0_dfp), [3,2,2]), &
                      & typefevariablematrix, &
                      & typefevariablespace ) &
      + 10.0_DFP 
  call display(obj, "space+constant")
```

time+constant

```fortran
  call display("=================================")
  obj = NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
                      & typeFEVariableMatrix, &
                      & typeFEVariableTime ) &
      + NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
                      & typeFEVariableMatrix,    &
                      & typeFEVariableConstant )
  CALL Display(obj, "time+constant")
```

```fortran
  call display("=================================")
  obj = NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
                      & typeFEVariableMatrix, &
                      & typeFEVariableTime ) &
      + 10.0_DFP
  CALL Display(obj, "time+constant")
```

spacetime+constant

```fortran
  call display("=================================")
  obj = NodalVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &
                      & typeFEVariableMatrix, &
                      & typeFEVariableSpaceTime ) &
      + NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
                      & typeFEVariableMatrix,    &
                      & typeFEVariableConstant )
  CALL Display(obj, "spacetime+constant")
```

```fortran
  call display("=================================")
  obj = NodalVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &
                      & typeFEVariableMatrix, &
                      & typeFEVariableSpaceTime ) &
      + 10.0_DFP 
  CALL Display(obj, "spacetime+constant")
```

```fortran
END PROGRAM main
```
