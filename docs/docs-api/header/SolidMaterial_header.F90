TYPE, EXTENDS( AbstractMaterial_ ) :: SolidMaterial_
  REAL( DFP ) :: massDensity = 0.0_DFP
  CLASS( AbstractSolidMechanicsModel_ ), POINTER::stressStrainModel=>NULL()
    !! Pointer to stress strain material behavior of solids
  CONTAINS
  PRIVATE
  PROCEDURE, PUBLIC, PASS( obj ) :: checkEssentialParam => &
    & solid_checkEssentialParam
  PROCEDURE, PUBLIC, PASS( obj ) ::addSurrogate => solid_addSurrogate
  PROCEDURE, PUBLIC, PASS( obj ) :: Initiate => solid_Initiate
  PROCEDURE, PUBLIC, PASS( obj ) ::Deallocate => solid_Deallocate
  FINAL :: solid_Final
  PROCEDURE, PUBLIC, PASS( obj ) :: Import => solid_Import
  PROCEDURE, PUBLIC, PASS( obj ) :: Export => solid_Export
  PROCEDURE, PUBLIC, PASS( obj ) :: Display => solid_Display
END TYPE SolidMaterial_