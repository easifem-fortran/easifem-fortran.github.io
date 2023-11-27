---
sidebar_position: 5
repo: https://www.fftw.org/fftw-3.3.10.tar.gz
licenses:
  - gpl-3
tags:
  - easifemBase
  - extpkgs
---


# FFTW

FFTW is a C subroutine library for computing the discrete Fourier transform (DFT) in one or more dimensions, of arbitrary input size, and of both real and complex data (as well as of even/odd data, that is, the discrete cosine/sine transforms or DCT/DST).

The FFTW package was developed at MIT by Matteo Frigo and Steven G. Johnson.

FFTW can be downloaded from [official website](https://www.fftw.org/fftw-3.3.10.tar.gz)

## Build

```bash
url="https://www.fftw.org/fftw-3.3.10.tar.gz"
curl ${url} -L -o fftw.tar.gz
gunzip fftw.tar.gz
tar -xvf fftw.tar
cd "$pkg_dir/${pkg_name}-3.3.10"

./configure --prefix=${EASIFEM_EXTPKGS} --enable-openmp
make
make install
```
