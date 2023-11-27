---
title: LinearStaticCDR example 1
authors: Vikas Sharma, Ph. D.
date: 22 Oct 2021
update: 25 Nov 2021
tags:
  - SetLinearStaticCDRParam
  - LinearStaticCDR/CheckEssentialParam
---

# LinearStaticCDR example 1

!!! note ""
	This examples shows how to use `SetLinearStaticCDRParam` to set the parameters of [[LinearStaticCDR_]] kernel.

## Modules and classes

- [[ParameterList_]]
- [[LinearStaticCDR_]]

## Usage

!!! notes ""
    Use modules and declare variables

``` fortran
PROGRAM main
    USE easifemBase
    USE easifemClasses
    USE easifemKernels
    USE LinearStaticCDR_Class
    IMPLICIT NONE
    TYPE(ParameterList_) :: param
    TYPE(LinearStaticCDR_) :: obj
```

!!! notes ""
    Initiate an instance of [[ParameterList_]].

```fortran
    CALL FPL_INIT(); CALL param%Initiate()
```

!!! notes ""
    Setting parameters for initiating an instance of [[LinearStaticCDR_]]

```fortran
  CALL SetLinearStaticCDRParam( &
    & isConservative=.FALSE., &
    & param=param, &
    & engine="NATIVE_SERIAL",  &
    & coordinateSystem=KERNEL_2D, &
    & tMaterials=2, &
    & tDirichletBC=4,  &
    & domainFile="./mesh.h5" )
```

Let us see the content of param.

```fortran
  CALL param%print()
```

The results of the above call is given below

??? example "results"

    ```bash
    [0] Key = LinearStaticCDR/name, Data Type = DLCA, Dimensions = 0, Bytes = 15, Value = StaticDiffusion
    [13] Key = LinearStaticCDR/engine, Data Type = DLCA, Dimensions = 0, Bytes = 13, Value = NATIVE_SERIAL
    [29] Key = LinearStaticCDR/tMaterials, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = +2
    [52] Key = LinearStaticCDR/tDirichletBC, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = +4
    [72] Key = LinearStaticCDR/baseContinuity, Data Type = DLCA, Dimensions = 0, Bytes = 2, Value = H1
    [76] Key = LinearStaticCDR/isConservative, Data Type = L, Dimensions = 0, Bytes = 4, Value = F
    [78] Key = LinearStaticCDR/baseInterpolation, Data Type = DLCA, Dimensions = 0, Bytes = 21, Value = LagrangeInterpolation
    [87] Key = LinearStaticCDR/quadratureType, Data Type = DLCA, Dimensions = 0, Bytes = 13, Value = GaussLegendre
    [92] Key = LinearStaticCDR/coordinateSystem, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = +3
    [99] Key = LinearStaticCDR/domainFile, Data Type = DLCA, Dimensions = 0, Bytes = 9, Value = ./mesh.h5
    ```

Checking the validity of the parameters.

```fortran
  CALL obj%CheckEssentialParam(param)
```

!!! settings "Cleanup"

```fortran
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```
