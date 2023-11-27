- This example shows the usage of `UltrasphericalTransform` method.
- This routine performs the forward Ultraspherical transform of column data.

> In this example $\lambda=0.5$ (that is, proportional to Legendre polynomial)

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real(dfp), allocatable :: uhat(:, :), u( :, : ), pt( : ), wt(:)
  real( dfp ), parameter :: lambda=0.5_DFP, tol=1.0E-10
  type(string) :: astr
  integer( i4b ), parameter :: quadType = GaussLobatto
  n = 10
  call reallocate( pt, n+1, wt, n+1 )
  call UltrasphericalQuadrature( n=n+1, lambda=lambda, &
    & pt=pt, wt=wt, quadType=quadType )
  u = SIN(4.0_DFP * pi * pt) .COLCONCAT. SIN(4.0_DFP * pi * pt)
  uhat = UltrasphericalTransform(n=n, lambda=lambda, coeff=u, &
    & x=pt, w=wt, quadType=quadType)
  CALL Display(MdEncode(uhat), "uhat=")
end program main
```

<details>
<summary>See results</summary>
<div>

| $\tilde{u}_{n}$ | $\tilde{u}_{n}$ |
|-----------------|-----------------|
| -2.94751E-16    | -2.94751E-16    |
| -0.24244        | -0.24244        |
| -7.45173E-16    | -7.45173E-16    |
| -0.46574        | -0.46574        |
| 1.71874E-15     | 1.71874E-15     |
| -0.56276        | -0.56276        |
| 4.33325E-15     | 4.33325E-15     |
| 1.7997          | 1.7997          |
| 4.13122E-15     | 4.13122E-15     |
| -0.52876        | -0.52876        |
| -1.21279E-15    | -1.21279E-15    |

</div>
</details>
