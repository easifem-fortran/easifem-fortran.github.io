---
title: ReferenceTriangle Initiate Example 1
---

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(ReferenceTriangle_) :: obj
REAL(DFP) :: avar, xij(2, 3)

obj = ReferenceTriangle(nsd=2_I4B)
CALL OK(obj%domainName .EQ. "UNIT", "tests: ")

obj = ReferenceTriangle(nsd=2_I4B, domainName="UNIT")
CALL OK(obj%domainName .EQ. "UNIT", "tests: ")

obj = ReferenceTriangle(nsd=2_I4B, domainName="BIUNIT")
CALL OK(obj%domainName .EQ. "BIUNIT", "tests: ")

obj = ReferenceTriangle(nsd=2_I4B, xij=RefCoord_Triangle("UNIT") )
CALL OK(obj%domainName .EQ. "UNIT", "tests: ")

obj = ReferenceTriangle(nsd=2_I4B, xij=RefCoord_Triangle("BIUNIT") )
CALL OK(obj%domainName .EQ. "BIUNIT", "tests: ")

obj = ReferenceTriangle(nsd=2_I4B, xij=2.0_DFP*RefCoord_Triangle("BIUNIT") )
CALL OK(obj%domainName .EQ. "GENERAL", "tests: ")
END PROGRAM main
```
