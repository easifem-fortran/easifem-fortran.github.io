---
sidebar_position: 7
repo: https://github.com/vickysharma0812/arpack-ng
licenses:
  - none
tags:
  - easifemBase
  - extpkgs
---

# ARPACK

ARPACK-NG is a collection of Fortran77 subroutines designed to solve large scale eigenvalue problems.

- [Project website](https://github.com/opencollab/arpack-ng)
- Cmake build: YES

## Config option

Only ARPACK

```bash
-D USE_ARPACK:BOOL=ON
```

Both APRACK and PARPACK

```bash
-D USE_ARPACK:BOOL=ON -D USE_PARPACK:BOOL=ON
```

## Build instruction for easifem

Build only ARPACK

```bash
build_dir=$HOME/temp/easifem-extpkgs/arpack-ng/build/
cmake_def="-D CMAKE_INSTALL_PREFIX:PATH=${EASIFEM_EXTPKGS} -D BUILD_SHARED_LIBS:BOOL=ON -D CMAKE_BUILD_TYPE:STRING=Release -D MPI:BOOL=OFF"

cmake -S . -B ${build_dir} ${cmake_def}
cmake -B ${build_dir}
cmake --build ${build_dir} --target install
```

Build both ARPACK and PARPACK

```bash
build_dir=~/temp/easifem-extpkgs/arpack-ng/build

cmake -S ./ -B ${build_dir} -D CMAKE_INSTALL_PREFIX:PATH=${EASIFEM_EXTPKGS} -D BUILD_SHARED_LIBS:BOOL=ON -D MPI:BOOL=ON -D CMAKE_BUILD_TYPE:STRING=Release

cmake --build ${build_dir} --target install
```

## Current location in easifem

```bash
/extpkgs/arpack-ng
```
