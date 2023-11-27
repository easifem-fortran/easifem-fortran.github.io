import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

EASIFEM uses CMake build system. To manually install `easifem` from the source we need to perform following tasks.

1. Download the source code from git repository.
2. Configuration the project by using CMake.
3. Build by using CMake.
4. Install by using CMake.

<span class="badge badge--warning"> Step 1: </span>

<Tabs>
<TabItem value="1" label="Git+https">

```bash
git clone https://github.com/vickysharma0812/easifem-classes.git classes
```

</TabItem>

<TabItem value="2" label="Git+ssh">

```bash
git clone git@github.com:vickysharma0812/easifem-classes.git classes
```

</TabItem>

<TabItem value="3" label="GitHub CLI">

```bash
gh repo clone vickysharma0812/easifem-classes classes
```

</TabItem>

<TabItem value="close" label="↢">

</TabItem>
</Tabs>

<span class="badge badge--warning"> Step 2: </span>

After downloading the source code, enter the source directory 📁, and make a build directory.

```bash
cd classes
mkdir ./build
```

To configure the `easifemClasses` library you can define following variables:

| Variable               | Type     | Options            | Default            |
| ---------------------- | -------- | ------------------ | ------------------ |
| `USE_OpenMP`           | `BOOL`   | `ON`, `OFF`        | `ON`               |
| `CMAKE_BUILD_TYPE`     | `STRING` | `Release`, `Debug` | `Release`          |
| `BUILD_SHARED_LIBS`    | `BOOL`   | `ON`, `OFF`        | `ON`               |
| `CMAKE_INSTALL_PREFIX` | `PATH`   | Please specify     | `$EASIFEM_CLASSES` |
| `USE_GMSH_SDK`         | `BOOL`   | `ON`, `OFF`        | `OFF`              |

<details>
<summary>Click here to know about the configuration options 📚</summary>
<div>

<Tabs>
<TabItem value="1" label="USE_OpenMP">

- `USE_OpenMP` if set to `ON`, the `easifemClasses` library is built with `OpenMP` with shared memory parallelization.
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

<TabItem value="4" label="CMAKE_INSTALL_PREFIX">

- `CMAKE_INSTALL_PREFIX` is a `PATH` option, which specifies the location of file system where `easifemBase` library will be installed. If you have set the environment variables correctly then you can specify it to `$EASIFEM_BASE`, which is given by `$EASIFEM_INSTALL_DIR/easifem/base/`
- You can set this option by using `--D CMAKE_INSTALL_PREFIX:PATH=$EASIFEM_BASE`.

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

</div>
</details>

An example of configuration step is given below:

```bash
export EASIFEM_CLASSES=${HOME}/.local/easifem/classes
cmake -G "Ninja" -S ./ -B ./build \
-D USE_OpenMP:BOOL=ON \
-D CMAKE_BUILD_TYPE:STRING=Release \
-D BUILD_SHARED_LIBS:BOOL=ON \
-D CMAKE_INSTALL_PREFIX:PATH=${EASIFEM_CLASSES} \
-D USE_GMSH_SDK:BOOL=OFF
```

<span class="badge badge--warning"> Step 3 & 4: </span>

After configuration, you can build and install the library by using:

```bash
cmake --build ./build --target --install
```

