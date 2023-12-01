# AbstractMaterialModel

`AbstractMatrialModel_` is an abstract class for modeling the behavior of solids, fluids, porous materials, etc.

## Structure

The header of [AbstractMaterialModel_](AbstractMaterialModel_.md) is given below

```fortran
TYPE, ABSTRACT :: AbstractMaterialModel_
  LOGICAL(LGT) :: isInitiated = .FALSE.
  TYPE(String) :: name
```

`AbstractMaterialModel_` has following subclasses.

- `AbstractSolidMechanicsModel_`
- `AbstractPoroMechanicsModel_`
- `AbstractFluidMechanicsModel_`

## Methods

For a concrete implementation of `AbstractMaterialModel_` one has to implement the following methods.

### CheckEssentialParam

```fortran
ABSTRACT INTERFACE
SUBROUTINE checkEssentialParam( obj, param )
  IMPORT
  CLASS( AbstractMaterialModel_ ), INTENT( IN ) :: obj
  TYPE( ParameterList_ ), INTENT( IN ) :: param
END SUBROUTINE checkEssentialParam
END INTERFACE
```

### Initiate

```fortran
ABSTRACT INTERFACE
SUBROUTINE Initiate( obj, param )
  IMPORT
  CLASS( AbstractMaterialModel_ ), INTENT( INOUT ) :: obj
  TYPE( ParameterList_ ), INTENT( IN ) :: param
END SUBROUTINE Initiate
END INTERFACE
```

### Deallocate

```fortran
ABSTRACT INTERFACE
SUBROUTINE Deallocate( obj )
  IMPORT
  CLASS( AbstractMaterialModel_ ), INTENT( INOUT ) :: obj
END SUBROUTINE Deallocate
END INTERFACE
```

### Import

```fortran
ABSTRACT INTERFACE
SUBROUTINE Import( obj, hdf5, group )
  IMPORT
  CLASS( AbstractMaterialModel_ ), INTENT( INOUT ) :: obj
  TYPE( HDF5File_ ), INTENT( INOUT ) :: hdf5
  CHARACTER( LEN = * ), INTENT( IN ) :: group
END SUBROUTINE Import
END INTERFACE
```

### Export

```fortran
ABSTRACT INTERFACE
SUBROUTINE Export( obj, hdf5, group )
  IMPORT
  CLASS( AbstractMaterialModel_ ), INTENT( IN ) :: obj
  TYPE( HDF5File_ ), INTENT( INOUT ) :: hdf5
  CHARACTER( LEN = * ), INTENT( IN ) :: group
END SUBROUTINE Export
END INTERFACE
```

### Display

```fortran
ABSTRACT INTERFACE
SUBROUTINE Display( obj, msg, unitNo )
  IMPORT
  CLASS( AbstractMaterialModel_ ), INTENT( INOUT ) :: obj
  CHARACTER( LEN = * ), INTENT( IN ) :: msg
  INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: unitNo
END SUBROUTINE Display
END INTERFACE
```
