---
title: LidDrivenCavity paraview visualization
authors: Vikas Sharma, Ph. D.
date: 20 Jan 2022
update: 20 Jan 2022
tags:
  - STDarcyBrinkmann
---

# LidDrivenCavity paraview visualization

!!! note ""
    This example converts [[HDF5File_]] data into paraview format.

## Modules & Classes

- [[STDarcyBrinkmann_]]

## Usages

!!! note ""
    IMPORT the modules.

```fortran
PROGRAM main
    USE easifemBase
    USE easifemClasses
    TYPE(domain_) :: domForPressure
    TYPE(domain_) :: domForVelocity
    CLASS(Mesh_), POINTER :: meshPtr => NULL()
    TYPE(HDF5File_) :: domainfileForPressure
    TYPE(HDF5File_) :: domainfileForVelocity
    TYPE(HDF5File_) :: outfile
    TYPE(VTKFile_) :: vtkfile
    TYPE(VectorField_) :: velocity0
    TYPE(ScalarField_) :: pressure0
    INTEGER(I4B) :: ierr, ii
    CHARACTER(LEN=256) :: domainfilenameForPressure
    CHARACTER(LEN=256) :: domainfilenameForVelocity
    CHARACTER(LEN=256) :: outfilename
    CHARACTER(LEN=256) :: vtkfilename
    REAL(DFP), ALLOCATABLE :: mat1(:, :)
    REAL(DFP), ALLOCATABLE :: vec1(:)
    INTEGER(I4B), ALLOCATABLE :: nptrs(:)
```

```fortran
    CALL Display("domainfilenameForPressure")
    READ (*, "(A)") domainfilenameForPressure
    CALL Display("domainfilenameForVelocity")
    READ (*, "(A)") domainfilenameForVelocity
    CALL Display("outfilename")
    READ (*, "(A)") outfilename
    CALL Display("vtkfilename")
    READ (*, "(A)") vtkfilename
```

```fortran
    CALL domainfileForPressure%initiate( &
      & filename=domainfilenameForPressure, &
      & mode="READ")
    CALL domainfileForPressure%OPEN()
```

```fortran
    CALL domainfileForVelocity( &
      & filename=domainfilenameForVelocity, &
      & mode="READ")
    CALL domainfileForVelocity%OPEN()
```

```fortran
    CALL outfile%initiate(filename=outfilename, mode="READ")
    CALL outfile%OPEN()
```

```fortran
    CALL domForPressure%Initiate( &
      & hdf5=domainfileForPressure, &
      & group="")
    CALL pressure0%IMPORT( &
      & hdf5=outfile, &
      & group="1/pressure0", &
      & dom=domForPressure)
```

```fortran
    CALL domForVelocity%Initiate( &
      & hdf5=domainfileForVelocity, &
      & group="")
    CALL velocity0%IMPORT( &
      & hdf5=outfile, &
      & group="1/velocity0", &
      & dom=domForVelocity)
```

```fortran
    CALL vtkfile%InitiateVTKFile( &
      & filename=vtkfilename, &
      & mode="NEW", &
      & DataFormat=VTK_BINARY_APPENDED, &
      & DataStructureType=VTK_UnStructuredGrid)
```

```fortran
    DO imesh = 1, domForPressure%getTotalMesh(domForPressure%getNSD())
        !!
        meshPtr => domForPressure%getMeshPointer( &
            & dim=domForPressure%getNSD(), &
            & entityNum=imesh)
        !!
        CALL meshPtr%getNodeCoord( &
            & nodeCoord=mat1, &
            & hdf5=domainfileForPressure, &
            & group="/nodeCoord")
        !!
        CALL meshPtr%ExportToVTK( &
            & vtkfile=vtkfile, &
            & nodecoord=mat1, &
            & OpenTag=.TRUE., &
            & Content=.TRUE., &
            & CloseTag=.FALSE.)
        !!
        CALL vtkFile%WriteDataArray( &
            & location=String('node'), &
            & action=String('open'))
        !!
        nptrs = meshPtr%getNptrs()
        !!
        CALL pressure0%Get( &
            & globalNode=nptrs, &
            & VALUE=vec1 )
        !!
        CALL vtkFile%WriteDataArray( &
            & name=String("pressure0"), &
            & x=vec1, numberOfComponents=1 )
        !!
        CALL vtkFile%WriteDataArray( &
            & location=String('node'), &
            & action=String('close'))
        !!
        CALL vtkfile%WritePiece()
        !!
    END DO
```

```fortran
    DO imesh = 1, domForVelocity%getTotalMesh(domForVelocity%getNSD())
        !!
        meshPtr => domForVelocity%getMeshPointer( &
            & dim=domForVelocity%getNSD(), &
            & entityNum=imesh)
        !!
        CALL meshPtr%getNodeCoord( &
            & nodeCoord=mat1, &
            & hdf5=domainfileForVelocity, &
            & group="/nodeCoord")
        !!
        CALL meshPtr%ExportToVTK( &
            & vtkfile=vtkfile, &
            & nodecoord=mat1, &
            & OpenTag=.TRUE., &
            & Content=.TRUE., &
            & CloseTag=.FALSE.)
        !!
        CALL vtkFile%WriteDataArray( &
            & location=String('node'), &
            & action=String('open'))
        !!
        nptrs = meshPtr%getNptrs()
        !!
        CALL velocity0%Get( &
            & globalNode=nptrs, &
            & VALUE=mat1)
        !!
        CALL vtkFile%WriteDataArray( &
            & name=String("velocity0"), &
            & x=mat1, &
            & numberOfComponents=domainForVelocity%getNSD())
        !!
        CALL vtkFile%WriteDataArray( &
            & location=String('node'), &
            & action=String('close'))
        !!
        CALL vtkfile%WritePiece()
        !!
    END DO
```

```fortran
    CALL vtkfile%CLOSE()
    CALL domForPressure%DEALLOCATE()
    CALL domForVelocity%DEALLOCATE()
    CALL domainfileForPressure%DEALLOCATE()
    CALL domainfileForVelocity%DEALLOCATE()
END PROGRAM main
```
