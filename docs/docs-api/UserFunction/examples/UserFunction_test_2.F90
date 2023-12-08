!> authors: Vikas Sharma, Ph. D.
! date: 26 Oct 2021
! summary: testing user function

MODULE MyFunction_Module
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE, EXTENDS( UserFunction_ ) :: MyUserFunction_
    CONTAINS
    PROCEDURE, PUBLIC, PASS( obj ) :: getScalarValue => myf_getScalarValue
  END TYPE MyUserFunction_
  CONTAINS
  RECURSIVE SUBROUTINE myf_getScalarValue(obj, val, args)
    CLASS( MyUserFunction_ ), INTENT( INOUT ) :: obj
    REAL( DFP ), INTENT( OUT ) :: val
    REAL( DFP ), OPTIONAL, INTENT( IN ) :: args( : )
    CALL obj%Initiate( returnType=SCALAR, argType=CONSTANT )
    val = 12.0_DFP
  END SUBROUTINE myf_getScalarValue
END MODULE MyFunction_Module

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

PROGRAM main
  USE MyFunction_Module
  IMPLICIT NONE
  TYPE( UserFunction_ ) :: obj
  TYPE( MyUserFunction_ ) :: MyUserFunction
  REAL( DFP ) :: val
  CALL obj%SET( MyUserFunction )
  CALL obj%get(val=val)
  WRITE( *, * ) "val : ", val
  CALL obj%Display("")
END PROGRAM main
