# Dubiner

This function forms Dubiner basis on biunit quadrangle domain.

:::note
This routine is called while forming dubiner basis on triangle domain
:::

## Interface 1

```fortran
INTERFACE
  MODULE PURE FUNCTION Dubiner_Quadrangle1(order, xij) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of polynomial space
    REAL(DFP), INTENT(IN) :: xij(:, :)
    !! points in biunit quadrangle, shape functions will be evaluated
    !! at these points. SIZE(xij,1) = 2, and SIZE(xij, 2) = number of points
    REAL(DFP) :: ans(SIZE(xij, 2), (order + 1) * (order + 2) / 2)
    !! shape functions
    !! ans(:, j), jth shape functions at all points
    !! ans(j, :), all shape functions at jth point
  END FUNCTION Dubiner_Quadrangle1
END INTERFACE
```

The shape of `ans` is (M,N), where M=SIZE(xij,2) (number of points) N = 0.5*(order+1)*(order+2).

 In this way, ans(j,:) denotes the values of all polynomial at jth point

 Polynomials are returned in following way:

$$
 P_{0,0}, P_{0,1}, \cdots , P_{0,order} \\
 P_{1,0}, P_{1,1}, \cdots , P_{1,order-1} \\
 P_{2,0}, P_{2,1}, \cdots , P_{2,order-2} \\
 \cdots
 P_{order,0}
$$

 For example for order=3, the polynomials are arranged as:

$$
 P_{0,0}, P_{0,1}, P_{0,2}, P_{0,3} \\
 P_{1,0}, P_{1,1}, P_{1,2} \\
 P_{2,0}, P_{2,1} \\
 P_{3,0}
$$

## Interface 2

```fortran
INTERFACE Dubiner_Quadrangle
  MODULE PURE FUNCTION Dubiner_Quadrangle2(order, x, y) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of polynomial space
    REAL(DFP), INTENT(IN) :: x(:)
    !! x coordinate on line
    REAL(DFP), INTENT(IN) :: y(:)
    !! y coordinate on line
    REAL(DFP) :: ans(SIZE(x) * SIZE(y), (order + 1) * (order + 2) / 2)
    !! shape functions
    !! ans(:, j), jth shape functions at all points
    !! ans(j, :), all shape functions at jth point
  END FUNCTION Dubiner_Quadrangle2
END INTERFACE Dubiner_Quadrangle
```

- This function forms Dubiner basis on biunit quadrangle domain.
- This routine is same as Dubiner_Quadrangle1
- The only difference is that xij are given by outerproduct of x and y.
- This function calls `Dubiner_Quadrangle1`.
