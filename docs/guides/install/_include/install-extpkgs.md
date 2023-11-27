EASIFEM depends upon the following external packages (`extpkgs`) that are not shipped with the source-code.

| Name | Description | Command  |
|:--- | :--- | :--- |
| [OpenBlas](https://www.openblas.net/) | Highly optimized BLAS | easifem install openblas |
| [SuperLU](https://github.com/xiaoyeli/superlu.git) |  Direct solution of large, sparse, nonsymmetric systems of linear equations  | easifem install superlu |
| [LIS](https://github.com/anishida/lis.git) | Linear interative solver | easifem install lis|
| [METIS](https://github.com/KarypisLab/METIS) | Mesh partitioning library | easifem install metis |
| [SCOTCH](https://gitlab.inria.fr/scotch/scotch) | Mesh partitioning library | easifem install scotch |
| [ARPACK](https://github.com/opencollab/arpack-ng) | Eigensolver for sparse matrices | easifem install arpack |
| [FFTW](https://www.fftw.org/) | Fast Fourier Transform| easifem install fftw |
| [GTK-Fortran](https://github.com/vmagnin/gtk-fortran) | Fortran bindings for GTK-4 library  | easifem install gtk-fortran |
| [LAPACK95](https://github.com/vickysharma0812/LAPACK95.git) | Fortran 95 interface for Lapack library | easifem install lapack95 |
| [Sparsekit](https://github.com/vickysharma0812/Sparsekit.git) | Fortran library for sparse matrices | easifem install sparsekit |
| [Gmsh](https://gmsh.info/) | Finite element mesh generator| easifem install gmsh |
| [Toml-f](https://github.com/toml-f/toml-f) | A TOML parser implementation for data serialization and deserialization in Fortran | easifem install toml-f|

More information about the external packages used in the EASIFEM are given [here.](/guides/install/extpkgs)

Below we provide details of installing the external packages by using EASIFEM cli.

## EASIFEM cli 

The easiest way to install the above-mentioned external packages is through `EASIFEM` command line application (cli).

- First, install the application:

```bash
python3 -m pip install --upgrade easifem
```

Then install extpkgs by using following command.

```bash
easifem install extpkgs
```

You can also install individual package by using following:

```bash
easifem install openblas superlu lis metis scotch arpack fftw gtk-fortran lapack95 sparsekit gmsh toml-f
```

- The packages will be stored at `EASIFEM_SOURCE_DIR/extpkgs/<pkg-name>`
- The packages will be built at `EASIFEM_BUILD_DIR/extpkgs/<pkg-name>`
- The packages will be installed at `EASIFEM_INSTALL_DIR/extpkgs/<pkg-name>`

