---
sidebar_position: 1
date: 2022-12-04
update: 23-01-26
status: stable
docs: partial
extpkgs: Sparsekit
category:
  - LinearAlgebra
  - Matrix
  - SparseMatri
tags:
  - easifemBase
  - matrix
  - extpkgs
  - linearAlgebra
  - sparseMatrix
---

# CSRSparsity

`CSRSparsity` is a user type for storing the compressed sparse row sparse matrix.

## Constructor Methods

We have three methods to construct an instance of `CSRSparsity`.

- `Initiate` method
- `CSRSparsity` function
- `CSRSparsityPointer` function

In order to construct an instance of `CSRSparsity`, we need to specify `nrow` `ncol` and [DOF](/docs-api/DOF) object. By using `DOF_` object we can specify the degrees of freedom structure inside `CSRMatrix_`. Then one can use the [Initiate](/docs-api/CSRSparsity/Initiate) method.

Working example is given below based on this concept.

<details>
<summary>Click here to see the example</summary>
<div>

import EXAMPLE40 from "./examples/_Initiate_test_1.md";

<EXAMPLE40 />

</div>
</details>

For multi-physics applications following example will be helpful.

<details>
<summary>Click here to see the example</summary>
<div>

import EXAMPLE49 from "./examples/_Initiate_test_2.md";

<EXAMPLE49 />

</div>
</details>

EASIFEM also has an assignment operator (=) to initiate an instance of `CSRSparsity_`.

```fortran
MODULE SUBROUTINE initiate( obj, obj2 )
  TYPE( CSRSparsity_ ), INTENT( INOUT ) :: obj
  TYPE( CSRSparsity_ ), INTENT( IN ) :: obj2
END SUBROUTINE initiate
```

However, if you have `IA` and`JA` indices, then you can initiate the `CSRSparsity_` object using the following command.

```fortran
MODULE SUBROUTINE initiate( obj, IA, JA )
  TYPE( CSRSparsity_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: IA( : ), JA( : )
END SUBROUTINE initiate
```

## Set Methods

After constructing the instance of `CSRSparsity_` we set the sparsity by calling [SetSparsity](/docs-api/CSRSparsity/SetSparsity).

## All methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
