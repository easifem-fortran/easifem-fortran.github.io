---
sidebar_position: 1
date:  2023-01-29 
update: 2023-01-29  
status: stable  
docs: done
extpkgs: none 
category:
  - Kernel
tags:
  - kernel
  - SteadyStokes111
---

# SteadyStokes111

## Description of Kernel

- (1) Equal order interpolation for velocity and pressure field
- (1) Coupled linear system (dof=[u, p])
- (1) Constant material properties

Variational multiscale stabilization method is used, and following options are allowed

- SubscalePressure = True or False
- BoundarySubscale = True or False
- WeakDBC = True or False
- Multiphase = True or False

## TODO

- [ ] Body-force
- [ ] gravity
- [x] conservative and non-conservative form.
- [ ] Neumann boundary condition
- [ ] higher order terms
- [ ] Positive and negative sign in case of HOT
- [x] boundary subscale
- [x] pressure subscale
- [ ] no-slip boundary condition
- [ ] free-slip boundary condition
- [ ] inlet boundary condition
- [ ] outlet boundary-condition
- [ ] add an option to calculate stabilization parameter only at the center of the element
- [ ] handle quadrature mapping in general form
- [x] Add reference pressure node and pressure value.

## Ideas for optimization

- Constant stabilization parameter
- Better precondition for iterative solver

## Methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
