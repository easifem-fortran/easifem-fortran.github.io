---
sidebar_position: 1
date: 2023-08-05
update: 2023-08-05
status: stable
docs: done
extpkgs:
  - Gmsh
category:
  - Gmsh
  - Mesh
  - Domain
tags:
  - gmsh
  - mesh
  - domain
  - todo
---

# GmshAPI

## Introduction

The Gmsh application programming interface (API) allows to integrate the Gmsh library in external applications written in Fortran. By design, the Gmsh API is purely functional, and only uses elementary types from the target languages. See the tutorials/fortran directories from the Gmsh tutorial for examples. For other API examples, see the examples/api directory.

The top level class is [[Gmsh_]] class, which allows us to interact with the `libgmsh` and GUI of gmsh. The structure of `Gmsh_` class is given below.

![](figures/Gmsh_Class.svg)

The structure of the API reflects the underlying Gmsh data model (see also Source code structure):

There are two main data containers:

- `models` which hold the geometrical and the mesh data
- `views` which hold post-processing data.

These are manipulated by the API functions in the top-level namespaces `gmsh/model` and `gmsh/view`, respectively.

- `gmsh/option` handles all options
- `gmsh/plugin` handles extensions to core Gmsh functionality
- `gmsh/graphics` handles drawing
- `gmsh/fltk` handles the graphical user interface
- `gmsh/parser` handles the Gmsh parser
- `gmsh/onelab` handles ONELAB parameters and communications with external codes
- `gmsh/logger` handles information logging.

Geometrical data is made of model entities:

- `points`, entities of dimension 0
- `curves`, entities of dimension 1
- `surfaces` entities of dimension 2
- `volumes` entities of dimension 3.

`Model` entities are stored using a boundary representation: a volume is bounded by a set of surfaces, a surface is bounded by a series of curves, and a curve is bounded by two end points.

Volumes and surfaces can also store embedded entities of lower dimension, to force a subsequent mesh to be conformal to internal features like a point in the middle of a surface.

Model entities are identified by a pair of integers: their dimension `dim` (0, 1, 2 or 3) and their `tag`, a strictly positive identification number.

**Physical groups** are collections of model entities and are also identified by their dimension and by a tag.

Operations which do not directly reference a model are performed on the current model.

Model entities can be either CAD entities (from the built-in geo kernel or from the OpenCASCADE occ kernel) or discrete entities (defined by a mesh).

Operations on CAD entities are performed directly within their respective CAD kernels (i.e. using functions from the `gmsh/model/geo` or `gmsh/model/occ` namespaces, respectively), as Gmsh does not translate across CAD formats but rather directly accesses the native representation.

CAD entities must be synchronized with the model in order to be meshed, or, more generally, for functions outside of `gmsh/model/geo` or `gmsh/model/occ` to manipulate them.

1D and 2D meshing algorithms use the parametrization of the underlying geometrical curve or surface to generate the mesh.

Discrete entities can be remeshed provided that a parametrization is explicitly recomputed for them.

Mesh data is made of elements (points, lines, triangles, quadrangles, tetrahedra, hexahedra, prisms, pyramids, ...), defined by an ordered list of their nodes.

Elements and nodes are identified by tags (strictly positive identification numbers), and are stored (classified) in the model entity they discretize.

Once meshed, a model entity of dimension 0 (a geometrical point) will thus contain a mesh element of type point (MSH type 15: cf. MSH file format), as well as a mesh node.

A model curve will contain line elements (e.g. of MSH type 1 or 8 for first order or second order meshes, respectively) as well as its interior nodes, while its boundary nodes will be stored in the bounding model points.

A model surface will contain triangular and/or quadrangular elements and all the nodes not classified on its boundary or on its embedded entities (curves and points).

A model volume will contain tetrahedra, hexahedra, etc. and all the nodes not classified on its boundary or on its embedded entities (surfaces, curves and points). This data model allows to easily and efficiently handle the creation, modification and destruction of conformal meshes. All the mesh-related functions are provided in the `gmsh/model/mesh` namespace.

**Post-processing** data is made of views. Each view is identified by a tag, and can also be accessed by its index (which can change when views are sorted, added or deleted).

A view stores both display options and data, unless the view is an alias of another view (in which case it only stores display options, and the data points to a reference view).

View data can contain several steps (e.g. to store time series) and can be either linked to one or more models (mesh-based data, as stored in MSH files: cf. MSH file format) or independent from any model (list-based data, as stored in parsed POS files: cf. Post-processing scripting commands). Various plugins exist to modify and create views.

Status

- [x] [[Gmsh_]]
- [x] [[GmshModel_]], not all methods are tested
- [x] [[GmshModelGeo_]], not all methods are tested
- [ ] [[GmshModelGeoMesh_]]
- [ ] [[GmshModelOcc_]]
- [ ] [[GmshModelOccMesh_]]
- [ ] [[GmshModelMesh_]]
- [ ] [[GmshView_]]
- [ ] [[GmshOption_]]
- [x] [[GmshFLTK_]], not all methods are tested.
- [ ] [[GmshGraphics_]]

## Methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
