# Push

Add a new entry at specific location of vector.

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION Push(vec, pos, value) RESULT(ans)
    INTEGER(Int8|Int16|Int32|Int64|Real32|Real64), INTENT(IN) :: vec(:)
    INTEGER(I4B), INTENT(IN) :: pos
    INTEGER(Int8|Int16|Int32|Int64|Real32|Real64), INTENT(IN) :: value
    INTEGER(Int8|Int16|Int32|Int64|Real32|Real64) :: ans(SIZE(vec) + 1)
  END FUNCTION Push
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE5 from "./_Push_test_1.md";

<EXAMPLE5 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
