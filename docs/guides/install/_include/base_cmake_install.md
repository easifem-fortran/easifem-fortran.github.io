import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

EASIFEM uses CMake build system. To manually install `easifem` from the source we need to perform following tasks.

1. Download the source code from git repository.
2. Configuration the project by using CMake.
3. Build by using CMake.
4. Install by using CMake.

<span class="badge badge--warning"> Step 1: </span>

Download the source code from git repository by using **one of the methods**:

<Tabs>
<TabItem value="1" label="Git+https">

```bash
git clone https://github.com/vickysharma0812/easifem-base.git base
```

</TabItem>

<TabItem value="2" label="Git+ssh">

```bash
git clone git@github.com:vickysharma0812/easifem-base.git base
```

</TabItem>

<TabItem value="3" label="GitHub CLI">

```bash
gh repo clone vickysharma0812/easifem-base base
```

</TabItem>

<TabItem value="close" label="↢">

</TabItem>
</Tabs>

<span class="badge badge--warning"> Step 2: </span>

After downloading the source code, enter the source directory 📁, and make a build directory.

```bash
cd base
mkdir ./build
```

To configure the `easifemBase` library you can define following variables:

| Variable               | Type     | Options            | Default | 
| --------------------   | ------   | ------------------ | ------- |
| `USE_OpenMP`           | `BOOL`   | `ON`, `OFF`        | `ON` |
| `CMAKE_BUILD_TYPE`     | `STRING` | `Release`, `Debug` | `Release` |
| `BUILD_SHARED_LIBS`    | `BOOL`   | `ON`, `OFF`        | `ON` |
| `USE_PLPLOT`           | `BOOL`   | `ON`, `OFF`        | `ON` |
| `CMAKE_INSTALL_PREFIX` | `PATH`   | Please specify     | `$EASIFEM_BASE` |
| `USE_BLAS95`           | `BOOL`   | `ON`, `OFF`        | `ON` |
| `USE_LAPACK95`         | `BOOL`   | `ON`, `OFF`        | `ON` |
| `USE_FFTW`             | `BOOL`   | `ON`, `OFF`        | `ON` |
| `USE_GTK`              | `BOOL`   | `ON`, `OFF`        | `OFF` |
| `USE_ARPACK`           | `BOOL`   | `ON`, `OFF`        | `ON` |
| `USE_SUPERLU`          | `BOOL`   | `ON`, `OFF`        | `ON` |
| `USE_LIS`              | `BOOL`   | `ON`, `OFF`        | `ON` |
| `USE_PARPACK`          | `BOOL`   | `ON`, `OFF`        | `OFF` |
| `USE_METIS`            | `BOOL`   | `ON`, `OFF`*       | `OFF` |
| `USE_Int32`            | `BOOL`   | `ON`, `OFF`        | `ON` |
| `USE_Real64`           | `BOOL`   | `ON`, `OFF`        | `ON` |

<details>
<summary>Click here to know about the configuration options 📚</summary>
<div>

<Tabs>
<TabItem value="1" label="USE_OpenMP">

- `USE_OpenMP` if set to `ON`, the `easifemBase` library is built with `OpenMP` with shared memory parallelization. 
- The default value is `ON` 
- You can set this option by using `--D USE_OpenMP:BOOL=ON`.

</TabItem>

<TabItem value="2" label="CMAKE_BUILD_TYPE">

- If `CMAKE_BUILD_TYPE` is set to `Release`, then highly optimized version of `easifemBase` is built without any debugging facility.
- If `CMAKE_BUILD_TYPE` is set to `Debug`, then some optimization is removed to allow debugging. 
- The default value is `Release` 
- You can set this option by using `--D CMAKE_BUILD_TYPE:STRING=Release`.

</TabItem>

<TabItem value="3" label="BUILD_SHARED_LIBS">

- If `BUILD_SHARED_LIBS` is set to `ON`, then position independent code (PIC) shared library will be built. Otherwise, a static library will be built.
- The default value is `ON` 
- You can set this option by using `--D BUILD_SHARED_LIBS:BOOL=ON`.

</TabItem>

<TabItem value="4" label="USE_PLPLOT">

- If `USE_PLPLOT` is set to `ON`, then `PlPlot` library will be used for plotting figures. If you have set this option to `ON` then make sure you have downloaded `PlPlot` library while [building system requirements](./install-system-requirements). 
- In case `USE_PlPLOT` is set to `OFF`, then `PlPlot` library will not be used for plotting figures. In this case, plotting may not be possible from `easifem` library.
- The default value is `ON` 
- You can set this option by using `--D USE_PLPLOT:BOOL=ON`.

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

<Tabs>
<TabItem value="1" label="CMAKE_INSTALL_PREFIX">

- `CMAKE_INSTALL_PREFIX` is a `PATH` option, which specifies the location of file system where `easifemBase` library will be installed. If you have set the environment variables correctly then you can specify it to `$EASIFEM_BASE`, which is given by `$EASIFEM_INSTALL_DIR/easifem/base/`  
- You can set this option by using `--D CMAKE_INSTALL_PREFIX:PATH=$EASIFEM_BASE`.

</TabItem>

<TabItem value="2" label="USE_BLAS95">

- If `USE_BLAS95` is set to `ON`, then FORTRAN-95 interface to `BLAS` library will be used. In external packages if you have installed `BLAS95` library, then you can set this option to `ON`, otherwise set it to `OFF`.
- The default value is `ON` 
- You can set this option by using `--D USE_BLAS95:BOOL=ON`.

</TabItem>

<TabItem value="3" label="USE_LAPACK95">

- If `USE_LAPACK95` is set to `ON`, then FORTRAN-95 interface to `LAPACK` library will be used. In external packages if you have installed `LAPACK95` library, then you can set this option to `ON`, otherwise set it to `OFF`.
- The default value is `ON` 
- You can set this option by using `--D USE_LAPACK95:BOOL=ON`.

</TabItem>

<TabItem value="4" label="USE_FFTW">

- If `USE_FFTW` is set to `ON`, then `FFTW` library will be used for Fast Fourier Transform. `FFTW` stands for Fast Fourier Library in the West. In external packages if you have installed `FFTW` library, then you can set this option to `ON`, otherwise set it to `OFF`.
- The default value is `ON` 
- You can set this option by using `--D USE_FFTW:BOOL=ON`.

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

<Tabs>
<TabItem value="1" label="USE_GTK">

- If `USE_GTK` is set to `ON`, then `GTK` library will be used for making Graphic User Interfaces. In external packages if you have installed `gtk4` library, then you can set this option to `ON`, otherwise set it to `OFF`.
- The default value is `OFF` 
- You can set this option by using `--D USE_GTK:BOOL=OFF`.

</TabItem>

<TabItem value="2" label="USE_ARPACK">

- If `USE_ARPACK` is set to `ON`, then `ARPACK` library will be used for computing eigenvalues and eigenvectors of sparse matrices. In external packages if you have installed `arpack` library, then you can set this option to `ON`, otherwise set it to `OFF`.
- The default value is `ON` 
- You can set this option by using `--D USE_ARPACK:BOOL=ON`.

</TabItem>

<TabItem value="3" label="USE_SUPERLU">

- If `USE_SUPERLU` is set to `ON`, then `superlu` library will be used for linear solver. In external packages if you have installed `superlu` library, then you can set this option to `ON`, otherwise set it to `OFF`.
- The default value is `ON` 
- You can set this option by using `--D USE_SUPERLU:BOOL=ON`.

</TabItem>

<TabItem value="4" label="USE_LIS">

- If `USE_LIS` is set to `ON`, then `LIS` library will be used for solving system of linear equations by using iterative methods. In external packages if you have installed `lis` library, then you can set this option to `ON`, otherwise set it to `OFF`.
- The default value is `ON` 
- You can set this option by using `--D USE_LIS:BOOL=ON`.

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

<Tabs>
<TabItem value="1" label="USE_PARPACK">

- If `USE_PARPACK` is set to `ON`, then parallel `ARPACK` library called `PARPACK` will be used for computing the eigenvalues and eigenvectors of large sparse matrices. In external packages if you have installed `parpack` library, then you can set this option to `ON`, otherwise set it to `OFF`.
- The default value is `OFF` 
- You can set this option by using `--D USE_PARPACK:BOOL=OFF`.

</TabItem>

<TabItem value="2" label="USE_METIS">

- If `USE_METIS` is set to `ON`, then `METIS` library will be used for graph partitioning. In external packages if you have installed `metis` library, then you can set this option to `ON`, otherwise set it to `OFF`.
- The default value is `OFF` 
- You can set this option by using `--D USE_METIS:BOOL=OFF`.

</TabItem>

<TabItem value="3" label="USE_SUPERLU">

- If `USE_SUPERLU` is set to `ON`, then `superlu` library will be used for linear solver. In external packages if you have installed `superlu` library, then you can set this option to `ON`, otherwise set it to `OFF`.
- The default value is `ON` 
- You can set this option by using `--D USE_SUPERLU:BOOL=ON`.

</TabItem>

<TabItem value="4" label="USE_Int32">

- If `USE_Int32` is set to `ON`, then 32-bit integer numbers will be used as default integers. Please do not set this to `OFF`.
- The default value is `ON` 
- You can set this option by using `--D USE_Int32:BOOL=ON`.

</TabItem>

<TabItem value="5" label="USE_Real64">

- If `USE_Real64` is set to `ON`, then 64-bit real numbers will be used as default real numbers. Please do not set this to `OFF`.
- The default value is `ON` 
- You can set this option by using `--D USE_Int32:BOOL=ON`.

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

</div>
</details>

An example of configuration step is given below:

```bash
export EASIFEM_BASE=${HOME}/.local/easifem/base
cmake -G "Ninja" -S ./ -B ./build \
-D USE_OpenMP:BOOL=ON \
-D CMAKE_BUILD_TYPE:STRING=Release \
-D BUILD_SHARED_LIBS:BOOL=ON \
-D USE_PLPLOT:BOOL=ON \
-D CMAKE_INSTALL_PREFIX:PATH=${EASIFEM_BASE} \
-D USE_BLAS95:BOOL=ON \
-D USE_LAPACK95:BOOL=ON \
-D USE_FFTW:BOOL=ON \
-D USE_GTK:BOOL=OFF \
-D USE_ARPACK:BOOL=ON \
-D USE_PARPACK:BOOL=OFF \
-D USE_LIS:BOOL=ON \
-D USE_METIS:BOOL=OFF \
-D USE_Int32:BOOL=ON \
-D USE_Real64:BOOL=ON
```

<span class="badge badge--warning"> Step 3 & 4: </span>

After configuration, you can build and install the library by using:

```bash
cmake --build ./build --target --install
```
