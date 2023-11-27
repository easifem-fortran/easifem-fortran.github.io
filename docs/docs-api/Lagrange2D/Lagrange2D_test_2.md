This example shows the usage of [[Lagrange2D_]] class.

## Modules and classes

- [[Lagrange2D_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(Lagrange2D_) :: f1
type(Lagrange2D_), allocatable :: f(:)
real(dfp), allocatable :: x( :, : )
integer(i4b) :: ii, order, n
```

!!! note "order=1"

```fortran
  order=1
  x = EquidistancePoint(order=order, elemType=Quadrangle)
  f1=Lagrange2D( order=order, i=1, x=x, name1="x", name2="y", elemType=Quadrangle )
  call f1%display( 'f(x)=' )
  f1=Lagrange2D( order=order, i=2, x=x, name1="x", name2="y", elemType=Quadrangle )
  call f1%display( 'f(x)=' )
  f1=Lagrange2D( order=order, i=3, x=x, name1="x", name2="y", elemType=Quadrangle )
  call f1%display( 'f(x)=' )
  f1=Lagrange2D( order=order, i=4, x=x, name1="x", name2="y", elemType=Quadrangle )
  call f1%display( 'f(x)=' )
```

!!! example "result"

$$
f(x)=+0.25-0.25 y^1-0.25x^1+0.25x^1 y^1
$$


$$
f(x)=+0.25-0.25 y^1+0.25x^1-0.25x^1 y^1 
$$ 

$$
f(x)=+0.25+0.25 y^1+0.25x^1+0.25x^1 y^1 
$$

$$
f(x)=+0.25+0.25 y^1-0.25x^1-0.25x^1 y^1
$$

!!! note "order=2"

```fortran
  order = 2_I4B
  x = EquidistancePoint(order=order, elemType=Quadrangle)
  n = LagrangeDOF( order=order, elemType=Quadrangle )
  allocate( f(n) )
  do ii = 1, n
    f(ii) = Lagrange2D(i=ii, x=x, order=order, &
      & name1="x", name2="y", elemType=Quadrangle)
    call f(ii)%display("l_{"//tostring(ii)//"}=")
  end do
  deallocate( f )
```

!!! example "result"

$$
l_{1}=+0.25x^1 y^1-0.25x^1 y^2-0.25x^2 y^1+0.25x^2 y^2
$$

$$
l_{2}=-0.25x^1 y^1+0.25x^1 y^2-0.25x^2 y^1+0.25x^2 y^2
$$

$$
l_{3}=+0.25x^1 y^1+0.25x^1 y^2+0.25x^2 y^1+0.25x^2 y^2
$$

$$
l_{4}=-0.25x^1 y^1-0.25x^1 y^2+0.25x^2 y^1+0.25x^2 y^2
$$

$$
l_{5}=+0.5 y^2-0.5 y^1+0.5x^2 y^1-0.5x^2 y^2
$$

$$
l_{6}=+0.5x^1-0.5x^1 y^2+0.5x^2-0.5x^2 y^2
$$

$$
l_{7}=+0.5 y^2+0.5 y^1-0.5x^2 y^1-0.5x^2 y^2
$$

$$
l_{8}=-0.5x^1+0.5x^1 y^2+0.5x^2-0.5x^2 y^2
$$

$$
l_{9}=+1-1 y^2-1x^2+1x^2 y^2
$$

```fortran
END PROGRAM main
```
