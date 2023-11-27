---
title: PLPlot Installation
---

# PLPlot Installation

## Installation of binary packages

Ubuntu 🍻

```bash
sudo apt-get install libplplot-dev libplplotfortran0
```


MacOS 🍎

```bash
brew install plplot
```


## Building from source

### Download the source code

```bash
git clone https://git.code.sf.net/p/plplot/plplot plplot-plplot
```

I have also installed some extra libraries, which are given below.

- `libcairo-dev`
- `libglu1-mesa-dev`
- `freeglut3-dev`
- `mesa-common-dev`
- `pyqt5`
- `pyqt5-tools`

```bash
sudo apt install libcairo-dev libglu1-mesa-dev freeglut3-dev mesa-common-dev
pip3 install pyqt5 pyqt5-tools
```

### Building 🪛

After downloading the source code, run the following command inside of terminal

```bash
cd plplot-plplot
git branch $(whoami)
git checkout $(whoami)
```

We will use `-DCMAKE_INSTALL_PREFIX` to specify the director wherein `PLplot` will be installed.


```sh
cmake -S ./ -B ./build DCMAKE_INSTALL_PREFIX=~/.easifem/extpkgs  -G "Unix Makefiles"
cmake --build ./build --target all
cmake --build ./build --target install
```

**My Configuration:** In my case, I want to install `PLplot` in `~/.easifem/extpkgs`. I have already set an environment variable `export EASIFEM_EXTPKGS=~/.easifem/extpkgs`, so I will use `${EASIFEM_EXTPKGS}`, but you can specify the path explicitly.

- `-DCMAKE_INSTALL_PREFIX:PATH=~/.easifem/extpkgs`
- `-DCMAKE_BUILD_TYPE:STRING=Release`, other option is `Debug`
- `-DBUILD_SHARED_LIBS:BOOL=ON`, set `OFF` if shared lib are not desired
- `-DBUILD_TEST:BOOL=ON`, set `OFF` you dont want to build the tests
-  `-DENABLE_fortran:BOOL=ON`, set `OFF`, if you dont want fortran bindings
-  `-DENABLE_lua:BOOL=ON`, set `OFF` if you do not want Lua language bindings

```sh
cmake -S ./ -B ~/temp/easifem-extpkgs/plplot/build -G "Unix Makefiles"  -DCMAKE_INSTALL_PREFIX=${EASIFEM_EXTPKGS} -DCMAKE_BUILD_TYPE:STRING=Release -DBUILD_SHARED_LIBS:BOOL=ON  -DBUILD_TEST:BOOL=ON -DENABLE_fortran:BOOL=ON -DENABLE_lua:BOOL=ON

cmake --build ~/temp/easifem-extpkgs/plplot/build --target all
```

Now you can go to `$EASIFEM_EXTPKGS`

```sh
├── bin
├── include/plplot
├── lib
├── man
└── share
```

Contents of `/bin` is shown below

```sh
/bin
├── plserver
├── pltcl
└── pltek
```

Contents of `/include/plplot` 📁

```sh
├── csadll.h
├── csa.h
├── disptab.h
├── drivers.h
├── pdf.h
├── plConfig.h
├── pldebug.h
├── plDevs.h
├── pldll.h
├── plevent.h
├── plplot.h
├── plplotP.h
├── plstream.h
├── plstrm.h
├── pltcl.h
├── pltk.h
├── plxwd.h
├── qsastimedll.h
├── qsastime.h
├── qt.h
└── tclMatrix.h
```

Contents of `/lib` 📁

```sh
├── cmake
├── fortran
├── libcsirocsa.so -> libcsirocsa.so.0
├── libcsirocsa.so.0 -> libcsirocsa.so.0.0.1
├── libcsirocsa.so.0.0.1
├── libplfortrandemolib.a
├── libplplotcxx.so -> libplplotcxx.so.15
├── libplplotcxx.so.15 -> libplplotcxx.so.15.0.0
├── libplplotcxx.so.15.0.0
├── libplplotfortran.so -> libplplotfortran.so.0
├── libplplotfortran.so.0 -> libplplotfortran.so.0.2.0
├── libplplotfortran.so.0.2.0
├── libplplotqt.so -> libplplotqt.so.2
├── libplplotqt.so.2 -> libplplotqt.so.2.0.3
├── libplplotqt.so.2.0.3
├── libplplot.so -> libplplot.so.17
├── libplplot.so.17 -> libplplot.so.17.0.0
├── libplplot.so.17.0.0
├── libplplottcltk_Main.so -> libplplottcltk_Main.so.1
├── libplplottcltk_Main.so.1 -> libplplottcltk_Main.so.1.0.1
├── libplplottcltk_Main.so.1.0.1
├── libplplottcltk.so -> libplplottcltk.so.14
├── libplplottcltk.so.14 -> libplplottcltk.so.14.1.0
├── libplplottcltk.so.14.1.0
├── libqsastime.so -> libqsastime.so.0
├── libqsastime.so.0 -> libqsastime.so.0.0.1
├── libqsastime.so.0.0.1
├── libtclmatrix.so -> libtclmatrix.so.10
├── libtclmatrix.so.10 -> libtclmatrix.so.10.3.0
├── libtclmatrix.so.10.3.0
├── pkgconfig
└── plplot5.15.0
-plplot5.15.0
└── drivers
    ├── mem.driver_info
    ├── mem.so
    ├── ntk.driver_info
    ├── ntk.so
    ├── null.driver_info
    ├── null.so
    ├── ps.driver_info
    ├── ps.so
    ├── qt.driver_info
    ├── qt.so
    ├── svg.driver_info
    ├── svg.so
    ├── tk.driver_info
    ├── tk.so
    ├── tkwin.driver_info
    ├── tkwin.so
    ├── xfig.driver_info
    ├── xfig.so
    ├── xwin.driver_info
    └── xwin.so
```

The `lib/cmake` directory contains files necessary for using PLplot with CMake. The contents of this directory are given below.

```sh
├── export_csirocsa.cmake
├── export_csirocsa-release.cmake
├── export_mem.cmake
├── export_mem-release.cmake
├── export_ntk.cmake
├── export_ntk-release.cmake
├── export_null.cmake
├── export_null-release.cmake
├── export_plfortrandemolib.cmake
├── export_plfortrandemolib-release.cmake
├── export_plplot.cmake
├── export_plplotcxx.cmake
├── export_plplotcxx-release.cmake
├── export_plplotfortran.cmake
├── export_plplotfortran-release.cmake
├── export_plplotqt.cmake
├── export_plplotqt-release.cmake
├── export_plplot-release.cmake
├── export_plplottcltk.cmake
├── export_plplottcltk_Main.cmake
├── export_plplottcltk_Main-release.cmake
├── export_plplottcltk-release.cmake
├── export_plserver.cmake
├── export_plserver-release.cmake
├── export_pltcl.cmake
├── export_pltcl-release.cmake
├── export_pltek.cmake
├── export_pltek-release.cmake
├── export_ps.cmake
├── export_ps-release.cmake
├── export_qsastime.cmake
├── export_qsastime-release.cmake
├── export_qt.cmake
├── export_qt-release.cmake
├── export_svg.cmake
├── export_svg-release.cmake
├── export_tclmatrix.cmake
├── export_tclmatrix-release.cmake
├── export_tk.cmake
├── export_tk-release.cmake
├── export_tkwin.cmake
├── export_tkwin-release.cmake
├── export_xfig.cmake
├── export_xfig-release.cmake
├── export_xwin.cmake
├── export_xwin-release.cmake
├── plplotConfig.cmake
├── plplotConfigVersion.cmake
└── plplot_exports.cmake
```

The `lib/pkgconfig` directory contains files necessary for finding PLplot using pkgconfig in CMake projects. The contents of this directory are given below.

```sh
├── plplot-c++.pc
├── plplot-fortran.pc
├── plplot.pc
├── plplot-qt.pc
├── plplot-tcl_Main.pc
└── plplot-tcl.pc
```

The `lib/fortran/modules/plplot` directory contains Fortran module files as shown below.

```sh
├── plfortrandemolib.mod
├── plplot_double.mod
├── plplot_graphics.mod
├── plplot.mod
├── plplot_private_exposed.mod
├── plplot_private_utilities.mod
├── plplot_single.mod
└── plplot_types.mod
```

After a successful build open your `.bashrc` or `.zshrc` and add following lines to it

```sh
export PKG_CONFIG_PATH="${PKG_CONFIG_PATH}:${EASIFEM_EXTPKGS}/lib/pkgconfig"
```

Note: You have to replace `${EASIFEM}` with the PLplot installation path.

Subsequently, run the following command inside terminal.

```sh
source ~/.bashrc #if bash if default SHELL
```

or

```sh
source ~/.zshrc #if ZSH is default
```

## Running examples

Create a directory `test` 📁

```sh
mkdir test
cd test
curl -o PLplot_example_1.F90 https://api.cacher.io/raw/ae828dbdfa2aebf3af0a/403d8f4836d78bddc387/PLplot_example_1.F90
curl -o CMakeLists.txt https://api.cacher.io/raw/3ca8ef3a43180dba7f35/cbb8263d9026e996d6ca/PLplot_CMakeLists.txt
cmake -B ./build -DFILE_NAME:STRING="PLplot_example_1.F90"
cmake --build ./build
./build/test
```

The content of CMakeLists.txt is given below

```cmake
CMAKE_MINIMUM_REQUIRED(VERSION 3.20.0 FATAL_ERROR)
SET(PROJECT_NAME "plplot")
PROJECT(${PROJECT_NAME})
ENABLE_LANGUAGE(Fortran C)
SET(TARGET_NAME "test")

SET(PLplot_INCLUDE_DIR "$ENV{EASIFEM_EXTPKGS}/lib/fortran/modules/plplot" )
SET(PLplot_LIBRARY "$ENV{EASIFEM_EXTPKGS}/lib/libplplot.so" )
SET(PLplot_Fortran_LIBRARY "$ENV{EASIFEM_EXTPKGS}/lib/libplplotfortran.so" )
OPTION(FILE_NAME "File name")
ADD_EXECUTABLE(${TARGET_NAME} ${FILE_NAME})

TARGET_LINK_LIBRARIES(
  ${TARGET_NAME}
  ${PLplot_LIBRARY}
  ${PLplot_Fortran_LIBRARY} )

TARGET_INCLUDE_DIRECTORIES( ${TARGET_NAME} PRIVATE ${PLplot_INCLUDE_DIR} )
```
