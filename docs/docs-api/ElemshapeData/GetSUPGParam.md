# GetSUPGParam

When `obj` is an instance of `ElemshapeData_`, the stabilization parameter is given by:

!!! info "opt=1"

$$
\frac{1}{\tau^{2}}=\frac{1}{\tau_{1}^{2}}+\frac{1}{\tau_{2}^{2}}+\frac{1}{\tau_{3}^{2}}+\frac{1}{\tau_{4}^{2}}
$$

!!! info "opt=2"

$$
\frac{1}{\tau}=\frac{1}{\vert \tau_{1} \vert}+\frac{1}{\vert \tau_{2} \vert}+\frac{1}{\vert\tau_{3} \vert} + \frac{1}{\vert\tau_{4} \vert}
$$

where,

$$
\frac{1}{\tau_{1}}=\sum_{I}\vert\boldsymbol{u}\cdot\nabla N^{I}\vert
$$

$$
\frac{1}{\tau_{2}}=\frac{2}{\Delta t}
$$

$$
\frac{1}{\tau_{3}}=\frac{\nu}{(h/2)^{2}}
$$

$$
\frac{1}{\tau_{4}}=\frac{2\nu}{K_{0}}
$$

$$
\frac{2}{h}=\sum_{I}\vert\boldsymbol{r}\cdot\nabla N^{I}\vert
$$

For scalar variable:

$$
\boldsymbol{r}=\frac{\nabla\vert\phi|}{\Vert\nabla\vert\phi\vert\Vert}
$$

For vector variable:

$$
\boldsymbol{r}=\frac{\nabla\Vert{\bf v}\Vert}{\Vert\nabla\Vert{\bf v}\Vert\Vert}
$$

When `obj` is an instance of [[STElemshapeData_]], the stabilization parameter is given by:

!!! info "opt=1"

$$
\frac{1}{\tau^{2}}=\frac{1}{\tau_{12}^{2}}+\frac{1}{\tau_{3}^{2}}+\frac{1}{\tau_{4}^{2}}
$$

!!! info "opt=2"

$$
\frac{1}{\tau}=\frac{1}{\vert \tau_{12} \vert}+\frac{1}{\vert\tau_{3} \vert} + \frac{1}{\vert\tau_{4} \vert}
$$

where,

$$
\frac{1}{\tau_{12}}=\sum_{a=1}^{n_{nt}}\sum_{I=1}^{n_{ns}}\left|\frac{\partial N^{I}T_{a}}{\partial t}+{\mathbf{v}}\cdot\nabla\left(N^{I}T_{a}\right)\right|
$$

$$
\frac{1}{\tau_{3}}=\frac{4\nu}{h_{RGN}^{2}}
$$

$$
\frac{1}{\tau_{4}}=\frac{2\nu}{K_{0}}
$$

!!! example ""
    You can learn about this method from expample [[_ElemshapeData_test_14]]

!!! info "Interface-1"

```fortran
  MODULE PURE SUBROUTINE GetSUPGParam(obj, tau, c, val, nu, k, &
    & phi, dt, opt)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    !! It can be an instance of ElemshapeData_ or STElemshapeData_
    TYPE(FEVariable_), INTENT(INOUT) :: tau
    !! Stabilization parameter
    !! Quadrature FEVariable
    !! varType=Space
    TYPE(FEVariable_), INTENT(IN) :: c
    !! Convective velocity => Vector variable
    TYPE(FEVariable_), INTENT(IN) :: val
    !! solution, it can be scalar or vector variable
    TYPE(FEVariable_), INTENT(IN) :: nu
    !! diffusivity
    !! In case of NSE it should be mu/rho
    TYPE(FEVariable_), OPTIONAL, INTENT(IN) :: k
    !! permeability
    TYPE(FEVariable_), OPTIONAL, INTENT(IN) :: phi
    !! porosity
    REAL(DFP), OPTIONAL, INTENT(IN) :: dt
    !! time step size
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt
    !! futuristic options
  END SUBROUTINE GetSUPGParam
```

!!! note ""
    `obj` can be an instance of [[ElemshapeData_]] or [[STElemshapeData_]]

In interface-1 the meaning of variables is given below:

- `obj` instance of `ElemshapeData_`
- `tau`, stabilization parameter $\tau$, it is an instance of [[FEVariable_]].
  - `Rank`=Scalar
  - `definedOn`=Quadrature
  - `varType`=Space (changes in space)
- `c`, is convective velocity, it is an instance of [[FEVariable_]] with following properties
  - `Rank`=Vector
  - `definedOn`=Quadrature or Nodes
  - `varType`=Constant or Space (if obj is an instance of [[ElemshapeData_]])
  - `varType`=Constant, Space, SpaceTime (if obj is an instance of [[STElemshapeData_]]
- `val`, is solution, an instance of [[FEVariable_]], with following properties::
  - `Rank`=Scalar (for convection-diffusion problems)
  - `Rank`=Vector (for Navier-Stokes equations)
  - `varType`=Constant or Space (if obj is an instance of [[ElemshapeData_]])
  - `varType`=Constant, Space, SpaceTime (if obj is an instance of [[STElemshapeData_]]
- `nu`, denotes diffusivity or kinematic viscosity $\nu$, an instance of [[FEVariable_]]
  - `Rank`=Scalar
  - `definedOn`=Quadrature or Nodes
  - `varType`=Constant or Space (if obj is an instance of [[ElemshapeData_]])
  - `varType`=Constant, Space, SpaceTime (if obj is an instance of [[STElemshapeData_]]
- `k`, denotes permeability of porous medium, an instance of [[FEVariable_]]
  - `Rank`=Scalar
  - `definedOn`=Quadrature or Nodes
  - `varType`=Constant or Space (if obj is an instance of [[ElemshapeData_]])
  - `varType`=Constant, Space, SpaceTime (if obj is an instance of [[STElemshapeData_]]
- `phi`, denotes porosity of porous medium, an instance of [[FEVariable_]]
  - `Rank`=Scalar
  - `definedOn`=Quadrature or Nodes
  - `varType`=Constant or Space (if obj is an instance of [[ElemshapeData_]])
  - `varType`=Constant, Space, SpaceTime (if obj is an instance of [[STElemshapeData_]]
- `dt`, time step

!!! info "Interface-2"

```fortran
  MODULE PURE SUBROUTINE GetSUPGParam(obj, tau, c, val, nu, k, &
    & phi, dt, opt)
    CLASS(STElemshapeData_), INTENT(IN) :: obj(:)
    !! space-time shape data
    TYPE(FEVariable_), INTENT(INOUT) :: tau
    !! Stabilization parameter
    !! Quadrature type
    !! SpaceTime
    TYPE(FEVariable_), INTENT(IN) :: c
    !! convective velocity
    !! vector FEVariable
    TYPE(FEVariable_), INTENT(IN) :: val
    !! solution
    !! scalar or vector FEVariable
    TYPE(FEVariable_), INTENT(IN) :: nu
    !! kinematic diffusivity
    TYPE(FEVariable_), OPTIONAL, INTENT(IN) :: k
    !! permeability
    !! Scalar FEVariable
    TYPE(FEVariable_), OPTIONAL, INTENT(IN) :: phi
    !! porosity
    !! Scalar FEVariable
    REAL(DFP), OPTIONAL, INTENT(IN) :: dt
    !! time step size
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt
    !! futuristic options
  END SUBROUTINE GetSUPGParam
```

In interface-2 the meaning of variables is given below:

- `obj` a vector of [[STElemshapeData_]]
- `tau`, stabilization parameter $\tau$, it is an instance of [[FEVariable_]].
  - `Rank`=Scalar
  - `definedOn`=Quadrature
  - `varType`=SpaceTime (changes in space and time)
- `c`, is convective velocity, it is an instance of [[FEVariable_]] with following properties
  - `Rank`=Vector
  - `definedOn`=Quadrature or Nodes
  - `varType`=Constant, Space, SpaceTime
- `val`, is solution, an instance of [[FEVariable_]], with following properties::
  - `Rank`=Scalar (for convection-diffusion problems)
  - `Rank`=Vector (for Navier-Stokes equations)
  - `varType`=Constant, Space, SpaceTime
- `nu`, denotes diffusivity or kinematic viscosity $\nu$, an instance of [[FEVariable_]]
  - `Rank`=Scalar
  - `definedOn`=Quadrature or Nodes
  - `varType`=Constant, Space, SpaceTime
- `k`, denotes permeability of porous medium, an instance of [[FEVariable_]]
  - `Rank`=Scalar
  - `definedOn`=Quadrature or Nodes
  - `varType`=Constant, Space, SpaceTime
- `phi`, denotes porosity of porous medium, an instance of [[FEVariable_]]
  - `Rank`=Scalar
  - `definedOn`=Quadrature or Nodes
  - `varType`=Constant, Space, SpaceTime
- `dt`, time step

!!! info "Interface-3"
    This interface is similar to the interface-1, but in this interface material properties `nu`, `k`, `phi` are constant real values.

```fortran
  MODULE PURE SUBROUTINE GetSUPGParam(obj, tau, c, val, nu, k, &
    & phi, dt, opt)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    !! It can be an instance of ElemshapeData_ or STElemshapeData_
    TYPE(FEVariable_), INTENT(INOUT) :: tau
    !! Stabilization parameter
    !! Quadrature FEVariable
    !! varType=Space
    TYPE(FEVariable_), INTENT(IN) :: c
    !! Convective velocity => Vector variable
    TYPE(FEVariable_), INTENT(IN) :: val
    !! solution, it can be scalar or vector variable
    REAL( DFP ), INTENT(IN) :: nu
    !! In case of NSE it should be mu/rho
    !! diffusivity
    REAL( DFP ), OPTIONAL, INTENT(IN) :: k
    !! permeability
    REAL( DFP ), OPTIONAL, INTENT(IN) :: phi
    !! porosity
    REAL(DFP), OPTIONAL, INTENT(IN) :: dt
    !! time step size
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt
    !! futuristic options
  END SUBROUTINE GetSUPGParam
```

!!! info "Interface-4"
    This interface is similar to the Interface-2, but in this interface material properties `nu`, `k`, `phi` are constant real values.

```fortran
  MODULE PURE SUBROUTINE GetSUPGParam(obj, tau, c, val, nu, k, &
    & phi, dt, opt)
    CLASS(STElemshapeData_), INTENT(IN) :: obj(:)
    !! space-time shape data
    TYPE(FEVariable_), INTENT(INOUT) :: tau
    !! Stabilization parameter
    !! Quadrature type
    !! SpaceTime
    TYPE(FEVariable_), INTENT(IN) :: c
    !! convective velocity
    !! vector FEVariable
    TYPE(FEVariable_), INTENT(IN) :: val
    !! solution
    !! scalar or vector FEVariable
    REAL( DFP ), INTENT(IN) :: nu
    !! kinematic diffusivity
    REAL( DFP ), OPTIONAL, INTENT(IN) :: k
    !! permeability
    !! Scalar FEVariable
    REAL( DFP ), OPTIONAL, INTENT(IN) :: phi
    !! porosity
    !! Scalar FEVariable
    REAL(DFP), OPTIONAL, INTENT(IN) :: dt
    !! time step size
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt
    !! futuristic options
  END SUBROUTINE GetSUPGParam
```