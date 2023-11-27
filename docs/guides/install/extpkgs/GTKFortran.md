---
repo: https://github.com/vmagnin/gtk-fortran
licenses:
  - gpl-3
tags:
  - easifemBase
  - extpkgs
---

# GTKFortran

[🦒 Project website](https://github.com/vmagnin/gtk-fortran).

## Config option

```bash
-D CMAKE_BUILD_TYPE=debug
-D EXCLUDE_PLPLOT=true
-D NO_BUILD_EXAMPLES=true
-D NO_BUILD_HL=true
-D INSTALL_EXAMPLES=true
```

## Build instruction for easifem

Build only ARPACK

```bash
build_dir=~/temp/easifem-extpkgs/arpack-ng/build

cmake -S ./ -B ${build_dir} -D BUILD_SHARED_LIBS:BOOL=ON -D CMAKE_BUILD_TYPE:STRING=Release

cmake --build ${build_dir} --target install
```

## Current location in easifem

```bash
/extpkgs/gtk-fortran
```

## Comment

In my experience, this program should be installed at `/usr/local/`.
