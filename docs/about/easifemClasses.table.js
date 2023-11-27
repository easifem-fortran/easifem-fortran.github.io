import React from "react";

// ----------------------------------------------------------------------------
// Please respect chronological (date) order when adding new entries.
// ----------------------------------------------------------------------------
export const easifemClasses_articles = [
  {
    title: "Gmsh_Class",
    comment: "Interface to Gmsh library",
    category: "Mesh",
  },
  {
    title: "CommandLine_Method",
    comment: "Fortran library for making comand line applications.",
    category: "CLI",
  },
  {
    title: "ExceptionHandling_Class",
    comment: "Fortran library for error handling",
    category: "Utility",
  },
  {
    title: "FPL_Method",
    comment: "Fortran parameter list",
    category: "FEM",
  },
  {
    title: "Files",
    comment: "Collection of modules related to File IO.",
    category: "IO",
  },
  {
    title: "ElementFactory",
    comment: "Finite element factory",
    category: "FEM",
  },
  {
    title: "IntList_Class",
    comment: "Linked list of integers",
    category: "Container",
  },
  {
    title: "RealList_Class",
    comment: "Linked list of reals",
    category: "Container",
  },
  {
    title: "StringList_Class",
    comment: "Linked list of strings",
    category: "Container",
  },
  {
    title: "ElementList_Class",
    comment: "Linked list of finite elements",
    category: "FEM",
  },
  {
    title: "ElementPointerVector_Class",
    comment: "Dynamic vector of element pointers",
    category: "FEM",
  },
  {
    title: "Mesh_Class",
    comment: "Finite element mesh class",
    category: "FEM",
  },
  {
    title: "MeshPointerVector_Class",
    comment: "Dynamic vector of mesh pointers",
    category: "FEM",
  },
  {
    title: "Domain_Class",
    comment: "Domain class",
    category: "FEM",
  },
  {
    title: "DomainUtility",
    comment: "A module for additional methods on Domain.",
    category: "FEM",
  },
  {
    title: "DomainConnectivity_Class",
    comment: "Domain connectivity class",
    category: "FEM",
  },
  {
    title: "MeshSelection_Class",
    comment: "A class for selecting the region of domain.",
    category: "FEM",
  },
  {
    title: "MSHFile_Class",
    comment: "Class for Gmsh`s msh file",
    category: "FEM",
  },
  {
    title: "AbstractVector_Class",
    comment: "Abstract class for vectors.",
    category: "FEM",
  },
  {
    title: "Vector_Class",
    comment: "Concrete class for vectors.",
    category: "FEM",
  },
  {
    title: "Field",
    comment: "Collection of modules which defines classes for finite element fields.",
    category: "FEM",
  },
  {
    title: "FieldFactory",
    comment: "Factory for fields",
    category: "FEM",
  },
  {
    title: "AbstractLinSolver_Class",
    comment: "Abstract class for linear solver",
    category: "FEM",
  },
  {
    title: "LinSolver_Class",
    comment: "Native linear solver class.",
    category: "FEM",
  },
  {
    title: "LinSolver_Factory",
    comment: "Factory for linear solvers.",
    category: "FEM",
  },
  {
    title: "AbstractBC_Class",
    comment: "Abstract class for boundary conditions",
    category: "FEM",
  },
  {
    title: "DirichletBC_Class",
    comment: "Class for Dirichlet boundary conditions.",
    category: "FEM",
  },
  {
    title: "NeumannBC_Class",
    comment: "Class for Neumann boundary conditions.",
    category: "FEM",
  },
  {
    title: "NitscheBC_Class",
    comment: "Class for Nitsche boundary conditions.",
    category: "FEM",
  },
  {
    title: "PolynomialFactory",
    comment: "Factory of polynomials",
    category: "FEM",
  },
  {
    title: "UserFunction_Class",
    comment: "User function class",
    category: "FEM",
  },
  {
    title: "RefElementFactory",
    comment: "Factory of reference elements",
    category: "FEM",
  },
  {
    title: "FiniteElementFactory",
    comment: "Factory of finite elements.",
    category: "FEM",
  },
  {
    title: "Tree3R_Class",
    comment: "Tree data structure for 3 term recurrence relation.",
    category: "Math",
  },
  {
    title: "Plot_Method",
    comment: "Collection of methods for plotting.",
    category: "FEM",
  },
];

// ----------------------------------------------------------------------------
// PesterDataTable column definition
// ----------------------------------------------------------------------------
export const easifemClasses_columns = [
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
