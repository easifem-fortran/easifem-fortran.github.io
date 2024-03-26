---
title: ReferenceElement ReferenceTopology Example 1
---

In this example you will learn how to create a `ReferenceTopology`.

```fortran
PROGRAM main
  USE easifemBase
  TYPE( ReferenceTopology_ ) :: obj

  obj = ReferenceTopology( nptrs = [1,2,3], name=Triangle3 )
  CALL Display( obj, "test-1 obj : ")
  CALL OK( (.NNE. obj) .eq. 3, "nne : ")
END PROGRAM main
```
