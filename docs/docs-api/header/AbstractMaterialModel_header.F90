TYPE, ABSTRACT :: AbstractMaterialModel_
  LOGICAL( LGT ) :: isInitiated = .FALSE.
  TYPE( String ) :: name
  CONTAINS
    PRIVATE
    PROCEDURE( amb_checkEssentialParam ), DEFERRED, PUBLIC, PASS( obj ) :: &
      & checkEssentialParam
    PROCEDURE( amb_addSurrogate ), DEFERRED, PUBLIC, PASS( obj ) :: &
      & addSurrogate
    PROCEDURE( amb_Initiate ), DEFERRED, PUBLIC, PASS( obj ) :: Initiate
    PROCEDURE( amb_Deallocate ), DEFERRED, PUBLIC, PASS( obj ) :: &
      & Deallocate
    PROCEDURE( amb_Import ), DEFERRED, PUBLIC, PASS( obj ) :: Import
    PROCEDURE( amb_Export ), DEFERRED, PUBLIC, PASS( obj ) :: Export
    PROCEDURE( amb_Display ), DEFERRED, PUBLIC, PASS( obj ) :: Display
END TYPE AbstractMaterialModel_