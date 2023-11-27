# AbstractMatrixField

AbstractMatrixField is a child of [AbstractField\_](../AbstractField/AbstractField_.md).

- It handles tangent matrix in finite element method.

## Structure

```fortran
TYPE, ABSTRACT, EXTENDS(AbstractField_) :: AbstractMatrixField_
  LOGICAL(LGT) :: isPmatInitiated = .FALSE.
  !! True if precondition matrix is initiated
```

![AbstractMatrixField1](./figures/AbstractMatrixField1.svg)

## todo

- ShallowCopy
- Copy
- Assemble
- GetRange
- GetNNZ
- AXPY
- XPAY
- AXPYZ
- Scale
- ShiftDiagonal
- ShiftMatrix

## Methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
