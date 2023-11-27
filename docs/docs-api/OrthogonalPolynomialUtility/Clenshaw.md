# Clenshaw

Cleanshaw algorithm.

## Interface 1

```fortran
INTERFACE
  MODULE PURE FUNCTION Clenshaw(x, alpha, beta, y0, ym1, c) RESULT(ans)
    REAL(DFP), INTENT(IN) :: x
    REAL(DFP), INTENT(IN) :: alpha(0:)
    REAL(DFP), INTENT(IN) :: beta(0:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: y0
    !! if y0 is absent then y0 = 1.0
    REAL(DFP), OPTIONAL, INTENT(IN) :: ym1
    !! if ym1 is absent then ym1 = 0.0
    REAL(DFP), INTENT(IN) :: c(0:)
    REAL(DFP) :: ans
  END FUNCTION Clenshaw
END INTERFACE
```

## Interface 2

```fortran
INTERFACE
  MODULE PURE FUNCTION Clenshaw(x, alpha, beta, y0, ym1, c) RESULT(ans)
    REAL(DFP), INTENT(IN) :: x(:)
    REAL(DFP), INTENT(IN) :: alpha(0:)
    REAL(DFP), INTENT(IN) :: beta(0:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: y0
    !! if y0 is absent then y0 = 1.0
    REAL(DFP), OPTIONAL, INTENT(IN) :: ym1
    !! if ym1 is absent then ym1 = 0.0
    REAL(DFP), INTENT(IN) :: c(0:)
    REAL(DFP) :: ans(SIZE(x))
  END FUNCTION Clenshaw
END INTERFACE
```

## Interface 3

```fortran
INTERFACE
  MODULE PURE FUNCTION Clenshaw(x, c) RESULT(ans)
    REAL(DFP), INTENT(IN) :: x
    REAL(DFP), INTENT(IN) :: c(0:)
    REAL(DFP) :: ans
  END FUNCTION Clenshaw
END INTERFACE
```

## Interface 4

```fortran
INTERFACE
  MODULE PURE FUNCTION Clenshaw(x, c) RESULT(ans)
    REAL(DFP), INTENT(IN) :: x(:)
    REAL(DFP), INTENT(IN) :: c(0:)
    REAL(DFP) :: ans(SIZE(x))
  END FUNCTION Clenshaw
END INTERFACE
```
