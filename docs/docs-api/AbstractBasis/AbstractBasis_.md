# AbstractBC\_

- `AbstractBasis1D_`
- `AbstractBasis2D_`
- `AbstractBasis3D_`
- `AbstractBasisND_`

are abstract classes for basis functions in 1D/2D/3D/ND. They are children of

- `AbstractFunction1D_`
- `AbstractFunction2D_`
- `AbstractFunction3D_`
- `AbstractFunctionND_`

classes as discussed in [AbstractFunction\_](../AbstractFunction/AbstractFunction_.md).

## Structure

```fortran
TYPE, ABSTRACT, EXTENDS(AbstractFunction1D_) :: AbstractBasis1D_
  INTEGER(I4B) :: uid = 0
END TYPE AbstractBasis1D_
```

```fortran
TYPE, ABSTRACT, EXTENDS(AbstractFunction2D_) :: AbstractBasis2D_
  INTEGER(I4B) :: uid = 0
END TYPE AbstractBasis2D_
```

```fortran
TYPE, ABSTRACT, EXTENDS(AbstractFunction3D_) :: AbstractBasis3D_
  INTEGER(I4B) :: uid = 0
END TYPE AbstractBasis3D_
```

```fortran
TYPE, ABSTRACT, EXTENDS(AbstractFunctionND_) :: AbstractBasisND_
  INTEGER(I4B) :: uid = 0
END TYPE AbstractBasisND_
```
