# LagrangeFE example 1

In this exmple we test Lagrange finite element on Line element.
Interpolation points are equidistance.

## Modules and classes

- [[LagrangeFE_]]

## Usage

```fortran
PROGRAM main
use easifemBase
use easifemClasses
implicit none
type(LagrangeFE_) :: obj
integer(i4b) :: order
integer(i4b), parameter :: elemType=Line
character(len=*), parameter :: elemName="Line"
integer(i4b), parameter :: ipType=IP_EQUIDISTANCE
```

!!! note "Order=1"

```fortran
  order=1
  call obj%Initiate(elemType=elemType, order=order, ipType=ipType)
  call obj%Display( elemName // "order=" //tostring(order) )
```

!!! example "result"

```txt
ReferenceElement=
element type : Line2
xidimension :: 1
nsd : 1
nsd=1
order=1
feType=1
ipType=1
dofType=
--------
1
1
1
1
transformType=1

order=1
Total Basis=2
N(1)=+0.5x^0-0.5x^1
N(2)=+0.5x^0+0.5x^1
```

$$
N(1)=+0.5x^0-0.5x^1
$$

$$
N(2)=+0.5x^0+0.5x^1
$$

!!! note "Order=2"

```fortran
  order=2
  call blanklines(nol=3)
  call obj%Initiate(elemType=elemType, order=order, ipType=ipType)
  call obj%Display( elemName // "order=" //tostring(order) )
````

!!! example "result"

order=2
Total Basis=3

$$
N(1)=-0.5x^1+0.5x^2
$$

$$
N(2)=+0.5x^1+0.5x^2
$$

$$
N(3)=+1x^0-1x^2
$$

!!! note "Order=3"

```fortran
  order=3
  call blanklines(nol=3)
  call obj%Initiate(elemType=elemType, order=order, ipType=ipType)
  call obj%Display( elemName // "order=" //tostring(order) )
```

!!! example "result"
order=3
Total Basis=4

$$
N(1)=-6.25E-02x^0+6.25E-02x^1+0.5625x^2-0.5625x^3
$$

$$
N(2)=-6.25E-02x^0-6.25E-02x^1+0.5625x^2+0.5625x^3
$$

$$
N(3)=+0.5625x^0-1.6875x^1-0.5625x^2+1.6875x^3
$$

$$
    N(4)=+0.5625x^0+1.6875x^1-0.5625x^2-1.6875x^3
$$

```fortran
END PROGRAM main
```
