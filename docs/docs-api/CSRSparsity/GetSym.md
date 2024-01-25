# GetSym

Make sparse matrix symmetric.

Calling example:

```fortran
CALL GetSym(CSRSparsity_::obj, CSRSparsity_::symObj, char(1)::from)
```

<Tabs>
<TabItem value="1" label="܀ GetSym(obj, symobj, from)" default>

```fortran
INTERFACE
  MODULE SUBROUTINE GetSym(obj, symObj, from)
    TYPE(CSRSparsity_), INTENT(IN) :: obj
    TYPE(CSRSparsity_), INTENT(INOUT) :: symObj
    CHARACTER(1), INTENT(IN) :: from
  END SUBROUTINE GetSym
END INTERFACE
```

- If `from="L"`, then lower part of csrmatrix is used
- If `from="U"`, then upper part of csrmatrix is used

</TabItem>

<TabItem value="2" label="܀ See Example">

import EXAMPLE34 from "./examples/_GetSym_test_1.md";

<EXAMPLE34 />

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

<Tabs>

<TabItem value="2" label="GetSym(obj, from)" default>

```fortran
INTERFACE
  MODULE SUBROUTINE GetSym(obj, from)
    TYPE(CSRSparsity_), INTENT(INOUT) :: obj
    CHARACTER(1), INTENT(IN) :: from
  END SUBROUTINE GetSym
END INTERFACE
```

- If `from="L"`, then lower part of csrmatrix is used
- If `from="U"`, then upper part of csrmatrix is used

</TabItem>

<TabItem value="1" label="܀ See example" default>

TODO

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>
