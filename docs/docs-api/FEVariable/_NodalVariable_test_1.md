This example show how to use NodalVariable method to generate Scalar variables at node.

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE(FEVariable_) :: obj
```

NodalVariable, scalar, constant

```fortran
  obj = NodalVariable( 1.0_DFP, typeFEVariableScalar, typeFEVariableConstant )
  CALL Display(obj, "NodalVariable, Scalar, Constant")
```

Results

```bash
RANK :: 0 (SCALAR)
CONSTANT IN SPACE-TIME
VALUE :: 1.00000
```

NodalVariable, scalar, space

```fortran
  obj = NodalVariable( arange(0.0_DFP, 3.0_DFP), typeFEVariableScalar, &
      & typeFEVariableSpace )
  CALL Display(obj, "NodalVariable, scalar, space")
```

Results

```bash
RANK :: 0 (SCALAR)
VARIABLE IN SPACE ONLY
VALUE
-------
0.00000
1.00000
2.00000
3.00000
```

NodalVariable, scalar, time

```fortran
  obj = NodalVariable( arange(0.0_DFP, 3.0_DFP), typeFEVariableScalar, &
      & typeFEVariableTime )
  CALL Display(obj, "NodalVariable, scalar, time")
```

Results

```bash
NodalVariable, scalar, time
RANK :: 0 (SCALAR)
VarType: TIME
VALUE
-------
0.00000
1.00000
2.00000
3.00000
```

NodalVariable, scalar, space-time

```fortran
  obj = NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableScalar, &
      & typeFEVariableSpaceTime )
  CALL Display(obj, "NodalVariable, scalar, space-time")
```

Results

```bash
    VALUE
----------------
1.00000  4.00000
2.00000  5.00000
3.00000  6.00000
```

```fortran
END PROGRAM main
```
