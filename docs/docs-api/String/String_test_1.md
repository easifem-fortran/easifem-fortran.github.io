---
author: Vikas Sharma, Ph.D.
date: 27 Oct 2022
tags:
    - String/Str
---

# String example 1

In this example we test following methods.

- `Str`

## Modules and classes

- [[String_]]

## Usage

```fortran
PROGRAM main
use easifemBase
implicit none
```

!!! note "Str for integer"

```fortran
  BLOCK
    CALL Display( Str(1), "Str(1) = " )
    CALL Display( Str(1, no_sign=.TRUE.), "Str(1) = " )
    CALL Display( Str(1, no_sign=.FALSE.), "Str(1) = " )
  END BLOCK
```

!!! note "Str for real32"

```fortran
  BLOCK
    CALL Display( Str(1.0_Real32), "Str(1) = " )
    CALL Display( Str(1.0_Real32, no_sign=.TRUE.), "Str(1) = " )
    CALL Display( Str(1.0_Real32, no_sign=.FALSE.), "Str(1) = " )
  END BLOCK
```

!!! note "Str for real64"

```fortran
  BLOCK
    CALL Display( Str(1.0_Real64), "Str(1) = " )
    CALL Display( Str(1.0_Real64, no_sign=.TRUE.), "Str(1) = " )
    CALL Display( Str(1.0_Real64, no_sign=.FALSE.), "Str(1) = " )
  END BLOCK
```

```fortran
END PROGRAM main
```
