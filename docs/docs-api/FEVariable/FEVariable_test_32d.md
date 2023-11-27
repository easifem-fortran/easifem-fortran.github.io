---
title: FEVariable example 32d
author: Vikas Sharma, Ph. D.
date: 21 Nov 2021
update: 21 Nov 2021
tags:
  - FEVariable/NodalVariable
  - FEVariable/Display
---

# FEVariable example 32d

!!! note ""
    This example tests * operator. vector, quadrature values

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

!!! note "constant * space"

```fortran
  call display("=================================")
  obj = QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
    & typeFEVariableVector,    &
    & typeFEVariableConstant ) &
    * QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP),[3,2]), &
    & typeFEVariableVector, &
    & typeFEVariableSpace )
  CALL Display(obj, "constant * space")
```

!!! note "space * space"

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP),[3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableSpace ) &
      * QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP),[3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableSpace )
  CALL Display(obj, "space * space")
```

!!! note "constant * time"

```fortran
  call display("=================================")
  obj = QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
    & typeFEVariableVector,    &
    & typeFEVariableConstant ) &
    * QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP),[3,2]), &
    & typeFEVariableVector, &
    & typeFEVariableTime )
  CALL Display(obj, "constant * time")
```

!!! note "time * time"

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP),[3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableTime ) &
      * QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP),[3,2]), &
      & typeFEVariableVector, &
      & typeFEVariableTime )
  CALL Display(obj, "time * time")
```

!!! note "constant * spacetime"

```fortran
  call display("=================================")
  obj = QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
    & typeFEVariableVector,    &
    & typeFEVariableConstant ) &
    * QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
    & typeFEVariableVector, &
    & typeFEVariableSpaceTime )
  CALL Display(obj, "constant * spacetime")
```

!!! note "spacetime * spacetime"

```fortran
  call display("=================================")
  obj = QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
    & typeFEVariableVector, &
    & typeFEVariableSpaceTime ) &
    * QuadratureVariable( reshape(arange(1.0_DFP, 12.0_DFP), [3,2,2]), &
    & typeFEVariableVector, &
    & typeFEVariableSpaceTime )
  CALL Display(obj, "spacetime * spacetime")
```

```fortran
END PROGRAM main
```
