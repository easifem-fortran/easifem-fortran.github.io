---
title: easifemBase
sidebar_position: 5
---

`easifemBase` (henceforth read as Base) library is the lowest (or, base) level component of EASIFEM. All other components are built upon `easifemBase`.

It contains a lot of valuable routines and derived types. 

## Programming paradigm

The programming paradigm of `easifemBase` is [Multiple dispatch approach](https://en.wikipedia.org/wiki/Multiple_dispatch) and Procedural programming. 

:::note
The base library do not use the object-oriented programming concepts. In the Base library `String_Class` is the only exception wherein Object-oriented paradigm has been used.
:::

All user-defined data types are declared in the `BaseType` module, and all methods are exposed through `BaseMethods` modules.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Key features

Currently, easifemBase has interface with 

- `BLAS95` 
- `Lapack95` 
- `Sparsekit` 
- `Metis` 
- `PlPlot` 
- `SuperLU` 
- `ARPACK`

- [ ] TODO Add key features in `easifemBase.md`.

## Use association

```fortran
USE easifemBase
```

or

```fortran
USE BaseType
USE BaseMethods
```

## Structure

The `easifemBase` library exposes three main modules.

1. `BaseType`, which contains the user-defined data-type
2. `BaseMethods`, contains the modules (each module defines the routines for data-types defined in `BaseType.F90`.)
3. `easifemBase` 

The structure of source directory is shown in the following figure.

![](./figures/figure-2.svg)

The source directory has two directories

1. `modules`
2. `submodules`

The `modules` directory mainly contains header and interface of methods. The implementation is given in submodules directory.

:::info
Both `BaseType.F90` and `BaseMethods.F90` are included in `modules` directory.
:::

Let us understand the structure of the Base library by an example of `CSRSparsity_` data type.

1. First, we define `CSRSparsity_` in `BaseType.F90` as

<Tabs>
<TabItem value="interface" label="܀ BaseType.F90">

```fortran
TYPE :: CSRSparsity_
  INTEGER(I4B) :: nnz = 0
  INTEGER(I4B) :: ncol = 0
  INTEGER(I4B) :: nrow = 0
  LOGICAL(LGT) :: isSorted = .FALSE.
  LOGICAL(LGT) :: isInitiated = .FALSE.
  LOGICAL(LGT) :: isSparsityLock = .FALSE.
  LOGICAL(LGT) :: isDiagStored = .FALSE.
  INTEGER(I4B), ALLOCATABLE :: IA(:)
  INTEGER(I4B), ALLOCATABLE :: JA(:)
  INTEGER(I4B), ALLOCATABLE :: idiag(:)
  TYPE(IntVector_), ALLOCATABLE :: row(:)
  TYPE(DOF_) :: idof
  !! DOF for row
  TYPE(DOF_) :: jdof
  !! DOF for columns
END TYPE CSRSparsity_
```

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>

2. Then we create a directory called `CSRSparsity` in both `modules` and `submodules` directory.
3. In `modules/CSRSparsity` we create `CSRSparsity_Method.F90` file.
4. In `modules/CSRSparsity/CSRSparsity_Method.F90` we define a module `CSRSparsity_Method` (same name as file).
5. In `CSRSparsity_Method` module, we only define interface of methods. In this way, this file can be considered as header file. See, the example given below:
6. In `submodules/CSRSparsity`, we create `CSRSparsity_Method@ConstructorMethods.F90`, which contains the contruction related routines.
7. Also, we create `CSRSparsity_Method@IOMethods.F90`, which include methods related to input and output.

<Tabs>
<TabItem value="module" label="܀ CSRSparsity_Method">

```fortran
MODULE CSRSparsity_Method
USE GlobalData
USE BaseType
IMPLICIT NONE
PRIVATE

INTERFACE
  MODULE SUBROUTINE csr_initiate1(obj, ncol, nrow, idof, jdof)
    TYPE(CSRSparsity_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: ncol, nrow
    TYPE(DOF_), OPTIONAL, INTENT(IN) :: idof
    !! DOF for row
    TYPE(DOF_), OPTIONAL, INTENT(IN) :: jdof
    !! DOF for column
  END SUBROUTINE csr_initiate1
END INTERFACE

INTERFACE Initiate
  MODULE PROCEDURE csr_initiate1
END INTERFACE Initiate

INTERFACE
  MODULE SUBROUTINE csr_Display(obj, Msg, UnitNo)
    TYPE(CSRSparsity_), INTENT(IN) :: obj
    CHARACTER(*), INTENT(IN) :: Msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: UnitNo
  END SUBROUTINE csr_Display
END INTERFACE

INTERFACE Display
  MODULE PROCEDURE csr_Display
END INTERFACE Display

END MODULE CSRSparsity_Method
```

</TabItem>

<TabItem value="submodules" label="܀ ConstructorMethods.F90">

CSRSparsity_Method@ConstructorMethods.F90

```fortran
SUBMODULE(CSRSparsity_Method) ConstructorMethods
USE BaseMethod
IMPLICIT NONE
CONTAINS

MODULE PROCEDURE csr_initiate1
obj%nnz = 0
obj%ncol = ncol
obj%nrow = nrow
IF (PRESENT(idof)) THEN
  obj%idof = idof
  obj%jdof = jdof
ELSE
  CALL initiate(obj=obj%idof, tNodes=[nrow], names=['K'], &
    & spacecompo=[1], timecompo=[1], storageFMT=NODES_FMT)
  CALL initiate(obj=obj%jdof, tNodes=[ncol], names=['K'], &
    & spacecompo=[1], timecompo=[1], storageFMT=NODES_FMT)
END IF
CALL Reallocate(obj%IA, nrow + 1)
CALL Reallocate(obj%idiag, nrow)
IF (ALLOCATED(obj%row)) DEALLOCATE (obj%row)
IF (ALLOCATED(obj%JA)) DEALLOCATE (obj%JA)
obj%isInitiated = .TRUE.
obj%isSparsityLock = .FALSE.
obj%isSorted = .FALSE.
obj%isDiagStored = .FALSE.
END PROCEDURE csr_initiate1

END SUBMODULE ConstructorMethods
```

</TabItem>

<TabItem value="submodules2" label="܀ IOMethods">

CSRSparsity_Method@IOMethods.F90

```fortran
SUBMODULE(CSRSparsity_Method) IOMethods
USE BaseMethod
IMPLICIT NONE
CONTAINS

MODULE PROCEDURE csr_Display
CALL Display(Msg, unitNo=unitNo)
CALL Display(obj%nnz, "# NNZ : ", unitNo=unitNo)
CALL Display(obj%ncol, "# NCOL : ", unitNo=unitNo)
CALL Display(obj%nrow, "# NROW : ", unitNo=unitNo)
CALL Display(obj%idof, "# iDOF : ", unitNo=unitNo)
CALL Display(obj%jdof, "# jDOF : ", unitNo=unitNo)
END PROCEDURE csr_Display

END SUBMODULE IOMethods
```

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>

### BaseType

`BaseType` contains user-define data type.

import {PesterDataTable, PesterDataButton} from "@site/src/components/PesterDataTable";
import {basetype_columns, basetype_articles} from "./BaseType.table.js";

<PesterDataTable
  columns={basetype_columns}
  data={basetype_articles}
/>

### BaseMethods

`BaseMethods` library contains the modules which defines and implements methods (routines) for data types defined in `BaseType`.

At present BaseMethods contains following modules.

import {basemethods_columns, basemethods_articles} from "./BaseMethods.table.js";

<PesterDataTable
  columns={basemethods_columns}
  data={basemethods_articles}
/>

###
