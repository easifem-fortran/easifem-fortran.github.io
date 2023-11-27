# ApproxEQ

This routine performs simple absolute comparison using an epsilon that is a compile-time constant.

:::info
It should be used whenever possible because it has the least overhead.
However, it is not appropriate to use when a and b are either very large or very small.
:::

```fortran
abool= a .APPROXEQ. b
abool= a .APPROXEQA. b
```

$$
(a-b) \le 1.0\times 10^{-15}
$$
