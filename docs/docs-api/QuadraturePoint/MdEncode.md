# MdEncode

Encode the content of QuadraturePoint in markdown tables.

## Interface

```fortran
INTERFACE MdEncode
  MODULE FUNCTION QuadraturePoint_MdEncode(obj) RESULT(ans)
    CLASS(QuadraturePoint_), INTENT(IN) :: obj
    TYPE(String) :: ans
  END FUNCTION QuadraturePoint_MdEncode
END INTERFACE MdEncode
```

## Example

import EXAMPLE18 from "./_MdEncode_test_1.md";

<EXAMPLE18 />
