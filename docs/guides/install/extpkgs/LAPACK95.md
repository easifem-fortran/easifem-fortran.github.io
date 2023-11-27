---
sidebar_position: 3
repo: https://github.com/vickysharma0812/LAPACK95 
licenses:
  - lgpl-3
tags:
  - easifemBase
  - extpkgs
---

# LAPACK95

LAPACK95 is a Fortran-95 (modern-fortran) interface to LAPACK. The repository is located [here](https://github.com/vickysharma0812/LAPACK95), which is a fork of  [scivision's Lapack95 library](https://github.com/scivision/LAPACK95).

:::note
The reason of this forked version is to facilitate the building of LAPACK95 by using CMake (and Meson) build system.
This repository is forked mainly for easing the integration of Lapack95 with EASIFEM. If you are not using EASIFEM, then I would recommend you to use the scivision's library.
:::

:::info

- The HTML version of the LAPACK95 Users' Guide is now available, [here](http://www.netlib.org/lapack95/lug95/) 🔗 💡
- Index of LAPACK95 routines is [here](http://www.netlib.org/lapack95/L90index/L90index.html) 🔗 💡

:::

## Build

- The build process produces library called `liblapack95` and modules. The archive library can be shared or static.
- The library is build for single and double precision.
- Complex data type is not included.

### CMake

Following options are defined:

| Option | Value | Default |
| :--- | :---: | ---: |
| `-DUSE_OPENMP=`| `ON` and `OFF` to enable and disable openmp | `ON` |
| `-DCMAKE_BUILD_TYPE=`| `Release` or `Debug` for release or debug build-type | `Release` |
| `BUILD_SHARED_LIBS=` | `ON` or `OFF` to build shared or static library | `ON` |
| `-DCMAKE_INSTALL_PREFIX=` | The location of the installation directory | `${EASIFEM_EXTPKGS}` |

```sh
git clone https://github.com/vickysharma0812/LAPACK95.git
cd LAPACK95
cmake -DUSE_OPENMP=ON -DCMAKE_BUILD_TYPE=Release -DBUILD_SHARED_LIBS=ON -DCMAKE_INSTALL_PREFIX=${EASIFEM_EXTPKGS} -S ./ -B ./build
cmake --build ./build --target install
```

### Python

You can install LAPACK95 by using Python. It is simple, interactive, and straight-forward.

```sh
git clone https://github.com/vickysharma0812/LAPACK95.git
cd LAPACK95
python3 install.py
```

## Examples

```fortran
! Double precision
use la_precision, only: wp => dp
use f95_lapack, only: la_gesv

real(wp) :: A(3,3), b(3)

call random_number(A)
b(:) = 3*A(:,1) + 2*A(:,2) - A(:,3)

! Solve Ax=b, overwrite b with solution
call la_gesv(A,b)

print *, b
end program

! Output (exact: 3 2 -1):
! 2.9999999999999978        2.0000000000000018       -1.0000000000000004
```
