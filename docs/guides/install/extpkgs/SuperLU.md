---
sidebar_position: 6
repo: https://www.fftw.org/fftw-3.3.10.tar.gz
licenses:
  - gpl-3
tags:
  - easifemBase
  - extpkgs
---

# SuperLU

SuperLU contains a set of subroutines to solve a sparse linear system `A*X=B`. It uses Gaussian elimination with partial pivoting (GEPP).

SuperFFTW can be downloaded from [official website](https://github.com/xiaoyeli/superlu)

## Build

```bash
url="https://github.com/xiaoyeli/superlu.git"
git clone ${url} ${pkg_dir}/${pkg_name}
cd superlu

build_dir=$HOME/temp/easifem-extpkgs/superlu/build/
cmake_def="-D CMAKE_INSTALL_PREFIX=${EASIFEM_EXTPKGS} -D BUILD_SHARED_LIBS:BOOL=ON -D CMAKE_BUILD_TYPE=Release"

cmake -S . -B $build_dir ${cmake_def}
cmake -B $build_dir
cmake --build $build_dir --target install
```
