# MatVec

Perform matrix vector multipliction.

Calling example:

```fortran
CALL MatVec(
MatrixField_::obj, &
& REAL::x(:), &
& REAL::y(:) &
& <, bool::isTranspose &>
& <, bool::addContribution &>
& <, real::scale>)
```

```fortran
CALL MatVec(
MatrixField_::obj, &
& AbstractNodeField_::x, &
& AbstractNodeField_::y &
& <, bool::isTranspose &>
& <, bool::addContribution &>
& <, real::scale>)
```

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  SUBROUTINE Matvec(obj, x, y, isTranspose, addContribution, &
    & scale)
    IMPORT :: AbstractMatrixField_, DFP, LGT
    CLASS(AbstractMatrixField_), INTENT(IN) :: obj
    REAL(DFP), INTENT(INOUT) :: y(:)
    !! Output vector y=Ax
    REAL(DFP), INTENT(IN) :: x(:)
    !! Input vector in y=Ax
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isTranspose
    !! True if we have to use TRANSPOSE of matrix
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
    !! Default is FALSE
    !! if true then we do not set y = 0, and perform
    !! y = y + matvec(obj, x)
    !! if false, then we perform y = matvec(obj, x)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
  END SUBROUTINE Matvec
END INTERFACE
```

This routine returns the matrix vector multiplication. Here, input vector (`x`)
is a native fortran vector. The output vector (`y`) is also a native fortran
vector. It should be noted that the output vector should be allocated
outside, and it should have same length as the input vector.

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  SUBROUTINE Matvec(obj, x, y, isTranspose, addContribution, &
    & scale)
    IMPORT :: AbstractMatrixField_, AbstractNodeField_, LGT, DFP
    CLASS(AbstractMatrixField_), INTENT(IN) :: obj
    CLASS(AbstractNodeField_), INTENT(INOUT) :: y
    !! Output vector y=Ax
    CLASS(AbstractNodeField_), INTENT(IN) :: x
    !! Input vector in y=Ax
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isTranspose
    !! True if we have to use TRANSPOSE of matrix
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
    !! Default is FALSE
    !! if true then we do not set y = 0, and perform
    !! y = y + matvec(obj, x)
    !! if false, then we perform y = matvec(obj, x)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
  END SUBROUTINE Matvec
END INTERFACE
```

This routine returns the matrix vector multiplication. Here, input vector (`x`)
is an instance of AbstractNodeField.
The output vector (`y`) is also an instance of AbstractNodeField.
It should be noted that the output vector should be allocated
outside, and it should have same length as the input vector.

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>

</Tabs>
