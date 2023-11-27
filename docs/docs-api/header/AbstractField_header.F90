TYPE, ABSTRACT :: AbstractField_
  LOGICAL( LGT ) :: isInitiated = .FALSE.
    !! It is true if the object is initiated
  INTEGER( I4B ) :: fieldType = FIELD_TYPE_NORMAL
    !! fieldType can be normal, constant, can vary in space and/ or both.
  TYPE( Domain_ ), POINTER :: domain => NULL()
    !! Domain contains the information of the finite element meshes.
  TYPE( DomainPointer_ ), ALLOCATABLE :: domains( : )
    !! Domain for each physical variables
    !! The size of `domains` should be equal to the total number of
    !! physical variables.
  TYPE( String ) :: name
    !! name of the field
  TYPE( String ) :: engine
    !! Engine of the field, for example NATIVE_SERIAL, NATIVE_OMP,
    !! NATIVE_MPI, PETSC, LIS_SERIAL, LIS_OMP, LIS_MPI