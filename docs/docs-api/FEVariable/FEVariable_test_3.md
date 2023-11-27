---
title: FEVariable example 3
author: Vikas Sharma, Ph. D.
date: 21 Nov 2021
update: 21 Nov 2021
tags:
  - FEVariable/NodalVariable
  - FEVariable/Display
---

# FEVariable example 3

!!! note ""
    This example show how to USE NodalVariable method to generate Matrix variables at node.

## Use association

- [[FEVariable_]]

## Usage

!!! note "Import modules and declare variable"

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE(FEVariable_) :: obj
```

!!! note "NodalVariable, Matrix, Constant"

```fortran
  obj = NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
    & typeFEVariableMatrix, &
    & typeFEVariableConstant )
  CALL Display(obj, "NodalVariable, Matrix, Constant")
```

??? example "Results"

    ```bash
    NodalVariable, Matrix, Constant
    RANK :: 2 (MATRIX)
    # VarType: CONSTANT
        # VALUE
    ----------------
    1.00000  4.00000
    2.00000  5.00000
    3.00000  6.00000
    ```

!!! note "NodalVariable, Matrix, space"

```fortran
  obj = NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableSpace )
  CALL Display(obj, "NodalVariable, Matrix, Space")
```

??? example "Results"

    ```bash
    NodalVariable, Matrix, Space
    RANK :: 2 (MATRIX)
    # VarType: SPACE
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

!!! note "NodalVariable, Matrix, Time"

```fortran
  obj = NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableTime )
  CALL Display(obj, "NodalVariable, Matrix, Time")
```

??? example "Results"

    ```bash
    NodalVariable, Matrix, Time
    RANK :: 2 (MATRIX)
    # VarType: TIME
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

!!! note "NodalVariable, Matrix, Space-time"

```fortran
  obj = NodalVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableSpaceTime )
  CALL Display(obj, "NodalVariable, Matrix, Space-time")
```

??? example "Results"

    ```bash
    NodalVariable, Matrix, Space-time
    RANK :: 2 (MATRIX)
    # VarType: SPACE & TIME
    # VALUE( :, :, 1, 1 ) =
    ------------------------
        1.00000  4.00000
        2.00000  5.00000
        3.00000  6.00000
    # VALUE( :, :, 2, 1 ) =
    ------------------------
        7.0000  10.0000
        8.0000  11.0000
        9.0000  12.0000
    # VALUE( :, :, 1, 2 ) =
    ------------------------
        13.0000  16.0000
        14.0000  17.0000
        15.0000  18.0000
    # VALUE( :, :, 2, 2 ) =
    ------------------------
        19.0000  22.0000
        20.0000  23.0000
        21.0000  24.0000
    ```

```fortran
END PROGRAM main
```
