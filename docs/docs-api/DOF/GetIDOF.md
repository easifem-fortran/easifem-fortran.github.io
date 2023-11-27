# GetIDOF

Get `id` of degree of freedom by specifying physical variable, spatial component, time component.

Calling example:

- `getIDOF(spaceCompo, timeCompo, tspaceCompo)`
- `getIDOF(obj, ivar, spaceCompo, timeCompo)`
- `getIDOF(obj, ivar, spaceCompo, timeCompo(:) )`
- `getIDOF(obj, ivar, spaceCompo(:), timeCompo)`
- `getIDOF(spaceCompo, timeCompo(:), tspaceCompo)`
- `getIDOF(spaceCompo(:), timeCompo, tspaceCompo)`
- `getIDOF(obj, ivar, idof)`
- `getIDOF(obj, ivar)`

## Interface

```fortran
 INTERFACE
  MODULE PURE FUNCTION dof_getIDOF1(spacecompo, timecompo, tspacecompo) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo
    INTEGER(I4B), INTENT(IN) :: tspacecompo
    INTEGER(I4B) :: ans
  END FUNCTION dof_getIDOF1
END INTERFACE
```

```fortran
 INTERFACE
  MODULE PURE FUNCTION dof_getIDOF2(obj, ivar, spacecompo, timecompo) &
    & RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo
    INTEGER(I4B) :: ans
  END FUNCTION dof_getIDOF2
END INTERFACE
```

```fortran
 INTERFACE
  MODULE PURE FUNCTION dof_getIDOF3(obj, ivar, spacecompo, timecompo) &
    & RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    INTEGER(I4B) :: ans(SIZE(timecompo))
  END FUNCTION dof_getIDOF3
END INTERFACE
```

```fortran
 INTERFACE
  MODULE PURE FUNCTION dof_getIDOF4(obj, ivar, spacecompo, timecompo) &
    & RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    INTEGER(I4B), INTENT(IN) :: timecompo
    INTEGER(I4B) :: ans(SIZE(spacecompo))
  END FUNCTION dof_getIDOF4
END INTERFACE
```

```fortran
 INTERFACE
  MODULE PURE FUNCTION dof_getIDOF5(spacecompo, timecompo, tspacecompo) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    INTEGER(I4B), INTENT(IN) :: tspacecompo
    INTEGER(I4B) :: ans(SIZE(timecompo))
  END FUNCTION dof_getIDOF5
END INTERFACE
```

```fortran
 INTERFACE
  MODULE PURE FUNCTION dof_getIDOF6(spacecompo, timecompo, tspacecompo) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    INTEGER(I4B), INTENT(IN) :: timecompo
    INTEGER(I4B), INTENT(IN) :: tspacecompo
    INTEGER(I4B) :: ans(SIZE(spacecompo))
  END FUNCTION dof_getIDOF6
END INTERFACE
```

```fortran
 INTERFACE
  MODULE PURE FUNCTION dof_getIDOF7(obj, ivar, idof) &
    & RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof
    INTEGER(I4B) :: ans
  END FUNCTION dof_getIDOF7
END INTERFACE
```

```fortran
 INTERFACE
  MODULE PURE FUNCTION dof_getIDOF8(obj, ivar) &
    & RESULT(ans)
    TYPE(DOF_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION dof_getIDOF8
END INTERFACE
```
