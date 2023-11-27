---
repo: https://github.com/victorsndvg/FPL
licenses:
  - lgpl-3
tags:
  - easifemClasses
  - extpkgs
---

# FPL

FPL is pure fortran 2003 library that can manage the parameters of your program from a single point.

FPL is an extendible container (dictionary) of `<Key, Value>` pairs, where the `Key` is a character string and the `Value` can be, by the default, of the following data types:

- Integer (kinds 1, 2, 4, 8)
- Real (kinds 4, 8)
- Logical
- String

Value can be a scalar or an array of any dimension.

FPL stores copies of the passed data by assignment.

:::info
FPL is based in Teuchos::ParameterList of the Trilinos project.
:::

[Read More](https://github.com/victorsndvg/FPL)
