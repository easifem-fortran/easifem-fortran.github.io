# Append

Append is a generic subroutine to append entries to vector of real or integer.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note
While calling Append the initial vector can be unallocated in the begining.
:::

Calling examples:

```fortran
CALL Append(A, entry)
CALL Append(C, A, B)
CALL Append(A, entry, mask)
CALL Append(C, A, B, mask)
```

## Interface 1

<Tabs>
<TabItem value="append" label="Append (1)">

```fortran
CALL Append(A, entry)
```

Here,

- `A` can be an allocatable vector of real or integer.
- `entry` can be a scalar of real or integer.
- `entry` can be a vector of real or integer.

We can:

- Append a scalar-integer to an integer-vector
- Append an integer-vector and scalar to an integer-vector
- Append a scalar-real to a real-vector
- Append a real-vector to a real-vector

:::note
We can also use this method as:

```fortran
A = A .append. entry
```

:::

</TabItem>

<TabItem value="example" label="Example 1">

import EXAMPLE62 from "./_Append_test_1.md";

<EXAMPLE62 />

</TabItem>

<TabItem value="example2" label="Example 2">

import EXAMPLE64 from "./_Append_test_2.md";

<EXAMPLE64 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>

</Tabs>

## Interface 2

<Tabs>
<TabItem value="append" label="Append (2)">

```fortran
CALL Append(C, A, B)
```

where,

- Append A and B, then assign it to `C`
- `C` can be an allocatable vector of real or integer
- `A` can be a vector of real or integer
- `B` can be a scalar of real or integer
- `B` can be a vector of real or integer

:::note
Currently, `A` cannot be scalar in the above interface.
:::

We can:

- Append a scalar and a vector of int to another vector of int
- Append two vectors of int to another vector of int
- Append a scalar and a vector of real to another vector of real
- Append two vectors of real to another vector of real

</TabItem>

<TabItem value="example" label="See example">

import EXAMPLE104 from "./_Append_test_3.md";

<EXAMPLE104 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>

</Tabs>

## Interface 3

<Tabs>
<TabItem value="append" label="Append (3)">

```fortran
  CALL Append(A, entry, mask)
```

here,

- `A` is an allocatable vector of real or integer.
- `entry` can be a scalar of real or integer. In this case `mask` is a scalar of logical type
- `entry` can be a vector of real or integer. In this case, `mask` will be a vector of logical types.

:::note
The size of `mask` should be same as the size of `entry`.
:::

We can:

- Masked append a scalar integer to a vector of int
- Masked append a scalar real to a vector of reals
- Masked append a vector of integer to a vector of integer
- Masked append a vector of real to a vector of real

</TabItem>

<TabItem value="example" label="See example">

import EXAMPLE149 from "./_Append_test_4.md";

<EXAMPLE149 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>

</Tabs>

## Interface 4

<Tabs>

<TabItem value="append" label="Append (4)">

```fortran
  CALL Append(C, A, B, mask)
```

where,

- `C` is an allocatable vector of real or integer
- `A` is a vector of real or integer
- `B` is a vector of real or integer

:::note
Currently, we do not allow `A` to be a scalar in the above call.
:::

We can:

- Masked append a scalar and vector of int to another vector of int
- Masked append a scalar and vector real to another vector of real
- Masked append two vectors of integer to another vector of integer
- Masked append two vectors of real to another vector of real

</TabItem>

<TabItem value="example" label="See example">

import EXAMPLE193 from "./_Append_test_5.md";

<EXAMPLE193 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>

</Tabs>
