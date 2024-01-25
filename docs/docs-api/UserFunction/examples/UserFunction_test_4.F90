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
    CALL obj%Initiate( returnType=SCALAR, argType=SPACETIME )
    val = ( args(1)**2 + args(2)**2 + args(3)**2 )*SIN(2.0*PI*args(4))
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
  CALL obj%get(val=val, args=[1.0_DFP,2.0_DFP,3.0_DFP,0.25_DFP])
  WRITE( *, * ) "val : ", val
  CALL obj%Display("")
END PROGRAM main
