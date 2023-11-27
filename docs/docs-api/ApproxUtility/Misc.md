# Misc

Miscellaneous routines.

To check equality of logical values:

```fortran
abool = bool1 == bool2
```

To check inequality of logical values:

```fortran
abool = bool1 /= bool2
```

To assign a string to a number.

```fortran
aint = "1"; aint = "128"
areal = "1.0"
```

See example:

import EXAMPLE25 from "./_Misc_test_1.md";

<EXAMPLE25 />


To check if a string is number:

```fortran 
abool = isNumeric("1.2")
```
