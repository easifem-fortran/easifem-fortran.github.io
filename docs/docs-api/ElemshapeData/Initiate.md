# Initiate

We can construct an instance of `ElemshapeData` by using a generic method called `Initiate()`. There are several ways to construct the instance. You can learn about this method from following examples.

Interface-1:

```fortran
  MODULE SUBROUTINE Initiate(obj, quad, refElem, continuityType, &
    & interpolType)
    CLASS(ElemshapeData_), INTENT(INOUT) :: obj
    !! ElemshapeData to be formed
    CLASS(QuadraturePoint_), INTENT(IN) :: quad
    !! Quadrature points
    CLASS(ReferenceElement_), INTENT(IN) :: refelem
    !! reference element
    CHARACTER(LEN=*), INTENT(IN) :: continuityType
    !! continuity/ conformity of shape function
    CHARACTER(LEN=*), INTENT(IN) :: interpolType
    !! interpolation/polynomial family type
  END SUBROUTINE Initiate
```

Interface-2:

```fortran
  MODULE SUBROUTINE Initiate( obj1, obj2 )
    TYPE(ElemshapeData_), INTENT( INOUT ) :: obj1
    TYPE(ElemshapeData_), INTENT( IN ) :: obj2
  END SUBROUTINE Initiate
```

In interface-2, we copy an instance of ElemshapeData into another instance of same class. This method is used for extending the [[#Assignment(=)]] operator.

Interface-3:

```fortran
  MODULE PURE SUBROUTINE Initiate(obj, elemsd)
    TYPE(STElemshapeData_), ALLOCATABLE, INTENT(INOUT) :: obj(:)
    TYPE(ElemshapeData_), INTENT(IN) :: elemsd
    !! It has information about location shape function for time element
  END SUBROUTINE Initiate
```

- This subroutine initiates the shape-function data related to time domain in the instance of STElemshapeData_.
- User should provide an instance of Elemshapedata_ elemsd,
- The `elemsd`, actually contains the information of the shape-function in the time domain
- The shape-function data in the time domain is
  - $T$
  - $\frac{dT}{d\theta}$
- This routine uses `elemsd` to  set `obj%T`, `obj%dTdTheta`, `obj%Jt`, `obj%Wt`, `obj%Theta`.

### Assignment(=)

```fortran
  MODULE SUBROUTINE Initiate( obj1, obj2 )
    TYPE(ElemshapeData_), INTENT( INOUT ) :: obj1
    TYPE(ElemshapeData_), INTENT( IN ) :: obj2
  END SUBROUTINE Initiate
```

```fortran
  MODULE SUBROUTINE Initiate( obj1, obj2 )
    TYPE(ElemshapeData_), INTENT( INOUT ) :: obj1
    TYPE(STElemshapeData_), INTENT( IN ) :: obj2
  END SUBROUTINE Initiate
```

```fortran
  MODULE SUBROUTINE Initiate( obj1, obj2 )
    TYPE(STElemshapeData_), INTENT( INOUT ) :: obj1
    TYPE(ElemshapeData_), INTENT( IN ) :: obj2
  END SUBROUTINE Initiate
```

```fortran
  MODULE SUBROUTINE Initiate( obj1, obj2 )
    TYPE(STElemshapeData_), INTENT( INOUT ) :: obj1
    TYPE(STElemshapeData_), INTENT( IN ) :: obj2
  END SUBROUTINE Initiate
```


## Example: shape functions on line element 

<Tabs>
<TabItem value="example" label="️Lagrange polynomial">

import EXAMPLE85 from "./_Initiate_test_1a.md";

<EXAMPLE85 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
