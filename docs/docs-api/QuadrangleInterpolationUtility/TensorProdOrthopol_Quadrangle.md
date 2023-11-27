# TensorProdOrthopol

This function returns the tensor-product expansion of orthogonal polynomial on biunit quadrangle.

## Interface 1

```fortran
INTERFACE TensorProdBasis_Quadrangle
  MODULE FUNCTION TensorProdBasis_Quadrangle1(  &
    & p,  &
    & q,  &
    & xij, &
    & basisType1,  &
    & basisType2,  &
    & alpha1,  &
    & beta1,  &
    & lambda1,  &
    & alpha2,  &
    & beta2,  &
    & lambda2) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: p
    !! highest order in x1 direction
    INTEGER(I4B), INTENT(IN) :: q
    !! highest order in x2 direction
    REAL(DFP), INTENT(IN) :: xij(:, :)
    !! points of evaluation in xij format
    INTEGER(I4B), INTENT(IN) :: basisType1
    !! basis type in x1 direction
    !! Monomials
    !! Jacobi
    !! Legendre
    !! Chebyshev
    !! Ultraspherical
    !! Heirarchical
    INTEGER(I4B), INTENT(IN) :: basisType2
    !! basis type in x2 direction
    !! Monomials
    !! Jacobi
    !! Legendre
    !! Chebyshev
    !! Ultraspherical
    !! Heirarchical
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha1
    !! alpha1 needed when  basisType1 "Jacobi"
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta1
    !! beta1 is needed when basisType1 is "Jacobi"
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda1
    !! lambda1 is needed when basisType1 is "Ultraspherical"
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha2
    !! alpha2 needed when basisType2 is "Jacobi"
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta2
    !! beta2 needed when basisType2 is "Jacobi"
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda2
    !! lambda2 is needed when basisType2 is "Ultraspherical"
    REAL(DFP) :: ans(SIZE(xij, 2), (p + 1) * (q + 1))
    !!
  END FUNCTION TensorProdBasis_Quadrangle1
END INTERFACE TensorProdBasis_Quadrangle
```

## Interface 2

```fortran
INTERFACE TensorProdBasis_Quadrangle
  MODULE FUNCTION TensorProdBasis_Quadrangle2( &
    & p, &
    & q, &
    & x, &
    & y, &
    & basisType1, &
    & basisType2, &
    & alpha1, &
    & beta1, &
    & lambda1, &
    & alpha2, &
    & beta2, &
    & lambda2) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: p
    !! highest order in x1 direction
    INTEGER(I4B), INTENT(IN) :: q
    !! highest order in x2 direction
    REAL(DFP), INTENT(IN) :: x(:), y(:)
    !! points of evaluation in xij format
    INTEGER(I4B), INTENT(IN) :: basisType1
    !! orthogonal polynomial family in x1 direction
    !! Monomials
    !! Jacobi
    !! Legendre
    !! Chebyshev
    !! Ultraspherical
    !! Heirarchical
    INTEGER(I4B), INTENT(IN) :: basisType2
    !! orthogonal poly family in x2 direction
    !! Monomials
    !! Jacobi
    !! Legendre
    !! Chebyshev
    !! Ultraspherical
    !! Heirarchical
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha1
    !! alpha1 needed when basisType1 is "Jacobi"
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta1
    !! beta1 is needed when basisType1 is "Jacobi"
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha2
    !! alpha2 needed when basisType2 is "Jacobi"
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta2
    !! beta2 needed when basisType2 is "Jacobi"
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda1
    !! lambda1 is needed when basisType1 is "Ultraspherical"
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda2
    !! lambda2 is needed when basisType2 is "Ultraspherical"
    REAL(DFP) :: ans(SIZE(x) * SIZE(y), (p + 1) * (q + 1))
    !!
  END FUNCTION TensorProdBasis_Quadrangle2
END INTERFACE TensorProdBasis_Quadrangle
```
