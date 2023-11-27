# ApproxEQR

This performs a relative comparison by scaling the default epsilon-value to the size of the larger of the two.

:::note
It should be used when a and b are of
the same magnitude and very large or very small. If either a or b is
zero (exactly) then this routine is equivalent to an absolute comparison APPROXEQ.
:::

```fortran
abool= a .APPROXEQR. b
```

$$
(a-b) \le 1.0\times 10^{-15} \max{\vert a \vert, \vert b \vert}
$$
