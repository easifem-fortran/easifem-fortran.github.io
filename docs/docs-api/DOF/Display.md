# Display

Display the content of DOF object.

If you want to see the content of `DOF_` object on terminal screen or in an external file, then you can use `Display` function as shown below.

```fortran
CALL Display( DOF_::obj, CHAR:: msg, INT::unitNo)
```

If you want to see the fortran vector in nice format, then you can use `Display` method in the following way

```fortran
CALL Display( Real::Vec(:), DOF_::obj, CHAR::"some message", INT::unitNo )
```

```fortran
CALL Display( RealVector_::Vec, DOF_::obj, CHAR::"some message", INT::unitNo )
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

```fortran
INTERFACE
  MODULE SUBROUTINE Display(obj, msg, UnitNo)
    CLASS(DOF_), INTENT(IN) :: obj
    CHARACTER(*), INTENT(IN) :: msg
    INTEGER(I4B), INTENT(IN), OPTIONAL :: UnitNo
  END SUBROUTINE Display
END INTERFACE
```

This method prints the content of `DOF_` object on terminal screen or in an external file.

## Interface 2

```fortran
INTERFACE
  MODULE SUBROUTINE Display(Vec, obj, msg, unitno)
    REAL(DFP), INTENT(IN) :: Vec(:)
    CLASS(DOF_), INTENT(IN) :: obj
    CHARACTER(*), INTENT(IN) :: msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitno
  END SUBROUTINE Display
END INTERFACE
```

This method pretty print the fortran vector.

<Tabs>
<TabItem value="example" label="️܀ See example">

This can be understood by following example

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE( DOF_ ) :: obj
REAL( DFP ), ALLOCATABLE :: val( : )
CALL Initiate( obj, tNodes=[10], names=["U"], spaceCompo=[3], &
    & timeCompo=[1], storageFMT = FMT_DOF )
CALL Initiate( Val=val, obj=obj )
val(1:10) = 1; val(11:20)=2; val(21:)=3
CALL Display( Val, obj, "CALL Initiate( Val=val, obj=obj ) : " )
CALL Deallocate( obj )
END PROGRAM main
```

```txt title="result"
# VAR :U
 DOF-1     DOF-2     DOF-3
-------   -------   -------
1.00000   2.00000   3.00000
1.00000   2.00000   3.00000
1.00000   2.00000   3.00000
1.00000   2.00000   3.00000
1.00000   2.00000   3.00000
1.00000   2.00000   3.00000
1.00000   2.00000   3.00000
1.00000   2.00000   3.00000
1.00000   2.00000   3.00000
1.00000   2.00000   3.00000
```

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>

## Interface 3

```fortran
INTERFACE
  MODULE SUBROUTINE Display(Vec, obj, msg, unitno)
    CLASS(RealVector_), INTENT(IN) :: Vec
    CLASS(DOF_), INTENT(IN) :: obj
    CHARACTER(*), INTENT(IN) :: msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitno
  END SUBROUTINE Display
END INTERFACE
```

This method pretty print the realvector.
