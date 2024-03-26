---
title: ReferenceLine example 1
---

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(ReferenceLine_) :: obj
REAL(DFP) :: avar, xij(1, 2)

obj = ReferenceLine(nsd=1_I4B)
CALL OK(obj%domainName .EQ. "BIUNIT", "tests: ")

obj = ReferenceLine(nsd=1_I4B, domainName="UNIT")
CALL OK(obj%domainName .EQ. "UNIT", "tests: ")

obj = ReferenceLine(nsd=1_I4B, domainName="BIUNIT")
CALL OK(obj%domainName .EQ. "BIUNIT", "tests: ")

obj = ReferenceLine(nsd=1_I4B, xij=RefCoord_Line("UNIT"))
CALL OK(obj%domainName .EQ. "UNIT", "tests: ")

obj = ReferenceLine(nsd=1_I4B, xij=RefCoord_Line("BIUNIT"))
CALL OK(obj%domainName .EQ. "BIUNIT", "tests: ")

obj = ReferenceLine(nsd=1_I4B, xij=2.0_DFP * RefCoord_Line("BIUNIT"))
CALL OK(obj%domainName .EQ. "GENERAL", "tests: ")
END PROGRAM main
```
