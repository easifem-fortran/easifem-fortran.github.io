# tDOF

This method returns total degrees of freedom.

This operator returns the total number of degrees of freedom in a physical variable.

Calling example:

Getting total degrees of freedom in `DOF_`

```fortran
ans= .tdof. obj
```

Getting total degrees of freedom of a physical name

```fortran
ans= obj .tdof. "U"
```

Getting the total number of degrees of freedom of a physical variable by number.

```fortran
ans= obj .tdof. 1
```

## Interface 1

```fortran
INTERFACE
  MODULE PURE FUNCTION dof_tdof1(obj) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION dof_tdof1
END INTERFACE
```

This method returns the total number of degrees of freedom.

## Interface 2

```fortran
 INTERFACE
  MODULE PURE FUNCTION dof_tdof2(obj, Name) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    CHARACTER(1), INTENT(IN) :: Name
    INTEGER(I4B) :: ans
  END FUNCTION dof_tdof2
END INTERFACE
```

This function returns the total number of degrees of freedom in a physical variable. The physical variable is specified by using its name.

## Interface 3

```fortran
INTERFACE
  MODULE PURE FUNCTION dof_tdof3(obj, ivar) RESULT(ans)
    CLASS(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B) :: ans
  END FUNCTION dof_tdof3
END INTERFACE
```

This function returns the total number of degrees of freedom in a physical variable. The physical variable is specified by using its number.

## Examples

import EXAMPLE71 from "./_DOF_test_10.md";

<EXAMPLE71 />
