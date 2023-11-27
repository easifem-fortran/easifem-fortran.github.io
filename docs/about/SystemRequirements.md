---
sidebar_position: 2
---

# System requirements

EASIFEM requires following software packages to be installed on the system.

import Drawio from '@theme/Drawio'
import simpleGraph from '!!raw-loader!/img/drawio/easifem-system-requirements.drawio';

<Drawio content={simpleGraph} page={1} />

| Component | Version | Latest tested version | Comment |
|:--- | :---: | :---: | :--- |
| **Gfortran**| >=9.0 | 12.0  | GNU Fortran compiler |
| **GCC**| >=9.0 | 12.0 | GNU-compiler collection|
| **OpenMP**| >= 4.5 |  | Multithread shared memory parallelisation|
| **Curl**| >=7.87 | 7.87 | A command-line utility for transferring data from or to a remote server|
| **Git**| >=2.34 | 2.34.1 | A version control system and command-line utility for downloading packages from GitHub |
| **Cmake** | >=3.19 | 3.22.4 | Cross-platform family of tools designed to build, test and package software |
| **Ninja-build** | >=1.10 | 1.11.0 | Build system |
| **Python3** | >=3.7 | 3.11.0 | Scripting language |
| **Pip** | >=20 | 23.1.0 | Command line tool for downloading python packages |
| **LAPACK** | >=3.11.0 | 3.11.0 | Linear algebra package |
| **OpenBlas** | >= 0.3.20| 0.3.30 | Optimize BLAS library |
| **HDF5** | >=1.10  | 1.10.7 | High-performance data software-library and file-format |
| **PlPlot** | >=5.15.0 | 5.15.0 | Cross-platform, scientific graphics plotting library |
| **Boost** | | | |
| **Gnuplot** | >=5.0 | 5.4 | Portable command-line driven graphing utility |
| **Doxygen** | >=1.9.1 | 1.9.1 | documentation generation |
| **GTK-4** |  | | n |

You can use following instructions to satisfy the above-mentioned requirements depending upon your system.

