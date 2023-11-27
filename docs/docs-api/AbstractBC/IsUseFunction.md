# IsUseFunction

Returns true if use function option is set to true.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION isUseFunction(obj) RESULT(ans)
    CLASS(AbstractBC_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isUseFunction
END INTERFACE
```
