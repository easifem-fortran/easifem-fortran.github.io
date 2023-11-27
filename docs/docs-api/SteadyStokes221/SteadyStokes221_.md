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
  - SteadyStokes221
---

# SteadyStokes221

## Description of Kernel

- (2) Taylor-hood mixed finite element is used. Pressure is linear and Velocity is Quadratic.
- (2) System of linear equations are solved iterative manner by using accelerated Uzawa schemes.
- (1) Constant material properties

- WeakDBC = True or False
- Multiphase = True or False

## TODO

- [ ] Body-force
- [ ] gravity
- [x] conservative and non-conservative form.
- [ ] Neumann boundary condition
- [ ] Higher order terms
- [ ] Positive and negative sign in case of HOT
- [x] boundary subscale
- [x] pressure subscale
- [ ] no-slip boundary condition
- [ ] free-slip boundary condition
- [ ] inlet boundary-condition
- [ ] outlet boundary-condition
- [ ] Add an option to calculate stabilization parameter only at the center of the element
- [ ] handle quadrature mapping in general form.
- [x] Add reference pressure node and pressure value.

## Ideas for optimization

- Constant stabilization parameter
- Better precondition for iterative solver

## Structure

`SteadyStokes221_` is a child of `AbstractSteadyStokes_` kernel.

## Methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
