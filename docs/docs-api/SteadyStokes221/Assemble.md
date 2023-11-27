# Assemble

This procedure pointer assembles the problem

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE Assemble(obj)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
  END SUBROUTINE Assemble
END INTERFACE
```

## Example

import EXAMPLE17 from "./_Assemble_test_1.md";

<EXAMPLE17 />
