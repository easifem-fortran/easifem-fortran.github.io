---
title: STConvectiveMatrix example 24
author: Vikas Sharma, Ph.D.
date: 23 Nov 2021
update: 23 Nov 2021 
tags:
    - ReferenceLine
    - ReferenceLine/Initiate
    - QuadraturePoint/Initiate
    - STElemshapeData
    - STElemshapeData/Initiate
    - ConvectiveMatrix
    - STConvectiveMatrix
---

# STConvectiveMatrix example 24

!!! note ""
	This example shows how to USE the SUBROUTINE called `STConvectiveMatrix` to create a space-time convective matrix. Triangle3 in space and Line2 in time.
    
Here, we want to DO the following.

$$
M\left( {I,J,a,b} \right) =  {\int_{{I_n}}^{} {\int_\Omega ^{} {\frac{{\partial {N^I}{T_a}}}{{\partial x}} c \cdot {N^J}{T_b}d\Omega dt} } } 
$$

$$
M\left( {I,J,a,b} \right) =  {\int_{{I_n}}^{} {\int_\Omega ^{} {\frac{{\partial {N^I}{T_a}}}{{\partial y}} c \cdot {N^J}{T_b}d\Omega dt} } } 
$$

$$
M\left( {I,J,a,b} \right) =  {\int_{{I_n}}^{} {\int_\Omega ^{} {\frac{{\partial {N^I}{T_a}}}{{\partial z}} c \cdot {N^J}{T_b}d\Omega dt} } } 
$$

$$
M\left( {I,J,a,b} \right) =  {\int_{{I_n}}^{} {\int_\Omega ^{} {{N^J}{T_b} c \cdot  \frac{{\partial {N^J}{T_b}}}{{\partial x}}d\Omega dt} } } 
$$

$$
M\left( {I,J,a,b} \right) =  {\int_{{I_n}}^{} {\int_\Omega ^{} {{N^J}{T_b} c \cdot \frac{{\partial {N^J}{T_b}}}{{\partial y}}d\Omega dt} } } 
$$

$$
M\left( {I,J,a,b} \right) =  {\int_{{I_n}}^{} {\int_\Omega ^{} {{N^J}{T_b} c \cdot \frac{{\partial {N^J}{T_b}}}{{\partial z}}d\Omega dt} } } 
$$

!!! warning ""
    $c$ is scalar [[FEVariable_]], which can be a constant, or a FUNCTION of space-time, or some nonlinear FUNCTION.

In this example, convective matrix is formed for 

- [[ReferenceTriangle_]] Triangle3 element for  space
- [[ReferenceLine_]] Line2 element for time
- [[QuadraturePoint_]] `GaussLegendre`
- Constant $c$

## Modules and classes

- [[ElemshapeData_]]
- [[STElemshapeData_]]
- [[QuadraturePoint_]]
- [[ReferenceLine_]]
- [[ReferenceTriangle_]]

## Usage

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE(STElemshapeData_), ALLOCATABLE :: test(:)
    TYPE(ElemshapeData_) :: time_elemsd
    TYPE(Quadraturepoint_) :: quadFortime
    TYPE(Quadraturepoint_) :: quadForspace
    TYPE(ReferenceTriangle_):: refelemForSpace
    TYPE(ReferenceLine_) :: refelemForTime
    INTEGER(I4B) :: ii
    INTEGER(I4B), PARAMETER :: nsd=2, nns=3, nnt=2
    INTEGER(I4B), PARAMETER :: orderForTime=2, orderForSpace=1
    REAL(DFP), PARAMETER :: tij(1, 2) = RESHAPE([-1,1], [1,2])
    REAL(DFP), PARAMETER :: xij(2, 3)=RESHAPE([0,0,1,0,0,1], [nsd, nns])
    ! spatial nodal coordinates
    REAL(DFP), ALLOCATABLE :: xija(:, :, :), mat(:,:)
    ! spatial-temporal nodal coordinates
    REAL(DFP), parameter :: c=1.0
    type(FEVariable_) :: cvar
```

!!! note ""
    First, we initiate a [[ReferenceLine_]] element for time domain. Note that `nsd` should be 1 when making reference element for time domain. Generate the quadrature points, and initiates an instance of [[ElemshapeData_]].

```fortran
    refelemForTime= ReferenceLine(nsd=1)
    CALL Initiate(obj=quadFortime, &
		& refelem=refelemForTime,&
		& order=orderForTime, &
      	& quadratureType="GaussLegendre" )
    CALL Initiate( &
    	& obj=time_elemsd, &
	  	& quad=quadForTime, &
		& refelem=refelemForTime, &
      	& ContinuityType=typeH1,&
		& InterpolType=TypeLagrangeInterpolation)
    CALL Set(obj=time_elemsd, &
		& val=tiJ, N=time_elemsd%N, &
        & dNdXi=time_elemsd%dNdXi)
```

!!! note ""
    Initiate [[STElemshapeData_]].

```fortran
    CALL Initiate(obj=test, elemsd=time_elemsd)
```

!!! note ""
    Generating shape functions for space-elements. Here, we are selecting a triangular element

```fortran
    refelemForSpace = ReferenceTriangle(nsd=nsd)
    CALL Initiate(obj=quadForSpace, &
		& refelem=refelemForSpace, &
		& order=orderForSpace, &
		& quadratureType='GaussLegendre')
```

```fortran
    DO ii = 1, SIZE(test)
      CALL Initiate( obj=test(ii), &
	  	& quad=quadForSpace, &
		& refelem=refelemForSpace, &
        & ContinuityType=typeH1, &
		& InterpolType=TypeLagrangeInterpolation)
    END DO
```

!!! note ""
    Setting the remaining DATA in obj. Here, `xija` are the space-time nodal coordinates.

```fortran
	CALL Reallocate(xija, nsd, nns, nnt)
    DO ii = 1, nnt; xija(:, :, ii) = xij; END DO
    DO ii = 1, SIZE(test)
        CALL Set(obj=test(ii), &
            & val=xija, &
			& N=test(ii)%N, &
            & dNdXi=test(ii)%dNdXi, &
            & T=test(ii)%T)
    END DO
```

!!! note ""
    Let us now create the space-time convective matrix.

```fortran
    cvar = NodalVariable(c, typeFEVariableScalar, typeFEVariableConstant)
```

```fortran
    mat=ConvectiveMatrix(test=test, trial=test, &
        & term1=del_none, term2=del_x, &
        & c=cvar)
    CALL Display(mat, "mat:")
```

??? example "Results"

    ```bash
                                mat:                            
    ------------------------------------------------------------
    -0.111111  0.111111  0.000000  -0.055556  0.055556  0.000000
    -0.111111  0.111111  0.000000  -0.055556  0.055556  0.000000
    -0.111111  0.111111  0.000000  -0.055556  0.055556  0.000000
    -0.055556  0.055556  0.000000  -0.111111  0.111111  0.000000
    -0.055556  0.055556  0.000000  -0.111111  0.111111  0.000000
    -0.055556  0.055556  0.000000  -0.111111  0.111111  0.000000
    ```

```fortran
    mat=ConvectiveMatrix(test=test, trial=test, &
        & term1=del_x, term2=del_none, &
        & c=cvar)
    CALL Display(mat, "mat:")
```

??? example "Results"

    ```bash
                                mat:                              
    ----------------------------------------------------------------
    -0.111111  -0.111111  -0.111111  -0.055556  -0.055556  -0.055556
    0.111111   0.111111   0.111111   0.055556   0.055556   0.055556
    0.000000   0.000000   0.000000   0.000000   0.000000   0.000000
    -0.055556  -0.055556  -0.055556  -0.111111  -0.111111  -0.111111
    0.055556   0.055556   0.055556   0.111111   0.111111   0.111111
    0.000000   0.000000   0.000000   0.000000   0.000000   0.000000
    ```

!!! settings "Cleanup"

```fortran
END PROGRAM main
```
