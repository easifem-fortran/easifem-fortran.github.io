# FindReplace

This routine finds the pattern inside the string, and replace it with the given pattern.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>

<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE PURE SUBROUTINE FindReplace(chars, findp, repp)
    CHARACTER(*), INTENT(INOUT) :: chars
    CHARACTER(*), INTENT(IN) :: findp
    CHARACTER(*), INTENT(IN) :: repp
  END SUBROUTINE FindReplace
END INTERFACE
```

Replaces a substring pattern with a different substring in a string.

- `chars` the string which will have substrings replaced.
- `findp` the substring pattern to find and replace
- `repp` the new substring that will replace parts of string

`repp` can be larger than `findp` and as long as the size of string can
accomodate the increased length of all replacements. Trailing and preceding
spaces are counted in all strings.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE5 from "./_FindReplace_test_1.md";

<EXAMPLE5 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
