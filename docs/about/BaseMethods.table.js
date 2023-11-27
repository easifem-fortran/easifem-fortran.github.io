import React from "react";

// ----------------------------------------------------------------------------
// Please respect chronological (date) order when adding new entries.
// ----------------------------------------------------------------------------
export const basemethods_articles = [
  {
    title: "String_Class",
    comment: "Defines String class and methods.",
    category: "String",
  },
  {
    title: "String_Method",
    comment: "Additional methods for handling strings.",
    category: "String",
  },
  {
    title: "PENF",
    comment: "For portability.",
    category: "OS",
  },
  {
    title: "BeFoR64",
    comment: "For portability.",
    category: "OS",
  },
  {
    title: "FACE",
    comment: "Colorful console printing.",
    category: "IO",
  },
  {
    title: "FPL",
    comment: "Fortran parameter list",
    category: "Utility",
  },
  {
    title: "System_Method",
    comment: "Interface to C system libray.",
    category: "OS",
  },
  {
    title: "CInterface",
    comment: "Utility for C-Fortran interface building.",
    category: "OS",
  },
  {
    title: "OpenMP_Method",
    comment: "Methods which uses OpenMP for acceleration.",
    category: "Misc",
  },
  {
    title: "GlobalData",
    comment: "GlobalData for easifem library",
    category: "Misc",
  },
  {
    title: "Hashing32",
    comment: "Hash functions.",
    category: "Utility, Crypto",
  },
  {
    title: "OGPF",
    comment: "Gnuplot library",
    category: "Plot",
  },
  {
    title: "Test_Method",
    comment: "Unit testing library",
    category: "Test",
  },
  {
    title: "MdEncode_Method",
    comment: "Encoding text into markdown.",
    category: "IO",
  },
  {
    title: "DispModule",
    comment: "Pretty printing on terminal.",
    category: "IO",
  },
  {
    title: "Display_Method",
    comment: "Pretty printing on terminal.",
    category: "IO",
  },
  {
    title: "ErrorHandling",
    comment: "Exception handling.",
    category: "ExceptionHandling",
  },
  {
    title: "Utility",
    comment: "Utility module.",
    category: "Utility",
  },
  {
    title: "PolynomialUtility",
    comment: "Collection of useful routine for polynomial interpolation.",
    category: "Basis",
  },
  {
    title: "BaseType",
    comment: "Collection of user define data types.",
    category: "Core",
  },
  {
    title: "MultiIndices_Method",
    comment: "Methods for MultiIndices_.",
    category: "Math",
  },
  {
    title: "Random_Method",
    comment: "Methods for Random_ data type.",
    category: "Math",
  },
  {
    title: "BoundingBox_Method",
    comment: "Methods for BoundingBox_ data type",
    category: "Math",
  },
  {
    title: "IntVector_Method",
    comment: "Methods for IntVector_ data type",
    category: "Vector",
  },
  {
    title: "IndexValue_Method",
    comment: "Methods for IndexValue_ data type",
    category: "FEM",
  },
  {
    title: "IterationData_Method",
    comment: "Methods for IterationData_ data type.",
    category: "FEM",
  },
  {
    title: "Vector3D_Method",
    comment: "Methods for Vector3D_ data type.",
    category: "Vector",
  },
  {
    title: "RealVector_Method",
    comment: "Methods for RealVector_ data type",
    category: "Vector",
  },
  {
    title: "DOF_Method",
    comment: "Methods for DOF_ data type",
    category: "FEM",
  },
  {
    title: "Geometry_Method",
    comment: "Geometry realted methods.",
    category: "Math",
  },
  {
    title: "QuadraturePoint_Method",
    comment: "Methods for QuadraturePoint_ data type.",
    category: "FEM",
  },
  {
    title: "FEVariable_Method",
    comment: "Methods for FEVariable_ data type",
    category: "FEM",
  },
  {
    title: "ElemshapeData_Method",
    comment: "Methods for ElemshapeData_ data type.",
    category: "FEM",
  },
  {
    title: "RealMatrix_Method",
    comment: "Methods for RealMatrix_ data type.",
    category: "Matrix",
  },
  {
    title: "FEMatrix_Method",
    comment: "Methods for FEMatrix_ data type.",
    category: "FEM",
  },
  {
    title: "FEVector_Method",
    comment: "Methods for FEVector_ data type.",
    category: "FEM",
  },
  {
    title: "Rank2Tensor_Method",
    comment: "Methods for Rank2Tensor_ data type.",
    category: "Tensor",
  },
  {
    title: "VoigtRank2Tensor_Method",
    comment: "Methods for VoigtRank2Tensor_ data type.",
    category: "Tensor",
  },
  {
    title: "CSRSparisty_Method",
    comment: "Methods for CSRSparisty_ data type.",
    category: "Matrix",
  },
  {
    title: "CSRMatrix_Method",
    comment: "Methods for CSRMatrix_ data type.",
    category: "Matrix",
  },
  {
    title: "SuperLUInterface",
    comment: "Fortran interface to SuperLU lib",
    category: "LinearSolver",
  },
  {
    title: "LISInterface",
    comment: "Fortran interface to LIS lib",
    category: "LinearSolver",
  },
  {
    title: "F77_BLAS",
    comment: "F77 interface to BLAS.",
    category: "LinearAlgebra",
  },
  {
    title: "F95_BLAS",
    comment: "Fortran 95 interface to BLAS lib.",
    category: "LinearAlgebra",
  },
  {
    title: "F77_LAPACK",
    comment: "Fortran interface to Lapack.",
    category: "LinearAlgebra",
  },
  {
    title: "F95_LAPACK",
    comment: "Fortran 95 interface to Lapack lib.",
    category: "LinearAlgebra",
  },
  {
    title: "Lapack_Method",
    comment: "Methods for linear algebra by using Lapack.",
    category: "LinearAlgebra",
  },
  {
    title: "EASIFEM_ARPACK",
    comment: "Fortran interface to ARPACK.",
    category: "LinearAlgebra",
  },
  {
    title: "FFTW3",
    comment: "Fast fourer tranform library",
    category: "LinearAlgebra",
  },
  {
    title: "MetisInterface",
    comment: "Fortran interface to Metis library.",
    category: "LinearAlgebra",
  },
];

// ----------------------------------------------------------------------------
// PesterDataTable column definition
// ----------------------------------------------------------------------------
export const basemethods_columns = [
  {
    Header: "Module",
    accessor: "title",
    className: "pester-data-table left",
    // Cell: ({ cell: { value }, row: { original } }) => (
    //   <a href={`${original.url}`} target="blank" rel="noreferrer noopener">
    //     {value}
    //   </a>
    // ),
  },
  {
    Header: "Comment",
    accessor: "comment",
    className: "pester-data-table left",
  },
  {
    Header: "Category",
    accessor: "category",
    className: "pester-data-table",
  },
];
