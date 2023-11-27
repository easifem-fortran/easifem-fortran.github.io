---
authors: Vikas Sharma, Ph. D.
date: 22 Oct 2021
update: 14 Nov 2021
title: StaticDiffusion example 1
tags:
  - SetStaticDiffusionParam
  - StaticDiffusion/CheckEssentialParam
---

# StaticDiffusion example 1

!!! note ""
	This examples shows how to use `SetStaticDiffusionParam` to set the parameters of [[StaticDiffusion_]] kernel.

## Modules and classes

- [[ParameterList_]]
- [[StaticDiffusion_]]

## Usage

!!! notes ""
    Use modules and declare variables

``` fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  USE easifemKernels
  USE StaticDiffusion_Class
  IMPLICIT NONE
  TYPE(ParameterList_) :: param
  TYPE(StaticDiffusion_) :: obj
```

!!! notes ""
    Initiate an instance of [[ParameterList_]].

```fortran
  CALL FPL_INIT(); CALL param%Initiate()
```

!!! notes ""
    Setting parameters for initiating an instance of [[StaticDiffusion_]]

```fortran
  CALL SetStaticDiffusionParam( &
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
    [2] Key = StaticDiffusion/quadratureType, Data Type = DLCA, Dimensions = 0, Bytes = 13, Value = GaussLegendre
    [7] Key = StaticDiffusion/coordinateSystem, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = +3
    [14] Key = StaticDiffusion/domainFile, Data Type = DLCA, Dimensions = 0, Bytes = 9, Value = ./mesh.h5
    [15] Key = StaticDiffusion/name, Data Type = DLCA, Dimensions = 0, Bytes = 15, Value = StaticDiffusion
    [28] Key = StaticDiffusion/engine, Data Type = DLCA, Dimensions = 0, Bytes = 13, Value = NATIVE_SERIAL
    [44] Key = StaticDiffusion/tMaterials, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = +2
    [67] Key = StaticDiffusion/tDirichletBC, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = +4
    [87] Key = StaticDiffusion/baseContinuity, Data Type = DLCA, Dimensions = 0, Bytes = 2, Value = H1
    [93] Key = StaticDiffusion/baseInterpolation, Data Type = DLCA, Dimensions = 0, Bytes = 21, Value = LagrangeInterpolation
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
