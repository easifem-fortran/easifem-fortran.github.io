# AbstractMaterial

`AbstractMaterial_` is an abstract class for defining material and its behavior.

## Structure

```fortran
TYPE, ABSTRACT :: AbstractMaterial_
  LOGICAL( LGT ) :: isInitiated = .FALSE.
  TYPE( String ) :: name
    !! name of the material
  REAL( DFP ) :: massDensity = 0.0_DFP
    !! mass density of the fluid
  REAL( DFP ) :: dynamicViscosity = 0.0_DFP
    !! dynamic viscosity
  REAL( DFP ) :: thermalConductivity = 0.0_DFP
    !! thermal conductivity
  REAL( DFP ) :: specificHeatCapacity = 0.0_DFP
    !! Specific heat capacity
  REAL( DFP ) :: volHeatCapacity = 0.0_DFP
    !! volume heat capacity
  CLASS( UserFunction_ ), POINTER :: thermalDiffusivity => NULL()
    !! thermal diffusivity model
  CLASS( UserFunction_ ), POINTER :: diffusivity => NULL()
    !! thermal diffusivity model
  REAL( DFP ) :: meltingTemp = 0.0_DFP
    !! melting temperature
  REAL( DFP ) :: boilingTemp = 0.0_DFP
    !! boiling temperature
  REAL( DFP ) :: criticalTemp = 0.0_DFP
    !! critical temperature
  REAL( DFP ) :: criticalPressure = 0.0_DFP
    !! critical pressure
  REAL( DFP ) :: triplePointPressure = 0.0_DFP
    !! triple point pressure
  REAL( DFP ) :: triplePointTemp = 0.0_DFP
    !! triple point temperature
  REAL( DFP ) :: latentHeatMelting = 0.0_DFP
    !! latent heat of melting
  REAL( DFP ) :: latentHeatBoiling = 0.0_DFP
    !! latent heat of boil
  REAL( DFP ) :: volThermalCoeff = 0.0_DFP
    !! volumetric thermal coefficient
  REAL( DFP ) :: bulkModulus = 0.0_DFP
    !! bulk modulus
  REAL( DFP ) :: porosity=0.0_DFP
    !! Porosity
END TYPE AbstractMaterial_
```

## Methods

We need to provide implementation of following routines while extending this class.

### CheckEssentialParam

```fortran
ABSTRACT INTERFACE
SUBROUTINE checkEssentialParam( obj, param )
IMPORT
CLASS( AbstractMaterial_ ), INTENT( IN ) :: obj
TYPE( ParameterList_ ), INTENT( IN ) :: param
END SUBROUTINE checkEssentialParam
END INTERFACE
```

### Initiate

```fortran
ABSTRACT INTERFACE
SUBROUTINE Initiate( obj, param )
IMPORT
CLASS( AbstractMaterial_ ), INTENT( INOUT ) :: obj
TYPE( ParameterList_ ), INTENT( IN ) :: param
END SUBROUTINE Initiate
END INTERFACE
```

### Deallocate

```fortran
ABSTRACT INTERFACE
SUBROUTINE Deallocate( obj )
IMPORT
CLASS( AbstractMaterial_ ), INTENT( INOUT ) :: obj
END SUBROUTINE Deallocate
END INTERFACE
```

### Import

```fortran
ABSTRACT INTERFACE
SUBROUTINE Import( obj, hdf5, group )
IMPORT
CLASS( AbstractMaterial_ ), INTENT( INOUT ) :: obj
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
CLASS( AbstractMaterial_ ), INTENT( IN ) :: obj
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
CLASS( AbstractMaterial_ ), INTENT( INOUT ) :: obj
CHARACTER( LEN = * ), INTENT( IN ) :: msg
INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: unitNo
END SUBROUTINE Display
END INTERFACE
```
