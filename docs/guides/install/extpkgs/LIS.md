---
sidebar_position: 8
repo: https://github.com/anishida/lis.git
licenses:
  - bsd-2
  - bsd-3
  - gpl3
  - mit
tags:
  - easifemBase
  - extpkgs
---

# LIS

LIS (Library of Iterative Solvers for linear systems)
is a parallel software library for solving discretized linear equations
and eigenvalue problems that arise in the numerical solution of partial
differential equations using iterative methods.

LIS is located [here](https://github.com/anishida/lis.git).

## Build

```bash
config_opts="--prefix=${EASIFEM_EXTPKGS} --enable-omp --enable-f90 --enable-shared --enable-saamg FC=gfortran CC=gcc"
./configure ${config_opts}
make
make check
make install
make installcheck
```
