# Initiate

Initiate the [AbstractBC](./AbstractBC_.md)

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
ABSTRACT INTERFACE
  SUBROUTINE Initiate(obj, param, boundary, dom)
    IMPORT :: AbstractBC_, ParameterList_, MeshSelection_, Domain_
    CLASS(AbstractBC_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    TYPE(MeshSelection_), INTENT(IN) :: boundary
    CLASS(Domain_), TARGET, INTENT(IN) :: dom
  END SUBROUTINE Initiate
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE9 from "./_Initiate_test_1.md";

<EXAMPLE9 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
