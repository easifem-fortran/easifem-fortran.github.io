---
title: FEVariable example 33a
author: Vikas Sharma, Ph. D.
date: 21 Nov 2021
update: 21 Nov 2021
tags:
  - FEVariable/NodalVariable
  - FEVariable/Display
---

# FEVariable example 33a

!!! note ""
    This example tests * operator. Matrix, Nodal

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

!!! note "constant * constant"

```fortran
  obj = NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableMatrix,    &
      & typeFEVariableConstant ) &
      * NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableMatrix,    &
      & typeFEVariableConstant )
  CALL Display(obj, "constant * constant")
```

```fortran
  obj = NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableMatrix,    &
      & typeFEVariableConstant ) &
      * 1.0_DFP
  CALL Display(obj, "constant * constant")
```

!!! note "space * constant"

```fortran
  call display("=================================")
  obj = NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableSpace ) &
      * NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableMatrix,    &
      & typeFEVariableConstant )
  CALL Display(obj, "space * constant")
```

```fortran
  call display("=================================")
  obj = NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableSpace ) &
      * 1.0_DFP
  CALL Display(obj, "space * constant")
```

!!! note "time * constant"

```fortran
  call display("=================================")
  obj = NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableTime ) &
      * NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableMatrix,    &
      & typeFEVariableConstant )
  CALL Display(obj, "time * constant")
```

```fortran
  call display("=================================")
  obj = NodalVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableTime ) &
      * 1.0_DFP
  CALL Display(obj, "time * constant")
```

!!! note "spacetime * constant"

```fortran
  call display("=================================")
  obj = NodalVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableSpaceTime ) &
      * NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
      & typeFEVariableMatrix,    &
      & typeFEVariableConstant )
  CALL Display(obj, "spacetime * constant")
```

```fortran
  call display("=================================")
  obj = NodalVariable( reshape(arange(1.0_DFP, 24.0_DFP), [3,2,2,2]), &
      & typeFEVariableMatrix, &
      & typeFEVariableSpaceTime ) &
      * 1.0_DFP
  CALL Display(obj, "spacetime * constant")
```

```fortran
END PROGRAM main
```
