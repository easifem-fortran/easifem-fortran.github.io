# Det

Returns determinent of matrix.

Calling example:

```fortran
a = Det(A(:,:))
a = Det(A(:,:,:))
```

:::caution
Currently, Det can compute determinent of matrix upto 5 by 5.
:::

## Interface 1

```fortran
INTERFACE
  MODULE PURE FUNCTION Det(A) RESULT(Ans)
    REAL(DFP), INTENT(IN) :: A(:, :)
    REAL(DFP) :: Ans
  END FUNCTION Det
END INTERFACE
```

## Interface 2

```fortran
INTERFACE
  MODULE PURE FUNCTION Det(A) RESULT(Ans)
    REAL(DFP), INTENT(IN) :: A(:, :, :)
    REAL(DFP), ALLOCATABLE :: Ans(:)
  END FUNCTION Det
END INTERFACE
```
