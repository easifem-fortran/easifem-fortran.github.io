# Add

Add values to CSRMatrix.

Calling example: 

```fortran
ADD(obj, nodenum(:), value(:,:), scale)

ADD(obj, nodenum(:), value(:,:), scale, storageFMT)

ADD(obj, value, scale)

ADD(obj, irow, icolumn, value, scale)

ADD(obj, inodenum, jnodenum, idof, jdof, value, scale)

ADD(obj, nodenum(:), value, scale)

ADD(obj, inodenum(:), jnodenum(:), ivar, jvar, value(:,:), scale)

ADD(obj, inodenum, jnodenum, ivar, jvar, idof, jdof, value, scale)

ADD(obj, inodenum(:), jnodenum(:), ivar, jvar, idof, jdof, value(:,:), scale)

ADD(obj, inodenum, jnodenum, ivar, jvar, ispacecompo, itimecompo, jspacecompo, jtimecompo, value, scale)

ADD(obj, inodenum(:), jnodenum(:), ivar, jvar, value, scale)

ADD(obj, inodenum(:), jnodenum(:), ivar, jvar, idof, jdof, value, scale)

ADD(obj, inodenum(:), jnodenum(:), ivar, jvar, ispacecompo, itimecompo, jspacecompo, jtimecompo, value, scale)

ADD(obj, inodenum(:), jnodenum(:), ivar, jvar, ispacecompo, itimecompo(:), jspacecompo, jtimecompo(:), value, scale)

ADD(obj, inodenum(:), jnodenum(:), ivar, jvar, ispacecompo(:), itimecompo, jspacecompo(:), jtimecompo, value, scale)
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE add(obj, nodenum, VALUE, scale)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    !! Node numbers
    REAL(DFP), INTENT(IN) :: VALUE(:, :)
    !! Element finite element matrix
    REAL(DFP), INTENT(IN) :: scale
    !! Scale is used to scale the Val before adding it to the obj
  END SUBROUTINE add
END INTERFACE 
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE add(obj, nodenum, VALUE, scale, storageFMT)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    !! Node numbers
    REAL(DFP), INTENT(IN) :: VALUE(:, :)
    !! Element finite element matrix
    REAL(DFP), INTENT(IN) :: scale
    !! Scale is used to scale the Val before adding it to the obj
    INTEGER(I4B), INTENT(IN) :: storageFMT
    !! Storage format of element finite matrix
  END SUBROUTINE add
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 3

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE add(obj, VALUE, scale)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE
    REAL(DFP), INTENT(IN) :: scale
  END SUBROUTINE add
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>


## Interface 4

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE add(obj, irow, icolumn, VALUE, scale)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: irow
    INTEGER(I4B), INTENT(IN) :: icolumn
    REAL(DFP), INTENT(IN) :: VALUE
    REAL(DFP), INTENT(IN) :: scale
  END SUBROUTINE add
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>


## Interface 5

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE add(obj, iNodeNum, jNodeNum, idof, &
    & jdof, VALUE, scale)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum
    INTEGER(I4B), INTENT(IN) :: jNodeNum
    INTEGER(I4B), INTENT(IN) :: idof
    INTEGER(I4B), INTENT(IN) :: jdof
    REAL(DFP), INTENT(IN) :: VALUE
    REAL(DFP), INTENT(IN) :: scale
  END SUBROUTINE add
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>


## Interface 6

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE add(obj, nodenum, VALUE, scale)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nodenum(:)
    REAL(DFP), INTENT(IN) :: VALUE
    REAL(DFP), INTENT(IN) :: scale
  END SUBROUTINE add
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>


## Interface 7

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE add(obj, iNodeNum, jNodeNum, ivar,  &
    & jvar, iDOF, jDOF, VALUE, scale)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum
    !! row node number
    INTEGER(I4B), INTENT(IN) :: jNodeNum
    !! column node number
    INTEGER(I4B), INTENT(IN) :: ivar
    !!
    INTEGER(I4B), INTENT(IN) :: jvar
    !!
    INTEGER(I4B), INTENT(IN) :: iDOF
    !! row degree of freedom
    INTEGER(I4B), INTENT(IN) :: jDOF
    !! col degree of freedom
    REAL(DFP), INTENT(IN) :: VALUE
    !! scalar value to be add
    REAL(DFP), INTENT(IN) :: scale
  END SUBROUTINE add
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>


## Interface 7

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE add(obj, iNodeNum, jNodeNum, ivar,  &
    & jvar, iDOF, jDOF, VALUE, scale)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum(:)
    !! row node number
    INTEGER(I4B), INTENT(IN) :: jNodeNum(:)
    !! column node number
    INTEGER(I4B), INTENT(IN) :: ivar
    !!
    INTEGER(I4B), INTENT(IN) :: jvar
    !!
    INTEGER(I4B), INTENT(IN) :: iDOF
    !! row degree of freedom
    INTEGER(I4B), INTENT(IN) :: jDOF
    !! col degree of freedom
    REAL(DFP), INTENT(IN) :: VALUE(:, :)
    !! scalar value to be add
    REAL(DFP), INTENT(IN) :: scale
  END SUBROUTINE add
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">


</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 8

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE add(obj, iNodeNum, jNodeNum, ivar,  &
    & jvar, iDOF, jDOF, VALUE, scale)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum(:)
    !! row node number
    INTEGER(I4B), INTENT(IN) :: jNodeNum(:)
    !! column node number
    INTEGER(I4B), INTENT(IN) :: ivar
    !!
    INTEGER(I4B), INTENT(IN) :: jvar
    !!
    INTEGER(I4B), INTENT(IN) :: iDOF
    !! row degree of freedom
    INTEGER(I4B), INTENT(IN) :: jDOF
    !! col degree of freedom
    REAL(DFP), INTENT(IN) :: VALUE(:, :)
    !! scalar value to be add
    REAL(DFP), INTENT(IN) :: scale
  END SUBROUTINE add
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 8

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE add(obj, iNodeNum, jNodeNum, ivar,  &
    & jvar, iDOF, jDOF, VALUE, scale)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum(:)
    !! row node number
    INTEGER(I4B), INTENT(IN) :: jNodeNum(:)
    !! column node number
    INTEGER(I4B), INTENT(IN) :: ivar
    !!
    INTEGER(I4B), INTENT(IN) :: jvar
    !!
    INTEGER(I4B), INTENT(IN) :: iDOF
    !! row degree of freedom
    INTEGER(I4B), INTENT(IN) :: jDOF
    !! col degree of freedom
    REAL(DFP), INTENT(IN) :: VALUE(:, :)
    !! scalar value to be add
    REAL(DFP), INTENT(IN) :: scale
  END SUBROUTINE add
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 9

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE add(obj, iNodeNum, jNodeNum, ivar,  &
    & jvar, iDOF, jDOF, VALUE, scale)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum(:)
    !! row node number
    INTEGER(I4B), INTENT(IN) :: jNodeNum(:)
    !! column node number
    INTEGER(I4B), INTENT(IN) :: ivar
    !!
    INTEGER(I4B), INTENT(IN) :: jvar
    !!
    INTEGER(I4B), INTENT(IN) :: iDOF
    !! row degree of freedom
    INTEGER(I4B), INTENT(IN) :: jDOF
    !! col degree of freedom
    REAL(DFP), INTENT(IN) :: VALUE(:, :)
    !! scalar value to be add
    REAL(DFP), INTENT(IN) :: scale
  END SUBROUTINE add
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 10

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE add(obj, iNodeNum, jNodeNum, ivar,  &
    & jvar, ispacecompo, itimecompo, jspacecompo, jtimecompo, VALUE, scale)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum
    !! row node number
    INTEGER(I4B), INTENT(IN) :: jNodeNum
    !! column node number
    INTEGER(I4B), INTENT(IN) :: ivar
    !!
    INTEGER(I4B), INTENT(IN) :: jvar
    !!
    INTEGER(I4B), INTENT(IN) :: ispacecompo
    INTEGER(I4B), INTENT(IN) :: itimecompo
    INTEGER(I4B), INTENT(IN) :: jspacecompo
    INTEGER(I4B), INTENT(IN) :: jtimecompo
    REAL(DFP), INTENT(IN) :: VALUE
    !! scalar value to be add
    REAL(DFP), INTENT(IN) :: scale
  END SUBROUTINE add
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 11

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE add(obj, iNodeNum, jNodeNum, &
    & ivar, jvar, VALUE, scale)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum(:)
    INTEGER(I4B), INTENT(IN) :: jNodeNum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: jvar
    REAL(DFP), INTENT(IN) :: VALUE
    REAL(DFP), INTENT(IN) :: scale
  END SUBROUTINE add
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 12

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE add(obj, iNodeNum, jNodeNum, ivar,  &
    & jvar, iDOF, jDOF, VALUE, scale)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum(:)
    !! row node number
    INTEGER(I4B), INTENT(IN) :: jNodeNum(:)
    !! column node number
    INTEGER(I4B), INTENT(IN) :: ivar
    !!
    INTEGER(I4B), INTENT(IN) :: jvar
    !!
    INTEGER(I4B), INTENT(IN) :: iDOF
    !! row degree of freedom
    INTEGER(I4B), INTENT(IN) :: jDOF
    !! col degree of freedom
    REAL(DFP), INTENT(IN) :: VALUE
    !! scalar value to be add
    REAL(DFP), INTENT(IN) :: scale
  END SUBROUTINE add
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 13

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE add(obj, iNodeNum, jNodeNum, ivar,  &
    & jvar, ispacecompo, itimecompo, jspacecompo, jtimecompo, VALUE, scale)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum(:)
    !! row node number
    INTEGER(I4B), INTENT(IN) :: jNodeNum(:)
    !! column node number
    INTEGER(I4B), INTENT(IN) :: ivar
    !!
    INTEGER(I4B), INTENT(IN) :: jvar
    !!
    INTEGER(I4B), INTENT(IN) :: ispacecompo
    INTEGER(I4B), INTENT(IN) :: itimecompo
    INTEGER(I4B), INTENT(IN) :: jspacecompo
    INTEGER(I4B), INTENT(IN) :: jtimecompo
    REAL(DFP), INTENT(IN) :: VALUE
    !! scalar value to be add
    REAL(DFP), INTENT(IN) :: scale
  END SUBROUTINE add
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 14

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE add(obj, iNodeNum, jNodeNum, ivar,  &
    & jvar, ispacecompo, itimecompo, jspacecompo, jtimecompo, VALUE, scale)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum(:)
    !! row node number
    INTEGER(I4B), INTENT(IN) :: jNodeNum(:)
    !! column node number
    INTEGER(I4B), INTENT(IN) :: ivar
    !!
    INTEGER(I4B), INTENT(IN) :: jvar
    !!
    INTEGER(I4B), INTENT(IN) :: ispacecompo
    INTEGER(I4B), INTENT(IN) :: itimecompo(:)
    INTEGER(I4B), INTENT(IN) :: jspacecompo
    INTEGER(I4B), INTENT(IN) :: jtimecompo(:)
    REAL(DFP), INTENT(IN) :: VALUE
    !! scalar value to be add
    REAL(DFP), INTENT(IN) :: scale
  END SUBROUTINE add
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 15

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE add(obj, iNodeNum, jNodeNum, ivar,  &
    & jvar, ispacecompo, itimecompo, jspacecompo, jtimecompo, VALUE, scale)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum(:)
    !! row node number
    INTEGER(I4B), INTENT(IN) :: jNodeNum(:)
    !! column node number
    INTEGER(I4B), INTENT(IN) :: ivar
    !!
    INTEGER(I4B), INTENT(IN) :: jvar
    !!
    INTEGER(I4B), INTENT(IN) :: ispacecompo(:)
    INTEGER(I4B), INTENT(IN) :: itimecompo
    INTEGER(I4B), INTENT(IN) :: jspacecompo(:)
    INTEGER(I4B), INTENT(IN) :: jtimecompo
    REAL(DFP), INTENT(IN) :: VALUE
    !! scalar value to be add
    REAL(DFP), INTENT(IN) :: scale
  END SUBROUTINE add
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
