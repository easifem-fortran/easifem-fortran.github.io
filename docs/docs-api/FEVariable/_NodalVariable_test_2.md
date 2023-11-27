This example shows the usage of NodalVariable method to generate vector-nodal-variable.

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE(FEVariable_) :: obj
```

NodalVariable, Vector, constant

```fortran
  obj = NodalVariable( arange(0.0_DFP, 3.0_DFP), typeFEVariableVector, &
    & typeFEVariableConstant )
  CALL Display(obj, "NodalVariable, Vector, Constant")
```

Results

```bash
NodalVariable, Vector, Constant
RANK :: 1 (VECTOR)
# VarType: CONSTANT
# VALUE
-------
0.00000
1.00000
2.00000
3.00000
```

NodalVariable, Vector, space

```fortran
  obj = NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableSpace )
  CALL Display(obj, "NodalVariable, Vector, Space")
```

Results

```bash
NodalVariable, Vector, Space
RANK :: 1 (VECTOR)
# VarType: SPACE
    # VALUE
----------------
1.00000  4.00000
2.00000  5.00000
3.00000  6.00000
```

NodalVariable, Vector, Time

```fortran
  obj = NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableTime )
  CALL Display(obj, "NodalVariable, Vector, Time")
```

Results

```bash
NodalVariable, Vector, Time
RANK :: 1 (VECTOR)
# VarType: TIME
    # VALUE
----------------
1.00000  4.00000
2.00000  5.00000
3.00000  6.00000
```

NodalVariable, Vector, Space-time

```fortran
  obj = NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
      & typeFEVariableVector, &
      & typeFEVariableSpaceTime )
  CALL Display(obj, "NodalVariable, Vector, Space-time")
```

Results

```bash
NodalVariable, Vector, Space-time
RANK :: 1 (VECTOR)
# VarType: SPACE & TIME
# VALUE( :, :, 1 ) =
---------------------
  1.00000  4.00000
  2.00000  5.00000
  3.00000  6.00000
# VALUE( :, :, 2 ) =
---------------------
  7.0000  10.0000
  8.0000  11.0000
  9.0000  12.0000
```

```fortran
END PROGRAM main
```
