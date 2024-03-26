---
title: ReferenceTetrahedron Initiate Example 2
---

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

TYPE(ReferenceTetrahedron_) :: obj
REAL(DFP) :: avar, xij(3, 4)

obj = ReferenceTetrahedron(nsd=3_I4B)
CALL OK(obj%domainName .EQ. "UNIT", "tests: ")

obj = ReferenceTetrahedron(nsd=3_I4B, domainName="UNIT")
CALL OK(obj%domainName .EQ. "UNIT", "tests: ")

obj = ReferenceTetrahedron(nsd=3_I4B, domainName="BIUNIT")
CALL OK(obj%domainName .EQ. "BIUNIT", "tests: ")

obj = ReferenceTetrahedron(nsd=3_I4B, xij=RefCoord_Tetrahedron("UNIT"))
CALL OK(obj%domainName .EQ. "UNIT", "tests: ")

obj = ReferenceTetrahedron(nsd=3_I4B, xij=RefCoord_Tetrahedron("BIUNIT"))
CALL OK(obj%domainName .EQ. "BIUNIT", "tests: ")

obj = ReferenceTetrahedron(nsd=3_I4B, xij=2.0_DFP*RefCoord_Tetrahedron("BIUNIT") )
CALL OK(obj%domainName .EQ. "GENERAL", "tests: ")
END PROGRAM main
```
