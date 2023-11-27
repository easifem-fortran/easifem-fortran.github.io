import React from "react";

// ----------------------------------------------------------------------------
// Please respect chronological (date) order when adding new entries.
// ----------------------------------------------------------------------------
export const basetype_articles = [
  {
    title: "Math_",
    comment: "Contains mathematical constants.",
    category: "Math",
  },
  {
    title: "BoundingBox_",
    comment: "Data type for bounding box.",
    category: "FEM",
  },
  {
    title: "RealMatrix_",
    comment: "Extension for Fortran two-d array",
    category: "Matrix",
  },
  {
    title: "IntVector_",
    comment: "Vector of integers.",
    category: "Vector",
  },
  {
    title: "RealVector_",
    comment: "Vector of reals",
    category: "Vector",
  },
  {
    title: "Vector3D_",
    comment: "3D Vector",
    category: "Vector",
  },
  {
    title: "IndexValue_",
    comment: "Key (integer) and value (real), useful for defining nodal boundary conditions",
    category: "FEM",
  },
  {
    title: "DOF_",
    comment: "Degree of freedom object type",
    category: "FEM",
  },
  {
    title: "SparseMatixReOrdering_",
    comment: "Sparse matrix reordering scheme",
    category: "LinearAlgebra",
  },
  {
    title: "CSRSparisty_",
    comment: "Datatype for handling sparsity pattern",
    category: "LinearAlgebra",
  },
  {
    title: "SuperLU_",
    comment: "SuperLU data structure.",
    category: "LinearAlgebra",
  },
  {
    title: "CSRMatrix_",
    comment: "Compressed sparse row matrix",
    category: "LinearAlgebra",
  },
  {
    title: "IterationData_",
    comment: "Datatype for storing iteration data",
    category: "FEM",
  },
  {
    title: "VoigtRank2Tensor_",
    comment: "Rank2 tensor",
    category: "Tensor",
  },
  {
    title: "DeformationGradient_",
    comment: "Deformation Gradient tensor",
    category: "Tensor",
  },
  {
    title: "LeftCauchyGreen_",
    comment: "Left Cauchy Green tensor",
    category: "Tensor",
  },
  {
    title: "RightCauchyGreen_",
    comment: "Right Cauchy Green tensor",
    category: "Tensor",
  },
  {
    title: "Strain_",
    comment: "Strain tensor",
    category: "Tensor",
  },
  {
    title: "AlmansiStrain_",
    comment: "Almansi strain",
    category: "Tensor",
  },
  {
    title: "GreenStrain_",
    comment: "Green strain tensor",
    category: "Tensor",
  },
  {
    title: "SmallStrain_",
    comment: "Small strain tensor.",
    category: "Tensor",
  },
  {
    title: "ReferenceTopology_",
    comment: "Data type for handling reference element in FEM",
    category: "FEM",
  },
  {
    title: "ReferenceElement_",
    comment: "Data type for reference element in FEM",
    category: "FEM",
  },
  {
    title: "ReferencePoint_",
    comment: "Data type for reference point in FEM",
    category: "FEM",
  },
  {
    title: "ReferenceLine_",
    comment: "Data type for reference line in FEM",
    category: "FEM",
  },
  {
    title: "ReferenceTriangle_",
    comment: "Data type for reference triangle in FEM",
    category: "FEM",
  },
  {
    title: "ReferenceQuadrangle_",
    comment: "Data type for reference quadrangle in FEM",
    category: "FEM",
  },
  {
    title: "ReferenceTetrahedron_",
    comment: "Data type for reference tetrahedron in FEM",
    category: "FEM",
  },
  {
    title: "ReferenceHexahedron_",
    comment: "Data type for reference hexahedron in FEM",
    category: "FEM",
  },
  {
    title: "ReferencePrism_",
    comment: "Data type for reference prism in FEM",
    category: "FEM",
  },
  {
    title: "ReferencePyramid_",
    comment: "Data type for reference pyramid in FEM",
    category: "FEM",
  },
  {
    title: "KeyValue_",
    comment: "Poor man's implementation of dic.",
    category: "Container",
  },
  {
    title: "FEVariable_",
    comment: "Data type for finite element variables.",
    category: "FEM",
  },
  {
    title: "FEVariableConstant_",
    comment: "Constant finite element variable",
    category: "FEM",
  },
  {
    title: "FEVariableSpace_",
    comment: "Spatially variable finite element variable",
    category: "FEM",
  },
  {
    title: "FEVariableTime_",
    comment: "Time variable finite element variable",
    category: "FEM",
  },
  {
    title: "FEVariableSpaceTime_",
    comment: "Spatially and temporally changing finite element variable",
    category: "FEM",
  },
  {
    title: "FEVariableScalar_",
    comment: "Scalar finite element variable",
    category: "FEM",
  },
  {
    title: "FEVariableVector_",
    comment: "Vector finite element variable",
    category: "FEM",
  },
  {
    title: "FEVariableMatrix_",
    comment: "Matrix finite element variable",
    category: "FEM",
  },
  {
    title: "QuadraturePoint_",
    comment: "Quadrature points",
    category: "FEM",
  },
  {
    title: "BaseInterpolation_",
    comment: "Data type for basis interpolation",
    category: "FEM",
  },
  {
    title: "LagrangeInterpolation_",
    comment: "Lagrange interpolation",
    category: "FEM",
  },
  {
    title: "HermitInterpolation_",
    comment: "Hermit interpolation",
    category: "FEM",
  },
  {
    title: "SerendipityInterpolation_",
    comment: "Serendipity interpolation",
    category: "FEM",
  },
  {
    title: "HierarchyInterpolation_",
    comment: "Hierarchical interpolation",
    category: "FEM",
  },
  {
    title: "BaseContinuity_",
    comment: "Continuity type of basis functions.",
    category: "FEM",
  },
  {
    title: "H1_",
    comment: "H1 finite element basis",
    category: "FEM",
  },
  {
    title: "H1DIV_",
    comment: "H1(Div) finite element basis",
    category: "FEM",
  },
  {
    title: "H1Curl_",
    comment: "H1(Curl) finite element basis",
    category: "FEM",
  },
  {
    title: "DG_",
    comment: "Discontinuous Galerkin finite element basis",
    category: "FEM",
  },
  {
    title: "ElementData_",
    comment: "Data necessary for creating finite element.",
    category: "FEM",
  },
  {
    title: "ShapeData_",
    comment: "Storage for shape data",
    category: "FEM",
  },
  {
    title: "STShapeData_",
    comment: "Space-time shape function data",
    category: "FEM",
  },
  {
    title: "ElemshapeData_",
    comment: "Element shape function data",
    category: "FEM",
  },
  {
    title: "STElemShapeData_",
    comment: "Space-time element shape data.",
    category: "FEM",
  },
  {
    title: "QualityMeasure_",
    comment: "Datatype for mesh quality measure",
    category: "FEM",
  },
  {
    title: "Random_",
    comment: "Data type for random variables",
    category: "FEM",
  },
  {
    title: "OpenMP_",
    comment: "Data type for OpenMP parallel environment",
    category: "FEM",
  },
  {
    title: "MultiIndices_",
    comment: "Data type for multi indices",
    category: "FEM",
  },
];

// ----------------------------------------------------------------------------
// PesterDataTable column definition
// ----------------------------------------------------------------------------
export const basetype_columns = [
  {
    Header: "Data-type",
    accessor: "title",
    className: "pester-data-table left",
    // Cell: ({ cell: { value }, row: { original } }) => (
    //   <a href={`${original.url}`} target="blank" rel="noreferrer noopener">
    //     {value}
    //   </a>
    // ),
  },
  {
    Header: "Summary",
    accessor: "comment",
    className: "pester-data-table left",
  },
  {
    Header: "Category",
    accessor: "category",
    className: "pester-data-table",
  },
];
