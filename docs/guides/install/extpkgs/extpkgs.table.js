import React from "react";

// ----------------------------------------------------------------------------
// Please respect chronological (date) order when adding new entries.
// ----------------------------------------------------------------------------
export const data = [
  {
    title: "OpenBLAS",
    description: "Highly optimized BLAS",
    url: "https://www.openblas.net/",
    cmd: "easifem install openblas",
    config: "/guides/install/extpkgs/OpenBlas",
    category: "Linear algebra",
  },
  {
    title: "SuperLU",
    description: "Direct solution of large, sparse, nonsymmetric systems of linear equations",
    url: "https://github.com/xiaoyeli/superlu.git",
    cmd: "easifem install superlu",
    config: "/guides/install/extpkgs/SuperLU",
    category: "Linear algebra",
  },
  {
    title: "LIS",
    description: "Linear interative solver",
    url: "https://github.com/anishida/lis.git",
    cmd: "easifem install lis",
    config: "/guides/install/extpkgs/LIS",
    category: "Linear algebra",
  },
  {
    title: "METIS",
    description: "Mesh and graph partitioning library",
    url: "https://github.com/KarypisLab/METIS",
    cmd: "easifem install metis",
    config: "/guides/install/extpkgs/METIS",
    category: "Linear algebra",
  },
  {
    title: "SCOTCH",
    description: "Mesh partitioning library",
    url: "https://gitlab.inria.fr/scotch/scotch",
    cmd: "easifem install scotch",
    config: "/guides/install/extpkgs/SCOTCH",
    category: "Linear algebra",
  },
  {
    title: "ARPACK",
    description: "Eigensolver for sparse matrices",
    url: "https://github.com/opencollab/arpack-ng",
    cmd: "easifem install arpack",
    config: "/guides/install/extpkgs/ARPACK",
    category: "Linear algebra",
  },
  {
    title: "FFTW",
    description: "Fast Fourier Transform library.",
    url: "https://www.fftw.org/",
    cmd: "easifem install fftw",
    config: "/guides/install/extpkgs/FFTW",
    category: "Linear algebra",
  },
  {
    title: "GTK-Fortran",
    description: "Fortran bindings for GTK-4 library",
    url: "https://github.com/vmagnin/gtk-fortran",
    cmd: "easifem install gtk-fortran",
    config: "/guides/install/extpkgs/GTKFortran",
    category: "Graphics",
  },
  {
    title: "LAPACK95",
    description: "Fortran 95 interface for LAPACK library",
    url: "https://github.com/vickysharma0812/LAPACK95.git",
    cmd: "easifem install lapack95",
    config: "/guides/install/extpkgs/GTKFortran",
    category: "Linear algebra",
  },
  {
    title: "Sparsekit",
    description: "Fortran library for linear algebra on sparse matrices",
    url: "https://github.com/vickysharma0812/Sparsekit.git",
    cmd: "easifem install sparsekit",
    config: "/guides/install/extpkgs/Sparsekit",
    category: "Linear algebra",
  },
  {
    title: "Gmsh",
    description: "Finite element mesh generator",
    url: "https://gmsh.info/",
    cmd: "easifem install gmsh",
    config: "/guides/install/extpkgs/Sparsekit",
    category: "Graphics",
  },
];

// ----------------------------------------------------------------------------
// PesterDataTable column definition
// ----------------------------------------------------------------------------
export const columns = [
  {
    Header: "Pkg name",
    accessor: "title",
    className: "pester-data-table left",
    Cell: ({ cell: { value }, row: { original } }) => (
      <a href={`${original.url}`} target="blank" rel="noreferrer noopener">
        {value}
      </a>
    ),
  },
  {
    Header: "Description",
    accessor: "description",
    className: "pester-data-table left",
    Cell: ({ cell: { value }, row: { original } }) => (
      <span> {value} <a href={`${original.config}`} target="blank" rel="noreferrer noopener">
        {"🚀 More..."}
      </a>
      </span>
    ),

  },
  {
    Header: "Command",
    accessor: "cmd",
    className: "pester-data-table left",
    Cell: ({ cell: { value }, row: { original } }) => (
      <code> {value} </code>
    ),
  },
];
