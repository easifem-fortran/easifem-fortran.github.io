# SteadyStokesUtility

## SetMeshData

This routine sets the mesh data.

If we use equal order interpolationm then this routine sets following data for `domForVelocity`.

- `InitiateNodeToElements`
- `InitiateNodeToNodes`
- `InitiateFacetElements`

Truly, speaking `FacetElements` data is not required always, but we still form it (because the cost is trivial). This is kind of BUG, which will be removed in future versions.

If we use mixed finite element methods, then this routine sets the following data for `domForVelocity`, `domForPressure`

- `InitiateNodeToElements`
- `InitiateNodeToNodes`
- `InitiateFacetElements`
