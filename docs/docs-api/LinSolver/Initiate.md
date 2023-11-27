# Initiate

Initiate an instance of LinSolver.

## Interface

```fortran
INTERFACE
  SUBROUTINE Initiate(obj, param)
    CLASS(LinSolver_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
  END SUBROUTINE Initiate
END INTERFACE
```

### Example

The following code explains how to construct `LinSolver` using `initiate` method

```fortran
  type( LinSolver_ ) :: obj
  type( ParameterList_ ) :: param
  integer( i4b ) :: ierr, tnodes
  call display( "TESTING INITIATE AND Deallocate" )
  call FPL_INIT(); call param%initiate()
  call setLinSolverParam( param=param, solverName=LIS_CG,&
    & preconditionOption=LEFT_PRECONDITION, convergenceIn=convergenceInRes, &
    & convergenceType=relativeConvergence, maxIter=100,relativeToRHS=.TRUE., &
    & KrylovSubspaceSize=20,rtol=1.0D-10,atol=1.0D-10 )
  call obj%initiate(param)
  call obj%Display("LinSolver : ")
  call obj%Deallocate()
  call param%Deallocate(); call FPL_FINALIZE()
```
