---
title: ReferenceElement example 1
---

# ReferenceElement example 1

## Modules and classes

- [[ReferenceTopology_]]

## Usage

``` fortran
PROGRAM main
TYPE( ReferenceTopology_ ) :: obj
obj = ReferenceTopology( nptrs = [1,2,3], name=Triangle3 )
CALL display( obj, "test-1 obj : ")
CALL display( .NNE. obj, "nne : ")
PROGRAM main
```
