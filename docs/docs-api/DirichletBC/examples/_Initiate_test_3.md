In this example we initiate an instance of [DirichletBC](/docs-api/DirichletBC) by using the
[UserFunction](/docs-api/UserFunction).
The user function will be configured to give space-dependent value.
In other words, we implement following boundary condition.

$$
u = g(x, y, z)
$$

We will define a pointer to `UserFunction_` and then call [Set](/docs-api/AbstractBC/Set) method.
Then, the `Set` method will point to the user supplied `UserFunction`.

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE

CHARACTER(*), PARAMETER :: myName = "main"
CHARACTER(*), PARAMETER :: modName = "main"
TYPE(DirichletBC_) :: obj
TYPE(MeshSelection_) :: boundary
TYPE(ParameterList_) :: param
TYPE(Domain_) :: dom
TYPE(HDF5File_) :: domainfile
CLASS(UserFunction_), POINTER :: func
CHARACTER(*), PARAMETER :: domainfilename = "./mesh3D.h5"
INTEGER(I4B) :: bottom = 1, top = 2, left = 3, right = 4,  &
  & front = 5, behind = 6, nsd
INTEGER(I4B), ALLOCATABLE :: nodeNum(:)
REAL(DFP), ALLOCATABLE :: nodalValue(:, :)
PROCEDURE(iface_ScalarFunction), POINTER :: scalarFunction => NULL()
```

Initiate domain.

```fortran
CALL FPL_Init; CALL param%Initiate()
CALL domainfile%Initiate(filename=domainfilename, mode="READ")
CALL domainfile%OPEN()
CALL dom%Initiate(domainfile, group="")
nsd = dom%GetNSD()
```

We call Set [SetAbstractBCParam](/docs-api/AbstractBC/SetAbstractBCParam) to set the parameter for boundary condition.

```fortran
CALL SetAbstractBCParam(param=param, prefix=obj%GetPrefix(),  &
  & name="ZeroBC", idof=1, nodalValueType=Space, isUserFunction=.TRUE.)
```

We call [SetMeshSelectionParam](/docs-api/MeshSelection/SetMeshSelectionParam) to set the parameter for boundary condition.

```fortran
CALL SetMeshSelectionParam(param=param, prefix=boundary%GetPrefix(),  &
  & isSelectionByMeshID=.TRUE.)
```

We call [SetUserFunctionParam](/docs-api/UserFunction/SetUserFunctionParam) to set the parameter for boundary condition.

```fortran
CALL SetUserFunctionParam(param=param, name="bc", returnType=Scalar,  &
  & argType=Space)
```

[Initiate](docs-api/MeshSelection/Initiate) boundary condition.

```fortran
CALL boundary%Initiate(param)
CALL boundary%Add(dom=dom, dim=nsd - 1, meshID=[top])
CALL boundary%Set()
```

[Initiate](docs-api/DirichletBC/Initiate) Dirichlet boundary condition.

```fortran
CALL obj%Initiate(param=param, boundary=boundary, dom=dom)
```

[Initiate](docs-api/UserFunction/Initiate) user function.

```fortran
ALLOCATE (func)
CALL func%Initiate(param) 
scalarFunction => func1
CALL func%Set(scalarFunction=scalarFunction)
```

```fortran
CALL obj%Set(userFunction=func)
```

```fortran
CALL obj%Get(nodeNum=nodeNum, nodalValue=nodalValue)
```

```fortran
CALL domainfile%DEALLOCATE()
CALL dom%DEALLOCATE()
CALL param%DEALLOCATE(); CALL FPL_Finalize


contains 
pure function func1(x) result(ans)
  REAL( DFP ), OPTIONAL, INTENT( IN ) :: x(:)
  REAL( DFP ) :: ans
  ans = x(1) + x(2) + x(3)
end function func1
END PROGRAM main
```
