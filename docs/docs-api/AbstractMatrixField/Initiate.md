# Initiate

This method constructs an instance of AbstractMatrixField.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="1" label="Interface 1" default>

```fortran
INTERFACE
SUBROUTINE Initiate( obj, param, dom )
  CLASS( AbstractMatrixField_ ), INTENT( INOUT ) :: obj
  TYPE( ParameterList_), INTENT( IN ) :: param
  TYPE( Domain_ ), TARGET, INTENT( IN ) :: dom
END SUBROUTINE Initiate
END INTERFACE
```

</TabItem>

<TabItem value="2" label="Interface 2">

Initiate by copying from other fields

```fortran
INTERFACE
SUBROUTINE Initiate( obj, obj2, copyFull, copyStructure, &
  & usePointer )
  CLASS( AbstractMatrixField_ ), INTENT( INOUT ) :: obj
  CLASS( AbstractMatrixField_ ), INTENT( INOUT ) :: obj2
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: copyFull
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: copyStructure
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: usePointer
END SUBROUTINE Initiate
END INTERFACE
```

</TabItem>

<TabItem value="3" label="Interface 3">

Initiate by reading from parameters. This is used for block data structure.

```fortran
INTERFACE
  SUBROUTINE Initiate(obj, param, dom)
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    TYPE(DomainPointer_), TARGET, INTENT(IN) :: dom(:)
  END SUBROUTINE Initiate
END INTERFACE
```

</TabItem>

</Tabs>

## Example 

```fortran
  type( domain_ ) :: dom
  type( MatrixField_ ) :: obj
  type( HDF5File_ ) :: meshfile, hdf5
  type( ParameterList_ ) :: param
  integer( i4b ) :: ierr, tnodes
  call display( "TESTING INITIATE AND Deallocate" )
  CALL FPL_INIT()
  call meshfile%initiate( filename="./mesh.h5", mode="READ" )
  call meshfile%open()
  call dom%initiate( meshfile )
  call meshfile%close()
  call meshfile%Deallocate()
  tnodes = dom%getTotalNodes()
  call param%initiate()
  call setMatrixFieldParam( param, "K", "UNSYM", 3, 2, FIELD_TYPE_NORMAL )
  call obj%initiate( param, dom )
  CALL hdf5%initiate(filename="./matrixField.h5", mode="NEW" )
  CALL hdf5%open()
  CALL obj%export(hdf5=hdf5,group='')
  CALL hdf5%close()
  CALL hdf5%Deallocate()
  call obj%Deallocate()
  call dom%Deallocate()
  call param%Deallocate()
  call FPL_FINALIZE()
```
