# Initiate

Initiate the fortran file. See example [[FortranFile_test_1]] and [[FortranFile_test_2]]

## Interface

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
INTERFACE FortranFileInitiate
  MODULE SUBROUTINE ff_initiate(obj, filename, unit, status, access, form, &
    & position, action, pad, recl, comment, separator, delimiter)
    CLASS(FortranFile_), INTENT(INOUT) :: obj
    CHARACTER(*), INTENT(IN) :: filename
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unit
    !! unit number, should not be equal to `stdout, stdin, stderr`
    CHARACTER(*), OPTIONAL, INTENT(IN) :: status
    !! OLD, NEW, SCRATCH, REPLACE, UNKNOWN
    !! If UNKNOWN then we use REPLACE
    !! Default is REPLACE
    CHARACTER(*), OPTIONAL, INTENT(IN) :: access
    !! DIRECT, SEQUENTIAL, STREAM
    !! Default is SEQUENTIAL
    CHARACTER(*), OPTIONAL, INTENT(IN) :: form
    !! FORMATTED, UNFORMATTED
    !! Default is FORMATTED
    CHARACTER(*), OPTIONAL, INTENT(IN) :: position
    !! REWIND, APPEND, ASIS
    !! Default is ASIS
    CHARACTER(*), OPTIONAL, INTENT(IN) :: action
    !! READ, WRITE, READWRITE
    !! Default is READWRITE
    CHARACTER(*), OPTIONAL, INTENT(IN) :: pad
    !! YES, NO
    !! Default is YES
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: recl
    CHARACTER(*), OPTIONAL, INTENT(IN) :: comment
    CHARACTER(*), OPTIONAL, INTENT(IN) :: separator
    CHARACTER(*), OPTIONAL, INTENT(IN) :: delimiter
  END SUBROUTINE ff_initiate
END INTERFACE FortranFileInitiate
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE7 from "./examples/_Initiate_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
