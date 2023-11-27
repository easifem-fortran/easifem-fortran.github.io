# Structure

`VTKFile_` class is a child of [[XMLFile_]]. It is used for visualizing the results using `vtk` library or `paraview`.  You can find more details on the [Website](https://kitware.github.io/vtk-examples/site/VTKFileFormats)

The major motivation for XML based VTKFile was to facilitate data streaming and parallel I/O. Some features of the format include support for compression, portable binary encoding, random access, big endian and little endian byte order, multiple file representation of piece data, and new file extensions for different VTK dataset types. XML provides many features as well, especially the ability to extend a file format with application specific tags.

There are two types of VTK XML data files: parallel and serial as described in the following.

- **Serial**. File types designed for reading and writing by applications of only a single process. All of the data are contained within a single file.

- **Parallel**. File types designed for reading and writing by applications with multiple processes executing in parallel. The dataset is broken into pieces. Each process is assigned a piece or set of pieces to read or write. An individual piece is stored in a corresponding serial file type. The parallel file type does not actually contain any data, but instead describes structural information and then references other serial files containing the data for each piece.

In the XML format, VTK datasets are classified into one of two categories.

**Structured**. The dataset is a topologically regular array of cells such as pixels and voxels (e.g., image data) or quadrilaterals and hexahedra (e.g., structured grid). Rectangular subsets of the data are described through extents. The structured dataset types are [vtkImageData](https://www.vtk.org/doc/nightly/html/classvtkImageData.html#details), [vtkRectilinearGrid](https://www.vtk.org/doc/nightly/html/classvtkRectilinearGrid.html#details), and [vtkStructuredGrid](https://www.vtk.org/doc/nightly/html/classvtkStructuredGrid.html#details).

**Unstructured**. The dataset forms a topologically irregular set of points and cells. Subsets of the data are describedusing pieces. The unstructured dataset types are [vtkPolyData](https://www.vtk.org/doc/nightly/html/classvtkPolyData.html#details) and [vtkUnstructuredGrid](https://www.vtk.org/doc/nightly/html/classvtkUnstructuredGrid.html#details).

By convention, each data type and file type is paired with a particular file extension. The types and corresponding extensions are

- ImageData (_.vti_) — Serial, structured.
- PolyData (_.vtp_) — Serial, unstructured.
- RectilinearGrid (_.vtr_) — Serial, structured.
- StructuredGrid (_.vts_) — Serial, structured.
- UnstructuredGrid (_.vtu_) — Serial, unstructured.
- PImageData (_.pvti_) — Parallel, structured.
- PPolyData (_.pvtp_) — Parallel, unstructured.
- PRectilinearGrid (_.pvtr_) — Parallel, structured.
- PStructuredGrid (_.pvts_) — Parallel, structured.
- PUnstructuredGrid (_.pvtu_) — Parallel, unstructured.

All of the VTK XML file types are valid XML documents.

> There is one case in which the file is not a valid XML document. When the AppendedData section is not encoded as base64, raw binary data is present that may violate the XML specification. This is not default behavior, and must be explicitly enabled by the user.

## Serial Format

**Serial XML File Formats** The VTKFile element contains one element whose name corresponds to the type of dataset the file describes. We refer to this as the dataset element, which is one of

- ImageData
- RectilinearGrid
- StructuredGrid
- PolyData
- UnstructuredGrid.

The dataset element contains one or more Piece elements, each describing a portion of the dataset (See `WriteDataStructureTag()`). Together, the dataset element and Piece elements specify the entire dataset.

Each piece of a dataset must specify the geometry (points and cells) of that piece along with the data associated with each point or cell. Geometry is specified differently for each dataset type, but every piece of every dataset contains PointData and CellData elements specifying the data for each point and cell in the piece.

The general structure for each serial dataset format is as follows:

### ImageData

- Each ImageData piece specifies its extent within the dataset’s whole extent (See, WholeExtent in InitiateVTKFile). See [[#WriteRootTag]]
- The points and cells are described implicitly by the extent, origin, and spacing. See [[#PieceMethods]]
- Note that the origin and spacing are constant across all pieces, so they are specified as attributes of the ImageData XML element as follows.

```xml
<VTKFile type=”ImageData” ...>
  <ImageData WholeExtent=”x1 x2 y1 y2 z1 z2”
   Origin=”x0 y0 z0” Spacing=”dx dy dz”>
   <Piece Extent=”x1 x2 y1 y2 z1 z2”>
      <PointData>...</PointData>
      <CellData>...</CellData>
   </Piece>
   </ImageData>
</VTKFile>
```

### RectilinearGrid

- Each RectilinearGrid piece specifies its extent within the dataset’s whole extent. See [[#WriteRootTag]]
- The points are described by the Coordinates element. See [[#PointsMethods]]
- The cells are described implicitly by the extent.

```xml
<VTKFile type="RectilinearGrid" ...>
  <RectilinearGrid WholeExtent="x1 x2 y1 y2 z1 z2">
    <Piece Extent="x1 x2 y1 y2 z1 z2">
    <PointData>...</PointData>
    <CellData>...</CellData>
    <Coordinates>...</Coordinates>
    </Piece>
  </RectilinearGrid>
</VTKFile>
```

### StructuredGrid

- Each StructuredGrid piece specifies its extent within the dataset’s whole extent. See [[#WriteRootTag]]
- The points are described explicitly by the Points element. See [[#PointsMethods]]
- The cells are described implicitly by the extent.

```xml
<VTKFile type="StructuredGrid" ...>
  <StructuredGrid WholeExtent="x1 x2 y1 y2 z1 z2">
    <Piece Extent="x1 x2 y1 y2 z1 z2">
    <PointData>...</PointData>
    <CellData>...</CellData>
    <Points>...</Points>
    </Piece>
  </StructuredGrid>
</VTKFile>
```

You can learn more about StructuredGrid from following examples:

- [[VTKFile_test_4]]
- [[VTKFile_test_5]]
- [[VTKFile_test_6]]
- [[VTKFile_test_7]]
- [[VTKFile_test_8]]

### PolyData

- Each PolyData piece specifies a set of points and cells independently from the other pieces.
- The points are described explicitly by the Points element.
- The cells are described explicitly by the Verts, Lines, Strips, and Polys elements.

```xml
<VTKFile type="PolyData" ...>
  <PolyData>
    <Piece NumberOfPoints="#" NumberOfVerts="#" NumberOfLines="#"
      NumberOfStrips="#" NumberOfPolys="#">
    <PointData>...</PointData>
    <CellData>...</CellData>
    <Points>...</Points>
    <Verts>...</Verts>
    <Lines>...</Lines>
    <Strips>...</Strips>
    <Polys>...</Polys>
   </Piece>
  </PolyData>
</VTKFile>
```

### UnstructuredGrid

- Each UnstructuredGrid piece specifies a set of points and cells independently from the other pieces. See [[#PieceMethods]]
- The points are described explicitly by the Points element. See [[#PointsMethods]]
- The cells are described explicitly by the Cells element. See [[#CellMethods]]

```xml
<VTKFile type="UnstructuredGrid" ...>
  <UnstructuredGrid>
    <Piece NumberOfPoints="#" NumberOfCells="#">
    <PointData>...</PointData>
    <CellData>...</CellData>
    <Points>...</Points>
    <Cells>...</Cells>
    </Piece>
  </UnstructuredGrid>
</VTKFile>
```

## Module structure

```fortran
TYPE, EXTENDS( XMLFile_ ) :: VTKFile_
  PRIVATE
  LOGICAL( LGT ) :: isStructured = .FALSE.
    !! Is dataset structured
  INTEGER( I4B ) :: dataStructureType = 0
    !! 1 : VTK_ImageData
    !! 2 : VTK_RectilinearGrid
    !! 3 : VTK_StructuredGrid
    !! 4 : VTK_PolyData
    !! 5 : VTK_UnstructuredGrid
    !! 6 : PARALLEL_VTK_ImageData
    !! 7 : PARALLEL_VTK_RectilinearGrid
    !! 8 : PARALLEL_VTK_StructuredGrid
    !! 9 : PARALLEL_VTK_PolyData
    !! 10: PARALLEL_VTK_UnstructuredGrid
  CHARACTER( LEN = MAX_LEN_DATA_STRUCTURENAME ) :: dataStructureName
    !! ImageData,
    !! RectilinearGrid,
    !! StructuredGrid,
    !! PolyData,
    !! UnstructuredGrid
    !! PImageData
    !! PRectilinearGrid
    !! PStructuredGrid
    !! PPolyData
    !! PUnstructuredGrid
  INTEGER( I4B ) :: dataFormat = 0
    !! VTK_ASCII
    !! VTK_BINARY
    !! VTK_APPENDED
    !! VTK_RAW_APPENDED
    !! VTK_BINARY_APPENDED
  INTEGER( I4B ) :: wholeExtent( 6 ) = 0
    !! Whole extent
  INTEGER( I4B ) :: indent = 0
    !! Indent
  INTEGER( I4B ) :: offset = 0
    !! offset for appended mode
  TYPE( String ) :: encoding4Appended
    !! appended data encoding: "raw" or "base64".
  INTEGER( I4B ) :: scratch=0
    !! Used for scratch file
  LOGICAL( LGT ) :: isVolatile = .FALSE.
  TYPE( String ) :: volatileBuffer
```

### VTKDataArrayEncoder

This module provides a function called `EncodeVTKDataArray` which helps us encoding the Fortran array into VTK Format.

We have following interface:

```fortran
MODULE FUNCTION EncodeVTKDataArray( x, fmt ) RESULT( Ans )
END FUNCTION EncodeVTKDataArray
```

- `x` is a Fortran array of intrinsic type, It can be a Rank-1, Rank-2, Rank-3 and Rank-4 array of `Real32`, `Real64`, `Int8`, `Int16`, `Int32`, `Int64`.
- `fmt` is a string variable having values `"ASCII", "BINARY"`. In ASCII format two numbers are separated by a space.
- `ans` is the encoded string

- Encoding of Rank-1 is easy to understand "x(1) x(2) x(3) ... x(N)"
- Encoding of Rank-2 is in Column major, that is, That is encoding of RESHAPE( x, [N*2])
- Encoding of higher rank is also in Column major, that is, encoding of RESHAPE( x, [N*Rank])

We have another interface described below.

```fortran
MODULE FUNCTION EncodeVTKDataArray( x, y, z, fmt ) RESULT( Ans )
END FUNCTION EncodeVTKDataArray
```

- `x,y,z` can be Rank-1, Rank-2, Rank-3 of type `Int8`, `Int16`, `Int32`, `Int64`,  `Real32`, and `Real64`
- `ans` is the encoded string
- The encoding of Rank-1 is "x(1) y(1) z(1) ... x(N) y(N) z(N)"
- The encoding of Rank-2 is in column major "x(1,jj) y(1, jj) z(1,jj) ... x(N,jj) y(N,jj) z(N,jj)".

### XMLFile

You can find more details at [[XMLFile_]]

## ConstructorMethods

### InitiateVTKFile

This subroutine creates an instance of `VTKFile`. This routine initiates the `XMLFile`, and opens it. It also write header file by calling `WriteRootTag()` and DataStructure tag by calling `WriteDataStructureTag()`. It also opens the scratch file.

The interface is given below

```fortran
MODULE SUBROUTINE InitiateVTKFile( obj, filename, mode, DataFormat, &
  & DataStructureType, WholeExtent, isVolatile, meshDataFormat, &
  & Spacing, Origin )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
  CHARACTER( LEN = * ), INTENT( IN ) :: filename
    !! Name of the file, where xml data will be printed
  CHARACTER( LEN = * ), INTENT( IN ) :: mode
    !! READ, WRITE, NEW, REPLACE
  INTEGER( I4B ), INTENT( IN ) :: DataFormat
    !! VTK_ASCII, VTK_APPENEDED, VTK_BINARY
  INTEGER( I4B ), INTENT( IN ) :: DataStructureType
    !! VTK_IMAGEDATA, VTK_STRUCTUREDGRID, etc.
  INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: WholeExtent( : )
    !! Required for structured data set
    !! [x1, x2, y1, y2, z1, z2]
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: isVolatile
    !! True if volatileBuffer is used to keep the xml file
  CHARACTER( LEN = * ), OPTIONAL, INTENT( IN ) :: meshDataFormat
    !! Float32, Float64, etc
  INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: Spacing( : )
    !! dx, dy, dz, needed in case of ImageData
  INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: Origin( : )
    !! x0, y0, z0, needed in case of ImageData
END SUBROUTINE InitiateVTKFile
```

### AddSurrogate

Add surrogate to the module exception handler

```fortran
MODULE SUBROUTINE AddSurrogate( obj, UserObj )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
  TYPE( ExceptionHandler_ ), INTENT( IN ) :: UserObj
END SUBROUTINE AddSurrogate
```

### Deallocate

Deallocate the data stored in the file, and close the file.

```fortran
MODULE SUBROUTINE Deallocate( obj, delete )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: delete
END SUBROUTINE Deallocate
```

### Close

If the file is open then close the file.

```fortran
MODULE SUBROUTINE Close( obj )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
END SUBROUTINE Close
```

### OpenScratchFile

Opens the scratch file if data format is `VTK_APPENDED`

```fortran
MODULE SUBROUTINE OpenScratchFile( obj )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
END SUBROUTINE OpenScratchFile
```

### CloseScratchFile

Closes the scratchFile

```fortran
MODULE SUBROUTINE CloseScratchFile( obj )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
END SUBROUTINE CloseScratchFile
```

## TagsMethods

### WriteRootTag

This routine write the root tag. This routine is called when we initiate
the VTKFile.

The document-level element is _VTKFile_:

```xml
<VTKFile type=”ImageData” version=”0.1” byte_order=”LittleEndian”> ... </VTKFile>
```

The attributes of the element are:

- `type` — The type of the file (the bulleted items in the previous list)
- `version` — File version number in “major.minor” format.
- `byte_order` — Machine byte order in which data are stored. This is either “BigEndian” or “LittleEndian”.
- `compressor` — Some data in the file may be compressed. This specifies the subclass of [vtkDataCompressor](https://www.vtk.org/doc/nightly/html/classvtkDataCompressor.html#details) that was used to compress the data.

Nested inside the `VTKFile` element is an element whose name corresponds to the type of the data format (i.e., the `type` attribute). This element describes the topology the dataset, and is different for the serial and parallel formats, which are described as follows.

The fortran interface for `WriteRootTag` is given below:

```fortran
MODULE SUBROUTINE VTKFile_WriteRootTag( obj )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
END SUBROUTINE VTKFile_WriteRootTag
END INTERFACE
```

### WriteDataStructureTag

Please read the InitiateVTKFile routine.

```fortran
MODULE SUBROUTINE VTKFile_WriteDataStructureTag( obj, meshDataFormat )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
  CHARACTER( LEN = * ), OPTIONAL, INTENT( IN ) :: meshDataFormat
    !! Float32, Float64
    !! It should be present for parallel data structure
    !! PARALLEL_VTK_RECTILINEARGRID, PARALLEL_VTK_STRUCTUREDGRID,
    !! PARALLEL_VTK_UNSTRUCTUREDGRID
END SUBROUTINE VTKFile_WriteDataStructureTag
```

### WriteStartTag

```fortran
MODULE SUBROUTINE VTKFile_WriteStartTag( obj, name, attrNames, attrValues )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
  TYPE( String ), INTENT( IN ) :: name
  TYPE( String ), OPTIONAL, INTENT( IN ) :: attrNames( : )
  TYPE( String ), OPTIONAL, INTENT( IN ) :: attrValues( : )
END SUBROUTINE VTKFile_WriteStartTag
```

### WriteEndTag

```fortran
MODULE SUBROUTINE VTKFile_WriteEndTag( obj, name )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
  TYPE( String ), INTENT( IN ) :: name
END SUBROUTINE VTKFile_WriteEndTag
```

### WriteSelfClosingTag

```fortran
MODULE SUBROUTINE VTKFile_WriteSelfClosingTag( obj, name, attrNames, &
  & attrValues )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
  TYPE( String ), INTENT( IN ) :: name
  TYPE( String ), OPTIONAL, INTENT( IN ) :: attrNames( : )
  TYPE( String ), OPTIONAL, INTENT( IN ) :: attrValues( : )
END SUBROUTINE VTKFile_WriteSelfClosingTag
```

### WriteTag

```fortran
MODULE SUBROUTINE VTKFile_WriteTag( obj, name, attrNames, &
  & attrValues, content )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
  TYPE( String ), INTENT( IN ) :: name
  TYPE( String ), OPTIONAL, INTENT( IN ) :: attrNames( : )
  TYPE( String ), OPTIONAL, INTENT( IN ) :: attrValues( : )
  TYPE( String ), OPTIONAL, INTENT( IN ) :: content
END SUBROUTINE VTKFile_WriteTag
```

## VertMethods

**Verts, Lines, Strips, and Polys** — The Verts, Lines, Strips, and Polys elements define cells explicitly by specifying point connectivity. Cell types are implicitly known by the type of element in which they are specified. Each element contains two DataArray elements. The first array specifies the point connectivity. All the cells’ point lists are concatenated together. The second array specifies the offset into the connectivity array for the end of each cell.

```xml
<Verts>
  <DataArray type="Int32" Name="connectivity" .../>
  <DataArray type="Int32" Name="offsets" .../>
</Verts>
```

### WriteVerts

```fortran
MODULE SUBROUTINE WriteVerts( obj, connectivity, offsets )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: connectivity( : )
  INTEGER( I4B ), INTENT( IN ) :: offsets( : )
END SUBROUTINE WriteVerts
```

## CellMethods

**Cells** — The Cells element defines cells explicitly by specifying point connectivity and cell types. It contains three DataArray elements. The first array specifies the point `connectivity`. All the cells’ point lists are concatenated together. The second array specifies the `offset` into the connectivity array for the end of each cell. The third array specifies the `type` of each cell.

```xml
  <Cells>
    <DataArray type="Int32" Name="connectivity" .../>
    <DataArray type="Int32" Name="offsets" .../>
    <DataArray type="UInt8" Name="types" .../>
  </Cells>
```

### WriteCells

```fortran
INTERFACE
MODULE SUBROUTINE WriteCells( obj, connectivity, offsets, types )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: connectivity( : )
  INTEGER( I4B ), INTENT( IN ) :: offsets( : )
  INTEGER( Int8 ), INTENT( IN ) :: types( : )
END SUBROUTINE WriteCells
END INTERFACE
```

## DataArrayMethods

Every dataset describes the data associated with its points and cells with PointData and CellData XML elements as follows:

```xml
  <PointData Scalars="Temperature" Vectors="Velocity">
    <DataArray Name="Velocity" .../>
    <DataArray Name="Temperature" .../>
    <DataArray Name="Pressure" .../>
  </PointData>
```

We specify `PointData` or `CellData` by using the [[#WriteDataArrayLocationTag]]. We can write DataArray element by using [[#WriteDataArrayTag]]. The content inside the DataArray can also be written by using [[#WriteDataArrayTag]]. One can also use the [[#WriteDataArray]] method to write the content in simple way.

VTK allows an arbitrary number of data arrays to be associated with the points and cells of a dataset. Each data array is described by a `DataArray` element which, among other things, gives each array a name. The following attributes of `PointData` and `CellData` are used to specify the active arrays by name:

- Scalars — The name of the active scalars array, if any.
- Vectors — The name of the active vectors array, if any.
- Normals — The name of the active normals array, if any.
- Tensors — The name of the active tensors array, if any.
- TCoords — The name of the active texture coordinates array, if any.

**DataArray** — The DataArray element stores a sequence of values of one type. There may be one or more components per value.

```xml
<DataArray type="Float32" Name="vectors" NumberOfComponents="3"
           format="appended" offset="0"/>
<DataArray type="Float32" Name="scalars" format="binary">
           bAAAAAAAAAAAAIA/AAAAQAAAQEAAAIBA... </DataArray>
<DataArray type="Int32" Name="offsets" format="ascii">
           10 20 30 ... </DataArray>
```

The attributes of the `DataArray` elements are described as follows

`type` — The data type of a single component of the array. This is one of Int8, UInt8, Int16, UInt16, Int32, UInt32, Int64, UInt64, Float32, Float64. Note: the 64-bit integer types are only supported if `VTK_USE_64BIT_IDS` is on the platform is 64-bit.

**Name** — The name of the array. This is usually a brief description of the data stored in the array.

**NumberOfComponents** — The number of components per value in the array.

**format** — The means by which the data values themselves are stored in the file. This is “ascii”, “binary”, or “appended”.

**offset** — If the format attribute is “appended”, this specifies the offset from the beginning of the appended data section to the beginning of this array’s data.

The format attribute chooses among the three ways in which data values can be stored:

- format=”ascii” — The data are listed in ASCII directly inside the DataArray element. Whitespace is used for separation.
- format=”binary” — The data are encoded in base64 and listed contiguously inside the DataArray element. Data may also be compressed before encoding in base64. The byte-order of the data matches that specified by the byte_order attribute of the VTKFile element.
- format=”appended” — The data are stored in the appended data section. Since many DataArray elements may store their data in this section, the offset attribute is used to specify where each DataArray’s data begins. This format is the default used by VTK’s writers.

The appended data section is stored in an AppendedData element that is nested inside VTKFile after the dataset element:

```xml
<VTKFile ...>
  ...
  <AppendedData encoding="base64">
                _QMwEAAAAAAAAA...
  </AppendedData>
</VTKFile>
```

The appended data section begins with the first character after the underscore inside the AppendedData element. The underscore is not part of the data, but is always present. Data in this section is always in binary form, but can be compressed and/or base64 encoded. The byte-order of the data matches that specified by the byte_order attribute of the VTKFile element. Each DataArray’s data are stored contiguously and appended immediately after the previous DataArray’s data without a seperator. The DataArray’s offset attribute indicates the file position offset from the first character after the underscore to the beginning its data.

### WriteDataArrayLocationTag

```fortran
MODULE SUBROUTINE VTKFile_WriteDataArrayLocationTag( obj, location, action )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
  TYPE( String ), INTENT( IN ) :: location
    !! "CELL" and "NODE"
  TYPE( String ), INTENT( IN ) :: action
    !! "OPEN" or "CLOSE"
END SUBROUTINE VTKFile_WriteDataArrayLocationTag
```

### WriteDataArrayTag

```fortran
MODULE SUBROUTINE VTKFile_WriteDataArrayTag( obj, dataType, name, &
  & numberOfComponents, content, isTuples, isOffset )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
  TYPE( String ), INTENT( IN ) :: dataType
  TYPE( String ), INTENT( IN ) :: name
  INTEGER( I4B ), INTENT( IN ) :: numberOfComponents
  TYPE( String ), OPTIONAL, INTENT( IN ) :: content
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: isTuples
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: isOffset
END SUBROUTINE VTKFile_WriteDataArrayTag
```

### WriteDataArray

This routine write the data array to VTK file. There are two main interface as explained below. This routine encode the fortran array into strings and then make a call to [[#WriteDataArrayTag]] routine.

Interface:

```fortran
MODULE SUBROUTINE WriteDataArray( obj, name, x, isTuples, numberOfComponents )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
  TYPE( String ), INTENT( IN ) :: name
  TYPE( Real32/Real64/Int8/Int16/Int32/Int64 ), INTENT( IN ) :: x (rank-1/2/3/4)
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: isTuples
  INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: numberOfComponents
END SUBROUTINE WriteDataArray
```

- Here `x` can be a rank-1,2,3,4 array of Fortran intrinsic type  Int8/Int16/Int32/Int64, Real32/Real64
- `isTuples`
- `numberOfComponents` For rank-1 array, by default the number of components will be 1. For rank>1, the number of components will be the size of first dimension, that is, SIZE(x,1).

The another interface is given below

```fortran
MODULE SUBROUTINE WriteDataArray( obj, name, x, y, z, isTuples )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
  TYPE( String ), INTENT( IN ) :: name
  TYPE( Real32/Real64/Int8/Int16/Int32/Int64 ), INTENT( IN ) :: x (rank-1/2/3/4)
  TYPE( Real32/Real64/Int8/Int16/Int32/Int64 ), INTENT( IN ) :: y (rank-1/2/3/4)
  TYPE( Real32/Real64/Int8/Int16/Int32/Int64 ), INTENT( IN ) :: z (rank-1/2/3/4)
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: isTuples
END SUBROUTINE WriteDataArray
```

In this case the number of components are always 3.

## DataArrayAppendedMethods

### WriteToScratch

This generic routine can be used to write to scratch file.

Interface-1:

```fortran
MODULE SUBROUTINE WriteToScratch( obj, x )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
  TYPE( Int8/Int16/Int32/Int64/Real32/Real64 ), INTENT( IN ) :: x (rank-1/2/3/4)
END SUBROUTINE WriteToScratch
```

```fortran
MODULE SUBROUTINE VTKFile_WriteToScratch5( obj, x, y, z )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
  TYPE( Int8/Int16/Int32/Int64/Real32/Real64 ), INTENT( IN ) :: x( rank-1/2/3 )
  TYPE( Int8/Int16/Int32/Int64/Real32/Real64 ), INTENT( IN ) :: y( rank-1/2/3 )
  TYPE( Int8/Int16/Int32/Int64/Real32/Real64 ), INTENT( IN ) :: z( rank-1/2/3 )
END SUBROUTINE VTKFile_WriteToScratch5
```

## FieldDataMethods

### WriteFieldData

```fortran
MODULE SUBROUTINE WriteFieldData( obj, name, x )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
  TYPE( String ), INTENT( IN ) :: name
  CLASS( * ), INTENT( IN ) :: x
END SUBROUTINE WriteFieldData
```

```fortran
MODULE SUBROUTINE WriteFieldData( obj, action )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
  TYPE( String ), INTENT( IN ) :: action
    !! Open, Close
END SUBROUTINE WriteFieldData
```

## PointsMethods

Also see [[#InitiateVTKFile]] routine to check Datastructure where Points element is needed. The Points element explicitly defines coordinates for each point individually. It contains one `DataArray` element describing an array with three components per value, each specifying the coordinates of one point.

```xml
<Points>
  <DataArray NumberOfComponents=”3” .../>
</Points>
```

**Coordinates** — The Coordinates element defines point coordinates for an extent by specifying the ordinate along each axis for each integer value in the extent’s range. It contains three DataArray elements describing the ordinates along the x-y-z axes, respectively. It is needed by `RectilinearGrid` Datastructure.

```xml
<Coordinates>
  <DataArray .../>
  <DataArray .../>
  <DataArray .../>
</Coordinates>
```

### WritePoints

Interface-1:

```fortran
MODULE SUBROUTINE WritePoints( obj, x, y, z )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
  REAL( Real64/Real32 ), INTENT( IN ) :: x( : )
  REAL( Real64/Real32 ), INTENT( IN ) :: y( : )
  REAL( Real64/Real32 ), INTENT( IN ) :: z( : )
END SUBROUTINE WritePoints
```

Interface-2:

```fortran
MODULE SUBROUTINE WritePoints( obj, x )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
  REAL( Real64/Real32 ), INTENT( IN ) :: x( 1: )
END SUBROUTINE WritePoints
```

Interface-3: Some time we compute x, y, z from meshgrid. In such cases x, y and z will be rank-3. where x(I,J,K) denote the x coord of Ith node in x, Jth node in y, and Kth node in z direction. See example [[VTKFile_test_4]]

```fortran
MODULE SUBROUTINE WritePoints( obj, x, y, z )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
  REAL( Real64/Real32 ), INTENT( IN ) :: x( :, :, : )
  REAL( Real64/Real32 ), INTENT( IN ) :: y( :, :, : )
  REAL( Real64/Real32 ), INTENT( IN ) :: z( :, :, : )
END SUBROUTINE WritePoints
```

Interface-4:

```fortran
MODULE SUBROUTINE WritePoints( obj, x )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
  REAL( Real64/Real32 ), INTENT( IN ) :: x( :, :, :, : )
END SUBROUTINE WritePoints
```

## PieceMethods

See [[#InitiateVTKFile]] to see where PieceMethods are useful.

Write Piece for [[#ImageData]], [[#RectilinearGrid]], [[#StructuredGrid]]

```fortran
MODULE SUBROUTINE WritePiece( obj, extent, srcFileName )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: extent( : )
  CHARACTER( LEN = * ), OPTIONAL, INTENT( IN ) :: srcFileName
END SUBROUTINE WritePiece
```

Write Piece element for [[#UnstructuredGrid]]

```fortran
MODULE SUBROUTINE WritePiece( obj, nPoints, nCells )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: nPoints
  INTEGER( I4B ), INTENT( IN ) :: nCells
END SUBROUTINE WritePiece
```

Write Piece element for [[#PolyData]]

```fortran
MODULE SUBROUTINE WritePiece( obj, nPoints, nVerts, nLines, &
  & nStrips, nPolys )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: nPoints
  INTEGER( I4B ), INTENT( IN ) :: nVerts
  INTEGER( I4B ), INTENT( IN ) :: nLines
  INTEGER( I4B ), INTENT( IN ) :: nStrips
  INTEGER( I4B ), INTENT( IN ) :: nPolys
END SUBROUTINE WritePiece
```

The following close the Piece element.

```fortran
MODULE SUBROUTINE WritePiece( obj )
  CLASS( VTKFile_ ), INTENT( INOUT ) :: obj
END SUBROUTINE WritePiece
```
