---
title: VTKFile example 14
author: Vikas Sharma, Ph.D.
date: 29 Nov 2021
update: 29 Nov 2021
tags:
    - VTKFile
---

# VTKFile example 14

## Use association

- [[Mesh_]]
- [[HDF5File_]]
- [[VTKFile_]]

## Usage

```fortran
PROGRAM main
    use easifemBase
    use easifemClasses
    TYPE( mesh_ ) :: obj
    INTEGER( I4B ) :: ierr, ii
    TYPE( HDF5File_ ) :: domainFile
    TYPE( VTKFile_ ) :: vtkfile
    REAL( DFP ), ALLOCATABLE :: nodeCoord( :, : ), pressure( : )
```

```fortran
    CALL Display( "Testing ExportToVTK" )
    CALL domainFile%initiate( filename="./mesh.h5", mode="READ" )
    CALL domainFile%open()
```

!!! note "Initiate Mesh"

```fortran
    CALL obj%Initiate(hdf5=domainFile, group="/surfaceEntities_1" )
```

!!! note ""
    Get nodal coordinates of the mesh.

```fortran
    CALL obj%getNodeCoord(nodeCoord=nodeCoord, hdf5=domainFile, &
        & group="/nodeCoord")
```

!!! note ""
    Export mesh to [[VTKFile_]] format. This will write the information of
    mesh inside the `surfaceEntities_1.vtu` file.

The file will have the following properties

- mode="NEW"
- DataFormat=`VTK_BINARY_APPENDED`
- DataStructureType=`VTK_UnStructuredGrid`

Note that we have set `CloseTag` to `.false.` since we want to write more information.

```fortran
    CALL obj%ExportToVTK(vtkFile=vtkFile, nodeCoord=nodeCoord, &
        & filename="./surfaceEntities_1.vtu", OpenTag=.TRUE., &
        & Content=.TRUE., CloseTag=.FALSE.)
```

!!! note "Write node data"

Because it is nodal data, we mention location as `node`. Also we want to open the PointData tag, since we have initiated writing the data.

```fortran
    CALL vtkFile%WriteDataArray(location=String('node'), &
        & action=String('open'))
```

Let us prepare the noda data for pressure.

```fortran
    CALL reallocate(pressure, obj%getTotalNodes())
    CALL random_NUMBER(pressure); pressure = pressure * 10
```

Now that the data is ready, let us flush it in the [[VTKFile_]].

```fortran
    CALL vtkFile%WriteDataArray(name=String("node_data"), &
        & x=pressure, numberOfComponents=1)
```

If you want to write more point data, then add it below.

```fortran
    CALL vtkFile%WriteDataArray(name=String("pressure"), &
        & x=pressure, numberOfComponents=1)
```

Now that we are done with writing point data, let us close the `<PointData>` tag.

```fortran
    CALL vtkFile%WriteDataArray(location=String('node'), &
        & action=String('close'))
```

!!! note "Write Cell Data"

```fortran
    CALL vtkFile%WriteDataArray(location=String('cell'), &
        & action=String('open'))
```

```fortran
    CALL reallocate(pressure, obj%getTotalElements())
    CALL random_NUMBER(pressure); pressure = pressure * 10
```

```fortran
    CALL vtkFile%WriteDataArray(name=String("cell_data"), &
        & x=pressure, numberOfComponents=1)
```

```fortran
    CALL vtkFile%WriteDataArray(location=String('cell'), &
        & action=String('close'))
```


```fortran
    CALL vtkFile%WritePiece()
    CALL vtkFile%Close()
```

!!! settings "Cleanup"

```fortran
    CALL obj%Deallocate()
    CALL domainFile%Deallocate()
END PROGRAM main
```
