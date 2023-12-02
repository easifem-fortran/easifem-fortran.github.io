# ImportFromToml

Import the content of `LinearElasticModel_` form a toml-file.

<span class="badge badge--secondary"> @IOMethods </span>

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE ImportFromToml(obj, tomlName, afile, filename,  &
    & printToml)
    CLASS(AbstractMaterialModel_), INTENT(INOUT) :: obj
    CHARACTER(*), INTENT(IN) :: tomlName
    TYPE(TxtFile_), OPTIONAL, INTENT(INOUT) :: afile
    CHARACTER(*), OPTIONAL, INTENT(IN) :: filename
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: printToml
  END SUBROUTINE ImportFromToml
END INTERFACE
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE9 from "./examples/_ImportFromToml_test_1.md";

<EXAMPLE9 />

</TabItem>

<TabItem value="example2" label="example 2">

import EXAMPLE37 from "./examples/_ImportFromToml_test_2.md";

<EXAMPLE37 />

</TabItem>

<TabItem value="ex3" label="example 3">

import EXAMPLE45 from "./examples/_ImportFromToml_test_3.md";

<EXAMPLE45 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>

You can see more example [here](/guides/programming-fem/linearElasticity/import_toml)
