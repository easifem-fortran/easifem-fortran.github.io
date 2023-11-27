---
sidebar_position: 4
repo: https://github.com/vickysharma0812/Sparsekit.git
licenses:
  - lgpl-3
tags:
  - easifemBase
  - extpkgs
---

# Sparsekit

Sparsekit is a legacy fortran code written by the great [Yusef Saad](https://en.wikipedia.org/wiki/Yousef_Saad) for peforming linear algebra with sparse matrices. The original code is located [here.](https://www-users.cs.umn.edu/~saad/software/SPARSKIT/) 🔗 💡

EASIFEM uses the forked library which is located at the [gitHub.](https://github.com/vickysharma0812/Sparsekit.git)

## Build

### CMake

Following options are defined:

| Option | Value | Default |
| :--- | :---: | ---: |
| `-DCMAKE_BUILD_TYPE=`| `Release` or `Debug` for release or debug build-type | `Release` |
| `BUILD_SHARED_LIBS=` | `ON` or `OFF` to build shared or static library | `ON` |
| `-DCMAKE_INSTALL_PREFIX=` | The location of the installation directory | `${EASIFEM_EXTPKGS}` |

```sh
git clone https://github.com/vickysharma0812/Sparsekit.git
cd Sparsekit
cmake -DCMAKE_BUILD_TYPE=Release -DBUILD_SHARED_LIBS=ON -DCMAKE_INSTALL_PREFIX=${EASIFEM_EXTPKGS} -S ./ -B ./build
cmake --build ./build --target install
```

### Python

You can install Sparsekit by using Python. It is simple, interactive, and straight-forward.

```sh
git clone https://github.com/vickysharma0812/Sparsekit.git
cd Sparsekit
python3 install.py
```
