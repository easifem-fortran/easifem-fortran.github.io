---
sidebar_position: 6
---

# easifemClasses

The `easifemClasses` (henceforth, the Classes) library, forms the second level of EASIFEM library.
This library contains many useful high-level objects, which are important for implementing FEM.
The main programming paradigm of Classes library is object-oriented programming.

## Use association

```fortran
USE easifemClasses
```

## Key features

## Structure

- [ ] TODO add key-features to ` easifemClasses`

Similar to the Base library, the `Classes` library has two directories in the `src` directory:

1. modules
2. `submodules`

The `modules` directory mainly contains following items:

1. Type definition including methods
2. Header and interface of methods

The 📁`submodules` directory contains the implementation of the methods that are defined in the `modules` directory.

- In addition, each class has its own subdirectory in the `modules` and `submodules` directory.
- For example, the directory of `Domain_` class is `Domain`, the directory of `Mesh_` class is `Mesh`.
- In this way, `modules/Domain` will define the `Domain_` class and interface of methods, whereas `submodules/Domain` will include the submodules that implementes the methods defined inside modules.
- The name of the module which defines `Domain_` class is `Domain_Classs`, and it is included in the file called `Domain_Class.F90`.
- The submodule, which defines methods (for example, constructor methods) will be included in `Domain_Class@ConstructorMethods.F90`, `Domain_Class@IOMethods`, etc.

:::info
If you want to implement a class called `XXX_`, then perform following task:

1. Make a subdirectory `XXX` in `src/modules` and `src/submodules`
2. In both `XXX` make a subdirectory `XXX/src`
3. Create a file `modules/XXX/src/XXX_Class.F90` and define a module called `XXX_Class`:
4. Create submodules  in `submodule/XXX/src/XXX_Class@CategoryofMethods.F90` and implement the methods.

```fortran
MODULE XXX_Class
!! Use modules
PRIVATE
!!  Define class here
END MODULE XXX_Class 
```

:::

## Modules

`easifemClasses` currently contains following modules:

import {PesterDataTable, PesterDataButton} from "@site/src/components/PesterDataTable";
import {easifemClasses_columns, easifemClasses_articles} from "./easifemClasses.table.js";

<PesterDataTable
  columns={easifemClasses_columns}
  data={easifemClasses_articles}
/>
