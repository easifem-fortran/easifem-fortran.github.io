```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(FiniteElement_) :: fe
TYPE(ParameterList_) :: param
INTEGER(I4B) :: nsd, elemType, order, iptype
CALL FPL_Init
CALL param%Initiate()
nsd = 1_I4B
elemType = Line2
order = 1
iptype = Equidistance
CALL SetFiniteElementParam( &
  & param=param, &
  & nsd=nsd, &
  & elemType=elemType, &
  & baseContinuity="H1", &
  & baseInterpolation="Lagrange", &
  & iptype=iptype, &
  & basisType=[Monomial], &
  & order=order)
CALL fe%Initiate(param)
CALL Display(fe%mdencode(), "")
CALL param%DEALLOCATE()
CALL FPL_Finalize
END PROGRAM main
```

<details>
<summary>See results</summary>
<div>

<Tabs>

<TabItem value="0" label="Finite Element" >

|                        |            |
| ---------------------- | ---------- |
| **nsd**                | 1          |
| **feType**             | 1          |
| **elemType**           | Line2      |
| **ipType**             | 1          |
| **basisType**          | 0, 0, 0    |
| **alpha**              | 0, 0, 0    |
| **beta**               | 0, 0, 0    |
| **lambda**             | 0, 0, 0    |
| **dofType**            | 1, 1, 1, 1 |
| **transformType**      | 1          |
| **baseContinuity**     | H1         |
| **baseInterpolion**    | Lagrange   |
| **refElemDomain**      | BIUNIT     |
| **isIsotropicOrder**   | I          |
| **isAnisotropicOrder** | I          |
| **isEdgeOrder**        | I          |
| **isFaceOrder**        | I          |
| **isCellOrder**        | I          |
| **edgeOrder**          |            |
| **faceOrder**          |            |
| **cellOrder**          |            |

</TabItem>

<TabItem value="1" label="Reference Element" >

|                   |                       |
| ----------------- | --------------------- |
| Element type      | Line2                 |
| Xidimension       | 1                     |
| NSD               | 1                     |
| tPoints           | 2                     |
| tLines            | 1                     |
| tSurfaces         | 0                     |
| tVolumes          | 0                     |
| BaseContinuity    | H1                    |
| BaseInterpolation | LagrangeInterpolation |

Nodal Coordinates:

|     |     |     |
| --- | --- | --- |
| x   | -1  | 1   |

<Tabs>

<TabItem value="1" label="PointTopology( 1 ) :" >

|              |        |
| ------------ | ------ |
| Element type | Point1 |
| Xidimension  | 0      |
| Nptrs        | 1      |

</TabItem>

<TabItem value="2" label="PointTopology( 2 ) :" >

|              |        |
| ------------ | ------ |
| Element type | Point1 |
| Xidimension  | 0      |
| Nptrs        | 2      |

</TabItem>

</Tabs>

<Tabs>

<TabItem value="1" label="EdgeTopology( 1 ) :" >

|              |       |     |
| ------------ | ----- | --- |
| Element type | Line2 |     |
| Xidimension  | 1     |     |
| Nptrs        | 1     | 2   |

</TabItem>

</Tabs>

</TabItem>

</Tabs>

</div>
</details>
