# SoftEQR

Check equality of two numbers.

Calling example:

```fortran
abool = SOFTEQ(a, b, tol)
```

$$
\vert a - b \vert \le tol \times max(\vert a \vert, \vert b\vert)
$$
