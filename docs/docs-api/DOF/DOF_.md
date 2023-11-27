# Structure

`DOF_` data type contains the information of degrees of freedom in finite element method. It mainly includes the information regarding the storage pattern of degrees of freedom.

Degrees of freedom are space-time components of physical variable. There can be several physical variables such as pressure, velocity, temperature. Now pressure has single degrees of freedom, because it is a scalar whereas velocity can have three degrees of freedom.

In order to understand the storage pattern, and the working-principal of `DOF_` datatype, let us consider a vector $\textbf{v}$ in three dimension space. There are three degrees of freedom at each spatial nodes of the mesh, which corresponds to $v_x, v_y, v_z$. Now, there arises two ways to store the nodal values of the physical variable (here, $\textbf{v}$).

`FMT_DOF` : In this case each component (DOF) of $v$ will be treated as an independent nodal vector. So there are actually three nodal vectors corresponding to the spatial components $v_x, v_y, v_z$. We will use uppercase letter to denote the spatial nodal values. In this way, each of $V_x, V_y, V_z$ are nodal values of spatial component of a physical variable ($v$). One can appreciate the fact that `FMT_DOF` format is flexible, because, each nodal vector can have different length.

`FMT_Nodes`: In this case all the components of $v$ are grouped together and values are defined at each node of the mesh. At each node, DOFs (spatial components) form a small vector. So the nodal values of $v$ are defined as a nodal vector of these small vectors.

![DOF1](figures/DOF1.svg)

Further, to understand how storage pattern works in the case of multi-variables, let us consider an example in which we have pressure and velocity as the physical variables. Note that velocity is a vector and pressure is scalar physical variable. These storage patterns are given in following figure.

![DOF2](figures/DOF2.svg)

Following code can be used to define an instance of `DOF_`. Note that each physical variable contains two components in the time domain.

```fortran
obj = dof( tNodes = [20, 10], Names = ['V', 'P'], SpaceCompo = [3, 1], &
  & Timecompo = [2, 2], StorageFMT = FMT_DOF )
```

In this case velocity has 20 nodes and pressure has 10 nodes. There are 3 space components and 2 time components in the velocity.

In the case of `FMT_DOF`, the degrees of freedom will be represented as shown in above figure. Each term in `{}` denotes a nodal vector of DOF (i.e., v11, v12, p1, p2, etc.). Note that, in this representation both V and P can have different order of interpolation. For example, velocity can be quadratic and pressure can be linear. Needless to state, this yields a block-structured tangent matrix.

Now consider the following case to understand `FMT_Nodes` :

```fortran
obj = dof( tNodes = [10], Names = ['V'], SpaceCompo = [3], &
  & Timecompo = [2], StorageFMT = FMT_NODES )
```

In this case degrees of freedom are stored as shown in above figure.

:::note `FMT_Nodes` vs `FMT_DOF`
In the case of `FMT_Nodes` all physical variables should have same order of interpolation in space and time domain. However, in the case of `FMT_DOF`, they can have different order of interpolation.
:::

## Structure

The structure of `DOF_` is given below.

```fortran
TYPE :: DOF_
  INTEGER( I4B ), ALLOCATABLE :: map( :, : )
    !! Encapsulation of information of DOF
  INTEGER( I4B ), ALLOCATABLE :: valMap( : )
    !! Val map
  INTEGER( I4B ) :: storageFMT = FMT_NODES
    !! Storage format
END TYPE DOF_
```

To understand the structure of `Map` let us generate a `DOF_` object using following code.

```fortran
obj = dof( tNodes = [20, 10], Names = ['V', 'P'], SpaceCompo = [3, -1], &
  & Timecompo = [2, 2], StorageFMT = DOF_FMT )
```

In this case `MAP` is given by following table:

| ICHAR | SpaceCompo | TimeCompo | tDOF | Indx | total Nodes |
| ----- | ---------- | --------- | ---- | ---- | ----------- |
| 86    | 3          | 2         | 6    | 1    | 20          |
| 80    | -1         | 2         | 2    | 7    | 10          |
| 0     | 0          | 0         | 8    | 9    | 140         |
|       |            |           |      |      |             |

- Column 1 of `MAP` denotes the name of physical variable; only unit length characters are allowed in physical names as we save the names in ASCII format
- Column 2 of `MAP` denotes space component in the physical variable
- Column 3 denotes time components in the physical variable
- Column 4 denotes total number of degrees of freedom in each physical variable, it is equal to the spaceCompo x timeCompo
- Column 5 denotes the starting position of physical name; in this way, components of a physical name, `V` are stored from 1 to 6
- Column 6 denotes the total number of spatial nodes in the components of a physical name
