# GmshModel

## STATUS

- [x] Add
- [x] Remove
- [x] List
- [x] GetCurrent
- [x] SetCurrent
- [x] GetFileName
- [x] SetFileName
- [x] GetEntities
- [x] SetEntityName
- [x] GetEntityName
- [x] GetPhysicalGroups
- [x] GetEntitiesForPhysicalGroup
- [x] GetPhysicalGroupsForEntity
- [x] AddPhysicalGroup
- [x] RemovePhysicalGroups
- [x] SetPhysicalName
- [x] RemovePhysicalName
- [x] GetPhysicalName
- [x] SetTag
- [x] GetBoundary
- [x] GetAdjacencies
- [x] GetEntitiesInBoundingBox
- [x] GetBoundingBox
- [x] GetDimension
- [x] AddDiscreteEntity
- [x] RemoveEntities
- [x] RemoveEntityName
- [x] GetType
- [x] GetParent
- [x] GetPartitions
- [x] GetValue
- [x] GetDerivative
- [x] GetSecondDerivative
- [x] GetCurvature
- [x] GetPrincipalCurvatures
- [x] GetNormal
- [x] GetParametrization
- [x] GetParametrizationBounds
- [x] IsInside
- [x] GetClosestPoint
- [x] ReparametrizeOnSurface
- [x] SetVisibility
- [x] GetVisibility
- [x] SetVisibilityPerWindow
- [x] SetColor
- [x] GetColor
- [x] SetCoordinates
- [x] GetAttributeNames
- [x] SetAttribute
- [x] GetAttribute
- [x] RemoveAttribute

## Introduction

## Getting Started

## Structure

```fortran
TYPE :: GmshModel_
  PRIVATE
  TYPE(GmshModelGeo_), PUBLIC, POINTER :: Geo => NULL()
  TYPE(GmshModelOcc_), PUBLIC, POINTER :: Occ => NULL()
  TYPE(GmshModelMesh_), PUBLIC, POINTER :: Mesh => NULL()
```

## Methods

### Add

!> Add a new model, with name `name', and set it as the current model.

### Remove

!> Remove the current model.

### List

!> List the names of all models.

### GetCurrent

!> Get the name of the current model.

### SetCurrent

!> Set the current model to the model with name `name'. If several models have
!! the same name, select the one that was added first.

### GetFileName

!> Get the file name (if any) associated with the current model. A file name
!! is associated when a model is read from a file on disk.

### SetFileName

!> Set the file name associated with the current model.

### GetEntities

!> Get all the entities in the current model. If `dim' is >= 0, return only
!! the entities of the specified dimension (e.g. points if`dim' == 0). The
!! entities are returned as a vector of (dim, tag) pairs.

### SetEntityName

!> Set the name of the entity of dimension `dim' and tag`tag'.

### GetEntityName

!> Get the name of the entity of dimension `dim' and tag`tag'.

### GetPhysicalGroups

!> Get all the physical groups in the current model. If `dim' is >= 0, return
!! only the entities of the specified dimension (e.g. physical points if`dim'
!! == 0). The entities are returned as a vector of (dim, tag) pairs.

### GetEntitiesForPhysicalGroup

!> Get the tags of the model entities making up the physical group of
!! dimension `dim' and tag`tag'.

### GetPhysicalGroupsForEntity

!> Get the tags of the physical groups (if any) to which the model entity of
!! dimension `dim' and tag`tag' belongs.

### AddPhysicalGroup

!> Add a physical group of dimension `dim', grouping the model entities with
!! tags`tags'. Return the tag of the physical group, equal to `tag' if`tag'
!! is positive, or a new tag if `tag' < 0. Set the name of the physical group
!! if`name' is not empty.

### RemovePhysicalGroups

!> Remove the physical groups `dimTags' (given as a vector of (dim, tag)
!! pairs) from the current model. If`dimTags' is empty, remove all groups.

### SetPhysicalName

!> Set the name of the physical group of dimension `dim' and tag`tag'.

### RemovePhysicalName

!> Remove the physical name `name' from the current model.

### GetPhysicalName

!> Get the name of the physical group of dimension `dim' and tag`tag'.

### SetTag

!> Set the tag of the entity of dimension `dim' and tag`tag' to the new value
!! `newTag'.

### GetBoundary

!> Get the boundary of the model entities `dimTags', given as a vector of
!! (dim, tag) pairs. Return in`outDimTags' the boundary of the individual
!! entities (if `combined' is false) or the boundary of the combined
!! geometrical shape formed by all input entities (if`combined' is true).
!! Return tags multiplied by the sign of the boundary entity if `oriented' is
!! true. Apply the boundary operator recursively down to dimension 0 (i.e. to
!! points) if`recursive' is true.

### GetAdjacencies

!> Get the upward and downward adjacencies of the model entity of dimension
!! `dim' and tag`tag'. The `upward' vector returns the tags of adjacent
!! entities of dimension`dim' + 1; the `downward' vector returns the tags of
!! adjacent entities of dimension`dim' - 1.

### GetEntitiesInBoundingBox

!> Get the model entities in the bounding box defined by the two points
!! (`xmin',`ymin', `zmin') and (`xmax', `ymax',`zmax'). If `dim' is >= 0,
!! return only the entities of the specified dimension (e.g. points if`dim'
!! == 0).

### GetBoundingBox

!> Get the bounding box (`xmin',`ymin', `zmin'), (`xmax', `ymax',`zmax') of
!! the model entity of dimension `dim' and tag`tag'. If `dim' and`tag' are
!! negative, get the bounding box of the whole model.

### GetDimension

!> Return the geometrical dimension of the current model.

### AddDiscreteEntity

!> Add a discrete model entity (defined by a mesh) of dimension `dim' in the
!! current model. Return the tag of the new discrete entity, equal to`tag' if
!! `tag' is positive, or a new tag if`tag' < 0. `boundary' specifies the tags
!! of the entities on the boundary of the discrete entity, if any. Specifying
!!`boundary' allows Gmsh to construct the topology of the overall model.

### RemoveEntities

!> Remove the entities `dimTags' (given as a vector of (dim, tag) pairs) of
!! the current model, provided that they are not on the boundary of (or
!! embedded in) higher-dimensional entities. If`recursive' is true, remove
!! all the entities on their boundaries, down to dimension 0.

### RemoveEntityName

!> Remove the entity name `name' from the current model.

### GetType

!> Get the type of the entity of dimension `dim' and tag`tag'.

### GetParent

!> In a partitioned model, get the parent of the entity of dimension `dim' and
!! tag`tag', i.e. from which the entity is a part of, if any. `parentDim' and
!!`parentTag' are set to -1 if the entity has no parent.

### GetNumberOfPartitions

!> Return the number of partitions in the model.

### GetPartitions

!> In a partitioned model, return the tags of the partition(s) to which the
!! entity belongs.

### GetValue

!> Evaluate the parametrization of the entity of dimension `dim' and tag`tag'
!! at the parametric coordinates `parametricCoord'. Only valid for`dim' equal
!! to 0 (with empty `parametricCoord'), 1 (with`parametricCoord' containing
!! parametric coordinates on the curve) or 2 (with `parametricCoord'
!! containing u, v parametric coordinates on the surface, concatenated: [p1u,
!! p1v, p2u, ...]). Return x, y, z coordinates in`coord', concatenated: [p1x,
!! p1y, p1z, p2x, ...].

### GetDerivative

!> Evaluate the derivative of the parametrization of the entity of dimension
!! `dim' and tag`tag' at the parametric coordinates `parametricCoord'. Only
!! valid for`dim' equal to 1 (with `parametricCoord' containing parametric
!! coordinates on the curve) or 2 (with`parametricCoord' containing u, v
!! parametric coordinates on the surface, concatenated: [p1u, p1v, p2u, ...]).
!! For `dim' equal to 1 return the x, y, z components of the derivative with
!! respect to u [d1ux, d1uy, d1uz, d2ux, ...]; for`dim' equal to 2 return the
!! x, y, z components of the derivative with respect to u and v: [d1ux, d1uy,
!! d1uz, d1vx, d1vy, d1vz, d2ux, ...].

### GetSecondDerivative

!> Evaluate the second derivative of the parametrization of the entity of
!! dimension `dim' and tag`tag' at the parametric coordinates
!! `parametricCoord'. Only valid for`dim' equal to 1 (with `parametricCoord'
!! containing parametric coordinates on the curve) or 2 (with
!!`parametricCoord' containing u, v parametric coordinates on the surface,
!! concatenated: [p1u, p1v, p2u, ...]). For `dim' equal to 1 return the x, y,
!! z components of the second derivative with respect to u [d1uux, d1uuy,
!! d1uuz, d2uux, ...]; for`dim' equal to 2 return the x, y, z components of
!! the second derivative with respect to u and v, and the mixed derivative
!! with respect to u and v: [d1uux, d1uuy, d1uuz, d1vvx, d1vvy, d1vvz, d1uvx,
!! d1uvy, d1uvz, d2uux, ...].

### GetCurvature

!> Evaluate the (maximum) curvature of the entity of dimension `dim' and tag
!!`tag' at the parametric coordinates `parametricCoord'. Only valid for`dim'
!! equal to 1 (with `parametricCoord' containing parametric coordinates on the
!! curve) or 2 (with`parametricCoord' containing u, v parametric coordinates
!! on the surface, concatenated: [p1u, p1v, p2u, ...]).

### GetPrincipalCurvatures

!> Evaluate the principal curvatures of the surface with tag `tag' at the
!! parametric coordinates`parametricCoord', as well as their respective
!! directions. `parametricCoord' are given by pair of u and v coordinates,
!! concatenated: [p1u, p1v, p2u, ...].

### GetNormal

!> Get the normal to the surface with tag `tag' at the parametric coordinates
!!`parametricCoord'. The `parametricCoord' vector should contain u and v
!! coordinates, concatenated: [p1u, p1v, p2u, ...].`normals' are returned as
!! a vector of x, y, z components, concatenated: [n1x, n1y, n1z, n2x, ...].

### GetParametrization

!> Get the parametric coordinates `parametricCoord' for the points`coord' on
!! the entity of dimension `dim' and tag`tag'. `coord' are given as x, y, z
!! coordinates, concatenated: [p1x, p1y, p1z, p2x, ...].`parametricCoord'
!! returns the parametric coordinates t on the curve (if `dim' = 1) or u and v
!! coordinates concatenated on the surface (if`dim' = 2), i.e. [p1t, p2t,
!! ...] or [p1u, p1v, p2u, ...].

### GetParametrizationBounds

!> Get the `min' and`max' bounds of the parametric coordinates for the entity
!! of dimension `dim' and tag`tag'.

### IsInside

!> Check if the coordinates (or the parametric coordinates if `parametric' is
!! set) provided in`coord' correspond to points inside the entity of
!! dimension `dim' and tag`tag', and return the number of points inside. This
!! feature is only available for a subset of entities, depending on the
!! underlying geometrical representation.

### GetClosestPoint

!> Get the points `closestCoord' on the entity of dimension`dim' and tag
!! `tag' to the points`coord', by orthogonal projection. `coord' and
!!`closestCoord' are given as x, y, z coordinates, concatenated: [p1x, p1y,
!! p1z, p2x, ...]. `parametricCoord' returns the parametric coordinates t on
!! the curve (if`dim' = 1) or u and v coordinates concatenated on the surface
!! (if `dim' = 2), i.e. [p1t, p2t, ...] or [p1u, p1v, p2u, ...].

### ReparametrizeOnSurface

!> Reparametrize the boundary entity (point or curve, i.e. with `dim' == 0 or
!!`dim' == 1) of tag `tag' on the surface`surfaceTag'. If `dim' == 1,
!! reparametrize all the points corresponding to the parametric coordinates
!!`parametricCoord'. Multiple matches in case of periodic surfaces can be
!! selected with `which'. This feature is only available for a subset of
!! entities, depending on the underlying geometrical representation.

### SetVisibility

!> Set the visibility of the model entities `dimTags' (given as a vector of
!! (dim, tag) pairs) to`value'. Apply the visibility setting recursively if
!! `recursive' is true.

### GetVisibility

!> Get the visibility of the model entity of dimension `dim' and tag`tag'.

### SetVisibilityPerWindow

!> Set the global visibility of the model per window to `value', where
!!`windowIndex' identifies the window in the window list.

### SetColor

!> Set the color of the model entities `dimTags' (given as a vector of (dim,
!! tag) pairs) to the RGBA value (`r', `g',`b', `a'), where`r', `g',`b' and
!! `a' should be integers between 0 and 255. Apply the color setting
!! recursively if`recursive' is true.

### GetColor

!> Get the color of the model entity of dimension `dim' and tag`tag'.

### SetCoordinates

!> Set the `x',`y', `z' coordinates of a geometrical point.

### GetAttributeNames

!> Get the names of any optional attributes stored in the model.

### GetAttribute

!> Get the values of the attribute with name `name'.

### SetAttribute

!> Set the values of the attribute with name `name'.

### RemoveAttribute

!> Remove the attribute with name `name'.
